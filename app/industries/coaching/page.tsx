import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries/coaching`;
const DESCRIPTION = "CRM and automation setup for coaches, educators and course creators: tag clean-up, enquiry-to-call journeys, onboarding by programme and student re-engagement.";

export const metadata: Metadata = {
  title: "CRM Setup for Coaches & Course Creators | Sage Kite",
  description: DESCRIPTION,
  keywords: ["CRM for coaches", "coaching business automation", "Kajabi automation setup", "course creator email automation", "student onboarding automation", "tag and segment clean-up"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "CRM and automation for coaches and course businesses | Sage Kite",
    description: "Automation that still makes sense after the next launch: clean tags, the right onboarding for each programme, and a nudge when students go quiet.",
  },
  twitter: {
    card: "summary",
    title: "CRM and automation for coaches and course businesses | Sage Kite",
    description: "Automation that still makes sense after the next launch: clean tags, the right onboarding for each programme, and a nudge when students go quiet.",
  },
};

// Platform behaviour described on this page was checked against vendor help centres
// on 7 October 2026. Recheck when a platform changes how a feature works.
const KAJABI_AUTOMATIONS = { name: "Kajabi Help Center, Understand Automation components", url: "https://help.kajabi.com/en/articles/12696170-understanding-automation-components" };
const KAJABI_ACTIVECAMPAIGN = { name: "Kajabi Help Center, Use ActiveCampaign with Kajabi", url: "https://help.kajabi.com/en/articles/17175682-use-activecampaign-with-kajabi" };
const AC_JUMP_TO = { name: "ActiveCampaign Help Center, About the \"Jump To\" automation action", url: "https://help.activecampaign.com/hc/en-us/articles/218813777-About-the-Jump-To-automation-action" };

// Hero figure: one student across the three journeys.
const journey = [
  { step: "Free guide downloaded, tagged by topic", when: "Day 1", color: "var(--sky)" },
  { step: "Nurture emails, then a call invitation", when: "Week 1", color: "var(--sky)" },
  { step: "Discovery call booked", when: "Week 3", color: "var(--coral)" },
  { step: "Programme bought, sales emails stop", when: "Week 4", color: "var(--coral)" },
  { step: "Quiet for 30 days, check-in sent", when: "Month 3", color: "var(--butter)" },
  { step: "Programme ends, next step offered", when: "Month 6", color: "var(--ink)" },
];

const symptoms = [
  { title: "A sequence from two launches ago", text: "A free guide still triggers emails written for an offer you no longer sell." },
  { title: "Tags nobody can explain", text: "Hundreds of tags, several meaning the same thing, and nobody sure which automations depend on them." },
  { title: "Onboarding for the wrong programme", text: "New clients get the welcome for a different product, because the purchase never told the system which one they bought." },
  { title: "Buyers still being sold to", text: "Someone joins the programme and keeps receiving the launch emails trying to sell it to them." },
  { title: "Calls booked, then lost", text: "Higher-priced programmes sold on calls, with no record of who has had a call, who is thinking and who said no." },
  { title: "Students who quietly stop", text: "People stop logging in, and nobody notices until they cancel or ask for a refund." },
];

const clocks = [
  {
    name: "The lead", sub: "Days", color: "var(--sky)", q: "“I just wanted the free guide.”",
    automate: "delivery of the guide, a tag for what it was about, and a short nurture that invites a next step",
    human: "the reply when someone answers your email",
    failure: "everyone gets the same sequence, whatever they downloaded",
  },
  {
    name: "The sale", sub: "Weeks", color: "var(--coral)", q: "“Can we talk before I commit?”",
    automate: "call booking and reminders, and sales emails that stop the moment someone buys",
    human: "the call itself, and the follow-up after a maybe",
    failure: "the new client keeps receiving launch emails for the programme they just bought",
  },
  {
    name: "The programme", sub: "Months", color: "var(--butter)", q: "“I fell behind and stopped logging in.”",
    automate: "onboarding matched to the product, progress milestones, and a check-in after a period of inactivity",
    human: "the coach noticing who is stuck and why",
    failure: "nobody sees the drift until a cancellation or a refund request",
  },
];

// "Clean up before you add": the order the work runs in on an existing account.
const cleanupSteps = [
  { title: "List what's live", text: "Every automation, sequence, form and funnel, with what triggers it and whether anyone still uses it." },
  { title: "Agree what tags mean", text: "A short naming system for interest, purchase and status. Duplicates merged, and unused tags removed once nothing depends on them." },
  { title: "Retire what's out of date", text: "Old launch sequences and orphaned forms switched off, after checking who is still inside them." },
  { title: "Then build", text: "New journeys built on the clean structure, so the next launch adds a journey rather than another layer." },
];

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we set up". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Audit and tag clean-up", color: "var(--sage)", text: "Every live automation, sequence, form and tag mapped, duplicates merged and old journeys switched off, before anything new is built.", tags: ["Audit", "Tags", "Segments"] },
  { title: "Lead magnets and opt-ins", color: "var(--sky)", text: "Free guides, webinars and quizzes delivered reliably, with each sign-up tagged by what it was for.", tags: ["Forms", "Lead magnets", "Webinars"] },
  { title: "Nurture sequences", color: "var(--sky)", text: "Short sequences matched to what someone signed up for, which stop or change once they buy.", tags: ["Sequences", "Exit rules"] },
  { title: "Enquiry-to-call journeys", color: "var(--coral)", text: "Application or enquiry forms, call booking and reminders for higher-priced programmes, with a record of who had a call and what happened next.", tags: ["Applications", "Booking", "Follow-up"] },
  { title: "Offers, checkout and access", color: "var(--ink)", text: "Offers that grant the right products, with checkout, payment options and what happens when a payment is cancelled set up the way you decide.", tags: ["Offers", "Checkout", "Access"] },
  { title: "Onboarding by programme", color: "var(--butter)", text: "A welcome, first steps and community access that match what each person actually bought.", tags: ["Welcome", "First steps", "Community"] },
  { title: "Progress and re-engagement", color: "var(--butter)", text: "Milestones for completed lessons, and a check-in when a student goes quiet, timed to how your programme runs.", tags: ["Milestones", "Inactivity"] },
  { title: "Renewals and next steps", color: "var(--coral)", text: "What happens when a programme or membership ends: a renewal, the next programme, or a clean exit.", tags: ["Renewals", "Next offer", "Alumni"] },
  { title: "Integrations, training and handover", color: "var(--light-sage)", text: "Kajabi and ActiveCampaign connected where you use both, your team trained, and every automation documented so the next launch starts from a clean map.", tags: ["Integrations", "Training", "Docs"] },
];

const platforms = [
  { name: "Kajabi", href: "/platforms/kajabi", color: "var(--butter)", text: "Courses, coaching, community, email and checkout in one place, for coaches and creators who want fewer tools rather than five separate ones." },
  { name: "ActiveCampaign", href: "/platforms/activecampaign", color: "var(--sky)", text: "Deeper segmentation and automation, with a sales CRM, for businesses that have outgrown a basic email tool. Often paired with a course platform." },
  { name: "A sales CRM alongside", href: "/platforms/keap", color: "var(--sage)", text: "GoHighLevel or Keap next to your course platform, when most revenue comes from high-ticket programmes sold on sales calls." },
];

const limits = [
  { cause: "An offer people don't want", fix: "A cleaner funnel won't rescue an offer people don't want. If conversion is low at every step, look at the offer first, and we'll say so before rebuilding the funnel." },
  { cause: "Content that loses people", fix: "A check-in can bring a student back to the course. If students stall at the same lesson every time, that's a question about the lesson, not the automation." },
  { cause: "The coaching itself", fix: "Automation can remind, track and nudge. Noticing what a student actually needs, and the relationship that keeps them, stays with you." },
  { cause: "Who you're allowed to email", fix: "We build opt-ins and unsubscribes properly, but consent and email rules, such as CAN-SPAM in the US, GDPR in Europe and CASL in Canada, remain your business's responsibility." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing and fixing a platform",
    items: [
      { q: "Should a coaching business use Kajabi, ActiveCampaign or both?", a: "It depends on where you sell and how much you need to automate. Kajabi suits coaches and creators who want courses, coaching, email, checkout and community in one place. ActiveCampaign suits businesses that need deeper segmentation and automation, or a sales CRM. Some use both: Kajabi for products and checkout, ActiveCampaign for email and automation. Kajabi's own integration sends form sign-ups to ActiveCampaign, and Zapier can pass purchases and access changes. We recommend the smallest setup that fits." },
      { q: "Can you clean up our existing Kajabi or ActiveCampaign account?", a: "Yes, and it's often the first job. We map every live automation, sequence, form and tag, agree a naming system, merge duplicates and switch off journeys from old launches once we've checked who is still inside them. Then we document what's left, so the next launch starts from a clean map." },
      { q: "Can you move us from another platform?", a: "Usually. Contacts and tags can normally be moved, and purchase history where the platforms allow it. Automations usually have to be rebuilt in the new platform rather than imported. What can be moved depends on what your current system can export, which we confirm in discovery." },
    ],
  },
  {
    label: "Journeys and students",
    items: [
      { q: "How do you stop people who've bought from getting sales emails?", a: "The sales journey is told when someone buys. In Kajabi, a purchase can trigger an automation that unsubscribes the buyer from a sequence or adds a tag. In ActiveCampaign, a Jump To action can end an automation once a contact meets a condition, such as a purchase. We test it with a sample purchase before launch." },
      { q: "Can the system tell us when a student stops engaging?", a: "Yes, within limits. Kajabi can trigger an automation when a person has been inactive for 7, 30, 60 or 90 days, and when a lesson is completed. We use those to send a check-in or alert you, timed to how your programme runs. What the check-in says, and who follows up, is a decision we make with you." },
      { q: "Will automated emails sound like us?", a: "They shouldn't. Emails are written in your voice for each journey and reviewed with you before they go live. Automation handles timing and reminders. The conversations that matter, like a sales call or a stuck student, still come from you." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How is a coaching business CRM project priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function CoachingIndustryPage() {
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
        "name": "CRM and automation for coaches and course businesses | Sage Kite",
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
          { "@type": "ListItem", "position": 3, "name": "Coaches & course businesses" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "CRM and automation for coaches and course businesses",
        "serviceType": "Coaching and course business CRM implementation",
        "description": "CRM and automation setup for coaches, educators and course creators: audit and tag clean-up, lead magnets and opt-ins, nurture sequences, enquiry-to-call journeys, offers, checkout and access, onboarding by programme, progress and re-engagement, renewals and next steps, integrations, training and handover.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "BusinessAudience", "audienceType": "Coaches" },
          { "@type": "BusinessAudience", "audienceType": "Course creators" },
          { "@type": "BusinessAudience", "audienceType": "Membership businesses" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Coaching and course business CRM setup",
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
          /* Coaching and course businesses industry page, built on the same system as the other industry pages */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .co-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .co-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .co-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .co-hero .sub{margin:20px 0 28px;max-width:54ch}
          .crumbs{display:flex;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .crumbs a{color:inherit;text-decoration:none}
          .crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one student from free guide to next programme */
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

          /* Clean-up first */
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
            .co-hero .hero-grid{grid-template-columns:1fr}
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
        <section className="co-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--sky)' }}></span>
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
              </div>
              <p className="crumbs"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span>Coaches &amp; course businesses</span></p>
              <h1 id="hero-title">CRM and automation for coaches that still makes sense after the next launch</h1>
              <p className="sub">
                A free guide brings someone in. A call turns them into a client. Then they need onboarding that matches what they bought, and a nudge if they stop logging in. We set up your platform so each step knows what happened before it, instead of every launch adding another layer.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your business</Link>
                <Link href="#what-we-set-up" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Coaches, educators and creators</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Kajabi, ActiveCampaign or both</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">One student, free guide to next programme</b><span>Example</span></p>
                <ol className="lsteps">
                  {journey.map((j) => (
                    <li key={j.step} style={c(j.color)}><span className="dot"></span>{j.step}<small>{j.when}</small></li>
                  ))}
                </ol>
              </div>
              <figcaption>Illustrative. Your offers and timings are mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Where coaching and course businesses usually lose people.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">The content is usually fine. What breaks is everything around it: each launch added automations on top of the last, and nobody went back to remove the old ones.</p>
          </div>
        </section>

        {/* Three journeys */}
        <section className="sec" id="three-journeys" aria-labelledby="clocks-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How coaching follow-up works</p>
              <h2 id="clocks-title">Three journeys, each on its own clock.</h2>
              <p className="sub">Most setups are built for the first one. The sale and the programme are where people are most often won, or quietly lost.</p>
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
              The platforms can do more of this than most accounts use. Kajabi can start an automation when a lesson is completed or when a person has been inactive for 7, 30, 60 or 90 days,<sup><a href="#sources" aria-label="Source: Kajabi Help Center, automation components">1</a></sup> and ActiveCampaign can end an automation as soon as a contact meets a condition, such as making a purchase.<sup><a href="#sources" aria-label="Source: ActiveCampaign Help Center, Jump To action">2</a></sup> The work is deciding what each one should do.
            </p>
          </div>
        </section>

        {/* Clean-up first */}
        <section className="tint sec" id="clean-up" aria-labelledby="est-title">
          <div className="wrap db-grid">
            <div>
              <div className="head">
                <p className="label">The part most accounts skip</p>
                <h2 id="est-title">Most accounts need subtracting before they need adding.</h2>
              </div>
            </div>
            <div className="db-copy">
              <p>Every launch leaves something behind: a form, a sequence, a handful of tags. On their own they&apos;re harmless. After a few years, nobody can say which automations are still live or what a tag actually means.</p>
              <p>Building a new journey on top of that usually makes it worse, because the new automation inherits tags and triggers nobody fully understands. So on an existing account, the work tends to run in this order.</p>
              <ol className="est" style={c('var(--sage)')}>
                {cleanupSteps.map((s) => (
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
              <h2 id="setup-title">What a coaching business setup covers.</h2>
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
              <h2 id="platforms-title">Kajabi, ActiveCampaign, or a sales CRM alongside.</h2>
              <p className="sub">Each suits a different way of selling. If you already use one of them, the answer is usually to fix it rather than switch.</p>
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
              <h2 id="limits-title">What better automation won&apos;t fix.</h2>
              <p className="sub">A good setup makes every journey clear and easy to change. Some problems sit outside the software, and we would rather say so up front.</p>
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
              <h2 id="process-title">How a coaching business project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your offers, how people find you, and how each programme is sold and delivered today.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Journey map</h3><p>Every offer with its entry point, sales path, onboarding and exit, agreed before anything is built.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Clean up and build</h3><p>Old automations retired and tags agreed, then journeys built and tested with a sample sign-up and purchase.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training for you and your team, documentation of every automation, and optional support once you&apos;re live.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to your platform, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />Your current offers, prices and what each one includes</li>
                  <li><Check size={15} aria-hidden="true" />Your lead magnets, and which offers they lead to</li>
                  <li><Check size={15} aria-hidden="true" />Existing email copy, or time to review drafts</li>
                  <li><Check size={15} aria-hidden="true" />Someone who can sign off decisions</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Live automations mapped, and old ones retired</li>
                  <li><Check size={15} aria-hidden="true" />A tag and segment system with written rules</li>
                  <li><Check size={15} aria-hidden="true" />A journey from sign-up to purchase for each offer</li>
                  <li><Check size={15} aria-hidden="true" />Onboarding and re-engagement matched to each programme</li>
                  <li><Check size={15} aria-hidden="true" />Documentation and training</li>
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
              <h2 id="conn-title">The work around a coaching business CRM.</h2>
            </div>
            <div className="conn">
              <Link href="/platforms/kajabi" style={c('var(--butter)')}><strong>Kajabi setup</strong><span>Products, offers, funnels, email and automations.</span></Link>
              <Link href="/platforms/activecampaign" style={c('var(--sky)')}><strong>ActiveCampaign implementation</strong><span>Segments, automations and a connected sales CRM.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>Campaigns and email around launches and programmes.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--ink)')}><strong>Specialist staffing</strong><span>A VA to keep the account tidy between launches.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Coaching business CRM FAQs</h2>
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
                Platform features checked against vendor documentation in October 2026. Sources: 1. <a href={KAJABI_AUTOMATIONS.url} target="_blank" rel="noopener noreferrer">{KAJABI_AUTOMATIONS.name}</a>. 2. <a href={AC_JUMP_TO.url} target="_blank" rel="noopener noreferrer">{AC_JUMP_TO.name}</a>. 3. <a href={KAJABI_ACTIVECAMPAIGN.url} target="_blank" rel="noopener noreferrer">{KAJABI_ACTIVECAMPAIGN.name}</a>. Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by the platforms listed. GoHighLevel work is delivered with <a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer">GHL Scale Up</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c('var(--sky)')}></span>Lead</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Sale</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Programme</span>
              </p>
              <h2 id="final-title">Build a system that&apos;s still clean after the next launch.</h2>
              <p className="sub">A discovery call looks at your offers, what&apos;s live in your account and where people drop out. We&apos;ll tell you plainly where we&apos;d start.</p>
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
