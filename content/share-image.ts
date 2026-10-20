import shareImage from '@/public/images/share/sage-kite-default.png';

/**
 * Default social share image for pages that have no image of their own (approved design,
 * see decision.md D011). Blog posts and Founder's Thoughts essays set their own image and
 * must not use this.
 *
 * Next.js replaces a parent's `openGraph` / `twitter` object instead of merging it, so a page
 * that sets its own `openGraph` or `twitter` block must list these images itself. The root
 * layout's copy only reaches pages that set neither block.
 *
 * The static import gives a content-hashed URL, so a new image gets a new URL that social
 * platforms fetch fresh.
 */
const ALT = 'Sage Kite logo with the tagline: Business growth through systems, people and execution.';

export const DEFAULT_OG_IMAGES = [
  { url: shareImage.src, width: shareImage.width, height: shareImage.height, type: 'image/png', alt: ALT },
];

export const DEFAULT_TWITTER_IMAGES = [{ url: shareImage.src, alt: ALT }];
