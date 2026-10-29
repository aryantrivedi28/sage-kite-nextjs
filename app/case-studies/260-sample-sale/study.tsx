import type { CaseStudy } from '@/content/case-studies/types';
import { SampleSaleCover } from '@/components/case-studies/covers';
import { CheckoutFixFlow } from '@/components/case-studies/CheckoutFixFlow';
import { LayerStack } from '@/components/case-studies/LayerStack';
import { EmailToggle } from '@/components/case-studies/EmailToggle';
import { ScreenshotTabs } from '@/components/case-studies/ScreenshotTabs';
import { BrowserFrame, Checklist, CountCard, Journey, LoopSketch, NumberedSteps } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_260-Sample-Sale_Shopify-Maintenance_Case-Study.html, supplied
 * by the team. Project details are as provided by the developer (Apoorv Bhatt).
 * The only figure is the count of 40+ issues resolved; no conversion, traffic or
 * revenue figures were provided.
 *
 * Changes from the source: "we" became neutral wording (this is a specialist's
 * previous work, not a Sage Kite engagement), "Our role" became "Role", and
 * "a bug-free shopping experience" became "a stable" one, since nothing measured
 * backs an absolute claim. British spelling throughout.
 *
 * Revised from "Sage-Kite_260-Sample-Sale_Shopify-Maintenance_Case-Study 1 (1).html":
 * a home page screenshot leads the hero (the 40+ card moved under the bug steps),
 * plus a storefront gallery in the Liquid section and the rewards header in the
 * loyalty section. Screenshots are of the live store, extracted from that file.
 */
const LIVE = 'https://260samplesale.com/';
const IMG = '/images/case-studies/260-sample-sale';

const study: CaseStudy = {
  slug: '260-sample-sale',
  client: '260 Sample Sale',
  title: 'Shopify bug fixing and maintenance: how a US sample sale brand cleared 40+ issues and added a Yotpo loyalty programme',
  seoTitle: 'Shopify Maintenance Case Study: 260 Sample Sale',
  ogTitle: '260 Sample Sale: 40+ Shopify issues resolved and a Yotpo loyalty programme added',
  description: 'How 260 Sample Sale, a US B2C brand, had 40+ Shopify issues resolved, its checkout smoothed out, a Yotpo loyalty programme added and its emails rebranded.',
  summary: 'How a high-volume US sample sale store cleared 40+ issues, smoothed out its checkout and added a Yotpo loyalty programme and on-brand emails.',
  keywords: ['Shopify bug fixing', 'Shopify maintenance case study', '260 Sample Sale', 'Yotpo loyalty integration', 'custom Liquid development'],
  datePublished: '2026-10-14',
  industry: 'US B2C sample sales',
  discipline: 'Shopify maintenance',
  origin: 'Previous work by a Sage Kite delivery specialist',
  cover: <SampleSaleCover />,
  practitioner: { name: 'Apoorv Bhatt', role: 'Shopify developer' },
  highlights: ['Bug resolution', 'Custom Liquid', 'Yotpo loyalty', 'Email templates', 'Operational support'],
  results: [
    {
      label: 'Critical issues audited and resolved',
      value: '40+',
      valueLabel: 'More than 40',
      count: 40,
      unit: 'issue',
      note: 'Each dot is one issue. 40 is the minimum: the project covered 40 or more.',
    },
  ],

  hero: {
    dek: 'A stable checkout, a retention programme and on-brand emails for a high-volume store.',
    lede: '260 Sample Sale, a US-based B2C brand, was carrying significant technical debt and friction in its customer journey. The developer acted as the technical partner for its operations team: fixing the bugs, refining the theme with custom Liquid, integrating loyalty and redesigning email communication.',
    visual: (
      <BrowserFrame
        url="260samplesale.com"
        src={`${IMG}/home.webp`}
        width={1400}
        height={567}
        alt="260 Sample Sale home page with the headline Fortune favors the savvy over a city skyline, a Shop Now button, and navigation for online and in-store sample sales"
        priority
      />
    ),
    glance: [
      { label: 'Client', value: '260 Sample Sale, a US-based B2C brand' },
      { label: 'Project type', value: 'Maintenance, bug fixing and loyalty integration' },
      { label: 'Platform', value: 'Shopify, Dawn theme (heavily customised)' },
      { label: 'Role', value: 'Technical partner to the operations team' },
      { label: 'Developer', value: 'Apoorv Bhatt, Shopify developer' },
      { label: 'Live store', value: <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">260samplesale.com</a> },
    ],
  },

  metrics: {
    items: [
      { value: '40+', label: 'Critical bugs audited and resolved', tone: 'coral' },
      { value: 'Yotpo', label: 'Memberships and reward programmes integrated', tone: 'sky' },
      { value: 'Custom', label: 'Liquid code on a Dawn theme base', tone: 'butter' },
      { value: 'On-brand', label: 'Custom-themed email templates', tone: 'sage' },
    ],
    note: 'Project details are as provided by the developer. No conversion, traffic or revenue figures were provided for this project.',
  },

  problem: {
    label: 'The challenge',
    heading: '40+ Shopify bugs and a rough checkout were holding back a high-volume sample sale store',
    intro: '260 Sample Sale was facing significant technical debt and friction in its user journey. Over 40 distinct bugs were affecting the store, particularly the checkout process, which was hindering sales. The brand also needed to elevate its customer retention strategy and modernise its email communications.',
    items: [
      { title: 'Technical debt and 40+ bugs', text: 'Over 40 distinct bugs, with the heaviest impact on the checkout process, which was hindering sales.' },
      { title: 'A retention strategy to elevate', text: 'The brand needed a structured way to keep customers coming back, not only to win the first order.' },
      { title: 'Emails that needed modernising', text: 'Email communication needed a refresh so that each message felt unique and on-brand.' },
    ],
    visual: (
      <CheckoutFixFlow
        title="The checkout journey, before and after"
        steps={['Cart', 'Shipping', 'Payment', 'Order placed']}
        captions={{
          before: 'Before: bugs along the checkout journey create friction, and shoppers leave before they place an order.',
          after: 'After: 40+ issues resolved, with the checkout journey smoothed out to prevent drop-offs.',
        }}
        ariaLabel="Diagram of the checkout journey: cart, shipping, payment and order placed. Before the work, bugs sit along the path and shoppers drop off. After the work, the path is clear."
      />
    ),
  },

  approach: {
    label: 'The solution',
    heading: 'A Shopify technical partner for the operations team: bug fixing, custom Liquid, loyalty and email',
    intro: 'The developer acted as the technical partner for the operations team, stabilising the platform and introducing loyalty features. The work came in five parts. Jump to any of them below.',
    steps: [
      { title: 'Bug resolution', text: '40+ critical issues, checkout first.', href: '#bugs' },
      { title: 'Custom Liquid', text: 'Refining the UI on a Dawn base.', href: '#liquid' },
      { title: 'Loyalty and retention', text: 'Yotpo memberships and rewards.', href: '#loyalty' },
      { title: 'Brand communication', text: 'Custom-themed email templates.', href: '#email' },
      { title: 'Operational support', text: 'Day-to-day blockers resolved in real time.', href: '#support' },
    ],
  },

  sections: [
    {
      id: 'bugs',
      label: 'Comprehensive bug resolution',
      heading: 'Shopify checkout bug fixing: 40+ critical issues audited and resolved',
      intro: 'The store was audited and more than 40 critical issues were resolved. The primary focus was smoothing out the checkout journey to prevent drop-offs, so that a high-volume store could rely on a dependable shopping experience.',
      content: (
        <>
          <NumberedSteps
            items={[
              { title: 'Audit', text: 'Go through the store to find the issues that were creating friction for shoppers.' },
              { title: 'Prioritise the checkout', text: 'Put the checkout journey first, because that is where bugs prevent a sale.' },
              { title: 'Resolve and stabilise', text: 'Fix the 40+ critical issues so the store is reliable under high-volume traffic.' },
            ]}
          />
          <div className="cs-countcard-wrap">
            <CountCard
              value="40+"
              label="critical issues audited and resolved"
              count={40}
              caption="Illustration: each dot stands for one resolved issue. The project covered 40 or more."
            />
          </div>
        </>
      ),
    },
    {
      id: 'liquid',
      label: 'Custom Liquid development',
      heading: 'Custom Liquid development on the Dawn theme to refine the UI and browsing experience',
      intro: 'The Dawn theme was used as a base, with fully custom Liquid code written on top to refine the user interface and improve the browsing experience.',
      content: (
        <>
          <LayerStack
            title="From a Dawn base to a customised theme"
            layers={[
              { title: 'Dawn theme', text: 'The base', button: 'Dawn base', caption: 'Dawn is the base theme the store started from.' },
              { title: 'Fully custom Liquid code', text: 'Written for this store', button: '+ Custom Liquid', caption: 'Fully custom Liquid code is added on top of Dawn.' },
              { title: 'Refined UI and browsing experience', text: 'What shoppers see and use', button: 'Result', caption: 'Dawn is the base, custom Liquid is layered on top, and the result is a refined UI and a better browsing experience.' },
            ]}
            note="Illustrative layers, not a view of the theme code."
          />
          <ScreenshotTabs
            title="The storefront today"
            url="260samplesale.com"
            shots={[
              {
                label: 'Home page',
                src: `${IMG}/home.webp`, width: 1400, height: 567,
                alt: '260 Sample Sale home page: Fortune favors the savvy headline, Shop Now button, rewards sign-up banner and event navigation',
                caption: 'Home page: a full-width hero with the line "Fortune favors the savvy" and a Shop Now button. The top bar invites visitors to join 260 Inner Circle Rewards, and navigation separates online sales from in-store events by city.',
              },
              {
                label: 'Online sample sale events',
                src: `${IMG}/online-events.webp`, width: 1400, height: 608,
                alt: '260 Sample Sale Online Sample Sale Events page: a grid of event cards, one per featured brand, with an event status filter',
                caption: 'Online sample sale events: a clean grid of event cards, one per featured brand, with an event status filter.',
              },
            ]}
            note={<>Screenshots of the live storefront as it appears today. Brand names and imagery belong to the featured brands. <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">Visit 260samplesale.com</a></>}
          />
        </>
      ),
    },
    {
      id: 'loyalty',
      label: 'Loyalty and retention',
      heading: 'Yotpo loyalty and rewards integration on Shopify for customer retention',
      intro: 'The Yotpo app was integrated to manage memberships and reward programmes, creating a structured ecosystem for customer retention. The result is a fully integrated loyalty programme.',
      content: (
        <>
          <BrowserFrame
            src={`${IMG}/header.webp`}
            width={1400}
            height={158}
            alt="260 Sample Sale header showing the banner Want VIP Access? Join 260 Inner Circle Rewards! Sign Up for Free, and a Rewards link next to Sign In and the cart"
            caption="The live store promotes its loyalty programme in the top bar and the header: a rewards sign-up banner and a Rewards link."
            sizes="(max-width: 1180px) 100vw, 1100px"
          />
          <div className="cs-sim">
            <div className="cs-scroll">
              <LoopSketch
                stages={['Join', 'Earn', 'Redeem', 'Return']}
                centre="Yotpo"
                sub="memberships and rewards"
                ariaLabel="A loyalty loop: join the membership, earn rewards, redeem rewards and return to buy again, managed by Yotpo"
              />
            </div>
            <p className="cs-sim-caption">Members join, earn and redeem through Yotpo, and rewards give them a reason to come back and buy again.</p>
            <p className="note">Illustrative loop. Programme rules, tiers and point values are not shown.</p>
          </div>
        </>
      ),
    },
    {
      id: 'email',
      label: 'Brand communication',
      heading: 'Custom-themed Shopify email templates that keep every touchpoint on-brand',
      intro: 'The email communication flows were redesigned with custom-themed templates, so that every touchpoint felt unique and on-brand.',
      content: (
        <EmailToggle
          title="A default email and a custom-themed one"
          captions={{
            default: 'A default template looks the same for every brand.',
            custom: 'A custom-themed template carries the brand\'s own look, so every touchpoint feels unique and on-brand.',
          }}
          note="Illustration with placeholder labels, not 260 Sample Sale's emails."
        />
      ),
    },
    {
      id: 'support',
      label: 'Operational support',
      heading: 'Ongoing Shopify technical support that resolves the operations team\'s blockers in real time',
      intro: 'Ongoing technical support was provided to the operations team, resolving day-to-day technical blockers in real time, so that the team could keep running sales without waiting on development.',
      content: (
        <Journey
          ariaLabel="The operations team raises a blocker, the technical partner resolves it in real time, and the store keeps selling"
          steps={[
            { small: 'Operations team', text: 'Raises a day-to-day blocker' },
            { small: 'Technical partner', text: 'Resolves it in real time' },
            { small: 'Store keeps selling', text: 'No waiting on a development queue' },
          ]}
        />
      ),
    },
  ],

  changes: {
    label: 'Key deliverables',
    heading: 'What 260 Sample Sale received: a stable store, a loyalty programme and a unified brand',
    items: [
      { icon: 'shield', title: 'Stability', text: 'A stable, reliable shopping experience for high-volume traffic.' },
      { icon: 'heart', title: 'Retention', text: 'A fully integrated loyalty programme via Yotpo.' },
      { icon: 'cards', title: 'Branding', text: 'A unified visual identity across the store and email communications.' },
    ],
  },

  methods: {
    label: 'Platforms and tools',
    heading: 'Platforms and tools used in the project',
    items: [
      { title: 'Shopify', text: 'The store platform' },
      { title: 'Dawn theme', text: 'The base, heavily customised' },
      { title: 'Custom Liquid code', text: 'Written to refine the UI and browsing experience' },
      { title: 'Yotpo', text: 'Manages memberships and reward programmes' },
      { title: 'Custom-themed email templates', text: 'Redesigned communication flows' },
      { title: 'Issue audit and resolution', text: '40+ critical issues, checkout first' },
    ],
  },

  takeaway: {
    label: 'Who this approach suits',
    heading: 'Shopify maintenance and bug fixing for high-volume stores: stability first, then retention',
    versus: {
      before: { title: 'Stabilise first', visual: <Checklist items={['Audit and resolve the bugs', 'Smooth out the checkout', 'Keep the store reliable at volume']} /> },
      after: { title: 'Then grow', visual: <Checklist tone="coral" items={['Loyalty through Yotpo', 'On-brand email communication', 'Support for day-to-day blockers']} /> },
    },
    body: 'This approach suits Shopify brands that are carrying technical debt, losing momentum at checkout, or ready to build retention but need a technical partner to fix the foundations first.',
    fit: ['Stores with a backlog of bugs', 'Brands with a rough checkout', 'Teams that want loyalty and on-brand email'],
  },

  about: {
    heading: 'Delivered by Apoorv Bhatt, Shopify developer',
    text: 'Previous work by Apoorv Bhatt, Shopify developer at Sage Kite. Apoorv acted as the technical partner for the 260 Sample Sale operations team, from the bug audit and the custom Liquid work through the Yotpo loyalty integration, the email redesign and the ongoing support described above. It shows how Sage Kite’s developers approach a store with technical debt: make it stable first, then build retention and brand consistency on top. Project details are as provided by Apoorv.',
  },

  cta: {
    heading: 'Is your Shopify store carrying bugs or technical debt?',
    text: 'Book a discovery call and we\'ll look at what is getting in the way of your checkout, your retention and your day-to-day operations.',
    secondary: { label: 'Explore services', href: '/services' },
  },
};

export default study;
