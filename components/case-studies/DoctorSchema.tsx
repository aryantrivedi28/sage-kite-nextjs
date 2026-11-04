'use client';

import { useState } from 'react';

/** Circumference of the ring (radius 40). */
const RING = 251.3;

export interface DoctorSchemaProps {
  groupLabel: string;
  /** The details a doctor page can communicate, in markup order; `on` = selected at the start. */
  fields: { label: string; prop: string; value: string; on?: boolean }[];
  /** `@context` and `@type` lines at the top of the markup. */
  context: string;
  type: string;
  codeLabel: string;
  ringLabel: string;
  /** Message for 0, 1, … selected details; the last one also covers all of them. */
  messages: string[];
  note: string;
}

/** Toggle the details a doctor page communicates and watch the JSON-LD and the trust ring fill in. */
export function DoctorSchema({ groupLabel, fields, context, type, codeLabel, ringLabel, messages, note }: DoctorSchemaProps) {
  const [on, setOn] = useState<boolean[]>(() => fields.map((f) => !!f.on));
  const picked = fields.filter((_, i) => on[i]);
  const n = picked.length;
  const lines: [string, string][] = [['"@context"', `"${context}"`], ['"@type"', `"${type}"`], ...picked.map((f): [string, string] => [`"${f.prop}"`, `"${f.value}"`])];

  return (
    <div className="cs-sim">
      <div className="cs-code-split">
        <div className="cs-fields-col">
          <div className="cs-fields" role="group" aria-label={groupLabel}>
            {fields.map((f, i) => (
              <button key={f.prop} type="button" className="cs-fld" aria-pressed={on[i]} onClick={() => setOn((o) => o.map((v, k) => (k === i ? !v : v)))}>
                <i aria-hidden="true">✓</i>{f.label}
              </button>
            ))}
          </div>
          <div className="cs-ringwrap">
            <svg className="cs-ring" viewBox="0 0 100 100" role="img" aria-label={ringLabel}>
              <circle className="bg" cx="50" cy="50" r="40" />
              <circle className="fg" cx="50" cy="50" r="40" strokeDasharray={RING} style={{ strokeDashoffset: RING * (1 - n / fields.length) }} />
              <text x="50" y="57">{n}/{fields.length}</text>
            </svg>
            <p>{messages[Math.min(n, messages.length - 1)]}</p>
          </div>
        </div>
        {/* Same markup as CodeBlock / Tok in blocks.tsx, which is not imported here to keep it out of the browser bundle. */}
        <div className="cs-code">
          <p className="cs-code-lab">{codeLabel}</p>
          <pre>
            {'{\n  '}
            {lines.map(([k, v], i) => (
              <span key={k}><span className="cs-k">{k}</span>{': '}<span className="cs-s">{v}</span>{i < lines.length - 1 ? ',\n  ' : '\n'}</span>
            ))}
            {'}'}
          </pre>
        </div>
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
