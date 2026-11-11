import { headers, cookies } from 'next/headers';
import {
  LOCALE_COOKIE,
  defaultLocale,
  isAppLocale,
  localeFromCountry,
  type AppLocale,
} from '@/i18n/routing';

export async function getLocaleFromGeo(): Promise<AppLocale> {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country');
  return localeFromCountry(country);
}

export async function getPreferredLocale(): Promise<AppLocale> {
  return defaultLocale;
}

export async function getBestLocale(): Promise<AppLocale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isAppLocale(cookieLocale)) return cookieLocale;
  return getLocaleFromGeo();
}
