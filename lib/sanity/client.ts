import 'server-only';
import { createClient, type SanityClient } from '@sanity/client';
import { SafeError } from './errors';
import { checkSanityWriteGuard } from './guard';

/*
 * Sanity connection (docs/sanity.md). Server-only: the write token must never
 * reach the browser. The project ID and dataset are public values, so they use
 * NEXT_PUBLIC_ names; the token does not.
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

/** Pinned so query behaviour does not change underneath us. Change deliberately. */
export const SANITY_API_VERSION = '2026-10-20';

/** The dataset the environment currently names (read at call time, not at import). */
export const currentSanityDataset = () => process.env.NEXT_PUBLIC_SANITY_DATASET ?? '';

/** Project and dataset are set (enough to read published posts). */
export function isSanityConfigured(): boolean {
  return !!(projectId && dataset);
}

/**
 * The write guard passes: right project, an allowed dataset for this runtime (exactly
 * "production" in production, never in Preview) and a write token (guard.ts).
 */
export function isSanityWritable(): boolean {
  return checkSanityWriteGuard().ok;
}

let readClient: SanityClient | undefined;

/**
 * Client for the public site. No token, so documents under `drafts.` can never
 * be returned, whatever the query; `perspective: 'published'` says the same.
 * `useCdn: false`: pages are cached by Next.js (ISR), and fresh reads matter
 * right after a publish.
 */
export function getSanityReadClient(): SanityClient {
  if (!isSanityConfigured()) {
    throw new Error('Sanity is not configured: set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.');
  }
  readClient ??= createClient({
    projectId,
    dataset,
    apiVersion: SANITY_API_VERSION,
    useCdn: false,
    perspective: 'published',
  });
  return readClient;
}

/**
 * Client with the write token. `perspective: 'raw'` returns drafts
 * (`drafts.<id>`) as well as published documents.
 *
 * The write guard runs on EVERY call, before a client is returned, so a changed or
 * wrong environment can never reach Sanity. It throws instead of falling back to
 * another dataset or to browser storage.
 */
let writeClient: SanityClient | undefined;
let writeClientKey = '';
let writeClientToken = '';

export function getSanityWriteClient(): SanityClient {
  const guard = checkSanityWriteGuard();
  if (!guard.ok) throw new SafeError(guard.reason);

  const token = process.env.SANITY_API_WRITE_TOKEN as string;
  const key = `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}|${guard.dataset}`;
  if (!writeClient || writeClientKey !== key || writeClientToken !== token) {
    writeClient = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: guard.dataset,
      token,
      apiVersion: SANITY_API_VERSION,
      useCdn: false,
      perspective: 'raw',
    });
    writeClientKey = key;
    writeClientToken = token;
  }
  return writeClient;
}
