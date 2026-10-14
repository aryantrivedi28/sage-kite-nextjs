import React from 'react';
import Image from 'next/image';
import type { Tone } from '@/content/case-studies/types';

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
