import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'tr', 'de', 'nl', 'bg', 'hr', 'ro', 'sr'] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = 'en';
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always',
  // We handle geo/IP ourselves in proxy.ts — never use Accept-Language
  localeDetection: false,
  localeCookie: {
    name: LOCALE_COOKIE,
    maxAge: 60 * 60 * 24 * 365,
  },
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/contact': '/contact',
    '/services': '/services',
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/test': '/test',
    '/profession-process': '/profession-process',
    '/employer': '/employer',
    '/job-seeker': '/job-seeker',
  },
});

/** Map ISO country codes → app locales */
export const countryToLocale: Record<string, AppLocale> = {
  TR: 'tr',
  DE: 'de',
  AT: 'de',
  CH: 'de',
  NL: 'nl',
  BG: 'bg',
  HR: 'hr',
  RO: 'ro',
  RS: 'sr',
  ME: 'sr',
  US: 'en',
  GB: 'en',
  CA: 'en',
  AU: 'en',
};

export function isAppLocale(value: string | undefined | null): value is AppLocale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function localeFromCountry(country: string | null | undefined): AppLocale {
  if (!country) return defaultLocale;
  const code = country.toUpperCase();
  if (code === 'XX' || code === 'T1' || code === 'UNKNOWN') return defaultLocale;
  return countryToLocale[code] ?? defaultLocale;
}
