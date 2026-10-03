'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CONTACT, CONTACT_WEBHOOK_URL, ENQUIRY_TYPES } from '@/content/contact';

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'not-connected';

const EMPTY: Fields = { name: '', email: '', phone: '', service: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  if (!f.email.trim()) e.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'Please enter a valid email address.';
  if (!f.service) e.service = 'Please choose what you need.';
  if (f.message.trim().length < 10) e.message = 'Please tell us a little about your business or project.';
  return e;
}

/**
 * Enquiry form for /contact. POSTs JSON to CONTACT_WEBHOOK_URL (content/contact.ts).
 * A ?service=<value> query string (e.g. /contact?service=marketing) preselects
 * "What do you need?".
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [trap, setTrap] = useState('');

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get('service');
    if (s && ENQUIRY_TYPES.some((t) => t.value === s)) setFields((f) => ({ ...f, service: s }));
  }, []);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    if (trap) { setStatus('sent'); return; } // filled by bots only

    if (!CONTACT_WEBHOOK_URL) { setStatus('not-connected'); return; }

    setStatus('sending');
    try {
      const res = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          serviceLabel: ENQUIRY_TYPES.find((t) => t.value === fields.service)?.label,
          sourcePage: window.location.href,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      setFields(EMPTY);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="cf-done" role="status">
        <span className="cf-done-icon"><Check size={22} aria-hidden="true" /></span>
        <h3>Thank you. Your enquiry has been sent.</h3>
        <p>We will reply within 24 hours on business days. If it is urgent, email <a className="link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
      </div>
    );
  }

  const err = (k: keyof Fields) => errors[k] ? <span className="cf-err" id={`cf-${k}-err`}>{errors[k]}</span> : null;
  const aria = (k: keyof Fields) => ({ 'aria-invalid': !!errors[k] || undefined, 'aria-describedby': errors[k] ? `cf-${k}-err` : undefined });

  return (
    <form className="cf" onSubmit={onSubmit} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-name">Your name <span aria-hidden="true">*</span></label>
          <input id="cf-name" name="name" autoComplete="name" required value={fields.name} onChange={set('name')} {...aria('name')} />
          {err('name')}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-email">Email address <span aria-hidden="true">*</span></label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required value={fields.email} onChange={set('email')} {...aria('email')} />
          {err('email')}
        </div>
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-service">What do you need? <span aria-hidden="true">*</span></label>
          <select id="cf-service" name="service" required value={fields.service} onChange={set('service')} {...aria('service')}>
            <option value="" disabled>Choose a service</option>
            {ENQUIRY_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
          {err('service')}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-phone">Phone <span className="cf-opt">(optional)</span></label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" value={fields.phone} onChange={set('phone')} />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-message">How can we help? <span aria-hidden="true">*</span></label>
        <textarea id="cf-message" name="message" rows={5} required placeholder="Your business, the tools you use today and what you want to change" value={fields.message} onChange={set('message')} {...aria('message')} />
        {err('message')}
      </div>

      {/* Spam trap: hidden from people, filled in by bots */}
      <div className="cf-trap" aria-hidden="true">
        <label htmlFor="cf-website">Leave this empty</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>

      <button type="submit" className="btn cf-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <>Send enquiry <ArrowRight size={18} aria-hidden="true" /></>}
      </button>

      <div role="status" aria-live="polite">
        {status === 'error' && (
          <p className="cf-alert">Something went wrong and your enquiry was not sent. Please try again, or email <a className="link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
        )}
        {status === 'not-connected' && (
          <p className="cf-alert">The form is not accepting enquiries yet. Please email <a className="link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> and we will reply within 24 hours on business days.</p>
        )}
      </div>

      <p className="cf-fine">We reply within 24 hours on business days. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
    </form>
  );
}
