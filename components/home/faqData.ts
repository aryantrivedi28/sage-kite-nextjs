/**
 * Homepage FAQ ("Sage Kite in brief"). Rendered by components/home/FAQ.tsx
 * and used for the homepage FAQPage JSON-LD in app/page.tsx, so the schema
 * always matches the visible text. Plain text only: no HTML or entities.
 */
export interface HomeFaqGroup {
  label: string;
  items: { q: string; a: string }[];
}

export const HOME_FAQ_GROUPS: HomeFaqGroup[] = [
  {
    label: 'About Sage Kite',
    items: [
      {
        q: 'What is Sage Kite?',
        a: 'Sage Kite is a business growth consultancy for small and medium-sized businesses. It improves the systems, people and execution behind growth, bringing consultancy, CRM, marketing, AI, automation and specialist support together so they work as one growth operation.',
      },
      {
        q: 'What does Sage Kite do?',
        a: 'Sage Kite finds what is holding growth back and helps fix it. Depending on the business, that can mean shaping go-to-market strategy, implementing a CRM, running SEO or paid media, building marketing automation, or providing specialists to operate the system day to day.',
      },
      {
        q: 'Who does Sage Kite work with?',
        a: 'Small and medium-sized businesses in the United States, Canada, Europe, Australia and New Zealand, with a focus on real estate, home services, coaches and course businesses, law firms, fitness and wellness, and nonprofits. Marketing agencies also work with Sage Kite for white-label delivery.',
      },
      {
        q: 'What growth problems does Sage Kite solve?',
        a: 'Typical problems include enquiries without a clear owner, inconsistent follow-up, a CRM that is underused or disorganised, marketing that cannot be connected to revenue, too much manual work, and teams without the capacity to execute.',
      },
    ],
  },
  {
    label: 'How Sage Kite works',
    items: [
      {
        q: 'How is Sage Kite different from hiring separate specialists?',
        a: 'Separate specialists tend to solve separate problems. Sage Kite scopes strategy, systems, marketing and people around the same commercial goal, so the CRM, the campaigns and the team running them are designed to work together.',
      },
      {
        q: 'Does Sage Kite provide strategy as well as implementation?',
        a: 'Yes. Consultancy sets the direction, and Sage Kite can then implement the systems and carry out the marketing and ongoing work, rather than handing over a plan for someone else to deliver.',
      },
      {
        q: 'Can Sage Kite work with the systems a business already has?',
        a: 'Yes. Many engagements start from an existing CRM or platform: cleaning up data, redesigning pipelines or connecting marketing to it. Discovery confirms what is feasible on the current account before any work is scoped.',
      },
    ],
  },
  {
    label: 'Consultancy and AI',
    items: [
      {
        q: 'What does business growth consulting involve?',
        a: "Business growth consulting identifies what is limiting a business's growth and decides what to change first. Sage Kite delivers it through GTM consultancy, AI consultancy and fractional CMO support: the part-time senior marketing leadership a business may need without a full-time hire. Outputs can include a growth diagnosis, priorities and an implementation roadmap.",
      },
      {
        q: 'What is AI consultancy?',
        a: 'AI consultancy helps a business decide where AI is genuinely useful in its marketing and operations, such as reducing repetitive work, and where it adds little. The aim is practical use that supports existing teams and systems.',
      },
    ],
  },
  {
    label: 'CRM',
    items: [
      {
        q: "What do Sage Kite's CRM implementation services include?",
        a: 'CRM work starts with consulting on how the business actually sells. Implementation then covers setup, pipeline design, cleanup, feasible data migrations, platform-native workflows, testing, team training and handover. Custom CRM development is available where an existing platform does not fit the sales process.',
      },
      {
        q: 'Which CRM platforms does Sage Kite work with?',
        a: 'GoHighLevel, Keap, Follow Up Boss, Lofty, ServiceTitan, Housecall Pro, Jobber, Kajabi, Clio Grow, Dubsado, Mindbody, Bloomerang and HoneyBook, plus custom CRM development.',
      },
    ],
  },
  {
    label: 'Marketing and automation',
    items: [
      {
        q: 'What marketing services does Sage Kite provide?',
        a: "SEO, AI SEO, Google Ads, Meta Ads, LinkedIn Ads, email marketing and social media management. Marketing is planned around the business's priorities and connected to its CRM, so the enquiries it produces land in a system that can follow them up.",
      },
      {
        q: 'What is AI SEO?',
        a: "AI SEO generally refers to making a business's content easy for AI-driven search to find, understand and cite accurately, including AI answers in search engines and conversational assistants. It works alongside traditional SEO rather than replacing it.",
      },
      {
        q: 'What is marketing automation, and how does it support growth?',
        a: 'Marketing automation uses rules inside a platform to handle repetitive steps: replying to new enquiries, sending follow-up sequences and updating pipeline stages. Sage Kite builds it with the native workflow tools in the CRM, so follow-up happens consistently without adding manual work.',
      },
    ],
  },
  {
    label: 'Specialist Staffing and white-label',
    items: [
      {
        q: 'What is Specialist Staffing?',
        a: 'Specialist Staffing provides Tier 1 virtual assistants for growth and automation work in five roles: CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support. They help operate and maintain the systems a business has invested in.',
      },
      {
        q: 'Can marketing agencies use Sage Kite for white-label fulfilment?',
        a: "Yes. Sage Kite delivers agreed services under the agency's own brand. Scope, client communication, project ownership and handover are defined for each engagement before work begins.",
      },
    ],
  },
  {
    label: 'Working with Sage Kite',
    items: [
      {
        q: 'How does working with Sage Kite begin?',
        a: 'With a discovery call covering your current process, desired outcome, access, constraints and decision maker. Implementation work is then scoped in a proposal with deliverables, exclusions, milestones and a fixed project price.',
      },
      {
        q: 'What happens after implementation?',
        a: 'Handover and training, followed by optional maintenance with a defined support scope. Where it helps, Sage Kite can recommend an ongoing marketing plan or specialist staffing built on what the project revealed.',
      },
    ],
  },
];
