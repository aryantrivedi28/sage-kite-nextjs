import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/housecall-pro";

export const metadata: Metadata = {
  title: "Housecall Pro Setup & Consulting Services | Sage Kite",
  description: "Housecall Pro setup from Sage Kite: booking, dispatch, price book, estimate follow-up, service plans, reviews and campaigns for home service businesses.",
  keywords: ["Housecall Pro consultant", "Housecall Pro setup", "Housecall Pro price book", "Housecall Pro service plans", "Housecall Pro training", "home services CRM"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Housecall Pro setup and consulting services | Sage Kite",
    description: "Sage Kite sets up Housecall Pro around how home service businesses win and keep customers: booking, estimates, follow-up, service plans and campaigns.",
  },
  twitter: {
    card: "summary",
    title: "Housecall Pro setup and consulting services | Sage Kite",
    description: "Housecall Pro setup for home service businesses: booking, dispatch, price book, estimate follow-up, service plans, reviews and campaigns.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[]; offered: boolean };

// "What we implement" rows. Offered rows also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Capability[] = [
  { title: "Customers, tags and lead sources", color: "var(--sage)", offered: true, tags: ["Customers", "Tags", "Lead sources"], text: "Customer records, tags and lead sources set up consistently, so you can see who your customers are, what they have bought and where the work came from." },
  { title: "Online booking and intake", color: "var(--coral)", offered: true, tags: ["Online booking", "Chat", "CSR AI"], text: "Online booking, website chat and, where you use it, CSR AI, set up so every enquiry becomes a booked job or an estimate visit instead of a missed call." },
  { title: "Scheduling and dispatch", color: "var(--sky)", offered: true, tags: ["Job types", "Dispatch", "Arrival windows"], text: "Job types, schedules, dispatch rules and customer notifications, so the office knows who is where and the customer knows when to expect you." },
  { title: "Price book and estimates", color: "var(--butter)", offered: true, tags: ["Price book", "Options", "Photos"], text: "A flat-rate price book built for your trade, and estimates with options and photos, so technicians quote consistently and customers can say yes on the spot." },
  { title: "Estimate follow-up", color: "var(--ink)", offered: true, tags: ["Reminders", "Pipeline", "Tasks"], text: "Automated reminders for open estimates and, where you use it, Pipeline to track them, so quotes are chased before they go cold." },
  { title: "Invoicing and payments", color: "var(--coral)", offered: true, tags: ["Invoices", "Card on file", "QuickBooks"], text: "Invoices, payments in the field and card on file, with QuickBooks connected where your plan includes it, so money comes in without chasing." },
  { title: "Service plans", color: "var(--sage)", offered: true, tags: ["Maintenance plans", "Recurring visits", "Auto-invoicing"], text: "Maintenance plans and service agreements with recurring visits, card on file and automatic invoicing, and the reminders that renew them." },
  { title: "Reviews and campaigns", color: "var(--sky)", offered: true, tags: ["Review requests", "Email", "Postcards"], text: "Review requests after every finished job, and email and postcard Campaigns for seasonal reminders and repeat work that stop once a customer books." },
  { title: "Reporting and integrations", color: "var(--ink)", offered: true, tags: ["Lead sources", "Revenue", "Integrations"], text: "Reports on lead sources, estimates, jobs and revenue, and the integrations your business depends on, set up and checked." },
  { title: "Payroll and bookkeeping", color: "var(--light-sage)", offered: false, tags: ["Connected, not run"], text: "We connect Housecall Pro to your accounting tools. We do not run payroll or bookkeeping for you." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Housecall Pro consulting",
    items: [
      { q: "What does a Housecall Pro consultant do?", a: "A Housecall Pro consultant sets up Housecall Pro around how a home service business wins and keeps customers: customer records, online booking, scheduling and dispatch, the price book and estimates, estimate follow-up, payments, service plans, reviews and campaigns. Sage Kite starts by mapping the path from first call to repeat job, then configures Housecall Pro to match." },
      { q: "Doesn't Housecall Pro include onboarding?", a: "The MAX plan includes a dedicated onboarding specialist, and every plan includes phone and chat support. That help focuses on using the product. We focus on your process: how enquiries are captured, how estimates are followed up, how service plans are sold and renewed, and how past customers are brought back." },
      { q: "Can you fix an existing Housecall Pro account?", a: "Yes. Common issues are duplicate customers, no lead sources, a price book nobody has updated, estimates nobody follows up, and service plans tracked in a spreadsheet. We audit the account, clean the records, rebuild the price book and follow-up, and document how the office should use it." },
      { q: "How long does a Housecall Pro project take?", a: "It depends on the size of your price book, how many customers and service plans need to move, and how many technicians and job types you have. Tightening an existing account is a smaller project than a full setup with a migration. Your proposal sets out the milestones and dates before work starts." },
    ],
  },
  {
    label: "Scope and setup",
    items: [
      { q: "Can you move our customers into Housecall Pro?", a: "Usually. We move customer records, addresses and history from spreadsheets or another field service tool, clean and de-duplicate them, and add the tags and lead sources your reports depend on. We confirm what your current system can export during discovery." },
      { q: "Can you set up our Housecall Pro price book?", a: "Yes. We build a flat-rate price book around the work you actually do, with clear names, descriptions, photos and options, so technicians quote the same way and customers can compare choices on the estimate." },
      { q: "Can you set up service plans and maintenance agreements?", a: "Yes. We set up service plans with recurring visits, card on file and automatic invoicing, plus the reminders that renew them. Service Plans are a paid add-on on some Housecall Pro plans, so we confirm what yours includes first." },
      { q: "Can you set up Housecall Pro marketing campaigns?", a: "Yes. We set up review requests after finished jobs, and email and postcard Campaigns for seasonal tune-ups, maintenance reminders and past customers, with stop conditions so a message ends as soon as the customer books." },
      { q: "Which Housecall Pro plan do we need?", a: "Basic includes one user, Essentials five and MAX eight, with a dedicated onboarding specialist on MAX. Some features, including Service Plans, Pipeline and the Sales Proposal Tool, are paid add-ons depending on the plan. We recommend the smallest plan that fits your team and the way you sell." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Does Housecall Pro work outside the United States and Canada?", a: "Housecall Pro is built for home service businesses in the United States and Canada. If you are elsewhere, check with Housecall Pro before you commit. If it is not the right fit, we can recommend and implement a field service platform that works in your country." },
      { q: "Is Sage Kite a Housecall Pro partner?", a: "Sage Kite is an independent consultant. Housecall Pro is a trademark of its owner, and Sage Kite is not affiliated with, endorsed by or certified by Housecall Pro. We work on your behalf and are paid by you, not by Housecall Pro." },
      { q: "What happens after the project?", a: "You own the account and can run it. Handover includes training for the office and technicians and documentation of your price book, job types and follow-up. Where it helps, Sage Kite offers maintenance with a defined support scope, and a CRM and automation VA to follow up estimates and keep records clean." },
      { q: "Is Sage Kite only a Housecall Pro consultant?", a: "No. Sage Kite is a business growth consultancy. Housecall Pro is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Housecall Pro runs the jobs; the broader work decides what to change and keeps the phone ringing." },
    ],
  },
];

// Hero diagram: one illustrative customer journey. `human` marks the step kept with a person.
const journey = [
  { step: "Call, chat or online booking", tool: "Booking", color: "var(--sky)" },
  { step: "Estimate visit scheduled", tool: "Schedule", color: "var(--sky)" },
  { step: "Estimate with options sent", tool: "Estimate", color: "var(--sky)" },
  { step: "Open estimate followed up", tool: "Reminder", color: "var(--sky)" },
  { step: "Technician does the job", tool: "You", color: "var(--butter)", human: true },
  { step: "Invoiced and paid on site", tool: "Payment", color: "var(--coral)" },
  { step: "Review ask and service plan", tool: "Campaign", color: "var(--sage)" },
];

// From Housecall Pro's published pricing, September 2026 (housecallpro.com/pricing). Recheck when editing.
const plans = [
  { row: "Price, billed annually", basic: "$59/month", essentials: "$149/month", max: "$299/month" },
  { row: "Users included", basic: "1", essentials: "5", max: "8" },
  { row: "Onboarding", basic: "Phone and chat", essentials: "Phone and chat", max: "Dedicated specialist" },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function HousecallProPage() {
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
        "@id": "https://www.sagekite.com/platforms/housecall-pro/#webpage",
        "url": PAGE_URL,
        "name": "Housecall Pro setup and consulting services | Sage Kite",
        "description": "Sage Kite sets up Housecall Pro for home service businesses: customers and lead sources, online booking, scheduling and dispatch, price book and estimates, estimate follow-up, payments, service plans, reviews, campaigns and reporting.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/housecall-pro/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/housecall-pro/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/housecall-pro/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "Housecall Pro" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/housecall-pro/#service",
        "name": "Housecall Pro setup and consulting services",
        "serviceType": "Housecall Pro setup, configuration and consulting",
        "description": "Home service process mapping, Housecall Pro customers, tags and lead sources, online booking and intake, scheduling and dispatch, price book and estimates, estimate follow-up, invoicing and payments, service plans, review requests and campaigns, reporting, integrations, data migration, testing, training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        // Housecall Pro is built for US and Canadian home service businesses (see FAQ), so this service is scoped to those two markets.
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "Home service businesses" },
          { "@type": "Audience", "audienceType": "HVAC, plumbing and electrical contractors" },
          { "@type": "Audience", "audienceType": "Cleaning and landscaping businesses" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "What we implement in Housecall Pro",
          "itemListElement": capabilities.filter((cap) => cap.offered).map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/housecall-pro/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/housecall-pro/#service" },
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
          /* Housecall Pro page additions, built from the approved homepage system */
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
              <p className="label">Platforms / Housecall Pro</p>
              <h1 id="hero-title">Housecall Pro setup and consulting services</h1>
              <p className="sub">
                Sage Kite sets up Housecall Pro around how your home service business wins and keeps customers. We map the path from first call to repeat job, then build booking, estimates, follow-up and service plans to match.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your Housecall Pro setup</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Service plan setup</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="journey-fig" aria-labelledby="journey-title">
              <div className="ui">
                <p className="ui-title"><b id="journey-title">A customer journey in Housecall Pro</b><span>Example</span></p>
                <ol className="jsteps">
                  {journey.map((j) => (
                    <li key={j.step} className={j.human ? 'human' : undefined} style={c(j.color)}>
                      <span className="dot"></span>{j.step}<small>{j.tool}</small>
                    </li>
                  ))}
                </ol>
                <p className="key">
                  <span><span className="dot" style={c('var(--sky)')}></span>Automated in Housecall Pro</span>
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
              <h2 id="problems-title">Housecall Pro runs the jobs well. The follow-up around them is where work gets lost.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>Estimates that go cold</strong><p>Quotes are sent and never chased, so the work quietly goes to a competitor.</p></li>
              <li><strong>Customer records in pieces</strong><p>Duplicates, no tags and no lead source, so you cannot tell what brings in work.</p></li>
              <li><strong>A price book nobody updates</strong><p>Prices are out of date, so technicians quote from memory and margins slip.</p></li>
              <li><strong>Service plans on a spreadsheet</strong><p>Maintenance customers are tracked by hand, and renewals are missed.</p></li>
              <li><strong>Reviews left to chance</strong><p>Review requests are switched off or generic, so happy customers never say so.</p></li>
              <li><strong>No reason to call back</strong><p>No seasonal reminders, so one-off customers never become repeat customers.</p></li>
            </ul>
            <p className="after-line">These are rarely software problems. They come from setting up Housecall Pro for the day&apos;s jobs and not for the customer relationship around them.</p>
          </div>
        </section>

        {/* Starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">A new account, one that needs tightening, or a move to Housecall Pro.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>New Housecall Pro setup</h3>
                <p>You are starting on Housecall Pro and want the office and the field working the same way from day one.</p>
                <ul>
                  <li>Job types, price book and estimates set up first</li>
                  <li>Online booking and dispatch configured</li>
                  <li>Estimate follow-up and review requests switched on</li>
                  <li>Office and technicians trained</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>Account tune-up</h3>
                <p>You have used Housecall Pro for a while and follow-up has slipped as the business grew.</p>
                <ul>
                  <li>Audit of customers, price book and follow-up</li>
                  <li>Duplicates merged and lead sources added</li>
                  <li>Service plans moved off the spreadsheet</li>
                  <li>Campaigns for repeat and seasonal work</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>Move to Housecall Pro</h3>
                <p>You are leaving paper, spreadsheets or another field service tool.</p>
                <ul>
                  <li>Export and field mapping confirmed in discovery</li>
                  <li>Customers cleaned and de-duplicated</li>
                  <li>Service plans and history mapped where feasible</li>
                  <li>Old system retired once the office has switched</li>
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
              <h2 id="impl-title">What Housecall Pro setup covers.</h2>
              <p className="sub">Some features depend on your Housecall Pro plan or are paid add-ons. We confirm what yours includes during discovery.</p>
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
              <p className="label">Which Housecall Pro plan?</p>
              <h2 id="plans-title">Choose the plan for your team, then add what you need.</h2>
              <p className="sub">We recommend the smallest plan that fits your team and the way you sell. We do not earn commission on your subscription.</p>
            </div>
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col"><span className="note">What changes the setup</span></th>
                  <th scope="col">Basic</th>
                  <th scope="col">Essentials</th>
                  <th scope="col">MAX</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.row}>
                    <th scope="row">{p.row}</th>
                    {([['Basic', p.basic], ['Essentials', p.essentials], ['MAX', p.max]] as const).map(([plan, value]) => (
                      <td key={plan} data-h={plan}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="compare-note note">
              Based on Housecall Pro&apos;s published pricing, September 2026. Some features, including Service Plans, Pipeline and the Sales Proposal Tool, are paid add-ons depending on the plan. Check <a className="link" href="https://www.housecallpro.com/pricing/" target="_blank" rel="noopener noreferrer">Housecall Pro&apos;s pricing page</a> before you buy.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a Housecall Pro project runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your services, team, current account, data and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Journey map</h3><p>Booking, estimates, follow-up and service plan rules agreed.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Price book, job types, follow-up and campaigns, then any migration.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Test bookings, estimates and payments run end to end.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Office and technician training, documentation and optional maintenance.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to Housecall Pro, or your plan choice</li>
                  <li><Check size={15} aria-hidden="true" />Your services, current prices and job types</li>
                  <li><Check size={15} aria-hidden="true" />Exports from any tool or spreadsheet you are moving from</li>
                  <li><Check size={15} aria-hidden="true" />Your service plan terms and current maintenance customers</li>
                  <li><Check size={15} aria-hidden="true" />One person who signs off how the office works</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Clean customer records with lead sources</li>
                  <li><Check size={15} aria-hidden="true" />A price book and estimate templates your techs use</li>
                  <li><Check size={15} aria-hidden="true" />Booking, dispatch and notifications set up</li>
                  <li><Check size={15} aria-hidden="true" />Estimate follow-up and review requests running</li>
                  <li><Check size={15} aria-hidden="true" />Service plans and campaigns for repeat work</li>
                  <li><Check size={15} aria-hidden="true" />Training for the office and technicians</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is Housecall Pro right for you?</p>
              <h2 id="fit-title">Housecall Pro suits home service businesses that want one app for the whole job.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>HVAC, plumbing, electrical, cleaning, landscaping and handyman businesses in the United States and Canada, from owner-operators to growing teams, that want booking, dispatch, payments, reviews and marketing in one place.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Worth comparing first</h3>
                <p>If you mainly run recurring or quote-heavy work, <Link className="link" href="/platforms/jobber">Jobber</Link> is worth comparing, and we implement that too. Larger multi-location or commercial contractors may need a platform such as <Link className="link" href="/platforms/servicetitan">ServiceTitan</Link>. Discovery is where we tell you honestly which way we would go.</p>
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
                <h2 id="proof-title">Previous Housecall Pro work by a Sage Kite delivery specialist</h2>
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

        {/* Where Housecall Pro sits */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where Housecall Pro sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">Housecall Pro runs the jobs. The work around it decides what to change and keeps the calendar full. See how this fits <Link className="link" href="/industries/home-services">home services</Link>.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Which services, areas and customers to grow first.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>Local SEO and Google Ads that bring in booked jobs.</span></Link>
              <Link href="/services/recruitment-staffing" style={c('var(--ink)')}><strong>CRM and automation VA</strong><span>Someone to follow up estimates and keep records clean.</span></Link>
              <Link href="/for-agencies" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>Housecall Pro work for your trade clients, under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Housecall Pro consulting FAQs</h2>
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
              <p className="trust-note">Sage Kite is an independent consultant. Housecall Pro is a trademark of its owner. Sage Kite is not affiliated with, endorsed by or certified by Housecall Pro.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Enquiries</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Housecall Pro</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Team</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Repeat work</span>
              </p>
              <h2 id="final-title">Build Housecall Pro around how you win and keep customers.</h2>
              <p className="sub">A discovery call looks at your current setup or plan, how enquiries become jobs today, and what a fixed-scope project would cover.</p>
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
