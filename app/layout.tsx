import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sage Kite | Growth systems for the AI era",
  description:
    "Sage Kite builds growth strategy, marketing automation and flexible marketing teams for ambitious businesses.",
  icons: {
    icon: "/sage-kite-mark.png",
    shortcut: "/sage-kite-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
