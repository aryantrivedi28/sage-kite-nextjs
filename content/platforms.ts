/**
 * The platforms Sage Kite implements, in homepage order.
 *
 * Used by the homepage "Platforms" grid (components/home/PlatformsAndIndustries.tsx),
 * the /platforms directory (app/platforms/page.tsx) and app/sitemap.ts.
 * When a platform page is published at app/platforms/<slug>/page.tsx, add its
 * `slug` here: the name becomes a link on the homepage and the directory, and the
 * page is added to the sitemap. Leave `slug` off until the page exists.
 */
export type PlatformGroupId =
  | 'cross-industry'
  | 'real-estate'
  | 'home-services'
  | 'coaching'
  | 'law-firms'
  | 'service-businesses'
  | 'fitness-wellness'
  | 'nonprofits';

export interface Platform {
  name: string;
  /** Folder name under app/platforms/. Lowercase. Only set once the page exists. */
  slug?: string;
  /** Directory group on /platforms. */
  group: PlatformGroupId;
  /** One line for the /platforms directory card. Plain text. */
  summary: string;
}

export interface PlatformGroup {
  id: PlatformGroupId;
  label: string;
  description: string;
  /** Brand colour token for the group's accent, e.g. 'var(--sage)'. */
  color: string;
}

/** Directory groups on /platforms, in display order. Groupings are positioning, not limits. */
export const PLATFORM_GROUPS: PlatformGroup[] = [
  { id: 'cross-industry', label: 'Cross-industry', color: 'var(--sage)', description: 'CRM and marketing automation platforms that suit many kinds of business.' },
  { id: 'real-estate', label: 'Real estate', color: 'var(--coral)', description: 'Lead routing, agent follow-up and pipeline visibility for agents, teams and brokerages.' },
  { id: 'home-services', label: 'Home services', color: 'var(--sky)', description: 'Booking, estimates, service plans and follow-up for trade and home service businesses.' },
  { id: 'coaching', label: 'Coaches and course businesses', color: 'var(--butter)', description: 'Enquiries, enrolment and student communication for people who sell knowledge.' },
  { id: 'law-firms', label: 'Law firms', color: 'var(--ink)', description: 'Client intake, consultation booking and follow-up before a matter is opened.' },
  { id: 'service-businesses', label: 'Service businesses', color: 'var(--sage)', description: 'Enquiries, proposals, contracts and onboarding for client-based service businesses.' },
  { id: 'fitness-wellness', label: 'Fitness and wellness', color: 'var(--coral)', description: 'Intro offers, memberships and retention for studios, gyms and wellness centres.' },
  { id: 'nonprofits', label: 'Nonprofits', color: 'var(--sky)', description: 'Donor records, gift entry, thank-yous and retention for fundraising teams.' },
];

export const PLATFORMS: Platform[] = [
  { name: 'GoHighLevel', group: 'cross-industry', summary: 'Lead management, follow-up and marketing operations in one place. Delivered with GHL Scale Up.' },
  { name: 'Keap', slug: 'keap', group: 'cross-industry', summary: 'Contact management, automation and repeatable sales follow-up for small businesses.' },
  { name: 'Follow Up Boss', slug: 'follow-up-boss', group: 'real-estate', summary: 'Lead routing, Action Plans and agent accountability for real estate teams.' },
  { name: 'Lofty', slug: 'lofty', group: 'real-estate', summary: 'Lead routing, Smart Plans and AI for agents, teams and brokerages.' },
  { name: 'ServiceTitan', slug: 'servicetitan', group: 'home-services', summary: 'Pricebook, dispatch, memberships and reporting for established trade businesses.' },
  { name: 'Housecall Pro', slug: 'housecall-pro', group: 'home-services', summary: 'Booking, estimate follow-up, service plans and reviews for home service businesses.' },
  { name: 'Jobber', slug: 'jobber', group: 'home-services', summary: 'Quotes, scheduling and follow-up around quotes and recurring work.' },
  { name: 'Kajabi', slug: 'kajabi', group: 'coaching', summary: 'Offers, checkout, funnels and email automation for coaches and course businesses.' },
  { name: 'Clio Grow', slug: 'clio-grow', group: 'law-firms', summary: 'Intake forms, consultation booking and follow-up, handed off to Clio Manage.' },
  { name: 'Dubsado', slug: 'dubsado', group: 'service-businesses', summary: 'Enquiries, proposals, contracts and client onboarding in repeatable workflows.' },
  { name: 'Mindbody', slug: 'mindbody', group: 'fitness-wellness', summary: 'Intro offers, memberships, campaigns and retention for studios and gyms.' },
  { name: 'Bloomerang', slug: 'bloomerang', group: 'nonprofits', summary: 'Donor records, gift entry, acknowledgements and retention for nonprofits.' },
  { name: 'HoneyBook', slug: 'honeybook', group: 'service-businesses', summary: 'The client flow from enquiry to payment for creative and service businesses.' },
  { name: 'HubSpot', slug: 'hubspot', group: 'cross-industry', summary: 'CRM architecture, pipelines, workflows and reporting for sales and marketing teams.' },
  { name: 'ActiveCampaign', slug: 'activecampaign', group: 'cross-industry', summary: 'Email marketing and automation built around your customer journey.' },
];

/** Slugs of every platform that has a published page. */
export const PLATFORM_PAGE_SLUGS = PLATFORMS.flatMap((p) => (p.slug ? [p.slug] : []));
