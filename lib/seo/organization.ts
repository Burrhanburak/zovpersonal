import { assetUrl } from '@/lib/assets';

const BASE_URL = 'https://zovpersonal.com';

export function organizationSchema(locale: string, messages?: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZovPersonal',
    url: `${BASE_URL}/${locale}`,
    logo: `${BASE_URL}/logo.svg`,
    image: assetUrl('zovpersonal.webp'),
    description:
      messages?.metadata?.description ||
      'International recruitment and employer partnership services',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Brückstraße 59',
      addressLocality: 'Emden',
      postalCode: '26725',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+4915127027836',
      email: 'info@zovpersonal.com',
      contactType: 'customer service',
      availableLanguage: ['en', 'tr', 'de', 'nl', 'bg', 'hr', 'ro', 'sr'],
    },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  locale: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.locale,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    image: opts.image || assetUrl('zovpersonal.webp'),
    author: {
      '@type': 'Organization',
      name: 'ZovPersonal',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZovPersonal',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: opts.url,
  };
}
