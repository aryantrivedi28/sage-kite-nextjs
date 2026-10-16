import type { Metadata } from "next";
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from "@/content/share-image";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
