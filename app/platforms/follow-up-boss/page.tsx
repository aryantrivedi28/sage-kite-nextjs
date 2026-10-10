import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const PAGE_URL = "https://www.sagekite.com/platforms/follow-up-boss";

export const metadata: Metadata = {
  title: "Follow Up Boss Setup & Consulting Services | Sage Kite",
  description: "Follow Up Boss setup from Sage Kite: lead flow, routing, Action Plans, Ponds, Smart Lists and deals, built around how your real estate team works.",
  keywords: ["Follow Up Boss consultant", "Follow Up Boss setup", "Follow Up Boss Action Plans", "Follow Up Boss lead routing", "Follow Up Boss migration", "real estate CRM setup"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Follow Up Boss setup and consulting services | Sage Kite",
    description: "Sage Kite sets up Follow Up Boss around how your real estate team works: lead sources, routing, Action Plans, Ponds, Smart Lists, deals and reporting.",
  },
  twitter: {
    card: "summary",
    title: "Follow Up Boss setup and consulting services | Sage Kite",
    description: "Follow Up Boss setup for agents, teams and brokerages: lead flow, routing, Action Plans, Ponds, Smart Lists, deals and agent accountability.",
  },
};

type Capability = { title: string; color: string; text: string; tags: string[]; offered: boolean };

// "What we implement" rows. Offered rows also feed hasOfferCatalog, so schema always matches the page.
const capabilities: Capability[] = [
  { title: "Lead sources and Lead Flow", color: "var(--sage)", offered: true, tags: ["Lead sources", "Lead Flow", "IDX"], text: "Every lead source connected and set up in Lead Flow, with the right agent or group and the right Action Plan, so no new lead lands without an owner." },
  { title: "Lead routing", color: "var(--coral)", offered: true, tags: ["Round Robin", "First to Claim", "Groups"], text: "Round Robin, First to Claim and agent groups, with advanced Lead Flow rules for price range, area or lead type, matched to how your team splits work." },
  { title: "Action Plans", color: "var(--sky)", offered: true, tags: ["Drip emails", "Tasks", "Stages"], text: "Action Plans for each lead type, with drip emails, call tasks and stage changes written in your voice, not one generic sequence for everyone." },
  { title: "Automations", color: "var(--ink)", offered: true, tags: ["Triggers", "Reassignment", "Notes"], text: "Automations that start the next Action Plan, reassign a lead or move it to a Pond when something happens, such as a stage change or a missed follow-up." },
  { title: "Ponds and Smart Lists", color: "var(--butter)", offered: true, tags: ["Ponds", "Smart Lists", "Call lists"], text: "Ponds for leads nobody is working, and Smart Lists that give each agent a daily list of who to call, text or email next." },
  { title: "Calling, texting and email", color: "var(--coral)", offered: true, tags: ["Dialer", "Texting", "Templates"], text: "The built-in calling, texting and email set up with templates and team inboxes where your plan includes them, so every touch is logged on the lead." },
  { title: "Deals pipeline", color: "var(--sage)", offered: true, tags: ["Buyers", "Sellers", "Deal stages"], text: "Deal pipelines for buyers and sellers with stages from appointment to closing, so the team can see what is in escrow and what is on pace." },
  { title: "Team setup and accountability", color: "var(--ink)", offered: true, tags: ["Users", "Roles", "Groups"], text: "Users, roles and groups for agents, lenders and admins, with the expectations and reporting that show who is following up and who is not." },
  { title: "Reporting and integrations", color: "var(--sky)", offered: true, tags: ["Lead sources", "Agent activity", "Zapier"], text: "Reports on lead source, speed to lead and agent activity, plus connections to your website, transaction tools and other apps through native integrations or Zapier." },
  { title: "Lead generation and IDX websites", color: "var(--light-sage)", offered: false, tags: ["Connected, not built"], text: "We connect your IDX website and lead sources to Follow Up Boss. We do not build websites or buy leads for you." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Follow Up Boss consulting",
    items: [
      { q: "What does a Follow Up Boss consultant do?", a: "A Follow Up Boss consultant designs how leads should move through your team, then builds it: lead sources and Lead Flow, routing, Action Plans, Automations, Ponds, Smart Lists, deal pipelines and reporting. Sage Kite starts by mapping how your team works a lead from first contact to closing, then configures Follow Up Boss to match." },
      { q: "Doesn't Follow Up Boss include onboarding?", a: "Yes. Follow Up Boss includes setup help on every plan, with personalized onboarding on Pro and enhanced onboarding on Platform. We work around it: designing lead flow and accountability around your team, writing Action Plans in your voice, and fixing accounts that have drifted since they were set up." },
      { q: "Can you fix an existing Follow Up Boss account?", a: "Yes. Common issues are new lead sources that were never added to Lead Flow, Action Plans nobody has reviewed in years, Ponds that have become graveyards and Smart Lists no agent works. We audit the account, fix routing and plans, and set up the lists and reports that keep agents following up." },
      { q: "How long does a Follow Up Boss project take?", a: "It depends on the number of lead sources, agents and Action Plans, and whether you are moving data from another CRM. Tightening an existing account is a smaller project than a full setup for a large team with a migration. Your proposal sets out the milestones and dates before work starts." },
    ],
  },
  {
    label: "Scope and setup",
    items: [
      { q: "Can you move our contacts into Follow Up Boss?", a: "Usually. We move contacts and history from spreadsheets or another real estate CRM, clean and de-duplicate them, and map them to the stages, tags and agents your Lead Flow and Smart Lists depend on. We confirm what your current system can export during discovery." },
      { q: "Can you set up lead routing in Follow Up Boss?", a: "Yes. We set up Round Robin, First to Claim and agent groups, and advanced Lead Flow rules where leads should go to different agents by source, price range, area or lead type. The aim is that every new lead reaches the right agent in minutes." },
      { q: "Can you write and build Action Plans?", a: "Yes. We write and build Action Plans for each lead type, such as new buyer, seller valuation, open house and long-term nurture, with drip emails, call tasks and stage changes. They are written in your voice and reviewed with you before they go live." },
      { q: "Which Follow Up Boss plan do we need?", a: "Grow is priced per user and suits agents and small teams. Pro includes 10 users, unlimited calling and texting, team inboxes and AI features. Platform includes 30 users and teams within teams. We recommend the smallest plan that fits how your team works." },
    ],
  },
  {
    label: "Working with Sage Kite",
    items: [
      { q: "Is Follow Up Boss owned by Zillow?", a: "Yes. Zillow Group acquired Follow Up Boss in 2023. It continues as its own product and connects to many lead sources beyond Zillow." },
      { q: "Does Follow Up Boss work outside the United States and Canada?", a: "Follow Up Boss is built around US and Canadian real estate, lead sources and calling. If you are elsewhere, check with Follow Up Boss before you commit. If it is not the right fit, we can recommend and implement a platform that works in your market." },
      { q: "Is Sage Kite a Follow Up Boss partner?", a: "Sage Kite is an independent consultant. Follow Up Boss is a trademark of its owner, and Sage Kite is not affiliated with, endorsed by or certified by Follow Up Boss or Zillow. We work on your behalf and are paid by you." },
      { q: "What happens after the project?", a: "You own the account and can run it. Handover includes training for agents and admins and documentation of your Lead Flow, Action Plans and Smart Lists. Where it helps, Sage Kite offers maintenance with a defined support scope, and a lead generation and sales support VA to keep follow-up moving." },
      { q: "Is Sage Kite only a Follow Up Boss consultant?", a: "No. Sage Kite is a business growth consultancy. Follow Up Boss is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. Follow Up Boss runs your follow-up; the broader work decides what to change and brings in the leads." },
    ],
  },
];

// Hero diagram: one illustrative lead journey. `human` marks the step kept with a person.
const journey = [
  { step: "New lead from a lead source", tool: "Lead Flow", color: "var(--sky)" },
  { step: "Routed to the right agent", tool: "Routing", color: "var(--sky)" },
  { step: "Action Plan starts", tool: "Action Plan", color: "var(--sky)" },
  { step: "Agent calls within minutes", tool: "You", color: "var(--butter)", human: true },
  { step: "Unworked leads go to a Pond", tool: "Pond", color: "var(--sky)" },
  { step: "Appointment set, deal opened", tool: "Deal", color: "var(--coral)" },
  { step: "Long-term nurture", tool: "Smart List", color: "var(--sage)" },
];

// From Follow Up Boss's published pricing, September 2026 (followupboss.com/pricing). Recheck when editing.
const plans = [
  { row: "Users", grow: "Priced per user", pro: "10 included", platform: "30 included" },
  { row: "Calling", grow: "Add-on", pro: "Included", platform: "Included" },
  { row: "Team inboxes", grow: "Not included", pro: "Included", platform: "Included" },
  { row: "AI features", grow: "Not included", pro: "Included", platform: "Included" },
  { row: "Teams within teams", grow: "Not included", pro: "Not included", platform: "Included" },
  { row: "Onboarding", grow: "Setup help", pro: "Personalized", platform: "Enhanced" },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function FollowUpBossPage() {
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
        "@id": "https://www.sagekite.com/platforms/follow-up-boss/#webpage",
        "url": PAGE_URL,
        "name": "Follow Up Boss setup and consulting services | Sage Kite",
        "description": "Sage Kite sets up Follow Up Boss for real estate agents, teams and brokerages: lead sources and Lead Flow, routing, Action Plans, Automations, Ponds, Smart Lists, calling, deals, team accountability and reporting.",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/follow-up-boss/#service" },
        "breadcrumb": { "@id": "https://www.sagekite.com/platforms/follow-up-boss/#breadcrumb" },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sagekite.com/platforms/follow-up-boss/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sagekite.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platforms", "item": "https://www.sagekite.com/platforms" },
          { "@type": "ListItem", "position": 3, "name": "Follow Up Boss" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.sagekite.com/platforms/follow-up-boss/#service",
        "name": "Follow Up Boss setup and consulting services",
        "serviceType": "Follow Up Boss setup, configuration and consulting",
        "description": "Real estate lead process mapping, Follow Up Boss lead sources and Lead Flow, Round Robin and First to Claim routing, Action Plans, Automations, Ponds and Smart Lists, calling, texting and email, deal pipelines, team setup, reporting, integrations, data migration, testing, training and handover.",
        "provider": { "@id": "https://www.sagekite.com/#organization" },
        // Follow Up Boss is built for US and Canadian real estate (see FAQ), so this service is scoped to those two markets.
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
          "name": "What we implement in Follow Up Boss",
          "itemListElement": capabilities.filter((cap) => cap.offered).map((cap) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": cap.title }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sagekite.com/platforms/follow-up-boss/#faq",
        "isPartOf": { "@id": "https://www.sagekite.com/#website" },
        "about": { "@id": "https://www.sagekite.com/platforms/follow-up-boss/#service" },
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
          /* Follow Up Boss page additions, built from the approved homepage system */
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
              <p className="label">Platforms / Follow Up Boss</p>
              <h1 id="hero-title">Follow Up Boss setup and consulting services</h1>
              <p className="sub">
                Sage Kite sets up Follow Up Boss around how your real estate team actually works leads. We map the path from new lead to closing, then build the routing, Action Plans, Smart Lists and deals to match.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your Follow Up Boss setup</Link>
                <Link href="#what-we-implement" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Agents and teams</span>
                <span><span className="dot" style={c('var(--sky)')}></span>New or existing accounts</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="journey-fig" aria-labelledby="journey-title">
              <div className="ui">
                <p className="ui-title"><b id="journey-title">A lead&apos;s journey in Follow Up Boss</b><span>Example</span></p>
                <ol className="jsteps">
                  {journey.map((j) => (
                    <li key={j.step} className={j.human ? 'human' : undefined} style={c(j.color)}>
                      <span className="dot"></span>{j.step}<small>{j.tool}</small>
                    </li>
                  ))}
                </ol>
                <p className="key">
                  <span><span className="dot" style={c('var(--sky)')}></span>Automated in Follow Up Boss</span>
                  <span><span className="dot" style={c('var(--butter)')}></span>Kept with an agent</span>
                </p>
              </div>
              <figcaption>Illustrative. Your lead flow is mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Problems */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Follow Up Boss is built for speed to lead. Most accounts are set up once and left.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>Lead sources nobody added</strong><p>New sources were connected, but never given an agent or Action Plan in Lead Flow.</p></li>
              <li><strong>Leads assigned, not called</strong><p>Routing works, but nothing shows who followed up and who did not.</p></li>
              <li><strong>Action Plans nobody reviews</strong><p>The same generic drip goes to buyers, sellers and open house visitors alike.</p></li>
              <li><strong>Ponds that became graveyards</strong><p>Unworked leads pile up in a Pond that nobody is responsible for.</p></li>
              <li><strong>Smart Lists no one works</strong><p>Agents start each day from their inbox instead of a list of who to call.</p></li>
              <li><strong>Deals tracked elsewhere</strong><p>Appointments and closings live in a spreadsheet, so the pipeline tells you nothing.</p></li>
            </ul>
            <p className="after-line">These are rarely software problems. They come from setting up Follow Up Boss once and never revisiting it as the team, the lead sources and the market change.</p>
          </div>
        </section>

        {/* Starting points */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">A new account, one that needs tightening, or a move to Follow Up Boss.</h2>
            </div>
            <div className="starts">
              <div className="start" style={c('var(--sage)')}>
                <h3>New Follow Up Boss setup</h3>
                <p>You are starting on Follow Up Boss and want routing and follow-up right from day one.</p>
                <ul>
                  <li>Lead sources and routing rules mapped first</li>
                  <li>Action Plans written for each lead type</li>
                  <li>Ponds, Smart Lists and deals set up</li>
                  <li>Agents trained on the daily routine</li>
                </ul>
              </div>
              <div className="start" style={c('var(--sky)')}>
                <h3>Account tune-up</h3>
                <p>You have used Follow Up Boss for a while and follow-up has slipped as the team grew.</p>
                <ul>
                  <li>Audit of Lead Flow, Action Plans and Ponds</li>
                  <li>Missing lead sources and rules fixed</li>
                  <li>Action Plans rewritten and Automations added</li>
                  <li>Reports that show who is following up</li>
                </ul>
              </div>
              <div className="start" style={c('var(--coral)')}>
                <h3>Move to Follow Up Boss</h3>
                <p>You are leaving spreadsheets or another real estate CRM.</p>
                <ul>
                  <li>Export and field mapping confirmed in discovery</li>
                  <li>Contacts cleaned and de-duplicated</li>
                  <li>Stages, tags and agents mapped on import</li>
                  <li>Old system retired once agents have switched</li>
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
              <h2 id="impl-title">What Follow Up Boss setup covers.</h2>
              <p className="sub">Some features depend on your Follow Up Boss plan. We confirm what yours includes during discovery.</p>
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
              <p className="label">Which Follow Up Boss plan?</p>
              <h2 id="plans-title">The plan decides how your team can work.</h2>
              <p className="sub">We recommend the smallest plan that fits your team. We do not earn commission on your subscription.</p>
            </div>
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col"><span className="note">What changes the setup</span></th>
                  <th scope="col">Grow</th>
                  <th scope="col">Pro</th>
                  <th scope="col">Platform</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.row}>
                    <th scope="row">{p.row}</th>
                    {([['Grow', p.grow], ['Pro', p.pro], ['Platform', p.platform]] as const).map(([plan, value]) => (
                      <td key={plan} data-h={plan} className={value === 'Not included' ? 'no' : value === 'Included' ? 'yes' : undefined}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="compare-note note">
              Based on Follow Up Boss&apos;s published pricing, September 2026. Follow Up Boss may change its plans, so check <a className="link" href="https://www.followupboss.com/pricing" target="_blank" rel="noopener noreferrer">Follow Up Boss&apos;s pricing page</a> before you buy.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a Follow Up Boss project runs.</h2>
            </div>
            <ol className="flow6">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your team, lead sources, current account and who signs off.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">03</div><h3>Lead map</h3><p>Routing rules, lead types, Action Plans and Ponds agreed.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Lead Flow, plans, Automations, lists and deals, then any migration.</p></li>
              <li style={c('var(--ink)')}><div className="bar"></div><div className="num">05</div><h3>Test</h3><p>Test leads run through every source and routing rule.</p></li>
              <li style={c('var(--light-sage)')}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Agent and admin training, documentation and optional maintenance.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Owner or admin access to Follow Up Boss, or your plan choice</li>
                  <li><Check size={15} aria-hidden="true" />A list of your lead sources and who should get each one</li>
                  <li><Check size={15} aria-hidden="true" />Exports from any CRM or spreadsheet you are moving from</li>
                  <li><Check size={15} aria-hidden="true" />Your current scripts, emails and follow-up expectations</li>
                  <li><Check size={15} aria-hidden="true" />One person who signs off how the team works leads</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Every lead source routed to an owner</li>
                  <li><Check size={15} aria-hidden="true" />Action Plans for each lead type, in your voice</li>
                  <li><Check size={15} aria-hidden="true" />Automations, Ponds and Smart Lists set up</li>
                  <li><Check size={15} aria-hidden="true" />Deal pipelines for buyers and sellers</li>
                  <li><Check size={15} aria-hidden="true" />Reports on speed to lead and agent activity</li>
                  <li><Check size={15} aria-hidden="true" />Training for agents and admins, and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is Follow Up Boss right for you?</p>
              <h2 id="fit-title">Follow Up Boss suits real estate teams that live on follow-up.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={c('var(--sage)')}>
                <h3>Usually a good fit</h3>
                <p>Agents, teams and brokerages in the United States and Canada that get leads from several sources and need them routed fast, worked consistently and tracked by agent. It is a focused CRM that connects to the lead sources and tools you already use.</p>
              </div>
              <div className="panel" style={c('var(--coral)')}>
                <h3>Worth comparing first</h3>
                <p>If you want the CRM, IDX website and lead generation in one platform, <Link className="link" href="/platforms/lofty">Lofty</Link> may fit better, and we implement that too. Teams outside the United States and Canada should check that their lead sources and calling are supported. Discovery is where we tell you honestly which way we would go.</p>
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
                <h2 id="proof-title">Previous Follow Up Boss work by a Sage Kite delivery specialist</h2>
              </div>
              <div>
                <p className="note" style={{ marginBottom: '10px' }}>Examples are being prepared. We publish only approved, attributed work. Each example will show:</p>
                <ul>
                  <li>Specialist role and what they built</li>
                  <li>Project context and delivery period</li>
                  <li>Screenshots with client and lead details removed</li>
                  <li>Results only where there is evidence for them</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Where Follow Up Boss sits */}
        <section className="pale sec" id="system" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where Follow Up Boss sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">Follow Up Boss runs your follow-up. The work around it decides where leads come from and keeps agents on them. See how this fits <Link className="link" href="/industries/real-estate">real estate</Link>.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Which lead sources to invest in and what to change first.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>SEO, Google Ads and Meta Ads that bring in your own leads.</span></Link>
              <Link href="/services/specialist-staffing#lead-generation-va" style={c('var(--ink)')}><strong>Lead generation and sales support VA</strong><span>Someone to work Smart Lists, set appointments and update the CRM.</span></Link>
              <Link href="/services/white-label" style={c('var(--sky)')}><strong>White-label for agencies</strong><span>Follow Up Boss work for your real estate clients, under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Follow Up Boss consulting FAQs</h2>
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
              <p className="trust-note">Sage Kite is an independent consultant. Follow Up Boss is a trademark of its owner. Sage Kite is not affiliated with, endorsed by or certified by Follow Up Boss or Zillow.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--butter)')}></span>Leads</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Follow Up Boss</span>
                <span><span className="dot" style={c('var(--sage)')}></span>Agents</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Closings</span>
              </p>
              <h2 id="final-title">Build Follow Up Boss around how your team works leads.</h2>
              <p className="sub">A discovery call looks at your lead sources, your current setup or plan, and what a fixed-scope project would cover.</p>
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
