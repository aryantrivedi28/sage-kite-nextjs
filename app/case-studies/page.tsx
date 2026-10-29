import React, { cloneElement, isValidElement, type ReactElement } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/content/share-image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DefaultCover, type CoverProps } from '@/components/case-studies/covers';
import { CASE_STUDIES, CASE_STUDIES_PATH, caseStudyPath } from '@/content/case-studies';

const SITE_URL = 'https://www.sagekite.com';
const PAGE_URL = `${SITE_URL}${CASE_STUDIES_PATH}`;
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
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case studies | Sage Kite',
    description: DESCRIPTION,
    images: DEFAULT_TWITTER_IMAGES,
  },
};

/** The same arrow as the blog cards (components/blog/BlogCard.tsx). */
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function CaseStudiesPage() {
  // The newest study is featured above the grid; the grid shows the rest, so it is not repeated.
  const [featured, ...others] = CASE_STUDIES;
  // The featured media stretches to the text beside it, so its cover shows the whole drawing (`meet`) instead of
  // cropping it to fill a box that is not 16:9.
  const featuredCover =
    featured && isValidElement(featured.cover)
      ? cloneElement(featured.cover as ReactElement<CoverProps>, { fit: 'meet' })
      : <DefaultCover fit="meet" />;
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
          /* Case studies collection: the blog listing's global classes (.blog-hero, .featured-blog, .blog-grid,
             .blog-card) plus what only this page needs. */
          .csl-count{font-size:.875rem;font-weight:600;color:var(--sage)}
          /* the featured cover is drawn with overflow visible (fit="meet"); keep it inside its box */
          .csl-listing .featured-blog-media{overflow:hidden}
          .csl-feature-origin{font-size:.875rem;font-weight:600;color:var(--sage);margin:-18px 0 28px}
          .csl-listing .blog-meta{flex-wrap:wrap;row-gap:6px}
          .csl-listing .blog-chip{white-space:normal}
          .blog-card .csl-headline{flex:none;margin:-10px 0 20px;font-size:.875rem;line-height:1.45;color:var(--sage)}
          .csl-headline b{color:var(--ink);font-weight:800}
          /* client, dot and industry flow as one line of text; the dot is tied to the word after it, so it never ends a line */
          .csl-meta-line .blog-meta-dot{margin-right:.15em}
          .csl-cards .blog-card-cta{white-space:nowrap}
          .csl-cards .blog-card-foot{justify-content:flex-end}

          /* cover illustrations (components/case-studies/covers.tsx): brand tokens only */
          .cs-cover{position:absolute;inset:0;width:100%;height:100%;display:block}
          .cs-cover .bg{fill:var(--pale-sage)}
          .cs-cover .f-ink{fill:var(--ink)}
          .cs-cover .f-sage{fill:var(--sage)}
          .cs-cover .f-light{fill:var(--light-sage)}
          .cs-cover .f-white{fill:var(--warm-white)}
          .cs-cover .f-coral{fill:var(--coral)}
          .cs-cover .f-coral-soft{fill:var(--coral-soft)}
          .cs-cover .f-butter{fill:var(--butter)}
          .cs-cover .f-butter-soft{fill:var(--butter-soft)}
          .cs-cover .f-sky{fill:var(--sky)}
          .cs-cover .f-sky-soft{fill:var(--sky-soft)}
          .cs-cover .s-ink,.cs-cover .s-sage,.cs-cover .s-light,.cs-cover .s-sky,.cs-cover .s-white{fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
          .cs-cover .s-ink{stroke:var(--ink)}
          .cs-cover .s-sage{stroke:var(--sage)}
          .cs-cover .s-light{stroke:var(--light-sage)}
          .cs-cover .s-sky{stroke:var(--sky)}
          .cs-cover .s-white{stroke:var(--warm-white)}
          .cs-cover .o-ink{stroke:var(--ink);stroke-width:3;stroke-linejoin:round}
          .cs-cover .o-light{stroke:var(--light-sage);stroke-width:2}
          .cs-cover .thin{stroke-width:2}
          .cs-cover .dash{stroke-dasharray:7 8}

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
            .csl-read-grid{grid-template-columns:1fr}
          }
          @media (max-width:900px){
            .csl-rules{grid-template-columns:1fr}
          }
        ` }} />

        {/* Hero */}
        <section className="tint blog-hero" aria-labelledby="csl-title">
          <div className="wrap">
            <div className="head">
              <p className="label">Selected work</p>
              <h1 id="csl-title" className="blog-hero-title">Case studies</h1>
              <p className="sub blog-hero-sub">
                What the problem was, what was built and what changed. Every example states where it comes from and the basis for any result, so you know exactly what you are reading.
              </p>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="blog-listing csl-listing" id="all-case-studies">
          <div className="wrap">
            {featured && (
              <div className="blog-featured-wrap">
                <Link href={caseStudyPath(featured.slug)} className="featured-blog" prefetch={false}>
                  <div className="featured-blog-media">{featuredCover}</div>
                  <div className="featured-blog-body">
                    <div className="blog-meta">
                      <span className="label featured-blog-label">Featured</span>
                      <span className="chip blog-chip">{featured.discipline}</span>
                    </div>
                    <h2 className="featured-blog-title">{featured.title}</h2>
                    <p className="featured-blog-excerpt">{featured.summary}</p>
                    <div className="blog-meta featured-blog-meta">
                      <span className="csl-meta-line">
                        {featured.client} <span className="blog-meta-dot" aria-hidden="true">&bull;</span>&nbsp;{featured.industry}
                      </span>
                    </div>
                    <p className="csl-feature-origin">{featured.origin}</p>
                    <span className="btn btn-s featured-blog-cta">Read the case study</span>
                  </div>
                </Link>
              </div>
            )}

            {others.length > 0 && (
              <>
                <div className="blog-grid-head">
                  <h2 className="blog-grid-title" id="csl-list-title">The work, in detail</h2>
                  <p className="csl-count">{others.length} {others.length === 1 ? 'case study' : 'case studies'}</p>
                </div>
                <div className="blog-grid csl-cards">
                  {others.map((c) => (
                    <Link key={c.slug} href={caseStudyPath(c.slug)} className="blog-card" prefetch={false}>
                      <div className="blog-card-media">{c.cover ?? <DefaultCover />}</div>
                      <div className="blog-card-content">
                        <div className="blog-meta">
                          <span className="chip blog-chip">{c.discipline}</span>
                        </div>
                        {/* The full titles run to six lines on a card, so the grid shows the client and the study's dek. */}
                        <h3>{c.client}</h3>
                        <p>{c.hero.dek}</p>
                        {c.results.length > 0 && (
                          <p className="csl-headline"><b>{c.results[0].value}</b> {c.results[0].label}, as reported</p>
                        )}
                        <div className="blog-card-foot">
                          <span className="blog-card-cta">
                            Read the case study <ArrowIcon />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
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
