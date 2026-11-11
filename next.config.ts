import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.zovpersonal.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-8cb1b9c20d6c4ccc8739ae41bb8ffb72.r2.dev',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: '/:locale(en|tr|de|nl|bg|hr|ro|sr)/:path*',
        headers: [
          {
            key: 'X-Locale',
            value: ':locale',
          },
        ],
      },
      {
        source: '/messages/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
