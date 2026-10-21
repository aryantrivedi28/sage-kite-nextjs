import type { NextConfig } from "next";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

/*
 * Security headers for the blog studio page and its sign-in endpoint (decision.md D032). The paths
 * repeat components/blog-studio/paths.ts. Chosen so nothing breaks: none of them restricts scripts,
 * images, fonts or frames the app loads (Next's inline scripts, Google Analytics, the YouTube preview,
 * cdn.sanity.io images and `data:` previews all keep working). A full Content-Security-Policy would
 * need a tuned allowlist for those, so it is recommended as Report-Only first (docs/blog-studio.md).
 */
const studioSecurityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  // frame-ancestors is the modern X-Frame-Options; the other three only block rarely used attack routes.
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "no-referrer" },
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Featured images of blog posts published from the blog studio (docs/sanity.md).
    // Only this project's asset URLs, without query strings.
    remotePatterns: sanityProjectId
      ? [{ protocol: "https", hostname: "cdn.sanity.io", port: "", pathname: `/images/${sanityProjectId}/**`, search: "" }]
      : [],
  },
  async headers() {
    return [
      { source: "/sk-studio-ufn5xdafhll7", headers: studioSecurityHeaders },
      { source: "/api/sk-studio-ufn5xdafhll7/:path*", headers: studioSecurityHeaders },
    ];
  },
  experimental: {
    serverActions: {
      // Blog studio image uploads (components/blog-studio/actions.ts). Default is 1mb;
      // Vercel caps request bodies at 4.5 MB, so stay below that.
      bodySizeLimit: "4mb",
    },
  },
};

export default nextConfig;
