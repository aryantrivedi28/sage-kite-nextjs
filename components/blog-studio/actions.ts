'use server';

import { revalidatePath } from 'next/cache';
import { getSanityWriteClient } from '@/lib/sanity/client';
import { SafeError } from '@/lib/sanity/errors';
import {
  ALL_BLOG_POSTS_QUERY,
  BLOG_POST_TYPE,
  POST_ID_PATTERN,
  draftId,
  fromBlogPostDocument,
  isLiveStatus,
  toBlogPostDocument,
} from '@/lib/sanity/blogPosts';
import { checkUploadedImage, uploadFileName } from '@/lib/sanity/imageUpload';
import { postShapeProblem } from '@/lib/sanity/postValidation';
import { MAX_RESIZED_BYTES, checklist } from './postUtils';
import { getSitePostSummaries, getStudioStorage } from './server';
import type { ActionResult, StudioPost } from './types';

/*
 * Server side of the Sanity store (store.ts). Every action re-checks, first thing, that
 * Sanity mode is allowed (server.ts: signed in, not Preview, write guard passes) and then
 * validates its input: the browser checklist can be bypassed by calling an action directly.
 *
 * Nothing the client sends decides which document is touched. Ids must be UUIDs
 * (blogPosts.ts), saves only ever write documents of type `blogPost` built from an explicit
 * field list, an existing document of another type under the same id is refused, and
 * deletes are scoped to `blogPost` documents.
 */

const fail = (error: string, signIn = false): { ok: false; error: string; signIn?: true } =>
  signIn ? { ok: false, error, signIn: true } : { ok: false, error };

/**
 * What the browser is told when something other than our own checks fails (Sanity, the network, a
 * bug). Raw error text can carry request details, so only SafeError messages (written in this app)
 * are passed on. The server log gets the action name and an HTTP status code, never the message.
 */
function failure(action: string, e: unknown, generic: string): { ok: false; error: string; signIn?: true } {
  if (e instanceof SafeError) return fail(e.message, e.signIn);
  const status = (e as { statusCode?: unknown } | null)?.statusCode;
  console.error(`[blog-studio] ${action} failed${typeof status === 'number' ? ` (status ${status})` : ''}`);
  return fail(generic);
}

async function assertSanityMode() {
  const storage = await getStudioStorage();
  if (storage.kind === 'sanity') return;
  if (storage.kind === 'blocked') throw new SafeError(storage.reason);
  // Locked: no valid session (or sign-in is not available here). The message gives no configuration detail.
  throw new SafeError(
    storage.why === 'signin' ? 'Your session has ended. Sign in again.' : 'The blog studio is not available.',
    { signIn: storage.why === 'signin' },
  );
}

/**
 * Refresh every page that can show a studio post: /blog, every post under it
 * (their "Keep reading" lists) and the sitemap. Pages also revalidate every 60 s.
 */
function revalidateBlog() {
  // The write has already succeeded. If refreshing the cache fails, the pages still catch up within 60 s,
  // so this must not turn a saved post into an error message.
  try {
    revalidatePath('/blog', 'layout');
    revalidatePath('/sitemap.xml');
  } catch {
    console.error('[blog-studio] cache refresh failed; pages will update within 60 seconds');
  }
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

export async function listStudioPostsAction(): Promise<ActionResult<StudioPost[]>> {
  try {
    await assertSanityMode();
    return { ok: true, data: await fetchAllPosts() };
  } catch (e) {
    return failure('listStudioPostsAction', e, 'Could not load the posts from Sanity. Nothing was changed. Try again.');
  }
}

export async function saveStudioPostAction(post: StudioPost): Promise<ActionResult<StudioPost>> {
  try {
    await assertSanityMode();
    const problem = postShapeProblem(post);
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
    const existing = await client.fetch<{ _id: string; _type: string }[]>(`*[_id in $ids]{_id, _type}`, {
      ids: [post.id, draftId(post.id)],
    });
    // Never replace or delete a document that is not a blog post, whatever id the client chose.
    if (existing.some((d) => d._type !== BLOG_POST_TYPE)) return fail('That id belongs to a different kind of document.');
    const tx = client.transaction().createOrReplace(doc);
    for (const { _id } of existing) if (_id !== doc._id) tx.delete(_id);
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
    return failure('saveStudioPostAction', e, 'Could not save the post to Sanity. Nothing was saved. Try again.');
  }
}

export async function deleteStudioPostAction(id: string): Promise<ActionResult<null>> {
  try {
    await assertSanityMode();
    if (typeof id !== 'string' || !POST_ID_PATTERN.test(id)) return fail('Invalid post id.');
    await getSanityWriteClient().delete({
      query: `*[_type == $type && _id in $ids]`,
      params: { type: BLOG_POST_TYPE, ids: [id, draftId(id)] },
    });
    revalidateBlog();
    return { ok: true, data: null };
  } catch (e) {
    return failure('deleteStudioPostAction', e, 'Could not delete the post. Try again.');
  }
}

/**
 * Uploads an already-resized image to Sanity's asset store and returns its CDN URL. The declared type
 * and name are the browser's claims: the bytes must be a complete JPG, PNG or WebP of that same type
 * (lib/sanity/imageUpload.ts), and Sanity gets the detected type and a cleaned-up name.
 */
export async function uploadStudioImageAction(form: FormData): Promise<ActionResult<string>> {
  try {
    await assertSanityMode();
    const file = form.get('file');
    if (!(file instanceof File)) return fail('No image received.');
    if (file.size > MAX_RESIZED_BYTES) return fail('This image is still too large after resizing. Try a smaller one.');
    const bytes = new Uint8Array(await file.arrayBuffer());
    const image = checkUploadedImage(bytes, file.type);
    if (!image.ok) return fail(image.error);
    const asset = await getSanityWriteClient().assets.upload('image', Buffer.from(bytes), {
      filename: uploadFileName(file.name, image.type),
      contentType: image.type,
    });
    return { ok: true, data: asset.url };
  } catch (e) {
    return failure('uploadStudioImageAction', e, 'Could not upload the image. Try again.');
  }
}
