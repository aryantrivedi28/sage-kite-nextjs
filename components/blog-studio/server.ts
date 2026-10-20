import 'server-only';
import { posts } from '@/content/blog';
import { isSanityWritable, sanityDataset } from '@/lib/sanity/client';
import type { SitePostSummary, StudioStorage } from './types';

/** Live posts that are written in code (app/blog/<slug>/post.tsx), newest first. */
export function getSitePostSummaries(): SitePostSummary[] {
  return posts
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
}

/*
 * The studio has no sign-in yet (decision.md D019, D022). Reading drafts and
 * writing with the Sanity token from a page anyone can open would expose and
 * endanger the content, so Sanity is used only under `npm run dev`. Deployed
 * builds keep browser storage. Remove the production check when sign-in exists.
 */
export function getStudioStorage(): StudioStorage {
  if (process.env.NODE_ENV === 'production') {
    return {
      kind: 'local',
      reason: 'On the deployed site the studio saves in this browser only. Sanity is used when running locally, until sign-in is added.',
    };
  }
  if (!isSanityWritable()) {
    return {
      kind: 'local',
      reason:
        'Sanity is not configured: set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and SANITY_API_WRITE_TOKEN in .env, then restart npm run dev.',
    };
  }
  return { kind: 'sanity', dataset: sanityDataset };
}
