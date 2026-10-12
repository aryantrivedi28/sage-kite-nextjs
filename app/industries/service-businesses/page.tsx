import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries/service-businesses`;
const DESCRIPTION = "CRM setup for photographers, planners, designers and consultants: enquiries, proposals, contracts, payments and onboarding on Dubsado or HoneyBook.";

export const metadata: Metadata = {
  title: "CRM Setup for Client-Based Service Businesses | Sage Kite",
  description: DESCRIPTION,
  keywords: ["CRM for service businesses", "client onboarding automation", "proposal contract invoice workflow", "Dubsado or HoneyBook setup", "CRM for photographers and planners", "client journey automation"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "CRM setup for client-based service businesses | Sage Kite",
    description: "A client journey that runs from enquiry to final invoice without you chasing it. For photographers, planners, designers, consultants and studios.",
  },
  twitter: {
    card: "summary",
    title: "CRM setup for client-based service businesses | Sage Kite",
    description: "A client journey that runs from enquiry to final invoice without you chasing it. For photographers, planners, designers, consultants and studios.",
  },
};

// Platform behaviour described on this page was checked against Dubsado's and
// HoneyBook's own pages on 10 October 2026. Recheck when either platform changes.
const SOURCES = [
  { name: "Dubsado Help Center, Flow actions", url: "https://help.dubsado.com/en/articles/15668756-flow-actions" },
  { name: "HoneyBook Help Center, How to create an automation", url: "https://help.honeybook.com/en/articles/9493889-how-to-create-an-automation" },
  { name: "HoneyBook, Proposal software", url: "https://www.honeybook.com/product/proposal-software" },
  { name: "Dubsado Help Center, Bulk import a client list", url: "https://help.dubsado.com/en/articles/1458403-bulk-import-a-client-list" },
  { name: "HoneyBook Help Center, Add and import contacts", url: "https://help.honeybook.com/en/articles/9242203-add-and-import-contacts-in-honeybook" },
];

// Hero figure: one client across the three timescales.
const journey = [
  { step: "Enquiry form submitted", when: "Day 0", color: "var(--coral)" },
  { step: "Reply with availability and a call link", when: "Day 0", color: "var(--coral)" },
  { step: "Discovery call", when: "Day 3", color: "var(--ink)" },
  { step: "Proposal, contract and deposit together", when: "Day 4", color: "var(--sky)" },
  { step: "Questionnaire, timed to the project date", when: "Week 6", color: "var(--sky)" },
  { step: "Final payment and handover", when: "Month 4", color: "var(--butter)" },
];

const symptoms = [
  { title: "Copy-and-paste onboarding", text: "Every new client means retyping the same details from the enquiry into the proposal, the contract and the invoice." },
  { title: "Proposals that sit unsigned", text: "Nobody notices a proposal has gone quiet until the client mentions they've booked someone else." },
  { title: "Reminders after they've paid", text: "The automation keeps chasing a deposit or a signature that already came in, because nothing tells it to stop." },
  { title: "A workflow nobody dares touch", text: "It was built a few years ago, nobody is sure what half of it does, so the team quietly works around it." },
  { title: "Forms that ask the same question twice", text: "The enquiry form, the questionnaire and the contract each ask for the same address and date." },
  { title: "The final balance chased by hand", text: "Instalment and balance dates live in someone's calendar rather than in the system that sends the invoice." },
];

const clocks = [
  {
    name: "Hours", sub: "The enquiry", color: "var(--coral)", q: "“Are you free, and roughly what does it cost?”",
    automate: "a prompt reply with availability or a pricing guide, a link to book a call, and the enquiry logged with its source",
    human: "the call that works out fit and scope",
    failure: "the reply goes out days later, after they've booked someone who answered first",
  },
  {
    name: "Weeks", sub: "The booking", color: "var(--sky)", q: "“So what do I sign, and what do I pay?”",
    automate: "a proposal, contract and deposit invoice sent together, with reminders that stop once each one is done",
    human: "tailoring the proposal, and answering the question that's actually holding them up",
    failure: "a proposal sits unsigned and nobody notices, or the reminders keep going after they've paid",
  },
  {
    name: "Months", sub: "The project", color: "var(--butter)", q: "“What happens next, and when?”",
    automate: "questionnaires and reminders timed to the project date, instalment and final invoices, and a review request after delivery",
    human: "the work itself, the judgement calls and the handover",
    failure: "a questionnaire goes out at the wrong time because it was timed from the wrong date",
  },
];

// "Automate the sequence. Approve the exceptions." How each kind of step is handled.
const stepTypes = [
  { title: "Automatic: the predictable steps", text: "Confirmations, reminders, tasks and status changes. They're the same for every client, so nobody needs to check them." },
  { title: "Approved: anything client-specific", text: "Proposals, custom quotes and contract variations are prepared by the system, then a person checks them before they go out." },
  { title: "Conditional: the chasers", text: "Reminders for an unsigned contract or an unpaid invoice that stop as soon as the client signs or pays." },
  { title: "Owned: the exceptions", text: "A postponed date, a changed package, a refund. A named person handles it, and the client's workflow is paused or updated to match." },
];

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we set up". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Client journey mapping", color: "var(--butter)", text: "Your real process from enquiry to handover written down step by step, including the exceptions, before anything is built.", tags: ["Process map", "Exceptions"] },
  { title: "Enquiry capture and first reply", color: "var(--coral)", text: "Enquiry forms connected to your website, a prompt first reply, and a way to book a call, with the source of every enquiry recorded.", tags: ["Lead forms", "First reply", "Call booking"] },
  { title: "Proposals, contracts and invoices", color: "var(--sky)", text: "Packages and add-ons set up so a proposal, contract and first invoice can go out together, with the client's details filled in once.", tags: ["Packages", "Contracts", "Invoices"] },
  { title: "Payment schedules and reminders", color: "var(--ink)", text: "Deposits, instalments and final balances scheduled in the system, with reminders that stop once a payment arrives.", tags: ["Deposits", "Instalments", "Reminders"] },
  { title: "Questionnaires and onboarding", color: "var(--sage)", text: "Questionnaires that ask for information once, sent at the right point before the project date, with an onboarding sequence for new clients.", tags: ["Questionnaires", "Onboarding"] },
  { title: "Workflows and automation", color: "var(--sky)", text: "Dubsado flows or HoneyBook automations built around your journey, with approval steps and conditions where a person should check first.", tags: ["Flows", "Approvals", "Conditions"] },
  { title: "Templates and branding", color: "var(--coral)", text: "Email templates and client-facing documents written in your voice and styled to match your brand.", tags: ["Emails", "Documents", "Branding"] },
  { title: "Scheduling and client portal", color: "var(--butter)", text: "Booking links for calls and a client portal where clients can find their documents and invoices, where your platform supports it.", tags: ["Scheduler", "Portal"] },
  { title: "Migration, training and handover", color: "var(--light-sage)", text: "Clients and active projects moved where your current system allows, your team trained, and the setup documented so you own it.", tags: ["Migration", "Training", "Docs"] },
];

const platforms = [
  { name: "Dubsado", href: "/platforms/dubsado", color: "var(--coral)", text: "Configurable forms, flows and branding, with proposals that can bundle a contract and invoice. More building blocks, and more setup." },
  { name: "HoneyBook", href: "/platforms/honeybook", color: "var(--sky)", text: "A more guided client flow with payments built in. Clients can choose services, sign and pay from a single link." },
  { name: "Not sure which?", href: "/blog/dubsado-vs-honeybook", color: "var(--sage)", text: "Our Dubsado vs HoneyBook comparison goes through how each one handles forms, automation, proposals and payments." },
];

const limits = [
  { cause: "A package that changes every time", fix: "If every proposal is built from scratch, the workflow will keep breaking. Settling a small set of packages and add-ons usually helps more than any automation, and we'll say so before building." },
  { cause: "Pricing decisions", fix: "We can make a proposal clear and easy to accept. Whether the price is right for the work is a business decision, and a better system won't make it for you." },
  { cause: "Capacity", fix: "A smoother booking process can bring in more projects. It doesn't create more time to deliver them, so it's worth knowing how many you can take on first." },
  { cause: "Contract wording and terms", fix: "We set up your contracts, payment schedules and policies in the platform. The wording, cancellation and refund terms are for you and your legal adviser to approve." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing and fixing a platform",
    items: [
      { q: "Is Dubsado or HoneyBook better for a service business?", a: "It depends on how you work. Dubsado gives you more building blocks and more control over forms, flows and branding, which suits businesses with a detailed or unusual process. HoneyBook offers a more guided setup with payments built in. If you already use one of them, fixing it is usually better than switching. Our Dubsado vs HoneyBook comparison goes through the differences in detail." },
      { q: "Can you fix our existing Dubsado or HoneyBook setup?", a: "Yes. Common problems are workflows nobody understands any more, reminders that don't stop after a client pays, forms that ask for the same details twice, and old templates still in use. We map how you work today, fix what matters and document how the setup should be used." },
      { q: "Can you move our clients from another system?", a: "Usually. Both platforms can import client and contact lists. We clean the data first and set up active projects so they continue where they left off. What can be moved depends on what your current system can export, which we confirm in discovery." },
    ],
  },
  {
    label: "Proposals and automation",
    items: [
      { q: "Can a proposal, contract and invoice go out together?", a: "Yes, on both platforms. In Dubsado, a proposal can be bundled with a contract and an invoice. In HoneyBook, clients can choose services, sign the contract and pay from a single link. We set up your packages so the right details carry through to each document." },
      { q: "Will automation send the wrong thing to a client?", a: "Not if it's designed with checkpoints. Dubsado lets steps such as sending a contract or invoice wait for manual approval, and HoneyBook automations can branch on conditions and wait for project events. We decide with you which steps run on their own and which should be checked first, then test every path with a sample client." },
      { q: "Will automated emails feel impersonal?", a: "They shouldn't. Emails are written in your voice and reviewed with you before they go live. Automation handles the timing and reminders. The calls, the tailored proposals and the work itself stay with you." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How is a service business CRM project priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function ServiceBusinessesIndustryPage() {
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
        "name": "CRM setup for client-based service businesses | Sage Kite",
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
          { "@type": "ListItem", "position": 3, "name": "Client-based service businesses" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "CRM setup for client-based service businesses",
        "serviceType": "Client-based service business CRM implementation",
        "description": "CRM and client workflow setup for photographers, planners, designers, consultants and studios: client journey mapping, enquiry capture, proposals, contracts and invoices, payment schedules, questionnaires and onboarding, workflows and automation, templates, scheduling and client portal, migration, training and handover, on Dubsado or HoneyBook.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "BusinessAudience", "audienceType": "Photographers" },
          { "@type": "BusinessAudience", "audienceType": "Event and wedding planners" },
          { "@type": "BusinessAudience", "audienceType": "Designers and creative studios" },
          { "@type": "BusinessAudience", "audienceType": "Consultants" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "CRM setup for client-based service businesses",
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
          /* Client-based service businesses industry page, built on the same system as the real estate page */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .sb-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .sb-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .sb-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .sb-hero .sub{margin:20px 0 28px;max-width:54ch}
          .crumbs{display:flex;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .crumbs a{color:inherit;text-decoration:none}
          .crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one client from enquiry to handover */
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

          /* Approvals */
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
            .sb-hero .hero-grid{grid-template-columns:1fr}
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
        <section className="sb-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
              </div>
              <p className="crumbs"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span>Client-based service businesses</span></p>
              <h1 id="hero-title">CRM setup for client-based service businesses, from enquiry to final invoice</h1>
              <p className="sub">
                Each step of a client booking is simple: a reply, a proposal, a contract, a deposit, a questionnaire. Doing all of them by hand, for every client at a different stage, is where things slip. We set up Dubsado or HoneyBook so the steps happen on time, and you only step in where a person should.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your business</Link>
                <Link href="#what-we-set-up" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Photographers, planners, designers, consultants</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Dubsado or HoneyBook</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">One client, enquiry to handover</b><span>Example</span></p>
                <ol className="lsteps">
                  {journey.map((j) => (
                    <li key={j.step} style={c(j.color)}><span className="dot"></span>{j.step}<small>{j.when}</small></li>
                  ))}
                </ol>
              </div>
              <figcaption>Illustrative. Your client journey and timings are mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Where service businesses usually lose time and clients.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">Most of these don&apos;t come from the software. They come from a setup copied from a template, or built once and never revisited as the business changed.</p>
          </div>
        </section>

        {/* Three clocks */}
        <section className="sec" id="three-clocks" aria-labelledby="clocks-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How a client booking works</p>
              <h2 id="clocks-title">A client is won in days and served over months.</h2>
              <p className="sub">The enquiry needs speed. The booking needs paperwork that doesn&apos;t stall. The project needs the right thing sent at the right point before the date.</p>
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
            <p className="after-line">Most of the paperwork sits in the middle clock. Each step is simple on its own. Fifteen of them, across thirty clients at different stages, is where things go missing.</p>
          </div>
        </section>

        {/* Automate the sequence, approve the exceptions */}
        <section className="tint sec" id="approvals" aria-labelledby="approve-title">
          <div className="wrap db-grid">
            <div>
              <div className="head">
                <p className="label">Where automation needs a person</p>
                <h2 id="approve-title">Automate the sequence. Approve the exceptions.</h2>
              </div>
            </div>
            <div className="db-copy">
              <p>In client-based work, the order of steps is predictable but the clients aren&apos;t. Your contract may be the same for everyone. The package, the date and the payment plan often aren&apos;t.</p>
              <p>That&apos;s why fully automatic sending goes wrong: a client gets the wrong proposal, or a deposit reminder after they&apos;ve paid. Both platforms allow checkpoints. In Dubsado, steps such as sending an email, form, contract or invoice can be set to wait for manual approval. HoneyBook automations can branch on conditions, and wait for a set time or a project event before moving on. So the useful question isn&apos;t what can be automated, but which steps should pause for a person.</p>
              <ol className="est" style={c('var(--sky)')}>
                {stepTypes.map((s) => (
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
              <h2 id="setup-title">What a service business CRM setup covers.</h2>
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
              <h2 id="platforms-title">Dubsado or HoneyBook.</h2>
              <p className="sub">Both cover enquiries, proposals, contracts, invoices, payments and automation. The difference is how much you want to build, and how much you want built for you.</p>
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
              <p className="sub">A good setup makes the client journey consistent and visible. Some problems sit outside the software, and we would rather say so up front.</p>
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
              <h2 id="process-title">How a service business CRM project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your packages, how clients find you, and every step from enquiry to handover as it happens today.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Journey map</h3><p>Each step marked as automatic, approved, conditional or owned by a person, agreed before anything is built.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Build and test</h3><p>Forms, documents, payments and workflows, then a sample client taken through every path.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training, documentation of what was built and why, and optional support once you&apos;re live.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to Dubsado or HoneyBook, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />Your packages, prices and payment terms</li>
                  <li><Check size={15} aria-hidden="true" />Your current contract, proposal and email templates</li>
                  <li><Check size={15} aria-hidden="true" />A walk-through of how you handle a client today</li>
                  <li><Check size={15} aria-hidden="true" />Your sign-off on contract wording and policies</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />A documented client journey, from enquiry to handover</li>
                  <li><Check size={15} aria-hidden="true" />Proposals, contracts and invoices that fill in the right details</li>
                  <li><Check size={15} aria-hidden="true" />Payment schedules and reminders that stop when paid</li>
                  <li><Check size={15} aria-hidden="true" />Workflows with approval steps where they matter, tested</li>
                  <li><Check size={15} aria-hidden="true" />Templates in your voice, training and documentation</li>
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
              <h2 id="conn-title">The work around a service business CRM.</h2>
            </div>
            <div className="conn">
              <Link href="/platforms/dubsado" style={c('var(--coral)')}><strong>Dubsado setup</strong><span>Forms, flows, proposals and branding.</span></Link>
              <Link href="/platforms/honeybook" style={c('var(--sky)')}><strong>HoneyBook setup</strong><span>Pipeline, automations and payments.</span></Link>
              <Link href="/blog/dubsado-setup-services" style={c('var(--sage)')}><strong>What Dubsado setup involves</strong><span>The steps, in more detail.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--ink)')}><strong>Specialist staffing</strong><span>A VA to keep the client journey running.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Service business CRM FAQs</h2>
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
                Platform features checked against Dubsado&apos;s and HoneyBook&apos;s own pages in October 2026:{' '}
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
                <span><span className="dot" style={c('var(--coral)')}></span>Hours</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Weeks</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Months</span>
              </p>
              <h2 id="final-title">Build a client journey that doesn&apos;t depend on you remembering it.</h2>
              <p className="sub">A discovery call looks at your packages, the platform you use, and where clients or payments slip through. We&apos;ll tell you plainly where we&apos;d start.</p>
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
