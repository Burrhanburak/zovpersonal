/**
 * Asset URL helper — Cloudflare R2 AVIF CDN (cdn.zovpersonal.com).
 * Non-ASCII source names are slugified to ASCII object keys.
 */
const R2_BASE = (
  process.env.NEXT_PUBLIC_R2_URL || 'https://cdn.zovpersonal.com'
).replace(/\/$/, '');

const TR_MAP: Record<string, string> = {
  ı: 'i',
  İ: 'i',
  ş: 's',
  Ş: 's',
  ğ: 'g',
  Ğ: 'g',
  ü: 'u',
  Ü: 'u',
  ö: 'o',
  Ö: 'o',
  ç: 'c',
  Ç: 'c',
  â: 'a',
  î: 'i',
  û: 'u',
};

function slugifyFilename(name: string): string {
  let out = '';
  for (const ch of name) {
    out += TR_MAP[ch] ?? ch;
  }
  out = out.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  const dot = out.lastIndexOf('.');
  const stem = (dot === -1 ? out : out.slice(0, dot))
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return `${stem}.avif`;
}

function toAvifName(path: string): string {
  const clean = path
    .replace(/^\//, '')
    .replace(/^avif\//, '')
    .replace(/^webp\//, '')
    .replace(/^images\//, '');
  return slugifyFilename(clean);
}

/** Resolve an image to optimized AVIF on R2 (or local /avif) */
export function assetUrl(path: string): string {
  const avifName = toAvifName(path);
  if (process.env.NEXT_PUBLIC_USE_LOCAL_ASSETS === 'true') {
    return `/avif/${avifName}`;
  }
  return `${R2_BASE}/images/${avifName}`;
}

export function isRemoteAssets(): boolean {
  return process.env.NEXT_PUBLIC_USE_LOCAL_ASSETS !== 'true';
}

export const R2_PUBLIC_URL = R2_BASE;
