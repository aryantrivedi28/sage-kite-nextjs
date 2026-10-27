import React from 'react';
import type { StudioBlock, StudioSource } from './types';
import { isExternalHref, parseInline, safeHref, type InlineNode } from './inline';
import { SOURCES_HEADING, headingAnchors, lines, listItems, resolveBlocks, sourceItems, tableRows, youtubeId } from './postUtils';
import { imageSrcForRender, isSanityImage, sanityImageSize, sanityImageUrl } from '@/lib/sanity/image';

/** Widths offered for article images (the article column is 720px wide). */
const ARTICLE_IMAGE_WIDTHS = [720, 1080, 1440];

/** The preview's box for an Image block that has no image yet: the 16:9 shape of a featured image. */
const IMAGE_PLACEHOLDER_STYLE: React.CSSProperties = {
  aspectRatio: '16 / 9',
  display: 'grid',
  placeContent: 'center',
  gap: 6,
  padding: 16,
  textAlign: 'center',
  border: '2px dashed var(--sage)',
  borderRadius: 'var(--r)',
  background: 'var(--pale-sage)',
  color: 'var(--sage)',
};

/*
 * Renders studio blocks as the plain HTML elements a blog post's `content`
 * uses (docs/blog-seo-schema.md §1.3), so the existing .article-content styles
 * format them. No hooks: usable from server components when posts go live.
 */

/** A link: external ones open in a new tab with rel="noopener noreferrer". `href` has passed safeHref. */
function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return isExternalHref(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <a href={href}>{children}</a>
  );
}

function InlineNodes({ nodes }: { nodes: InlineNode[] }) {
  return (
    <>
      {nodes.map((n, i) => {
        switch (n.type) {
          case 'text': return <React.Fragment key={i}>{n.text}</React.Fragment>;
          case 'code': return <code key={i}>{n.text}</code>;
          case 'strong': return <strong key={i}><InlineNodes nodes={n.children} /></strong>;
          case 'em': return <em key={i}><InlineNodes nodes={n.children} /></em>;
          case 'link': return <Link key={i} href={n.href}><InlineNodes nodes={n.children} /></Link>;
        }
      })}
    </>
  );
}

/**
 * Text with **bold**, *italic*, ***both***, `code` and [text](url) (the grammar in inline.ts, D049). Unsafe links
 * render as their text; anything that does not parse is literal text, never HTML.
 */
export function Inline({ text }: { text: string }) {
  return <InlineNodes nodes={parseInline(text)} />;
}

type ListNode = { text: string; children: ListNode[] };

/** List items with levels as a tree: each level is a list inside the item before it. */
function listTree(items: { level: number; text: string }[]): ListNode[] {
  const root: ListNode[] = [];
  const path: ListNode[] = [];
  for (const { level, text } of items) {
    const node = { text, children: [] };
    (level === 0 ? root : path[level - 1].children).push(node);
    path[level] = node;
    path.length = level + 1;
  }
  return root;
}

/** A list and its sub-lists, all of the list's own type. */
function ListNodes({ nodes, ordered }: { nodes: ListNode[]; ordered: boolean }) {
  const L = ordered ? 'ol' : 'ul';
  return (
    <L>
      {nodes.map((n, i) => (
        <li key={i}>
          <Inline text={n.text} />
          {n.children.length > 0 && <ListNodes nodes={n.children} ordered={ordered} />}
        </li>
      ))}
    </L>
  );
}

/** List items with levels as nested lists of one type (the studio's read-only boxes use it too). */
export function NestedList({ items, ordered }: { items: { level: number; text: string }[]; ordered: boolean }) {
  return <ListNodes nodes={listTree(items)} ordered={ordered} />;
}

/** One source: "Publisher: Title, date", with the title linked when the link is safe. Empty parts are left out. */
function Source({ item }: { item: StudioSource }) {
  const publisher = item.publisher.trim();
  const url = item.url.trim();
  const href = url ? safeHref(url) : null;
  const title = item.title.trim() || (href ? url : '');
  const date = item.date.trim();
  return (
    <>
      {publisher && <span className="article-source-meta">{publisher}{title ? ':' : ''}</span>}
      {publisher && title && ' '}
      {title && (href ? <Link href={href}>{title}</Link> : title)}
      {date && (publisher || title) && ', '}
      {date && <span className="article-source-meta">{date}</span>}
    </>
  );
}

function Block({ block, anchor, preview }: { block: StudioBlock; anchor?: string; preview: boolean }) {
  switch (block.type) {
    case 'heading': {
      if (!block.text.trim()) return null;
      const H = block.level === 2 ? 'h2' : block.level === 3 ? 'h3' : 'h4';
      return <H id={anchor}><Inline text={block.text} /></H>;
    }
    case 'text':
      return (
        <>
          {lines(block.text).map((l, i) => (
            <p key={i}><Inline text={l} /></p>
          ))}
        </>
      );
    case 'list': {
      const items = listItems(block.items);
      if (!items.length) return null;
      return <NestedList items={items} ordered={block.ordered} />;
    }
    case 'image': {
      // Studio preview only: show where an image is still to be uploaded (a pasted article leaves empty Image
      // blocks, decision.md D048). Published pages render nothing for an image without a source.
      if (preview && !block.src.trim()) {
        return (
          <figure>
            <div style={IMAGE_PLACEHOLDER_STYLE}>
              <strong>Image to upload</strong>
              {block.alt.trim() && <span style={{ fontSize: '0.875rem' }}>{block.alt.trim()}</span>}
            </div>
            {block.caption.trim() && <figcaption><Inline text={block.caption} /></figcaption>}
          </figure>
        );
      }
      // Only this site's files and this project's Sanity uploads are ever rendered (lib/sanity/image.ts).
      const src = imageSrcForRender(block.src, preview);
      if (!src) return null;
      // Sanity uploads are resized by Sanity's CDN (format chosen per browser); site files render as given.
      const size = isSanityImage(src) ? sanityImageSize(src) : null;
      return (
        <figure>
          {size ? (
            <img
              src={sanityImageUrl(src, { w: 1440, fit: 'max' })}
              srcSet={ARTICLE_IMAGE_WIDTHS.map((w) => `${sanityImageUrl(src, { w, fit: 'max' })} ${w}w`).join(', ')}
              sizes="(max-width: 760px) 100vw, 720px"
              width={size.width}
              height={size.height}
              style={{ height: 'auto' }}
              alt={block.alt}
              title={block.alt}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <img src={src} alt={block.alt} title={block.alt} loading="lazy" />
          )}
          {block.caption.trim() && <figcaption><Inline text={block.caption} /></figcaption>}
        </figure>
      );
    }
    case 'quote':
      if (!block.text.trim()) return null;
      return (
        <blockquote>
          {lines(block.text).map((l, i) => <p key={i}><Inline text={l} /></p>)}
          {block.cite.trim() && <p>— {block.cite.trim()}</p>}
        </blockquote>
      );
    case 'table': {
      const [head, ...body] = tableRows(block.rows);
      if (!head) return null;
      return (
        <table>
          <thead>
            <tr>{head.map((c, i) => <th key={i}><Inline text={c} /></th>)}</tr>
          </thead>
          <tbody>
            {body.map((row, r) => (
              <tr key={r}>
                {head.map((_, c) => <td key={c}><Inline text={row[c] ?? ''} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    case 'video': {
      const id = youtubeId(block.url);
      if (!id) return null;
      return (
        <figure>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={block.title.trim() || 'YouTube video'}
            loading="lazy"
            // YouTube needs the embedding site's origin (Error 153 without it). Set here because
            // the studio page uses `no-referrer`; this sends only the origin, never the URL path.
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block', width: '100%', aspectRatio: '16 / 9', border: 0 }}
          />
          {block.title.trim() && <figcaption>{block.title.trim()}</figcaption>}
        </figure>
      );
    }
    case 'faq':
      if (!block.question.trim()) return null;
      return (
        <>
          <h3><Inline text={block.question} /></h3>
          {lines(block.answer).map((l, i) => <p key={i}><Inline text={l} /></p>)}
        </>
      );
    case 'sources': {
      const items = sourceItems(block);
      if (!items.length) return null;
      return (
        <>
          <h2 id={anchor}>{block.heading.trim() || SOURCES_HEADING}</h2>
          <ol className="article-sources">
            {items.map((item) => <li key={item.id}><Source item={item} /></li>)}
          </ol>
        </>
      );
    }
    case 'divider':
      return <hr />;
  }
}

/** The article body. Place inside an element with className="article-content". */
/** `preview` is true only in the studio, where images picked in this browser are shown before they are uploaded. */
export function StudioArticle({ blocks, preview = false }: { blocks: StudioBlock[]; preview?: boolean }) {
  const resolved = resolveBlocks(blocks);
  const anchors = headingAnchors(resolved);
  return (
    <>
      {resolved.map((b) => (
        <Block key={b.id} block={b} anchor={anchors.get(b.id)} preview={preview} />
      ))}
    </>
  );
}
