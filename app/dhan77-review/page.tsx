import type { Metadata } from 'next'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/dhan77-review',
  title: 'Dhan7 App Review (Dhan77) – Real or Fake?',
  description:
    'Read this Dhan7 app review covering withdrawals, gameplay options, potential risks, and who should use the Dhan77 APK.',
  keywords: [
    'dhan7 review',
    'dhan77 review',
    'dhan7 app review',
    'dhan7 real or fake',
  ],
})

const pros = ['Easy earning opportunities', 'Fast withdrawal process', 'Multiple game options']
const cons = ['Risk involved — play responsibly', 'Not available on Google Play Store']

export default function ReviewPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan7 Review (Dhan77)
        </h1>
        <p className="text-(--color-text-muted)">
          An honest look at the Dhan77 gaming app — what works, what to watch out for, and our verdict.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">Pros</h2>
        <ul className="flex flex-col gap-2">
          {pros.map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold mt-0.5">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">Cons</h2>
        <ul className="flex flex-col gap-2">
          {cons.map((con) => (
            <li key={con} className="flex items-start gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-red) font-bold mt-0.5">✗</span>
              {con}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Verdict</h2>
        <p className="text-(--color-text-muted)">
          Dhan77 offers a fun and potentially rewarding gaming experience. However, real-money gaming
          carries inherent risk. Play responsibly.
        </p>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Try It Safely</h2>
        <p className="text-(--color-text-muted)">
          Start with the{' '}
          <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
            Dhan7 APK download guide
          </a>{' '}
          and check the{' '}
          <a href="/faq" className="text-(--color-accent-gold) hover:underline">
            Dhan7 FAQ
          </a>{' '}
          before playing.
        </p>
      </section>

      <InternalLinks currentPath="/dhan77-review" />
    </main>
  )
}
