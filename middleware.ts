import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'tr', 'de', 'nl', 'bg', 'hr', 'ro', 'sr'];
const defaultLocale = 'en';

function getLocaleFromRequest(request: NextRequest): string {
  const url = new URL(request.url);

  // 1. ÖNCELİK: YERELDE TEST için URL parametresi
  const overrideCountry = url.searchParams.get('country');
  if (overrideCountry) {
    const country = overrideCountry.toUpperCase();
    console.log('🎯 URL Override detected:', country);
    if (country === 'TR') return 'tr';
    if (['DE', 'AT', 'CH'].includes(country)) return 'de';
    if (country === 'NL') return 'nl';
    if (country === 'BG') return 'bg';
    if (country === 'HR') return 'hr';
    if (country === 'RO') return 'ro';
    if (['RS', 'ME'].includes(country)) return 'sr'; // Serbia and Montenegro
    if (['US', 'GB', 'CA'].includes(country)) return 'en';
  }

  // 2. ÖNCELİK: CANLI ORTAM için Vercel coğrafi IP başlığı
  const vercelCountry = request.headers.get('x-vercel-ip-country');
  if (vercelCountry) {
    const country = vercelCountry.toUpperCase();
    console.log('🌍 Vercel Country detected:', country);
    if (country === 'TR') return 'tr';
    if (['DE', 'AT', 'CH'].includes(country)) return 'de';
    if (country === 'NL') return 'nl';
    if (country === 'BG') return 'bg';
    if (country === 'HR') return 'hr';
    if (country === 'RO') return 'ro';
    if (['RS', 'ME'].includes(country)) return 'sr'; // Serbia and Montenegro
  }

  // 3. ÖNCELİK: Geri dönüş olarak tarayıcı dili
  const acceptLanguage = request.headers.get('accept-language') || '';
  console.log('🗣️ Accept-Language:', acceptLanguage);
  if (acceptLanguage.startsWith('tr')) return 'tr';
  if (acceptLanguage.startsWith('de')) return 'de';
  if (acceptLanguage.startsWith('nl')) return 'nl';
  if (acceptLanguage.startsWith('bg')) return 'bg';
  if (acceptLanguage.startsWith('hr')) return 'hr';
  if (acceptLanguage.startsWith('ro')) return 'ro';
  if (acceptLanguage.startsWith('sr')) return 'sr';

  // 4. ÖNCELİK: Varsayılan dil
  console.log('🔄 Falling back to default locale:', defaultLocale);
  return defaultLocale;
}

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip locale detection for API routes and static files
  if (pathname.startsWith('/api') || 
      pathname.startsWith('/_next') || 
      pathname.includes('.') ||
      pathname.startsWith('/favicon')) {
    return NextResponse.next();
  }
  
  // For the root path, redirect based on geo-detection
  if (pathname === '/') {
    const detectedLocale = getLocaleFromRequest(request);
    console.log('🔀 Redirecting root to locale:', detectedLocale);
    
    const redirectUrl = new URL(`/${detectedLocale}`, request.url);
    
    // Preserve URL parameters
    const overrideCountry = request.nextUrl.searchParams.get('country');
    if (overrideCountry) {
      redirectUrl.searchParams.set('country', overrideCountry);
    }
    
    return NextResponse.redirect(redirectUrl);
  }
  
  // For paths without locale prefix, redirect to detected locale
  if (!locales.some(locale => pathname.startsWith(`/${locale}`))) {
    const detectedLocale = getLocaleFromRequest(request);
    console.log('🔀 Adding locale prefix:', detectedLocale);
    
    const redirectUrl = new URL(`/${detectedLocale}${pathname}`, request.url);
    
    // Preserve URL parameters
    const overrideCountry = request.nextUrl.searchParams.get('country');
    if (overrideCountry) {
      redirectUrl.searchParams.set('country', overrideCountry);
    }
    
    return NextResponse.redirect(redirectUrl);
  }
  
  // Check for country override and redirect if locale doesn't match
  const overrideCountry = request.nextUrl.searchParams.get('country');
  if (overrideCountry) {
    const country = overrideCountry.toUpperCase();
    let expectedLocale = '';
    
    if (country === 'TR') expectedLocale = 'tr';
    else if (['DE', 'AT', 'CH'].includes(country)) expectedLocale = 'de';
    else if (country === 'NL') expectedLocale = 'nl';
    else if (country === 'BG') expectedLocale = 'bg';
    else if (country === 'HR') expectedLocale = 'hr';
    else if (country === 'RO') expectedLocale = 'ro';
    else if (['RS', 'ME'].includes(country)) expectedLocale = 'sr'; // Serbia and Montenegro
    else if (['US', 'GB', 'CA'].includes(country)) expectedLocale = 'en';
    
    if (expectedLocale) {
      const currentLocale = pathname.split('/')[1];
      
      if (currentLocale !== expectedLocale) {
        console.log('🔄 Override redirect: from', currentLocale, 'to', expectedLocale);
        const newUrl = new URL(`/${expectedLocale}`, request.url);
        newUrl.searchParams.set('country', overrideCountry);
        return NextResponse.redirect(newUrl);
      }
    }
  }
  
  // Let next-intl handle the rest
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
