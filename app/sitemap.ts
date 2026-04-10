import type { MetadataRoute } from 'next'
import { siteUrl } from './_lib/siteUrl'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  const now = new Date()
  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/dhan77-apk-download', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/dhan77-login', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/dhan77-bonus', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/dhan77-review', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.55 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.4 },
    { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.4 },
    { path: '/responsible-gaming', changeFrequency: 'monthly', priority: 0.5 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
