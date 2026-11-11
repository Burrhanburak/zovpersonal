import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost, getPosts } from '@/lib/blog';
import { articleSchema } from '@/lib/seo/organization';
import { hreflangLanguages } from '@/lib/seo/hreflang';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  const locales = ['en', 'de', 'tr'];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const post of getPosts(locale)) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) return {};
  const url = `https://zovpersonal.com/${locale}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages(`/${locale}/blog/${slug}`),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) notFound();

  const t = await getTranslations('nav');
  const tBlog = await getTranslations('blog');
  const url = `https://zovpersonal.com/${locale}/blog/${slug}`;
  const schema = articleSchema({
    title: post.title,
    description: post.description,
    url,
    locale,
    datePublished: post.date,
  });

  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs
        items={[
          { label: t('home'), href: `/${locale}` },
          { label: t('blog'), href: `/${locale}/blog` },
          { label: post.title },
        ]}
      />
      <h1 className="text-4xl font-semibold tracking-tight text-[rgb(28,39,6)] leading-tight">
        {post.title}
      </h1>
      <p className="mt-4 text-muted-foreground">
        {post.date} · {post.readingMinutes} {tBlog('minRead')}
      </p>
      <article className="blog-prose mt-10">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
