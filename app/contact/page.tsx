import type { Metadata } from 'next'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/contact',
  title: 'Contact Dhan7 Guide Team',
  description:
    'Contact page for Dhan7 (Dhan77) guide website. Reach out for corrections, feedback, and content requests.',
  keywords: ['dhan7 contact', 'dhan77 contact', 'dhan7 support page'],
})

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-8 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">Contact</h1>
        <p className="text-(--color-text-muted)">
          For website feedback and guide updates, please reach out via the official channels listed
          on this domain.
        </p>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Helpful Pages</h2>
        <p className="text-(--color-text-muted)">
          See <a href="/faq" className="text-(--color-accent-gold) hover:underline">FAQ</a> for common answers,
          or read the <a href="/dhan77-review" className="text-(--color-accent-gold) hover:underline">Dhan7 review</a>{' '}
          before using the app.
        </p>
      </section>
    </main>
  )
}
