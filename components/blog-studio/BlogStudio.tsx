'use client';

import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  BookOpen,
  CircleAlert,
  CircleCheck,
  CircleQuestionMark,
  ClipboardPaste,
  Copy,
  Download,
  ExternalLink,
  Eye,
  Heading,
  Image as ImageIcon,
  Info,
  LayoutList,
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
  Undo2,
  Upload,
  Video,
  X,
} from 'lucide-react';
import { BlogGuide } from '@/components/blog/BlogGuide';
import { formatDate } from '@/components/blog/formatDate';
import { APPLE_PASTE_NOTE, articleFromClipboard, describeBlocks, type PastedArticle } from './articlePaste';
import { signOutStudioAction } from './auth-actions';
import { imagePaste } from './clipboard';
import { convertLines, linkProblem, type TurnInto } from './formatting';
import { LoginGate } from './LoginGate';
import { RichTextBox } from './RichTextBox';
import { getStudioStore, onSessionEnded, type StudioStore } from './store';
import { StudioArticle } from './StudioArticle';
import {
  ACCEPTED_IMAGE_TYPES,
  BLOCK_LABELS,
  MAX_KEYWORD_LENGTH,
  MAX_POST_BLOCKS,
  MAX_SECONDARY_KEYWORDS,
  MAX_SOURCES,
  MAX_TABLE_COLUMNS,
  MAX_TABLE_ROWS,
  SLUG_PATTERN,
  TITLE_SUFFIX,
  blockHeading,
  buildGuide,
  checklist,
  emptyPost,
  googleTitle,
  headingAnchors,
  newBlock,
  newId,
  newSource,
  parseKeywordList,
  postUrl,
  readingTime,
  resolveBlocks,
  slugify,
  stripInline,
  tableFromClipboard,
  today,
  wordCount,
  youtubeId,
  type CheckItem,
  type PastedTable,
} from './postUtils';
import type {
  HeadingLevel,
  SitePostSummary,
  StudioBlock,
  StudioBlockType,
  StudioPost,
  StudioSource,
  StudioStatus,
  StudioStorage,
} from './types';
import styles from './BlogStudio.module.css';

/*
 * Blog studio: list, editor and preview for blog posts written outside the
 * codebase. Saving goes through a StudioStore (store.ts): Sanity once the
 * server allows it (server.ts: signed in with the team password). Without a
 * session the whole studio sits behind LoginGate, a dialog that cannot be dismissed.
 */

interface BlogStudioProps {
  storage: StudioStorage;
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
  /** Label of the button that dismisses the dialog (default "Cancel"). */
  cancelLabel?: string;
  /** Runs when the dialog is dismissed (button, Escape or a click outside). */
  onCancel?: () => void;
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
  sources: BookOpen,
  divider: Minus,
};

const BLOCK_ORDER: StudioBlockType[] = ['heading', 'text', 'list', 'image', 'quote', 'table', 'video', 'faq', 'sources', 'divider'];

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

/** After an image is uploaded into block `id`: bring it into view and put the cursor in its Alt text field. */
function focusAltText(id: string) {
  requestAnimationFrame(() => {
    document.getElementById(`block-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.querySelector<HTMLInputElement>(`#block-${id} [data-alt-input]`)?.focus({ preventScroll: true });
  });
}

/**
 * The studio behind its mandatory sign-in dialog (decision.md D035). While there is no valid session
 * the studio is `inert` (not clickable, not reachable with Tab, hidden from screen readers) and the
 * dialog cannot be dismissed. A session that ends while the page is open (a Server Action reports it)
 * puts the dialog back without losing the post being edited. The server re-checks the session on every
 * Server Action; this is the visible half of the gate.
 */
export function BlogStudio(props: BlogStudioProps) {
  const [sessionEnded, setSessionEnded] = useState(false);
  useEffect(() => onSessionEnded(() => setSessionEnded(true)), []);

  const startedLocked = props.storage.kind === 'locked';
  const gate = props.storage.kind === 'locked' ? props.storage.why : sessionEnded ? 'signin' : null;

  return (
    <>
      <div inert={!!gate} aria-hidden={gate ? true : undefined}>
        <StudioApp {...props} />
      </div>
      {gate && (
        <LoginGate
          mode={gate}
          // Locked from the start: reload so the server renders the signed-in studio. Session ended
          // while editing: just continue, so an unsaved post is not lost.
          onSignedIn={() => (startedLocked ? window.location.reload() : setSessionEnded(false))}
        />
      )}
    </>
  );
}

function StudioApp({ storage, sitePosts, categories, platforms, author, authorImage }: BlogStudioProps) {
  const studioStore = getStudioStore(storage);
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
    studioStore
      .list()
      .then(setPosts)
      .catch((e: unknown) => notify(e instanceof Error ? e.message : 'Could not load posts.'))
      .finally(() => setLoaded(true));
    // Runs once: the store is fixed for the page's lifetime.
  }, []);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  async function signOut() {
    const result = await signOutStudioAction();
    if (result.ok) window.location.reload();
    else notify(result.error);
  }

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
      const stored = await studioStore.save(saved);
      for (const p of unfeatured) await studioStore.save(p);
      await refresh();
      openPost(stored);
      notify(message);
    } catch (e) {
      notify(e instanceof Error ? e.message : 'Could not save this post.');
    }
  }

  function commit(status: StudioStatus) {
    if (!draft) return;
    const next = { ...draft, status };
    if (!next.title.trim()) return notify('Add a title before saving.');
    if (status === 'draft') return persist(next, `Draft saved ${studioStore.savedIn}.`);

    const checks = checklist(next, { studio: posts, site: sitePosts });
    const missing = checks.filter((c) => c.required && !c.ok);
    if (missing.length) {
      return notify(`Before ${status === 'scheduled' ? 'scheduling' : 'publishing'}, complete: ${missing.map((m) => m.label.toLowerCase()).join('; ')}.`);
    }
    const message =
      status === 'scheduled'
        ? 'Schedule saved to Sanity. Automatic publishing is not built yet: publish the post yourself on that date.'
        : 'Published to Sanity. It appears on the blog within a minute.';
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
        try {
          await studioStore.remove(post.id);
          await refresh();
          if (draft?.id === post.id) {
            setDraft(null);
            setSnapshot('');
            setPreviewing(false);
          }
          notify('Post deleted.');
        } catch (e) {
          notify(e instanceof Error ? e.message : 'Could not delete this post.');
        }
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
          <strong>
            <Info size={15} /> {storage.kind === 'blocked' ? 'Publishing is blocked' : storage.kind === 'locked' ? 'Locked' : `Saved in ${studioStore.label}`}
          </strong>
          {storage.kind === 'sanity' ? (
            <p>
              Dataset “{storage.dataset}”. Published posts appear on the blog within a minute; drafts stay private.
            </p>
          ) : storage.kind === 'blocked' ? (
            <p role="alert">
              Nothing can be saved or published until this is fixed. {storage.reason} It does not fall back to this
              browser, so no post is lost silently.
            </p>
          ) : (
            <p>Sign in to use the studio.</p>
          )}
          {(storage.kind === 'sanity' || storage.kind === 'blocked') && (
            <div className={styles.signIn}>
              <button type="button" className={styles.btn} onClick={signOut}>Sign out</button>
            </div>
          )}
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
          store={studioStore}
          notify={notify}
          confirmAction={setConfirm}
        />
      )}

      {creating && (
        <CreateModal categories={categories} onCancel={() => setCreating(false)} onCreate={createPost} />
      )}

      {confirm && (
        <ConfirmModal
          {...confirm}
          onCancel={() => {
            setConfirm(null);
            confirm.onCancel?.();
          }}
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
  store,
  notify,
  confirmAction,
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
  store: StudioStore;
  notify: (m: string) => void;
  confirmAction: (c: ConfirmState) => void;
}) {
  const [pane, setPane] = useState<Pane>('content');
  const [slugTouched, setSlugTouched] = useState(() => !!draft.slug && draft.slug !== slugify(draft.title));
  const [tagsText, setTagsText] = useState(() => draft.tags.join(', '));
  const [secondaryText, setSecondaryText] = useState(() => (draft.secondaryKeywords ?? []).join(', '));
  const secondaryList = parseKeywordList(secondaryText);
  const secondaryOver = secondaryList.length > MAX_SECONDARY_KEYWORDS || secondaryList.some((k) => k.length > MAX_KEYWORD_LENGTH);
  const [addAt, setAddAt] = useState<number | null>(null);
  /** The "Paste article" area is open where the add-block menu would be. */
  const [pasting, setPasting] = useState(false);
  /** The last pasted article, to undo in one step while nothing else has changed. */
  const [undo, setUndo] = useState<{ before: Pick<StudioPost, 'blocks' | 'title' | 'slug'>; after: StudioPost; message: string } | null>(null);
  // Paste and Turn into compute the new blocks from the current post once, outside a state updater, so new block ids
  // (and the block to focus) are known before the update.
  const draftRef = useRef(draft);
  draftRef.current = draft;
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
      return await store.uploadImage(file);
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

  /** A table was pasted into a text field of block `index`: offer to turn it into a Table block (never automatic). */
  function askTablePaste(index: number, table: Extract<PastedTable, { ok: true }>, pasteAsText: () => void) {
    confirmAction({
      title: 'Paste as a table?',
      body: `This looks like a table (${table.rows} rows × ${table.columns} columns). Convert it to a Table block below this one? “Paste as text” pastes it as ordinary text instead.`,
      confirmLabel: 'Convert to table',
      cancelLabel: 'Paste as text',
      onConfirm: () => {
        const block = { ...newBlock('table'), rows: table.text } as StudioBlock;
        setDraft((d) => ({ ...d, blocks: [...d.blocks.slice(0, index + 1), block, ...d.blocks.slice(index + 1)] }));
        notify(`Table block added: ${table.rows} rows × ${table.columns} columns.`);
        requestAnimationFrame(() =>
          document.getElementById(`block-${block.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
        );
      },
      onCancel: pasteAsText,
    });
  }

  /**
   * Puts a pasted article's blocks at `at`, and its title if the post has none (decision.md D047). One step can be
   * undone. Refused pastes and pastes that would pass the post's block limit change nothing.
   */
  function insertArticle(article: PastedArticle, at: number) {
    if (article.refused) return notify(article.notes.join(' '));
    const d = draftRef.current;
    const total = d.blocks.length + article.blocks.length;
    if (total > MAX_POST_BLOCKS) {
      return notify(`A post can have at most ${MAX_POST_BLOCKS} blocks, and this paste would make ${total}. Nothing was converted.`);
    }
    const notes: string[] = [];
    let { title, slug } = d;
    if (article.title) {
      if (!d.title.trim()) {
        title = article.title;
        if (!slugTouched && !slugLocked) slug = slugify(title);
        notes.push('The title was filled in from the paste.');
      } else {
        notes.push(`The pasted title “${article.title}” was left out: this post already has a title.`);
      }
    }
    if (!article.blocks.length && title === d.title) return notify(notes.join(' ') || 'There was nothing to paste.');
    const after = { ...d, title, slug, blocks: [...d.blocks.slice(0, at), ...article.blocks, ...d.blocks.slice(at)] };
    const message = [article.blocks.length ? `Pasted ${describeBlocks(article.blocks)}.` : '', ...notes, ...article.notes].filter(Boolean).join(' ');
    setDraft(() => after);
    setUndo({ before: { blocks: d.blocks, title: d.title, slug: d.slug }, after, message });
    setPasting(false);
    setAddAt(null);
    notify(message);
    const first = article.blocks[0];
    if (first) {
      requestAnimationFrame(() => document.getElementById(`block-${first.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    }
  }

  // Undo is offered only while the post is exactly as the paste left it, so it never discards later edits.
  const canUndo = !!undo && draft.blocks === undo.after.blocks && draft.title === undo.after.title;

  function undoPaste() {
    if (!undo) return;
    const { before } = undo;
    setDraft((d) => ({ ...d, ...before }));
    setUndo(null);
    notify('Paste undone.');
  }

  /** An article was pasted into a text box of block `blockId`: offer to split it into blocks (never automatic, as D044). */
  function askArticlePaste(blockId: string, article: PastedArticle, pasteAsText: () => void) {
    confirmAction({
      title: 'Split into blocks?',
      body: (
        <>
          <p>
            This looks like an article: {describeBlocks(article.blocks)}{article.title ? ' and a title' : ''}. Split it into blocks below
            this one? “Paste as text” pastes it into this box as ordinary text.
          </p>
          {article.source === 'apple' && <p className={styles.modalNote}>{APPLE_PASTE_NOTE}</p>}
        </>
      ),
      confirmLabel: 'Split into blocks',
      cancelLabel: 'Paste as text',
      onConfirm: () => insertArticle(article, draftRef.current.blocks.findIndex((b) => b.id === blockId) + 1),
      onCancel: pasteAsText,
    });
  }

  /** One image paste uploads at a time; another paste while it runs is refused with a message. */
  const imagePasteBusy = useRef(false);

  /**
   * A pasted image (decision.md D048): uploaded through the normal path (resized to WebP in the browser, checked on the
   * server), then a new Image block at `at()` (worked out when the upload finishes, as blocks may have moved).
   */
  async function pasteImageBlock(file: File, at: () => number, fromPasteArea = false) {
    if (imagePasteBusy.current) return notify('Still uploading the last image. Paste again when it is done.');
    imagePasteBusy.current = true;
    notify('Uploading image…');
    try {
      const src = await upload(file);
      if (!src) return;
      const block = { ...newBlock('image'), src } as StudioBlock;
      const index = Math.min(at(), draftRef.current.blocks.length);
      setDraft((d) => ({ ...d, blocks: [...d.blocks.slice(0, index), block, ...d.blocks.slice(index)] }));
      if (fromPasteArea) {
        setPasting(false);
        setAddAt(null);
      }
      notify('Image uploaded. Add its alt text.');
      focusAltText(block.id);
    } finally {
      imagePasteBusy.current = false;
    }
  }

  /** Where a block pasted into the box of block `blockId` goes: right after it (or at the end if it was removed). */
  const afterBlock = (blockId: string) => () => {
    const i = draftRef.current.blocks.findIndex((b) => b.id === blockId);
    return i === -1 ? draftRef.current.blocks.length : i + 1;
  };

  /** Typing in the paste area starts a Paragraphs block with that text and moves the cursor into it. */
  function startWriting(text: string, at: number) {
    const block = { ...newBlock('text'), text } as StudioBlock;
    setDraft((d) => ({ ...d, blocks: [...d.blocks.slice(0, at), block, ...d.blocks.slice(at)] }));
    setPasting(false);
    setAddAt(null);
    // Focusing the box starts its editor with the cursor at the end.
    requestAnimationFrame(() => document.querySelector<HTMLElement>(`#block-${block.id} [data-format-box]`)?.focus());
  }

  function turnInto(blockId: string, startLine: number, endLine: number, target: TurnInto) {
    const result = convertLines(draftRef.current.blocks, blockId, startLine, endLine, target);
    if (result.blocks === draftRef.current.blocks) return;
    setDraft((d) => ({ ...d, blocks: result.blocks }));
    requestAnimationFrame(() => document.querySelector<HTMLElement>(`#block-${result.focusId} [data-format-box]`)?.focus());
  }

  function insertBlock(type: StudioBlockType) {
    const block = newBlock(type);
    const at = addAt ?? draft.blocks.length;
    setDraft((d) => ({ ...d, blocks: [...d.blocks.slice(0, at), block, ...d.blocks.slice(at)] }));
    setAddAt(null);
    setPasting(false);
    requestAnimationFrame(() =>
      document.getElementById(`block-${block.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    );
  }

  /** The add-block menu at position `at`, or the paste area in its place. */
  const addControls = (at: number, onCancel?: () => void) =>
    pasting && draft.blocks.length ? (
      <PasteArea
        onPasteArticle={(article) => insertArticle(article, at)}
        onPasteImage={(file) => pasteImageBlock(file, () => at, true)}
        notify={notify}
        onType={(text) => startWriting(text, at)}
        onCancel={() => {
          setPasting(false);
          onCancel?.();
        }}
      />
    ) : (
      <AddBlockMenu onAdd={insertBlock} onCancel={onCancel} onPasteArticle={draft.blocks.length ? () => setPasting(true) : undefined} />
    );

  const primary =
    draft.status === 'draft'
      ? { label: 'Publish', status: 'published' as const }
      : draft.status === 'scheduled'
        ? { label: 'Save schedule', status: 'scheduled' as const }
        : { label: 'Save changes', status: 'published' as const };

  const resolved = resolveBlocks(draft.blocks);
  const anchors = headingAnchors(resolved);
  const outline = resolved.flatMap((b) => {
    const heading = blockHeading(b);
    return heading && heading.text.trim() ? [{ id: b.id, ...heading }] : [];
  });
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
                    notify={notify}
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

                  {canUndo && undo && (
                    <div className={styles.undoBar} role="status">
                      <span>{undo.message}</span>
                      <div className={styles.undoActions}>
                        <button type="button" className={styles.btn} onClick={undoPaste}>
                          <Undo2 size={15} /> Undo paste
                        </button>
                        <IconButton label="Dismiss" onClick={() => setUndo(null)}><X size={15} /></IconButton>
                      </div>
                    </div>
                  )}

                  {draft.blocks.length === 0 && (
                    <PasteArea
                      large
                      onPasteArticle={(article) => insertArticle(article, 0)}
                      onPasteImage={(file) => pasteImageBlock(file, () => 0, true)}
                      notify={notify}
                      onType={(text) => startWriting(text, 0)}
                    />
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
                        onAddBelow={() => setAddAt((at) => (at === i + 1 ? null : i + 1))}
                        onUpload={upload}
                        onTablePaste={(table, pasteAsText) => askTablePaste(i, table, pasteAsText)}
                        onArticlePaste={(article, pasteAsText) => askArticlePaste(b.id, article, pasteAsText)}
                        onImagePaste={(file) => pasteImageBlock(file, afterBlock(b.id))}
                        onTurnInto={(startLine, endLine, target) => turnInto(b.id, startLine, endLine, target)}
                        notify={notify}
                      />
                      {addAt === i + 1 && i + 1 < draft.blocks.length && addControls(i + 1, () => setAddAt(null))}
                    </React.Fragment>
                  ))}

                  {addAt === null || addAt >= draft.blocks.length ? addControls(draft.blocks.length) : null}
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
                <span className={`${styles.groupLabel} ${styles.groupLabelFirst}`}>Tags · shown on the post</span>
                <Field label="Tags" hint="3–6 labels that group the post. Shown on the post page and kept in the page's meta tags.">
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

                <span className={styles.groupLabel}>SEO keywords · not shown on the post</span>
                <Field label="Focus keyword" hint="The one phrase this post should rank for. The checklist looks for it in the title, description, a heading and the first paragraph.">
                  <input className={styles.input} value={draft.focusKeyword} placeholder="email marketing automation" onChange={(e) => set('focusKeyword', e.target.value)} />
                </Field>
                <Field
                  label="Secondary keywords"
                  count={`${secondaryList.length} / ${MAX_SECONDARY_KEYWORDS}`}
                  countState={secondaryOver || (secondaryList.length > 0 && (secondaryList.length < 2 || secondaryList.length > 5)) ? 'warn' : secondaryList.length ? 'ok' : undefined}
                  hint={secondaryOver
                    ? `Use at most ${MAX_SECONDARY_KEYWORDS} phrases of ${MAX_KEYWORD_LENGTH} characters or fewer: saving is refused until then.`
                    : `2–5 related phrases, separated by commas (at most ${MAX_SECONDARY_KEYWORDS}, ${MAX_KEYWORD_LENGTH} characters each). Added to the page's structured data.`}
                >
                  <input
                    className={styles.input}
                    value={secondaryText}
                    placeholder="automated email campaigns, email workflow automation"
                    onChange={(e) => {
                      setSecondaryText(e.target.value);
                      set('secondaryKeywords', parseKeywordList(e.target.value));
                    }}
                  />
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
                    <li key={h.id} className={h.level === 3 ? styles.outlineSub : h.level === 4 ? styles.outlineSubSub : undefined}>
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
  onUploaded,
  notify,
  hint,
}: {
  value: string;
  onChange: (v: string) => void;
  onUpload: (f: File) => Promise<string | null>;
  /** Called after an image was uploaded and set (by Upload or by pasting). */
  onUploaded?: () => void;
  notify: (m: string) => void;
  hint?: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  // State updates are not immediate: the ref stops a second paste from starting a second upload.
  const busyRef = useRef(false);
  const uploaded = value.startsWith('data:');

  async function uploadFile(file: File, pasted: boolean) {
    if (busyRef.current) return notify('Still uploading the last image. Paste again when it is done.');
    busyRef.current = true;
    setBusy(true);
    if (pasted) notify('Uploading image…');
    const url = await onUpload(file);
    busyRef.current = false;
    setBusy(false);
    if (!url) return;
    onChange(url);
    if (pasted) notify('Image uploaded. Add its alt text.');
    onUploaded?.();
  }
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
          placeholder={uploaded ? 'Uploaded image (stored inside the post)' : 'Paste an image (⌘V), use Upload, or type /images/blog/…'}
          onChange={(e) => onChange(e.target.value.trim())}
          onPaste={(e) => {
            const image = imagePaste(e.clipboardData);
            if (!image) return;
            e.preventDefault();
            if ('file' in image) uploadFile(image.file, true);
            else notify(image.message);
          }}
          aria-label="Image path"
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
          if (f) uploadFile(f, false);
        }}
      />
    </div>
  );
}

/** Where a writer pastes a whole article (articlePaste.ts): it becomes blocks at once. Typing starts a Paragraphs block. */
function PasteArea({
  large,
  onPasteArticle,
  onPasteImage,
  notify,
  onType,
  onCancel,
}: {
  large?: boolean;
  onPasteArticle: (article: PastedArticle) => void;
  /** A single image (no text) is uploaded into a new Image block here. */
  onPasteImage: (file: File) => void;
  notify: (m: string) => void;
  onType: (text: string) => void;
  onCancel?: () => void;
}) {
  const hintId = useId();
  return (
    <div className={cx(styles.pasteArea, large && styles.pasteAreaLarge)}>
      <div className={styles.addMenuHead}>
        <span className={styles.pasteTitle}><ClipboardPaste size={16} aria-hidden="true" /> Paste article</span>
        {onCancel && <button type="button" onClick={onCancel} aria-label="Cancel"><X size={15} /></button>}
      </div>
      <textarea
        className={cx(styles.input, styles.pasteInput)}
        value=""
        rows={large ? 7 : 4}
        autoFocus={!large}
        aria-label="Paste your article"
        aria-describedby={hintId}
        placeholder="Paste your article here: headings, lists, tables and links from Google Docs or Word are kept."
        onPaste={(e) => {
          e.preventDefault();
          const image = imagePaste(e.clipboardData);
          if (image && 'file' in image) onPasteImage(image.file);
          else if (image) notify(image.message);
          else onPasteArticle(articleFromClipboard(e.clipboardData.getData('text/html'), e.clipboardData.getData('text/plain')));
        }}
        onChange={(e) => e.target.value && onType(e.target.value)}
      />
      <span id={hintId} className={styles.hint}>
        Markdown and plain text work too. Images are not copied: each becomes an empty Image block to upload. Or start typing to
        write paragraphs.
      </span>
    </div>
  );
}

function AddBlockMenu({ onAdd, onCancel, onPasteArticle }: { onAdd: (t: StudioBlockType) => void; onCancel?: () => void; onPasteArticle?: () => void }) {
  return (
    <div className={styles.addMenu}>
      <div className={styles.addMenuHead}>
        <span>Add a block</span>
        {onCancel && <button type="button" onClick={onCancel} aria-label="Cancel"><X size={15} /></button>}
      </div>
      <div className={styles.addGrid}>
        {onPasteArticle && (
          <button type="button" className={cx(styles.addBlock, styles.addPaste)} onClick={onPasteArticle}>
            <ClipboardPaste size={16} /> Paste article
          </button>
        )}
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

/**
 * A block only re-renders when it, its position or the number of blocks changes, so typing in one box of a long post
 * does not re-render every other block. The callbacks read the post through state updaters or `draftRef`, never from
 * the render that created them (decision.md D049).
 */
const BlockCard = React.memo(BlockCardInner, (a, b) => a.block === b.block && a.index === b.index && a.count === b.count);

function BlockCardInner({
  block,
  index,
  count,
  onChange,
  onMove,
  onRemove,
  onAddBelow,
  onUpload,
  onTablePaste,
  onArticlePaste,
  onImagePaste,
  onTurnInto,
  notify,
}: {
  block: StudioBlock;
  index: number;
  count: number;
  onChange: (patch: Partial<StudioBlock>) => void;
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
  onAddBelow: () => void;
  onUpload: (f: File) => Promise<string | null>;
  onTablePaste: (table: Extract<PastedTable, { ok: true }>, pasteAsText: () => void) => void;
  onArticlePaste: (article: PastedArticle, pasteAsText: () => void) => void;
  onImagePaste: (file: File) => void;
  onTurnInto: (startLine: number, endLine: number, target: TurnInto) => void;
  notify: (m: string) => void;
}) {
  const paste = { onTablePaste, onArticlePaste, onImagePaste, notify };
  const Icon = BLOCK_ICONS[block.type];
  const name = block.type === 'heading' ? `Heading (H${block.level})` : BLOCK_LABELS[block.type];

  let body: React.ReactNode = null;
  switch (block.type) {
    case 'heading':
      body = (
        <div className={styles.headingRow}>
          <select
            className={styles.input}
            value={block.level}
            onChange={(e) => onChange({ level: Number(e.target.value) as HeadingLevel })}
            aria-label="Heading level"
          >
            <option value={2}>H2 section</option>
            <option value={3}>H3 sub-section</option>
            <option value={4}>H4 minor heading</option>
          </select>
          <RichTextBox
            kind="heading"
            blockType="heading"
            label="Heading text"
            value={block.text}
            placeholder="A heading that tells the reader what this section explains"
            onChange={(text) => onChange({ text })}
            onTurnInto={onTurnInto}
            onImagePaste={onImagePaste}
            notify={notify}
          />
        </div>
      );
      break;
    case 'text':
      body = (
        <RichTextBox
          {...paste}
          kind="paragraphs"
          blockType="text"
          onTurnInto={onTurnInto}
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
          <RichTextBox {...paste} kind="list" blockType="list" ordered={block.ordered} rows={3} onTurnInto={onTurnInto} label="List items" value={block.items} placeholder={'One item per line\nSecond item\nThird item'} onChange={(items) => onChange({ items })} />
        </>
      );
      break;
    case 'image':
      body = (
        <>
          <ImageField
            value={block.src}
            onChange={(src) => onChange({ src })}
            onUpload={onUpload}
            onUploaded={() => focusAltText(block.id)}
            notify={notify}
          />
          <Field label="Alt text" required hint="Describe what the image shows. Also used as the image title.">
            <input className={styles.input} data-alt-input="" value={block.alt} onChange={(e) => onChange({ alt: e.target.value })} />
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
          <RichTextBox {...paste} kind="paragraphs" blockType="quote" onTurnInto={onTurnInto} label="Quote" value={block.text} rows={3} placeholder="The sharpest sentence of the section" onChange={(text) => onChange({ text })} />
          <Field label="Attribution (optional)" hint="Only quote real, sourced people.">
            <input className={styles.input} value={block.cite} onChange={(e) => onChange({ cite: e.target.value })} />
          </Field>
        </>
      );
      break;
    case 'table': {
      body = (
        <Field label="Rows" hint="One row per line, cells separated by |. The first row is the header. You can paste a table straight from Word, Google Docs or Excel.">
          <textarea
            className={styles.input}
            rows={5}
            value={block.rows}
            placeholder={'Manual process | Automated process\nCopying leads by hand | Leads arrive in the CRM'}
            onChange={(e) => onChange({ rows: e.target.value })}
            onPaste={(e) => {
              const table = tableFromClipboard(e.clipboardData.getData('text/html'), e.clipboardData.getData('text/plain'));
              if (table.ok) {
                // Replace the selection, keeping the pasted rows on lines of their own.
                const { selectionStart: s, selectionEnd: end } = e.currentTarget;
                const before = block.rows.slice(0, s);
                const after = block.rows.slice(end);
                const lead = before && !before.endsWith('\n') ? '\n' : '';
                const trail = after && !after.startsWith('\n') ? '\n' : '';
                e.preventDefault();
                onChange({ rows: before + lead + table.text + trail + after });
                notify(`Table pasted: ${table.rows} rows × ${table.columns} columns.`);
              } else if (table.reason === 'too-large') {
                e.preventDefault();
                notify(`That table is ${table.rows} rows × ${table.columns} columns. The limit is ${MAX_TABLE_ROWS} × ${MAX_TABLE_COLUMNS}: split it and paste the parts separately.`);
              }
            }}
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
          <RichTextBox {...paste} kind="paragraphs" blockType="faq" label="Answer" value={block.answer} rows={3} placeholder="The answer, as it should appear on the page" onChange={(answer) => onChange({ answer })} />
          <span className={styles.hint}>FAQs are added to the page’s FAQ schema with exactly this text.</span>
        </>
      );
      break;
    case 'sources':
      body = <SourcesEditor block={block} onChange={onChange} />;
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

/** The rows of a Sources block (D049): publisher, title, link and date, which the page shows as one numbered list. */
function SourcesEditor({
  block,
  onChange,
}: {
  block: Extract<StudioBlock, { type: 'sources' }>;
  onChange: (patch: Partial<StudioBlock>) => void;
}) {
  const setItems = (items: StudioSource[]) => onChange({ items } as Partial<StudioBlock>);
  const update = (id: string, patch: Partial<StudioSource>) => setItems(block.items.map((i) => (i.id === id ? { ...i, ...patch } : i)));
  const move = (index: number, dir: -1 | 1) => {
    const items = [...block.items];
    [items[index], items[index + dir]] = [items[index + dir], items[index]];
    setItems(items);
  };
  return (
    <>
      <Field label="Heading" hint="Shown as an H2 and listed in the page's guide. Keep Sources as the last block.">
        <input className={styles.input} value={block.heading} placeholder="Sources and reading" onChange={(e) => onChange({ heading: e.target.value } as Partial<StudioBlock>)} />
      </Field>
      <ol className={styles.sourceRows}>
        {block.items.map((item, i) => {
          const problem = item.url.trim() ? linkProblem(item.url) : null;
          const n = i + 1;
          return (
            <li key={item.id} className={styles.sourceRow}>
              <div className={styles.sourceHead}>
                <span>Source {n}</span>
                <div className={styles.blockControls}>
                  <IconButton label={`Move source ${n} up`} onClick={() => move(i, -1)} disabled={i === 0}><ArrowUp size={15} /></IconButton>
                  <IconButton label={`Move source ${n} down`} onClick={() => move(i, 1)} disabled={i === block.items.length - 1}><ArrowDown size={15} /></IconButton>
                  <IconButton label={`Remove source ${n}`} onClick={() => setItems(block.items.filter((x) => x.id !== item.id))}><Trash2 size={15} /></IconButton>
                </div>
              </div>
              <div className={styles.twoCol}>
                <Field label="Publisher">
                  <input className={styles.input} value={item.publisher} maxLength={120} placeholder="HubSpot" onChange={(e) => update(item.id, { publisher: e.target.value })} />
                </Field>
                <Field label="Title" required>
                  <input className={styles.input} value={item.title} maxLength={200} placeholder="The page or report's title" onChange={(e) => update(item.id, { title: e.target.value })} />
                </Field>
                <Field label="Link" hint={problem ?? undefined}>
                  <input className={styles.input} value={item.url} maxLength={600} placeholder="https://…" aria-invalid={!!problem} onChange={(e) => update(item.id, { url: e.target.value })} />
                </Field>
                <Field label="Date">
                  <input className={styles.input} value={item.date} maxLength={40} placeholder="checked 27 October 2026" onChange={(e) => update(item.id, { date: e.target.value })} />
                </Field>
              </div>
            </li>
          );
        })}
      </ol>
      <button type="button" className={styles.btn} disabled={block.items.length >= MAX_SOURCES} onClick={() => setItems([...block.items, newSource()])}>
        <Plus size={15} /> Add row
      </button>
      {block.items.length >= MAX_SOURCES && <span className={styles.hint}>At most {MAX_SOURCES} sources.</span>}
    </>
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
  cancelLabel,
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
          <button type="button" className={styles.btn} onClick={onCancel} autoFocus>{cancelLabel ?? 'Cancel'}</button>
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
                {post.blocks.length ? <StudioArticle blocks={post.blocks} preview /> : <p>No article content yet.</p>}
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
