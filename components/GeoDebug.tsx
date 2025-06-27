'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface GeoData {
  vercelGeo?: any;
  headers?: any;
  simulated?: any;
  effective?: any;
  finalCountry?: string;
  environment?: string;
  isDevelopment?: boolean;
  acceptLanguage?: string;
  vercelHeaders?: any;
  override?: string;
}

export default function GeoDebug() {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = pathname.split('/')[1];

  useEffect(() => {
    const fetchGeoData = async () => {
      setIsLoading(true);
      try {
        const countryOverride = searchParams.get('country');
        let apiUrl = `/api/geo`;
        if (countryOverride) {
          apiUrl += `?country=${countryOverride}`;
        }
        
        console.log('🔄 Fetching geo data from:', apiUrl);
        
        const res = await fetch(apiUrl, { cache: 'no-store' });
        const data = await res.json();
        
        console.log('📥 Received geo data:', data);
        
        setGeoData(data);
        setIsLoading(false);
      } catch (err) {
        console.error('❌ Geo API error:', err);
        setIsLoading(false);
      }
    };

    fetchGeoData();
  }, [searchParams]); // searchParams değiştiğinde yeniden çalışır

  const handleRefresh = () => {
    console.log('🔄 Manual refresh triggered');
    window.location.reload();
  };

  const getOverrideUrl = (country: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('country', country);
    return currentUrl.toString();
  };

  // Temporarily show in production for debugging
  // if (process.env.NODE_ENV === 'production') {
  //   return null; // Don't show in production
  // }

  const getStatusColor = (country: string) => {
    if (!country) return 'text-red-400';
    if (country === 'TR') return 'text-green-400';
    if (country === 'DE') return 'text-blue-400';
    return 'text-yellow-400';
  };

  const getExpectedLocale = (country: string) => {
    const mapping: Record<string, string> = {
      'TR': 'tr',
      'DE': 'de',
      'AT': 'de',
      'CH': 'de',
      'US': 'en',
      'GB': 'en',
    };
    return mapping[country] || 'en';
  };

  const isLocaleCorrect = geoData?.finalCountry && 
    getExpectedLocale(geoData.finalCountry) === currentLocale;

  return (
    <div className="fixed bottom-4 right-4 bg-black/95 text-white p-4 rounded-lg text-xs max-w-sm z-50 border border-gray-600 shadow-2xl">
      <div 
        className="font-bold mb-2 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="flex items-center">
          🌍 Geo Debug 
          {isLocaleCorrect ? (
            <span className="ml-2 text-green-400">✅</span>
          ) : (
            <span className="ml-2 text-red-400">❌</span>
          )}
        </span>
        <span className="text-gray-400">{isExpanded ? '▼' : '▶'}</span>
      </div>
      
      {/* Refresh Control */}
      <div className="flex gap-2 mb-3">
        <button 
          onClick={handleRefresh}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 px-2 py-1 rounded text-xs"
        >
          {isLoading ? '⏳' : '🔄'} Refresh
        </button>
      </div>
      
      {isLoading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <div className="space-y-2">
          {/* Status Overview */}
          <div className="bg-gray-800 p-2 rounded">
            <div className="flex justify-between">
              <strong>Current:</strong> 
              <span className="text-cyan-400">{currentLocale}</span>
            </div>
            <div className="flex justify-between">
              <strong>Country:</strong> 
              <span className={getStatusColor(geoData?.finalCountry || '')}>
                {geoData?.finalCountry || 'Unknown'}
              </span>
            </div>
            {geoData?.finalCountry && (
              <div className="flex justify-between">
                <strong>Expected:</strong> 
                <span className="text-yellow-300">
                  {getExpectedLocale(geoData.finalCountry)}
                </span>
              </div>
            )}
          </div>

          {/* Environment Info */}
          <div className="bg-gray-800 p-2 rounded">
            <div className="flex justify-between">
              <strong>Mode:</strong>
              <span className="text-orange-400">{geoData?.environment}</span>
            </div>
            {geoData?.isDevelopment && geoData?.simulated && (
              <div className="text-purple-300 text-xs mt-1">
                🧪 Simulated: {geoData.simulated.country} ({geoData.simulated.city})
              </div>
            )}
          </div>

          {/* Real Headers Data - Production Only */}
          {!geoData?.isDevelopment && (
            <div className="bg-blue-900/30 p-2 rounded border border-blue-600">
              <div className="text-blue-300 font-semibold mb-1">📡 Headers Data:</div>
              <div className="space-y-1 text-xs">
                <div>🌍 Country: <span className="text-white">{geoData?.vercelHeaders?.['x-vercel-ip-country'] || 'Not detected'}</span></div>
                <div>🏙️ City: <span className="text-white">{geoData?.vercelHeaders?.['x-vercel-ip-city'] || 'Not detected'}</span></div>
              </div>
            </div>
          )}

          {/* Effective Geo Data */}
          {geoData?.effective && (
            <div className="bg-green-900/30 p-2 rounded border border-green-600">
              <div className="text-green-300 font-semibold mb-1">📍 Effective Data:</div>
              <div className="space-y-1 text-xs">
                <div>🌆 City: <span className="text-white">{geoData.effective.city || 'N/A'}</span></div>
                <div>🇺🇳 Country: <span className="text-white">{geoData.effective.country || 'N/A'}</span></div>
                <div>📍 Region: <span className="text-white">{geoData.effective.region || 'N/A'}</span></div>
                {geoData.effective.flag && (
                  <div>🏴 Flag: <span className="text-white">{geoData.effective.flag}</span></div>
                )}
              </div>
            </div>
          )}

          {/* Development Country Override */}
          {geoData?.isDevelopment && (
            <div className="bg-yellow-900/30 p-2 rounded border border-yellow-600">
              <div className="text-yellow-300 font-semibold mb-1">🧪 Dev Override:</div>
              <div className="flex gap-1 flex-wrap text-xs">
                <a href={getOverrideUrl('TR')} className="bg-green-600 px-2 py-1 rounded hover:bg-green-500">🇹🇷 Turkey</a>
                <a href={getOverrideUrl('DE')} className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-500">🇩🇪 Germany</a>
                <a href={getOverrideUrl('US')} className="bg-red-600 px-2 py-1 rounded hover:bg-red-500">🇺🇸 USA</a>
                <a href={getOverrideUrl('GB')} className="bg-indigo-600 px-2 py-1 rounded hover:bg-indigo-500">🇬🇧 UK</a>
                <a href={getOverrideUrl('AT')} className="bg-purple-600 px-2 py-1 rounded hover:bg-purple-500">🇦🇹 Austria</a>
                <a href={getOverrideUrl('CH')} className="bg-gray-600 px-2 py-1 rounded hover:bg-gray-500">🇨🇭 Swiss</a>
              </div>
              <div className="text-yellow-200 text-xs mt-2">
                💡 Use ?country=XX parameter to test different countries in development
              </div>
              {geoData?.override && (
                <div className="text-green-300 text-xs mt-1">
                  ✅ Currently overriding with: {geoData.override}
                </div>
              )}
            </div>
          )}

          {/* Quick Test Links */}
          <div className="bg-gray-800 p-2 rounded">
            <div className="text-gray-300 font-semibold mb-1">Quick Test:</div>
            <div className="flex gap-1 flex-wrap">
              <a href="/tr" className="bg-green-600 px-2 py-1 rounded text-xs hover:bg-green-500">TR</a>
              <a href="/en" className="bg-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-500">EN</a>
              <a href="/de" className="bg-purple-600 px-2 py-1 rounded text-xs hover:bg-purple-500">DE</a>
            </div>
          </div>

          {/* Expanded Details */}
          {isExpanded && (
            <>
              {/* Browser Language */}
              <div className="bg-gray-800 p-2 rounded">
                <div className="text-blue-300 font-semibold mb-1">Browser Language:</div>
                <div className="text-xs text-gray-300 truncate">
                  {geoData?.acceptLanguage || 'Not available'}
                </div>
              </div>

              {/* Effective Data Details */}
              <details className="mt-2">
                <summary className="cursor-pointer text-green-300">Effective Geo Data</summary>
                <pre className="mt-2 text-xs bg-gray-900 p-2 rounded overflow-auto max-h-32">
                  {JSON.stringify(geoData?.effective, null, 2)}
                </pre>
              </details>

              {/* Vercel Headers */}
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-300">Vercel Headers</summary>
                <pre className="mt-2 text-xs bg-gray-900 p-2 rounded overflow-auto max-h-32">
                  {JSON.stringify(geoData?.vercelHeaders, null, 2)}
                </pre>
              </details>
            </>
          )}
        </div>
      )}
    </div>
  );
}
