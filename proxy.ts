import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import {
  routing,
  LOCALE_COOKIE,
  defaultLocale,
  isAppLocale,
  localeFromCountry,
  type AppLocale,
} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
export const LOCALE_MANUAL_COOKIE = 'NEXT_LOCALE_MANUAL';

function setLocaleCookie(response: NextResponse, locale: AppLocale) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
  });
}

function countryFromRequest(request: NextRequest): string | null {
  const overrideCountry = request.nextUrl.searchParams.get('country');
  if (overrideCountry) return overrideCountry;

  return (
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    null
  );
}

async function countryFromDevEgress(): Promise<string | null> {
  if (process.env.NODE_ENV === 'production') return null;
  try {
    const res = await fetch('https://1.1.1.1/cdn-cgi/trace', {
      cache: 'no-store',
      signal: AbortSignal.timeout(1500),
    });
    const text = await res.text();
    const match = text.match(/(?:^|\n)loc=([A-Z]{2})(?:\n|$)/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

async function detectLocale(request: NextRequest): Promise<AppLocale> {
  // 1) Test override
  const overrideCountry = request.nextUrl.searchParams.get('country');
  if (overrideCountry) {
    return localeFromCountry(overrideCountry);
  }

  // 2) Manual language switch only — sticky cookie must be intentional
  const manual = request.cookies.get(LOCALE_MANUAL_COOKIE)?.value === '1';
  if (manual) {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    if (isAppLocale(cookieLocale)) {
      return cookieLocale;
    }
  }

  // 3) Geo IP (Vercel / Cloudflare) — no Accept-Language fallback
  const country = countryFromRequest(request) || (await countryFromDevEgress());
  if (country) {
    return localeFromCountry(country);
  }

  // 4) No IP → English
  return defaultLocale;
}

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API / static
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const detectedLocale = await detectLocale(request);
  const hasLocalePrefix = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // Root or missing locale → redirect once with cookie
  if (pathname === '/' || !hasLocalePrefix) {
    const targetPath =
      pathname === '/' ? `/${detectedLocale}` : `/${detectedLocale}${pathname}`;
    const redirectUrl = new URL(targetPath, request.url);

    const overrideCountry = request.nextUrl.searchParams.get('country');
    if (overrideCountry) {
      redirectUrl.searchParams.set('country', overrideCountry);
    }

    const response = NextResponse.redirect(redirectUrl);
    setLocaleCookie(response, detectedLocale);
    return response;
  }

  // Country override forces locale switch
  const overrideCountry = request.nextUrl.searchParams.get('country');
  if (overrideCountry) {
    const expected = localeFromCountry(overrideCountry);
    const currentLocale = pathname.split('/')[1];
    if (currentLocale !== expected) {
      const rest = pathname.split('/').slice(2).join('/');
      const newUrl = new URL(
        rest ? `/${expected}/${rest}` : `/${expected}`,
        request.url
      );
      newUrl.searchParams.set('country', overrideCountry);
      const response = NextResponse.redirect(newUrl);
      setLocaleCookie(response, expected);
      // Override is intentional test — treat like manual
      response.cookies.set(LOCALE_MANUAL_COOKIE, '1', {
        path: '/',
        maxAge: COOKIE_MAX_AGE,
        sameSite: 'lax',
      });
      return response;
    }
  }

  const response = intlMiddleware(request);
  const currentLocale = pathname.split('/')[1];
  if (isAppLocale(currentLocale)) {
    setLocaleCookie(response, currentLocale);
  }
  response.headers.set('x-pathname', pathname);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
