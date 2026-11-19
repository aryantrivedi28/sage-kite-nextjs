'use client';

import { useEffect, useRef, useState } from 'react';

export interface RuleGridProps {
  buttons: { rule: string; add: string; reset: string };
  /** Read as "<fixed> 12 <of> 300". */
  stats: { fixed: string; of: string; hand: string; rule: string };
  ariaLabel: string;
  /** Pages at the start, and how many "Add" adds. */
  pages: number;
  add: number;
  captions: { idle: string; allRule: string; allHand: string; addedRule: string; addedNoRule: string };
}

interface Tile { ok: boolean; nw: boolean }

const STAGGER = 6;

/** A grid of product pages, each with the problem: fix them one tap at a time, or once as a rule that also covers pages added later. */
export function RuleGrid({ buttons, stats, ariaLabel, pages, add, captions }: RuleGridProps) {
  const fresh = () => Array.from({ length: pages }, () => ({ ok: false, nw: false }));
  const [tiles, setTiles] = useState<Tile[]>(fresh);
  const [ruled, setRuled] = useState(false);
  const [settled, setSettled] = useState(false);
  const [hand, setHand] = useState(0);
  const [said, setSaid] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const total = tiles.length;
  const fixed = ruled && settled ? total : tiles.filter((t) => t.ok).length;
  const rule = ruled ? 1 : 0;
  const caption = said ?? (fixed === total && rule ? captions.allRule : fixed === total ? captions.allHand : captions.idle);

  const fixOne = (i: number) => {
    if (ruled || tiles[i].ok) return;
    setTiles((ts) => ts.map((t, k) => (k === i ? { ...t, ok: true } : t)));
    setHand((h) => h + 1);
    setSaid(null);
  };
  const applyRule = () => {
    if (ruled) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setRuled(true);
    setSaid(null);
    timer.current = setTimeout(() => setSettled(true), reduce ? 0 : total * STAGGER);
  };
  const addMore = () => {
    setTiles((ts) => [...ts, ...Array.from({ length: add }, () => ({ ok: ruled, nw: true }))]);
    setSaid(ruled ? captions.addedRule : captions.addedNoRule);
  };
  const reset = () => {
    if (timer.current) clearTimeout(timer.current);
    setTiles(fresh());
    setRuled(false);
    setSettled(false);
    setHand(0);
    setSaid(null);
  };

  return (
    <div className="cs-sim">
      <div className="cs-ctl">
        <button className="btn" type="button" onClick={applyRule}>{buttons.rule}</button>
        <button className="cs-ghost" type="button" onClick={addMore}>{buttons.add}</button>
        <button className="cs-ghost" type="button" onClick={reset}>{buttons.reset}</button>
      </div>
      <ul className="cs-stats">
        <li>{stats.fixed} <b>{fixed}</b> {stats.of} <b>{total}</b></li>
        <li>{stats.hand} <b>{hand}</b></li>
        <li>{stats.rule} <b>{rule}</b></li>
      </ul>
      <div className="cs-ib-cat" role="img" aria-label={ariaLabel}>
        {tiles.map((t, i) => (
          <div
            key={i}
            className={`cs-ib-pgt${t.ok || ruled ? ' ok' : ''}${t.nw ? ' nw' : ''}`}
            style={ruled && !t.ok && !settled ? { transitionDelay: `${i * STAGGER}ms` } : undefined}
            onClick={() => fixOne(i)}
          />
        ))}
      </div>
      <p className="cs-nw-cap cs-ib-min" aria-live="polite">{caption}</p>
    </div>
  );
}
