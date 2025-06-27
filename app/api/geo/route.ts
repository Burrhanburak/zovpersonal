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
  } else if (isDevelopment) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    if (acceptLanguage.startsWith('tr')) finalCountry = 'TR';
    else if (acceptLanguage.startsWith('de')) finalCountry = 'DE';
    else finalCountry = 'US';
    source = 'Accept-Language Fallback (Dev)';
  } else {
    finalCountry = 'US'; // Canlıda hiçbir şey bulunamazsa varsayılan
    source = 'Default Fallback (Production)';
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