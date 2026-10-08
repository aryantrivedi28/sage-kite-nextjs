import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries/nonprofits`;
const DESCRIPTION = "Donor CRM setup for nonprofits: clean records, consistent gift entry, prompt thank-yous and first-year journeys that turn a first gift into a second.";

export const metadata: Metadata = {
  title: "Nonprofit CRM Setup & Donor Automation | Sage Kite",
  description: DESCRIPTION,
  keywords: ["nonprofit CRM setup", "donor CRM", "donor retention automation", "first-time donor journey", "gift entry process", "Bloomerang setup"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Nonprofit CRM setup and donor automation | Sage Kite",
    description: "A donor database built for prompt thank-yous, the second gift and the supporters who quietly lapse. For charities and nonprofits.",
  },
  twitter: {
    card: "summary",
    title: "Nonprofit CRM setup and donor automation | Sage Kite",
    description: "A donor database built for prompt thank-yous, the second gift and the supporters who quietly lapse. For charities and nonprofits.",
  },
};

// Figures and platform behaviour on this page were checked against these sources
// on 7 October 2026. Recheck when FEP publishes a new report.
const FEP = { name: "AFP, Fundraising Effectiveness Project Q4 2025 report release (21 April 2026)", url: "https://afpglobal.org/news/fundraising-effectiveness-project-reports-strongest-revenue-growth-five-years-even-fewer" };
const SOURCES = [
  FEP,
  { name: "Bloomerang Help Center, About Journey Automation", url: "https://help.bloomerang.com/en/articles/12632840-about-journey-automation" },
  { name: "Bloomerang Help Center, Top 10 Journey Automation templates", url: "https://help.bloomerang.com/en/articles/12644587-top-10-journey-automation-templates" },
];

// Hero figure: one donor across the three timescales.
const journey = [
  { step: "First gift on a donation form", when: "Day 0", color: "var(--coral)" },
  { step: "Receipt and thank-you email", when: "Day 1", color: "var(--coral)" },
  { step: "Thank-you call from a staff member", when: "Week 1", color: "var(--ink)" },
  { step: "Update on what the gift did", when: "Month 1", color: "var(--sky)" },
  { step: "Second gift asked for, personally", when: "Month 4", color: "var(--sky)" },
  { step: "Year-end statement and renewal", when: "Year 1", color: "var(--butter)" },
];

const symptoms = [
  { title: "Gifts entered in batches", text: "Gift entry happens whenever someone has a spare afternoon, so the database is always a few weeks behind." },
  { title: "Thank-yous that arrive late", text: "Acknowledgements depend on one person remembering to send them, and they slip when that person is busy." },
  { title: "Every gift coded differently", text: "Funds, appeals and campaigns are recorded different ways by different people, so this year's report won't compare with last year's." },
  { title: "Duplicate records", text: "The same household appears three times, so a donor gets three letters and their giving history is split across them." },
  { title: "First-time donors treated like everyone", text: "Their next contact after the first gift is the general appeal, the same message as a ten-year supporter." },
  { title: "Lapsed donors found at year end", text: "You discover who stopped giving when you sit down to write the annual report." },
];

const clocks = [
  {
    name: "Days", sub: "The thank-you", color: "var(--coral)", q: "“Did my gift arrive? Did it matter?”",
    automate: "gift recording, receipts and a prompt thank-you, with every gift coded the same way",
    human: "a call or handwritten note for first-time donors and larger gifts",
    failure: "gifts wait for a batch, and the thank-you arrives weeks later",
  },
  {
    name: "Months", sub: "The second gift", color: "var(--sky)", q: "“Was that a one-off?”",
    automate: "a first-year journey: welcome, updates on what the gift did, and a timed task to ask again",
    human: "the renewal ask, made personally",
    failure: "the next contact is the year-end appeal, the same one everyone gets",
  },
  {
    name: "Years", sub: "The relationship", color: "var(--butter)", q: "“Do they still know who I am?”",
    automate: "lapsed donor reports, monthly giver check-ins and engagement tracking",
    human: "major donor relationships: calls, visits and invitations",
    failure: "a loyal donor stops giving and nobody notices for a year",
  },
];

// "The second gift": a first-year plan for every new donor.
const firstYearSteps = [
  { title: "Recorded and thanked within days", text: "Gift entry that doesn't wait for a batch, and receipts and thank-yous that go out without anyone having to remember." },
  { title: "Thanked by a person, too", text: "A staff task for a call or a note, for first-time donors or gifts above a level you choose, so the thank-you isn't only an email." },
  { title: "Shown what the gift did", text: "Updates in the first few months about what their money made possible, before anyone asks for more." },
  { title: "Asked again, personally", text: "A renewal ask timed within the first year, set up as a task for a person, with the result recorded so you can see what works." },
];

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we set up". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Records and households", color: "var(--sage)", text: "Donors, households and relationships structured so each person appears once and family giving adds up correctly, with duplicates merged.", tags: ["Households", "Duplicates", "Relationships"] },
  { title: "Gift entry and coding", color: "var(--coral)", text: "Funds, campaigns and appeals set up with written rules, so every gift is recorded the same way and reports compare year to year.", tags: ["Funds", "Campaigns", "Appeals"] },
  { title: "Acknowledgements and receipts", color: "var(--butter)", text: "Thank-you letters and emails, receipts and year-end statements set up so donors are thanked promptly and consistently.", tags: ["Thank-yous", "Receipts", "Statements"] },
  { title: "First-year donor journeys", color: "var(--sky)", text: "A welcome, updates on impact and a timed renewal ask for every first-time donor, with staff tasks for the calls and notes that need a person.", tags: ["Welcome", "Impact updates", "Renewal ask"] },
  { title: "Lapsed and monthly donor journeys", color: "var(--sky)", text: "Journeys for donors who have stopped giving and for monthly givers, triggered by giving activity rather than someone's memory.", tags: ["Lapsed donors", "Monthly givers"] },
  { title: "Engagement and retention reporting", color: "var(--ink)", text: "Retention, lapsed donors and engagement in dashboards the team will check, so they know who to thank, call and ask next.", tags: ["Retention", "Engagement", "Dashboards"] },
  { title: "Online giving and recurring gifts", color: "var(--coral)", text: "Donation forms and recurring giving connected to the database, so online gifts arrive coded and ready to acknowledge.", tags: ["Donation forms", "Recurring gifts"] },
  { title: "Email and segments", color: "var(--sage)", text: "Email templates and segments sent from the same database, so each message reflects the donor's giving history.", tags: ["Email", "Segments", "Newsletters"] },
  { title: "Migration, training and handover", color: "var(--light-sage)", text: "Data cleaned and prepared for conversion and checked afterwards, staff and volunteers trained, and a written gift-entry guide so you own the setup.", tags: ["Data prep", "Training", "Gift-entry guide"] },
];

const platforms = [
  { name: "Bloomerang", href: "/platforms/bloomerang", color: "var(--sky)", text: "Donor records, gift entry, acknowledgements, Journey Automation and retention reporting, built around keeping donors. For nonprofits in the US and Canada." },
  { name: "The database you already have", href: "/services/crm-implementation", color: "var(--sage)", text: "If your donor database works but has drifted, fixing it is usually cheaper and less disruptive than moving, and we'll say so." },
  { name: "Outside the US and Canada", href: "/services/consultancy", color: "var(--coral)", text: "Donor platforms vary by country, especially for receipts and tax relief. We help you choose one that works where you are, then set it up the same way." },
];

const limits = [
  { cause: "An appeal that doesn't move people", fix: "A CRM can get the right message to the right donor on time. It can't make a weak case for support compelling. That's writing and strategy, and worth fixing first." },
  { cause: "Major donor relationships", fix: "Your largest supporters need people, not sequences. Automation can remind you to call, track the conversation and flag when it's been too long. It shouldn't do the calling." },
  { cause: "Too few people to follow up", fix: "Tasks only help if someone has time to do them. For small teams we would rather build a few journeys that get done than many that get ignored." },
  { cause: "Receipts, tax and consent rules", fix: "We set up receipts and contact preferences, but receipt wording, tax rules and consent requirements where you operate are for your finance team or advisers to approve." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing and fixing a donor database",
    items: [
      { q: "Which donor CRM is best for a small nonprofit?", a: "There isn't one answer. Bloomerang suits nonprofits in the US and Canada that want donor retention built into the system. If you already have a donor database, fixing it is usually better than switching. Outside the US and Canada, the right platform depends on local receipts and tax rules, and we help you choose one that fits." },
      { q: "Can you clean up our donor database?", a: "Yes. Common problems are duplicate donors, households set up inconsistently, funds and appeals coded differently by different people, and automations nobody maintains. We audit the database, merge and fix records, write down the coding rules and rebuild the parts that matter." },
      { q: "Can you migrate our donor data to Bloomerang?", a: "When conversion is part of your Bloomerang plan, Bloomerang's team moves the data. We prepare it first, removing duplicates, standardising names and addresses and mapping funds and appeals, then check the records afterwards. If your plan does not include conversion, we scope the import with you in discovery." },
    ],
  },
  {
    label: "Thank-yous and retention",
    items: [
      { q: "How do you help first-time donors give again?", a: "We can't promise a retention rate, but we can make sure every first-time donor gets a first year: a prompt thank-you, a personal touch from staff, updates on what their gift did and a renewal ask timed within the year. Then we report on retention so you can see what is working." },
      { q: "How quickly should we thank a donor?", a: "Promptly and consistently. Rather than promise a number of days, we make sure gifts are recorded without waiting for a batch, receipts and thank-you emails go out automatically, and first-time donors get a task for a personal thank-you from a member of staff." },
      { q: "Will automated thank-yous feel impersonal?", a: "They shouldn't. Messages are written in your voice and reviewed with you before they go live. Automation handles timing and receipts. The calls, notes and conversations with your most committed supporters stay with people." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How is a nonprofit CRM project priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function NonprofitsIndustryPage() {
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
        "name": "Nonprofit CRM setup and donor automation | Sage Kite",
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
          { "@type": "ListItem", "position": 3, "name": "Nonprofits" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Nonprofit CRM setup and donor automation",
        "serviceType": "Nonprofit donor CRM implementation",
        "description": "Donor CRM setup for nonprofits: records and households, gift entry and coding, acknowledgements and receipts, first-year donor journeys, lapsed and monthly donor journeys, engagement and retention reporting, online giving, email and segments, data preparation, training and handover.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "Audience", "audienceType": "Nonprofits" },
          { "@type": "Audience", "audienceType": "Charities" },
          { "@type": "Audience", "audienceType": "Fundraising teams" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Nonprofit CRM setup",
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
          /* Nonprofits industry page, built on the same system as the real estate page */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .np-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .np-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .np-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .np-hero .sub{margin:20px 0 28px;max-width:54ch}
          .crumbs{display:flex;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .crumbs a{color:inherit;text-decoration:none}
          .crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one donor from first gift to renewal */
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

          /* The second gift */
          .db-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:start}
          .figs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
          .fig{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:24px}
          .fig b{display:block;font-size:clamp(2.6rem,5vw,3.6rem);line-height:1;font-weight:800;letter-spacing:-.03em;color:var(--ink);font-variant-numeric:tabular-nums}
          .fig span{display:block;margin-top:10px;font-size:.925rem;line-height:1.45}
          .fig-src{grid-column:1/-1;font-size:.8125rem;color:var(--sage)}
          .fig-src a{color:inherit}
          .db-copy p{font-size:1.05rem;line-height:1.65;margin-bottom:16px;max-width:62ch}
          .db-copy p:first-child{font-size:1.2rem;color:var(--ink)}
          .est{counter-reset:est;border-top:1px solid var(--light-sage)}
          .est li{counter-increment:est;display:grid;grid-template-columns:44px minmax(0,1fr);gap:16px;padding:18px 0;border-bottom:1px solid var(--light-sage)}
          .est li::before{content:counter(est,decimal-leading-zero);font-size:.875rem;font-weight:700;color:var(--c);padding-top:3px}
          .est strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:4px}
          .est p{font-size:.95rem;line-height:1.5;margin:0}

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
            .np-hero .hero-grid{grid-template-columns:1fr}
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
        <section className="np-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
              </div>
              <p className="crumbs"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span>Nonprofits</span></p>
              <h1 id="hero-title">Nonprofit CRM setup for the first gift and the second</h1>
              <p className="sub">
                Thanking a donor takes a day. Getting them to give again takes a year of small, well-timed contact, and few fundraising teams have the time to do that by hand. We set up your donor database so every first-time donor gets that year, not just the ones someone remembers.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your organisation</Link>
                <Link href="#what-we-set-up" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Charities and nonprofits</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Bloomerang, or the database you have</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">One donor, first gift to renewal</b><span>Example</span></p>
                <ol className="lsteps">
                  {journey.map((j) => (
                    <li key={j.step} style={c(j.color)}><span className="dot"></span>{j.step}<small>{j.when}</small></li>
                  ))}
                </ol>
              </div>
              <figcaption>Illustrative. Your donor stages and timings are mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Where nonprofits usually lose donors.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">None of these is a shortage of goodwill. They come from a small team doing gift entry, thank-yous and reporting by hand, around everything else they have to do.</p>
          </div>
        </section>

        {/* Three clocks */}
        <section className="sec" id="three-clocks" aria-labelledby="clocks-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How donor follow-up works</p>
              <h2 id="clocks-title">A donor is thanked in days and kept over years.</h2>
              <p className="sub">Most donor databases are good at recording gifts. The months after the first gift are where supporters are quietly kept or lost.</p>
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
            <p className="after-line">The months clock is the one most worth fixing. A first-time donor has already shown they care about your work. What they hear next decides whether that becomes a habit.</p>
          </div>
        </section>

        {/* The second gift */}
        <section className="tint sec" id="second-gift" aria-labelledby="gift-title">
          <div className="wrap db-grid">
            <div>
              <div className="head">
                <p className="label">The number the sector hasn&apos;t moved</p>
                <h2 id="gift-title">Fewer than half of donors give again. The second gift is the hardest one to win.</h2>
              </div>
            </div>
            <div className="db-copy">
              <div className="figs">
                <div className="fig"><b>43.3%</b><span>overall donor retention in 2025, up only slightly from 43.1%</span></div>
                <div className="fig"><b>−3.6%</b><span>change in the number of donors in 2025, a decline that began in 2021</span></div>
                <p className="fig-src">Source: <a href={FEP.url} target="_blank" rel="noopener noreferrer">{FEP.name}</a>.</p>
              </div>
              <p style={{ marginTop: 28 }}>The same report found giving grew in 2025, but from fewer donors, driven mostly by large gifts. Retention among repeat donors improved. Retention among new donors stayed flat, and the report calls turning a first gift into a second the sector&apos;s biggest unsolved problem.</p>
              <p>For a small team, that problem is mostly about time. A first-time donor needs a thank-you, a personal touch, some news about what their gift did and a well-timed second ask. Done by hand, that happens for some donors and not others. A donor CRM&apos;s job is to make it happen for all of them.</p>
              <ol className="est" style={c('var(--sky)')}>
                {firstYearSteps.map((s) => (
                  <li key={s.title}><div><strong>{s.title}</strong><p>{s.text}</p></div></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* What we set up */}
        <section className="rule sec" id="what-we-set-up" aria-labelledby="setup-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What we set up</p>
              <h2 id="setup-title">What a nonprofit CRM setup covers.</h2>
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
              <h2 id="platforms-title">Bloomerang, the database you have, or a local platform.</h2>
              <p className="sub">The right donor database depends on where you operate and how your team raises money. Moving is rarely the first step.</p>
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
              <p className="sub">A good setup makes thank-yous and follow-up consistent. Some problems sit outside the software, and we would rather say so up front.</p>
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
              <h2 id="process-title">How a nonprofit CRM project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>How gifts arrive, how they are entered and thanked today, and what the board and team need to report on.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Donor map</h3><p>Every stage from first gift to renewal, with who owns it and what happens next, agreed before anything is built.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Build and test</h3><p>Records, coding, acknowledgements and journeys, then a test donor taken through each one.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training for staff and volunteers, a written gift-entry guide, and optional support once you&apos;re live.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to your donor database, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />An export of your donor and gift data</li>
                  <li><Check size={15} aria-hidden="true" />Your current funds, appeals and campaign codes</li>
                  <li><Check size={15} aria-hidden="true" />Your thank-you letters, receipts and how they go out today</li>
                  <li><Check size={15} aria-hidden="true" />A development lead or director to sign off decisions</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Clean records, with duplicates merged</li>
                  <li><Check size={15} aria-hidden="true" />Written coding rules and a gift-entry guide</li>
                  <li><Check size={15} aria-hidden="true" />Acknowledgements and receipts that go out promptly</li>
                  <li><Check size={15} aria-hidden="true" />First-year and lapsed donor journeys, tested</li>
                  <li><Check size={15} aria-hidden="true" />Retention reports, documentation and training</li>
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
              <h2 id="conn-title">The work around a donor CRM.</h2>
            </div>
            <div className="conn">
              <Link href="/platforms/bloomerang" style={c('var(--sky)')}><strong>Bloomerang setup</strong><span>Records, gift entry, acknowledgements and Journey Automation.</span></Link>
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>Cleanup and migration on any platform.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>Email and campaigns that bring in new supporters.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--ink)')}><strong>Specialist staffing</strong><span>A VA to keep gift entry consistent and records clean.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Nonprofit CRM FAQs</h2>
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
                Figures and platform features checked in October 2026:{' '}
                {SOURCES.map((s, i) => (
                  <React.Fragment key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>{i < SOURCES.length - 1 ? '; ' : '. '}
                  </React.Fragment>
                ))}
                Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by the platforms or organisations listed.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--coral)')}></span>Days</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Months</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Years</span>
              </p>
              <h2 id="final-title">Build a system for the second gift, not just the first.</h2>
              <p className="sub">A discovery call looks at how gifts are entered and thanked today, the database you use, and where donors stop giving. We&apos;ll tell you plainly where we&apos;d start.</p>
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
