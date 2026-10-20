import type { Metadata } from 'next';
import { BlogStudio } from '@/components/blog-studio/BlogStudio';
import type { SitePostSummary } from '@/components/blog-studio/types';
import { CATEGORIES, posts } from '@/content/blog';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import { PLATFORM_PAGE_SLUGS } from '@/content/platforms';

/*
 * Blog studio for the SEO team. Unlisted, with no login (decision.md D019):
 * the path is random, nothing links to it, it is noindex and absent from the
 * sitemap. It is deliberately NOT in robots.ts, because robots.txt is public
 * and would advertise the path. Posts are saved in the visitor's browser only
 * (components/blog-studio/store.ts), so the page cannot change the live site.
 * Add authentication before connecting a backend that can publish.
 */

export const metadata: Metadata = {
  title: 'Blog studio | Sage Kite',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: 'no-referrer',
};

export default function BlogStudioPage() {
  const sitePosts: SitePostSummary[] = posts
    .filter((p) => !p.draft)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      author: p.author,
      publishedAt: p.publishedAt,
      featured: !!p.featured,
    }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <BlogStudio
      sitePosts={sitePosts}
      categories={[...CATEGORIES]}
      platforms={PLATFORM_PAGE_SLUGS}
      author={AUTHOR}
      authorImage={AUTHOR_IMAGE}
    />
  );
}
