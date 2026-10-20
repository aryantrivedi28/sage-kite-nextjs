'use server';

import { revalidatePath } from 'next/cache';
import { getSanityWriteClient } from '@/lib/sanity/client';
import {
  ALL_BLOG_POSTS_QUERY,
  BLOG_POST_TYPE,
  POST_ID_PATTERN,
  draftId,
  fromBlogPostDocument,
  isLiveStatus,
  toBlogPostDocument,
} from '@/lib/sanity/blogPosts';
import { ACCEPTED_IMAGE_TYPES, BLOCK_LABELS, MAX_RESIZED_BYTES, checklist } from './postUtils';
import { getSitePostSummaries, getStudioStorage } from './server';
import type { ActionResult, StudioPost } from './types';

/*
 * Server side of the Sanity store (store.ts). Every action re-checks that
 * Sanity mode is allowed (server.ts) and validates its input: the browser
 * checklist can be bypassed by calling an action directly.
 */

const fail = (error: string): { ok: false; error: string } => ({ ok: false, error });
const message = (e: unknown) => (e instanceof Error ? e.message : 'Unexpected error.');

function assertSanityMode() {
  const storage = getStudioStorage();
  if (storage.kind !== 'sanity') throw new Error(storage.reason);
}

/**
 * Refresh every page that can show a studio post: /blog, every post under it
 * (their "Keep reading" lists) and the sitemap. Pages also revalidate every 60 s.
 */
function revalidateBlog() {
  revalidatePath('/blog', 'layout');
  revalidatePath('/sitemap.xml');
}

async function fetchAllPosts(): Promise<StudioPost[]> {
  const docs = await getSanityWriteClient().fetch<Record<string, unknown>[]>(ALL_BLOG_POSTS_QUERY, {
    type: BLOG_POST_TYPE,
  });
  // A post should have one document; if a draft and a published copy both exist, keep the newer.
  const byId = new Map<string, StudioPost>();
  for (const post of docs.map(fromBlogPostDocument)) {
    const seen = byId.get(post.id);
    if (!seen || post.savedAt > seen.savedAt) byId.set(post.id, post);
  }
  return [...byId.values()];
}

function shapeProblem(post: StudioPost): string | null {
  if (!post || typeof post !== 'object') return 'Invalid post.';
  if (!POST_ID_PATTERN.test(post.id)) return 'Invalid post id.';
  if (!['draft', 'published', 'scheduled'].includes(post.status)) return 'Invalid status.';
  if (typeof post.title !== 'string' || !post.title.trim()) return 'Add a title before saving.';
  if (!Array.isArray(post.blocks) || !Array.isArray(post.tags)) return 'Invalid post content.';
  for (const b of post.blocks) {
    if (!b || typeof b.id !== 'string' || !POST_ID_PATTERN.test(b.id) || !(b.type in BLOCK_LABELS)) {
      return 'Invalid block in the article.';
    }
  }
  const images = [post.featuredImage, ...post.blocks.flatMap((b) => (b.type === 'image' ? [b.src] : []))];
  if (images.some((src) => typeof src === 'string' && src.startsWith('data:'))) {
    return 'Images must be uploaded before saving.';
  }
  return null;
}

export async function listStudioPostsAction(): Promise<ActionResult<StudioPost[]>> {
  try {
    assertSanityMode();
    return { ok: true, data: await fetchAllPosts() };
  } catch (e) {
    return fail(message(e));
  }
}

export async function saveStudioPostAction(post: StudioPost): Promise<ActionResult<StudioPost>> {
  try {
    assertSanityMode();
    const problem = shapeProblem(post);
    if (problem) return fail(problem);

    const client = getSanityWriteClient();
    const others = (await fetchAllPosts()).filter((p) => p.id !== post.id);

    if (post.status !== 'draft') {
      const missing = checklist(post, { studio: others, site: getSitePostSummaries() }).filter((c) => c.required && !c.ok);
      if (missing.length) {
        return fail(`Cannot ${post.status === 'scheduled' ? 'schedule' : 'publish'} yet: ${missing.map((m) => m.label.toLowerCase()).join('; ')}.`);
      }
    }

    // Write the document under the id for its status and remove the other copy, in one transaction.
    const doc = toBlogPostDocument(post);
    const existing = await client.fetch<string[]>(`*[_id in $ids]._id`, { ids: [post.id, draftId(post.id)] });
    const tx = client.transaction().createOrReplace(doc);
    for (const id of existing) if (id !== doc._id) tx.delete(id);
    // Only one post may be featured.
    if (post.featured) {
      for (const other of others.filter((p) => p.featured)) {
        tx.patch(isLiveStatus(other.status) ? other.id : draftId(other.id), { set: { featured: false } });
      }
    }
    await tx.commit();
    revalidateBlog();
    return { ok: true, data: post };
  } catch (e) {
    return fail(message(e));
  }
}

export async function deleteStudioPostAction(id: string): Promise<ActionResult<null>> {
  try {
    assertSanityMode();
    if (typeof id !== 'string' || !POST_ID_PATTERN.test(id)) return fail('Invalid post id.');
    await getSanityWriteClient().delete({ query: `*[_id in $ids]`, params: { ids: [id, draftId(id)] } });
    revalidateBlog();
    return { ok: true, data: null };
  } catch (e) {
    return fail(message(e));
  }
}

/** Uploads an already-resized image to Sanity's asset store and returns its CDN URL. */
export async function uploadStudioImageAction(form: FormData): Promise<ActionResult<string>> {
  try {
    assertSanityMode();
    const file = form.get('file');
    if (!(file instanceof File)) return fail('No image received.');
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) return fail('Use a JPG, PNG or WebP image.');
    if (file.size > MAX_RESIZED_BYTES) return fail('This image is still too large after resizing. Try a smaller one.');
    const asset = await getSanityWriteClient().assets.upload('image', Buffer.from(await file.arrayBuffer()), {
      filename: file.name,
      contentType: file.type,
    });
    return { ok: true, data: asset.url };
  } catch (e) {
    return fail(message(e));
  }
}
