import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { SEO_LOCALES } from '@/lib/seo/hreflang';

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  locale: string;
  alternateSlugs?: Partial<Record<(typeof SEO_LOCALES)[number], string>>;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
  readingMinutes: number;
};

const BLOG_ROOT = path.join(process.cwd(), 'content', 'blog');

export function getBlogLocales() {
  if (!fs.existsSync(BLOG_ROOT)) return [] as string[];
  return fs
    .readdirSync(BLOG_ROOT)
    .filter((d) => fs.statSync(path.join(BLOG_ROOT, d)).isDirectory());
}

export function getPosts(locale: string): BlogPost[] {
  const dir = path.join(BLOG_ROOT, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data, content } = matter(raw);
      const slug = file.replace(/\.mdx?$/, '');
      const stats = readingTime(content);
      return {
        ...(data as BlogFrontmatter),
        slug,
        content,
        readingMinutes: Math.max(1, Math.ceil(stats.minutes)),
      };
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(locale: string, slug: string): BlogPost | null {
  return getPosts(locale).find((p) => p.slug === slug) || null;
}

export function getAllPostPaths() {
  const paths: { locale: string; slug: string }[] = [];
  for (const locale of getBlogLocales()) {
    for (const post of getPosts(locale)) {
      paths.push({ locale, slug: post.slug });
    }
  }
  return paths;
}
