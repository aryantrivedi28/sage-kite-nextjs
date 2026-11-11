import type { ReactNode } from 'react';

/** Accent used for a tile, metric or tag. Maps to the brand tokens. */
export type Tone = 'sky' | 'coral' | 'butter' | 'sage' | 'plain';

/** Icons for a "what changed" card (ChangeIcon in components/case-studies/blocks.tsx). */
export type ChangeIconKind = 'ripple' | 'nodes' | 'bars' | 'stack' | 'lift' | 'merge' | 'grid' | 'target' | 'shield' | 'devices' | 'heart' | 'cards' | 'clock' | 'mail' | 'image' | 'info' | 'search' | 'dial' | 'lines' | 'phone' | 'calendar' | 'chat' | 'mobile' | 'globe' | 'card' | 'pin' | 'lock' | 'megaphone';

interface CaseStudyResultBase {
  /** Heading for the figure, e.g. "Monthly organic visitors". */
  label: string;
  /** Headline change, e.g. "~6×". */
  value: string;
  /** Screen-reader version of `value`, e.g. "About six times". */
  valueLabel?: string;
}

/** A before/after figure. Drawn to scale on the listing card and in Results. */
export interface BeforeAfterResult extends CaseStudyResultBase {
  before: string;
  after: string;
  /** Before as a percentage of after (use the upper figure of a range). */
  scale: number;
  /** If `before` is a range, the share of the before bar that is solid (lower ÷ upper × 100). */
  rangeSolid?: number;
  /** Label of the after bar. Defaults to "After". */
  afterLabel?: string;
  /** Small print under the bars. Defaults to "Bars drawn to scale." */
  note?: string;
}

/** A count with no starting figure, e.g. "120+ keywords into the top 3". Drawn as one dot per item. */
export interface CountResult extends CaseStudyResultBase {
  /** Number of dots to draw. Use the reported figure (the lower bound of "120+"). */
  count: number;
  /** What one dot stands for, singular, e.g. "keyword". */
  unit: string;
  /** Small print under the dots. Defaults to "Each dot is one <unit>." */
  note?: string;
}

export type CaseStudyResult = BeforeAfterResult | CountResult;

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
  /**
   * Who did the work and on what basis, e.g. "Previous work by a Sage Kite delivery specialist".
   * Required by default (AGENTS.md); leave it out only when the user has approved a study without one (Croma, D056; Maruti Suzuki, D069; Kaya Clinics, D072; Pune Times Mirror, D079; Soch, D080; Industrybuying, D082; Jenson USA, D083).
   */
  origin?: string;
  /** Original illustration for the /case-studies card (components/case-studies/covers.tsx). Never a photo, screenshot or logo. */
  cover?: ReactNode;
  /** The person who did the work, if named. Added to the Article schema. */
  practitioner?: { name: string; role: string };
  /** The main pieces of work, shown as chips in the homepage's featured case studies (components/home/Work.tsx). Not shown on the /case-studies listing. */
  highlights: string[];
  /**
   * Headline figures for the listing card and the Results section. Leave empty
   * when nothing was measured: the listing card then shows the `metrics` tiles.
   */
  results: CaseStudyResult[];
  /** Draft case studies are left out of the listing, sitemap and routes. */
  draft?: boolean;
  /**
   * Renders the page in the interactive technical layout (components/case-studies/TechnicalCaseStudyPage.tsx,
   * first used for Croma): a path-style breadcrumb, `hero.label` as a kicker, `hero.glance` as chips, an optional
   * sticky on-page menu (`nav`) and a reading progress bar. The first of `crumbs` links to /case-studies; `nav` lists the menu
   * (the hero is "overview", the results section "results", the rest are `sections` ids).
   * `plainHero` drops the grid-paper background (Maruti Suzuki). `odometer` adds a floating pill naming the section
   * being read and the share of the page read (same ids as `nav`). `dotnav` adds a column of dots on the right edge
   * of wide screens, one per section (Kaya Clinics; same ids as `nav`).
   */
  technical?: {
    crumbs?: string[];
    nav?: { id: string; label: string }[];
    plainHero?: boolean;
    odometer?: { id: string; label: string }[];
    dotnav?: { id: string; label: string }[];
    /** The source's round pager at the bottom centre: previous / next section (Pune Times Mirror, D079; same ids as `nav`). */
    pager?: { id: string; label: string }[];
    /** The pager counts "1 / 7" instead of "01 / 07" (Soch, as in its source). */
    pagerPlain?: boolean;
    /**
     * Results in a plain band of their own, impact and stack in a pale band after them, and the takeaway and CTA on a
     * plain band (Industrybuying, as in its source). Without it, see `resultsSection.band`.
     */
    impactBand?: 'pale';
    /** Section headings may use the full content width instead of 820px, so they fit on one line on desktop (Industrybuying). */
    wideHeadings?: boolean;
  };

  /* ── Page sections ───────────────────────────────────────────────────── */
  hero: {
    /** Eyebrow above the h1. Optional. */
    label?: string;
    /** Short line under the h1. */
    dek: string;
    lede: string;
    /** Optional graphic above the At a glance card. */
    visual?: ReactNode;
    /**
     * Show `visual` full width under the hero text and At a glance card instead
     * of above the card. Use for a tall or detailed screenshot that would leave
     * the right column much longer than the text.
     */
    visualBelow?: boolean;
    /** "At a glance" rows, e.g. Client, Industry, Engagement. A value can be a link. */
    glance: { label: string; value: ReactNode }[];
    /** Small print under the hero, e.g. that its visual is illustrative. Technical layout only. */
    note?: string;
  };
  /** Coloured headline tiles under the hero. */
  metrics?: { items: { value: string; label: string; tone: Tone }[]; note?: string };
  /** Free-form intro section. Use the helpers in components/case-studies/blocks.tsx. */
  startingPoint?: { label?: string; heading: string; content: ReactNode };
  problem?: {
    label?: string;
    heading: string;
    /** Short line under the heading. */
    intro?: string;
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
    /** Up to four steps reads best. `href` turns a step into a link, e.g. to one of `sections`. */
    steps: { title: string; text: string; href?: string }[];
    note?: string;
  };
  /**
   * Free-form sections shown after the approach, one per part of the work, e.g.
   * migration, storefront, analytics. `id` is the anchor for an approach step `href`.
   */
  sections?: {
    id: string;
    label: string;
    heading: string;
    intro?: string;
    /** Technical layout only: on screens 760px and wider, start a new line in the heading after this text (Jenson USA 05, as in its source). */
    headingBreak?: string;
    /** Technical layout only: a boxed line under the intro, shown as "<label> <text>" (Industrybuying's "In plain words:"). */
    plain?: { label: string; text: string };
    content: ReactNode;
    /** Background in the technical layout. Defaults to none. (The standard layout alternates pale bands.) */
    band?: 'pale' | 'sky';
  }[];
  delivered?: {
    label?: string;
    heading: string;
    /** Short line under the heading. */
    intro?: string;
    /** Tiles fill a 3-column grid. `size: 'wide'` spans two columns. */
    tiles?: {
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
    /** Shown after the tiles, or instead of them, e.g. an interactive demo. */
    content?: ReactNode;
  };
  /** Uses `results` above for the bars. */
  resultsSection?: {
    label?: string;
    heading: string;
    points?: { title: string; text: string }[];
    /** Technical layout only: a graphic above the points (e.g. <ResultGauges />), used when there is no before/after figure. */
    visual?: ReactNode;
    /** Technical layout only: drawn in the results card beside the points instead of the before/after bars (e.g. <GrowthRing />). */
    card?: ReactNode;
    /**
     * Technical layout only: give the results a band of their own in this colour; impact and stack then follow in a
     * plain band (Maruti Suzuki). Without it, results, impact and stack share one plain band (Croma).
     */
    band?: 'pale' | 'sky';
  };
  changes?: {
    label?: string;
    heading: string;
    /** Cards per row on wide screens. Defaults to 3 for three cards, otherwise 2. */
    columns?: 2 | 3 | 4;
    items: { icon: ChangeIconKind; title: string; text: string }[];
  };
  /** `text` is optional: leave it out for a plain list of tools. */
  methods?: {
    label?: string;
    heading: string;
    items: { title: string; text?: string }[];
    /** Technical layout only: start a new row of chips after this many items on wide screens (Industrybuying: 3, as in its source). */
    breakAfter?: number;
  };
  takeaway?: {
    /** Eyebrow above the heading. Defaults to "Takeaway". */
    label?: string;
    heading: string;
    /** Before vs after graphic. Without a `visual`, each side shows the scattered vs connected dots. */
    versus?: {
      before: { title: string; text?: string; visual?: ReactNode };
      after: { title: string; text?: string; visual?: ReactNode };
    };
    body: string;
    fit?: string[];
    /** A text link at the end of the panel, e.g. "See more work". */
    link?: { label: string; href: string };
  };
  /** Origin statement. Required whenever the work was not a Sage Kite client engagement; left out only with the user's approval (D056). */
  about?: { heading: string; text: string };
  cta: {
    heading: string;
    text: string;
    /** The button. Defaults to "Book a discovery call" linking to /book. */
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}
