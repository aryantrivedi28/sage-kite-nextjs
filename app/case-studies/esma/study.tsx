import type { CaseStudy } from '@/content/case-studies/types';
import { EsmaCover } from '@/components/case-studies/covers';
import { MigrationFlow } from '@/components/case-studies/MigrationFlow';
import { ScreenshotTabs } from '@/components/case-studies/ScreenshotTabs';
import { DashboardToggle } from '@/components/case-studies/DashboardToggle';
import { BrowserFrame, Checklist, PurchasePath } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_Esma_Shopify-Migration_Case-Study.html, supplied by the team.
 * All copy is kept exactly as written in the source file; only the site's brand
 * colours and font are applied. Project details are as provided by the developer
 * (Apoorv Bhatt). No conversion, traffic or revenue figures were provided, so
 * `results` is empty. Screenshots are of the live store at esmastore.com,
 * extracted from the source file.
 */
const IMG = '/images/case-studies/esma';
const LIVE = 'https://esmastore.com/';

const study: CaseStudy = {
  slug: 'esma',
  client: 'Esma',
  title: 'WooCommerce to Shopify migration for a jewellery brand, with zero downtime or data loss',
  seoTitle: 'WooCommerce to Shopify Case Study: Esma',
  ogTitle: 'WooCommerce to Shopify migration for Esma: zero downtime, zero data loss',
  description: 'How jewellery brand Esma moved from WooCommerce to Shopify with zero downtime or data loss, plus a premium storefront and custom checkout logic.',
  summary: 'How a jewellery brand moved from WordPress and WooCommerce to a premium Shopify storefront without losing customer data, orders or products.',
  keywords: ['WooCommerce to Shopify migration', 'Shopify migration case study', 'Esma jewellery', 'Shopify Prestige theme', 'custom Shopify analytics reports'],
  datePublished: '2026-10-14',
  industry: 'Direct-to-consumer jewellery',
  discipline: 'Shopify migration',
  origin: 'Previous work by a Sage Kite delivery specialist',
  cover: <EsmaCover />,
  practitioner: { name: 'Apoorv Bhatt', role: 'Developer' },
  highlights: ['Platform migration', 'Prestige storefront', 'Checkout button logic', 'Custom analytics reports'],
  results: [],

  hero: {
    dek: 'How Esma moved from a legacy WordPress store to a premium Shopify storefront built to convert.',
    lede: 'Esma needed to leave a legacy WordPress and WooCommerce setup without losing its customer data, order history or product catalogs. It also needed a premium storefront that could scale, plus the features to lift conversion and give the team deeper business intelligence.',
    visual: (
      <BrowserFrame
        url="esmastore.com"
        src={`${IMG}/home.webp`}
        width={1400}
        height={669}
        alt="Esma home page with a full-width video hero reading Stories cast in silver and an Explore the collection button"
        priority
      />
    ),
    glance: [
      { label: 'Client', value: 'Esma, a direct-to-consumer jewellery brand' },
      { label: 'Project type', value: 'Migration and conversion optimization' },
      { label: 'Platform', value: 'Shopify, official Prestige theme' },
      { label: 'Moved from', value: 'WordPress and WooCommerce' },
      { label: 'Developer', value: 'Apoorv Bhatt' },
      { label: 'Live store', value: <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">esmastore.com</a> },
    ],
  },

  metrics: {
    items: [
      { value: 'Woo → Shopify', label: 'Full platform migration', tone: 'sky' },
      { value: 'Zero', label: 'Downtime or data loss during the switch', tone: 'butter' },
      { value: 'Prestige', label: 'Official Shopify theme, store built from scratch', tone: 'coral' },
      { value: 'Custom', label: 'Checkout button logic and analytics reports', tone: 'sage' },
    ],
  },

  problem: {
    heading: 'A premium jewellery brand stuck on a legacy WordPress and WooCommerce store',
    intro: 'Esma required a robust digital transformation. The brand needed to move away from its legacy WordPress and WooCommerce environment to a scalable, premium Shopify storefront, one that preserved its historical data while adding features to drive conversion and provide deeper business intelligence.',
    items: [
      { title: 'A scalable, premium storefront', text: 'A Shopify store with the look and feel of a high-end brand, ready to grow, in place of a legacy WooCommerce setup.' },
      { title: 'Historical data preserved', text: 'Customer data, order history and product catalogs had to come across intact, with nothing lost in the move.' },
      { title: 'Features that convert and report', text: 'Advanced functionality to drive conversion rates and give the business deeper business intelligence.' },
    ],
  },

  approach: {
    label: 'The solution',
    heading: 'A full-stack Shopify migration and development plan, built around data integrity and user experience',
    intro: 'We executed a full-stack migration and development strategy in four parts. Jump to any of them below.',
    steps: [
      { title: 'Platform migration', text: 'WordPress and WooCommerce to Shopify, with backups', href: '#migration' },
      { title: 'Premium storefront', text: 'Built from scratch on the official Prestige theme', href: '#storefront' },
      { title: 'Conversion optimization', text: 'Custom checkout button logic', href: '#cro' },
      { title: 'Business intelligence', text: 'Custom analytics reports for the client\'s KPIs', href: '#analytics' },
    ],
  },

  sections: [
    {
      id: 'migration',
      label: 'Platform migration',
      heading: 'WooCommerce to Shopify migration without losing customers, orders or products',
      intro: 'The entire ecosystem was migrated from WordPress and WooCommerce to Shopify. That included a secure transfer of customer data, order history and product catalogs, with comprehensive data backups to ensure zero loss.',
      content: (
        <MigrationFlow
          title="How the data moved"
          source={{ name: 'WordPress + WooCommerce', note: 'Legacy store' }}
          target={{ name: 'Shopify', note: 'Prestige theme storefront' }}
          items={['Customer data', 'Order history', 'Product catalogs']}
          middle={['Comprehensive', 'data backups']}
          captions={{
            run: 'Backing up first, then transferring customer data, order history and product catalogs to Shopify.',
            done: 'Backed up, transferred and live on Shopify. Zero downtime and no data lost during the switch.',
          }}
          ariaLabel="Diagram: customer data, order history and product catalogs are backed up and moved from WordPress and WooCommerce to Shopify"
        />
      ),
    },
    {
      id: 'storefront',
      label: 'Premium storefront design',
      heading: 'A premium Shopify storefront built on the official Prestige theme',
      intro: 'The store was developed from scratch using the official Shopify Prestige theme, chosen for its high-end aesthetic and its suitability for D2C storytelling. The result is a premium, responsive interface built on the Prestige architecture.',
      content: (
        <ScreenshotTabs
          url="esmastore.com"
          shots={[
            {
              label: 'Home page',
              src: `${IMG}/home.webp`, width: 1400, height: 669,
              alt: 'Esma home page: full-width video hero reading Stories cast in silver, navigation by product type, and a WhatsApp button',
              caption: 'Home page: a full-width video hero with the line "Stories cast in silver" and a clear call to action. Navigation groups the range by product type, with best sellers and collections one click away, and a WhatsApp button stays in reach.',
            },
            {
              label: 'Best sellers',
              src: `${IMG}/best-sellers.webp`, width: 1400, height: 676,
              alt: 'Esma Best Sellers section showing four products with prices and star ratings',
              caption: 'Best sellers: each product card carries its name, price and star rating, so social proof sits right next to the product.',
            },
            {
              label: 'Jewellery in Motion',
              src: `${IMG}/jewellery-in-motion.webp`, width: 1400, height: 675,
              alt: 'Esma Jewellery in Motion section: a swipeable carousel of short videos, each with a product name and price',
              caption: 'Jewellery in Motion: a swipeable carousel of short videos, each paired with the piece’s name and price.',
            },
            {
              label: 'Shop the look',
              src: `${IMG}/shop-the-look.webp`, width: 1400, height: 674,
              alt: 'Esma Shop the Look section called The Heritage Edit, with styled photography and a View product button',
              caption: 'Shop the look, The Heritage Edit: styled photography with tappable points that lead to the individual pieces.',
            },
          ]}
          note={<>Screenshots of the live storefront. <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">Visit esmastore.com</a></>}
        />
      ),
    },
    {
      id: 'cro',
      label: 'Conversion rate optimization',
      heading: 'Conversion rate optimization: custom checkout button logic to improve the add-to-cart rate',
      intro: 'Custom checkout button logic was engineered for the store. This bespoke functionality was designed specifically to streamline the path to purchase, directly improving the add-to-cart (ATC) rate.',
      content: (
        <div className="cs-sim">
          <div className="cs-scroll">
            <PurchasePath
              steps={['Browse', 'Add to cart', 'Checkout', 'Purchase']}
              at={1}
              callout={['Custom checkout', 'button logic']}
              ariaLabel="Path to purchase: browse, add to cart, checkout, purchase, with the custom checkout button logic sitting between add to cart and checkout"
            />
          </div>
          <p className="cs-sim-caption">The custom logic sits where interest turns into purchase, shortening the path from add to cart to checkout.</p>
          <p className="note">Illustrative path to purchase, not a measured funnel. No conversion figures were provided for this project.</p>
        </div>
      ),
    },
    {
      id: 'analytics',
      label: 'Business intelligence',
      heading: 'Custom Shopify analytics reports built around the client\'s KPIs',
      intro: 'Custom analytics reports were built for Esma\'s specific KPIs, moving beyond the standard Shopify dashboards to provide actionable insights. The result is a custom reporting infrastructure for long-term growth.',
      content: (
        <DashboardToggle
          title="Standard dashboard or custom report"
          standard={[
            { label: 'Sales over time', bars: [40, 55, 48, 70, 62, 80] },
            { label: 'Orders', bars: [50, 42, 60, 58, 72, 66] },
            { label: 'Top products', bars: [80, 64, 50, 38, 30, 22] },
          ]}
          custom={[
            { label: '[Client KPI 1]', bars: [35, 48, 58, 66, 78, 90] },
            { label: '[Client KPI 2]', bars: [70, 62, 68, 54, 60, 46] },
            { label: '[Client KPI 3]', bars: [30, 44, 40, 62, 74, 82] },
          ]}
          insight={{ title: 'Actionable insight', text: '[What the business should act on, based on its own KPIs]' }}
          captions={{
            standard: 'Standard dashboards report general store activity.',
            custom: 'Custom reports are built around the client’s own KPIs and point to what the business should act on.',
          }}
          note="Illustration with placeholder labels and shapes, not Esma's data."
        />
      ),
    },
  ],

  changes: {
    label: 'Key deliverables',
    heading: 'What Esma received from the Shopify migration',
    items: [
      { icon: 'shield', title: 'Seamless migration', text: 'Zero downtime or data loss during the WooCommerce to Shopify switch.' },
      { icon: 'devices', title: 'Enhanced user experience', text: 'A premium, responsive interface built on the Prestige architecture.' },
      { icon: 'bars', title: 'Data-driven decisions', text: 'A custom reporting infrastructure implemented for long-term growth.' },
    ],
  },

  methods: {
    label: 'Platforms and tools',
    heading: 'Platforms and tools used in the project',
    items: [
      { title: 'WordPress and WooCommerce', text: 'The legacy source environment' },
      { title: 'Shopify', text: 'The destination platform' },
      { title: 'Shopify Prestige theme', text: 'Official theme, store built from scratch' },
      { title: 'Custom checkout button logic', text: 'Built to streamline the path to purchase' },
      { title: 'Custom analytics reports', text: 'Tailored to the client\'s specific KPIs' },
      { title: 'Comprehensive data backups', text: 'Taken to ensure zero loss in the move' },
    ],
  },

  takeaway: {
    label: 'Who this approach suits',
    heading: 'Moving from WooCommerce to Shopify: keep every record, add what helps you grow',
    versus: {
      before: { title: 'Kept through the migration', visual: <Checklist items={['Customer data', 'Order history', 'Product catalogs']} /> },
      after: { title: 'Added on Shopify', visual: <Checklist tone="coral" items={['A premium Prestige storefront', 'Custom checkout button logic', 'Custom analytics reports']} /> },
    },
    body: 'This approach suits brands that have outgrown a legacy WooCommerce setup and want a premium Shopify storefront without losing their historical data, along with the conversion logic and reporting to keep growing.',
    fit: ['Brands outgrowing WooCommerce', 'D2C stores that need a premium storefront', 'Teams that need reporting beyond standard dashboards'],
  },

  about: {
    heading: 'Delivered by Apoorv Bhatt, developer',
    text: 'Previous work by Apoorv Bhatt, developer at Sage Kite. Apoorv built this project for Esma, from the WooCommerce data migration through the Prestige storefront, the custom checkout button logic and the analytics reports described above. It shows how Sage Kite\'s developers approach a platform migration: protect the data first, build the storefront around the brand, then add the logic and reporting that help it sell and be measured. Project details are as provided by Apoorv.',
  },

  cta: {
    heading: 'Planning a WooCommerce to Shopify migration?',
    text: 'Book a discovery call and we\'ll look at what needs to move, what needs to be rebuilt, and where your store can convert and report better.',
    secondary: { label: 'Explore services', href: '/services' },
  },
};

export default study;
