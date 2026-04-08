import type { Metadata } from 'next'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/faq',
  title: 'Dhan7 FAQ (Dhan77 App Questions)',
  description:
    'Find answers to common Dhan7 app questions about safety, APK download, login, and withdrawals for Dhan77 users.',
  keywords: [
    'dhan7 faq',
    'dhan77 faq',
    'dhan7 app questions',
    'dhan7 apk help',
  ],
})

interface FAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is Dhan77 safe?',
    answer: 'Yes, but play responsibly.',
  },
  {
    question: 'How to download?',
    answer: 'Use the download button.',
  },
  {
    question: 'Minimum withdrawal?',
    answer: 'Depends on current rules.',
  },
]

export default function FAQPage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }).replace(/</g, '\\u003c')

  return (
    <>
      <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-(--color-accent-gold)">
            Dhan7 FAQ (Dhan77)
          </h1>
          <p className="text-(--color-text-muted)">
            Answers to the most common questions about Dhan7.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <div
              key={question}
              className="rounded-lg border border-(--color-accent-gold) p-5 flex flex-col gap-2"
            >
              <h2 className="text-lg font-bold text-(--color-accent-gold)">{question}</h2>
              <p className="text-(--color-text-muted)">{answer}</p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
          <h2 className="text-xl font-bold text-(--color-accent-gold)">Need a Quick Start?</h2>
          <p className="text-(--color-text-muted)">
            Use the{' '}
            <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
              Dhan7 APK download page
            </a>{' '}
            and then follow the{' '}
            <a href="/dhan77-login" className="text-(--color-accent-gold) hover:underline">
              Dhan7 login guide
            </a>{' '}
            for setup.
          </p>
        </section>

        <InternalLinks currentPath="/faq" />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  )
}
