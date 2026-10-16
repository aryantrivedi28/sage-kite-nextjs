import type { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/content/blog'
import { PLATFORM_PAGE_SLUGS } from '@/content/platforms'
import { FOUNDER_ESSAYS, FOUNDERS_THOUGHTS_PATH, essayPath } from '@/content/founders-thoughts'
import { CASE_STUDIES, CASE_STUDIES_PATH, caseStudyPath } from '@/content/case-studies'

const BASE_URL = 'https://www.sagekite.com'

/*
 * lastModified rule (see deciosn.md D012): give a date only when the content itself records
 * when it last changed, and output it exactly as authored. Never use the build time: it
 * would claim every page changed on every deploy. Pages with no reliable date get no
 * <lastmod>, which the sitemap protocol allows.
 */

// <lastmod> must be a full date (YYYY-MM-DD) or date-time. A partial date such as '2026-09'
// is left out rather than padded with an invented day.
const fullDate = (date: string | undefined) => (date && /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined)

// The dates shown on the pages themselves ("Last Updated" on the privacy policy, "Effective
// Date" on the terms). The policy text has not changed since. Update these with those dates.
const PRIVACY_POLICY_UPDATED = '2026-09-18'
const TERMS_OF_SERVICE_UPDATED = '2026-09-18'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/consultancy`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/crm-implementation`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/marketing`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/specialist-staffing`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/white-label`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/platforms`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries/real-estate`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/home-services`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/coaching`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/law-firms`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/fitness-wellness`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/nonprofits`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/service-businesses`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/other-businesses`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...PLATFORM_PAGE_SLUGS.map((platform) => ({
      url: `${BASE_URL}/platforms/${platform}`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    {
      url: `${BASE_URL}${FOUNDERS_THOUGHTS_PATH}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...FOUNDER_ESSAYS.map((essay) => ({
      url: `${BASE_URL}${essayPath(essay.slug)}`,
      lastModified: fullDate(essay.datePublished),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    {
      url: `${BASE_URL}${CASE_STUDIES_PATH}`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...CASE_STUDIES.map((study) => ({
      url: `${BASE_URL}${caseStudyPath(study.slug)}`,
      lastModified: fullDate(study.dateModified ?? study.datePublished),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/book`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: TERMS_OF_SERVICE_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: PRIVACY_POLICY_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: fullDate(post.updatedAt ?? post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
