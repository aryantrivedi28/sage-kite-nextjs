// Aryan's previously supplied business contact. Confirm before publishing.
export const WHATSAPP_NUMBER = "919893270210";
export function contactLink(service?: string) {
    const message = service
        ? `Hi Sage Kite, I would like to discuss ${service}.`
        : "Hi Sage Kite, I would like to discuss my business and growth goals.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
export const services = [
    { id: "consultancy", title: "Consultancy", description: "Get clear on where to go, what to prioritise and how to put AI to useful work.", items: ["Go-to-market strategy", "AI consultancy & adoption", "Fractional CMO"], cta: "Find your direction" },
    { id: "crm-implementation", title: "CRM implementation", description: "Turn scattered tools and manual follow-ups into one connected way of working.", items: ["CRM setup, migration & optimisation", "Integrations & workflow automation", "Custom CRM development"], cta: "Explore the platforms" },
    { id: "staffing", title: "Recruitment & staffing", description: "Bring the right people into the system. Hire VAs and specialists from India for ongoing execution.", items: ["CRM & automation VAs", "Marketing & content specialists", "Executive & general VAs"], cta: "Build your team" },
    { id: "marketing", title: "Marketing", description: "Help the right people find you. Give them a reason to care, and a clear next step.", items: ["SEO & AI SEO", "Meta, Google & LinkedIn Ads", "Social media management", "Email marketing"], cta: "Grow your reach" },
    { id: "white-label", title: "White-label delivery", description: "Your agency. Our delivery team. You own the client relationship. We support the work behind it as your backend execution partner.", items: ["CRM & automation delivery", "Marketing execution & specialist talent", "Agreed scope, handoffs & reporting"], cta: "Discuss a partnership" },
];
export const crmGroups = [
    { title: "Sales & marketing", tools: ["GoHighLevel", "Keap", "Kajabi", "Dubsado"] },
    { title: "Real estate", tools: ["Follow Up Boss", "Lofty"] },
    { title: "Home services & contracting", tools: ["ServiceTitan", "Housecall Pro", "Jobber", "JobNimbus", "AccuLynx"] },
    { title: "Specialist businesses", tools: ["Boulevard", "Lawmatics", "Clio Grow", "Bloomerang"] },
];
