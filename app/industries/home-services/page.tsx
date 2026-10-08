import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries/home-services`;
const DESCRIPTION = "CRM setup for plumbing, HVAC, electrical, cleaning and other home service businesses: enquiry capture, estimate follow-up, service plans and reviews.";

export const metadata: Metadata = {
  title: "Home Services CRM Setup & Automation | Sage Kite",
  description: DESCRIPTION,
  keywords: ["home services CRM setup", "CRM for home service businesses", "estimate follow-up", "service plan automation", "HVAC and plumbing CRM", "field service CRM setup"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Home services CRM setup and automation | Sage Kite",
    description: "A CRM built for urgent calls, open estimates and the maintenance visits that bring customers back. For trade and home service businesses.",
  },
  twitter: {
    card: "summary",
    title: "Home services CRM setup and automation | Sage Kite",
    description: "A CRM built for urgent calls, open estimates and the maintenance visits that bring customers back. For trade and home service businesses.",
  },
};

// Platform behaviour described on this page was checked against vendor help centres
// on 6 October 2026. Recheck when a platform changes how a feature works.
const SOURCES = [
  { name: "Jobber Help Center, Automations (quote follow-ups)", url: "https://help.getjobber.com/en/articles/automations/" },
  { name: "Housecall Pro Help Center, Create Service Plan Templates", url: "https://help.housecallpro.com/en/articles/2369524-create-new-recurring-service-plans" },
  { name: "ServiceTitan Help Center, Memberships", url: "https://help.servicetitan.com/docs/memberships" },
];

// Hero figure: one customer across the three timescales.
const journey = [
  { step: "Web enquiry acknowledged", when: "Minute 1", color: "var(--coral)" },
  { step: "Diagnostic visit booked", when: "Same day", color: "var(--coral)" },
  { step: "Estimate sent with options", when: "Day 1", color: "var(--sky)" },
  { step: "Follow-up while the estimate is open", when: "Day 4", color: "var(--sky)" },
  { step: "Job done, review requested", when: "Week 2", color: "var(--ink)" },
  { step: "Maintenance visit, plan renewed", when: "Year 1", color: "var(--butter)" },
];

const symptoms = [
  { title: "The call taken on a roof", text: "Enquiries arrive while everyone is on a job, and the reply waits until someone is back at the office." },
  { title: "Estimates sent, then silence", text: "Quotes go out and nobody owns the follow-up, so they sit open until the customer has hired someone else." },
  { title: "Follow-up after a yes", text: "Reminders keep going after the job is booked, because nothing tells the sequence the customer already said yes." },
  { title: "Pricing in one person's head", text: "Only the owner or a senior technician can price a job, so quotes wait until they're free." },
  { title: "Service plans that drift", text: "Maintenance visits and renewals depend on someone remembering, and they slip first when the diary is full." },
  { title: "Review requests sent too early", text: "The request goes out with the invoice, before anyone has checked the customer is happy with the work." },
];

const clocks = [
  {
    name: "Minutes", sub: "The call", color: "var(--coral)", q: "“Can someone come out today?”",
    automate: "an instant acknowledgement of web enquiries and booking requests, with every enquiry logged against its source",
    human: "triage: what's urgent, and who goes",
    failure: "the enquiry waits for the office, and the customer rings the next company on the list",
  },
  {
    name: "Days", sub: "The estimate", color: "var(--sky)", q: "“Let me think about it.”",
    automate: "estimate follow-ups that stop once the job is booked, and options laid out the same way every time",
    human: "the call that answers the real question, which is usually price, timing or trust",
    failure: "the estimate is sent and nobody owns what happens next",
  },
  {
    name: "Seasons", sub: "The relationship", color: "var(--butter)", q: "“Isn't the boiler due a service?”",
    automate: "service plan visits, renewals, maintenance reminders and review requests after the job is finished",
    human: "the technician who knows the equipment and the household",
    failure: "plan visits and renewals rely on memory, and slip in the busy season",
  },
];

// "The easiest job to win back": what happens to an open estimate.
const estimateSteps = [
  { title: "Sent with options", text: "Built from the pricebook, so the price doesn't depend on who wrote the quote, with options laid out the same way each time." },
  { title: "Owned by a named person", text: "Every open estimate has someone responsible for it, so it never belongs to everyone and therefore no one." },
  { title: "Followed up on the right clock", text: "An urgent repair needs a reply in days. A replacement system may take weeks of thinking. The timing follows the job." },
  { title: "Closed out either way", text: "Booked, or marked lost with a reason. Either way the follow-up stops, and the reasons show you what to change." },
];

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we set up". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Enquiry capture", color: "var(--coral)", text: "Calls, web forms, online booking requests and referrals recorded in one place, with the source of each one, so you can see which channels turn into booked jobs.", tags: ["Calls", "Web forms", "Online booking"] },
  { title: "Booking and dispatch", color: "var(--sky)", text: "Job types, durations, service areas and technician skills set up so the office can book and dispatch without guessing who can do what.", tags: ["Job types", "Dispatch", "Service areas"] },
  { title: "Pricebook", color: "var(--ink)", text: "Services, materials and prices organised so more than one person can quote, with options presented the same way on every estimate.", tags: ["Services", "Materials", "Options"] },
  { title: "Estimate follow-up", color: "var(--sky)", text: "Follow-up on open estimates that stops once the job is booked, with lost estimates marked and a reason recorded.", tags: ["Follow-up", "Stop rules", "Lost reasons"] },
  { title: "Invoicing and payments", color: "var(--sage)", text: "Invoices and payment collection from the field, connected to your accounting software where the platform supports it.", tags: ["Invoices", "Payments", "Accounting"] },
  { title: "Service plans and memberships", color: "var(--butter)", text: "Plan types, included visits, recurring billing and renewals, so maintenance visits are created by the system rather than remembered by a person.", tags: ["Visits", "Billing", "Renewals"] },
  { title: "Reviews and past customers", color: "var(--coral)", text: "Review requests sent once the job is finished, and reminders for past customers who are due a service or a seasonal check.", tags: ["Reviews", "Reminders", "Seasonal"] },
  { title: "Reporting", color: "var(--sage)", text: "Booked jobs by lead source, estimate close rate and plan renewals, in reports the owner will actually look at each week.", tags: ["Lead sources", "Close rate", "Renewals"] },
  { title: "Migration, training and handover", color: "var(--light-sage)", text: "Customers and job history moved where the platform allows, office staff and technicians trained by role, and the setup documented so you own it.", tags: ["Migration", "Training", "Docs"] },
];

const platforms = [
  { name: "ServiceTitan", href: "/platforms/servicetitan", color: "var(--coral)", text: "Pricebook, dispatch, memberships and marketing tracking, for established trade businesses with dedicated office staff and several technicians." },
  { name: "Housecall Pro", href: "/platforms/housecall-pro", color: "var(--sky)", text: "Booking, dispatch, estimates, service plans, reviews and campaigns in one place, from owner-operators to growing teams. US and Canada." },
  { name: "Jobber", href: "/platforms/jobber", color: "var(--sage)", text: "Requests, quotes, scheduling, invoicing and recurring work, suited to businesses running recurring or quote-heavy jobs." },
];

const limits = [
  { cause: "Pricing that lives in one head", fix: "If only one person can price a job, quotes stay slow however good the follow-up is. Building a proper pricebook usually helps more than any automation, and we'll say so before building either." },
  { cause: "Not enough technicians", fix: "A CRM can book work faster. It can't create capacity. If the diary is already full, faster booking only moves the bottleneck to the van." },
  { cause: "Workmanship and reviews", fix: "We can time review requests so they reach customers after the job is finished. What they write still depends on the job itself." },
  { cause: "Calling and texting rules", fix: "We build opt-outs into texts and emails, but consent and messaging rules, such as the TCPA in the US and CASL in Canada, remain your business's responsibility." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing and fixing a platform",
    items: [
      { q: "Which CRM is best for a home service business?", a: "There isn't one answer. ServiceTitan suits established trade businesses with dedicated office staff, field sales and memberships. Housecall Pro suits owner-operators and growing teams that want booking, payments, reviews and marketing in one place. Jobber suits businesses that run recurring or quote-heavy work. We recommend the smallest setup that fits how your business runs, and if you already use one of them, fixing it is usually better than switching." },
      { q: "Can you fix our existing ServiceTitan, Housecall Pro or Jobber account?", a: "Yes. Common problems are enquiries that never get logged, a pricebook only one person understands, estimate follow-up that nobody owns, and service plans that were set up but never maintained. We audit the account, fix what matters and document how the team should use it." },
      { q: "Can you move our customers from another system?", a: "Usually. We move customers and, where the platform allows, job history from spreadsheets or another field service tool, then clean and de-duplicate them. What can be moved depends on what your current system can export, which we confirm in discovery." },
    ],
  },
  {
    label: "Follow-up and service plans",
    items: [
      { q: "How do you stop follow-up messages after a customer books?", a: "The follow-up is tied to the estimate's status, so when the estimate is approved or the job is booked, the reminders stop. How that works differs by platform. Jobber, for example, only sends quote follow-ups while a quote is still awaiting a response. We test it with a sample estimate before going live." },
      { q: "Can service plan visits be scheduled automatically?", a: "On the main home service platforms, yes. Service plans or memberships can hold the number of included visits, the billing frequency and the renewal, and the platform creates the visits for the office to book. We set up the plan types and test a renewal before launch." },
      { q: "Will automated texts sound robotic?", a: "They shouldn't. Messages are written in your voice for each situation and reviewed with you before they go live. Automation handles timing and reminders. Anything that needs judgment, such as a complaint or a price question, goes to a person." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How is a home services CRM project priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function HomeServicesIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "Sage Kite",
        "url": `${SITE_URL}/`
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        "url": PAGE_URL,
        "name": "Home services CRM setup and automation | Sage Kite",
        "description": DESCRIPTION,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${PAGE_URL}/#service` },
        "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${SITE_URL}/industries` },
          { "@type": "ListItem", "position": 3, "name": "Home services" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Home services CRM setup and automation",
        "serviceType": "Home services CRM implementation",
        "description": "CRM setup for plumbing, HVAC, electrical, cleaning and other home service businesses: enquiry capture, booking and dispatch, pricebook, estimate follow-up, invoicing and payments, service plans and memberships, reviews and past customers, reporting, migration, training and handover.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "BusinessAudience", "audienceType": "Plumbing businesses" },
          { "@type": "BusinessAudience", "audienceType": "HVAC businesses" },
          { "@type": "BusinessAudience", "audienceType": "Electrical contractors" },
          { "@type": "BusinessAudience", "audienceType": "Cleaning businesses" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Home services CRM setup",
          "itemListElement": capabilities.map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title, "description": cap.text }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}/#faq`,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${PAGE_URL}/#service` },
        "inLanguage": "en",
        "mainEntity": faqGroups.flatMap((g) => g.items).map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <>
      <Header />

      <main id="main">
        <style dangerouslySetInnerHTML={{ __html: `
          /* Home services industry page, built on the same system as the real estate page */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .hs-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .hs-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .hs-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .hs-hero .sub{margin:20px 0 28px;max-width:54ch}
          .crumbs{display:flex;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .crumbs a{color:inherit;text-decoration:none}
          .crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one customer from first call to service plan */
          .lead-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .lead-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 16px}
          .lsteps li{display:grid;grid-template-columns:14px minmax(0,1fr) auto;gap:12px;align-items:center;padding:9px 0;position:relative;font-size:.925rem;color:var(--ink);font-weight:600;line-height:1.3}
          .lsteps li:not(:last-child)::after{content:"";position:absolute;left:6.5px;top:28px;height:calc(100% - 20px);width:1px;background:var(--light-sage)}
          .lsteps .dot{width:14px;height:14px;border:2px solid var(--c);background:var(--warm-white)}
          .lsteps small{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap;font-variant-numeric:tabular-nums}
          .lead-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Starting situations */
          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}
          .after-line sup a{font-size:.75rem;font-weight:700;color:var(--sage);text-decoration:none;margin-left:2px}

          /* Three clocks */
          .starts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .start{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white);display:flex;flex-direction:column}
          .start .q{font-size:.95rem;font-style:italic;color:var(--sage);margin-bottom:6px}
          .start h3{font-size:1.45rem}
          .start .when{font-size:.875rem;font-weight:600;color:var(--sage);margin:2px 0 6px}
          .start ul{margin-top:12px}
          .start li{position:relative;padding:8px 0 8px 20px;font-size:.9rem;line-height:1.45;border-top:1px solid var(--light-sage)}
          .start li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}
          .start li b{color:var(--ink);font-weight:700}

          /* Open estimates */
          .db-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:start}
          .figs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
          .fig{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:24px}
          .fig b{display:block;font-size:clamp(2.6rem,5vw,3.6rem);line-height:1;font-weight:800;letter-spacing:-.03em;color:var(--ink);font-variant-numeric:tabular-nums}
          .fig span{display:block;margin-top:10px;font-size:.925rem;line-height:1.45}
          .fig-src{grid-column:1/-1;font-size:.8125rem;color:var(--sage)}
          .fig-src a{color:inherit}
          .est{counter-reset:est;border-top:1px solid var(--light-sage)}
          .est li{counter-increment:est;display:grid;grid-template-columns:44px minmax(0,1fr);gap:16px;padding:18px 0;border-bottom:1px solid var(--light-sage)}
          .est li::before{content:counter(est,decimal-leading-zero);font-size:.875rem;font-weight:700;color:var(--c);padding-top:3px}
          .est strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:4px}
          .est p{font-size:.95rem;line-height:1.5;margin:0}
          .db-copy p{font-size:1.05rem;line-height:1.65;margin-bottom:16px;max-width:62ch}
          .db-copy p:first-child{font-size:1.2rem;color:var(--ink)}

          /* What we set up */
          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}

          /* Platforms */
          .plats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:clamp(32px,4vw,44px)}
          .plats a{display:flex;flex-direction:column;gap:8px;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:22px 22px 24px;background:var(--warm-white);text-decoration:none;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease)}
          .plats a:hover{transform:translateY(-3px);border-color:var(--sage);border-top-color:var(--c)}
          .plats strong{font-size:1.25rem;font-weight:700;color:var(--ink);letter-spacing:-.01em}
          .plats span{font-size:.925rem;line-height:1.5}

          /* What a CRM won't fix */
          .fails{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .fails li{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:24px;padding:22px 0;border-bottom:1px solid var(--light-sage);align-items:baseline}
          .fails .cause{display:flex;align-items:baseline;gap:14px;font-size:1.2rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3}
          .fails .n{font-size:.875rem;font-weight:700;color:var(--coral)}
          .fails p{font-size:1rem;line-height:1.55}

          /* Process */
          .flow4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));margin-top:clamp(40px,5vw,64px)}
          .flow4 li{padding-right:24px}
          .flow4 .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
          .flow4 .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
          .flow4 .num{font-weight:700;letter-spacing:-.02em;font-size:2.4rem;line-height:1;color:var(--sage)}
          .flow4 h3{font-size:1.3rem;margin:8px 0 6px}
          .flow4 p{font-size:.925rem;line-height:1.5}

          /* What we need and what you receive */
          .two-col{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
          .panel{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,34px)}
          .panel h3{font-size:1.35rem;margin-bottom:6px}
          .panel-k{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .gets li{display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--light-sage);font-size:.95rem;line-height:1.45;color:var(--ink)}
          .gets svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}

          /* Connected services */
          .conn{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:clamp(32px,4vw,44px)}
          .conn a{display:flex;flex-direction:column;gap:6px;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:20px 20px 22px;background:var(--warm-white);text-decoration:none;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease)}
          .conn a:hover{transform:translateY(-3px);border-color:var(--sage);border-top-color:var(--c)}
          .conn strong{font-size:1.15rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.25}
          .conn span{font-size:.875rem;line-height:1.45}

          /* FAQ */
          .faq-wrap{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:clamp(32px,5vw,72px);align-items:start}
          .faq-wrap h2{font-size:clamp(1.8rem,3vw,2.4rem)}
          .faq-grp + .faq-grp{margin-top:36px}
          .faq-grp > .label{margin-bottom:6px}
          .qa{border-top:1px solid var(--light-sage)}
          .faq-grp .qa:last-child{border-bottom:1px solid var(--light-sage)}
          .qa summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:center;padding:18px 0;font-weight:700;font-size:1.075rem;color:var(--ink);letter-spacing:-.01em;line-height:1.35}
          .qa summary::-webkit-details-marker{display:none}
          .qa summary::after{content:"+";flex:0 0 auto;font-weight:400;font-size:1.5rem;color:var(--sage);line-height:1}
          .qa[open] summary::after{content:"\\2212"}
          .qa p{padding:0 0 20px;max-width:68ch;font-size:1rem}
          .trust-note{margin-top:32px;font-size:.85rem;color:var(--sage);max-width:72ch}
          .trust-note a{color:inherit;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px}

          @media (max-width:1040px){
            .hs-hero .hero-grid{grid-template-columns:1fr}
            .symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .starts,.plats{grid-template-columns:1fr}
            .db-grid{grid-template-columns:1fr}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .flow4{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:36px}
            .faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .lead-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .symptoms,.two-col,.conn{grid-template-columns:1fr}
            .fails li{grid-template-columns:1fr;gap:6px}
            .flow4{grid-template-columns:1fr}
          }
        ` }} />

        {/* Hero */}
        <section className="hs-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
              </div>
              <p className="crumbs"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span>Home services</span></p>
              <h1 id="hero-title">Home services CRM setup for urgent calls and repeat customers</h1>
              <p className="sub">
                A burst pipe needs an answer within minutes. A replacement quote can take a week of thinking. And the same customer should hear from you again when their system is due a service. We set up your CRM for all three, so work isn&apos;t lost between the call, the estimate and the next visit.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your business</Link>
                <Link href="#what-we-set-up" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Plumbing, HVAC, electrical, cleaning</span>
                <span><span className="dot" style={c('var(--sky)')}></span>ServiceTitan, Housecall Pro or Jobber</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">One customer, first call to service plan</b><span>Example</span></p>
                <ol className="lsteps">
                  {journey.map((j) => (
                    <li key={j.step} style={c(j.color)}><span className="dot"></span>{j.step}<small>{j.when}</small></li>
                  ))}
                </ol>
              </div>
              <figcaption>Illustrative. Your job types and timings are mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Where home service businesses usually lose work.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">Most of these aren&apos;t software problems. The system was set up around the office, while most of the business happens in vans and on site, and nobody has revisited it since.</p>
          </div>
        </section>

        {/* Three clocks */}
        <section className="sec" id="three-clocks" aria-labelledby="clocks-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How home services follow-up works</p>
              <h2 id="clocks-title">Home services runs on three clocks at once.</h2>
              <p className="sub">Most setups are built for the first one. The estimate and the next visit are where work is most often won or quietly lost.</p>
            </div>
            <div className="starts">
              {clocks.map((k) => (
                <div key={k.name} className="start" style={c(k.color)}>
                  <p className="q">{k.q}</p>
                  <h3>{k.name}</h3>
                  <p className="when">{k.sub}</p>
                  <ul>
                    <li><b>Automate:</b> {k.automate}</li>
                    <li><b>Keep human:</b> {k.human}</li>
                    <li><b>Usual failure:</b> {k.failure}</li>
                  </ul>
                </div>
              ))}
            </div>
            <p className="after-line">Urgent work rewards speed. Recurring work rewards memory. A setup that only handles one of them leaves the other to whoever happens to remember.</p>
          </div>
        </section>

        {/* Open estimates */}
        <section className="tint sec" id="open-estimates" aria-labelledby="est-title">
          <div className="wrap db-grid">
            <div>
              <div className="head">
                <p className="label">The work already in your system</p>
                <h2 id="est-title">The quote nobody followed up is often the easiest job to win back.</h2>
              </div>
            </div>
            <div className="db-copy">
              <p>By the time an estimate exists, the customer has called you, let someone into their home, explained the problem and seen a price. They have already said they&apos;re interested.</p>
              <p>Yet open estimates are often where follow-up is weakest. The technician has moved on to the next job, the office assumes the technician will call, and the estimate sits until the customer goes elsewhere or the problem gets worse. A light, owned process around each estimate usually does more than another lead source.</p>
              <ol className="est" style={c('var(--sky)')}>
                {estimateSteps.map((s) => (
                  <li key={s.title}><div><strong>{s.title}</strong><p>{s.text}</p></div></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* What we set up */}
        <section className="rule sec" id="what-we-set-up" aria-labelledby="setup-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What we set up</p>
              <h2 id="setup-title">What a home services CRM setup covers.</h2>
              <p className="sub">Your proposal lists which of these your project includes. What is possible depends on the platform and plan, which we confirm in discovery.</p>
            </div>
            <div className="cap-list">
              {capabilities.map((cap) => (
                <div key={cap.title} className="cap-row" style={c(cap.color)}>
                  <h3>{cap.title}</h3>
                  <p>{cap.text}</p>
                  <div className="tags">
                    {cap.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="pale sec" id="platforms" aria-labelledby="platforms-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Platforms</p>
              <h2 id="platforms-title">ServiceTitan, Housecall Pro or Jobber.</h2>
              <p className="sub">Each suits a different size and kind of business. If you already use one of them, the answer is usually to fix it rather than switch.</p>
            </div>
            <div className="plats">
              {platforms.map((p) => (
                <Link key={p.name} href={p.href} style={c(p.color)}><strong>{p.name}</strong><span>{p.text}</span></Link>
              ))}
            </div>
          </div>
        </section>

        {/* What a CRM won't fix */}
        <section className="sec" id="limits" aria-labelledby="limits-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Being clear about limits</p>
              <h2 id="limits-title">What a better CRM won&apos;t fix.</h2>
              <p className="sub">A good setup makes booking and follow-up easy and visible. Some problems sit outside the software, and we would rather say so up front.</p>
            </div>
            <ol className="fails">
              {limits.map((f, i) => (
                <li key={f.cause}>
                  <span className="cause"><span className="n">{String(i + 1).padStart(2, '0')}</span>{f.cause}</span>
                  <p>{f.fix}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Process */}
        <section className="rule sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a home services CRM project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>How enquiries arrive, how jobs are priced and booked, and what happens after a job is finished.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Job map</h3><p>Every job type with its owner, estimate process and follow-up, agreed before anything is built.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Build and test</h3><p>Booking, pricebook, follow-up and plans, then a test enquiry run through to a paid invoice.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training for office staff and technicians by role, documentation, and optional support once you&apos;re live.</p></li>
            </ol>
          </div>
        </section>

        {/* Before and after */}
        <section className="tint sec" id="handover" aria-labelledby="handover-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Before and after</p>
              <h2 id="handover-title">What we need from you, and what you receive.</h2>
            </div>
            <div className="two-col">
              <div className="panel" style={c('var(--butter)')}>
                <h3>What we need</h3>
                <p className="panel-k">Confirmed during discovery</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Admin access to your platform, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />Your services and current prices, even if they live in a spreadsheet</li>
                  <li><Check size={15} aria-hidden="true" />How enquiries are answered and booked today</li>
                  <li><Check size={15} aria-hidden="true" />Your service plan or maintenance terms, if you offer them</li>
                  <li><Check size={15} aria-hidden="true" />An owner or office manager to sign off decisions</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Enquiries from every channel logged with their source</li>
                  <li><Check size={15} aria-hidden="true" />A pricebook more than one person can quote from</li>
                  <li><Check size={15} aria-hidden="true" />Estimate follow-up that stops once a job is booked</li>
                  <li><Check size={15} aria-hidden="true" />Service plans with visits, billing and renewals tested</li>
                  <li><Check size={15} aria-hidden="true" />Documentation and training by role</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Connected services */}
        <section className="sec" id="services" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Related</p>
              <h2 id="conn-title">The work around a home services CRM.</h2>
            </div>
            <div className="conn">
              <Link href="/platforms/servicetitan" style={c('var(--coral)')}><strong>ServiceTitan consulting</strong><span>Pricebook, dispatch, memberships and reporting.</span></Link>
              <Link href="/platforms/housecall-pro" style={c('var(--sky)')}><strong>Housecall Pro setup</strong><span>Booking, estimates, service plans and reviews.</span></Link>
              <Link href="/platforms/jobber" style={c('var(--sage)')}><strong>Jobber setup</strong><span>Requests, quotes, scheduling and recurring work.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--ink)')}><strong>Specialist staffing</strong><span>A VA to keep follow-up moving and records clean.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Home services CRM FAQs</h2>
            </div>
            <div>
              {faqGroups.map((group) => (
                <div className="faq-grp" key={group.label}>
                  <p className="label">{group.label}</p>
                  {group.items.map((f) => (
                    <details className="qa" key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              ))}
              <p className="trust-note" id="sources">
                Platform features checked against vendor documentation in October 2026:{' '}
                {SOURCES.map((s, i) => (
                  <React.Fragment key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>{i < SOURCES.length - 1 ? '; ' : '. '}
                  </React.Fragment>
                ))}
                Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by the platforms listed.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--coral)')}></span>Minutes</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Days</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Seasons</span>
              </p>
              <h2 id="final-title">Build a CRM for the next visit, not just the first call.</h2>
              <p className="sub">A discovery call looks at how enquiries arrive, how estimates are followed up and what happens after a job is done. We&apos;ll tell you plainly where we&apos;d start.</p>
              <div className="cta-row">
                <Link href="/book" className="btn">Book a discovery call</Link>
                <Link href="/industries" className="link">See other industries</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </>
  );
}
