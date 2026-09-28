/**
 * The platforms Sage Kite implements, in homepage order.
 *
 * Used by the homepage "Platforms" grid (components/home/PlatformsAndIndustries.tsx)
 * and by app/sitemap.ts. When a platform page is published at
 * app/platforms/<slug>/page.tsx, add its `slug` here: the homepage name becomes
 * a link and the page is added to the sitemap. Leave `slug` off until the page exists.
 */
export interface Platform {
  name: string;
  /** Folder name under app/platforms/. Lowercase. Only set once the page exists. */
  slug?: string;
}

export const PLATFORMS: Platform[] = [
  { name: 'GoHighLevel' },
  { name: 'Keap' },
  { name: 'Follow Up Boss' },
  { name: 'Lofty', slug: 'lofty' },
  { name: 'ServiceTitan' },
  { name: 'Housecall Pro' },
  { name: 'Jobber', slug: 'jobber' },
  { name: 'Kajabi', slug: 'kajabi' },
  { name: 'Clio Grow' },
  { name: 'Dubsado', slug: 'dubsado' },
  { name: 'Mindbody' },
  { name: 'Bloomerang', slug: 'bloomerang' },
  { name: 'HoneyBook', slug: 'honeybook' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'ActiveCampaign', slug: 'activecampaign' },
];

/** Slugs of every platform that has a published page. */
export const PLATFORM_PAGE_SLUGS = PLATFORMS.flatMap((p) => (p.slug ? [p.slug] : []));
