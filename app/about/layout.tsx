import type { Metadata } from "next";

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
  },
  twitter: {
    card: "summary",
    title: "About Sage Kite | Business Growth Consultancy",
    description:
      "Sage Kite improves the systems, people and execution behind growth for small and medium-sized businesses.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
