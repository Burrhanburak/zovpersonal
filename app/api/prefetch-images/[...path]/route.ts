import { NextRequest, NextResponse } from 'next/server';
import { assetUrl } from '@/lib/assets';

/**
 * Returns above-the-fold images for a given locale path (NextFaster pattern).
 * Keep this map small — only LCP / hero assets.
 */
const PAGE_IMAGES: Record<string, { src: string; sizes: string; alt: string }[]> = {
  '': [
    { src: assetUrl('zovpersonal.webp'), sizes: '100vw', alt: 'ZovPersonal' },
  ],
  about: [
    { src: assetUrl('experience-team.jpg'), sizes: '(max-width: 1024px) 100vw, 400px', alt: 'Team' },
  ],
  services: [
    { src: assetUrl('ise-alım.png'), sizes: '(max-width: 1024px) 100vw, 50vw', alt: 'Services' },
  ],
  contact: [
    { src: assetUrl('contacti.png'), sizes: '(max-width: 1024px) 100vw, 555px', alt: 'Contact' },
  ],
  employer: [
    { src: assetUrl('isarayanıi.png'), sizes: '100vw', alt: 'Employer' },
  ],
  'job-seeker': [
    { src: assetUrl('is-arayan-twos.png'), sizes: '100vw', alt: 'Job seeker' },
  ],
  blog: [],
};

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  // path like ['en'] or ['en','about']
  const segments = path || [];
  const pageKey = segments.length <= 1 ? '' : segments.slice(1).join('/');
  const baseKey = pageKey.split('/')[0] || '';

  const images = (PAGE_IMAGES[pageKey] || PAGE_IMAGES[baseKey] || []).map((img) => ({
    src: img.src,
    srcset: img.src,
    sizes: img.sizes,
    alt: img.alt,
    loading: 'eager',
  }));

  return NextResponse.json(
    { images },
    {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    }
  );
}
