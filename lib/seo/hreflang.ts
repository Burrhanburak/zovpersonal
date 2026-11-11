const BASE_URL = 'https://zovpersonal.com';
export const SEO_LOCALES = ['en', 'tr', 'de', 'nl', 'bg', 'hr', 'ro', 'sr'] as const;

/** Build hreflang map for a locale-prefixed pathname */
export function hreflangLanguages(pathname: string): Record<string, string> {
  const segments = pathname.split('/').filter(Boolean);
  const pagePath =
    segments.length > 1 ? '/' + segments.slice(1).join('/') : '';

  const languages: Record<string, string> = {
    'x-default': `${BASE_URL}/en${pagePath}`,
  };
  for (const code of SEO_LOCALES) {
    languages[code] = `${BASE_URL}/${code}${pagePath}`;
  }
  return languages;
}

export function hreflangAlternates(pathname: string) {
  return SEO_LOCALES.map((code) => {
    const segments = pathname.split('/').filter(Boolean);
    const pagePath =
      segments.length > 1 ? '/' + segments.slice(1).join('/') : '';
    return {
      hreflang: code,
      href: `${BASE_URL}/${code}${pagePath}`,
    };
  });
}
