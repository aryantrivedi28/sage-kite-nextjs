import type { BlogPost } from '@/content/blog/types';
import { AUTHOR, AUTHOR_IMAGE } from '@/content/blog/authors';
import AiMarketingAutomationMistakesArticle from './article';

const post: BlogPost = {
  slug: 'ai-marketing-automation-mistakes',
  title: 'AI Marketing Automation: 10 Mistakes Small Businesses Make (and How to Avoid Them)',
  seoTitle: '10 AI Marketing Automation Mistakes to Avoid',
  excerpt:
    'Ten AI marketing automation mistakes small businesses make, why they happen, what they cost customers, and where human review should sit.',
  category: 'Automation',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-10-03',
  updatedAt: '2026-10-03',
  readingTime: '19 min read',
  featuredImage: '/images/blog/laptop-analytics.jpg',
  imageAlt: 'A laptop screen showing marketing analytics dashboards with bar charts and line graphs',
  tags: ['AI marketing automation', 'Marketing automation', 'AI marketing', 'Human oversight', 'CRM data', 'Email deliverability'],
  // Same text as the "AI marketing automation FAQ" section in article.tsx.
  faqs: [
    {
      q: 'What is AI marketing automation?',
      a: 'Software that follows set rules, combined with AI features such as writing, classifying or predicting, to carry out marketing tasks with less manual work. Not every workflow uses AI, and not every AI tool acts on its own.',
    },
    {
      q: 'Is AI marketing automation suitable for small businesses?',
      a: 'It can be, especially for repetitive, low-risk tasks. The risk rises with customer impact, so start small and keep a person in charge of sensitive or high-value cases.',
    },
    {
      q: 'What should small businesses not automate?',
      a: 'Not "never", but route instead: complaints, high-value prospects, sensitive situations, financial or legal matters and anything that needs empathy should go to a person.',
    },
    {
      q: 'Can AI replace a marketing team?',
      a: 'Not on the evidence reviewed here. AI can speed up drafting and routine work, but strategy, judgment and accountability remain human tasks, and unreviewed output creates rework.',
    },
    {
      q: 'Can AI-generated content hurt SEO?',
      a: 'Google says using generative AI is not itself a violation. Generating many pages without adding value for users may violate its scaled content abuse policy. The risk is low-value, repetitive or inaccurate content.',
    },
    {
      q: 'How do you prevent AI marketing mistakes?',
      a: 'Define the objective, check the data, add exit rules, route sensitive cases to people, review outputs, record consent and measure outcomes. The checklist above covers each step.',
    },
    {
      q: 'What data does AI marketing automation need?',
      a: 'Accurate, consistent contact and activity data: clear stages, tags, consent status and history. If your records are unreliable, fix them before automating.',
    },
    {
      q: 'How do you measure AI marketing automation?',
      a: 'Choose the business outcome first (for example, booked appointments), record a baseline, and track it alongside cost and customer signals such as unsubscribes and complaints.',
    },
    {
      q: 'Is AI personalisation effective?',
      a: "It depends on the data behind it. Using verified details from a customer's real history can be relevant; inserting a name and a generic line is surface personalisation, and a wrong detail can make a message feel less personal. This article found no reliable figure to quote.",
    },
  ],
  guide: [
    { id: 'what-is-ai-marketing-automation', title: 'What is AI marketing automation?' },
    { id: 'why-ai-marketing-automation-goes-wrong', title: 'Why does it go wrong?' },
    { id: 'mistake-1-unclear-objective', title: '1. Automating before the objective is clear' },
    { id: 'mistake-2-unchecked-data', title: '2. Feeding automation unchecked data' },
    { id: 'mistake-3-weak-personalisation', title: '3. Surface-level personalisation' },
    { id: 'mistake-4-triggers-without-exit-rules', title: '4. Triggers with no exit rules' },
    { id: 'mistake-5-automating-human-moments', title: '5. Automating moments that need a person' },
    { id: 'mistake-6-unreviewed-ai-content', title: '6. Publishing unreviewed AI content' },
    { id: 'mistake-7-no-monitoring', title: '7. No testing, monitoring or stop switch' },
    { id: 'mistake-8-consent-and-deliverability', title: '8. Ignoring consent and deliverability' },
    { id: 'mistake-9-no-system-of-record', title: '9. No system of record or owner' },
    { id: 'mistake-10-measuring-activity', title: '10. Measuring activity, not outcomes' },
    { id: 'decision-framework', title: 'Should this task be automated?' },
    { id: 'checklist', title: 'AI marketing automation checklist' },
    { id: 'what-to-automate-first', title: 'What to automate first' },
    { id: 'when-humans-stay-in-control', title: 'When a human stays in control' },
    { id: 'faq', title: 'AI marketing automation FAQ' },
  ],
  content: () => <AiMarketingAutomationMistakesArticle />,
};

export default post;
