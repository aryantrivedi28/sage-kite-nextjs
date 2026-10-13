'use client';

import { useEffect, useState } from 'react';

export interface TypedQuery {
  /** The search text typed into the bar. */
  q: string;
  /** Colour of the tag: butter, coral or sky. */
  tone: 'butter' | 'coral' | 'sky';
  tag: string;
  note: string;
}

/**
 * Types each illustrative search into a search bar in turn. The first query is
 * rendered on the server, and nothing animates for reduced-motion users.
 * Wrap it in a <figure className="cs-search"> with a caption saying it is illustrative.
 */
export function SearchTyper({ queries }: { queries: TypedQuery[] }) {
  const [qi, setQi] = useState(0);
  const [text, setText] = useState(queries[0].q);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer: ReturnType<typeof setTimeout>;
    let i = 0;
    let ci = 0;
    const tick = () => {
      const cur = queries[i];
      if (ci <= cur.q.length) {
        setQi(i);
        setText(cur.q.slice(0, ci++));
        timer = setTimeout(tick, 55);
      } else {
        timer = setTimeout(() => {
          ci = 0;
          i = (i + 1) % queries.length;
          setText('');
          timer = setTimeout(tick, 350);
        }, 2200);
      }
    };
    tick();
    return () => clearTimeout(timer);
  }, [queries]);

  const cur = queries[qi];
  return (
    <>
      <div className="cs-search-bar" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="9" cy="9" r="6.5" />
          <line x1="14" y1="14" x2="20" y2="20" />
        </svg>
        <span className="cs-typed">{text}</span>
        <span className="cs-caret" />
      </div>
      <div className="cs-search-result" aria-hidden="true">
        <span className="cs-qtag" data-tone={cur.tone}>{cur.tag}</span>
        <span>{cur.note}</span>
      </div>
    </>
  );
}
