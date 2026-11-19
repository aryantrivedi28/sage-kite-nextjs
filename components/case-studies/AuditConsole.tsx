import type React from 'react';

export interface AuditConsoleProps {
  /** Label in the window's title bar, e.g. "seo-audit · client". */
  bar: string;
  /** The command on the first line, after the "$" prompt. */
  command: string;
  /** One line per area of work: name, what was checked, and its status in brackets. */
  rows: { area: string; detail: string; status: string }[];
  /** Highlighted lines after a blank line, each shown with a tick. */
  outcomes: string[];
  /** Small print under the console. */
  foot: string;
  ariaLabel: string;
}

const cssVars = (v: Record<string, string>) => v as React.CSSProperties;

/** Delay before line i appears: the command at once, the next line after 700 ms, then one every 480 ms. */
const delay = (i: number) => `${i === 0 ? 0 : 700 + (i - 1) * 480}ms`;

/**
 * Illustrative console summary of an engagement, typed out line by line. Pure CSS:
 * every line is in the HTML, and with reduced motion they all show at once.
 */
export function AuditConsole({ bar, command, rows, outcomes, foot, ariaLabel }: AuditConsoleProps) {
  let i = 0;
  return (
    <figure className="cs-term" aria-label={ariaLabel}>
      <div className="cs-term-bar" aria-hidden="true"><i></i><i></i><i></i><span>{bar}</span></div>
      <div className="cs-term-body">
        <p className="cs-term-line" style={cssVars({ '--d': delay(i++) })}><span className="p">$</span> {command}</p>
        {rows.map((r) => (
          <p key={r.area} className="cs-term-line cs-term-row" style={cssVars({ '--d': delay(i++) })}>
            <span className="dim">› {r.area}</span><span>{r.detail}</span><span className="ok">[{r.status}]</span>
          </p>
        ))}
        <p className="cs-term-line cs-term-gap" aria-hidden="true" style={cssVars({ '--d': delay(i++) })}></p>
        {outcomes.map((o) => (
          <p key={o} className="cs-term-line hi" style={cssVars({ '--d': delay(i++) })}>✓ {o}</p>
        ))}
        <span className="cs-term-line cs-term-caret" aria-hidden="true" style={cssVars({ '--d': delay(i) })}></span>
      </div>
      <figcaption className="cs-term-foot">{foot}</figcaption>
    </figure>
  );
}
