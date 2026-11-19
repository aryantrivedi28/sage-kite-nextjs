import type React from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CASE_STUDIES_PATH, type CaseStudy } from '@/content/case-studies';
import { CASE_STUDY_CSS } from './caseStudyStyles';
import { TechNav } from './TechNav';

const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

function Ribbon() {
  return <span className="cs-tech-ribbon" aria-hidden="true"><i></i><i></i><i></i></span>;
}

function Head({ id, label, heading, intro, plain, breakAfter }: { id?: string; label: string; heading: string; intro?: string; plain?: { label: string; text: string }; breakAfter?: string }) {
  const at = breakAfter ? heading.indexOf(breakAfter) : -1;
  const cut = at < 0 ? -1 : at + breakAfter!.length;
  return (
    <div className="cs-tech-head">
      <p className="cs-tech-sec">{label}</p>
      <h2 id={id}>{cut < 0 ? heading : <>{heading.slice(0, cut).trimEnd()}<br className="cs-tech-br" /> {heading.slice(cut).trimStart()}</>}</h2>
      {intro && <p className="cs-tech-lede">{intro}</p>}
      {plain && <p className="cs-tech-pw"><b>{plain.label}</b> {plain.text}</p>}
    </div>
  );
}

/** Impact cards. `first`: at the top of its own band, so without the gap above. */
function Changes({ changes, first }: { changes: NonNullable<CaseStudy['changes']>; first?: boolean }) {
  return (
    <div className={first ? undefined : 'cs-tech-more'}>
      <Head id={first ? 'impact-title' : undefined} label={changes.label ?? 'What changed for the business'} heading={changes.heading} />
      <div className="cs-tech-changes">
        {changes.items.map((c) => (
          <article key={c.title} className="cs-tech-change"><h3>{c.title}</h3><p>{c.text}</p></article>
        ))}
      </div>
    </div>
  );
}

function Methods({ methods }: { methods: NonNullable<CaseStudy['methods']> }) {
  return (
    <div className="cs-tech-more">
      <Head label={methods.label ?? 'Tools and methods'} heading={methods.heading} />
      <ul className={`cs-tech-tools${methods.breakAfter ? ' has-br' : ''}`}>
        {methods.items.map((m, i) => (
          <Fragment key={m.title}>
            <li>{m.title}{m.text && <span> · {m.text}</span>}</li>
            {methods.breakAfter === i + 1 && i + 1 < methods.items.length && <li className="cs-tech-tools-br" aria-hidden="true"></li>}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

/**
 * The interactive technical case study layout (first used for Croma), chosen by `study.technical`.
 * Same data as the standard layout, laid out like the supplied interactive HTML: a grid-paper hero
 * with a kicker, chips and the console beside it; numbered sections, each with its demo card;
 * results beside their points; impact cards; stack chips; the takeaway panel and the CTA.
 * Brand fonts and colours only (see caseStudyStyles.ts, "technical layout").
 */
export function TechnicalCaseStudyPage({ study, jsonLd }: { study: CaseStudy; jsonLd: object }) {
  const { hero, metrics, sections, resultsSection, changes, methods, takeaway, about, cta } = study;
  const technical = study.technical!;
  const [firstCrumb, ...restCrumbs] = technical.crumbs ?? [];
  // The before/after card; a count result has no card in this layout.
  const first = study.results[0];
  const result = first && !('count' in first) ? first : undefined;

  const results = resultsSection && (
    <>
      <Head id="results-title" label={resultsSection.label ?? 'Results'} heading={resultsSection.heading} />
      {resultsSection.visual}
      <div className={`cs-tech-results${result || resultsSection.card ? '' : ' single'}`}>
        {resultsSection.card && <div className="cs-tech-rcard">{resultsSection.card}</div>}
        {result && !resultsSection.card && (
          <div className="cs-tech-rcard">
            <p className="cs-tech-mult" aria-label={result.valueLabel}>{result.value}</p>
            <div className="cs-bars" role="img" aria-label={`${result.label}: ${result.before} before, ${result.after} ${(result.afterLabel ?? 'after').toLowerCase()}`}>
              <div className="cs-bar">
                <div className="cs-bar-label"><span>Before</span><span>{result.before}</span></div>
                <div className="cs-bar-track"><div className="cs-bar-fill" style={cssVars({ '--w': `${result.scale}%` })}></div></div>
              </div>
              <div className="cs-bar">
                <div className="cs-bar-label"><span>{result.afterLabel ?? 'After'}</span><span>{result.after}</span></div>
                <div className="cs-bar-track"><div className="cs-bar-fill after" style={cssVars({ '--w': '100%' })}></div></div>
              </div>
            </div>
            {result.note && <p className="note">{result.note}</p>}
          </div>
        )}
        {resultsSection.points && (
          <div className="cs-tech-rlist">
            {resultsSection.points.map((p) => (
              <div key={p.title} className="cs-tech-rtext"><h3>{p.title}</h3><p>{p.text}</p></div>
            ))}
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      <Header />
      <main id="main" className={`cs cs-tech${technical.wideHeadings ? ' cs-tech-wide' : ''}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <style dangerouslySetInnerHTML={{ __html: CASE_STUDY_CSS }} />
        <TechNav items={technical.nav} odometer={technical.odometer} dotnav={technical.dotnav} pager={technical.pager} pagerPad={!technical.pagerPlain} />

        {/* Overview */}
        <section className={`cs-tech-hero${technical.plainHero ? ' plain' : ''}`} id="overview" aria-labelledby="title">
          <div className="wrap">
            {firstCrumb && (
              <nav className="cs-tech-crumbs" aria-label="Breadcrumb">
                <Link href={CASE_STUDIES_PATH}>{firstCrumb}</Link>
                {restCrumbs.map((c) => (
                  <span key={c}><span aria-hidden="true">/</span> {c}</span>
                ))}
              </nav>
            )}
            <div className="cs-tech-hero-grid">
              <div className="cs-tech-hero-copy">
                {hero.label && <p className="cs-tech-kicker"><Ribbon />{hero.label}</p>}
                <h1 id="title">{study.title}</h1>
                <p className="cs-tech-dek">{hero.dek}</p>
                <p className="cs-tech-lede">{hero.lede}</p>
                <ul className="cs-tech-glance" aria-label="Project summary">
                  {hero.glance.map((g) => (
                    <li key={g.label}><span>{g.label.toLowerCase()}</span> {g.value}</li>
                  ))}
                </ul>
                {study.origin && <p className="cs-badge">{study.origin}</p>}
              </div>
              {hero.visual && <div className="cs-tech-hero-visual">{hero.visual}</div>}
            </div>
            {hero.note && <p className="note cs-tech-hero-note">{hero.note}</p>}
          </div>
        </section>

        {/* Highlights */}
        {metrics && (
          <section className="cs-tech-metrics-sec" aria-label="Project highlights">
            <div className="wrap">
              <div className="cs-tech-metrics" style={cssVars({ '--n': String(metrics.items.length) })}>
                {metrics.items.map((m) => (
                  <div key={m.label} className={`cs-tech-metric ${m.tone}`}><b>{m.value}</b><span>{m.label}</span></div>
                ))}
              </div>
              {metrics.note && <p className="note cs-footnote">{metrics.note}</p>}
            </div>
          </section>
        )}

        {/* Parts of the work, each with its demo */}
        {sections?.map((sec) => (
          <section key={sec.id} id={sec.id} className={`cs-tech-band${sec.band ? ` ${sec.band}` : ''}`} aria-labelledby={`${sec.id}-title`}>
            <div className="wrap">
              <Head id={`${sec.id}-title`} label={sec.label} heading={sec.heading} intro={sec.intro} plain={sec.plain} breakAfter={sec.headingBreak} />
              {sec.content}
            </div>
          </section>
        ))}

        {/* Results, impact and stack: one plain band (Croma), or results in a band of their own (resultsSection.band) */}
        {resultsSection?.band || technical.impactBand ? (
          <>
            <section className={`cs-tech-band${resultsSection?.band ? ` ${resultsSection.band}` : ''}`} id="results" aria-labelledby="results-title">
              <div className="wrap">{results}</div>
            </section>
            {(changes || methods) && (
              <section className={`cs-tech-band${technical.impactBand ? ` ${technical.impactBand}` : ''}`} aria-labelledby={changes ? 'impact-title' : undefined}>
                <div className="wrap">
                  {changes && <Changes changes={changes} first />}
                  {methods && <Methods methods={methods} />}
                </div>
              </section>
            )}
          </>
        ) : (resultsSection || changes || methods) && (
          <section className="cs-tech-band" id="results" aria-labelledby="results-title">
            <div className="wrap">
              {results}
              {changes && <Changes changes={changes} />}
              {methods && <Methods methods={methods} />}
            </div>
          </section>
        )}

        {/* Takeaway, origin and CTA */}
        <section className={`cs-tech-band${technical.impactBand ? '' : ' pale'}`} aria-labelledby={takeaway ? 'takeaway-title' : 'cta-title'}>
          <div className="wrap">
            {takeaway && (
              <div className="cs-tech-panel">
                <p className="cs-tech-kicker"><Ribbon />{takeaway.label ?? 'Takeaway'}</p>
                <h2 id="takeaway-title">{takeaway.heading}</h2>
                <p>{takeaway.body}</p>
                {takeaway.fit && (
                  <ul className="cs-fit" aria-label="Where the same approach applies">
                    {takeaway.fit.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                )}
                {takeaway.link && <p><Link href={takeaway.link.href} className="link">{takeaway.link.label}</Link></p>}
              </div>
            )}
            {about && (
              <div className="cs-about cs-tech-about">
                {study.origin && <p className="cs-badge">{study.origin}</p>}
                <h2>{about.heading}</h2>
                <p>{about.text}</p>
                <p><Link href={CASE_STUDIES_PATH} className="link">See all case studies</Link></p>
              </div>
            )}
            <div className="cs-cta cs-tech-cta">
              <h2 id="cta-title">{cta.heading}</h2>
              <p>{cta.text}</p>
              <div className="cta-row">
                <Link href={cta.primary?.href ?? '/book'} className="btn">{cta.primary?.label ?? 'Book a discovery call'}</Link>
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
