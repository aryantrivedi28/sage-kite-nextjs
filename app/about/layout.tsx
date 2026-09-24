import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sage Kite",
  description:
    "Meet Sage Kite, a business growth consultancy helping growing businesses make sense of technology, marketing, automation, AI and people through better systems.",
  keywords: ["about Sage Kite", "business growth consultancy", "CRM and automation consultancy", "growth systems", "SME consulting"],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/about",
    title: "About Sage Kite | Sage Kite",
    description:
      "Meet Sage Kite, a business growth consultancy helping growing businesses make sense of technology, marketing, automation, AI and people through better systems.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
