import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FOUNDER_ESSAYS, FOUNDERS_THOUGHTS_PATH, essayPath } from '@/content/founders-thoughts';

const SITE_URL = 'https://www.sagekite.com';
const PAGE_URL = `${SITE_URL}${FOUNDERS_THOUGHTS_PATH}`;

export const metadata: Metadata = {
  title: "Founder's Thoughts: Essays by Aryan Trivedi | Sage Kite",
  description: "Occasional essays by Aryan Trivedi, Sage Kite's founder, on growth, systems, AI and how selling and work are changing.",
  keywords: ["Founder's Thoughts", 'Aryan Trivedi', 'AI and the future of work', 'growth essays', 'Sage Kite founder'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    siteName: 'Sage Kite',
    url: PAGE_URL,
    title: "Founder's Thoughts | Sage Kite",
    description: "Occasional essays by Aryan Trivedi, Sage Kite's founder, on growth, systems, AI and how selling and work are changing.",
  },
  twitter: {
    card: 'summary',
    title: "Founder's Thoughts | Sage Kite",
    description: "Occasional essays by Aryan Trivedi, Sage Kite's founder, on growth, systems, AI and how work is changing.",
  },
};

export default function FoundersThoughtsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Founder's Thoughts | Sage Kite",
        description: "Occasional essays by Aryan Trivedi, Sage Kite's founder.",
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@type': 'Person', name: 'Aryan Trivedi', url: `${SITE_URL}/about` },
        breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: FOUNDER_ESSAYS.map((e, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: e.title,
            url: `${SITE_URL}${essayPath(e.slug)}`,
          })),
        },
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: "Founder's Thoughts" },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main">
        <style dangerouslySetInnerHTML={{ __html: `
          /* Founder's Thoughts collection, built from the homepage system */
          .ft-hero{padding:clamp(48px,6vw,88px) 0 clamp(40px,5vw,64px)}
          .ft-hero-grid{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,7fr);gap:clamp(32px,5vw,72px);align-items:center}
          .ft-hero h1{font-size:clamp(2.4rem,4.6vw,3.6rem);line-height:1.04;letter-spacing:-.025em}
          .ft-hero .founder-intro{margin-top:16px}
          .ft-hero .sub{max-width:56ch;margin-top:14px;color:var(--dark-sage)}

          .ft-list{padding:clamp(48px,6vw,80px) 0 clamp(80px,10vw,120px)}
          .ft-card{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);border:1px solid var(--light-sage);border-radius:var(--r);overflow:hidden;background:var(--warm-white);text-decoration:none;color:inherit;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease),box-shadow var(--t) var(--ease)}
          .ft-card:hover{transform:translateY(-3px);border-color:var(--sage);box-shadow:6px 6px 0 var(--pale-sage)}
          .ft-card-media{background:var(--pale-sage);border-right:1px solid var(--light-sage);display:flex;align-items:center;justify-content:center}
          .ft-card-media img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;filter:grayscale(1)}
          .ft-card-body{padding:clamp(28px,3.6vw,48px);display:flex;flex-direction:column;justify-content:center}
          .ft-meta{display:flex;flex-wrap:wrap;gap:8px 14px;font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:16px}
          .ft-meta span+span::before{content:"/";margin-right:14px;color:var(--light-sage)}
          .ft-card h2{font-size:clamp(1.7rem,2.8vw,2.4rem);line-height:1.1;margin-bottom:12px}
          .ft-dek{font-size:1.1rem;color:var(--ink);font-weight:500;margin-bottom:12px}
          .ft-card p.ft-sum{font-size:1rem;line-height:1.6;max-width:52ch;margin-bottom:24px}
          .ft-more{display:inline-flex;align-items:center;gap:8px;font-weight:600;color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:2px;text-underline-offset:5px}
          .ft-more svg{transition:transform var(--t) var(--ease)}
          .ft-card:hover .ft-more svg{transform:translateX(3px)}
          .ft-note{margin-top:28px}

          @media (max-width:1040px){
            .ft-card{grid-template-columns:1fr}
            .ft-card-media{border-right:0;border-bottom:1px solid var(--light-sage);aspect-ratio:4/3}
          }
          @media (max-width:680px){
            .ft-hero-grid{grid-template-columns:1fr}
            .ft-hero .founder-photo{max-width:180px}
          }
        ` }} />

        {/* Hero */}
        <section className="ft-hero founder" aria-labelledby="ft-title">
          <div className="wrap ft-hero-grid">
            <div className="founder-photo" style={{ padding: 0, border: 'none', overflow: 'hidden' }}>
              <Image
                src="/aryan_t.jpeg"
                alt="Aryan Trivedi, founder of Sage Kite"
                title="Aryan Trivedi, founder of Sage Kite"
                width={1230}
                height={1259}
                sizes="240px"
                priority
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <p className="label">From the founder</p>
              <h1 id="ft-title">Founder&rsquo;s Thoughts</h1>
              <p className="founder-intro">
                Occasional essays by Aryan, Sage Kite&rsquo;s founder, on growth, systems and how selling is changing.
              </p>
              <p className="sub">
                Written from the work: why growth breaks between interest and revenue, where automation and AI genuinely help, and how teams should be built now.
              </p>
            </div>
          </div>
        </section>

        {/* Essays */}
        <section className="rule ft-list" aria-labelledby="essays-title">
          <div className="wrap">
            <p className="label" id="essays-title">Essays</p>
            {FOUNDER_ESSAYS.map((e) => (
              <Link key={e.slug} href={essayPath(e.slug)} className="ft-card">
                <div className="ft-card-media">
                  <Image src={e.image} alt={e.imageAlt} width={1448} height={1086} sizes="(max-width: 1040px) 90vw, 40vw" />
                </div>
                <div className="ft-card-body">
                  <p className="ft-meta"><span>{e.dateLabel}</span><span>{e.readTime}</span><span>{e.topic}</span></p>
                  <h2>{e.title}</h2>
                  <p className="ft-dek">{e.dek}</p>
                  <p className="ft-sum">{e.summary}</p>
                  <span className="ft-more">Read the essay <ArrowRight size={16} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
            <p className="ft-note note">Founder&rsquo;s Thoughts is published occasionally, when there is something worth saying. More about Aryan on the <Link className="link" href="/about">About page</Link>.</p>
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
