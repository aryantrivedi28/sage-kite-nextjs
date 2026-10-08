import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from 'next';
import { PLATFORMS } from '@/content/platforms';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/industries`;
const DESCRIPTION = "CRM and automation set up for how your industry sells: home services, real estate, law firms, coaches, service businesses, fitness studios and nonprofits.";

export const metadata: Metadata = {
  title: "CRM and Automation by Industry | Sage Kite",
  description: DESCRIPTION,
  keywords: ["industry CRM setup", "CRM for home services", "real estate CRM setup", "law firm client intake", "CRM for fitness studios", "nonprofit donor CRM"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "CRM and automation by industry | Sage Kite",
    description: "A CRM set up for how your customers decide: the right follow-up at the right speed, and a person stepping in where one is needed.",
  },
  twitter: {
    card: "summary",
    title: "CRM and automation by industry | Sage Kite",
    description: "A CRM set up for how your customers decide: the right follow-up at the right speed, and a person stepping in where one is needed.",
  },
};

type Shape = { label: string; color: string };
const URGENT = 'var(--coral)';
const CONSIDERED = 'var(--sky)';
const RECURRING = 'var(--butter)';

type Industry = {
  id: string;
  name: string;
  color: string;
  shape: Shape;
  who: string;
  problem: string;
  build: string[];
  /** Names from content/platforms.ts. A platform with a published page is linked. */
  platforms: string[];
  limit: string;
  /** Industry page under /industries, once it exists. Linked from the row. */
  page?: string;
};

// "Where each industry tends to lose customers". Rendered as rows and listed in the
// Service schema (hasOfferCatalog), so the page and schema always match.
const industries: Industry[] = [
  {
    id: "home-services", name: "Home services", color: "var(--sky)", page: "/industries/home-services",
    shape: { label: "Urgent + recurring", color: URGENT },
    who: "Plumbing, HVAC, electrical, cleaning and other trade businesses.",
    problem: "Calls get answered on a roof or under a sink, and the estimate goes out when someone is back at the office. The quote nobody follows up is often the easiest job to win back: the customer already said they were interested. Service plans tend to slip first when the diary is full.",
    build: ["Missed-call and web enquiry capture", "Estimate follow-up that stops once the job is booked", "Service plan reminders and renewals", "Review requests after the job is actually finished"],
    platforms: ["ServiceTitan", "Housecall Pro", "Jobber"],
    limit: "If pricing lives in one person's head, quotes stay slow. A proper pricebook helps more than automation.",
  },
  {
    id: "real-estate", name: "Real estate", color: "var(--coral)", page: "/industries/real-estate",
    shape: { label: "Urgent, then slow", color: URGENT },
    who: "Agents, teams and brokerages handling buyer and seller leads.",
    problem: "Leads come from portals, the website, open houses and referrals, and not evenly. A routing rule that worked with three agents gets murky with eight, and nobody is sure who owns Saturday night's lead. Then there's the buyer who won't be ready for six months, which is where follow-up usually thins out.",
    build: ["Routing rules that match how the team works today", "Long-term follow-up plans for the months before a decision", "Accountability reporting the team lead will actually check", "Past-client and referral touchpoints"],
    platforms: ["Follow Up Boss", "Lofty"],
    limit: "Routing decides who gets the lead. It doesn't make that agent pick up the phone.",
  },
  {
    id: "law-firms", name: "Law firms", color: "var(--ink)", page: "/industries/law-firms",
    shape: { label: "Considered", color: CONSIDERED },
    who: "Firms that take on new clients through enquiries and consultations.",
    problem: "The gap is usually between the enquiry and the consultation. Someone fills in a form at 9pm, often at a stressful moment, and hears nothing until a conflict check is done and a slot is found. By then they may have contacted two other firms.",
    build: ["Intake forms that collect what the lawyer needs, once", "Consultation booking and reminders", "Follow-up when a consultation doesn't become an instruction", "A clean handover into Clio Manage when a matter opens"],
    platforms: ["Clio Grow"],
    limit: "Automation never gives advice or decides whether to take a case. Client messages are built to your conduct rules and signed off by your firm.",
  },
  {
    id: "coaching", name: "Coaches & course businesses", color: "var(--butter)", page: "/industries/coaching",
    shape: { label: "Considered + recurring", color: CONSIDERED },
    who: "Coaches, educators and creators selling programmes, courses and memberships.",
    problem: "The content is usually fine. What breaks is everything around it: a free guide that triggers a sequence from two launches ago, onboarding that assumes someone bought a different programme, and so many tags and funnels that nobody knows which automations are still live.",
    build: ["A tag and segment clean-up before anything new is added", "Enquiry-to-call journeys for higher-priced programmes", "Onboarding that matches what someone actually bought", "Re-engagement for students who stop logging in"],
    platforms: ["Kajabi", "ActiveCampaign"],
    limit: "A cleaner funnel won't rescue an offer people don't want. If conversion is low at every step, look at the offer first.",
  },
  {
    id: "service-businesses", name: "Client-based service businesses", color: "var(--sage)",
    shape: { label: "Considered", color: CONSIDERED },
    who: "Photographers, planners, designers, consultants and studios working project by project.",
    problem: "Enquiry, questionnaire, proposal, contract, deposit, scheduling, reminders, final payment, handover. Each step is simple. Fifteen of them across thirty clients at different stages is where things slip, usually between the signed contract and the final invoice.",
    build: ["Workflows mapped to your real client journey, not the template", "Proposals, contracts and invoices that fill in the right details", "Payment schedules and polite reminders", "Forms that ask for information once, not three times"],
    platforms: ["Dubsado", "HoneyBook"],
    limit: "If packages change with every proposal, the workflow keeps breaking. Settle the offer, then automate it.",
  },
  {
    id: "fitness-wellness", name: "Fitness & wellness", color: "var(--coral)", page: "/industries/fitness-wellness",
    shape: { label: "Recurring", color: RECURRING },
    who: "Studios, gyms and wellness centres with classes, memberships and intro offers.",
    problem: "Intro offers are easy to sell and hard to convert: someone comes twice, and the next thing they hear is a general newsletter. Members rarely cancel the day they stop coming. They drift first, and the drift usually shows in attendance well before the cancellation email.",
    build: ["Intro offer journeys that end in a real conversation", "Alerts when a regular's attendance drops", "Renewal and failed-payment follow-up", "Win-back for lapsed members"],
    platforms: ["Mindbody"],
    limit: "Full at 6pm and empty at 11am is a timetable decision, not a CRM one.",
  },
  {
    id: "nonprofits", name: "Nonprofits", color: "var(--sky)", page: "/industries/nonprofits",
    shape: { label: "Recurring", color: RECURRING },
    who: "Fundraising teams managing donors, gifts and supporter relationships.",
    problem: "Most fundraisers will tell you the second gift matters more than the first. Yet the thank-you often depends on someone remembering, and gift entry happens in batches when someone has a spare afternoon. By the time the database is current, the moment to say thank you properly has passed.",
    build: ["A gift entry process that keeps the database trustworthy", "Prompt thank-yous that still read like a person wrote them", "A dedicated journey for first-time donors", "Lapsed donor reports the team can act on"],
    platforms: ["Bloomerang"],
    limit: "Major donors need relationships, not sequences. Automation can remind you to call. It shouldn't do the calling.",
  },
  {
    id: "cross-industry", name: "Everyone else", color: "var(--sage)",
    shape: { label: "Any shape", color: 'var(--sage)' },
    who: "Clinics, agencies, B2B firms and businesses that don't fit an industry platform.",
    problem: "Not every business fits a vertical platform, and plenty shouldn't try. A multi-location clinic, a B2B consultancy or a growing agency often needs a general CRM shaped around its own process instead.",
    build: ["Pipelines built from your actual sales stages", "Lead capture and follow-up across every channel you use", "Reporting tied to decisions someone will make", "Migration from the tool you've outgrown"],
    platforms: ["GoHighLevel", "HubSpot", "Keap", "ActiveCampaign"],
    limit: "More freedom also means more ways to build something nobody can maintain. That's why we document what we build.",
  },
];

const symptoms = [
  { title: "A spreadsheet next to the CRM", text: "Someone keeps their own list because they don't trust what the system tells them." },
  { title: "Follow-up on the wrong clock", text: "Emergency jobs wait until tomorrow, while wedding enquiries get chased after two days." },
  { title: "Stages from a template", text: "The pipeline came from a generic sales setup and looks nothing like how your customers buy." },
  { title: "Everyone treated as a new lead", text: "Members, repeat clients and past donors get the same messages as people who've never bought." },
  { title: "Renewals noticed too late", text: "Memberships, service plans and regular gifts lapse before anyone sees the drift." },
  { title: "Paperwork chased by hand", text: "Intake forms, proposals, contracts and invoices move only when someone remembers." },
];

const shapes = [
  {
    name: "Urgent", color: URGENT, q: "“Who can sort this out today?”",
    text: "The customer has a problem now. The first clear reply often wins the job.",
    automate: "instant acknowledgement, routing, easy booking",
    human: "working out the job and pricing it",
    failure: "the reply arrives after they've booked someone else",
    fit: "Home services, real estate enquiries",
  },
  {
    name: "Considered", color: CONSIDERED, q: "“Is this the right person for something that matters?”",
    text: "The customer compares options over days or weeks before committing.",
    automate: "questionnaires, proposals, contracts, deposits, reminders",
    human: "the consultation and the judgement on fit",
    failure: "a fast first reply, then a week of silence",
    fit: "Law firms, coaches, client-based services",
  },
  {
    name: "Recurring", color: RECURRING, q: "“Is this still worth it?”",
    text: "The value is in the relationship continuing, month after month.",
    automate: "renewals, check-ins, thank-yous, lapse alerts",
    human: "the conversation that keeps them",
    failure: "nobody notices the drift until they cancel",
    fit: "Memberships, service plans, donors",
  },
];

const failures = [
  { cause: "“The automation sent the wrong message.”", fix: "The data was entered inconsistently, so the system can't tell who's who. We fix the records and the entry process before rebuilding the automation." },
  { cause: "“Nobody uses the CRM.”", fix: "It was built around the reports management wanted, not the team's daily work. We build around what each role actually does, then train them on it." },
  { cause: "“Leads fall through the cracks.”", fix: "Nobody owns the exceptions: the lead with no email, the double booking, the reply to an automated message. We give every exception an owner and a next step." },
  { cause: "“We need a better platform.”", fix: "Sometimes true. Often the process would break on any platform, and the old problems move house with you. We'll tell you which it is before you migrate." },
];

type FaqGroup = { label: string; items: { q: string; a: string }[] };

// Rendered on the page and in FAQPage schema from the same data, so the text always matches.
const faqGroups: FaqGroup[] = [
  {
    label: "Choosing",
    items: [
      { q: "Do we need an industry-specific platform?", a: "Not always. Industry platforms come with the right building blocks already in place: jobs and estimates in Jobber, matters in Clio, gifts in Bloomerang. That saves a lot of configuration. A general CRM is more flexible, which helps if your process is unusual and hurts if nobody is around to maintain it. We'll tell you which way we'd lean, and why." },
      { q: "My industry isn't listed. Can you still help?", a: "Probably. The list reflects the platforms we implement, not a boundary. A dental practice has a lot in common with a fitness studio: appointments, recalls and keeping patients coming back. An accounting firm looks like a law firm at intake and like a membership at renewal. We start with the same question either way: how do your customers decide, and where do you lose them?" },
      { q: "Can you work with the platform we already have?", a: "Usually, yes. Often the right move is to fix what you have rather than replace it. We look at your current setup, and how your team really uses it, before suggesting any change." },
    ],
  },
  {
    label: "Projects",
    items: [
      { q: "How long does a project take?", a: "It depends more on how clear your process is than on the platform. A business that can describe its client journey step by step is usually live much sooner than one working it out during the build. Your proposal sets out the milestones before work starts." },
      { q: "Will automation make our follow-up feel impersonal?", a: "It can, if it's set up to replace people rather than support them. We use automation for reminders, routing and paperwork, so your team has more time for the conversations that need a person." },
      { q: "How is it priced?", a: "Every project starts with a discovery call. The proposal then sets out the deliverables, exclusions, milestones and a fixed project price. Platform subscriptions are paid directly to the platform and are separate from our fee." },
    ],
  },
];

const industryPlatforms = ['Jobber', 'Clio Grow', 'Mindbody', 'Bloomerang'];
const generalPlatforms = ['GoHighLevel', 'HubSpot', 'Keap', 'ActiveCampaign'];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

function PlatformChip({ name }: { name: string }) {
  const slug = PLATFORMS.find((p) => p.name === name)?.slug;
  return slug ? <Link href={`/platforms/${slug}`}>{name}</Link> : <span>{name}</span>;
}

export default function IndustriesPage() {
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
        "name": "CRM and automation by industry | Sage Kite",
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
          { "@type": "ListItem", "position": 2, "name": "Industries" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#service`,
        "name": "CRM and automation setup by industry",
        "serviceType": "Industry CRM and automation implementation",
        "description": "CRM and automation set up around how customers decide in each industry: enquiry capture, follow-up, intake, renewals and retention, built on industry platforms or a general CRM.",
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
          "name": "CRM and automation by industry",
          "itemListElement": industries.map((ind) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": `CRM and automation for ${ind.name.replace('&', 'and')}`, "description": ind.who }
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
          /* Industries page, built on the same system as the service pages */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
          .ind-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
          .ind-hero .hero-grid{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:center}
          .ind-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .ind-hero .sub{margin:20px 0 28px;max-width:54ch}
          .hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
          .hero-facts span{display:inline-flex;align-items:center;gap:8px}

          /* Hero figure: one enquiry, three industries */
          .ex-fig{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
          .ex-fig .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 16px}
          .ex-rows li{padding:12px 0;border-top:1px solid var(--light-sage)}
          .ex-rows li:first-child{border-top:0;padding-top:4px}
          .ex-rows .who{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:.925rem;font-weight:700;color:var(--ink)}
          .ex-rows small{font-size:.75rem;font-weight:600;color:var(--ink);background:var(--c);padding:3px 8px;border-radius:4px;white-space:nowrap}
          .ex-rows p{font-size:.85rem;line-height:1.45;margin-top:4px}
          .ex-fig figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

          /* Starting situations */
          .symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
          .symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
          .symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
          .symptoms p{font-size:.925rem;line-height:1.5}
          .after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

          /* Three decision shapes */
          .starts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
          .start{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white);display:flex;flex-direction:column}
          .start .q{font-size:.95rem;font-style:italic;color:var(--sage);margin-bottom:6px}
          .start h3{font-size:1.45rem;margin-bottom:10px}
          .start > p{font-size:.95rem;line-height:1.5}
          .start ul{margin-top:16px}
          .start li{position:relative;padding:8px 0 8px 20px;font-size:.9rem;line-height:1.45;border-top:1px solid var(--light-sage)}
          .start li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}
          .start li b{color:var(--ink);font-weight:700}
          .start .fit{margin-top:auto;padding-top:16px;font-size:.825rem;font-weight:600;color:var(--sage)}

          /* Industry rows */
          .ind-list{margin-top:clamp(36px,4vw,52px);border-top:2px solid var(--ink)}
          .ind-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,5.5fr) minmax(0,3.5fr);gap:28px;padding:32px 0;border-bottom:1px solid var(--light-sage);align-items:start;scroll-margin-top:110px}
          .ind-row h3{display:flex;align-items:center;gap:12px;font-size:1.45rem}
          .ind-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
          .shape{display:inline-flex;align-items:center;gap:8px;font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:10px}
          .ind-who{font-size:.9rem;line-height:1.5;color:var(--sage);margin-top:10px}
          .ind-more{display:inline-block;margin-top:14px;font-size:.95rem}
          .ind-main > p{font-size:1rem;line-height:1.6}
          .mini{display:block;font-size:.8125rem;font-weight:600;color:var(--sage);margin:18px 0 8px}
          .build li{position:relative;padding:7px 0 7px 20px;font-size:.925rem;line-height:1.45;border-top:1px solid var(--light-sage);color:var(--ink)}
          .build li::before{content:"";position:absolute;left:0;top:17px;width:10px;height:2px;background:var(--c)}
          .ind-side .mini{margin-top:0}
          .chips{display:flex;flex-wrap:wrap;gap:6px}
          .chips a,.chips span{font-size:.875rem;font-weight:500;padding:5px 10px;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:4px;color:var(--ink);text-decoration:none;transition:border-color var(--t) var(--ease)}
          .chips a:hover{border-color:var(--sage)}
          .limit{margin-top:18px;padding:14px 16px;background:var(--pale-sage);border-radius:var(--r);font-size:.875rem;line-height:1.5}
          .limit b{display:block;color:var(--ink);font-size:.8125rem;margin-bottom:4px}

          /* Why CRM projects fail */
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

          /* Platform choice */
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

          @media (max-width:1040px){
            .ind-hero .hero-grid{grid-template-columns:1fr}
            .symptoms{grid-template-columns:repeat(2,minmax(0,1fr))}
            .starts{grid-template-columns:1fr}
            .ind-row{grid-template-columns:1fr;gap:14px}
            .flow4{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:36px}
            .faq-wrap{grid-template-columns:1fr}
            .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:680px){
            .ex-fig{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
            .symptoms,.two-col,.conn{grid-template-columns:1fr}
            .fails li{grid-template-columns:1fr;gap:6px}
            .flow4{grid-template-columns:1fr}
          }
        ` }} />

        {/* Hero */}
        <section className="ind-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Industries</p>
              <h1 id="hero-title">CRM and automation, set up for how your industry sells</h1>
              <p className="sub">
                A CRM has no idea whether you fix boilers, run a yoga studio or take on clients for a law firm. We set it up so it does: the right follow-up at the right speed, and a person stepping in where one is needed.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Discuss your business</Link>
                <Link href="#industries" className="link">Find your industry</Link>
              </div>
              <p className="hero-facts">
                <span><span className="dot" style={c('var(--sage)')}></span>{industries.length} industry groups</span>
                <span><span className="dot" style={c('var(--sky)')}></span>{PLATFORMS.length} platforms, or custom</span>
                <span><span className="dot" style={c('var(--coral)')}></span>Fixed price, agreed up front</span>
              </p>
            </div>

            <figure className="ex-fig" aria-labelledby="ex-title">
              <div className="ui">
                <p className="ui-title"><b id="ex-title">A new enquiry, in three businesses</b><span>Example</span></p>
                <ol className="ex-rows">
                  <li style={c('var(--coral-soft)')}><span className="who">Plumber, 7:40am<small>Urgent</small></span><p>Reply within minutes and offer a slot today. A day later, they&apos;ve booked someone else.</p></li>
                  <li style={c('var(--sky-soft)')}><span className="who">Law firm, 9:15pm<small>Considered</small></span><p>Acknowledge tonight, collect the facts once, book the consultation. No hard sell.</p></li>
                  <li style={c('var(--butter-soft)')}><span className="who">Yoga studio, intro offer<small>Recurring</small></span><p>Check in after the second class, and flag them if they stop coming.</p></li>
                </ol>
              </div>
              <figcaption>Illustrative. Your own process is mapped in discovery.</figcaption>
            </figure>
          </div>
        </section>

        {/* Starting situations */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">Signs your CRM was set up for a different business.</h2>
            </div>
            <ul className="symptoms">
              {symptoms.map((x) => (
                <li key={x.title}><strong>{x.title}</strong><p>{x.text}</p></li>
              ))}
            </ul>
            <p className="after-line">The software can usually handle your industry. It just has to be set up for it, rather than left on the platform&apos;s defaults.</p>
          </div>
        </section>

        {/* Three decision shapes */}
        <section className="sec" id="how-customers-decide" aria-labelledby="shapes-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where we start</p>
              <h2 id="shapes-title">Before the platform, we look at how your customers decide.</h2>
              <p className="sub">Customer decisions tend to take one of three shapes. The shape decides what your automation is for, so we work it out before anything is built.</p>
            </div>
            <div className="starts">
              {shapes.map((s) => (
                <div key={s.name} className="start" style={c(s.color)}>
                  <p className="q">{s.q}</p>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <ul>
                    <li><b>Automate:</b> {s.automate}</li>
                    <li><b>Keep human:</b> {s.human}</li>
                    <li><b>Usual failure:</b> {s.failure}</li>
                  </ul>
                  <p className="fit">{s.fit}</p>
                </div>
              ))}
            </div>
            <p className="after-line">Most businesses have a main shape and a second one inside it. Real estate is the awkward case: the enquiry is urgent, but the decision can take months. Systems built only for speed tend to go quiet just before the buyer gets serious.</p>
          </div>
        </section>

        {/* Industries */}
        <section className="rule sec" id="industries" aria-labelledby="ind-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Industries we work with</p>
              <h2 id="ind-title">Where each industry tends to lose customers.</h2>
              <p className="sub">What usually goes wrong, what we build, and what a better system won&apos;t fix. Exact scope is set in your proposal.</p>
            </div>
            <div className="ind-list">
              {industries.map((ind) => (
                <div key={ind.id} className="ind-row" id={ind.id} style={c(ind.color)}>
                  <div>
                    <span className="shape"><span className="dot" style={c(ind.shape.color)}></span>{ind.shape.label}</span>
                    <h3>{ind.name}</h3>
                    <p className="ind-who">{ind.who}</p>
                    {ind.page && <Link href={ind.page} className="link ind-more">{ind.name} in detail</Link>}
                  </div>
                  <div className="ind-main">
                    <p>{ind.problem}</p>
                    <span className="mini">What we build</span>
                    <ul className="build">
                      {ind.build.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                  <div className="ind-side">
                    <span className="mini">Platforms</span>
                    <div className="chips">
                      {ind.platforms.map((p) => <PlatformChip key={p} name={p} />)}
                    </div>
                    <p className="limit"><b>What it won&apos;t fix</b>{ind.limit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CRM projects fail */}
        <section className="pale sec" id="same-everywhere" aria-labelledby="fail-title">
          <div className="wrap">
            <div className="head">
              <p className="label">The same in every industry</p>
              <h2 id="fail-title">What looks like a software problem usually isn&apos;t.</h2>
              <p className="sub">The industry changes where we look. These causes come up in almost all of them.</p>
            </div>
            <ol className="fails">
              {failures.map((f, i) => (
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
              <h2 id="process-title">How an industry project runs.</h2>
            </div>
            <ol className="flow4">
              <li style={c('var(--butter)')}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>How your customers decide, where you lose them, and the tools and data you have today.</p></li>
              <li style={c('var(--sky)')}><div className="bar"></div><div className="num">02</div><h3>Platform fit</h3><p>Keep, fix or switch. An industry platform or a general CRM, with the reasons written down.</p></li>
              <li style={c('var(--coral)')}><div className="bar"></div><div className="num">03</div><h3>Build and test</h3><p>Pipeline, automation and integrations, then every path run end to end with test records.</p></li>
              <li style={c('var(--sage)')}><div className="bar"></div><div className="num">04</div><h3>Handover</h3><p>Training by role, documentation, and optional support once you&apos;re live.</p></li>
            </ol>
          </div>
        </section>

        {/* Industry platform or general CRM */}
        <section className="tint sec" id="platform-choice" aria-labelledby="choice-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Choosing a platform</p>
              <h2 id="choice-title">An industry platform, or a general CRM?</h2>
              <p className="sub">Neither is better in general. It depends on how standard your process is, and who will look after the system.</p>
            </div>
            <div className="two-col">
              <div className="panel" style={c('var(--sky)')}>
                <h3>An industry platform fits when</h3>
                <p className="panel-k">{industryPlatforms.join(', ')} and others</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Your process looks broadly like others in your industry</li>
                  <li><Check size={15} aria-hidden="true" />You want jobs, matters, classes or gifts already built in</li>
                  <li><Check size={15} aria-hidden="true" />Scheduling, quoting or billing matter as much as follow-up</li>
                  <li><Check size={15} aria-hidden="true" />Nobody on the team wants to maintain a custom setup</li>
                </ul>
              </div>
              <div className="panel" style={c('var(--sage)')}>
                <h3>A general CRM fits when</h3>
                <p className="panel-k">{generalPlatforms.join(', ')}</p>
                <ul className="gets">
                  <li><Check size={15} aria-hidden="true" />Your process is unusual, or spans more than one kind of customer</li>
                  <li><Check size={15} aria-hidden="true" />Marketing and sales follow-up are the main job</li>
                  <li><Check size={15} aria-hidden="true" />You already run a separate tool for jobs, bookings or billing</li>
                  <li><Check size={15} aria-hidden="true" />Someone will own the system after handover</li>
                </ul>
              </div>
            </div>
            <p className="after-line">Not sure? Most of the time, fixing what you already have is cheaper than switching. <Link className="link" href="/platforms">Compare the platforms we implement</Link>.</p>
          </div>
        </section>

        {/* Connected services */}
        <section className="sec" id="services" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Related services</p>
              <h2 id="conn-title">The work behind an industry setup.</h2>
              <p className="sub">The industry decides how the system should behave. These services do the building and keep it running.</p>
            </div>
            <div className="conn">
              <Link href="/services/crm-implementation" style={c('var(--sage)')}><strong>CRM implementation</strong><span>Setup, cleanup and migration, built around how you sell.</span></Link>
              <Link href="/services/consultancy" style={c('var(--butter)')}><strong>Growth consultancy</strong><span>Decide what the system must support before anything is built.</span></Link>
              <Link href="/services/marketing" style={c('var(--coral)')}><strong>Marketing</strong><span>SEO, paid media and email that bring the right enquiries in.</span></Link>
              <Link href="/services/specialist-staffing#crm-automation-va" style={c('var(--ink)')}><strong>CRM and automation VA</strong><span>Someone to keep the data clean and workflows running.</span></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rule sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">Industry CRM FAQs</h2>
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
              <p className="trust-note">Platform names are trademarks of their owners. Sage Kite is an independent consultant and is not affiliated with, endorsed by or certified by the platforms listed. GoHighLevel work is delivered with <a href="https://www.ghlscaleup.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '3px' }}>GHL Scale Up</a>.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tint final" id="contact" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <p className="final-words" aria-hidden="true">
                <span><span className="dot" style={c(URGENT)}></span>Urgent</span>
                <span><span className="dot" style={c(CONSIDERED)}></span>Considered</span>
                <span><span className="dot" style={c(RECURRING)}></span>Recurring</span>
              </p>
              <h2 id="final-title">Tell us how your customers decide.</h2>
              <p className="sub">A discovery call looks at your industry, the system you use today, and where customers slip away. We&apos;ll tell you plainly whether we can help, and where we&apos;d start.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn">Book a discovery call</Link>
                <Link href="/platforms" className="link">See the platforms we implement</Link>
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
