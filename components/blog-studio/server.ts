import 'server-only';
import { posts } from '@/content/blog';
import { checkSanityWriteGuard, runtimeKind } from '@/lib/sanity/guard';
import { isStudioAuthConfigured, isStudioSignedIn, studioUnavailableReason } from './auth';
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
 * Whether the studio may be used and where it saves (decision.md D022, D030, D031, D035). Writing with
 * the Sanity token from a page anyone can open would endanger the live blog, so the studio needs ALL of:
 *   - not a Vercel Preview (previews are read-only);
 *   - team sign-in set up (STUDIO_PASSWORD and STUDIO_SESSION_SECRET, valid) and a valid session;
 *   - the write guard (lib/sanity/guard.ts): the expected project, a write token, and in
 *     production exactly the "production" dataset.
 * Anything less is `locked`: there is no browser-only fallback, so missing or invalid sign-in
 * settings fail closed instead of opening the studio. This runs on the page and again in every
 * Server Action (actions.ts), so a direct call cannot skip it. A signed-in visitor whose write
 * guard fails gets `blocked`: an error, never a fall-back to browser storage or another dataset.
 */
export async function getStudioStorage(): Promise<StudioStorage> {
  if (runtimeKind() === 'preview' || !isStudioAuthConfigured()) {
    // Visitors learn nothing; the reason (no values) goes to the server log so an administrator can fix it.
    console.error(`[blog-studio] unavailable: ${studioUnavailableReason() ?? 'unknown'} (runtime: ${runtimeKind()})`);
    return { kind: 'locked', why: 'unavailable' };
  }
  if (!(await isStudioSignedIn())) return { kind: 'locked', why: 'signin' };

  const guard = checkSanityWriteGuard();
  if (!guard.ok) return { kind: 'blocked', reason: guard.reason };
  return { kind: 'sanity', dataset: guard.dataset };
}
