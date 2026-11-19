import type { CaseStudy } from '@/content/case-studies/types';
import { MarutiSuzukiCover } from '@/components/case-studies/covers';
import { NetworkMap, NetworkHeatmap } from '@/components/case-studies/DealerNetwork';
import { NapListings } from '@/components/case-studies/NapListings';
import { LocalPageBuilder } from '@/components/case-studies/LocalPageBuilder';
import { ReviewWhatIf } from '@/components/case-studies/ReviewWhatIf';
import { RoadDrive } from '@/components/case-studies/RoadDrive';
import { ResultGauges } from '@/components/case-studies/ResultGauges';

/*
 * Source: "Maruti Suzuki Multi-location Local SEO_ Interactive Case Study.html", supplied by the team on
 * 10 November 2026. It replaces the earlier MarutiSuzuki_Sage-Kite_Interactive-Technical.html (D069): the user asked
 * for the page to match the new file (D081). All copy is kept exactly as written in the source file (US spelling
 * included), including the closing call to action, which names Sangram Singh with his email and phone, as on Soch
 * (D080). Only the site's brand colours and font are applied. The meta title and description are the site's own,
 * kept from D069. Rendered in the technical layout like Soch: plain hero, kicker, chips, the network map beside them,
 * a progress bar and the round section pager ("1 / 7 · Overview"); no breadcrumb. The site's header and footer
 * replace the source's. Every demo is labelled illustrative in the source and here.
 *
 * No `origin` or `about`: the source does not state who did the work (D069, D081). No `results` figures either: the
 * source reports improvements without numbers, so the gauges show direction only.
 */
const PAGER = [
  { id: 'overview', label: 'Overview' },
  { id: 'audit', label: 'Audit' },
  { id: 'nap', label: 'NAP' },
  { id: 'local', label: 'Landing page' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'approach', label: 'Approach' },
  { id: 'results', label: 'Results' },
];

/** The placeholder network shared by the hero map and the audit grid: one row per showroom (profile, NAP, landing page, reviews). */
const NETWORK = [[0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1]];
const STANDARDS = ['Profile', 'NAP', 'Landing page', 'Reviews'];

const study: CaseStudy = {
  slug: 'maruti-suzuki',
  client: 'Maruti Suzuki India Limited',
  title: 'Standardizing local search visibility across a multi-location dealership network',
  seoTitle: 'Multi-location SEO Case Study: Maruti Suzuki',
  description: 'How a Google Business Profile audit, NAP consistency, local landing pages and review generation standardized Maruti Suzuki dealerships in local search.',
  summary: 'How a multi-location dealership network standardized its Google Business Profiles, NAP details, local landing pages and review process.',
  keywords: ['multi-location local SEO case study', 'Maruti Suzuki', 'Google Business Profile audit', 'NAP consistency', 'local landing pages', 'review generation'],
  datePublished: '2026-11-04',
  dateModified: '2026-11-10',
  industry: 'Automotive dealerships',
  discipline: 'Local SEO',
  cover: <MarutiSuzukiCover />,
  technical: {
    plainHero: true,
    pager: PAGER,
    pagerPlain: true,
  },
  highlights: ['Google Business Profile audit', 'NAP consistency', 'Local landing pages', 'Review generation'],
  results: [],

  hero: {
    label: 'Case study · Multi-location local SEO',
    dek: 'Customers searching for a nearby showroom couldn\'t reliably find the right dealership.',
    lede: 'Maruti Suzuki\'s dealerships appeared unevenly in Google Maps. Tap a pin on the network map, apply the standard to a location, or standardize the whole network at once.',
    visual: (
      <NetworkMap
        initial={NETWORK}
        standards={STANDARDS}
        ariaLabel="Dealership network map"
        pinLabel="Showroom {n}"
        cardTitle="Showroom {n} · {pct}% of the standard"
        stat="Network standard met:"
        buttons={{ standardize: 'Standardize network', reset: 'Reset' }}
        note="Illustrative map and placeholder locations, not real dealership data."
      />
    ),
    glance: [
      { label: 'Client', value: 'Maruti Suzuki India Limited' },
      { label: 'Type', value: 'Multi-location Local SEO' },
      { label: 'Result', value: 'Better Maps visibility, more calls and directions' },
    ],
  },

  metrics: {
    items: [
      { value: 'Multi-location', label: 'Dealership network', tone: 'sky' },
      { value: 'Google Maps', label: 'Visibility improved', tone: 'butter' },
      { value: 'Calls & directions', label: 'Local engagement increased', tone: 'coral' },
    ],
  },

  sections: [
    {
      id: 'audit',
      label: '01 / AUDIT FIRST',
      heading: 'Each location performed differently, with no consistent standard',
      intro: 'The engagement began with an audit across dealership profiles to see how far locations varied. Run the audit, then tap any cell for the issue and its fix.',
      content: (
        <NetworkHeatmap
          initial={NETWORK}
          standards={STANDARDS}
          rowLabel="Showroom {n}"
          run="Run audit"
          stat="Locations audited:"
          detail={{ label: 'Cell detail', idle: 'Run the audit, then pick a cell.', first: 'Run the audit first.', meets: 'Meets the standard.', fix: 'Apply fix' }}
          issues={[
            'Google Business Profile isn’t standardized: categories, hours and attributes vary.',
            'NAP details differ across directories and website assets.',
            'Dealer landing page lacks the local SEO strength to rank for showroom searches.',
            'No consistent review collection process.',
          ]}
          fixes={['Profile aligned to the network standard.', 'NAP aligned everywhere.', 'Optimized local landing page built.', 'Review generation process in place.']}
          note="Placeholder locations and results for illustration."
        />
      ),
    },
    {
      id: 'nap',
      band: 'pale',
      label: '02 / NAP CONSISTENCY',
      heading: 'One name, address and phone number, everywhere',
      intro: 'Inconsistent details can reduce search engines\' confidence in a location. Tap every listing detail that doesn\'t match the profile to correct it, or fix them all.',
      content: (
        <NapListings
          canonical={['Sample Motors Pvt Ltd', 'Plot 12, MG Road, Sample City 400001', '+91 98000 00000']}
          sources={[
            { name: 'Business Profile', cells: [{ text: 'Sample Motors Pvt Ltd', ok: true }, { text: 'Plot 12, MG Road, Sample City 400001', ok: true }, { text: '+91 98000 00000', ok: true }] },
            { name: 'Website footer', cells: [{ text: 'Sample Motors', ok: false }, { text: 'Plot 12, MG Road, Sample City 400001', ok: true }, { text: '+91 98000 00000', ok: true }] },
            { name: 'Directory A', cells: [{ text: 'Sample Motor Pvt. Ltd.', ok: false }, { text: '12 M.G. Rd, Sample City', ok: false }, { text: '098000 00000', ok: false }] },
            { name: 'Directory B', cells: [{ text: 'Sample Motors Pvt Ltd', ok: true }, { text: 'Plot 12, MG Road, Sample City 400010', ok: false }, { text: '+91 98000 00001', ok: false }] },
          ]}
          label="Consistency"
          buttons={{ fixAll: 'Fix all', reset: 'Reset' }}
          captions={{
            idle: 'Compare each listing with the Google Business Profile.',
            matches: 'That one already matches the profile.',
            done: 'Every listing now matches: clearer, more trustworthy information.',
            progress: '{n} of {total} mismatches corrected.',
          }}
          note="Fictional dealer details for illustration."
        />
      ),
    },
    {
      id: 'local',
      label: '03 / LOCAL LANDING PAGES',
      heading: 'Build a page that can rank for “showroom near me”',
      intro: 'Location-specific pages were built to rank for local showroom searches. Add the elements and watch the local relevance gauge.',
      content: (
        <LocalPageBuilder
          elements={[
            { label: 'City + showroom in the page title', weight: 20 },
            { label: 'Embedded map', weight: 10 },
            { label: 'NAP matching the profile', weight: 15 },
            { label: 'Book a test drive button', weight: 15 },
            { label: 'Nearby-area local content', weight: 15 },
            { label: 'Customer reviews on the page', weight: 10 },
            { label: 'LocalBusiness schema markup', weight: 15 },
          ]}
          ariaLabel="Local relevance gauge"
          captions={{
            low: 'Not yet competitive for “showroom near me”.',
            mid: 'Getting there: more local signals will help.',
            high: 'A strong, location-specific landing page.',
          }}
          empty="Add elements to build the page."
          note="Illustrative scoring weights, not a real ranking formula."
        />
      ),
    },
    {
      id: 'reviews',
      band: 'sky',
      label: '04 / REVIEW GENERATION',
      heading: 'A repeatable review process builds credibility every month',
      intro: 'Structured review generation helps locations build credibility on an ongoing basis. Try a what-if for a single showroom.',
      content: (
        <ReviewWhatIf
          delivered={{ label: 'Cars delivered per month:', min: 10, max: 200, step: 5, value: 60 }}
          asked={{ label: 'Customers asked for a review:', min: 5, max: 100, step: 5, value: 50 }}
          reviewRate={0.25}
          adhocRate={0.05}
          total="New reviews in 12 months"
          chartLabel="Cumulative reviews over 12 months, ad-hoc versus structured process"
          axis={{ start: 'month 0', end: 'month 12' }}
          legend={{ adhoc: 'Ad-hoc asking (5%)', mine: 'Your setting' }}
          note="What-if calculator with assumed numbers: 25% of people asked leave a review. These are not Maruti Suzuki results."
        />
      ),
    },
    {
      id: 'approach',
      label: '05 / EXECUTION APPROACH',
      heading: 'Standardized processes that apply across many locations',
      intro: 'Because the challenge was scale and consistency, the work focused on repeatable processes rather than one-off fixes. Take the drive.',
      content: (
        <RoadDrive
          ariaLabel="Road with four milestones"
          stations={[
            { title: 'Audit first', text: 'Assess Google Business Profiles across locations to identify inconsistencies.' },
            { title: 'Standardize the data', text: 'Make NAP details consistent everywhere the dealerships appear.' },
            { title: 'Build local relevance', text: 'Create optimized landing pages and location-specific content.' },
            { title: 'Strengthen trust signals', text: 'Improve review generation to reinforce local credibility.' },
          ]}
          button="Start the drive"
          stepLabel="Step {n} · {title}"
          idle={{ label: 'Step', text: 'Select a station or start the drive.' }}
        />
      ),
    },
  ],

  resultsSection: {
    label: '06 / RESULTS',
    heading: 'More visible on the map, more action from customers',
    band: 'pale',
    visual: (
      <ResultGauges
        gauges={[
          { title: 'Google Maps visibility', value: 82 },
          { title: 'Local calls', value: 76 },
          { title: 'Direction requests', value: 79 },
        ]}
        note="Direction of change only. The case study doesn't publish figures, so these gauges aren't measured values."
      />
    ),
    points: [
      { title: 'Improved visibility in Google Maps', text: 'Dealerships appeared more consistently for local searches.' },
      { title: 'Increased calls and direction requests', text: 'Stronger local engagement from people searching nearby.' },
      { title: 'Stronger presence for multi-location showroom queries', text: 'One standard applied across the network.' },
    ],
  },

  changes: {
    label: '07 / IMPACT',
    heading: 'How this made life easier',
    items: [
      { icon: 'grid', title: 'One consistent standard across locations', text: 'Standardized profiles and business information reduce location-by-location guesswork.' },
      { icon: 'shield', title: 'Clearer, more trustworthy local listings', text: 'Consistent NAP details make it easier for customers and search engines to trust each dealership\'s information.' },
      { icon: 'chat', title: 'A repeatable review process', text: 'Structured review generation helps locations build credibility on an ongoing basis.' },
      { icon: 'phone', title: 'Direct, measurable local engagement', text: 'Calls and direction requests give a practical view of how local visibility turns into customer action.' },
    ],
  },

  methods: {
    label: '08 / STACK',
    heading: 'Tools and tech used',
    items: [
      { title: 'Google Business Profile management and auditing' },
      { title: 'NAP consistency auditing' },
      { title: 'Local landing page SEO' },
      { title: 'Review generation processes' },
      { title: 'Local business content optimization' },
    ],
  },

  takeaway: {
    label: 'Key takeaway',
    heading: 'Turn an inconsistent local presence into a scalable lead channel',
    body: 'For any business with many branches, showrooms or clinics, standardizing local SEO delivers value across every location at once.',
  },

  cta: {
    heading: 'Many locations, one standard?',
    text: 'Contact Sangram Singh for a free consultation on multi-location local SEO.',
    primary: { label: 'Book a free consultation', href: 'mailto:shekhawatsangram96@gmail.com' },
    secondary: { label: '+91 7690088700', href: 'tel:+917690088700' },
  },
};

export default study;
