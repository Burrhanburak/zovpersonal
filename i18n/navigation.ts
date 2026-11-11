import { createNavigation } from 'next-intl/navigation';
import { routing, locales, defaultLocale } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export { locales, defaultLocale, routing };
export const localePrefix = 'always' as const;
