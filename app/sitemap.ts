import type { MetadataRoute } from 'next'
import { siteUrl } from './_lib/siteUrl'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  const paths = [
    '',
    '/dhan77-apk-download',
    '/dhan77-login',
    '/dhan77-bonus',
    '/dhan77-review',
    '/faq',
  ]
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
