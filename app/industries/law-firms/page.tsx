import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries/law-firms`;
const DESCRIPTION = "Client intake and CRM setup for law firms: intake forms, consultation booking and reminders, follow-up after consultations and the handover into Clio Manage.";

export const metadata: Metadata = {
  title: "Law Firm Client Intake & CRM Setup | Sage Kite",
  description: DESCRIPTION,
  keywords: ["law firm client intake", "law firm CRM setup", "legal intake automation", "Clio Grow intake setup", "consultation booking for law firms", "law firm lead follow-up"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Law firm client intake and CRM setup | Sage Kite",
    description: "Answer the enquiry before another firm does: intake forms, consultation booking, follow-up and a clean hand-off, with judgement left to your lawyers.",
  },
  twitter: {
    card: "summary",
    title: "Law firm client intake and CRM setup | Sage Kite",
    description: "Answer the enquiry before another firm does: intake forms, consultation booking, follow-up and a clean hand-off, with judgement left to your lawyers.",
  },
};

// Platform behaviour described on this page was checked against Clio's help centre
// on 7 October 2026. Recheck when Clio changes how a feature works.
const CLIO_REMINDERS = { name: "Clio Help Center, Text Message Notifications and Reminders in Clio Grow", url: "https://help.clio.com/hc/en-us/articles/14164457325595-Text-Message-Notifications-and-Reminders-in-Clio-Grow" };
const CLIO_SETUP = { name: "Clio Help Center, Set Up Clio Grow", url: "https://help.clio.com/hc/en-us/articles/10485194916891-Set-Up-Clio-Grow" };
const CLIO_WORKFLOWS = { name: "Clio Help Center, Clio Grow Automated Workflows", url: "https://help.clio.com/hc/en-us/articles/17770743592219-Clio-Grow-Automated-Workflows" };

// Hero figure: one enquiry from first contact to an open matter.
const journey = [
  { step: "Web enquiry, acknowledgement sent", when: "Minute 1", color: "var(--coral)" },
  { step: "Intake form completed", when: "Same day", color: "var(--coral)" },
  { step: "Conflict check by the firm", when: "Day 1", color: "var(--ink)" },
  { step: "Consultation booked, reminders sent", when: "Day 2", color: "var(--sky)" },
  { step: "Engagement letter signed", when: "Week 1", color: "var(--sky)" },
  { step: "Matter opens in Clio Manage", when: "Week 1", color: "var(--butter)" },
];

const symptoms = [
  { title: "The 9pm enquiry", text: "Someone writes in the evening, often at a stressful moment, and hears nothing until the office opens." },
  { title: "The same questions, three times", text: "Details are taken on the phone, then on a form, then again at the consultation." },
  { title: "Consultations booked by email tennis", text: "Times go back and forth, nobody sends a reminder, and some consultations simply don't happen." },
  { title: "The consultation that went nowhere", text: "Someone met a lawyer and didn't instruct, and nobody followed up or recorded why." },
  { title: "Enquiries with no source", text: "The firm pays for directories and ads but can't see which enquiries became matters." },
  { title: "Retyping into Clio Manage", text: "A new client's details are typed in again when the matter opens, with the errors that brings." },
];

const clocks = [
  {
    name: "The enquiry", sub: "Hours", color: "var(--coral)", q: "“Can someone help me with this?”",
    automate: "a prompt acknowledgement, the intake form, and a booking link for the right consultation type",
    human: "deciding whether the firm can and should take the matter, including the conflict check",
    failure: "the enquiry waits until morning, and by then they may have contacted other firms",
  },
  {
    name: "The consultation", sub: "Days", color: "var(--sky)", q: "“What will this involve?”",
    automate: "booking, reminders by email and text, and a note of what to bring",
    human: "the consultation itself, and any advice",
    failure: "the time is agreed by email back-and-forth, and nobody reminds them",
  },
  {
    name: "The decision", sub: "Weeks", color: "var(--butter)", q: "“I need to think about it.”",
    automate: "a follow-up after the consultation, the engagement letter and e-signature, and the hand-off into Clio Manage",
    human: "the conversation about scope and fees",
    failure: "nobody follows up, and nobody records why they didn't instruct",
  },
];

// "What stays with the firm": where automation stops in legal intake.
const boundarySteps = [
  { title: "Acknowledging and qualifying: automated, within limits", text: "A prompt, plain reply that says what happens next, and the qualifying questions you choose. Nothing comments on the person's matter. If you use Clio's Grow AI, it is set up so it never gives legal advice." },
  { title: "The conflict check: your firm", text: "Intake can collect the names and details the check needs. Running it, and deciding what a conflict means, stays with you." },
  { title: "Whether to take the matter: your firm", text: "Intake routes the enquiry to the right person. It never accepts or declines a case on its own." },
  { title: "Every client-facing message: signed off by your firm", text: "Emails, texts and forms are written to your professional conduct rules and approved by the firm before they go live." },
];

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we set up". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Lead sources and Lead Inbox", color: "var(--coral)", text: "Website forms, directories, calls and referrals arriving in one inbox, with the source recorded so you can see which ones become matters.", tags: ["Web forms", "Directories", "Referrals"] },
  { title: "Intake forms by practice area", color: "var(--sky)", text: "Forms that collect what the lawyer needs, once, including the names a conflict check needs, with different questions for each practice area.", tags: ["Practice areas", "Conflict details"] },
  { title: "Matter pipeline", color: "var(--ink)", text: "Pipeline statuses that match how your firm actually moves a potential client from enquiry to signed engagement.", tags: ["Statuses", "Pipeline"] },
  { title: "Consultation booking and reminders", color: "var(--sky)", text: "Consultation types, availability and automated reminders, so potential clients can book without phone tag.", tags: ["Clio Scheduler", "Reminders"] },
  { title: "Follow-up after consultations", color: "var(--butter)", text: "A follow-up when a consultation doesn't become an instruction, with the reason recorded when someone decides not to go ahead.", tags: ["Follow-up", "Reasons"] },
  { title: "Engagement and e-signature", color: "var(--sage)", text: "Engagement letter templates and e-signature where your Clio plan includes them, so a new client can be signed without printing or chasing.", tags: ["Templates", "E-signature"] },
  { title: "Clio Manage hand-off", color: "var(--butter)", text: "The sync between Clio Grow and Clio Manage checked end to end, so a hired client arrives in Manage with complete contact and matter details.", tags: ["Sync", "No retyping"] },
  { title: "Intake reporting", color: "var(--sage)", text: "Enquiries, consultations and conversion by source and practice area, in reports partners will actually look at.", tags: ["Sources", "Conversion"] },
  { title: "Training and handover", color: "var(--light-sage)", text: "Intake staff and lawyers trained on the same process, and the setup documented so the firm owns it.", tags: ["Training", "Docs"] },
];

const platforms = [
  { name: "Clio Grow", href: "/platforms/clio-grow", color: "var(--ink)", text: "Lead Inbox, intake forms, Matter Pipeline, automated workflows and consultation booking, built for legal intake. The natural choice if you already use Clio Manage." },
  { name: "A general CRM", href: "/services/crm-implementation", color: "var(--sage)", text: "For firms that aren't on Clio, a general CRM can hold intake, booking and follow-up instead, set up to the same process." },
];

const limits = [
  { cause: "Legal advice and case decisions", fix: "Automation never gives advice or decides whether to take a case. Client messages are built to your conduct rules and signed off by your firm." },
  { cause: "Conflict checks", fix: "We can collect the information a conflict check needs and route it to whoever runs it. The check, and the decision about any conflict, stay with your firm." },
  { cause: "Capacity you don't have", fix: "A prompt acknowledgement buys time. It doesn't replace a lawyer. If nobody can take a consultation this week, faster intake only moves the queue." },
  { cause: "Confidentiality and data rules", fix: "We set up permissions and keep sensitive details out of automated messages where we can, but your obligations on confidentiality and data protection remain your firm's." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing and fixing intake",
    items: [
      { q: "Is Clio Grow the right intake tool for our firm?", a: "If you already use Clio Manage, it is usually the natural choice: Clio Grow handles intake before you are hired, Clio Manage handles the matter afterwards, and the two sync. If you aren't on Clio, a general CRM can hold intake and follow-up instead. We recommend the smallest setup that fits how your firm takes on clients." },
      { q: "Can you fix our existing Clio Grow setup?", a: "Yes. Common issues are default pipeline statuses nobody uses, workflows that were never switched on, intake forms that don't match the practice, lead sources that aren't recorded and a hand-off to Clio Manage that still needs retyping. We audit the setup, rebuild what matters and document the intake process." },
    ],
  },
  {
    label: "Intake and the law",
    items: [
      { q: "Will automation ever give legal advice?", a: "No. Automated messages acknowledge enquiries, send forms and booking links, and remind people about appointments. They don't comment on anyone's matter. If you use Clio's Grow AI, we set it up with limits so it never gives legal advice, and every client-facing message is signed off by your firm." },
      { q: "Do you run conflict checks?", a: "No. We set up intake to collect the names and details your conflict check needs, and route the enquiry to whoever runs it. The check, and the decision about any conflict, stay with your firm." },
      { q: "How do consultation reminders work?", a: "Clio Grow can add up to five automated reminders to a booked appointment, sent by email, or by text for prospective clients with a North American number. We set the timing with you and test it with a sample booking." },
      { q: "What happens when a client hires us?", a: "When a matter is converted from Clio Grow to Clio Manage, its contacts and matter details sync across, so nobody retypes them. We check that sync end to end before handover." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How is a law firm intake project priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function LawFirmsIndustryPage() {
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
        "name": "Law firm client intake and CRM setup | Sage Kite",
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
          { "@type": "ListItem", "position": 3, "name": "Law firms" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Law firm client intake and CRM setup",
        "serviceType": "Law firm client intake implementation",
        "description": "Client intake and CRM setup for law firms: lead sources and Lead Inbox, intake forms by practice area, matter pipeline, consultation booking and reminders, follow-up after consultations, engagement and e-signature, the Clio Manage hand-off, intake reporting, training and handover.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "BusinessAudience", "audienceType": "Law firms" },
          { "@type": "BusinessAudience", "audienceType": "Legal practices" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Law firm client intake setup",
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
          /* Law firms industry page, built on the same system as the other industry pages */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .lf-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .lf-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .lf-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .lf-hero .sub{margin:20px 0 28px;max-width:54ch}
          .crumbs{display:flex;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .crumbs a{color:inherit;text-decoration:none}
          .crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one enquiry from first contact to an open matter */
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

          /* What stays with the firm */
          .db-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:start}
          .figs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
          .fig{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:24px}
          .fig b{display:block;font-size:clamp(2.6rem,5vw,3.6rem);line-height:1;font-weight:800;letter-spacing:-.03em;color:var(--ink);font-variant-numeric:tabular-nums}
          .fig span{display:block;margin-top:10px;font-size:.925rem;line-height:1.45}
          .fig-src{grid-column:1/-1;font-size:.8125rem;color:var(--sage)}
          .fig-src a{color:inherit}
          .est{counter-reset:est;border-top:1px solid var(--light-sage)}
          .est li{counter-increment:est;display:grid;grid-template-columns:44px minmax(0,1fr);gap:16px;padding:18px 0;border-bottom:1px solid var(--light-sage)}
          .est li::before{content:counter(est,decimal-leading-zero);font-size:.875rem;font-weight:700;color:var(--c);padding-top:3px}
          .est strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:4px}
          .est p{font-size:.95rem;line-height:1.5;margin:0}
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
          .plats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:clamp(32px,4vw,44px)}
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
            .lf-hero .hero-grid{grid-template-columns:1fr}
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
        <section className="lf-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
              </div>
              <p className="crumbs"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span>Law firms</span></p>
              <h1 id="hero-title">Law firm client intake that answers the enquiry before another firm does</h1>
              <p className="sub">
                Someone fills in your form at 9pm, often at a stressful moment. Before they become a client there&apos;s intake, a conflict check, a consultation and an engagement letter. We set up your intake so each step happens promptly and in order, with your lawyers deciding everything that needs a lawyer.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your firm</Link>
                <Link href="#what-we-set-up" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Firms that take on clients through enquiries</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Clio Grow, with Clio Manage</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">One enquiry, first contact to open matter</b><span>Example</span></p>
                <ol className="lsteps">
                  {journey.map((j) => (
                    <li key={j.step} style={c(j.color)}><span className="dot"></span>{j.step}<small>{j.when}</small></li>
                  ))}
                </ol>
              </div>
              <figcaption>Illustrative. Your practice areas and timings are mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Where law firms usually lose potential clients.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">The legal work is rarely the problem. The gaps are in the handoffs around it: between the enquiry and the consultation, and between the consultation and the decision.</p>
          </div>
        </section>

        {/* Three steps */}
        <section className="sec" id="three-steps" aria-labelledby="clocks-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How legal intake works</p>
              <h2 id="clocks-title">Three steps before someone becomes a client.</h2>
              <p className="sub">Most intake setups are built for the first one. The consultation and the decision are where potential clients most often go quiet.</p>
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
              Clio Grow can add up to five automated reminders to a booked appointment, by email or, for North American numbers, by text,<sup><a href="#sources" aria-label="Source: Clio Help Center, reminders in Clio Grow">1</a></sup> and when a matter is converted to Clio Manage, its contacts and matter details sync across.<sup><a href="#sources" aria-label="Source: Clio Help Center, Set Up Clio Grow">2</a></sup> The work is deciding what each step should say, and when.
            </p>
          </div>
        </section>

        {/* What stays with the firm */}
        <section className="tint sec" id="judgement" aria-labelledby="est-title">
          <div className="wrap db-grid">
            <div>
              <div className="head">
                <p className="label">Being careful with legal work</p>
                <h2 id="est-title">Automation handles the admin. Judgement stays with your lawyers.</h2>
              </div>
            </div>
            <div className="db-copy">
              <p>Intake is partly admin and partly professional judgement, and the two are easy to blur once messages start sending themselves.</p>
              <p>So before anything is built, we agree where automation stops. In most firms the line falls in the same places, and every step that needs a lawyer stays with one.</p>
              <ol className="est" style={c('var(--ink)')}>
                {boundarySteps.map((s) => (
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
              <h2 id="setup-title">What a law firm intake setup covers.</h2>
              <p className="sub">Your proposal lists which of these your project includes. What is possible depends on your Clio plan, which we confirm in discovery.</p>
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
              <h2 id="platforms-title">Clio Grow, or a general CRM.</h2>
              <p className="sub">If you already use Clio Grow, the answer is usually to fix it rather than switch.</p>
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
              <h2 id="limits-title">What better intake won&apos;t fix.</h2>
              <p className="sub">A good setup makes intake prompt, consistent and visible. Some problems sit outside the software, and we would rather say so up front.</p>
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
              <h2 id="process-title">How a law firm intake project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>How enquiries arrive, who handles intake, how conflicts are checked and how consultations are booked today.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Intake map</h3><p>Every practice area with its intake form, consultation type, follow-up and engagement step, agreed before anything is built.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Build and test</h3><p>Forms, pipeline, workflows and booking, then a test enquiry run through to a matter in Clio Manage.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training for intake staff and lawyers, documentation, and optional support once you&apos;re live.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to Clio Grow and Clio Manage, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />Your practice areas, and the questions each one needs answered</li>
                  <li><Check size={15} aria-hidden="true" />How enquiries are handled and conflicts checked today</li>
                  <li><Check size={15} aria-hidden="true" />Your consultation types and engagement letter templates</li>
                  <li><Check size={15} aria-hidden="true" />A partner or practice manager to sign off client-facing wording</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Intake forms for each practice area</li>
                  <li><Check size={15} aria-hidden="true" />Consultation booking with reminders tested</li>
                  <li><Check size={15} aria-hidden="true" />Follow-up after consultations, with reasons recorded</li>
                  <li><Check size={15} aria-hidden="true" />The Clio Manage hand-off checked end to end</li>
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
              <h2 id="conn-title">The work around law firm intake.</h2>
            </div>
            <div className="conn">
              <Link href="/platforms/clio-grow" style={c('var(--ink)')}><strong>Clio Grow setup</strong><span>Lead Inbox, intake forms, pipeline and booking.</span></Link>
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>Setup, cleanup and migration on any platform.</span></Link>
              <Link href="/services/consultancy" style={c('var(--sky)')}><strong>Consultancy</strong><span>Mapping your intake before any software changes.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--coral)')}><strong>Specialist staffing</strong><span>An intake assistant to keep enquiries moving.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Law firm intake FAQs</h2>
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
                Platform features checked against Clio&apos;s documentation in October 2026. Sources: 1. <a href={CLIO_REMINDERS.url} target="_blank" rel="noopener noreferrer">{CLIO_REMINDERS.name}</a>. 2. <a href={CLIO_SETUP.url} target="_blank" rel="noopener noreferrer">{CLIO_SETUP.name}</a>. 3. <a href={CLIO_WORKFLOWS.url} target="_blank" rel="noopener noreferrer">{CLIO_WORKFLOWS.name}</a>. Nothing on this page is legal advice. Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by Clio.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--coral)')}></span>Enquiry</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Consultation</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Decision</span>
              </p>
              <h2 id="final-title">Answer the enquiry before another firm does.</h2>
              <p className="sub">A discovery call looks at how enquiries reach you, how intake and consultations work today, and where potential clients go quiet. We&apos;ll tell you plainly where we&apos;d start.</p>
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
