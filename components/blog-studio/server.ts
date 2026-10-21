import 'server-only';
import { posts } from '@/content/blog';
import { checkSanityWriteGuard, runtimeKind } from '@/lib/sanity/guard';
import { isStudioAuthConfigured, isStudioSignedIn } from './auth';
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
 * Where the studio saves (decision.md D022, D030, D031). Writing with the Sanity token from
 * a page anyone can open would endanger the live blog, so Sanity needs ALL of:
 *   - not a Vercel Preview (previews are read-only);
 *   - team sign-in set up and the visitor signed in, or (no team sign-in set up) the app
 *     running in development;
 *   - the write guard (lib/sanity/guard.ts): the expected project, a write token, and in
 *     production exactly the "production" dataset.
 * This runs on the page and again in every Server Action (actions.ts), so a direct call
 * cannot skip it. A signed-in visitor on production whose guard fails gets `blocked`: an
 * error, never a silent fall-back to browser storage or another dataset.
 */
export async function getStudioStorage(): Promise<StudioStorage> {
  const runtime = runtimeKind();

  if (runtime === 'preview') {
    return { kind: 'local', signIn: false, reason: 'Preview deployments cannot publish, so the studio saves in this browser only.' };
  }

  const authConfigured = isStudioAuthConfigured();
  if (runtime === 'production' && !authConfigured) {
    return {
      kind: 'local',
      signIn: false,
      reason: 'Team sign-in is not set up on this site yet, so the studio saves in this browser only.',
    };
  }
  if (authConfigured && !(await isStudioSignedIn())) {
    return { kind: 'local', signIn: true, reason: 'Sign in with the team password to save to Sanity and publish.' };
  }

  // From here on the visitor may write: signed in, or running in development without team sign-in.
  const guard = checkSanityWriteGuard();
  if (!guard.ok) {
    return runtime === 'production'
      ? { kind: 'blocked', reason: guard.reason }
      : { kind: 'local', signIn: false, reason: `Sanity is not available here: ${guard.reason}` };
  }
  return { kind: 'sanity', dataset: guard.dataset, signedIn: authConfigured };
}
