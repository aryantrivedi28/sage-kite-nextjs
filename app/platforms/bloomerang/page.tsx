import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/bloomerang";

export const metadata: Metadata = {
  title: "Bloomerang CRM Setup & Consulting Services | Sage Kite",
  description: "Bloomerang consulting from Sage Kite: donor data cleanup, gift entry, acknowledgements, Journey Automation, reporting and training for nonprofits.",
  keywords: ["Bloomerang consultant", "Bloomerang implementation", "Bloomerang CRM setup", "Bloomerang data migration", "Bloomerang Journey Automation", "nonprofit CRM consultant"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Bloomerang CRM setup and consulting services | Sage Kite",
    description: "Sage Kite sets up Bloomerang around how your nonprofit raises money and keeps donors: clean records, gift entry, acknowledgements, automation and reporting.",
  },
  twitter: {
    card: "summary",
    title: "Bloomerang CRM setup and consulting services | Sage Kite",
    description: "Bloomerang setup for nonprofits: donor data cleanup, gift entry, acknowledgements, Journey Automation, dashboards and staff training.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[]; offered: boolean };

// "What we implement" rows. Offered rows also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Capability[] = [
  { title: "Records and households", color: "var(--sage)", offered: true, tags: ["Constituents", "Households", "Custom fields"], text: "Constituents, households, relationships and custom fields structured so each donor appears once, and family giving adds up correctly." },
  { title: "Gift entry and coding", color: "var(--coral)", offered: true, tags: ["Funds", "Campaigns", "Appeals"], text: "Funds, campaigns and appeals set up with written rules, so every gift is recorded the same way and reports compare year to year." },
  { title: "Acknowledgements and receipts", color: "var(--butter)", offered: true, tags: ["Thank-yous", "Receipts", "Letters"], text: "Thank-you letters and emails, receipts and year-end statements set up so donors are thanked promptly and consistently." },
  { title: "Journey Automation", color: "var(--sky)", offered: true, tags: ["First-time donors", "Lapsed donors", "Tasks"], text: "Multi-step journeys for first-time, lapsed and monthly donors, with emails, tasks and relationship-manager assignments triggered by giving activity." },
  { title: "Engagement and retention", color: "var(--ink)", offered: true, tags: ["Engagement Meter", "Generosity Score", "Retention"], text: "Groups and dashboards built on the Engagement Meter, Generosity Score and retention data, so the team knows who to thank, call and ask next." },
  { title: "Online giving and fundraising", color: "var(--coral)", offered: true, tags: ["Donation forms", "Recurring gifts", "Events"], text: "Donation forms and recurring giving and, where you use Bloomerang Fundraising, events and peer-to-peer campaigns connected to the CRM." },
  { title: "Email and communications", color: "var(--sage)", offered: true, tags: ["Email", "Segments", "Newsletters"], text: "Email templates, segments and newsletters sent from the same database, so each message reflects the donor's giving history." },
  { title: "Reporting and dashboards", color: "var(--ink)", offered: true, tags: ["Board reports", "Scheduled reports", "Dashboards"], text: "Reports and scheduled dashboards for the board, finance and fundraising team, built around the questions you are actually asked." },
  { title: "Integrations and training", color: "var(--sky)", offered: true, tags: ["QuickBooks", "Zapier", "Training"], text: "QuickBooks, Mailchimp or Zapier connections where you need them, plus training and a written gift-entry guide for staff and volunteers." },
  { title: "Full data conversion", color: "var(--light-sage)", offered: false, tags: ["With Bloomerang's team"], text: "Bloomerang's own team handles data conversion when it is included in your plan. We prepare the data before it and check the records after." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Bloomerang consulting",
    items: [
      { q: "What does a Bloomerang consultant do?", a: "A Bloomerang consultant helps a nonprofit set up and run Bloomerang around how it actually raises money: clean records and households, consistent gift entry, prompt acknowledgements, Journey Automation for key donor stages, and reports the board and team use. Sage Kite starts by mapping the donor journey from first gift to renewal, then configures Bloomerang to match it." },
      { q: "Doesn't Bloomerang already include onboarding?", a: "Yes. Bloomerang includes onboarding, and data conversion where your plan covers it, delivered by its own team. We work around that: cleaning and preparing data before conversion, designing your gift-entry and acknowledgement process, building automations and reports, and helping staff adopt the system. Many projects also start years after go-live, when an account has drifted." },
      { q: "Can you clean up an existing Bloomerang database?", a: "Yes. Common issues are duplicate constituents, households set up inconsistently, funds and appeals coded differently by different people, and automations nobody maintains. We audit the database, merge and fix records, write down the coding rules and rebuild the parts that matter." },
      { q: "How long does a Bloomerang project take?", a: "It depends on the size and condition of your data, how many automations and reports you need, and whether Bloomerang is converting your data at the same time. Your proposal sets out the milestones and dates before work starts, and we plan around Bloomerang's conversion timeline where there is one." },
    ],
  },
  {
    label: "Scope and data",
    items: [
      { q: "Can you migrate our donor data to Bloomerang?", a: "When conversion is part of your Bloomerang plan, Bloomerang's team moves the data. We prepare it first, removing duplicates, standardising names and addresses and mapping funds and appeals, then check the records afterwards. If your plan does not include conversion, we scope the import with you in discovery." },
      { q: "Can you set up Journey Automation in Bloomerang?", a: "Yes. We build journeys for the moments that matter most, such as welcoming first-time donors, re-engaging lapsed donors and thanking monthly givers, using emails, tasks and relationship-manager assignments triggered by giving activity." },
      { q: "Can you connect Bloomerang to QuickBooks?", a: "Bloomerang lists integrations with QuickBooks, Mailchimp and Zapier, among others. We set up the connections you need and agree how gifts, funds and accounts should map, so fundraising and finance reconcile without manual rework." },
      { q: "Which Bloomerang products do we need?", a: "Bloomerang offers its CRM, Fundraising and Volunteer products separately or together as the Giving Platform, priced by the number of records rather than users. We recommend the smallest combination that covers how you raise money and work with volunteers." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Is Bloomerang available outside the United States and Canada?", a: "Bloomerang is built for nonprofits in the United States and Canada. If you are elsewhere, check availability with Bloomerang before you commit. If it is not the right fit, we can recommend and implement a donor management platform that works in your country." },
      { q: "Is Sage Kite a Bloomerang partner?", a: "Sage Kite is an independent consultant. Bloomerang is a trademark of its owner, and Sage Kite is not affiliated with, endorsed by or certified by Bloomerang. We work on your behalf and are paid by you, not by Bloomerang." },
      { q: "What happens after the project?", a: "You own the account and can run it. Handover includes training and a written gift-entry guide. Where it helps, Sage Kite offers maintenance with a defined support scope, and a CRM and automation VA to keep records clean and gift entry consistent." },
      { q: "Is Sage Kite only a Bloomerang consultant?", a: "No. Sage Kite is a business growth consultancy. Bloomerang is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Bloomerang holds your donor relationships; the broader work decides where to focus and brings in new supporters." },
    ],
  },
];

// Hero diagram: one illustrative donor journey. `human` marks the step kept with a person.
const journey = [
  { step: "First gift on a donation form", tool: "Form", color: "var(--sky)" },
  { step: "Gift recorded and receipted", tool: "Gift", color: "var(--sky)" },
  { step: "Thank-you within days", tool: "Automation", color: "var(--sky)" },
  { step: "Call for first-time donors", tool: "You", color: "var(--butter)", human: true },
  { step: "Engagement tracked over time", tool: "Meter", color: "var(--sky)" },
  { step: "Second gift asked for", tool: "Group", color: "var(--coral)" },
  { step: "Renewal or upgrade ask", tool: "Task", color: "var(--sage)" },
];

// Bloomerang's onboarding compared with Sage Kite's work. From bloomerang.com/pricing and /faq, September 2026.
const onboarding = [
  { row: "Starts from", bloomerang: "Your data and Bloomerang's best practice", sagekite: "Your fundraising process and team routines" },
  { row: "Mainly", bloomerang: "Converting records and training on the product", sagekite: "Cleaning data, designing gift entry, automation and reporting" },
  { row: "When", bloomerang: "During onboarding", sagekite: "Before conversion, alongside it, or years after go-live" },
  { row: "Beyond Bloomerang", bloomerang: "Focused on the Bloomerang product", sagekite: "Connected to consultancy, email marketing and staffing" },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function BloomerangPage() {
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
        "@id": "https://www.sagekite.com/platforms/bloomerang/#webpage",
        "url": PAGE_URL,
        "name": "Bloomerang CRM setup and consulting services | Sage Kite",
        "description": "Sage Kite sets up Bloomerang for nonprofits: records and households, gift entry and coding, acknowledgements, Journey Automation, engagement and retention, online giving, reporting, integrations and training.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/bloomerang/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/bloomerang/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/bloomerang/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "Bloomerang" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/bloomerang/#service",
        "name": "Bloomerang CRM setup and consulting services",
        "serviceType": "Bloomerang setup, configuration and consulting",
        "description": "Donor journey mapping, Bloomerang records and households, gift entry and coding, acknowledgements and receipts, Journey Automation, engagement and retention groups, online giving, email, reporting and dashboards, integrations, data preparation for conversion, testing, training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        // Bloomerang serves nonprofits in the US and Canada (see FAQ), so this service is scoped to those two markets.
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "Nonprofit organisations" },
          { "@type": "Audience", "audienceType": "Charities and fundraising teams" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in Bloomerang",
          "itemListElement": capabilities.filter((cap) => cap.offered).map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/bloomerang/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/bloomerang/#service" },
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
          /* Bloomerang page additions, built from the approved homepage system */
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
              <p className="label">Platforms / Bloomerang</p>
              <h1 id="hero-title">Bloomerang CRM setup and consulting services</h1>
              <p className="sub">
                Sage Kite sets up Bloomerang around how your nonprofit raises money and keeps donors. We map the donor journey from first gift to renewal, then configure records, gift entry, thank-yous, automation and reporting to match.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your Bloomerang setup</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Donor data cleanup</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="journey-fig" aria-labelledby="journey-title">
              <div className="ui">
                <p className="ui-title"><b id="journey-title">A donor journey in Bloomerang</b><span>Example</span></p>
                <ol className="jsteps">
                  {journey.map((j) => (
                    <li key={j.step} className={j.human ? 'human' : undefined} style={c(j.color)}>
                      <span className="dot"></span>{j.step}<small>{j.tool}</small>
                    </li>
                  ))}
                </ol>
                <p className="key">
                  <span><span className="dot" style={c('var(--sky)')}></span>Automated in Bloomerang</span>
                  <span><span className="dot" style={c('var(--butter)')}></span>Kept with a person</span>
                </p>
              </div>
              <figcaption>Illustrative. Your journey is mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Problems */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Bloomerang is built for donor retention. Most databases are not set up for it.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>Duplicate donors and households</strong><p>The same family entered three different ways, so giving totals and mailings are both wrong.</p></li>
              <li><strong>Thank-yous run late</strong><p>Acknowledgements depend on someone exporting a list, so first-time donors wait weeks.</p></li>
              <li><strong>Retention is a guess</strong><p>No one reviews who has lapsed, so last year&apos;s donors quietly stop giving.</p></li>
              <li><strong>Gift entry varies by person</strong><p>Funds, campaigns and appeals coded differently, so reports cannot be compared year to year.</p></li>
              <li><strong>Board reports built in spreadsheets</strong><p>Numbers exported and reworked every month because the dashboards were never set up.</p></li>
              <li><strong>Tools that do not talk</strong><p>Online giving, events, email and accounting in separate systems, reconciled by hand.</p></li>
            </ul>
            <p className="after-line">These are rarely software problems. They come from data that arrived messy and routines that were never written down.</p>
          </div>
        </section>

        {/* Starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">New to Bloomerang, an account that needs fixing, or a move to Bloomerang.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>New Bloomerang setup</h3>
                <p>You have chosen Bloomerang and want your fundraising process right from the start.</p>
                <ul>
                  <li>Funds, campaigns and appeals agreed first</li>
                  <li>Gift entry and acknowledgement rules written down</li>
                  <li>Journey Automation set up for key donor stages</li>
                  <li>Staff trained on the daily routine</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>Bloomerang database cleanup</h3>
                <p>You have used Bloomerang for a while and the data or routines have drifted.</p>
                <ul>
                  <li>Audit of records, households, funds and groups</li>
                  <li>Duplicates merged and coding made consistent</li>
                  <li>Acknowledgements and automations rebuilt</li>
                  <li>Dashboards the board and team actually use</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>Moving to Bloomerang</h3>
                <p>You are leaving spreadsheets or another donor database.</p>
                <ul>
                  <li>Data cleaned and mapped before conversion</li>
                  <li>Work planned around Bloomerang&apos;s conversion team</li>
                  <li>Records checked after import</li>
                  <li>Old system retired once giving reconciles</li>
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
              <h2 id="impl-title">What Bloomerang setup covers.</h2>
              <p className="sub">Some features depend on the Bloomerang products you use. We confirm what your plan includes during discovery.</p>
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

        {/* Bloomerang onboarding vs Sage Kite */}
        <section className="pale sec" id="onboarding" aria-labelledby="onb-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Bloomerang&apos;s onboarding or Sage Kite?</p>
              <h2 id="onb-title">Bloomerang converts your data. We help you raise money with it.</h2>
              <p className="sub">Bloomerang includes onboarding, and data conversion where your plan covers it, delivered by its own specialists. That work is valuable. Ours sits around it.</p>
            </div>
            <div className="vs">
              <div className="vs-col them" style={c('var(--light-sage)')}>
                <p className="vs-k">Included with Bloomerang</p>
                <h3>Bloomerang onboarding</h3>
                {onboarding.map((o) => (
                  <dl className="vs-row" key={o.row}><dt>{o.row}</dt><dd>{o.bloomerang}</dd></dl>
                ))}
              </div>
              <div className="vs-col us" style={c('var(--coral)')}>
                <p className="vs-k">Around it</p>
                <h3>Sage Kite</h3>
                {onboarding.map((o) => (
                  <dl className="vs-row" key={o.row}><dt>{o.row}</dt><dd>{o.sagekite}</dd></dl>
                ))}
              </div>
            </div>
            <p className="compare-note note">
              What Bloomerang&apos;s onboarding includes depends on your plan, so confirm it with Bloomerang. Details of its products and pricing are on <a className="link" href="https://bloomerang.com/pricing" target="_blank" rel="noopener noreferrer">Bloomerang&apos;s pricing page</a>.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a Bloomerang project runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your fundraising process, data, Bloomerang plan and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Process map</h3><p>Gift entry, coding, acknowledgement and journey rules agreed.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Records, automations, forms and reports, alongside any conversion.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Test gifts run through entry, receipt and thank-you.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Training, a gift-entry guide and optional maintenance.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to Bloomerang, or your plan details</li>
                  <li><Check size={15} aria-hidden="true" />Exports from your current donor database or spreadsheets</li>
                  <li><Check size={15} aria-hidden="true" />Your list of funds, campaigns and appeals</li>
                  <li><Check size={15} aria-hidden="true" />Current thank-you letters and receipt templates</li>
                  <li><Check size={15} aria-hidden="true" />One person who owns fundraising decisions</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Clean, de-duplicated records and households</li>
                  <li><Check size={15} aria-hidden="true" />Consistent fund, campaign and appeal coding</li>
                  <li><Check size={15} aria-hidden="true" />Acknowledgements and receipts, tested</li>
                  <li><Check size={15} aria-hidden="true" />Journey Automations for key donor stages</li>
                  <li><Check size={15} aria-hidden="true" />Dashboards for the board and fundraising team</li>
                  <li><Check size={15} aria-hidden="true" />Training and a written gift-entry guide</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is Bloomerang right for you?</p>
              <h2 id="fit-title">Bloomerang suits nonprofits that grow by keeping their donors.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Small and mid-sized nonprofits in the United States and Canada that raise most of their money from individual donors, want retention in plain view, and prefer one system for donors, giving, email and volunteers.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Worth comparing first</h3>
                <p>Organisations outside the United States and Canada should check availability first. If you also run a trading arm, memberships sold like products or a B2B sales process, a general CRM such as <Link className="link" href="/platforms/hubspot">HubSpot</Link> may need to sit alongside Bloomerang. Discovery is where we tell you honestly which way we would go.</p>
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
                <h2 id="proof-title">Previous Bloomerang work by a Sage Kite delivery specialist</h2>
              </div>
              <div>
                <p className="note" style={{ marginBottom: '10px' }}>Examples are being prepared. We publish only approved, attributed work. Each example will show:</p>
                <ul>
                  <li>Specialist role and what they built</li>
                  <li>Project context and delivery period</li>
                  <li>Screenshots with donor details removed</li>
                  <li>Results only where there is evidence for them</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Where Bloomerang sits */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where Bloomerang sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">Bloomerang holds your donor relationships. The work around it decides where to focus and brings in new supporters. See how this fits <Link className="link" href="/industries/nonprofits">nonprofits</Link>.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Which donors to focus on and what to change first.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>Email marketing and SEO that bring in new supporters.</span></Link>
              <Link href="/services/recruitment-staffing" style={c('var(--ink)')}><strong>CRM and automation VA</strong><span>Someone to keep records clean and gift entry consistent.</span></Link>
              <Link href="/for-agencies" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>Bloomerang work for your nonprofit clients, under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Bloomerang consulting FAQs</h2>
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
              <p className="trust-note">Sage Kite is an independent consultant. Bloomerang is a trademark of its owner. Sage Kite is not affiliated with, endorsed by or certified by Bloomerang.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Donors</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Bloomerang</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Team</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Growth</span>
              </p>
              <h2 id="final-title">Build Bloomerang around how you raise money.</h2>
              <p className="sub">A discovery call looks at your donor data, your current setup or plan, and what a fixed-scope project would cover.</p>
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
