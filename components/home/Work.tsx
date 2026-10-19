import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES, CASE_STUDIES_PATH, caseStudyPath, type CaseStudy } from '@/content/case-studies';

const FEATURED: { slug: string; accent: string }[] = [
  { slug: 'santa-barbara-trapeze', accent: 'var(--coral)' },
  { slug: 'get-daily', accent: 'var(--butter)' },
  { slug: '260-sample-sale', accent: 'var(--sky)' },
];

export function Work() {
  const featured = FEATURED.flatMap(({ slug, accent }) => {
    const study = CASE_STUDIES.find((c) => c.slug === slug);
    return study ? [{ study, accent }] : [];
  });

  if (featured.length === 0) return null;

  return (
    <section id="case-studies" className="work" aria-labelledby="work-title">
      <div className="wrap reveal">
        <div className="work-top">
          <div>
            <p className="label">Selected work</p>
            <h2 id="work-title">Evidence, with its context.</h2>
            <p className="sub">Every example states its origin and the basis for any result.</p>
          </div>
          <Link href={CASE_STUDIES_PATH} className="link">All case studies</Link>
        </div>

        <ul className="work-cards">
          {featured.map(({ study, accent }) => (
            <li key={study.slug}>
              <WorkCard study={study} accent={accent} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WorkCard({ study, accent }: { study: CaseStudy; accent: string }) {
  return (
    <Link href={caseStudyPath(study.slug)} className="work-card" style={{ '--c': accent } as CSSProperties}>
      <span className="work-tag">{study.discipline}</span>
      <h3>{study.client}</h3>
      <p className="work-industry">{study.industry}</p>
      <p className="work-sum">{study.summary}</p>
      <ul className="work-chips" aria-label="What was built">
        {study.highlights.map((h) => (
          <li key={h} className="chip">{h}</li>
        ))}
      </ul>
      <p className="work-origin">{study.origin}</p>
      <span className="work-more">
        Read the case study <ArrowRight size={18} aria-hidden="true" />
      </span>
    </Link>
  );
}
