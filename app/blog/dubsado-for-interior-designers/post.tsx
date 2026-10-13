import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import DubsadoForInteriorDesignersArticle from './article';

const post: BlogPost = {
  slug: 'dubsado-for-interior-designers',
  title: 'Dubsado for Interior Designers: Best Ways to Automate Your Business',
  seoTitle: 'Dubsado for Interior Designers: What to Automate',
  excerpt:
    'How interior designers can use Dubsado to automate enquiries, onboarding, contracts and follow-ups, and where the designer still needs to step in.',
  category: 'Automation',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-10-05',
  updatedAt: '2026-10-05',
  readingTime: '16 min read',
  // Placeholder from the existing image library; replace with an interior design image when available.
  featuredImage: '/images/blog/client-meeting.jpg',
  imageAlt: 'A person gesturing while talking across a table, with a laptop, notebook and phone in front of them',
  tags: ['Dubsado for interior designers', 'Interior designer client workflow automation', 'Dubsado workflows', 'Interior design client onboarding', 'Dubsado setup'],
  relatedPlatform: 'dubsado',
  // Same text as the "Quick answers" section in article.tsx.
  faqs: [
    {
      q: 'Is Dubsado good for interior designers?',
      a: 'For the client-facing journey, yes, particularly enquiry, proposal, contract, payment and onboarding. For procurement and specification, a design-specific platform is usually a better fit.',
    },
    {
      q: 'Can Dubsado handle purchase orders?',
      a: 'Not as a core function. Studios that need purchase orders generally use a design-specific platform alongside or instead of it.',
    },
    {
      q: 'Can I automate everything?',
      a: 'You can, but you should not. Keep a person at every decision that is expensive or hard to retract.',
    },
    {
      q: 'Is it worth it for a solo designer?',
      a: 'Often, because the repeatable half of the business is the same size whether there is one person or five. The value depends on how many projects you run, so start small and judge by your own results.',
    },
  ],
  guide: [
    { id: 'can-dubsado-automate-interior-design', title: 'Can Dubsado automate an interior design business?' },
    { id: 'what-a-workflow-is', title: 'What a Dubsado workflow really is' },
    { id: 'which-workflows-first', title: 'Which workflows come first, and for whom' },
    { id: 'workflow-blueprint', title: 'The workflow blueprint' },
    { id: 'three-workflows', title: 'Three workflows worth building properly' },
    { id: 'automate-or-keep-human', title: 'What to automate and what to keep human' },
    { id: 'where-dubsado-stops', title: 'Where Dubsado stops' },
    { id: 'e-design-vs-full-service', title: 'E-design and full-service run differently' },
    { id: 'hypothetical-before-and-after', title: 'A hypothetical before and after' },
    { id: 'common-mistakes', title: 'Mistakes that quietly undo the system' },
    { id: 'starter-plan', title: 'A starter plan' },
    { id: 'getting-help', title: 'Getting help with setup' },
    { id: 'quick-answers', title: 'Quick answers' },
    { id: 'where-this-leaves-you', title: 'Where this leaves you' },
    { id: 'sources', title: 'Sources and reading' },
  ],
  content: () => <DubsadoForInteriorDesignersArticle />,
};

export default post;
