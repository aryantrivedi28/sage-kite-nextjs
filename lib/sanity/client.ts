import 'server-only';
import { createClient, type SanityClient } from '@sanity/client';

/*
 * Sanity connection (docs/sanity.md). Server-only: the write token must never
 * reach the browser. The project ID and dataset are public values, so they use
 * NEXT_PUBLIC_ names; the token does not.
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

/** Pinned so query behaviour does not change underneath us. Change deliberately. */
export const SANITY_API_VERSION = '2026-10-20';

export const sanityDataset = dataset ?? '';

/** Project and dataset are set (enough to read published posts). */
export function isSanityConfigured(): boolean {
  return !!(projectId && dataset);
}

/** Project, dataset and write token are all set. */
export function isSanityWritable(): boolean {
  return !!(projectId && dataset && token);
}

let readClient: SanityClient | undefined;
let writeClient: SanityClient | undefined;

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
 */
export function getSanityWriteClient(): SanityClient {
  if (!isSanityWritable()) {
    throw new Error(
      'Sanity is not configured: set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and SANITY_API_WRITE_TOKEN.',
    );
  }
  writeClient ??= createClient({
    projectId,
    dataset,
    token,
    apiVersion: SANITY_API_VERSION,
    useCdn: false,
    perspective: 'raw',
  });
  return writeClient;
}
