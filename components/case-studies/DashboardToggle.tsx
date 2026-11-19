'use client';

import { useState } from 'react';

type State = 'standard' | 'custom';

export interface DashboardTile {
  label: string;
  /** Bar heights as percentages, drawn as a small bar chart. */
  bars: number[];
}

export interface DashboardToggleProps {
  title: string;
  standard: DashboardTile[];
  custom: DashboardTile[];
  /** Panel under the custom tiles. */
  insight: { title: string; text: string };
  captions: Record<State, string>;
  /** Small print under the illustration. */
  note: string;
}

/** Illustration: a standard dashboard switched for a custom report built around the client's KPIs. */
export function DashboardToggle({ title, standard, custom, insight, captions, note }: DashboardToggleProps) {
  const [state, setState] = useState<State>('standard');
  const tiles = state === 'standard' ? standard : custom;

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label="Choose a dashboard to show">
          {(['standard', 'custom'] as State[]).map((s) => (
            <button key={s} type="button" aria-pressed={state === s} onClick={() => setState(s)}>
              {s === 'standard' ? 'Standard' : 'Custom'}
            </button>
          ))}
        </div>
      </div>
      <div key={state} className={`cs-bi ${state}`} aria-hidden="true">
        {tiles.map((t) => (
          <div key={t.label} className="cs-bi-tile">
            <b>{t.label}</b>
            <div className="cs-spark">
              {t.bars.map((h, i) => <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}></i>)}
            </div>
          </div>
        ))}
        {state === 'custom' && (
          <div className="cs-bi-insight"><b>{insight.title}</b><span>{insight.text}</span></div>
        )}
      </div>
      <p className="cs-sim-caption" aria-live="polite">{captions[state]}</p>
      <p className="note">{note}</p>
    </div>
  );
}
