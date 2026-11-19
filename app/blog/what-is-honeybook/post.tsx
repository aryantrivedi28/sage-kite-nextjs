import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import WhatIsHoneyBookArticle from './article';

const post: BlogPost = {
  slug: 'what-is-honeybook',
  title: "What Is HoneyBook? What It Does, How It Works and Who It's For",
  seoTitle: "What Is HoneyBook? Features, Uses & Who It's For",
  excerpt:
    'HoneyBook is a client management platform for service businesses. See what it does, how it works, whether it is a CRM, who uses it and where it fits.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-10-02',
  updatedAt: '2026-10-02',
  readingTime: '15 min read',
  featuredImage: '/images/blog/workflow-mapping.jpg',
  imageAlt: 'A hand adjusting a step on a process map of connected cards pinned to a wall',
  tags: ['HoneyBook', 'CRM', 'Client management', 'Automation', 'Service businesses'],
  relatedPlatform: 'honeybook',
  // Same text as the "HoneyBook FAQ" section in article.tsx.
  faqs: [
    {
      q: 'What is HoneyBook?',
      a: 'HoneyBook is a cloud-based client management platform for independent service businesses. It combines lead capture, proposals, contracts, invoices, payments, scheduling, project tracking and automation.',
    },
    {
      q: 'Is HoneyBook a CRM?',
      a: 'Partly. It includes CRM functionality such as client records, custom fields and a pipeline, but it also covers proposals, contracts and payments, and it lacks some features of dedicated sales CRMs.',
    },
    {
      q: 'What is HoneyBook used for?',
      a: 'Service businesses use it to capture enquiries, send proposals and contracts, collect payments and keep client projects organised.',
    },
    {
      q: 'Who uses HoneyBook?',
      a: 'HoneyBook is aimed at independent service professionals such as photographers, event professionals, consultants, coaches, designers and marketers.',
    },
    {
      q: 'Can HoneyBook send invoices and take payments?',
      a: 'Yes. It supports invoices, payment plans and autopay, with card, bank-transfer, Apple Pay and Google Pay options. Processing fees apply.',
    },
    {
      q: 'Can HoneyBook automate workflows?',
      a: 'Yes, on the Essentials and Premium plans. Automations use triggers, actions, waits and conditions and are built on desktop.',
    },
    {
      q: 'Is HoneyBook project management software?',
      a: 'It tracks client projects through pipeline stages and tasks, but the sources reviewed describe client-project tracking rather than team resource planning.',
    },
    {
      q: 'Is HoneyBook accounting software?',
      a: 'No. It handles client invoicing, payments, expenses and reports, and integrates with QuickBooks Online, but it is not described as a full accounting or payroll system.',
    },
    {
      q: 'Is HoneyBook available outside the U.S.?',
      a: 'It is available in the U.S., Canada, UK and Australia. HoneyBook says it is working on expanding to other countries.',
    },
    {
      q: 'How much does HoneyBook cost?',
      a: 'Plans start at $29 per month billed yearly on the U.S. site, plus payment processing fees. See the official pricing page for current plans.',
    },
  ],
  guide: [
    { id: 'honeybook-at-a-glance', title: 'HoneyBook at a glance' },
    { id: 'what-is-honeybook', title: 'What is HoneyBook?' },
    { id: 'what-is-honeybook-used-for', title: 'What is HoneyBook used for?' },
    { id: 'how-does-honeybook-work', title: 'How does HoneyBook work?' },
    { id: 'what-does-honeybook-include', title: 'What does HoneyBook include?' },
    { id: 'is-honeybook-a-crm', title: 'Is HoneyBook a CRM?' },
    { id: 'how-does-honeybook-automation-work', title: 'How does HoneyBook automation work?' },
    { id: 'who-uses-honeybook', title: 'Who uses HoneyBook?' },
    { id: 'how-much-does-honeybook-cost', title: 'How much does HoneyBook cost?' },
    { id: 'benefits-of-honeybook', title: 'What are the benefits of HoneyBook?' },
    { id: 'limitations-of-honeybook', title: 'What are the limitations of HoneyBook?' },
    { id: 'honeybook-in-a-software-stack', title: 'Where does HoneyBook fit in a software stack?' },
    { id: 'when-does-honeybook-make-sense', title: 'When does HoneyBook make sense?' },
    { id: 'what-to-do-next', title: 'What to do next' },
    { id: 'honeybook-faq', title: 'HoneyBook FAQ' },
  ],
  content: () => <WhatIsHoneyBookArticle />,
};

export default post;
