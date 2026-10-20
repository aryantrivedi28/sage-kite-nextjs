import type { ActionResult, StudioPost, StudioStorage } from './types';
import { ACCEPTED_IMAGE_TYPES, MAX_UPLOAD_BYTES } from './postUtils';
import {
  deleteStudioPostAction,
  listStudioPostsAction,
  saveStudioPostAction,
  uploadStudioImageAction,
} from './actions';

/*
 * Where the studio saves posts and images. The UI only talks to this
 * interface; getStudioStore() picks the implementation from the storage mode
 * decided on the server (server.ts).
 *
 * - localStudioStore: this browser's localStorage. Nothing reaches Sanity or
 *   sagekite.com, and another browser or device will not see it.
 * - sanityStudioStore: Sanity, through the Server Actions in actions.ts.
 *   Used only under `npm run dev` until sign-in exists.
 */
export interface StudioStore {
  /** Where posts are kept, e.g. "this browser only". */
  readonly label: string;
  /** Ending for save messages, e.g. "in this browser". */
  readonly savedIn: string;
  list(): Promise<StudioPost[]>;
  /** Saves and returns the post as stored (uploaded image URLs replace inline images). */
  save(post: StudioPost): Promise<StudioPost>;
  remove(id: string): Promise<void>;
  /** Stores an image file and returns the URL to put in `src`. */
  uploadImage(file: File): Promise<string>;
}

const STORAGE_KEY = 'sk-blog-studio:v1';
const MAX_IMAGE_WIDTH = 1600;

function readAll(): StudioPost[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as StudioPost[]) : [];
  } catch {
    return [];
  }
}

function writeAll(posts: StudioPost[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch {
    throw new Error(
      'Browser storage is full or blocked. Remove some uploaded images (or use image paths instead), export a backup, then try again.',
    );
  }
}

function checkImageFile(file: File) {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) throw new Error('Use a JPG, PNG or WebP image.');
  if (file.size > MAX_UPLOAD_BYTES) throw new Error('Images must be 8 MB or smaller.');
}

/** Resizes to at most 1600px wide and re-encodes as WebP. */
async function toWebpBlob(file: Blob): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_IMAGE_WIDTH / bitmap.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('This browser cannot process images.');
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Could not process this image.'))), 'image/webp', 0.82),
  );
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Could not read this image.'));
    reader.readAsDataURL(blob);
  });
}

export const localStudioStore: StudioStore = {
  label: 'this browser only',
  savedIn: 'in this browser',
  async list() {
    return readAll();
  },
  async save(post) {
    const posts = readAll();
    const i = posts.findIndex((p) => p.id === post.id);
    if (i === -1) posts.unshift(post);
    else posts[i] = post;
    writeAll(posts);
    return post;
  },
  async remove(id) {
    writeAll(readAll().filter((p) => p.id !== id));
  },
  async uploadImage(file) {
    checkImageFile(file);
    return blobToDataUrl(await toWebpBlob(file));
  },
};

function unwrap<T>(result: ActionResult<T>): T {
  if (!result.ok) throw new Error(result.error);
  return result.data;
}

async function uploadBlob(blob: Blob, name: string): Promise<string> {
  const form = new FormData();
  form.append('file', blob, name);
  return unwrap(await uploadStudioImageAction(form));
}

/** Uploads any inline data-URL images (from browser storage or an import) and swaps in their URLs. */
async function uploadInlineImages(post: StudioPost): Promise<StudioPost> {
  const upload = async (src: string) =>
    src.startsWith('data:') ? uploadBlob(await (await fetch(src)).blob(), `${post.slug || 'image'}.webp`) : src;
  return {
    ...post,
    featuredImage: await upload(post.featuredImage),
    blocks: await Promise.all(
      post.blocks.map(async (b) => (b.type === 'image' ? { ...b, src: await upload(b.src) } : b)),
    ),
  };
}

export const sanityStudioStore: StudioStore = {
  label: 'Sanity',
  savedIn: 'to Sanity',
  async list() {
    return unwrap(await listStudioPostsAction());
  },
  async save(post) {
    return unwrap(await saveStudioPostAction(await uploadInlineImages(post)));
  },
  async remove(id) {
    unwrap(await deleteStudioPostAction(id));
  },
  async uploadImage(file) {
    checkImageFile(file);
    return uploadBlob(await toWebpBlob(file), file.name.replace(/\.[^.]+$/, '') + '.webp');
  },
};

export function getStudioStore(storage: StudioStorage): StudioStore {
  return storage.kind === 'sanity' ? sanityStudioStore : localStudioStore;
}
