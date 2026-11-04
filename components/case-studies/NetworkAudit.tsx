'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Which of the four checks each illustrative dealership fails ('1' = gap), in the order of `tags`.
 * Twelve placeholder dealerships, as in the source.
 */
const GAPS = ['1101', '0110', '1011', '0101', '1110', '0011', '1001', '0111', '1100', '0001', '1010', '0110'];
const N = GAPS.length;

export interface NetworkAuditProps {
  buttons: { audit: string; fixAll: string; reset: string };
  /** Labels before each counter, e.g. "Audited:". */
  stats: { audited: string; gaps: string; standardized: string };
  /** Card heading; `{n}` is the dealership number. */
  dealer: string;
  /** The four checks shown on every card, e.g. GBP, NAP, PAGE, REV. */
  tags: [string, string, string, string];
  /** Caption before, during and after the audit, and once every dealership is standardized. */
  captions: { idle: string; progress: string; complete: string; done: string };
  note: string;
}

type Card = { audited: boolean; fixed: boolean };
const fresh = (): Card[] => GAPS.map(() => ({ audited: false, fixed: false }));

/**
 * The dealership network as cards. Clicking a card audits it (its gaps turn coral, the rest sky), clicking
 * again standardizes it. "Run network audit" audits them all in turn; "Standardize all" then fixes them all.
 */
export function NetworkAudit({ buttons, stats, dealer, tags, captions, note }: NetworkAuditProps) {
  const [cards, setCards] = useState<Card[]>(fresh);
  const [scan, setScan] = useState<number | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => clear, []);

  const flash = (i: number) => {
    setScan(i);
    timers.current.push(setTimeout(() => setScan((s) => (s === i ? null : s)), 260));
  };
  const update = (i: number, next: (c: Card) => Card) => setCards((cs) => cs.map((c, k) => (k === i ? next(c) : c)));

  const hit = (i: number) => {
    update(i, (c) => (!c.audited ? { ...c, audited: true } : { ...c, fixed: true }));
    flash(i);
  };
  const sequence = (fn: (i: number) => void, step: number) => {
    clear();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    for (let i = 0; i < N; i++) timers.current.push(setTimeout(() => fn(i), reduce ? 0 : i * step));
  };

  const audited = cards.filter((c) => c.audited).length;
  const fixed = cards.filter((c) => c.fixed).length;
  const gaps = cards.reduce((sum, c, i) => sum + (c.audited && !c.fixed ? GAPS[i].split('1').length - 1 : 0), 0);
  const caption = fixed === N ? captions.done : audited === N ? captions.complete : audited > 0 ? captions.progress : captions.idle;

  return (
    <div className="cs-sim">
      <div className="cs-ctl">
        <button className="cs-ghost" type="button" onClick={() => sequence((i) => { update(i, (c) => ({ ...c, audited: true })); flash(i); }, 200)}>{buttons.audit}</button>
        <button className="cs-ghost" type="button" disabled={!(audited === N && fixed < N)} onClick={() => sequence((i) => { update(i, () => ({ audited: true, fixed: true })); flash(i); }, 180)}>{buttons.fixAll}</button>
        <button className="cs-ghost" type="button" onClick={() => { clear(); setScan(null); setCards(fresh()); }}>{buttons.reset}</button>
      </div>
      <ul className="cs-stats">
        <li>{stats.audited} <b>{audited}</b> / {N}</li>
        <li>{stats.gaps} <b>{gaps}</b></li>
        <li>{stats.standardized} <b>{fixed}</b> / {N}</li>
      </ul>
      <div className="cs-net">
        {cards.map((c, i) => (
          <button key={i} type="button" className={`cs-dl${c.fixed ? ' fixed' : ''}${scan === i ? ' scan' : ''}`} onClick={() => hit(i)}>
            <b>{dealer.split('{n}').join(String(i + 1))}</b>
            <span className="cs-dl-tags">
              {tags.map((t, k) => (
                <span key={t} className={!c.audited ? undefined : c.fixed || GAPS[i][k] === '0' ? 'ok' : 'bad'}>{t}</span>
              ))}
            </span>
          </button>
        ))}
      </div>
      <p className="cs-sim-caption" aria-live="polite">{caption}</p>
      <p className="note">{note}</p>
    </div>
  );
}
