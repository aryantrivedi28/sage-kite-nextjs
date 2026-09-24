import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/lofty";

export const metadata: Metadata = {
  title: "Lofty CRM Services for Real Estate | Sage Kite",
  description: "Lofty CRM services from Sage Kite: we implement Lofty (formerly Chime) for real-estate agents, teams and brokerages, from routing to Smart Plans and AI.",
  keywords: ["Lofty CRM", "Lofty CRM services", "Lofty setup", "Chime CRM", "real estate CRM", "Lofty Smart Plans"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Lofty CRM services for real estate | Sage Kite",
    description: "Sage Kite implements Lofty around how agents, teams and brokerages generate and convert leads: database, routing, Smart Plans, AI and reporting.",
  },
  twitter: {
    card: "summary",
    title: "Lofty CRM services for real estate | Sage Kite",
    description: "Process-first Lofty implementation for real estate: database, lead routing, Smart Plans, AI Workforce, transactions and reporting.",
  },
};

type Card = { title: string; text: string; color: string };

// "What we implement" cards. Also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Card[] = [
  { title: "Account setup & data migration", color: "var(--sage)", text: "Account and user setup, and your database migrated and organised with tags, stages, sources and owners so it can actually be worked." },
  { title: "Lead sources, IDX & capture", color: "var(--sky)", text: "IDX website and lead sources connected, so leads land in the CRM with their property activity attached." },
  { title: "Lead routing & scoring", color: "var(--coral)", text: "Routing rules that get each lead to the right agent fast, and dynamic scoring so agents work the hottest leads first." },
  { title: "Smart Plans & nurture", color: "var(--butter)", text: "Automated, multi-channel Smart Plans built for distinct situations rather than one generic sequence for everyone." },
  { title: "Buyer & seller follow-up", color: "var(--sage)", text: "Separate journeys for buyers and sellers, with property alerts, valuation follow-up and the right cadence for each." },
  { title: "AI Workforce configuration", color: "var(--sky)", text: "Lofty's AI set up within limits you control — what it does on its own, what needs approval, and how it sounds." },
  { title: "Communication & dialer", color: "var(--coral)", text: "Power dialer, text and email set up so agents can work a call list and keep every touch on the lead record." },
  { title: "Transaction & pipeline", color: "var(--butter)", text: "Pipeline stages and transaction management so opportunities move from appointment to closing without falling through gaps." },
  { title: "Reporting, training & handover", color: "var(--ink)", text: "Reporting on sources, conversion and agent activity, then training and documentation so the team adopts it." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Lofty CRM services",
    items: [
      { q: "What are Lofty CRM services?", a: "Lofty CRM services configure Lofty around how a real-estate business generates, manages and converts leads: database migration and structure, lead sources and IDX capture, lead routing and scoring, Smart Plans, buyer and seller follow-up, the AI Workforce, communication, transaction pipeline, reporting and team setup. Sage Kite maps your lead-to-close process first, then builds Lofty to match, tests it and hands it over with training." },
      { q: "What does a Lofty specialist do?", a: "A Lofty specialist designs how the platform should reflect your real-estate business, then configures it and builds the automation behind it: lead routing that gets new leads to the right agent fast, Smart Plans that nurture buyers and sellers differently, dynamic scoring so agents work the hottest leads, and an AI Workforce set up to act within limits you control. The goal is a system agents actually use, not a database that goes stale." },
      { q: "Isn't Lofty's own onboarding enough?", a: "Lofty's onboarding gets your account switched on — IDX feed, lead sources, and the basics. It is genuinely useful, and we build on top of it rather than replacing it. The gap it tends to leave is the business design: routing and Smart Plans mapped to how you actually work, buyer and seller journeys, sensible AI-autonomy settings, and agent adoption. Most teams pay for far more of Lofty than they use; closing that gap is where a specialist earns their fee." },
      { q: "Can Sage Kite set up a new Lofty account?", a: "Yes. A new setup starts by mapping your lead sources and your buyer and seller journeys, then structuring the database, configuring lead routing and scoring, building Smart Plans, connecting IDX and communication, configuring the AI Workforce, and testing the flow before your agents rely on it." },
      { q: "Can you optimise an existing Lofty account?", a: "Yes. Many engagements are existing Chime or Lofty accounts that have drifted: a database imported with no structure, Smart Plans half-built, routing that misfires and agents who have quietly stopped using it. We audit what is there, restructure it, rebuild the Smart Plans and routing that matter, and focus on getting the team back to using it." },
    ],
  },
  {
    label: "Scope and configuration",
    items: [
      { q: "Can you migrate my database into Lofty?", a: "Usually. Moving contacts from another real-estate CRM or a spreadsheet into Lofty is common, and the value is in how the data is structured on arrival — tags, stages, lead sources and owners — not just that it moved. Feasibility depends on what your current system can export, which we confirm in discovery, then clean and organise as part of the migration." },
      { q: "Can you set up Lofty Smart Plans?", a: "Yes, and this is central to a good Lofty setup. Smart Plans are Lofty's automated, multi-channel follow-up sequences across email, text, calls and more. We design them around real lead behaviour — a new buyer lead, a seller weighing a valuation, a long-term sphere contact, a past client — so the right message goes out at the right time rather than one generic drip for everyone." },
      { q: "Can you configure lead routing and scoring?", a: "Yes. Lead routing decides which agent gets a new lead and how fast, which in real estate is often the difference between a booked appointment and a cold lead. We configure routing rules to match your team, and set up Lofty's dynamic scoring so agents can see who is actually ready to transact." },
      { q: "Can you set up Lofty for a team or brokerage?", a: "Yes. Teams need routing, shared processes, performance tracking and accountability; brokerages need standardised setup across many agents, centralised reporting and onboarding that scales. We configure Lofty differently for each, and put the emphasis on the thing both struggle with most — getting every agent to actually use it." },
      { q: "Can you configure the Lofty AI Workforce?", a: "Yes. Lofty's AI can respond to new leads, qualify them and book appointments, but only well if its boundaries are set deliberately — what it is allowed to do on its own, what needs an agent's approval, and how it should sound. We configure that so the AI helps rather than sending the wrong message in your name." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Is Lofty available in my country?", a: "Lofty is built for real estate in the United States and Canada, where it connects to MLS data for IDX and property search. If you are outside those markets, Lofty is unlikely to be the right platform, and we can recommend and implement one that fits your region as part of the consultancy." },
      { q: "Is Lofty right for my business?", a: "Lofty is a premium, all-in-one platform that rewards businesses running real lead volume — established agents, teams and brokerages, especially those buying leads and following up at scale. If you are a newer agent on a tight budget, or you mainly need clean follow-up rather than lead generation and IDX, a lighter real-estate CRM such as Follow Up Boss may fit better, and we implement that too. Discovery is where we tell you honestly which way we would go." },
      { q: "Is Sage Kite a Lofty partner?", a: "Sage Kite is an independent implementation partner. Lofty is a trademark of its owner; Sage Kite is not a Lofty Certified Success Partner and is not affiliated with or certified by Lofty. We implement the platform on your behalf and are paid by you, not by Lofty." },
      { q: "What happens after implementation?", a: "You own the account and can run it. Handover includes training for agents and admins and documentation of how it is set up. Where it helps, Sage Kite offers maintenance with a defined support scope, further work as your team grows, and the wider marketing, lead generation and staffing that keep the pipeline full." },
      { q: "Is Sage Kite only a Lofty agency?", a: "No. Sage Kite is a business growth consultancy. Lofty is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Lofty runs your lead-to-close process; the broader work decides what to change and creates the demand that flows through it." },
    ],
  },
];

export default function LoftyPage() {
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
        "@id": "https://www.sagekite.com/platforms/lofty/#webpage",
        "url": PAGE_URL,
        "name": "Lofty CRM services for real estate | Sage Kite",
        "description": "Sage Kite implements Lofty around how real-estate agents, teams and brokerages generate and convert leads: database, lead routing, scoring, Smart Plans, buyer and seller follow-up, AI and reporting.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/lofty/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/lofty/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/lofty/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "Lofty" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/lofty/#service",
        "name": "Lofty CRM services for real estate",
        "serviceType": "Lofty CRM setup, configuration and implementation",
        "description": "Real-estate process mapping, Lofty account setup and database migration, lead sources and IDX capture, lead routing and dynamic scoring, Smart Plans and automated nurture, buyer and seller follow-up, AI Workforce configuration, communication and power dialer, transaction management, reporting, team and brokerage setup, testing, training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        // Lofty only operates in the US and Canada (see FAQ), so this service is scoped to those two markets.
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "Real estate agents" },
          { "@type": "Audience", "audienceType": "Real estate teams" },
          { "@type": "Audience", "audienceType": "Real estate brokerages" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in Lofty",
          "itemListElement": capabilities.map((c) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": c.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/lofty/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/lofty/#service" },
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
          /* Lofty page additions, built from the approved homepage system */
          .crumbs{padding:18px 0 0;font-size:.85rem}
          .crumbs ol{display:flex;flex-wrap:wrap;gap:8px;align-items:center;color:var(--sage)}
          .crumbs a{text-decoration:none;font-weight:500}
          .crumbs a:hover{text-decoration:underline;text-decoration-color:var(--coral);text-underline-offset:4px}
          .crumbs li:not(:last-child)::after{content:"/";margin-left:8px;color:var(--light-sage)}
          .crumbs [aria-current]{color:var(--ink);font-weight:600}

          .plat-hero{padding:clamp(16px,3vw,32px) 0 clamp(72px,9vw,112px)}
          .plat-hero h1{font-size:clamp(2.5rem,5vw,4.1rem);line-height:1.02;letter-spacing:-.025em;max-width:15ch}
          .plat-hero .sub{margin:24px 0 34px;max-width:52ch}
          .ribbon-dashes{display:flex;gap:8px;margin-bottom:16px}
          .ribbon-dashes span{width:24px;height:6px;border-radius:4px;background:var(--c)}

          .checklist{background:var(--pale-sage);border-radius:var(--r);padding:clamp(24px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%);align-self:start;margin:0}
          .checklist .ui{box-shadow:8px 8px 0 var(--light-sage);background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:18px 20px}
          .ui-title{display:flex;justify-content:space-between;align-items:baseline;font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:12px}
          .ui-title b{font-weight:600;color:var(--ink);font-size:.95rem}
          .check{list-style:none;margin:0;padding:0}
          .check li{display:flex;gap:10px;align-items:flex-start;padding:9px 0;font-size:.925rem;color:var(--ink);border-bottom:1px solid var(--pale-sage)}
          .check li:last-child{border-bottom:0}
          .check svg{flex:0 0 auto;margin-top:3px;color:var(--sage)}
          .check span{font-size:.8125rem;color:var(--sage);margin-left:auto;white-space:nowrap}
          .checklist figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          .sec{padding:clamp(64px,8vw,104px) 0}
          .sub-wide{max-width:60ch;margin-top:20px}

          .fit-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:clamp(36px,4vw,52px)}
          .fit{border:1px solid var(--light-sage);border-left:5px solid var(--c);border-radius:var(--r);padding:20px 22px;background:var(--warm-white)}
          .fit strong{display:block;font-weight:700;letter-spacing:-.01em;font-size:1.2rem;color:var(--ink);line-height:1.25;margin-bottom:4px}
          .fit p{font-size:.9rem;line-height:1.45}
          .fit-note{margin-top:24px}

          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage);list-style:none;padding:0}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;font-size:.95rem;color:var(--ink);line-height:1.4}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem}

          .journey{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);margin:clamp(36px,4vw,52px) 0 0}
          .journey .ui-title{margin-bottom:32px}
          .track{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:28px 10px;position:relative;list-style:none;padding:0;margin:0}
          .track li{text-align:center;position:relative}
          .track li::before{content:"";position:absolute;top:15px;left:50%;width:calc(100% + 10px);height:1px;background:var(--sage);z-index:0}
          .track li:nth-child(5)::before, .track li:last-child::before{display:none}
          .track li:nth-child(6){grid-column-start:2}
          .track .d{display:block;width:12px;height:12px;border-radius:50%;background:var(--warm-white);border:1px solid var(--sage);margin:9px auto 12px;position:relative;z-index:1}
          .track li.auto .d{background:var(--sky-soft);border-color:var(--sky)}
          .track li.human .d{background:var(--butter-soft);border-color:var(--butter)}
          .track strong{display:block;font-weight:700;letter-spacing:-.01em;font-size:1rem;color:var(--ink);line-height:1.2}
          .track small{display:block;font-size:.75rem;color:var(--sage);margin-top:3px}
          .key{display:flex;flex-wrap:wrap;gap:10px 22px;margin:26px 0 0;padding-top:18px;border-top:1px dashed var(--light-sage);font-size:.85rem}
          .key span{display:inline-flex;align-items:center;gap:8px}
          .key .d{display:inline-block;width:10px;height:10px;border-radius:50%}
          .key .d.auto{background:var(--sky-soft);border:1px solid var(--sky)}
          .key .d.human{background:var(--butter-soft);border:1px solid var(--butter)}

          .impl-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:clamp(36px,4vw,52px)}
          .impl{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:22px 22px 24px;background:var(--warm-white);transition:transform var(--t) var(--ease)}
          .impl:hover{transform:translateY(-3px)}
          .impl h3{font-size:1.3rem;margin-bottom:8px}
          .impl p{font-size:.9rem;line-height:1.5}

          .paths{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .path-card{border:1px solid var(--light-sage);border-radius:var(--r);padding:28px 28px 30px;background:var(--warm-white)}
          .path-card h3{font-size:1.6rem;margin-bottom:10px}
          .path-card ul{margin-top:14px;list-style:none;padding:0}
          .path-card li{padding:8px 0 8px 20px;position:relative;font-size:.925rem;line-height:1.45;border-top:1px solid var(--light-sage)}
          .path-card li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}

          .why-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:start}
          .why-list{list-style:none;padding:0;margin:0}
          .why-list li{display:grid;grid-template-columns:34px minmax(0,1fr);gap:14px;padding:16px 0;border-top:1px solid var(--light-sage);font-size:.975rem;line-height:1.5}
          .why-list b{font-weight:700;font-size:1.15rem;color:var(--sage)}
          .why-list strong{color:var(--ink);font-weight:600}

          .partner{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,4fr);gap:clamp(28px,5vw,64px);align-items:center;border:1px solid var(--light-sage);border-left:6px solid var(--sage);border-radius:var(--r);padding:clamp(28px,4vw,48px)}
          .partner h2{font-size:clamp(1.8rem,3vw,2.5rem)}
          .partner .sub{margin-top:14px;font-size:1rem}
          .cta-col{display:flex;flex-direction:column;align-items:flex-start;gap:14px}

          .runs-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:40px 24px;margin-top:clamp(36px,4vw,52px);list-style:none;padding:0}
          .run-step{display:flex;flex-direction:column}
          .run-bar{height:4px;background:var(--light-sage);margin-bottom:20px;display:flex}
          .run-bar::before{content:"";width:35%;height:100%;background:var(--c)}
          .run-step .num{font-size:2.4rem;color:var(--sage);line-height:1;margin-bottom:12px;font-weight:700;letter-spacing:-.02em}
          .run-step h3{font-size:1.35rem;margin-bottom:10px}
          .run-step p{font-size:.925rem;line-height:1.45}

          .deliver{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 clamp(28px,4vw,64px);margin-top:clamp(32px,4vw,44px);list-style:none;padding:0}
          .deliver li{display:flex;gap:12px;align-items:flex-start;padding:14px 0;border-top:1px solid var(--light-sage);font-size:.975rem;line-height:1.45}
          .deliver svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}

          .stack{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px;margin-top:clamp(32px,4vw,48px);align-items:stretch;list-style:none;padding:0}
          .stack li{background:var(--warm-white);border:1px solid var(--light-sage);border-top:4px solid var(--c);border-radius:var(--r);padding:16px 14px;text-align:center;font-size:.9rem;font-weight:600;color:var(--ink);display:flex;align-items:center;justify-content:center;line-height:1.3}
          .stack li a{text-decoration:none}
          .stack li a:hover{text-decoration:underline;text-decoration-color:var(--coral);text-underline-offset:4px}
          .stack-note{margin-top:22px;max-width:70ch;font-size:.975rem}

          .related{display:flex;flex-wrap:wrap;gap:10px 14px;margin-top:22px}
          .mid-cta{display:flex;flex-wrap:wrap;align-items:center;gap:18px 28px;margin-top:clamp(32px,4vw,44px)}
          .trust-note{margin-top:28px;font-size:.85rem;color:var(--sage);max-width:70ch}
          .faq-grid{display:grid}
          .faq-title{font-size:clamp(1.6rem,2.6vw,2.1rem)}

          @media (max-width:1040px){
            .fit-grid,.symptoms,.impl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
            .track{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:22px}
            .track li::before{display:none}
            .track li:nth-child(6){grid-column-start:auto}
            .why-grid,.partner{grid-template-columns:1fr}
            .stack{grid-template-columns:repeat(3,minmax(0,1fr))}
            .runs-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .fit-grid,.symptoms,.impl-grid,.paths,.deliver,.runs-grid{grid-template-columns:1fr}
            .track{grid-template-columns:repeat(2,minmax(0,1fr))}
            .stack{grid-template-columns:repeat(2,minmax(0,1fr))}
            .checklist{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .mid-cta .btn{width:100%}
          }
        ` }} />

        {/* Hero */}
        <section className="plat-hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="ribbon-dashes" aria-hidden="true">
              <span style={{ '--c': 'var(--coral)' } as React.CSSProperties}></span>
              <span style={{ '--c': 'var(--butter)' } as React.CSSProperties}></span>
              <span style={{ '--c': 'var(--sky)' } as React.CSSProperties}></span>
            </div>


            <div className="hero-grid" style={{ marginTop: '24px' }}>
              <div className="hero-copy">
                <p className="label">Platforms / Lofty</p>
                <h1 id="hero-title">Lofty CRM services for real estate</h1>
                <p className="sub">
                  Sage Kite implements Lofty &mdash; the real-estate platform formerly known as Chime &mdash; around how agents, teams and brokerages actually generate, route and convert leads: database, Smart Plans, buyer and seller follow-up, AI and reporting, configured and handed over.
                </p>
                <div className="cta-row">
                  <Link href="/contact" className="btn">Talk to a Lofty specialist</Link>
                  <Link href="#implement" className="link">See what&apos;s included</Link>
                </div>
              </div>

              <figure className="checklist" aria-labelledby="chk-title">
                <div className="ui">
                  <p className="ui-title"><b id="chk-title">Configured Lofty account</b><span>Example scope</span></p>
                  <ul className="check">
                    <li><Check size={15} aria-hidden="true" /> Database migrated and organised <span>Data</span></li>
                    <li><Check size={15} aria-hidden="true" /> Lead sources and IDX connected <span>Leads</span></li>
                    <li><Check size={15} aria-hidden="true" /> Lead routing and dynamic scoring <span>Routing</span></li>
                    <li><Check size={15} aria-hidden="true" /> Smart Plans for buyers and sellers <span>Nurture</span></li>
                    <li><Check size={15} aria-hidden="true" /> AI Workforce configured within limits <span>AI</span></li>
                    <li><Check size={15} aria-hidden="true" /> Reporting and team setup <span>Reporting</span></li>
                  </ul>
                </div>
                <figcaption>Illustrative scope. Final scope is agreed in your proposal.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="rule sec" id="who" aria-labelledby="who-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Who it&apos;s for</p>
              <h2 id="who-title">Lofty is built for real-estate agents, teams and brokerages.</h2>
              <p className="sub">We implement Lofty CRM for real estate &mdash; individual agents, growing teams and brokerages &mdash; around the way each one captures leads, follows up and converts them into closings.</p>
            </div>
            <div className="fit-grid">
              <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><strong>Individual agents</strong><p>A personal database, buyer and seller Smart Plans and follow-up that runs without living in a spreadsheet.</p></div>
              <div className="fit" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><strong>Growing teams</strong><p>Lead routing, shared processes, performance tracking and accountability across several agents.</p></div>
              <div className="fit" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><strong>Brokerages</strong><p>Standardised setup across many agents, centralised reporting and onboarding that scales.</p></div>
              <div className="fit" style={{ '--c': 'var(--butter)' } as React.CSSProperties}><strong>Buyer-focused teams</strong><p>Property alerts, listing-to-lead matching and nurture tuned to where a buyer is in their search.</p></div>
              <div className="fit" style={{ '--c': 'var(--ink)' } as React.CSSProperties}><strong>Listing &amp; seller-focused</strong><p>Seller-intent signals and valuation follow-up, with nurture built around winning the listing.</p></div>
              <div className="fit" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><strong>Switching from another CRM</strong><p>Migrating a database off another real-estate CRM and rebuilding the follow-up properly on arrival.</p></div>
            </div>
            <p className="note fit-note">
              Lofty is a premium, all-in-one platform built for real estate in the United States and Canada, and it rewards businesses running real lead volume. If you are a newer agent on a tight budget, or you mainly need clean follow-up rather than lead generation and IDX, a lighter real-estate CRM such as <Link href="/platforms/follow-up-boss" className="link">Follow Up Boss</Link> may fit better &mdash; and we implement that too. See our <Link href="/industries/real-estate" className="link">real estate</Link> work.
            </p>
          </div>
        </section>

        {/* The problem */}
        <section className="pale sec" id="problem" aria-labelledby="problem-title">
          <div className="wrap">
            <div className="head">
              <p className="label">The problem</p>
              <h2 id="problem-title">When a powerful platform becomes an expensive database.</h2>
            </div>
            <ul className="symptoms">
              <li>The old database was imported with no structure, so nothing can be segmented.</li>
              <li>Portal and website leads are not routed fast, and the first-to-respond advantage is lost.</li>
              <li>Smart Plans were never really built, so leads go cold between manual follow-ups.</li>
              <li>The AI was switched on at its defaults and now sends messages that do not sound like you.</li>
              <li>Agents have quietly gone back to their phones and sticky notes.</li>
              <li>You are paying for a full platform and using a fraction of it.</li>
            </ul>
            <p className="after-line">Lofty is a capable platform, and its onboarding gets you started. The gap is usually the business design: routing, Smart Plans and journeys built around how your team actually works &mdash; and getting agents to use them.</p>
          </div>
        </section>

        {/* Our approach */}
        <section className="sec" id="approach" aria-labelledby="approach-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Our approach</p>
              <h2 id="approach-title">We build the system around the business, not the other way around.</h2>
              <p className="sub sub-wide">We map how a lead becomes a client in your business &mdash; where leads come from, how fast they are worked, how buyers and sellers are nurtured differently &mdash; then configure Lofty&apos;s routing, scoring, Smart Plans and AI to fit, rather than leaving the platform at its defaults.</p>
            </div>

            <figure className="journey" aria-labelledby="journey-title">
              <p className="ui-title"><b id="journey-title">A typical lead-to-close journey in Lofty</b><span>Mapped before anything is built</span></p>
              <ol className="track">
                <li className="auto"><span className="d"></span><strong>Lead</strong><small>IDX / ads</small></li>
                <li className="auto"><span className="d"></span><strong>Route</strong><small>To agent</small></li>
                <li className="auto"><span className="d"></span><strong>Score</strong><small>Dynamic</small></li>
                <li className="auto"><span className="d"></span><strong>Nurture</strong><small>Smart Plan</small></li>
                <li className="human"><span className="d"></span><strong>Appointment</strong><small>Agent</small></li>
                <li className="human"><span className="d"></span><strong>Offer</strong><small>Agent</small></li>
                <li className="auto"><span className="d"></span><strong>Transaction</strong><small>Pipeline</small></li>
                <li className="human"><span className="d"></span><strong>Close</strong><small>Agent</small></li>
                <li className="auto"><span className="d"></span><strong>Repeat</strong><small>Sphere plan</small></li>
              </ol>
              <p className="key">
                <span><span className="d auto"></span>Automated where it should be</span>
                <span><span className="d human"></span>Done by your agents</span>
              </p>
            </figure>
            <p className="after-line"><strong>Smart Plans</strong> are the heart of it. Rather than one generic drip, we build separate plans for the situations that matter &mdash; a new buyer lead, a seller weighing a valuation, a long-term sphere contact, a past client for repeat and referral business &mdash; so the follow-up matches the lead, and agents step in when there is a real conversation to have.</p>
          </div>
        </section>

        {/* What we implement */}
        <section className="rule sec" id="implement" aria-labelledby="impl-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What we implement</p>
              <h2 id="impl-title">What Lofty CRM services cover.</h2>
            </div>
            <div className="impl-grid">
              {capabilities.map((c) => (
                <article className="impl" key={c.title} style={{ '--c': c.color } as React.CSSProperties}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
            <div className="mid-cta">
              <Link href="/contact" className="btn">Discuss your Lofty setup</Link>
              <span className="note">Scope, exclusions and a fixed project price are agreed before any build starts.</span>
            </div>
          </div>
        </section>

        {/* Agents, teams and brokerages */}
        <section className="rule sec" id="segments" aria-labelledby="segments-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Agents, teams and brokerages</p>
              <h2 id="segments-title">How the implementation differs by size.</h2>
              <p className="sub">The platform is the same; what it needs to do is not. We configure Lofty differently depending on who is using it and how the business is structured.</p>
            </div>
            <div className="impl-grid">
              <article className="impl" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><h3>For individual agents</h3><p>The priority is a database that works without a team behind it: buyer and seller Smart Plans, sphere and past-client follow-up, clear daily tasks and a pipeline you can see at a glance. The AI takes the first touch so leads are never left waiting, and the setup is kept simple enough to run alone.</p></article>
              <article className="impl" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><h3>For teams</h3><p>Now routing and accountability matter. We set up lead distribution to the right agent, shared Smart Plans so every lead gets the same standard of follow-up, and performance reporting so the team lead can see who is working leads and who is not. The hard part is adoption, so training is built around how agents actually work.</p></article>
              <article className="impl" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><h3>For brokerages</h3><p>The problem becomes standardisation across many agents and locations: a consistent account structure, centralised reporting, lead distribution rules, and an onboarding pattern new agents can be brought into quickly. The goal is operational visibility for leadership without adding admin to every agent&apos;s day.</p></article>
            </div>
            <div className="mid-cta">
              <Link href="/contact" className="btn">Talk to a Lofty specialist</Link>
              <span className="note">Agent, team or brokerage &mdash; we start by understanding how you work.</span>
            </div>
          </div>
        </section>

        {/* Buyer and seller journeys */}
        <section className="pale sec" id="journeys" aria-labelledby="journeys-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Buyer &amp; seller journeys</p>
              <h2 id="journeys-title">Buyers and sellers are followed up differently.</h2>
              <p className="sub">A single nurture sequence treats a first-time buyer and a homeowner weighing a sale the same way. We build them as separate journeys in Lofty.</p>
            </div>
            <div className="paths">
              <article className="path-card" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Buyer journey</h3>
                <p>From a property enquiry to keys in hand, kept warm by relevance rather than volume.</p>
                <ul>
                  <li>Lead captured with the property and search that prompted it</li>
                  <li>Scored and routed, with an immediate first touch</li>
                  <li>Property alerts and a buyer Smart Plan matched to their search</li>
                  <li>Appointment, offer and transaction tracked to closing</li>
                  <li>Moved to a past-client plan for repeat and referral business</li>
                </ul>
              </article>
              <article className="path-card" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Seller journey</h3>
                <p>From a valuation enquiry or a seller-intent signal to a won listing.</p>
                <ul>
                  <li>Lead captured, or surfaced from the database by seller intent</li>
                  <li>Valuation and market information as the opening conversation</li>
                  <li>A seller Smart Plan that nurtures toward a listing appointment</li>
                  <li>Listing, transaction and closing managed in the pipeline</li>
                  <li>Long-term nurture for the next move and referrals</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* New vs existing */}
        <section className="sec" id="paths" aria-labelledby="paths-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Two starting points</p>
              <h2 id="paths-title">A new Lofty build, or fixing an existing account.</h2>
            </div>
            <div className="paths">
              <article className="path-card" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <h3>New Lofty setup</h3>
                <p>We map your lead sources and journeys, then structure the database and build the routing, Smart Plans and reporting around them.</p>
                <ul>
                  <li>Lead sources, IDX and database structured</li>
                  <li>Routing, scoring and Smart Plans built</li>
                  <li>AI Workforce configured within your limits</li>
                  <li>Agent training and handover</li>
                </ul>
              </article>
              <article className="path-card" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>Existing account audit &amp; optimisation</h3>
                <p>We review an existing Chime or Lofty account, find where it has drifted, and rebuild the parts that are costing you leads.</p>
                <ul>
                  <li>Audit of database, routing, Smart Plans and AI settings</li>
                  <li>Database restructured and cleaned</li>
                  <li>Smart Plans and routing rebuilt around real behaviour</li>
                  <li>A push on adoption so agents use it again</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Why hire a specialist */}
        <section className="pale sec" id="why" aria-labelledby="why-title">
          <div className="wrap why-grid">
            <div>
              <p className="label">Doing it yourself, or not</p>
              <h2 id="why-title">Why hire Lofty experts?</h2>
              <p className="sub">Lofty is wide and powerful, which is exactly why most teams use a fraction of it. Its onboarding switches the account on; the value of a specialist is turning it into a system your agents actually work.</p>
            </div>
            <ul className="why-list">
              <li><b>01</b><span><strong>Process design first.</strong> The lead journey is mapped before anything is configured, so routing and Smart Plans fit how you sell.</span></li>
              <li><b>02</b><span><strong>Speed to lead.</strong> Routing and AI first-touch set up so new leads are worked in minutes, not hours.</span></li>
              <li><b>03</b><span><strong>Smart Plans that fit the lead.</strong> Separate journeys for buyers, sellers and your sphere, instead of one generic drip.</span></li>
              <li><b>04</b><span><strong>AI set up safely.</strong> The autonomous follow-up configured within limits and in your voice, so it helps rather than harms.</span></li>
              <li><b>05</b><span><strong>Adoption.</strong> The setup and training built around how agents work, because a CRM no one uses converts nothing.</span></li>
              <li><b>06</b><span><strong>Connected to growth.</strong> Lofty tied into your marketing, lead generation and reporting rather than sitting on its own.</span></li>
            </ul>
          </div>
        </section>

        {/* Service partner */}
        <section className="rule sec" id="partner" aria-labelledby="partner-title">
          <div className="wrap">
            <div className="partner">
              <div>
                <p className="label">Hire Lofty specialists</p>
                <h2 id="partner-title">A Lofty implementation partner, not a one-off setup.</h2>
                <p className="sub">If you already know Lofty is the right platform, Sage Kite can handle the implementation: process mapping, database migration, routing, Smart Plans, AI configuration and handover &mdash; and stay on to refine it as your team grows.</p>
              </div>
              <div className="cta-col">
                <Link href="/contact" className="btn">Plan your Lofty implementation</Link>
                <Link href="/services/crm-implementation" className="link">See all CRM implementation services</Link>
              </div>
            </div>
            <p className="trust-note">Sage Kite is an independent implementation partner. Lofty is a trademark of its owner; Sage Kite is not a Lofty Certified Success Partner and is not affiliated with or certified by Lofty.</p>
          </div>
        </section>

        {/* How it works */}
        <section className="pale sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a Lofty implementation runs.</h2>
            </div>
            <ol className="runs-grid">
              <li className="run-step"><div className="run-bar" style={{ '--c': 'var(--butter)' } as React.CSSProperties}></div><span className="num" aria-hidden="true">01</span><h3>Discovery</h3><p>Your lead sources, sales process, team structure and current tools, and whether Lofty is the right fit.</p></li>
              <li className="run-step"><div className="run-bar" style={{ '--c': 'var(--sage)' } as React.CSSProperties}></div><span className="num" aria-hidden="true">02</span><h3>Process mapping</h3><p>Buyer and seller journeys and the lead-to-close process, agreed before anything is built.</p></li>
              <li className="run-step"><div className="run-bar" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></div><span className="num" aria-hidden="true">03</span><h3>Architecture &amp; migration</h3><p>Database structure, lead sources, IDX and the migration of your existing contacts.</p></li>
              <li className="run-step"><div className="run-bar" style={{ '--c': 'var(--coral)' } as React.CSSProperties}></div><span className="num" aria-hidden="true">04</span><h3>Configuration</h3><p>Routing, scoring, pipeline, reporting and team setup configured to the mapped process.</p></li>
              <li className="run-step"><div className="run-bar" style={{ '--c': 'var(--ink)' } as React.CSSProperties}></div><span className="num" aria-hidden="true">05</span><h3>Automation &amp; AI</h3><p>Smart Plans and the AI Workforce built and set within limits you control.</p></li>
              <li className="run-step"><div className="run-bar" style={{ '--c': 'var(--sage)' } as React.CSSProperties}></div><span className="num" aria-hidden="true">06</span><h3>Test &amp; train</h3><p>The flow tested against real lead scenarios, then training for agents and admins.</p></li>
              <li className="run-step"><div className="run-bar" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></div><span className="num" aria-hidden="true">07</span><h3>Handover &amp; optimise</h3><p>Documented handover, then refinement and further work as the team grows.</p></li>
            </ol>
          </div>
        </section>

        {/* What you receive */}
        <section className="sec" id="deliverables" aria-labelledby="deliver-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What you receive</p>
              <h2 id="deliver-title">At handover.</h2>
            </div>
            <ul className="deliver">
              <li><Check size={18} aria-hidden="true" /><span>A configured Lofty account, matched to your process</span></li>
              <li><Check size={18} aria-hidden="true" /><span>Your database migrated, cleaned and structured</span></li>
              <li><Check size={18} aria-hidden="true" /><span>Lead sources, IDX and routing connected</span></li>
              <li><Check size={18} aria-hidden="true" /><span>Dynamic scoring and pipeline set up</span></li>
              <li><Check size={18} aria-hidden="true" /><span>Smart Plans for buyers, sellers and your sphere</span></li>
              <li><Check size={18} aria-hidden="true" /><span>AI Workforce configured within agreed limits</span></li>
              <li><Check size={18} aria-hidden="true" /><span>Reporting, and team or brokerage structure</span></li>
              <li><Check size={18} aria-hidden="true" /><span>Agent training, documentation and optional support</span></li>
            </ul>
            <div className="mid-cta">
              <Link href="/contact" className="btn">Review your Lofty setup</Link>
              <span className="note">New account or existing &mdash; we start by understanding how you work.</span>
            </div>
          </div>
        </section>

        {/* Where Lofty sits */}
        <section className="pale sec" id="system" aria-labelledby="system-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where Lofty sits</p>
              <h2 id="system-title">The platform is one part of the growth system.</h2>
            </div>
            <ul className="stack">
              <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}><Link href="/services/consultancy">Consultancy</Link></li>
              <li style={{ '--c': 'var(--sage)' } as React.CSSProperties}>Lofty and CRM</li>
              <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}><Link href="/services/marketing">Marketing</Link></li>
              <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}>AI and automation</li>
              <li style={{ '--c': 'var(--ink)' } as React.CSSProperties}><Link href="/services/recruitment-staffing">People</Link></li>
              <li style={{ '--c': 'var(--sage)' } as React.CSSProperties}>Execution</li>
              <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}>Growth</li>
            </ul>
            <p className="stack-note">Sage Kite is a business growth consultancy. Lofty is one of the platforms we implement, alongside the consultancy that decides what to change, the marketing and lead generation that fill the pipeline, and the people who keep it running. On its own, Lofty runs your lead-to-close process; connected to the rest, it becomes part of how the business grows.</p>
            <p className="related">
              <Link href="/services/crm-implementation" className="link">CRM implementation services</Link>
              <Link href="/industries/real-estate" className="link">Real estate</Link>
              <Link href="/services/marketing" className="link">Marketing and lead generation</Link>
              <Link href="/platforms/follow-up-boss" className="link">Follow Up Boss</Link>
              <Link href="/platforms" className="link">All platforms</Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="brief rule" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <h2 id="faq-title" className="faq-title">Frequently asked questions</h2>
            {faqGroups.map((group) => (
              <div className="faq-group" key={group.label}>
                <p className="label">{group.label}</p>
                <div className="brief-grid faq-grid">
                  {group.items.map((f) => (
                    <div key={f.q}>
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="final pale" id="contact" aria-labelledby="final-title">
          <div className="wrap final-inner">
            <p className="final-words" aria-hidden="true">
              <span><span className="dot" style={{ '--c': 'var(--sage)' } as React.CSSProperties}></span>Map</span>
              <span><span className="dot" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></span>Migrate</span>
              <span><span className="dot" style={{ '--c': 'var(--coral)' } as React.CSSProperties}></span>Automate</span>
              <span><span className="dot" style={{ '--c': 'var(--butter)' } as React.CSSProperties}></span>Adopt</span>
            </p>
            <h2 id="final-title">Get Lofty built around how you sell.</h2>
            <p className="sub">Tell us where your leads come from and how you follow up today. We will tell you what we would map first, what the setup would involve, and whether Lofty is the right fit for your real-estate business.</p>
            <div className="cta-row">
              <Link href="/contact" className="btn">Book a discovery call</Link>
              <Link href="/platforms" className="link">See other platforms we implement</Link>
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
