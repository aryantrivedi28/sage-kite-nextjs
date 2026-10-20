import type React from 'react';

/*
 * Every page under /blog (the listing, posts in code and posts from Sanity)
 * shows Sanity posts, in the listing and in "Keep reading". The lowest
 * `revalidate` of a route's layouts and pages applies to the whole route, so
 * this sets it once: pages are regenerated at most every 60 seconds. Saving a
 * post in the blog studio also calls revalidatePath('/blog', 'layout').
 * No markup: the pages render their own header and footer.
 */
export const revalidate = 60;

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
