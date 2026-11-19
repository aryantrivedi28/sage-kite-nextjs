/*
 * The rule for when this app may write to Sanity (decision.md D031). Pure: it only
 * reads the environment it is given, so it is tested without a server. The Sanity
 * write client (client.ts) calls it every time, so no code path can write without it.
 *
 * Fails closed: any doubt is a refusal, and nothing falls back to another dataset.
 */

/** The Sanity project this site belongs to (a public value; also in docs/sanity.md). */
export const EXPECTED_SANITY_PROJECT_ID = 'lk42drbi';

type Env = Record<string, string | undefined>;

/**
 * Where the code is running. Vercel Production and a self-hosted `next start` are both
 * "production" (strict). Vercel Preview is read-only. `npm run dev` is "development".
 */
export type RuntimeKind = 'production' | 'preview' | 'development';

export function runtimeKind(env: Env = process.env): RuntimeKind {
  const vercel = env.VERCEL_ENV;
  if (vercel === 'preview') return 'preview';
  if (vercel === 'production') return 'production';
  if (vercel === 'development') return 'development';
  return env.NODE_ENV === 'production' ? 'production' : 'development';
}

export type WriteGuard =
  | { ok: true; dataset: string; runtime: RuntimeKind }
  | { ok: false; code: 'PREVIEW' | 'PROJECT' | 'TOKEN' | 'DATASET'; reason: string; runtime: RuntimeKind };

const DEV_DATASET = /^[a-z0-9][a-z0-9_-]{0,63}$/;

/**
 * Checks everything that is known without a request: runtime, project, dataset and the
 * presence of the write token. The signed-in session is the other half, checked per
 * request in server.ts (getStudioStorage) before any action reaches Sanity.
 */
export function checkSanityWriteGuard(env: Env = process.env): WriteGuard {
  const runtime = runtimeKind(env);
  const fail = (code: 'PREVIEW' | 'PROJECT' | 'TOKEN' | 'DATASET', reason: string): WriteGuard => ({
    ok: false,
    code,
    reason,
    runtime,
  });

  if (runtime === 'preview') return fail('PREVIEW', 'Preview deployments cannot publish.');

  const project = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!project) return fail('PROJECT', 'The Sanity project ID is not configured.');
  if (project !== EXPECTED_SANITY_PROJECT_ID) return fail('PROJECT', 'The Sanity project ID is not the expected one.');

  const dataset = env.NEXT_PUBLIC_SANITY_DATASET;
  if (runtime === 'production') {
    if (dataset !== 'production') {
      return fail('DATASET', `Production can only publish to the "production" dataset, but this site is set to "${dataset || 'none'}".`);
    }
  } else if (!dataset || !DEV_DATASET.test(dataset)) {
    return fail('DATASET', 'The Sanity dataset is not configured.');
  }

  if (!env.SANITY_API_WRITE_TOKEN) return fail('TOKEN', 'The Sanity write token is not configured.');

  return { ok: true, dataset, runtime };
}
