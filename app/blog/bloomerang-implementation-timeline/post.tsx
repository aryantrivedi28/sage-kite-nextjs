import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import BloomerangImplementationTimelineArticle from './article';

const post: BlogPost = {
  slug: 'bloomerang-implementation-timeline',
  title: 'Bloomerang Implementation: Timeline and What to Prepare',
  seoTitle: 'Bloomerang Implementation: Timeline and What to Prepare',
  excerpt:
    "How a Bloomerang implementation unfolds, what Bloomerang's team handles, and what your nonprofit should prepare before data conversion and go-live.",
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-11-26',
  updatedAt: '2026-11-26',
  readingTime: '12 min read',
  featuredImage: '/images/blog/bloomerang-implementation-timeline.png',
  imageAlt: 'Nine-stage implementation timeline from kickoff to go-live.',
  tags: [
    'Bloomerang',
    'Nonprofit CRM',
    'Implementation',
    'Data conversion',
    'Go-live',
  ],
  focusKeyword: 'bloomerang implementation',
  secondaryKeywords: [
    'bloomerang implementation timeline',
    'bloomerang go live',
  ],
  featured: false,
  relatedPlatform: 'bloomerang',
  faqs: [
    {
      q: 'How long does a Bloomerang implementation take?',
      a: 'Bloomerang publishes as little as five weeks for most nonprofits and a standard conversion timeline of 12 to 14 weeks, without defining either. Your own timeline depends on your plan, your data and your response time.',
    },
    {
      q: 'What should I prepare before Bloomerang data conversion?',
      a: 'Name an owner, document your processes, inventory and clean your data, agree funds, campaigns and appeals, collect your letters, list reports and integrations, and plan training. The checklist above puts each in one place.',
    },
    {
      q: 'Does Bloomerang convert my data for me?',
      a: "Only if conversion is included in your plan, according to Bloomerang's FAQ. If it is, a conversion project manager supports the work, and you still provide data and review the result.",
    },
    {
      q: 'Do I need a consultant?',
      a: "Not always. It tends to help when the data is messy, the team is small or the coding decisions are contested. It does not replace Bloomerang's own conversion team.",
    },
    {
      q: 'What should I test before go-live?',
      a: 'Converted records, a gift through to acknowledgement and receipt, key reports, user permissions and connected systems.',
    },
    {
      q: 'Can I change my setup after go-live?',
      a: "Much of it, yes. Some items are harder to undo, such as funds, campaigns and appeals that have been used, which Bloomerang's documentation says can be deactivated, not deleted.",
    },
  ],
  guide: [
    {
      id: 'what-does-a-bloomerang-implementation-involve',
      title: 'What does a Bloomerang implementation involve?',
    },
    {
      id: 'how-long-does-a-bloomerang-implementation-take',
      title: 'How long does a Bloomerang implementation take?',
    },
    {
      id: 'the-implementation-timeline-stage-by-stage',
      title: 'The implementation timeline, stage by stage',
    },
    {
      id: 'what-should-you-prepare-before-implementation-starts',
      title: 'What should you prepare before implementation starts?',
    },
    {
      id: 'what-does-bloomerang-handle-and-what-is-left-to-you',
      title: 'What does Bloomerang handle, and what is left to you?',
    },
    {
      id: 'what-should-your-team-handle-internally',
      title: 'What should your team handle internally?',
    },
    {
      id: 'when-should-you-bring-in-a-consultant',
      title: 'When should you bring in a consultant?',
    },
    { id: 'are-you-ready-to-go-live', title: 'Are you ready to go live?' },
    {
      id: 'common-delays-and-how-to-avoid-them',
      title: 'Common delays and how to avoid them',
    },
    { id: 'frequently-asked-questions', title: 'Frequently asked questions' },
    { id: 'conclusion', title: 'Conclusion' },
  ],
  content: () => <BloomerangImplementationTimelineArticle />,
};

export default post;