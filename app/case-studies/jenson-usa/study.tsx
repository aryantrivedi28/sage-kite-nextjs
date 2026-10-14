import type { CaseStudy } from '@/content/case-studies/types';
import { DuplicateUrlFlow } from '@/components/case-studies/DuplicateUrlFlow';
import { CategoryFixes } from '@/components/case-studies/CategoryFixes';
import { Callout, Journey, PageGridSketch, RankLadder } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_Jenson-USA_Case-Study.html, supplied by the team.
 * Figures are as reported by the delivery specialist (Sangram Singh); they
 * were not independently verified, and the page says so.
 *
 * The source mock showed review stars on the category page's own search
 * listing. Google shows review snippets only for a specific item, not a
 * category or list (developers.google.com/search/docs/appearance/structured-data/review-snippet,
 * checked 2026-10-14), so the illustration puts the stars on product results.
 */
const study: CaseStudy = {
  slug: 'jenson-usa',
  client: 'Jenson USA',
  title: 'How Jenson USA moved 120+ commercial keywords from the bottom of page one into the top 3',
  seoTitle: 'Ecommerce SEO Case Study: Jenson USA',
  ogTitle: 'Jenson USA: moving 120+ commercial keywords into the top 3',
  description: 'How Jenson USA moved 120+ commercial keywords from positions 8–10 into the top 3 with category content, internal linking, URL fixes and review schema.',
  summary: 'How an online cycling retailer moved 120+ commercial keywords from the bottom of page one into the top 3 by strengthening its category pages.',
  keywords: ['ecommerce SEO case study', 'Jenson USA', 'category page optimisation', 'duplicate URL fix', 'product review schema'],
  datePublished: '2026-10-14',
  industry: 'Online cycling retail',
  discipline: 'SEO',
  origin: 'Previous work by a Sage Kite delivery specialist',
  practitioner: { name: 'Sangram Singh', role: 'SEO consultant' },
  highlights: ['Category page content', 'Internal linking', 'Duplicate URL fixes', 'Review schema'],
  results: [
    {
      label: 'Commercial keywords in the top 3',
      value: '120+',
      valueLabel: 'More than 120',
      count: 120,
      unit: 'keyword',
      note: 'Each dot is one keyword. 120 is the minimum: more than 120 moved, up from positions 8–10.',
    },
  ],

  hero: {
    label: 'Case study · Ecommerce SEO',
    dek: 'Existing category pages, made strong enough to win.',
    lede: 'Jenson USA, an online cycling retailer, had valuable category searches such as mountain bikes stuck at positions 8–10: visible, but earning very little traffic. Category page optimisation, internal linking, duplicate URL fixes and review schema moved more than 120 of those keywords into the top 3.',
    visual: (
      <RankLadder
        marker="Category page"
        top="Positions 1–3: where clicks happen"
        stuck="Positions 8–10: visible, but almost no traffic"
        caption="Illustration of the shift, not measured data."
        ariaLabel="Illustration: a category page climbing from positions 8 to 10 on page one up into the top 3"
      />
    ),
    glance: [
      { label: 'Client', value: 'Jenson USA' },
      { label: 'Industry', value: 'Online cycling retail' },
      { label: 'Engagement', value: 'Ecommerce SEO' },
      { label: 'Consultant', value: 'Sangram Singh' },
    ],
  },

  metrics: {
    items: [
      { value: '120+', label: 'Keywords moved into the top 3', tone: 'sky' },
      { value: '8–10 to top 3', label: 'Ranking positions', tone: 'butter' },
      { value: 'Category pages', label: 'Primary growth lever', tone: 'coral' },
    ],
    note: 'Figures are as reported by the delivery specialist for this engagement.',
  },

  startingPoint: {
    heading: 'Already visible in search, but not where the clicks happen',
    content: (
      <>
        <p>Jenson USA sells bikes and cycling gear online. Its revenue depends heavily on category pages, the pages that answer high-intent searches like &quot;mountain bikes&quot;. These are the searches shoppers use when they are close to buying.</p>
        <Journey
          ariaLabel="A category search like mountain bikes comes from a shopper close to buying, and the category page answers it"
          steps={[
            { small: 'Shopper searches', text: '"mountain bikes"' },
            { small: 'Intent', text: 'Close to buying' },
            { small: 'Page that answers it', text: 'Category page' },
          ]}
        />
        <p>The business already had search visibility and a broad product catalogue. The opportunity was not building presence from zero, but converting near-miss rankings into the top positions where clicks actually happen.</p>
        <Callout title="Near-misses, not a blank page.">The work was about turning rankings that already existed into rankings that earn clicks.</Callout>
      </>
    ),
  },

  problem: {
    heading: 'The site was ranking, but not high enough for rankings to matter',
    items: [
      { title: 'Valuable keywords stuck at positions 8–10', text: 'Category-level searches with real commercial value sat at the very bottom of page one, where click-through rates are minimal and traffic impact is negligible.' },
      { title: 'Thin category pages', text: 'Category pages lacked helpful SEO content, giving search engines little reason to rank them above competitors for competitive terms.' },
      { title: 'Duplicate category URLs', text: 'Uppercase and lowercase variations of the same category URLs created duplicates that split ranking signals across multiple versions of one page.' },
      { title: 'Limited review visibility in search', text: 'Product review data wasn\'t being communicated to search engines through structured markup.' },
    ],
    visual: (
      <DuplicateUrlFlow
        title="What duplicate URLs do to ranking signals"
        urls={[
          { url: '/Mountain-Bikes', note: 'Uppercase version of the category URL' },
          { url: '/mountain-bikes', note: 'Lowercase version of the same page' },
        ]}
        target="Ranking signals"
        states={{ before: 'Split across two versions', after: 'Consolidated into one version' }}
        captions={{
          before: 'Before: uppercase and lowercase versions of the same category URL each held part of the page\'s ranking signals, so neither could compete as strongly as one page.',
          after: 'After: the duplicates are resolved and every signal points to a single version of the category page.',
        }}
        ariaLabel="Diagram: two URL versions of one category page either split ranking signals between them, or consolidate them into one version. Use the Before and After buttons to switch."
      />
    ),
    pullQuote: 'The site was doing enough to appear, but not enough to be chosen, and the highest-value category searches were delivering almost no traffic.',
  },

  approach: {
    label: 'Execution approach',
    heading: 'Start where the site was closest to winning',
    intro: 'The engagement began by identifying where the site was closest to winning: keywords already ranking on page one, but at positions 8–10. These were faster, lower-risk wins than chasing entirely new keywords. Rather than adding volume, the work focused on making existing category pages stronger and removing the structural issues holding them back.',
    steps: [
      { title: 'Locate near-miss rankings', text: 'Identify high-value commercial keywords sitting just below the positions that drive traffic.' },
      { title: 'Clean the foundation', text: 'Fix duplicate category URLs first, so ranking signals are consolidated rather than split.' },
      { title: 'Strengthen the pages', text: 'Add category content and internal links to build authority on the pages that matter most.' },
      { title: 'Enhance search presentation', text: 'Add review schema so listings communicate trust and relevance.' },
    ],
    note: 'Targeting keywords already close to the top made the effort efficient: small structural and content improvements were enough to move rankings meaningfully.',
  },

  delivered: {
    label: 'Solution delivered',
    heading: 'Four fixes to one category page',
    intro: 'Switch each fix on to see what it changed on a category page and in how it appears in search.',
    content: (
      <CategoryFixes
        pageTitle="Mountain bikes"
        urls={{ duplicate: '/Mountain-Bikes', kept: '/mountain-bikes' }}
        domain="example.com"
        fixes={{
          content: {
            title: 'Category page optimisation',
            text: 'Added helpful, search-relevant content to category pages so they better matched shopper intent.',
            message: 'Helpful category content added, so the page better matches what shoppers are looking for.',
          },
          links: {
            title: 'Internal linking for category authority',
            text: 'Implemented internal linking to strengthen the authority of priority category pages.',
            message: 'Internal links added, passing authority to this priority category page and guiding shoppers onward.',
          },
          url: {
            title: 'Duplicate URL fix',
            text: 'Resolved the duplicate category URLs caused by uppercase and lowercase variations, consolidating ranking signals into a single version.',
            message: 'Duplicate URL resolved: one version of the page now holds all the ranking signals.',
          },
          review: {
            title: 'Product review schema',
            text: 'Implemented review structured data to help search engines understand and surface review information.',
            message: 'Review markup added to the products, so search engines can read their review information and show it on product results.',
          },
        }}
        messages={{
          initial: 'Nothing switched on yet. This is a thin category page with two URL versions and no review markup.',
          all: 'All four fixes on: richer content, internal links, one clean URL and review markup.',
          removed: 'Removed. The page goes back to how it was before this fix.',
        }}
        note="Illustration with placeholder content, not Jenson USA's actual pages."
      />
    ),
  },

  resultsSection: {
    label: 'Key outcomes and impact',
    heading: 'From the bottom of page one to where clicks happen',
    points: [
      { title: 'Strong growth in category traffic', text: 'High-value category searches began delivering meaningful clicks.' },
      { title: 'Improved organic shopping visibility', text: 'Supported by cleaner URL signals and review markup.' },
    ],
  },

  changes: {
    label: 'How this made life easier',
    heading: 'Wins built on pages the site already had',
    items: [
      { icon: 'lift', title: 'Wins built on existing assets', text: 'The improvement came from strengthening pages the site already had, rather than requiring a large new content programme.' },
      { icon: 'merge', title: 'Consolidated ranking signals', text: 'Fixing duplicate URLs meant every category page had one clear, authoritative version, removing an ongoing source of diluted performance.' },
      { icon: 'grid', title: 'A repeatable model for other categories', text: 'The same approach of content, internal links, clean URLs and schema can be applied to additional categories as the catalogue grows.' },
      { icon: 'target', title: 'Clear focus on what drives revenue', text: 'Prioritising commercial category keywords kept effort aligned with searches that sit closest to purchase.' },
    ],
  },

  methods: {
    label: 'Tools and tech used',
    heading: 'The methods behind the climb',
    items: [
      { title: 'Keyword ranking analysis', text: 'Identifying positions 8–10 opportunities' },
      { title: 'Category page SEO content optimisation', text: 'Helpful content matched to shopper intent' },
      { title: 'Internal linking strategy', text: 'Authority built on priority category pages' },
      { title: 'Canonical and duplicate URL management', text: 'One clear version of every category page' },
      { title: 'Product review schema markup', text: 'Review data communicated through structured markup' },
    ],
  },

  takeaway: {
    heading: 'Ecommerce growth doesn\'t always require new pages. Sometimes it requires making existing category pages strong enough to win.',
    versus: {
      before: { title: 'More pages', text: 'Every new page starts from the bottom and has to earn its position.', visual: <PageGridSketch variant="more" /> },
      after: { title: 'Stronger existing pages', text: 'Pages that already rank near the top need a push, not a rebuild.', visual: <PageGridSketch variant="stronger" /> },
    },
    body: 'This project shows that ecommerce growth can come from making the category pages a store already has strong enough to win. For any retailer with keywords ranking just below the traffic threshold, this is a high-leverage, practical approach.',
    fit: ['Ecommerce retailers', 'Keywords ranking just below the traffic threshold', 'Category-led catalogues'],
  },

  about: {
    heading: 'Delivered by Sangram Singh, SEO consultant',
    text: 'Previous work by Sangram Singh, SEO consultant at Sage Kite. Sangram led this engagement for Jenson USA, from finding the near-miss keywords through the category content, internal linking, URL clean-up and review schema described above. It shows how Sage Kite’s consultants approach ecommerce search: find where a site is closest to winning, fix the foundation, and strengthen the pages that matter most. Results are as reported by Sangram for this engagement.',
  },

  cta: {
    heading: 'Ranking on page one but not getting the clicks?',
    text: 'Book a discovery call and we\'ll look at which of your pages are closest to winning, and what is holding them back.',
    secondary: { label: 'See our SEO and marketing services', href: '/services/marketing' },
  },
};

export default study;
