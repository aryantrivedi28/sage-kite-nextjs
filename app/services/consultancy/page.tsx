import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/services/consultancy`;

export const metadata: Metadata = {
  title: "Growth Consulting: GTM, AI & Fractional CMO | Sage Kite",
  description: "Business growth consulting from Sage Kite: GTM consultancy, AI consultancy and fractional CMO support, with a diagnosis, priorities and a roadmap to act on.",
  keywords: ["business growth consulting", "growth consultancy", "GTM consultancy", "go-to-market consulting", "fractional CMO", "AI consultancy"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Business growth consulting: GTM, AI and fractional CMO | Sage Kite",
    description: "Find what is holding growth back and what to fix first, with GTM consultancy, AI consultancy and fractional CMO support from Sage Kite.",
  },
  twitter: {
    card: "summary",
    title: "Business growth consulting: GTM, AI and fractional CMO | Sage Kite",
    description: "Find what is holding growth back and what to fix first, with GTM consultancy, AI consultancy and fractional CMO support.",
  },
};

type Offer = { title: string; color: string; text: string; points: string[] };

// The three consultancy services. Rendered as cards and listed in the Service schema
// (hasOfferCatalog), so the page and schema always match.
const offers: Offer[] = [
  {
    title: "GTM consultancy",
    color: "var(--butter)",
    text: "Go-to-market strategy for the business you have now: who to sell to, what to offer them and how to reach them.",
    points: ["Target customers and segments", "Offer, positioning and pricing review", "Channel priorities and budget split", "The sales process from enquiry to close"],
  },
  {
    title: "AI consultancy",
    color: "var(--sky)",
    text: "Where AI genuinely reduces work in your marketing, sales and operations, and where it adds little.",
    points: ["Review of repetitive work across the team", "Use cases ranked by value and risk", "AI inside the tools you already use", "Guidance on review, data and quality"],
  },
  {
    title: "Fractional CMO",
    color: "var(--coral)",
    text: "Part-time senior marketing leadership for businesses that need the judgment of a CMO without a full-time hire.",
    points: ["Owns the marketing plan and priorities", "Makes or guides marketing decisions", "Directs agencies, freelancers and staff", "Reports on what marketing returns"],
  },
];

// "What you receive". Brief: diagnosis, priorities, roadmap, guidance on marketing decisions.
const outputs = [
  { title: "Growth diagnosis", color: "var(--butter)", text: "A written view of where growth is getting stuck, from the offer and channels to the sales process, systems and team.", tags: ["Interviews", "Data review", "Findings"] },
  { title: "Agreed priorities", color: "var(--sage)", text: "The few changes that matter most, ranked by expected value and effort, with what you will deliberately not do yet.", tags: ["Ranked", "Reasoned"] },
  { title: "Implementation roadmap", color: "var(--sky)", text: "The order of work, who does each part and what each step needs, from systems and people to campaigns.", tags: ["Sequence", "Owners", "Dependencies"] },
  { title: "Guidance on marketing decisions", color: "var(--coral)", text: "Ongoing senior input as the plan runs, through fractional CMO support where you need it.", tags: ["Fractional CMO"] },
];

// "Consultancy, fractional CMO or agency?"
const compare = [
  { row: "What you get", consult: "A diagnosis, priorities and a roadmap", cmo: "Ongoing senior marketing leadership, part time", agency: "Delivery of specific channels, such as ads or SEO" },
  { row: "How involved", consult: "A defined project with an end point", cmo: "Regular time each month, inside your team", agency: "Ongoing delivery against a brief" },
  { row: "What it owns", consult: "The recommendation", cmo: "The marketing plan and decisions", agency: "The work it is briefed on" },
  { row: "Best when", consult: "You need to know what to fix first", cmo: "You need a marketing leader, not a full-time hire", agency: "You know what to do and need it done" },
];

const symptoms = [
  { title: "Growth has stalled", text: "Revenue has flattened, and nobody agrees whether the cause is the offer, the channels or the sales process." },
  { title: "Spend without a clear return", text: "Money goes into ads, content and tools, but nobody can say which of it brings in customers." },
  { title: "Too many priorities", text: "Every idea seems urgent, so several start at once and few are finished." },
  { title: "A new offer or market", text: "You are launching something new and need a plan before money is committed." },
  { title: "AI tools, no clear use", text: "Subscriptions have been bought and experiments tried, but no one is sure where AI should actually help." },
  { title: "The founder runs marketing", text: "Every marketing decision waits for the founder, because there is no senior marketing lead." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Understanding consultancy",
    items: [
      { q: "What does a business growth consultant do?", a: "A business growth consultant works out what is limiting a business's growth and what to change first. That usually means reviewing the offer, target customers, marketing channels, sales process, systems and team, then turning the findings into agreed priorities and a roadmap." },
      { q: "What is GTM consultancy?", a: "GTM, or go-to-market, consultancy decides who a business should sell to, what it should offer them and how it should reach and convert them. It covers segments, positioning, pricing, channels and the sales process, and is useful before a launch or when growth from current channels has slowed." },
      { q: "What does a fractional CMO do?", a: "A fractional CMO is a part-time chief marketing officer. They own the marketing plan, make or guide marketing decisions, direct the people and agencies doing the work, and report on what marketing returns, for a fraction of the time and cost of a full-time hire." },
      { q: "What is the difference between a fractional CMO and a marketing agency?", a: "A fractional CMO decides what marketing should do and is accountable for the plan. An agency delivers specific work, such as ads or SEO, against a brief. Many businesses need both: someone to set direction and someone to execute it. Sage Kite provides fractional CMO support and, separately, marketing execution." },
      { q: "What does AI consultancy from Sage Kite cover?", a: "It reviews where repetitive work happens across marketing, sales and operations, ranks the places where AI could help by value and risk, and recommends how to apply it, usually inside the tools you already use. Standalone AI agent development is not currently offered as a separate service." },
    ],
  },
  {
    label: "Working together",
    items: [
      { q: "What do we receive at the end of a consultancy project?", a: "A growth diagnosis, agreed priorities and an implementation roadmap showing the order of work, who does each part and what it needs. The exact deliverables are set out in your proposal before work starts." },
      { q: "How long does a consultancy engagement take?", a: "It depends on the scope. A focused diagnosis and roadmap is a defined project with an end point. Fractional CMO support is ongoing for an agreed period. The proposal sets out the timeline before work begins." },
      { q: "How is consultancy priced?", a: "Every engagement starts with a discovery call. The proposal then sets out the scope, deliverables, timeline and price, so you know the cost before work starts." },
      { q: "Can Sage Kite carry out the roadmap?", a: "Yes. Sage Kite can implement the systems, run the marketing and provide specialists to operate them, so the plan is not handed to someone else to interpret. You can also take the roadmap to your own team or other suppliers." },
      { q: "Do we need consultancy before a CRM or marketing project?", a: "No. If you already know what needs building, you can start with CRM implementation or marketing directly. Discovery will flag anything strategic that should be settled first." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function ConsultancyPage() {
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
        "name": "Business growth consulting: GTM, AI and fractional CMO | Sage Kite",
        "description": "Business growth consulting from Sage Kite: GTM consultancy, AI consultancy and fractional CMO support, with a diagnosis, priorities and a roadmap to act on.",
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
          { "@type": "ListItem", "position": 3, "name": "Consultancy" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Business growth consultancy",
        "serviceType": "Business growth consulting",
        "description": "GTM consultancy, AI consultancy and fractional CMO support, producing a growth diagnosis, agreed priorities and an implementation roadmap.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": { "@type": "BusinessAudience", "audienceType": "Small and medium-sized businesses" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Consultancy services",
          "itemListElement": offers.map((o) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": o.title, "description": o.text }
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
          /* Consultancy service page, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .cs-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .cs-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .cs-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .cs-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: the questions consultancy answers */
          .q-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .q-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 12px}
          .qrows li{display:grid;grid-template-columns:5px minmax(0,1fr) auto;gap:14px;align-items:center;padding:11px 0;border-top:1px solid var(--pale-sage);font-size:.95rem;font-weight:600;color:var(--ink);line-height:1.3}
          .qrows .rail{align-self:stretch;border-radius:3px;background:var(--c)}
          .qrows small{font-size:.75rem;font-weight:600;color:var(--sage);background:var(--pale-sage);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .q-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Starting situations */
          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          /* Three services */
          .offers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .offer{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white);display:flex;flex-direction:column;scroll-margin-top:110px}
          .offer h3{font-size:1.45rem;margin-bottom:10px}
          .offer > p{font-size:.95rem;line-height:1.5}
          .offer ul{margin-top:16px}
          .offer li{position:relative;padding:8px 0 8px 20px;font-size:.9rem;line-height:1.45;border-top:1px solid var(--light-sage)}
          .offer li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}

          /* What you receive */
          .cap-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
          .cap-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start}
          .cap-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
          .cap-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .cap-row p{font-size:.975rem;line-height:1.55}
          .cap-row .tags{margin:0}

          /* Consultancy, fractional CMO or agency */
          .compare{width:100%;border-collapse:collapse;margin-top:clamp(36px,4vw,52px);background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);overflow:hidden;font-size:.975rem}
          .compare th,.compare td{padding:16px 20px;border-bottom:1px solid var(--light-sage);vertical-align:top;line-height:1.5;text-align:left}
          .compare thead th{background:var(--pale-sage);color:var(--ink);font-weight:700;font-size:1rem}
          .compare tbody th{font-weight:600;color:var(--sage);font-size:.875rem;width:19%}
          .compare tbody td{color:var(--ink);width:27%}
          .compare tbody tr:last-child th,.compare tbody tr:last-child td{border-bottom:0}
          .compare-note{margin-top:22px;max-width:72ch;font-size:1.05rem;color:var(--ink)}

          /* Process */
          .flow6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));margin-top:clamp(40px,5vw,64px)}
          .flow6 li{padding-right:18px}
          .flow6 .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
          .flow6 .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
          .flow6 .num{font-weight:700;letter-spacing:-.02em;font-size:2.4rem;line-height:1;color:var(--sage)}
          .flow6 h3{font-size:1.3rem;margin:8px 0 6px}
          .flow6 p{font-size:.9rem;line-height:1.45}

          /* Before and after, and fit */
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

          @media (max-width:1040px){
            .cs-hero .hero-grid{grid-template-columns:1fr}
            .symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .offers{grid-template-columns:1fr}
            .cap-row{grid-template-columns:1fr;gap:10px}
            .flow6{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
            .faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .q-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .symptoms,.two-col,.fit2,.conn{grid-template-columns:1fr}
            .flow6{grid-template-columns:1fr 1fr}
            /* Comparison table becomes one card per row */
            .compare,.compare tbody,.compare tr{display:block;width:100%}
            .compare thead{display:none}
            .compare tbody th{display:block;width:auto;padding:10px 16px;border-bottom:0;background:var(--pale-sage)}
            .compare tbody td{display:block;width:auto;padding:10px 16px;font-size:.95rem}
            .compare td::before{content:attr(data-h);display:block;font-size:.75rem;font-weight:700;color:var(--sage);margin-bottom:2px}
            .compare tbody tr:last-child td{border-bottom:1px solid var(--light-sage)}
            .compare tbody tr:last-child td:last-child{border-bottom:0}
          }
        ` }} />

        {/* Hero */}
        <section className="cs-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Services / Consultancy</p>
              <h1 id="hero-title">Business growth consulting, from diagnosis to roadmap</h1>
              <p className="sub">
                Sage Kite finds what is holding your growth back and decides what to fix first. Through GTM consultancy, AI consultancy and fractional CMO support, you get a clear diagnosis, agreed priorities and a roadmap your team can act on.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your growth plan</Link>
                <Link href="#services" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--butter)')}></span>GTM, AI and fractional CMO</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Strategy you can implement</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Scoped in a written proposal</span>
              </p>
            </div>

            <figure className="q-fig" aria-labelledby="q-title">
              <div className="ui">
                <p className="ui-title"><b id="q-title">What consultancy answers</b><span>Output</span></p>
                <ul className="qrows">
                  <li style={c('var(--butter)')}><span className="rail"></span>Where is growth getting stuck?<small>Diagnosis</small></li>
                  <li style={c('var(--sage)')}><span className="rail"></span>What should change first?<small>Priorities</small></li>
                  <li style={c('var(--sky)')}><span className="rail"></span>In what order, and by whom?<small>Roadmap</small></li>
                  <li style={c('var(--coral)')}><span className="rail"></span>Who keeps marketing on track?<small>Fractional CMO</small></li>
                </ul>
              </div>
              <figcaption>Deliverables are confirmed in your proposal.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">When growth needs direction before more activity.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">More tools, more campaigns or more people rarely fix these on their own. The first step is knowing which problem to solve, and in what order.</p>
          </div>
        </section>

        {/* Three services */}
        <section className="sec" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What consultancy includes</p>
              <h2 id="services-title">Three ways to bring in senior thinking.</h2>
              <p className="sub">Use one or combine them. Most engagements start with GTM consultancy and add the others where they help.</p>
            </div>
            <div className="offers">
              {offers.map((o) => (
                <div key={o.title} className="offer" style={c(o.color)}>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                  <ul>
                    {o.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you receive */}
        <section className="rule sec" id="deliverables" aria-labelledby="deliverables-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What you receive</p>
              <h2 id="deliverables-title">A plan specific enough to act on.</h2>
              <p className="sub">Recommendations are written for the people who will carry them out, with the reasoning shown, so the plan survives contact with the business.</p>
            </div>
            <div className="cap-list">
              {outputs.map((o) => (
                <div key={o.title} className="cap-row" style={c(o.color)}>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                  <div className="tags">
                    {o.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultancy, fractional CMO or agency */}
        <section className="pale sec" id="compare" aria-labelledby="compare-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Which kind of help?</p>
              <h2 id="compare-title">Consultancy, fractional CMO or marketing agency.</h2>
              <p className="sub">They solve different problems. Knowing which you need saves paying for the wrong one.</p>
            </div>
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col"><span className="note">Compare</span></th>
                  <th scope="col">Consultancy project</th>
                  <th scope="col">Fractional CMO</th>
                  <th scope="col">Marketing agency</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((r) => (
                  <tr key={r.row}>
                    <th scope="row">{r.row}</th>
                    <td data-h="Consultancy project">{r.consult}</td>
                    <td data-h="Fractional CMO">{r.cmo}</td>
                    <td data-h="Marketing agency">{r.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="compare-note">Sage Kite provides all three: consultancy and fractional CMO support here, and marketing execution through our <Link className="link" href="/services/marketing">marketing services</Link>.</p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a consultancy engagement runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your goals, current situation, constraints and who decides.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Scope, deliverables, timeline and price, agreed in writing.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Diagnosis</h3><p>Interviews and a review of your offer, data, systems and team.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Priorities</h3><p>Findings discussed with you, and the first changes agreed.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Roadmap</h3><p>The order of work, owners and what each step needs.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Next stage</h3><p>Your team runs it, we implement it, or a fractional CMO leads it.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Time with the founder or leadership team</li>
                  <li><Check size={15} aria-hidden="true" />Conversations with the people who sell and market</li>
                  <li><Check size={15} aria-hidden="true" />Your offers, prices and target customers</li>
                  <li><Check size={15} aria-hidden="true" />Access to sales, CRM and marketing data where it exists</li>
                  <li><Check size={15} aria-hidden="true" />Previous plans, budgets and results</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At the end</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />A written growth diagnosis</li>
                  <li><Check size={15} aria-hidden="true" />Agreed, ranked priorities</li>
                  <li><Check size={15} aria-hidden="true" />An implementation roadmap with owners</li>
                  <li><Check size={15} aria-hidden="true" />AI recommendations, where in scope</li>
                  <li><Check size={15} aria-hidden="true" />A walkthrough with your team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is consultancy right for you?</p>
              <h2 id="fit-title">Consultancy suits businesses deciding what comes next.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Founder-led and growing businesses that are about to invest in a CRM, campaigns or new hires and want to get the order right, that have outgrown what worked so far, or that need senior marketing judgment without a full-time CMO.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>You may not need it first</h3>
                <p>If you already know what needs building, such as a CRM setup or an ads programme, start with <Link className="link" href="/services/crm-implementation">CRM implementation</Link> or <Link className="link" href="/services/marketing">marketing</Link>. Discovery will still flag anything strategic that should be settled before work begins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connected services */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">After the roadmap</p>
              <h2 id="conn-title">The plan is the start of the work.</h2>
              <p className="sub">Consultancy sets the direction. These services carry it out, scoped around the same goal.</p>
            </div>
            <div className="conn">
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>A CRM set up so every lead has an owner and a next step.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>SEO, paid media, social and email that bring in demand.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--ink)')}><strong>Specialist staffing</strong><span>Tier 1 VAs to run your growth systems day to day.</span></Link>
              <Link href="/services/white-label" style={c('var(--sky)')}><strong>White-label delivery</strong><span>Strategy and delivery for agencies, under their brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Consultancy FAQs</h2>
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
                <span><span className="dot" style={c('var(--butter)')}></span>Diagnosis</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Priorities</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Roadmap</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Growth</span>
              </p>
              <h2 id="final-title">Know what to fix first.</h2>
              <p className="sub">A discovery call looks at where growth is getting stuck, what you have tried, and what a scoped consultancy engagement would cover.</p>
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
