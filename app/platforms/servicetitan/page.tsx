import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/servicetitan";

export const metadata: Metadata = {
  title: "ServiceTitan Setup & Consulting Services | Sage Kite",
  description: "ServiceTitan consulting from Sage Kite: pricebook, dispatch, memberships, estimate follow-up, marketing tracking and reporting for trade businesses.",
  keywords: ["ServiceTitan consultant", "ServiceTitan implementation", "ServiceTitan pricebook", "ServiceTitan memberships", "ServiceTitan training", "ServiceTitan admin"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "ServiceTitan setup and consulting services | Sage Kite",
    description: "Sage Kite sets up ServiceTitan around how trade businesses book, sell and keep customers: pricebook, dispatch, memberships, marketing and reporting.",
  },
  twitter: {
    card: "summary",
    title: "ServiceTitan setup and consulting services | Sage Kite",
    description: "ServiceTitan consulting for trade businesses: pricebook, dispatch, estimates, memberships, marketing tracking, reporting and training.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[]; offered: boolean };

// "What we implement" rows. Offered rows also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Capability[] = [
  { title: "Call booking and customer records", color: "var(--sage)", offered: true, tags: ["Call booking", "Customers", "Locations"], text: "Call booking, job types and customer and location records set up consistently, so every call is booked the same way and every job has the right history." },
  { title: "Scheduling and dispatch", color: "var(--sky)", offered: true, tags: ["Business units", "Dispatch board", "Capacity"], text: "Business units, job types, arrival windows and the dispatch board set up around how your office really runs, with Scheduling Pro or Dispatch Pro where you use them." },
  { title: "Pricebook", color: "var(--butter)", offered: true, tags: ["Services", "Materials", "Options"], text: "A pricebook structured so technicians find the right item in seconds, with clear descriptions, images and options, and Pricebook Pro where you use it." },
  { title: "Estimates and field sales", color: "var(--coral)", offered: true, tags: ["Mobile estimates", "Options", "Follow-up"], text: "Estimate templates with options your technicians present on site, and a process for following up unsold estimates before they go cold." },
  { title: "Memberships and recurring service", color: "var(--sage)", offered: true, tags: ["Memberships", "Recurring services", "Renewals"], text: "Membership types, recurring service events and renewals set up so maintenance visits are booked automatically and memberships are not left to lapse." },
  { title: "Marketing and campaign tracking", color: "var(--coral)", offered: true, tags: ["Campaigns", "Marketing Pro", "Reviews"], text: "Campaigns that show which marketing brings in calls and revenue, and Marketing Pro audiences for unsold estimates, expiring memberships and past customers." },
  { title: "Invoicing and accounting sync", color: "var(--ink)", offered: true, tags: ["Invoices", "Payments", "Accounting"], text: "Invoice templates, payments and the connection to your accounting system, set up and checked so the office is not reconciling by hand." },
  { title: "Reporting and dashboards", color: "var(--sky)", offered: true, tags: ["Business units", "Technicians", "Campaigns"], text: "Reports and dashboards by business unit, technician and campaign, built on clean job types so the numbers can be trusted." },
  { title: "Roles, workflows and training", color: "var(--ink)", offered: true, tags: ["Permissions", "Office", "Field"], text: "Roles, permissions and written workflows for CSRs, dispatchers and technicians, with training so everyone uses ServiceTitan the same way." },
  { title: "ServiceTitan's own onboarding", color: "var(--light-sage)", offered: false, tags: ["Run by ServiceTitan"], text: "ServiceTitan runs its own onboarding when you buy. We do not replace it. We help you prepare for it and improve the account afterwards." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "ServiceTitan consulting",
    items: [
      { q: "What does a ServiceTitan consultant do?", a: "A ServiceTitan consultant helps a trade business set up and run ServiceTitan around how it actually books, sells and keeps customers: call booking, dispatch, the pricebook, estimates, memberships, marketing tracking and reporting. Sage Kite starts by mapping how a call becomes a job, a sale and a member, then configures ServiceTitan to match." },
      { q: "Doesn't ServiceTitan include onboarding?", a: "Yes. ServiceTitan runs its own onboarding when you buy, focused on getting you live. We help you prepare your data and processes before it, and improve the account afterwards: the pricebook, memberships, estimate follow-up, campaign tracking, reporting and team adoption." },
      { q: "Can you fix an existing ServiceTitan account?", a: "Yes. Common issues are a pricebook technicians cannot navigate, job types and business units used inconsistently, campaigns that are not tracked, unsold estimates nobody follows up, memberships that lapse and Pro products that were bought but never configured. We audit the account, fix the structure and document how each role should use it." },
      { q: "How long does a ServiceTitan project take?", a: "It depends on the size of your pricebook, the number of business units and technicians, and how much needs fixing. A focused pricebook or membership project is much smaller than a full account overhaul. Your proposal sets out the milestones and dates before work starts." },
    ],
  },
  {
    label: "Scope and setup",
    items: [
      { q: "Can you prepare our data for a move to ServiceTitan?", a: "Yes. ServiceTitan's onboarding team usually handles the import. We clean your customers, locations, equipment, memberships and price lists beforehand so they arrive usable, and check the records afterwards." },
      { q: "Can you build or clean up our ServiceTitan pricebook?", a: "Yes. We structure the pricebook into clear categories, write descriptions customers understand, add images and options, and remove duplicates, so technicians can find the right item quickly and present choices on site." },
      { q: "Can you set up memberships in ServiceTitan?", a: "Yes. We set up membership types, the recurring service events attached to them and the renewal process, so maintenance visits are booked automatically and members are reminded before they lapse. Customizable memberships are part of ServiceTitan's The Works package." },
      { q: "Can you set up marketing tracking in ServiceTitan?", a: "Yes. We set up campaigns so calls and jobs are tied to the marketing that produced them, and, where you use Marketing Pro, audiences for unsold estimates, expiring memberships and past customers." },
      { q: "Which ServiceTitan package do we need?", a: "ServiceTitan offers Starter, Essentials and The Works, priced per technician on request, plus Pro add-ons such as Pricebook Pro, Marketing Pro and Scheduling Pro. We help you decide which features you will actually use before you buy or upgrade." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Where is ServiceTitan available?", a: "ServiceTitan serves trade businesses in the United States and Canada and is also used in Australia. If you are elsewhere, check with ServiceTitan before you commit. If it is not the right fit, we can recommend and implement a field service platform that works in your country." },
      { q: "Is Sage Kite a ServiceTitan partner?", a: "Sage Kite is an independent consultant. ServiceTitan is a trademark of its owner, and Sage Kite is not affiliated with, endorsed by or certified by ServiceTitan. We work on your behalf and are paid by you, not by ServiceTitan." },
      { q: "What happens after the project?", a: "You own the account and can run it. Handover includes training for CSRs, dispatchers, technicians and managers, and documentation of your pricebook, job types and workflows. Where it helps, Sage Kite offers maintenance with a defined support scope, and a CRM and automation VA to keep the account tidy." },
      { q: "Is Sage Kite only a ServiceTitan consultant?", a: "No. Sage Kite is a business growth consultancy. ServiceTitan is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. ServiceTitan runs the operation; the broader work decides what to change and keeps the phones busy." },
    ],
  },
];

// Hero diagram: one illustrative customer journey. `human` marks the step kept with a person.
const journey = [
  { step: "Call answered and booked", tool: "Call booking", color: "var(--sky)" },
  { step: "Dispatched to the right tech", tool: "Dispatch", color: "var(--sky)" },
  { step: "Technician presents options", tool: "You", color: "var(--butter)", human: true },
  { step: "Invoiced and paid on site", tool: "Invoice", color: "var(--sky)" },
  { step: "Membership added", tool: "Membership", color: "var(--coral)" },
  { step: "Review request sent", tool: "Marketing", color: "var(--sky)" },
  { step: "Maintenance visit booked", tool: "Recurring", color: "var(--sage)" },
];

// From ServiceTitan's published package comparison, September 2026 (servicetitan.com/pricing). Recheck when editing.
const plans = [
  { row: "Dispatch, scheduling and pricebook", starter: "Included", essentials: "Included", works: "Included" },
  { row: "Mobile estimates", starter: "Not included", essentials: "Included", works: "Included" },
  { row: "Payroll management", starter: "Not included", essentials: "Included", works: "Included" },
  { row: "Advanced reporting", starter: "Not included", essentials: "Not included", works: "Included" },
  { row: "Customizable memberships", starter: "Not included", essentials: "Not included", works: "Included" },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function ServiceTitanPage() {
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
        "@id": "https://www.sagekite.com/platforms/servicetitan/#webpage",
        "url": PAGE_URL,
        "name": "ServiceTitan setup and consulting services | Sage Kite",
        "description": "Sage Kite sets up ServiceTitan for trade businesses: call booking and customer records, scheduling and dispatch, pricebook, estimates, memberships, marketing and campaign tracking, invoicing, reporting and training.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/servicetitan/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/servicetitan/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/servicetitan/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "ServiceTitan" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/servicetitan/#service",
        "name": "ServiceTitan setup and consulting services",
        "serviceType": "ServiceTitan setup, configuration and consulting",
        "description": "Trade business process mapping, ServiceTitan call booking and customer records, scheduling and dispatch, pricebook, estimates and field sales, memberships and recurring service, marketing and campaign tracking, invoicing and accounting sync, reporting, roles and workflows, data preparation, testing, training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        // ServiceTitan serves the US and Canada and is also used in Australia (see FAQ), so this service is scoped to those markets.
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Australia" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "HVAC, plumbing and electrical contractors" },
          { "@type": "Audience", "audienceType": "Residential and commercial trade businesses" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in ServiceTitan",
          "itemListElement": capabilities.filter((cap) => cap.offered).map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/servicetitan/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/servicetitan/#service" },
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
          /* ServiceTitan page additions, built from the approved homepage system */
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

          .compare{width:100%;border-collapse:collapse;margin-top:clamp(36px,4vw,52px);background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);overflow:hidden;font-size:.975rem}
          .compare th,.compare td{padding:16px 20px;border-bottom:1px solid var(--light-sage);vertical-align:top;line-height:1.5;text-align:center}
          .compare thead th{background:var(--pale-sage);color:var(--ink);font-weight:700;font-size:1rem}
          .compare thead th:first-child,.compare tbody th{text-align:left}
          .compare tbody th{font-weight:600;color:var(--sage);font-size:.875rem;width:30%}
          .compare tbody tr:last-child th,.compare tbody tr:last-child td{border-bottom:0}
          .compare .yes{color:var(--ink);font-weight:600}
          .compare .no{color:var(--sage)}
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
            .compare,.compare tbody{display:block;width:100%}
            .compare thead{display:none}
            .compare tr{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
            .compare tbody th{grid-column:1/-1;width:auto;padding:10px 14px;border-bottom:0;background:var(--pale-sage)}
            .compare td{padding:10px 14px;font-size:.9rem;text-align:left}
            .compare td::before{content:attr(data-h);display:block;font-size:.75rem;font-weight:700;color:var(--sage);margin-bottom:2px}
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
              <p className="label">Platforms / ServiceTitan</p>
              <h1 id="hero-title">ServiceTitan setup and consulting services</h1>
              <p className="sub">
                Sage Kite sets up ServiceTitan around how your trade business books, sells and keeps customers. We map the path from first call to membership, then build the pricebook, dispatch, follow-up and reporting to match.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your ServiceTitan setup</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Pricebook cleanup</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="journey-fig" aria-labelledby="journey-title">
              <div className="ui">
                <p className="ui-title"><b id="journey-title">A customer journey in ServiceTitan</b><span>Example</span></p>
                <ol className="jsteps">
                  {journey.map((j) => (
                    <li key={j.step} className={j.human ? 'human' : undefined} style={c(j.color)}>
                      <span className="dot"></span>{j.step}<small>{j.tool}</small>
                    </li>
                  ))}
                </ol>
                <p className="key">
                  <span><span className="dot" style={c('var(--sky)')}></span>Run in ServiceTitan</span>
                  <span><span className="dot" style={c('var(--butter)')}></span>Kept with your team</span>
                </p>
              </div>
              <figcaption>Illustrative. Your customer journey is mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Problems */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">ServiceTitan can run the whole business. Most accounts use a fraction of it.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>A pricebook that fights technicians</strong><p>Thousands of items and no structure, so techs skip it and quote from memory.</p></li>
              <li><strong>Marketing nobody can measure</strong><p>Campaigns are not set up, so you cannot tell which spend brings in calls.</p></li>
              <li><strong>Unsold estimates forgotten</strong><p>Options are presented on site, then nobody follows up on the ones that did not close.</p></li>
              <li><strong>Memberships that lapse</strong><p>Members are sold, but renewals and maintenance visits are not booked automatically.</p></li>
              <li><strong>Reports nobody trusts</strong><p>Job types and business units are used inconsistently, so the numbers disagree.</p></li>
              <li><strong>Pro products bought, not used</strong><p>Add-ons are paid for every month but were never properly configured.</p></li>
            </ul>
            <p className="after-line">These are rarely software problems. They come from going live quickly and never returning to set ServiceTitan up around how the business actually sells.</p>
          </div>
        </section>

        {/* Starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">Before you go live, an account that needs fixing, or one that has outgrown its setup.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>Preparing for ServiceTitan</h3>
                <p>You have bought ServiceTitan and want your data and processes ready for onboarding.</p>
                <ul>
                  <li>Customers, equipment and price lists cleaned</li>
                  <li>Job types and business units agreed first</li>
                  <li>Pricebook structure planned before import</li>
                  <li>Membership and follow-up rules written down</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>Account cleanup</h3>
                <p>You are live on ServiceTitan, but the account has drifted and the numbers do not add up.</p>
                <ul>
                  <li>Audit of pricebook, job types and business units</li>
                  <li>Campaigns and reporting fixed</li>
                  <li>Estimate follow-up and memberships rebuilt</li>
                  <li>Workflows documented for each role</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>Getting more from it</h3>
                <p>The basics work, and you want the features you are paying for to earn their keep.</p>
                <ul>
                  <li>Pro products configured where they fit</li>
                  <li>Marketing audiences for repeat work</li>
                  <li>Dashboards for managers and owners</li>
                  <li>Training for new and existing staff</li>
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
              <h2 id="impl-title">What ServiceTitan setup covers.</h2>
              <p className="sub">Some features depend on your ServiceTitan package and Pro add-ons. We confirm what yours includes during discovery.</p>
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

        {/* Plans */}
        <section className="pale sec" id="plans" aria-labelledby="plans-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Which ServiceTitan package?</p>
              <h2 id="plans-title">The package decides what you can set up.</h2>
              <p className="sub">We help you decide which features you will actually use before you buy or upgrade. We do not earn commission on your subscription.</p>
            </div>
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col"><span className="note">What changes the setup</span></th>
                  <th scope="col">Starter</th>
                  <th scope="col">Essentials</th>
                  <th scope="col">The Works</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.row}>
                    <th scope="row">{p.row}</th>
                    {([['Starter', p.starter], ['Essentials', p.essentials], ['The Works', p.works]] as const).map(([plan, value]) => (
                      <td key={plan} data-h={plan} className={value === 'Not included' ? 'no' : value === 'Included' ? 'yes' : undefined}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="compare-note note">
              Based on ServiceTitan&apos;s published package comparison, September 2026. Packages are priced per technician on request, and Pro products such as Pricebook Pro and Marketing Pro are add-ons. Check <a className="link" href="https://www.servicetitan.com/pricing" target="_blank" rel="noopener noreferrer">ServiceTitan&apos;s pricing page</a> before you buy.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a ServiceTitan project runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your trades, team, current account, package and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Process map</h3><p>Job types, business units, pricebook and membership rules agreed.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Pricebook, dispatch, follow-up, campaigns and reports.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Test calls, jobs, estimates and invoices run end to end.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Training by role, documentation and optional maintenance.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to ServiceTitan, or your onboarding plan</li>
                  <li><Check size={15} aria-hidden="true" />Your current pricebook or price lists</li>
                  <li><Check size={15} aria-hidden="true" />Membership terms and a list of current members</li>
                  <li><Check size={15} aria-hidden="true" />Your marketing channels and what you spend on each</li>
                  <li><Check size={15} aria-hidden="true" />One person who signs off how the office and field work</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />A pricebook technicians can navigate</li>
                  <li><Check size={15} aria-hidden="true" />Consistent job types and business units</li>
                  <li><Check size={15} aria-hidden="true" />Estimate follow-up and membership renewals</li>
                  <li><Check size={15} aria-hidden="true" />Campaigns that tie marketing to revenue</li>
                  <li><Check size={15} aria-hidden="true" />Dashboards for managers and owners</li>
                  <li><Check size={15} aria-hidden="true" />Training and workflows for every role</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is ServiceTitan right for you?</p>
              <h2 id="fit-title">ServiceTitan suits trade businesses with a full office behind the field team.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Established HVAC, plumbing, electrical and other residential or commercial trade businesses with several technicians, dedicated CSRs and dispatchers, and a focus on memberships, field sales and measurable marketing.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Worth comparing first</h3>
                <p>ServiceTitan is a large platform with a price and setup to match. Owner-operators and smaller teams are often better served by <Link className="link" href="/platforms/housecall-pro">Housecall Pro</Link> or <Link className="link" href="/platforms/jobber">Jobber</Link>, and we implement those too. Discovery is where we tell you honestly which way we would go.</p>
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
                <h2 id="proof-title">Previous ServiceTitan work by a Sage Kite delivery specialist</h2>
              </div>
              <div>
                <p className="note" style={{ marginBottom: '10px' }}>Examples are being prepared. We publish only approved, attributed work. Each example will show:</p>
                <ul>
                  <li>Specialist role and what they built</li>
                  <li>Project context and delivery period</li>
                  <li>Screenshots with customer details removed</li>
                  <li>Results only where there is evidence for them</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Where ServiceTitan sits */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where ServiceTitan sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">ServiceTitan runs the operation. The work around it decides what to change and keeps the phones busy. See how this fits <Link className="link" href="/industries/home-services">home services</Link>.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Which services, areas and memberships to grow first.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>Local SEO, Google Ads and email that bring in booked calls.</span></Link>
              <Link href="/services/recruitment-staffing" style={c('var(--ink)')}><strong>CRM and automation VA</strong><span>Someone to keep the pricebook, records and follow-up tidy.</span></Link>
              <Link href="/for-agencies" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>ServiceTitan work for your trade clients, under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">ServiceTitan consulting FAQs</h2>
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
              <p className="trust-note">Sage Kite is an independent consultant. ServiceTitan is a trademark of its owner. Sage Kite is not affiliated with, endorsed by or certified by ServiceTitan.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Calls</span>
                <span><span className="dot" style={c('var(--sky)')}></span>ServiceTitan</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Team</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Members</span>
              </p>
              <h2 id="final-title">Build ServiceTitan around how you book, sell and keep customers.</h2>
              <p className="sub">A discovery call looks at your current account or onboarding plan, where work is being lost, and what a fixed-scope project would cover.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
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
