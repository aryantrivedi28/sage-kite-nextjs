import type { CaseStudy } from '@/content/case-studies/types';
import { JensonCover } from '@/components/case-studies/covers';
import { AuditConsole } from '@/components/case-studies/AuditConsole';
import { AuditToggle } from '@/components/case-studies/AuditToggle';
import { RankTracker } from '@/components/case-studies/RankTracker';
import { CategoryBuilder } from '@/components/case-studies/CategoryBuilder';
import { UrlConsolidation } from '@/components/case-studies/UrlConsolidation';
import { StagePipeline } from '@/components/case-studies/StagePipeline';
import { PositionStrips } from '@/components/case-studies/PositionStrips';
import { CodeBlock, Tok } from '@/components/case-studies/blocks';

/*
 * Source: JensonUSA_Sage-Kite_Interactive-Technical.html, supplied by the team (replaces the earlier
 * Sage-Kite_Jenson-USA_Case-Study.html version). All copy is kept exactly as written in the new file (US spelling
 * included); only the site's brand colours and font are applied. Rendered in the technical layout like Croma, whose
 * source used the same template: kicker, chips, the audit console beside them and a progress bar; no section menu or
 * breadcrumb (D058, D059). The site's header and footer replace the file's; "See more work" links to /case-studies.
 *
 * Kept from the live page, though the new file does not have them (D083): the practitioner (Sangram Singh, Article
 * schema only), and the site's own meta title, description, og title, summary, keywords and cover. No `origin`,
 * `about` or "as reported" note: the user asked for the "Delivered by Sangram Singh" block, the origin pill and the
 * note under the metrics to be removed (D083).
 *
 * Figures are as reported by the delivery specialist (Sangram Singh); they were not independently verified, and since
 * D083 the page no longer says so.
 */
const study: CaseStudy = {
  slug: 'jenson-usa',
  client: 'Jenson USA',
  title: 'Moving 120+ commercial keywords from the bottom of page one into the Top 3',
  seoTitle: 'Ecommerce SEO Case Study: Jenson USA',
  ogTitle: 'Jenson USA: moving 120+ commercial keywords into the top 3',
  description: 'How Jenson USA moved 120+ commercial keywords from positions 8–10 into the top 3 with category content, internal linking, URL fixes and review schema.',
  summary: 'How an online cycling retailer moved 120+ commercial keywords from the bottom of page one into the top 3 by strengthening its category pages.',
  keywords: ['ecommerce SEO case study', 'Jenson USA', 'category page optimisation', 'duplicate URL fix', 'product review schema'],
  datePublished: '2026-10-14',
  dateModified: '2026-11-11',
  industry: 'Online cycling retail',
  discipline: 'SEO',
  cover: <JensonCover />,
  practitioner: { name: 'Sangram Singh', role: 'SEO consultant' },
  technical: { wideHeadings: true },
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
    label: 'Technical case study · Ecommerce SEO',
    dek: 'Visible, but not chosen. Until the category pages got stronger.',
    lede: 'Jenson USA, an online cycling retailer, had valuable commercial keywords such as mountain bikes stuck at positions 8–10: visible, but earning very little traffic. This page walks through the fixes with interactive demos you can try.',
    visual: (
      <AuditConsole
        bar="seo-audit · jenson-usa"
        command="audit --site jenson-usa --scope category-seo"
        rows={[
          { area: 'rankings', detail: '120+ keywords, 8–10 → top 3', status: 'moved' },
          { area: 'category-pages', detail: 'content + internal links', status: 'optimized' },
          { area: 'urls', detail: 'duplicate case variants', status: 'consolidated' },
          { area: 'schema', detail: 'product reviews', status: 'added' },
        ]}
        outcomes={['120+ commercial keywords in the top 3', 'strong growth in category traffic']}
        foot="Illustrative summary of the engagement, not a live tool."
        ariaLabel="Project summary console"
      />
    ),
    glance: [
      { label: 'Client', value: 'Jenson USA' },
      { label: 'Type', value: 'Ecommerce SEO' },
      { label: 'Focus', value: 'Category pages' },
    ],
  },

  metrics: {
    items: [
      { value: '120+', label: 'Keywords moved into the Top 3', tone: 'sky' },
      { value: '8–10 → Top 3', label: 'Ranking positions', tone: 'butter' },
      { value: 'Category pages', label: 'Primary growth lever', tone: 'coral' },
    ],
  },

  sections: [
    {
      id: 'diagnostics',
      label: '01 / DIAGNOSTICS',
      heading: 'The site was ranking, but not high enough for rankings to matter',
      intro: 'Jenson USA\'s revenue depends heavily on category pages that answer high-intent searches like "mountain bikes". The opportunity was converting near-miss rankings into the top positions where clicks actually happen.',
      content: (
        <AuditToggle
          title="Site audit: before and after"
          buttons={{ before: 'Before', after: 'After' }}
          groupLabel="Audit state"
          rows={[
            { title: 'Commercial keywords', before: 'Valuable category searches sat at positions 8–10, where click-through rates are minimal.', after: '120+ commercial keywords moved into the Top 3.', statusBefore: '8–10', statusAfter: 'Top 3' },
            { title: 'Category content', before: 'Thin pages lacked helpful SEO content, giving search engines little reason to rank them.', after: 'Helpful, search-relevant content added to match shopper intent.', statusBefore: 'Thin', statusAfter: 'Optimized' },
            { title: 'Category URLs', before: 'Uppercase and lowercase variations created duplicates that split ranking signals.', after: 'Duplicates resolved into a single version of each page.', statusBefore: 'Duplicates', statusAfter: 'Single version' },
            { title: 'Review visibility', before: 'Review data wasn\'t communicated to search engines through structured markup.', after: 'Review structured data implemented.', statusBefore: 'Not marked up', statusAfter: 'Schema added' },
            { title: 'Category traffic', before: 'The highest-value category searches were delivering almost no traffic.', after: 'Strong growth in category traffic and organic shopping visibility.', statusBefore: 'Negligible', statusAfter: 'Growing' },
          ]}
          note="Status labels summarize the case study findings. They are not tool scores."
        />
      ),
    },
    {
      id: 'rankings',
      band: 'pale',
      label: '02 / NEAR-MISS RANKINGS',
      heading: 'Start where the site was closest to winning',
      intro: 'The work began with keywords already on page one, but at positions 8–10. These were faster, lower-risk wins than chasing entirely new keywords. Toggle the tracker to see the move.',
      content: (
        <RankTracker
          title="Keyword position tracker"
          buttons={{ before: 'Before', after: 'After' }}
          groupLabel="Ranking state"
          ariaLabel="Sample commercial keywords moving from positions 8 to 10 into positions 1 to 3"
          axisLabel="keyword"
          keywords={[
            { name: 'mountain bikes', before: 9, after: 3 },
            { name: '{{ category keyword 2 }}', before: 8, after: 2 },
            { name: '{{ category keyword 3 }}', before: 10, after: 1 },
            { name: '{{ category keyword 4 }}', before: 9, after: 3 },
            { name: '{{ category keyword 5 }}', before: 8, after: 2 },
            { name: '{{ category keyword 6 }}', before: 10, after: 1 },
          ]}
          stats={{ top: 'Sample keywords in Top 3:', zone: 'Zone:' }}
          zones={{ before: 'Positions 8–10', after: 'Top 3' }}
          captions={{
            before: 'Before: the keywords sit at the very bottom of page one, visible but earning very little traffic.',
            after: 'After: the same keywords sit in the Top 3, where clicks actually happen.',
          }}
          note="Sample keywords and exact positions are illustrative. Only the move from positions 8–10 into the Top 3 comes from the case study."
        />
      ),
    },
    {
      id: 'category',
      label: '03 / CATEGORY PAGE',
      heading: 'Strengthen the pages: content, internal links, clean URLs and review schema',
      intro: 'Rather than adding volume, the work made existing category pages stronger. Switch each layer on to build the page and see what it adds.',
      content: (
        <CategoryBuilder
          title="Category page builder"
          groupLabel="Page layers"
          layers={[
            {
              key: 'content',
              label: 'Category content',
              caption: 'Helpful, search-relevant content gives search engines a reason to rank the page above competitors, and matches shopper intent.',
              codeLabel: 'HTML · representative',
              code: <><Tok t="c">{'<!-- helpful copy that matches shopper intent -->'}</Tok>{'\n<section class="category-intro">\n  <p>{{ useful, search-relevant content }}</p>\n</section>'}</>,
            },
            {
              key: 'links',
              label: 'Internal links',
              caption: 'Internal links point authority toward the priority category pages that matter most.',
              codeLabel: 'HTML · representative',
              code: <>{'<nav aria-label="Related categories">\n  <a href="'}<Tok t="s">/priority-category</Tok>{'">{{ anchor }}</a>\n</nav>'}</>,
            },
            {
              key: 'url',
              label: 'Clean URL',
              caption: 'Resolving uppercase and lowercase duplicates consolidates ranking signals into a single version of the page.',
              codeLabel: 'Pseudo-code · representative',
              code: <><Tok t="c"># one version per category URL</Tok>{'\nif path != path.lower():\n    redirect('}<Tok t="s">301</Tok>{', path.lower())'}</>,
            },
            {
              key: 'schema',
              label: 'Review schema',
              caption: 'Review structured data helps search engines understand and surface review information, so listings communicate trust.',
              codeLabel: 'JSON-LD · placeholders',
              code: (
                <>
                  {'{\n  '}<Tok t="k">&quot;@type&quot;</Tok>{': '}<Tok t="s">&quot;Product&quot;</Tok>{',\n  '}
                  <Tok t="k">&quot;aggregateRating&quot;</Tok>{': {\n    '}
                  <Tok t="k">&quot;@type&quot;</Tok>{': '}<Tok t="s">&quot;AggregateRating&quot;</Tok>{',\n    '}
                  <Tok t="k">&quot;ratingValue&quot;</Tok>{': '}<Tok t="s">{'"{{ reviews.avg }}"'}</Tok>{',\n    '}
                  <Tok t="k">&quot;reviewCount&quot;</Tok>{': '}<Tok t="s">{'"{{ reviews.count }}"'}</Tok>{'\n  }\n}'}
                </>
              ),
            },
          ]}
          wire={{
            url: { before: 'example.com/Mountain-Bikes', after: 'example.com/mountain-bikes' },
            badge: { before: 'Duplicate version', after: 'Single version' },
            contentTag: 'Helpful category content',
            linksTag: 'Internal links to priority categories',
            links: ['Related category', 'Related category', 'Buying guide'],
            stars: '★★★★☆ {{ rating }}',
            cards: 3,
          }}
          applied="Layers applied:"
          idle={{ caption: 'Select a layer to see what it does.', codeLabel: 'Select a layer', code: <Tok t="c">{'<!-- code appears here -->'}</Tok> }}
          note="Wireframe and code are representative examples with placeholder values, not Jenson USA's real page or markup."
        />
      ),
    },
    {
      id: 'urls',
      band: 'pale',
      label: '04 / DUPLICATE URLS',
      heading: 'Clean the foundation: one version of every category URL',
      intro: 'Uppercase and lowercase variations of the same category URL created duplicates that split ranking signals across multiple versions of one page. Try a variant.',
      content: (
        <UrlConsolidation
          title="URL consolidation"
          buttons={{ before: 'Before', after: 'After' }}
          groupLabel="URL state"
          inputLabel="URL path"
          initialPath="/Mountain-Bikes"
          samples={['/mountain-bikes', '/Mountain-Bikes', '/MOUNTAIN-BIKES', '/Mountain-bikes']}
          samplesLabel="Sample variants"
          messages={{
            empty: 'Enter a path to test.',
            separate: { title: 'Separate URL version', text: ' is served as its own URL, so it competes with other versions and splits ranking signals.' },
            single: { title: 'Single version', text: ' is the one authoritative version of this page.' },
            consolidated: { title: 'Consolidated', text: ' (single version, signals consolidated)' },
          }}
          code={(
            <CodeBlock label="Pseudo-code · representative rule">
              <Tok t="c"># one version per category URL</Tok>{'\nif path != path.lower():\n    redirect('}<Tok t="s">301</Tok>{', path.lower())'}
            </CodeBlock>
          )}
          signals={{
            ariaLabel: 'Ranking signal shared across URL versions',
            rows: [
              { path: '/mountain-bikes', before: '25%', after: '100%' },
              { path: '/Mountain-Bikes', before: '25%', after: '0%' },
              { path: '/MOUNTAIN-BIKES', before: '25%', after: '0%' },
              { path: '/Mountain-bikes', before: '25%', after: '0%' },
            ],
          }}
          captions={{
            before: 'Before: each variant is a separate URL, so ranking signals are split.',
            after: 'After: every variant resolves to one version, so signals consolidate.',
          }}
          note="Illustration with example paths and an equal-split value to show the concept, not measured data. The rule shown is representative."
        />
      ),
    },
    {
      id: 'pipeline',
      band: 'sky',
      label: '05 / EXECUTION APPROACH',
      heading: 'Small structural and content improvements, applied where they count',
      headingBreak: 'Small structural and content',
      intro: 'Targeting keywords already close to the top made the effort efficient: small structural and content improvements were enough to move rankings meaningfully. Select a stage, or press play.',
      content: (
        <StagePipeline
          title="Fix sequence"
          play={{ play: 'Play', pause: 'Pause' }}
          groupLabel="Fix stage"
          boxes={['Problem', 'Fix applied', 'Benefit']}
          stages={[
            { small: 'Stage 1', title: 'Locate near-miss rankings', problem: 'Valuable category searches sat at positions 8–10, where traffic impact is negligible.', fix: 'Identified high-value commercial keywords sitting just below the positions that drive traffic.', benefit: 'Faster, lower-risk wins than chasing entirely new keywords.' },
            { small: 'Stage 2', title: 'Clean the foundation', problem: 'Uppercase and lowercase category URL variations split ranking signals.', fix: 'Fixed duplicate category URLs first.', benefit: 'Ranking signals consolidated rather than split.' },
            { small: 'Stage 3', title: 'Strengthen the pages', problem: 'Thin category pages gave search engines little reason to rank them.', fix: 'Added category content and internal links.', benefit: 'Authority built on the pages that matter most.' },
            { small: 'Stage 4', title: 'Enhance search presentation', problem: 'Review data wasn\'t communicated to search engines.', fix: 'Added review schema.', benefit: 'Listings communicate trust and relevance.' },
          ]}
        />
      ),
    },
  ],

  resultsSection: {
    label: '06 / RESULTS',
    heading: '120+ commercial keywords moved into the Top 3',
    card: (
      <PositionStrips
        value="120+"
        strips={[
          { title: 'Before: positions 8–10', ariaLabel: 'Ranking positions before: 8 to 10 highlighted out of 10', on: [8, 9, 10] },
          { title: 'After: Top 3', ariaLabel: 'Ranking positions after: 1 to 3 highlighted out of 10', on: [1, 2, 3], after: true },
        ]}
        note="Illustration of the first ten search positions. Highlighted positions show where the keywords ranked before and after."
      />
    ),
    points: [
      { title: '120+ keywords in the Top 3', text: 'Commercial keywords moved up from positions 8–10.' },
      { title: 'Strong growth in category traffic', text: 'High-value category searches began delivering meaningful clicks.' },
      { title: 'Improved organic shopping visibility', text: 'Supported by cleaner URL signals and review markup.' },
    ],
  },

  changes: {
    label: '07 / IMPACT',
    heading: 'Wins built on assets the site already had',
    items: [
      { icon: 'lift', title: 'Wins built on existing assets', text: 'The improvement came from strengthening pages the site already had, rather than a large new content program.' },
      { icon: 'merge', title: 'Consolidated ranking signals', text: 'Every category page now has one clear, authoritative version, removing an ongoing source of diluted performance.' },
      { icon: 'grid', title: 'A repeatable model for other categories', text: 'The same approach of content, internal links, clean URLs and schema can be applied to more categories as the catalog grows.' },
      { icon: 'target', title: 'Clear focus on what drives revenue', text: 'Prioritizing commercial category keywords kept effort aligned with searches closest to purchase.' },
    ],
  },

  methods: {
    label: '08 / STACK',
    heading: 'Tools and tech used',
    items: [
      { title: 'Keyword ranking analysis (identifying positions 8–10 opportunities)' },
      { title: 'Category page SEO content optimization' },
      { title: 'Internal linking strategy' },
      { title: 'Canonical and duplicate URL management' },
      { title: 'Product review schema markup' },
    ],
  },

  takeaway: {
    label: 'Key takeaway',
    heading: 'Ecommerce growth doesn\'t always require new pages',
    body: 'Sometimes it requires making existing category pages strong enough to win. For any retailer with keywords ranking just below the traffic threshold, this is a high-leverage, practical approach.',
    link: { label: 'See more work', href: '/case-studies' },
  },

  cta: {
    heading: 'Are your best keywords stuck on the edge of page one?',
    text: 'Contact Sage Kite and book a free consultation. We\'ll look at where your category pages can win more in search.',
    primary: { label: 'Book a free consultation', href: '/contact' },
    secondary: { label: 'Contact Sage Kite', href: '/contact' },
  },
};

export default study;
