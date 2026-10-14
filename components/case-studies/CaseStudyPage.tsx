import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CASE_STUDIES_PATH, caseStudyPath, type CaseStudy } from '@/content/case-studies';
import { CASE_STUDY_CSS } from './caseStudyStyles';
import { DotGrid } from './blocks';

const SITE_URL = 'https://www.sagekite.com';

/**
 * Shared page for every case study. Each folder (app/case-studies/<slug>/) has
 * a page.tsx that only passes its study.tsx data to these two helpers.
 */
export function caseStudyMetadata(study: CaseStudy): Metadata {
  if (study.draft) {
    return { title: 'Case study not found | Sage Kite', robots: { index: false } };
  }
  const url = `${SITE_URL}${caseStudyPath(study.slug)}`;
  const ogTitle = study.ogTitle ?? study.title;
  return {
    title: `${study.seoTitle} | Sage Kite`,
    description: study.description,
    keywords: study.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'Sage Kite',
      url,
      title: ogTitle,
      description: study.description,
      publishedTime: study.datePublished,
      modifiedTime: study.dateModified ?? study.datePublished,
    },
    twitter: { card: 'summary', title: ogTitle, description: study.description },
  };
}

function caseStudyJsonLd(study: CaseStudy) {
  const url = `${SITE_URL}${caseStudyPath(study.slug)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${study.seoTitle} | Sage Kite`,
        description: study.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: study.title,
        description: study.description,
        url,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        datePublished: study.datePublished,
        dateModified: study.dateModified ?? study.datePublished,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        about: { '@type': 'Organization', name: study.client },
        ...(study.practitioner && {
          contributor: { '@type': 'Person', name: study.practitioner.name, jobTitle: study.practitioner.role },
        }),
        keywords: study.keywords.join(', '),
        articleSection: 'Case studies',
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Case studies', item: `${SITE_URL}${CASE_STUDIES_PATH}` },
          { '@type': 'ListItem', position: 3, name: study.client },
        ],
      },
    ],
  };
}

const DOTS: [number, number][] = [[40, 40], [120, 30], [210, 50], [270, 30], [70, 120], [170, 130], [256, 116]];
const DOT_LINKS: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [3, 6], [4, 5], [5, 6], [2, 6]];

function ChangeIcon({ kind }: { kind: string }) {
  if (kind === 'ripple') {
    return (
      <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <circle className="ripple" cx="22" cy="22" r="19" />
        <circle className="ripple" cx="22" cy="22" r="19" />
        <circle className="ripple" cx="22" cy="22" r="19" />
        <circle className="i-ink" cx="22" cy="22" r="4" />
      </svg>
    );
  }
  if (kind === 'nodes') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-line"><line x1="22" y1="9" x2="9" y2="33" /><line x1="22" y1="9" x2="35" y2="33" /><line x1="9" y1="33" x2="35" y2="33" /></g>
        <circle className="blink-node i-coral" cx="22" cy="9" r="5" />
        <circle className="blink-node i-sky" cx="9" cy="33" r="5" />
        <circle className="blink-node i-sage" cx="35" cy="33" r="5" />
      </svg>
    );
  }
  if (kind === 'bars') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-coral"><rect className="grow-bar" x="6" y="26" width="9" height="12" rx="2" /><rect className="grow-bar" x="18" y="16" width="9" height="22" rx="2" /><rect className="grow-bar" x="30" y="6" width="9" height="32" rx="2" /></g>
        <line className="i-line" x1="4" y1="40" x2="41" y2="40" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'lift') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <rect className="i-page" x="9" y="6" width="26" height="32" rx="4" />
        <g className="hop"><path className="i-arrow" d="M22 28 V14 M16 20 L22 14 L28 20" /></g>
      </svg>
    );
  }
  if (kind === 'merge') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-stroke"><path d="M6 10 H18 C26 10 26 22 34 22" /><path d="M6 34 H18 C26 34 26 22 34 22" /></g>
        <circle className="blink-node i-coral" cx="37" cy="22" r="5" />
      </svg>
    );
  }
  if (kind === 'grid') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-sage"><rect x="5" y="5" width="15" height="15" rx="3" /><rect x="24" y="5" width="15" height="15" rx="3" /><rect x="5" y="24" width="15" height="15" rx="3" /></g>
        <rect className="pop-loop i-coral" x="24" y="24" width="15" height="15" rx="3" />
      </svg>
    );
  }
  if (kind === 'shield') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path className="i-page" d="M22 5 l15 5 v12 c0 10 -7 16 -15 19 c-8 -3 -15 -9 -15 -19 v-12 z" strokeLinejoin="round" />
        <path className="hop i-tick" d="M15 22 l5 5 l9 -10" />
      </svg>
    );
  }
  if (kind === 'devices') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <rect className="i-page" x="3" y="8" width="28" height="20" rx="3" />
        <line className="i-stroke" x1="10" y1="34" x2="24" y2="34" />
        <rect className="hop i-phone" x="27" y="16" width="14" height="22" rx="3" />
      </svg>
    );
  }
  if (kind === 'heart') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path className="i-page" d="M22 38 C8 28 6 18 12 12 C16 8 21 10 22 15 C23 10 28 8 32 12 C38 18 36 28 22 38 z" strokeLinejoin="round" />
        <path className="hop i-tick" d="M16 21 H28 M22 15 V27" />
      </svg>
    );
  }
  if (kind === 'cards') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <rect className="i-page" x="5" y="8" width="24" height="18" rx="3" />
        <rect className="hop i-phone" x="17" y="18" width="22" height="18" rx="3" />
      </svg>
    );
  }
  if (kind === 'target') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-stroke"><circle cx="22" cy="22" r="17" /><circle cx="22" cy="22" r="10" /></g>
        <circle className="blink-node i-coral" cx="22" cy="22" r="3.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <rect className="i-sage" x="5" y="30" width="34" height="9" rx="2" />
      <rect className="i-sage" x="9" y="21" width="26" height="9" rx="2" opacity=".6" />
      <rect className="hop i-butter" x="13" y="8" width="18" height="9" rx="2" />
    </svg>
  );
}

function Head({ id, label, heading, intro }: { id: string; label: string; heading: string; intro?: string }) {
  return (
    <div className="cs-head">
      <p className="label">{label}</p>
      <h2 id={id}>{heading}</h2>
      {intro && <p className="sub">{intro}</p>}
    </div>
  );
}

const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  if (study.draft) notFound();

  const { hero, metrics, startingPoint, problem, approach, sections, delivered, resultsSection, changes, methods, takeaway, about, cta } = study;

  return (
    <>
      <Header />
      <main id="main" className="cs">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(study)) }} />
        <style dangerouslySetInnerHTML={{ __html: CASE_STUDY_CSS }} />

        {/* Hero */}
        <section className="cs-hero" aria-labelledby="title">
          <div className="wrap">
            <div className="ribbon" aria-hidden="true">
              <span style={{ background: 'var(--coral)' }}></span>
              <span style={{ background: 'var(--butter)' }}></span>
              <span style={{ background: 'var(--sky)' }}></span>
            </div>
            <nav className="cs-crumbs" aria-label="Breadcrumb">
              <Link href={CASE_STUDIES_PATH}>Case studies</Link><span aria-hidden="true">/</span><span>{study.client}</span>
            </nav>
            <div className="cs-hero-grid">
              <div className="cs-hero-copy">
                {hero.label && <p className="label" style={{ marginBottom: 0 }}>{hero.label}</p>}
                <h1 id="title">{study.title}</h1>
                <p className="cs-dek">{hero.dek}</p>
                <p className="cs-lede">{hero.lede}</p>
                <p className="cs-badge">{study.origin}</p>
              </div>
              <div className="cs-hero-visual">
                {hero.visual}
                <aside className="cs-glance" aria-labelledby="glance-title">
                  <div className="cs-glance-card">
                    <h2 id="glance-title">At a glance</h2>
                    <dl>
                      {hero.glance.map((g) => (
                        <div key={g.label} className="row"><dt>{g.label}</dt><dd>{g.value}</dd></div>
                      ))}
                    </dl>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Headline results */}
        {metrics && (
          <section className="cs-metrics-sec" aria-label="Headline results">
            <div className="wrap">
              <div className="cs-metrics" style={cssVars({ '--n': String(metrics.items.length) })}>
                {metrics.items.map((m) => (
                  <div key={m.label} className={`cs-metric ${m.tone}`}><b>{m.value}</b><span>{m.label}</span></div>
                ))}
              </div>
              {metrics.note && <p className="note cs-footnote">{metrics.note}</p>}
            </div>
          </section>
        )}

        {/* Starting point */}
        {startingPoint && (
          <section className="rule" aria-labelledby="bg-title">
            <div className="wrap cs-split sticky">
              <Head id="bg-title" label={startingPoint.label ?? 'The starting point'} heading={startingPoint.heading} />
              <div className="cs-prose">{startingPoint.content}</div>
            </div>
          </section>
        )}

        {/* Problem */}
        {problem && (
          <section className="pale" aria-labelledby="problem-title">
            <div className="wrap">
              <Head id="problem-title" label={problem.label ?? 'The problem'} heading={problem.heading} intro={problem.intro} />
              <ul className="cs-problems">
                {problem.items.map((p) => (
                  <li key={p.title}><h3><i aria-hidden="true"></i>{p.title}</h3><p>{p.text}</p></li>
                ))}
              </ul>
              {problem.visual}
              {problem.pullQuote && (
                <blockquote className="cs-pull"><p>{problem.pullQuote}</p></blockquote>
              )}
            </div>
          </section>
        )}

        {/* Approach */}
        {approach && (
          <section aria-labelledby="approach-title">
            <div className="wrap">
              <div className="cs-split">
                <Head id="approach-title" label={approach.label ?? 'How the work was done'} heading={approach.heading} />
                <div className="cs-prose">
                  {approach.intro && <p>{approach.intro}</p>}
                  {approach.diagnosis && (
                    <ul className="cs-diagnosis">
                      {approach.diagnosis.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                  )}
                </div>
              </div>

              {approach.steps.length === 4 && (
                <div className="cs-lift" aria-hidden="true">
                  <svg viewBox="0 0 1000 120">
                    <path className="track" d="M0 112 C 60 112, 85 108, 125 104 S 330 82, 375 76 S 580 52, 625 46 S 830 24, 875 18 L 1000 6" fill="none" strokeWidth="3" />
                    <path className="line" d="M0 112 C 60 112, 85 108, 125 104 S 330 82, 375 76 S 580 52, 625 46 S 830 24, 875 18 L 1000 6" fill="none" strokeWidth="3" />
                    <circle cx="125" cy="104" r="9" style={{ fill: 'var(--sky)' }} />
                    <circle cx="375" cy="76" r="9" style={{ fill: 'var(--sage)' }} />
                    <circle cx="625" cy="46" r="9" style={{ fill: 'var(--butter)' }} />
                    <circle cx="875" cy="18" r="9" style={{ fill: 'var(--coral)' }} />
                  </svg>
                </div>
              )}

              <ol className="cs-steps" style={cssVars({ '--n': String(approach.steps.length) })} aria-label="The steps of the work, in order">
                {approach.steps.map((s, i) => (
                  <li key={s.title} className={`cs-step${s.href ? ' linked' : ''}`} style={cssVars({ '--i': String(i) })}>
                    <span className="cs-step-n" aria-hidden="true">{i + 1}</span>
                    <h3>{s.href ? <a href={s.href}>{s.title}</a> : s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>

              {approach.note && (
                <div className="cs-callout cs-steps-note"><p>{approach.note}</p></div>
              )}
            </div>
          </section>
        )}

        {/* Parts of the work */}
        {sections?.map((sec, i) => (
          <section key={sec.id} id={sec.id} className={`cs-part${i % 2 === 0 ? ' pale' : ''}`} aria-labelledby={`${sec.id}-title`}>
            <div className="wrap">
              <Head id={`${sec.id}-title`} label={sec.label} heading={sec.heading} intro={sec.intro} />
              {sec.content}
            </div>
          </section>
        ))}

        {/* Delivered */}
        {delivered && (
          <section className="cs-sky-band" aria-labelledby="delivered-title">
            <div className="wrap">
              <Head id="delivered-title" label={delivered.label ?? 'What was delivered'} heading={delivered.heading} intro={delivered.intro} />
              {delivered.tiles && (
                <div className="cs-bento">
                  {delivered.tiles.map((t, i) => (
                    <article key={t.title} className={`cs-tile ${t.tone}${t.size === 'wide' ? ' wide' : ''}`} aria-labelledby={`tile-${i}`}>
                      <p className="cs-tile-tag">{t.tag}</p>
                      <h3 id={`tile-${i}`}>{t.title}</h3>
                      <p>{t.text}</p>
                      {t.visual && (t.bare ? t.visual : <div className="cs-tile-visual">{t.visual}</div>)}
                      {t.note && <p className="note">{t.note}</p>}
                    </article>
                  ))}
                </div>
              )}
              {delivered.content}
            </div>
          </section>
        )}

        {/* Results */}
        {resultsSection && (
          <section aria-labelledby="results-title">
            <div className="wrap">
              <Head id="results-title" label={resultsSection.label ?? 'Results'} heading={resultsSection.heading} />
              <div className="cs-results">
                {study.results.map((r, i) => (
                  <article key={r.label} className={`cs-rcard${'count' in r ? ' count' : ''}`} aria-labelledby={`r-${i}`}>
                    <div className="cs-rcard-top"><h3 id={`r-${i}`}>{r.label}</h3><p className="cs-mult" aria-label={r.valueLabel}>{r.value}</p></div>
                    {'count' in r ? (
                      <>
                        <DotGrid count={r.count} ariaLabel={`A grid of ${r.count} dots, one for each ${r.unit}`} />
                        <p className="note">{r.note ?? `Each dot is one ${r.unit}.`}</p>
                      </>
                    ) : (
                      <>
                        <div className="cs-bars">
                          <div className="cs-bar">
                            <div className="cs-bar-label"><span>Before</span><span>{r.before}</span></div>
                            <div className="cs-bar-track">
                              <div
                                className={`cs-bar-fill${r.rangeSolid !== undefined ? ' range' : ''}`}
                                style={cssVars({ '--w': `${r.scale}%`, ...(r.rangeSolid !== undefined && { '--solid': `${r.rangeSolid}%` }) })}
                              ></div>
                            </div>
                          </div>
                          <div className="cs-bar">
                            <div className="cs-bar-label"><span>After</span><span>{r.after}</span></div>
                            <div className="cs-bar-track"><div className="cs-bar-fill after" style={cssVars({ '--w': '100%' })}></div></div>
                          </div>
                        </div>
                        <p className="note">
                          Bars drawn to scale.{r.rangeSolid !== undefined && ' The lighter segment marks the range in the starting figure.'}
                        </p>
                      </>
                    )}
                  </article>
                ))}
                {resultsSection.points && (
                  <div className="cs-rtexts">
                    {resultsSection.points.map((p) => (
                      <div key={p.title} className="cs-rtext"><h3>{p.title}</h3><p>{p.text}</p></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* What changed */}
        {changes && (
          <section className="pale" aria-labelledby="changed-title">
            <div className="wrap">
              <Head id="changed-title" label={changes.label ?? 'What changed for the business'} heading={changes.heading} />
              <div className="cs-changes" style={cssVars({ '--n': changes.items.length === 3 ? '3' : '2' })}>
                {changes.items.map((c) => (
                  <article key={c.title} className="cs-change">
                    <div className="cs-change-icon"><ChangeIcon kind={c.icon} /></div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Methods */}
        {methods && (
          <section aria-labelledby="tools-title">
            <div className="wrap cs-split">
              <Head id="tools-title" label={methods.label ?? 'Tools and methods'} heading={methods.heading} />
              <ul className="cs-tools">
                {methods.items.map((m) => <li key={m.title}><b>{m.title}</b><span>{m.text}</span></li>)}
              </ul>
            </div>
          </section>
        )}

        {/* Takeaway */}
        {takeaway && (
          <section className="cs-takeaway" aria-labelledby="takeaway-title">
            <div className="wrap">
              <div className="cs-panel">
                <p className="label">{takeaway.label ?? 'Takeaway'}</p>
                <h2 id="takeaway-title">{takeaway.heading}</h2>
                {takeaway.versus && (
                  <div className="cs-versus">
                    <figure>
                      {takeaway.versus.before.visual ?? (
                        <svg viewBox="0 0 300 180" role="img" aria-label="Seven separate dots with no links between them">
                          {DOTS.map(([x, y]) => <circle key={`${x}-${y}`} className="d-off" cx={x} cy={y} r="10" />)}
                        </svg>
                      )}
                      <figcaption>{takeaway.versus.before.title}{takeaway.versus.before.text && <span>{takeaway.versus.before.text}</span>}</figcaption>
                    </figure>
                    <figure>
                      {takeaway.versus.after.visual ?? (
                        <svg viewBox="0 0 300 180" role="img" aria-label="The same seven dots joined into a connected network">
                          {DOT_LINKS.map(([a, b]) => <line key={`${a}-${b}`} className="d-link" x1={DOTS[a][0]} y1={DOTS[a][1]} x2={DOTS[b][0]} y2={DOTS[b][1]} />)}
                          {DOTS.map(([x, y], i) => <circle key={`${x}-${y}`} className="d-on pulse" style={{ animationDelay: `${i * 0.4}s` }} cx={x} cy={y} r="10" />)}
                        </svg>
                      )}
                      <figcaption>{takeaway.versus.after.title}{takeaway.versus.after.text && <span>{takeaway.versus.after.text}</span>}</figcaption>
                    </figure>
                  </div>
                )}
                <p className="body">{takeaway.body}</p>
                {takeaway.fit && (
                  <ul className="cs-fit" aria-label="Where the same approach applies">
                    {takeaway.fit.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Origin + CTA */}
        <section className="cs-close" aria-labelledby="about-title">
          <div className="wrap">
            <div className="cs-about">
              <p className="cs-badge">{study.origin}</p>
              <h2 id="about-title">{about.heading}</h2>
              <p>{about.text}</p>
              <p><Link href={CASE_STUDIES_PATH} className="link">See all case studies</Link></p>
            </div>
            <div className="cs-cta">
              <h2>{cta.heading}</h2>
              <p>{cta.text}</p>
              <div className="cta-row">
                <Link href="/book" className="btn">Book a discovery call</Link>
                {cta.secondary && <Link href={cta.secondary.href} className="link">{cta.secondary.label}</Link>}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
