import type { Metadata } from 'next'
import { buildPageMetadata } from '../_lib/seo'
import InternalLinks from '../_components/InternalLinks'

export const metadata: Metadata = buildPageMetadata({
  path: '/about',
  title: 'About Dhan7.xyz — Official Dhan 7 App Resource',
  description:
    'About Dhan7.xyz — your official guide to the Dhan 7 app, APK download, gaming tips, and responsible play. Learn who we are and how we create our content.',
  keywords: [
    'about dhan7',
    'dhan7.xyz about',
    'dhan 7 app information',
    'dhan77 official resource',
  ],
})

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          About Dhan7.xyz
        </h1>
        <p className="text-(--color-text-muted) leading-relaxed">
          Dhan7.xyz is an independent resource site dedicated to helping players
          understand, download, and make the most of the <strong>Dhan 7 app</strong>.
          We publish guides, reviews, and tutorials to help users complete the
          <strong> Dhan 7 APK download</strong> safely and use the platform effectively.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Our Editorial Standards
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          All content on Dhan7.xyz is written and reviewed by named authors with
          experience in mobile gaming and app reviews. We do not publish paid
          promotional content without clear disclosure. Our guides are based on
          direct testing of the Dhan 7 app.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Responsible Gaming
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          The Dhan 7 app involves real-money gaming. We strongly encourage all
          players to set spending limits, play responsibly, and seek help if
          gaming affects daily life. For more information, visit our{' '}
          <a
            href="/responsible-gaming"
            className="text-(--color-accent-gold) hover:underline"
          >
            Responsible Gaming page
          </a>
          .
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">Contact</h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          For enquiries, corrections, or takedown requests, visit our{' '}
          <a href="/contact" className="text-(--color-accent-gold) hover:underline">
            Contact page
          </a>
          .
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Disclaimer
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          Dhan7.xyz is an informational resource and is not the official operator
          of the Dhan 7 / Dhan77 platform. For official support, use the in-app
          customer service. See our full{' '}
          <a
            href="/terms-and-conditions"
            className="text-(--color-accent-gold) hover:underline"
          >
            Terms and Conditions
          </a>{' '}
          for more details.
        </p>
      </section>

      <InternalLinks currentPath="/about" />
    </main>
  )
}
