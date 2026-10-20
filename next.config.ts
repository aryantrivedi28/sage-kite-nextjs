import type { NextConfig } from "next";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Featured images of blog posts published from the blog studio (docs/sanity.md).
    // Only this project's asset URLs, without query strings.
    remotePatterns: sanityProjectId
      ? [{ protocol: "https", hostname: "cdn.sanity.io", port: "", pathname: `/images/${sanityProjectId}/**`, search: "" }]
      : [],
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
