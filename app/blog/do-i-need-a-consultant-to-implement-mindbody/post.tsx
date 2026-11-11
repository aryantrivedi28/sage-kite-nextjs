import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import MindbodyConsultantArticle from './article';

const post: BlogPost = {
  slug: 'do-i-need-a-consultant-to-implement-mindbody',
  // H1 in sentence case and SEO title in title case, both as given in the DOCX's "Final SEO metadata".
  title: 'Do I need a consultant to implement Mindbody?',
  seoTitle: 'Do I Need a Consultant to Implement Mindbody?',
  excerpt:
    'Mindbody includes one-on-one onboarding at no extra cost. Here is when that is enough, when an independent consultant adds value, and how to decide.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-11-11',
  updatedAt: '2026-11-11',
  readingTime: '15 min read',
  featuredImage: '/images/blog/mindbody-studio-booking-calendar-2.jpg',
  imageAlt: "Fitness studio owner at a yoga studio's front desk, reviewing a colour-coded class booking calendar on a laptop",
  // The DOCX's primary and secondary keywords.
  tags: [
    'Do I need a consultant to implement Mindbody?',
    'Mindbody onboarding',
    'Mindbody implementation consultant',
    'Mindbody setup help',
    'Mindbody setup',
    'Mindbody consultant',
  ],
  relatedPlatform: 'mindbody',
  guide: [
    { id: 'mindbody-onboarding-support', title: 'Does Mindbody provide its own implementation and onboarding support?' },
    { id: 'what-a-consultant-does', title: 'What does a Mindbody consultant actually do?' },
    { id: 'onboarding-vs-consultant', title: "Mindbody's onboarding vs hiring an independent consultant" },
    { id: 'when-onboarding-is-enough', title: "When is Mindbody's included onboarding enough?" },
    { id: 'when-to-hire-a-consultant', title: 'When should you hire a Mindbody consultant?' },
    { id: 'what-can-go-wrong', title: 'What can go wrong without proper implementation planning?' },
    { id: 'what-it-costs', title: 'How much does Mindbody implementation consulting cost?' },
    { id: 'how-to-decide', title: 'How to decide whether you need a Mindbody consultant' },
    { id: 'what-to-look-for', title: 'What should you look for when hiring a Mindbody consultant?' },
    { id: 'frequently-asked-questions', title: 'Frequently asked questions' },
    { id: 'the-bottom-line', title: 'The bottom line' },
  ],
  // Same text as the "Frequently asked questions" section in article.tsx.
  faqs: [
    {
      q: 'Does Mindbody charge an implementation fee?',
      a: 'Mindbody says there is no onboarding fee on any plan. Premium implementation, some data conversion services and Technical Account Management are priced separately, with no published prices.',
    },
    {
      q: 'Can I set up Mindbody without a consultant?',
      a: "Yes. Many straightforward single-location setups can be completed with Mindbody's included onboarding, provided someone on your team can dedicate the time.",
    },
    {
      q: 'Does Mindbody provide one-on-one onboarding?',
      a: 'Yes. Mindbody states that every customer gets one-on-one setup and training support at no additional cost.',
    },
    {
      q: 'How long does Mindbody setup take?',
      a: 'Mindbody gives no fixed timeline on its pricing page. Its migration guide cites about 30 days for a single location and says multi-location businesses may need longer. Timing depends largely on how quickly you share your information.',
    },
    {
      q: 'Does Mindbody help migrate client data?',
      a: 'Yes, within limits. Mindbody lists client profiles, memberships, packages, balances, gift cards and future bookings as importable, but what transfers depends on your current software, and some conversions can cost extra.',
    },
    {
      q: 'What does an independent Mindbody consultant do?',
      a: 'They help design and configure Mindbody around your business processes: pricing, memberships, booking rules, lead follow-up, campaigns, reporting and training. Scope varies by project.',
    },
    {
      q: 'Is hiring a Mindbody consultant worth it?',
      a: 'It depends on complexity. For a simple new studio, usually not. For multiple locations, a migration or a messy existing account, it often can be. Compare the fee with the cost of getting the setup wrong.',
    },
    {
      q: 'Can a consultant help fix an existing Mindbody account?',
      a: 'Yes. Cleaning up pricing options, offers, permissions and automations is one of the most common reasons to bring in outside help.',
    },
  ],
  content: () => <MindbodyConsultantArticle />,
};

export default post;
