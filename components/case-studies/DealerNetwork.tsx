'use client';

import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';

/**
 * The dealership network shared by the hero map (NetworkMap) and the audit grid (NetworkHeatmap): one row per
 * showroom, one 0/1 per standard (profile, NAP, landing page, reviews). Fixing a cell in either demo shows in both,
 * as in the source. The state lives here while either demo is on the page and starts again when both have left it.
 */
type Grid = number[][];

let grid: Grid | null = null;
const listeners = new Set<() => void>();

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
    if (listeners.size === 0) grid = null;
  };
}

function setGrid(next: Grid) {
  grid = next;
  listeners.forEach((fn) => fn());
}

function useGrid(initial: Grid) {
  const g = useSyncExternalStore(subscribe, () => grid ?? initial, () => initial);
  const update = (fn: (g: Grid) => Grid) => setGrid(fn(grid ?? initial));
  return [g, update] as const;
}

const score = (row: number[]) => row.reduce((a, b) => a + b, 0) * 25;
/** Below half the standard coral, part of it butter, all of it sky. */
const tone = (v: number) => (v < 50 ? 'var(--coral)' : v < 100 ? 'var(--butter)' : 'var(--sky)');
const fill = (t: string, vars: Record<string, string | number>) => Object.entries(vars).reduce((s, [k, v]) => s.split(`{${k}}`).join(String(v)), t);

/** Pin positions on the 620 x 340 map. */
const PINS = [[90, 90], [210, 60], [330, 110], [470, 70], [140, 215], [290, 235], [430, 200], [540, 270]];
const ROADS = ['M0,150 C150,120 300,190 620,140', 'M200,0 C230,120 180,240 260,340', 'M420,0 C400,110 470,230 440,340', 'M0,290 C200,260 380,300 620,250'];

export interface NetworkMapProps {
  /** One row per showroom; the same array goes to NetworkHeatmap. */
  initial: Grid;
  standards: string[];
  ariaLabel: string;
  /** `{n}` the showroom's number. */
  pinLabel: string;
  /** `{n}` the showroom, `{pct}` how much of the standard it meets. */
  cardTitle: string;
  stat: string;
  buttons: { standardize: string; reset: string };
  note: string;
}

/** The network map: tap a pin, switch its standards on, or standardize every showroom in turn. */
export function NetworkMap({ initial, standards, ariaLabel, pinLabel, cardTitle, stat, buttons, note }: NetworkMapProps) {
  const [g, update] = useGrid(initial);
  const [sel, setSel] = useState(0);
  const [still, setStill] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const roadId = useId().replace(/:/g, '');
  const net = Math.round(g.reduce((a, r) => a + score(r), 0) / g.length);

  useEffect(() => {
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const stop = () => { if (timer.current) clearInterval(timer.current); timer.current = null; };
  const standardize = () => {
    stop();
    const queue: [number, number][] = [];
    const cur = grid ?? initial;
    for (let k = 0; k < standards.length; k++) for (let i = 0; i < cur.length; i++) if (!cur[i][k]) queue.push([i, k]);
    let n = 0;
    timer.current = setInterval(() => {
      if (n >= queue.length) { stop(); return; }
      const [i, k] = queue[n++];
      update((d) => d.map((r, ri) => (ri === i ? r.map((v, ki) => (ki === k ? 1 : v)) : r)));
      setSel(i);
    }, 110);
  };
  const reset = () => { stop(); setGrid(initial.map((r) => [...r])); };
  const toggle = (k: number) => update((d) => d.map((r, ri) => (ri === sel ? r.map((v, ki) => (ki === k ? 1 - v : v)) : r)));

  return (
    <div className="cs-nw-flowcard">
      <svg className="cs-ms-map" viewBox="0 0 620 340" role="group" aria-label={ariaLabel}>
        <rect width="620" height="340" rx="10" className="bg" />
        {ROADS.map((d) => <path key={d} d={d} className="rd" />)}
        <path id={roadId} d={ROADS[0]} fill="none" />
        <g className="car" aria-hidden="true">
          <rect x="-14" y="-7" width="28" height="12" rx="4" className="body" />
          <rect x="-7" y="-13" width="15" height="8" rx="3" className="body" />
          <circle cx="-8" cy="6" r="4" className="wheel" />
          <circle cx="8" cy="6" r="4" className="wheel" />
          {!still && <animateMotion dur="12s" repeatCount="indefinite" rotate="auto"><mpath href={`#${roadId}`} /></animateMotion>}
        </g>
        {PINS.slice(0, g.length).map(([x, y], i) => (
          <g
            key={i}
            className={`pin${i === sel ? ' sel' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={fill(pinLabel, { n: i + 1 })}
            onClick={() => setSel(i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSel(i); } }}
          >
            <circle className="ring" cx={x} cy={y} r="21" />
            <circle className="b" cx={x} cy={y} r="15" style={{ fill: tone(score(g[i])) }} />
            <text x={x} y={y + 4} textAnchor="middle">{i + 1}</text>
          </g>
        ))}
      </svg>
      <div className="cs-ms-card" aria-live="polite">
        <h3>{fill(cardTitle, { n: sel + 1, pct: score(g[sel]) })}</h3>
        <div className="cs-nw-layers row">
          {standards.map((s, k) => (
            <button key={s} type="button" aria-pressed={!!g[sel][k]} onClick={() => toggle(k)}>{g[sel][k] ? '✓ ' : ''}{s}</button>
          ))}
        </div>
      </div>
      <div className="cs-nw-ctl">
        <ul className="cs-stats"><li>{stat} <b>{net}%</b></li></ul>
        <button className="btn" type="button" onClick={standardize}>{buttons.standardize}</button>
        <button className="cs-ghost" type="button" onClick={reset}>{buttons.reset}</button>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}

export interface NetworkHeatmapProps {
  /** The same array as NetworkMap's. */
  initial: Grid;
  standards: string[];
  /** `{n}` the showroom's number. */
  rowLabel: string;
  run: string;
  stat: string;
  detail: { label: string; idle: string; first: string; meets: string; fix: string };
  /** Per standard: the issue when it is missing, and the line once it is met. */
  issues: string[];
  fixes: string[];
  note: string;
}

/** The audit grid: run the audit row by row, then pick a cell for the issue and its fix. */
export function NetworkHeatmap({ initial, standards, rowLabel, run, stat, detail, issues, fixes, note }: NetworkHeatmapProps) {
  const [g, update] = useGrid(initial);
  const [seen, setSeen] = useState<number[]>([]);
  const [scan, setScan] = useState<number | null>(null);
  const [cell, setCell] = useState<[number, number] | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const after = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
    if (after.current) clearTimeout(after.current);
  }, []);

  const audit = () => {
    if (timer.current) clearInterval(timer.current);
    if (after.current) clearTimeout(after.current);
    setSeen([]);
    let i = 0;
    timer.current = setInterval(() => {
      const row = i;
      setScan(row);
      setSeen((s) => (s.includes(row) ? s : [...s, row]));
      i += 1;
      if (i >= g.length && timer.current) {
        clearInterval(timer.current);
        after.current = setTimeout(() => setScan(null), 400);
      }
    }, 350);
  };

  const pick = (i: number, k: number) => {
    if (!seen.includes(i)) { setCell(null); setMsg(detail.first); return; }
    setMsg(null);
    setCell([i, k]);
  };
  const applyFix = () => {
    if (!cell) return;
    const [i, k] = cell;
    update((d) => d.map((r, ri) => (ri === i ? r.map((v, ki) => (ki === k ? 1 : v)) : r)));
  };

  const met = cell ? !!g[cell[0]][cell[1]] : false;

  return (
    <div className="cs-sim">
      <div className="cs-nw-ctl">
        <button className="btn" type="button" onClick={audit}>{run}</button>
        <ul className="cs-stats"><li>{stat} <b>{seen.length}</b> / {g.length}</li></ul>
      </div>
      <div className="cs-ms-hm">
        <span className="h"></span>
        {standards.map((s) => <span key={s} className="h">{s}</span>)}
        {g.map((r, i) => {
          const name = fill(rowLabel, { n: i + 1 });
          return [
            <span key={`n${i}`} className="n">{name}</span>,
            ...r.map((v, k) => {
              const shown = seen.includes(i);
              return (
                <button
                  key={`${i}-${k}`}
                  type="button"
                  className={`${shown ? (v ? 'ok' : 'no') : ''}${i === scan ? ' scan' : ''}`}
                  aria-label={`${name} ${standards[k]}`}
                  onClick={() => pick(i, k)}
                >
                  {shown ? (v ? '✓' : '✗') : '?'}
                </button>
              );
            }),
          ];
        })}
      </div>
      <div className="cs-ms-desc">
        <span className="lab">{cell ? `${fill(rowLabel, { n: cell[0] + 1 })} · ${standards[cell[1]]}` : detail.label}</span>
        <p>{msg ?? (cell ? (met ? `${detail.meets} ${fixes[cell[1]]}` : issues[cell[1]]) : detail.idle)}</p>
        {cell && !msg && !met && <div><button className="cs-ghost" type="button" onClick={applyFix}>{detail.fix}</button></div>}
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
