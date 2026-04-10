import type { Metadata } from 'next'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/terms-and-conditions',
  title: 'Terms and Conditions | Dhan7 Guide',
  description:
    'Terms and conditions for using this Dhan7 (Dhan77) informational website and its app guide content.',
  keywords: ['dhan7 terms', 'dhan77 terms and conditions'],
})

export default function TermsAndConditionsPage() {
  return (
    <main className="flex flex-col gap-8 px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-(--color-accent-gold)">Terms and Conditions</h1>
      <p className="text-(--color-text-muted)">
        This site is intended for informational purposes only. Users are responsible for their own
        decisions while using third-party apps and services.
      </p>
      <p className="text-(--color-text-muted)">
        By using this website, you agree to comply with local laws and platform rules.
      </p>
    </main>
  )
}
