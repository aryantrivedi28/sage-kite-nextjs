import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import DubsadoSetupServicesArticle from './article';

const post: BlogPost = {
  slug: 'dubsado-setup-services',
  title: 'Dubsado Setup Services: What a Consultant Actually Does',
  seoTitle: 'Dubsado Setup Services: What a Consultant Does',
  excerpt:
    'What does a Dubsado consultant actually do? The process mapping, forms, workflows, testing and handoff involved, plus what you provide and when DIY is enough.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-10-04',
  updatedAt: '2026-10-04',
  readingTime: '20 min read',
  featuredImage: '/images/blog/audit-planning.jpg',
  imageAlt: 'Two people at a desk with laptops, marking up a hand-drawn process diagram with a pencil',
  tags: ['Dubsado setup services', 'Dubsado consultant', 'Dubsado workflows', 'Dubsado setup cost', 'Client onboarding'],
  relatedPlatform: 'dubsado',
  // Same text as the "Questions people ask about Dubsado setup" section in article.tsx.
  faqs: [
    {
      q: 'What does a Dubsado consultant do?',
      a: 'They turn your existing client process into a working Dubsado system. That means mapping your journey, configuring the account, building forms, contracts and templates, designing and building workflows, setting up scheduling and payments, testing, and handing the system over with documentation and training.',
    },
    {
      q: 'What is included in Dubsado setup services?',
      a: 'It varies by consultant. Common inclusions are a strategy session, account setup, forms and templates, a limited number of workflows, a scheduler, payment plans, testing, training and short post-launch support. Copywriting, integrations and extra workflows are often priced separately.',
    },
    {
      q: 'Do I need a Dubsado consultant?',
      a: "Not always. A simple business with a short client journey can often set Dubsado up itself. Help is more useful with several services, many workflows, migration or an account that already isn't working.",
    },
    {
      q: 'How long does Dubsado setup take?',
      a: "There's no universal answer. Listed timelines run from under a week to around four weeks, and they depend on the number of services and workflows, any migration, copywriting, integrations, testing and how quickly you give feedback.",
    },
    {
      q: 'How much does Dubsado setup cost?',
      a: "Public listings range from a few hundred dollars for an audit to several thousand for a full build, in mixed currencies and scopes. We don't think a reliable average exists, so compare what's included, not just the price.",
    },
    {
      q: 'Can I set up Dubsado myself?',
      a: 'Yes. Dubsado provides a setup checklist, help articles and a trial. Many people do, particularly when their process is simple.',
    },
    {
      q: 'What does a Dubsado consultant need from me?',
      a: 'Your services, packages and pricing, contract terms, brand assets, email wording or approval of drafts, scheduling rules, and a clear description of how you currently work, including exceptions.',
    },
    {
      q: 'What should a Dubsado consultant deliver?',
      a: "A working, tested system, plus documentation and training so you can run it. Agree in writing what's included, what isn't, and what support follows launch.",
    },
  ],
  guide: [
    { id: 'what-dubsado-setup-services-include', title: 'What do "Dubsado setup services" actually include?' },
    { id: 'what-a-dubsado-consultant-does', title: 'What does a Dubsado consultant actually do?' },
    { id: 'what-you-still-bring', title: 'What do you still have to bring?' },
    { id: 'included-and-not-included', title: "What is usually included, and what usually isn't?" },
    { id: 'automation-repeats-a-bad-process', title: "Automation doesn't fix a bad process. It repeats it." },
    { id: 'common-setup-mistakes', title: 'Common setup mistakes, and what to check' },
    { id: 'can-you-set-up-dubsado-yourself', title: 'Can you set up Dubsado yourself?' },
    { id: 'cost-and-timeline', title: 'How much does Dubsado setup cost, and how long does it take?' },
    { id: 'judging-a-consultant', title: 'How do you tell whether a Dubsado consultant is any good?' },
    { id: 'example-setup', title: 'What a complete setup might look like (a hypothetical)' },
    { id: 'when-dubsado-shouldnt-own-everything', title: "When shouldn't Dubsado own everything?" },
    { id: 'where-that-leaves-you', title: 'So where does that leave you?' },
    { id: 'faq', title: 'Questions people ask about Dubsado setup' },
    { id: 'sources', title: 'Sources and reading' },
  ],
  content: () => <DubsadoSetupServicesArticle />,
};

export default post;
