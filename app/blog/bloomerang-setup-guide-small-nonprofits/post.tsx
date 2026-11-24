import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import BloomerangSetupGuideSmallNonprofitsArticle from './article';

const post: BlogPost = {
  slug: 'bloomerang-setup-guide-small-nonprofits',
  title:
    'Bloomerang Setup Guide for Small Nonprofits: A Step-by-Step Approach',
  seoTitle:
    'Bloomerang Setup Guide for Small Nonprofits: A Step-by-Step Approach',
  excerpt:
    'How a small nonprofit should set up Bloomerang: what to prepare, nine setup steps in order, a checklist, common mistakes and when to hire a consultant.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-11-24',
  updatedAt: '2026-11-24',
  readingTime: '12 min read',
  featuredImage:
    '/images/blog/bloomerang-setup-guide-small-nonprofits.png',
  imageAlt:
    'Bloomerang setup checklist and nine-step guide for small nonprofits',
  tags: [
    'Bloomerang',
    'Nonprofit CRM',
    'Setup',
    'Onboarding',
    'Small nonprofits',
  ],
  focusKeyword: 'bloomerang setup',
  secondaryKeywords: [
    'bloomerang onboarding',
    'how to set up bloomerang',
    'bloomerang setup checklist',
  ],
  featured: false,
  relatedPlatform: 'bloomerang',
  faqs: [
    {
      q: 'How do you set up Bloomerang for a small nonprofit?',
      a: 'Define how money reaches you and what leadership needs, then configure products, records, funds, campaigns and appeals, gift-entry rules, thank-yous, automation, reports and users, in that order. Test with a sample donor before going live.',
    },
    {
      q: 'What should you prepare before setting up Bloomerang?',
      a: 'A list of every giving channel, the questions you want reports to answer, your fund structure on paper, named roles, and a review of any existing data for duplicates and gaps.',
    },
    {
      q: 'Does Bloomerang include onboarding?',
      a: 'Bloomerang says every organization starting with it gets a dedicated onboarding specialist and training resources. What is included for data conversion depends on your plan, so confirm it in your agreement.',
    },
    {
      q: 'Can a small nonprofit set up Bloomerang without a consultant?',
      a: 'Yes, many do. The difficult parts are the coding structure, automation choices, reports and import cleanup, mostly because of limited staff time.',
    },
    {
      q: 'What should be configured first in Bloomerang?',
      a: 'Confirm your products and plan, then settle record structure and your funds, campaigns and appeals before importing data or building reports. Imports cannot create funds or custom field values.',
    },
  ],
  guide: [
    {
      id: 'what-to-prepare',
      title: 'What should you prepare before setting up Bloomerang?',
    },
    {
      id: 'map-how-money-reaches-you',
      title: 'Map how money actually reaches you',
    },
    { id: 'decide-what-you-need-to-track', title: 'Decide what you need to track' },
    {
      id: 'look-honestly-at-your-current-records',
      title: 'Look honestly at your current records',
    },
    {
      id: 'sketch-your-fundraising-structure',
      title: 'Sketch your fundraising structure on paper',
    },
    {
      id: 'name-the-people-and-decide-what-leadership-needs',
      title: 'Name the people and decide what leadership needs',
    },
    {
      id: 'how-to-set-up-bloomerang-nine-steps',
      title: 'How to set up Bloomerang for a small nonprofit: nine steps',
    },
    {
      id: 'step-1-products-and-plan',
      title: 'Step 1: Confirm which Bloomerang products and plan you have',
    },
    {
      id: 'step-2-constituent-and-donor-records',
      title: 'Step 2: Organize constituent and donor records',
    },
    {
      id: 'step-3-funds-campaigns-appeals',
      title: 'Step 3: Establish your funds, campaigns and appeals',
    },
    { id: 'step-4-gift-entry-rules', title: 'Step 4: Write your gift-entry rules' },
    {
      id: 'step-5-acknowledgements-and-receipts',
      title: 'Step 5: Set up acknowledgement and receipt processes',
    },
    {
      id: 'step-6-communication-and-automation',
      title: 'Step 6: Choose communication and automation priorities',
    },
    {
      id: 'step-7-reports-and-dashboards',
      title: 'Step 7: Plan your reports and dashboards',
    },
    {
      id: 'step-8-staff-roles-and-workflows',
      title: 'Step 8: Prepare staff, roles and daily workflows',
    },
    { id: 'step-9-test-the-setup', title: 'Step 9: Test the complete setup before relying on it' },
    {
      id: 'bloomerang-setup-checklist',
      title: 'Bloomerang setup checklist for small nonprofits',
    },
    { id: 'common-mistakes', title: 'Common Bloomerang setup mistakes to avoid' },
    {
      id: 'can-a-small-nonprofit-set-up-bloomerang-itself',
      title: 'Can a small nonprofit set up Bloomerang on its own?',
    },
    {
      id: 'when-to-hire-a-consultant',
      title: 'When should you hire a Bloomerang setup consultant?',
    },
    {
      id: 'how-sage-kite-helps',
      title: 'How Sage Kite helps small nonprofits set up Bloomerang',
    },
    { id: 'frequently-asked-questions', title: 'Frequently asked questions' },
  ],
  content: () => <BloomerangSetupGuideSmallNonprofitsArticle />,
};

export default post;