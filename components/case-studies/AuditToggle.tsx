'use client';

import { useState } from 'react';

type State = 'before' | 'after';
const STATES: State[] = ['before', 'after'];

export interface AuditToggleProps {
  title: string;
  /** Button labels, e.g. "Before" and "After". */
  buttons: Record<State, string>;
  /** Accessible name of the button group, e.g. "Audit state". */
  groupLabel: string;
  /** One row per area: what it was like before and after, with a short status for each. */
  rows: { title: string; before: string; after: string; statusBefore: string; statusAfter: string }[];
  /** Small print under the rows. */
  note: string;
}

/**
 * A site audit with a Before/After switch: each row shows the area, what was found or
 * done, and a status pill. Both states are in the HTML; the switch only hides one.
 */
export function AuditToggle({ title, buttons, groupLabel, rows, note }: AuditToggleProps) {
  const [state, setState] = useState<State>('before');

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label={groupLabel}>
          {STATES.map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {buttons[s]}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-audit" data-state={state}>
        {rows.map((r) => (
          <div key={r.title} className="cs-audit-row">
            <h4>{r.title}</h4>
            <p><span className="t-before">{r.before}</span><span className="t-after">{r.after}</span></p>
            <span className="cs-audit-status"><span className="t-before">{r.statusBefore}</span><span className="t-after">{r.statusAfter}</span></span>
          </div>
        ))}
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
