import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';

const locales = ['en', 'tr', 'de'];
const defaultLocale = 'en';

function getLocaleFromRequest(request: NextRequest): string {
  // 1. Vercel geo-location in production
  if (process.env.NODE_ENV === 'production') {
    const geo = geolocation(request);
    const country = geo?.country?.toUpperCase();
    if (country === 'TR') return 'tr';
    if (country === 'DE' || country === 'AT' || country === 'CH') return 'de';
  }

  // 2. Fallback to accept-language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  if (process.env.NODE_ENV === 'development') {
    // In development, simulate geo-location from accept-language
    if (acceptLanguage.includes('tr')) return 'tr';
    if (acceptLanguage.includes('de')) return 'de';
  }
  
  for (const lang of acceptLanguage.split(',')) {
    const locale = lang.split(';')[0].trim().toLowerCase();
    if (locales.includes(locale)) {
      return locale;
    }
    const baseLocale = locale.split('-')[0];
    if (locales.includes(baseLocale)) {
      return baseLocale;
    }
  }

  // 3. Return default locale
  return defaultLocale;
}

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  console.log('🔀 Middleware - Processing pathname:', pathname);
  
  // Skip locale detection for API routes and static files
  if (pathname.startsWith('/api') || 
      pathname.startsWith('/_next') || 
      pathname.includes('.') ||
      pathname.startsWith('/favicon')) {
    console.log('🔀 Middleware - Skipping for:', pathname);
    return NextResponse.next();
  }
  
  // For the root path, redirect based on geo-detection
  if (pathname === '/') {
    const detectedLocale = getLocaleFromRequest(request);
    console.log('🔀 Middleware - Redirecting root to locale:', detectedLocale);
    return NextResponse.redirect(new URL(`/${detectedLocale}`, request.url));
  }
  
  // For paths without locale prefix, redirect to default locale
  if (!locales.some(locale => pathname.startsWith(`/${locale}`))) {
    const detectedLocale = getLocaleFromRequest(request);
    console.log('🔀 Middleware - Adding locale prefix to:', pathname, 'with locale:', detectedLocale);
    return NextResponse.redirect(new URL(`/${detectedLocale}${pathname}`, request.url));
  }
  
  // Let next-intl handle the locale routing
  console.log('🔀 Middleware - Passing to intlMiddleware for:', pathname);
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|de|en)/:path*', '/:path((?!api|_next/static|_next/image|favicon.ico).*)']
};
