import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CASE_STUDIES, CASE_STUDIES_PATH, caseStudyPath, type CaseStudyResult, type CountResult } from '@/content/case-studies';

const SITE_URL = 'https://www.sagekite.com';
const PAGE_URL = `${SITE_URL}${CASE_STUDIES_PATH}`;
/** Small print under a card's results: how the figures are drawn, then their basis. */
function resultsNote(results: CaseStudyResult[]) {
  const count = results.find((r): r is CountResult => 'count' in r);
  return [
    results.some((r) => !('count' in r)) && 'Bars drawn to scale.',
    count && `Each dot is one ${count.unit}.`,
    'Figures as reported for this engagement.',
  ].filter(Boolean).join(' ');
}

const DESCRIPTION = 'Case studies from Sage Kite and its delivery specialists: the problem, the work and the results, with the origin of every example stated.';

export const metadata: Metadata = {
  title: 'Case Studies: Growth, SEO and CRM Work | Sage Kite',
  description: DESCRIPTION,
  keywords: ['Sage Kite case studies', 'SEO case study', 'growth case studies', 'CRM case study', 'marketing results'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    siteName: 'Sage Kite',
    url: PAGE_URL,
    title: 'Case studies | Sage Kite',
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: 'Case studies | Sage Kite',
    description: DESCRIPTION,
  },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Case Studies: Growth, SEO and CRM Work | Sage Kite',
        description: DESCRIPTION,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: CASE_STUDIES.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.title,
            url: `${SITE_URL}${caseStudyPath(c.slug)}`,
          })),
        },
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Case studies' },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Case studies collection */
          .csl-hero{padding:clamp(48px,6vw,88px) 0 clamp(56px,7vw,96px)}
          .csl-hero-grid{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:clamp(40px,6vw,88px);align-items:center}
          .csl-hero h1{font-size:clamp(2.6rem,5vw,4.1rem);line-height:1.02;letter-spacing:-.03em}
          .csl-hero .sub{max-width:52ch}
          .csl-hero .cta-row{margin-top:32px}

          /* hero visual: how every case study is laid out */
          .csl-anatomy{position:relative;background:var(--pale-sage);border-radius:var(--r);padding:clamp(24px,3vw,36px);clip-path:polygon(0 0,calc(100% - 44px) 0,100% 44px,100% 100%,0 100%)}
          .csl-anatomy-title{display:flex;justify-content:space-between;gap:12px;font-size:.8125rem;font-weight:600;color:var(--sage);margin-bottom:16px}
          .csl-anatomy-title b{color:var(--ink);font-weight:700}
          .csl-steps{display:grid;gap:10px;counter-reset:step}
          .csl-steps li{position:relative;display:grid;grid-template-columns:36px minmax(0,1fr);gap:14px;align-items:center;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:14px 16px;box-shadow:4px 4px 0 var(--light-sage)}
          .csl-steps li:nth-child(2){margin-left:18px}
          .csl-steps li:nth-child(3){margin-left:36px}
          .csl-steps li:nth-child(4){margin-left:54px}
          .csl-steps li::before{counter-increment:step;content:counter(step);display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--c);color:var(--ink);font-weight:800;font-size:.95rem}
          .csl-steps strong{display:block;color:var(--ink);font-size:1rem;line-height:1.25}
          .csl-steps span{display:block;font-size:.8125rem;line-height:1.4;color:var(--sage)}

          /* list */
          .csl-list{padding:clamp(64px,8vw,104px) 0}
          .csl-list-head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:end;gap:16px 32px;margin-bottom:clamp(28px,4vw,44px)}
          .csl-list-head h2{font-size:clamp(1.9rem,3.4vw,2.7rem)}
          .csl-count{font-size:.875rem;font-weight:600;color:var(--sage)}
          .csl-grid{display:grid;gap:24px}

          .csl-card{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);border:1px solid var(--light-sage);border-top:6px solid var(--sky);border-radius:var(--r);overflow:hidden;background:var(--warm-white);text-decoration:none;color:inherit;transition:transform var(--t) var(--ease),border-color var(--t) var(--ease),box-shadow var(--t) var(--ease)}
          .csl-card:hover{transform:translateY(-4px);border-color:var(--sage);border-top-color:var(--sky);box-shadow:8px 8px 0 var(--pale-sage)}
          .csl-body{padding:clamp(28px,4vw,52px);display:flex;flex-direction:column;gap:18px}
          .csl-meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;font-size:.8125rem;font-weight:600;color:var(--sage)}
          .csl-tag{padding:4px 12px;border-radius:999px;background:var(--sky-soft);color:var(--ink);font-weight:700}
          .csl-client{font-size:.875rem;font-weight:700;color:var(--ink)}
          .csl-card h2{font-size:clamp(1.7rem,2.8vw,2.4rem);line-height:1.08}
          .csl-card p.csl-sum{font-size:1.0625rem;line-height:1.6;max-width:56ch}
          .csl-chips{display:flex;flex-wrap:wrap;gap:8px}
          .csl-origin{display:inline-flex;align-items:center;gap:10px;align-self:flex-start;padding:7px 14px;border-radius:999px;background:var(--pale-sage);color:var(--ink);font-weight:600;font-size:.8125rem;line-height:1.3}
          .csl-origin::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--sky);flex:none}
          .csl-more{margin-top:auto;padding-top:6px;display:inline-flex;align-items:center;gap:8px;align-self:flex-start;font-weight:700;color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:2px;text-underline-offset:5px}
          .csl-more svg{transition:transform var(--t) var(--ease)}
          .csl-card:hover .csl-more{text-decoration-color:var(--coral)}
          .csl-card:hover .csl-more svg{transform:translateX(4px)}

          .csl-results{background:var(--pale-sage);border-left:1px solid var(--light-sage);padding:clamp(24px,3.4vw,44px);display:grid;gap:16px;align-content:center}
          .csl-results-title{font-size:.8125rem;font-weight:600;color:var(--sage)}
          .csl-result{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:20px 22px;display:grid;gap:12px}
          .csl-result-top{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
          .csl-result-top span{font-size:.9rem;font-weight:700;color:var(--ink)}
          .csl-result-top b{white-space:nowrap;font-size:clamp(1.8rem,2.8vw,2.4rem);font-weight:800;line-height:1;letter-spacing:-.04em;color:var(--coral);font-variant-numeric:tabular-nums}
          .csl-bar{display:grid;grid-template-columns:3.4rem minmax(0,1fr) 5rem;gap:10px;align-items:center;font-size:.8125rem;font-variant-numeric:tabular-nums}
          .csl-bar > span:first-child{color:var(--sage)}
          .csl-bar > span:last-child{text-align:right;font-weight:700;color:var(--ink)}
          .csl-track{height:10px;border-radius:5px;background:var(--pale-sage);overflow:hidden}
          .csl-fill{display:block;height:100%;width:var(--w);border-radius:5px;background:var(--sage)}
          .csl-fill.after{background:var(--sky)}
          .csl-results .note{margin-top:2px}
          .csl-highlight{gap:4px;padding:16px 20px}
          .csl-highlight b{font-size:1.25rem;font-weight:800;line-height:1.15;letter-spacing:-.02em;color:var(--ink)}
          .csl-highlight span{font-size:.875rem;color:var(--dark-sage)}
          .csl-dots{display:grid;grid-template-columns:repeat(auto-fill,minmax(7px,1fr));gap:3px}
          .csl-dots i{aspect-ratio:1;border-radius:50%;background:var(--sky)}

          /* how to read */
          .csl-read{padding:clamp(56px,7vw,88px) 0}
          .csl-read-grid{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,9fr);gap:clamp(32px,5vw,72px);align-items:start}
          .csl-read h2{font-size:clamp(1.8rem,3vw,2.4rem)}
          .csl-rules{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
          .csl-rules li{background:var(--warm-white);border:1px solid var(--light-sage);border-top:5px solid var(--c);border-radius:var(--r);padding:22px 20px 24px;display:grid;gap:8px;align-content:start}
          .csl-rules h3{font-size:1.15rem}
          .csl-rules p{font-size:.95rem;line-height:1.55}

          /* cta */
          .csl-cta-sec{padding:clamp(64px,8vw,104px) 0}
          .csl-cta{background:var(--coral-soft);color:var(--ink);border-radius:12px;padding:clamp(32px,5vw,64px);display:grid;gap:18px;position:relative;overflow:hidden}
          .csl-cta::after{content:"";position:absolute;right:0;bottom:0;width:clamp(80px,14vw,180px);height:clamp(80px,14vw,180px);background:var(--butter);clip-path:polygon(100% 0,100% 100%,0 100%)}
          .csl-cta .label{margin-bottom:0;color:var(--ink)}
          .csl-cta h2{font-size:clamp(1.9rem,3.6vw,2.8rem);line-height:1.08;max-width:22ch}
          .csl-cta p{max-width:52ch}
          .csl-cta .cta-row{margin-top:8px;position:relative;z-index:1}

          @media (max-width:1040px){
            .csl-hero-grid,.csl-read-grid{grid-template-columns:1fr}
            .csl-anatomy{max-width:560px}
          }
          @media (max-width:900px){
            .csl-card{grid-template-columns:1fr}
            .csl-results{border-left:0;border-top:1px solid var(--light-sage)}
            .csl-rules{grid-template-columns:1fr}
          }
          @media (max-width:560px){
            .csl-steps li:nth-child(n){margin-left:0}
            .csl-sep{display:none}
            .csl-meta span:last-child{flex-basis:100%}
            .csl-bar{grid-template-columns:3rem minmax(0,1fr) 4.4rem}
          }
        ` }} />

        {/* Hero */}
        <section className="csl-hero" aria-labelledby="csl-title">
          <div className="wrap csl-hero-grid">
            <div>
              <div className="ribbon" aria-hidden="true">
                <span style={{ background: 'var(--coral)' }}></span>
                <span style={{ background: 'var(--butter)' }}></span>
                <span style={{ background: 'var(--sky)' }}></span>
              </div>
              <p className="label">Selected work</p>
              <h1 id="csl-title">Case studies</h1>
              <p className="sub">
                What the problem was, what was built and what changed. Every example states where it comes from and the basis for any result, so you know exactly what you are reading.
              </p>
              <div className="cta-row">
                <Link href="#all-case-studies" className="link">Browse the case studies</Link>
              </div>
            </div>

            <figure className="csl-anatomy" aria-labelledby="anatomy-title">
              <figcaption className="csl-anatomy-title"><b id="anatomy-title">Inside every case study</b><span>Same four parts</span></figcaption>
              <ol className="csl-steps">
                <li style={{ '--c': 'var(--coral-soft)' } as React.CSSProperties}><div><strong>The problem</strong><span>Where growth was stuck, and why</span></div></li>
                <li style={{ '--c': 'var(--butter-soft)' } as React.CSSProperties}><div><strong>The work</strong><span>What was diagnosed and built</span></div></li>
                <li style={{ '--c': 'var(--sky-soft)' } as React.CSSProperties}><div><strong>The results</strong><span>Before and after, drawn to scale</span></div></li>
                <li style={{ '--c': 'var(--light-sage)' } as React.CSSProperties}><div><strong>The origin</strong><span>Who did the work, and on what basis</span></div></li>
              </ol>
            </figure>
          </div>
        </section>

        {/* Case studies */}
        <section className="rule csl-list" id="all-case-studies" aria-labelledby="csl-list-title">
          <div className="wrap">
            <div className="csl-list-head">
              <div>
                <p className="label">All case studies</p>
                <h2 id="csl-list-title">The work, in detail</h2>
              </div>
              <p className="csl-count">{CASE_STUDIES.length} {CASE_STUDIES.length === 1 ? 'case study' : 'case studies'}</p>
            </div>
            <div className="csl-grid">
              {CASE_STUDIES.map((c) => (
                <Link key={c.slug} href={caseStudyPath(c.slug)} className="csl-card">
                  <div className="csl-body">
                    <p className="csl-meta">
                      <span className="csl-tag">{c.discipline}</span>
                      <span className="csl-client">{c.client}</span>
                      <span className="csl-sep" aria-hidden="true">·</span>
                      <span>{c.industry}</span>
                    </p>
                    <h2>{c.title}</h2>
                    <p className="csl-sum">{c.summary}</p>
                    <ul className="csl-chips" aria-label="What was built">
                      {c.highlights.map((h) => <li key={h} className="chip"><span className="dot" style={{ '--c': 'var(--sky)' } as React.CSSProperties}></span>{h}</li>)}
                    </ul>
                    <p className="csl-origin">{c.origin}</p>
                    <span className="csl-more">Read the case study <ArrowRight size={18} aria-hidden="true" /></span>
                  </div>
                  {c.results.length === 0 ? (
                  <div className="csl-results" aria-label={`${c.client} project highlights`}>
                    <p className="csl-results-title">Project highlights</p>
                    {c.metrics?.items.map((m) => (
                      <div key={m.label} className="csl-result csl-highlight">
                        <b>{m.value}</b><span>{m.label}</span>
                      </div>
                    ))}
                    <p className="note">No figures were reported for this project.</p>
                  </div>
                  ) : (
                  <div className="csl-results" aria-label={`${c.client} headline results`}>
                    <p className="csl-results-title">Headline results</p>
                    {c.results.map((r) => (
                      <div key={r.label} className="csl-result">
                        <div className="csl-result-top"><span>{r.label}</span><b>{r.value}</b></div>
                        {'count' in r ? (
                          <span className="csl-dots" role="img" aria-label={`${r.count} dots, one for each ${r.unit}`}>
                            {Array.from({ length: r.count }, (_, i) => <i key={i}></i>)}
                          </span>
                        ) : (
                          <>
                            <div className="csl-bar"><span>Before</span><span className="csl-track"><span className="csl-fill" style={{ '--w': `${r.scale}%` } as React.CSSProperties}></span></span><span>{r.before}</span></div>
                            <div className="csl-bar"><span>After</span><span className="csl-track"><span className="csl-fill after" style={{ '--w': '100%' } as React.CSSProperties}></span></span><span>{r.after}</span></div>
                          </>
                        )}
                      </div>
                    ))}
                    <p className="note">{resultsNote(c.results)}</p>
                  </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How to read these */}
        <section className="pale csl-read" aria-labelledby="csl-read-title">
          <div className="wrap csl-read-grid">
            <div>
              <p className="label">How to read these</p>
              <h2 id="csl-read-title">Evidence, with its context</h2>
            </div>
            <ul className="csl-rules">
              <li style={{ '--c': 'var(--coral)' } as React.CSSProperties}><h3>Origin stated</h3><p>Each case study says who did the work and whether it was a Sage Kite client engagement.</p></li>
              <li style={{ '--c': 'var(--butter)' } as React.CSSProperties}><h3>Results as reported</h3><p>Figures are shown as reported for the engagement, with ranges kept as ranges.</p></li>
              <li style={{ '--c': 'var(--sky)' } as React.CSSProperties}><h3>Illustrations labelled</h3><p>Diagrams that explain an idea, rather than show measured data, say so underneath.</p></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="csl-cta-sec" aria-labelledby="csl-cta-title">
          <div className="wrap">
            <div className="csl-cta">
              <p className="label">Your turn</p>
              <h2 id="csl-cta-title">Have a growth problem that looks like one of these?</h2>
              <p>Book a discovery call and we&apos;ll look at where your growth is stuck and what would move it.</p>
              <div className="cta-row">
                <Link href="/book" className="btn">Book a discovery call</Link>
                <Link href="/services" className="link">Explore services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
