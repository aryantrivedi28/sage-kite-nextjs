'use client';

import { useState } from 'react';

export interface LandingPagePreviewProps {
  /** The location chips; the first is selected at the start. */
  cities: string[];
  groupLabel: string;
  /** Texts of the page preview. `{city}` is the selected city; in `url`, `{slug}` is the city in lowercase with hyphens. */
  url: string;
  heading: string;
  nap: string[];
  local: string;
  buttons: { call: string; directions: string };
  /** Labels before the two counters, e.g. "Calls:". */
  stats: { calls: string; directions: string };
  caption: string;
  points: string[];
  note: string;
}

const fill = (s: string, city: string) => s.split('{city}').join(city).split('{slug}').join(city.toLowerCase().replace(/ /g, '-'));

/**
 * One showroom landing page template, previewed for the chosen city: the structure stays the same while
 * the details change. Call and Directions count clicks, to show how visibility turns into action.
 */
export function LandingPagePreview({ cities, groupLabel, url, heading, nap, local, buttons, stats, caption, points, note }: LandingPagePreviewProps) {
  const [city, setCity] = useState(cities[0]);
  const [calls, setCalls] = useState(0);
  const [dirs, setDirs] = useState(0);

  return (
    <div className="cs-sim">
      <div className="cs-robots-chips cs-chips-on" role="group" aria-label={groupLabel}>
        {cities.map((c) => <button key={c} type="button" aria-pressed={c === city} onClick={() => setCity(c)}>{c}</button>)}
      </div>
      <div className="cs-code-split">
        <div className="cs-lp">
          <div className="cs-lp-bar">{fill(url, city)}</div>
          <div className="cs-lp-body">
            <h3>{fill(heading, city)}</h3>
            <div className="cs-lp-map" aria-hidden="true"></div>
            <p className="cs-lp-nap">{nap.map((line, i) => <span key={i}>{fill(line, city)}{i < nap.length - 1 && <br />}</span>)}</p>
            <div className="cs-lp-loc">{fill(local, city)}</div>
            <div className="cs-ctl">
              <button className="btn" type="button" onClick={() => setCalls((n) => n + 1)}>{buttons.call}</button>
              <button className="cs-ghost" type="button" onClick={() => setDirs((n) => n + 1)}>{buttons.directions}</button>
            </div>
          </div>
        </div>
        <div className="cs-lp-side">
          <ul className="cs-stats">
            <li>{stats.calls} <b>{calls}</b></li>
            <li>{stats.directions} <b>{dirs}</b></li>
          </ul>
          <p className="cs-sim-caption">{caption}</p>
          <ul className="cs-why">{points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
