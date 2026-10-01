import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/services`;

export const metadata: Metadata = {
  title: "Business Growth Consulting Services | Sage Kite",
  description: "Sage Kite's five service areas: consultancy, CRM implementation, marketing, specialist staffing and white-label delivery, scoped around how you grow.",
  keywords: ["business growth consulting services", "growth consultancy", "CRM implementation services", "fractional CMO", "marketing services for small business", "white-label delivery"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Business growth consulting services | Sage Kite",
    description: "Consultancy, CRM implementation, marketing, specialist staffing and white-label delivery, brought together around one growth goal.",
  },
  twitter: {
    card: "summary",
    title: "Business growth consulting services | Sage Kite",
    description: "Consultancy, CRM implementation, marketing, specialist staffing and white-label delivery, brought together around one growth goal.",
  },
};

type Service = {
  id: string;
  kicker: string;
  name: string;
  color: string;
  outcome: string;
  problem: string;
  includes: { name: string; text: string }[];
  receive: string[];
  suits: string;
  cta: { href: string; label: string };
};

// The five service areas. Rendered as equal blocks and listed in the Service schema,
// so the page and hasOfferCatalog always match. Order and colours match the homepage cards.
const services: Service[] = [
  {
    id: "consultancy",
    kicker: "Direction",
    name: "Consultancy",
    color: "var(--butter)",
    outcome: "Know what is holding growth back, and what to fix first.",
    problem: "Growth has slowed or become unpredictable, and it is not clear whether the cause is the offer, the channels, the sales process or the team.",
    includes: [
      { name: "GTM consultancy", text: "Who to sell to, how to reach them, and which offers and channels to prioritise." },
      { name: "AI consultancy", text: "Where AI genuinely reduces work in your marketing and operations, and where it adds little." },
      { name: "Fractional CMO", text: "Part-time senior marketing leadership, without a full-time hire." },
    ],
    receive: ["A growth diagnosis", "Agreed priorities", "An implementation roadmap", "Guidance on marketing decisions"],
    suits: "Founders and leadership teams who want direction before investing in systems, campaigns or hires.",
    cta: { href: "/contact", label: "Discuss consultancy" },
  },
  {
    id: "crm-implementation",
    kicker: "Systems",
    name: "CRM implementation",
    color: "var(--sage)",
    outcome: "A CRM your team uses, where every lead has an owner and a next step.",
    problem: "Leads arrive and go quiet. The CRM is underused, the data is messy, or the pipeline no longer matches how you sell.",
    includes: [
      { name: "Setup and pipeline design", text: "The platform configured around how you win and keep customers." },
      { name: "Data cleanup and migration", text: "Records cleaned, de-duplicated and moved between platforms where feasible." },
      { name: "Workflows and automation", text: "Follow-up, routing and reminders built with the platform's own tools." },
      { name: "Testing, training and handover", text: "Checked before go-live, with your team trained and the setup documented." },
      { name: "Custom CRM development", text: "A CRM built around your process when no existing platform fits." },
    ],
    receive: ["A configured, tested platform", "Documentation of the setup", "A trained team", "Optional maintenance after handover"],
    suits: "Businesses setting up a new CRM, or fixing one that has drifted away from how the business works.",
    cta: { href: "/platforms", label: "See the platforms we implement" },
  },
  {
    id: "marketing",
    kicker: "Demand",
    name: "Marketing",
    color: "var(--coral)",
    outcome: "Marketing that brings in demand you can trace to revenue.",
    problem: "Activity runs across several channels, but it is not connected to the CRM, so nobody can say what it returns.",
    includes: [
      { name: "SEO and AI SEO", text: "Visibility in search results and in AI-generated answers." },
      { name: "Paid media", text: "Google Ads, Meta Ads and LinkedIn Ads." },
      { name: "Social media management", text: "Planning, publishing and routine channel management." },
      { name: "Email marketing", text: "Campaigns, segmentation and automated sequences." },
    ],
    receive: ["An ongoing plan built around your priorities", "Campaign execution", "Reporting connected to your pipeline"],
    suits: "Businesses with a working sales system that need more, better-qualified demand. Often the next stage after a CRM project.",
    cta: { href: "/contact", label: "Discuss marketing" },
  },
  {
    id: "specialist-staffing",
    kicker: "Capability",
    name: "Specialist staffing",
    color: "var(--ink)",
    outcome: "Capable people to run your growth systems day to day.",
    problem: "The plan and the system exist, but nobody has the time to operate them, so they slowly fall out of use.",
    includes: [
      { name: "CRM and automation VA", text: "CRM upkeep, contact hygiene, workflow monitoring and reporting." },
      { name: "Marketing operations VA", text: "Campaign coordination, task tracking, reporting and process support." },
      { name: "Email marketing VA", text: "Campaign setup, segmentation, scheduling and performance reporting." },
      { name: "Social media VA", text: "Content coordination, scheduling and routine channel management." },
      { name: "Lead generation and sales support VA", text: "Prospect research, CRM updates, appointment coordination and follow-up." },
    ],
    receive: ["A Tier 1 virtual assistant matched to the role", "Work inside your systems and processes", "Role scope agreed before anyone starts"],
    suits: "Businesses that have invested in systems and need hands to keep them running.",
    cta: { href: "/contact", label: "Discuss a specialist" },
  },
  {
    id: "white-label",
    kicker: "For agencies",
    name: "White-label delivery",
    color: "var(--sky)",
    outcome: "More delivery capacity for your agency, under your brand.",
    problem: "Your agency is winning work faster than it can deliver it, or clients are asking for CRM and automation work your team does not offer.",
    includes: [
      { name: "Fulfilment under your brand", text: "Agreed services delivered for your clients, presented as your team." },
      { name: "Defined scope and ownership", text: "Scope, project ownership and handover agreed for each engagement." },
      { name: "Agreed client communication", text: "How and when your client hears from the team, set before work begins." },
    ],
    receive: ["Delivered work for your client", "A clear handover to your team", "Pricing agreed per engagement"],
    suits: "Marketing agencies that need a reliable delivery partner without adding permanent headcount.",
    cta: { href: "/contact", label: "Discuss white-label delivery" },
  },
];

// "Start with the problem". Each row points to the service block above.
const starts = [
  { problem: "We are not sure what to fix first.", service: "consultancy" },
  { problem: "Leads arrive, then go quiet.", service: "crm-implementation" },
  { problem: "We spend on marketing but cannot see what it returns.", service: "marketing" },
  { problem: "The system is there, but nobody has time to run it.", service: "specialist-staffing" },
  { problem: "Our agency has more client work than delivery capacity.", service: "white-label" },
];

// "How the services connect": Strategy, Systems, People, Execution, Growth.
const chain = [
  { stage: "Strategy", text: "Consultancy decides where to focus.", color: "var(--butter)" },
  { stage: "Systems", text: "CRM implementation gives every lead an owner.", color: "var(--sage)" },
  { stage: "People", text: "Specialists keep the system running.", color: "var(--ink)" },
  { stage: "Execution", text: "Marketing brings demand into it.", color: "var(--coral)" },
  { stage: "Growth", text: "Maintenance keeps it improving.", color: "var(--sky)" },
];

// "How an engagement works".
const steps = [
  { title: "Discovery call", text: "Your current process, the outcome you want, access, constraints and who decides." },
  { title: "Scoped proposal", text: "Deliverables, exclusions, milestones and price, in writing before work starts." },
  { title: "Implementation", text: "Fixed-price project work: systems configured, tested and connected." },
  { title: "Handover", text: "Your team trained and the setup documented, so you own what was built." },
  { title: "Maintenance", text: "Optional ongoing support with a defined scope." },
  { title: "Ongoing growth", text: "Where it helps, a marketing plan or specialist support built on what the project revealed." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing a service",
    items: [
      { q: "Which Sage Kite service should we start with?", a: "Start with the problem that costs you most. If you are unsure what that is, consultancy comes first. If leads are going cold, start with CRM implementation. If your system works but demand is low, start with marketing. A discovery call is the usual way to decide, and it may recommend fixing what you already have rather than adding something new." },
      { q: "Can we use just one service?", a: "Yes. Each service can be engaged on its own. Many clients start with one, such as a CRM project, and add others later when the next constraint becomes clear." },
      { q: "What is the difference between consultancy and implementation?", a: "Consultancy decides what should change and in what order: the diagnosis, priorities and roadmap. Implementation does the work: configuring the CRM, building workflows, migrating data and training the team. Sage Kite does both, so the plan is not handed to someone else to interpret." },
      { q: "Do you build custom CRMs?", a: "Yes, where no existing platform fits how you sell. Custom CRM development is scoped and priced like any other implementation project. In many cases configuring an existing platform is faster and cheaper, and we will say so." },
    ],
  },
  {
    label: "Engagements",
    items: [
      { q: "How are Sage Kite services priced?", a: "Every engagement starts with a discovery call, followed by a written proposal setting out the scope, deliverables and price. Implementation projects have a fixed project price. Ongoing services such as marketing, specialist staffing and maintenance are set out in the proposal. Platform subscriptions are separate from our fee." },
      { q: "What roles does specialist staffing cover?", a: "CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support. Each virtual assistant works inside your systems and processes, and the scope of the role is agreed before anyone starts." },
      { q: "How does white-label delivery work for agencies?", a: "Sage Kite delivers agreed services for your clients under your agency's brand. Scope, client communication, project ownership, handover and pricing are agreed for each engagement before work begins, so your client sees one consistent team." },
      { q: "Where does Sage Kite work?", a: "Sage Kite works with small and medium-sized businesses and marketing agencies in the United States, Canada, Europe, Australia and New Zealand." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);
const byId = (id: string) => services.find((s) => s.id === id)!;

export default function ServicesPage() {
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
        "name": "Business growth consulting services | Sage Kite",
        "description": "Sage Kite's five service areas: consultancy, CRM implementation, marketing, specialist staffing and white-label delivery.",
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
          { "@type": "ListItem", "position": 2, "name": "Services" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Business growth consulting services",
        "serviceType": "Business growth consulting",
        "description": "Consultancy, CRM implementation, marketing, specialist staffing and white-label delivery for small and medium-sized businesses and marketing agencies.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sage Kite services",
          "itemListElement": services.map((s) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": s.name,
              "description": s.outcome,
              "url": `${PAGE_URL}#${s.id}`
            }
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
          /* Services overview, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .sv-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(48px,6vw,80px)}
          .sv-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .sv-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .sv-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero index: the five service areas */
          .sv-index{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .sv-index .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 10px}
          .sv-index li a{display:grid;grid-template-columns:5px minmax(0,1fr) auto;gap:14px;align-items:center;padding:10px 0;border-top:1px solid var(--pale-sage);text-decoration:none;color:var(--ink);font-weight:600;font-size:.95rem;line-height:1.3;transition:padding var(--t) var(--ease)}
          .sv-index li a:hover{padding-left:6px}
          .sv-index .rail{align-self:stretch;border-radius:3px;background:var(--c)}
          .sv-index .kick{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .sv-index figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Start with the problem */
          .starts{border-top:1px solid var(--light-sage);margin-top:clamp(36px,4vw,52px)}
          .starts a{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px;align-items:center;padding:20px 0;border-bottom:1px solid var(--light-sage);text-decoration:none;color:var(--ink);transition:padding var(--t) var(--ease)}
          .starts a:hover{padding-left:6px}
          .starts .q{font-size:clamp(1.1rem,1.6vw,1.3rem);font-weight:600;letter-spacing:-.01em;line-height:1.35}
          .starts .to{display:inline-flex;align-items:center;gap:10px;font-size:.925rem;font-weight:600;white-space:nowrap}
          .starts .to::before{content:"";width:6px;height:18px;border-radius:3px;background:var(--c)}
          .starts .to svg{transition:transform var(--t) var(--ease)}
          .starts a:hover .to svg{transform:translateX(3px)}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          /* The five services: one equal block each */
          #services-list.sec{padding-top:clamp(56px,6vw,80px)}
          .sv-block{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(24px,4vw,64px);align-items:start;padding:clamp(36px,4.5vw,56px) 0;border-top:1px solid var(--light-sage);scroll-margin-top:110px}
          .head + .sv-block{border-top:0;padding-top:0}
          .sv-main{position:sticky;top:120px}
          .sv-kick{display:inline-flex;align-items:center;gap:10px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:12px}
          .sv-kick::before{content:"";width:6px;height:18px;border-radius:3px;background:var(--c)}
          .sv-main h3{font-size:clamp(1.7rem,2.6vw,2.2rem);font-weight:800;letter-spacing:-.025em;line-height:1.08;margin-bottom:12px}
          .sv-outcome{font-size:1.15rem;font-weight:600;color:var(--ink);line-height:1.45;margin-bottom:14px}
          .sv-problem{font-size:.975rem;line-height:1.6;margin-bottom:22px;max-width:46ch}
          .sv-detail{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,32px)}
          .sv-detail .label{margin-bottom:6px}
          .incl li{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,3fr);gap:6px 20px;padding:13px 0;border-bottom:1px solid var(--light-sage)}
          .incl li:last-child{border-bottom:0}
          .incl strong{font-size:1rem;font-weight:700;color:var(--ink);line-height:1.4}
          .incl span{font-size:.95rem;line-height:1.5}
          .sv-foot{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;margin-top:18px;padding-top:20px;border-top:1px solid var(--light-sage)}
          .recv li{display:flex;gap:10px;align-items:baseline;font-size:.95rem;line-height:1.5;padding:3px 0;color:var(--ink)}
          .recv li::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--c);flex:0 0 auto;transform:translateY(-2px)}
          .suits{font-size:.95rem;line-height:1.55}

          /* How the services connect */
          .chain{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));margin-top:clamp(36px,4vw,52px)}
          .chain li{padding:0 20px 0 0}
          .chain li::before{content:"";display:block;width:100%;height:5px;border-radius:3px;background:var(--c);margin-bottom:18px}
          .chain h3{font-size:1.3rem;margin-bottom:6px}
          .chain p{font-size:.95rem;line-height:1.5}

          /* How an engagement works */
          .steps-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 clamp(20px,3vw,40px);margin-top:clamp(36px,4vw,52px)}
          .steps-list li{display:grid;grid-template-columns:52px minmax(0,1fr);gap:14px;padding:22px 0;border-top:1px solid var(--light-sage)}
          .steps-list .n{font-weight:700;letter-spacing:-.02em;font-size:1.8rem;line-height:1.05;color:var(--sage)}
          .steps-list h3{font-size:1.2rem;margin-bottom:4px}
          .steps-list p{font-size:.95rem;line-height:1.5}

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

          @media (max-width:1040px){
            .sv-hero .hero-grid{grid-template-columns:1fr}
            .sv-block,.faq-wrap{grid-template-columns:1fr}
            .sv-block{gap:22px}
            .sv-main{position:static}
            .chain{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:10px}
            .steps-list{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .sv-index{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .starts a{grid-template-columns:1fr;gap:8px}
            .incl li,.sv-foot{grid-template-columns:1fr}
            .incl li{gap:2px}
            .chain{grid-template-columns:repeat(2,minmax(0,1fr))}
            .steps-list{grid-template-columns:1fr}
          }
        ` }} />

        {/* Hero */}
        <section className="sv-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Services</p>
              <h1 id="hero-title">Business growth services, from strategy to delivery</h1>
              <p className="sub">
                Most businesses do not have one problem. They have a CRM, campaigns and a team that were never set up to work together. Sage Kite brings consultancy, systems, people and marketing together around the same growth goal.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="#services-list" className="link">Explore the five services</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Strategy to execution</span>
                <span><span className="dot" style={c('var(--sky)')}></span>One service or several</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Scoped in a written proposal</span>
              </p>
            </div>

            <figure className="sv-index" aria-labelledby="index-title">
              <div className="ui">
                <p className="ui-title"><b id="index-title">Five service areas</b><span>Jump to</span></p>
                <ul>
                  {services.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} style={c(s.color)}>
                        <span className="rail"></span>
                        <span>{s.name}</span>
                        <span className="kick">{s.kicker}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <figcaption>Each can be engaged on its own or combined.</figcaption>
            </figure>
          </div>
        </section>

        {/* Start with the problem */}
        <section className="rule sec" id="where-to-start" aria-labelledby="start-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where to start</p>
              <h2 id="start-title">Start with the problem, not the service.</h2>
              <p className="sub">Pick the line that sounds most like your business. It points to the service that usually comes first.</p>
            </div>
            <div className="starts">
              {starts.map((x) => {
                const s = byId(x.service);
                return (
                  <a key={x.service} href={`#${s.id}`} style={c(s.color)}>
                    <span className="q">&ldquo;{x.problem}&rdquo;</span>
                    <span className="to">{s.name} <ArrowRight size={15} aria-hidden="true" /></span>
                  </a>
                );
              })}
            </div>
            <p className="after-line">Many businesses need more than one. A discovery call decides the order, and sometimes the answer is to fix what you already have.</p>
          </div>
        </section>

        {/* The five services */}
        <section className="pale sec" id="services-list" aria-labelledby="services-title">
          <div className="wrap">
            <div className="head" style={{ marginBottom: 'clamp(36px,4vw,52px)' }}>
              <p className="label">What we do</p>
              <h2 id="services-title">Five service areas, one growth operation.</h2>
              <p className="sub">Each service has a clear outcome and scope. Together they cover the strategy, systems, people and execution behind growth.</p>
            </div>

            {services.map((s) => (
              <article key={s.id} className="sv-block" id={s.id} style={c(s.color)} aria-labelledby={`${s.id}-title`}>
                <div className="sv-main">
                  <p className="sv-kick">{s.kicker}</p>
                  <h3 id={`${s.id}-title`}>{s.name}</h3>
                  <p className="sv-outcome">{s.outcome}</p>
                  <p className="sv-problem">{s.problem}</p>
                  <Link href={s.cta.href} className="link">{s.cta.label}</Link>
                </div>
                <div className="sv-detail">
                  <p className="label">What is included</p>
                  <ul className="incl">
                    {s.includes.map((i) => (
                      <li key={i.name}><strong>{i.name}</strong><span>{i.text}</span></li>
                    ))}
                  </ul>
                  <div className="sv-foot">
                    <div>
                      <p className="label">What you receive</p>
                      <ul className="recv">
                        {s.receive.map((r) => <li key={r}>{r}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="label">Who it suits</p>
                      <p className="suits">{s.suits}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How the services connect */}
        <section className="sec" id="how-they-connect" aria-labelledby="connect-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How the services connect</p>
              <h2 id="connect-title">Strategy, systems, people, execution, growth.</h2>
              <p className="sub">Separate suppliers tend to solve separate problems. When the same team scopes each stage, the CRM, the campaigns and the people running them are built to work together.</p>
            </div>
            <ol className="chain">
              {chain.map((x) => (
                <li key={x.stage} style={c(x.color)}><h3>{x.stage}</h3><p>{x.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* How an engagement works */}
        <section className="pale sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How an engagement works</p>
              <h2 id="process-title">From first call to ongoing growth.</h2>
              <p className="sub">The same path for every service. You decide at each stage whether to continue.</p>
            </div>
            <ol className="steps-list">
              {steps.map((x, i) => (
                <li key={x.title}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <div><h3>{x.title}</h3><p>{x.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Service FAQs</h2>
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
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Strategy</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Systems</span>
                <span><span className="dot" style={c('var(--sky)')}></span>People</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Growth</span>
              </p>
              <h2 id="final-title">Not sure which service you need?</h2>
              <p className="sub">A discovery call looks at how you win customers today, where growth is getting stuck, and which service, or combination, would make the biggest difference first.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="/platforms" className="link">Browse the platforms we implement</Link>
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
