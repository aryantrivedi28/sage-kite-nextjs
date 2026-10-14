'use client';

import { useEffect, useRef, useState } from 'react';

export interface MigrationFlowProps {
  title: string;
  /** The old platform (left) and the new one (right). */
  source: { name: string; note: string };
  target: { name: string; note: string };
  /** Three kinds of data that move across, top to bottom. */
  items: [string, string, string];
  /** Two lines in the middle box, e.g. ["Comprehensive", "data backups"]. */
  middle: [string, string];
  captions: { run: string; done: string };
  /** Screen-reader description of the diagram. */
  ariaLabel: string;
}

type State = 'idle' | 'run' | 'done';
const ROWS = [84, 148, 212];

/**
 * Data moving from an old platform, through a backup step, to a new one. It is
 * rendered finished; it replays once when scrolled into view and on request.
 * Nothing animates for reduced-motion users.
 */
export function MigrationFlow({ title, source, target, items, middle, captions, ariaLabel }: MigrationFlowProps) {
  const [state, setState] = useState<State>('done');
  const [played, setPlayed] = useState(false);
  const svg = useRef<SVGSVGElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const run = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timers.current.forEach(clearTimeout);
    setState('idle');
    timers.current = [
      setTimeout(() => setState('run'), 350),
      setTimeout(() => { setState('done'); setPlayed(true); }, 3600),
    ];
  };

  useEffect(() => {
    const el = svg.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); run(); }
    }, { threshold: 0.5 });
    io.observe(el);
    const pending = timers.current;
    return () => { io.disconnect(); pending.forEach(clearTimeout); };
  }, []);

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <button className="cs-ghost" type="button" onClick={run} disabled={state !== 'done'}>
          {played ? 'Replay' : 'Run the migration'}
        </button>
      </div>
      <div className="cs-scroll">
        <svg ref={svg} className="cs-mig" data-state={state} viewBox="0 0 800 310" role="img" aria-label={ariaLabel}>
          <rect className="m-src" x="10" y="20" width="260" height="270" rx="12" />
          <text x="28" y="48" fontSize="16" fontWeight="700">{source.name}</text>
          <text className="m-muted" x="28" y="66" fontSize="13">{source.note}</text>
          {items.map((t, i) => (
            <g key={t}>
              <rect className="m-row" x="28" y={ROWS[i]} width="224" height="50" rx="8" />
              <text x="46" y={ROWS[i] + 30} fontSize="15" fontWeight="700">{t}</text>
            </g>
          ))}

          <rect className="m-band" x="330" y="20" width="140" height="270" rx="12" />
          <path className="m-shield" d="M400 96 l30 10 v24 c0 18 -14 30 -30 36 c-16 -6 -30 -18 -30 -36 v-24 z" />
          <path className="m-shield-tick" d="M386 136 l10 10 l18 -20" />
          <text x="400" y="220" fontSize="14" fontWeight="700" textAnchor="middle">{middle[0]}</text>
          <text x="400" y="238" fontSize="14" fontWeight="700" textAnchor="middle">{middle[1]}</text>

          <rect className="m-dst" x="530" y="20" width="260" height="270" rx="12" />
          <text x="548" y="48" fontSize="16" fontWeight="700">{target.name}</text>
          <text className="m-accent" x="548" y="66" fontSize="13" fontWeight="600">{target.note}</text>
          {items.map((t, i) => (
            <g key={t}>
              <rect className="m-tgt" x="548" y={ROWS[i]} width="224" height="50" rx="8" />
              <text className="m-tgt-text" x="566" y={ROWS[i] + 30} fontSize="15" fontWeight="700">{t}</text>
              <path className="m-chk" d={`M742 ${ROWS[i] + 24} l7 7 l13 -15`} />
            </g>
          ))}

          {ROWS.flatMap((y, row) =>
            [0, 0.35, 0.7].map((d) => (
              <circle key={`${y}-${d}`} className="m-pk" style={{ animationDelay: `${d + row * 0.2}s` }} cx="270" cy={y + 25} r="7" />
            )),
          )}
        </svg>
      </div>
      <p className="cs-sim-caption" aria-live="polite">{state === 'done' ? captions.done : captions.run}</p>
      <p className="note">Illustrative diagram of the migration, not a record of individual data.</p>
    </div>
  );
}
