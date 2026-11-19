'use client';

import type React from 'react';
import { useId, useState } from 'react';

const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

/* The source's simple keyword rules for the headline checker (illustrative, not a classifier). */
const NEWS = ['breaking', 'live', 'update', 'today', 'tonight', 'just in', 'arrest', 'fire', 'accident', 'announced', 'alert', 'election', 'results', 'news'];
const EVERGREEN = ['best', 'top ', 'guide', 'how to', 'where to', 'things to do', 'places', 'restaurants', 'cafes', 'ultimate', 'list'];
const VISUAL = ['photos', 'in pictures', 'gallery', 'festival', 'visual', 'look inside', 'pictures'];

type Verdict = { ok: boolean; text: string; shelf: number };

export interface StoryTriageProps {
  /** Placeholder stories and the treatment each belongs to. */
  stories: { title: string; bin: string }[];
  bins: { key: string; small: string; title: string; note: string; ariaLabel: string; explain: string }[];
  poolLabel: string;
  sortedLabel: string;
  reset: string;
  idle: string;
  wrong: string;
  /** Shown when every story is placed: `{explain}` is the last treatment's explanation. */
  allDone: string;
  headline: {
    label: string;
    initial: string;
    shelfLabel: string;
    empty: string;
    evergreen: string;
    live: string;
    news: string;
    visual: string;
    general: string;
  };
  note: string;
}

/**
 * Sort placeholder stories into the treatment each needs: drag a story onto a treatment, or select a story and
 * then a treatment (mouse, touch or keyboard). Below it, a headline checker that applies the source's keyword
 * rules and shows a shelf-life bar.
 */
export function StoryTriage({ stories, bins, poolLabel, sortedLabel, reset, idle, wrong, allDone, headline, note }: StoryTriageProps) {
  const id = useId();
  const [placed, setPlaced] = useState<number[]>([]);
  const [sel, setSel] = useState<number | null>(null);
  const [shake, setShake] = useState<number | null>(null);
  const [over, setOver] = useState<string | null>(null);
  const [cap, setCap] = useState(idle);
  const [text, setText] = useState(headline.initial);

  const place = (i: number | null, bin: string) => {
    if (i === null || placed.includes(i)) return;
    const b = bins.find((x) => x.key === bin)!;
    if (stories[i].bin === bin) {
      const next = [...placed, i];
      setPlaced(next);
      setSel(null);
      setCap(next.length === stories.length ? allDone.split('{explain}').join(b.explain) : b.explain);
    } else {
      setShake(i);
      setTimeout(() => setShake((s) => (s === i ? null : s)), 400);
      setCap(wrong);
    }
  };
  const restart = () => { setPlaced([]); setSel(null); setCap(idle); };

  const t = text.toLowerCase();
  const has = (words: string[]) => words.some((w) => t.includes(w));
  const n = has(NEWS);
  const e = has(EVERGREEN);
  const v = has(VISUAL);
  const verdict: Verdict = !t.trim() ? { ok: true, text: headline.empty, shelf: 0 }
    : e && !n ? { ok: true, text: headline.evergreen, shelf: 92 }
    : t.includes('live') ? { ok: false, text: headline.live, shelf: 12 }
    : n ? { ok: false, text: headline.news, shelf: 15 }
    : v ? { ok: true, text: headline.visual, shelf: 50 }
    : { ok: true, text: headline.general, shelf: 35 };

  const card = (i: number) => {
    const ok = placed.includes(i);
    return (
      <button
        key={i}
        type="button"
        className={`cs-nw-tc${ok ? ' ok' : ''}${sel === i ? ' sel' : ''}${shake === i ? ' no' : ''}`}
        draggable={!ok}
        onDragStart={(ev) => { setSel(i); ev.dataTransfer.setData('text/plain', String(i)); ev.dataTransfer.effectAllowed = 'move'; }}
        onClick={() => { if (!ok) setSel(sel === i ? null : i); }}
      >
        {stories[i].title}
      </button>
    );
  };

  return (
    <div className="cs-sim">
      <div className="cs-nw-pool" aria-label={poolLabel}>{stories.map((_, i) => i).filter((i) => !placed.includes(i)).map(card)}</div>
      <div className="cs-nw-bins">
        {bins.map((b) => (
          <div
            key={b.key}
            className={`cs-nw-bin${over === b.key ? ' over' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={b.ariaLabel}
            onDragOver={(ev) => { ev.preventDefault(); setOver(b.key); }}
            onDragLeave={() => setOver(null)}
            onDrop={(ev) => { ev.preventDefault(); setOver(null); place(sel, b.key); }}
            onClick={() => { if (sel !== null) place(sel, b.key); }}
            onKeyDown={(ev) => { if ((ev.key === 'Enter' || ev.key === ' ') && sel !== null) { ev.preventDefault(); place(sel, b.key); } }}
          >
            <small>{b.small}</small>
            <h3>{b.title}</h3>
            <span className="note">{b.note}</span>
            <div className="cs-nw-tgt">{placed.filter((i) => stories[i].bin === b.key).map(card)}</div>
          </div>
        ))}
      </div>
      <div className="cs-nw-ctl">
        <ul className="cs-stats"><li>{sortedLabel} <b>{placed.length}</b> / {stories.length}</li></ul>
        <button className="cs-ghost" type="button" onClick={restart}>{reset}</button>
      </div>
      <p className="cs-nw-cap" aria-live="polite">{cap}</p>
      <div className="cs-code-split cs-nw-hl">
        <div className="cs-nw-field">
          <label htmlFor={`${id}-hl`} className="cs-nw-lab sky">{headline.label}</label>
          <input id={`${id}-hl`} type="text" value={text} onChange={(ev) => setText(ev.target.value)} />
        </div>
        <div className="cs-nw-field">
          <div className={`cs-nw-verdict ${verdict.ok ? 'ok' : 'no'}`} aria-live="polite">{verdict.text}</div>
          <div><span className="note">{headline.shelfLabel}</span><div className="cs-nw-shelf"><i style={cssVars({ '--w': `${verdict.shelf}%` })}></i></div></div>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
