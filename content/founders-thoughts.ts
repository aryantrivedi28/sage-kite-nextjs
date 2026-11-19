/**
 * Founder's Thoughts: Aryan's occasional essays, newest first.
 *
 * Each essay has its own page at app/insights/founders-thoughts/<slug>/page.tsx
 * (essays have bespoke layouts, so they are not blog posts). This list feeds the
 * /insights/founders-thoughts collection page, the homepage "Founder's Thoughts"
 * section and app/sitemap.ts. Add the newest essay at the top.
 */
export interface FounderEssay {
  slug: string;
  title: string;
  /** Short line under the title. */
  dek: string;
  /** Meta description and card summary. Under 160 characters. */
  summary: string;
  /** ISO date for schema and the sitemap. */
  datePublished: string;
  /** Date as shown on the page. */
  dateLabel: string;
  readTime: string;
  topic: string;
  image: string;
  imageAlt: string;
}

export const FOUNDER_ESSAYS: FounderEssay[] = [
  {
    slug: 'when-everyone-has-ai',
    title: 'When everyone has AI, what are businesses actually paying for?',
    dek: 'The tools got smarter. So did the expectations.',
    summary: 'Aryan Trivedi on wider job descriptions, AI cleanup work, human judgment and why businesses are paying for ownership.',
    datePublished: '2026-09',
    dateLabel: 'September 2026',
    readTime: '11 min read',
    topic: 'AI, work & ownership',
    image: '/images/founders-thoughts/when-everyone-has-ai.png',
    imageAlt: 'Editorial collage of a human hand and a mechanical clamp holding the same stack of paper',
  },
];

export const FOUNDERS_THOUGHTS_PATH = '/insights/founders-thoughts';
export const essayPath = (slug: string) => `${FOUNDERS_THOUGHTS_PATH}/${slug}`;
