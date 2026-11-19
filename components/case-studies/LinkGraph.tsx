'use client';

import { useEffect, useRef, useState } from 'react';

/* Four columns (blogs, treatments, clinics, outcome) of illustrative pages. Each blog links to two treatments,
   each treatment to two clinics, every clinic to the appointment. */
const X = [90, 270, 450, 630];
const ROWS = [55, 165, 275];
const STEP_MS = 1000;

export interface LinkGraphProps {
  ariaLabel: string;
  columns: [string, string, string, string];
  /** Three names for each of the first three columns, and the outcome's. */
  names: { blogs: string[]; treatments: string[]; clinics: string[]; outcome: string };
  button: string;
  /** Caption at rest; on hover, `{page}` connects to `{n}` other page(s) (`one` / `many`). */
  idle: string;
  connects: { one: string; many: string };
  /** One caption per step of the traced path (blog, treatment, clinic, appointment). */
  trace: [string, string, string, string];
  note: string;
}

type Node = { id: string; kind: 'b' | 't' | 'c' | 'a'; x: number; y: number; label: string };

/** Internal links as a graph: hover or focus a page to see its links, or trace one patient path to an appointment. */
export function LinkGraph({ ariaLabel, columns, names, button, idle, connects, trace, note }: LinkGraphProps) {
  const nodes: Node[] = [
    ...names.blogs.map((label, i): Node => ({ id: `b${i}`, kind: 'b', x: X[0], y: ROWS[i], label })),
    ...names.treatments.map((label, i): Node => ({ id: `t${i}`, kind: 't', x: X[1], y: ROWS[i], label })),
    ...names.clinics.map((label, i): Node => ({ id: `c${i}`, kind: 'c', x: X[2], y: ROWS[i], label })),
    { id: 'a', kind: 'a', x: X[3], y: ROWS[1], label: names.outcome },
  ];
  const byId = (id: string) => nodes.find((n) => n.id === id)!;
  const edges: [string, string][] = [];
  for (let i = 0; i < 3; i++) {
    edges.push([`b${i}`, `t${i}`], [`b${i}`, `t${(i + 1) % 3}`], [`t${i}`, `c${i}`], [`t${i}`, `c${(i + 1) % 3}`], [`c${i}`, 'a']);
  }
  const path = ['b1', 't1', 'c1', 'a'];

  const [hover, setHover] = useState<string | null>(null);
  const [step, setStep] = useState(-1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const tracing = step >= 0 && step < path.length - 1;

  const run = () => {
    if (timer.current) clearTimeout(timer.current);
    setHover(null);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const go = (k: number) => {
      setStep(k);
      if (k < path.length - 1) timer.current = setTimeout(() => go(k + 1), reduce ? 0 : STEP_MS);
    };
    go(0);
  };

  // What is highlighted: the traced path so far, or the hovered page and its neighbours.
  const tracedNodes = step >= 0 ? path.slice(0, step + 1) : [];
  const tracedEdge = (e: [string, string]) => tracedNodes.some((id, k) => k > 0 && e[0] === tracedNodes[k - 1] && e[1] === id);
  const hoverEdge = (e: [string, string]) => !!hover && (e[0] === hover || e[1] === hover);
  const near = new Set(hover ? [hover, ...edges.filter(hoverEdge).flat()] : []);

  const edgeClass = (e: [string, string]) => (step >= 0 ? (tracedEdge(e) ? 'ge hl' : 'ge dim') : hover ? (hoverEdge(e) ? 'ge hl' : 'ge dim') : 'ge');
  const nodeClass = (n: Node) => `gn ${n.kind}${step >= 0 ? (tracedNodes.includes(n.id) ? ' hl' : ' dim') : hover ? (near.has(n.id) ? ' hl' : ' dim') : ''}`;

  let caption = idle;
  if (step >= 0) caption = trace[step];
  else if (hover) {
    const c = near.size - 1;
    caption = (c === 1 ? connects.one : connects.many).split('{page}').join(byId(hover).label).split('{n}').join(String(c));
  }

  const enter = (id: string) => { if (!tracing) { setStep(-1); setHover(id); } };
  const leave = () => { if (!tracing) setHover(null); };

  return (
    <div className="cs-sim">
      <div className="cs-ctl">
        <button className="cs-ghost" type="button" disabled={tracing} onClick={run}>{button}</button>
        <span className="note" aria-live="polite">{caption}</span>
      </div>
      <div>
        <div className="cs-gcols" aria-hidden="true">{columns.map((c) => <span key={c}>{c}</span>)}</div>
        <svg className="cs-graph" viewBox="0 0 720 330" role="group" aria-label={ariaLabel}>
          {edges.map((e) => {
            const a = byId(e[0]);
            const b = byId(e[1]);
            return <path key={e.join('-')} className={edgeClass(e)} d={`M${a.x + 50} ${a.y} C ${a.x + 110} ${a.y} ${b.x - 110} ${b.y} ${b.x - 50} ${b.y}`} />;
          })}
          {nodes.map((n) => (
            <g
              key={n.id}
              className={nodeClass(n)}
              tabIndex={0}
              role="img"
              aria-label={n.label}
              onMouseEnter={() => enter(n.id)}
              onFocus={() => enter(n.id)}
              onMouseLeave={leave}
              onBlur={leave}
            >
              <rect x={n.x - 50} y={n.y - 18} width="100" height="36" rx="8" />
              <text x={n.x} y={n.y + 4}>{n.label}</text>
            </g>
          ))}
        </svg>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
