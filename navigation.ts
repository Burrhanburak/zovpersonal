import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'tr', 'de', 'nl', 'bg', 'hr', 'ro', 'sr'] as const;
export const defaultLocale = 'en';
export const localePrefix = 'always';

// The `pathnames` object holds pairs of internal names and translated paths.
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/contact': '/contact',
  '/services': '/services',
  '/test': '/test',
  '/profession-process': '/profession-process'
  //   '/': {
  //   en: '/',
  //   tr: '/',
  //   de: '/'
  // },
  // '/about': {
  //   en: '/about',
  //   tr: '/hakkimizda',
  //   de: '/uber-uns'
  // },
  // '/contact': {
  //   en: '/contact',
  //   tr: '/iletisim',
  //   de: '/kontakt'
  // },
  // '/services': {
  //   en: '/services',
  //   tr: '/hizmetler',
  //   de: '/dienstleistungen'
  // },
  // '/test': {
  //   en: '/test',
  //   tr: '/test',
  //   de: '/test'
  // },
  // '/profession-process': {
  //   en: '/profession-process',
  //   tr: '/meslek-surecleri',
  //   de: '/berufsprozesse'
  // }
} satisfies Record<string, string>;

export const {Link, redirect, usePathname, useRouter, getPathname} = createLocalizedPathnamesNavigation({
  locales, 
  pathnames,
  localePrefix
});