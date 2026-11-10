import type { CaseStudy } from '@/content/case-studies/types';
import { SochCover } from '@/components/case-studies/covers';
import { ShopperSearch } from '@/components/case-studies/ShopperSearch';
import { RankRace } from '@/components/case-studies/RankRace';
import { KeywordMap } from '@/components/case-studies/KeywordMap';
import { FestiveLaunch } from '@/components/case-studies/FestiveLaunch';
import { PageNetwork } from '@/components/case-studies/PageNetwork';
import { ApproachSteps } from '@/components/case-studies/ApproachSteps';
import { UsersGrowth } from '@/components/case-studies/UsersGrowth';

/*
 * Source: Soch_Interactive_Case_Study.html, supplied by the team.
 * All copy is kept exactly as written in the source file, including the closing call to action, which names
 * Sangram Singh with his email and phone: the user chose to keep it word for word (D080). Only the site's brand
 * colours and font are applied. The source has no meta description; the one here was written for the site, and the
 * meta title is shortened to the site's pattern. Rendered in the technical layout like Pune Times Mirror: plain hero,
 * kicker, chips, the shopper search beside them, a progress bar and the round section pager ("1 / 7"); no
 * breadcrumb. The site's header and footer replace the source's.
 *
 * No `origin` or `about`: the user asked for the page as written in the file, which states no origin (D080).
 */
const PAGER = [
  { id: 'overview', label: 'Overview' },
  { id: 'search', label: 'Search' },
  { id: 'mapping', label: 'Keyword map' },
  { id: 'season', label: 'Seasons' },
  { id: 'links', label: 'Linking' },
  { id: 'approach', label: 'Approach' },
  { id: 'results', label: 'Results' },
];

const study: CaseStudy = {
  slug: 'soch',
  client: 'Soch',
  title: 'Growing organic traffic from 50K to 120K and revenue by 180% for a fashion retailer',
  seoTitle: 'Ecommerce SEO Case Study: Soch',
  description: 'How keyword mapping, stronger category pages, festive landing pages and internal linking grew Soch\'s organic traffic from 50K to 120K and revenue 180%.',
  summary: 'How a fashion retailer grew organic traffic from 50K to 120K and organic revenue 180% with keyword mapping, category pages and festive pages.',
  keywords: ['ecommerce SEO case study', 'Soch', 'fashion ecommerce SEO', 'keyword mapping', 'category page SEO', 'seasonal landing pages', 'internal linking'],
  datePublished: '2026-11-10',
  industry: 'Fashion retail (ecommerce)',
  discipline: 'Ecommerce SEO',
  cover: <SochCover />,
  technical: {
    plainHero: true,
    pager: PAGER,
    pagerPlain: true,
  },
  highlights: ['Keyword mapping', 'Category page content and FAQs', 'Festive landing pages', 'Internal linking'],
  results: [
    {
      label: 'organic traffic',
      value: '50K → 120K',
      valueLabel: 'From 50 thousand to 120 thousand',
      before: '50K',
      after: '120K',
      scale: 41.7,
    },
  ],

  hero: {
    label: 'Case study · Ecommerce SEO',
    dek: 'Shoppers searching for exactly what Soch sells were landing on competitors.',
    lede: 'Soch wasn\'t ranking for broad category searches like “kurti for women” and was missing festive demand. Pick a search a shopper might type to see which kind of page should answer it.',
    visual: (
      <ShopperSearch
        groupLabel="Pick a shopper search"
        queries={[
          { q: 'kurti for women', small: 'Category page', title: 'Soch · Kurtis for Women', text: 'Broad category search: this page wins generic demand.', tone: 'blog' },
          { q: 'festive kurti for women', small: 'Festive landing page', title: 'Soch · Festive Edit', text: 'Seasonal intent gets a page built for it.', tone: 'treat' },
          { q: 'printed straight kurti', small: 'Product page', title: 'Soch · Printed Straight Kurti', text: 'Specific searches go to specific products.', tone: 'clinic' },
        ]}
        note="Pick a search a shopper might type. Illustrative page names."
      />
    ),
    glance: [
      { label: 'Client', value: 'Soch' },
      { label: 'Type', value: 'Ecommerce SEO (Fashion)' },
      { label: 'Result', value: '50K → 120K · +180% revenue' },
    ],
  },

  metrics: {
    items: [
      { value: '50K → 120K', label: 'Organic traffic', tone: 'sky' },
      { value: '+180%', label: 'Organic revenue growth', tone: 'butter' },
      { value: 'Seasonal', label: 'Festive demand captured', tone: 'coral' },
    ],
  },

  sections: [
    {
      id: 'search',
      label: '01 / EVERYDAY DEMAND',
      heading: 'Many shoppers begin with a broad search, before they pick a brand',
      intro: 'Ranking for generic searches like “kurti for women” is central to attracting new customers. Switch on each optimization and watch the Soch category page climb the results.',
      content: (
        <RankRace
          title="Search: kurti for women"
          levers={['Keyword target assigned', 'Category page content', 'FAQs on the page', 'Internal links in']}
          competitors={['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((n) => ({ title: `Competitor ${n}`, sub: 'competitor result' }))}
          me={{ title: 'Soch: Kurtis for Women', sub: 'soch category page' }}
          cutLabel="page 1 ends"
          pageOneRows={5}
          labels={{ position: 'Position:', pageOne: 'Page 1', pageTwo: 'Page 2' }}
          captions={{
            none: 'Soch\'s category page sits on page 2: shoppers land on competitors.',
            pageOne: '{n} of 4 applied. Now on page 1, where shoppers actually click.',
            pageTwo: '{n} of 4 applied. Climbing, but still on page 2.',
          }}
          note="Illustrative race, not real ranking data. Each optimization is shown as moving the page up one place."
        />
      ),
    },
    {
      id: 'mapping',
      band: 'pale',
      label: '02 / KEYWORD MAPPING',
      heading: 'Every page needs a clear job',
      intro: 'Each category and product was assigned a target keyword aligned with real search demand. Drag a keyword onto the page it belongs to, or tap a keyword and then a page.',
      content: (
        <KeywordMap
          keywords={['kurti for women', 'buy now', 'printed straight kurti', 'clothes', 'festive kurti for women']}
          pages={[
            { label: 'Category page: Kurtis', keyword: 'kurti for women' },
            { label: 'Seasonal page: Festive edit', keyword: 'festive kurti for women' },
            { label: 'Product page: one printed kurti', keyword: 'printed straight kurti' },
          ]}
          dropHint="Drop a keyword"
          idle="Match all three pages."
          right="✓ “{kw}” fits {page}."
          wrong="“{kw}” isn’t the best search target for this page. Think about what a shopper would type."
          done="All three pages now have a clear job."
          mappedLabel="Mapped:"
          reset="Reset"
          note="Placeholder pages and keywords, not Soch's actual keyword plan."
        />
      ),
    },
    {
      id: 'season',
      label: '03 / SEASONAL DEMAND',
      heading: 'Festive peaks need pages built for them',
      intro: 'Festive periods drive spikes in searches, so the page has to be live before the peak arrives. Drag the launch month, or press play to move through the year.',
      content: (
        <FestiveLaunch
          ariaLabel="Search demand across the year with a festive peak and a page launch marker"
          months={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          demand={[40, 38, 45, 62, 42, 40, 44, 66, 75, 92, 98, 60]}
          window={[8, 9, 10]}
          initial={10}
          labels={{ window: 'FESTIVE WINDOW', live: 'LIVE', slider: 'Festive page goes live', play: '▶ Play year', covered: 'Festive window covered:' }}
          captions={{
            full: 'Live before the festive window opens, so the page can rank when demand arrives.',
            none: 'The festive window has passed: the demand went to competitors.',
            part: 'Late launch: only part of the festive window is covered.',
          }}
          note="Illustrative curve with placeholder peak months, not measured demand."
        />
      ),
    },
    {
      id: 'links',
      band: 'sky',
      label: '04 / DISCOVERABILITY',
      heading: 'Internal links carry shoppers from broad searches to products',
      intro: 'Connecting pages strengthened category and product discoverability. Add link types and see how many products a shopper can reach from the Kurtis category, then send one through.',
      content: (
        <PageNetwork
          ariaLabel="Network of category, festive, sub-category and product pages"
          groupLabel="Link types"
          start="C"
          nodes={[
            { key: 'C', label: 'Kurtis', x: 100, y: 150 },
            { key: 'F', label: 'Festive edit', x: 100, y: 50 },
            { key: 'S1', label: 'Anarkali', x: 320, y: 60 },
            { key: 'S2', label: 'Cotton', x: 320, y: 150 },
            { key: 'S3', label: 'Printed', x: 320, y: 240 },
            { key: 'P1', label: 'Product 1', x: 540, y: 40, product: true },
            { key: 'P2', label: 'Product 2', x: 540, y: 110, product: true },
            { key: 'P3', label: 'Product 3', x: 540, y: 190, product: true },
            { key: 'P4', label: 'Product 4', x: 540, y: 260, product: true },
          ]}
          links={[
            { key: 'A', label: 'Category → sub-categories', edges: [['C', 'S1'], ['C', 'S2'], ['C', 'S3']] },
            { key: 'B', label: 'Sub-categories → products', edges: [['S1', 'P1'], ['S1', 'P2'], ['S2', 'P3'], ['S3', 'P4']] },
            { key: 'C', label: 'Festive → products', edges: [['F', 'P1'], ['F', 'P3']] },
            { key: 'D', label: 'Category → festive', edges: [['C', 'F']] },
          ]}
          labels={{ reachable: 'Products reachable from Kurtis:', send: 'Send a shopper' }}
          captions={{
            all: 'Every product can be reached from the category page.',
            some: 'Some products are reachable, others are still hidden from shoppers.',
            none: 'No links yet: shoppers on the category page have nowhere to go.',
            dead: 'Dead end: a shopper on the category page can’t reach any product. Add some links.',
            reached: 'Shopper reached {page} in {n} clicks.',
            reachedOne: 'Shopper reached {page} in {n} click.',
          }}
          note="Simplified page network for illustration."
        />
      ),
    },
    {
      id: 'approach',
      band: 'pale',
      label: '05 / EXECUTION APPROACH',
      heading: 'Map first, then layer content and seasons',
      intro: 'Planning for seasonal peaks alongside everyday category demand meant growth wasn\'t limited to one time of year.',
      content: (
        <ApproachSteps
          steps={[
            { small: 'Step 1', title: 'Map', heading: 'Map keywords to pages', text: 'Give every category and product a clear search target.' },
            { small: 'Step 2', title: 'Strengthen', heading: 'Strengthen category pages', text: 'Add content and FAQs that answer shopper questions.' },
            { small: 'Step 3', title: 'Plan', heading: 'Plan for seasons', text: 'Build festive landing pages to capture peak demand.' },
            { small: 'Step 4', title: 'Connect', heading: 'Improve discoverability', text: 'Use internal linking to connect categories and products.' },
          ]}
        />
      ),
    },
  ],

  resultsSection: {
    label: '06 / RESULTS',
    heading: 'Traffic that turned into revenue',
    band: 'sky',
    card: (
      <UsersGrowth
        from={50000}
        to={120000}
        fromLabel="50K"
        toLabel="120K"
        groups={[
          {
            title: 'Organic traffic',
            ariaLabel: 'Organic traffic grew from 50K to 120K',
            bars: [
              { label: 'Before', value: '50K', width: 41.7 },
              { label: 'After', value: '120K · 2.4×', width: 100, after: true },
            ],
          },
          {
            title: 'Organic revenue (index, before = 100)',
            ariaLabel: 'Organic revenue index grew from 100 to 280',
            bars: [
              { label: 'Before', value: '100', width: 35.7 },
              { label: 'After', value: '280 · +180%', width: 100, after: true },
            ],
          },
        ]}
        note="Traffic bars use the case study figures. The 2.4× multiple and the revenue index are calculated from 50K → 120K and +180%."
      />
    ),
    points: [
      { title: '50K → 120K organic traffic', text: 'Broad category searches and festive pages brought in more shoppers.' },
      { title: '+180% organic revenue', text: 'The added traffic translated into sales.' },
      { title: 'Festive demand captured', text: 'Dedicated landing pages ranked for seasonal peaks.' },
    ],
  },

  changes: {
    label: '07 / IMPACT',
    heading: 'How this made life easier',
    items: [
      { icon: 'target', title: 'A clear keyword plan for every page', text: 'Keyword mapping removes guesswork about what each category or product should target.' },
      { icon: 'calendar', title: 'A repeatable seasonal playbook', text: 'Festive landing pages create a model that can be reused for future seasons.' },
      { icon: 'nodes', title: 'Better product discovery', text: 'Internal linking and stronger category pages help shoppers move from broad searches to specific products.' },
      { icon: 'lift', title: 'Traffic that turns into revenue', text: 'The focus stayed on commercial category keywords, so traffic growth was matched by revenue growth.' },
    ],
  },

  methods: {
    label: '08 / STACK',
    heading: 'Tools and tech used',
    items: [
      { title: 'Keyword mapping' },
      { title: 'Category page SEO content and FAQs' },
      { title: 'Seasonal landing pages' },
      { title: 'Internal linking strategy' },
      { title: 'Ecommerce SEO' },
    ],
  },

  takeaway: {
    label: 'Key takeaway',
    heading: 'Win the broad category searches, and plan ahead for seasonal demand',
    body: 'For any ecommerce brand with strong products but weak generic-keyword visibility, this is a proven structure for turning search into sales.',
  },

  cta: {
    heading: 'Strong products, weak search visibility?',
    text: 'Contact Sangram Singh for a free consultation on category pages, seasonal demand and internal linking.',
    primary: { label: 'Book a free consultation', href: 'mailto:shekhawatsangram96@gmail.com' },
    secondary: { label: '+91 7690088700', href: 'tel:+917690088700' },
  },
};

export default study;
