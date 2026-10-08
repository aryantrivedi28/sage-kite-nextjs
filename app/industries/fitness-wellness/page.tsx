import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries/fitness-wellness`;
const DESCRIPTION = "CRM setup for fitness studios, gyms and wellness businesses: intro offer follow-up, attendance-based retention, failed payments and win-back.";

export const metadata: Metadata = {
  title: "Fitness & Wellness CRM Setup & Automation | Sage Kite",
  description: DESCRIPTION,
  keywords: ["fitness studio CRM setup", "gym CRM automation", "intro offer conversion", "member retention automation", "Mindbody setup", "wellness business CRM"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Fitness and wellness CRM setup and automation | Sage Kite",
    description: "A system built for the first class, the members who start to drift, and the payments that quietly fail. For studios, gyms and wellness businesses.",
  },
  twitter: {
    card: "summary",
    title: "Fitness and wellness CRM setup and automation | Sage Kite",
    description: "A system built for the first class, the members who start to drift, and the payments that quietly fail. For studios, gyms and wellness businesses.",
  },
};

// Platform behaviour described on this page was checked against Mindbody's own pages
// on 7 October 2026. Recheck when Mindbody changes how a feature works.
const SOURCES = [
  { name: "Mindbody, Marketing tools", url: "https://www.mindbodyonline.com/business/marketing" },
  { name: "Mindbody Support, Autopay failed messages and notification FAQ", url: "https://support.mindbodyonline.com/s/article/204755397--Autopay-Failed-Messages-and-Notification-FAQs?language=en_US" },
  { name: "Mindbody Support, Why the AutoPay Failed Notification is not sent when an ACH, SEPA, Direct Debit or PAP payment fails", url: "https://support.mindbodyonline.com/s/article/Is-there-an-auto-email-that-notifies-me-when-an-ACH-or-EFT-payment-fails?language=en_US" },
];

// Hero figure: one client across the three timescales.
const journey = [
  { step: "Intro offer bought online", when: "Day 0", color: "var(--coral)" },
  { step: "Welcome text: what to bring, where to park", when: "Day 0", color: "var(--coral)" },
  { step: "First class, met by the instructor", when: "Day 2", color: "var(--ink)" },
  { step: "Check-in and membership offer", when: "Day 10", color: "var(--sky)" },
  { step: "Visits drop, instructor sends a note", when: "Month 3", color: "var(--sky)" },
  { step: "Card declined, details updated", when: "Month 5", color: "var(--butter)" },
];

const symptoms = [
  { title: "Intro offers that end in silence", text: "Someone comes to two classes, and the next thing they hear from you is the monthly newsletter." },
  { title: "Old pricing still on sale", text: "Years of pricing options and promotions are still bookable, so clients buy the wrong thing and staff can't tell what's current." },
  { title: "Enquiries in someone's inbox", text: "Website forms and Instagram messages are answered by whoever sees them, and never reach the system." },
  { title: "Nobody watching attendance", text: "The booking data shows a member drifting weeks before they cancel, but nobody is looking at it." },
  { title: "Declined payments chased by hand", text: "Failed autopays sit in a report until month end, if anyone checks it at all." },
  { title: "Everyone gets the same email", text: "New trial clients, five-year members and people who left last spring all receive identical messages." },
];

const clocks = [
  {
    name: "Days", sub: "The intro offer", color: "var(--coral)", q: "“Is this place for me?”",
    automate: "a welcome message, booking reminders, a check-in after the first visit, and a membership offer before the intro offer runs out",
    human: "the greeting at the first class, and a conversation about what they came for",
    failure: "the intro offer expires and nobody notices it happened",
  },
  {
    name: "Weeks", sub: "The habit", color: "var(--sky)", q: "“I'll go next week.”",
    automate: "segments and alerts for regulars whose visits drop, built from real attendance",
    human: "the instructor who notices and sends a personal note",
    failure: "the drift is visible in the data, but nobody is watching it",
  },
  {
    name: "Months", sub: "The membership", color: "var(--butter)", q: "“Is this still worth what I pay?”",
    automate: "renewal reminders, failed-payment follow-up, milestones and win-back for lapsed members",
    human: "the conversation when someone asks to cancel or pause",
    failure: "a card is declined, nobody follows up, and the membership lapses quietly",
  },
];

// "The member who didn't decide to leave": what happens to a failed payment.
const paymentSteps = [
  { title: "Card failures: the client is told", text: "Mindbody can email the client when a card autopay fails, asking them to update their details. It has to be switched on, and it only goes out when the autopay runs on the nightly schedule, not when one is run by hand." },
  { title: "Bank-debit failures: staff are told", text: "When an ACH, SEPA, Direct Debit or PAP payment fails, Mindbody turns it into a negative balance instead of sending that email. A staff alert makes sure someone sees it the next day." },
  { title: "Owned by a named person", text: "Someone checks the failed payments each week, from the dashboard or the autopay report, so they never belong to everyone and therefore no one." },
  { title: "Followed up by a person", text: "After one reminder, a member of staff mentions it at the front desk or makes a call. A third automated email rarely fixes a card problem." },
];

type Capability = { title: string; color: string; text: string; tags: string[] };

// "What we set up". Rendered as rows and listed in the Service schema (hasOfferCatalog),
// so the page and schema always match.
const capabilities: Capability[] = [
  { title: "Services, pricing options and contracts", color: "var(--sage)", text: "Classes, appointments, intro offers and memberships structured so clients buy the right thing, with old pricing options retired rather than left on sale.", tags: ["Classes", "Intro offers", "Memberships"] },
  { title: "Online booking", color: "var(--sky)", text: "Booking from your website and app set up so a new client can find a class, buy an intro offer and book in a few taps.", tags: ["Website", "App", "Intro offers"] },
  { title: "Lead capture and follow-up", color: "var(--coral)", text: "Enquiries from your website and social channels recorded in one place, with follow-up tasks so every enquiry gets a reply and you can see where each one came from.", tags: ["Web forms", "Social", "Tasks"] },
  { title: "Intro offer journeys", color: "var(--coral)", text: "Welcome messages, a check-in after the first visit and a membership offer timed before the intro offer ends, with staff tasks for the moments that need a person.", tags: ["Welcome", "Check-in", "Offer timing"] },
  { title: "Attendance-based retention", color: "var(--sky)", text: "Segments and alerts for members whose visits drop or who haven't booked in a while, so an instructor or manager can step in before they leave.", tags: ["Attendance", "Alerts", "Segments"] },
  { title: "Automated campaigns", color: "var(--butter)", text: "Email and text campaigns for welcome, milestones, birthdays and win-back, sent to segments built from real attendance rather than one list for everyone.", tags: ["Email", "Text", "Win-back"] },
  { title: "Payments and failed-payment follow-up", color: "var(--ink)", text: "Autopays, cancellation and late-cancel policies, the failed-autopay email for card payments, and staff alerts for bank-debit failures.", tags: ["Autopay", "Policies", "Declines"] },
  { title: "Reporting", color: "var(--sage)", text: "Intro offer conversion, retention, attendance and revenue, in reports a manager will actually check each week.", tags: ["Conversion", "Retention", "Revenue"] },
  { title: "Migration, training and handover", color: "var(--light-sage)", text: "Clients, memberships and pricing moved where your current system allows, front desk staff and instructors trained by role, and the setup documented so you own it.", tags: ["Migration", "Training", "Docs"] },
];

const platforms = [
  { name: "Mindbody", href: "/platforms/mindbody", color: "var(--coral)", text: "Booking, pricing options, memberships, payments, lead management and automated campaigns. Campaigns and lead management come with the Ultimate plan." },
  { name: "Mindbody with a separate CRM", href: "/platforms/activecampaign", color: "var(--sky)", text: "GoHighLevel or ActiveCampaign alongside your booking software, when you need follow-up your plan doesn't include, or run marketing across several businesses." },
  { name: "Another booking system", href: "/services/crm-implementation", color: "var(--sage)", text: "If you book through different software, we start with what you have and build the follow-up around it, rather than moving you for the sake of it." },
];

const limits = [
  { cause: "A timetable that doesn't fit", fix: "If classes are full at 6pm and empty at 11am, that's a timetable decision. Better follow-up won't fill a slot your members can't make." },
  { cause: "The first-class experience", fix: "Automation can get someone through the door and remind them to come back. Whether they do depends on the class, the instructor and how they were welcomed." },
  { cause: "Pricing nobody can explain", fix: "If your staff struggle to explain the options, a cleaner booking flow won't fix it. Simplifying the pricing usually helps more, and we'll say so before building anything." },
  { cause: "Messaging and consent rules", fix: "We build opt-outs into texts and emails, but consent rules where you operate, such as the TCPA in the US, CASL in Canada or GDPR in Europe, remain your business's responsibility." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing and fixing a platform",
    items: [
      { q: "Which software is best for a fitness studio or gym?", a: "There isn't one answer. Mindbody suits studios, gyms and wellness businesses that want booking, memberships, payments and marketing in one place, though its campaigns and lead management come with the Ultimate plan. Some businesses pair their booking software with a separate CRM such as GoHighLevel or ActiveCampaign for follow-up. If you already use a booking system, fixing it is usually better than switching." },
      { q: "Can you fix our existing Mindbody account?", a: "Yes. Common problems are years of old pricing options still on sale, intro offers with no follow-up, enquiries that never reach Mindbody, campaigns that were never set up and failed payments nobody owns. We audit the account, retire what is out of date, rebuild the follow-up and document how the front desk should use it." },
      { q: "Can you move our clients and memberships to Mindbody?", a: "We clean and prepare client, membership and pricing data for import, and check the records afterwards. Moving active autopays depends on your current payment processor, so we confirm what is feasible in discovery before it is included in scope." },
    ],
  },
  {
    label: "Intro offers, retention and payments",
    items: [
      { q: "How do you turn more intro offers into memberships?", a: "We can't promise a conversion rate, but we can make the follow-up consistent: a welcome before the first visit, a check-in afterwards, a membership offer timed before the intro offer runs out, and staff tasks for the conversations that need a person. Then we report on intro offer conversion so you can see what is working." },
      { q: "What happens when a member's payment fails?", a: "In Mindbody, a failed card autopay can email the client automatically, asking them to update their details, if that notification is switched on. Failed bank-debit payments such as ACH or Direct Debit don't send that email, so we set up a staff alert for them. Either way, someone owns the follow-up each week." },
      { q: "Will automated messages feel impersonal?", a: "They shouldn't. Messages are written in your voice for each situation and reviewed with you before they go live. Automation handles timing and reminders. The moments that matter, such as a first class or a request to cancel, stay with a person." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How is a fitness and wellness CRM project priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function FitnessWellnessIndustryPage() {
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
        "name": "Fitness and wellness CRM setup and automation | Sage Kite",
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
          { "@type": "ListItem", "position": 3, "name": "Fitness and wellness" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "Fitness and wellness CRM setup and automation",
        "serviceType": "Fitness and wellness CRM implementation",
        "description": "CRM and booking setup for fitness studios, gyms and wellness businesses: services, pricing options and contracts, online booking, lead capture and follow-up, intro offer journeys, attendance-based retention, automated campaigns, payments and failed-payment follow-up, reporting, migration, training and handover.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Place", "name": "Europe" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "New Zealand" }
        ],
        "audience": [
          { "@type": "BusinessAudience", "audienceType": "Fitness studios" },
          { "@type": "BusinessAudience", "audienceType": "Gyms" },
          { "@type": "BusinessAudience", "audienceType": "Wellness businesses" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Fitness and wellness CRM setup",
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
          /* Fitness and wellness industry page, built on the same system as the real estate page */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .fw-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .fw-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .fw-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .fw-hero .sub{margin:20px 0 28px;max-width:54ch}
          .crumbs{display:flex;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .crumbs a{color:inherit;text-decoration:none}
          .crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one client from intro offer to membership */
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

          /* Failed payments */
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
            .fw-hero .hero-grid{grid-template-columns:1fr}
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
        <section className="fw-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
              </div>
              <p className="crumbs"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span>Fitness and wellness</span></p>
              <h1 id="hero-title">Fitness and wellness CRM setup for the first class and the hundredth</h1>
              <p className="sub">
                An intro offer gets someone through the door. Whether they&apos;re still coming in a year depends on what happens after the second class, when their visits start to slip, and when a card payment fails. We set up your booking and CRM so none of those moments depends on someone remembering.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your business</Link>
                <Link href="#what-we-set-up" className="link">See what&apos;s included</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>Studios, gyms and wellness businesses</span>
                <span><span className="dot" style={c('var(--sky)')}></span>Mindbody, or the system you have</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="lead-fig" aria-labelledby="lead-title">
              <div className="ui">
                <p className="ui-title"><b id="lead-title">One client, intro offer to month five</b><span>Example</span></p>
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
              <h2 id="problems-title">Where studios and gyms usually lose members.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">Members rarely cancel on the day they stop coming. They drift first, and the drift usually shows in the booking data well before the cancellation email arrives.</p>
          </div>
        </section>

        {/* Three clocks */}
        <section className="sec" id="three-clocks" aria-labelledby="clocks-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How fitness follow-up works</p>
              <h2 id="clocks-title">A membership is won in days and kept over months.</h2>
              <p className="sub">Most setups put their effort into selling the intro offer. The weeks and months after it are where members are quietly kept or lost.</p>
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
            <p className="after-line">The data for the second and third clocks is usually already there. Mindbody, for example, can segment clients into new, regular and not booked in a while, and send win-back messages automatically. Someone just has to set it up and decide what happens next.</p>
          </div>
        </section>

        {/* Failed payments */}
        <section className="tint sec" id="failed-payments" aria-labelledby="pay-title">
          <div className="wrap db-grid">
            <div>
              <div className="head">
                <p className="label">The cancellation nobody chose</p>
                <h2 id="pay-title">Some members don&apos;t decide to leave. Their card does.</h2>
              </div>
            </div>
            <div className="db-copy">
              <p>A card expires, a payment fails, and if nobody follows up, the membership lapses. The member didn&apos;t make a decision. They just stopped being billed, and then stopped coming.</p>
              <p>How a failed payment is handled depends on how it was paid, and the difference is easy to miss. In Mindbody, card and bank-debit failures behave differently, so a setup that only covers one of them leaves the other to chance.</p>
              <ol className="est" style={c('var(--ink)')}>
                {paymentSteps.map((s) => (
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
              <h2 id="setup-title">What a fitness and wellness CRM setup covers.</h2>
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
              <h2 id="platforms-title">Mindbody, a separate CRM, or the system you have.</h2>
              <p className="sub">Booking software runs the schedule and the payments. Whether it should also run your follow-up depends on your plan and how you sell.</p>
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
              <p className="sub">A good setup makes follow-up consistent and visible. Some problems sit outside the software, and we would rather say so up front.</p>
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
              <h2 id="process-title">How a fitness and wellness CRM project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your offers and pricing, how new clients find you, and what happens after their first visit today.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Member map</h3><p>Every stage from enquiry to renewal, with who owns it and what happens next, agreed before anything is built.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Build and test</h3><p>Pricing, journeys, alerts and campaigns, then a test client taken through each one, including a failed payment.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training for the front desk, instructors and managers, documentation, and optional support once you&apos;re live.</p></li>
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
                  <li><Check size={15} aria-hidden="true" />Admin access to your booking software, or your platform choice</li>
                  <li><Check size={15} aria-hidden="true" />Your current pricing, intro offers and memberships</li>
                  <li><Check size={15} aria-hidden="true" />Where enquiries arrive today, including social messages</li>
                  <li><Check size={15} aria-hidden="true" />How the front desk handles new clients and cancellations now</li>
                  <li><Check size={15} aria-hidden="true" />An owner or manager to sign off decisions</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Pricing cleaned up, with old options retired</li>
                  <li><Check size={15} aria-hidden="true" />Intro offer journeys tested with a sample client</li>
                  <li><Check size={15} aria-hidden="true" />Attendance alerts and win-back campaigns running</li>
                  <li><Check size={15} aria-hidden="true" />Failed-payment follow-up for card and bank payments</li>
                  <li><Check size={15} aria-hidden="true" />Reports, documentation and training by role</li>
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
              <h2 id="conn-title">The work around a fitness and wellness CRM.</h2>
            </div>
            <div className="conn">
              <Link href="/platforms/mindbody" style={c('var(--coral)')}><strong>Mindbody setup</strong><span>Pricing, intro offers, leads, campaigns and retention.</span></Link>
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>Setup, cleanup and migration on any platform.</span></Link>
              <Link href="/services/marketing" style={c('var(--sky)')}><strong>Marketing</strong><span>The campaigns that bring new clients to the intro offer.</span></Link>
              <Link href="/services/specialist-staffing" style={c('var(--ink)')}><strong>Specialist staffing</strong><span>A VA to keep campaigns running and the data clean.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Fitness and wellness CRM FAQs</h2>
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
                Platform features checked against Mindbody&apos;s own pages in October 2026:{' '}
                {SOURCES.map((s, i) => (
                  <React.Fragment key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>{i < SOURCES.length - 1 ? '; ' : '. '}
                  </React.Fragment>
                ))}
                Mindbody notes that not all features are available in all regions or on all plans. Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by the platforms listed. GoHighLevel work is delivered with <a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer">GHL Scale Up</a>.
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
                <span><span className="dot" style={c('var(--sky)')}></span>Weeks</span>
                <span><span className="dot" style={c('var(--butter)')}></span>Months</span>
              </p>
              <h2 id="final-title">Build a system for the hundredth visit, not just the first.</h2>
              <p className="sub">A discovery call looks at your offers, how new clients find you, and where members start to slip away. We&apos;ll tell you plainly where we&apos;d start.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
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
