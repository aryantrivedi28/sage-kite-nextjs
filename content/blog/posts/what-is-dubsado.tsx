import type { BlogPost } from '../types';
import { AUTHOR, AUTHOR_IMAGE } from '../authors';

const post: BlogPost = {
  slug: 'what-is-dubsado',
  title: 'What Is Dubsado? A Detailed Guide to the Client Management Platform',
  seoTitle: 'What Is Dubsado? A Complete Guide',
  excerpt:
    'Learn what Dubsado is, how its projects, forms, contracts, invoices, scheduling, client portals, and automation fit together, and who it is designed to help.',
  category: 'CRM',
  author: AUTHOR,
  authorImage: AUTHOR_IMAGE,
  publishedAt: '2026-09-22',
  updatedAt: '2026-09-22',
  readingTime: '28 min read',
  featuredImage: '/images/blog/marketing-planning.jpg',
  imageAlt: 'Top-down view of a desk with app wireframe sketches, a smartphone and highlighters',
  tags: ['CRM', 'Client management', 'Automation', 'Software'],
  featured: true,
  relatedPlatform: 'dubsado',
  faqs: [
    {
      q: 'What is Dubsado used for?',
      a: 'Dubsado is used to manage client relationships and service projects, including client communication, forms, contracts, invoicing, payments, scheduling, client portals, tasks, and—on the appropriate plan—process automation.',
    },
    {
      q: 'Is Dubsado a CRM or project management tool?',
      a: 'It includes CRM-like client management and project-management functions, but it is broader than either category alone. Its central project record connects client information with operational activities such as forms, communication, billing, scheduling, and automation.',
    },
    {
      q: 'Does Dubsado have automation?',
      a: "Yes. Dubsado's Premier plan includes Flows, which can automate client-process actions such as sending emails, forms, contracts, and invoices, creating tasks, and updating project statuses.",
    },
    {
      q: 'Does Dubsado handle invoices and payments?',
      a: 'Yes. Dubsado includes invoicing and payment plans, and its project records can be used to manage invoices and payments associated with client work.',
    },
    {
      q: 'Does Dubsado have a client portal?',
      a: 'Yes. Dubsado includes client portals, which provide clients with a dedicated place to access information related to their project.',
    },
    {
      q: 'Who typically uses Dubsado?',
      a: 'Dubsado is designed for service-based businesses that manage structured client relationships. Its relevance depends more on the complexity and repeatability of the client process than on a particular industry.',
    },
  ],
  guide: [
    { id: "what-is-dubsado", title: "What Is Dubsado?" },
    { id: "dubsado-in-simple-terms", title: "Dubsado in simple terms" },
    { id: "what-kind-of-software-is-dubsado", title: "What kind of software is Dubsado?" },
    { id: "how-dubsado-organizes-client-work", title: "How Dubsado organizes client work" },
    { id: "what-can-dubsado-do", title: "What can Dubsado do?" },
    { id: "client-and-project-management", title: "Client and project management" },
    { id: "forms-questionnaires-and-information-collection", title: "Forms, questionnaires, and information collection" },
    { id: "contracts-and-electronic-signatures", title: "Contracts and electronic signatures" },
    { id: "proposals-and-lead-capture", title: "Proposals and lead capture" },
    { id: "invoicing-and-payments", title: "Invoicing and payments" },
    { id: "scheduling-and-appointments", title: "Scheduling and appointments" },
    { id: "client-portals", title: "Client portals" },
    { id: "automated-workflows-and-flows", title: "Automated workflows and Flows" },
    { id: "how-these-dubsado-features-fit-together", title: "How these Dubsado features fit together" },
    { id: "who-is-dubsado-designed-for", title: "Who is Dubsado designed for?" },
    { id: "what-are-the-main-benefits-of-using-dubsado", title: "What are the main benefits of using Dubsado?" },
    { id: "what-should-you-consider-before-using-dubsado", title: "What should you consider before using Dubsado?" },
    { id: "how-much-does-dubsado-cost", title: "How much does Dubsado cost?" },
    { id: "is-dubsado-a-crm", title: "Is Dubsado a CRM?" },
    { id: "dubsado-as-part-of-a-broader-business-process", title: "Dubsado as part of a broader business process" },
    { id: "frequently-asked-questions", title: "Frequently asked questions" },
    { id: "what-is-dubsado-used-for", title: "What is Dubsado used for?" },
    { id: "is-dubsado-a-crm-or-project-management-tool", title: "Is Dubsado a CRM or project management tool?" },
    { id: "does-dubsado-have-automation", title: "Does Dubsado have automation?" },
    { id: "does-dubsado-handle-invoices-and-payments", title: "Does Dubsado handle invoices and payments?" },
    { id: "does-dubsado-have-a-client-portal", title: "Does Dubsado have a client portal?" },
    { id: "who-typically-uses-dubsado", title: "Who typically uses Dubsado?" },
    { id: "final-takeaway", title: "Final takeaway" }
  ],
};

export default post;
