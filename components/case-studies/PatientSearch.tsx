'use client';

import { useEffect, useState } from 'react';

/** Delay between typed characters, and how long a finished query stays before the next one. */
const TYPE_MS = 55;
const HOLD_MS = 2600;

export interface PatientSearchProps {
  ariaLabel: string;
  /** Typed in turn, each with the result types it matches. */
  queries: { q: string; types: string[] }[];
  results: { type: string; small: string; title: string; text: string }[];
  note: string;
}

/**
 * A search box that types patient searches one after another and lights up the page type that meets each
 * one (blog, treatment page, clinic page). With reduced motion it shows the second search, still.
 */
export function PatientSearch({ ariaLabel, queries, results, note }: PatientSearchProps) {
  const [typed, setTyped] = useState('');
  const [lit, setLit] = useState<string[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const q = queries[1] ?? queries[0];
      setTyped(q.q);
      setLit(q.types);
      return;
    }
    let qi = 0;
    let n = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const q = queries[qi];
      n += 1;
      setTyped(q.q.slice(0, n));
      if (n < q.q.length) { timer = setTimeout(tick, TYPE_MS); return; }
      setLit(q.types);
      timer = setTimeout(() => { qi = (qi + 1) % queries.length; n = 0; setLit([]); setTyped(''); tick(); }, HOLD_MS);
    };
    tick();
    return () => clearTimeout(timer);
  }, [queries]);

  return (
    <div className="cs-sq" role="group" aria-label={ariaLabel}>
      <div className="cs-sq-in">
        <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="M13 13l5 5" /></svg>
        <span className="cs-sq-q">{typed}</span><span className="cs-caret" aria-hidden="true"></span>
      </div>
      <div className="cs-sq-res">
        {results.map((r) => (
          <div key={r.type} className={`cs-sres ${r.type}${lit.includes(r.type) ? ' on' : ''}`}>
            <small>{r.small}</small><b>{r.title}</b><span>{r.text}</span>
          </div>
        ))}
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
