import type { CaseStudy } from '@/content/case-studies/types';
import { LabTheoryCover } from '@/components/case-studies/covers';
import { ScreenshotTabs } from '@/components/case-studies/ScreenshotTabs';
import { PdpToggle } from '@/components/case-studies/PdpToggle';
import { RtoFlow } from '@/components/case-studies/RtoFlow';
import { BrowserFrame, ChangeCards, Checklist, GrowthBars } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_LabTheory_Shopify-PDP-CRO_Case-Study.html, supplied by the team.
 * All copy is kept exactly as written in the source file; only the site's brand
 * colours and font are applied. The meta title and description are shortened to
 * fit the length limits, as for Esma and Get Daily. Project details are as
 * provided by the developer (Apoorv Bhatt). Order and sales figures are from a
 * Shopify Analytics screenshot with no absolute "before" figures, so `results`
 * is empty and the listing card shows the `metrics` tiles. Screenshots are of
 * the live store at labtheory.co, extracted from the source file.
 */
const IMG = '/images/case-studies/labtheory';
const LIVE = 'https://labtheory.co/';

const study: CaseStudy = {
  slug: 'labtheory',
  client: 'LabTheory',
  title: 'Shopify product page (PDP) redesign and CRO for a men\'s skincare brand: over 5x orders',
  seoTitle: 'Shopify PDP Redesign Case Study: LabTheory',
  ogTitle: 'Shopify PDP redesign and CRO for LabTheory: over 5x orders',
  description: 'How men\'s skincare brand LabTheory redesigned its Shopify product page with CRO strategies, saw orders jump over 5x and targeted RTO on cash on delivery.',
  summary: 'How a men\'s skincare brand revamped its Shopify product page UI with CRO strategies, saw orders jump by over 5x and targeted RTO on cash on delivery.',
  keywords: ['Shopify PDP redesign', 'Shopify CRO case study', 'LabTheory', 'men\'s skincare Shopify store', 'reduce RTO on cash on delivery', 'SEO-friendly product content'],
  datePublished: '2026-10-15',
  industry: 'Men\'s skincare',
  discipline: 'Shopify CRO and PDP redesign',
  origin: 'Previous work by a Sage Kite delivery specialist',
  cover: <LabTheoryCover />,
  practitioner: { name: 'Apoorv Bhatt', role: 'Developer' },
  highlights: ['PDP redesign', 'CRO strategies', 'SEO-friendly content', 'Targeted payments'],
  results: [],

  hero: {
    dek: 'A new product page UI, SEO-friendly content and targeted payment methods to cut COD returns.',
    lede: 'LabTheory is a men\'s skincare brand. We revamped its product page (PDP) UI using conversion rate optimization strategies, and orders jumped by over 5x with the new UI. We also implemented targeted payment methods to reduce RTO on cash on delivery orders.',
    visual: (
      <BrowserFrame
        url="labtheory.co"
        src={`${IMG}/launch-offers.webp`}
        width={1400}
        height={672}
        alt="LabTheory home page banner: Sunscreen Launch Offers, with three black sunscreen tubes, the offers Buy 2 Get 1 FREE and 200 rupees off on first 100 orders, and a Shop Offers button"
        priority
      />
    ),
    glance: [
      { label: 'Client', value: 'LabTheory, a men\'s skincare brand' },
      { label: 'Project type', value: 'PDP redesign and conversion rate optimization' },
      { label: 'Platform', value: 'Shopify' },
      { label: 'Also', value: 'Targeted payment methods to reduce RTO on COD' },
      { label: 'Developer', value: 'Apoorv Bhatt' },
      { label: 'Live store', value: <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">labtheory.co</a> },
    ],
  },

  metrics: {
    items: [
      { value: '5x+', label: 'Jump in orders with the new UI, as reported', tone: 'coral' },
      { value: '1,044', label: 'Orders in the last 90 days, up 422%', tone: 'sky' },
      { value: '₹5.2L', label: 'Gross sales in the last 90 days, up 445%', tone: 'butter' },
      { value: 'RTO', label: 'Targeted payment methods to reduce returns on COD', tone: 'sage' },
    ],
    note: 'Order and sales figures are from the store\'s Shopify Analytics for the last 90 days (16 Jul to 14 Oct 2026), compared with the comparison period selected in Shopify.',
  },

  problem: {
    label: 'The challenge',
    heading: 'A men\'s skincare brand needed its Shopify product pages to convert better and its COD returns reduced',
    intro: 'For LabTheory, the product page is where a skincare shopper decides. The brand wanted the PDP to convert more visitors, to inform as well as attract, and to carry content that search engines can understand. Cash on delivery orders also needed attention, because return to origin (RTO) is a common cost of cash on delivery.',
    items: [
      { title: 'A product page that converts more', text: 'The PDP needed a new UI, built with CRO strategies, to turn more visitors into orders.' },
      { title: 'More information, easier to find', text: 'Shoppers needed more product information, and search engines needed SEO-friendly content to read.' },
      { title: 'RTO on cash on delivery', text: 'Cash on delivery orders can come back as RTO, so payment methods were targeted to reduce it.' },
    ],
  },

  approach: {
    label: 'The solution',
    heading: 'A new Shopify PDP UI, SEO-friendly content and targeted payment methods: how we grew orders and worked to reduce COD returns',
    intro: 'The work came in three parts, and the results are shown in the store\'s own analytics. Jump to any of them below.',
    steps: [
      { title: 'PDP redesign', text: 'A more attractive, more informational UI', href: '#pdp' },
      { title: 'SEO-friendly content', text: 'Product information that gets found', href: '#content' },
      { title: 'Targeted payments', text: 'Reducing RTO on cash on delivery', href: '#rto' },
      { title: 'The results', text: 'Orders and sales, from Shopify Analytics', href: '#results' },
    ],
  },

  sections: [
    {
      id: 'pdp',
      label: 'PDP redesign',
      heading: 'Shopify PDP redesign: a more attractive, more informational product page built with CRO strategies',
      intro: 'We revamped the product page UI and implemented CRO strategies. The new UI made the product more attractive and more informational, with better SEO-friendly content.',
      content: (
        <>
          <PdpToggle
            title="What the new product page adds"
            buttons={{ before: 'Basics', after: 'With the revamp' }}
            adds={['1 · More attractive', '2 · More informational', '3 · SEO-friendly content']}
            captions={{
              before: 'The basics of any product page: an image, a name, a price and a button.',
              after: 'With the revamp: a more attractive page, more product information and SEO-friendly content.',
            }}
            note="Illustration with placeholder labels, not LabTheory's actual page."
          />
          <ChangeCards
            items={[
              { icon: 'image', title: 'More attractive', text: 'A new UI that made the product more attractive to shoppers.' },
              { icon: 'info', title: 'More informational', text: 'More product information on the page, so shoppers can decide with confidence.' },
              { icon: 'search', title: 'SEO-friendly content', text: 'Product content written so the page is easier to find in search.' },
            ]}
          />
        </>
      ),
    },
    {
      id: 'content',
      label: 'SEO-friendly content',
      heading: 'Product content for a men\'s skincare store that informs shoppers and helps pages get found',
      intro: 'Better SEO-friendly content was part of the redesign, so the same product information that helps a shopper decide also helps search engines understand the page. Here is the LabTheory storefront today.',
      content: (
        <ScreenshotTabs
          url="labtheory.co"
          shots={[
            {
              label: 'Launch offers',
              src: `${IMG}/launch-offers.webp`, width: 1400, height: 672,
              alt: 'LabTheory home page banner: Sunscreen Launch Offers with a Shop Offers button',
              caption: 'Home page banner: “Sunscreen Launch Offers”, with Buy 2 Get 1 FREE, 200 rupees off on the first 100 orders, and a Shop Offers button. A top bar announces Buy 3 Get 15% off.',
            },
            {
              label: 'New sunscreen',
              src: `${IMG}/new-sunscreen.webp`, width: 1400, height: 671,
              alt: 'LabTheory home page banner: It\'s here, a Brightening sunscreen with SPF 50 PA++++, and a Shop button',
              caption: 'Home page banner: “It’s here!”, introducing a brightening sunscreen with SPF 50 PA++++, European UV filters, pollution defence and barrier protection.',
            },
            {
              label: 'Combo collection',
              src: `${IMG}/combo-collection.webp`, width: 1400, height: 677,
              alt: 'LabTheory combo collection: Detan Kit, Body Acne Combo and Best Seller Set, each with star ratings and review counts',
              caption: 'Combo collection: kits and sets shown with star ratings and review counts, with filter and sort controls.',
            },
          ]}
          note={<>Screenshots of the live store as it appears today. <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">Visit labtheory.co</a></>}
        />
      ),
    },
    {
      id: 'rto',
      label: 'Payments',
      heading: 'Reducing RTO on cash on delivery orders with targeted payment methods on Shopify',
      intro: 'RTO, or return to origin, is when a cash on delivery parcel is not accepted and travels back to the seller. We implemented targeted payment methods to reduce RTO on COD orders.',
      content: (
        <RtoFlow
          title="Where targeted payment methods sit in the order flow"
          buttons={{ before: 'COD as is', after: 'Targeted payment' }}
          captions={{
            before: 'Without targeting, a cash on delivery order can end as delivered or as returned to origin (RTO).',
            after: 'With targeted payment methods added, the aim is to reduce the share of COD orders that end as RTO.',
          }}
          ariaLabel="Order flow: a cash on delivery order goes to a delivery attempt, which ends as delivered or as returned to origin. With targeted payment methods added at the start, the return to origin outcome is the loss being reduced."
          note="Illustrative flow. No RTO figures were provided for this project."
        />
      ),
    },
    {
      id: 'results',
      label: 'Results',
      heading: 'Over 5x more orders after the Shopify product page redesign: results from Shopify Analytics',
      intro: 'With the new UI, orders jumped by over 5x. The store\'s own Shopify Analytics for the last 90 days shows orders up 422%, which is about 5.2 times the comparison period, and gross sales up 445%.',
      content: (
        <>
          <div className="cs-sim">
            <div className="cs-sim-top"><h3>Growth against the comparison period</h3></div>
            <GrowthBars
              max={6}
              axis={['Comparison period = 1×', '6×']}
              rows={[
                { label: 'Orders', value: '+422%', approx: '≈ 5.2×', multiple: 5.22 },
                { label: 'Orders fulfilled', value: '+418%', approx: '≈ 5.2×', multiple: 5.18 },
                { label: 'Gross sales', value: '+445%', approx: '≈ 5.5×', multiple: 5.45 },
                { label: 'Total sales', value: '+453%', approx: '≈ 5.5×', multiple: 5.53 },
              ]}
              ariaLabel="Bar chart of growth multipliers against the comparison period of 1x: orders 5.2x, orders fulfilled 5.2x, gross sales 5.5x, total sales 5.5x"
            />
            <p className="note">Multiplier = 1 + the percentage change shown in Shopify Analytics. Bars are drawn to scale against 6×.</p>
          </div>
          <BrowserFrame
            src={`${IMG}/shopify-analytics.webp`}
            width={1400}
            height={489}
            alt="Shopify Analytics for LabTheory: gross sales 5.2 lakh rupees up 445 percent, returning customer rate 9.62 percent down 27 percent, orders fulfilled 990 up 418 percent, orders 1,044 up 422 percent, and a total sales over time chart of 4,80,491.65 rupees up 453 percent"
            caption="Shopify Analytics, last 90 days (16 Jul to 14 Oct 2026), cropped to the sales tiles and chart. The same screen shows a returning customer rate of 9.62%, down 27%. This project focused on the product page and payments, not on retention."
            sizes="(max-width: 1180px) 100vw, 1100px"
          />
          <p className="note">Figures are from a Shopify Analytics screenshot supplied by the developer. They reflect the whole store over the period. Other activity, such as the launch offers shown on the home page, may have contributed, so the growth should not be read as the redesign&apos;s isolated effect.</p>
        </>
      ),
    },
  ],

  methods: {
    label: 'Platforms and tools',
    heading: 'Platforms and tools used in the project',
    items: [
      { title: 'Shopify', text: 'The store platform' },
      { title: 'Product page (PDP) UI', text: 'Revamped for conversion' },
      { title: 'CRO strategies', text: 'Applied to the product page' },
      { title: 'SEO-friendly product content', text: 'More informational, easier to find' },
      { title: 'Targeted payment methods', text: 'To reduce RTO on cash on delivery' },
      { title: 'Shopify Analytics', text: 'Where the results are reported' },
    ],
  },

  takeaway: {
    label: 'Who this approach suits',
    heading: 'Product page CRO for Shopify D2C brands: convert more on the page, lose less on delivery',
    versus: {
      before: { title: 'On the page', visual: <Checklist items={['A more attractive product UI', 'More product information', 'SEO-friendly content']} /> },
      after: { title: 'After the order', visual: <Checklist tone="coral" items={['Targeted payment methods', 'Lower RTO risk on cash on delivery', 'Aimed at fewer returned orders']} /> },
    },
    body: 'This approach suits Shopify brands, especially in markets where cash on delivery is common, that want more orders from the traffic they already have and need their product pages and payments to work together.',
    fit: ['D2C brands with weak product pages', 'Stores with COD return problems', 'Brands that need SEO-friendly product content'],
  },

  about: {
    heading: 'Delivered by Apoorv Bhatt, developer',
    text: 'Previous work by Apoorv Bhatt, developer at Sage Kite. Apoorv revamped the LabTheory product page UI with CRO strategies, improved the product information and content, and implemented targeted payment methods to reduce RTO on cash on delivery orders. It shows how Sage Kite\'s developers approach conversion: fix what the shopper sees on the page, then protect the order after it is placed. Project details are as provided by Apoorv.',
  },

  cta: {
    heading: 'Want your Shopify product pages to convert better?',
    text: 'Book a discovery call and we\'ll look at your product pages, your content and your cash on delivery returns.',
    secondary: { label: 'Explore services', href: '/services' },
  },
};

export default study;
