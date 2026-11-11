// app/api/geo/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const isDevelopment = process.env.NODE_ENV === 'development';
  const geo = geolocation(request); // Canlıda çalışır, yerelde 'dev1' döner
  const vercelCountryHeader = request.headers.get('x-vercel-ip-country');
  const overrideCountry = url.searchParams.get('country');

  let finalCountry: string | null = null;
  let source: string = 'unknown';

  if (overrideCountry) {
    finalCountry = overrideCountry.toUpperCase();
    source = 'URL Override (Test)';
  } else if (vercelCountryHeader) {
    finalCountry = vercelCountryHeader;
    source = 'Vercel Header (Production)';
  } else {
    // IP alınamazsa varsayılan İngilizce (US)
    finalCountry = 'US';
    source = isDevelopment
      ? 'Default Fallback (Dev - no IP)'
      : 'Default Fallback (Production - no IP)';
  }

  const responseData = {
    finalCountry,
    source,
    isDevelopment,
    override: overrideCountry,
    environment: process.env.NODE_ENV,
    vercelGeo: geo,
    vercelHeaders: {
      'x-vercel-ip-country': vercelCountryHeader,
      'x-vercel-ip-city': request.headers.get('x-vercel-ip-city') || geo.city,
    },
    acceptLanguage: request.headers.get('accept-language'),
  };

  return NextResponse.json(responseData, { headers: { 'Cache-Control': 'no-store' } });
}