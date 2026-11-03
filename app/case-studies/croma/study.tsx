import type { CaseStudy } from '@/content/case-studies/types';
import { CromaCover } from '@/components/case-studies/covers';
import { AuditConsole } from '@/components/case-studies/AuditConsole';
import { AuditToggle } from '@/components/case-studies/AuditToggle';
import { LcpWaterfall } from '@/components/case-studies/LcpWaterfall';
import { LcpSlider } from '@/components/case-studies/LcpSlider';
import { SchemaToggle } from '@/components/case-studies/SchemaToggle';
import { RobotsTester } from '@/components/case-studies/RobotsTester';
import { StagePipeline } from '@/components/case-studies/StagePipeline';
import { CodeBlock, Tok } from '@/components/case-studies/blocks';

/*
 * Source: Croma_Sage-Kite_Interactive-Technical.html, supplied by the team.
 * All copy is kept exactly as written in the source file (US spelling included); only the
 * site's brand colours and font are applied. The meta title and description are shortened
 * to fit the length limits. Rendered in the technical layout (`technical`), which follows the
 * source's design: kicker, chips and progress bar (no section menu or breadcrumb, D058, D059), in
 * Manrope and the brand tokens (the source's serif and mono fonts are not used). The site's
 * header and footer replace the source's; "work" and "See more work" link to /case-studies.
 * Every demo is labelled illustrative in the source and here.
 *
 * No `origin` or `about`: the source does not state who did the work, and the user (on
 * the team's advice) asked for the page to match the source without them (decision.md D056).
 */
const study: CaseStudy = {
  slug: 'croma',
  client: 'Croma',
  title: 'Doubling organic traffic in 6 months for a retailer with strong offline brand recognition',
  seoTitle: 'Enterprise Ecommerce SEO Case Study: Croma',
  description: 'How Core Web Vitals fixes, product and review schema, page structure and sitemap and robots optimization doubled Croma\'s organic traffic in 6 months.',
  summary: 'How a retailer with strong offline brand recognition doubled organic traffic in 6 months by fixing Core Web Vitals, structured data, page structure and crawl.',
  keywords: ['enterprise ecommerce SEO case study', 'Croma', 'Core Web Vitals LCP optimization', 'product and review schema', 'XML sitemap and robots.txt optimization'],
  datePublished: '2026-11-03',
  industry: 'Consumer electronics retail',
  discipline: 'Technical SEO',
  cover: <CromaCover />,
  technical: {},
  highlights: ['Core Web Vitals', 'Product and review schema', 'Page structure', 'Sitemap and robots'],
  results: [
    {
      label: 'Organic traffic index',
      value: '2x',
      valueLabel: 'Two times',
      before: '100',
      after: '200',
      afterLabel: 'After 6 months',
      scale: 50,
      note: 'Illustration of a 100% increase, with starting traffic indexed to 100.',
    },
  ],

  hero: {
    label: 'Technical case study · Enterprise ecommerce SEO',
    dek: 'The website needed to earn in search what Croma had already earned in stores.',
    lede: 'Croma had strong offline brand recognition but weak organic visibility. Slow performance, Core Web Vitals issues and missing structured data were holding the website back. This page walks through the fixes with interactive demos you can try.',
    visual: (
      <AuditConsole
        bar="seo-audit · croma"
        command="audit --site croma.com --scope seo"
        rows={[
          { area: 'performance', detail: 'core web vitals, LCP', status: 'fixed' },
          { area: 'structured-data', detail: 'product + review schema', status: 'added' },
          { area: 'architecture', detail: 'category + product pages', status: 'improved' },
          { area: 'crawl-config', detail: 'sitemap + robots.txt', status: 'optimized' },
        ]}
        outcomes={['organic traffic +100% in 6 months', 'refrigerators + ACs ranking in the top 3']}
        foot="Illustrative summary of the engagement, not a live tool."
        ariaLabel="Project summary console"
      />
    ),
    glance: [
      { label: 'Client', value: 'Croma' },
      { label: 'Type', value: 'Enterprise ecommerce SEO' },
      { label: 'Timeframe', value: '6 months' },
    ],
  },

  metrics: {
    items: [
      { value: '+100%', label: 'Organic traffic in 6 months', tone: 'sky' },
      { value: 'Top 3', label: 'Refrigerators and ACs categories', tone: 'butter' },
      { value: 'Core Web Vitals', label: 'Performance issues resolved', tone: 'coral' },
    ],
  },

  sections: [
    {
      id: 'diagnostics',
      label: '01 / Diagnostics',
      heading: 'A trusted brand, outranked online because the foundation wasn\'t built to compete',
      intro: 'Croma competes for high-value, high-consideration searches such as refrigerators and air conditioners. Flip the switch to compare the site\'s state before and after the work.',
      content: (
        <AuditToggle
          title="Site audit: before and after"
          buttons={{ before: 'Before', after: 'After' }}
          groupLabel="Audit state"
          rows={[
            { title: 'Organic visibility', before: 'Not ranking well for the product and category searches that drive online sales.', after: 'Organic traffic up 100% in 6 months; refrigerators and ACs in the Top 3.', statusBefore: 'Weak', statusAfter: '+100%' },
            { title: 'Site performance', before: 'Site speed issues affected user experience and search performance.', after: 'Performance issues resolved.', statusBefore: 'Slow', statusAfter: 'Resolved' },
            { title: 'Core Web Vitals (LCP)', before: 'LCP, the loading speed of the main content, wasn\'t meeting the standards search engines use as ranking signals.', after: 'LCP optimized.', statusBefore: 'Failing', statusAfter: 'Optimized' },
            { title: 'Structured data', before: 'Product pages and categories lacked structured data.', after: 'Product and review schema implemented.', statusBefore: 'Missing', statusAfter: 'Implemented' },
            { title: 'Page structure and crawling', before: 'Category and product pages and crawl configuration needed work.', after: 'Pages restructured for clarity; sitemap and robots refined.', statusBefore: 'Needs work', statusAfter: 'Improved' },
          ]}
          note="Status labels summarize the case study findings. They are not tool scores."
        />
      ),
    },
    {
      id: 'performance',
      band: 'pale',
      label: '02 / Performance · Core Web Vitals',
      heading: 'Fixing LCP: getting the main content on screen sooner',
      intro: 'LCP measures how quickly the largest piece of content, usually a hero or product image, appears. Slow performance came first in the work: even strong pages struggle to rank on a slow site.',
      content: (
        <LcpWaterfall
          title="Load waterfall"
          buttons={{ before: 'Before optimization', after: 'After optimization' }}
          groupLabel="Waterfall state"
          rows={['HTML document', 'CSS', 'JavaScript', 'Hero image']}
          legend={['HTML', 'CSS', 'JavaScript', 'LCP image']}
          marker="LCP"
          captions={{
            before: 'Before: render-blocking CSS and JavaScript load first, and the hero image is discovered late, so LCP lands late.',
            after: 'After: the hero image is preloaded with high priority, critical CSS is inlined and scripts are deferred, so LCP lands much sooner.',
          }}
          note="Illustrative waterfall showing the technique, not Croma's measured timings."
        >
          <div className="cs-code-split">
            <CodeBlock label="HTML · techniques applied">
              <Tok t="c">{'<!-- prioritize the LCP element -->'}</Tok>{'\n'}
              {'<link rel="preload" as="image" href="/hero.avif"\n      '}<Tok t="h">fetchpriority=&quot;high&quot;</Tok>{'>\n\n'}
              <Tok t="c">{'<!-- don\'t block rendering -->'}</Tok>{'\n'}
              {'<style>'}<Tok t="c">{'/* critical CSS inlined */'}</Tok>{'</style>\n'}
              {'<script src="/app.js" '}<Tok t="h">defer</Tok>{'></script>'}
            </CodeBlock>
            <LcpSlider
              title="Try it: where does your LCP land?"
              ariaLabel="LCP in seconds"
              verdicts={['Good', 'Needs improvement', 'Poor']}
              bands={['≤ 2.5 s', '2.5–4 s', '> 4 s']}
              note="Google's published LCP thresholds, assessed at the 75th percentile of page loads. Reference only, not Croma's values."
            />
          </div>
        </LcpWaterfall>
      ),
    },
    {
      id: 'schema',
      label: '03 / Structured data',
      heading: 'Product and review schema: making products understandable to search engines',
      intro: 'Product pages and categories lacked the structured data that helps search engines understand and present products. Toggle the markup to see what changes in a search result.',
      content: (
        <SchemaToggle
          title="Search result preview"
          buttons={{ without: 'Without schema', with: 'With product and review schema' }}
          groupLabel="Schema state"
          result={{
            url: 'croma.com › category › product',
            title: '{{ Product name }} | Croma',
            rich: ['★★★★☆', '{{ rating }} · {{ review count }} reviews', '{{ price }}', 'In stock'],
            description: 'A standard result shows only a title, URL and description.',
          }}
          code={{
            without: (
              <CodeBlock label="Page source"><Tok t="c">{'<!-- no structured data on the page -->'}</Tok></CodeBlock>
            ),
            with: (
              <CodeBlock label="JSON-LD · template with placeholders">
                {'{\n  '}<Tok t="k">&quot;@type&quot;</Tok>{': '}<Tok t="s">&quot;Product&quot;</Tok>{',\n  '}
                <Tok t="k">&quot;name&quot;</Tok>{': '}<Tok t="s">{'"{{ product.name }}"'}</Tok>{',\n  '}
                <Tok t="k">&quot;offers&quot;</Tok>{': {\n    '}
                <Tok t="k">&quot;@type&quot;</Tok>{': '}<Tok t="s">&quot;Offer&quot;</Tok>{',\n    '}
                <Tok t="k">&quot;price&quot;</Tok>{': '}<Tok t="s">{'"{{ product.price }}"'}</Tok>{',\n    '}
                <Tok t="k">&quot;priceCurrency&quot;</Tok>{': '}<Tok t="s">&quot;INR&quot;</Tok>{'\n  },\n  '}
                <Tok t="k">&quot;aggregateRating&quot;</Tok>{': {\n    '}
                <Tok t="k">&quot;@type&quot;</Tok>{': '}<Tok t="s">&quot;AggregateRating&quot;</Tok>{',\n    '}
                <Tok t="k">&quot;ratingValue&quot;</Tok>{': '}<Tok t="s">{'"{{ reviews.avg }}"'}</Tok>{',\n    '}
                <Tok t="k">&quot;reviewCount&quot;</Tok>{': '}<Tok t="s">{'"{{ reviews.count }}"'}</Tok>{'\n  }\n}'}
              </CodeBlock>
            ),
          }}
          captions={{
            without: 'Without structured data, search engines have to guess what the page is about.',
            with: 'With Product and review schema, search engines can understand and display price, rating and availability.',
          }}
          note="Illustrative preview with placeholder values. Whether rich results appear is up to the search engine."
        />
      ),
    },
    {
      id: 'crawl',
      band: 'pale',
      label: '04 / Crawl control',
      heading: 'Sitemap and robots: guiding crawling more effectively',
      intro: 'The sitemap and robots configuration was refined to guide crawlers to the pages that matter. Test a URL path against an example rule set.',
      content: (
        <RobotsTester
          title="robots.txt tester"
          rulesLabel="robots.txt · representative rules"
          disallow={['/cart', '/checkout', '/*?sort=']}
          sitemap="https://www.example.com/sitemap_index.xml"
          inputLabel="URL path"
          initialPath="/refrigerators"
          samples={['/refrigerators', '/air-conditioners', '/cart', '/checkout/payment', '/refrigerators?sort=price']}
          samplesLabel="Sample paths"
          messages={{
            blocked: 'Blocked',
            matched: 'Matched rule: Disallow:',
            allowed: 'Allowed',
            allowedText: 'No Disallow rule matches, so crawlers can fetch this page.',
          }}
        >
          <CodeBlock label="sitemap_index.xml · segmented by page type">
            {'<sitemapindex>\n  <sitemap><loc>/sitemap-categories.xml</loc></sitemap>\n  <sitemap><loc>/sitemap-products.xml</loc></sitemap>\n</sitemapindex>'}
          </CodeBlock>
          <p className="note">Rules and paths are representative examples, not Croma&apos;s actual robots.txt.</p>
        </RobotsTester>
      ),
    },
    {
      id: 'pipeline',
      band: 'sky',
      label: '05 / Execution approach',
      heading: 'Croma\'s gap wasn\'t brand awareness. It was technical and structural readiness.',
      intro: 'Performance and technical fixes came before content-level changes. Because the work was foundational, it applied broadly across many products and categories rather than a handful of pages. Select a stage, or press play.',
      content: (
        <StagePipeline
          title="Where each fix acts"
          play={{ play: 'Play', pause: 'Pause' }}
          groupLabel="Pipeline stage"
          boxes={['Problem', 'Fix applied', 'Benefit']}
          stages={[
            { small: 'Stage 1', title: 'Fix the foundation', problem: 'Slow performance and Core Web Vitals issues, including LCP, weren\'t meeting the standards search engines use as ranking signals.', fix: 'Resolved performance issues, including LCP optimization.', benefit: 'A faster site for users and a stronger base for every later improvement.' },
            { small: 'Stage 2', title: 'Make products understandable', problem: 'Product pages and categories lacked structured data to help search engines understand and present products.', fix: 'Implemented product and review schema.', benefit: 'Search engines can understand and display product information.' },
            { small: 'Stage 3', title: 'Improve page architecture', problem: 'Key pages weren\'t organized for both users and search engines.', fix: 'Restructured category and product pages for clarity.', benefit: 'Clearer pages that apply across many products and categories.' },
            { small: 'Stage 4', title: 'Guide crawling', problem: 'Crawling wasn\'t being guided effectively.', fix: 'Optimized sitemap and robots configuration.', benefit: 'Fewer technical blockers for future SEO work.' },
          ]}
        />
      ),
    },
  ],

  resultsSection: {
    label: '06 / Results',
    heading: 'Organic traffic doubled in six months',
    points: [
      { title: '+100% organic traffic', text: 'Achieved within 6 months.' },
      { title: 'Top 3 rankings', text: 'Key categories such as refrigerators and ACs began ranking in the top 3 positions, in high-value product categories.' },
      { title: 'A stronger technical foundation', text: 'Performance issues resolved and structured data in place.' },
    ],
  },

  changes: {
    label: '07 / Impact',
    heading: 'Fewer blockers, and a base to build on',
    items: [
      { icon: 'search', title: 'Search visibility aligned with brand strength', text: 'The website began competing online at a level closer to the brand\'s offline reputation.' },
      { icon: 'shield', title: 'Fewer technical blockers', text: 'Resolving Core Web Vitals and crawl configuration removed obstacles that could limit future SEO work.' },
      { icon: 'cards', title: 'Richer product presentation in search', text: 'Product and review schema help search engines understand and display product information.' },
      { icon: 'grid', title: 'A base for further category growth', text: 'With the foundation fixed, more categories can be optimized without repeating the technical groundwork.' },
    ],
  },

  methods: {
    label: '08 / Stack',
    heading: 'Tools and tech used',
    items: [
      { title: 'Core Web Vitals analysis (LCP optimization)' },
      { title: 'Product schema and review schema markup' },
      { title: 'XML sitemap optimization' },
      { title: 'Robots.txt configuration' },
      { title: 'Category and product page structure optimization' },
    ],
  },

  takeaway: {
    label: 'Key takeaway',
    heading: 'Strong brand recognition doesn\'t automatically translate into search performance',
    body: 'For established retailers whose websites lag behind their offline reputation, fixing technical performance and structure can unlock rapid organic growth in competitive product categories.',
    link: { label: 'See more work', href: '/case-studies' },
  },

  cta: {
    heading: 'Is your website behind your brand?',
    text: 'Contact Sage Kite and book a free consultation. We\'ll look at your technical foundation and where your store can earn more in search.',
    primary: { label: 'Book a free consultation', href: '/contact' },
    secondary: { label: 'Contact Sage Kite', href: '/contact' },
  },
};

export default study;
