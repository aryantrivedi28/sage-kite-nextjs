# Blog studio: the admin panel for uploading blog posts

What the blog studio is, how it works today, where every piece of code lives,
and how to add a database (Supabase or Sanity), authentication and admin access
later. Written for AI coding assistants and developers with no prior context.

Read [AGENTS.md](../AGENTS.md) first. The decision record is
[decision.md](../decision.md) **D019**. When this doc and the code disagree, the
code wins; fix this doc in the same change.

---

## 1. Status at a glance

The studio is an admin panel built on 20 October 2026 from a prototype the user
supplied (a "GHL Scale Up" blog CMS demo), restyled with Sage Kite brand tokens
and adapted to this site's blog rules. The same day it was connected to Sanity
for local use (decision.md D022, [sanity.md](sanity.md)). On 21 October 2026 a shared team
password was added so the deployed studio can publish to Sanity (D030).

| Area | State today |
|---|---|
| Writing, editing, previewing, checking posts | Works |
| Saving (locally and on the deployed site) | **Sanity** only (project `lk42drbi`, dataset from `NEXT_PUBLIC_SANITY_DATASET`), after signing in with the team password. Without valid sign-in settings or a session the studio is locked and saves nothing; there is no browser `localStorage` mode (D035) |
| Images | Uploaded to Sanity's asset store (CDN URL) after a byte check (D033) |
| Publishing to sagekite.com | Works where the Sanity env vars are set and the visitor is signed in (locally with `npm run dev`; on the deployed site once the `STUDIO_*` vars are set, D030): published posts appear on `/blog/<slug>`, `/blog`, "Keep reading", the sitemap and in JSON-LD within a minute, immediately after a save (section 10). "Scheduled" is still a label only |
| Authentication / admin accounts | **One shared team password** (`STUDIO_PASSWORD`, D030): HttpOnly signed cookie, checked on the page and in every Server Action. No per-person accounts and no roles: everyone who signs in can publish and delete. Without valid `STUDIO_PASSWORD` + `STUDIO_SESSION_SECRET` the studio is locked ("unavailable"); there is no browser-only mode (D035) |

The studio is locked behind a sign-in dialog until the visitor signs in with the team password, and then it saves to Sanity. The deployed blog shows Sanity posts only if `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set in Vercel.

---

## 2. Access and how the URL is hidden

- URL: **`/sk-studio-ufn5xdafhll7`** (local: `http://localhost:3000/sk-studio-ufn5xdafhll7`).
  The path segment is random so it cannot be guessed.
- Sign-in: a shared team password (D030). Before that the user chose "hidden URL only" (D019) after being told the risk. Since D035 nothing is usable without signing in: there is no browser-only mode.
- The page metadata (in `app/sk-studio-ufn5xdafhll7/page.tsx`) sets:
  - `robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } }`
  - `referrer: 'no-referrer'`, so links clicked inside the studio do not send its URL to other sites.
    The YouTube embed overrides this with an origin-only policy (§4.2, D025).
  - No canonical, no Open Graph.
- It is **not** in `app/sitemap.ts`, and nothing on the site links to it.
- It is **deliberately not** in `app/robots.ts`. robots.txt is public, so a
  `Disallow` line would advertise the path. Do not add it.
- No Google Analytics (D038): the page renders a hidden `data-no-analytics` element, and
  `components/GoogleAnalytics.tsx` does not load the tag on a page that has one. The studio's
  URL and title are no longer sent to GA, and no third-party script runs in a signed-in session.
  Visits before D038 were recorded, so the path is still in past GA reports.

**An unlisted URL is not security.** Writing to Sanity is gated by the team password
(`components/blog-studio/auth.ts`), not by the URL. The password is shared, so rotate it when
someone leaves (changing `STUDIO_PASSWORD` or `STUDIO_SESSION_SECRET` signs everyone out).
Per-person accounts and roles (section 8) are still the better long-term setup.

---

## 3. Where the code lives

```
app/sk-studio-ufn5xdafhll7/
  page.tsx                  Server component. Sets the noindex/no-referrer metadata and passes
                            the storage mode (getStudioStorage), code-post summaries
                            (getSitePostSummaries), CATEGORIES, PLATFORM_PAGE_SLUGS, AUTHOR and
                            AUTHOR_IMAGE to <BlogStudio>. The comment at the top records why it
                            is unlisted.

components/blog-studio/
  types.ts                  StudioPost, StudioBlock (union of block types), StudioStatus,
                            SitePostSummary, StudioStorage, ActionResult. The data model (section 4).
  server.ts                 Server-only. getSitePostSummaries() and async getStudioStorage(): Sanity
                            `sanity` when sign-in is set up, the visitor has a valid session and the write guard
                            passes; `blocked` when signed in but the guard refuses; otherwise `locked`
                            (`signin` or `unavailable`). No browser-only mode (D035).
  auth.ts, auth-core.ts,    Shared-password sign-in (D030): auth-core.ts is the pure HMAC session and
  auth-actions.ts           password logic; auth.ts reads env and sets the cookie (HttpOnly,
                            SameSite=Lax, Secure in production, limited to the studio path, 7 days);
                            auth-actions.ts only signs out. Sign-in is the Route Handler
                            app/api/sk-studio-ufn5xdafhll7/login/route.ts (D032); paths.ts holds both URLs;
                            rate-limit.ts is the wrong-password brake.
  LoginGate.tsx             The mandatory full-screen sign-in dialog (D035).
  store.ts                  StudioStore interface, sanityStudioStore (calls actions.ts), a
                            refusing store for blocked/locked, and getStudioStore(storage).
                            Images are resized to 1600px WebP in the browser.
  actions.ts                'use server'. list / save / delete / upload-image for Sanity. Each
                            re-checks the storage mode and validates input (id format, block
                            types, no data: images, required checklist items before publishing,
                            slug not used by a code post or another Sanity post). Returns
                            ActionResult values instead of throwing.

lib/sanity/
  client.ts                 Server-only write client (token, useCdn false, perspective 'raw',
                            apiVersion pinned to 2026-10-20) and isSanityWritable().
  blogPosts.ts              StudioPost <-> `blogPost` document mapping: published = `<id>`,
                            draft/scheduled = `drafts.<id>`; block `id` <-> `_key`.
  postUtils.ts              Pure helpers, no React: slugify, ids, today(), emptyPost, newBlock,
                            BLOCK_LABELS, inline-format regexes (INLINE_PATTERN, LINK_PATTERN,
                            stripInline, safeHref, isExternalHref), list/table parsing, the
                            clipboard-HTML tokenizer and inline collector shared by the table and
                            article paste (tableFromClipboard, gridFromHtml, inlineCollector), youtubeId,
                            resolveBlocks (auto FAQ heading), headingAnchors, buildGuide,
                            buildFaqs, wordCount, readingTime, googleTitle, postUrl,
                            checklist() (the publishing rules) and toBlogFields().
  articlePaste.ts           Pure. articleFromClipboard(html, plain): a pasted article (Google Docs,
                            Word desktop or web, Markdown / plain text) as blocks plus a detected
                            title; looksLikeArticle, describeBlocks, articleText (D047); isAppleHtml
                            and the Pages note; imageFromClipboard and the image-paste checks (D048).
  formatting.ts             Pure. The formatting bar: convertLines ("Turn into"), lineRange, and the
                            Bold / Italic / Link / Remove link / Clear formatting text edits (D047).
  StudioArticle.tsx         Renders blocks as plain HTML elements (h2, h3, p, ul/ol, figure,
                            blockquote, table, iframe, hr) that the existing .article-content
                            styles format. No hooks and no 'use client', so a future server
                            route can reuse it to render studio posts on the live site.
  BlogStudio.tsx            'use client'. The whole UI: BlogStudio (state, save/publish logic),
                            PostList, Editor, BlockCard, AddBlockMenu, PasteArea, FormatTextarea,
                            ImageField, Field, Checklist, CreateModal, ConfirmModal, Preview.
  BlogStudio.module.css     Studio styles. Brand tokens only (var(--…)); tints are made with
                            color-mix from tokens; font is var(--sans). The preview uses the
                            live site's global .article-* classes from app/globals.css.
```

The studio reuses, and does not modify:

| Existing file | Used for |
|---|---|
| `content/blog/index.tsx` (`posts`, `CATEGORIES`) | Read-only list of code posts; category options |
| `content/blog/types.ts` (`BlogFaq`, `BlogGuideItem`) | Types returned by `buildFaqs` / `buildGuide` |
| `content/blog/authors.ts` | Default author name and avatar |
| `content/platforms.ts` (`PLATFORM_PAGE_SLUGS`) | "Related platform" options |
| `components/blog/BlogGuide.tsx` | The real sidebar guide inside the preview |
| `components/blog/formatDate.ts` | Dates in the list and preview |
| `app/globals.css` `.article-*` classes | Preview looks like a live post |

Other files changed for the studio: `next.config.ts` (Server Action
`bodySizeLimit: "4mb"` for image uploads), `package.json` (`@sanity/client` ^7.27.0),
`.env.example`, and the docs ([AGENTS.md](../AGENTS.md), [decision.md](../decision.md),
[sanity.md](sanity.md) and this file).

---

## 4. Data model

### 4.1 `StudioPost` (`components/blog-studio/types.ts`)

It mirrors `BlogPost` in `content/blog/types.ts`, but the article is a list of
blocks (JSON) instead of a JSX function, so any backend can store it.

| Field | Type | Notes |
|---|---|---|
| `id` | string | `crypto.randomUUID()` when available |
| `slug` | string | `/blog/<slug>`. Auto-filled from the title until edited; **locked once `firstPublishedAt` is set** |
| `title` | string | The H1 |
| `seoTitle` | string | Optional shorter Google title; `''` means "use title". ` \| Sage Kite` is appended on the site |
| `excerpt` | string | Card text **and** meta description (the site uses one field for both) |
| `category` | string | One of `CATEGORIES` |
| `author`, `authorImage` | string | Default `AUTHOR` / `AUTHOR_IMAGE` |
| `status` | `'draft' \| 'published' \| 'scheduled'` | |
| `publishedAt` | `YYYY-MM-DD` or `''` | Set to today on first publish if empty; for scheduled posts, the date part of `scheduledFor` |
| `updatedAt` | `YYYY-MM-DD` or `''` | Set to `publishedAt` on first publish if empty; a "Today" button sets it |
| `scheduledFor` | `datetime-local` string or `''` | **No time zone** (see 9.4) |
| `featuredImage` | string | `/public` path, `https://` URL, or `data:image/webp;base64,…` from an upload |
| `imageAlt` | string | |
| `tags` | string[] | Comma-separated in the UI |
| `focusKeyword` | string | The phrase the post should rank for. The checklist checks it; it is the first schema `keyword` when the post has secondary keywords. Never shown on a page |
| `secondaryKeywords` | string[] | 0–8 related SEO phrases (80 characters each at most), comma-separated in the UI, separate from `tags`. Used in the Article schema `keywords` when present. Never shown on a page. Posts saved before this field existed have none (D043) |
| `relatedPlatform` | string | `''` or a platform page slug |
| `featured` | boolean | Saving a featured post unfeatures other **studio** posts |
| `blocks` | `StudioBlock[]` | The article |
| `firstPublishedAt` | ISO timestamp, optional | Set on first publish or schedule; locks the slug |
| `createdAt`, `savedAt` | ISO timestamps | `savedAt` updates on every save |

### 4.2 Block types (`StudioBlock`)

| `type` | Fields | Renders as |
|---|---|---|
| `heading` | `level: 2 \| 3`, `text` | `<h2 id>` / `<h3 id>`; ids from `headingAnchors()` (slugified text, `-2`, `-3` for duplicates) |
| `text` | `text` | One `<p>` per non-empty line |
| `list` | `ordered`, `items` | `<ul>`/`<ol>`, one `<li>` per line; pasted `-`, `*`, `•`, `1.` markers are removed |
| `image` | `src`, `alt`, `caption` | `<figure><img alt title></figure>` + optional `<figcaption>` |
| `quote` | `text`, `cite` | `<blockquote>`; cite rendered as `— name` |
| `table` | `rows` | One row per line, cells split on `\|` (a literal pipe in a cell is written `\\|`, a backslash then a pipe), first row is `<thead>`. Tables pasted from Word, Google Docs or Excel are converted to this format (see below) |
| `video` | `url`, `title` | `<iframe>` to `youtube-nocookie.com/embed/<id>`; accepts watch, youtu.be, embed, shorts, live links. `referrerPolicy="strict-origin-when-cross-origin"`: YouTube needs the embedding origin (Error 153 without it) and the studio page is `no-referrer`; sends the origin only, never the path (D025) |
| `faq` | `question`, `answer` | `<h3>` + `<p>` per line; also feeds `buildFaqs()` |
| `divider` | — | `<hr>` |

**Pasting a table (D044).** Word, Google Docs and Excel put a table on the clipboard as HTML and as tab-separated
text. `tableFromClipboard()` in `postUtils.ts` converts either into the `|` rows above:
- In a **Table block's Rows box**, pasting a table replaces the selection and shows "Table pasted: R rows × C columns".
- In a **Paragraphs, List, Quote or FAQ-answer box**, pasting a table opens "Paste as a table?" and nothing is pasted until
  the writer chooses: **Convert to table** adds a Table block below the current block; **Paste as text** (also Escape or a
  click outside the dialog) pastes the original text (the table's own cells, tab-separated, if the clipboard had only HTML).
  It never converts automatically.
- HTML wins when present (it keeps bold, italic and links; only `http(s)`, `mailto:`, `/…` and `#` links survive). Merged
  cells (`colspan`, `rowspan`) keep later cells in their own columns. Only the table's text is used, never its HTML.
- It must be a table and nothing else: text around it, two tables, a single cell, or tab text with fewer than 2 rows or
  2 columns is pasted as ordinary text. The first row becomes the header.
- Limit: 100 rows × 12 columns per paste. A bigger one is refused in the Table block (nothing is truncated) and pasted as
  text elsewhere, with a message to split it.
- Tab-separated text without HTML follows Excel's quoting only where Excel would have quoted (a cell holding a tab, a line
  break or a quote); a cell that merely starts with a quote mark is kept as written.
- A whole article pasted at once is handled by the article paste below; a paste that is only a table keeps this dialog.

**Pasting an article (D047).** `articleFromClipboard(html, plain)` in `articlePaste.ts` turns a pasted article into
blocks. It is a tokenizer like the table paste (no DOMParser), shares its inline handling (`inlineCollector` in
`postUtils.ts`) and hands every `<table>` to the table paste above.
- HTML wins when it gives any text (Google Docs, Word desktop, Word for the web, web pages). Headings: `h1`–`h6`,
  Word for the web's `<p role="heading" aria-level="N">`, Word desktop's `MsoTitle` and `MsoHeadingN`. Paragraphs:
  `p`/`div` with text; `<br>` starts a new line. Lists: `ul`/`ol`/`li`, and Word desktop's list paragraphs
  (`MsoListParagraph…` or an `mso-list:` style), whose bullet or number (between the `supportLists` conditionals) is
  dropped: ordered when it is a number, letter or roman numeral followed by `.` or `)`. Nested lists are flattened
  into one list of the outermost kind. Quotes: `blockquote`, `MsoQuote`, `MsoIntenseQuote`. `hr` is a Divider.
- Title rule: if the paste starts with exactly one top-level heading (H1 or Word's Title, at most 140 characters) it
  is the post title, not a block; otherwise H1 and H2 become H2 and H3–H6 become H3. Bold and italic inside headings
  are dropped (Google Docs styles headings with font-weight spans).
- Consecutive paragraphs merge into one Paragraphs block (one line each); consecutive lists of the same kind merge;
  consecutive quote lines merge. A heading, list, table, quote, image or divider starts a new block. FAQ blocks are
  never created. Empty lines and blocks are dropped.
- Images become empty Image blocks (alt kept, at most 160 characters) at their position, and the writer is told how
  many need uploading. The source URL is never copied: Docs (googleusercontent), Word (`file:///`) and `data:` URLs are
  not allowed image sources (D032). Images inside a table are left out, with a note.
- Tables: each becomes a Table block (100 × 12 limit as above). A bigger table, or a one-cell table (a "callout"
  box), becomes paragraphs of its rows (cells joined with ` | `), with a note for the oversized one.
- Text only: no attributes, styles, classes or HTML are kept; entities are decoded, whitespace collapsed, scripts and
  styles removed; only safe links survive (`safeHref`). Bold and italic follow the table paste, and Word's
  `mso-bidi-font-weight` / `mso-bidi-font-style` are no longer read as `font-weight` / `font-style` (they lost Word's
  ordinary bold before D047). A link inside bold or italic text is kept outside the markers (`**see** [link](/x)
  **here**`), because the page cannot show a link inside bold or italic.
- Plain text (no HTML): `# ` (title rule), `## ` H2, `###`+ H3; `- `, `* `, `• ` bullets; `1. ` / `1) ` numbers; `> `
  quote; `---`, `***`, `___` alone a divider; `__bold__` becomes `**bold**`; a Markdown table (`| a | b |` with a
  `|---|` line) becomes a Table block; everything else is paragraphs. Links that `safeHref` refuses become their text.
  Tab-separated text that is a table becomes one Table block.
- At most 300 blocks per paste: a bigger paste is refused with a message and nothing is converted. A paste that would
  take the post over 400 blocks (the save limit) is refused too.
- Where it converts: the paste area of an empty post and the "Paste article" area (converted at once, inserted at
  the end or below the block whose `+` was used); a Paragraphs, List, Quote or FAQ-answer box asks first (Editor, §5).
- Declarations are removed before parsing, for article and table pastes alike: `<!DOCTYPE …>` and any other `<!…>`,
  and processing instructions (`<?xml …?>`, Word's `<?xml:namespace … />`). Before D048 a doctype became the first
  line of text.
- **Pages and other Apple apps (D048).** Pages puts only RTF / RTFD on the clipboard, never HTML. The browser converts
  the RTF with Apple's "Cocoa HTML Writer" (HTML 4.01 strict doctype, `<meta name="Generator" content="Cocoa HTML
  Writer">`, `<p class="p1">`, `Apple-converted-space`). That HTML has no heading information (headings and body text
  share classes, and Pages marks almost everything bold) and no images (the picture is only in the RTFD, which
  browsers never expose). The studio does not guess headings from font size or bold. It detects this HTML
  (`isAppleHtml`), parses it as usual (lists, numbered lists, tables, bold, italic and links come through; everything
  else is paragraphs), and adds this note: "This was copied from Pages or another Apple app, which doesn't mark
  headings or include images. Headings came in as paragraphs: use Turn into → Heading 2 or Heading 3 on each one, and
  add images with an Image block. Copying from Google Docs or Word keeps headings." It is shown in the message, in the
  Undo paste bar, and in the "Split into blocks?" dialog when the paste goes through a text box.
- What a whole-document copy can carry for images: Google Docs gives a temporary Google address and Word a file on the
  writer's computer, so each image becomes an empty Image block in its place (the address is never used); Pages gives
  nothing, so nothing appears (with the note above). Upload those images in the Image blocks, or paste each image on
  its own (below).

**Pasting an image (D048).** Copying one image (from Pages, Word, Preview, a screenshot, a web page or Finder) and
pasting it uploads it.
- `imageFromClipboard(files, plain)` in `articlePaste.ts` picks the first JPG, PNG or WebP file, and only when the
  paste has no text (Finder's copied file name as the only text counts as no text). Word and other programs also put a
  picture of a text selection on the clipboard: a paste with text is always a text paste and never an upload. Another
  image type (GIF, HEIC…) says "Only JPG, PNG or WebP images can be pasted." The browser side reads
  `clipboardData.files` (or the `file` items).
- In an **Image block** (paste into its source field, whose placeholder says so) the image is uploaded and becomes the
  block's source; the cursor moves to Alt text. In the **paste area** (empty post or "Paste article") and in **any box
  with the formatting bar** (headings, paragraphs, lists, quotes, FAQ answers) it is uploaded into a new Image block at
  the paste area's position or right after the current block; the box's own text is not changed. The editor scrolls to
  the new block and puts the cursor in its Alt text. The featured image field accepts a pasted image the same way.
- Uploads go only through the normal path: the editor's `upload` → `uploadImage` (8 MB pick limit, resized to WebP in
  the browser, bytes checked on the server by `checkUploadedImage`). No `data:` or blob URL is ever put in a block. The
  message says "Uploading image…", then "Image uploaded. Add its alt text." or the upload's error. One paste is one
  upload and at most one block: another image paste while one is uploading is refused with "Still uploading the last
  image. Paste again when it is done."
- Alt text stays empty (the checklist warns); it is never made from the file name.
- Copying a single image inside Google Docs can put only HTML with a Google address on the clipboard. Then nothing is
  uploaded and the message says: "This image was copied as a web address, not as a file, so it cannot be uploaded
  from here. Download the image, then paste it or use Upload."

**Inline formatting** in paragraphs, list items, quotes, captions, table cells
and FAQ answers: `**bold**`, `*italic*`, `[text](url)`. Link URLs may contain one
level of parentheses. Only `/path`, `#anchor`, `http(s)://` and `mailto:` links
are rendered as links (`safeHref`); anything else, for example `javascript:`,
`//host` or `/\host` (browsers read both as another site), renders as plain text. External
links (`isExternalHref`: any http(s) link whose host is not exactly `www.sagekite.com` over https,
so `https://www.sagekite.com.evil.com` is external) get `target="_blank" rel="noopener noreferrer"`. Content is rendered as React
elements; there is no `dangerouslySetInnerHTML`.

**Automatic FAQ heading:** if a post has FAQ blocks and the block before the
first one is not a heading, `resolveBlocks()` inserts an H2
"Frequently asked questions" (id `frequently-asked-questions`) at render time.
It is not stored in `blocks`.

### 4.3 Derived `BlogPost` fields

`toBlogFields(post)` in `postUtils.ts` returns `{ guide, faqs, readingTime }`:

- `guide`: every non-empty H2 (including the automatic FAQ heading) as `{ id, title }`.
  The ids match the rendered heading ids, as `docs/blog-seo-schema.md` requires.
- `faqs`: `{ q, a }` with inline markers removed and answer lines joined by spaces.
- `readingTime`: words / 225, rounded up, at least 1: `"N min read"`.

`toBlogFields` is **not called anywhere yet**. It exists for the step that puts
studio posts on the live site (section 10).

---

## 5. Features (what the UI actually does)

### Post list
- Stat cards and status tabs: All posts, Published, Drafts, Scheduled, with counts.
- Search (title, slug, category), category filter, source filter
  ("Written in the studio" / "Already on the site").
- The existing code posts (non-draft posts from `content/blog`) are listed
  read-only with an "In code" tag and a link to the live page, so writers can
  see which slugs are taken. Counts include them.
- Studio posts show "Ready" or "N to review" (failed checklist items).
- Row actions for studio posts: Edit, Preview, Duplicate (new draft, title
  "(copy)", slug `-copy`, unfeatured, unlocked), Delete (with confirmation).
- Export downloads all studio posts as `sage-kite-blog-studio-YYYY-MM-DD.json`.
  Import reads such a file; posts with an existing `id` are replaced after a confirmation.
- Responsive: under 720px the table becomes one card per post; under 900px the
  sidebar collapses to a top bar. No horizontal page scroll at 390px.

### Editor (right-hand drawer)
- **Content tab:** title (character count), slug (`/blog/` prefix, lock icon once
  published), category, author, excerpt/meta description (count out of 160), featured
  image (path/URL or upload) with alt text, and the block builder.
- **Block builder:** add blocks at the end or below any block (`+`), move up and down,
  remove. Word count and reading time are shown.
- **Paste-first writing (D047):** an empty post shows a large paste area ("Paste your article here: …"); pasting
  converts at once (section 4.2), and typing in it starts a Paragraphs block. The normal "Add a block" menu stays below
  it. In a post with blocks, the add-block menu has **Paste article**, which opens the same area in its place. If the
  paste has a title and the post has none, it fills the title (and the slug, unless edited or locked); if the post
  already has a title, the pasted one is left out and the message says so. After a conversion a message gives the
  counts ("Pasted 2 headings, 4 paragraphs, 2 lists, 1 table, 1 image") and how many images need uploading, a bar above
  the blocks repeats it with **Undo paste** (restores the previous blocks, title and slug in one step; offered only
  while nothing else has changed), and the editor scrolls to the first new block.
- **Pasting into a box:** in a Paragraphs, List, Quote or FAQ-answer box, a paste that is more than a single paragraph
  (2+ blocks, or any heading, list, table, quote or divider) is held back and "Split into blocks?" asks first, with
  the counts: **Split into blocks** inserts them below the current block; **Paste as text** (also Escape or a click
  outside) pastes the plain text as before. A single paragraph, or a single block of the box's own kind (a list into a
  List box), pastes as before with no dialog. A paste that is only a table keeps the "Paste as a table?" dialog. A
  paste from Pages shows the Pages note in the dialog (section 4.2).
- **Pasting an image** (D048): a single image (no text) pasted into an Image block's source field, the paste area or
  any box with the formatting bar is uploaded; see "Pasting an image" in section 4.2.
- **Formatting bar** on Paragraphs, List, Quote and FAQ-answer boxes and on headings: **Turn into** (Paragraph,
  Heading 2, Heading 3, Bulleted list, Numbered list, Quote; not on FAQ answers), **Bold**, **Italic**, **Link**,
  **Remove link**, **Clear formatting**. Shortcuts in a box: `Cmd/Ctrl + B`, `I`, `K` (`Cmd/Ctrl + S` still saves).
  - Turn into acts on the selected lines (whole lines), or the whole block with no selection. The block is split into
    lines before, the converted lines and lines after, each keeping its type; each line turned into a heading is its
    own heading (bold or italic on it is removed); a heading turned into anything else is one line; list markers are
    removed. Bulleted ↔ numbered flips the whole list. The result merges with a neighbouring block of the same kind
    (paragraphs, same-kind lists, quotes without attribution). A quote's attribution stays with its last part, or
    follows the text as a `— name` line. Image, Table, Video, FAQ question and Divider blocks are never changed.
  - Bold and Italic toggle: inside existing markers they remove them; otherwise they wrap the selection line by line,
    with links kept outside. Bold wins: Bold replaces italic, and bold text cannot be made italic.
  - Link opens a small address field under the bar (prefilled when the cursor is in a link, which it then updates).
    Only what `safeHref` accepts is allowed; otherwise the reason is shown under the field. A link inside bold or
    italic text splits it. Remove link replaces every link touching the selection (or the one under the cursor) with
    its text. Clear formatting removes bold and italic markers in the selection and leaves links.
  - The bar wraps on narrow screens and fits at 375 px; the markers stay visible in the boxes.
- **SEO tab:** SEO title with a count of the full Google title out of 60, meta
  description (the same `excerpt` value), **Tags** (shown on the post), then **SEO keywords**
  (not shown on the post): focus keyword and secondary keywords, read-only canonical URL,
  a Google result preview and a social share preview.
- **Settings tab:** status, "Publish on" date and time (scheduled only), published date,
  last updated (with a "Today" button), related platform, featured checkbox (the hint
  names the post currently featured in code).
- **Sidebar:** the guide outline (H2s with their `#id`, H3s indented; click to jump to the
  block), the checklist, Preview and Delete buttons.
- Buttons by status: Draft → "Save draft" and "Publish"; Scheduled → "Save schedule";
  Published → "Save changes".
- `Cmd/Ctrl + S` saves with the current status. Closing with unsaved changes asks to
  discard; leaving the page with unsaved changes triggers the browser's warning.
  Clicking the dark backdrop closes the drawer (with the same check).
- A new post is not stored until its first save.

### Saving rules (`commit()` in `BlogStudio.tsx`)
- Every save needs a title.
- Saving as a draft skips the checklist, so drafts may have duplicate or empty slugs.
- Publishing or scheduling is **blocked** until every required checklist item passes.
- If recommended items fail **when the status changes** (for example, Draft to Published),
  a dialog lists them with "Publish anyway" / "Schedule anyway". Later saves of an
  already-published post do not show the dialog.
- Success messages say the live site has not changed.

### Checklist (`checklist()` in `postUtils.ts`)

Required (blocks publishing): title; slug matches `^[a-z0-9]+(?:-[a-z0-9]+)*$`; slug
not used by a code post or another studio post; excerpt; category; featured image;
featured image alt text; at least one non-divider block; scheduled date (scheduled only).

Recommended (warns): meta description 70–160 characters; Google title (title or SEO
title + ` | Sage Kite`) 60 characters or fewer; at least one H2; 3–6 tags; every image
has a source and alt text; every FAQ has a question and an answer; every video is a valid
YouTube link; if a focus keyword is set, it appears in the Google title, the meta
description, a heading and the first line of the first paragraph block, and 2–5 secondary
keywords are expected; each secondary keyword appears in the article text (checked when any are set); no HTML entities
like `&amp;` in title, SEO title, excerpt, alt text or tags; no `glasspane.pages.dev` links.

### Preview
- Full page (not a modal) so the real `BlogGuide` scrolling works. A sticky bar says
  "Preview · <status> · not on the live site"; "Back to editor" or `Escape` returns.
- Uses the live markup and classes: category chip, H1, excerpt, byline with avatar,
  date and reading time, 16:9 hero image, `.article-content`, guide sidebar, tags.
- It does not render the site header and footer, related posts or the booking CTA; a
  note says these appear on the live page.
- An Image block without a source shows as a dashed 16:9 box, "Image to upload", with its alt text and caption if any
  (D048), so empty Image blocks left by a pasted article are visible. Only in the preview (`StudioArticle` with
  `preview`); a published page renders nothing for an image without a source, as before.

### Images (`sanityStudioStore.uploadImage`)
- JPG, PNG or WebP, up to 8 MB. Resized in the browser to at most 1600px wide and
  re-encoded as WebP at quality 0.82, then stored as a data URL inside the post.
- Paths and URLs can be typed instead of uploading, and an image can be pasted (section 4.2, "Pasting an image").
- The studio uses plain `<img>` (not `next/image`) because sources can be data URLs or
  any external URL, which `next/image` would reject without `remotePatterns`.

---

## 6. How saving works today

`getStudioStorage()` in `components/blog-studio/server.ts` picks the store on every
request and the sidebar says which one is active:

| Condition | Store | Sidebar says |
|---|---|---|
| Team sign-in not set up or invalid (any environment), or Vercel Preview | None: locked | Full-screen dialog "Blog Studio unavailable" (no reason is shown) |
| Team sign-in set up, no valid session (never signed in, expired, password changed) | None: locked | Full-screen "Sign in to continue" dialog |
| Signed in, but the write guard refuses (project, dataset or token) | None: blocked | "Publishing is blocked" + the reason, to signed-in users only |
| Signed in and the write guard passes | Sanity | "Saved in Sanity" + dataset name + "Sign out" |

There is no browser-only store any more (D035). The sign-in dialog is `LoginGate.tsx`: it
cannot be dismissed (no backdrop click, no Escape, no close button), the studio behind it is
`inert` so nothing can be clicked or reached with Tab, and focus stays inside it. If a Server
Action reports that the session has ended while the page is open, the dialog comes back over
the studio without losing the post being edited; signing in again continues where the person was.
The server re-checks the session on every action; the dialog is not what protects Sanity.

### Sanity store (`sanityStudioStore` → `actions.ts`)
- `list()` fetches every `blogPost` document (drafts included) with the token.
- `save()` first uploads any inline `data:` images (from browser storage or an import)
  and swaps in their CDN URLs, then the action writes the document under `<id>` (published)
  or `drafts.<id>` (draft, scheduled) and deletes the other copy in one transaction.
  Featuring a post unfeatures other Sanity posts in the same transaction.
- `remove()` deletes both `<id>` and `drafts.<id>`. Image assets are not deleted.
- `uploadImage()` resizes in the browser, then uploads the WebP to Sanity's asset store
  (largest accepted after resizing: 3.5 MB) and returns its `cdn.sanity.io` URL. The server
  checks the file's bytes before uploading (see §10b, "Image uploads").
- **Migrating browser posts:** in a browser that has posts, Export; then, running locally
  with Sanity configured, Import that file. Each post is saved to Sanity and its images uploaded.
- Tested end to end on the `development` dataset on 20 October 2026 (D023): 20/20
  checks passed, covering upload, draft, reload in a fresh browser, publish, unpublish and
  delete, plus draft privacy without a token. Test data was removed afterwards.

---

## 7. Rules for anyone changing the studio

- Keep the URL out of `robots.ts`, `sitemap.ts` and every page (AGENTS.md "Do not").
- Brand rules apply: `var(--…)` tokens only, no hex, no other fonts, no Tailwind
  (docs/brand.md).
- Keep `StudioArticle.tsx` free of hooks and `'use client'`, so it can render on the server.
- Keep the publishing rules in `checklist()` in line with `docs/blog-seo-schema.md`
  and `docs/new-page-checklist.md`. If those docs change, update `checklist()`.
- UI code must talk to `studioStore` only, never to `localStorage` or a backend directly.
- When you change how the studio works, update this file, AGENTS.md and decision.md.
- Verify: `npx tsc --noEmit`, `npm run build`, then open the studio and run the flow:
  create, add blocks, publish, preview, reload. Check that the page still has
  `noindex` and `no-referrer` in its source.

---

## 8. Adding authentication and admin access

Do this **before** any backend can publish. Recommended order: authentication,
then the backend store (section 9), then rendering on the live site (section 10).

### 8.1 Principles (from the Next.js 16 docs in `node_modules/next/dist/docs/`)

- Next.js 16 renamed `middleware.ts` to **`proxy.ts`** (export `proxy`). Use it only
  to redirect signed-out visitors away from the studio.
- The proxy docs say to **verify authentication and authorisation inside every Server
  Function** rather than relying on the proxy alone, because a matcher change can
  silently remove its coverage. So every server action that reads or writes studio
  data must call a `requireAdmin()` check itself.
- `cookies()` is async in Next 16: `const cookieStore = await cookies()`.
- Keep every secret (Supabase service role key, Sanity write token, auth secrets)
  server-only: no `NEXT_PUBLIC_` prefix, never imported into a `'use client'` file.
  Add the variables to `.env.example` and Vercel; this site currently has only
  `NEXT_PUBLIC_GHL_WEBHOOK_URL`.

### 8.2 Who counts as an admin

Choose one, and keep it outside the client bundle:

1. **Admin table (recommended with Supabase):** an `admin_users` table keyed by the
   auth user id, with a role (`admin` can delete and publish; `editor` can write drafts).
   Granting access means inserting that person's user id. SQL is in 9.2.
2. **Allowlist environment variable:** `STUDIO_ADMIN_EMAILS="a@sagekite.com,b@agency.com"`,
   checked in `requireAdmin()`. Simple, but changing it needs a redeploy.
3. **Provider roles:** with Clerk or Auth.js, store a role in user metadata or a session
   callback and check it in `requireAdmin()`.

Roles are not modelled in the current UI. If you add them, hide Delete and Publish for
editors **and** enforce the same rule in the server actions.

### 8.3 Choosing an auth provider

| Option | Fits when | Notes |
|---|---|---|
| Supabase Auth | Supabase is the database | Same project for users, posts and images; row level security can use `auth.uid()` |
| Auth.js (NextAuth) | Sanity is the CMS, or no vendor lock-in is wanted | Email magic link or Google sign-in; you write the role check |
| Clerk | Hosted sign-in UI and user management are wanted | Paid tiers; organisation and role features |
| Sanity Studio's own login | Replacing this UI with Sanity Studio | Sanity manages its own members; see 9.3 |

Check each provider's current docs for Next.js 16 support before installing. None
is installed today; the only dependencies are next, react, react-dom and lucide-react.

### 8.4 Sketch: Supabase Auth

These sketches are **untested**. Confirm APIs against the current
`@supabase/supabase-js` and `@supabase/ssr` docs.

```ts
// lib/supabase/server.ts — server-side client bound to the request cookies
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // or the newer "publishable" key
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (list) => {
          try {
            list.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // Called from a Server Component, where cookies cannot be set. Safe to ignore
            // if the proxy refreshes the session.
          }
        },
      },
    },
  );
}
```

```ts
// components/blog-studio/auth.ts — the check every studio server action calls
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function requireAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser(); // validates with Supabase, not just the cookie
  if (!user) throw new Error('Not signed in.');
  const { data: admin } = await supabase
    .from('admin_users')
    .select('role')
    .eq('user_id', user.id)
    .maybeSingle();
  if (!admin) throw new Error('This account does not have studio access.');
  return { supabase, user, role: admin.role as 'admin' | 'editor' };
}
```

```ts
// proxy.ts (project root) — redirect only; the real check is requireAdmin()
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
  // Refresh the Supabase session cookie here (see @supabase/ssr docs), then:
  const signedIn = request.cookies.getAll().some((c) => c.name.startsWith('sb-'));
  if (!signedIn) {
    return NextResponse.redirect(new URL('/sk-studio-ufn5xdafhll7/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/sk-studio-ufn5xdafhll7', '/sk-studio-ufn5xdafhll7/((?!login).*)'],
};
```

Then:
- Add a login page at `app/sk-studio-ufn5xdafhll7/login/page.tsx` (email magic link
  or password), also with `robots: { index: false }`.
- In `app/sk-studio-ufn5xdafhll7/page.tsx`, call `requireAdmin()` (or check the user)
  and `redirect()` to login when it fails, so the UI never renders for non-admins.
- Disable public sign-ups in Supabase, or rely on `admin_users`: a signed-up user who
  is not in that table gets no access.
- With real auth in place, the path may be renamed (for example `/admin`). Keep
  `noindex` and keep it out of robots.txt and the sitemap.

---

## 9. Adding a backend store

### 9.1 How it plugs in

The UI calls only the `StudioStore` interface in `components/blog-studio/store.ts`:

```ts
interface StudioStore {
  readonly label: string;               // shown in the UI, e.g. 'Sanity'
  readonly savedIn: string;             // end of save messages, e.g. 'to Sanity'
  list(): Promise<StudioPost[]>;
  save(post: StudioPost): Promise<StudioPost>; // returns the post as stored
  remove(id: string): Promise<void>;
  uploadImage(file: File): Promise<string>; // returns the URL to store in src
}
```

Recommended shape for both Supabase and Sanity:

1. Write **Server Actions** (`'use server'`) that call `requireAdmin()`, validate input
   on the server and talk to the backend with server-only credentials.
2. Write a client-side `StudioStore` whose methods call those actions.
3. Change the last line of `store.ts` to `export const studioStore = <new store>;`.

```ts
// components/blog-studio/actions.ts — sketch
'use server';
import { revalidatePath } from 'next/cache';
import { posts as codePosts } from '@/content/blog';
import { SLUG_PATTERN } from './postUtils';
import { requireAdmin } from './auth';
import type { StudioPost } from './types';

export async function saveStudioPostAction(post: StudioPost) {
  const { role } = await requireAdmin();
  // The browser checklist can be bypassed, so repeat the important rules here.
  if (!SLUG_PATTERN.test(post.slug)) throw new Error('Invalid slug.');
  if (codePosts.some((p) => p.slug === post.slug)) throw new Error('Slug is used by a code post.');
  if (post.status !== 'draft' && role !== 'admin') throw new Error('Only admins can publish.');
  // ...write to Supabase or Sanity (9.2 / 9.3)...
  revalidatePath('/blog');
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath('/sitemap.xml');
}
```

```ts
// in store.ts — sketch
import { saveStudioPostAction, listStudioPostsAction, deleteStudioPostAction, uploadImageAction } from './actions';

export const serverStudioStore: StudioStore = {
  label: 'the shared database',
  list: () => listStudioPostsAction(),
  save: (post) => saveStudioPostAction(post),
  remove: (id) => deleteStudioPostAction(id),
  async uploadImage(file) {
    const form = new FormData();
    form.append('file', file);
    return uploadImageAction(form);
  },
};
```

Notes:
- `revalidatePath(path, type?)` runs in Server Functions and Route Handlers.
  `revalidateTag` now takes two arguments (`revalidateTag(tag, 'max')`); the
  one-argument form is deprecated. `updateTag` also exists. Read
  `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/` before choosing.
- **Server Action bodies are capped at 1 MB by default** (`serverActions.bodySizeLimit`
  in `next.config.ts`). Upload images separately and store their URL in the post.
  Never send `data:` images inside the post JSON.
- Once images live on a backend, `uploadImage` should return that URL. The browser
  resize-to-WebP step in `store.ts` (`toWebpDataUrl`) can be kept to shrink files before
  upload, by converting its output to a Blob.
- Done (D030, D035): the "Saved in this browser only" sidebar note and the "live site has not
  changed" messages were removed from `BlogStudio.tsx`.

### 9.2 Supabase

Sketch schema. Columns needed for queries are stored separately from the full post JSON:

```sql
create table public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  created_at timestamptz not null default now()
);

create table public.studio_posts (
  id uuid primary key,
  slug text not null unique,
  status text not null check (status in ('draft', 'published', 'scheduled')),
  published_at date,
  scheduled_for timestamptz,
  featured boolean not null default false,
  post jsonb not null,                 -- the full StudioPost
  saved_at timestamptz not null default now(),
  saved_by uuid references auth.users (id)
);

alter table public.admin_users enable row level security;
alter table public.studio_posts enable row level security;

-- Signed-in users can see their own admin row (needed by the policies below).
create policy "read own admin row" on public.admin_users
  for select to authenticated using (user_id = auth.uid());

-- Admins and editors can read and write every post.
create policy "studio users manage posts" on public.studio_posts
  for all to authenticated
  using (exists (select 1 from public.admin_users a where a.user_id = auth.uid()))
  with check (exists (select 1 from public.admin_users a where a.user_id = auth.uid()));

-- The public site may read live posts only.
create policy "public reads live posts" on public.studio_posts
  for select to anon
  using (status = 'published' or (status = 'scheduled' and scheduled_for <= now()));
```

- Grant access: create the user in Supabase Auth, then
  `insert into public.admin_users (user_id, role) values ('<auth user id>', 'admin');`
- Images: a Supabase Storage bucket (for example `blog-images`) with public read and
  upload restricted to admin users; `uploadImageAction` uploads and returns the public URL.
- Draft slugs: `slug` is `unique`, but the current UI allows duplicate slugs in drafts.
  Either relax the constraint to live posts only, or make the UI require a unique slug
  on every save.
- The row and the `post` JSON both hold `slug`, `status` and so on; write both from one
  place so they cannot drift.

### 9.3 Sanity

**The user has chosen Sanity with this dashboard moved to `/admin/blogs` behind
sign-in. The full plan is [sanity.md](sanity.md); it supersedes this section where
they differ.**

Two possible approaches:

- **A. Keep this UI, store in Sanity.** Define a `studioPost` document type whose fields
  mirror `StudioPost`, with `blocks` as an array of objects. Sanity array items need a
  `_key`, so map `block.id` to `_key` when saving and back when loading. Use
  `@sanity/client` (or `next-sanity`) **on the server only** with a write token. In the
  server actions, use `client.createOrReplace({ _id: post.id, _type: 'studioPost', ... })`,
  `client.delete(id)` and `client.assets.upload('image', file)` (store the returned asset
  URL). Read with GROQ, for example
  `*[_type == "studioPost" && status == "published"]`. Confirm these calls against the
  current Sanity client docs.
- **B. Replace this UI with Sanity Studio.** Sanity hosts its own editor and login.
  Only `StudioArticle` and the mapping in section 10 would be reused; you would rebuild
  the checklist rules as Sanity validation rules. Bigger change; decide with the user first.

Cautions:
- A **public** Sanity dataset can be read without a token, which would expose drafts.
  Use a private dataset with a read token on the server, or accept that drafts are public.
- Sanity has no login for this site's own pages. With approach A you still need
  section 8 (Auth.js, Clerk or Supabase Auth) to protect the studio.
- Allow `cdn.sanity.io` in `images.remotePatterns` (section 10).

### 9.4 Things both backends must handle

- **Time zones:** `scheduledFor` is a `datetime-local` value with no zone, for example
  `2026-11-01T09:00`. On Vercel the server runs in UTC, so convert it in the **browser**
  (`new Date(value).toISOString()`) before sending it, and store a `timestamptz` / ISO string.
- **Moving existing browser posts:** export JSON from each browser that has posts, then
  import it once the new store is live. Import calls `save()` for each post. Re-upload any
  `data:` images and replace their `src` first; they are too big for Server Actions and
  should not live in the database.
- **Featured:** the studio unfeatures other studio posts, but `what-is-dubsado` is
  `featured: true` in code. When studio posts go live, decide which source wins, or
  remove the flag from the code post. AGENTS.md: only one post may be featured.

---

## 10. Showing studio posts on the live site (built, D024)

Published Sanity posts are rendered with the same components as code posts.

| Piece | File | What it does |
|---|---|---|
| Selectors | `content/blog/live.tsx` (server-only) | `getPublishedPosts()` merges code posts with published Sanity posts, newest first; `getFeaturedPost()`, `getSanityPostBySlug()`, `getSanityPostSlugs()`. Sanity results are deduplicated per request with React `cache` |
| Mapping | `toBlogPost()` in `content/blog/live.tsx` | Rejects anything not `published`, with an invalid slug, no title/excerpt/category, no `YYYY-MM-DD` publish date, or a featured image that is neither a `/public` path nor this project's Sanity CDN. Adds `guide`, `faqs`, `readingTime` via `toBlogFields()`; body = `<StudioArticle>` |
| Route | `app/blog/[slug]/page.tsx` | `generateStaticParams` (published slugs), `generateMetadata` (`buildBlogMetadata`), `notFound()` for unknown slugs. Code post folders win over the dynamic route; a Sanity post reusing a code slug is ignored |
| Listing, related, sitemap | `app/blog/page.tsx`, `components/blog/BlogArticleLayout.tsx`, `app/sitemap.ts` | Now `async`, reading `content/blog/live.tsx` |
| Images | `next.config.ts` (`images.remotePatterns`: `cdn.sanity.io/images/<project>/**`, no query), `lib/sanity/image.ts` | Hero and cards use `next/image`; article images get a Sanity CDN `srcSet` (720/1080/1440, `auto=format`) with width/height; og/twitter image is a 1200x675 crop |
| Metadata, JSON-LD | `components/blog/blogMetadata.ts`, `blogJsonLd.ts` | Image URLs via `shareImageUrl` / `absoluteImageUrl`: unchanged for `/public` paths |
| Freshness | `app/blog/layout.tsx`, `app/sitemap.ts` (`revalidate = 60`); `revalidatePath('/blog', 'layout')` + `revalidatePath('/sitemap.xml')` in `actions.ts` | Pages regenerate at most every 60 s; saves and deletes in the studio refresh them on demand. New slugs render on first request |

Draft safety: the public read client has **no token** (drafts are unreadable), the query
filters `status == "published"` outside `drafts.**`, and `toBlogPost()` checks again.
If Sanity is not configured, only code posts are shown; if a Sanity request fails, the
error is thrown so that Next.js keeps serving the last good page during revalidation
(a failing build if Sanity is down during `next build` with the env vars set).

Still open: scheduled posts are never published automatically (they stay drafts until
saved as published); content approval for studio publishing (AGENTS.md) must be agreed
before the SEO team publishes; the Sanity env vars have not been added to Vercel as part of this work.

---

## 10b. Security headers, errors, image sources (D032) and image uploads (D033)

- **Headers.** The studio page and its sign-in endpoint send `X-Frame-Options: DENY`, a Content-Security-Policy of
  only `frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'`, `X-Content-Type-Options:
  nosniff`, `Referrer-Policy: no-referrer`, `X-Robots-Tag: noindex, nofollow, noarchive` and a restrictive
  `Permissions-Policy` (`next.config.ts`). None of them limits scripts, images, styles, fonts, connections or
  frames, so Next's inline scripts, the YouTube preview, cdn.sanity.io images and `data:` previews
  keep working. A **full CSP** was not added: it needs an allowlist for exactly those (`script-src` with Next's
  inline scripts; Google Analytics no longer loads here (D038), so googletagmanager.com is not needed; `img-src` with `data:` and cdn.sanity.io,
  `frame-src https://www.youtube-nocookie.com`). If wanted later, send it first as
  `Content-Security-Policy-Report-Only`, watch the browser console while using every studio feature, then enforce.
  Public pages carry no extra headers.
- **Errors.** A Server Action returns only messages written in this app (`SafeError`, validation, guard, sign-in).
  A failure from Sanity or the network becomes a generic sentence ("Could not save the post to Sanity. Nothing was
  saved. Try again."); the server log gets the action name and an HTTP status code, never the error text. A failed
  cache refresh after a successful write is logged, not shown: the post is saved and pages catch up within 60 s.
- **Image sources.** A post may use only a file under `/images/` (or one at the site root, like `/aryan_t.jpeg`) or an
  unmodified upload to this project's Sanity CDN (`isAllowedImageSrc`, `lib/sanity/image.ts`). The server refuses
  anything else in the featured image, author image and image blocks (no other host, query string, `data:` or
  `javascript:`), and published pages render only allowed sources. The studio preview alone also shows raster
  `data:` images that were just picked in this browser. The image field no longer advertises pasting a URL: use
  Upload or a site path.
- **Image uploads.** The server never trusts the content type or file name the browser sends. `uploadStudioImageAction`
  reads the file and accepts it only when the declared type is JPG, PNG or WebP, the bytes are a complete image of
  that format (signature at the start, JPEG end marker, PNG `IEND`, WebP RIFF size equal to the file size) and the two
  agree (`checkUploadedImage`, `lib/sanity/imageUpload.ts`). Anything else (SVG, GIF, HTML, a PNG labelled WebP, an
  image with data appended) is refused with a message and never reaches Sanity. Sanity gets the detected type and a
  file name reduced to letters, digits and dashes with the detected extension, so a PNG from a browser that cannot
  encode WebP is stored as `.png`.

---

## 11. Known limitations (today)

- One shared password, no per-person accounts: nobody is recorded as the publisher. The sign-in brake (8 wrong passwords per client and 40 in total per 15 minutes) is kept in memory per server instance and counts clients by the address Vercel supplies (nothing is trusted off Vercel), so it slows guessing but is not a shared, durable limit. That is a Vercel Firewall rate-limit rule on the studio URL (docs/sanity.md, "Login rate limit"); until it is set, rely on a strong passphrase (12+ characters, not guessable, D034; longer is better).
- Sessions are stateless and last 7 days. Signing out clears only that browser's cookie; to end every session
  (for example when someone leaves or a device is lost), rotate `STUDIO_SESSION_SECRET` or `STUDIO_PASSWORD`.
- "Scheduled" does not publish at the scheduled time (no cron job): publish the post by hand on the date.
- No roles; anyone signed in has every action.
- No autosave and no version history; edits are saved only with Save, Publish or `Cmd/Ctrl+S`.
- Two people should not edit the same post at once: posts are shared through Sanity, but there is no conflict
  handling, so the last save wins.

## 11a. Open security findings (D036, proposed, not implemented)

From the review of 21 October 2026. None of these lets someone without the password publish; each narrows a
remaining edge. Details and reasoning are in decision.md D036.

1. ~~Google Analytics loads on the studio page.~~ **Fixed (D038):** the tag is skipped on the studio (see §2).
2. The cookie's path limit is not isolation: any script on `www.sagekite.com` can request the studio path with the
   editor's cookie. Proposed: an enforced CSP with `script-src` (§10b, Report-Only first); long term, a subdomain.
3. 7-day sessions with no per-session revocation. Proposed: shorter sessions and/or a session version (needs approval).
4. The global brake (40 wrong passwords per 15 minutes per instance) can lock the team out, even with the right
   password. Proposed: raise it once the Vercel Firewall rule is confirmed.
5. The Editor token is project-wide (both datasets). Proposed: separate local and Production tokens, rotation,
   dataset-scoped roles if the Sanity plan allows.
6. ~~`safeHref` accepts `/\host` and treats `https://www.sagekite.com.<other>` as internal.~~ **Fixed (D037).**

To confirm on Vercel: the login rate-limit rule exists, and `SANITY_API_WRITE_TOKEN` / `STUDIO_*` are Production-only.
- The preview omits the site header, footer, related posts and the booking CTA.
- Inline formatting is limited to bold, italic and links; there are no nested lists,
  H4 headings or custom diagrams (`FieldDiagram` is available only to posts written in code).
