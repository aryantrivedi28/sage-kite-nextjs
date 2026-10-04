/**
 * Sage Kite contact details and enquiry settings.
 *
 * Used by the /contact page (app/contact/page.tsx) and its form
 * (components/contact/ContactForm.tsx). The same email, phone and address also
 * appear in the Privacy Policy and Terms of Service; keep them in step.
 */

/**
 * Where the contact form POSTs enquiries, as JSON. Empty until the backend
 * webhook exists: while empty, the form validates but does not send, and tells
 * the visitor to email instead.
 */
export const CONTACT_WEBHOOK_URL = '';

/**
 * Discovery-call booking page: /book (app/book/page.tsx) embeds the GHL booking
 * widget. Every "Book a discovery call" button on the site links there.
 */
export const BOOKING_URL = '/book';

export const CONTACT = {
  email: 'aryan@sagekite.com',
  phoneDisplay: '+91 98932 70210',
  phoneHref: 'tel:+919893270210',
  whatsappHref: 'https://wa.me/919893270210?text=Hello',
  location: 'Gurugram, India',
  locationNote: 'Working remotely with clients worldwide',
};

export const OFFICE_HOURS = [
  { days: 'Monday – Friday', hours: '9 AM – 6 PM IST' },
  { days: 'Saturday – Sunday', hours: 'Closed' },
  { days: 'Response time', hours: 'Within 24 hours (business days)' },
];

/** Options for "What do you need?". Values are sent with the enquiry. */
export const ENQUIRY_TYPES = [
  { value: 'consultancy', label: 'Consultancy (GTM, AI, fractional CMO)' },
  { value: 'crm-implementation', label: 'CRM implementation' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'specialist-staffing', label: 'Specialist staffing' },
  { value: 'white-label', label: 'White-label delivery (for agencies)' },
  { value: 'not-sure', label: 'Not sure yet' },
];
