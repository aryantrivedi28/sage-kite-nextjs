import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/content/share-image';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries/other-businesses`;
const DESCRIPTION = "CRM setup for B2B firms, agencies, clinics and businesses without an industry platform, on HubSpot, GoHighLevel, Keap or ActiveCampaign.";

export const metadata: Metadata = {
  title: "CRM Setup for B2B Firms, Agencies & Clinics | Sage Kite",
  description: DESCRIPTION,
  keywords: ["CRM setup for B2B companies", "CRM for agencies", "CRM for clinics", "sales pipeline design", "HubSpot or GoHighLevel setup", "general CRM implementation"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "CRM setup for B2B firms, agencies and clinics | Sage Kite",
    description: "A general CRM shaped around how your business actually sells, with a pipeline, data and automation your team will keep using.",
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM setup for B2B firms, agencies and clinics | Sage Kite",
    description: "A general CRM shaped around how your business actually sells, with a pipeline, data and automation your team will keep using.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

// Figures on this page were checked against the original release on 10 October 2026.
const VALIDITY = { name: "Validity, State of CRM Data Management in 2025 (press release, 10 July 2025)", url: "https://www.prnewswire.com/news-releases/validity-releases-state-of-crm-data-management-in-2025-report-revealing-disconnect-between-data-quality-and-ai-implementation-302499899.html" };

// Hero figure: one B2B enquiry across the three timescales.
const journey = [
  { step: "Enquiry from the website or LinkedIn", when: "Day 0", color: "var(--coral)" },
  { step: "Assigned to an owner, reply sent", when: "Day 0", color: "var(--coral)" },
  { step: "Qualifying call", when: "Day 2", color: "var(--ink)" },
  { step: "Proposal sent, next step booked", when: "Week 2", color: "var(--sky)" },
  { step: "Won, onboarding starts", when: "Month 2", color: "var(--sky)" },
  { step: "Renewal and referral conversation", when: "Year 1", color: "var(--butter)" },
];

const symptoms = [
  { title: "Enquiries in five places", text: "Website forms, shared inboxes, LinkedIn messages and phone calls, with no single place that shows them all." },
  { title: "A pipeline full of hope", text: "Deals sit in the same stage for months because nothing says what has to happen next, or who should do it." },
  { title: "Fields nobody fills in", text: "Dozens of custom fields were added for a report once, and now nobody knows which ones matter." },
  { title: "Tags nobody understands", text: "Years of tags from old campaigns and imports, so every list has to be checked by hand before it is used." },
  { title: "Two tools doing one job", text: "A CRM for sales and a separate email tool for marketing, with contacts copied between them and never quite matching." },
  { title: "Renewals noticed too late", text: "Contract end dates live in a spreadsheet, so the renewal conversation starts after the client has already decided." },
];

const clocks = [
  {
    name: "Days", sub: "The enquiry", color: "var(--coral)", q: "“Can they help, and who do I talk to?”",
    automate: "capture from every channel into one place, an owner assigned straight away, and a reply that says what happens next",
    human: "the qualifying conversation",
    failure: "the enquiry lands in a shared inbox, and everyone assumes someone else has it",
  },
  {
    name: "Months", sub: "The sale", color: "var(--sky)", q: "“We need to discuss it internally.”",
    automate: "pipeline stages with a next step and a date, proposal reminders, and nurture for the leads who aren't ready",
    human: "the proposal, the negotiation and the people involved in the decision",
    failure: "deals sit in a stage with no next step, and the pipeline stops reflecting reality",
  },
  {
    name: "Years", sub: "The account", color: "var(--butter)", q: "“Are they still the right fit for us?”",
    automate: "onboarding, check-ins, appointment recalls, renewal reminders and referral asks",
    human: "the relationship, and the judgement about what to offer next",
    failure: "renewal dates live in a spreadsheet and the conversation starts too late",
  },
];

// "A general CRM starts empty": the design decisions that keep it useful.
const designRules = [
  { title: "Stages that describe what the customer has done", text: "\"Proposal sent\" or \"call booked\", not \"warm\" or \"likely\". Each stage has a clear test for moving on, so the pipeline means the same thing to everyone." },
  { title: "Fields you will actually use", text: "If nobody will filter, report or automate on a piece of information, it doesn't need its own field. Fewer fields get filled in more often." },
  { title: "One owner and one next step for every open deal", text: "Each deal has a named person and a dated next action, so nothing waits on whoever happens to remember it." },
  { title: "Naming rules, written down", text: "Pipelines, tags and automations named the same way and documented, so the next person can maintain the system without guessing." },
];

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we set up". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Process mapping and CRM design", color: "var(--butter)", text: "How you win and keep customers written down first, then turned into the stages, fields and records the CRM needs.", tags: ["Process map", "Data model"] },
  { title: "Lead capture across channels", color: "var(--coral)", text: "Website forms, inboxes, calls and booking links brought into one place, with the source of every enquiry recorded.", tags: ["Forms", "Calls", "Sources"] },
  { title: "Pipeline design", color: "var(--sky)", text: "Stages that match how deals actually move, with an owner, a next step and a clear test for moving each deal forward.", tags: ["Stages", "Ownership"] },
  { title: "Workflows and follow-up", color: "var(--ink)", text: "Routing, reminders, tasks and follow-up built with the platform's own tools, so the next step doesn't depend on memory.", tags: ["Routing", "Tasks", "Reminders"] },
  { title: "Email marketing and nurture", color: "var(--sage)", text: "Segments and email sequences for leads who aren't ready yet and for existing customers, sent from the same database as sales.", tags: ["Segments", "Nurture"] },
  { title: "Appointments and scheduling", color: "var(--coral)", text: "Booking links, reminders and follow-up for calls, consultations or appointments, connected to the right record.", tags: ["Booking", "Reminders"] },
  { title: "Reporting and dashboards", color: "var(--sky)", text: "The numbers you run the business on, from lead source to revenue, in reports someone will check each week.", tags: ["Lead source", "Pipeline", "Revenue"] },
  { title: "Integrations", color: "var(--ink)", text: "Website, calendar, payments and accounting connected, using native integrations first.", tags: ["Website", "Calendar", "Accounting"] },
  { title: "Migration, training and documentation", color: "var(--light-sage)", text: "Contacts cleaned and moved from spreadsheets or another CRM, the team trained by role, and the setup documented so you own it.", tags: ["Migration", "Training", "Docs"] },
];

const platforms: { name: string; href: string; external?: boolean; color: string; text: string }[] = [
  { name: "HubSpot", href: "/platforms/hubspot", color: "var(--coral)", text: "CRM architecture, pipelines, workflows and reporting for sales and marketing teams." },
  { name: "GoHighLevel", href: "https://www.ghlscaleup.com", external: true, color: "var(--sky)", text: "Lead management, follow-up and marketing operations in one place. Delivered with GHL Scale Up." },
  { name: "Keap", href: "/platforms/keap", color: "var(--sage)", text: "Contact management, automation and repeatable sales follow-up for small businesses." },
  { name: "ActiveCampaign", href: "/platforms/activecampaign", color: "var(--ink)", text: "Email marketing and automation built around your customer journey." },
];

const limits = [
  { cause: "A sales process nobody agrees on", fix: "If the team can't agree what the stages are, the CRM will simply record the disagreement. We help you settle it, but the decision is yours, and it comes before the build." },
  { cause: "Not enough enquiries", fix: "A CRM organises and follows up the leads you have. It doesn't create demand. If the pipeline is empty, marketing is the place to start." },
  { cause: "Keeping it up to date", fix: "We cut down manual entry wherever we can, but a CRM is only as current as the people using it. Someone still has to update a deal after a call." },
  { cause: "Sensitive data and consent rules", fix: "If you handle health data, or market to people in different countries, the platform and how it is set up need to meet your obligations. We flag where that matters. Compliance sign-off sits with you." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing and fixing a CRM",
    items: [
      { q: "Which CRM should a business without an industry platform use?", a: "It depends on how you sell. HubSpot suits sales and marketing teams that need pipelines, workflows and reporting in one place. GoHighLevel suits businesses that want lead management, follow-up and marketing operations together. Keap suits small businesses with repeatable sales follow-up, and ActiveCampaign suits businesses led by email marketing. If you already use one of them, fixing it is usually better than switching." },
      { q: "Can you fix a CRM that has become messy?", a: "Yes. Common problems are duplicate contacts, fields and tags nobody understands, deals with no next step and automations nobody maintains. We audit the account, clean the data, rebuild the pipeline and automations that matter, and document how the team should use it." },
      { q: "Can you move us from spreadsheets or another CRM?", a: "Usually. We map, clean and de-duplicate contacts and history before importing them. What can be moved depends on what your current system can export, which we confirm in discovery before the migration is scoped." },
      { q: "Should we use an existing CRM or build a custom one?", a: "Usually an existing platform. Configuring one is faster and cheaper, and it comes with support and updates. A custom CRM makes sense when your sales process or reporting cannot be handled by any platform without heavy workarounds. Discovery tells you which applies." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How long does a CRM project take?", a: "It depends on how clear your process is, how much data you have and how many integrations and automations you need. A focused cleanup is much smaller than a new setup with a migration. Your proposal sets out the milestones before work starts." },
      { q: "Do you work with clinics and other regulated businesses?", a: "Yes. If you handle health or other sensitive data, the platform and how it is configured need to meet your obligations. We raise this in discovery and build to the requirements you confirm, but compliance sign-off sits with you and your advisers." },
      { q: "How is a CRM project priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function OtherBusinessesIndustryPage() {
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
        "name": "CRM setup for B2B firms, agencies and clinics | Sage Kite",
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
          { "@type": "ListItem", "position": 3, "name": "B2B firms, agencies and clinics" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "CRM setup for B2B firms, agencies and clinics",
        "serviceType": "General CRM implementation",
        "description": "CRM setup for businesses without an industry platform: process mapping and CRM design, lead capture across channels, pipeline design, workflows and follow-up, email marketing and nurture, appointments and scheduling, reporting and dashboards, integrations, migration, training and documentation, on HubSpot, GoHighLevel, Keap or ActiveCampaign.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "BusinessAudience", "audienceType": "B2B firms" },
          { "@type": "BusinessAudience", "audienceType": "Agencies" },
          { "@type": "BusinessAudience", "audienceType": "Clinics" },
          { "@type": "BusinessAudience", "audienceType": "Small and medium-sized businesses" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "General CRM setup",
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
          /* B2B, agencies and clinics industry page, built on the same system as the real estate page */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .ob-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .ob-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .ob-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .ob-hero .sub{margin:20px 0 28px;max-width:54ch}
          .crumbs{display:flex;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .crumbs a{color:inherit;text-decoration:none}
          .crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one enquiry from first contact to renewal */
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

          /* A general CRM starts empty */
          .db-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:start}
          .figs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
          .fig{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:24px}
          .fig b{display:block;font-size:clamp(2.6rem,5vw,3.6rem);line-height:1;font-weight:800;letter-spacing:-.03em;color:var(--ink);font-variant-numeric:tabular-nums}
          .fig span{display:block;margin-top:10px;font-size:.925rem;line-height:1.45}
          .fig-src{grid-column:1/-1;font-size:.8125rem;color:var(--sage)}
          .fig-src a{color:inherit}
          .db-copy p{font-size:1.05rem;line-height:1.65;margin-bottom:16px;max-width:62ch}
          .db-copy p:first-child{font-size:1.2rem;color:var(--ink)}
          .est{counter-reset:est;border-top:1px solid var(--light-sage)}
          .est li{counter-increment:est;display:grid;grid-template-columns:44px minmax(0,1fr);gap:16px;padding:18px 0;border-bottom:1px solid var(--light-sage)}
          .est li::before{content:counter(est,decimal-leading-zero);font-size:.875rem;font-weight:700;color:var(--c);padding-top:3px}
          .est strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:4px}
          .est p{font-size:.95rem;line-height:1.5;margin:0}

          /* What we set up */
          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}

          /* Platforms */
          .plats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:clamp(32px,4vw,44px)}
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
            .ob-hero .hero-grid{grid-template-columns:1fr}
            .symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .starts{grid-template-columns:1fr}
            .plats{grid-template-columns:repeat(2,minmax(0,1fr))}
            .db-grid{grid-template-columns:1fr}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .flow4{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:36px}
            .faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .lead-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .symptoms,.two-col,.conn,.plats{grid-template-columns:1fr}
            .fails li{grid-template-columns:1fr;gap:6px}
            .flow4{grid-template-columns:1fr}
          }
        ` }} />

        {/* Hero */}
        <section className="ob-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
              </div>
              <p className="crumbs"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span>B2B firms, agencies and clinics</span></p>
              <h1 id="hero-title">CRM setup for businesses that don&apos;t fit an industry template</h1>
              <p className="sub">
                A consultancy, an agency and a multi-location clinic don&apos;t sell the same way, and no industry platform was built for any of them. A general CRM can fit all three, but only once someone decides what it should hold. We design and build it around how your business actually wins and keeps customers.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your business</Link>
                <Link href="#what-we-set-up" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>B2B firms, agencies, clinics</span>
                <span><span className="dot" style={c('var(--sky)')}></span>HubSpot, GoHighLevel, Keap or ActiveCampaign</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">One enquiry, first contact to renewal</b><span>Example</span></p>
                <ol className="lsteps">
                  {journey.map((j) => (
                    <li key={j.step} style={c(j.color)}><span className="dot"></span>{j.step}<small>{j.when}</small></li>
                  ))}
                </ol>
              </div>
              <figcaption>Illustrative. Your sales stages and timings are mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Signs a general CRM was set up without a plan.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">None of these is a platform problem. Each one is a decision that was never made, or was made once and then left as the business changed.</p>
          </div>
        </section>

        {/* Three clocks */}
        <section className="sec" id="three-clocks" aria-labelledby="clocks-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How the sales cycle works</p>
              <h2 id="clocks-title">A customer is answered in days, won over months and kept for years.</h2>
              <p className="sub">Most CRM setups focus on the pipeline in the middle. The first reply and the long relationship after the sale are where many businesses quietly lose ground.</p>
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
            <p className="after-line">The clocks run at different speeds for a consultancy, an agency and a clinic. What stays the same is that each one needs an owner and a next step.</p>
          </div>
        </section>

        {/* A general CRM starts empty */}
        <section className="tint sec" id="design" aria-labelledby="design-title">
          <div className="wrap db-grid">
            <div>
              <div className="head">
                <p className="label">The trade-off of a general CRM</p>
                <h2 id="design-title">A general CRM starts empty. That&apos;s its strength, and its risk.</h2>
              </div>
            </div>
            <div className="db-copy">
              <div className="figs">
                <div className="fig"><b>76%</b><span>of CRM users surveyed said less than half of their CRM data is accurate and complete</span></div>
                <div className="fig"><b>37%</b><span>said their organisation loses revenue as a direct result of data quality</span></div>
                <p className="fig-src">Source: <a href={VALIDITY.url} target="_blank" rel="noopener noreferrer">{VALIDITY.name}</a>. A survey of 602 CRM users and administrators in the US, UK and Australia.</p>
              </div>
              <p style={{ marginTop: 28 }}>Those figures are self-reported, and they come from a company that sells data-quality tools, so treat them as a warning rather than a measurement of your business. The pattern behind them is familiar, though.</p>
              <p>Industry platforms arrive with jobs, matters or classes already defined. A general CRM arrives with very little that is specific to you, so every stage, field, tag and automation is a decision someone has to make. Made deliberately, the CRM fits the business. Made casually, one at a time, it fills up with fields nobody uses and data nobody trusts. Four decisions do most of the work:</p>
              <ol className="est" style={c('var(--sky)')}>
                {designRules.map((s) => (
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
              <h2 id="setup-title">What a general CRM setup covers.</h2>
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
              <h2 id="platforms-title">HubSpot, GoHighLevel, Keap or ActiveCampaign.</h2>
              <p className="sub">Each suits a different way of selling. If you already use one of them, fixing it is usually better than switching. Where none fits, we can build a <Link className="link" href="/services/crm-implementation#custom-crm">custom CRM</Link>.</p>
            </div>
            <div className="plats">
              {platforms.map((p) => p.external
                ? <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" style={c(p.color)}><strong>{p.name}</strong><span>{p.text}</span></a>
                : <Link key={p.name} href={p.href} style={c(p.color)}><strong>{p.name}</strong><span>{p.text}</span></Link>
              )}
            </div>
          </div>
        </section>

        {/* What a CRM won't fix */}
        <section className="sec" id="limits" aria-labelledby="limits-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Being clear about limits</p>
              <h2 id="limits-title">What a better CRM won&apos;t fix.</h2>
              <p className="sub">A good setup makes the pipeline honest and follow-up consistent. Some problems sit outside the software, and we would rather say so up front.</p>
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
              <h2 id="process-title">How a general CRM project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>How you sell today, where enquiries come from, the tools you use and the reports you need.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Design</h3><p>Stages, fields, owners and naming rules agreed and written down before anything is built.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Build and test</h3><p>Pipeline, automation, integrations and data migration, then every path tested with sample records.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training by role, documentation of what was built and why, and optional support once you&apos;re live.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to your CRM, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />Time with the people who sell and follow up</li>
                  <li><Check size={15} aria-hidden="true" />Exports from spreadsheets or your current system</li>
                  <li><Check size={15} aria-hidden="true" />Access to the forms, calendars and tools to connect</li>
                  <li><Check size={15} aria-hidden="true" />A decision maker to agree the stages and sign off</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />A pipeline with clear stages, owners and next steps</li>
                  <li><Check size={15} aria-hidden="true" />Clean, de-duplicated data</li>
                  <li><Check size={15} aria-hidden="true" />Follow-up and nurture automation, tested</li>
                  <li><Check size={15} aria-hidden="true" />Dashboards for the numbers you run on</li>
                  <li><Check size={15} aria-hidden="true" />Written naming rules, documentation and training</li>
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
              <h2 id="conn-title">The work around a general CRM.</h2>
            </div>
            <div className="conn">
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>Setup, cleanup, migration and custom CRMs.</span></Link>
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Decide what the CRM must support before it is built.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>SEO, paid media and email that bring leads in.</span></Link>
              <Link href="/services/white-label" style={c('var(--ink)')}><strong>White-label for agencies</strong><span>CRM builds for your clients, under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">General CRM FAQs</h2>
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
                Figures checked in October 2026 against the original release: <a href={VALIDITY.url} target="_blank" rel="noopener noreferrer">{VALIDITY.name}</a>. Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by the platforms or organisations listed. GoHighLevel work is delivered with <a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer">GHL Scale Up</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--coral)')}></span>Days</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Months</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Years</span>
              </p>
              <h2 id="final-title">Build a CRM your team trusts, not just one it has.</h2>
              <p className="sub">A discovery call looks at how you sell today, the system you have or are considering, and where deals and customers slip away. We&apos;ll tell you plainly where we&apos;d start.</p>
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
