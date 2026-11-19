import type { CaseStudy } from '@/content/case-studies/types';
import { IndustrybuyingCover } from '@/components/case-studies/covers';
import { VariantHub } from '@/components/case-studies/VariantHub';
import { CopyRewrite } from '@/components/case-studies/CopyRewrite';
import { CanonicalRules } from '@/components/case-studies/CanonicalRules';
import { RedirectCrawler } from '@/components/case-studies/RedirectCrawler';
import { CrawlWaste } from '@/components/case-studies/CrawlWaste';
import { SitemapSplit } from '@/components/case-studies/SitemapSplit';
import { RuleGrid } from '@/components/case-studies/RuleGrid';
import { UsersGrowth } from '@/components/case-studies/UsersGrowth';

/*
 * Source: Industrybuying_Sage-Kite_Simple-V3.html, supplied by the team.
 * All copy is kept exactly as written in the source file (US spelling included); only the site's brand colours and
 * font are applied. The meta title and description are shortened to fit the length limits. Rendered in the technical
 * layout like Croma, whose source used the same template: kicker, chips, the address hub beside them and a progress
 * bar; no section menu or breadcrumb (as the user asked for Croma, D058, D059). The site's header and footer replace
 * the source's; "See more work" links to /case-studies. Each section's "In plain words" line is `plain`.
 *
 * No `origin` or `about`: the source does not state who did the work (D082).
 */
const PLAIN = 'In plain words:';

const study: CaseStudy = {
  slug: 'industrybuying',
  client: 'Industrybuying',
  title: 'Fixing duplicate content and redirect loops to grow organic traffic 40% in 3 months',
  seoTitle: 'Technical SEO Case Study: Industrybuying',
  description: 'How canonicals, unique product descriptions, redirect rules and segmented sitemaps grew Industrybuying\'s organic traffic 40% in 3 months.',
  summary: 'How a large industrial supplies catalog grew organic traffic 40% in 3 months by fixing duplicate content, canonicals, redirect loops and sitemaps.',
  keywords: ['ecommerce technical SEO case study', 'Industrybuying', 'duplicate product content', 'canonical tags', 'out-of-stock redirect loops', 'segmented XML sitemaps'],
  datePublished: '2026-11-11',
  industry: 'Industrial and business supplies (ecommerce)',
  discipline: 'Technical SEO',
  cover: <IndustrybuyingCover />,
  technical: { plainHero: true, impactBand: 'pale', wideHeadings: true },
  highlights: ['Unique product descriptions', 'Canonical tags', 'Redirect rules', 'Segmented sitemaps'],
  results: [
    {
      label: 'Organic traffic index',
      value: '+40%',
      valueLabel: 'Up 40 percent',
      before: '100',
      after: '140',
      afterLabel: 'After 3 months',
      scale: 71.4,
      note: 'Illustration of a 40% increase, with starting traffic indexed to 100.',
    },
  ],

  hero: {
    label: 'Case study · Ecommerce technical SEO',
    dek: 'A large catalog, held back by its own structure.',
    lede: 'Industrybuying, an online marketplace for industrial and business supplies, was held back by duplicate product content, unfriendly URL structures and redirect loops on out-of-stock products. Try each fix yourself below.',
    visual: (
      <VariantHub
        title="One product, many web addresses"
        ariaLabel="Variants of one product page"
        center="the real page"
        variants={[
          { label: 'secure version', text: 'The "http" and "https" versions of a page can both exist, so one page lives at two addresses.' },
          { label: 'CAPITAL letters', text: 'Capital and small letters can lead to the same page, creating a duplicate.' },
          { label: 'extra slash', text: 'A slash at the end can create another version of the same address.' },
          { label: 'tracking tag', text: 'Tracking tags add new addresses for the very same content.' },
          { label: 'sorted view', text: 'Sorting or filtering can add new addresses without changing the product.' },
          { label: 'other host', text: 'A second site address can serve all the same pages again.' },
        ]}
        idle="Select a variant to see how it creates a duplicate."
        suffix="Search engines may split the page's strength between them."
      />
    ),
    glance: [
      { label: 'Client', value: 'Industrybuying' },
      { label: 'Type', value: 'Ecommerce technical SEO' },
      { label: 'Timeframe', value: '3 months' },
    ],
  },

  metrics: {
    items: [
      { value: '+40%', label: 'Organic traffic in 3 months', tone: 'sky' },
      { value: '~2×', label: 'Organic revenue contribution', tone: 'butter' },
      { value: 'Improved', label: 'Product page indexation', tone: 'coral' },
    ],
  },

  sections: [
    {
      id: 'dup',
      label: '01 / DUPLICATE CONTENT',
      heading: 'Replace manufacturer-copied text with unique descriptions',
      intro: 'Product pages used descriptions copied from manufacturer websites, giving search engines no unique reason to rank them above other sellers using the same text.',
      plain: { label: PLAIN, text: 'if many sellers show identical text, Google has no reason to pick yours. Writing your own gives it one.' },
      content: (
        <CopyRewrite
          intro="Rewrite each sentence of this product description."
          sentences={[
            { copied: 'Heavy duty industrial safety gloves with reinforced palm and cut-resistant lining.', own: 'Built for tough jobs, these gloves have a reinforced palm for grip and a cut-resistant lining for protection.' },
            { copied: 'Suitable for handling sharp materials in workshops and factories.', own: 'Use them around sheet metal, glass and tools, whether you work in a workshop or on a factory floor.' },
            { copied: 'Available in multiple sizes.', own: 'Choose your fit from the size chart on this page.' },
            { copied: 'Conforms to standard safety requirements.', own: 'Each pair is tested against the relevant safety standard.' },
          ]}
          rowLabels={{ copied: 'Copied from the manufacturer', own: 'Your own words' }}
          buttons={{ rewrite: 'Rewrite', all: 'Rewrite everything', reset: 'Start over' }}
          done="Unique ✓"
          meter="Unique content"
          sellersLabel="Pages showing this description"
          sellers={['Seller A', 'Seller B', 'Seller C', 'Seller D']}
          you="Your page"
          tags={{ same: 'same text', partly: 'partly unique', unique: 'unique' }}
          captions={{
            none: 'Every sentence is copied, so your page looks the same as other sellers\' pages.',
            some: 'Getting there. Keep rewriting so search engines have something unique to rank.',
            all: 'Fully unique. Your page now gives search engines its own reason to rank it above other sellers.',
          }}
          note="Example description, not Industrybuying's."
        />
      ),
    },
    {
      id: 'canon',
      band: 'pale',
      label: '02 / PREFERRED PAGES',
      heading: 'Tell search engines which version of a page is the real one',
      intro: 'URLs weren\'t built in a way that supported clean crawling and ranking. Self-referencing canonical tags were implemented across pages to clearly signal the preferred version of each URL.',
      plain: { label: PLAIN, text: 'one product can be reached through many slightly different addresses. A canonical tag says which one counts, so they stop competing with each other.' },
      content: (
        <CanonicalRules
          intro="Switch on the rules and watch the extra addresses merge into the preferred one."
          groupLabel="Rules"
          rules={[
            { key: 'sec', label: 'Always use the secure version' },
            { key: 'caps', label: 'Ignore capital letters' },
            { key: 'slash', label: 'Ignore a trailing slash' },
            { key: 'track', label: 'Ignore tracking tags' },
            { key: 'host', label: 'Use one site address' },
          ]}
          stats={{ addresses: 'Addresses:', versions: 'Versions search engines see:' }}
          products={['Safety gloves page', 'Drill bit page']}
          variants={[
            { key: 'main', label: 'Preferred page' },
            { key: 'sec', label: 'not secure (http)' },
            { key: 'caps', label: 'CAPITAL letters' },
            { key: 'slash', label: 'extra slash' },
            { key: 'track', label: 'tracking tag' },
            { key: 'host', label: 'other site address' },
          ]}
          seen={{ one: '{n} version search engines see', many: '{n} versions search engines see' }}
          captions={{
            all: 'Each chip is a separate address, so ranking strength is split across 6 versions of each page.',
            some: 'Fewer versions now. Keep going until only the preferred page is left.',
            done: 'One preferred version per product. Ranking signals are consolidated.',
          }}
          note="Two example products. Each chip is one way the same page can be reached."
        />
      ),
    },
    {
      id: 'redirects',
      label: '03 / REDIRECTS',
      heading: 'Stop crawl waste with structured redirect rules',
      intro: 'When products went out of stock, redirect behavior created loops, wasting crawl activity and creating a poor experience for users and search engines. Defined redirect rules fixed it.',
      plain: { label: PLAIN, text: 'an out-of-stock page should send visitors, and search engine robots, somewhere useful in one step, not bounce them back and forth.' },
      content: (
        <RedirectCrawler
          groupLabel="Redirect behavior"
          modes={{ loop: 'Without a rule', rule: 'With a rule' }}
          send="Send a crawler"
          ariaLabel="A crawler following redirects between pages"
          nodes={{ from: 'Out-of-stock page', loop: 'Another product page', rule: 'Category page' }}
          lines={{ loop: 'each page sends the crawler to the other', rule: 'one defined rule: straight to a useful page' }}
          stats={{ visits: 'Visits used:', result: 'Result:' }}
          outcomes={{ arrived: 'Arrived', gaveUp: 'Gave up' }}
          captions={{
            idle: 'Send a crawler to see what happens.',
            running: { loop: 'The crawler follows the redirects…', rule: 'The crawler follows the rule…' },
            arrived: 'One visit and the crawler is on a useful page. No time is wasted, and the user lands somewhere helpful too.',
            gaveUp: 'The crawler went back and forth {n} times and gave up without reaching a useful page. That is crawl activity wasted.',
          }}
          maxHops={10}
          note="Illustration. Crawlers give up after following a limited number of redirects."
        />
      ),
    },
    {
      id: 'crawl',
      band: 'pale',
      label: '04 / CRAWL WASTE',
      heading: 'How much search engine attention can loops consume?',
      intro: 'For a catalog of this scale, organic performance depends on whether search engines can efficiently crawl, index and trust thousands of product pages.',
      plain: { label: PLAIN, text: 'search engines only spend so much time on a site. Time lost in loops is time not spent on pages that could rank.' },
      content: (
        <CrawlWaste
          products={{ label: 'How many products?', min: 10000, max: 500000, step: 10000, value: 100000 }}
          outOfStock={{ label: 'How many are out of stock?', min: 0, max: 40, step: 1, value: 10 }}
          looping={{ label: 'How many of those are stuck in a loop?', min: 0, max: 100, step: 5, value: 25 }}
          outputs={{ products: '{n} products', share: '{p}% · {n} pages' }}
          boxes={{ loops: 'Pages stuck in loops', wasted: 'Wasted visits per crawl', rules: 'Rules needed to fix' }}
          captions={{
            some: 'Up to {w} visits could go round in circles on every crawl. Fixing {n} pages by hand is impractical, but one defined rule covers all of them, now and in future.',
            none: 'No pages are stuck in a loop with these numbers, so no crawl attention is lost.',
          }}
          visitsPerLoop={10}
          note="Illustrative sums with example numbers, not Industrybuying's data. A looping page is assumed to use up to 10 visits before the crawler gives up."
        />
      ),
    },
    {
      id: 'sitemaps',
      label: '05 / SITEMAPS',
      heading: 'Guide search engines with sitemaps segmented by page type',
      intro: 'Separate sitemaps were built for products, categories and blog pages to improve crawl clarity.',
      plain: { label: PLAIN, text: 'a sitemap is a list of your pages for search engines. Separate lists for products, categories and blog posts make your site easier to understand.' },
      content: (
        <SitemapSplit
          groupLabel="Sitemap structure"
          buttons={{ mix: 'One mixed list', seg: 'Separate sitemaps' }}
          types={[
            { item: 'Product', count: 10, folder: 'Products sitemap' },
            { item: 'Category', count: 4, folder: 'Categories sitemap' },
            { item: 'Blog post', count: 4, folder: 'Blog sitemap' },
          ]}
          mixOrder={[0, 10, 5, 14, 2, 12, 7, 16, 1, 11, 6, 15, 3, 13, 8, 17, 4, 9]}
          pagesLabel="{n} pages"
          captions={{
            mix: 'Products, categories and blog posts are mixed together, so search engines get little guidance on what to crawl and prioritize.',
            seg: 'Each page type has its own sitemap, so the structure is clear and it is easier to see how each type is crawled and indexed.',
          }}
          note="Example pages: 10 products, 4 categories and 4 blog posts."
        />
      ),
    },
    {
      id: 'rule',
      band: 'sky',
      label: '06 / EXECUTION APPROACH',
      heading: 'Fix root causes at the template and rule level, not page by page',
      intro: 'The work started with a technical diagnosis, then moved from foundational issues, duplication and redirects, to structural clarity, so each layer supported the next.',
      plain: { label: PLAIN, text: 'fix the rule once and every page benefits, including pages added later. Try it: each square is a product page.' },
      content: (
        <RuleGrid
          buttons={{ rule: 'Apply the fix as a rule', add: 'Add 20 new products', reset: 'Start over' }}
          stats={{ fixed: 'Pages fixed:', of: '/', hand: 'Fixed by hand:', rule: 'Fixed by rule:' }}
          ariaLabel="Grid of product pages"
          pages={300}
          add={20}
          captions={{
            idle: 'Select a square to fix one page by hand, or apply the rule to fix them all.',
            allRule: 'Every page is fixed with a single rule, and new products inherit the same clean structure.',
            allHand: 'All pages fixed by hand, one action each. A rule would have taken one.',
            addedRule: '20 new products were added and inherit the same clean structure automatically.',
            addedNoRule: '20 new products were added, and each still has the problem. Without a rule, the cleanup never ends.',
          }}
        />
      ),
    },
  ],

  resultsSection: {
    label: '07 / RESULTS',
    heading: 'More traffic, more indexed products, nearly double the organic revenue',
    card: (
      <UsersGrowth
        toLabel="+40%"
        groups={[
          {
            title: 'Organic traffic in 3 months',
            ariaLabel: 'Organic traffic index: baseline 100, after 3 months 140',
            bars: [
              { label: 'Before', value: '100', width: 71 },
              { label: 'After 3 months', value: '140', width: 100, after: true },
            ],
          },
          {
            title: 'Organic revenue contribution',
            ariaLabel: 'Organic revenue contribution index: baseline 100, after roughly 200',
            bars: [
              { label: 'Before', value: '100', width: 50 },
              { label: 'After', value: '~200', width: 100, after: true },
            ],
          },
        ]}
        note={'Illustration only: starting values are indexed to 100. Revenue contribution "nearly doubled", so the second bar is approximate.'}
      />
    ),
    points: [
      { title: '+40% organic traffic', text: 'Achieved within 3 months.' },
      { title: 'Better product page indexation', text: 'Indexation improved significantly, meaning more of the catalog became eligible to appear in search.' },
      { title: 'Organic revenue nearly doubled', text: 'Organic search became a much larger contributor to revenue.' },
    ],
  },

  changes: {
    label: '08 / IMPACT',
    heading: 'Fewer competing signals, and fixes that scale with the catalog',
    items: [
      { icon: 'target', title: 'Fewer competing signals', text: 'Canonicals and unique descriptions removed ambiguity about which pages should rank.' },
      { icon: 'shield', title: 'No more redirect loops on stock changes', text: 'Out-of-stock products are handled by rule, reducing ongoing technical cleanup.' },
      { icon: 'search', title: 'Clearer indexing visibility', text: 'Segmented sitemaps make it easier to see how products, categories and blog content are crawled and indexed.' },
      { icon: 'grid', title: 'Scalable for catalog growth', text: 'Because the fixes are rule-based, new products inherit the same clean structure.' },
    ],
  },

  methods: {
    label: '09 / TOOLS AND TECH USED',
    heading: 'What the work was built with',
    breakAfter: 3,
    items: [
      { title: 'Technical SEO auditing' },
      { title: 'Canonical tag implementation' },
      { title: 'Redirect logic design' },
      { title: 'XML sitemap architecture (segmented by page type)' },
      { title: 'Product content optimization' },
    ],
  },

  takeaway: {
    label: 'Key takeaway',
    heading: 'A lot of organic performance can be locked behind technical issues on large ecommerce sites',
    body: 'For any catalog-heavy business dealing with duplicate content, crawl waste or out-of-stock handling, fixing the foundation can produce measurable growth without adding new pages.',
    link: { label: 'See more work', href: '/case-studies' },
  },

  cta: {
    heading: 'Is your catalog working against itself?',
    text: 'Contact Sage Kite and book a free consultation. We\'ll look at your technical foundation and where your store can earn more in search.',
    primary: { label: 'Book a free consultation', href: '/contact' },
    secondary: { label: 'Contact Sage Kite', href: '/contact' },
  },
};

export default study;
