import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { BOOKING_URL, CONTACT, OFFICE_HOURS } from '@/content/contact';

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/contact`;

export const metadata: Metadata = {
  title: "Contact Us: Book a Discovery Call | Sage Kite",
  description: "Contact Sage Kite about consultancy, CRM implementation, marketing, staffing or white-label delivery. Send an enquiry and we reply within 24 hours.",
  keywords: ["contact Sage Kite", "book a discovery call", "business growth consultancy contact", "CRM implementation enquiry"],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: PAGE_URL,
    title: "Contact Sage Kite | Book a discovery call",
    description: "Tell us where growth is getting stuck. Send an enquiry and we reply within 24 hours on business days.",
  },
  twitter: {
    card: "summary",
    title: "Contact Sage Kite | Book a discovery call",
    description: "Tell us where growth is getting stuck. Send an enquiry and we reply within 24 hours on business days.",
  },
};

// "What to expect on your discovery call".
const callSteps = [
  "A short introduction and how your business wins customers today",
  "A look at your current CRM, marketing and team, if you have them",
  "Where growth is getting stuck, and what it is costing you",
  "Which service, or combination, would help first",
  "Next steps: a written proposal with scope, timeline and price",
];

// "Before you get in touch". Rendered on the page and in FAQPage schema from the
// same data, so the text always matches.
const quickQs = [
  { q: "Is the discovery call a sales pitch?", a: "No. It is a working conversation about your business and where growth is getting stuck. If we are not the right fit, we will tell you, and point you somewhere better where we can." },
  { q: "Do you work with clients outside India?", a: "Yes. Sage Kite works with businesses and agencies in the United States, Canada, Europe, Australia and New Zealand." },
  { q: "What if we already have a CRM?", a: "That is how many projects start. We can review your existing setup and fix what matters, often without switching platforms." },
  { q: "How soon can you start?", a: "After the discovery call we send a written proposal. The start date is agreed in it, based on your timeline and the scope of the work." },
];

const c = (color: string) => ({ '--c': color } as React.CSSProperties);

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "Sage Kite",
        "url": `${SITE_URL}/`,
        "email": CONTACT.email,
        "telephone": CONTACT.phoneHref.replace('tel:', ''),
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": CONTACT.email,
          "telephone": CONTACT.phoneHref.replace('tel:', ''),
          "availableLanguage": "en",
          "areaServed": ["US", "CA", "AU", "NZ", "Europe"]
        }
      },
      {
        "@type": "ContactPage",
        "@id": `${PAGE_URL}/#webpage`,
        "url": PAGE_URL,
        "name": "Contact Us: Book a Discovery Call | Sage Kite",
        "description": "Contact Sage Kite about consultancy, CRM implementation, marketing, staffing or white-label delivery. Send an enquiry and we reply within 24 hours.",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` },
        "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Contact" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}/#faq`,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "inLanguage": "en",
        "mainEntity": quickQs.map((f) => ({
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
          /* Contact page, built from the approved homepage system */
          .sec{padding:clamp(64px,8vw,104px) 0}

          /* Hero: details on the left, form on the right */
          .ct-hero{padding:clamp(48px,6vw,88px) 0 clamp(72px,9vw,112px)}
          .ct-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(40px,7vw,104px);align-items:start}
          .ct-hero h1{font-size:clamp(2.3rem,4vw,3.3rem);line-height:1.05;letter-spacing:-.025em;max-width:none;text-wrap:pretty}
          .ct-hero h1 .hl{text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:.12em;text-underline-offset:.12em}
          .ct-hero .sub{margin:20px 0 0;max-width:42ch}
          .ct-book{margin-top:18px}
          .ct-list{margin-top:clamp(36px,4vw,48px);border-top:1px solid var(--light-sage)}
          .ct-list li{display:grid;grid-template-columns:20px minmax(0,1fr);gap:16px;align-items:start;padding:18px 0;border-bottom:1px solid var(--light-sage)}
          .ct-list svg{color:var(--sage);margin-top:3px}
          .ct-k{display:block;font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:2px}
          .ct-v{display:block;font-size:1.05rem;font-weight:600;color:var(--ink);text-decoration:none}
          a.ct-v:hover{text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:2px;text-underline-offset:4px}
          .ct-wa,.ct-sm{display:block;margin-top:2px;font-size:.875rem;color:var(--dark-sage)}
          .ct-wa{text-decoration:underline;text-decoration-color:var(--light-sage);text-underline-offset:3px}
          .ct-wa:hover{text-decoration-color:var(--butter)}

          /* Form card: one clean card with the brand's flat offset shadow */
          .cf-card{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);box-shadow:10px 10px 0 var(--pale-sage);padding:clamp(24px,3.4vw,40px);scroll-margin-top:110px}
          .cf-card h2{font-size:clamp(1.5rem,2.2vw,1.85rem);margin-bottom:24px}
          .cf{display:flex;flex-direction:column;gap:20px}
          .cf-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px}
          .cf-field{display:flex;flex-direction:column;gap:6px}
          .cf-field label{font-size:.875rem;font-weight:600;color:var(--ink)}
          .cf-opt{font-weight:400;color:var(--sage)}
          .cf input,.cf select,.cf textarea{width:100%;font:inherit;font-size:1rem;color:var(--ink);background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:12px 14px;min-height:48px;transition:border-color var(--t) var(--ease),box-shadow var(--t) var(--ease)}
          .cf textarea{resize:vertical;min-height:130px;line-height:1.5}
          .cf input::placeholder,.cf textarea::placeholder{color:var(--sage);opacity:.8}
          .cf input:hover,.cf select:hover,.cf textarea:hover{border-color:var(--sage)}
          .cf input:focus,.cf select:focus,.cf textarea:focus{outline:none;border-color:var(--sage);box-shadow:0 0 0 3px var(--pale-sage)}
          .cf select{appearance:none;background-image:linear-gradient(45deg,transparent 50%,var(--ink) 50%),linear-gradient(135deg,var(--ink) 50%,transparent 50%);background-position:calc(100% - 20px) 52%,calc(100% - 14px) 52%;background-size:6px 6px;background-repeat:no-repeat;padding-right:40px}
          .cf [aria-invalid="true"]{border-color:var(--coral)}
          .cf-err{font-size:.8125rem;font-weight:600;color:var(--ink);display:flex;gap:6px;align-items:baseline}
          .cf-err::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--coral);flex:0 0 auto;transform:translateY(-1px)}
          .cf-trap{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}
          .cf-submit{width:100%;gap:10px;margin-top:4px}
          .cf-submit:disabled{opacity:.7;cursor:progress;transform:none}
          .cf-alert{margin:0;padding:12px 14px;border-left:4px solid var(--coral);background:var(--coral-soft);border-radius:4px;font-size:.925rem;color:var(--ink)}
          .cf-fine{font-size:.8125rem;color:var(--sage);text-align:center}
          .cf-fine a{color:inherit}
          .cf-done{text-align:center;padding:24px 8px}
          .cf-done-icon{display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;background:var(--pale-sage);color:var(--dark-sage);margin-bottom:14px}
          .cf-done h3{font-size:1.4rem;margin-bottom:8px}
          .cf-done p{font-size:.975rem;max-width:40ch;margin:0 auto}

          /* Office hours and what to expect */
          .ct-two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,4vw,56px);align-items:start}
          .ct-two h2{font-size:clamp(1.8rem,3vw,2.4rem)}
          .hours{margin-top:24px;border-top:1px solid var(--light-sage)}
          .hours li{display:flex;justify-content:space-between;gap:16px;padding:16px 0;border-bottom:1px solid var(--light-sage);font-size:1rem}
          .hours li span:first-child{color:var(--dark-sage)}
          .hours li span:last-child{font-weight:700;color:var(--ink);text-align:right}
          .hours-note{margin-top:16px;font-size:.875rem;color:var(--sage)}
          .expect{border-radius:var(--r);padding:clamp(26px,3.4vw,40px)}
          .expect h2{font-size:clamp(1.5rem,2.3vw,1.9rem);margin-bottom:20px}
          .expect ol{counter-reset:s}
          .expect li{display:grid;grid-template-columns:32px minmax(0,1fr);gap:12px;padding:12px 0;border-top:1px solid color-mix(in srgb,var(--warm-white) 18%,transparent);font-size:1rem;line-height:1.5;counter-increment:s}
          .expect li::before{content:counter(s,decimal-leading-zero);font-weight:700;color:var(--butter)}

          /* Quick questions */
          .qq{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:clamp(32px,4vw,44px)}
          .qq li{border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);background:var(--warm-white);padding:clamp(26px,3vw,34px) clamp(24px,3vw,36px)}
          .qq h3{font-size:1.3rem;margin-bottom:10px}
          .qq p{font-size:1.02rem;line-height:1.6}
          .qq-more{margin-top:26px;font-size:1.05rem;color:var(--ink)}

          @media (max-width:1040px){
            .ct-grid,.ct-two{grid-template-columns:1fr}
          }
          @media (max-width:680px){
            .cf-card{box-shadow:6px 6px 0 var(--pale-sage)}
            .cf-row,.qq{grid-template-columns:1fr}
          }
        ` }} />

        {/* Hero: contact details and enquiry form */}
        <section className="ct-hero" aria-labelledby="hero-title">
          <div className="wrap ct-grid">
            <div className="ct-intro">
              <p className="label">Contact Sage Kite</p>
              <h1 id="hero-title">Let&apos;s talk about what is <span className="hl">holding growth back</span></h1>
              <p className="sub">
                Tell us about your business and where things are getting stuck. We will reply within 24 hours on business days to arrange a discovery call.
              </p>
              {BOOKING_URL && (
                <p className="ct-book"><a className="link" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Prefer to pick a time? Book a discovery call</a></p>
              )}

              <ul className="ct-list">
                <li>
                  <Mail size={18} aria-hidden="true" />
                  <span><span className="ct-k">Email</span><a className="ct-v" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span>
                </li>
                <li>
                  <Phone size={18} aria-hidden="true" />
                  <span>
                    <span className="ct-k">Phone and WhatsApp</span>
                    <a className="ct-v" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                    <a className="ct-wa" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
                  </span>
                </li>
                <li>
                  <MapPin size={18} aria-hidden="true" />
                  <span><span className="ct-k">Location</span><span className="ct-v">{CONTACT.location}</span><span className="ct-sm">{CONTACT.locationNote}</span></span>
                </li>
              </ul>
            </div>

            <div className="cf-card" id="contact-form">
              <h2>Send us an enquiry</h2>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Office hours and what to expect */}
        <section className="pale sec" id="hours" aria-labelledby="hours-title">
          <div className="wrap ct-two">
            <div>
              <p className="label">Office hours</p>
              <h2 id="hours-title">When you can reach us.</h2>
              <ul className="hours">
                {OFFICE_HOURS.map((h) => (
                  <li key={h.days}><span>{h.days}</span><span>{h.hours}</span></li>
                ))}
              </ul>
              <p className="hours-note">Working with a different time zone? Discovery calls can be arranged at a time that suits you.</p>
            </div>
            <div className="expect dark">
              <p className="label">Your discovery call</p>
              <h2>What to expect.</h2>
              <ol>
                {callSteps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          </div>
        </section>

        {/* Quick questions */}
        <section className="sec" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Quick questions</p>
              <h2 id="faq-title">Before you get in touch.</h2>
            </div>
            <ul className="qq">
              {quickQs.map((x, i) => (
                <li key={x.q} style={c(['var(--butter)', 'var(--sky)', 'var(--sage)', 'var(--coral)'][i % 4])}>
                  <h3>{x.q}</h3>
                  <p>{x.a}</p>
                </li>
              ))}
            </ul>
            <p className="qq-more">Want to know more first? See <Link className="link" href="/services">our services</Link> or <Link className="link" href="/about">read about Sage Kite</Link>.</p>
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
