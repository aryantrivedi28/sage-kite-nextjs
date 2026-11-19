import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import BestCrmForCoachesArticle from './article';

const post: BlogPost = {
  slug: 'best-crm-for-coaches-and-consultants',
  title: 'Best CRM for Coaches and Consultants: 12 Platforms Compared',
  seoTitle: 'Best CRM for Coaches & Consultants: 12 Compared',
  excerpt:
    'Compare 12 CRM and client-management platforms for coaches and consultants by business model, workflow and cost, and learn which type of system fits you.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-10-06',
  updatedAt: '2026-10-14',
  readingTime: '18 min read',
  // Placeholder from the existing image library; replace with a dedicated image when available.
  featuredImage: '/images/blog/team-operations.jpg',
  imageAlt: 'Top-down view of a shared wooden table with several laptops, phones and notebooks, with people working at it',
  tags: ['Best CRM for coaches and consultants', 'Best CRM for consultants', 'CRM software for coaches', 'Coaching practice management software', 'CRM for independent consultants'],
  // No relatedPlatform: the post compares twelve platforms rather than covering one.
  // Same text as the "Quick answers" section in article.tsx.
  faqs: [
    {
      q: 'What is the best CRM for a solo coach?',
      a: 'There is no single answer. Paperbell and HoneyBook suit those whose job is administering clients, CoachAccountable those whose job is accountability, Kajabi those selling programmes.',
    },
    {
      q: 'Do consultants need a different system from coaches?',
      a: 'Often. A consultant with a sales pipeline tends to need a true CRM such as Pipedrive or HubSpot; a coach often needs client administration or delivery tools.',
    },
    {
      q: 'Is a free CRM enough?',
      a: 'For early-stage contact and pipeline tracking, a free tier can be. It will not handle proposals, contracts and onboarding on its own.',
    },
    {
      q: 'Do I need professional setup?',
      a: 'Not always. It helps when your process is complex or already tangled.',
    },
  ],
  guide: [
    { id: 'what-coaches-need', title: 'What do coaches and consultants actually need from a CRM?' },
    { id: 'crm-vs-coaching-software', title: 'CRM vs coaching practice management software' },
    { id: 'business-size', title: 'Why "business size" is the wrong way to choose' },
    { id: 'platforms-at-a-glance', title: 'The platforms at a glance' },
    { id: 'pricing', title: 'What the platforms cost' },
    { id: 'detailed-reviews', title: 'Detailed reviews' },
    { id: 'which-is-right', title: 'Which is right for your type of business?' },
    { id: 'how-requirements-change', title: 'How requirements change as a practice grows' },
    { id: 'nine-question-framework', title: 'A nine-question framework for choosing' },
    { id: 'mistakes', title: 'Mistakes that cost the most' },
    { id: 'setup-matters', title: 'Why setup matters as much as the platform' },
    { id: 'how-sage-kite-can-help', title: 'How Sage Kite can help' },
    { id: 'quick-answers', title: 'Quick answers' },
    { id: 'where-this-leaves-you', title: 'Where this leaves you' },
    { id: 'sources', title: 'Sources' },
  ],
  content: () => <BestCrmForCoachesArticle />,
};

export default post;
