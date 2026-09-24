import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Sage Kite",
  description:
    "The terms that govern your use of Sage Kite's website and services: consultancy, CRM implementation, marketing, specialist staffing and white-label delivery.",
  keywords: ["Sage Kite terms of service", "terms and conditions", "service agreement"],
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/terms-of-service",
    title: "Terms of Service | Sage Kite",
    description:
      "The terms that govern your use of Sage Kite's website and services: consultancy, CRM implementation, marketing, specialist staffing and white-label delivery.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
