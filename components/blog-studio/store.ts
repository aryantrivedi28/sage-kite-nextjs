import type { ActionResult, StudioPost, StudioStorage } from './types';
import { ACCEPTED_IMAGE_TYPES, MAX_UPLOAD_BYTES, resizedImageType, withImageFileNameDefaults } from './postUtils';
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
 * - sanityStudioStore: Sanity, through the Server Actions in actions.ts. Used when signed
 *   in with the team password and the write guard passes.
 * - blockedStudioStore: signed in, but the write guard refuses; or not signed in at all (the
 *   studio is locked behind its sign-in dialog). Saves nothing anywhere and says why: there is no
 *   browser-only mode and no fallback to another dataset.
 */
export interface StudioStore {
  /** Where posts are kept, e.g. "Sanity". */
  readonly label: string;
  /** Ending for save messages, e.g. "to Sanity". */
  readonly savedIn: string;
  list(): Promise<StudioPost[]>;
  /** Saves and returns the post as stored (uploaded image URLs replace inline images). */
  save(post: StudioPost): Promise<StudioPost>;
  remove(id: string): Promise<void>;
  /** Stores an image file and returns the URL to put in `src`. */
  uploadImage(file: File): Promise<string>;
}

/** Widest image the studio stores (decision.md D064): about 2x the widest place a blog image is shown. */
const MAX_IMAGE_WIDTH = 2000;
/** Encoder quality for the stored WebP (or the JPEG fallback) (D064). */
const IMAGE_QUALITY = 0.9;

function checkImageFile(file: File) {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) throw new Error('Use a JPG, PNG or WebP image.');
  if (file.size > MAX_UPLOAD_BYTES) throw new Error('Images must be 8 MB or smaller.');
}

function encodeCanvas(canvas: HTMLCanvasElement, type: string): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Could not process this image.'))), type, IMAGE_QUALITY),
  );
}

/**
 * Resizes to at most 2000px wide (never enlarges) and re-encodes as WebP at quality 0.9. A browser that cannot encode
 * WebP (Safari) silently returns a PNG, which can be several MB at this width, so the image is then encoded as JPEG at
 * the same quality instead (resizedImageType). JPEG has no transparency: transparent areas get the page background.
 */
async function toWebpBlob(file: Blob): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_IMAGE_WIDTH / bitmap.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('This browser cannot process images.');
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const webp = await encodeCanvas(canvas, 'image/webp');
  if (resizedImageType(webp.type) === 'image/webp') {
    bitmap.close();
    return webp;
  }
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--warm-white').trim() || 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return encodeCanvas(canvas, 'image/jpeg');
}

/* Called when a Server Action says the session is missing or has ended, so the UI can ask for the password again. */
const sessionEndedListeners = new Set<() => void>();
export function onSessionEnded(listener: () => void): () => void {
  sessionEndedListeners.add(listener);
  return () => sessionEndedListeners.delete(listener);
}

function unwrap<T>(result: ActionResult<T>): T {
  if (!result.ok) {
    if (result.signIn) sessionEndedListeners.forEach((listener) => listener());
    throw new Error(result.error);
  }
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

/** New posts get UUIDs; a post from browser storage or an import may carry an older id shape. */
const POST_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const sanityStudioStore: StudioStore = {
  label: 'Sanity',
  savedIn: 'to Sanity',
  async list() {
    return unwrap(await listStudioPostsAction());
  },
  async save(post) {
    // Sanity document ids must be UUIDs (lib/sanity/blogPosts.ts); a post that never reached Sanity gets one.
    const withId = POST_UUID.test(post.id) ? post : { ...post, id: crypto.randomUUID() };
    // A post exported before secondary keywords or image file names (D062) existed has no such fields.
    const complete = withImageFileNameDefaults({ ...withId, secondaryKeywords: withId.secondaryKeywords ?? [] });
    return unwrap(await saveStudioPostAction(await uploadInlineImages(complete)));
  },
  async remove(id) {
    unwrap(await deleteStudioPostAction(id));
  },
  async uploadImage(file) {
    checkImageFile(file);
    const blob = await toWebpBlob(file);
    return uploadBlob(blob, file.name.replace(/\.[^.]+$/, '') + (blob.type === 'image/jpeg' ? '.jpg' : '.webp'));
  },
};

function blockedStudioStore(reason: string): StudioStore {
  const refuse = (): never => {
    throw new Error(`Publishing is blocked: ${reason}`);
  };
  return {
    label: 'nowhere (publishing is blocked)',
    savedIn: 'nowhere',
    list: async () => [],
    save: async () => refuse(),
    remove: async () => refuse(),
    uploadImage: async () => refuse(),
  };
}

export function getStudioStore(storage: StudioStorage): StudioStore {
  if (storage.kind === 'sanity') return sanityStudioStore;
  if (storage.kind === 'blocked') return blockedStudioStore(storage.reason);
  return blockedStudioStore('Sign in to use the studio.');
}
