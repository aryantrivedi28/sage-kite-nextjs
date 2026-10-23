import type { Metadata } from "next";
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/content/share-image";
import { JsonLd } from "@/components/blog/JsonLd";

const SITE_URL = "https://www.sagekite.com";
const PAGE_URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: "About Sage Kite | Business Growth Consultancy",
  description:
    "Meet Sage Kite, a business growth consultancy founded by Aryan Trivedi that brings strategy, CRM, marketing, automation and specialist people together.",
  keywords: ["about Sage Kite", "business growth consultancy", "CRM and automation consultancy", "growth systems", "SME consulting"],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/about",
    title: "About Sage Kite | Business Growth Consultancy",
    description:
      "Meet Sage Kite, a business growth consultancy helping growing businesses make sense of technology, marketing, automation, AI and people through better systems.",
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sage Kite | Business Growth Consultancy",
    description:
      "Sage Kite improves the systems, people and execution behind growth for small and medium-sized businesses.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

// Structured data for /about. The Person uses only facts the page states: name, role, LinkedIn and BITS Pilani.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "About Sage Kite | Business Growth Consultancy",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${PAGE_URL}/#aryan-trivedi`,
      name: "Aryan Trivedi",
      jobTitle: "Founder, Sage Kite",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      alumniOf: { "@type": "CollegeOrUniversity", name: "BITS Pilani" },
      sameAs: ["https://www.linkedin.com/in/aryantrivedi"],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={jsonLd} />
    </>
  );
}
