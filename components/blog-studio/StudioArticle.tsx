import React from 'react';
import type { StudioBlock } from './types';
import {
  INLINE_PATTERN,
  LINK_PATTERN,
  headingAnchors,
  lines,
  listItems,
  resolveBlocks,
  safeHref,
  tableRows,
  youtubeId,
} from './postUtils';

/*
 * Renders studio blocks as the plain HTML elements a blog post's `content`
 * uses (docs/blog-seo-schema.md §1.3), so the existing .article-content styles
 * format them. No hooks: usable from server components when posts go live.
 */

/** Text with **bold**, *italic* and [text](url). Unsafe links render as text. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(INLINE_PATTERN);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return part;
        if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith('[')) {
          const m = part.match(LINK_PATTERN);
          const href = m && safeHref(m[2]);
          if (!m || !href) return m ? m[1] : part;
          const external = /^https?:\/\//i.test(href) && !href.startsWith('https://www.sagekite.com');
          return external ? (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">{m[1]}</a>
          ) : (
            <a key={i} href={href}>{m[1]}</a>
          );
        }
        return <em key={i}>{part.slice(1, -1)}</em>;
      })}
    </>
  );
}

function Block({ block, anchor }: { block: StudioBlock; anchor?: string }) {
  switch (block.type) {
    case 'heading': {
      if (!block.text.trim()) return null;
      const H = block.level === 2 ? 'h2' : 'h3';
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
      const L = block.ordered ? 'ol' : 'ul';
      return <L>{items.map((t, i) => <li key={i}><Inline text={t} /></li>)}</L>;
    }
    case 'image':
      if (!block.src) return null;
      return (
        <figure>
          <img src={block.src} alt={block.alt} title={block.alt} loading="lazy" />
          {block.caption.trim() && <figcaption><Inline text={block.caption} /></figcaption>}
        </figure>
      );
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
    case 'divider':
      return <hr />;
  }
}

/** The article body. Place inside an element with className="article-content". */
export function StudioArticle({ blocks }: { blocks: StudioBlock[] }) {
  const resolved = resolveBlocks(blocks);
  const anchors = headingAnchors(resolved);
  return (
    <>
      {resolved.map((b) => (
        <Block key={b.id} block={b} anchor={anchors.get(b.id)} />
      ))}
    </>
  );
}
