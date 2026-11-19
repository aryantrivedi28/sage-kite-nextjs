'use client';

import { useEffect, useRef, useState } from 'react';

const TYPE_MS = 55;

export interface ShopperSearchProps {
  /** Accessible name of the row of searches. */
  groupLabel: string;
  /** Each search, the kind of page that should answer it, and that page. `tone` colours the card: sky, butter or coral. */
  queries: { q: string; small: string; title: string; text: string; tone: 'blog' | 'treat' | 'clinic' }[];
  note: string;
}

/** Pick a shopper search: it is typed into the box, then the page that should answer it appears. Starts with the first. */
export function ShopperSearch({ groupLabel, queries, note }: ShopperSearchProps) {
  const [cur, setCur] = useState(0);
  const [typed, setTyped] = useState('');
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const pick = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setCur(i);
    const q = queries[i].q;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTyped(q); return; }
    let k = 0;
    setTyped('');
    timer.current = setInterval(() => {
      k += 1;
      setTyped(q.slice(0, k));
      if (k >= q.length && timer.current) clearInterval(timer.current);
    }, TYPE_MS);
  };

  useEffect(() => {
    pick(0);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const r = queries[cur];
  const done = typed === r.q;

  return (
    <div className="cs-nw-flowcard">
      <div className="cs-sq cs-nw-sq">
        <div className="cs-sq-in">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <span className="cs-sq-q">{typed}</span><span className="cs-caret" aria-hidden="true"></span>
        </div>
        <div className="cs-robots-chips cs-chips-on" role="group" aria-label={groupLabel}>
          {queries.map((x, i) => <button key={x.q} type="button" aria-pressed={i === cur} onClick={() => pick(i)}>{x.q}</button>)}
        </div>
        <div className="cs-sq-res cs-nw-hres" aria-live="polite">
          {done && <div className={`cs-sres on ${r.tone}`}><small>{r.small}</small><b>{r.title}</b><span>{r.text}</span></div>}
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
