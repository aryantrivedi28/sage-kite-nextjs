'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CONTACT, CONTACT_WEBHOOK_URL, ENQUIRY_TYPES } from '@/content/contact';

/*
 * Temporary submit handler supplied by the team lead: sends the enquiry straight
 * to a GoHighLevel inbound webhook. The webhook URL is CONTACT_WEBHOOK_URL in
 * content/contact.ts.
 */
const GHL_WEBHOOK_URL = CONTACT_WEBHOOK_URL;

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/**
 * Enquiry form for /contact. A ?service=<value> query string
 * (e.g. /contact?service=marketing) preselects "What do you need?".
 */
export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [trap, setTrap] = useState('');

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get('service');
    if (s && ENQUIRY_TYPES.some((t) => t.value === s)) setFormData((f) => ({ ...f, service: s }));
  }, []);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((f) => ({ ...f, [k]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (trap) { setIsSuccess(true); return; } // spam trap: filled in by bots only
    setIsSubmitting(true);
    setError('');

    // Validate form data
    if (!formData.name.trim()) {
      setError('Please enter your name');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter your message');
      setIsSubmitting(false);
      return;
    }

    // No webhook configured yet: do not report a send that did not happen.
    if (!GHL_WEBHOOK_URL) {
      setError(`The form is not accepting enquiries yet. Please email ${CONTACT.email}`);
      setIsSubmitting(false);
      return;
    }

    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || '';

      // Prepare payload for GoHighLevel
      const payload = {
        name: formData.name,
        first_name: firstName,
        last_name: lastName,
        email: formData.email,
        phone: formData.phone || '',
        service: formData.service || 'Not specified',
        message: formData.message,
        source: 'Website Contact Form',
        timestamp: new Date().toISOString(),
        ip_address: '',
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      };

      // Send to GoHighLevel Webhook
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

      // Optional: Track conversion in Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'contact_form_submission',
        });
      }

      setTimeout(() => setIsSuccess(false), 5000);

    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="cf-done" role="status">
        <span className="cf-done-icon"><Check size={22} aria-hidden="true" /></span>
        <h3>Thank you. Your enquiry has been sent.</h3>
        <p>We will reply within 24 hours on business days. If it is urgent, email <a className="link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
      </div>
    );
  }

  return (
    <form className="cf" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-name">Your name <span aria-hidden="true">*</span></label>
          <input id="cf-name" name="name" autoComplete="name" required value={formData.name} onChange={set('name')} />
        </div>
        <div className="cf-field">
          <label htmlFor="cf-email">Email address <span aria-hidden="true">*</span></label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={set('email')} />
        </div>
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-service">What do you need?</label>
          <select id="cf-service" name="service" value={formData.service} onChange={set('service')}>
            <option value="" disabled>Choose a service</option>
            {ENQUIRY_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
        <div className="cf-field">
          <label htmlFor="cf-phone">Phone <span className="cf-opt">(optional)</span></label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={set('phone')} />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-message">How can we help? <span aria-hidden="true">*</span></label>
        <textarea id="cf-message" name="message" rows={5} required placeholder="Your business, the tools you use today and what you want to change" value={formData.message} onChange={set('message')} />
      </div>

      {/* Spam trap: hidden from people, filled in by bots */}
      <div className="cf-trap" aria-hidden="true">
        <label htmlFor="cf-website">Leave this empty</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>

      <button type="submit" className="btn cf-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : <>Send enquiry <ArrowRight size={18} aria-hidden="true" /></>}
      </button>

      <div role="status" aria-live="polite">
        {error && <p className="cf-alert">{error}</p>}
      </div>

      <p className="cf-fine">We reply within 24 hours on business days. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
    </form>
  );
}
