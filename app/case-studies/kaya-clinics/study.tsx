import { Fragment } from 'react';
import type { CaseStudy } from '@/content/case-studies/types';
import { KayaClinicsCover } from '@/components/case-studies/covers';
import { PatientSearch } from '@/components/case-studies/PatientSearch';
import { PatientJourney } from '@/components/case-studies/PatientJourney';
import { StepLinks } from '@/components/case-studies/StepLinks';
import { QueryBuilder } from '@/components/case-studies/QueryBuilder';
import { DoctorSchema } from '@/components/case-studies/DoctorSchema';
import { DepthSlider } from '@/components/case-studies/DepthSlider';
import { LinkGraph } from '@/components/case-studies/LinkGraph';
import { GrowthRing } from '@/components/case-studies/GrowthRing';

/*
 * Source: KayaClinics_Sage-Kite_Interactive-Technical.html, supplied by the team.
 * All copy is kept exactly as written in the source file (US spelling included); only the
 * site's brand colours and font are applied. The meta title and description are shortened
 * to fit the length limits. Rendered in the technical layout like Croma and Maruti Suzuki, matched
 * to the source: plain hero (no grid paper), kicker, chips, the typing search beside them, a progress
 * bar and the dot menu on the right edge of wide screens; no breadcrumb, as the user chose (D072).
 * Manrope and the brand tokens only. The site's header and footer replace the source's; "See more
 * work" links to /case-studies. Every demo is labelled illustrative in the source and here.
 *
 * No `origin` or `about`: the source does not state who did the work, and the user approved
 * publishing it without them, as for Croma and Maruti Suzuki (decision.md D072).
 */
const study: CaseStudy = {
  slug: 'kaya-clinics',
  client: 'Kaya Clinics',
  title: 'Growing organic traffic 120% and driving appointment leads for a multi-clinic healthcare brand',
  seoTitle: 'Healthcare Local SEO Case Study: Kaya Clinics',
  description: 'How clinic landing pages, doctor schema, deeper treatment content and internal linking grew Kaya Clinics\' organic traffic 120% and appointment leads.',
  summary: 'How a multi-clinic skin and aesthetic brand grew organic traffic 120% with local clinic pages, doctor schema, deeper treatment content and linking.',
  keywords: ['healthcare SEO case study', 'Kaya Clinics', 'local SEO for clinics', 'doctor schema', 'treatment page content', 'internal linking'],
  datePublished: '2026-11-04',
  industry: 'Healthcare (skin and aesthetic clinics)',
  discipline: 'Healthcare SEO',
  cover: <KayaClinicsCover />,
  technical: {
    plainHero: true,
    dotnav: [
      { id: 'overview', label: 'Overview' },
      { id: 'journey', label: 'Patient journey' },
      { id: 'local', label: 'Local search' },
      { id: 'trust', label: 'Trust signals' },
      { id: 'depth', label: 'Treatment depth' },
      { id: 'links', label: 'Connected content' },
      { id: 'results', label: 'Results' },
    ],
  },
  highlights: ['Clinic landing pages', 'Doctor schema', 'Treatment content depth', 'Internal linking'],
  results: [
    {
      label: 'organic traffic',
      value: '+120%',
      valueLabel: 'Plus 120 percent',
      before: '100',
      after: '220',
      scale: 45,
      note: 'Illustration of a 120% increase, with starting traffic indexed to 100.',
    },
  ],

  hero: {
    label: 'Case study · Healthcare and local SEO',
    dek: 'Patients search for a treatment, then for a clinic near them. Both steps had to work.',
    lede: 'Kaya Clinics, a chain of skin and aesthetic treatment clinics, had clinic pages that weren\'t optimized for local search, treatment pages that lacked depth and missing medical trust signals. Explore the fixes through the patient\'s journey.',
    visual: (
      <PatientSearch
        ariaLabel="Illustrative patient search"
        queries={[
          { q: 'skin treatment', types: ['blog', 'treat'] },
          { q: 'aesthetic treatment near me', types: ['clinic'] },
          { q: 'skin clinic in City A', types: ['clinic'] },
        ]}
        results={[
          { type: 'blog', small: 'Learn', title: 'Blog: understand the treatment', text: 'Answers the patient\'s first questions' },
          { type: 'treat', small: 'Compare', title: 'Treatment page', text: 'In-depth information to decide' },
          { type: 'clinic', small: 'Choose', title: 'Clinic page', text: 'Optimized for the location search' },
        ]}
        note="Illustrative searches, showing which page type meets each patient need."
      />
    ),
    glance: [
      { label: 'Client', value: 'Kaya Clinics' },
      { label: 'Type', value: 'Healthcare and local SEO' },
      { label: 'Result', value: '+120% organic traffic' },
    ],
  },

  metrics: {
    items: [
      { value: '+120%', label: 'Organic traffic growth', tone: 'sky' },
      { value: 'Higher', label: 'Clinic appointment leads', tone: 'butter' },
      { value: 'Strong', label: 'Treatment keyword rankings', tone: 'coral' },
    ],
  },

  sections: [
    {
      id: 'journey',
      label: '01 / The patient journey',
      heading: 'The website wasn\'t set up to meet patients at either step of their search',
      intro: 'Healthcare is a trust-sensitive category. Search engines and patients both look for credibility, such as qualified doctors and clear, in-depth treatment information. Walk the journey and see what was missing at each stop.',
      content: (
        <PatientJourney
          walk={{ walk: 'Walk the journey', pause: 'Pause' }}
          hint="or select any stop"
          boxes={['What the patient needs', 'What was missing', 'The fix']}
          stops={[
            { label: 'Learn', need: 'To understand a treatment before deciding.', missing: 'Blogs, treatments and clinics weren\'t linked together in a way that guided patients or search engines between them.', fix: 'Internal linking strengthened links between blogs, treatments and clinics.', href: '#links', link: 'See connected content' },
            { label: 'Compare', need: 'Clear, in-depth answers to patient questions.', missing: 'Treatment content lacked the depth needed to answer patient questions and compete in search.', fix: 'Treatment pages were expanded with more depth.', href: '#depth', link: 'See treatment depth' },
            { label: 'Trust', need: 'Signs of credibility, such as qualified doctors and clear information.', missing: 'The trust signals required for healthcare SEO, such as doctor information and medical structured data, were absent.', fix: 'Doctor schema and medical structured data communicate credentials and medical information.', href: '#trust', link: 'See trust signals' },
            { label: 'Find a clinic', need: 'A clinic near them.', missing: 'Clinic pages weren\'t optimized for the location-based searches patients use to find nearby clinics.', fix: 'Clinic landing pages were optimized for location keywords.', href: '#local', link: 'See local intent' },
            { label: 'Book', need: 'Enough confidence to book an appointment.', missing: 'Patients searching for treatments and nearby clinics were not finding Kaya, or were not getting enough confidence to book.', fix: 'A connected, trusted journey led to higher clinic appointment leads.', href: '#results', link: 'See results' },
          ]}
        />
      ),
    },
    {
      id: 'approach',
      band: 'pale',
      label: '02 / Execution approach',
      heading: 'Follow how patients actually search, from treatment interest to clinic selection',
      intro: 'Healthcare-specific trust elements were treated as core requirements, not extras, since credibility strongly influences both rankings and patient decisions. Jump to any step.',
      content: (
        <StepLinks
          steps={[
            { small: 'Step 1', title: 'Capture local intent', text: 'Optimize clinic pages around location keywords.', href: '#local' },
            { small: 'Step 2', title: 'Build trust', text: 'Add doctor schema and medical structured data.', href: '#trust' },
            { small: 'Step 3', title: 'Add depth', text: 'Improve treatment pages to answer real patient questions.', href: '#depth' },
            { small: 'Step 4', title: 'Connect the journey', text: 'Link blogs, treatments and clinics into one path.', href: '#links' },
          ]}
        />
      ),
    },
    {
      id: 'local',
      label: '03 / Local intent',
      heading: 'Capture local intent with clinic landing pages',
      intro: 'Patients typically search for a treatment, then look for a clinic near them. Build a search and see which page needs to answer it.',
      content: (
        <QueryBuilder
          groups={{ treatment: { heading: 'Treatment', label: 'Treatment' }, location: { heading: 'Location intent', label: 'Location' } }}
          treatments={['Treatment A', 'Treatment B', 'Treatment C']}
          locations={[{ label: 'No location' }, { label: 'near me', place: 'Your Area' }, { label: 'in City A', place: 'City A' }]}
          local={{
            url: 'example.com › clinics › city-a',
            title: '{treatment} in {place} | Kaya Clinics',
            description: 'Clinic landing page: location, doctors and appointment details for {treatment}.',
            why: [
              <Fragment key="local">Location intent matches a <b>clinic landing page</b>.</Fragment>,
              'Pages optimized for location keywords can meet patients searching for nearby clinics.',
              'The same pattern repeats for each clinic, so it can extend to new ones.',
            ],
          }}
          treatment={{
            url: 'example.com › treatments › {slug}',
            title: '{treatment}: what to expect | Kaya Clinics',
            description: 'Treatment page: in-depth information that answers patient questions.',
            why: [
              <Fragment key="treatment">Treatment-only intent matches a <b>treatment page</b>.</Fragment>,
              'Depth is what lets the page answer patient questions and compete in search.',
              'Links to clinic pages carry the patient to the next step.',
            ],
          }}
          note="Treatments and cities are placeholders. Page titles and URLs are representative, not Kaya's actual pages."
        />
      ),
    },
    {
      id: 'trust',
      band: 'pale',
      label: '04 / Medical trust signals',
      heading: 'Build trust with doctor schema and medical structured data',
      intro: 'The trust signals required for healthcare SEO, such as doctor information and medical structured data, were absent. Switch on the details a doctor page should communicate and watch the markup build.',
      content: (
        <DoctorSchema
          groupLabel="Doctor details"
          fields={[
            { label: 'Doctor name', prop: 'name', value: '{{ doctor.name }}', on: true },
            { label: 'Medical specialty', prop: 'medicalSpecialty', value: '{{ doctor.specialty }}' },
            { label: 'Credentials and qualifications', prop: 'hasCredential', value: '{{ doctor.credentials }}' },
            { label: 'Clinic location', prop: 'address', value: '{{ clinic.address }}' },
            { label: 'Treatments offered', prop: 'availableService', value: '{{ treatments }}' },
            { label: 'Doctor profile page', prop: 'url', value: '{{ doctor.profile_url }}' },
          ]}
          context="https://schema.org"
          type="Physician"
          codeLabel="JSON-LD · doctor markup with placeholders"
          ringLabel="Trust signals communicated"
          messages={[
            'Add details to communicate credentials and medical information.',
            'A basic identity, but little else for search engines to trust.',
            'Getting clearer. Credentials and specialty build credibility.',
            'Good coverage of who the doctor is and where they practice.',
            'Nearly complete: doctors, locations and treatments are connected.',
            'Complete markup communicates trust to search engines.',
          ]}
          note="Representative markup with placeholder values. It illustrates the kind of information communicated, not Kaya's real doctor data."
        />
      ),
    },
    {
      id: 'depth',
      label: '05 / Treatment content depth',
      heading: 'Add depth: treatment pages that answer real patient questions',
      intro: 'Treatment content lacked the depth needed to answer patient questions and compete in search. Drag the slider to deepen a treatment page.',
      content: (
        <DepthSlider
          label="Content depth"
          ticks={['Shallow', 'In-depth']}
          sections={['What the treatment is', 'Who it is for', 'What to expect', 'Aftercare', 'Common questions', 'Doctor information']}
          stats={{ sections: 'Sections:', questions: 'Patient questions answered:' }}
          captions={[
            'Starting to answer the basic question: what is this treatment?',
            'Patients can now see whether it is right for them.',
            'The page explains the process, so patients know what to expect.',
            'Aftercare guidance helps patients feel prepared.',
            'Common questions are answered on the page itself.',
            'An in-depth page answers real patient questions and can compete in search.',
          ]}
          note="Representative page sections, not Kaya's actual treatment content."
        />
      ),
    },
    {
      id: 'links',
      band: 'pale',
      label: '06 / Connected content',
      heading: 'Connect the journey: blogs, treatments and clinics as one path',
      intro: 'Blogs, treatments and clinics weren\'t linked in a way that guided patients or search engines between them. Hover or focus a page to see its connections, or trace a patient\'s path to an appointment.',
      content: (
        <LinkGraph
          ariaLabel="Internal linking between blogs, treatments and clinics"
          columns={['Blogs', 'Treatments', 'Clinics', 'Outcome']}
          names={{ blogs: ['Blog 1', 'Blog 2', 'Blog 3'], treatments: ['Treatment 1', 'Treatment 2', 'Treatment 3'], clinics: ['Clinic 1', 'Clinic 2', 'Clinic 3'], outcome: 'Appointment' }}
          button="Trace a patient path"
          idle="Hover or focus any page."
          connects={{ one: '{page} connects to {n} other page.', many: '{page} connects to {n} other pages.' }}
          trace={['A patient starts with a blog.', 'The blog links to a treatment page.', 'The treatment page links to a clinic.', 'The clinic page leads to an appointment.']}
          note="Illustrative link structure with generic page names."
        />
      ),
    },
  ],

  resultsSection: {
    label: '07 / Results',
    heading: 'Search growth tied to actual patient inquiries',
    card: (
      <GrowthRing
        value="+120%"
        ariaLabel="Organic traffic growth of 120 percent"
        extra={20}
        note="Illustration of a 120% increase: one full lap for the original traffic, plus 20% more in the second color."
      />
    ),
    points: [
      { title: '+120% organic traffic', text: 'Organic traffic increased 120%.' },
      { title: 'Strong treatment rankings', text: 'Treatment keywords began ranking strongly.' },
      { title: 'Higher clinic appointment leads', text: 'Linking search growth to actual patient inquiries.' },
    ],
  },

  changes: {
    label: '08 / Impact',
    heading: 'A clear path from search to appointment',
    items: [
      { icon: 'nodes', title: 'A clear path from search to appointment', text: 'Linked blogs, treatments and clinics guide patients toward booking.' },
      { icon: 'shield', title: 'Stronger credibility signals', text: 'Doctor schema and medical structured data help communicate trust to search engines.' },
      { icon: 'pin', title: 'Consistent structure across clinic pages', text: 'Location-optimized pages follow a repeatable pattern that can extend to new clinics.' },
      { icon: 'target', title: 'Lead-focused measurement', text: 'Tying SEO growth to appointment leads keeps the focus on outcomes that matter to the business.' },
    ],
  },

  methods: {
    label: '09 / Stack',
    heading: 'Tools and tech used',
    items: [
      { title: 'Local SEO landing page optimization' },
      { title: 'Doctor schema and medical structured data' },
      { title: 'Treatment page content optimization' },
      { title: 'Internal linking strategy' },
      { title: 'Healthcare SEO (trust signal implementation)' },
    ],
  },

  takeaway: {
    label: 'Key takeaway',
    heading: 'Healthcare brands can turn search into appointments',
    body: 'Combining local optimization, trust signals and connected content links visibility directly to patient leads. For any multi-location clinic or service business, this approach works the same way.',
    link: { label: 'See more work', href: '/case-studies' },
  },

  cta: {
    heading: 'Want search to bring in more patient appointments?',
    text: 'Contact Sage Kite and book a free consultation. We\'ll look at how your clinics and treatments show up in search.',
    primary: { label: 'Book a free consultation', href: '/contact' },
    secondary: { label: 'Contact Sage Kite', href: '/contact' },
  },
};

export default study;
