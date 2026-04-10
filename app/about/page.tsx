import type { Metadata } from 'next'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/about',
  title: 'About Dhan7 App (Dhan77)',
  description:
    'Learn about Dhan7 (Dhan77), app features, support pages, and how to use APK download, login, and bonus guides responsibly.',
  keywords: ['about dhan7', 'about dhan77', 'dhan7 app information'],
})

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">About Dhan7 (Dhan77)</h1>
        <p className="text-(--color-text-muted)">
          This website provides informational guides about the Dhan7 app, including APK download,
          login, bonus, review, and FAQ pages.
        </p>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Core Guides</h2>
        <p className="text-(--color-text-muted)">
          Start from <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">Dhan7 APK Download</a>, then follow{' '}
          <a href="/dhan77-login" className="text-(--color-accent-gold) hover:underline">Dhan7 Login</a> and{' '}
          <a href="/dhan77-bonus" className="text-(--color-accent-gold) hover:underline">Bonus Offers</a>.
        </p>
      </section>
    </main>
  )
}
