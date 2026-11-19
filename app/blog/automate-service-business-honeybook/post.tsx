import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import AutomateServiceBusinessHoneyBookArticle from './article';

const post: BlogPost = {
  slug: 'automate-service-business-honeybook',
  title: 'How to Automate a Service-Based Business with HoneyBook',
  seoTitle: 'HoneyBook Automation for Service Businesses',
  excerpt:
    'Which HoneyBook workflows are worth building, how they work in Automations 2.0, and where the owner still needs to decide. Practical examples.',
  category: 'Automation',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-10-05',
  updatedAt: '2026-10-05',
  readingTime: '16 min read',
  // Placeholder from the existing image library; replace with a dedicated image when available.
  featuredImage: '/images/blog/strategy-workshop.jpg',
  imageAlt: 'A person arranging sticky notes on a wall while colleagues with laptops watch from a meeting table',
  tags: ['HoneyBook automation', 'HoneyBook workflows', 'HoneyBook client onboarding automation', 'Service business workflow automation', 'Automations 2.0'],
  relatedPlatform: 'honeybook',
  // Same text as the "Quick answers" section in article.tsx.
  faqs: [
    {
      q: 'Can HoneyBook automate client onboarding?',
      a: 'Largely, yes: it can send a welcome email and a questionnaire, update the pipeline and remind the client. You still review the answers.',
    },
    {
      q: 'Can it automate follow-ups?',
      a: 'Yes, with waits and conditions, so a nudge is sent only if the client has not yet acted.',
    },
    {
      q: 'Can it replace a project management tool?',
      a: 'No. It manages the client relationship, not detailed delivery work.',
    },
    {
      q: 'What should I automate first?',
      a: 'The enquiry response and the move from booked to onboarded.',
    },
    {
      q: 'How do I keep it from feeling robotic?',
      a: 'Use drafts for sensitive messages, write each template for one person, and keep follow-ups few and relevant.',
    },
  ],
  guide: [
    { id: 'what-automating-means', title: 'What does "automating" a service business actually mean?' },
    { id: 'what-honeybook-can-do', title: "What HoneyBook's automations can do, and the parts people miss" },
    { id: 'which-workflows-first', title: 'Which workflows deserve to exist first' },
    { id: 'three-workflows', title: 'Three workflows worth building properly' },
    { id: 'which-businesses', title: 'Which service businesses get the most from this?' },
    { id: 'automate-or-keep', title: 'What to automate and what to keep as yours' },
    { id: 'common-mistakes', title: 'Mistakes that make automated workflows feel cold' },
    { id: 'hypothetical-before-and-after', title: 'A hypothetical before and after' },
    { id: 'gains-and-costs', title: 'What you gain, and what you pay for it' },
    { id: 'starter-plan', title: 'A starter plan' },
    { id: 'outside-help', title: 'When outside help is worth it' },
    { id: 'quick-answers', title: 'Quick answers' },
    { id: 'where-this-leaves-you', title: 'Where this leaves you' },
    { id: 'sources', title: 'Sources and reading' },
  ],
  content: () => <AutomateServiceBusinessHoneyBookArticle />,
};

export default post;
