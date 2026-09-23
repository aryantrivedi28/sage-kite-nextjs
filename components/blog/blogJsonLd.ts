import type { BlogPost } from '@/content/blog';

const SITE_URL = 'https://www.sagekite.com';

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
      image: [`${SITE_URL}${post.featuredImage}`],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author,
        ...(post.authorImage ? { image: `${SITE_URL}${post.authorImage}` } : {}),
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
