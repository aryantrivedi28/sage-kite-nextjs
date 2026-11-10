'use client';

import { useRef, useState } from 'react';

export interface KeywordMapProps {
  keywords: string[];
  /** Each page and the one keyword that is its best target. */
  pages: { label: string; keyword: string }[];
  dropHint: string;
  idle: string;
  /** `{kw}` the keyword, `{page}` the page. */
  right: string;
  wrong: string;
  done: string;
  mappedLabel: string;
  reset: string;
  note: string;
}

/** Drag a keyword onto the page it belongs to, or select a keyword and then a page. Distractors never fit. */
export function KeywordMap({ keywords, pages, dropHint, idle, right, wrong, done, mappedLabel, reset, note }: KeywordMapProps) {
  const [placed, setPlaced] = useState<Record<number, string>>({});
  const [sel, setSelState] = useState<string | null>(null);
  // Mirrored in a ref so a drop or tap right after picking a keyword sees it, and placements read the latest state.
  const selRef = useRef<string | null>(null);
  const placedRef = useRef<Record<number, string>>({});
  const setSel = (k: string | null) => { selRef.current = k; setSelState(k); };
  const [bad, setBad] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);
  const [msg, setMsg] = useState(idle);
  const used = Object.values(placed);
  const count = used.length;

  const attach = (zi: number, kw: string | null) => {
    if (!kw || placedRef.current[zi]) return;
    if (pages[zi].keyword === kw) {
      const next = { ...placedRef.current, [zi]: kw };
      placedRef.current = next;
      setPlaced(next);
      setMsg(Object.keys(next).length === pages.length ? done : right.split('{kw}').join(kw).split('{page}').join(pages[zi].label));
    } else {
      setBad(zi);
      setTimeout(() => setBad((b) => (b === zi ? null : b)), 450);
      setMsg(wrong.split('{kw}').join(kw));
    }
    setSel(null);
  };
  const restart = () => { placedRef.current = {}; setPlaced({}); setSel(null); setMsg(idle); };

  return (
    <div className="cs-sim">
      <div className="cs-robots-chips cs-chips-on cs-nw-kwp">
        {keywords.filter((k) => !used.includes(k)).map((k) => (
          <button key={k} type="button" draggable aria-pressed={sel === k} onDragStart={(e) => { setSel(k); e.dataTransfer.setData('text/plain', k); }} onClick={() => setSel(k)}>{k}</button>
        ))}
      </div>
      <div className="cs-nw-bins">
        {pages.map((p, i) => (
          <div
            key={p.label}
            className={`cs-nw-zone${placed[i] ? ' ok' : ''}${bad === i ? ' bad' : ''}${over === i ? ' over' : ''}`}
            tabIndex={0}
            onDragOver={(e) => { e.preventDefault(); setOver(i); }}
            onDragLeave={() => setOver(null)}
            onDrop={(e) => { e.preventDefault(); setOver(null); attach(i, e.dataTransfer.getData('text/plain') || selRef.current); }}
            onClick={() => { if (selRef.current) attach(i, selRef.current); }}
            onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && selRef.current) { e.preventDefault(); attach(i, selRef.current); } }}
          >
            <small>{p.label}</small>
            <b>{placed[i] ?? dropHint}</b>
          </div>
        ))}
      </div>
      <p className="cs-nw-cap" aria-live="polite">{msg}</p>
      <div className="cs-nw-ctl">
        <ul className="cs-stats"><li>{mappedLabel} <b>{count}</b> / {pages.length}</li></ul>
        <button className="cs-ghost" type="button" onClick={restart}>{reset}</button>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
