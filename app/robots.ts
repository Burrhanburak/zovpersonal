import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const disallow = ['/api/', '/_next/', '/admin/', '/private/', '/test/'];
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [...disallow, '*.json'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow,
      },
      // AI / GEO crawlers — allow public content + llms.txt
      {
        userAgent: 'GPTBot',
        allow: ['/', '/llms.txt'],
        disallow,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/llms.txt'],
        disallow,
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/llms.txt'],
        disallow,
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/llms.txt'],
        disallow,
      },
    ],
    sitemap: 'https://zovpersonal.com/sitemap.xml',
    host: 'https://zovpersonal.com',
  };
} 