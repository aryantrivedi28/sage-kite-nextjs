'use client';

import { useState } from 'react';

function FAQItem({ question, children }: { question: string, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <h3 onClick={() => setOpen(!open)}>
        {question}
        <span className="toggle-icon">{open ? '−' : '+'}</span>
      </h3>
      <div className="faq-content">
        {children}
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="brief" style={{ borderTop: '1px solid var(--light-sage)' }}>
      <div className="wrap reveal">
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', marginBottom: '48px', color: 'var(--ink)' }}>
          Sage Kite in brief
        </h2>

        <div className="faq-group">
          <p className="label">About Sage Kite</p>
          <div className="brief-grid faq-grid">
            <FAQItem question="What is Sage Kite?">
              <p>Sage Kite is a business growth consultancy for small and medium-sized businesses. It improves the systems, people and execution behind growth, bringing consultancy, CRM, marketing, AI, automation and specialist support together so they work as one growth operation.</p>
            </FAQItem>
            <FAQItem question="What does Sage Kite do?">
              <p>Sage Kite finds what is holding growth back and helps fix it. Depending on the business, that can mean shaping go-to-market strategy, implementing a CRM, running SEO or paid media, building marketing automation, or providing specialists to operate the system day to day.</p>
            </FAQItem>
            <FAQItem question="Who does Sage Kite work with?">
              <p>Small and medium-sized businesses in the United States, Canada, Europe, Australia and New Zealand, with a focus on real estate, home services, coaches and course businesses, law firms, fitness and wellness, and nonprofits. Marketing agencies also work with Sage Kite for white-label delivery.</p>
            </FAQItem>
            <FAQItem question="What growth problems does Sage Kite solve?">
              <p>Typical problems include enquiries without a clear owner, inconsistent follow-up, a CRM that is underused or disorganised, marketing that cannot be connected to revenue, too much manual work, and teams without the capacity to execute.</p>
            </FAQItem>
          </div>
        </div>

        <div className="faq-group">
          <p className="label">How Sage Kite works</p>
          <div className="brief-grid faq-grid">
            <FAQItem question="How is Sage Kite different from hiring separate specialists?">
              <p>Separate specialists tend to solve separate problems. Sage Kite scopes strategy, systems, marketing and people around the same commercial goal, so the CRM, the campaigns and the team running them are designed to work together.</p>
            </FAQItem>
            <FAQItem question="Does Sage Kite provide strategy as well as implementation?">
              <p>Yes. Consultancy sets the direction, and Sage Kite can then implement the systems and carry out the marketing and ongoing work, rather than handing over a plan for someone else to deliver.</p>
            </FAQItem>
            <FAQItem question="Can Sage Kite work with the systems a business already has?">
              <p>Yes. Many engagements start from an existing CRM or platform: cleaning up data, redesigning pipelines or connecting marketing to it. Discovery confirms what is feasible on the current account before any work is scoped.</p>
            </FAQItem>
          </div>
        </div>

        <div className="faq-group">
          <p className="label">Consultancy and AI</p>
          <div className="brief-grid faq-grid">
            <FAQItem question="What does business growth consulting involve?">
              <p>Business growth consulting identifies what is limiting a business's growth and decides what to change first. Sage Kite delivers it through GTM consultancy, AI consultancy and fractional CMO support: the part-time senior marketing leadership a business may need without a full-time hire. Outputs can include a growth diagnosis, priorities and an implementation roadmap.</p>
            </FAQItem>
            <FAQItem question="What is AI consultancy?">
              <p>AI consultancy helps a business decide where AI is genuinely useful in its marketing and operations, such as reducing repetitive work, and where it adds little. The aim is practical use that supports existing teams and systems.</p>
            </FAQItem>
          </div>
        </div>

        <div className="faq-group">
          <p className="label">CRM</p>
          <div className="brief-grid faq-grid">
            <FAQItem question="What do Sage Kite's CRM implementation services include?">
              <p>CRM work starts with consulting on how the business actually sells. Implementation then covers setup, pipeline design, cleanup, feasible data migrations, platform-native workflows, testing, team training and handover. Custom CRM development is available where an existing platform does not fit the sales process.</p>
            </FAQItem>
            <FAQItem question="Which CRM platforms does Sage Kite work with?">
              <p>GoHighLevel, Keap, Follow Up Boss, Lofty, ServiceTitan, Housecall Pro, Jobber, Kajabi, Clio Grow, Dubsado, Mindbody, Bloomerang and HoneyBook, plus custom CRM development.</p>
            </FAQItem>
          </div>
        </div>

        <div className="faq-group">
          <p className="label">Marketing and automation</p>
          <div className="brief-grid faq-grid">
            <FAQItem question="What marketing services does Sage Kite provide?">
              <p>SEO, AI SEO, Google Ads, Meta Ads, LinkedIn Ads, email marketing and social media management. Marketing is planned around the business's priorities and connected to its CRM, so the enquiries it produces land in a system that can follow them up.</p>
            </FAQItem>
            <FAQItem question="What is AI SEO?">
              <p>AI SEO generally refers to making a business's content easy for AI-driven search to find, understand and cite accurately, including AI answers in search engines and conversational assistants. It works alongside traditional SEO rather than replacing it.</p>
            </FAQItem>
            <FAQItem question="What is marketing automation, and how does it support growth?">
              <p>Marketing automation uses rules inside a platform to handle repetitive steps: replying to new enquiries, sending follow-up sequences and updating pipeline stages. Sage Kite builds it with the native workflow tools in the CRM, so follow-up happens consistently without adding manual work.</p>
            </FAQItem>
          </div>
        </div>

        <div className="faq-group">
          <p className="label">Specialist Staffing and white-label</p>
          <div className="brief-grid faq-grid">
            <FAQItem question="What is Specialist Staffing?">
              <p>Specialist Staffing provides Tier 1 virtual assistants for growth and automation work in five roles: CRM and automation, marketing operations, email marketing, social media, and lead generation and sales support. They help operate and maintain the systems a business has invested in.</p>
            </FAQItem>
            <FAQItem question="Can marketing agencies use Sage Kite for white-label fulfilment?">
              <p>Yes. Sage Kite delivers agreed services under the agency's own brand. Scope, client communication, project ownership and handover are defined for each engagement before work begins.</p>
            </FAQItem>
          </div>
        </div>

        <div className="faq-group" style={{ borderBottom: '1px solid var(--light-sage)' }}>
          <p className="label">Working with Sage Kite</p>
          <div className="brief-grid faq-grid">
            <FAQItem question="How does working with Sage Kite begin?">
              <p>With a discovery call covering your current process, desired outcome, access, constraints and decision maker. Implementation work is then scoped in a proposal with deliverables, exclusions, milestones and a fixed project price.</p>
            </FAQItem>
            <FAQItem question="What happens after implementation?">
              <p>Handover and training, followed by optional maintenance with a defined support scope. Where it helps, Sage Kite can recommend an ongoing marketing plan or specialist staffing built on what the project revealed.</p>
            </FAQItem>
          </div>
        </div>

      </div>
    </section>
  );
}
