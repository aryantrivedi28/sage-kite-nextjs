'use client';

import { useEffect, useRef, useState } from 'react';

type Node = { key: string; label: string; x: number; y: number; product?: boolean };

export interface PageNetworkProps {
  ariaLabel: string;
  groupLabel: string;
  /** Pages; the walk always starts at `start`. Products are the targets. */
  nodes: Node[];
  start: string;
  /** Link types: each turns on its edges (from, to). */
  links: { key: string; label: string; edges: [string, string][] }[];
  labels: { reachable: string; send: string };
  captions: { all: string; some: string; none: string; dead: string; reached: string; reachedOne: string };
  note: string;
}

/**
 * A page network: switch link types on, see how many products can be reached from the category page, and send a
 * shopper along the shortest path to one of them (picked at random).
 */
export function PageNetwork({ ariaLabel, groupLabel, nodes, start, links, labels, captions, note }: PageNetworkProps) {
  const [on, setOn] = useState<string[]>([]);
  const [msg, setMsg] = useState<string | null>(null);
  const dot = useRef<SVGCircleElement>(null);
  const raf = useRef(0);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  const node = (k: string) => nodes.find((n) => n.key === k)!;

  const paths = () => {
    const adj: Record<string, string[]> = {};
    links.filter((l) => on.includes(l.key)).forEach((l) => l.edges.forEach(([a, b]) => { (adj[a] ||= []).push(b); }));
    const par: Record<string, string | null> = { [start]: null };
    const q = [start];
    while (q.length) { const c = q.shift()!; (adj[c] || []).forEach((n) => { if (!(n in par)) { par[n] = c; q.push(n); } }); }
    return par;
  };
  const par = paths();
  const reached = Object.keys(par).filter((k) => node(k).product);
  const total = nodes.filter((n) => n.product).length;
  const status = reached.length === total ? captions.all : reached.length ? captions.some : captions.none;

  const send = () => {
    if (!reached.length) { setMsg(captions.dead); return; }
    const t = reached[Math.floor(Math.random() * reached.length)];
    const path: string[] = [];
    for (let c: string | null = t; c; c = par[c]) path.unshift(c);
    const pts = path.map((k) => [node(k).x, node(k).y]);
    const end = () => setMsg((path.length > 2 ? captions.reached : captions.reachedOne).split('{page}').join(node(t).label).split('{n}').join(String(path.length - 1)));
    const d = dot.current;
    if (!d) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { d.setAttribute('cx', String(pts[pts.length - 1][0])); d.setAttribute('cy', String(pts[pts.length - 1][1])); end(); return; }
    cancelAnimationFrame(raf.current);
    const t0 = performance.now();
    const step = (now: number) => {
      const seg = (now - t0) / 650;
      if (seg >= pts.length - 1) { d.setAttribute('cx', String(pts[pts.length - 1][0])); d.setAttribute('cy', String(pts[pts.length - 1][1])); end(); return; }
      const k = Math.min(Math.floor(seg), pts.length - 2);
      const u = Math.min(seg - k, 1);
      d.setAttribute('cx', String(pts[k][0] + (pts[k + 1][0] - pts[k][0]) * u));
      d.setAttribute('cy', String(pts[k][1] + (pts[k + 1][1] - pts[k][1]) * u));
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };

  return (
    <div className="cs-sim">
      <div className="cs-nw-layers row" role="group" aria-label={groupLabel}>
        {links.map((l) => (
          <button key={l.key} type="button" aria-pressed={on.includes(l.key)} onClick={() => { setMsg(null); setOn(on.includes(l.key) ? on.filter((x) => x !== l.key) : [...on, l.key]); }}>{l.label}</button>
        ))}
      </div>
      <svg className="cs-nw-gsvg" viewBox="0 0 640 300" role="img" aria-label={ariaLabel}>
        {links.flatMap((l) => l.edges.map(([a, b]) => (
          <line key={`${a}-${b}`} className={`ge${on.includes(l.key) ? ' on' : ''}`} x1={node(a).x + 40} y1={node(a).y} x2={node(b).x - 40} y2={node(b).y} />
        )))}
        {nodes.map((n) => (
          <g key={n.key} className={`gn${n.product ? ' p' : ''}${n.product && reached.includes(n.key) ? ' hit' : ''}`}>
            <rect x={n.x - 40} y={n.y - 16} width="80" height="32" rx="6" />
            <text x={n.x} y={n.y + 4} textAnchor="middle">{n.label}</text>
          </g>
        ))}
        <circle ref={dot} className="shopper" r="7" cx="-20" cy="-20" />
      </svg>
      <div className="cs-nw-ctl">
        <ul className="cs-stats"><li>{labels.reachable} <b>{reached.length}</b> / {total}</li></ul>
        <button className="btn" type="button" onClick={send}>{labels.send}</button>
      </div>
      <p className="cs-nw-cap" aria-live="polite">{msg ?? status}</p>
      <p className="note">{note}</p>
    </div>
  );
}
