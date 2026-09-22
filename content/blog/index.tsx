import React from 'react';

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SAGE KITE — BLOG CONTENT
 * ─────────────────────────────────────────────────────────────────────────
 *  How to add a new blog post
 *  --------------------------
 *  1. Add a new object to the `posts` array below.
 *  2. Fill in the metadata (slug, title, excerpt, category, author, dates,
 *     readingTime, tags).
 *  3. Add a featured image to `/public/images/blog/` (16:9, ~1200x675 works
 *     well) and reference it in `featuredImage`. Give it meaningful `imageAlt`.
 *  4. Write the article inside `content` using standard HTML tags:
 *     <h2>, <h3>, <p>, <ul>/<ol> + <li>, <blockquote>, <strong>, <em>,
 *     <a>, <table>, <pre><code>. The .article-content styles handle the rest.
 *  5. Pick a `category` from CATEGORIES so the filter and pages stay in sync.
 *
 *  Notes
 *  -----
 *  • Set `featured: true` on the ONE post that should headline the listing.
 *    If none is marked, the most recent post is used automatically.
 *  • Set `draft: true` to keep a post out of the live site, sitemap and
 *    static params while you work on it.
 *  • The listing, category filter, individual pages, metadata, JSON-LD and
 *    sitemap all read from this file — you never touch the pages to publish.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface BlogGuideItem {
  id: string;
  title: string;
}

export interface BlogPost {
  /** URL segment: /blog/<slug> */
  slug: string;
  title: string;
  /** 1–2 sentence summary used on cards and in metadata. */
  excerpt: string;
  /** One of CATEGORIES. */
  category: string;
  author: string;
  /** Optional author avatar in /public. */
  authorImage?: string;
  /** ISO date, e.g. "2026-09-15". */
  publishedAt: string;
  /** ISO date of the last meaningful edit. Defaults to publishedAt. */
  updatedAt?: string;
  /** Human label, e.g. "6 min read". */
  readingTime: string;
  /** Path under /public, e.g. "/images/blog/my-post.png". */
  featuredImage: string;
  /** Alt text for the featured image. */
  imageAlt?: string;
  tags?: string[];
  guide: BlogGuideItem[];
  /** Headline the listing. Only one post should set this. */
  featured?: boolean;
  /** Hidden from the live site when true. */
  draft?: boolean;
  /** The article body, rendered inside .article-content. */
  content: () => React.JSX.Element;
}

/**
 * Blog categories. Add or remove entries here and the filter updates
 * automatically. Keep the values identical to the `category` used on posts.
 */
export const CATEGORIES = [
  'Business Growth',
  'CRM',
  'Marketing',
  'Automation',
  'Operations',
  'People',
  'Technology',
] as const;

export type Category = (typeof CATEGORIES)[number];

const AUTHOR = 'Aryan Trivedi';
const AUTHOR_IMAGE = '/aryan_t.jpeg';

export const posts: BlogPost[] = [
  /* ───────────────────────── Post 1 (featured) ───────────────────────── */
  {
    slug: 'how-crm-systems-create-a-foundation-for-sustainable-growth',
    title: 'How CRM Systems Create a Foundation for Sustainable Growth',
    excerpt:
      'A CRM is not a contact list — it is the system of record your growth is built on. Here is how a well-structured CRM turns scattered activity into a foundation your business can scale on.',
    category: 'CRM',
    author: AUTHOR,
    authorImage: AUTHOR_IMAGE,
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    readingTime: '7 min read',
    featuredImage: '/images/blog/crm-foundation.png',
    imageAlt:
      'Abstract diagram of connected records forming the foundation of a CRM system',
    tags: ['CRM', 'Systems', 'Data', 'Revenue operations'],
    featured: true,
      guide: [
    { id: "from-activity-to-a-system-of-record", title: "From activity to a system of record" },
    { id: "the-four-decisions-that-make-a-crm-a-foundation", title: "The four decisions that make a CRM a foundation" },
    { id: "1-define-your-lifecycle-stages-before-anything-else", title: "1. Define your lifecycle stages before anything else" },
    { id: "2-keep-the-pipeline-a-picture-of-live-deals", title: "2. Keep the pipeline a picture of live deals" },
    { id: "3-protect-data-quality-at-the-point-of-entry", title: "3. Protect data quality at the point of entry" },
    { id: "4-connect-the-tools-that-feed-it", title: "4. Connect the tools that feed it" },
    { id: "why-this-compounds-over-time", title: "Why this compounds over time" }
  ],
  content: () => (
      <>
        <p>
          Most growing businesses adopt a CRM at the point where spreadsheets and inboxes
          stop coping. The tool goes in, contacts get imported, and for a while it feels
          like progress. Then the same problems return in a new form: leads slip through
          the gaps, reporting cannot be trusted, and no two people describe the pipeline
          the same way. The software was never the issue. What was missing is the
          structure underneath it.
        </p>
        <p>
          Used well, a CRM becomes the <strong>system of record</strong> for how a company
          finds, wins and keeps customers. It is the single place where the story of every
          relationship lives, and the foundation that marketing, sales and delivery all
          build on. That foundation is what makes growth <em>sustainable</em> rather than
          simply busy.
        </p>

        <h2 id="from-activity-to-a-system-of-record">From activity to a system of record</h2>
        <p>
          Early-stage growth runs on individual effort. A founder remembers the context of
          each deal; a salesperson keeps their own notes; marketing measures what it can.
          It works until the volume of relationships outgrows anyone&apos;s memory. At that
          point the business needs one shared version of the truth — and that is precisely
          what a CRM is for.
        </p>
        <p>The difference a proper system of record makes shows up everywhere:</p>

        <table>
          <thead>
            <tr>
              <th>Without a system of record</th>
              <th>With a structured CRM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Context lives in inboxes and individual memory</td>
              <td>Every interaction is on the record and searchable</td>
            </tr>
            <tr>
              <td>Handovers lose information</td>
              <td>Anyone can pick up a relationship where it was left</td>
            </tr>
            <tr>
              <td>Reporting is assembled by hand, late</td>
              <td>Reporting is a live reflection of the work</td>
            </tr>
            <tr>
              <td>Growth depends on specific people</td>
              <td>Growth depends on a repeatable process</td>
            </tr>
          </tbody>
        </table>

        <h2 id="the-four-decisions-that-make-a-crm-a-foundation">The four decisions that make a CRM a foundation</h2>
        <p>
          A CRM only becomes a foundation when a handful of decisions are made
          deliberately and then held to. In our work these are the ones that matter most.
        </p>

        <h3 id="1-define-your-lifecycle-stages-before-anything-else">1. Define your lifecycle stages before anything else</h3>
        <p>
          Map how a stranger becomes a customer and agree, in plain language, what moves
          someone from one stage to the next. If the team cannot say what makes a lead
          &ldquo;sales qualified,&rdquo; no report built on that stage will be trustworthy.
          Definitions come first; fields and automation come after.
        </p>

        <h3 id="2-keep-the-pipeline-a-picture-of-live-deals">2. Keep the pipeline a picture of live deals</h3>
        <p>
          A pipeline is not a filing cabinet for everything that ever happened. Each stage
          should represent a distinct, observable step — a call booked, a proposal sent — so
          that the pipeline value means something. Stalled or lost deals move out into a
          nurture list rather than sitting in the forecast.
        </p>

        <h3 id="3-protect-data-quality-at-the-point-of-entry">3. Protect data quality at the point of entry</h3>
        <p>
          Clean reporting is a consequence of clean input. Favour structured fields —
          dropdowns, checkboxes — over free text wherever a value will later be reported on.
          It is far easier to trust an <em>Industry</em> dropdown than to reconcile fifty
          typed variations of the same answer.
        </p>

        <blockquote>
          A CRM should reflect reality. When the pipeline says one thing and the team
          knows another, it is not a data problem — it is a foundation problem, and every
          decision made on top of it inherits the crack.
        </blockquote>

        <h3 id="4-connect-the-tools-that-feed-it">4. Connect the tools that feed it</h3>
        <p>
          The CRM should be the hub, not another island. Forms, scheduling, email and
          billing all belong connected to it, so that a record updates itself as the
          relationship moves. Every manual re-entry is a place where the truth quietly
          drifts.
        </p>

        <h2 id="why-this-compounds-over-time">Why this compounds over time</h2>
        <p>
          A well-structured CRM pays back slowly and then all at once. In the first months
          it mostly removes friction. Over a year, it becomes the thing that lets you
          onboard a new hire quickly, hand a territory over cleanly, forecast with a
          straight face, and see which marketing actually turns into revenue. None of that
          is possible on top of a messy database, however capable the software.
        </p>
        <p>
          Sustainable growth is not about doing more; it is about doing the same thing
          reliably as the numbers get bigger. A CRM built as a genuine foundation is what
          makes that reliability possible — which is why we treat the structure, not the
          licence, as the real work. If you are weighing up how your own system is set up,
          our <a href="/about">approach to systems and operations</a> is a good place to
          start.
        </p>
      </>
    ),
  },

  /* ───────────────────────────── Post 4 ──────────────────────────────── */
  {
    slug: 'what-is-dubsado',
    title: 'What Is Dubsado? A Detailed Guide to the Client Management Platform',
    excerpt:
      'Learn what Dubsado is, how its projects, forms, contracts, invoices, scheduling, client portals, and automation fit together, and who it is designed to help.',
    category: 'CRM',
    author: AUTHOR,
    authorImage: AUTHOR_IMAGE,
    publishedAt: '2026-09-22',
    updatedAt: '2026-09-22',
    readingTime: '28 min read',
    featuredImage: '/images/blog/dubsado.svg',
    imageAlt: 'Sage Kite article illustration for What Is Dubsado?',
    tags: ['CRM', 'Client management', 'Automation', 'Software'],
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
    content: () => (
      <>
        <h2 id="what-is-dubsado">What Is Dubsado?</h2>
        <p>
          Dubsado is a business management platform designed to help service-based
          businesses organize client work in one place. Instead of treating lead
          capture, client communication, forms, contracts, scheduling, invoicing,
          payments, and follow-up as completely separate activities, Dubsado connects
          many of those activities around a central project record.
        </p>
        <p>
          That distinction is important when trying to understand what Dubsado
          actually is. It is often described as a CRM, but the platform is broader
          than a conventional contact database. Its current product structure
          combines client information and communication with operational tools such
          as forms, contracts, invoices, payment plans, scheduling, client portals,
          and automated processes. Dubsado itself describes its plans around helping
          businesses communicate, schedule, organize, manage the business, and get
          paid.
        </p>
        <p>
          The simplest way to think about Dubsado is not as one isolated tool, but as
          a system for managing the stages of a client relationship. A potential
          client can enter through a lead capture form, become associated with a
          project, receive information or forms, sign an agreement, pay an invoice,
          schedule appointments, and continue communicating through the same project
          record. Depending on the plan and setup, some of those steps can also be
          automated.
        </p>

        <h2 id="dubsado-in-simple-terms">Dubsado in simple terms</h2>
        <p>
          Dubsado helps a service business turn its client process into a structured
          digital system. The platform gives the business places to store client and
          project information, communicate with clients, collect information, send
          agreements, manage billing, schedule appointments, and automate repeatable
          steps.
        </p>
        <p>
          This matters because service businesses often do not have a single
          transaction. A client relationship can involve an inquiry, qualification,
          proposal, contract, payment, appointment, delivery, follow-up, and
          additional communication. If every stage is handled in a different
          application or through manually maintained documents and email threads, it
          can become difficult to see what has happened and what still needs to
          happen.
        </p>
        <p>
          Dubsado brings many of these pieces into a common workspace. It does not
          eliminate the need to design the business&apos;s process, write its
          client-facing content, or make decisions about how work should be
          delivered. Instead, it provides the structure and tools through which that
          process can be managed.
        </p>

        <h2 id="what-kind-of-software-is-dubsado">What kind of software is Dubsado?</h2>
        <p>
          Dubsado sits across several familiar software categories. It has CRM-like
          capabilities because it stores client information and keeps client
          communications and project records organized. It also functions as a
          broader client-management and business-management platform because it
          handles activities that go beyond maintaining contact records.
        </p>
        <p>
          Calling Dubsado only a CRM can therefore create the wrong mental model. A
          traditional CRM is often centered primarily on contacts, leads, sales
          opportunities, and relationship history. Dubsado&apos;s model is more
          directly connected to the delivery and administration of client services.
          Projects can contain emails, invoices, forms, scheduling information,
          tasks, notes, and other project details, making the project record a
          central organizing unit.
        </p>
        <p>
          This is also why Dubsado can be relevant to businesses that need more than
          lead tracking. The platform is designed around what happens before,
          during, and after a client books a service&mdash;not simply around keeping
          a list of prospects.
        </p>

        <h2 id="how-dubsado-organizes-client-work">How Dubsado organizes client work</h2>
        <p>
          One of the most useful concepts for understanding Dubsado is the project.
          Dubsado&apos;s current help documentation describes the platform as being
          organized around projects, with each project associated with an individual
          client. A project can contain the information and actions connected to
          that piece of client work.
        </p>
        <p>
          Within a project, businesses can manage areas such as messages, invoicing,
          tasks, events, forms, flows, and notes. Project information can include the
          client, status, dates, tags, portal access, location, referral source, and
          other mapped fields. This gives the business a structured place to
          understand what is happening with a particular client engagement rather
          than reconstructing the history from separate systems.
        </p>
        <p>
          The project concept also explains how many of Dubsado&apos;s features
          relate to one another. A form can collect information for a project. A
          contract can be attached to that project. An invoice can be created for
          the same project. An appointment can be associated with it. A flow can use
          project events or actions as triggers for automated steps. These are not
          unrelated features; they are different parts of the same client-work
          record.
        </p>

        <h2 id="what-can-dubsado-do">What can Dubsado do?</h2>
        <p>
          Dubsado&apos;s feature set covers several parts of the client lifecycle.
          The exact capabilities available to a business depend on the plan, but the
          major areas are easier to understand when viewed by function rather than
          as a long feature list.
        </p>

        <h3 id="client-and-project-management">Client and project management</h3>
        <p>
          Dubsado provides a structured place to manage clients and the projects
          associated with them. Projects can hold communication, forms, invoices,
          tasks, events, notes, and other information relevant to the engagement.
          This makes the platform useful for businesses that need to track not only
          who a client is, but also what work is being performed for that client.
        </p>
        <p>
          The project record is particularly important because it gives context to
          other features. Rather than treating an invoice, contract, email, and
          appointment as independent objects, Dubsado connects them to the
          underlying client project.
        </p>

        <h3 id="forms-questionnaires-and-information-collection">Forms, questionnaires, and information collection</h3>
        <p>
          Forms are one of Dubsado&apos;s major client-facing components. Current
          Dubsado documentation identifies several form types, including contracts,
          sub-agreements, questionnaires, proposals, lead capture forms, and
          read-only PDFs. These forms serve different purposes across the client
          lifecycle.
        </p>
        <p>
          Questionnaires can collect structured client information, while lead
          capture forms can collect information from prospective clients and create
          projects. Proposals can allow clients to select packages and, depending on
          the setup, connect that selection with a contract and invoice. Contracts
          and sub-agreements support electronic signatures. The important point is
          that Dubsado&apos;s forms are not simply generic web forms; they are
          connected to different stages and functions within client management.
        </p>

        <h3 id="contracts-and-electronic-signatures">Contracts and electronic signatures</h3>
        <p>
          Dubsado can be used to present agreements to clients for electronic
          signing. Contracts and sub-agreements are form types with signature and
          initials fields. Dubsado&apos;s current documentation notes that each
          project can have one contract, while additional signed documents can be
          handled through sub-agreements.
        </p>
        <p>
          This makes contracts part of the same project-centered process as other
          client records. The agreement is not simply stored as a separate document;
          it can be associated with the project that contains the rest of the
          client&apos;s service information.
        </p>

        <h3 id="proposals-and-lead-capture">Proposals and lead capture</h3>
        <p>
          Dubsado also supports activities that happen before a client is fully
          onboarded. Lead capture forms can be embedded on a website or shared as a
          link, and a submission can automatically create a project. Public
          proposals can also create projects when completed and can be configured
          with packages, contracts, and invoices.
        </p>
        <p>
          These capabilities help explain where Dubsado fits in the client journey:
          the system can begin with the first structured interaction with a
          prospective client and continue into the actual service engagement.
        </p>

        <h3 id="invoicing-and-payments">Invoicing and payments</h3>
        <p>
          Dubsado includes invoicing and payment-plan functionality. The current
          product documentation describes invoicing and payment plans as core
          capabilities, with payment plans allowing an invoice total to be divided
          into installments with due dates. Dubsado also supports payment-related
          reminders and payment tracking within projects.
        </p>
        <p>
          The significance of this feature is that billing can remain connected to
          the same client project rather than being treated as a completely separate
          administrative process. Businesses can therefore keep financial actions
          alongside the communication and service information associated with the
          engagement.
        </p>

        <h3 id="scheduling-and-appointments">Scheduling and appointments</h3>
        <p>
          Dubsado includes scheduling capabilities on its Premier plan. Scheduling
          connects appointments to client projects, allowing businesses to manage
          appointment-related activity alongside the rest of the engagement.
        </p>
        <p>
          This can be useful for service businesses whose work includes
          consultations, meetings, sessions, or other scheduled interactions. The
          scheduling function is therefore another part of the client process
          rather than a standalone calendar disconnected from the client record.
        </p>

        <h3 id="client-portals">Client portals</h3>
        <p>
          Dubsado provides client portals where clients can access information
          related to their projects. A portal can give clients a more structured
          place to interact with the business than relying entirely on email
          attachments and scattered links.
        </p>
        <p>
          The value of a client portal is mainly organizational and experiential:
          clients have a defined place to access relevant project materials, while
          the business can keep client-facing information associated with the
          project.
        </p>

        <h3 id="automated-workflows-and-flows">Automated workflows and Flows</h3>
        <p>
          Automation is one of the clearest ways Dubsado can move beyond basic
          client record keeping. Dubsado&apos;s current documentation uses Flows to
          automate client processes through triggers and actions. Actions can
          include sending emails, forms, contracts, and invoices, creating tasks,
          and updating project statuses.
        </p>
        <p>
          The important concept is that automation is based on a process rather than
          on isolated reminders. A business can define what should happen after a
          relevant event and let Dubsado perform or prompt the next step.
          Dubsado&apos;s documentation also recommends understanding and mapping the
          client process before building a Flow, which reinforces that automation
          works best when the underlying process is already clear.
        </p>
        <p>
          Flows are therefore not the same thing as simply scheduling emails. They
          can connect different kinds of actions to events in the client journey,
          allowing repeated administrative sequences to be handled more
          consistently.
        </p>

        <h2 id="how-these-dubsado-features-fit-together">How these Dubsado features fit together</h2>
        <p>
          The individual features make more sense when viewed as parts of one
          client-management system. Imagine a service business receiving a new
          inquiry. A lead capture form can collect initial information and create a
          project. That project becomes the place where the business continues
          communication and manages the engagement. A proposal or questionnaire can
          gather additional information, a contract can formalize the agreement, and
          an invoice can handle payment. Scheduling can manage appointments, while
          the client portal provides a client-facing space for the project.
        </p>
        <p>
          If the business uses automation, Flows can connect selected events to
          subsequent actions. For example, a completed form could be one of the
          conditions that causes another action to occur. The exact process depends
          on how the business has configured Dubsado; the important concept is that
          the platform can connect the stages rather than forcing each stage to be
          managed independently.
        </p>
        <p>
          This is the core mental model to take away: Dubsado is not primarily a
          collection of unrelated features. Its features are designed to operate
          around client projects and the processes that move those projects
          forward.
        </p>

        <h2 id="who-is-dubsado-designed-for">Who is Dubsado designed for?</h2>
        <p>
          Dubsado is primarily positioned for businesses that provide services and
          manage ongoing client relationships. It can be relevant to freelancers,
          consultants, creative professionals, coaches, studios, agencies, and other
          service providers whose work involves recurring administrative steps
          between inquiry and delivery.
        </p>
        <p>
          The strongest fit is generally not determined by industry name alone. What
          matters is the structure of the business&apos;s client process. A business
          is more likely to find the platform relevant when it regularly needs to
          collect client information, communicate with clients, send forms or
          agreements, manage payments, schedule appointments, maintain project
          records, or repeat a recognizable onboarding or service process.
        </p>
        <p>
          This distinction is useful because two businesses in very different
          industries can have similar operational needs. Conversely, two businesses
          in the same industry may use Dubsado very differently depending on how
          they sell and deliver their services.
        </p>

        <h2 id="what-are-the-main-benefits-of-using-dubsado">What are the main benefits of using Dubsado?</h2>
        <p>
          The potential benefits of Dubsado come largely from consolidation and
          process structure. Keeping multiple parts of a client engagement in a
          connected system can reduce the need to reconstruct information across
          disconnected tools. A project can provide context for communications,
          forms, billing, appointments, tasks, and notes.
        </p>
        <p>
          Another potential benefit is consistency. When a business repeatedly
          performs similar administrative steps, templates and automation can help
          make those steps more repeatable. Instead of recreating the same forms or
          manually remembering every follow-up, the business can build reusable
          components and, where appropriate, automate parts of the process.
        </p>
        <p>
          There is also a visibility benefit. A structured project record can make
          it easier to see a client&apos;s status and the work associated with the
          engagement. That does not automatically make a process well-designed; the
          business still needs to define its own stages, responsibilities,
          communication, and service delivery. Dubsado provides the system in which
          those decisions can be implemented.
        </p>

        <h2 id="what-should-you-consider-before-using-dubsado">What should you consider before using Dubsado?</h2>
        <p>
          Dubsado is a business-management system, so getting value from it
          involves more than creating an account and turning on features. The
          platform is most useful when a business has enough structure in its
          client process to know what it wants to manage and, where relevant,
          automate.
        </p>
        <p>
          There can also be a learning curve when a business moves from informal
          processes to a more structured system. Forms, templates, project statuses,
          billing, scheduling, and automation all need to reflect the actual way the
          business operates. If those underlying processes are unclear, adding
          software can reproduce that complexity rather than solve it.
        </p>
        <p>
          Plan differences are another practical consideration. Dubsado currently
          offers Starter and Premier plans. Both include core capabilities such as
          unlimited projects and clients, invoicing and payment plans, form and
          email templates, client portals, and calendar connection. Premier adds
          capabilities including scheduling, Flows, public proposals, multiple
          active lead captures, Zapier integration, and additional
          business-management integrations and reporting capabilities. Businesses
          should therefore evaluate the plan against the specific functions they
          need rather than assuming every feature is included in every tier.
        </p>

        <h2 id="how-much-does-dubsado-cost">How much does Dubsado cost?</h2>
        <p>
          Dubsado&apos;s current pricing page lists two paid plans. The monthly
          prices shown are $35 per month for Starter and $55 per month for Premier.
          Annual pricing is listed at $335 per year for Starter and $525 per year
          for Premier. Dubsado also offers a 21-day free trial that provides access
          to Premier features during the trial.
        </p>
        <p>
          Because software pricing and plan features can change, these figures
          should be treated as a current snapshot rather than permanent pricing. For
          a purchasing decision, the official Dubsado pricing page should be checked
          directly for the latest prices, inclusions, limits, and billing terms.
        </p>

        <h2 id="is-dubsado-a-crm">Is Dubsado a CRM?</h2>
        <p>
          Dubsado has CRM-like functionality, but describing it simply as a CRM can
          be incomplete. It stores client information, organizes client projects,
          and keeps communication and relationship information connected to those
          projects. However, its product scope also includes forms, contracts,
          proposals, invoices, payments, scheduling, client portals, and process
          automation.
        </p>
        <p>
          A more useful description is that Dubsado is a client and business
          management platform with CRM functionality. That wording reflects the
          fact that the system is designed not only to remember who a client is,
          but also to help manage what happens throughout the client engagement.
        </p>

        <h2 id="dubsado-as-part-of-a-broader-business-process">Dubsado as part of a broader business process</h2>
        <p>
          The most important thing to understand about Dubsado is the relationship
          between software and process. Dubsado can provide the tools for capturing
          leads, organizing projects, communicating with clients, collecting
          information, formalizing agreements, getting paid, scheduling work, and
          automating repeatable actions. But the platform does not decide what a
          business&apos;s ideal client journey should be.
        </p>
        <p>
          A business still needs to determine what information it collects, when it
          sends a proposal, what its agreement requires, how payment is structured,
          which appointments need scheduling, which communications should be
          automated, and where human judgment is necessary. Dubsado provides
          mechanisms for implementing those decisions.
        </p>
        <p>
          That is why understanding the platform at a conceptual level is more
          useful than memorizing a feature list. The platform&apos;s value depends
          on how well its capabilities are mapped to the real client process.
        </p>

        <h2 id="frequently-asked-questions">Frequently asked questions</h2>

        <h3 id="what-is-dubsado-used-for">What is Dubsado used for?</h3>
        <p>
          Dubsado is used to manage client relationships and service projects,
          including client communication, forms, contracts, invoicing, payments,
          scheduling, client portals, tasks, and&mdash;on the appropriate
          plan&mdash;process automation.
        </p>

        <h3 id="is-dubsado-a-crm-or-project-management-tool">Is Dubsado a CRM or project management tool?</h3>
        <p>
          It includes CRM-like client management and project-management functions,
          but it is broader than either category alone. Its central project record
          connects client information with operational activities such as forms,
          communication, billing, scheduling, and automation.
        </p>

        <h3 id="does-dubsado-have-automation">Does Dubsado have automation?</h3>
        <p>
          Yes. Dubsado&apos;s Premier plan includes Flows, which can automate
          client-process actions such as sending emails, forms, contracts, and
          invoices, creating tasks, and updating project statuses.
        </p>

        <h3 id="does-dubsado-handle-invoices-and-payments">Does Dubsado handle invoices and payments?</h3>
        <p>
          Yes. Dubsado includes invoicing and payment plans, and its project
          records can be used to manage invoices and payments associated with
          client work.
        </p>

        <h3 id="does-dubsado-have-a-client-portal">Does Dubsado have a client portal?</h3>
        <p>
          Yes. Dubsado includes client portals, which provide clients with a
          dedicated place to access information related to their project.
        </p>

        <h3 id="who-typically-uses-dubsado">Who typically uses Dubsado?</h3>
        <p>
          Dubsado is designed for service-based businesses that manage structured
          client relationships. Its relevance depends more on the complexity and
          repeatability of the client process than on a particular industry.
        </p>

        <h2 id="final-takeaway">Final takeaway</h2>
        <p>
          Dubsado is best understood as a client and business management platform
          built around projects. It brings together client communication, forms,
          agreements, billing, scheduling, portals, tasks, and process automation so
          that multiple stages of a service engagement can be managed within a
          connected system.
        </p>
        <p>
          Its CRM functionality is therefore only one part of the picture. The
          platform is designed to help businesses manage the operational journey
          around a client&mdash;not simply store contact information. Understanding
          that project-centered model makes the rest of Dubsado&apos;s feature set
          much easier to understand and evaluate.
        </p>
      </>
    ),
  },
];

/* ─────────────────────────── Selectors ─────────────────────────────────── */

/** All live (non-draft) posts, newest first. */
export function getPublishedPosts(): BlogPost[] {
  return posts
    .filter((p) => !p.draft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

/** The post to headline the listing: the `featured` one, else the newest. */
export function getFeaturedPost(): BlogPost | undefined {
  const live = getPublishedPosts();
  return live.find((p) => p.featured) ?? live[0];
}

/** Live posts excluding the featured one, newest first. */
export function getRestPosts(): BlogPost[] {
  const featured = getFeaturedPost();
  return getPublishedPosts().filter((p) => p.slug !== featured?.slug);
}

/** Look up a single live post by slug. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug && !p.draft);
}

/** Categories that actually have at least one live post. */
export function getUsedCategories(): string[] {
  const used = new Set(getPublishedPosts().map((p) => p.category));
  return CATEGORIES.filter((c) => used.has(c));
}
