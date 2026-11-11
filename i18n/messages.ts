import type { AppLocale } from './routing';

/**
 * Namespace-aware message loader.
 * - Default: full countries/{locale}.json
 * - MESSAGES_USE_NAMESPACES=true: merge selected namespaces from messages/{locale}
 * - MESSAGES_FROM_R2=true: fetch gzipped JSON from R2 CDN
 */
export async function loadMessages(
  locale: string,
  namespaces?: string[]
) {
  const appLocale = locale as AppLocale;

  const remoteBase = process.env.NEXT_PUBLIC_R2_URL;
  if (remoteBase && process.env.MESSAGES_FROM_R2 === 'true') {
    try {
      const res = await fetch(`${remoteBase}/messages/${appLocale}.json`, {
        next: { revalidate: 86400 },
        headers: { 'Accept-Encoding': 'gzip, br' },
      });
      if (res.ok) {
        const all = (await res.json()) as Record<string, unknown>;
        if (namespaces?.length) return pick(all, namespaces);
        return all;
      }
    } catch {
      // fall through
    }
  }

  if (process.env.MESSAGES_USE_NAMESPACES === 'true' && namespaces?.length) {
    const picked: Record<string, unknown> = {};
    await Promise.all(
      namespaces.map(async (ns) => {
        try {
          const mod = await import(`../messages/${appLocale}/${ns}.json`);
          picked[ns] = mod.default;
        } catch {
          // ignore missing ns
        }
      })
    );
    return picked;
  }

  try {
    const all = (await import(`../countries/${appLocale}.json`)).default as Record<
      string,
      unknown
    >;
    if (namespaces?.length) return pick(all, namespaces);
    return all;
  } catch {
    return (await import(`../countries/en.json`)).default;
  }
}

export async function loadMessageNamespaces(
  locale: string,
  namespaces: string[]
) {
  return loadMessages(locale, namespaces);
}

function pick(all: Record<string, unknown>, namespaces: string[]) {
  const picked: Record<string, unknown> = {};
  for (const ns of namespaces) {
    if (ns in all) picked[ns] = all[ns];
  }
  return picked;
}
