/*
 * Helpers for images stored in this project's Sanity asset store. Pure functions:
 * used on the server (metadata, JSON-LD, next/image) and in the studio preview.
 * Sanity serves resized images from its CDN when given URL parameters
 * (w, h, fit, fm, auto=format).
 */

const SITE_URL = 'https://www.sagekite.com';

// https://cdn.sanity.io/images/<project>/<dataset>/<hash>-<width>x<height>.<ext>, no query string
const SANITY_IMAGE = /^https:\/\/cdn\.sanity\.io\/images\/([a-z0-9]+)\/[\w-]+\/[a-f0-9]+-(\d+)x(\d+)\.[a-z]+$/;

/** An unmodified image URL from this project's Sanity CDN (what next.config.ts allows). */
export function isSanityImage(src: string): boolean {
  const m = SANITY_IMAGE.exec(src);
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
  return !!m && !!projectId && m[1] === projectId;
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

/**
 * A path to an image file on this site: under /images/ or a single file at the site root (such as
 * /aryan_t.jpeg). No query, no host, no `..`, and nothing under /api/ or /_next/.
 */
const SITE_IMAGE_PATH = /^\/(?:images\/(?:[A-Za-z0-9._~%-]+\/)*[A-Za-z0-9._~%-]+|[A-Za-z0-9][A-Za-z0-9._~%-]*)\.(?:jpe?g|png|webp|avif|gif|svg)$/i;

export function isSiteImagePath(src: string): boolean {
  return SITE_IMAGE_PATH.test(src) && !src.includes('..');
}

/**
 * The only image sources the blog accepts: a file on this site or an unmodified upload to this
 * project's Sanity CDN. Anything else (another host, a query string, `data:`, `javascript:`) is
 * refused, so a crafted request cannot plant a tracking pixel or hotlink in a post.
 */
export function isAllowedImageSrc(src: string): boolean {
  return isSiteImagePath(src) || isSanityImage(src);
}

/** Featured and author images, which next/image shows: the same two sources. */
export function isUsableFeaturedImage(src: string): boolean {
  return isAllowedImageSrc(src);
}

/**
 * The image source an article should render, or null to render nothing. Published pages show only
 * allowed sources, whatever is stored. The studio preview also shows images the editor just picked in
 * this browser (`data:` URLs of raster images), which never reach a published page.
 */
export function imageSrcForRender(src: string, preview = false): string | null {
  if (isAllowedImageSrc(src)) return src;
  if (preview && /^data:image\/(?:png|jpe?g|webp|gif);base64,[A-Za-z0-9+/=]+$/.test(src)) return src;
  return null;
}

/** Absolute URL for metadata and JSON-LD. */
export function absoluteImageUrl(src: string): string {
  return src.startsWith('/') ? `${SITE_URL}${src}` : src;
}

/** Social share image: Sanity images are cropped to the 1200 × 675 size the metadata declares. */
export function shareImageUrl(src: string): string {
  return isSanityImage(src) ? sanityImageUrl(src, { w: 1200, h: 675, fit: 'crop', fm: 'jpg' }) : absoluteImageUrl(src);
}
