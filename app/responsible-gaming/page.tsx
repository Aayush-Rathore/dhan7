import type { Metadata } from 'next'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/responsible-gaming',
  title: 'Responsible Gaming | Dhan7 Guide',
  description:
    'Responsible gaming guidance for Dhan7 (Dhan77) users, including budget control and safer play habits.',
  keywords: ['dhan7 responsible gaming', 'dhan77 safe play'],
})

const tips = [
  'Set a fixed budget before you start.',
  'Never chase losses.',
  'Take regular breaks.',
  'Use only money you can afford to lose.',
  'Stop immediately if play is causing stress.',
]

export default function ResponsibleGamingPage() {
  return (
    <main className="flex flex-col gap-8 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">Responsible Gaming</h1>
        <p className="text-(--color-text-muted)">
          Real-money gaming involves risk. Play responsibly and prioritize safety over profit.
        </p>
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Safety Tips</h2>
        <ul className="flex flex-col gap-2">
          {tips.map((tip) => (
            <li key={tip} className="text-(--color-text-muted)">
              - {tip}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
