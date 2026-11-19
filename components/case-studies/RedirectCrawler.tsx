'use client';

import { useEffect, useRef, useState } from 'react';

type Mode = 'loop' | 'rule';

export interface RedirectCrawlerProps {
  groupLabel: string;
  modes: Record<Mode, string>;
  send: string;
  ariaLabel: string;
  /** The out-of-stock page, and where it sends the crawler without and with a rule. */
  nodes: { from: string; loop: string; rule: string };
  /** The line under the drawing for each mode. */
  lines: Record<Mode, string>;
  stats: { visits: string; result: string };
  outcomes: { arrived: string; gaveUp: string };
  /** `gaveUp` takes `{n}`, the number of visits used. */
  captions: { idle: string; running: Record<Mode, string>; arrived: string; gaveUp: string };
  /** Visits before the crawler gives up. */
  maxHops: number;
  note: string;
}

const LEFT = 115;
const RIGHT = 405;
const MID = 115;

/** Two pages and a crawler: without a rule it bounces between them until it gives up; with one it lands on a useful page in one visit. */
export function RedirectCrawler({ groupLabel, modes, send, ariaLabel, nodes, lines, stats, outcomes, captions, maxHops, note }: RedirectCrawlerProps) {
  const [mode, setMode] = useState<Mode>('loop');
  const [hops, setHops] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [caption, setCaption] = useState(captions.idle);
  const [busy, setBusy] = useState(false);
  const tok = useRef<SVGCircleElement>(null);
  const frame = useRef(0);
  const wait = useRef<ReturnType<typeof setTimeout> | null>(null);
  const run = useRef(0);

  const stop = () => {
    run.current += 1;
    cancelAnimationFrame(frame.current);
    if (wait.current) clearTimeout(wait.current);
  };
  const place = (x: number, y: number) => {
    tok.current?.setAttribute('cx', String(x));
    tok.current?.setAttribute('cy', String(y));
  };
  useEffect(() => stop, []);

  const pick = (m: Mode) => {
    stop();
    setMode(m);
    setHops(0);
    setResult(null);
    setBusy(false);
    setCaption(captions.idle);
    place(LEFT, MID);
  };

  const go = () => {
    stop();
    const me = run.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let n = 0;
    let at = 0;
    place(LEFT, MID);
    setHops(0);
    setResult(null);
    setBusy(true);
    setCaption(captions.running[mode]);
    const next = () => {
      if (run.current !== me) return;
      if (mode === 'rule') { setResult(outcomes.arrived); setCaption(captions.arrived); setBusy(false); return; }
      if (n >= maxHops) { setResult(outcomes.gaveUp); setCaption(captions.gaveUp.split('{n}').join(String(n))); setBusy(false); return; }
      wait.current = setTimeout(hop, reduce ? 0 : 60);
    };
    const hop = () => {
      if (run.current !== me) return;
      n += 1;
      at = 1 - at;
      setHops(n);
      const from = at ? LEFT : RIGHT;
      const to = at ? RIGHT : LEFT;
      const arc = mode === 'loop' ? (at ? -50 : 50) : 0;
      const d = reduce ? 1 : 420;
      let t0: number | null = null;
      const f = (ts: number) => {
        if (run.current !== me) return;
        if (t0 === null) t0 = ts;
        const p = Math.min(1, (ts - t0) / d);
        place(from + (to - from) * p, MID + Math.sin(p * Math.PI) * arc);
        if (p < 1) frame.current = requestAnimationFrame(f);
        else next();
      };
      frame.current = requestAnimationFrame(f);
    };
    hop();
  };

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <div className="cs-seg" role="group" aria-label={groupLabel}>
          {(['loop', 'rule'] as Mode[]).map((m) => (
            <button key={m} type="button" aria-pressed={mode === m} onClick={() => pick(m)}>{modes[m]}</button>
          ))}
        </div>
        <button className="btn" type="button" onClick={go} disabled={busy}>{send}</button>
      </div>
      <svg className="cs-ib-rs" viewBox="0 0 520 230" role="img" aria-label={ariaLabel}>
        <g className="nd"><rect x="40" y="87" width="150" height="56" rx="10" /><text x="115" y="120">{nodes.from}</text></g>
        <g className="nd"><rect x="330" y="87" width="150" height="56" rx="10" /><text x="405" y="120">{mode === 'loop' ? nodes.loop : nodes.rule}</text></g>
        {mode === 'loop' ? (
          <>
            <path className="ar" d="M190 100 C250 40 270 40 330 100" />
            <path className="ar" d="M330 130 C270 190 250 190 190 130" />
          </>
        ) : <path className="ar" d="M190 115 L330 115" />}
        <text className="lbl" x="260" y="222">{lines[mode]}</text>
        <circle ref={tok} className="tk" cx={LEFT} cy={MID} r="10" />
      </svg>
      <ul className="cs-stats">
        <li>{stats.visits} <b>{hops}</b></li>
        <li>{stats.result} <b>{result ?? '–'}</b></li>
      </ul>
      <p className="cs-nw-cap cs-ib-min" aria-live="polite">{caption}</p>
      <p className="note">{note}</p>
    </div>
  );
}
