'use client';

import type { KeyboardEvent } from 'react';
import { useState } from 'react';

export interface LeverFlowProps {
  ariaLabel: string;
  /** Column headings above the diagram, e.g. "What we did" / "Where it works". */
  columns: [string, string];
  /** Left column. `surfaces` are the keys of the surfaces the lever influences. */
  levers: { key: string; label: string; text: string; surfaces: string[] }[];
  /** Right column. */
  surfaces: { key: string; label: string }[];
  /** Caption for a selected surface: `{surface}` is its name, `{levers}` the levers that influence it. */
  surfaceCaption: string;
  /** The lever selected on load. */
  initial: string;
}

/**
 * The hero diagram: levers on the left, the surfaces they influence on the right, joined by curves. Selecting
 * (click, hover or focus) a lever or a surface highlights its connections and names them in the caption.
 */
export function LeverFlow({ ariaLabel, columns, levers, surfaces, surfaceCaption, initial }: LeverFlowProps) {
  const ly = (i: number) => 20 + i * 62 + 20;
  const sy = (i: number) => 30 + i * 84 + 22;
  const startLever = levers.find((l) => l.key === initial) ?? levers[0];
  const [sel, setSel] = useState<{ ls: string[]; ss: string[]; cap: string }>({
    ls: [startLever.key],
    ss: startLever.surfaces,
    cap: `${startLever.label}: ${startLever.text}`,
  });

  const pickLever = (k: string) => {
    const l = levers.find((x) => x.key === k)!;
    setSel({ ls: [k], ss: l.surfaces, cap: `${l.label}: ${l.text}` });
  };
  const pickSurface = (k: string) => {
    const ls = levers.filter((l) => l.surfaces.includes(k));
    const name = surfaces.find((s) => s.key === k)!.label;
    setSel({ ls: ls.map((l) => l.key), ss: [k], cap: surfaceCaption.split('{surface}').join(name).split('{levers}').join(ls.map((l) => l.label).join(', ')) });
  };
  const keys = (fn: () => void) => (e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } };

  return (
    <div className="cs-nw-flowcard">
      <div className="cs-nw-fcol" aria-hidden="true"><span>{columns[0]}</span><span>{columns[1]}</span></div>
      <svg className="cs-nw-flow" viewBox="0 0 520 330" role="group" aria-label={ariaLabel}>
        {levers.flatMap((l, i) => l.surfaces.map((s) => {
          const a = ly(i);
          const b = sy(surfaces.findIndex((x) => x.key === s));
          const on = sel.ls.includes(l.key) && sel.ss.includes(s);
          return <path key={`${l.key}-${s}`} className={`cs-nw-fe ${on ? 'hl' : 'dim'}`} d={`M170 ${a} C250 ${a} 270 ${b} 350 ${b}`} />;
        }))}
        {levers.map((l, i) => {
          const pick = () => pickLever(l.key);
          return (
            <g key={l.key} className={`cs-nw-fn l ${sel.ls.includes(l.key) ? 'hl' : 'dim'}`} tabIndex={0} role="button" aria-label={l.label} onClick={pick} onMouseEnter={pick} onFocus={pick} onKeyDown={keys(pick)}>
              <rect x="10" y={ly(i) - 20} width="160" height="40" rx="8" />
              <text x="90" y={ly(i) + 4}>{l.label}</text>
            </g>
          );
        })}
        {surfaces.map((s, i) => {
          const pick = () => pickSurface(s.key);
          return (
            <g key={s.key} className={`cs-nw-fn r ${sel.ss.includes(s.key) ? 'hl' : 'dim'}`} tabIndex={0} role="button" aria-label={s.label} onClick={pick} onMouseEnter={pick} onFocus={pick} onKeyDown={keys(pick)}>
              <rect x="350" y={sy(i) - 22} width="160" height="44" rx="8" />
              <text x="430" y={sy(i) + 4}>{s.label}</text>
            </g>
          );
        })}
      </svg>
      <div className="cs-nw-flowcap" aria-live="polite">{sel.cap}</div>
    </div>
  );
}
