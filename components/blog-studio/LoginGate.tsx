'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { STUDIO_LOGIN_PATH } from './paths';
import styles from './BlogStudio.module.css';

/*
 * The studio's mandatory sign-in dialog (decision.md D035). It covers the whole screen and cannot be
 * dismissed: no close button, and neither the backdrop, Escape nor Tab leaves it. The studio behind it
 * is `inert` (BlogStudio.tsx), so it cannot be clicked, tabbed to or read by a screen reader.
 *
 * This is only the visible half of the gate. Every Server Action checks the session itself
 * (server.ts), so hiding or removing this dialog in the browser unlocks nothing.
 *
 * `unavailable` is shown when team sign-in is not set up (or not allowed, e.g. Vercel Preview). It
 * says nothing about why, and has no password field.
 */

export type GateMode = 'signin' | 'unavailable';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

export function LoginGate({ mode, onSignedIn }: { mode: GateMode; onSignedIn: () => void }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const [signingIn, setSigningIn] = useState(false);
  const titleId = useId();
  const textId = useId();
  const errorId = useId();

  useEffect(() => {
    const returnTo = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const box = boxRef.current;
    (mode === 'signin' ? inputRef.current : box)?.focus();

    // Nothing behind the dialog is reachable: keep the page from scrolling and keep focus inside the dialog.
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const keep = (e: FocusEvent) => {
      if (box && e.target instanceof Node && !box.contains(e.target)) (inputRef.current ?? box).focus();
    };
    document.addEventListener('focusin', keep);

    return () => {
      document.removeEventListener('focusin', keep);
      document.body.style.overflow = overflow;
      // Back to where the person was (for example the post they were editing), if it is still on the page.
      if (returnTo && returnTo !== document.body && document.contains(returnTo)) returnTo.focus();
    };
  }, [mode]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (e.key !== 'Tab' || !boxRef.current) return;
    const items = [...boxRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)];
    if (!items.length) {
      e.preventDefault();
      boxRef.current.focus();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === boxRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!password || signingIn) return;
    setSigningIn(true);
    setError('');
    try {
      const response = await fetch(STUDIO_LOGIN_PATH, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (response.ok && result.ok) {
        // The server has set the session cookie. The parent reloads the studio state.
        setPassword('');
        onSignedIn();
        return;
      }
      // Fixed texts: nothing from the server's reply other than the rate-limit notice is shown.
      setError(
        response.status === 401
          ? 'That password is not right.'
          : response.status === 429
            ? 'Too many attempts. Wait a few minutes and try again.'
            : 'Sign-in is not available right now. Try again later.',
      );
    } catch {
      setError('Could not sign in. Check your connection and try again.');
    }
    setSigningIn(false);
    inputRef.current?.focus();
  }

  return (
    <div className={styles.gate}>
      <div
        ref={boxRef}
        className={styles.gateBox}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={textId}
        tabIndex={-1}
        onKeyDown={onKeyDown}
      >
        <div className={styles.gateBrand}>
          <img src="/sage-kite-mark.png" alt="" width={36} height={36} />
          <span>Sage Kite <small>Blog Studio</small></span>
        </div>

        {mode === 'signin' ? (
          <form onSubmit={submit} noValidate>
            <h1 id={titleId} className={styles.gateTitle}>Sign in to continue</h1>
            <p id={textId} className={styles.gateText}>
              The Blog Studio is for the Sage Kite team. Enter the team password to open it.
            </p>
            <label htmlFor={`${titleId}-password`} className={styles.gateLabel}>Team password</label>
            <div className={styles.gatePassword}>
              <input
                ref={inputRef}
                id={`${titleId}-password`}
                className={styles.input}
                type={visible ? 'text' : 'password'}
                autoComplete="current-password"
                autoCapitalize="none"
                spellCheck={false}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
                disabled={signingIn}
              />
              <button
                type="button"
                className={styles.gateToggle}
                onClick={() => setVisible((v) => !v)}
                aria-label={visible ? 'Hide password' : 'Show password'}
                aria-pressed={visible}
              >
                {visible ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
              </button>
            </div>
            <p id={errorId} className={styles.gateError} role="alert">{error}</p>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.gateSubmit}`}
              disabled={!password || signingIn}
              aria-busy={signingIn}
            >
              {signingIn ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        ) : (
          <div>
            <h1 id={titleId} className={styles.gateTitle}><Lock size={20} aria-hidden="true" /> Blog Studio unavailable</h1>
            <p id={textId} className={styles.gateText}>
              The Blog Studio cannot be opened right now. Please contact the site administrator.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
