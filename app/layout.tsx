import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business growth consulting for SMEs | Sage Kite",
  description: "Sage Kite is a business growth consultancy. We fix the systems, people and execution behind growth, from CRM and automation to marketing and specialist staff.",
  alternates: {
    canonical: "https://www.sagekite.example/",
  },
  openGraph: {
    type: "website",
    siteName: "Sage Kite",
    url: "https://www.sagekite.example/",
    title: "Sage Kite: business growth through systems, people and execution",
    description: "A business growth consultancy that advises, implements and executes: consultancy, CRM, marketing automation, marketing and specialist VA support, working as one system.",
    // PLACEHOLDER: og:image require an approved share image. None has been supplied.
  },
  twitter: {
    card: "summary",
    title: "Sage Kite: business growth consulting",
    description: "Sage Kite improves the systems, people and execution behind growth for small and medium-sized businesses.",
    // PLACEHOLDER: twitter:image require an approved share image. None has been supplied.
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.sagekite.example/#organization",
        "name": "Sage Kite",
        "url": "https://www.sagekite.example/",
        "logo": "https://www.sagekite.example/assets/sage-kite-logo.png",
        "slogan": "Streamlined systems for growth.",
        "description": "Sage Kite is a business growth consultancy for small and medium-sized businesses. It improves the systems, people and execution behind growth through growth consultancy (GTM consultancy, AI consultancy and fractional CMO support), CRM implementation, marketing, and Tier 1 virtual assistant staffing, and provides white-label delivery for marketing agencies.",
        "areaServed": [
          {"@type": "Country", "name": "United States"},
          {"@type": "Country", "name": "Canada"},
          {"@type": "Place", "name": "Europe"},
          {"@type": "Country", "name": "Australia"},
          {"@type": "Country", "name": "New Zealand"}
        ],
        "knowsAbout": [
          "Business growth consulting",
          "Go-to-market consulting",
          "AI consulting",
          "Fractional CMO services",
          "CRM consulting",
          "CRM implementation",
          "Custom CRM development",
          "Marketing automation",
          "Search engine optimisation",
          "AI search optimisation",
          "Paid advertising",
          "Email marketing",
          "Social media management",
          "Virtual assistant staffing",
          "White-label marketing delivery"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.sagekite.example/#website",
        "url": "https://www.sagekite.example/",
        "name": "Sage Kite",
        "publisher": {"@id": "https://www.sagekite.example/#organization"},
        "inLanguage": "en"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.sagekite.example/#webpage",
        "url": "https://www.sagekite.example/",
        "name": "Business growth consulting for SMEs | Sage Kite",
        "description": "Sage Kite is a business growth consultancy that improves the systems, people and execution behind growth.",
        "isPartOf": {"@id": "https://www.sagekite.example/#website"},
        "about": {"@id": "https://www.sagekite.example/#organization"},
        "inLanguage": "en"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
