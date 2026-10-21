/*
 * What an uploaded image file really is, read from its own bytes. The browser's declared content
 * type and file name are only claims: a direct call to the upload action can send any bytes with
 * any type. The upload action (components/blog-studio/actions.ts) runs checkUploadedImage before
 * anything reaches Sanity and sends Sanity the detected type, never the declared one.
 *
 * Only these formats are accepted. Each must start with its signature and be complete (JPEG ends
 * with its end-of-image marker, PNG with its IEND chunk, WebP's RIFF size matches the file), so
 * a file with an image header and something else appended is refused. SVG, GIF, HEIC, AVIF and
 * everything else are refused. The studio re-encodes every picked image in the browser (WebP, or
 * PNG where the browser cannot encode WebP), so real uploads always pass.
 */

export const UPLOAD_IMAGE_FORMATS = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
} as const;

export type UploadImageType = keyof typeof UPLOAD_IMAGE_FORMATS;

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
/** Length 0, "IEND", CRC: the last 12 bytes of every complete PNG. */
const PNG_IEND = [0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82];
const WEBP_CHUNKS = ['VP8 ', 'VP8L', 'VP8X'];

const bytesAt = (b: Uint8Array, at: number, expected: number[]) =>
  at >= 0 && b.length >= at + expected.length && expected.every((v, i) => b[at + i] === v);
const asciiAt = (b: Uint8Array, at: number, text: string) =>
  bytesAt(b, at, [...text].map((c) => c.charCodeAt(0)));

function isJpeg(b: Uint8Array): boolean {
  return b.length >= 4 && bytesAt(b, 0, [0xff, 0xd8, 0xff]) && bytesAt(b, b.length - 2, [0xff, 0xd9]);
}

function isPng(b: Uint8Array): boolean {
  // Signature, then the IHDR chunk (always first, always 13 bytes long), and IEND at the very end.
  return (
    bytesAt(b, 0, PNG_SIGNATURE) &&
    bytesAt(b, 8, [0, 0, 0, 13]) &&
    asciiAt(b, 12, 'IHDR') &&
    b.length >= 8 + 25 + PNG_IEND.length &&
    bytesAt(b, b.length - PNG_IEND.length, PNG_IEND)
  );
}

function isWebp(b: Uint8Array): boolean {
  if (b.length < 20 || !asciiAt(b, 0, 'RIFF') || !asciiAt(b, 8, 'WEBP')) return false;
  const riffSize = new DataView(b.buffer, b.byteOffset, b.byteLength).getUint32(4, true);
  return riffSize + 8 === b.length && WEBP_CHUNKS.some((chunk) => asciiAt(b, 12, chunk));
}

/** The accepted format these bytes are, or null when they are none of them (or are incomplete). */
export function detectImageType(bytes: Uint8Array): UploadImageType | null {
  if (isJpeg(bytes)) return 'image/jpeg';
  if (isPng(bytes)) return 'image/png';
  if (isWebp(bytes)) return 'image/webp';
  return null;
}

const isUploadImageType = (type: string): type is UploadImageType => Object.hasOwn(UPLOAD_IMAGE_FORMATS, type);

/**
 * Accepts the file only when the declared type is on the allowlist, the bytes are a complete image
 * of an allowed format, and the two agree. Returns the detected type to send to Sanity.
 */
export function checkUploadedImage(
  bytes: Uint8Array,
  declaredType: string,
): { ok: true; type: UploadImageType } | { ok: false; error: string } {
  const declared = declaredType.trim().toLowerCase();
  if (!isUploadImageType(declared)) return { ok: false, error: 'Use a JPG, PNG or WebP image.' };
  const detected = detectImageType(bytes);
  if (!detected) return { ok: false, error: 'This file is not a valid JPG, PNG or WebP image.' };
  if (detected !== declared) return { ok: false, error: 'This file\'s contents do not match its image type.' };
  return { ok: true, type: detected };
}

/** A safe file name for Sanity: the browser's name reduced to letters, digits and dashes, with the detected format's extension. */
export function uploadFileName(name: string, type: UploadImageType): string {
  const base = name
    .replace(/\.[^.]*$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/, '');
  return `${base || 'image'}.${UPLOAD_IMAGE_FORMATS[type]}`;
}
