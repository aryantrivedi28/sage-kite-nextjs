import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HubSpot Implementation & Consulting Services | Sage Kite',
  description:
    'HubSpot implementation from Sage Kite: we map your sales and marketing process, then build the CRM, pipelines, workflows, reporting and migrations.',
  keywords: [
    'HubSpot implementation services',
    'HubSpot consultant',
    'HubSpot CRM setup',
    'HubSpot migration',
    'HubSpot portal audit',
    'HubSpot onboarding',
  ],
  alternates: { canonical: 'https://www.sagekite.com/platforms/hubspot' },
  openGraph: {
    type: 'website',
    siteName: 'Sage Kite',
    url: 'https://www.sagekite.com/platforms/hubspot',
    title: 'HubSpot implementation and consulting services | Sage Kite',
    description:
      'Sage Kite implements HubSpot around your sales and marketing process: CRM architecture, pipelines, workflows, reporting, migration and integrations.',
  },
  twitter: {
    card: 'summary',
    title: 'HubSpot implementation and consulting services | Sage Kite',
    description:
      'Process-first HubSpot implementation: CRM architecture, pipelines, workflows, reporting, migration and integrations, tested and handed over.',
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.sagekite.com/#organization',
      name: 'Sage Kite',
      url: 'https://www.sagekite.com/',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.sagekite.com/platforms/hubspot/#webpage',
      url: 'https://www.sagekite.com/platforms/hubspot',
      name: 'HubSpot implementation and consulting services | Sage Kite',
      description:
        'Sage Kite implements HubSpot around your sales and marketing process: CRM architecture, pipelines, lifecycle stages, workflows, reporting, migration and integrations, tested and handed over.',
      isPartOf: { '@id': 'https://www.sagekite.com/#website' },
      about: { '@id': 'https://www.sagekite.com/platforms/hubspot/#service' },
      breadcrumb: {
        '@id': 'https://www.sagekite.com/platforms/hubspot/#breadcrumb',
      },
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.sagekite.com/platforms/hubspot/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.sagekite.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Platforms',
          item: 'https://www.sagekite.com/platforms',
        },
        { '@type': 'ListItem', position: 3, name: 'HubSpot' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.sagekite.com/platforms/hubspot/#service',
      name: 'HubSpot implementation and consulting services',
      serviceType: 'HubSpot implementation and consulting',
      description:
        'Process mapping, HubSpot Smart CRM architecture, Sales Hub, Marketing Hub, Service Hub and Data Hub configuration, workflows and automation, Breeze AI settings, reporting, data cleanup, migration and integrations, testing, training and handover.',
      provider: { '@id': 'https://www.sagekite.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Place', name: 'Europe' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'New Zealand' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'What we implement in HubSpot',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart CRM' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sales Hub' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing Hub' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Service Hub' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Hub' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflows and automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Breeze AI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reporting and dashboards' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Migration and integrations' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagekite.com/platforms/hubspot/#faq',
      isPartOf: { '@id': 'https://www.sagekite.com/#website' },
      about: { '@id': 'https://www.sagekite.com/platforms/hubspot/#service' },
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What is HubSpot implementation?', acceptedAnswer: { '@type': 'Answer', text: 'HubSpot implementation is the work of designing and configuring HubSpot around how your business actually sells and serves customers. It goes beyond switching the account on: CRM architecture, contact and company data structure, deal pipelines, lifecycle stages, lead management, workflows, reporting and any migration or integrations. Sage Kite maps the process first, then builds the platform to fit it.' } },
        { '@type': 'Question', name: 'What does a HubSpot consultant do?', acceptedAnswer: { '@type': 'Answer', text: 'A HubSpot consultant helps decide how HubSpot should be structured for your business, then configures it and builds the automation that runs it. That means the CRM data model, pipelines and lifecycle stages, workflows for routing and follow-up, reporting that reflects how you measure the business, and training so the team adopts it.' } },
        { '@type': 'Question', name: "Is this the same as HubSpot's own onboarding?", acceptedAnswer: { '@type': 'Answer', text: "No. HubSpot's onboarding, which is required with some Professional and Enterprise purchases, gives your team guidance and training through a plan based on your goals and purchases. Implementation is the hands-on build around your process: architecture, pipelines, workflows, migration, integrations and reporting. The two are complementary. Sage Kite is not a HubSpot Solutions Partner, so our work does not replace any onboarding HubSpot requires." } },
        { '@type': 'Question', name: 'How long does a HubSpot implementation take?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the Hubs involved, how much data needs to move and how many tools need to connect. A focused Sales Hub setup is a smaller project than a multi-Hub build with a migration. Your proposal sets out the milestones and dates before any work starts.' } },
        { '@type': 'Question', name: 'Can you audit and fix an existing HubSpot portal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many engagements are existing portals that grew without a plan: duplicated or inconsistent data, pipelines that do not match the real sales process, workflows that misfire and reporting no one trusts. We audit what is there, fix the data and structure, rebuild the parts holding you back, and document it.' } },
        { '@type': 'Question', name: 'Can you migrate data from another CRM into HubSpot?', acceptedAnswer: { '@type': 'Answer', text: 'Usually. Migrations from tools like Salesforce, Pipedrive, Zoho or a spreadsheet are common. Feasibility depends on what the current system can export and how the data is structured, so we confirm what is realistic and how records will map during discovery, then clean and de-duplicate as part of the move.' } },
        { '@type': 'Question', name: 'Which HubSpot Hubs and edition do I need?', acceptedAnswer: { '@type': 'Answer', text: 'HubSpot offers a free CRM and paid Starter, Professional and Enterprise editions across Marketing, Sales, Service, Content, Data and Revenue Hubs. The right mix depends on how you sell and market, and it matters because the paid tiers are a real cost. We advise on the smallest setup that does the job. We do not resell HubSpot licences, so the advice is based on fit, not commission.' } },
        { '@type': 'Question', name: 'Can you build HubSpot workflows and automation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. HubSpot workflows automate the repetitive steps: routing and assigning leads, sending follow-up, updating properties and lifecycle stages, creating tasks and internal alerts. We build them around the process we mapped and test each path so the right action happens at the right time.' } },
        { '@type': 'Question', name: 'Can you set up Breeze AI in HubSpot?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, where your subscription includes the features. We agree with you where AI is useful, such as summarising records or drafting follow-up, and set limits on what it may do without a person checking it first.' } },
        { '@type': 'Question', name: 'Is HubSpot right for my business?', acceptedAnswer: { '@type': 'Answer', text: 'HubSpot suits businesses with a real sales and marketing process to run and room to grow into it. If you are a solo or small service business that mainly needs to book, contract and invoice clients, a lighter tool such as Dubsado or HoneyBook is often a better fit, and we implement those too. Discovery is where we tell you honestly which way we would go.' } },
        { '@type': 'Question', name: 'Is Sage Kite a HubSpot partner?', acceptedAnswer: { '@type': 'Answer', text: 'Sage Kite is an independent implementation partner. HubSpot is a trademark of its owner; Sage Kite is not a HubSpot Solutions Partner and is not affiliated with or certified by HubSpot. We implement the platform on your behalf and are paid by you, not by HubSpot.' } },
        { '@type': 'Question', name: 'What happens after implementation?', acceptedAnswer: { '@type': 'Answer', text: 'You own the portal and can run it. Handover includes training and documentation. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as you add Hubs or processes, and the wider marketing, automation and staffing that turn a well-built CRM into growth.' } },
        { '@type': 'Question', name: 'Is Sage Kite only a HubSpot agency?', acceptedAnswer: { '@type': 'Answer', text: 'No. Sage Kite is a business growth consultancy. HubSpot is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform organises how you win and keep customers; the broader work decides what to change and creates the demand that flows through it.' } },
      ],
    },
  ],
};

/* ── Page-specific CSS (taken from reference HTML) ──────────────────── */

const pageCSS = `
/* ── HubSpot page additions. Homepage system, tokens only. ── */
.sec{padding:clamp(64px,8vw,104px) 0}

/* Hero is sized to fit above the fold on a laptop screen at 100% zoom */
.pl-hero{padding:clamp(36px,4.2vw,60px) 0 clamp(64px,8vw,104px)}
.pl-hero .hero-grid{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(40px,5vw,72px);align-items:center}
.pl-hero h1{font-size:clamp(2.4rem,4.2vw,3.5rem);line-height:1.04;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
.pl-hero .sub{margin:20px 0 28px;max-width:54ch}
.hero-facts{display:flex;flex-wrap:wrap;gap:8px 22px;margin-top:22px;font-size:.875rem;color:var(--sage);font-weight:600}
.hero-facts span{display:inline-flex;align-items:center;gap:8px}

/* Hero visual: a portal as layers */
.portal{background:var(--pale-sage);border-radius:var(--r);padding:clamp(22px,3vw,34px);clip-path:polygon(0 0,calc(100% - 48px) 0,100% 48px,100% 100%,0 100%)}
.portal .ui{box-shadow:8px 8px 0 var(--light-sage);padding:18px 20px 20px}
.layer{border-radius:4px;padding:12px 14px}
.layer small{display:block;font-size:.75rem;font-weight:600;color:var(--sage)}
.layer strong{display:block;font-size:1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3}
.layer p{font-size:.8125rem;line-height:1.4;margin-top:2px}
.layer-ai{background:var(--sky-soft)}
.hubs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:8px 0}
.hub{border:1px solid var(--light-sage);border-left:4px solid var(--c);border-radius:4px;padding:9px 12px;font-size:.875rem;font-weight:600;color:var(--ink);line-height:1.25}
.hub span{display:block;font-size:.75rem;font-weight:500;color:var(--dark-sage)}
.layer-crm{background:var(--pale-sage);border-top:4px solid var(--sage)}
.portal figcaption{margin-top:14px;font-size:.75rem;color:var(--sage)}

/* Symptoms */
.symptoms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage);border-left:1px solid var(--light-sage)}
.symptoms li{border-right:1px solid var(--light-sage);border-bottom:1px solid var(--light-sage);padding:22px 24px;background:var(--warm-white)}
.symptoms strong{display:block;font-size:1.1rem;font-weight:700;color:var(--ink);letter-spacing:-.01em;line-height:1.3;margin-bottom:6px}
.symptoms p{font-size:.925rem;line-height:1.5}
.after-line{margin-top:26px;max-width:70ch;font-size:1.05rem;color:var(--ink)}

/* Starting points */
.starts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(36px,4vw,52px)}
.start{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:26px 24px;background:var(--warm-white);display:flex;flex-direction:column}
.start h3{font-size:1.45rem;margin-bottom:10px}
.start > p{font-size:.95rem;line-height:1.5}
.start ul{margin-top:16px}
.start li{position:relative;padding:8px 0 8px 20px;font-size:.9rem;line-height:1.45;border-top:1px solid var(--light-sage)}
.start li::before{content:"";position:absolute;left:0;top:18px;width:10px;height:2px;background:var(--c)}

/* By Hub */
.hub-list{margin-top:clamp(36px,4vw,52px);border-top:1px solid var(--light-sage)}
.hub-row{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,6fr) minmax(0,3fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--light-sage);align-items:start}
.hub-row h3{display:flex;align-items:center;gap:12px;font-size:1.35rem}
.hub-row h3::before{content:"";width:5px;height:26px;border-radius:3px;background:var(--c);flex:0 0 auto}
.hub-row p{font-size:.975rem;line-height:1.55}
.hub-row .tags{margin:0}
.hub-row.muted h3,.hub-row.muted p{color:var(--sage)}

/* Onboarding vs implementation */
.compare{width:100%;border-collapse:collapse;margin-top:clamp(36px,4vw,52px);background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);overflow:hidden;font-size:.975rem}
.compare th,.compare td{text-align:left;padding:16px 20px;border-bottom:1px solid var(--light-sage);vertical-align:top;line-height:1.5}
.compare thead th{background:var(--pale-sage);color:var(--ink);font-weight:700;font-size:1rem}
.compare thead th:last-child{border-top:4px solid var(--coral)}
.compare tbody th{font-weight:600;color:var(--sage);font-size:.875rem;width:18%}
.compare tbody tr:last-child th,.compare tbody tr:last-child td{border-bottom:0}
.compare td:last-child{color:var(--ink)}
.compare-note{margin-top:20px;max-width:72ch}

/* Process + deliverables */
.flow6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));margin-top:clamp(40px,5vw,64px)}
.flow6 li{padding-right:18px}
.flow6 .bar{height:4px;background:var(--light-sage);margin-bottom:22px;position:relative}
.flow6 .bar::after{content:"";position:absolute;left:0;top:0;height:100%;width:40%;background:var(--c)}
.flow6 .num{font-weight:700;letter-spacing:-.02em;font-size:2.4rem;line-height:1;color:var(--sage)}
.flow6 h3{font-size:1.3rem;margin:8px 0 6px}
.flow6 p{font-size:.9rem;line-height:1.45}

.two-col{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
.panel{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(22px,3vw,34px)}
.panel h3{font-size:1.35rem;margin-bottom:6px}
.panel-k{font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:14px}
.gets li{display:flex;gap:10px;align-items:flex-start;padding:11px 0;border-top:1px solid var(--light-sage);font-size:.95rem;line-height:1.45;color:var(--ink)}
.gets svg{flex:0 0 auto;margin-top:4px;color:var(--sage)}

/* Fit */
.fit2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:clamp(36px,4vw,52px)}
.fit2 .panel p{font-size:.95rem;line-height:1.55;margin-top:14px}

/* Proof placeholder */
.proof-ph{border:1px dashed var(--sage);border-radius:var(--r);padding:clamp(24px,3vw,36px);background:var(--warm-white);box-shadow:10px 10px 0 var(--butter-soft);display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(24px,4vw,56px);align-items:start}
.proof-ph h2{font-size:clamp(1.6rem,2.6vw,2.1rem)}
.proof-ph ul li{padding:8px 0;border-top:1px solid var(--light-sage);font-size:.925rem}

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
  .pl-hero .hero-grid{grid-template-columns:1fr}
  .symptoms,.starts{grid-template-columns:repeat(2,minmax(0,1fr))}
  .hub-row{grid-template-columns:1fr;gap:10px}
  .flow6{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:36px}
  .proof-ph,.faq-wrap{grid-template-columns:1fr}
  .conn{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:680px){
  .portal{clip-path:polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,0 100%)}
  .hubs{grid-template-columns:1fr}
  .symptoms,.starts,.two-col,.fit2,.conn{grid-template-columns:1fr}
  .flow6{grid-template-columns:1fr 1fr}
  .compare,.compare thead,.compare tbody,.compare tr,.compare th,.compare td{display:block;width:100%}
  .compare thead{display:none}
  .compare tbody th{width:auto;padding:10px 16px;border-bottom:0;background:var(--pale-sage)}
  .compare td{padding-top:8px}
  .compare td::before{content:attr(data-h);display:block;font-size:.75rem;font-weight:700;color:var(--sage);margin-bottom:2px}
  .hero-facts{flex-direction:column;gap:4px}
}
`;

/* ── Checkmark SVG helper ─────────────────────────────────────────────── */

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ── Page component ───────────────────────────────────────────────────── */

export default function HubspotPage() {
  return (
    <>
      <Header />
      <main id="main">
        <style dangerouslySetInnerHTML={{ __html: pageCSS }} />

        {/* ── 01 Hero ─────────────────────────────────────────────────── */}
        <section className="pl-hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <p className="label">Platforms / HubSpot</p>
                <h1 id="hero-title">HubSpot implementation and consulting services</h1>
                <p className="sub">Sage Kite builds HubSpot around the way your business actually sells and serves customers. We map the process first, then configure the CRM, pipelines, workflows, reporting and integrations to match it, migrate your data, test it and hand it over.</p>
                <div className="cta-row">
                  <Link href="/contact" className="btn">Discuss your HubSpot setup</Link>
                  <a href="#what-we-implement" className="link">See what&#8217;s included</a>
                </div>
                <div className="hero-facts">
                  <span>New or existing portals</span>
                  <span>Fixed price, agreed up front</span>
                  <span>We don&#8217;t resell licences</span>
                </div>
              </div>

              <div>
                <figure className="portal">
                  <div className="ui">
                    <div className="ui-title"><b>Your HubSpot portal</b> <span>Example scope</span></div>
                    <div className="layer layer-ai">
                      <small>AI</small>
                      <strong>Breeze</strong>
                      <p>Configured within limits your team sets.</p>
                    </div>
                    <div className="hubs">
                      <div className="hub" style={{ '--c': 'var(--ink)' } as React.CSSProperties}>
                        <strong>Sales Hub</strong>
                        <span>Pipelines, sequences, quotes</span>
                      </div>
                      <div className="hub" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                        <strong>Marketing Hub</strong>
                        <span>Forms, email, lead scoring</span>
                      </div>
                      <div className="hub" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                        <strong>Service Hub</strong>
                        <span>Tickets, help desk, feedback</span>
                      </div>
                      <div className="hub" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                        <strong>Data Hub</strong>
                        <span>Data sync, quality, automation</span>
                      </div>
                    </div>
                    <div className="layer layer-crm">
                      <small>Foundation</small>
                      <strong>Smart CRM</strong>
                      <p>Contacts, companies, deals, properties and lifecycle stages.</p>
                    </div>
                  </div>
                  <figcaption>Illustrative. Hubs and editions depend on your subscription.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Problems ─────────────────────────────────────────────── */}
        <section className="pale sec" id="problems" aria-labelledby="problems-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Common starting situations</p>
              <h2 id="problems-title">The portal was switched on, but never built around the business.</h2>
            </div>
            <ul className="symptoms">
              <li><strong>Data nobody trusts</strong><p>Duplicate contacts, empty properties and three fields that mean the same thing.</p></li>
              <li><strong>Pipelines that don&#8217;t match reality</strong><p>Deal stages copied from a template, so the forecast says little about what will close.</p></li>
              <li><strong>Leads without an owner</strong><p>Form fills arrive, but routing and follow-up still depend on someone checking the inbox.</p></li>
              <li><strong>Sales and marketing disagree</strong><p>Lifecycle stages are undefined, so an MQL means something different to each team.</p></li>
              <li><strong>Workflows that misfire</strong><p>Automation built one request at a time, with no map of what triggers what.</p></li>
              <li><strong>Paying for unused Hubs</strong><p>Professional features bought and never configured, while the team works around them.</p></li>
            </ul>
            <p className="after-line">None of this means HubSpot is the wrong platform. It usually means the portal was configured around features rather than around your revenue process.</p>
          </div>
        </section>

        {/* ── 03 Starting points ──────────────────────────────────────── */}
        <section className="sec" id="starting-points" aria-labelledby="starts-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Three starting points</p>
              <h2 id="starts-title">A new build, a portal that needs fixing, or a move to HubSpot.</h2>
            </div>
            <div className="starts">
              <div className="start" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <h3>New HubSpot implementation</h3>
                <p>You have bought HubSpot, or are about to, and want it built properly the first time.</p>
                <ul>
                  <li>Revenue process mapped from enquiry to customer</li>
                  <li>CRM architecture, pipelines and lifecycle stages</li>
                  <li>Forms, workflows and reporting built and tested</li>
                  <li>Training and handover for your team</li>
                </ul>
              </div>
              <div className="start" style={{ '--c': 'var(--sky)' } as React.CSSProperties}>
                <h3>HubSpot portal audit and fix</h3>
                <p>You have used HubSpot for a while and it has drifted away from how the business works.</p>
                <ul>
                  <li>Audit of data, properties, pipelines and workflows</li>
                  <li>Duplicates cleaned and unused properties retired</li>
                  <li>Automation and reporting rebuilt where needed</li>
                  <li>Underused Hubs configured where they earn it</li>
                </ul>
              </div>
              <div className="start" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Migration to HubSpot</h3>
                <p>You are moving from another CRM or from spreadsheets and want the data to arrive usable.</p>
                <ul>
                  <li>Export and record mapping confirmed in discovery</li>
                  <li>Data cleaned and de-duplicated before import</li>
                  <li>Owners, stages and history mapped where feasible</li>
                  <li>Old and new systems checked side by side</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 What we implement ────────────────────────────────────── */}
        <section className="rule sec" id="what-we-implement" aria-labelledby="impl-title">
          <div className="wrap">
            <div className="head">
              <p className="label">What we implement</p>
              <h2 id="impl-title">What HubSpot implementation covers.</h2>
              <p className="sub">Scope depends on the Hubs and editions you own. We confirm what your subscription supports during discovery.</p>
            </div>
            <div className="hub-list">
              <div className="hub-row" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><h3>Smart CRM</h3><p>The foundation everything else depends on: the contact, company and deal data model, custom properties, lifecycle stages, lead status, teams, permissions and record ownership.</p><div className="tags"><span className="tag">Data model</span><span className="tag">Properties</span><span className="tag">Lifecycle stages</span><span className="tag">Permissions</span></div></div>
              <div className="hub-row" style={{ '--c': 'var(--ink)' } as React.CSSProperties}><h3>Sales Hub</h3><p>Deal pipelines with clear stage criteria, lead routing and rotation, sequences, meetings, quotes and forecasting, so the pipeline reflects what will actually close.</p><div className="tags"><span className="tag">Pipelines</span><span className="tag">Sequences</span><span className="tag">Quotes</span><span className="tag">Forecasting</span></div></div>
              <div className="hub-row" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><h3>Marketing Hub</h3><p>Forms and lead capture, lists and segments, email, lead scoring, and the nurture that passes sales-ready leads to sales at the right moment.</p><div className="tags"><span className="tag">Forms</span><span className="tag">Segments</span><span className="tag">Email</span><span className="tag">Lead scoring</span></div></div>
              <div className="hub-row" style={{ '--c': 'var(--butter)' } as React.CSSProperties}><h3>Service Hub</h3><p>Ticket pipelines, help desk setup, knowledge base structure and feedback surveys, so service history sits on the same record as sales.</p><div className="tags"><span className="tag">Tickets</span><span className="tag">Help desk</span><span className="tag">Knowledge base</span><span className="tag">Surveys</span></div></div>
              <div className="hub-row" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><h3>Data Hub</h3><p>Data sync with the tools you already use, data quality rules and de-duplication, and more advanced automation where your edition supports it.</p><div className="tags"><span className="tag">Data sync</span><span className="tag">Data quality</span><span className="tag">Automation</span></div></div>
              <div className="hub-row" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><h3>Workflows and automation</h3><p>Routing, follow-up, property and stage updates, tasks and internal alerts, built from the mapped process and tested path by path.</p><div className="tags"><span className="tag">Routing</span><span className="tag">Follow-up</span><span className="tag">Alerts</span></div></div>
              <div className="hub-row" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><h3>Breeze AI</h3><p>Breeze features and agents set up where they help, with clear limits on what they may do alone and what needs a person to check.</p><div className="tags"><span className="tag">AI settings</span><span className="tag">Agents</span><span className="tag">Guardrails</span></div></div>
              <div className="hub-row" style={{ '--c': 'var(--ink)' } as React.CSSProperties}><h3>Reporting and dashboards</h3><p>Dashboards built around the questions you run the business on: pipeline, forecast, source, conversion, activity and service.</p><div className="tags"><span className="tag">Pipeline</span><span className="tag">Attribution</span><span className="tag">Activity</span></div></div>
              <div className="hub-row" style={{ '--c': 'var(--sage)' } as React.CSSProperties}><h3>Migration and integrations</h3><p>Records moved from your previous CRM or spreadsheets, cleaned on the way in, and the apps you rely on connected where supported.</p><div className="tags"><span className="tag">Migration</span><span className="tag">Cleanup</span><span className="tag">Integrations</span></div></div>
              <div className="hub-row muted" style={{ '--c': 'var(--light-sage)' } as React.CSSProperties}><h3>Content Hub</h3><p>We do not build websites or blogs on Content Hub at present. If you already use it, we connect its forms and pages to the CRM.</p><div className="tags"><span className="tag">Forms to CRM</span></div></div>
            </div>
          </div>
        </section>

        {/* ── 05 Onboarding vs implementation ─────────────────────────── */}
        <section className="pale sec" id="onboarding" aria-labelledby="onb-title">
          <div className="wrap">
            <div className="head">
              <p className="label">HubSpot onboarding or implementation?</p>
              <h2 id="onb-title">HubSpot&#8217;s onboarding gets you started. Implementation builds the system.</h2>
              <p className="sub">HubSpot sells its own onboarding, and it is required with some Professional and Enterprise purchases. It is useful. The two do different jobs.</p>
            </div>
            <table className="compare">
              <thead>
                <tr><th scope="col"><span className="note">Question</span></th><th scope="col">HubSpot onboarding</th><th scope="col">Sage Kite implementation</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Starts from</th><td data-h="HubSpot onboarding">Your goals, product purchases and existing tech stack</td><td data-h="Sage Kite implementation">Your sales and service process, mapped step by step</td></tr>
                <tr><th scope="row">Mainly</th><td data-h="HubSpot onboarding">Guidance and training on the product</td><td data-h="Sage Kite implementation">Hands-on build, done in your portal</td></tr>
                <tr><th scope="row">Covers</th><td data-h="HubSpot onboarding">A customised onboarding plan for the tools you bought</td><td data-h="Sage Kite implementation">Architecture, pipelines, workflows, migration, integrations, reporting and training</td></tr>
                <tr><th scope="row">Beyond HubSpot</th><td data-h="HubSpot onboarding">Focused on the HubSpot product</td><td data-h="Sage Kite implementation">Connected to consultancy, marketing and staffing where useful</td></tr>
              </tbody>
            </table>
            <p className="compare-note note">If you have been through onboarding and it stopped short of a working system, implementation is usually the missing part. Sage Kite is not a HubSpot Solutions Partner, so our work does not replace any onboarding HubSpot requires with your purchase.</p>
          </div>
        </section>

        {/* ── 06 Process ──────────────────────────────────────────────── */}
        <section className="sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="head">
              <p className="label">How it works</p>
              <h2 id="process-title">How a HubSpot implementation runs.</h2>
            </div>
            <ol className="flow6">
              <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}><div className="bar"></div><div className="num">01</div><h3>Discovery</h3><p>Your process, Hubs, editions, current data, integrations and who signs off.</p></li>
              <li style={{ '--c': 'var(--sage)' } as React.CSSProperties}><div className="bar"></div><div className="num">02</div><h3>Proposal</h3><p>Deliverables, exclusions, milestones and a fixed project price.</p></li>
              <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}><div className="bar"></div><div className="num">03</div><h3>Architecture</h3><p>Data model, properties, pipelines and lifecycle stages agreed before building.</p></li>
              <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}><div className="bar"></div><div className="num">04</div><h3>Build</h3><p>Configuration, workflows, migration and integrations, in that order.</p></li>
              <li style={{ '--c': 'var(--ink)' } as React.CSSProperties}><div className="bar"></div><div className="num">05</div><h3>Test and train</h3><p>Real scenarios run end to end, then training for users and admins.</p></li>
              <li style={{ '--c': 'var(--light-sage)' } as React.CSSProperties}><div className="bar"></div><div className="num">06</div><h3>Handover</h3><p>Documentation, then optional maintenance with a defined scope.</p></li>
            </ol>
          </div>
        </section>

        {/* ── 07 Before and after ─────────────────────────────────────── */}
        <section className="tint sec" id="handover" aria-labelledby="handover-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Before and after</p>
              <h2 id="handover-title">What we need from you, and what you receive.</h2>
            </div>
            <div className="two-col">
              <div className="panel" style={{ '--c': 'var(--butter)' } as React.CSSProperties}>
                <h3>What we need</h3>
                <p className="panel-k">Confirmed during discovery</p>
                <ul className="gets">
                  <li><Check />Super Admin access to your HubSpot portal</li>
                  <li><Check />Your Hubs and editions, or the ones you plan to buy</li>
                  <li><Check />An export from your current CRM or spreadsheets</li>
                  <li><Check />A list of tools that need to connect</li>
                  <li><Check />One decision-maker to sign off the process</li>
                </ul>
              </div>
              <div className="panel" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <h3>At handover</h3>
                <p className="panel-k">Final scope set in your proposal</p>
                <ul className="gets">
                  <li><Check />A portal configured around your process</li>
                  <li><Check />Clean data and properties you actually use</li>
                  <li><Check />Pipelines, lifecycle stages and routing</li>
                  <li><Check />Workflows tested end to end</li>
                  <li><Check />Dashboards for the numbers you run on</li>
                  <li><Check />Training and written documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 08 Fit ──────────────────────────────────────────────────── */}
        <section className="sec" id="fit" aria-labelledby="fit-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Is HubSpot right for you?</p>
              <h2 id="fit-title">HubSpot earns its cost when there is a real sales process to run.</h2>
            </div>
            <div className="fit2">
              <div className="panel" style={{ '--c': 'var(--sage)' } as React.CSSProperties}>
                <h3>Usually a good fit</h3>
                <p>B2B and professional-services firms, SaaS and technology businesses, consultancies and agencies. Teams where sales, marketing and service need one shared view of the customer, and a sales cycle long enough to need pipeline and forecasting.</p>
              </div>
              <div className="panel" style={{ '--c': 'var(--coral)' } as React.CSSProperties}>
                <h3>Worth comparing first</h3>
                <p>Solo and small service businesses that mainly need to book, contract and invoice clients are often better served by <Link className="link" href="/platforms/dubsado">Dubsado</Link> or <Link className="link" href="/platforms/honeybook">HoneyBook</Link>. If email marketing is the main need, <Link className="link" href="/platforms/activecampaign">ActiveCampaign</Link> may be enough. We implement those too, so the recommendation is based on fit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 09 Specialist experience placeholder ────────────────────── */}
        <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="proof-title">
          <div className="wrap">
            <div className="proof-ph">
              <div>
                <p className="label">Specialist experience</p>
                <h2 id="proof-title">Previous HubSpot work by a Sage Kite delivery specialist</h2>
              </div>
              <div>
                <p className="note" style={{ marginBottom: 10 }}>Placeholder for the sample. It will be filled only with approved, attributed examples.</p>
                <ul>
                  <li>Specialist role and what they built</li>
                  <li>Project context and delivery period</li>
                  <li>Screenshots with client details removed</li>
                  <li>Results only where there is evidence for them</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10 Connected services ───────────────────────────────────── */}
        <section className="pale sec" aria-labelledby="conn-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Where HubSpot sits</p>
              <h2 id="conn-title">The platform is one part of the growth system.</h2>
              <p className="sub">HubSpot organises how you win and keep customers. The work around it decides what to change and keeps the pipeline full.</p>
            </div>
            <div className="conn">
              <Link href="/services/consultancy" style={{ '--c': 'var(--butter)' } as React.CSSProperties}><strong>Growth consultancy</strong><span>Decide what the CRM should support before you configure it.</span></Link>
              <Link href="/services/marketing" style={{ '--c': 'var(--coral)' } as React.CSSProperties}><strong>Marketing</strong><span>SEO, paid media and email that feed the pipeline you built.</span></Link>
              <Link href="/services/specialist-staffing#crm-automation-va" style={{ '--c': 'var(--ink)' } as React.CSSProperties}><strong>CRM and automation VA</strong><span>Someone to keep data clean and workflows running after handover.</span></Link>
              <Link href="/services/white-label" style={{ '--c': 'var(--sky)' } as React.CSSProperties}><strong>White-label for agencies</strong><span>HubSpot builds for your clients, delivered under your brand.</span></Link>
            </div>
          </div>
        </section>

        {/* ── 11 FAQ ──────────────────────────────────────────────────── */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <div>
              <p className="label">Questions</p>
              <h2 id="faq-title">HubSpot implementation FAQs</h2>
            </div>
            <div>
              <div className="faq-grp">
                <p className="label">HubSpot implementation</p>
                <details className="qa"><summary>What is HubSpot implementation?</summary><p>HubSpot implementation is the work of designing and configuring HubSpot around how your business actually sells and serves customers. It goes beyond switching the account on: CRM architecture, contact and company data structure, deal pipelines, lifecycle stages, lead management, workflows, reporting and any migration or integrations. Sage Kite maps the process first, then builds the platform to fit it.</p></details>
                <details className="qa"><summary>What does a HubSpot consultant do?</summary><p>A HubSpot consultant helps decide how HubSpot should be structured for your business, then configures it and builds the automation that runs it. That means the CRM data model, pipelines and lifecycle stages, workflows for routing and follow-up, reporting that reflects how you measure the business, and training so the team adopts it.</p></details>
                <details className="qa"><summary>Is this the same as HubSpot&apos;s own onboarding?</summary><p>No. HubSpot&apos;s onboarding, which is required with some Professional and Enterprise purchases, gives your team guidance and training through a plan based on your goals and purchases. Implementation is the hands-on build around your process: architecture, pipelines, workflows, migration, integrations and reporting. The two are complementary. Sage Kite is not a HubSpot Solutions Partner, so our work does not replace any onboarding HubSpot requires.</p></details>
                <details className="qa"><summary>How long does a HubSpot implementation take?</summary><p>It depends on the Hubs involved, how much data needs to move and how many tools need to connect. A focused Sales Hub setup is a smaller project than a multi-Hub build with a migration. Your proposal sets out the milestones and dates before any work starts.</p></details>
                <details className="qa"><summary>Can you audit and fix an existing HubSpot portal?</summary><p>Yes. Many engagements are existing portals that grew without a plan: duplicated or inconsistent data, pipelines that do not match the real sales process, workflows that misfire and reporting no one trusts. We audit what is there, fix the data and structure, rebuild the parts holding you back, and document it.</p></details>
              </div>
              <div className="faq-grp">
                <p className="label">Scope and configuration</p>
                <details className="qa"><summary>Can you migrate data from another CRM into HubSpot?</summary><p>Usually. Migrations from tools like Salesforce, Pipedrive, Zoho or a spreadsheet are common. Feasibility depends on what the current system can export and how the data is structured, so we confirm what is realistic and how records will map during discovery, then clean and de-duplicate as part of the move.</p></details>
                <details className="qa"><summary>Which HubSpot Hubs and edition do I need?</summary><p>HubSpot offers a free CRM and paid Starter, Professional and Enterprise editions across Marketing, Sales, Service, Content, Data and Revenue Hubs. The right mix depends on how you sell and market, and it matters because the paid tiers are a real cost. We advise on the smallest setup that does the job. We do not resell HubSpot licences, so the advice is based on fit, not commission.</p></details>
                <details className="qa"><summary>Can you build HubSpot workflows and automation?</summary><p>Yes. HubSpot workflows automate the repetitive steps: routing and assigning leads, sending follow-up, updating properties and lifecycle stages, creating tasks and internal alerts. We build them around the process we mapped and test each path so the right action happens at the right time.</p></details>
                <details className="qa"><summary>Can you set up Breeze AI in HubSpot?</summary><p>Yes, where your subscription includes the features. We agree with you where AI is useful, such as summarising records or drafting follow-up, and set limits on what it may do without a person checking it first.</p></details>
              </div>
              <div className="faq-grp">
                <p className="label">Working with Sage Kite</p>
                <details className="qa"><summary>Is HubSpot right for my business?</summary><p>HubSpot suits businesses with a real sales and marketing process to run and room to grow into it. If you are a solo or small service business that mainly needs to book, contract and invoice clients, a lighter tool such as Dubsado or HoneyBook is often a better fit, and we implement those too. Discovery is where we tell you honestly which way we would go.</p></details>
                <details className="qa"><summary>Is Sage Kite a HubSpot partner?</summary><p>Sage Kite is an independent implementation partner. HubSpot is a trademark of its owner; Sage Kite is not a HubSpot Solutions Partner and is not affiliated with or certified by HubSpot. We implement the platform on your behalf and are paid by you, not by HubSpot.</p></details>
                <details className="qa"><summary>What happens after implementation?</summary><p>You own the portal and can run it. Handover includes training and documentation. Where it helps, Sage Kite offers maintenance with a defined support scope, further implementation as you add Hubs or processes, and the wider marketing, automation and staffing that turn a well-built CRM into growth.</p></details>
                <details className="qa"><summary>Is Sage Kite only a HubSpot agency?</summary><p>No. Sage Kite is a business growth consultancy. HubSpot is one of the platforms we implement, alongside consultancy, marketing, automation and specialist staffing. The platform organises how you win and keep customers; the broader work decides what to change and creates the demand that flows through it.</p></details>
              </div>
              <p className="trust-note">Sage Kite is an independent implementation partner. HubSpot is a trademark of its owner. Sage Kite is not a HubSpot Solutions Partner and is not affiliated with or certified by HubSpot.</p>
            </div>
          </div>
        </section>

        {/* ── 12 Final CTA ────────────────────────────────────────────── */}
        <section className="tint final" aria-labelledby="final-title">
          <div className="wrap">
            <div className="final-inner">
              <div className="final-words">
                <span><span style={{ color: 'var(--sage)' }}>●</span> Process</span>
                <span><span style={{ color: 'var(--sky)' }}>●</span> HubSpot</span>
                <span><span style={{ color: 'var(--ink)' }}>●</span> People</span>
                <span><span style={{ color: 'var(--coral)' }}>●</span> Growth</span>
              </div>
              <h2 id="final-title">Build HubSpot around how you sell.</h2>
              <p className="sub">A discovery call looks at your current portal or plan, what the business needs from it, and what a fixed-scope project would cover.</p>
              <div className="cta-row">
                <Link href="/book" className="btn">Book a discovery call</Link>
                <Link href="/services/crm-implementation" className="link">See all CRM implementation services</Link>
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
