import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import DubsadoVsHoneyBookArticle from './article';

const post: BlogPost = {
  slug: 'dubsado-vs-honeybook',
  title: 'Dubsado vs HoneyBook: Features, Pricing, Automation and Which Fits Which Business',
  seoTitle: 'Dubsado vs HoneyBook: Features & Pricing Compared',
  excerpt:
    'Compare Dubsado and HoneyBook on automation, forms, payments, pricing and client experience, and see which business requirements point to each platform.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-10-02',
  updatedAt: '2026-10-02',
  readingTime: '19 min read',
  featuredImage: '/images/blog/crm-dashboard.jpg',
  imageAlt: 'A laptop on a grey sofa showing a dashboard of charts and graphs',
  tags: ['Dubsado', 'HoneyBook', 'CRM', 'Client management', 'Automation', 'Software comparison'],
  // No relatedPlatform: the post compares two platforms rather than covering one.
  // Same text as the "Dubsado vs HoneyBook FAQ" section in article.tsx.
  faqs: [
    {
      q: 'Is Dubsado better than HoneyBook?',
      a: 'Neither is better in general. Dubsado documents more configurable forms and timing; HoneyBook documents built-in payments and a conditional step. Which matters depends on your process, country and tools.',
    },
    {
      q: 'Which is cheaper, Dubsado or HoneyBook?',
      a: "HoneyBook's entry plan costs less per month, but automation requires Essentials ($49 a month billed yearly) there and Premier (reported $525 a year) on Dubsado. Processing fees and team size also affect cost.",
    },
    {
      q: 'Does HoneyBook have automation like Dubsado?',
      a: 'Both have automation. HoneyBook documents triggers, waits and conditions; Dubsado documents 15 actions with detailed timing triggers. Branching in Dubsado Flows is an open question.',
    },
    {
      q: 'Can I use Dubsado or HoneyBook outside the US?',
      a: 'HoneyBook supports professionals in the U.S., Canada, UK and Australia. Dubsado Payments supports merchants in 39 countries.',
    },
    {
      q: 'Do either of them replace accounting software?',
      a: 'No. Both integrate with QuickBooks (Dubsado also lists Xero) and neither is described as full accounting.',
    },
    {
      q: 'Can I move my data from HoneyBook to Dubsado?',
      a: 'Contacts can be exported as CSV and imported. Forms, workflows, templates and payment plans generally have to be rebuilt.',
    },
    {
      q: 'Are Dubsado and HoneyBook CRMs?',
      a: 'Both include client management with pipelines and records. Neither is a traditional sales CRM.',
    },
  ],
  guide: [
    { id: 'at-a-glance', title: 'Dubsado vs HoneyBook at a glance' },
    { id: 'what-are-dubsado-and-honeybook', title: 'What are Dubsado and HoneyBook?' },
    { id: 'difference-between-dubsado-and-honeybook', title: 'What is the difference?' },
    { id: 'is-dubsado-or-honeybook-a-crm', title: 'Is Dubsado or HoneyBook a CRM?' },
    { id: 'automation', title: 'How does automation differ?' },
    { id: 'forms-and-client-intake', title: 'Forms and client intake' },
    { id: 'proposals-and-contracts', title: 'Proposals and contracts' },
    { id: 'invoicing-and-payments', title: 'Invoicing and payments' },
    { id: 'scheduling', title: 'Scheduling' },
    { id: 'client-portals-and-client-experience', title: 'Client portals and client experience' },
    { id: 'project-management', title: 'Project management' },
    { id: 'integrations', title: 'Integrations that change the decision' },
    { id: 'reporting-and-ai-features', title: 'Reporting and AI features' },
    { id: 'pricing', title: 'Pricing: Dubsado vs HoneyBook' },
    { id: 'which-businesses-use-them', title: 'Which businesses use each?' },
    { id: 'hypothetical-workflows', title: 'Hypothetical workflows by business' },
    { id: 'which-fits-which-requirement', title: 'Which fits which requirement?' },
    { id: 'consider-dubsado-honeybook-or-neither', title: 'Consider Dubsado, HoneyBook, or neither' },
    { id: 'before-switching', title: 'What to consider before switching' },
    { id: 'complaints-and-trade-offs', title: 'Common complaints and trade-offs' },
    { id: 'faq', title: 'Dubsado vs HoneyBook FAQ' },
  ],
  content: () => <DubsadoVsHoneyBookArticle />,
};

export default post;
