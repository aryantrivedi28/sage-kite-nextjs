import type { Metadata } from 'next';
import { connection } from 'next/server';
import { BlogStudio } from '@/components/blog-studio/BlogStudio';
import { getSitePostSummaries, getStudioStorage } from '@/components/blog-studio/server';
import { CATEGORIES } from '@/content/blog';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import { PLATFORM_PAGE_SLUGS } from '@/content/platforms';

/*
 * Blog studio for the SEO team. Unlisted (decision.md D019), with a shared team
 * password to save to Sanity (D030): the path is random, nothing links to it, it is noindex and absent from the
 * sitemap. It is deliberately NOT in robots.ts, because robots.txt is public
 * and would advertise the path. Storage is chosen in
 * components/blog-studio/server.ts: Sanity once the shared team password is set
 * up and the visitor has signed in (D030). Without a session, or without sign-in set up, the
 * studio is locked behind a sign-in dialog and no browser-only mode exists (D035).
 */

export const metadata: Metadata = {
  title: 'Blog studio | Sage Kite',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: 'no-referrer',
};

export default async function BlogStudioPage() {
  // The sign-in state and storage mode differ per visitor: never prerender this page at build time.
  await connection();
  const storage = await getStudioStorage();
  const locked = storage.kind === 'locked';
  return (
    <>
      {/* Keeps Google Analytics off this page (components/GoogleAnalytics.tsx, decision.md D038). */}
      <div hidden data-no-analytics="" />
      <BlogStudio
        storage={storage}
        // A locked studio is rendered as an empty inert shell behind the dialog: nothing is sent to a visitor who has not signed in.
        sitePosts={locked ? [] : getSitePostSummaries()}
        categories={[...CATEGORIES]}
        platforms={PLATFORM_PAGE_SLUGS}
        author={AUTHOR}
        authorImage={AUTHOR_IMAGE}
      />
    </>
  );
}
