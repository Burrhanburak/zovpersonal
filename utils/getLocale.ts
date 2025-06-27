import { headers } from 'next/headers';

// Geo-location mapping based on country codes
const countryToLocale: Record<string, string> = {
  'TR': 'tr',
  'DE': 'de',
  'AT': 'de',
  'CH': 'de',
  'US': 'en',
  'GB': 'en',
  'CA': 'en',
  'AU': 'en',
  'RS': 'sr',
};

export async function getLocaleFromGeo(): Promise<string> {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country') || '';
  
  return countryToLocale[country] || 'en';
}

export async function getPreferredLocale(): Promise<string> {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Parse accept-language header
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase());
  
  // Check if preferred language is supported
  const supportedLocales = ['en', 'tr', 'de', 'sr', 'ro', 'bg', 'hr', 'nl', 'sr'];
  for (const lang of languages) {
    if (supportedLocales.includes(lang)) {
      return lang;
    }
    // Check language code without region (e.g., 'en' from 'en-US')
    const langCode = lang.split('-')[0];
    if (supportedLocales.includes(langCode)) {
      return langCode;
    }
  }
  
  return 'en';
}

export async function getBestLocale(): Promise<string> {
  const geoLocale = await getLocaleFromGeo();
  const preferredLocale = await getPreferredLocale();
  
  // Prioritize geo-location if available, otherwise use browser preference
  return geoLocale !== 'en' ? geoLocale : preferredLocale;
}
