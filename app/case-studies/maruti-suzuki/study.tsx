import type { CaseStudy } from '@/content/case-studies/types';
import { MarutiSuzukiCover } from '@/components/case-studies/covers';
import { ShowroomMap } from '@/components/case-studies/ShowroomMap';
import { NetworkAudit } from '@/components/case-studies/NetworkAudit';
import { NapConsistency } from '@/components/case-studies/NapConsistency';
import { LandingPagePreview } from '@/components/case-studies/LandingPagePreview';
import { ReviewLane } from '@/components/case-studies/ReviewLane';
import { RoadStops } from '@/components/case-studies/RoadStops';
import { ResultDials } from '@/components/case-studies/ResultDials';

/*
 * Source: MarutiSuzuki_Sage-Kite_Interactive-Technical.html, supplied by the team.
 * All copy is kept exactly as written in the source file (US spelling included); only the
 * site's brand colours and font are applied. The meta title and description are shortened
 * to fit the length limits. Rendered in the technical layout like Croma, matched to the source:
 * plain hero (no grid paper), kicker, chips, the map beside them, a progress bar and the floating
 * section pill (odometer); no breadcrumb or section menu, as for Croma (D058, D059). Manrope and
 * the brand tokens only. The site's header and footer replace the source's; "See more work"
 * links to /case-studies. Every demo is labelled illustrative in the source and here.
 *
 * No `origin` or `about`: the source does not state who did the work, and the user approved
 * publishing it without them, as for Croma (decision.md D069). No `results` figures either: the
 * source reports improvements without numbers, so the dials show direction only.
 */
const study: CaseStudy = {
  slug: 'maruti-suzuki',
  client: 'Maruti Suzuki India Limited',
  title: 'Standardizing local search visibility across a multi-location dealership network',
  seoTitle: 'Multi-location SEO Case Study: Maruti Suzuki',
  description: 'How a Google Business Profile audit, NAP consistency, local landing pages and review generation standardized Maruti Suzuki dealerships in local search.',
  summary: 'How a multi-location dealership network standardized its Google Business Profiles, NAP details, local landing pages and review process.',
  keywords: ['multi-location local SEO case study', 'Maruti Suzuki', 'Google Business Profile audit', 'NAP consistency', 'local landing pages', 'review generation'],
  datePublished: '2026-11-04',
  industry: 'Automotive dealerships',
  discipline: 'Local SEO',
  cover: <MarutiSuzukiCover />,
  technical: {
    plainHero: true,
    odometer: [
      { id: 'overview', label: 'Overview' },
      { id: 'network', label: 'Dealership audit' },
      { id: 'nap', label: 'NAP consistency' },
      { id: 'pages', label: 'Local landing pages' },
      { id: 'reviews', label: 'Review process' },
      { id: 'approach', label: 'Execution approach' },
      { id: 'results', label: 'Results' },
    ],
  },
  highlights: ['Google Business Profile audit', 'NAP consistency', 'Local landing pages', 'Review generation'],
  results: [],

  hero: {
    label: 'Case study · Multi-location local SEO',
    dek: 'Customers searching for a nearby showroom should reliably find the right dealership.',
    lede: 'Maruti Suzuki India Limited\'s dealership network had inconsistent visibility in Google Maps and local search. Google Business Profiles weren\'t standardized, business information varied across the web and many dealer pages lacked local SEO strength. Try the map: find the nearest showroom.',
    visual: (
      <ShowroomMap
        ariaLabel="Illustrative map of dealership locations"
        idle="Select a showroom pin, or find the nearest one."
        driving="Driving to Dealership {n}…"
        arrived="Arrived at Dealership {n}: visible in Google Maps. The customer can call or get directions."
        pinLabel="Go to Dealership {n}"
        pinText="D{n}"
        button="Find nearest showroom"
      />
    ),
    note: 'Illustrative map with placeholder locations, not real dealership data.',
    glance: [
      { label: 'Client', value: 'Maruti Suzuki India Limited' },
      { label: 'Type', value: 'Multi-location local SEO' },
    ],
  },

  metrics: {
    items: [
      { value: 'Multi-location', label: 'Dealership network', tone: 'sky' },
      { value: 'Google Maps', label: 'Visibility improved', tone: 'butter' },
      { value: 'Calls & Directions', label: 'Local engagement increased', tone: 'coral' },
    ],
  },

  sections: [
    {
      id: 'network',
      label: '01 / Profile audit',
      heading: 'Each location was performing differently, with no consistent standard',
      intro: 'The engagement began with an audit across dealership profiles to see how far locations varied and where the biggest gaps were. Run an audit on the network, then standardize it.',
      content: (
        <NetworkAudit
          buttons={{ audit: 'Run network audit', fixAll: 'Standardize all', reset: 'Reset' }}
          stats={{ audited: 'Audited:', gaps: 'Gaps found:', standardized: 'Standardized:' }}
          dealer="Dealership {n}"
          tags={['GBP', 'NAP', 'PAGE', 'REV']}
          captions={{
            idle: 'Select a dealership to audit it, or run the audit across the whole network.',
            progress: 'Audit in progress.',
            complete: 'Audit complete. Gaps and inconsistencies identified. Standardize each location, or all at once.',
            done: 'Every dealership now follows one consistent standard, while keeping its own location details.',
          }}
          note="Illustrative network of 12 placeholder dealerships. GBP = Google Business Profile, NAP = name, address, phone, PAGE = landing page, REV = review process."
        />
      ),
    },
    {
      id: 'nap',
      band: 'pale',
      label: '02 / NAP consistency',
      heading: 'Align name, address and phone everywhere a dealership appears',
      intro: 'Details that weren\'t consistent across directories and website assets can reduce search engines\' confidence in a location\'s information. Select each mismatched detail to correct it and watch the consistency gauge.',
      content: (
        <NapConsistency
          headings={['Source', 'Name', 'Address', 'Phone']}
          correct={['Dealer Name', '12 Main Road, City A', '+91 00000 00000']}
          sources={[
            { source: 'Google Business Profile', values: ['Dealer Name', '12 Main Road, City A', '+91 00000 00000'] },
            { source: 'Directory A', values: ['Dealer Nm', '12 Main Road, City A', '00000 00000'] },
            { source: 'Directory B', values: ['Dealer Name Pvt. Ltd.', '12 Main Rd, City A', '+91 00000 00000'] },
            { source: 'Website', values: ['Dealer Name', '12 Main Road, City A', '(0000) 000000'] },
          ]}
          fixLabel="fix"
          buttons={{ fixAll: 'Fix all', reset: 'Reset' }}
          gaugeLabel="NAP consistency"
          gaugeAriaLabel="NAP consistency gauge"
          captions={{
            mismatch: 'Mismatched details can reduce search engines\' confidence in a location\'s information.',
            consistent: 'Consistent NAP details make it easier for customers and search engines to trust the listing.',
          }}
          note="Placeholder business details. The mismatches shown are typical examples, not real listings."
        />
      ),
    },
    {
      id: 'pages',
      label: '03 / Local landing pages',
      heading: 'SEO-optimized pages for each showroom, built on one standard',
      intro: 'Many dealer pages lacked the local SEO strength needed to rank for showroom searches. Pick a location: the structure stays the same while the details change. Then tap Call and Directions to see how visibility turns into action.',
      content: (
        <LandingPagePreview
          cities={['City A', 'City B', 'City C']}
          groupLabel="Location"
          url="example.com › showrooms › {slug}"
          heading="Car showroom in {city}"
          nap={['Dealer Name, {city}', 'Address line, {city}', '+91 00000 00000']}
          local="Local content: {{ nearby areas, landmarks and showroom details for {city} }}"
          buttons={{ call: 'Call showroom', directions: 'Get directions' }}
          stats={{ calls: 'Calls:', directions: 'Direction requests:' }}
          caption="Calls and direction requests give a practical view of how local visibility turns into customer action."
          points={[
            'Location-specific page, designed to rank for local showroom searches.',
            'Local business content reinforces local relevance.',
            'The same pattern can be repeated for every dealership.',
          ]}
          note="Placeholder page content and counters for demonstration, not real dealership data."
        />
      ),
    },
    {
      id: 'reviews',
      band: 'pale',
      label: '04 / Review generation',
      heading: 'A repeatable review process that builds credibility on an ongoing basis',
      intro: 'Strengthening how dealerships collect customer reviews reinforces local credibility. Send a customer down the lane and watch the process run.',
      content: (
        <ReviewLane
          steps={['Customer visit', 'Review request sent', 'Review posted', 'Profile builds credibility']}
          button="Simulate a customer visit"
          stat="Reviews collected:"
          note="Illustrative simulation of the process, not real review data."
        />
      ),
    },
    {
      id: 'approach',
      label: '05 / Execution approach',
      heading: 'Standardized processes that apply across many locations, not one-off fixes',
      intro: 'Because the challenge was scale and consistency, each dealership could benefit from the same best practices while still presenting its own location-specific information. Keep scrolling to drive down the road.',
      content: (
        <RoadStops
          stops={[
            { small: 'Stop 1', title: 'Audit first', text: 'Assess Google Business Profiles across locations to identify inconsistencies.' },
            { small: 'Stop 2', title: 'Standardize the data', text: 'Make NAP details consistent everywhere the dealerships appear.' },
            { small: 'Stop 3', title: 'Build local relevance', text: 'Create optimized landing pages and location-specific content.' },
            { small: 'Stop 4', title: 'Strengthen trust signals', text: 'Improve review generation to reinforce local credibility.' },
          ]}
        />
      ),
    },
  ],

  resultsSection: {
    label: '06 / Results',
    heading: 'More visible dealerships, and more calls and direction requests',
    band: 'sky',
    visual: (
      <ResultDials
        dials={[
          { title: 'Google Maps visibility', value: 'Improved', ariaLabel: 'Google Maps visibility improved' },
          { title: 'Local calls', value: 'Increased', ariaLabel: 'Local calls increased' },
          { title: 'Direction requests', value: 'Increased', ariaLabel: 'Direction requests increased' },
        ]}
        note="Dials show direction of change only. The case study reports improvements without specific figures."
      />
    ),
    points: [
      { title: 'Improved dealership visibility in Google Maps', text: 'More consistent presence across the network.' },
      { title: 'Increased local calls and direction requests', text: 'Reflecting stronger local engagement.' },
      { title: 'Stronger search presence for multi-location showroom queries', text: 'Customers can more reliably find the right dealership.' },
    ],
  },

  changes: {
    label: '07 / Impact',
    heading: 'One consistent standard across locations',
    items: [
      { icon: 'grid', title: 'One consistent standard across locations', text: 'Standardized profiles and business information reduce location-by-location guesswork.' },
      { icon: 'shield', title: 'Clearer, more trustworthy local listings', text: 'Consistent NAP details make it easier for customers and search engines to trust each dealership\'s information.' },
      { icon: 'chat', title: 'A repeatable review process', text: 'Structured review generation helps locations build credibility on an ongoing basis.' },
      { icon: 'phone', title: 'Direct, measurable local engagement', text: 'Calls and direction requests give a practical view of how local visibility turns into customer action.' },
    ],
  },

  methods: {
    label: '08 / Stack',
    heading: 'Tools and tech used',
    items: [
      { title: 'Google Business Profile management and auditing' },
      { title: 'NAP consistency auditing across directories' },
      { title: 'Local landing page SEO optimization' },
      { title: 'Review generation processes' },
      { title: 'Local business content optimization' },
    ],
  },

  takeaway: {
    label: 'Key takeaway',
    heading: 'Turn an inconsistent local presence into a consistent, scalable lead channel',
    body: 'For any business with many branches, showrooms or clinics, standardizing local SEO delivers value across every location at once.',
    link: { label: 'See more work', href: '/case-studies' },
  },

  cta: {
    heading: 'Running a multi-location business?',
    text: 'Contact Sage Kite and book a free consultation. We\'ll look at how your locations show up in Google Maps and local search.',
    primary: { label: 'Book a free consultation', href: '/contact' },
    secondary: { label: 'Contact Sage Kite', href: '/contact' },
  },
};

export default study;
