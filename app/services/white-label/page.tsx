import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/services/white-label`;

export const metadata: Metadata = {
  title: "White-Label Delivery for Marketing Agencies | Sage Kite",
  description: "White-label delivery for marketing agencies: CRM implementation, automation, marketing and specialist support for your clients, delivered under your brand.",
  keywords: ["white-label services for agencies", "white-label CRM implementation", "white-label marketing fulfilment", "agency delivery partner", "white-label automation"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "White-label delivery for marketing agencies | Sage Kite",
    description: "More delivery capacity for your agency, under your brand, with scope, client communication, ownership and handover agreed before work begins.",
  },
  twitter: {
    card: "summary",
    title: "White-label delivery for marketing agencies | Sage Kite",
    description: "More delivery capacity for your agency, under your brand, with scope, client communication, ownership and handover agreed before work begins.",
  },
};

type Offering = { id: string; title: string; color: string; text: string; tags: string[] };

// "What we can deliver". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match. Colours follow the service colours on the homepage.
const offerings: Offering[] = [
  { id: "crm-automation", title: "CRM implementation and automation", color: "var(--sage)", text: "CRM setup, pipeline design, data migration, workflows and integrations for your clients, on the platforms Sage Kite implements.", tags: ["Setup", "Migration", "Workflows"] },
  { id: "marketing-execution", title: "Marketing execution", color: "var(--coral)", text: "SEO, AI SEO, paid media, social and email campaigns delivered to your plan and your client's brief.", tags: ["Search", "Paid media", "Email"] },
  { id: "specialist-support", title: "Specialist support", color: "var(--ink)", text: "CRM, marketing operations, email, social media and sales support VAs working inside your client's systems.", tags: ["Tier 1 VAs", "Day to day"] },
  { id: "strategy-support", title: "Growth strategy support", color: "var(--butter)", text: "GTM and growth strategy input behind the recommendations you make to clients, presented as your team.", tags: ["GTM", "Roadmaps"] },
];

const symptoms = [
  { title: "More work than the team can deliver", text: "You are winning projects faster than your team can take them on." },
  { title: "Clients asking for CRM work", text: "Clients want CRM setup, automation or migration, and your team does not offer it." },
  { title: "Demand that comes in waves", text: "A permanent hire would be stretched in busy months and idle in quiet ones." },
  { title: "Good projects turned down", text: "Work goes to competitors because you cannot staff it in time." },
  { title: "Freelancers who need managing", text: "Every freelancer has to be found, briefed and checked, and quality varies." },
  { title: "A skills gap on one project", text: "A project needs skills, such as a platform migration, that nobody on the team has." },
];

// "How the partnership works". The three principles from app/services/page.tsx.
const principles = [
  { title: "Fulfilment under your brand", color: "var(--sky)", text: "Agreed services delivered for your clients and presented as your team, so the client relationship stays yours." },
  { title: "Defined scope and ownership", color: "var(--sage)", text: "Scope, project ownership and handover agreed for each engagement, so everyone knows who leads and who approves." },
  { title: "Agreed client communication", color: "var(--butter)", text: "How and when your client hears from the team, set before work begins, so the client sees one consistent team." },
];

// "Agreed before work begins": the terms settled for every engagement.
const terms = [
  { title: "Scope", text: "The deliverables, exclusions and milestones for the client project." },
  { title: "Client communication", text: "How and when your client hears from the team, and under whose name." },
  { title: "Project ownership", text: "Who leads the project, who approves work and who the client contacts." },
  { title: "Handover", text: "What your team receives at the end, so you can support the client afterwards." },
  { title: "Pricing", text: "The price for the engagement, agreed in writing before work starts." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Understanding white-label delivery",
    items: [
      { q: "What is white-label delivery?", a: "White-label delivery means Sage Kite delivers agreed services for your agency's clients under your agency's brand. Your client works with your agency, and Sage Kite does the agreed work behind it." },
      { q: "Which services can Sage Kite deliver white-label?", a: "CRM implementation and automation, marketing execution, specialist support from Tier 1 VAs, and growth strategy support. Each engagement covers only the services agreed for that client." },
      { q: "Will our client know Sage Kite is involved?", a: "That is agreed before work begins. How and when your client hears from the team is set for each engagement, so your client sees one consistent team." },
      { q: "Which CRM platforms can you deliver for our clients?", a: "The same platforms Sage Kite implements directly: GoHighLevel, Keap, HubSpot and ActiveCampaign, plus industry platforms including Follow Up Boss, Lofty, ServiceTitan, Housecall Pro, Jobber, Kajabi, Clio Grow, Dubsado, HoneyBook, Mindbody and Bloomerang." },
    ],
  },
  {
    label: "Working together",
    items: [
      { q: "How is white-label delivery priced?", a: "Pricing is agreed per engagement. Every partnership starts with a discovery call, and each client project is scoped in writing, with deliverables and price, before work begins. Platform subscriptions and advertising spend are separate from our fee." },
      { q: "Who owns the client relationship?", a: "Your agency. Sage Kite supports the work behind it. Project ownership, approvals and who the client contacts are agreed for each engagement." },
      { q: "What happens at the end of a project?", a: "Your team receives a clear handover, so you can support the client afterwards. Where it helps, Sage Kite can continue with maintenance or further work for that client, scoped in the same way." },
      { q: "Where does Sage Kite work with agencies?", a: "Sage Kite works with marketing agencies in the United States, Canada, Europe, Australia and New Zealand." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function WhiteLabelPage() {
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
        "name": "White-label delivery for marketing agencies | Sage Kite",
        "description": "White-label delivery for marketing agencies: CRM implementation, automation, marketing and specialist support for your clients, delivered under your brand.",
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
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
          { "@type": "ListItem", "position": 3, "name": "White-label delivery" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "White-label delivery",
        "serviceType": "White-label marketing delivery",
        "description": "CRM implementation and automation, marketing execution, specialist support and growth strategy support delivered for marketing agencies' clients under the agency's brand, with scope, client communication, ownership, handover and pricing agreed per engagement.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": { "@type": "BusinessAudience", "audienceType": "Marketing agencies" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "White-label services",
          "itemListElement": offerings.map((o) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": o.title, "description": o.text, "url": `${PAGE_URL}#${o.id}` }
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
          /* White-label delivery service page, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .wl-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .wl-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .wl-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .wl-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: who does what on one engagement */
          .who-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .who-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 12px}
          .wrows li{display:grid;grid-template-columns:5px minmax(0,1fr) auto;gap:14px;align-items:center;padding:11px 0;border-top:1px solid var(--pale-sage);font-size:.925rem;font-weight:600;color:var(--ink);line-height:1.3}
          .wrows .rail{align-self:stretch;border-radius:3px;background:var(--c)}
          .wrows small{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .who-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Starting situations */
          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          /* What we can deliver */
          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start;scroll-margin-top:110px}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}
          .cap-note{margin-top:26px;max-width:72ch;font-size:1.05rem;color:var(--ink)}

          /* How the partnership works */
          .three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .three .panel h3{font-size:1.3rem;margin-bottom:8px}
          .three .panel p{font-size:.95rem;line-height:1.55}
          .three-note{margin-top:26px;max-width:72ch;font-size:1.05rem;color:var(--ink)}

          /* Agreed before work begins */
          .agree{margin-top:clamp(36px,4vw,52px);border:1px solid var(--light-sage);border-radius:var(--r);background:var(--warm-white);counter-reset:term}
          .agree li{display:grid;grid-template-columns:56px minmax(0,3fr) minmax(0,7fr);gap:20px;align-items:baseline;padding:20px 24px;border-top:1px solid var(--light-sage);counter-increment:term}
          .agree li:first-child{border-top:0}
          .agree li::before{content:counter(term,decimal-leading-zero);font-weight:700;font-size:1.25rem;letter-spacing:-.02em;color:var(--sky)}
          .agree h3{font-size:1.2rem}
          .agree p{font-size:.975rem;line-height:1.55}

          /* Process */
          .flow6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));margin-top:clamp(40px,5vw,64px)}
          .flow6 li{padding-right:18px}
          .flow6 .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
          .flow6 .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
          .flow6 .num{font-weight:700;letter-spacing:-.02em;font-size:2.4rem;line-height:1;color:var(--sage)}
          .flow6 h3{font-size:1.3rem;margin:8px 0 6px}
          .flow6 p{font-size:.9rem;line-height:1.45}

          /* Panels: before and after, fit */
          .two-col,.fit2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
          .panel{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,34px)}
          .panel h3{font-size:1.35rem;margin-bottom:6px}
          .panel-k{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .gets li{display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--light-sage);font-size:.95rem;line-height:1.45;color:var(--ink)}
          .gets svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}
          .fit2 .panel p{font-size:.95rem;line-height:1.55;margin-top:14px}

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

          @media (max-width:1040px){
            .wl-hero .hero-grid{grid-template-columns:1fr}
            .symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .three{grid-template-columns:1fr}
            .flow6{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
            .faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .who-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .wrows li{grid-template-columns:5px minmax(0,1fr)}
            .wrows small{grid-column:2;justify-self:start}
            .symptoms,.two-col,.fit2,.conn{grid-template-columns:1fr}
            .agree li{grid-template-columns:40px minmax(0,1fr);gap:4px 12px;padding:18px 16px}
            .agree p{grid-column:2}
            .flow6{grid-template-columns:1fr 1fr}
          }
        ` }} />

        {/* Hero */}
        <section className="wl-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Services / White-label delivery</p>
              <h1 id="hero-title">White-label delivery for marketing agencies</h1>
              <p className="sub">
                Sage Kite delivers CRM implementation, automation, marketing and specialist support for your clients, presented as your team. Scope, client communication, ownership and handover are agreed for each engagement before work begins.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss a partnership</Link>
                <Link href="#deliver" className="link">See what we deliver</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sky)')}></span>Under your brand</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Scope agreed per engagement</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Clear handover</span>
              </p>
            </div>

            <figure className="who-fig" aria-labelledby="who-title">
              <div className="ui">
                <p className="ui-title"><b id="who-title">One client engagement</b><span>Who does what</span></p>
                <ul className="wrows">
                  <li style={c('var(--sky)')}><span className="rail"></span>Client relationship and brief<small>Your agency</small></li>
                  <li style={c('var(--butter)')}><span className="rail"></span>Scope, ownership and price<small>Agreed together</small></li>
                  <li style={c('var(--sage)')}><span className="rail"></span>Build and delivery<small>Sage Kite</small></li>
                  <li style={c('var(--coral)')}><span className="rail"></span>Client updates<small>As agreed</small></li>
                  <li style={c('var(--ink)')}><span className="rail"></span>Handover and ongoing support<small>Your agency</small></li>
                </ul>
              </div>
              <figcaption>Illustrative. Roles are agreed for each engagement.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">When client demand outgrows your delivery team.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">Hiring for every peak is slow and expensive. A delivery partner, with scope and client communication agreed up front, adds capacity without adding permanent headcount.</p>
          </div>
        </section>

        {/* What we can deliver */}
        <section className="sec" id="deliver" aria-labelledby="deliver-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What we can deliver</p>
              <h2 id="deliver-title">The work behind your client promises.</h2>
              <p className="sub">Each engagement covers only the services you choose for that client, delivered to your brief and presented as your team.</p>
            </div>
            <div className="cap-list">
              {offerings.map((o) => (
                <div key={o.id} id={o.id} className="cap-row" style={c(o.color)}>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                  <div className="tags">
                    {o.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <p className="cap-note">CRM work covers the same <Link className="link" href="/platforms">platforms</Link> Sage Kite implements directly, from HubSpot and Keap to industry platforms such as Follow Up Boss and ServiceTitan.</p>
          </div>
        </section>

        {/* How the partnership works */}
        <section className="pale sec" id="how" aria-labelledby="how-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How the partnership works</p>
              <h2 id="how-title">Your clients. Your brand. Our delivery.</h2>
              <p className="sub">You keep the client relationship. Sage Kite supports the work behind it.</p>
            </div>
            <div className="three">
              {principles.map((x) => (
                <div key={x.title} className="panel" style={c(x.color)}>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agreed before work begins */}
        <section className="sec" id="agreed" aria-labelledby="agreed-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Agreed before work begins</p>
              <h2 id="agreed-title">Five things settled for every engagement.</h2>
              <p className="sub">White-label work goes wrong when roles are assumed. These are written down before anyone starts.</p>
            </div>
            <ol className="agree">
              {terms.map((t) => (
                <li key={t.title}>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
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
              <h2 id="process-title">How a white-label engagement runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your agency, your clients and the work you want to hand over.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Scope</h3><p>Deliverables, ownership, communication and price, in writing.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Briefing</h3><p>The client brief, your brand and account access handed over.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Delivery</h3><p>The work done under your brand, to the agreed scope.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Approval</h3><p>Work shared with you for sign-off, as agreed.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Your team receives what it needs to support the client.</p></li>
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
                <p className="panel-k">Confirmed for each engagement</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />The client brief and goals</li>
                  <li><Check size={15} aria-hidden="true" />Access to the client&apos;s platforms and accounts</li>
                  <li><Check size={15} aria-hidden="true" />Your brand guidelines and templates</li>
                  <li><Check size={15} aria-hidden="true" />Who leads the project and approves work</li>
                  <li><Check size={15} aria-hidden="true" />How the client should hear from the team</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>What you receive</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Delivered work for your client</li>
                  <li><Check size={15} aria-hidden="true" />Work presented under your brand</li>
                  <li><Check size={15} aria-hidden="true" />A clear handover to your team</li>
                  <li><Check size={15} aria-hidden="true" />Documentation, where in scope</li>
                  <li><Check size={15} aria-hidden="true" />Pricing agreed per engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is this right for you?</p>
              <h2 id="fit-title">Built for agencies, not end clients.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Marketing agencies that need a reliable delivery partner without adding permanent headcount, or whose clients are asking for CRM and automation work the team does not offer.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Not an agency?</h3>
                <p>If you want help growing your own business, work with Sage Kite directly. Start with <Link className="link" href="/services/consultancy">consultancy</Link>, <Link className="link" href="/services/crm-implementation">CRM implementation</Link> or <Link className="link" href="/services/marketing">marketing</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connected services */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What sits behind it</p>
              <h2 id="conn-title">The same services we deliver directly.</h2>
              <p className="sub">White-label work draws on the services Sage Kite runs for its own clients, delivered under your name.</p>
            </div>
            <div className="conn">
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>Setup, migration, automation and handover.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>SEO, paid media, social and email.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--ink)')}><strong>Specialist staffing</strong><span>Tier 1 VAs to run systems day to day.</span></Link>
              <Link href="/platforms" style={c('var(--sky)')}><strong>Platforms</strong><span>The CRM platforms we implement.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">White-label FAQs</h2>
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
              <p className="trust-note">Platform names are trademarks of their owners. Sage Kite is independent and is not affiliated with, endorsed by or certified by the platforms listed.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--sky)')}></span>Your clients</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Your brand</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Our delivery</span>
              </p>
              <h2 id="final-title">Take on more client work.</h2>
              <p className="sub">A discovery call looks at your agency, the client work you want to hand over, how your clients should hear from the team, and what a first engagement would cover.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="/services" className="link">See all services</Link>
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
