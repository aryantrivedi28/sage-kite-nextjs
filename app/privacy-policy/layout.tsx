import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sage Kite",
  description:
    "How Sage Kite collects, uses and protects your personal information when you use our website and services, and the choices and rights you have over your data.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.com/privacy-policy",
    title: "Privacy Policy | Sage Kite",
    description:
      "How Sage Kite collects, uses and protects your personal information when you use our website and services, and the choices and rights you have over your data.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
