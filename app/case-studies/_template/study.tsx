import type { CaseStudy } from '@/content/case-studies/types';
import { Callout, Drivers, PageSketch } from '@/components/case-studies/blocks';

/*
 * Starter for a new case study. See the header of content/case-studies/index.ts.
 *
 * 1. Copy this folder to app/case-studies/<slug>/ (lowercase, hyphens).
 * 2. Replace every [placeholder]. Delete any optional section you don't need:
 *    metrics, startingPoint, problem, approach, delivered, resultsSection,
 *    changes, methods, takeaway.
 * 3. Remove `draft: true`, then register the study in content/case-studies/index.ts.
 *
 * Content rules (docs/content-standard.md): British spelling, no em-dashes,
 * no invented figures or quotes, state the origin, label illustrative visuals.
 * Reusable visuals: components/case-studies/blocks.tsx (Drivers, AudienceCards,
 * Callout, VennSketch, PageSketch, TreeSketch, RankLadder, Journey, DotGrid,
 * PageGridSketch, BrowserFrame, PurchasePath, Checklist, CountCard, NumberedSteps,
 * LoopSketch), SearchTyper, SearchFlow, LinkingDemo, DuplicateUrlFlow,
 * CategoryFixes, MigrationFlow, ScreenshotTabs, DashboardToggle, CheckoutFixFlow,
 * LayerStack and EmailToggle. A one-off visual can be written as JSX right here.
 * A result with no starting figure (e.g. "120+ keywords into the top 3") uses
 * { count, unit } instead of before/after; see app/case-studies/jenson-usa.
 * If nothing was measured, set `results: []`; see app/case-studies/esma, which
 * also uses `sections` for one section per part of the work. Images go in
 * public/images/case-studies/<slug>/.
 */
const study: CaseStudy = {
  draft: true,
  slug: '[client-slug]',
  client: '[Client name]',
  title: '[How Client achieved result]',
  seoTitle: '[Industry] [Discipline] Case Study: [Client]',
  description: '[70–160 characters: what changed, with the headline figures.]',
  summary: '[Under 160 characters, for the listing card.]',
  keywords: ['[main keyword]', '[client name]', '[secondary keyword]'],
  datePublished: '2026-01-01',
  industry: '[Industry]',
  discipline: '[SEO / CRM / Automation]',
  origin: '[Sage Kite client engagement / Previous work by a Sage Kite delivery specialist]',
  // An original illustration for the listing card: add one to components/case-studies/covers.tsx
  // (drawn in code; never a photo, screenshot or logo) and set it here. Without it the card uses DefaultCover.
  // cover: <YourCover />,
  practitioner: { name: '[Name]', role: '[Role]' },
  highlights: ['[Piece of work]', '[Piece of work]', '[Piece of work]'],
  results: [
    { label: '[Metric]', value: '~[N]×', valueLabel: 'About [N] times', before: '[before]', after: '[after]', scale: 25 },
  ],

  hero: {
    dek: '[One-line outcome.]',
    lede: '[Two or three sentences: who the client is, what was stuck, what changed it.]',
    glance: [
      { label: 'Client', value: '[Client name]' },
      { label: 'Industry', value: '[Industry]' },
      { label: 'Engagement', value: '[Type of engagement]' },
    ],
  },

  metrics: {
    items: [
      { value: '[before] to [after]', label: '[Metric]', tone: 'sky' },
      { value: '~[N]×', label: '[Metric] growth', tone: 'coral' },
    ],
    note: 'Figures are as reported for this engagement.',
  },

  startingPoint: {
    heading: '[Where the business was when the work began]',
    content: (
      <>
        <p>[Context paragraph.]</p>
        <Drivers items={['[Change one]', '[Change two]', '[Change three]']} />
        <Callout title="[Short summary.]">[One sentence.]</Callout>
      </>
    ),
  },

  problem: {
    heading: '[What was actually wrong]',
    items: [
      { title: '[Problem]', text: '[Explanation.]' },
      { title: '[Problem]', text: '[Explanation.]' },
    ],
  },

  approach: {
    heading: '[How the work was done]',
    intro: '[How the work started.]',
    steps: [
      { title: '[Step]', text: '[What happened.]' },
      { title: '[Step]', text: '[What happened.]' },
      { title: '[Step]', text: '[What happened.]' },
    ],
  },

  delivered: {
    heading: '[What was delivered]',
    tiles: [
      { tag: '[Tag]', title: '[Deliverable]', text: '[Description.]', tone: 'coral', visual: <PageSketch title="[Page]" subtitle="[Subtitle]" tone="coral" /> },
      { tag: '[Tag]', title: '[Deliverable]', text: '[Description.]', tone: 'butter' },
      { tag: '[Tag]', title: '[Deliverable]', text: '[Description.]', tone: 'sky' },
    ],
  },

  resultsSection: {
    heading: '[What the numbers looked like]',
    points: [{ title: '[Qualitative result]', text: '[Explanation.]' }],
  },

  about: {
    heading: '[Delivered by Name, Role / Delivered by Sage Kite]',
    text: '[Origin statement: who did the work, whether it was a Sage Kite client engagement, and that results are as reported.]',
  },

  cta: {
    heading: '[Question that matches the reader\'s problem?]',
    text: '[One sentence on what the discovery call covers.]',
    secondary: { label: '[Related service]', href: '/services' },
  },
};

export default study;
