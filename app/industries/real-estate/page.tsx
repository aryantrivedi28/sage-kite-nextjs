import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries/real-estate`;
const DESCRIPTION = "Real estate CRM setup for agents, teams and brokerages: lead routing, follow-up for the months before a decision, and past-client touchpoints.";

export const metadata: Metadata = {
  title: "Real Estate CRM Setup & Automation | Sage Kite",
  description: DESCRIPTION,
  keywords: ["real estate CRM setup", "CRM for real estate teams", "real estate lead routing", "real estate lead follow-up", "real estate CRM automation", "past client follow-up"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Real estate CRM setup and automation | Sage Kite",
    description: "A CRM built for fast replies, slow decisions and the past clients who send your next deal. For agents, teams and brokerages.",
  },
  twitter: {
    card: "summary",
    title: "Real estate CRM setup and automation | Sage Kite",
    description: "A CRM built for fast replies, slow decisions and the past clients who send your next deal. For agents, teams and brokerages.",
  },
};

// Sources for the figures on this page. Recheck when NAR publishes a new edition.
const NAR_BUYERS_SELLERS = { name: "NAR, 2025 Profile of Home Buyers and Sellers (12 months to June 2025)", url: "https://www.nar.realtor/sites/default/files/2025-11/2025-profile-of-home-buyers-and-sellers-highlights-11-04-2025.pdf" };
const NAR_MEMBER_PROFILE = { name: "NAR, 2025 Member Profile (2024 business)", url: "https://www.nar.realtor/magazine/real-estate-news/sales-marketing/income-steady-even-as-market-slows-2025-member-trends" };

// Hero figure: one illustrative lead across the three timescales.
const journey = [
  { step: "Portal enquiry acknowledged", when: "Minute 1", color: "var(--coral)" },
  { step: "Routed to an agent, who calls", when: "Same hour", color: "var(--coral)" },
  { step: "“Not ready yet”: long-term plan starts", when: "Week 2", color: "var(--sky)" },
  { step: "Back on property alerts, agent checks in", when: "Month 4", color: "var(--sky)" },
  { step: "Appointment set, deal opened", when: "Month 7", color: "var(--ink)" },
  { step: "Closing anniversary, referral ask", when: "Year 2", color: "var(--butter)" },
];

const symptoms = [
  { title: "Saturday night's lead", text: "Nobody is quite sure who owns enquiries that arrive after hours or at the weekend." },
  { title: "Routing from three agents ago", text: "Rules written for a smaller team now send leads to the wrong people, or to nobody." },
  { title: "Follow-up that stops at day 14", text: "The plan ends around the time many buyers start searching in earnest." },
  { title: "Leads parked and forgotten", text: "Unworked leads pile up in a pond or a status that nobody checks." },
  { title: "One plan for everyone", text: "Buyers, sellers, renters and open-house sign-ins all get the same messages." },
  { title: "Past clients nobody calls", text: "The people most likely to refer you hear from you once a year, if at all." },
];

const clocks = [
  {
    name: "Minutes", sub: "The enquiry", color: "var(--coral)", q: "“Who's going to get back to me?”",
    automate: "instant acknowledgement, routing by source, area or price, an alert to the agent",
    human: "the first real conversation",
    failure: "the lead sits unclaimed while each agent assumes someone else has it",
  },
  {
    name: "Months", sub: "The decision", color: "var(--sky)", q: "“We're not ready yet.”",
    automate: "long-term plans, property alerts, check-in tasks timed to their moving date",
    human: "noticing when they turn active again",
    failure: "the plan runs out after two weeks and the lead goes quiet",
  },
  {
    name: "Years", sub: "The relationship", color: "var(--butter)", q: "“Who was that agent we used?”",
    automate: "closing anniversaries, market updates, review and referral requests",
    human: "the call, the visit, the handwritten note",
    failure: "past clients aren't tagged, so nothing ever reaches them",
  },
];

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we set up". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Lead sources and capture", color: "var(--sky)", text: "Every portal, website and IDX form, open-house sign-in and referral arriving in one place, with its source recorded so you can see what each one produces.", tags: ["Portals", "IDX", "Open houses"] },
  { title: "Lead routing", color: "var(--coral)", text: "Rules by source, area, price range or lead type, using round robin or first to claim, with a fallback for when nobody picks the lead up.", tags: ["Round robin", "First to claim", "Fallback"] },
  { title: "Speed-to-lead alerts", color: "var(--coral)", text: "An instant acknowledgement to the lead, a task and alert for the agent, and escalation to the team lead if a lead goes unclaimed.", tags: ["Acknowledgement", "Escalation"] },
  { title: "Follow-up plans by lead type", color: "var(--sage)", text: "Separate plans for buyers, seller valuations, open-house visitors and renters, written in your voice and reviewed with you before they go live.", tags: ["Buyers", "Sellers", "Open house"] },
  { title: "Long-term nurture", color: "var(--sky)", text: "Property alerts, market updates and timed check-ins for leads who are months away, with tasks that bring an agent back in when activity picks up.", tags: ["Alerts", "Check-ins"] },
  { title: "Past-client and sphere touchpoints", color: "var(--butter)", text: "Past clients and sphere contacts separated from new leads, with closing anniversaries, review requests and referral asks on a schedule.", tags: ["Anniversaries", "Referrals", "Reviews"] },
  { title: "Deals pipeline", color: "var(--ink)", text: "Buyer and seller pipelines from appointment to closing, so the team can see what is under contract and what is likely to close this month.", tags: ["Appointments", "Under contract"] },
  { title: "Agent accountability reporting", color: "var(--sage)", text: "Speed to lead, follow-up activity and source-to-closing reports that a team lead will actually check each week.", tags: ["Speed to lead", "Activity"] },
  { title: "Migration, training and handover", color: "var(--light-sage)", text: "Contacts moved, cleaned and de-duplicated, agents and admins trained by role, and the setup documented so you own it.", tags: ["Migration", "Training", "Docs"] },
];

const platforms = [
  { name: "Follow Up Boss", href: "/platforms/follow-up-boss", color: "var(--coral)", text: "Lead Flow, routing, Action Plans, Ponds and Smart Lists for teams that live on follow-up. Built around US and Canadian real estate." },
  { name: "Lofty", href: "/platforms/lofty", color: "var(--sky)", text: "IDX websites, Smart Plans, lead scoring and AI in one platform, suited to teams running real lead volume. US and Canada." },
  { name: "A general CRM", href: "/platforms/hubspot", color: "var(--sage)", text: "GoHighLevel or HubSpot, for teams outside the US and Canada, or brokerages that want marketing and CRM in one place." },
];

const limits = [
  { cause: "Agents who don't call", fix: "Routing and alerts put the lead in front of the right agent. Making the call is a management question. We give team leads the reporting to see who is following up." },
  { cause: "Weak lead sources", fix: "The CRM can show which sources turn into appointments and which don't. It can't make a poor source good, so the reports are there to help you decide where to spend." },
  { cause: "AI replies you haven't approved", fix: "Where a platform's AI responds to leads, we set limits on what it can do alone and what needs an agent's approval, so it doesn't speak for you unchecked." },
  { cause: "Calling and texting rules", fix: "We build opt-outs into texts and emails, but consent and calling rules, such as the TCPA in the US and CASL in Canada, remain your brokerage's responsibility." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing and fixing a CRM",
    items: [
      { q: "Which CRM is best for a real estate team?", a: "There isn't one answer. Follow Up Boss suits teams whose main job is fast, consistent follow-up. Lofty suits teams that want IDX websites, lead generation and AI in one platform. Both are built for the US and Canada. Elsewhere, or for brokerages that need marketing and CRM together, a general CRM such as GoHighLevel or HubSpot is often the better fit. We recommend the smallest setup that fits how your team works." },
      { q: "Can you fix our existing Follow Up Boss or Lofty account?", a: "Yes. Common problems are lead sources that were never connected, routing rules written for a smaller team, follow-up plans that stop after two weeks and past clients with no plan at all. We audit the account, fix what matters and document how the team should use it, usually without switching platforms." },
      { q: "Can you migrate our contacts from another CRM?", a: "Usually. We move contacts and history from spreadsheets or another real estate CRM, clean and de-duplicate them, and tag past clients and sphere contacts so they don't get treated as new leads. What can be moved depends on what your current system can export, which we confirm in discovery." },
    ],
  },
  {
    label: "Follow-up",
    items: [
      { q: "How fast should we respond to a new real estate lead?", a: "As fast as you reasonably can, and consistently. Rather than promise a number, we set up an instant acknowledgement, route the lead to an agent straight away, and escalate to a team lead if nobody claims it within a time you choose." },
      { q: "Will automated texts and emails sound robotic?", a: "They shouldn't. Plans are written in your voice for each lead type and reviewed with you before they go live. Automation handles timing and reminders. The conversations that matter still come from an agent." },
      { q: "Do you work with real estate teams outside the US and Canada?", a: "Yes. Follow Up Boss and Lofty are built around US and Canadian real estate, so elsewhere we usually set up a general CRM such as GoHighLevel or HubSpot, with the same routing, follow-up and past-client structure." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How is a real estate CRM project priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function RealEstateIndustryPage() {
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
        "name": "Real estate CRM setup and automation | Sage Kite",
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
          { "@type": "ListItem", "position": 3, "name": "Real estate" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Real estate CRM setup and automation",
        "serviceType": "Real estate CRM implementation",
        "description": "CRM setup for real estate agents, teams and brokerages: lead sources and capture, lead routing, speed-to-lead alerts, follow-up plans by lead type, long-term nurture, past-client and sphere touchpoints, deal pipelines, agent accountability reporting, migration, training and handover.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "BusinessAudience", "audienceType": "Real estate agents" },
          { "@type": "BusinessAudience", "audienceType": "Real estate teams" },
          { "@type": "BusinessAudience", "audienceType": "Real estate brokerages" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Real estate CRM setup",
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
          /* Real estate industry page, built on the same system as the service pages */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .re-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .re-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .re-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .re-hero .sub{margin:20px 0 28px;max-width:54ch}
          .crumbs{display:flex;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .crumbs a{color:inherit;text-decoration:none}
          .crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one lead across three timescales */
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

          /* Past-client figures */
          .db-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:start}
          .figs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
          .fig{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:24px}
          .fig b{display:block;font-size:clamp(2.6rem,5vw,3.6rem);line-height:1;font-weight:800;letter-spacing:-.03em;color:var(--ink);font-variant-numeric:tabular-nums}
          .fig span{display:block;margin-top:10px;font-size:.925rem;line-height:1.45}
          .fig-src{grid-column:1/-1;font-size:.8125rem;color:var(--sage)}
          .fig-src a{color:inherit}
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
            .re-hero .hero-grid{grid-template-columns:1fr}
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
        <section className="re-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
              </div>
              <p className="crumbs"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span>Real estate</span></p>
              <h1 id="hero-title">Real estate CRM setup for fast replies and slow decisions</h1>
              <p className="sub">
                A portal lead wants an answer within minutes. The same person may not buy for months, and their next move could come back to you as a referral years later. We set up your CRM to handle all three, so a lead isn&apos;t lost at any stage.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your team</Link>
                <Link href="#what-we-set-up" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Agents, teams and brokerages</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Follow Up Boss, Lofty or a general CRM</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">One buyer lead, start to referral</b><span>Example</span></p>
                <ol className="lsteps">
                  {journey.map((j) => (
                    <li key={j.step} style={c(j.color)}><span className="dot"></span>{j.step}<small>{j.when}</small></li>
                  ))}
                </ol>
              </div>
              <figcaption>Illustrative. Your lead types and timings are mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Where real estate teams usually lose leads.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">Most of these aren&apos;t software problems. The CRM was set up once, for a smaller team or a different mix of lead sources, and nobody has revisited it since.</p>
          </div>
        </section>

        {/* Three clocks */}
        <section className="sec" id="three-clocks" aria-labelledby="clocks-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How real estate follow-up works</p>
              <h2 id="clocks-title">Real estate runs on three clocks at once.</h2>
              <p className="sub">Most CRM setups are built for the first one. The other two are where many deals are won or quietly lost.</p>
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
            <p className="after-line">
              NAR&apos;s 2025 Profile of Home Buyers and Sellers put the typical buyer&apos;s home search at 10 weeks.<sup><a href="#sources" aria-label="Source: NAR 2025 Profile of Home Buyers and Sellers">1</a></sup> Plenty of leads first enquire well before that search begins, which is why a fortnight of follow-up so often ends too early.
            </p>
          </div>
        </section>

        {/* Past clients */}
        <section className="tint sec" id="past-clients" aria-labelledby="db-title">
          <div className="wrap db-grid">
            <div>
              <div className="head">
                <p className="label">The part of the database teams forget</p>
                <h2 id="db-title">Your next deal may already be in your CRM.</h2>
              </div>
            </div>
            <div className="db-copy">
              <div className="figs">
                <div className="fig"><b>20%</b><span>of the typical REALTOR&reg;&apos;s business came from repeat clients</span></div>
                <div className="fig"><b>21%</b><span>came through referrals from past clients and customers</span></div>
                <p className="fig-src">Source: <a href={NAR_MEMBER_PROFILE.url} target="_blank" rel="noopener noreferrer">{NAR_MEMBER_PROFILE.name}</a>. Medians from a survey of NAR members.</p>
              </div>
              <p style={{ marginTop: 28 }}>These are medians, so your own numbers will differ. The direction is what matters: a meaningful share of an agent&apos;s work tends to come from people they have already helped.</p>
              <p>Yet many real estate CRMs are set up almost entirely around new portal leads. Past clients sit in the database with no tag, no plan and no owner, and hear from the agent once a year, if at all. Separating them from new leads, and giving them a light but regular rhythm of contact, is often the cheapest improvement a team can make.</p>
            </div>
          </div>
        </section>

        {/* What we set up */}
        <section className="rule sec" id="what-we-set-up" aria-labelledby="setup-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What we set up</p>
              <h2 id="setup-title">What a real estate CRM setup covers.</h2>
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
              <h2 id="platforms-title">Follow Up Boss, Lofty, or a general CRM.</h2>
              <p className="sub">Each suits a different kind of team. If you already use one of them, the answer is usually to fix it rather than switch.</p>
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
              <p className="sub">A good setup makes follow-up easy and visible. Some problems sit outside the software, and we would rather say so up front.</p>
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
              <h2 id="process-title">How a real estate CRM project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your lead sources, team structure, and how leads are actually split and worked today.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Lead map</h3><p>Every lead type with its owner, plan and next step, agreed before anything is built.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Build and test</h3><p>Routing, plans and pipelines, then a test lead sent through from every source.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training for agents and admins by role, documentation, and optional support once you&apos;re live.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to your CRM, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />A list of your lead sources and who manages each one</li>
                  <li><Check size={15} aria-hidden="true" />How leads are split between agents today, even if it&apos;s informal</li>
                  <li><Check size={15} aria-hidden="true" />Your current scripts, templates and follow-up habits</li>
                  <li><Check size={15} aria-hidden="true" />A team lead or broker to sign off decisions</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Routing tested with a lead from every source</li>
                  <li><Check size={15} aria-hidden="true" />Follow-up plans for each lead type, in your voice</li>
                  <li><Check size={15} aria-hidden="true" />Past clients and sphere separated, with touchpoints scheduled</li>
                  <li><Check size={15} aria-hidden="true" />Pipelines and reports the team lead will check</li>
                  <li><Check size={15} aria-hidden="true" />Documentation and training by role</li>
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
              <h2 id="conn-title">The work around a real estate CRM.</h2>
            </div>
            <div className="conn">
              <Link href="/platforms/follow-up-boss" style={c('var(--coral)')}><strong>Follow Up Boss setup</strong><span>Lead Flow, routing, Action Plans, Ponds and Smart Lists.</span></Link>
              <Link href="/platforms/lofty" style={c('var(--sky)')}><strong>Lofty CRM services</strong><span>Routing, Smart Plans, scoring and AI for real estate.</span></Link>
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>Setup, cleanup and migration on any platform.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--ink)')}><strong>Specialist staffing</strong><span>A VA to keep the database clean and follow-up moving.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Real estate CRM FAQs</h2>
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
                Sources: 1. <a href={NAR_BUYERS_SELLERS.url} target="_blank" rel="noopener noreferrer">{NAR_BUYERS_SELLERS.name}</a>. 2. <a href={NAR_MEMBER_PROFILE.url} target="_blank" rel="noopener noreferrer">{NAR_MEMBER_PROFILE.name}</a>. REALTOR&reg; is a trademark of the National Association of REALTORS&reg;. Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by NAR or the platforms listed. GoHighLevel work is delivered with <a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer">GHL Scale Up</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--coral)')}></span>Minutes</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Months</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Years</span>
              </p>
              <h2 id="final-title">Build a CRM for the whole cycle, not just the first call.</h2>
              <p className="sub">A discovery call looks at your lead sources, how your team works leads today, and where they go quiet. We&apos;ll tell you plainly where we&apos;d start.</p>
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
