import type { Metadata } from 'next';
import { BlogStudio } from '@/components/blog-studio/BlogStudio';
import { getSitePostSummaries, getStudioStorage } from '@/components/blog-studio/server';
import { CATEGORIES } from '@/content/blog';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import { PLATFORM_PAGE_SLUGS } from '@/content/platforms';

/*
 * Blog studio for the SEO team. Unlisted, with no login (decision.md D019):
 * the path is random, nothing links to it, it is noindex and absent from the
 * sitemap. It is deliberately NOT in robots.ts, because robots.txt is public
 * and would advertise the path. Storage is chosen in
 * components/blog-studio/server.ts: Sanity only under `npm run dev` (D022),
 * browser storage on the deployed site. Add authentication before letting the
 * deployed studio use Sanity.
 */

export const metadata: Metadata = {
  title: 'Blog studio | Sage Kite',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: 'no-referrer',
};

export default function BlogStudioPage() {
  return (
    <BlogStudio
      storage={getStudioStorage()}
      sitePosts={getSitePostSummaries()}
      categories={[...CATEGORIES]}
      platforms={PLATFORM_PAGE_SLUGS}
      author={AUTHOR}
      authorImage={AUTHOR_IMAGE}
    />
  );
}
