import type { ReactNode } from 'react';

/** Accent used for a tile, metric or tag. Maps to the brand tokens. */
export type Tone = 'sky' | 'coral' | 'butter' | 'sage' | 'plain';

/** A before/after figure. Drawn to scale on the listing card and in Results. */
export interface CaseStudyResult {
  /** Heading for the figure, e.g. "Monthly organic visitors". */
  label: string;
  /** Headline change, e.g. "~6×". */
  value: string;
  /** Screen-reader version of `value`, e.g. "About six times". */
  valueLabel?: string;
  before: string;
  after: string;
  /** Before as a percentage of after (use the upper figure of a range). */
  scale: number;
  /** If `before` is a range, the share of the before bar that is solid (lower ÷ upper × 100). */
  rangeSolid?: number;
}

/**
 * One case study. The data lives in app/case-studies/<slug>/study.tsx and is
 * rendered by components/case-studies/CaseStudyPage.tsx. Every section after
 * the hero is optional: leave a key out and that section is not shown.
 */
export interface CaseStudy {
  /* ── Identity, listing card and SEO ─────────────────────────────────── */
  /** Folder name and URL segment. Lowercase with hyphens. */
  slug: string;
  client: string;
  /** The h1 and the listing card heading. */
  title: string;
  /** Meta title without " | Sage Kite". Keep it under ~48 characters. */
  seoTitle: string;
  /** Open Graph / Twitter title. Defaults to `title`. */
  ogTitle?: string;
  /** Meta description. 70–160 characters. */
  description: string;
  /** Listing card summary. Under 160 characters. */
  summary: string;
  keywords: string[];
  /** ISO dates for schema and the sitemap. */
  datePublished: string;
  dateModified?: string;
  industry: string;
  /** Type of work, shown as the listing card tag, e.g. "SEO". */
  discipline: string;
  /** Who did the work and on what basis, e.g. "Previous work by a Sage Kite delivery specialist". */
  origin: string;
  /** The person who did the work, if named. Added to the Article schema. */
  practitioner?: { name: string; role: string };
  /** The main pieces of work, shown as chips on the listing card. */
  highlights: string[];
  /** Headline before/after figures for the listing card and the Results section. */
  results: CaseStudyResult[];
  /** Draft case studies are left out of the listing, sitemap and routes. */
  draft?: boolean;

  /* ── Page sections ───────────────────────────────────────────────────── */
  hero: {
    /** Eyebrow above the h1. Optional. */
    label?: string;
    /** Short line under the h1. */
    dek: string;
    lede: string;
    /** Optional graphic above the At a glance card. */
    visual?: ReactNode;
    /** "At a glance" rows, e.g. Client, Industry, Engagement. */
    glance: { label: string; value: string }[];
  };
  /** Coloured headline tiles under the hero. */
  metrics?: { items: { value: string; label: string; tone: Tone }[]; note?: string };
  /** Free-form intro section. Use the helpers in components/case-studies/blocks.tsx. */
  startingPoint?: { label?: string; heading: string; content: ReactNode };
  problem?: {
    label?: string;
    heading: string;
    items: { title: string; text: string }[];
    /** Optional graphic under the list, e.g. <SearchFlow />. */
    visual?: ReactNode;
    pullQuote?: string;
  };
  approach?: {
    label?: string;
    heading: string;
    intro?: string;
    diagnosis?: string[];
    /** Up to four steps reads best. */
    steps: { title: string; text: string }[];
    note?: string;
  };
  delivered?: {
    label?: string;
    heading: string;
    /** Tiles fill a 3-column grid. `size: 'wide'` spans two columns. */
    tiles: {
      tag: string;
      title: string;
      text: string;
      tone: Tone;
      size?: 'wide';
      visual?: ReactNode;
      /** Show `visual` without the tinted panel (use for interactive demos). */
      bare?: boolean;
      /** Small print under the visual, e.g. "Illustrative, not the client's site map." */
      note?: string;
    }[];
  };
  /** Uses `results` above for the bars. */
  resultsSection?: { label?: string; heading: string; points?: { title: string; text: string }[] };
  changes?: {
    label?: string;
    heading: string;
    items: { icon: 'ripple' | 'nodes' | 'bars' | 'stack'; title: string; text: string }[];
  };
  methods?: { label?: string; heading: string; items: { title: string; text: string }[] };
  takeaway?: {
    heading: string;
    /** Scattered vs connected dots graphic. */
    versus?: { before: { title: string; text: string }; after: { title: string; text: string } };
    body: string;
    fit?: string[];
  };
  /** Origin statement. Required whenever the work was not a Sage Kite client engagement. */
  about: { heading: string; text: string };
  cta: { heading: string; text: string; secondary?: { label: string; href: string } };
}
