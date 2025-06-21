import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';

export async function GET(request: NextRequest) {
  console.log('🔍 Geo API called');
  
  // Get geo data from Vercel geolocation function
  const geo = geolocation(request);
  console.log('🌍 Geolocation result:', geo);
  
  // Also get from headers (fallback)
  const vercelHeaders = {
    'x-vercel-ip-country': request.headers.get('x-vercel-ip-country'),
    'x-vercel-ip-city': request.headers.get('x-vercel-ip-city'),
    'x-vercel-ip-country-region': request.headers.get('x-vercel-ip-country-region'),
    'x-vercel-ip-latitude': request.headers.get('x-vercel-ip-latitude'),
    'x-vercel-ip-longitude': request.headers.get('x-vercel-ip-longitude'),
    'x-vercel-ip-timezone': request.headers.get('x-vercel-ip-timezone'),
  };
  
  // Development simulation based on Accept-Language
  const acceptLanguage = request.headers.get('accept-language') || '';
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  let simulatedGeo = null;
  let finalCountry = null;
  
  if (isDevelopment) {
    if (acceptLanguage.includes('tr')) {
      simulatedGeo = { 
        city: 'Istanbul',
        country: 'TR',
        countryRegion: 'TR-34',
        region: '34',
        latitude: '41.0082',
        longitude: '28.9784',
        postalCode: '34000',
        flag: '🇹🇷',
        timezone: 'Europe/Istanbul'
      };
      finalCountry = 'TR';
    } else if (acceptLanguage.includes('de')) {
      simulatedGeo = { 
        city: 'Berlin',
        country: 'DE',
        countryRegion: 'DE-BE',
        region: 'BE',
        latitude: '52.5200',
        longitude: '13.4050',
        postalCode: '10115',
        flag: '🇩🇪',
        timezone: 'Europe/Berlin'
      };
      finalCountry = 'DE';
    } else {
      simulatedGeo = { 
        city: 'New York',
        country: 'US',
        countryRegion: 'US-NY',
        region: 'NY',
        latitude: '40.7128',
        longitude: '-74.0060',
        postalCode: '10001',
        flag: '🇺🇸',
        timezone: 'America/New_York'
      };
      finalCountry = 'US';
    }
  } else {
    // Production: use real geo data
    finalCountry = geo?.country || vercelHeaders['x-vercel-ip-country'] || null;
  }

  const geoData = {
    // From Vercel geolocation function (will be empty in development)
    vercelGeo: geo,
    // From headers (will be empty in development)
    headers: {
      country: vercelHeaders['x-vercel-ip-country'],
      city: vercelHeaders['x-vercel-ip-city'],
      region: vercelHeaders['x-vercel-ip-country-region'],
    },
    // Simulated for development
    simulated: isDevelopment ? simulatedGeo : null,
    // Effective geo data (simulated in dev, real in prod)
    effective: isDevelopment && simulatedGeo ? {
      city: simulatedGeo.city,
      country: simulatedGeo.country,
      countryRegion: simulatedGeo.countryRegion,
      region: simulatedGeo.region,
      latitude: simulatedGeo.latitude,
      longitude: simulatedGeo.longitude,
      postalCode: simulatedGeo.postalCode,
      flag: simulatedGeo.flag,
      timezone: simulatedGeo.timezone
    } : {
      city: geo?.city || vercelHeaders['x-vercel-ip-city'],
      country: geo?.country || vercelHeaders['x-vercel-ip-country'],
      countryRegion: geo?.countryRegion || vercelHeaders['x-vercel-ip-country-region'],
      region: geo?.region,
      latitude: geo?.latitude || vercelHeaders['x-vercel-ip-latitude'],
      longitude: geo?.longitude || vercelHeaders['x-vercel-ip-longitude'],
      postalCode: geo?.postalCode,
      flag: geo?.flag,
      timezone: vercelHeaders['x-vercel-ip-timezone']
    },
    // Environment info
    environment: process.env.NODE_ENV,
    isDevelopment,
    // Language info
    acceptLanguage,
    // Vercel specific headers
    vercelHeaders,
    // Final country that middleware would use
    finalCountry,
  };

  console.log('📤 Returning geo data:', geoData);

  return NextResponse.json(geoData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
