import type { StudioPost } from './types';

/*
 * Where the studio saves posts and images. The UI only talks to this
 * interface, so moving to a backend (Supabase, Sanity, ...) means writing one
 * new StudioStore and swapping it in at the bottom of this file.
 *
 * For now posts live in this browser's localStorage: nothing written here
 * reaches sagekite.com, and another browser or device will not see it.
 */
export interface StudioStore {
  /** Human description of where posts are kept, shown in the UI. */
  readonly label: string;
  list(): Promise<StudioPost[]>;
  save(post: StudioPost): Promise<void>;
  remove(id: string): Promise<void>;
  /** Stores an image file and returns the URL to put in `src`. */
  uploadImage(file: File): Promise<string>;
}

const STORAGE_KEY = 'sk-blog-studio:v1';
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const MAX_IMAGE_WIDTH = 1600;
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

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

/** Resizes to at most 1600px wide and re-encodes as WebP, so images fit in browser storage. */
async function toWebpDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_IMAGE_WIDTH / bitmap.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('This browser cannot process images.');
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas.toDataURL('image/webp', 0.82);
}

export const localStudioStore: StudioStore = {
  label: 'this browser only',
  async list() {
    return readAll();
  },
  async save(post) {
    const posts = readAll();
    const i = posts.findIndex((p) => p.id === post.id);
    if (i === -1) posts.unshift(post);
    else posts[i] = post;
    writeAll(posts);
  },
  async remove(id) {
    writeAll(readAll().filter((p) => p.id !== id));
  },
  async uploadImage(file) {
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      throw new Error('Use a JPG, PNG or WebP image.');
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      throw new Error('Images must be 8 MB or smaller.');
    }
    return toWebpDataUrl(file);
  },
};

/** The store the studio uses. Replace with a backend store when one exists. */
export const studioStore: StudioStore = localStudioStore;
