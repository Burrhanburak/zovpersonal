import Link from 'next/link';
import { getPosts } from '@/lib/blog';
import { getTranslations } from 'next-intl/server';
import Breadcrumbs from '@/components/Breadcrumbs';

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getPosts(locale);
  const t = await getTranslations('nav');
  const tBlog = await getTranslations('blog');

  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-36">
      <Breadcrumbs
        items={[
          { label: t('home'), href: `/${locale}` },
          { label: t('blog') },
        ]}
      />
      <h1 className="text-4xl font-semibold tracking-tight text-[rgb(28,39,6)]">
        {t('blog')}
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        {tBlog('subtitle')}
      </p>

      <ul className="mt-12 space-y-8">
        {posts.length === 0 && (
          <li className="text-muted-foreground">{tBlog('empty')}</li>
        )}
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-black/10 pb-8">
            <Link
              href={`/${locale}/blog/${post.slug}`}
              className="group block"
            >
              <h2 className="text-2xl font-semibold text-[rgb(28,39,6)] group-hover:opacity-80">
                {post.title}
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {post.description}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {post.date} · {post.readingMinutes} {tBlog('minRead')}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
