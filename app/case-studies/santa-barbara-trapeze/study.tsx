import type { CaseStudy } from '@/content/case-studies/types';
import { SmartCollections } from '@/components/case-studies/SmartCollections';
import { Countdown } from '@/components/case-studies/Countdown';
import { Checklist, Journey, SeoSnippet, StatCard } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_Santa-Barbara-Trapeze_Shopify-Upgrade_Case-Study.html, supplied by the team.
 * All copy is kept exactly as written in the source file; only the site's brand
 * colours and font are applied. The meta title and description are shortened to
 * fit the length limits. This is a Sage Kite client project. No results were
 * measured, so `results` is empty and the listing card shows the `metrics` tiles.
 * The catalog counts and the search snippet are from the live store (October 2026),
 * as stated in the source. The source has no screenshots.
 */
const LIVE = 'https://sbtrapeze.com/';

const study: CaseStudy = {
  slug: 'santa-barbara-trapeze',
  client: 'Santa Barbara Trapeze',
  title: 'Shopify store upgrade and automation for a Santa Barbara trapeze studio: Impulse theme, smart collections, SEO and countdown timers',
  seoTitle: 'Shopify Upgrade Case Study: Santa Barbara Trapeze',
  ogTitle: 'Shopify store upgrade and automation for Santa Barbara Trapeze: smart collections, SEO and countdown timers',
  description: 'How Santa Barbara Trapeze Co. upgraded its Shopify store: the Impulse theme, smart collections, data and SEO fixes, and countdown timers for sale events.',
  summary: 'How a Santa Barbara trapeze studio upgraded its Shopify store with the Impulse theme, self-updating smart collections, SEO fixes and countdown timers.',
  keywords: ['Shopify store upgrade', 'Shopify smart collections', 'Shopify Impulse theme', 'Santa Barbara Trapeze', 'Shopify countdown timer', 'Shopify SEO metadata'],
  datePublished: '2026-10-15',
  industry: 'Trapeze and acrobatics studio',
  discipline: 'Shopify store upgrade and automation',
  origin: 'A Sage Kite client project',
  highlights: ['Impulse theme', 'Smart collections', 'Data and SEO', 'Countdown timers'],
  results: [],

  hero: {
    label: 'Case study · Shopify store upgrade and automation',
    dek: 'Automated merchandising, cleaner data and urgency for event sales.',
    lede: 'Santa Barbara Trapeze Co. needed its Shopify store to handle a growing catalog. We upgraded the store infrastructure, automated its merchandising with smart collections, fixed its data and SEO metadata, and added countdown timers to drive faster purchases during sale events.',
    visual: (
      <StatCard
        items={[
          { value: '115', label: 'published products' },
          { value: '26', label: 'collections' },
        ]}
        caption="The store's catalog today, counted from the live storefront in October 2026: flying trapeze, parkour, trampoline and acrobatics classes, camps, memberships and merchandise."
      />
    ),
    glance: [
      { label: 'Client', value: 'Santa Barbara Trapeze Co. (SB Trapeze), a US brand' },
      { label: 'Project type', value: 'Store upgrade and automation' },
      { label: 'Platform', value: 'Shopify, Impulse theme' },
      { label: 'Scope', value: 'Theme upgrade, smart collections, data and SEO, countdown timers' },
      { label: 'Our role', value: 'Sage Kite client engagement' },
      { label: 'Live store', value: <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">sbtrapeze.com</a> },
    ],
  },

  metrics: {
    items: [
      { value: 'Impulse', label: 'Theme the store was migrated to, for its merchandising features', tone: 'sky' },
      { value: 'Smart', label: 'Collections that fill themselves from logic rules', tone: 'butter' },
      { value: 'Countdown', label: 'Timers that highlight sale events', tone: 'coral' },
      { value: 'SEO', label: 'Data fixed and metadata updated for new products', tone: 'sage' },
    ],
  },

  problem: {
    label: 'The challenge',
    heading: 'A growing Shopify catalog needed automation, clean data and urgency to convert event sales',
    intro: 'Santa Barbara Trapeze needed to upgrade its existing digital presence to handle a growing catalog. The focus was on automation, data integrity, and creating a sense of urgency to drive conversions for specific events.',
    items: [
      { title: 'A catalog that keeps growing', text: 'More classes, camps, memberships and merchandise meant more products to list, sort and keep current by hand.' },
      { title: 'Data integrity and discoverability', text: 'Underlying data issues needed fixing, and new products needed SEO metadata so people could find them in search.' },
      { title: 'Urgency for specific events', text: 'Sale events needed a visible cue to prompt faster buying decisions and convert more of the traffic.' },
    ],
  },

  approach: {
    label: 'The solution',
    heading: 'A Shopify theme upgrade, smart collections, SEO fixes and countdown timers: what we added',
    intro: 'We upgraded the store infrastructure to support a larger inventory and automated merchandising. Four features were added. Jump to any of them below.',
    steps: [
      { title: 'Theme upgrade', text: 'Migrated to Impulse for stronger merchandising', href: '#theme' },
      { title: 'Smart collections', text: 'Automated listings from logic rules', href: '#smart' },
      { title: 'Data and SEO', text: 'Data fixed, metadata updated', href: '#seo' },
      { title: 'Countdown timers', text: 'Urgency for sale events', href: '#timers' },
    ],
  },

  sections: [
    {
      id: 'theme',
      label: 'Theme upgrade',
      heading: 'Shopify theme upgrade to Impulse: stronger merchandising for a larger catalog',
      intro: 'We migrated the store to the Impulse theme to leverage its superior merchandising features. A larger inventory needs a theme built to present many products clearly, and the upgrade gave the store that foundation.',
      content: (
        <>
          <Journey
            ariaLabel="Theme upgrade path"
            steps={[
              { small: 'Existing store', text: 'A growing catalog to present' },
              { small: 'Migrated to Impulse', text: 'Theme upgrade on Shopify' },
              { small: 'Better merchandising', text: 'Built to support a larger inventory' },
            ]}
          />
          <p className="note">The live store&apos;s theme data confirms it runs Impulse.</p>
        </>
      ),
    },
    {
      id: 'smart',
      label: 'Automated merchandising',
      heading: 'Shopify smart collections: automated merchandising that cuts manual work',
      intro: 'We created Smart Collections based on logic rules, so product listings update automatically. A new product that matches a rule lands in the right collection without anyone adding it by hand, which reduces manual work for the client.',
      content: (
        <SmartCollections
          title="Add a product and watch it sort itself"
          collections={[
            { name: 'Camps', rule: 'Rule: product type is Camp', add: 'Add a camp', noun: 'camp' },
            { name: 'Parkour classes', rule: 'Rule: product type is Parkour Class', add: 'Add a parkour class', noun: 'parkour class' },
            { name: 'Memberships', rule: 'Rule: product type is Membership', add: 'Add a membership', noun: 'membership' },
          ]}
          newItem="[New {noun} {n}]"
          captions={{
            initial: 'Each collection fills itself from its rule. Add a product to see it.',
            added: 'A new {noun} matched its rule and joined the collection automatically. Nothing was added by hand.',
          }}
          note="Illustration with example rules, not the store's actual rules. Today the live store organizes 115 products across 26 collections."
        />
      ),
    },
    {
      id: 'seo',
      label: 'Data and SEO',
      heading: 'Shopify SEO metadata and data integrity fixes so new products get discovered in search',
      intro: 'We fixed underlying data integrity issues and updated SEO metadata, so new products were discoverable in search engines. Clean data keeps the catalog reliable, and clear titles and descriptions help search engines and shoppers understand each page.',
      content: (
        <SeoSnippet
          url="sbtrapeze.com › collections › camps"
          title="Kids Camps in Santa Barbara | Fall & Winter Break | SBTC"
          description="Fall and winter break camps in Santa Barbara. Trapeze and parkour ages 6 to 14, Tiny Flyers ages 3 to 5. Nov 23 to 27 and Dec 21 to 31. From $215."
          caption="A collection page as it reads in search on the live store today (October 2026)."
          points={[
            { title: 'Descriptive titles', text: 'Say what the page is, for whom and where.' },
            { title: 'Useful descriptions', text: 'Include ages, dates and a starting price, which are the details a searcher is looking for.' },
            { title: 'Reliable data underneath', text: 'Fixed data integrity issues keep products, collections and metadata consistent.' },
          ]}
        />
      ),
    },
    {
      id: 'timers',
      label: 'Conversion tactics',
      heading: 'Countdown timers on Shopify to create urgency for sale events and prompt faster purchasing decisions',
      intro: 'We implemented urgency indicators, specifically countdown timers, to highlight sale events and prompt faster purchasing decisions. For an event with a fixed date, a visible clock makes the deadline concrete.',
      content: (
        <Countdown
          title="A countdown for a sale event"
          label="[Sale event] ends in"
          cta="[Call to action]"
          start={2 * 86400 + 4 * 3600 + 36 * 60 + 12}
          ariaLabel="Example countdown to a sample sale event"
          caption="A countdown ties a sale to a real end date, so shoppers know how long they have to decide."
          note="Illustration with placeholder text and a sample time, not a live event. The timers appear when a sale event is being promoted."
        />
      ),
    },
  ],

  changes: {
    label: 'Key deliverables',
    heading: 'What Santa Barbara Trapeze received: automation, discovery and urgency',
    items: [
      { icon: 'dial', title: 'Automation', text: 'Self-updating product collections that save operational time.' },
      { icon: 'search', title: 'Discovery', text: 'Improved search engine visibility for new inventory.' },
      { icon: 'clock', title: 'Urgency', text: 'Visual cues designed to accelerate the customer\'s buying decision.' },
    ],
  },

  methods: {
    label: 'Platforms and tools',
    heading: 'Platforms and tools used in the project',
    items: [
      { title: 'Shopify', text: 'The store platform' },
      { title: 'Impulse theme', text: 'Chosen for its merchandising features' },
      { title: 'Smart Collections', text: 'Logic rules for automated listings' },
      { title: 'SEO metadata', text: 'Updated so new products are discoverable' },
      { title: 'Data integrity fixes', text: 'Underlying catalog data corrected' },
      { title: 'Countdown timers', text: 'Urgency indicators for sale events' },
    ],
  },

  takeaway: {
    label: 'Who this approach suits',
    heading: 'Shopify store upgrades for growing catalogs: automate the merchandising, fix the data, add urgency',
    versus: {
      before: { title: 'Behind the scenes', visual: <Checklist items={['Smart collections that update themselves', 'Data integrity issues fixed', 'SEO metadata kept current']} /> },
      after: { title: 'In front of the customer', visual: <Checklist tone="coral" items={['A theme built for merchandising', 'New products that can be found', 'Countdown timers on sale events']} /> },
    },
    body: 'This approach suits Shopify stores whose catalog is growing faster than the team can maintain it, and that run dated events or sales where timing drives the purchase.',
    fit: ['Stores with a growing catalog', 'Brands running dated events and sales', 'Teams tired of manual collection updates'],
  },

  about: {
    heading: 'Delivered by Sage Kite for Santa Barbara Trapeze Co.',
    text: 'Santa Barbara Trapeze Co. is a Sage Kite client. We acted as the technical partner behind its store upgrade, from the Impulse theme migration and the smart collections to the data and SEO fixes and the countdown timers described above. The pattern is one we use for any growing store: put the structure and the data right first, then add the cues that help customers decide.',
  },

  cta: {
    heading: 'Is your Shopify catalog growing faster than your team can keep up?',
    text: 'Book a discovery call and we\'ll look at what can be automated, what the data needs, and where urgency could help your sales events.',
    secondary: { label: 'Explore services', href: '/services' },
  },
};

export default study;
