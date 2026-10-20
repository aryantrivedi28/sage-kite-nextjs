'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Bold,
  CircleAlert,
  CircleCheck,
  CircleQuestionMark,
  Copy,
  Download,
  ExternalLink,
  Eye,
  Heading,
  Image as ImageIcon,
  Info,
  Italic,
  LayoutList,
  Link as LinkIcon,
  List,
  Lock,
  Minus,
  Pencil,
  Plus,
  Quote,
  Search,
  Table,
  Trash2,
  Type,
  Upload,
  Video,
  X,
} from 'lucide-react';
import { BlogGuide } from '@/components/blog/BlogGuide';
import { formatDate } from '@/components/blog/formatDate';
import { ACCEPTED_IMAGE_TYPES, studioStore } from './store';
import { StudioArticle } from './StudioArticle';
import {
  BLOCK_LABELS,
  SLUG_PATTERN,
  TITLE_SUFFIX,
  buildGuide,
  checklist,
  emptyPost,
  googleTitle,
  headingAnchors,
  newBlock,
  newId,
  postUrl,
  readingTime,
  resolveBlocks,
  slugify,
  stripInline,
  today,
  wordCount,
  youtubeId,
  type CheckItem,
} from './postUtils';
import type { SitePostSummary, StudioBlock, StudioBlockType, StudioPost, StudioStatus } from './types';
import styles from './BlogStudio.module.css';

/*
 * Blog studio: list, editor and preview for blog posts written outside the
 * codebase. Saving goes through `studioStore` (store.ts); for now that is
 * browser storage, so nothing here changes the live site.
 */

interface BlogStudioProps {
  sitePosts: SitePostSummary[];
  categories: string[];
  platforms: string[];
  author: string;
  authorImage: string;
}

type Pane = 'content' | 'seo' | 'settings';
type StatusTab = 'all' | StudioStatus;

interface ConfirmState {
  title: string;
  body: React.ReactNode;
  confirmLabel: string;
  danger?: boolean;
  onConfirm: () => void;
}

const STATUS_LABEL: Record<StudioStatus, string> = {
  draft: 'Draft',
  published: 'Published',
  scheduled: 'Scheduled',
};

const BLOCK_ICONS: Record<StudioBlockType, React.ComponentType<{ size?: number }>> = {
  heading: Heading,
  text: Type,
  list: List,
  image: ImageIcon,
  quote: Quote,
  table: Table,
  video: Video,
  faq: CircleQuestionMark,
  divider: Minus,
};

const BLOCK_ORDER: StudioBlockType[] = ['heading', 'text', 'list', 'image', 'quote', 'table', 'video', 'faq', 'divider'];

function cx(...names: (string | false | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

function stampDates(p: StudioPost): StudioPost {
  const firstPublishedAt = p.firstPublishedAt ?? new Date().toISOString();
  if (p.status === 'scheduled') {
    const day = p.scheduledFor.slice(0, 10);
    return { ...p, publishedAt: day, updatedAt: p.updatedAt > day ? p.updatedAt : day, firstPublishedAt };
  }
  if (p.status === 'published') {
    const publishedAt = p.publishedAt || today();
    return { ...p, publishedAt, updatedAt: p.updatedAt || publishedAt, firstPublishedAt };
  }
  return p;
}

function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function isStudioPost(v: unknown): v is StudioPost {
  const p = v as StudioPost;
  return !!p && typeof p.id === 'string' && typeof p.title === 'string' && Array.isArray(p.blocks);
}

export function BlogStudio({ sitePosts, categories, platforms, author, authorImage }: BlogStudioProps) {
  const [posts, setPosts] = useState<StudioPost[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [draft, setDraft] = useState<StudioPost | null>(null);
  const [snapshot, setSnapshot] = useState('');
  const [previewing, setPreviewing] = useState(false);
  const [creating, setCreating] = useState(false);
  const [confirm, setConfirm] = useState<ConfirmState | null>(null);
  const [toast, setToast] = useState('');
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const importRef = useRef<HTMLInputElement>(null);

  const dirty = !!draft && JSON.stringify(draft) !== snapshot;

  useEffect(() => {
    studioStore.list().then((p) => {
      setPosts(p);
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  function notify(message: string) {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 4200);
  }

  async function refresh() {
    setPosts(await studioStore.list());
  }

  function openPost(post: StudioPost) {
    setDraft(post);
    setSnapshot(JSON.stringify(post));
  }

  function closeEditor() {
    const close = () => {
      setDraft(null);
      setSnapshot('');
      setPreviewing(false);
    };
    if (!dirty) return close();
    setConfirm({
      title: 'Discard unsaved changes?',
      body: 'Your changes to this post have not been saved.',
      confirmLabel: 'Discard changes',
      danger: true,
      onConfirm: close,
    });
  }

  async function persist(post: StudioPost, message: string) {
    const saved = { ...post, savedAt: new Date().toISOString() };
    try {
      // Only one post may be featured: unfeature the others.
      const unfeatured = saved.featured
        ? posts.filter((p) => p.id !== saved.id && p.featured).map((p) => ({ ...p, featured: false }))
        : [];
      for (const p of [saved, ...unfeatured]) await studioStore.save(p);
      await refresh();
      openPost(saved);
      notify(message);
    } catch (e) {
      notify(e instanceof Error ? e.message : 'Could not save this post.');
    }
  }

  function commit(status: StudioStatus) {
    if (!draft) return;
    const next = { ...draft, status };
    if (!next.title.trim()) return notify('Add a title before saving.');
    if (status === 'draft') return persist(next, 'Draft saved in this browser.');

    const checks = checklist(next, { studio: posts, site: sitePosts });
    const missing = checks.filter((c) => c.required && !c.ok);
    if (missing.length) {
      return notify(`Before ${status === 'scheduled' ? 'scheduling' : 'publishing'}, complete: ${missing.map((m) => m.label.toLowerCase()).join('; ')}.`);
    }
    const message =
      status === 'scheduled'
        ? 'Schedule saved in this browser. The live site has not changed.'
        : 'Saved as published in this browser. The live site has not changed.';
    const go = () => persist(stampDates(next), message);
    const warnings = checks.filter((c) => !c.required && !c.ok);
    if (warnings.length && draft.status !== status) {
      return setConfirm({
        title: status === 'scheduled' ? 'Schedule with open recommendations?' : 'Publish with open recommendations?',
        body: (
          <>
            <p>These SEO recommendations are not met yet:</p>
            <ul className={styles.confirmList}>
              {warnings.map((w) => <li key={w.label}>{w.label}</li>)}
            </ul>
          </>
        ),
        confirmLabel: status === 'scheduled' ? 'Schedule anyway' : 'Publish anyway',
        onConfirm: go,
      });
    }
    go();
  }

  function askDelete(post: StudioPost) {
    setConfirm({
      title: 'Delete this post?',
      body: `“${post.title || 'Untitled post'}” will be removed from ${studioStore.label}. This cannot be undone.`,
      confirmLabel: 'Delete post',
      danger: true,
      onConfirm: async () => {
        await studioStore.remove(post.id);
        await refresh();
        if (draft?.id === post.id) {
          setDraft(null);
          setSnapshot('');
          setPreviewing(false);
        }
        notify('Post deleted.');
      },
    });
  }

  async function duplicate(post: StudioPost) {
    const now = new Date().toISOString();
    const copy: StudioPost = {
      ...structuredClone(post),
      id: newId(),
      title: `${post.title} (copy)`,
      slug: `${post.slug}-copy`,
      status: 'draft',
      featured: false,
      firstPublishedAt: undefined,
      publishedAt: '',
      updatedAt: '',
      createdAt: now,
      savedAt: now,
    };
    try {
      await studioStore.save(copy);
      await refresh();
      notify('Copy created as a draft.');
    } catch (e) {
      notify(e instanceof Error ? e.message : 'Could not copy this post.');
    }
  }

  function createPost(title: string, category: string) {
    const post = emptyPost(title, category, author, authorImage);
    setCreating(false);
    openPost(post);
    // A new post is unsaved until the first save, so closing asks before discarding it.
    setSnapshot('');
  }

  async function importFile(file: File) {
    try {
      const data: unknown = JSON.parse(await file.text());
      const incoming = (Array.isArray(data) ? data : [data]).filter(isStudioPost);
      if (!incoming.length) return notify('No studio posts found in that file.');
      const existing = new Set(posts.map((p) => p.id));
      const replacing = incoming.filter((p) => existing.has(p.id)).length;
      const run = async () => {
        try {
          for (const p of incoming) await studioStore.save(p);
          await refresh();
          notify(`Imported ${incoming.length} post${incoming.length === 1 ? '' : 's'}.`);
        } catch (e) {
          notify(e instanceof Error ? e.message : 'Import failed.');
        }
      };
      if (!replacing) return run();
      setConfirm({
        title: 'Replace existing posts?',
        body: `${replacing} of the ${incoming.length} posts in this file already exist here and will be replaced by the file's version.`,
        confirmLabel: 'Import and replace',
        onConfirm: run,
      });
    } catch {
      notify('That file is not a valid studio export.');
    }
  }

  if (draft && previewing) {
    return <Preview post={draft} onBack={() => setPreviewing(false)} />;
  }

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src="/sage-kite-mark.png" alt="" width={32} height={32} />
          <span>Sage Kite <small>Blog studio</small></span>
        </div>
        <nav className={styles.nav} aria-label="Studio">
          <span className={styles.navLabel}>Content</span>
          <a className={styles.navActive} href="#posts" aria-current="page">
            <LayoutList size={17} /> Blog posts
          </a>
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={17} /> Live blog
          </a>
        </nav>
        <div className={styles.storageNote}>
          <strong><Info size={15} /> Saved in {studioStore.label}</strong>
          <p>
            Posts here are not on sagekite.com yet, and other people cannot see them.
            Export a backup regularly; clearing browser data deletes them.
          </p>
        </div>
      </aside>

      <main className={styles.main} id="posts">
        <PostList
          loaded={loaded}
          posts={posts}
          sitePosts={sitePosts}
          categories={categories}
          onCreate={() => setCreating(true)}
          onEdit={openPost}
          onPreview={(p) => {
            openPost(p);
            setPreviewing(true);
          }}
          onDuplicate={duplicate}
          onDelete={askDelete}
          onExport={() => downloadJson(`sage-kite-blog-studio-${today()}.json`, posts)}
          onImport={() => importRef.current?.click()}
        />
        <input
          ref={importRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0];
            e.target.value = '';
            if (f) importFile(f);
          }}
        />
      </main>

      {draft && (
        <Editor
          draft={draft}
          setDraft={(fn) => setDraft((d) => (d ? fn(d) : d))}
          dirty={dirty}
          posts={posts}
          sitePosts={sitePosts}
          categories={categories}
          platforms={platforms}
          onClose={closeEditor}
          onCommit={commit}
          onPreview={() => setPreviewing(true)}
          onDelete={() => (posts.some((p) => p.id === draft.id) ? askDelete(draft) : closeEditor())}
          notify={notify}
        />
      )}

      {creating && (
        <CreateModal categories={categories} onCancel={() => setCreating(false)} onCreate={createPost} />
      )}

      {confirm && (
        <ConfirmModal
          {...confirm}
          onCancel={() => setConfirm(null)}
          onConfirm={() => {
            setConfirm(null);
            confirm.onConfirm();
          }}
        />
      )}

      <div className={cx(styles.toast, toast && styles.toastShow)} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  );
}

/* ── List ─────────────────────────────────────────────────────────────── */

interface Row {
  key: string;
  title: string;
  slug: string;
  category: string;
  status: StudioStatus;
  date: string;
  sortDate: string;
  source: 'studio' | 'site';
  issues?: number;
  post?: StudioPost;
}

function PostList({
  loaded,
  posts,
  sitePosts,
  categories,
  onCreate,
  onEdit,
  onPreview,
  onDuplicate,
  onDelete,
  onExport,
  onImport,
}: {
  loaded: boolean;
  posts: StudioPost[];
  sitePosts: SitePostSummary[];
  categories: string[];
  onCreate: () => void;
  onEdit: (p: StudioPost) => void;
  onPreview: (p: StudioPost) => void;
  onDuplicate: (p: StudioPost) => void;
  onDelete: (p: StudioPost) => void;
  onExport: () => void;
  onImport: () => void;
}) {
  const [tab, setTab] = useState<StatusTab>('all');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');

  const rows = useMemo<Row[]>(() => {
    const studio: Row[] = posts.map((p) => {
      const checks = checklist(p, { studio: posts, site: sitePosts });
      const date =
        p.status === 'scheduled' && p.scheduledFor
          ? `For ${formatDate(p.scheduledFor.slice(0, 10))}`
          : p.status === 'published' && p.publishedAt
            ? formatDate(p.publishedAt)
            : `Edited ${formatDate(p.savedAt.slice(0, 10))}`;
      return {
        key: p.id,
        title: p.title || 'Untitled post',
        slug: p.slug,
        category: p.category,
        status: p.status,
        date,
        sortDate: p.savedAt,
        source: 'studio',
        issues: checks.filter((c) => !c.ok).length,
        post: p,
      };
    });
    const site: Row[] = sitePosts.map((p) => ({
      key: `site-${p.slug}`,
      title: p.title,
      slug: p.slug,
      category: p.category,
      status: 'published',
      date: formatDate(p.publishedAt),
      sortDate: p.publishedAt,
      source: 'site',
    }));
    return [...studio.sort((a, b) => b.sortDate.localeCompare(a.sortDate)), ...site];
  }, [posts, sitePosts]);

  const counts = {
    all: rows.length,
    published: rows.filter((r) => r.status === 'published').length,
    draft: rows.filter((r) => r.status === 'draft').length,
    scheduled: rows.filter((r) => r.status === 'scheduled').length,
  };

  const q = query.trim().toLowerCase();
  const visible = rows.filter(
    (r) =>
      (tab === 'all' || r.status === tab) &&
      (!category || r.category === category) &&
      (!source || r.source === source) &&
      (!q || `${r.title} ${r.slug} ${r.category}`.toLowerCase().includes(q)),
  );

  const tabs: { id: StatusTab; label: string }[] = [
    { id: 'all', label: 'All posts' },
    { id: 'published', label: 'Published' },
    { id: 'draft', label: 'Drafts' },
    { id: 'scheduled', label: 'Scheduled' },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.pageHead}>
        <div>
          <span className={styles.eyebrow}>Content / Blog posts</span>
          <h1 className={styles.pageTitle}>Blog posts</h1>
          <p className={styles.pageSub}>Write, edit and check blog posts before they go on the site.</p>
        </div>
        <div className={styles.headActions}>
          <button type="button" className={styles.btn} onClick={onImport}>
            <Upload size={16} /> Import
          </button>
          <button type="button" className={styles.btn} onClick={onExport} disabled={!posts.length}>
            <Download size={16} /> Export
          </button>
          <button type="button" className={cx(styles.btn, styles.btnPrimary)} onClick={onCreate}>
            <Plus size={17} /> New post
          </button>
        </div>
      </div>

      <div className={styles.stats}>
        <Stat label="All posts" value={counts.all} />
        <Stat label="Published" value={counts.published} />
        <Stat label="Drafts" value={counts.draft} />
        <Stat label="Scheduled" value={counts.scheduled} />
      </div>

      <div className={styles.panel}>
        <div className={styles.tabs} role="tablist" aria-label="Filter by status">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={cx(styles.tab, tab === t.id && styles.tabActive)}
              onClick={() => setTab(t.id)}
            >
              {t.label} <span className={styles.count}>{counts[t.id]}</span>
            </button>
          ))}
        </div>

        <div className={styles.filters}>
          <label className={styles.searchField}>
            <Search size={16} aria-hidden="true" />
            <input
              className={styles.input}
              placeholder="Search by title or URL"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search posts"
            />
          </label>
          <select className={styles.input} value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Category">
            <option value="">All categories</option>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select className={styles.input} value={source} onChange={(e) => setSource(e.target.value)} aria-label="Source">
            <option value="">All sources</option>
            <option value="studio">Written in the studio</option>
            <option value="site">Already on the site</option>
          </select>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Post</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
                <th>SEO checks</th>
                <th><span className={styles.srOnly}>Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {visible.map((r) => (
                <tr key={r.key}>
                  <td>
                    {r.post ? (
                      <button type="button" className={styles.rowTitle} onClick={() => onEdit(r.post!)}>
                        {r.title}
                      </button>
                    ) : (
                      <span className={styles.rowTitle}>{r.title}</span>
                    )}
                    <span className={styles.rowSlug}>/blog/{r.slug}</span>
                  </td>
                  <td><span className={styles.category}>{r.category}</span></td>
                  <td>
                    <span className={cx(styles.status, styles[`status_${r.status}`])}>{STATUS_LABEL[r.status]}</span>
                    {r.source === 'site' && <span className={styles.sourceTag}>In code</span>}
                  </td>
                  <td className={styles.rowDate}>{r.date}</td>
                  <td>
                    {r.source === 'site' ? (
                      <span className={styles.muted}>Checked in code</span>
                    ) : r.issues ? (
                      <span className={styles.warn}><CircleAlert size={15} /> {r.issues} to review</span>
                    ) : (
                      <span className={styles.ok}><CircleCheck size={15} /> Ready</span>
                    )}
                  </td>
                  <td>
                    <div className={styles.rowActions}>
                      {r.post ? (
                        <>
                          <IconButton label="Edit" onClick={() => onEdit(r.post!)}><Pencil size={15} /></IconButton>
                          <IconButton label="Preview" onClick={() => onPreview(r.post!)}><Eye size={15} /></IconButton>
                          <IconButton label="Duplicate" onClick={() => onDuplicate(r.post!)}><Copy size={15} /></IconButton>
                          <IconButton label="Delete" onClick={() => onDelete(r.post!)}><Trash2 size={15} /></IconButton>
                        </>
                      ) : (
                        <a
                          className={styles.iconBtn}
                          href={`/blog/${r.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on the site"
                          aria-label={`View ${r.title} on the site`}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {loaded && visible.length === 0 && (
          <p className={styles.empty}>
            {rows.length === 0 ? 'No posts yet. Create your first one.' : 'No posts match these filters.'}
          </p>
        )}
        <div className={styles.tableFooter}>
          <span>Showing {visible.length} of {rows.length} posts</span>
          <span>Posts marked “In code” are edited by developers in app/blog.</span>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className={styles.stat}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function IconButton({ label, onClick, children, disabled }: { label: string; onClick: () => void; children: React.ReactNode; disabled?: boolean }) {
  return (
    <button type="button" className={styles.iconBtn} onClick={onClick} title={label} aria-label={label} disabled={disabled}>
      {children}
    </button>
  );
}

/* ── Editor ───────────────────────────────────────────────────────────── */

function Editor({
  draft,
  setDraft,
  dirty,
  posts,
  sitePosts,
  categories,
  platforms,
  onClose,
  onCommit,
  onPreview,
  onDelete,
  notify,
}: {
  draft: StudioPost;
  setDraft: (fn: (d: StudioPost) => StudioPost) => void;
  dirty: boolean;
  posts: StudioPost[];
  sitePosts: SitePostSummary[];
  categories: string[];
  platforms: string[];
  onClose: () => void;
  onCommit: (status: StudioStatus) => void;
  onPreview: () => void;
  onDelete: () => void;
  notify: (m: string) => void;
}) {
  const [pane, setPane] = useState<Pane>('content');
  const [slugTouched, setSlugTouched] = useState(() => !!draft.slug && draft.slug !== slugify(draft.title));
  const [tagsText, setTagsText] = useState(() => draft.tags.join(', '));
  const [addAt, setAddAt] = useState<number | null>(null);
  const slugLocked = !!draft.firstPublishedAt;
  const checks = checklist(draft, { studio: posts, site: sitePosts });
  const featuredSitePost = sitePosts.find((p) => p.featured);

  const set = <K extends keyof StudioPost>(key: K, value: StudioPost[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        onCommit(draft.status);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [draft.status, onCommit]);

  async function upload(file: File) {
    try {
      return await studioStore.uploadImage(file);
    } catch (e) {
      notify(e instanceof Error ? e.message : 'Upload failed.');
      return null;
    }
  }

  function updateBlock(id: string, patch: Partial<StudioBlock>) {
    setDraft((d) => ({
      ...d,
      blocks: d.blocks.map((b) => (b.id === id ? ({ ...b, ...patch } as StudioBlock) : b)),
    }));
  }

  function moveBlock(index: number, dir: -1 | 1) {
    setDraft((d) => {
      const blocks = [...d.blocks];
      const j = index + dir;
      if (j < 0 || j >= blocks.length) return d;
      [blocks[index], blocks[j]] = [blocks[j], blocks[index]];
      return { ...d, blocks };
    });
  }

  function insertBlock(type: StudioBlockType) {
    const block = newBlock(type);
    const at = addAt ?? draft.blocks.length;
    setDraft((d) => ({ ...d, blocks: [...d.blocks.slice(0, at), block, ...d.blocks.slice(at)] }));
    setAddAt(null);
    requestAnimationFrame(() =>
      document.getElementById(`block-${block.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    );
  }

  const primary =
    draft.status === 'draft'
      ? { label: 'Publish', status: 'published' as const }
      : draft.status === 'scheduled'
        ? { label: 'Save schedule', status: 'scheduled' as const }
        : { label: 'Save changes', status: 'published' as const };

  const resolved = resolveBlocks(draft.blocks);
  const anchors = headingAnchors(resolved);
  const outline = resolved.filter((b): b is Extract<StudioBlock, { type: 'heading' }> => b.type === 'heading' && !!b.text.trim());
  const excerptLength = draft.excerpt.trim().length;
  const gTitle = googleTitle(draft);

  return (
    <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.editor} role="dialog" aria-modal="true" aria-labelledby="studio-editor-title">
        <div className={styles.editorHead}>
          <div className={styles.editorHeadText}>
            <span className={styles.eyebrow}>
              {STATUS_LABEL[draft.status]}{dirty ? ' · unsaved changes' : ''}
            </span>
            <h2 id="studio-editor-title" className={styles.editorTitle}>{draft.title || 'Untitled post'}</h2>
          </div>
          <div className={styles.editorActions}>
            <button type="button" className={styles.btn} onClick={onPreview}>
              <Eye size={16} /> <span className={styles.hideSmall}>Preview</span>
            </button>
            {draft.status === 'draft' && (
              <button type="button" className={styles.btn} onClick={() => onCommit('draft')}>Save draft</button>
            )}
            <button type="button" className={cx(styles.btn, styles.btnPrimary)} onClick={() => onCommit(primary.status)}>
              {primary.label}
            </button>
            <IconButton label="Close editor" onClick={onClose}><X size={17} /></IconButton>
          </div>
        </div>

        <div className={styles.editorTabs} role="tablist" aria-label="Editor sections">
          {(['content', 'seo', 'settings'] as Pane[]).map((p) => (
            <button
              key={p}
              type="button"
              role="tab"
              aria-selected={pane === p}
              className={cx(styles.tab, pane === p && styles.tabActive)}
              onClick={() => setPane(p)}
            >
              {p === 'seo' ? 'SEO' : p[0].toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.editorBody}>
          <div className={styles.editorMain}>
            {pane === 'content' && (
              <>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Basics</h3>
                  <Field label="Title" required count={`${draft.title.length} characters`}>
                    <input
                      className={styles.input}
                      value={draft.title}
                      maxLength={140}
                      placeholder="The headline readers see on the page"
                      onChange={(e) => {
                        const title = e.target.value;
                        setDraft((d) => ({ ...d, title, slug: slugTouched || slugLocked ? d.slug : slugify(title) }));
                      }}
                    />
                  </Field>
                  <Field
                    label="URL slug"
                    required
                    hint={
                      slugLocked
                        ? 'Locked: this post has been published, and a published URL must not change.'
                        : 'Lowercase letters, numbers and hyphens. Never change it after publishing.'
                    }
                  >
                    <div className={styles.slugInput}>
                      <span>/blog/</span>
                      <input
                        className={styles.input}
                        value={draft.slug}
                        readOnly={slugLocked}
                        placeholder="your-post-url"
                        onChange={(e) => {
                          setSlugTouched(true);
                          set('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'));
                        }}
                        onBlur={() => set('slug', slugify(draft.slug))}
                      />
                      {slugLocked && <Lock size={15} aria-label="Locked" />}
                    </div>
                  </Field>
                  <div className={styles.twoCol}>
                    <Field label="Category" required>
                      <select className={styles.input} value={draft.category} onChange={(e) => set('category', e.target.value)}>
                        {categories.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </Field>
                    <Field label="Author">
                      <input className={styles.input} value={draft.author} onChange={(e) => set('author', e.target.value)} />
                    </Field>
                  </div>
                  <Field
                    label="Excerpt / meta description"
                    required
                    count={`${excerptLength} / 160`}
                    countState={excerptLength > 160 || (excerptLength > 0 && excerptLength < 70) ? 'warn' : excerptLength ? 'ok' : undefined}
                    hint="One or two sentences. Shown under the title, on blog cards, in Google results and in social shares. Aim for 70–160 characters."
                  >
                    <textarea className={styles.input} rows={3} value={draft.excerpt} onChange={(e) => set('excerpt', e.target.value)} />
                  </Field>
                </div>

                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Featured image</h3>
                  <ImageField
                    value={draft.featuredImage}
                    onChange={(v) => set('featuredImage', v)}
                    onUpload={upload}
                    hint="16:9, about 1200 × 675. Used at the top of the post, on blog cards and in social shares."
                  />
                  <Field label="Alt text" required hint="Describe what the image shows, for screen readers and search engines.">
                    <input className={styles.input} value={draft.imageAlt} onChange={(e) => set('imageAlt', e.target.value)} />
                  </Field>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardHeadRow}>
                    <div>
                      <h3 className={styles.cardTitle}>Article</h3>
                      <p className={styles.hint}>
                        The page already shows the title as the H1, so start sections with H2 headings. Every H2 appears in the
                        page’s guide.
                      </p>
                    </div>
                    <span className={styles.muted}>{wordCount(draft.blocks).toLocaleString('en-GB')} words · {readingTime(draft.blocks)}</span>
                  </div>

                  {draft.blocks.length === 0 && (
                    <p className={styles.blocksEmpty}>No blocks yet. Add a heading or paragraphs to start writing.</p>
                  )}

                  {draft.blocks.map((b, i) => (
                    <React.Fragment key={b.id}>
                      <BlockCard
                        block={b}
                        index={i}
                        count={draft.blocks.length}
                        onChange={(patch) => updateBlock(b.id, patch)}
                        onMove={(dir) => moveBlock(i, dir)}
                        onRemove={() => setDraft((d) => ({ ...d, blocks: d.blocks.filter((x) => x.id !== b.id) }))}
                        onAddBelow={() => setAddAt(addAt === i + 1 ? null : i + 1)}
                        onUpload={upload}
                      />
                      {addAt === i + 1 && i + 1 < draft.blocks.length && (
                        <AddBlockMenu onAdd={insertBlock} onCancel={() => setAddAt(null)} />
                      )}
                    </React.Fragment>
                  ))}

                  {addAt === null || addAt >= draft.blocks.length ? (
                    <AddBlockMenu onAdd={insertBlock} />
                  ) : null}
                </div>
              </>
            )}

            {pane === 'seo' && (
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Search and sharing</h3>
                <Field
                  label="SEO title (optional)"
                  count={`${gTitle.length} / 60 with “${TITLE_SUFFIX.trim()}”`}
                  countState={gTitle.length > 60 ? 'warn' : 'ok'}
                  hint={`A shorter title for Google and the browser tab, when the title is over about 48 characters. “${TITLE_SUFFIX}” is added automatically. Leave empty to use the title.`}
                >
                  <input className={styles.input} value={draft.seoTitle} placeholder={draft.title} onChange={(e) => set('seoTitle', e.target.value)} />
                </Field>
                <Field
                  label="Meta description"
                  required
                  count={`${excerptLength} / 160`}
                  countState={excerptLength > 160 || (excerptLength > 0 && excerptLength < 70) ? 'warn' : excerptLength ? 'ok' : undefined}
                  hint="Same text as the excerpt on the Content tab: the site uses one field for both."
                >
                  <textarea className={styles.input} rows={3} value={draft.excerpt} onChange={(e) => set('excerpt', e.target.value)} />
                </Field>
                <Field label="Tags / keywords" hint="3–6 phrases, separated by commas. Shown on the post and used as schema keywords.">
                  <input
                    className={styles.input}
                    value={tagsText}
                    placeholder="CRM setup, Client onboarding, Dubsado workflows"
                    onChange={(e) => {
                      setTagsText(e.target.value);
                      set('tags', e.target.value.split(',').map((t) => t.trim()).filter(Boolean));
                    }}
                  />
                </Field>
                <Field label="Focus keyword (editorial hint)" hint="Not output on the page. The checklist uses it to check the title, description, headings and first paragraph.">
                  <input className={styles.input} value={draft.focusKeyword} onChange={(e) => set('focusKeyword', e.target.value)} />
                </Field>
                <Field label="Canonical URL" hint="Set automatically from the slug, with no trailing slash.">
                  <input className={styles.input} value={postUrl(draft.slug)} readOnly />
                </Field>

                <span className={styles.previewLabel}>Google result preview</span>
                <div className={styles.serp}>
                  <span className={styles.serpUrl}>{postUrl(draft.slug)}</span>
                  <strong className={styles.serpTitle}>{gTitle}</strong>
                  <p>{draft.excerpt || 'Your meta description appears here.'}</p>
                </div>

                <span className={styles.previewLabel}>Social share preview</span>
                <div className={styles.social}>
                  <div className={styles.socialImg}>
                    {draft.featuredImage ? (
                      <img src={draft.featuredImage} alt="" />
                    ) : (
                      <span>Featured image</span>
                    )}
                  </div>
                  <div className={styles.socialText}>
                    <span>sagekite.com</span>
                    <strong>{draft.title || 'Post title'}</strong>
                    <p>{draft.excerpt}</p>
                  </div>
                </div>
              </div>
            )}

            {pane === 'settings' && (
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Publishing</h3>
                <Field label="Status">
                  <select className={styles.input} value={draft.status} onChange={(e) => set('status', e.target.value as StudioStatus)}>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </Field>
                {draft.status === 'scheduled' && (
                  <Field label="Publish on" required hint="Date and time the post should go live.">
                    <input className={styles.input} type="datetime-local" value={draft.scheduledFor} onChange={(e) => set('scheduledFor', e.target.value)} />
                  </Field>
                )}
                <div className={styles.twoCol}>
                  <Field label="Published date" hint="Set to today on first publish if left empty.">
                    <input className={styles.input} type="date" value={draft.publishedAt} onChange={(e) => set('publishedAt', e.target.value)} />
                  </Field>
                  <Field label="Last updated" hint="Change it when the article is meaningfully edited.">
                    <div className={styles.inline}>
                      <input className={styles.input} type="date" value={draft.updatedAt} onChange={(e) => set('updatedAt', e.target.value)} />
                      <button type="button" className={styles.btn} onClick={() => set('updatedAt', today())}>Today</button>
                    </div>
                  </Field>
                </div>
                <Field label="Related platform" hint="Only if the post is mainly about one platform Sage Kite implements. Links the article to that platform page.">
                  <select className={styles.input} value={draft.relatedPlatform} onChange={(e) => set('relatedPlatform', e.target.value)}>
                    <option value="">None</option>
                    {platforms.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>
                <label className={styles.checkbox}>
                  <input type="checkbox" checked={draft.featured} onChange={(e) => set('featured', e.target.checked)} />
                  <span>
                    Feature this post at the top of /blog
                    <small>
                      Only one post can be featured. Saving this unfeatures any other studio post
                      {featuredSitePost ? `; “${featuredSitePost.title}” is currently featured in code` : ''}.
                    </small>
                  </span>
                </label>
              </div>
            )}
          </div>

          <aside className={styles.editorSide}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Guide</h3>
              {outline.length ? (
                <ol className={styles.outline}>
                  {outline.map((h) => (
                    <li key={h.id} className={h.level === 3 ? styles.outlineSub : undefined}>
                      <button
                        type="button"
                        onClick={() => {
                          setPane('content');
                          requestAnimationFrame(() =>
                            document.getElementById(`block-${h.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
                          );
                        }}
                      >
                        {stripInline(h.text)}
                      </button>
                      {h.level === 2 && <code>#{anchors.get(h.id)}</code>}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className={styles.hint}>Add H2 headings to build the guide.</p>
              )}
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Checklist</h3>
              <Checklist items={checks} />
            </div>
            <div className={styles.card}>
              <button type="button" className={cx(styles.btn, styles.btnBlock)} onClick={onPreview}><Eye size={16} /> Preview article</button>
              <button type="button" className={cx(styles.btn, styles.btnBlock, styles.btnDanger)} onClick={onDelete}><Trash2 size={16} /> Delete post</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Checklist({ items }: { items: CheckItem[] }) {
  const groups = [
    { title: 'Required', items: items.filter((i) => i.required) },
    { title: 'Recommended', items: items.filter((i) => !i.required) },
  ];
  return (
    <>
      {groups.map((g) => (
        <div key={g.title} className={styles.checkGroup}>
          <span className={styles.checkGroupTitle}>
            {g.title} <span>{g.items.filter((i) => i.ok).length}/{g.items.length}</span>
          </span>
          <ul>
            {g.items.map((i) => (
              <li key={i.label} className={i.ok ? styles.checkOk : styles.checkTodo}>
                {i.ok ? <CircleCheck size={15} /> : <CircleAlert size={15} />}
                {i.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function Field({
  label,
  required,
  hint,
  count,
  countState,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  count?: string;
  countState?: 'ok' | 'warn';
  children: React.ReactNode;
}) {
  // The hint sits outside the <label> so it is not read as part of the field's name.
  return (
    <div className={styles.field}>
      <label className={styles.fieldInner}>
        <span className={styles.fieldLabel}>
          <span>{label}{required && <span className={styles.req}> *</span>}</span>
          {count && <span className={cx(styles.fieldCount, countState === 'warn' && styles.warn)}>{count}</span>}
        </span>
        {children}
      </label>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}

function ImageField({
  value,
  onChange,
  onUpload,
  hint,
}: {
  value: string;
  onChange: (v: string) => void;
  onUpload: (f: File) => Promise<string | null>;
  hint?: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const uploaded = value.startsWith('data:');
  return (
    <div className={styles.imageField}>
      <div className={styles.imageThumb}>
        {value ? (
          <img src={value} alt="" />
        ) : (
          <ImageIcon size={22} aria-hidden="true" />
        )}
      </div>
      <div className={styles.imageControls}>
        <input
          className={styles.input}
          value={uploaded ? '' : value}
          placeholder={uploaded ? 'Uploaded image (saved in this browser)' : '/images/blog/your-image.jpg or https://…'}
          onChange={(e) => onChange(e.target.value.trim())}
          aria-label="Image path or URL"
        />
        <div className={styles.inline}>
          <button type="button" className={styles.btn} disabled={busy} onClick={() => fileRef.current?.click()}>
            <Upload size={15} /> {busy ? 'Processing…' : 'Upload'}
          </button>
          {value && (
            <button type="button" className={styles.btn} onClick={() => onChange('')}>Remove</button>
          )}
        </div>
        <span className={styles.hint}>{hint ? `${hint} ` : ''}JPG, PNG or WebP up to 8 MB; resized and saved as WebP.</span>
      </div>
      <input
        ref={fileRef}
        type="file"
        accept={ACCEPTED_IMAGE_TYPES.join(',')}
        hidden
        onChange={async (e) => {
          const f = e.target.files?.[0];
          e.target.value = '';
          if (!f) return;
          setBusy(true);
          const url = await onUpload(f);
          setBusy(false);
          if (url) onChange(url);
        }}
      />
    </div>
  );
}

/** Textarea with Bold / Italic / Link buttons that insert the inline markers around the selection. */
function FormatTextarea({
  value,
  onChange,
  rows = 5,
  placeholder,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
  label: string;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  function wrap(before: string, after: string, fallback: string) {
    const el = ref.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e } = el;
    const selected = value.slice(s, e) || fallback;
    onChange(value.slice(0, s) + before + selected + after + value.slice(e));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(s + before.length, s + before.length + selected.length);
    });
  }
  return (
    <div className={styles.formatBox}>
      <div className={styles.formatBar}>
        <button type="button" title="Bold" aria-label="Bold" onClick={() => wrap('**', '**', 'bold text')}><Bold size={15} /></button>
        <button type="button" title="Italic" aria-label="Italic" onClick={() => wrap('*', '*', 'italic text')}><Italic size={15} /></button>
        <button type="button" title="Link" aria-label="Link" onClick={() => wrap('[', '](/blog/)', 'link text')}><LinkIcon size={15} /></button>
        <span className={styles.formatHint}>**bold** · *italic* · [text](/path or https://…)</span>
      </div>
      <textarea
        ref={ref}
        className={styles.input}
        rows={rows}
        value={value}
        placeholder={placeholder}
        aria-label={label}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function AddBlockMenu({ onAdd, onCancel }: { onAdd: (t: StudioBlockType) => void; onCancel?: () => void }) {
  return (
    <div className={styles.addMenu}>
      <div className={styles.addMenuHead}>
        <span>Add a block</span>
        {onCancel && <button type="button" onClick={onCancel} aria-label="Cancel"><X size={15} /></button>}
      </div>
      <div className={styles.addGrid}>
        {BLOCK_ORDER.map((t) => {
          const Icon = BLOCK_ICONS[t];
          return (
            <button key={t} type="button" className={styles.addBlock} onClick={() => onAdd(t)}>
              <Icon size={16} /> {BLOCK_LABELS[t]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BlockCard({
  block,
  index,
  count,
  onChange,
  onMove,
  onRemove,
  onAddBelow,
  onUpload,
}: {
  block: StudioBlock;
  index: number;
  count: number;
  onChange: (patch: Partial<StudioBlock>) => void;
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
  onAddBelow: () => void;
  onUpload: (f: File) => Promise<string | null>;
}) {
  const Icon = BLOCK_ICONS[block.type];
  const name = block.type === 'heading' ? `Heading ${block.level === 2 ? '(H2)' : '(H3)'}` : BLOCK_LABELS[block.type];

  let body: React.ReactNode = null;
  switch (block.type) {
    case 'heading':
      body = (
        <div className={styles.headingRow}>
          <select
            className={styles.input}
            value={block.level}
            onChange={(e) => onChange({ level: Number(e.target.value) as 2 | 3 })}
            aria-label="Heading level"
          >
            <option value={2}>H2 section</option>
            <option value={3}>H3 sub-section</option>
          </select>
          <input
            className={cx(styles.input, styles.headingInput)}
            value={block.text}
            placeholder="A heading that tells the reader what this section explains"
            onChange={(e) => onChange({ text: e.target.value })}
            aria-label="Heading text"
          />
        </div>
      );
      break;
    case 'text':
      body = (
        <FormatTextarea
          label="Paragraphs"
          value={block.text}
          rows={7}
          placeholder="Each line becomes its own paragraph. Pasting from Google Docs works."
          onChange={(text) => onChange({ text })}
        />
      );
      break;
    case 'list':
      body = (
        <>
          <div className={styles.inline}>
            <label className={styles.radio}>
              <input type="radio" checked={!block.ordered} onChange={() => onChange({ ordered: false })} /> Bullets
            </label>
            <label className={styles.radio}>
              <input type="radio" checked={block.ordered} onChange={() => onChange({ ordered: true })} /> Numbered
            </label>
          </div>
          <FormatTextarea label="List items" value={block.items} placeholder={'One item per line\nSecond item\nThird item'} onChange={(items) => onChange({ items })} />
        </>
      );
      break;
    case 'image':
      body = (
        <>
          <ImageField value={block.src} onChange={(src) => onChange({ src })} onUpload={onUpload} />
          <Field label="Alt text" required hint="Describe what the image shows. Also used as the image title.">
            <input className={styles.input} value={block.alt} onChange={(e) => onChange({ alt: e.target.value })} />
          </Field>
          <Field label="Caption (optional)">
            <input className={styles.input} value={block.caption} onChange={(e) => onChange({ caption: e.target.value })} />
          </Field>
        </>
      );
      break;
    case 'quote':
      body = (
        <>
          <FormatTextarea label="Quote" value={block.text} rows={3} placeholder="The sharpest sentence of the section" onChange={(text) => onChange({ text })} />
          <Field label="Attribution (optional)" hint="Only quote real, sourced people.">
            <input className={styles.input} value={block.cite} onChange={(e) => onChange({ cite: e.target.value })} />
          </Field>
        </>
      );
      break;
    case 'table': {
      body = (
        <Field label="Rows" hint="One row per line, cells separated by |. The first row is the header.">
          <textarea
            className={styles.input}
            rows={5}
            value={block.rows}
            placeholder={'Manual process | Automated process\nCopying leads by hand | Leads arrive in the CRM'}
            onChange={(e) => onChange({ rows: e.target.value })}
          />
        </Field>
      );
      break;
    }
    case 'video': {
      const valid = !block.url || !!youtubeId(block.url);
      body = (
        <>
          <Field label="YouTube link" hint={valid ? 'Watch, Shorts, youtu.be and embed links are accepted.' : 'This does not look like a YouTube link.'}>
            <input className={styles.input} value={block.url} placeholder="https://www.youtube.com/watch?v=…" onChange={(e) => onChange({ url: e.target.value })} />
          </Field>
          <Field label="Video title" hint="Read by screen readers and shown as the caption.">
            <input className={styles.input} value={block.title} onChange={(e) => onChange({ title: e.target.value })} />
          </Field>
        </>
      );
      break;
    }
    case 'faq':
      body = (
        <>
          <Field label="Question">
            <input className={styles.input} value={block.question} placeholder="A question people actually ask" onChange={(e) => onChange({ question: e.target.value })} />
          </Field>
          <FormatTextarea label="Answer" value={block.answer} rows={3} placeholder="The answer, as it should appear on the page" onChange={(answer) => onChange({ answer })} />
          <span className={styles.hint}>FAQs are added to the page’s FAQ schema with exactly this text.</span>
        </>
      );
      break;
    case 'divider':
      body = <span className={styles.hint}>A horizontal line between sections.</span>;
      break;
  }

  return (
    <div className={styles.block} id={`block-${block.id}`}>
      <div className={styles.blockHead}>
        <Icon size={15} />
        <span className={styles.blockName}>{name}</span>
        <div className={styles.blockControls}>
          <IconButton label="Add a block below" onClick={onAddBelow}><Plus size={15} /></IconButton>
          <IconButton label="Move up" onClick={() => onMove(-1)} disabled={index === 0}><ArrowUp size={15} /></IconButton>
          <IconButton label="Move down" onClick={() => onMove(1)} disabled={index === count - 1}><ArrowDown size={15} /></IconButton>
          <IconButton label="Remove block" onClick={onRemove}><Trash2 size={15} /></IconButton>
        </div>
      </div>
      <div className={styles.blockBody}>{body}</div>
    </div>
  );
}

/* ── Modals ───────────────────────────────────────────────────────────── */

function useEscape(onEscape: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onEscape();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onEscape]);
}

function CreateModal({
  categories,
  onCancel,
  onCreate,
}: {
  categories: string[];
  onCancel: () => void;
  onCreate: (title: string, category: string) => void;
}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0] ?? '');
  useEscape(onCancel);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) onCreate(title.trim(), category);
  };
  return (
    <div className={styles.modal} onMouseDown={(e) => e.target === e.currentTarget && onCancel()}>
      <form className={styles.modalBox} role="dialog" aria-modal="true" aria-labelledby="studio-create-title" onSubmit={submit}>
        <h2 id="studio-create-title" className={styles.modalTitle}>New blog post</h2>
        <p className={styles.modalText}>Start with a working title. You can change everything in the editor.</p>
        <Field label="Title" required>
          <input className={styles.input} value={title} autoFocus onChange={(e) => setTitle(e.target.value)} />
        </Field>
        <Field label="Category" required>
          <select className={styles.input} value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <div className={styles.modalActions}>
          <button type="button" className={styles.btn} onClick={onCancel}>Cancel</button>
          <button type="submit" className={cx(styles.btn, styles.btnPrimary)} disabled={!title.trim()}>Create draft</button>
        </div>
      </form>
    </div>
  );
}

function ConfirmModal({
  title,
  body,
  confirmLabel,
  danger,
  onConfirm,
  onCancel,
}: ConfirmState & { onCancel: () => void }) {
  useEscape(onCancel);
  return (
    <div className={styles.modal} onMouseDown={(e) => e.target === e.currentTarget && onCancel()}>
      <div className={styles.modalBox} role="alertdialog" aria-modal="true" aria-labelledby="studio-confirm-title">
        <h2 id="studio-confirm-title" className={styles.modalTitle}>{title}</h2>
        <div className={styles.modalText}>{body}</div>
        <div className={styles.modalActions}>
          <button type="button" className={styles.btn} onClick={onCancel} autoFocus>Cancel</button>
          <button type="button" className={cx(styles.btn, danger ? styles.btnDangerSolid : styles.btnPrimary)} onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Preview ──────────────────────────────────────────────────────────── */

/** The post rendered with the live blog's own classes (components/blog/BlogArticleLayout.tsx). */
function Preview({ post, onBack }: { post: StudioPost; onBack: () => void }) {
  const guide = buildGuide(post.blocks);
  const date = post.status === 'scheduled' && post.scheduledFor ? post.scheduledFor.slice(0, 10) : post.publishedAt || today();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEscape(onBack);

  return (
    <div className={styles.previewPage}>
      <div className={styles.previewBar}>
        <button type="button" className={styles.btn} onClick={onBack}>
          <ArrowLeft size={16} /> Back to editor
        </button>
        <span>Preview · {STATUS_LABEL[post.status]} · not on the live site</span>
      </div>

      <main id="main">
        <article className="article">
          <header className="article-header">
            <span className="chip blog-chip article-category">{post.category}</span>
            <h1 className="article-title">{post.title || 'Untitled post'}</h1>
            {post.excerpt && <p className="article-excerpt">{post.excerpt}</p>}
            <div className="article-byline">
              {post.authorImage && (
                <img src={post.authorImage} alt={post.author} title={post.author} width={44} height={44} className="article-avatar" />
              )}
              <div className="article-byline-text">
                <span className="article-author">{post.author}</span>
                <span className="article-byline-meta">
                  <time dateTime={date}>{formatDate(date)}</time>
                  <span aria-hidden="true"> &middot; </span>
                  {readingTime(post.blocks)}
                </span>
              </div>
            </div>
          </header>

          <div className="wrap">
            <figure className="article-hero-img">
              {post.featuredImage ? (
                <img className={styles.heroImg} src={post.featuredImage} alt={post.imageAlt || post.title} title={post.imageAlt || post.title} />
              ) : (
                <span className={styles.heroEmpty}>No featured image yet</span>
              )}
            </figure>

            <div className="article-layout">
              <div className="article-content">
                {post.blocks.length ? <StudioArticle blocks={post.blocks} /> : <p>No article content yet.</p>}
              </div>
              <aside className="article-sidebar">
                {guide.length > 0 && <BlogGuide items={guide} />}
              </aside>
            </div>

            {post.tags.length > 0 && (
              <div className="article-tags">
                {post.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            )}

            <p className={styles.previewNote}>
              On the live site the page continues with related articles and the “Book a discovery call” section, as on every post.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
