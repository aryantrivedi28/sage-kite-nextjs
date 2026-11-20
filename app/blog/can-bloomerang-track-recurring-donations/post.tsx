import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import CanBloomerangTrackRecurringDonationsArticle from './article';

const post: BlogPost = {
  slug: 'can-bloomerang-track-recurring-donations',
  title: 'Can Bloomerang Track Recurring Donations? A Practical Guide',
  seoTitle: 'Can Bloomerang Track Recurring Donations? A Practical Guide',
  excerpt:
    'Yes. Here is how Bloomerang tracks recurring donation schedules, payments, failures and projected revenue, and where CRM and Fundraising differ.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-11-16',
  updatedAt: '2026-11-16',
  readingTime: '14 min read',
  featuredImage: '/images/blog/bloomerang-recurring-donations.png',
  imageAlt:
    'Bloomerang recurring donation schedule and payment records on a donor timeline',
  tags: [
    'Bloomerang',
    'Recurring donations',
    'Nonprofit CRM',
    'Fundraising',
    'Donor retention',
  ],
  focusKeyword: 'Bloomerang recurring donations',
  secondaryKeywords: [
    'Bloomerang recurring donation schedule',
    'Bloomerang recurring payment history',
    'Bloomerang failed recurring payments',
    'Bloomerang recurring donation reports',
    'Bloomerang projected revenue',
  ],
  featured: false,
  relatedPlatform: 'bloomerang',
  faqs: [
    {
      q: 'Can Bloomerang track monthly donations?',
      a: 'Yes. Monthly is a documented frequency for recurring donations in CRM, and a standard option on online forms.',
    },
    {
      q: 'Can Bloomerang show upcoming recurring payments?',
      a: "The schedule on the donor's timeline shows the next scheduled payment, and projected revenue reports list future installments for a date range.",
    },
    {
      q: 'How do I view recurring donation history?',
      a: "Open the constituent's timeline, click the Recurring Donation Schedule (or a payment, then Recurring Donation Schedule) and review the linked payments. In Fundraising, use Reporting > Recurring Payments.",
    },
    {
      q: 'Can Bloomerang identify failed recurring payments?',
      a: 'Yes. Card failures raise a bell notification and appear on the Payment Failures dashboard. EFT failures need a report filtered by EFT Processing Status = Failed.',
    },
    {
      q: 'Can I pause a recurring donation in Bloomerang?',
      a: 'In CRM, set an end date and remove it to resume. In Fundraising, use Pause and Resume under Reporting > Recurring Payments.',
    },
    {
      q: 'Can Bloomerang report on recurring donation revenue?',
      a: 'Yes. CRM uses transaction reports with projected revenue; Fundraising has a Recurring Payments report and a recurring forecast report.',
    },
    {
      q: 'What is the difference between a recurring donation and a pledge?',
      a: 'A recurring donation is an ongoing gift on a schedule; a pledge is a promise to give a fixed amount over a set time. They are separate records.',
    },
    {
      q: 'Does Bloomerang automatically process recurring donations?',
      a: 'For cards, EFT accounts and digital wallets processed in Bloomerang, yes. Cash and check payments must be entered manually, and payments handled by other processors depend on that setup.',
    },
    {
      q: "Can I update a donor's payment method?",
      a: "Yes. In CRM, edit the schedule's method; changes apply to future payments. In Fundraising, use the organization-level control panel.",
    },
  ],
  guide: [
    { id: 'quick-answer', title: 'Quick answer' },
    {
      id: 'how-does-bloomerang-track-recurring-donations',
      title: 'How does Bloomerang track recurring donations?',
    },
    {
      id: 'schedule-vs-payment',
      title:
        'What is the difference between a recurring donation schedule and a recurring donation payment?',
    },
    {
      id: 'recurring-vs-pledge',
      title: 'How recurring donations differ from pledges',
    },
    {
      id: 'how-to-view-recurring-donations',
      title:
        'How to view recurring donation schedules and payment history in Bloomerang CRM',
    },
    {
      id: 'monthly-quarterly-annual',
      title: 'Can Bloomerang track monthly, quarterly and annual donations?',
    },
    {
      id: 'failed-or-missed-recurring-donations',
      title: 'How to track failed or missed recurring donations in Bloomerang',
    },
    {
      id: 'card-and-wallet-failures',
      title: 'Credit card and digital wallet failures',
    },
    { id: 'eft-failures', title: 'EFT failures' },
    {
      id: 'pause-change-end',
      title: 'Can you pause, change or end a recurring donation in Bloomerang?',
    },
    {
      id: 'recurring-donation-reports',
      title: 'How to generate recurring donation reports in Bloomerang',
    },
    {
      id: 'forecast-recurring-revenue',
      title: 'How to forecast recurring donation revenue in Bloomerang',
    },
    {
      id: 'improve-retention',
      title: 'How to use recurring donation data to improve retention',
    },
    {
      id: 'common-mistakes',
      title: 'Common recurring donation tracking mistakes',
    },
    {
      id: 'is-bloomerang-enough',
      title: 'Is Bloomerang enough for recurring donation tracking?',
    },
    { id: 'frequently-asked-questions', title: 'Frequently asked questions' },
    { id: 'what-is-the-bottom-line', title: 'The bottom line' },
  ],
  content: () => <CanBloomerangTrackRecurringDonationsArticle />,
};

export default post;