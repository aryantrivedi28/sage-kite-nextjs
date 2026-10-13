'use client';

import { useState } from 'react';

type Kind = 'D' | 'T' | 'C';

const X: Record<Kind, number> = { D: 120, T: 380, C: 640 };
const KINDS: Kind[] = ['D', 'T', 'C'];
const START = { D: 2, T: 2, C: 2 };
const MAX = 5;
const INTRO = 'Start with two pages of each type. Every page links to its related pages in the next group.';
const plural = (name: string) => `${name.toLowerCase()} pages`;

const yFor = (i: number, n: number) => (n === 1 ? 200 : 80 + i * (240 / (n - 1)));

/**
 * Illustrative demo of an automated internal linking system: adding a page
 * links it to every related page in the neighbouring group. `groups` names the
 * three page types left to right; the middle group links to both outer groups.
 */
export function LinkingDemo({ groups }: { groups: [string, string, string] }) {
  const COLS: Record<Kind, { x: number; name: string }> = {
    D: { x: X.D, name: groups[0] },
    T: { x: X.T, name: groups[1] },
    C: { x: X.C, name: groups[2] },
  };
  const [counts, setCounts] = useState<Record<Kind, number>>(START);
  const [last, setLast] = useState<{ t: Kind; i: number } | null>(null);
  const [status, setStatus] = useState(INTRO);

  const add = (t: Kind) => {
    if (counts[t] >= MAX) {
      setStatus('That group is full in this demo. Reset to start again.');
      return;
    }
    const next = { ...counts, [t]: counts[t] + 1 };
    const made = t === 'T' ? next.D + next.C : next.T;
    const rel = t === 'T' ? `${groups[0].toLowerCase()} and ${plural(groups[2])}` : plural(groups[1]);
    const total = next.D * next.T + next.T * next.C;
    setCounts(next);
    setLast({ t, i: next[t] - 1 });
    setStatus(`Added ${COLS[t].name} ${next[t]}. It linked itself to ${made} related ${rel} without anyone editing the other pages. The network now has ${total} links.`);
  };

  const reset = () => {
    setCounts(START);
    setLast(null);
    setStatus(INTRO);
  };

  const pos = Object.fromEntries(
    KINDS.map((t) => [t, Array.from({ length: counts[t] }, (_, i) => yFor(i, counts[t]))]),
  ) as Record<Kind, number[]>;
  const isNew = (t: Kind, i: number) => !!last && last.t === t && last.i === i;

  return (
    <>
      <div className="cs-arch-controls">
        {KINDS.map((t) => (
          <button key={t} className="cs-ghost" type="button" onClick={() => add(t)}>Add a {COLS[t].name.toLowerCase()} page</button>
        ))}
        <button className="cs-ghost" type="button" onClick={reset}>Reset</button>
      </div>
      <div className="cs-scroll">
        <svg className="cs-arch-svg" viewBox="0 0 760 370" role="img" aria-label={`Network of ${groups.join(', ').toLowerCase()} pages joined by links`}>
          <g className="arch-lines">
            {([['D', 'T'], ['T', 'C']] as [Kind, Kind][]).flatMap(([a, b]) =>
              pos[a].flatMap((ya, i) =>
                pos[b].map((yb, j) => (
                  <line
                    key={`${a}${i}-${b}${j}-${counts[a]}-${counts[b]}`}
                    className={isNew(a, i) || isNew(b, j) ? 'arch-new draw' : undefined}
                    x1={COLS[a].x + 80}
                    y1={ya}
                    x2={COLS[b].x - 80}
                    y2={yb}
                  />
                )),
              ),
            )}
          </g>
          {KINDS.map((t) => (
            <g key={t}>
              <text className="arch-head" x={COLS[t].x} y={32} textAnchor="middle" fontSize="14" fontWeight="700">
                {COLS[t].name} pages
              </text>
              {pos[t].map((y, i) => (
                <g key={`${t}${i}-${counts[t]}`} className={`arch-node arch-${t}${isNew(t, i) ? ' pop' : ''}`}>
                  <rect x={COLS[t].x - 80} y={y - 19} width={160} height={38} rx={8} />
                  <text x={COLS[t].x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="700">
                    {COLS[t].name} {i + 1}
                  </text>
                </g>
              ))}
            </g>
          ))}
        </svg>
      </div>
      <p className="cs-arch-status" aria-live="polite">{status}</p>
    </>
  );
}
