import type { Metadata } from 'next'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/dhan77-review',
  title: 'Dhan77 Review 2026 — Is Dhan 7 App Safe and Legit?',
  description:
    'Honest Dhan 7 review 2026. Is Dhan77 safe and legit? We cover games, withdrawal speed, bonuses, and user experience. Read before you download the Dhan 7 app.',
  keywords: [
    'dhan 7 review',
    'dhan77 review',
    'is dhan77 legit',
    'dhan 7 real or fake',
    'is dhan77 safe',
    'dhan 7 app review 2026',
    'dhan77 honest review',
  ],
})

const games = [
  {
    name: 'Crash',
    description:
      'A multiplier-based game where you cash out before the crash. High risk, high reward gameplay.',
  },
  {
    name: 'Casino',
    description:
      'Classic casino games including roulette, blackjack, and baccarat with real-money stakes.',
  },
  {
    name: 'Slots',
    description:
      'Colorful slot machines with various themes and jackpot opportunities.',
  },
  {
    name: 'Fishing',
    description:
      'Arcade-style fishing game where you shoot fish to earn points and cash.',
  },
]

const pros = [
  'Instant UPI withdrawals (most processed within minutes)',
  '777 welcome bonus for new users',
  'Multiple game types in one app',
  'Lightweight APK that works on older Android devices',
  'Referral program for passive income',
  'Clean, easy-to-navigate interface',
]

const cons = [
  'Real-money gaming involves financial risk',
  'Not available on Google Play Store (APK install required)',
  'Limited customer support hours',
  'Wagering requirements apply to bonuses',
]

const faqs = [
  {
    question: 'Is Dhan77 safe to use?',
    answer:
      'When downloaded from the official dhan7.xyz page, the Dhan 7 APK is safe. The platform uses encrypted connections to protect user data. Always download only from the official source.',
  },
  {
    question: 'Is Dhan 7 real or fake?',
    answer:
      'Dhan 7 is a real gaming platform. However, like all real-money gaming apps, it involves financial risk. Play responsibly and only with money you can afford to lose.',
  },
  {
    question: 'How fast are Dhan77 withdrawals?',
    answer:
      'Most Dhan77 withdrawals via UPI are processed within minutes. Bank transfers may take up to 24 hours depending on your bank.',
  },
  {
    question: 'What games are available on Dhan 7?',
    answer:
      'The Dhan 7 app offers Crash, Casino, Slots, and Fishing games. All games support real-money play with instant payouts.',
  },
  {
    question: 'Do I need to verify my account?',
    answer:
      'Yes. KYC (Know Your Customer) verification is required to process withdrawals on the Dhan 7 app. Complete it in the Profile section before requesting a payout.',
  },
]

export default function ReviewPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan77 Review 2026 — Is the Dhan 7 App Safe and Legit?
        </h1>
        <p className="text-(--color-text-muted) leading-relaxed">
          This is an honest <strong>Dhan 7 review</strong> covering games, withdrawal
          speed, bonuses, safety, and overall user experience. Read this before you
          download the <strong>Dhan 7 app</strong>.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          What is Dhan 7?
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          The <strong>Dhan 7 app</strong> (also known as Dhan77) is a real-money gaming
          platform for Android users in India. It offers Crash, Casino, Slots, and Fishing
          games with instant UPI withdrawals. The platform is designed for players who want
          fast payouts and a variety of game types in one lightweight app.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan 7 Games — What's Available?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {games.map(({ name, description }) => (
            <div
              key={name}
              className="rounded-lg border border-(--color-accent-gold) p-4 flex flex-col gap-2"
            >
              <h3 className="text-lg font-bold text-(--color-accent-gold)">{name}</h3>
              <p className="text-(--color-text-muted) text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan77 Withdrawal Speed and Reliability
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          One of the strongest features of <strong>Dhan77</strong> is its withdrawal speed.
          Most UPI withdrawals are processed within minutes. Bank transfers may take up to
          24 hours depending on your bank's processing time. You must complete KYC verification
          before your first withdrawal.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan 7 Bonus and Promotions
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          New users receive a 777 welcome bonus automatically after registration. The app
          also offers daily bonuses and a referral program where you can earn commissions
          on friends' activity. Visit the{' '}
          <a href="/dhan77-bonus" className="text-(--color-accent-gold) hover:underline">
            Dhan 7 bonus page
          </a>{' '}
          for full details.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Is Dhan77 Safe?
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          When downloaded from the official dhan7.xyz page, the <strong>Dhan 7 APK</strong> is
          safe. The platform uses encrypted connections to protect user data and financial
          information. However, like all real-money gaming platforms, there is inherent financial
          risk. Always play responsibly and only with money you can afford to lose.
        </p>
        <p className="text-(--color-text-muted) leading-relaxed">
          <strong>Important:</strong> Never download Dhan77 from third-party APK mirror sites.
          Only use the official{' '}
          <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
            Dhan 7 APK download page
          </a>
          .
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan 7 App Pros and Cons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-(--color-accent-gold)">Pros</h3>
            <ul className="flex flex-col gap-2">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-(--color-text-primary)">
                  <span className="text-(--color-accent-gold) font-bold mt-0.5">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-(--color-accent-red)">Cons</h3>
            <ul className="flex flex-col gap-2">
              {cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-(--color-text-primary)">
                  <span className="text-(--color-accent-red) font-bold mt-0.5">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">Our Verdict</h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          <strong>Dhan77</strong> is a legitimate real-money gaming platform with fast withdrawals,
          multiple game types, and a user-friendly interface. The 777 welcome bonus and referral
          program add value for new users. However, like all real-money gaming, it involves financial
          risk. We recommend starting with small amounts, setting strict spending limits, and playing
          responsibly.
        </p>
        <p className="text-(--color-text-muted) leading-relaxed">
          <strong>Rating:</strong> 4/5 — Good for players who want fast payouts and variety, but
          always play within your means.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Frequently Asked Questions
        </h2>
        {faqs.map(({ question, answer }) => (
          <div key={question} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">{question}</h3>
            <p className="text-(--color-text-muted) leading-relaxed">{answer}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Try It Safely</h2>
        <p className="text-(--color-text-muted)">
          Start with the{' '}
          <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
            Dhan 7 APK download guide
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
