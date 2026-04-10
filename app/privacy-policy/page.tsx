import type { Metadata } from 'next'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/privacy-policy',
  title: 'Privacy Policy | Dhan7 Guide',
  description:
    'Privacy policy for the Dhan7 (Dhan77) guide website, including information on analytics, cookies, and external links.',
  keywords: ['dhan7 privacy policy', 'dhan77 privacy'],
})

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col gap-8 px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-(--color-accent-gold)">Privacy Policy</h1>
      <p className="text-(--color-text-muted)">
        This website may use standard analytics and cookies to improve content quality and user
        experience.
      </p>
      <p className="text-(--color-text-muted)">
        External links are provided for informational convenience. Please review third-party privacy
        practices before sharing personal information.
      </p>
    </main>
  )
}
