'use client';

import type React from 'react';
import { useId, useState } from 'react';

export interface RobotsTesterProps {
  title: string;
  /** Label above the rules, e.g. "robots.txt · representative rules". */
  rulesLabel: string;
  /** The Disallow paths tested against, in order. `*` matches anything; a trailing `$` anchors the end. */
  disallow: string[];
  /** Sitemap line shown at the end of the rules. */
  sitemap: string;
  inputLabel: string;
  initialPath: string;
  /** Sample paths, each a button that fills the input. */
  samples: string[];
  samplesLabel: string;
  messages: { blocked: string; matched: string; allowed: string; allowedText: string };
  /** Shown under the tester in the same card, e.g. a sitemap code sample and small print. */
  children?: React.ReactNode;
}

/** robots.txt matching: a rule matches the start of the path; `*` is any run of characters, a final `$` the end. */
function matches(rule: string, path: string) {
  const end = rule.endsWith('$');
  const body = (end ? rule.slice(0, -1) : rule).replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
  return new RegExp(`^${body}${end ? '$' : ''}`).test(path);
}

/** Type a URL path, or pick one, and see whether an example robots.txt lets crawlers fetch it. */
export function RobotsTester({ title, rulesLabel, disallow, sitemap, inputLabel, initialPath, samples, samplesLabel, messages, children }: RobotsTesterProps) {
  const id = useId();
  const [path, setPath] = useState(initialPath);
  const trimmed = path.trim();
  const tested = trimmed && !trimmed.startsWith('/') ? `/${trimmed}` : trimmed;
  const hit = disallow.find((rule) => matches(rule, tested));

  return (
    <div className="cs-sim">
      <div className="cs-sim-top"><h3>{title}</h3></div>
      <div className="cs-code-split">
        <div className="cs-code">
          <p className="cs-code-lab">{rulesLabel}</p>
          <pre>
            <span className="cs-k">User-agent:</span> *{'\n'}
            {disallow.map((rule) => <span key={rule}><span className="cs-k">Disallow:</span> {rule}{'\n'}</span>)}
            <span className="cs-k">Sitemap:</span> {sitemap}
          </pre>
        </div>
        <div className="cs-robots">
          <div className="cs-robots-in">
            <label htmlFor={id}>{inputLabel}</label>
            <input id={id} type="text" value={path} autoComplete="off" spellCheck={false} onChange={(e) => setPath(e.target.value)} />
          </div>
          <div className="cs-robots-chips" role="group" aria-label={samplesLabel}>
            {samples.map((s) => <button key={s} type="button" onClick={() => setPath(s)}>{s}</button>)}
          </div>
          <p className={`cs-robots-out ${hit ? 'no' : 'ok'}`} aria-live="polite">
            {hit ? (
              <><b>{messages.blocked}</b>{messages.matched} {hit}</>
            ) : (
              <><b>{messages.allowed}</b>{messages.allowedText}</>
            )}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
