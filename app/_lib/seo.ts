import type { Metadata } from 'next'
import { siteUrl } from './siteUrl'
import { DEFAULT_KEYWORDS } from './constants'

interface BuildMetadataInput {
  path: string
  title: string
  description: string
  keywords?: string[]
}

export function buildPageMetadata({
  path,
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
}: BuildMetadataInput): Metadata {
  const pageUrl = new URL(path, siteUrl()).toString()

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      url: pageUrl,
      title,
      description,
      siteName: 'Dhan7 Gaming App',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
