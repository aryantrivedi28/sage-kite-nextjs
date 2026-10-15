import React from 'react';
import Image from 'next/image';
import type { ChangeIconKind, Tone } from '@/content/case-studies/types';

/*
 * Building blocks for case study content (study.tsx). Use them inside
 * `startingPoint.content` or as a tile `visual`. They carry no copy of their
 * own, so they work for any case study.
 */

/** Short list with coloured square markers (sky, butter, coral in turn). */
export function Drivers({ items }: { items: string[] }) {
  return (
    <ul className="cs-drivers">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

const AUDIENCE_ICONS = {
  search: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="17" cy="17" r="10" /><line x1="25" y1="25" x2="35" y2="35" />
      <line className="acc-coral" x1="17" y1="12" x2="17" y2="22" /><line className="acc-coral" x1="12" y1="17" x2="22" y2="17" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 36 C12 26 8 21 8 15 a12 12 0 0 1 24 0 c0 6-4 11-12 21z" /><circle className="acc-sky" cx="20" cy="15" r="4.5" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="15" cy="14" r="6" /><path d="M4 34c0-6 5-10 11-10s11 4 11 10" />
      <circle className="acc-sky" cx="29" cy="15" r="4.5" /><path className="acc-sky" d="M27 24c5 0 9 3 9 9" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 40 40" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7h5l4 19h18l4-13H11" /><circle className="acc-coral" cx="15" cy="33" r="2.5" /><circle className="acc-coral" cx="29" cy="33" r="2.5" />
    </svg>
  ),
};

/** Two (or more) audience cards with an icon each. */
export function AudienceCards({ items }: { items: { icon: keyof typeof AUDIENCE_ICONS; text: string }[] }) {
  return (
    <ul className="cs-audience">
      {items.map((i) => <li key={i.text}>{AUDIENCE_ICONS[i.icon]}{i.text}</li>)}
    </ul>
  );
}

/** Butter panel with an optional bold title. */
export function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="cs-callout">
      {title && <strong>{title}</strong>}
      <p>{children}</p>
    </div>
  );
}

/** Three overlapping circles, e.g. three families of search query. */
export function VennSketch({ labels, ariaLabel }: { labels: [string, string, string]; ariaLabel: string }) {
  return (
    <svg className="cs-venn" viewBox="0 0 220 190" role="img" aria-label={ariaLabel}>
      <circle className="v-coral" cx="80" cy="70" r="52" />
      <circle className="v-sky" cx="140" cy="70" r="52" />
      <circle className="v-butter" cx="110" cy="122" r="52" />
      <g textAnchor="middle"><text x="62" y="62">{labels[0]}</text><text x="158" y="62">{labels[1]}</text><text x="110" y="148">{labels[2]}</text></g>
    </svg>
  );
}

/** Wireframe of a page: a title, a subtitle and two or three text lines. */
export function PageSketch({ title, subtitle, lines = 3, tone = 'coral' }: { title: string; subtitle: string; lines?: 2 | 3; tone?: Tone }) {
  return (
    <div className="cs-pagecard" data-tone={tone} aria-hidden="true">
      <b>{title}</b><span>{subtitle}</span>
      {Array.from({ length: lines }, (_, i) => <i key={i}></i>)}
    </div>
  );
}

/** A one-level site structure, e.g. Home with its sections. */
export function TreeSketch({ root, items, ariaLabel }: { root: string; items: { name: string; note: string }[]; ariaLabel: string }) {
  return (
    <div className="cs-tree" aria-label={ariaLabel}>
      <b>{root}</b>
      <ul>
        {items.map((i) => <li key={i.name}><b>{i.name}</b> <em>{i.note}</em></li>)}
      </ul>
    </div>
  );
}

/**
 * Page one of a search result, positions 1–10, with a marker that climbs from
 * the bottom three into the top three. Without motion the marker sits on top.
 */
export function RankLadder({ marker, top, stuck, caption, ariaLabel }: { marker: string; top: string; stuck: string; caption: string; ariaLabel: string }) {
  return (
    <figure className="cs-serp" aria-label={ariaLabel}>
      <div className="cs-serp-list" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className={`cs-serp-row${i < 3 ? ' top' : i > 6 ? ' stuck' : ''}`}><b>{i + 1}</b><i></i></div>
        ))}
        <div className="cs-serp-marker">{marker}</div>
      </div>
      <ul className="cs-serp-legend">
        <li><span className="sw top"></span>{top}</li>
        <li><span className="sw stuck"></span>{stuck}</li>
      </ul>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

/** A short left-to-right sequence of nodes joined by arrows. The last node is highlighted. */
export function Journey({ steps, ariaLabel }: { steps: { small: string; text: string }[]; ariaLabel: string }) {
  return (
    <figure className="cs-journey" aria-label={ariaLabel}>
      {steps.map((s, i) => (
        <React.Fragment key={s.small}>
          {i > 0 && <span className="cs-j-arrow" aria-hidden="true"></span>}
          <div className={`cs-j-node${i === steps.length - 1 ? ' hi' : ''}`}><small>{s.small}</small>{s.text}</div>
        </React.Fragment>
      ))}
    </figure>
  );
}

/** One dot per item, lit in turn. Used for count results. */
export function DotGrid({ count, ariaLabel }: { count: number; ariaLabel: string }) {
  return (
    <div className="cs-dots" role="img" aria-label={ariaLabel}>
      {Array.from({ length: count }, (_, i) => <i key={i} style={{ '--i': i } as React.CSSProperties}></i>)}
    </div>
  );
}

const GRID_X = [30, 120, 210];

/**
 * A grid of pages for a before/after takeaway. `more`: existing pages plus new,
 * dashed pages still to earn a position. `stronger`: the same pages, each lifted.
 */
export function PageGridSketch({ variant }: { variant: 'more' | 'stronger' }) {
  if (variant === 'more') {
    return (
      <svg className="cs-pagegrid" viewBox="0 0 300 180" role="img" aria-label="A grid of pages with several new pages added">
        <g className="pg-old">
          {GRID_X.map((x) => <rect key={x} x={x} y="20" width="60" height="40" rx="6" />)}
          {GRID_X.slice(0, 2).map((x) => <rect key={x} x={x} y="80" width="60" height="40" rx="6" />)}
        </g>
        <g className="pg-new">
          <rect className="pulse" x="210" y="80" width="60" height="40" rx="6" />
          {GRID_X.map((x, i) => <rect key={x} className="pulse" style={{ animationDelay: `${(i + 1) * 0.6}s` }} x={x} y="140" width="60" height="30" rx="6" />)}
        </g>
      </svg>
    );
  }
  return (
    <svg className="cs-pagegrid" viewBox="0 0 300 180" role="img" aria-label="The same grid of existing pages, each made stronger">
      <g className="pg-strong">
        {[20, 80].flatMap((y) => GRID_X.map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="60" height="40" rx="6" />))}
      </g>
      <g className="pg-arrow">
        {[20, 80].flatMap((y, row) =>
          GRID_X.map((x, i) => (
            <path key={`${x}-${y}`} className="pulse" style={{ animationDelay: `${(row * 3 + i) * 0.3}s` }} d={`M${x + 30} ${y + 32} V${y + 10} M${x + 22} ${y + 18} L${x + 30} ${y + 10} L${x + 38} ${y + 18}`} />
          )),
        )}
      </g>
    </svg>
  );
}

/**
 * A screenshot in a browser window, with the site's address in the bar. Leave
 * out `url` for a bare strip (e.g. a cropped header) and add a `caption` under it.
 */
export function BrowserFrame({ url, src, width, height, alt, caption, priority, sizes = '(max-width: 900px) 100vw, 560px' }: { url?: string; src: string; width: number; height: number; alt: string; caption?: string; priority?: boolean; sizes?: string }) {
  return (
    <figure className={`cs-frame${url ? '' : ' strip'}`}>
      {url && <div className="cs-frame-bar" aria-hidden="true"><i></i><i></i><i></i><span>{url}</span></div>}
      <Image src={src} width={width} height={height} alt={alt} title={alt} priority={priority} sizes={sizes} />
      {caption && <figcaption className="note">{caption}</figcaption>}
    </figure>
  );
}

const PATH_X = [100, 300, 500, 700];

/**
 * Four steps to purchase on a line, with a callout dropped between `at` and
 * the next step and a ring on step `at` (0-based). A dot travels the line.
 */
export function PurchasePath({ steps, at, callout, ariaLabel }: { steps: [string, string, string, string]; at: 0 | 1 | 2; callout: [string, string]; ariaLabel: string }) {
  const cx = (PATH_X[at] + PATH_X[at + 1]) / 2;
  return (
    <svg className="cs-path" viewBox="0 0 800 230" role="img" aria-label={ariaLabel}>
      <line className="pp-track" x1="100" y1="140" x2="700" y2="140" />
      <line className="pp-flow" x1="100" y1="140" x2="700" y2="140" />
      {PATH_X.map((x, i) => <circle key={x} className={`pp-node n${i}`} cx={x} cy="140" r="22" />)}
      <circle className="pp-ring" cx={PATH_X[at]} cy="140" r="30" />
      <g className="pp-text" fontSize="15" fontWeight="700" textAnchor="middle">
        {steps.map((t, i) => <text key={t} x={PATH_X[i]} y="192">{t}</text>)}
      </g>
      <rect className="pp-callout" x={cx - 110} y="22" width="220" height="52" rx="10" />
      <g className="pp-text" fontSize="14" fontWeight="700" textAnchor="middle">
        <text x={cx} y="46">{callout[0]}</text>
        <text x={cx} y="64">{callout[1]}</text>
      </g>
      <path className="pp-drop" d={`M${cx} 74 V118 M${cx - 6} 112 L${cx} 120 L${cx + 6} 112`} />
      <circle className="pp-dot" cx="100" cy="140" r="7" />
    </svg>
  );
}

/** A short list with a tick before each item. `tone` colours the ticks. */
export function Checklist({ items, tone = 'sage' }: { items: string[]; tone?: 'sage' | 'coral' }) {
  return (
    <ul className="cs-check" data-tone={tone}>
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

/** A big headline number over one dot per item, e.g. "40+ issues resolved". */
export function CountCard({ value, label, count, caption }: { value: string; label: string; count: number; caption: string }) {
  return (
    <figure className="cs-countcard">
      <div className="cs-countcard-top"><b>{value}</b><span>{label}</span></div>
      <DotGrid count={count} ariaLabel={`${count} dots: ${caption}`} />
      <figcaption className="note">{caption}</figcaption>
    </figure>
  );
}

/** Three or so numbered steps in cards, stepping down from left to right. */
export function NumberedSteps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="cs-nsteps">
      {items.map((s, i) => (
        <li key={s.title}><span aria-hidden="true">{i + 1}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></li>
      ))}
    </ol>
  );
}

const LOOP = 'M160 150 A240 110 0 0 1 640 150 A240 110 0 0 1 160 150';
const LOOP_NODES: [number, number][] = [[160, 150], [400, 40], [640, 150], [400, 260]];

/** A four-stage loop (left, top, right, bottom) around a centre label, e.g. a loyalty cycle. */
export function LoopSketch({ stages, centre, sub, ariaLabel }: { stages: [string, string, string, string]; centre: string; sub: string; ariaLabel: string }) {
  return (
    <svg className="cs-loop" viewBox="0 0 800 300" role="img" aria-label={ariaLabel}>
      <path className="lp-track" d={LOOP} />
      <path className="lp-flow" d={LOOP} />
      {LOOP_NODES.map(([x, y], i) => <circle key={i} className={`lp-node n${i}`} cx={x} cy={y} r="38" />)}
      <g fontSize="14" fontWeight="700" textAnchor="middle">
        {LOOP_NODES.map(([x, y], i) => <text key={i} x={x} y={y + 5}>{stages[i]}</text>)}
      </g>
      <text x="400" y="142" fontSize="20" fontWeight="700" textAnchor="middle">{centre}</text>
      <text className="lp-muted" x="400" y="164" fontSize="14" textAnchor="middle">{sub}</text>
    </svg>
  );
}

/** A screenshot in a phone outline, e.g. the mobile view next to a ScreenshotTabs gallery. */
export function PhoneFrame({ src, width, height, alt, caption }: { src: string; width: number; height: number; alt: string; caption?: string }) {
  return (
    <figure className="cs-phone-wrap">
      <div className="cs-phone"><Image src={src} width={width} height={height} alt={alt} title={alt} sizes="230px" /></div>
      {caption && <figcaption className="note">{caption}</figcaption>}
    </figure>
  );
}

/**
 * A 0–`max` scale drawn to proportion, with the measured value filled in and a
 * dashed limit marker, e.g. a page load time against a threshold.
 */
export function ScaleBar({ max, unit, value, limit, ariaLabel }: {
  max: number;
  unit: string;
  value: { at: number; value: string; label: string };
  limit: { at: number; value: string; label: string };
  ariaLabel: string;
}) {
  const pct = (n: number) => `${(n / max) * 100}%`;
  return (
    <div className="cs-scale" role="img" aria-label={ariaLabel}>
      <div className="cs-scale-track">
        <div className="cs-scale-fill" style={{ width: pct(value.at) }}></div>
        <div className="cs-scale-mark value" style={{ left: pct(value.at) }}><b>{value.value}</b><span>{value.label}</span></div>
        <div className="cs-scale-mark limit" style={{ left: pct(limit.at) }}><b>{limit.value}</b><span>{limit.label}</span></div>
      </div>
      <div className="cs-scale-ticks" aria-hidden="true">
        {Array.from({ length: max + 1 }, (_, i) => <span key={i}>{i}{unit}</span>)}
      </div>
    </div>
  );
}

/** Four or so numbered steps in coloured tiles, rising from left to right. */
export function RisingSteps({ items, ariaLabel }: { items: { title: string; text: string }[]; ariaLabel: string }) {
  return (
    <ol className="cs-rise" aria-label={ariaLabel}>
      {items.map((s, i) => (
        <li key={s.title} style={{ '--i': i } as React.CSSProperties}><span className="cs-rise-n">{i + 1}</span><b>{s.title}</b><span>{s.text}</span></li>
      ))}
    </ol>
  );
}

/**
 * A rate shown as `lit` dots out of 100, next to the headline number. `period`
 * adds a row of bars, one per day of the measurement window.
 */
export function RateDots({ lit, value, label, sub, period }: { lit: number; value: string; label: string; sub?: string; period?: { days: number; label: string } }) {
  return (
    <div className="cs-rate">
      <div className="cs-rate-dots" aria-hidden="true">
        {Array.from({ length: 100 }, (_, i) => <i key={i} className={i < lit ? 'on' : undefined} style={{ '--i': i } as React.CSSProperties}></i>)}
      </div>
      <div>
        <p className="cs-rate-n"><b>{value}</b><span>{label}</span></p>
        {sub && <p className="cs-rate-sub">{sub}</p>}
        {period && (
          <>
            <div className="cs-rate-cycle" style={{ '--days': period.days } as React.CSSProperties} aria-hidden="true">
              {Array.from({ length: period.days }, (_, i) => <i key={i} style={{ '--i': i } as React.CSSProperties}></i>)}
            </div>
            <p className="cs-rate-cycle-label">{period.label}</p>
          </>
        )}
      </div>
    </div>
  );
}

/** The icon on a "what changed" card. */
export function ChangeIcon({ kind }: { kind: ChangeIconKind }) {
  if (kind === 'ripple') {
    return (
      <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <circle className="ripple" cx="22" cy="22" r="19" />
        <circle className="ripple" cx="22" cy="22" r="19" />
        <circle className="ripple" cx="22" cy="22" r="19" />
        <circle className="i-ink" cx="22" cy="22" r="4" />
      </svg>
    );
  }
  if (kind === 'nodes') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-line"><line x1="22" y1="9" x2="9" y2="33" /><line x1="22" y1="9" x2="35" y2="33" /><line x1="9" y1="33" x2="35" y2="33" /></g>
        <circle className="blink-node i-coral" cx="22" cy="9" r="5" />
        <circle className="blink-node i-sky" cx="9" cy="33" r="5" />
        <circle className="blink-node i-sage" cx="35" cy="33" r="5" />
      </svg>
    );
  }
  if (kind === 'bars') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-coral"><rect className="grow-bar" x="6" y="26" width="9" height="12" rx="2" /><rect className="grow-bar" x="18" y="16" width="9" height="22" rx="2" /><rect className="grow-bar" x="30" y="6" width="9" height="32" rx="2" /></g>
        <line className="i-line" x1="4" y1="40" x2="41" y2="40" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === 'lift') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <rect className="i-page" x="9" y="6" width="26" height="32" rx="4" />
        <g className="hop"><path className="i-arrow" d="M22 28 V14 M16 20 L22 14 L28 20" /></g>
      </svg>
    );
  }
  if (kind === 'merge') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-stroke"><path d="M6 10 H18 C26 10 26 22 34 22" /><path d="M6 34 H18 C26 34 26 22 34 22" /></g>
        <circle className="blink-node i-coral" cx="37" cy="22" r="5" />
      </svg>
    );
  }
  if (kind === 'grid') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-sage"><rect x="5" y="5" width="15" height="15" rx="3" /><rect x="24" y="5" width="15" height="15" rx="3" /><rect x="5" y="24" width="15" height="15" rx="3" /></g>
        <rect className="pop-loop i-coral" x="24" y="24" width="15" height="15" rx="3" />
      </svg>
    );
  }
  if (kind === 'shield') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path className="i-page" d="M22 5 l15 5 v12 c0 10 -7 16 -15 19 c-8 -3 -15 -9 -15 -19 v-12 z" strokeLinejoin="round" />
        <path className="hop i-tick" d="M15 22 l5 5 l9 -10" />
      </svg>
    );
  }
  if (kind === 'devices') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <rect className="i-page" x="3" y="8" width="28" height="20" rx="3" />
        <line className="i-stroke" x1="10" y1="34" x2="24" y2="34" />
        <rect className="hop i-phone" x="27" y="16" width="14" height="22" rx="3" />
      </svg>
    );
  }
  if (kind === 'heart') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path className="i-page" d="M22 38 C8 28 6 18 12 12 C16 8 21 10 22 15 C23 10 28 8 32 12 C38 18 36 28 22 38 z" strokeLinejoin="round" />
        <path className="hop i-tick" d="M16 21 H28 M22 15 V27" />
      </svg>
    );
  }
  if (kind === 'cards') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <rect className="i-page" x="5" y="8" width="24" height="18" rx="3" />
        <rect className="hop i-phone" x="17" y="18" width="22" height="18" rx="3" />
      </svg>
    );
  }
  if (kind === 'clock') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle className="i-page" cx="22" cy="24" r="15" />
        <path className="hop i-tick" d="M22 24 L29 14" />
        <path className="i-stroke" d="M17 6 H27" />
      </svg>
    );
  }
  if (kind === 'mail') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path className="i-page" d="M8 12 H36 V32 H8 z" strokeLinejoin="round" />
        <path className="hop i-tick" d="M8 14 L22 25 L36 14" />
      </svg>
    );
  }
  if (kind === 'target') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <g className="i-stroke"><circle cx="22" cy="22" r="17" /><circle cx="22" cy="22" r="10" /></g>
        <circle className="blink-node i-coral" cx="22" cy="22" r="3.5" />
      </svg>
    );
  }
  if (kind === 'image') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <rect className="i-page" x="5" y="9" width="34" height="24" rx="3" />
        <circle className="hop i-phone" cx="16" cy="19" r="4" />
        <path className="i-stroke" d="M8 30 L18 24 L26 29 L33 22 L37 26" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === 'info') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle className="i-page" cx="22" cy="22" r="16" />
        <path className="hop i-tick" d="M22 20 V31" />
        <circle className="i-ink" cx="22" cy="14" r="2" />
      </svg>
    );
  }
  if (kind === 'dial') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle className="i-page" cx="22" cy="22" r="14" />
        <path className="hop i-tick" d="M22 12 V22 L29 26" />
      </svg>
    );
  }
  if (kind === 'search') {
    return (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle className="i-page" cx="19" cy="19" r="11" />
        <path className="hop i-tick" d="M27 27 L37 37" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true">
      <rect className="i-sage" x="5" y="30" width="34" height="9" rx="2" />
      <rect className="i-sage" x="9" y="21" width="26" height="9" rx="2" opacity=".6" />
      <rect className="hop i-butter" x="13" y="8" width="18" height="9" rx="2" />
    </svg>
  );
}

/** Cards with an icon, a title and a line of text. Used by `changes` and inside a section. */
export function ChangeCards({ items, columns }: { items: { icon: ChangeIconKind; title: string; text: string }[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className="cs-changes" style={{ '--n': String(columns ?? (items.length === 3 ? 3 : 2)) } as React.CSSProperties}>
      {items.map((c) => (
        <article key={c.title} className="cs-change">
          <div className="cs-change-icon"><ChangeIcon kind={c.icon} /></div>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </article>
      ))}
    </div>
  );
}

/**
 * Growth multipliers drawn to scale on a 0–`max` track, with a dashed marker
 * at 1× (the comparison period). `multiple` sets the bar; `value` and `approx`
 * are shown as written, e.g. "+422%" and "≈ 5.2×".
 */
export function GrowthBars({ rows, max, axis, ariaLabel }: {
  rows: { label: string; value: string; approx: string; multiple: number }[];
  max: number;
  axis: [string, string];
  ariaLabel: string;
}) {
  const pct = (n: number) => `${(n / max) * 100}%`;
  return (
    <div className="cs-growth" role="img" aria-label={ariaLabel} style={{ '--base': pct(1) } as React.CSSProperties}>
      {rows.map((r) => (
        <div key={r.label} className="cs-g-row">
          <span className="cs-g-lab">{r.label}</span>
          <div className="cs-g-track"><div className="cs-g-bar" style={{ width: pct(r.multiple) }}></div></div>
          <span className="cs-g-val"><b>{r.value}</b> {r.approx}</span>
        </div>
      ))}
      <div className="cs-g-axis" aria-hidden="true"><span>{axis[0]}</span><span>{axis[1]}</span></div>
    </div>
  );
}

/** Two or so big figures side by side with a caption, e.g. a catalog snapshot in the hero. */
export function StatCard({ items, caption }: { items: { value: string; label: string }[]; caption: string }) {
  return (
    <figure className="cs-statcard">
      <div className="cs-statcard-row">
        {items.map((i) => <div key={i.label} className="cs-statcard-n"><b>{i.value}</b><span>{i.label}</span></div>)}
      </div>
      <figcaption className="note">{caption}</figcaption>
    </figure>
  );
}

/** A page as it reads in a search result, next to a short list of what makes it work. */
export function SeoSnippet({ url, title, description, caption, points }: {
  url: string;
  title: string;
  description: string;
  caption: string;
  points: { title: string; text: string }[];
}) {
  return (
    <div className="cs-seo-grid">
      <figure className="cs-serpcard">
        <div className="cs-serpcard-url">{url}</div>
        <div className="cs-serpcard-title">{title}</div>
        <div className="cs-serpcard-desc">{description}</div>
        <figcaption className="note">{caption}</figcaption>
      </figure>
      <ul className="cs-seo-points">
        {points.map((p) => <li key={p.title}><b>{p.title}</b><span>{p.text}</span></li>)}
      </ul>
    </div>
  );
}
