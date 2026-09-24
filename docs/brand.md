# Brand: colours, font and type

How pages on this site should look. Read this before building a new page or
section. Written for developers and AI coding assistants.

**The values live in [`app/brand.css`](../app/brand.css).** That file is the
single source of truth. This guide explains when to use each value. If the two
ever disagree, `brand.css` wins; fix this guide in the same change.

---

## 1. Rules for every new page

1. Use the CSS variables: `color: var(--ink)`, never `color: #243746`.
2. Use the shared classes from `app/globals.css` (section 5) before writing new CSS.
3. Do not load another font or set `font-family` to anything except `var(--sans)`.
   Headings get the right font automatically, so you usually need no `font-family` at all.
4. Do not redefine `:root` variables or `h1, h2, h3` in a page's own
   `<style>` block. That is how the platform pages drifted to a different font.
5. Do not add new colours. If a design seems to need one, ask first. It
   usually means using an existing token.
6. To change a brand value site-wide, edit `app/brand.css` only.

---

## 2. Colours

### Base palette (most of every page)

| Token | Hex | Use for |
|---|---|---|
| `--warm-white` | `#F7F5EE` | Page background. Text on dark sections. |
| `--ink` | `#243746` | Headings, emphasised text, button text. |
| `--dark-sage` | `#344033` | Body text. Background of `.dark` sections. |
| `--sage` | `#596B57` | Labels, captions, secondary text, the logo. |
| `--light-sage` | `#D5DDD2` | Borders and dividers. |
| `--pale-sage` | `#E9EEE7` | Tinted section or card backgrounds. |

### Accents (small amounts only)

| Token | Hex | Use for |
|---|---|---|
| `--coral` | `#D96F4F` | Primary call-to-action buttons (`.btn`) and key highlights. Keep to one coral button per screen where possible. |
| `--butter` | `#EFC75E` | Link underlines, focus outline on dark backgrounds, small decorative marks. |
| `--sky` | `#4F82A3` | Secondary accent in diagrams, icons and data visuals. |
| `--coral-soft` | `#F5D6CA` | Large background behind coral content. |
| `--butter-soft` | `#F7E6A8` | Large background behind butter content. |
| `--sky-soft` | `#C9E0EB` | Large background behind sky content. |

### Pairings that work

| Background | Text | Notes |
|---|---|---|
| `--warm-white` | `--dark-sage` body, `--ink` headings | Default page. |
| `--pale-sage` | same as above | Alternate sections (`.pale`). |
| `--dark-sage` | `--warm-white` | Dark sections (`.dark`). Headings turn warm-white automatically. |
| `--coral` | `--ink` | Buttons. Do not put white text on coral: the contrast is too low. |

Do not use accent colours for body text.

---

## 3. Font

- **One family site-wide: Manrope**, via `var(--sans)`. It is loaded once in
  `app/layout.tsx` (weights 400, 500, 600, 700 and 800). No other weights exist.
- `var(--serif)` is a leftover alias that also points to Manrope. Do not use it
  in new code.
- There is no serif or display font. Newsreader and Georgia are no longer used.

---

## 4. Type scale

These are already set globally in `app/globals.css`. A plain `<h2>` or `<p>`
looks right with no extra CSS.

| Element | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Body (`body`, `p`) | 1.0625rem (17px) | 400 | 1.65 | normal |
| `h1` (page hero) | about `clamp(2.5rem, 5vw, 4.1rem)`, set per hero | 800 | 1.02 | −.03em |
| `h2` (section title) | `clamp(2.1rem, 4vw, 3.3rem)` | 800 | 1.02 | −.03em |
| `h3` (card or sub-heading) | 1.35rem | 700 | 1.15 | −.01em |
| `.sub` (intro under a heading) | `clamp(1.1rem, 1.4vw, 1.25rem)` | 400 | 1.55 | normal |
| `.label` (small eyebrow above a heading) | .875rem | 600, `--sage` | — | 0 |
| Bold labels in cards (`strong`) | 1.05–1.5rem | 700 | 1.2 | −.01em |
| Navigation links | .95rem | 500 | — | — |
| Buttons (`.btn`) | 1.1875rem | 700 | 1.2 | — |
| Small print (`.note`) | .8125rem | 400, `--sage` | — | — |

Use one `<h1>` per page. Do not skip heading levels for size. Pick the right
level, then adjust the size in CSS if needed.

---

## 5. Shared classes (in `app/globals.css`)

| Class | What it gives you |
|---|---|
| `.wrap` | Centred content, max width `--wrap`, side padding `--gutter`. |
| `section` | Standard vertical padding `clamp(80px, 11vw, 140px)`. |
| `.head` / `.head.center` | Heading block, max 760px wide, optionally centred. |
| `.label` | Eyebrow text above a heading. |
| `.sub` | Intro paragraph under a heading. |
| `.pale` / `.tint` | Pale-sage section background. |
| `.dark` | Dark-sage section with warm-white text. |
| `.btn` | Coral primary button. `.btn-s` / `.btn-small` for smaller. |
| `.link` | Ink text link with a butter underline. |
| `.rule` / `.rule-top` | Light-sage top border. |
| `.note` | Small sage caption text. |

Shape and motion: use `var(--r)` (6px) for corner radius, and
`var(--t) var(--ease)` for transitions.

---

## 6. Icons in inline SVG

For icons in inline SVG, use `stroke="currentColor"` or `fill="currentColor"`
and set `color: var(--…)` in CSS. SVG attributes cannot read CSS variables
reliably, so never type the hex value there.
