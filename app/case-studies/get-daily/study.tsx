import type { CaseStudy } from '@/content/case-studies/types';
import { ScreenshotTabs } from '@/components/case-studies/ScreenshotTabs';
import { BrowserFrame, Checklist, Journey, PhoneFrame, RateDots, RisingSteps, ScaleBar } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_Get-Daily_D2C-Website_Case-Study.html, supplied by the team.
 * All copy is kept exactly as written in the source file; only the site's brand
 * colours and font are applied. Project details are as provided by the developer
 * (Apoorv Bhatt). The load time and the 12% returning customer rate are as
 * reported by the developer, so `results` is empty and the listing card shows
 * the `metrics` tiles. Screenshots are of the live site at getdaily.club,
 * extracted from the source file.
 */
const IMG = '/images/case-studies/get-daily';
const LIVE = 'https://getdaily.club/';

const study: CaseStudy = {
  slug: 'get-daily',
  client: 'Get Daily',
  title: 'D2C coffee brand website development: custom Figma-based UI, pre-orders and a waiting list before launch',
  seoTitle: 'D2C Coffee Brand Website Development Case Study: Pre-Order, Waiting List and Loyalty',
  ogTitle: 'D2C coffee brand website development for Get Daily: custom UI, pre-orders and loyalty before launch',
  description: 'How a new fitness-focused coffee brand got a custom Figma-based D2C website that loads in about 1.5 seconds, with pre-order and waiting list features and a rewards loyalty program live before launch.',
  summary: 'How a new fitness-focused coffee brand got a fast, custom D2C website with pre-orders, a waiting list and rewards loyalty before its products shipped.',
  keywords: ['D2C website development', 'D2C coffee brand website', 'Get Daily', 'pre-order and waiting list', 'rewards loyalty program', 'Figma website development'],
  datePublished: '2026-10-14',
  industry: 'Direct-to-consumer coffee',
  discipline: 'D2C website development',
  origin: 'Previous work by a Sage Kite delivery specialist',
  practitioner: { name: 'Apoorv Bhatt', role: 'Developer' },
  highlights: ['Custom UI', 'Performance', 'Pre-order and waiting list', 'Rewards loyalty'],
  results: [],

  hero: {
    dek: 'A fitness-focused coffee brand for a young audience, with a landing page that loads in about 1.5 seconds.',
    lede: 'Get Daily was a new fitness-focused coffee brand with time to use before its products started shipping. We built its D2C website with a custom UI based on Figma, kept the landing page fast, and added pre-order, waiting list and rewards features so the brand could build traction and a community before going live.',
    visual: (
      <BrowserFrame
        url="getdaily.club"
        src={`${IMG}/home.webp`}
        width={1400}
        height={675}
        alt="Get Daily home page: a banner with the headline Iced Coffee, Built For Your Everyday, a can of protein iced coffee on a tennis court, a WhatsApp number field and a Preorder button"
        priority
      />
    ),
    glance: [
      { label: 'Client', value: 'Get Daily, a new fitness-focused coffee brand' },
      { label: 'Project type', value: 'D2C website development' },
      { label: 'Audience', value: 'A young demographic' },
      { label: 'Design', value: 'Custom UI based on Figma' },
      { label: 'Developer', value: 'Apoorv Bhatt' },
      { label: 'Live site', value: <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">getdaily.club</a> },
    ],
  },

  metrics: {
    items: [
      { value: '~1.5s', label: 'Landing page load time', tone: 'sky' },
      { value: '2.5s', label: 'The threshold it came in well below', tone: 'butter' },
      { value: '12%', label: 'Returning customer rate over a 14-day cycle, before launch', tone: 'coral' },
      { value: 'Pre-order', label: 'And a waiting list, live before the product shipped', tone: 'sage' },
    ],
  },

  problem: {
    label: 'The challenge',
    heading: 'A new fitness-focused coffee brand needed a D2C website that could build demand before launch',
    intro: 'Get Daily was new in the market, and its products were not shipping yet. The brand needed a direct-to-consumer website with a distinctive look for a young demographic, a fast landing page, and a way to start building an audience, getting user feedback and earning loyalty during the wait.',
    items: [
      { title: 'A new brand, not yet shipping', text: 'The products were not shipping yet, so the website had to do useful work before there was anything to deliver.' },
      { title: 'A young, fitness-focused audience', text: 'A D2C store for a young demographic needed a custom look and feel, designed in Figma, not a generic template.' },
      { title: 'Traction and feedback before going live', text: 'The brand wanted to start social media marketing, gather user feedback and build a community ahead of launch.' },
    ],
  },

  approach: {
    label: 'The solution',
    heading: 'Custom UI, a fast landing page, pre-orders and loyalty: how we built the D2C coffee website',
    intro: 'We built a new D2C website for the brand in four parts. Jump to any of them below.',
    steps: [
      { title: 'Custom UI', text: 'Built from the brand\'s Figma designs', href: '#ui' },
      { title: 'Performance', text: 'A landing page loading in about 1.5 seconds', href: '#speed' },
      { title: 'Pre-order and waiting list', text: 'Demand and feedback before shipping', href: '#preorder' },
      { title: 'Rewards loyalty', text: 'Returning customers before launch', href: '#loyalty' },
    ],
  },

  sections: [
    {
      id: 'ui',
      label: 'Custom UI',
      heading: 'Custom Figma-based UI for a D2C coffee brand website aimed at a young audience',
      intro: 'We added a custom UI based on the brand\'s Figma designs, so the site looks and feels like Get Daily and speaks to a young, fitness-focused audience.',
      content: (
        <>
          <Journey
            ariaLabel="From design to live site"
            steps={[
              { small: 'Figma designs', text: 'The brand\'s design source' },
              { small: 'Custom UI build', text: 'Built to match the designs' },
              { small: 'Live D2C website', text: 'For a young demographic' },
            ]}
          />
          <div className="cs-ui-wrap">
            <ScreenshotTabs
              title="The site today"
              url="getdaily.club"
              shots={[
                {
                  label: 'Home page',
                  src: `${IMG}/home.webp`, width: 1400, height: 675,
                  alt: 'Get Daily home page with the headline Iced Coffee, Built For Your Everyday and a Preorder button',
                  caption: 'Home page: a full-width banner with the line “Iced Coffee, Built For Your Everyday”, feature tags for real coffee and 20g protein, and a Preorder button.',
                },
                {
                  label: 'Our story',
                  src: `${IMG}/our-story.webp`, width: 1400, height: 677,
                  alt: 'Get Daily sourcing section headed Thoughtfully Sourced, Built For Daily Life, with four numbered steps from single-origin Arabica to packed cans',
                  caption: 'Our story: a sourcing section, “Thoughtfully Sourced. Built For Daily Life”, that walks through four numbered steps from single-origin Arabica to packed cans.',
                },
                {
                  label: 'All flavors',
                  src: `${IMG}/all-flavors.webp`, width: 1400, height: 679,
                  alt: 'Get Daily All Flavors page showing a variety pack and Mocha, Classic and Hazelnut protein iced coffees',
                  caption: 'All flavors: a product grid with filters for availability and price, showing the variety pack and the Mocha, Classic and Hazelnut flavors.',
                },
              ]}
            />
            <PhoneFrame
              src={`${IMG}/mobile.webp`}
              width={460}
              height={995}
              alt="Get Daily on a phone: a banner with the headline Great Taste and Function, Both, a WhatsApp number field and a Preorder button"
              caption="The same site on a phone."
            />
          </div>
          <p className="note">Screenshots of the live site as it appears today. <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">Visit getdaily.club</a></p>
        </>
      ),
    },
    {
      id: 'speed',
      label: 'Performance',
      heading: 'Website performance optimization: a landing page that loads in about 1.5 seconds, well below the 2.5 second threshold',
      intro: 'The site was optimized for performance, keeping the landing page load time at about 1.5 seconds. That is well below the 2.5 second threshold, so first-time visitors from social media reach the page quickly.',
      content: (
        <div className="cs-sim">
          <div className="cs-sim-top"><h3>Landing page load time against the threshold</h3></div>
          <ScaleBar
            max={3}
            unit="s"
            value={{ at: 1.5, value: '~1.5s', label: 'Get Daily landing page' }}
            limit={{ at: 2.5, value: '2.5s', label: 'Threshold' }}
            ariaLabel="Scale from 0 to 3 seconds. The landing page loads in about 1.5 seconds. The threshold is 2.5 seconds."
          />
          <p className="cs-sim-caption">Drawn to scale: the landing page sits at 60% of the threshold.</p>
          <p className="note">Load time as reported by the developer. The measurement tool and test conditions were not specified.</p>
        </div>
      ),
    },
    {
      id: 'preorder',
      label: 'Pre-order and waiting list',
      heading: 'Pre-order and waiting list features that built demand before the product shipped',
      intro: 'The brand was new and had some time before products started shipping. We added pre-order and waiting list features so it could start social media marketing and get traction with user feedback before going live. This also brought in organic users and helped build a loyal community.',
      content: (
        <>
          <RisingSteps
            ariaLabel="Before launch, step by step"
            items={[
              { title: 'Site opens', text: 'Pre-order and waiting list are live' },
              { title: 'Social media marketing', text: 'Starts before products ship' },
              { title: 'Traction and feedback', text: 'Organic users and user feedback' },
              { title: 'A loyal community', text: 'Built ahead of going live' },
            ]}
          />
          <BrowserFrame
            src={`${IMG}/product-cards.webp`}
            width={1400}
            height={668}
            alt="Get Daily product cards: a variety pack with a Pre Order, Get 100% Back button, and Classic, Mocha and Hazelnut protein iced coffees with Select a pack buttons"
            caption={'On the live site, the variety pack card carries a "Pre Order - Get 100% Back" button, and the home page banner pairs a WhatsApp number field with a Preorder button.'}
            sizes="(max-width: 1180px) 100vw, 1100px"
          />
        </>
      ),
    },
    {
      id: 'loyalty',
      label: 'Rewards-based loyalty',
      heading: 'Rewards-based loyalty program: a 12% returning customer rate over a 14-day cycle, before launch',
      intro: 'We also integrated a rewards-based loyalty program to improve the returning customer rate. It reached 12% over a 14-day cycle, before the product had even launched.',
      content: (
        <div className="cs-sim">
          <div className="cs-sim-top"><h3>What a 12% returning customer rate looks like</h3></div>
          <RateDots
            lit={12}
            value="12"
            label="of every 100 customers came back"
            sub="Over a 14-day cycle, before the product launched."
            period={{ days: 14, label: 'The 14-day cycle' }}
          />
          <p className="note">Illustration of a 12% rate, one dot per 100 customers. The rate is as reported by the developer, and the customer base size is not specified.</p>
        </div>
      ),
    },
  ],

  changes: {
    label: 'What was built',
    heading: 'What Get Daily received from the D2C website build',
    columns: 4,
    items: [
      { icon: 'cards', title: 'Custom UI', text: 'A D2C website with a custom UI based on Figma, for a young demographic.' },
      { icon: 'clock', title: 'Speed', text: 'A landing page that loads in about 1.5 seconds, well below the 2.5 second threshold.' },
      { icon: 'mail', title: 'Pre-order and waiting list', text: 'Features that let the brand build traction, feedback and a community before going live.' },
      { icon: 'heart', title: 'Rewards loyalty', text: 'A rewards-based program that reached a 12% returning customer rate over 14 days before launch.' },
    ],
  },

  methods: {
    label: 'Platforms and tools',
    heading: 'Platforms and tools used in the project',
    items: [
      { title: 'Figma', text: 'The design source for the custom UI' },
      { title: 'Custom UI development', text: 'Built to match the brand\'s designs' },
      { title: 'Performance optimization', text: 'Landing page load time of about 1.5 seconds' },
      { title: 'Pre-order feature', text: 'Orders open before products ship' },
      { title: 'Waiting list feature', text: 'Interest captured before going live' },
      { title: 'Rewards-based loyalty program', text: 'Built to bring customers back' },
    ],
  },

  takeaway: {
    label: 'Who this approach suits',
    heading: 'A D2C website for a pre-launch brand: build the audience first, ship when you are ready',
    versus: {
      before: { title: 'Before the product ships', visual: <Checklist items={['Pre-order and waiting list open', 'Social media marketing running', 'User feedback coming in']} /> },
      after: { title: 'When it goes live', visual: <Checklist tone="coral" items={['An audience that is already there', 'A community that is already loyal', 'A fast site on a custom UI']} /> },
    },
    body: 'This approach suits new D2C brands that have time before products ship and want to use it: to test the market, gather feedback and start building loyalty, on a website designed to match the brand.',
    fit: ['New D2C and consumer brands', 'Brands with a pre-launch window', 'Teams starting with social media'],
  },

  about: {
    heading: 'Delivered by Apoorv Bhatt, developer',
    text: 'Previous work by Apoorv Bhatt, developer at Sage Kite. Apoorv built the Get Daily D2C website, from the custom Figma-based UI and the performance work through the pre-order and waiting list features and the rewards-based loyalty program described above. It shows how Sage Kite\'s developers approach a launch: build a fast, on-brand site, and use the time before shipping to earn an audience. Project details are as provided by Apoorv.',
  },

  cta: {
    heading: 'Launching a D2C brand and not shipping yet?',
    text: 'Book a discovery call and we\'ll look at how your website can start building an audience, feedback and loyalty before launch day.',
    secondary: { label: 'Explore services', href: '/services' },
  },
};

export default study;
