import type { BlogPost } from '@/content/blog';
import { absoluteImageUrl } from '@/lib/sanity/image';

const SITE_URL = 'https://www.sagekite.com';

/**
 * Serialises JSON-LD for a `<script type="application/ld+json">` element. `JSON.stringify` does
 * not escape `<`, so a post field such as `</script><script>alert(1)</script>` would end the
 * script element early and run as page JavaScript. Every `<` becomes `\u003c` (still valid JSON,
 * the same value once parsed), as Next.js's JSON-LD guide recommends. The two Unicode line
 * separators are escaped too: they are legal in JSON but break JavaScript string literals.
 * Titles, excerpts, authors, tags and FAQs come from the blog studio, so always embed JSON-LD
 * through this function (or the JsonLd component), never with a bare JSON.stringify.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

/**
 * Builds the JSON-LD graph for a blog post from its data in content/blog.
 * Every post gets Article + BreadcrumbList. FAQPage is added when the post
 * sets `faqs`, and the Article is linked to a platform page's Service schema
 * when the post sets `relatedPlatform`.
 */
export function buildBlogJsonLd(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.excerpt,
      image: [absoluteImageUrl(post.featuredImage)],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author,
        ...(post.authorImage ? { image: absoluteImageUrl(post.authorImage) } : {}),
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      articleSection: post.category,
      ...(post.tags ? { keywords: post.tags.join(', ') } : {}),
      ...(post.relatedPlatform
        ? { about: { '@id': `${SITE_URL}/platforms/${post.relatedPlatform}/#service` } }
        : {}),
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title },
      ],
    },
  ];

  if (post.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
