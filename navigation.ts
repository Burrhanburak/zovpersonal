/** @deprecated Import from `@/i18n/navigation` — kept for backward compatibility */
export {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
  locales,
  defaultLocale,
  localePrefix,
  routing,
} from './i18n/navigation';

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/contact': '/contact',
  '/services': '/services',
  '/blog': '/blog',
  '/test': '/test',
  '/profession-process': '/profession-process',
} as const;
