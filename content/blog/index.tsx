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

        <h2>From activity to a system of record</h2>
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

        <h2>The four decisions that make a CRM a foundation</h2>
        <p>
          A CRM only becomes a foundation when a handful of decisions are made
          deliberately and then held to. In our work these are the ones that matter most.
        </p>

        <h3>1. Define your lifecycle stages before anything else</h3>
        <p>
          Map how a stranger becomes a customer and agree, in plain language, what moves
          someone from one stage to the next. If the team cannot say what makes a lead
          &ldquo;sales qualified,&rdquo; no report built on that stage will be trustworthy.
          Definitions come first; fields and automation come after.
        </p>

        <h3>2. Keep the pipeline a picture of live deals</h3>
        <p>
          A pipeline is not a filing cabinet for everything that ever happened. Each stage
          should represent a distinct, observable step — a call booked, a proposal sent — so
          that the pipeline value means something. Stalled or lost deals move out into a
          nurture list rather than sitting in the forecast.
        </p>

        <h3>3. Protect data quality at the point of entry</h3>
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

        <h3>4. Connect the tools that feed it</h3>
        <p>
          The CRM should be the hub, not another island. Forms, scheduling, email and
          billing all belong connected to it, so that a record updates itself as the
          relationship moves. Every manual re-entry is a place where the truth quietly
          drifts.
        </p>

        <h2>Why this compounds over time</h2>
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

  /* ───────────────────────────── Post 2 ──────────────────────────────── */
  {
    slug: 'why-growing-businesses-struggle-with-operational-bottlenecks',
    title: 'Why Growing Businesses Struggle With Operational Bottlenecks',
    excerpt:
      'Bottlenecks rarely appear because a team is doing something wrong. They appear because the way a business operates has not caught up with how much it has grown. Here is how to find them and ease them.',
    category: 'Operations',
    author: AUTHOR,
    authorImage: AUTHOR_IMAGE,
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09',
    readingTime: '6 min read',
    featuredImage: '/images/blog/ops-bottlenecks.png',
    imageAlt:
      'Illustration of a workflow narrowing at a single point to represent a bottleneck',
    tags: ['Operations', 'Process', 'Scaling', 'Systems'],
    content: () => (
      <>
        <p>
          Every growing business hits a point where things start to feel harder than they
          should. Work that used to flow now waits. A few people become the answer to every
          question. Good weeks are followed by ones where nothing seems to move. It is easy
          to read this as a people problem or a motivation problem. Far more often, it is a
          <strong> structural</strong> one: the business has grown faster than the way it
          operates.
        </p>
        <p>
          Operational bottlenecks are simply the places where more is arriving than can pass
          through. They are worth understanding because they set the real ceiling on growth
          — you can add leads, headcount and ambition, but output is still capped by the
          narrowest point in the system.
        </p>

        <h2>Why bottlenecks form as you grow</h2>
        <p>
          The habits that carry an early business are usually the ones that later constrain
          it. What worked at ten customers quietly stops working at a hundred.
        </p>
        <ol>
          <li>
            <strong>Knowledge stays in people, not systems.</strong> When only one person
            knows how something is done, that person becomes a queue.
          </li>
          <li>
            <strong>Approvals concentrate at the top.</strong> Sign-off that made sense
            when the founder saw everything becomes a daily blockage at scale.
          </li>
          <li>
            <strong>Handovers multiply.</strong> More people means more points where work
            is passed on — and every handover is a chance for it to stall.
          </li>
          <li>
            <strong>Tools stop talking to each other.</strong> Manual re-entry between
            systems turns into hours of invisible, low-value work.
          </li>
        </ol>

        <h2>How to find the real bottleneck</h2>
        <p>
          The bottleneck is rarely where the noise is loudest. The team feeling the most
          pressure is often downstream of the actual constraint. To locate it, follow the
          work rather than the complaints.
        </p>
        <h3>Look for where work waits</h3>
        <p>
          Pick one important process — say, turning a signed client into a delivered
          project — and trace a real example end to end. Note every point where it sat idle
          waiting for someone or something. The longest waits, not the busiest desks, point
          to the constraint.
        </p>
        <h3>Watch what queues up</h3>
        <p>
          Bottlenecks announce themselves as backlogs: proposals waiting for review,
          tickets waiting for a specialist, invoices waiting for approval. A growing queue
          in front of one step is the clearest signal you have.
        </p>

        <blockquote>
          You cannot fix a bottleneck by asking the rest of the system to try harder.
          Speeding up everything upstream of a constraint just makes the queue in front of
          it longer.
        </blockquote>

        <h2>Easing a constraint without breaking the rest</h2>
        <p>
          Once you have found the real constraint, there are usually three ways to ease it —
          best applied in order.
        </p>
        <ul>
          <li>
            <strong>Remove work from it.</strong> Ask what is reaching this step that
            should not. Filtering, qualifying or batching upstream often relieves a
            bottleneck without touching the step itself.
          </li>
          <li>
            <strong>Systematise it.</strong> Turn what lives in one person&apos;s head into
            a documented, shared process so more than one person can carry it.
          </li>
          <li>
            <strong>Automate the repetitive parts.</strong> Where a step is mechanical and
            rule-based, let a system handle it so people spend their time on judgement.
          </li>
        </ul>
        <p>
          Notice that adding headcount is not the first move. Putting more people around an
          undefined process usually adds handovers and supervision — new bottlenecks — rather
          than removing the original one.
        </p>

        <h2>Bottlenecks are a sign of progress</h2>
        <p>
          It helps to reframe the problem. A bottleneck means demand has outgrown a way of
          working — which is what growth looks like from the inside. The businesses that keep
          scaling are not the ones that never hit constraints; they are the ones that get
          good at finding and easing them before they harden into a ceiling. Treated that
          way, each bottleneck you resolve raises the level the whole business can operate
          at.
        </p>
      </>
    ),
  },

  /* ───────────────────────────── Post 3 ──────────────────────────────── */
  {
    slug: 'when-should-a-business-automate-its-sales-and-marketing-processes',
    title: 'When Should a Business Automate Its Sales and Marketing Processes?',
    excerpt:
      'Automation is powerful when it sits on top of a process that already works — and expensive when it does not. Here is a practical way to judge when your sales and marketing are ready to automate.',
    category: 'Automation',
    author: AUTHOR,
    authorImage: AUTHOR_IMAGE,
    publishedAt: '2026-09-02',
    updatedAt: '2026-09-02',
    readingTime: '6 min read',
    featuredImage: '/images/blog/sales-automation.png',
    imageAlt:
      'Diagram of a decision point leading into an automated workflow',
    tags: ['Automation', 'Marketing', 'Sales', 'AI'],
    content: () => (
      <>
        <p>
          Automation has an obvious appeal: do the same work with less manual effort, fewer
          dropped balls and more consistency. But the order of operations matters. Automating
          a process that is not yet clear does not remove the mess — it runs the mess faster.
          The question is therefore less <em>whether</em> to automate and more <em>when</em>.
        </p>
        <p>
          The short answer: automate a process once it is <strong>defined, repeatable and
          worth repeating</strong>. Everything below is a way of checking whether you are
          actually there.
        </p>

        <h2>Three conditions worth meeting first</h2>
        <p>
          Before automating a sales or marketing process, it helps to be honest about three
          things.
        </p>

        <table>
          <thead>
            <tr>
              <th>Condition</th>
              <th>The question to ask</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>It is defined</td>
              <td>Could you write down the steps so someone new could follow them?</td>
            </tr>
            <tr>
              <td>It is repeatable</td>
              <td>Does it happen the same way often enough to be worth encoding?</td>
            </tr>
            <tr>
              <td>It is worth it</td>
              <td>Is the manual version consuming real time or causing real errors?</td>
            </tr>
          </tbody>
        </table>

        <p>
          If a process fails the first test, the work is to <strong>define</strong> it, not
          automate it. If it fails the second, automation will be brittle and need constant
          fixing. If it fails the third, you may be automating for its own sake.
        </p>

        <h2>Good early candidates</h2>
        <p>
          Some tasks are almost always ready, because they are mechanical, high-volume and
          rule-based. These are where automation earns its keep quickly:
        </p>
        <ul>
          <li>Routing and assigning new leads to the right owner</li>
          <li>Sending timely follow-ups so nothing is forgotten</li>
          <li>Moving data between tools so records stay in sync</li>
          <li>Reminders, confirmations and scheduling around meetings</li>
          <li>Standard reporting that is assembled the same way each week</li>
        </ul>
        <p>
          Lead routing is a useful example, because the logic is simple and the payoff is
          immediate. A rule as plain as this removes a daily manual decision:
        </p>
        <pre><code>{`WHEN a new lead is created
  IF lead score >= 70 AND region = "Priority"
    THEN assign to senior rep and notify within 5 minutes
  ELSE
    THEN add to nurture sequence and review weekly`}</code></pre>
        <p>
          The point is not the syntax — it is that the decision was clear enough to write
          down. That clarity is the real prerequisite for automating anything.
        </p>

        <h2>What to keep human, for now</h2>
        <p>
          Not everything should be automated, and knowing where to stop is part of doing it
          well. Judgement-heavy, relationship-defining and genuinely varied work is usually
          better kept human — automation can prepare it, but should rarely replace it.
        </p>
        <blockquote>
          The goal of automation is not to remove people from the process. It is to remove
          the repetitive work <em>around</em> the process so people can spend their time
          where judgement actually matters.
        </blockquote>

        <h2>Where AI changes the line</h2>
        <p>
          The boundary of what can be automated has moved. Tasks that used to need a person —
          reading a messy enquiry, summarising a call, drafting a first-pass reply — can now
          be handled well enough to sit inside an automated flow, with a person reviewing
          rather than starting from scratch. That does not change the underlying rule: the
          process still has to be understood before it is handed to a machine. It simply
          means more of your processes now clear the bar.
        </p>

        <h2>A simple test</h2>
        <p>
          When you are unsure, ask one question: <strong>if I described this process to a
          new hire, could they do it consistently from the description alone?</strong> If
          yes, it is a strong automation candidate. If no, the next step is to make it that
          clear — and you will likely find the act of clarifying removes half the pain you
          were hoping automation would fix.
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
