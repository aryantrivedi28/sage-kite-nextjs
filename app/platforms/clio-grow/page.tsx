import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/clio-grow";

export const metadata: Metadata = {
  title: "Clio Grow Setup & Legal Intake Consulting | Sage Kite",
  description: "Clio Grow setup from Sage Kite: intake forms, Lead Inbox, Matter Pipeline, automated follow-up and consultation booking for law firms.",
  keywords: ["Clio Grow consultant", "Clio Grow setup", "legal intake software", "Clio Grow intake forms", "law firm CRM", "Clio Grow automated workflows"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Clio Grow setup and legal intake consulting | Sage Kite",
    description: "Sage Kite sets up Clio Grow around how your firm turns enquiries into clients: intake forms, pipeline, automated follow-up, booking and the hand-off to Clio Manage.",
  },
  twitter: {
    card: "summary",
    title: "Clio Grow setup and legal intake consulting | Sage Kite",
    description: "Clio Grow setup for law firms: Lead Inbox, intake forms, Matter Pipeline, automated workflows, Clio Scheduler and the Clio Manage hand-off.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[]; offered: boolean };

// "What we implement" rows. Offered rows also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Capability[] = [
  { title: "Lead Inbox and lead sources", color: "var(--sage)", offered: true, tags: ["Lead Inbox", "Website forms", "Referral sources"], text: "Your website, directories, call tracking and referral sources connected to the Lead Inbox, with each lead's source recorded so you know what brings in clients." },
  { title: "Intake forms", color: "var(--coral)", offered: true, tags: ["Custom forms", "Practice areas", "Matter fields"], text: "Intake forms for each practice area that collect what a lawyer needs before a consultation, and sync straight into the matter instead of being retyped." },
  { title: "Matter Pipeline", color: "var(--butter)", offered: true, tags: ["Statuses", "Hired", "Not hired"], text: "Pipeline statuses that match your real intake stages, so everyone can see which potential clients are waiting, booked, pending or hired." },
  { title: "Automated workflows", color: "var(--sky)", offered: true, tags: ["Emails", "Forms", "Status changes"], text: "Workflows that send emails, forms and appointment links and change statuses at the right moment, so every enquiry gets the same prompt response." },
  { title: "Consultation booking", color: "var(--ink)", offered: true, tags: ["Clio Scheduler", "Reminders", "Availability"], text: "Clio Scheduler set up with the right consultation types, availability and reminders, so potential clients can book without phone tag." },
  { title: "Engagement and e-signature", color: "var(--coral)", offered: true, tags: ["Templates", "E-signature", "Engagement letters"], text: "Engagement letter templates and e-signature where your Clio plan includes them, so a potential client can be signed without printing or chasing." },
  { title: "Grow AI", color: "var(--sky)", offered: true, tags: ["24/7 enquiries", "Qualifying", "Guardrails"], text: "Clio's Grow AI set up with your practice areas, qualifying questions and booking rules where you use it, with limits so it never gives legal advice." },
  { title: "Clio Manage hand-off", color: "var(--sage)", offered: true, tags: ["Sync", "Contacts", "Matters"], text: "The sync between Clio Grow and Clio Manage checked end to end, so a hired client arrives in Manage with complete contact and matter details." },
  { title: "Reporting and training", color: "var(--ink)", offered: true, tags: ["Conversion", "Lead sources", "Training"], text: "Reports on enquiries, consultations, conversion and lead sources, and training so intake staff and lawyers follow the same process." },
  { title: "Legal judgement and conflict decisions", color: "var(--light-sage)", offered: false, tags: ["Stays with your firm"], text: "We set up the intake process. Legal advice, conflict decisions and compliance with your professional rules stay with your firm." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Clio Grow consulting",
    items: [
      { q: "What does a Clio Grow consultant do?", a: "A Clio Grow consultant sets up Clio Grow around how a law firm turns enquiries into clients: the Lead Inbox and lead sources, intake forms, Matter Pipeline statuses, automated workflows, consultation booking, engagement and the hand-off to Clio Manage. Sage Kite starts by mapping your intake from first contact to signed engagement, then configures Clio Grow to match." },
      { q: "What is the difference between Clio Grow and Clio Manage?", a: "Clio Grow handles client intake and CRM before you are hired: leads, intake forms, the pipeline, follow-up and consultation booking. Clio Manage handles clients and matters after you are hired: documents, time, billing and payments. When both accounts use the same email, contacts and matters sync between them." },
      { q: "Can you fix an existing Clio Grow setup?", a: "Yes. Common issues are default pipeline statuses nobody uses, workflows that were never switched on, intake forms that do not match the practice, lead sources that are not recorded and a hand-off to Clio Manage that still needs retyping. We audit the setup, rebuild what matters and document the intake process." },
      { q: "How long does a Clio Grow project take?", a: "It depends on the number of practice areas, intake forms and workflows, and whether booking, e-signature or Grow AI are in scope. A single practice area with one intake flow is a much smaller project than a multi-practice firm. Your proposal sets out the milestones and dates before work starts." },
    ],
  },
  {
    label: "Scope and setup",
    items: [
      { q: "Can you build our intake forms in Clio Grow?", a: "Yes. We build intake forms for each practice area, asking only what a lawyer needs before a consultation, and map the answers to matter fields so they flow into Clio Manage once the client is hired." },
      { q: "Can you set up automated follow-up in Clio Grow?", a: "Yes. We build automated workflows that respond to new enquiries, send intake forms and booking links, remind potential clients who have not replied, and move matters between pipeline statuses, so no enquiry depends on someone remembering." },
      { q: "Can you set up Grow AI?", a: "Yes, where your Clio plan includes it. We set it up with your practice areas, qualifying questions and booking rules, and with limits so it gathers information and books consultations without giving legal advice." },
      { q: "Does Clio Grow work with Clio Manage?", a: "Yes. Clio Grow is built to work alongside Clio Manage. When both accounts use the same email, contacts and matters sync, so a hired client moves into Manage without retyping. We test that hand-off as part of every setup." },
      { q: "Which Clio plan includes Clio Grow?", a: "Clio includes Grow in some plans and offers it as an add-on on others, and the details change over time, so check the current options with Clio. We help you decide whether the intake features you need justify the plan." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Is Clio Grow available outside the United States?", a: "Yes. Clio Grow is available to law firms in the United States, Canada, the United Kingdom, Ireland and Australia, among other countries. Check with Clio that the features you need are offered in your region." },
      { q: "Is Sage Kite a Clio partner?", a: "Sage Kite is an independent consultant. Clio is a trademark of its owner, and Sage Kite is not a Clio Certified Consultant and is not affiliated with, endorsed by or certified by Clio. We work on your behalf and are paid by you, not by Clio." },
      { q: "What happens after the project?", a: "You own the account and can run it. Handover includes training for intake staff and lawyers and documentation of your forms, pipeline and workflows. Where it helps, Sage Kite offers maintenance with a defined support scope, and a sales support VA to respond to enquiries and book consultations." },
      { q: "Is Sage Kite only a Clio consultant?", a: "No. Sage Kite is a business growth consultancy. Clio Grow is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Clio Grow runs your intake; the broader work decides what to change and brings in the right enquiries." },
    ],
  },
];

// Hero diagram: one illustrative intake journey. `human` marks the step kept with a person.
const journey = [
  { step: "Enquiry lands in Lead Inbox", tool: "Lead Inbox", color: "var(--sky)" },
  { step: "Intake form sent", tool: "Workflow", color: "var(--sky)" },
  { step: "Consultation booked", tool: "Scheduler", color: "var(--sky)" },
  { step: "Consultation with a lawyer", tool: "You", color: "var(--butter)", human: true },
  { step: "Engagement letter signed", tool: "E-sign", color: "var(--coral)" },
  { step: "Marked as hired", tool: "Pipeline", color: "var(--sky)" },
  { step: "Matter created in Manage", tool: "Sync", color: "var(--sage)" },
];

// Clio Grow and Clio Manage side by side. From clio.com and Clio's Help Center, September 2026.
const products = [
  { row: "Covers", grow: "Potential clients, before you are hired", manage: "Clients and matters, after you are hired" },
  { row: "Main tools", grow: "Lead Inbox, intake forms, Matter Pipeline, workflows, Clio Scheduler", manage: "Matters, documents, time tracking, billing and payments" },
  { row: "Hand-off", grow: "Marks a matter as hired", manage: "Receives the contact and matter details" },
  { row: "Our focus", grow: "Intake, follow-up and conversion", manage: "A clean hand-off, so nothing is retyped" },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function ClioGrowPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.sagekite.com/#organization",
        "name": "Sage Kite",
        "url": "https://www.sagekite.com/"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.sagekite.com/platforms/clio-grow/#webpage",
        "url": PAGE_URL,
        "name": "Clio Grow setup and legal intake consulting | Sage Kite",
        "description": "Sage Kite sets up Clio Grow for law firms: Lead Inbox and lead sources, intake forms, Matter Pipeline, automated workflows, consultation booking, engagement and e-signature, Grow AI, the Clio Manage hand-off, reporting and training.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/clio-grow/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/clio-grow/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/clio-grow/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "Clio Grow" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/clio-grow/#service",
        "name": "Clio Grow setup and legal intake consulting",
        "serviceType": "Clio Grow setup, configuration and intake consulting",
        "description": "Law firm intake mapping, Clio Grow Lead Inbox and lead sources, intake forms, Matter Pipeline, automated workflows, Clio Scheduler consultation booking, engagement templates and e-signature, Grow AI setup, the Clio Manage hand-off, reporting, testing, training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "Law firms" },
          { "@type": "Audience", "audienceType": "Solo lawyers and small firms" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in Clio Grow",
          "itemListElement": capabilities.filter((cap) => cap.offered).map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/clio-grow/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/clio-grow/#service" },
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
          /* Clio Grow page additions, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .pl-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .pl-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .pl-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .pl-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          .journey-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .journey-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 16px}
          .jsteps li{display:grid;grid-template-columns:14px minmax(0,1fr) auto;gap:12px;align-items:center;padding:9px 0;position:relative;font-size:.925rem;color:var(--ink);font-weight:600;line-height:1.3}
          .jsteps li:not(:last-child)::after{content:"";position:absolute;left:6.5px;top:28px;height:calc(100% - 20px);width:1px;background:var(--light-sage)}
          .jsteps .dot{width:14px;height:14px;border:2px solid var(--c);background:var(--warm-white)}
          .jsteps li.human .dot{background:var(--butter-soft)}
          .jsteps small{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .journey-fig .key{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:10px;padding-top:12px;border-top:1px dashed var(--light-sage);font-size:.75rem;color:var(--sage);font-weight:600}
          .journey-fig .key span{display:inline-flex;align-items:center;gap:6px}
          .journey-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          .starts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .start{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white);display:flex;flex-direction:column}
          .start h3{font-size:1.45rem;margin-bottom:10px}
          .start > p{font-size:.95rem;line-height:1.5}
          .start ul{margin-top:16px}
          .start li{position:relative;padding:8px 0 8px 20px;font-size:.9rem;line-height:1.45;border-top:1px solid var(--light-sage)}
          .start li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}

          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}
          .cap-row.muted h3,.cap-row.muted p{color:var(--sage)}

          /* Onboarding comparison: two cards whose rows line up (subgrid) */
          .vs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 16px;margin-top:clamp(36px,4vw,52px)}
          .vs-col{display:grid;grid-row:span 6;grid-template-rows:subgrid;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:clamp(22px,3vw,32px);padding-bottom:8px}
          .vs-col.them{background:transparent}
          .vs-col.us{background:var(--warm-white)}
          .vs-k{font-size:.8125rem;font-weight:600;color:var(--sage)}
          .vs-col h3{font-size:1.45rem;margin:2px 0 14px}
          .vs-row{margin:0;border-top:1px solid var(--light-sage);padding:14px 0 16px}
          .vs-row dt{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:4px}
          .vs-row dd{margin:0;font-size:1rem;line-height:1.5;color:var(--dark-sage)}
          .vs-col.us .vs-row dd{color:var(--ink)}
          .compare-note{margin-top:20px;max-width:72ch}

          .flow6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));margin-top:clamp(40px,5vw,64px)}
          .flow6 li{padding-right:18px}
          .flow6 .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
          .flow6 .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
          .flow6 .num{font-weight:700;letter-spacing:-.02em;font-size:2.4rem;line-height:1;color:var(--sage)}
          .flow6 h3{font-size:1.3rem;margin:8px 0 6px}
          .flow6 p{font-size:.9rem;line-height:1.45}

          .two-col,.fit2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
          .panel{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,34px)}
          .panel h3{font-size:1.35rem;margin-bottom:6px}
          .panel-k{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .gets li{display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--light-sage);font-size:.95rem;line-height:1.45;color:var(--ink)}
          .gets svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}
          .fit2 .panel p{font-size:.95rem;line-height:1.55;margin-top:14px}

          .proof-ph{border:1px dashed var(--sage);border-radius:var(--r);padding:clamp(24px,3vw,36px);background:var(--warm-white);box-shadow:10px 10px 0 var(--butter-soft);display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(24px,4vw,56px);align-items:start}
          .proof-ph h2{font-size:clamp(1.6rem,2.6vw,2.1rem)}
          .proof-ph ul li{padding:8px 0;border-top:1px solid var(--light-sage);font-size:.925rem}

          .conn{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:clamp(32px,4vw,44px)}
          .conn a{display:flex;flex-direction:column;gap:6px;border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:20px 20px 22px;background:var(--warm-white);text-decoration:none;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease)}
          .conn a:hover{transform:translateY(-3px);border-color:var(--sage);border-top-color:var(--c)}
          .conn strong{font-size:1.15rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.25}
          .conn span{font-size:.875rem;line-height:1.45}

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

          @media (max-width:1040px){
            .pl-hero .hero-grid{grid-template-columns:1fr}
            .symptoms,.starts{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .flow6{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
            .proof-ph,.faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .journey-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .symptoms,.starts,.two-col,.fit2,.conn{grid-template-columns:1fr}
            .flow6{grid-template-columns:1fr 1fr}
            .vs{grid-template-columns:1fr;gap:16px}
            .vs-col{display:block;grid-row:auto}
          }
        ` }} />

        {/* Hero */}
        <section className="pl-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Platforms / Clio Grow</p>
              <h1 id="hero-title">Clio Grow setup and legal intake consulting</h1>
              <p className="sub">
                Sage Kite sets up Clio Grow around how your firm turns enquiries into clients. We map intake from first contact to signed engagement, then build the forms, pipeline, follow-up and booking to match.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your Clio Grow setup</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Clio Manage hand-off</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="journey-fig" aria-labelledby="journey-title">
              <div className="ui">
                <p className="ui-title"><b id="journey-title">An intake journey in Clio Grow</b><span>Example</span></p>
                <ol className="jsteps">
                  {journey.map((j) => (
                    <li key={j.step} className={j.human ? 'human' : undefined} style={c(j.color)}>
                      <span className="dot"></span>{j.step}<small>{j.tool}</small>
                    </li>
                  ))}
                </ol>
                <p className="key">
                  <span><span className="dot" style={c('var(--sky)')}></span>Automated in Clio</span>
                  <span><span className="dot" style={c('var(--butter)')}></span>Kept with your firm</span>
                </p>
              </div>
              <figcaption>Illustrative. Your intake process is mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Problems */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Most potential clients hire the first firm that responds well. Intake is where firms lose them.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>Enquiries answered too slowly</strong><p>Web and phone enquiries wait hours or days while lawyers are in court or with clients.</p></li>
              <li><strong>Intake by phone tag</strong><p>Details are collected piece by piece over email and calls, then retyped into the matter.</p></li>
              <li><strong>Consultations that go nowhere</strong><p>Nobody follows up after a consultation, so undecided clients quietly go elsewhere.</p></li>
              <li><strong>No idea where clients come from</strong><p>Lead sources are not recorded, so marketing and referral decisions are guesses.</p></li>
              <li><strong>Clio Grow bought, not set up</strong><p>Default pipeline statuses and workflows that were never switched on.</p></li>
              <li><strong>Double entry into Clio Manage</strong><p>Hired clients are retyped into Manage because the hand-off was never set up properly.</p></li>
            </ul>
            <p className="after-line">These are rarely software problems. They come from an intake process that was never written down, so the software has nothing to follow.</p>
          </div>
        </section>

        {/* Starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">Starting on Clio Grow, fixing a setup, or connecting it to Clio Manage.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>New Clio Grow setup</h3>
                <p>You are starting on Clio Grow and want intake right before enquiries arrive.</p>
                <ul>
                  <li>Intake process mapped for each practice area</li>
                  <li>Forms, pipeline statuses and workflows built</li>
                  <li>Consultation booking and reminders set up</li>
                  <li>Intake staff and lawyers trained</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>Clio Grow cleanup</h3>
                <p>You have Clio Grow, but enquiries still slip through and the pipeline is not trusted.</p>
                <ul>
                  <li>Audit of forms, statuses and workflows</li>
                  <li>Lead sources connected and recorded</li>
                  <li>Follow-up after consultations added</li>
                  <li>Reports on conversion and sources</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>Connecting Grow and Manage</h3>
                <p>You use Clio Manage and want intake to flow into it without retyping.</p>
                <ul>
                  <li>Account sync checked and set up</li>
                  <li>Intake fields mapped to matter fields</li>
                  <li>Hired clients tested end to end</li>
                  <li>One documented process across both</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What we implement */}
        <section className="rule sec" id="what-we-implement" aria-labelledby="impl-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What we implement</p>
              <h2 id="impl-title">What Clio Grow setup covers.</h2>
              <p className="sub">Some features depend on your Clio plan. We confirm what yours includes during discovery.</p>
            </div>
            <div className="cap-list">
              {capabilities.map((cap) => (
                <div key={cap.title} className={cap.offered ? 'cap-row' : 'cap-row muted'} style={c(cap.color)}>
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

        {/* Clio Grow and Clio Manage */}
        <section className="pale sec" id="grow-and-manage" aria-labelledby="gm-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Clio Grow and Clio Manage</p>
              <h2 id="gm-title">Grow handles intake. Manage takes over once you are hired.</h2>
              <p className="sub">They are separate Clio products that sync with each other. Getting the hand-off right is where many setups fall down.</p>
            </div>
            <div className="vs">
              <div className="vs-col us" style={c('var(--coral)')}>
                <p className="vs-k">Before you are hired</p>
                <h3>Clio Grow</h3>
                {products.map((o) => (
                  <dl className="vs-row" key={o.row}><dt>{o.row}</dt><dd>{o.grow}</dd></dl>
                ))}
              </div>
              <div className="vs-col them" style={c('var(--light-sage)')}>
                <p className="vs-k">After you are hired</p>
                <h3>Clio Manage</h3>
                {products.map((o) => (
                  <dl className="vs-row" key={o.row}><dt>{o.row}</dt><dd>{o.manage}</dd></dl>
                ))}
              </div>
            </div>
            <p className="compare-note note">
              Which Clio plans include Clio Grow changes over time, so confirm it with Clio. Current plans are on <a className="link" href="https://www.clio.com/pricing/" target="_blank" rel="noopener noreferrer">Clio&apos;s pricing page</a>.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a Clio Grow project runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your practice areas, intake team, current setup and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Intake map</h3><p>Forms, statuses, follow-up and booking rules agreed.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Lead sources, forms, pipeline, workflows and the Manage sync.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Test enquiries run from first contact to a matter in Manage.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Training for intake staff and lawyers, and optional maintenance.</p></li>
            </ol>
          </div>
        </section>

        {/* Access and deliverables */}
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
                  <li><Check size={15} aria-hidden="true" />Admin access to Clio Grow, and Clio Manage if you use it</li>
                  <li><Check size={15} aria-hidden="true" />Your practice areas and current intake questions</li>
                  <li><Check size={15} aria-hidden="true" />Where your enquiries come from today</li>
                  <li><Check size={15} aria-hidden="true" />Engagement letter templates and consultation types</li>
                  <li><Check size={15} aria-hidden="true" />One lawyer who signs off the intake process</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Every enquiry source landing in the Lead Inbox</li>
                  <li><Check size={15} aria-hidden="true" />Intake forms for each practice area</li>
                  <li><Check size={15} aria-hidden="true" />Pipeline statuses that match your process</li>
                  <li><Check size={15} aria-hidden="true" />Automated follow-up and consultation booking</li>
                  <li><Check size={15} aria-hidden="true" />A tested hand-off into Clio Manage</li>
                  <li><Check size={15} aria-hidden="true" />Training and a written intake process</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is Clio Grow right for you?</p>
              <h2 id="fit-title">Clio Grow suits firms that take on new clients from enquiries.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Solo lawyers and small to mid-sized firms that use or plan to use Clio Manage, especially consumer-facing practices such as family, personal injury, criminal defence, immigration and estate planning, where many enquiries arrive and speed of response matters.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Worth comparing first</h3>
                <p>Firms that win most work through long relationships and business development across many partners may need a general CRM such as <Link className="link" href="/platforms/hubspot">HubSpot</Link> alongside their practice management system. If you do not use Clio, compare intake tools that connect to your system. Discovery is where we tell you honestly which way we would go.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialist experience: placeholder until approved, attributed examples exist */}
        <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="proof-title">
          <div className="wrap">
            <div className="proof-ph">
              <div>
                <p className="label">Specialist experience</p>
                <h2 id="proof-title">Previous Clio work by a Sage Kite delivery specialist</h2>
              </div>
              <div>
                <p className="note" style={{ marginBottom: '10px' }}>Examples are being prepared. We publish only approved, attributed work. Each example will show:</p>
                <ul>
                  <li>Specialist role and what they built</li>
                  <li>Project context and delivery period</li>
                  <li>Screenshots with client details removed</li>
                  <li>Results only where there is evidence for them</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Where Clio Grow sits */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where Clio Grow sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">Clio Grow runs your intake. The work around it decides what to change and brings in the right enquiries. See how this fits <Link className="link" href="/industries/law-firms">law firms</Link>.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Which practice areas and referral sources to grow first.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>Local SEO and Google Ads that bring in qualified enquiries.</span></Link>
              <Link href="/services/specialist-staffing#lead-generation-va" style={c('var(--ink)')}><strong>Sales support VA</strong><span>Someone to respond to enquiries and book consultations.</span></Link>
              <Link href="/for-agencies" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>Clio Grow work for your law firm clients, under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Clio Grow consulting FAQs</h2>
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
              <p className="trust-note">Sage Kite is an independent consultant. Clio and Clio Grow are trademarks of their owner. Sage Kite is not affiliated with, endorsed by or certified by Clio.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Enquiries</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Clio Grow</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Lawyers</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Clients</span>
              </p>
              <h2 id="final-title">Build Clio Grow around how your firm takes on clients.</h2>
              <p className="sub">A discovery call looks at your intake today, where enquiries are being lost, and what a fixed-scope project would cover.</p>
              <div className="cta-row">
                <Link href="/book" className="btn">Book a discovery call</Link>
                <Link href="/platforms" className="link">See other platforms we implement</Link>
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
