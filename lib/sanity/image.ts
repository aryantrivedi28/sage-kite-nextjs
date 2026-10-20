/*
 * Helpers for images stored in this project's Sanity asset store. Pure functions:
 * used on the server (metadata, JSON-LD, next/image) and in the studio preview.
 * Sanity serves resized images from its CDN when given URL parameters
 * (w, h, fit, fm, auto=format).
 */

const SITE_URL = 'https://www.sagekite.com';
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';

// https://cdn.sanity.io/images/<project>/<dataset>/<hash>-<width>x<height>.<ext>, no query string
const SANITY_IMAGE = /^https:\/\/cdn\.sanity\.io\/images\/([a-z0-9]+)\/[\w-]+\/[a-f0-9]+-(\d+)x(\d+)\.[a-z]+$/;

/** An unmodified image URL from this project's Sanity CDN (what next.config.ts allows). */
export function isSanityImage(src: string): boolean {
  const m = SANITY_IMAGE.exec(src);
  return !!m && !!PROJECT_ID && m[1] === PROJECT_ID;
}

/** Original pixel size, read from the asset URL. */
export function sanityImageSize(src: string): { width: number; height: number } | null {
  const m = SANITY_IMAGE.exec(src);
  return m ? { width: Number(m[2]), height: Number(m[3]) } : null;
}

export function sanityImageUrl(
  src: string,
  params: { w?: number; h?: number; fit?: 'max' | 'crop'; fm?: 'jpg' | 'webp' },
): string {
  const q = new URLSearchParams();
  if (params.w) q.set('w', String(params.w));
  if (params.h) q.set('h', String(params.h));
  if (params.fit) q.set('fit', params.fit);
  if (params.fm) q.set('fm', params.fm);
  else q.set('auto', 'format');
  return `${src}?${q}`;
}

/** A site path (/images/…) or a Sanity upload: the featured-image sources next/image accepts. */
export function isUsableFeaturedImage(src: string): boolean {
  return (src.startsWith('/') && !src.startsWith('//')) || isSanityImage(src);
}

/** Absolute URL for metadata and JSON-LD. */
export function absoluteImageUrl(src: string): string {
  return src.startsWith('/') ? `${SITE_URL}${src}` : src;
}

/** Social share image: Sanity images are cropped to the 1200 × 675 size the metadata declares. */
export function shareImageUrl(src: string): string {
  return isSanityImage(src) ? sanityImageUrl(src, { w: 1200, h: 675, fit: 'crop', fm: 'jpg' }) : absoluteImageUrl(src);
}
