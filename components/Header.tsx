'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import logo from '@/public/sage-kite-logo-transparent.png';
import { PLATFORM_GROUPS, PLATFORMS, type PlatformGroup } from '@/content/platforms';

/** The Platforms dropdown's id (aria-controls on its chevron button). */
export const PLATFORM_MENU_ID = 'nav-platforms';

/*
 * Rows of the dropdown: only platforms with a `slug` (a published page), each labelled with its
 * group's navLabel (else label). "General CRMs" is the cross-industry group; "By industry" is every
 * other group, in PLATFORM_GROUPS order, then PLATFORMS order inside a group (decision.md D071).
 */
interface PlatformRow { name: string; slug: string; group: PlatformGroup }
const rowsOf = (group: PlatformGroup): PlatformRow[] =>
  PLATFORMS.flatMap((p) => (p.group === group.id && p.slug ? [{ name: p.name, slug: p.slug, group }] : []));
const GENERAL_ROWS = PLATFORM_GROUPS.filter((g) => g.id === 'cross-industry').flatMap(rowsOf);
const INDUSTRY_ROWS = PLATFORM_GROUPS.filter((g) => g.id !== 'cross-industry').flatMap(rowsOf);

/** Hover opens the dropdown only with a mouse, and only at the desktop layout (the mobile menu is below 1041px). */
const canHoverOpen = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  window.matchMedia('(min-width: 1041px)').matches;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [platOpen, setPlatOpenState] = useState(false);
  // The same value, readable at once by event handlers: hover and a click can arrive before React re-renders.
  const platOpenNow = useRef(false);
  const setPlatOpen = (next: boolean) => {
    platOpenNow.current = next;
    setPlatOpenState(next);
  };
  const platItem = useRef<HTMLLIElement>(null);
  const platButton = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // True while the dropdown is open only because the pointer is over it; a click then keeps it open.
  const openedByHover = useRef(false);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const closePlatforms = () => {
    cancelClose();
    openedByHover.current = false;
    setPlatOpen(false);
  };
  /** Any link in the menu: close the dropdown and the mobile menu. */
  const closeAll = () => {
    closePlatforms();
    setOpen(false);
  };

  // A new page closes the dropdown.
  useEffect(() => {
    closePlatforms();
  }, [pathname]);

  // While open: Escape and a click outside close it.
  useEffect(() => {
    if (!platOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      const focusInside = platItem.current?.contains(document.activeElement);
      closePlatforms();
      if (focusInside) platButton.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!platItem.current?.contains(e.target as Node)) closePlatforms();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [platOpen]);

  useEffect(() => cancelClose, []);

  const onPlatEnter = () => {
    if (!canHoverOpen()) return;
    cancelClose();
    if (!platOpenNow.current) {
      openedByHover.current = true;
      setPlatOpen(true);
    }
  };
  const onPlatLeave = () => {
    if (!openedByHover.current) return;
    cancelClose();
    closeTimer.current = setTimeout(closePlatforms, 150);
  };
  const onPlatToggle = () => {
    cancelClose();
    // Opened by hovering, then clicked: keep it open (until Escape, a click outside or focus leaving).
    if (platOpenNow.current && openedByHover.current) {
      openedByHover.current = false;
      return;
    }
    openedByHover.current = false;
    setPlatOpen(!platOpenNow.current);
  };

  const platformRow = (p: PlatformRow) => {
    const href = `/platforms/${p.slug}`;
    return (
      <li key={p.slug}>
        <Link
          className="plat-row-link"
          href={href}
          onClick={closeAll}
          aria-current={pathname === href ? 'page' : undefined}
          style={{ '--c': p.group.color } as CSSProperties}
        >
          <span className="plat-name">{p.name}</span>
          <span className="plat-ind"><span className="plat-dot" aria-hidden="true" />{p.group.navLabel ?? p.group.label}</span>
        </Link>
      </li>
    );
  };
  const allPlatforms = (
    <p className="plat-foot">
      <Link href="/platforms" onClick={closeAll}>All platforms <ArrowRight size={16} aria-hidden="true" /></Link>
    </p>
  );

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          {/* Displayed at --w (135px, 140px at 420px and below) in globals.css. The fixed
              aspect-ratio keeps the original's proportions; a resized file rounds its height. */}
          <Image
            src={logo}
            alt="Sage Kite" title="Sage Kite"
            sizes="(max-width: 420px) 140px, 135px"
            loading="eager"
            style={{ aspectRatio: `${logo.width} / ${logo.height}` }}
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => {
            if (open) closePlatforms();
            setOpen(!open);
          }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <ul>
                                    <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li
              ref={platItem}
              className="has-plat"
              onMouseEnter={onPlatEnter}
              onMouseLeave={onPlatLeave}
              onBlur={(e) => {
                // Focus moved to something outside the item (Tab past the last link, or Shift+Tab before it).
                const next = e.relatedTarget as Node | null;
                if (next && !platItem.current?.contains(next)) closePlatforms();
              }}
            >
              <div className="plat-row">
                <Link href="/platforms" onClick={closeAll}>Platforms</Link>
                <button
                  ref={platButton}
                  type="button"
                  className="plat-toggle"
                  aria-label="Show platform pages"
                  aria-expanded={platOpen}
                  aria-controls={PLATFORM_MENU_ID}
                  onClick={onPlatToggle}
                >
                  <ChevronDown size={16} aria-hidden="true" />
                </button>
              </div>
              {/* Always rendered, so every platform page is linked from the HTML of every page; hidden by CSS when closed. */}
              <div id={PLATFORM_MENU_ID} className={`plat-menu${platOpen ? ' is-open' : ''}`}>
                <div className={`plat-panel${GENERAL_ROWS.length ? '' : ' no-side'}`}>
                  {GENERAL_ROWS.length > 0 && (
                    <div className="plat-side">
                      <p className="plat-head">General CRMs</p>
                      <ul>{GENERAL_ROWS.map(platformRow)}</ul>
                      {allPlatforms}
                    </div>
                  )}
                  <div className="plat-main">
                    <p className="plat-head">By industry</p>
                    <ul className="plat-list">{INDUSTRY_ROWS.map(platformRow)}</ul>
                    {GENERAL_ROWS.length === 0 && allPlatforms}
                  </div>
                </div>
              </div>
            </li>
            <li><Link href="/industries" onClick={() => setOpen(false)}>Industries</Link></li>
            <li><Link href="/case-studies" onClick={() => setOpen(false)}>Case studies</Link></li>
            <li><Link href="/blog" onClick={() => setOpen(false)}>Blogs</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About us</Link></li>
            <li className="mobile-only-btn"><Link href="/contact" className="btn btn-small" onClick={() => setOpen(false)}>Get in touch</Link></li>
          </ul>
        </nav>

        <div className="header-cta">
          <Link href="/contact" className="btn btn-small">Get in touch</Link>
        </div>
      </div>
    </header>
  );
}
