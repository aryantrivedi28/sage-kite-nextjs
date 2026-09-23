import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Sage Kite",
  alternates: { canonical: "/terms-of-service" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
