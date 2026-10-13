import type { CaseStudy } from '@/content/case-studies/types';
import { SearchTyper } from '@/components/case-studies/SearchTyper';
import { SearchFlow } from '@/components/case-studies/SearchFlow';
import { LinkingDemo } from '@/components/case-studies/LinkingDemo';
import { AudienceCards, Callout, Drivers, PageSketch, TreeSketch, VennSketch } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_Jiva-Ayurveda_Case-Study.html, supplied by the team.
 * Figures are as reported by the delivery specialist (Sangram Singh); they
 * were not independently verified, and the page says so.
 */
const study: CaseStudy = {
  slug: 'jiva-ayurveda',
  client: 'Jiva Ayurveda',
  title: 'How Jiva Ayurveda grew from 22,000 to 130,000+ monthly organic visitors',
  seoTitle: 'Healthcare SEO Case Study: Jiva Ayurveda',
  ogTitle: 'Jiva Ayurveda: from brand searches to ₹25L a month in organic revenue',
  description: 'How Jiva Ayurveda moved beyond branded search: organic traffic grew from 22,000 to 130,000+ monthly visitors and organic revenue from ₹5–6L to ₹25L a month.',
  summary: 'How an Ayurvedic healthcare brand moved beyond branded search, growing organic traffic from 22,000 to 130,000+ visitors a month.',
  keywords: ['healthcare SEO case study', 'Jiva Ayurveda', 'local SEO city pages', 'internal linking system', 'non-brand organic traffic'],
  datePublished: '2026-10-13',
  industry: 'Healthcare and Ayurvedic treatment',
  discipline: 'SEO',
  origin: 'Previous work by a Sage Kite delivery specialist',
  practitioner: { name: 'Sangram Singh', role: 'SEO consultant' },
  highlights: ['Content architecture', 'City-level pages', 'Internal linking system'],
  results: [
    { label: 'Monthly organic visitors', value: '~6×', valueLabel: 'About six times', before: '22,000', after: '130,000+', scale: 16.9 },
    { label: 'Monthly organic revenue', value: '~4–5×', valueLabel: 'About four to five times', before: '₹5–6L', after: '₹25L', scale: 24, rangeSolid: 83.3 },
  ],

  hero: {
    dek: 'Turning brand-dependent traffic into a ₹25L-a-month organic revenue engine.',
    lede: 'Jiva Ayurveda is a healthcare and Ayurvedic treatment brand. Its growth had hit a ceiling because most visits came from people who already knew its name. A rebuilt content architecture, city-level pages and a structured internal linking system opened up the patients who didn\'t.',
    visual: (
      <figure className="cs-search" aria-label="Illustrative searches: a brand search, a disease search and a city search, each now answered by a matching page type">
        <SearchTyper
          queries={[
            { q: 'Jiva Ayurveda', tone: 'butter', tag: 'Brand search', note: 'Already reached the site' },
            { q: 'Ayurvedic treatment for [condition]', tone: 'coral', tag: 'Disease search', note: 'Now answered by a dedicated disease page' },
            { q: 'Ayurvedic doctor in [city]', tone: 'sky', tag: 'City search', note: 'Now answered by a city landing page' },
          ]}
        />
        <figcaption>Illustrative searches, not measured data.</figcaption>
      </figure>
    ),
    glance: [
      { label: 'Client', value: 'Jiva Ayurveda' },
      { label: 'Industry', value: 'Healthcare and Ayurvedic treatment' },
      { label: 'Engagement', value: 'Enterprise SEO consulting' },
      { label: 'Consultant', value: 'Sangram Singh' },
    ],
  },

  metrics: {
    items: [
      { value: '22K to 130K+', label: 'Monthly organic traffic', tone: 'sky' },
      { value: '₹5–6L to ₹25L', label: 'Monthly organic revenue', tone: 'butter' },
      { value: '~6×', label: 'Traffic growth', tone: 'coral' },
      { value: '~4–5×', label: 'Revenue growth', tone: 'sage' },
    ],
    note: '₹25L is ₹25 lakh, or ₹2.5 million. Figures are as reported by the delivery specialist for this engagement.',
  },

  startingPoint: {
    heading: 'A known brand with real demand around it, and a site that wasn\'t built to capture it',
    content: (
      <>
        <p>Jiva Ayurveda works in healthcare and wellness, offering Ayurvedic treatments and consultations for a range of medical conditions. It brought in an SEO consultant to fix a growth ceiling caused by heavy reliance on branded search traffic. The growth came from three changes:</p>
        <Drivers items={['A rebuilt content architecture', 'City-level local pages', 'A structured internal linking system']} />
        <p>Its audience is made up of two groups of searchers:</p>
        <AudienceCards
          items={[
            { icon: 'search', text: 'Patients searching for disease-specific and treatment-specific solutions' },
            { icon: 'pin', text: 'People looking for Ayurvedic doctors and clinics in their city' },
          ]}
        />
        <p>When the engagement began, Jiva Ayurveda was an established brand with decent traffic, but its growth had plateaued. Most of its visibility came from people who already knew the brand name and searched for it directly, rather than from new patients finding it through disease or treatment searches.</p>
        <Callout title="Scaling, but capped.">Real demand existed in the market. The website wasn&apos;t built to capture it.</Callout>
      </>
    ),
  },

  problem: {
    heading: 'The issue was the type of traffic the site was getting, not the amount',
    items: [
      { title: 'Branded search dependence', text: 'Most organic visits came from people typing "Jiva Ayurveda" directly. The site was capturing people who already knew the brand and wasn\'t winning any new demand.' },
      { title: 'No structured disease pages', text: 'Patients searching for specific conditions, the highest-intent and most valuable searches in healthcare, had no dedicated, well-optimised pages to land on. That demand went to competitors.' },
      { title: 'No city-level pages', text: 'Despite strong local search demand for Ayurvedic treatment "near me" or by city, no location-based landing pages existed, so entire pockets of local demand were left on the table.' },
      { title: 'Weak internal linking', text: 'Diseases, treatments and cities weren\'t connected on the site, so even the existing content wasn\'t passing authority or guiding users (or Google) between related pages effectively.' },
    ],
    visual: (
      <SearchFlow
        title="Where three kinds of searches ended up"
        queries={[
          { text: 'Jiva Ayurveda', label: 'Brand search' },
          { text: 'Ayurvedic treatment for [condition]', label: 'Disease search' },
          { text: 'Ayurvedic doctor in [city]', label: 'City search' },
        ]}
        siteName="Jiva Ayurveda site"
        siteBefore="Brand searches only"
        siteAfter="Brand, disease and city searches"
        competitorsBefore="Win disease and city searches"
        captions={{
          before: 'Before: the site captured brand searches. Condition and city searches had no dedicated page to land on, so that demand went to competitors.',
          after: 'After: disease pages and city pages give condition and city searches somewhere to land, and the linking system connects them to related pages.',
        }}
        ariaLabel="Diagram of three searches flowing toward either the Jiva Ayurveda site or competitors. Use the Before and After buttons to switch."
      />
    ),
    pullQuote: 'Real patients with real medical needs were searching for exactly what Jiva Ayurveda offered, and weren\'t finding it in search results.',
  },

  approach: {
    heading: 'Diagnosis first, then four layers of work',
    intro: 'The engagement started with a diagnosis of where growth was actually stuck, rather than assuming more content or more backlinks was the answer. That meant:',
    diagnosis: [
      'Analysing the traffic mix, brand versus non-brand',
      'Reviewing what search demand existed for diseases and cities',
      'Identifying the structural gaps keeping the site from capturing it',
    ],
    steps: [
      { title: 'Demand mapping first', text: 'Understanding what patients were searching for at the disease, treatment and city level before building anything.' },
      { title: 'Structural fixes', text: 'Reorganising the sitemap and internal linking so the site\'s architecture could support scale, not just individual pages.' },
      { title: 'Content build-out', text: 'Creating disease and city pages designed around real search intent rather than generic descriptions.' },
      { title: 'Systemised linking', text: 'Instead of linking pages one by one, an internal linking system was built so new disease, treatment and city pages connect to relevant related pages automatically. It stays scalable as more content is added.' },
    ],
    note: 'Because the architecture came first, the results weren\'t a one-time traffic bump. The site was designed to keep compounding as more pages were added.',
  },

  delivered: {
    heading: 'Five pieces that turned a website into a system',
    tiles: [
      {
        tag: 'Plan', title: 'Master keyword architecture', tone: 'plain',
        text: 'Covering disease queries, city-level queries and doctor-related queries, it gave the site a content roadmap tied to actual search demand.',
        visual: <VennSketch labels={['Disease', 'City', 'Doctor']} ariaLabel="Three overlapping query families: disease, city and doctor" />,
      },
      {
        tag: 'Pages', title: 'Structured disease pages', tone: 'coral',
        text: 'Built to answer what patients search for around specific conditions and treatments.',
        visual: <PageSketch title="[Condition]" subtitle="Treatment · What patients ask" tone="coral" />,
      },
      {
        tag: 'Pages', title: 'City-level landing pages', tone: 'butter',
        text: 'Created for locations with high Ayurvedic treatment search demand, capturing local intent that hadn\'t been addressed before.',
        visual: <PageSketch title="[City]" subtitle="Ayurvedic treatment · Doctors and clinics" lines={2} tone="butter" />,
      },
      {
        tag: 'System', title: 'An automated internal linking system', tone: 'plain', size: 'wide', bare: true,
        text: 'It connects diseases, treatments and cities, which improved user navigation and how search engines understood the site\'s structure. Try adding a page below: it links itself in.',
        visual: <LinkingDemo groups={['Disease', 'Treatment', 'City']} />,
        note: 'Illustrative demo of the principle, not the client\'s actual site map.',
      },
      {
        tag: 'Structure', title: 'A reorganised sitemap', tone: 'sage',
        text: 'It reflects the new content structure and supports better crawling and indexing.',
        visual: (
          <TreeSketch
            root="Home"
            ariaLabel="Illustrative sitemap structure"
            items={[
              { name: 'Diseases', note: 'one page per condition' },
              { name: 'Treatments', note: 'linked to diseases' },
              { name: 'Cities', note: 'one page per location' },
              { name: 'Doctors', note: 'doctor-related queries' },
            ]}
          />
        ),
      },
    ],
  },

  resultsSection: {
    heading: 'What the numbers looked like once the site could be found for more than its name',
    points: [
      { title: 'Growth came from new patient discovery', text: 'Non-brand keyword rankings improved substantially, which means the growth wasn\'t just repeat brand searches.' },
      { title: 'Less dependence on paid channels', text: 'Dependency on paid channels for new patient acquisition went down, since organic search began doing more of the top-of-funnel work.' },
    ],
  },

  changes: {
    heading: 'A foundation, not a campaign',
    items: [
      { icon: 'ripple', title: 'Less reliance on brand awareness', text: 'Growth used to depend on how many people already knew the brand. New patients now find Jiva Ayurveda through disease and city searches, which reduces the pressure on other marketing channels to "introduce" the brand.' },
      { icon: 'nodes', title: 'A content system that sustains itself', text: 'Internal linking is automated and built into the site structure, so adding a disease or city page doesn\'t mean rebuilding the linking strategy. The system scales on its own.' },
      { icon: 'bars', title: 'Clearer visibility into what\'s working', text: 'With pages mapped to specific diseases and cities, the business can see which conditions and locations drive traffic and revenue. Future content and marketing decisions rest on data rather than guesswork.' },
      { icon: 'stack', title: 'A foundation rather than a campaign', text: 'The architecture keeps supporting growth as pages are added, and the business doesn\'t need a fresh SEO overhaul each time it expands into a new city or treatment area.' },
    ],
  },

  methods: {
    heading: 'The methods behind the system',
    items: [
      { title: 'Technical SEO auditing', text: 'Crawl budget, indexation, sitemap architecture' },
      { title: 'Keyword research and demand mapping', text: 'What patients search for, by disease, treatment and city' },
      { title: 'Internal linking automation', text: 'New pages connect to related pages without manual work' },
      { title: 'On-page content optimisation', text: 'For healthcare and medical search intent' },
      { title: 'Local and city-page SEO structuring', text: 'Location pages built for local search demand' },
    ],
  },

  takeaway: {
    heading: 'This is what happens when SEO is treated as a system instead of a series of one-off content pieces.',
    versus: {
      before: { title: 'One-off content pieces', text: 'Each page stands alone and has to be pushed individually.' },
      after: { title: 'A system', text: 'Pages reinforce one another, and new pages join the network.' },
    },
    body: 'A healthcare brand stuck on brand-only traffic reached 6× traffic growth and 4–5× revenue growth by capturing demand it had been losing to competitors. The same approach applies to any business with strong offline trust but weak non-brand search visibility, especially in:',
    fit: ['Healthcare', 'Multi-location businesses', 'High-intent service categories'],
  },

  about: {
    heading: 'Delivered by Sangram Singh, SEO consultant',
    text: 'Previous work by Sangram Singh, SEO consultant at Sage Kite. Sangram led this engagement for Jiva Ayurveda from the first traffic diagnosis and demand mapping through to the disease pages, city pages and automated internal linking system described above. It shows how Sage Kite’s consultants approach search and discovery: find where growth is actually stuck, build the structure first, and let the system compound as pages are added. Results are as reported by Sangram for this engagement.',
  },

  cta: {
    heading: 'Strong trust offline, but few new customers finding you in search?',
    text: 'Book a discovery call and we\'ll look at where your demand sits and whether your site is built to capture it.',
    secondary: { label: 'See our SEO and marketing services', href: '/services/marketing' },
  },
};

export default study;
