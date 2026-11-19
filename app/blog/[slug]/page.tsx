import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogArticleLayout } from '@/components/blog/BlogArticleLayout';
import { buildBlogMetadata } from '@/components/blog/blogMetadata';
import { getSanityPostBySlug, getSanityPostSlugs } from '@/content/blog/live';

/*
 * Blog posts published from the blog studio to Sanity (docs/sanity.md).
 * Posts written in code have their own folders (app/blog/<slug>/), which take
 * precedence over this dynamic route; Sanity posts with those slugs are ignored.
 * Unknown, draft and unpublished slugs return 404. Revalidation is set in
 * app/blog/layout.tsx; slugs published after the build are rendered on demand.
 */

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getSanityPostSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getSanityPostBySlug((await params).slug);
  if (!post) {
    return { title: 'Article not found | Sage Kite', robots: { index: false } };
  }
  return buildBlogMetadata(post);
}

export default async function SanityBlogPostPage({ params }: Props) {
  const post = await getSanityPostBySlug((await params).slug);
  if (!post) notFound();

  return (
    <BlogArticleLayout post={post}>
      <post.content />
    </BlogArticleLayout>
  );
}
