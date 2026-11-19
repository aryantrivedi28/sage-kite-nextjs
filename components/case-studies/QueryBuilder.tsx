'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

type Result = { url: string; title: string; description: string; why: ReactNode[] };

export interface QueryBuilderProps {
  /** Group headings and accessible names, e.g. "Treatment" / "Location intent". */
  groups: { treatment: { heading: string; label: string }; location: { heading: string; label: string } };
  treatments: string[];
  /** The first has no location (`place` unset); the others add their label to the search and name the place in the title. */
  locations: { label: string; place?: string }[];
  /**
   * The result for a search with and without a location. `{treatment}` is the chosen treatment, `{slug}` the same in
   * lowercase with hyphens, `{place}` the location's place.
   */
  local: Result;
  treatment: Result;
  note: string;
}

const fill = (s: string, t: string, place = '') => s.split('{treatment}').join(t).split('{slug}').join(t.toLowerCase().replace(/ /g, '-')).split('{place}').join(place);

/** Build a search from a treatment and a location intent, and see which page type should answer it. */
export function QueryBuilder({ groups, treatments, locations, local, treatment, note }: QueryBuilderProps) {
  const [t, setT] = useState(treatments[0]);
  const [l, setL] = useState(0);
  const loc = locations[l];
  const r = loc.place ? local : treatment;
  const query = t.toLowerCase() + (loc.place ? ` ${loc.label}` : '');

  return (
    <div className="cs-sim">
      <div className="cs-code-split">
        <div className="cs-qb">
          <div className="cs-qb-g">
            <b>{groups.treatment.heading}</b>
            <div className="cs-robots-chips cs-chips-on" role="group" aria-label={groups.treatment.label}>
              {treatments.map((x) => <button key={x} type="button" aria-pressed={x === t} onClick={() => setT(x)}>{x}</button>)}
            </div>
          </div>
          <div className="cs-qb-g">
            <b>{groups.location.heading}</b>
            <div className="cs-robots-chips cs-chips-on" role="group" aria-label={groups.location.label}>
              {locations.map((x, i) => <button key={x.label} type="button" aria-pressed={i === l} onClick={() => setL(i)}>{x.label}</button>)}
            </div>
          </div>
        </div>
        <div className="cs-qb-out">
          <div className="cs-sq-in plain"><span className="cs-sq-q">{query}</span></div>
          <div className="cs-rich" data-state="without">
            <span className="cs-rich-u">{fill(r.url, t, loc.place)}</span>
            <span className="cs-rich-t">{fill(r.title, t, loc.place)}</span>
            <span className="cs-rich-d">{fill(r.description, t, loc.place)}</span>
          </div>
          <ul className="cs-why">{r.why.map((w, i) => <li key={i}>{w}</li>)}</ul>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
