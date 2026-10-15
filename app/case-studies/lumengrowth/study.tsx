import type { CaseStudy } from '@/content/case-studies/types';
import { PricingDemo } from '@/components/case-studies/PricingDemo';
import { BrowserFrame, ChangeCards, Checklist, Journey, PointList, SeoSnippet, StatCard, ToolList } from '@/components/case-studies/blocks';

/*
 * Source: Sage-Kite_LumenGrowth_GoHighLevel-SaaS-Website_Case-Study.html, supplied by the team.
 * All copy is kept exactly as written in the source file; only the site's brand
 * colours and font are applied. The meta title and description are shortened to
 * fit the length limits, and the "Case study · ..." hero kicker is left out, as
 * for the other case studies. A GHL Scale Up project implemented by Pavan Kohli.
 * No results were measured, so `results` is empty and the listing card shows the
 * `metrics` tiles. Counts, page titles and domains are from the live site
 * (October 2026), as stated in the source. The two screenshots (home page hero
 * and chat widget) were added in a revised source file and extracted from it.
 */
const IMG = '/images/case-studies/lumengrowth';
const LIVE = 'https://lumengrowth.ai/';

const study: CaseStudy = {
  slug: 'lumengrowth',
  client: 'LumenGrowth',
  title: 'GoHighLevel SaaS website build: a multi-currency pricing page, landing page and checkout for an AI receptionist platform',
  seoTitle: 'GoHighLevel SaaS Website Case Study: LumenGrowth',
  ogTitle: 'GoHighLevel SaaS website build: multi-currency pricing page, landing page and checkout',
  description: 'How LumenGrowth got a GoHighLevel SaaS website: a custom multi-currency pricing page, a conversion-led landing page and checkout wired to SaaS billing.',
  summary: 'How an AI receptionist platform got a GoHighLevel SaaS website that sells in five currencies and hands every buyer to the right checkout.',
  keywords: ['GoHighLevel SaaS website', 'GoHighLevel multi-currency pricing page', 'GoHighLevel SaaS Mode checkout', 'LumenGrowth', 'SaaS landing page', 'AI receptionist website'],
  datePublished: '2026-10-15',
  industry: 'AI receptionist software for UK trades',
  discipline: 'GoHighLevel SaaS website',
  origin: 'A GHL Scale Up project, shared by Sage Kite',
  practitioner: { name: 'Pavan Kohli', role: 'GHL Expert' },
  highlights: ['Multi-currency pricing', 'Checkout wiring', 'Landing page', 'Content and trust'],
  results: [],

  hero: {
    dek: 'One website that sells in five currencies and hands every customer to the right checkout.',
    lede: 'LumenGrowth sells an AI receptionist and business platform to UK trades and service businesses, and it needed to sell it globally. We built the website around that goal: a landing page, a custom pricing page with a currency selector, and checkout links wired to GoHighLevel SaaS billing.',
    visual: (
      <StatCard
        items={[
          { value: '5', label: 'currencies on the pricing page' },
          { value: '3', label: 'plans, monthly or yearly' },
        ]}
        caption="Counted from the live pricing page in October 2026: GBP, USD, EUR, CAD and AUD; Starter, Pro and Elite."
      />
    ),
    glance: [
      { label: 'Client', value: 'LumenGrowth, an AI receptionist platform for UK trades' },
      { label: 'Project type', value: 'SaaS website: landing page, pricing and checkout' },
      { label: 'Platform', value: 'GoHighLevel SaaS Mode with Stripe billing' },
      { label: 'Our role', value: 'Website design, build and wiring' },
      { label: 'Implemented by', value: 'Pavan Kohli, GHL Expert at Sage Kite' },
      { label: 'Live site', value: <a className="link" href={LIVE} target="_blank" rel="noopener noreferrer">lumengrowth.ai</a> },
    ],
  },

  metrics: {
    items: [
      { value: '5', label: 'Currencies, switched on one custom pricing page', tone: 'sky' },
      { value: '3', label: 'Plans with monthly and yearly billing', tone: 'butter' },
      { value: '1', label: 'Landing page built to start a free trial', tone: 'coral' },
      { value: '6', label: 'Blog articles live on the site', tone: 'sage' },
    ],
  },

  problem: {
    label: 'The challenge',
    heading: 'A GoHighLevel SaaS launch needed a website that could sell in five currencies and send each buyer to the right checkout',
    intro: 'LumenGrowth was launching a white-label SaaS product on GoHighLevel. Native GoHighLevel cannot display currency switching, so a standard page could not show a buyer in Dublin, Toronto or Sydney their own currency. The website had to close that gap, and also explain a new product clearly enough to earn a free trial.',
    items: [
      { title: 'Selling in more than one currency', text: 'Prices had to appear in GBP, USD, EUR, CAD and AUD, which native GoHighLevel pages cannot switch between.' },
      { title: 'Joining the site to billing', text: 'Every plan button had to open the matching GoHighLevel SaaS checkout, in the right currency and billing period.' },
      { title: 'Earning trust for a new product', text: 'A new SaaS brand needs clear terms, a guarantee, plain-English pricing and a way to try the product before buying.' },
    ],
  },

  approach: {
    label: 'The solution',
    heading: 'A custom pricing page, a conversion-led landing page and connected checkout: what we added to the website',
    intro: 'We built the front of the SaaS funnel: the pages a visitor reads, the pricing page where they choose, and the checkout links that start their subscription. Jump to any feature below.',
    steps: [
      { title: 'Multi-currency pricing', text: 'Currency selector and billing toggle', href: '#pricing' },
      { title: 'Checkout wiring', text: 'Each button to the matching plan', href: '#checkout' },
      { title: 'Landing page', text: 'Built to start a free trial', href: '#landing' },
      { title: 'Domain structure', text: 'Site, checkout and app on one brand', href: '#structure' },
      { title: 'Content and trust', text: 'FAQs, blog and legal pages', href: '#content' },
    ],
  },

  sections: [
    {
      id: 'pricing',
      label: 'Custom pricing page',
      heading: 'A multi-currency pricing page for GoHighLevel SaaS, with a currency selector and monthly or yearly billing',
      intro: 'Native GoHighLevel cannot display currency switching, so we built the pricing page ourselves. Visitors pick a currency (GBP, USD, EUR, CAD or AUD) and a billing period, see Starter, Pro and Elite, and move straight to checkout. The page also carries a plain-English comparison table and a pricing FAQ.',
      content: (
        <>
          <PricingDemo
            title="Choose a currency and billing period"
            currencies={[
              { id: 'gbp', label: 'GBP £', name: 'GBP' },
              { id: 'us', label: 'USD $', name: 'USD' },
              { id: 'eur', label: 'EUR €', name: 'EUR' },
              { id: 'cad', label: 'CAD C$', name: 'CAD' },
              { id: 'aud', label: 'AUD A$', name: 'AUD' },
            ]}
            billing={[
              { id: 'monthly', label: 'Monthly' },
              { id: 'yearly', label: 'Yearly' },
            ]}
            plans={[
              { id: 'starter', name: 'Starter', for: 'For solo operators getting started' },
              { id: 'pro', name: 'Pro', for: 'For growing teams ready to book more work', popular: true },
              { id: 'elite', name: 'Elite', for: 'For established and multi-location businesses' },
            ]}
            linkBase="plans.lumengrowth.ai/"
            linkLabel="Checkout link"
            captions={{
              initial: 'Pick a currency or billing period to see which checkout each plan button opens.',
              changed: 'Plan buttons now open the {currency} {billing} checkout for each plan.',
            }}
            note="Illustration of how the live pricing page behaves. On the real page the prices in each currency are shown beside each plan and every button opens the matching checkout."
          />
          <PointList
            columns={3}
            items={[
              { title: 'Plain-English plan comparison', text: 'A "Compare plans" table sets out what Starter, Pro and Elite include, down to user numbers.' },
              { title: 'The setup fee explained up front', text: 'A section above the plans explains why there is a one-time setup fee and what it covers, so the price is not a surprise.' },
              { title: 'Ten pricing questions answered on the page', text: 'The FAQ covers the free trial, supported currencies, setup fees, cancellation and what happens after payment.' },
            ]}
          />
        </>
      ),
    },
    {
      id: 'checkout',
      label: 'Checkout wiring',
      heading: 'Plan buttons wired to GoHighLevel SaaS checkout, so every visitor pays in the right currency',
      intro: 'Each call to action on the pricing page opens the native GoHighLevel SaaS checkout for that plan, currency and billing period. Checkout runs on Stripe, so the website, the billing and the customer\'s new account all work as one flow.',
      content: (
        <>
          <Journey
            ariaLabel="Visitor journey from website to account"
            steps={[
              { small: 'Landing page', text: 'lumengrowth.ai' },
              { small: 'Pricing page', text: 'Currency and plan chosen' },
              { small: 'Checkout', text: 'GHL SaaS checkout, Stripe billing' },
              { small: 'Account', text: 'Customer account set up' },
              { small: 'Login', text: 'app.lumengrowth.ai' },
            ]}
          />
          <p className="note">The journey follows the live site: plan buttons on the pricing page open checkout pages on the plans subdomain, and the Login link goes to the app subdomain.</p>
        </>
      ),
    },
    {
      id: 'landing',
      label: 'Landing page',
      heading: 'A SaaS landing page for an AI receptionist, built to turn visitors into free trials and demo bookings',
      intro: 'The homepage leads with one clear promise, "Never Miss Another Service Call, Even While You Sleep", then explains the offer in plain words and gives the visitor two next steps: start a free trial, or book a demo.',
      content: (
        <>
          <div className="cs-shot-row">
            <BrowserFrame
              url="lumengrowth.ai"
              src={`${IMG}/home.webp`}
              width={1500}
              height={722}
              alt="LumenGrowth home page: the headline Never Miss Another Service Call, Even While You Sleep, a Start Free Trial button and Book a Demo link, four trust cards covering the 30-day money-back guarantee, 14-day trial, 48-hour setup and a free website, a video panel, and a green call-our-AI-receptionist number"
              caption="The home page hero: the promise, two next steps, the risk-reducers and the live number to call."
              sizes="(max-width: 900px) 100vw, 860px"
            />
            <BrowserFrame
              src={`${IMG}/chat-widget.webp`}
              width={355}
              height={718}
              alt="The LumenGrowth chat widget open with the heading Have a question, a welcome message, a message box with microphone and attach buttons, and a send button"
              caption="The chat widget, open."
              sizes="260px"
            />
          </div>
          <ChangeCards
          columns={3}
          items={[
            { icon: 'lines', title: 'A clear promise and one purpose', text: 'A single H1 states what the product does for a UK trades business, with a go-live-in-48-hours line underneath.' },
            { icon: 'phone', title: 'A live number to call and try', text: 'A "try our AI receptionist now" panel shows a phone number with a copy button, so a visitor can hear the product work before signing up.' },
            { icon: 'calendar', title: 'A booking section for demos', text: 'A "Book your demo" section lets a visitor choose a time to see the product, for buyers who want a walkthrough first.' },
            { icon: 'shield', title: 'Risk-reducers beside the buttons', text: 'The 14-day trial, 30-day money-back guarantee and done-for-you setup sit in the hero, where the decision is made.' },
            { icon: 'chat', title: 'A chat widget for quick questions', text: 'A "Have a question?" chat sits on the page, so a hesitant visitor can ask before deciding.' },
            { icon: 'mobile', title: 'Responsive and fast to scan', text: 'The pages are built mobile-friendly, so a tradesperson on a phone can read, call and sign up without pinching or zooming.' },
          ]}
          />
        </>
      ),
    },
    {
      id: 'structure',
      label: 'Domain and site structure',
      heading: 'Domain connection and site structure: one brand across the website, checkout, app and legal pages',
      intro: 'The marketing site lives on the main domain, and each supporting job has its own branded subdomain. A buyer never leaves the LumenGrowth brand, from first visit to first login.',
      content: (
        <ToolList
          items={[
            { title: 'lumengrowth.ai', text: 'Landing page, pricing, blog and FAQ' },
            { title: 'plans.lumengrowth.ai', text: 'GoHighLevel SaaS checkout pages for each plan' },
            { title: 'app.lumengrowth.ai', text: 'Customer login, linked from the site header' },
            { title: 'site.lumengrowth.ai', text: 'Privacy policy, terms and refund policy' },
          ]}
        />
      ),
    },
    {
      id: 'content',
      label: 'Content, SEO and trust',
      heading: 'SaaS website SEO and trust: a keyword-led blog, structured data, FAQs and compliant legal pages',
      intro: 'A new product needs to be found, understood and believed. The site supports all three.',
      content: (
        <SeoSnippet
          url="lumengrowth.ai › pricing"
          title="Pricing — LumenGrowth | Plans for Service & Trade Businesses"
          description={'Page title as set on the live pricing page. The homepage title is "LumenGrowth — AI Receptionist for UK Trades & Service Businesses".'}
          caption="Page titles as they read on the live site today (October 2026)."
          points={[
            { title: 'Titles that say who it is for', text: 'Page titles name the product and the audience: UK trades and service businesses.' },
            { title: 'Structured data for the product', text: 'Software product markup describes LumenGrowth as a business application with a GBP price range, and each page declares its canonical address.' },
            { title: 'A blog aimed at real buyer questions', text: 'Six articles cover missed calls, AI receptionists versus voicemail, setup in 48 hours, the included website, tool consolidation and the guarantee.' },
            { title: 'Legal pages that support SMS', text: 'Privacy policy, terms and a refund policy are live, with STOP and HELP language in the terms for SMS compliance.' },
          ]}
        />
      ),
    },
  ],

  changes: {
    label: 'Key deliverables',
    heading: 'What LumenGrowth received: a global-ready website that sells, explains and hands off to billing',
    items: [
      { icon: 'globe', title: 'Global selling', text: 'A custom pricing page with a currency selector for GBP, USD, EUR, CAD and AUD.' },
      { icon: 'search', title: 'Clarity', text: 'A landing page, comparison table and pricing FAQ that explain a new product in plain English.' },
      { icon: 'card', title: 'A connected funnel', text: 'Every plan button opens the matching GoHighLevel SaaS checkout, so sign-up and billing run as one flow.' },
    ],
  },

  methods: {
    label: 'Platforms and tools',
    heading: 'Platforms and tools used in the project',
    items: [
      { title: 'GoHighLevel SaaS Mode', text: 'White-label SaaS plans and checkout' },
      { title: 'Stripe', text: 'Billing behind the checkout' },
      { title: 'Custom pricing page', text: 'Currency selector and billing toggle' },
      { title: 'Custom domain and subdomains', text: 'Site, checkout, app and legal pages' },
      { title: 'Structured data', text: 'Software product markup and canonical URLs' },
      { title: 'Blog', text: 'Articles aimed at buyer questions' },
    ],
  },

  takeaway: {
    label: 'Who this approach suits',
    heading: 'GoHighLevel SaaS websites for founders and agencies who want to sell globally from day one',
    versus: {
      before: { title: 'What the website does', visual: <Checklist items={['Explains the product in plain words', 'Shows prices in the buyer\'s currency', 'Answers the questions buyers ask first']} /> },
      after: { title: 'What it connects to', visual: <Checklist tone="coral" items={['GoHighLevel SaaS plans and checkout', 'Stripe billing', 'A branded login for customers']} /> },
    },
    body: 'This approach suits anyone launching a white-label SaaS on GoHighLevel who needs more than the native pages can show, especially when customers pay in different currencies.',
    fit: ['GoHighLevel SaaS Mode launches', 'Multi-currency subscription products', 'Founders reselling a niche platform'],
  },

  about: {
    heading: 'Delivered for LumenGrowth by Pavan Kohli, GHL Expert at Sage Kite',
    text: 'This is one of our GoHighLevel projects, delivered through GHL Scale Up, our GoHighLevel specialist brand. Pavan Kohli, GHL Expert at Sage Kite, implemented it. The wider build behind the website, including the plan structure, onboarding and automation, sits in the same GoHighLevel account; this case study covers the website.',
  },

  cta: {
    heading: 'Launching a SaaS on GoHighLevel and need a website that can sell in more than one currency?',
    text: 'Book a discovery call and we\'ll look at your plans, your currencies and the path from first visit to paid account.',
    secondary: { label: 'Explore services', href: '/services' },
  },
};

export default study;
