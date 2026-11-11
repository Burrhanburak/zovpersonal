'use client';

import { Link, useRouter } from '@/i18n/navigation';
import {
  ComponentProps,
  MouseEvent,
  useEffect,
  useRef,
  useCallback,
} from 'react';

type PrefetchImage = {
  srcset: string;
  sizes: string;
  src: string;
  alt: string;
  loading: string;
};

const seen = new Set<string>();
const imageCache = new Map<string, PrefetchImage[]>();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPrefetchImages(href: string): Promise<PrefetchImage[]> {
  if (!href.startsWith('/') || href === '/') return [];
  try {
    const url = new URL(href, window.location.href);
    const res = await fetch(`/api/prefetch-images${url.pathname}`, {
      // Chromium supports fetch priority hints
      ...({ priority: 'low' } as RequestInit),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.images || []) as PrefetchImage[];
  } catch {
    return [];
  }
}

function prefetchImage(image: PrefetchImage) {
  if (image.loading === 'lazy' || seen.has(image.srcset || image.src)) return;
  const img = new window.Image();
  img.decoding = 'async';
  img.fetchPriority = 'low';
  if (image.sizes) img.sizes = image.sizes;
  seen.add(image.srcset || image.src);
  if (image.srcset) img.srcset = image.srcset;
  img.src = image.src;
}

type PrefetchLinkProps = ComponentProps<typeof Link>;

/** NextFaster-style link: viewport route + image prefetch */
export default function PrefetchLink({
  children,
  prefetch = true,
  className,
  href,
  ...props
}: PrefetchLinkProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();
  const hrefStr = String(href);

  useEffect(() => {
    if (prefetch === false) return;
    const el = wrapRef.current;
    if (!el) return;

    let timeout: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          timeout = setTimeout(async () => {
            router.prefetch(hrefStr as never);
            await sleep(0);
            if (!imageCache.has(hrefStr)) {
              void fetchPrefetchImages(hrefStr).then((images) => {
                imageCache.set(hrefStr, images);
              });
            }
            observer.unobserve(entry.target);
          }, 300);
        } else if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [hrefStr, prefetch, router]);

  const warmImages = useCallback(() => {
    router.prefetch(hrefStr as never);
    for (const image of imageCache.get(hrefStr) || []) prefetchImage(image);
  }, [hrefStr, router]);

  const onMouseDown = (e: MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(hrefStr, window.location.href);
    if (
      url.origin === window.location.origin &&
      e.button === 0 &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.metaKey &&
      !e.shiftKey
    ) {
      e.preventDefault();
      router.push(hrefStr as never);
    }
    props.onMouseDown?.(e);
  };

  return (
    <span ref={wrapRef} className="contents">
      <Link
        href={href}
        prefetch={false}
        className={className}
        onMouseEnter={warmImages}
        onMouseDown={onMouseDown}
        {...props}
      >
        {children}
      </Link>
    </span>
  );
}
