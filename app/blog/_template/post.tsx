/*
 * Starter for a new blog post. Copy this whole _template folder to
 * app/blog/<your-slug>/ (folder name = slug), fill in this file, then import
 * it in content/blog/index.tsx and add it to `posts`. page.tsx needs no edits.
 * Folders starting with _ are not routes, so this template never goes live.
 */
import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';

const post: BlogPost = {
  slug: 'your-post-url',
  title: 'Your Post Title',
  // seoTitle: 'Shorter title for Google', // optional, only if title is long
  excerpt: 'One or two sentences used on cards, in search results and social shares.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-01-01',
  updatedAt: '2026-01-01',
  readingTime: '5 min read',
  featuredImage: '/images/blog/your-image.jpg',
  imageAlt: 'Describe what is in the image',
  tags: ['CRM'],
  draft: true,
  guide: [
    { id: 'first-section', title: 'First section' },
    { id: 'frequently-asked-questions', title: 'Frequently asked questions' },
  ],
  // Optional: copy the FAQ questions and answers exactly as they appear below.
  faqs: [
    { q: 'Your question?', a: 'Your answer.' },
  ],
  // Optional: 'dubsado' | 'honeybook' | 'hubspot' | 'activecampaign' | 'jobber'
  // relatedPlatform: 'hubspot',
  content: () => (
    <>
      <h2 id="first-section">First section</h2>
      <p>Your first paragraph.</p>

      <h2 id="frequently-asked-questions">Frequently asked questions</h2>
      <h3>Your question?</h3>
      <p>Your answer.</p>
    </>
  ),
};

export default post;
