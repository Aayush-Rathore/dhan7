import type { Metadata } from 'next'
import CTAButton from '../_components/CTAButton'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/dhan77-bonus',
  title: 'Dhan7 Bonus ₹777 Offer (Dhan77 App)',
  description:
    'Explore Dhan7 bonus offers including ₹777 welcome bonus, cashback, and referral rewards on the Dhan77 gaming app.',
  keywords: [
    'dhan7 bonus',
    'dhan77 bonus',
    'dhan7 referral bonus',
    'dhan7 welcome bonus',
    'dhan7 cashback',
  ],
})

const bonuses = [
  {
    title: '₹777 First Deposit Bonus',
    description:
      'Get an instant ₹777 bonus when you make your first deposit. Start playing with extra funds right away.',
  },
  {
    title: 'Daily Cashback Offer',
    description:
      'Earn cashback on your daily losses. The more you play, the more you get back — every single day.',
  },
  {
    title: 'Referral Rewards Program',
    description:
      'Invite friends and earn a commission on every deposit they make. Build your network and grow your income.',
  },
]

export default function BonusPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan7 Bonus (Dhan77)
        </h1>
        <p className="text-(--color-text-muted)">
          Claim exclusive bonuses and rewards when you join Dhan7.
        </p>
        <CTAButton label="Claim Your Bonus Now" />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Available Bonuses
        </h2>
        <ul className="flex flex-col gap-6">
          {bonuses.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-lg border border-(--color-accent-gold) p-5 flex flex-col gap-2"
            >
              <h3 className="text-lg font-bold text-(--color-accent-gold)">{title}</h3>
              <p className="text-(--color-text-muted)">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Next Step</h2>
        <p className="text-(--color-text-muted)">
          Install from the{' '}
          <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
            official Dhan7 APK page
          </a>{' '}
          and complete your{' '}
          <a href="/dhan77-login" className="text-(--color-accent-gold) hover:underline">
            Dhan7 account login
          </a>{' '}
          to activate offers.
        </p>
      </section>

      <InternalLinks currentPath="/dhan77-bonus" />
    </main>
  )
}
