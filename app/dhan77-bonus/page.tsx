import type { Metadata } from 'next'
import CTAButton from '../_components/CTAButton'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/dhan77-bonus',
  title: 'Dhan 7 Bonus — Claim 777 Welcome Bonus | Dhan77 Refer & Earn',
  description:
    'Claim your Dhan 7 bonus today. Get the 777 welcome bonus, daily rewards, and earn with the Dhan77 referral program. How to activate and withdraw your Dhan 7 bonus.',
  keywords: [
    'dhan 7 bonus',
    'dhan77 bonus',
    'dhan 7 refer code',
    'dhan77 refer and earn',
    'dhan 7 referral code 2026',
    'dhan77 daily bonus',
    'dhan 7 welcome bonus',
    'dhan77 777 bonus',
  ],
})

const bonuses = [
  {
    title: '777 Welcome Bonus',
    description:
      'New users who register on the Dhan 7 app receive a 777 welcome bonus automatically. This bonus is credited to your account immediately after completing registration and mobile verification.',
    howToClaim: [
      'Download and install the Dhan 7 APK',
      'Register with your mobile number',
      'Verify your account via OTP',
      'The 777 bonus is credited automatically',
    ],
  },
  {
    title: 'Dhan77 Refer and Earn',
    description:
      'Share your unique Dhan 7 referral code with friends and earn a commission on their deposits and gameplay. The more friends you refer, the more you earn.',
    howToClaim: [
      'Open the Dhan 7 app and go to "Refer & Earn"',
      'Copy your unique referral code',
      'Share it with friends via WhatsApp, SMS, or social media',
      'Earn rewards when they register and play',
    ],
  },
  {
    title: 'Daily Bonus',
    description:
      'Log in to the Dhan77 app every day to claim your daily bonus. Consistent players receive increasing rewards for consecutive daily logins.',
    howToClaim: [
      'Open the Dhan 7 app',
      'Tap on the "Daily Bonus" icon',
      'Claim your reward',
      'Come back tomorrow for a bigger bonus',
    ],
  },
]

const withdrawalSteps = [
  'Ensure you have met the minimum bonus wagering requirements',
  'Go to Wallet in the Dhan 7 app',
  'Tap "Withdraw"',
  'Select your payment method (UPI or bank transfer)',
  'Enter the withdrawal amount',
  'Confirm and wait for processing (usually instant)',
]

const faqs = [
  {
    question: 'How do I claim the Dhan 7 welcome bonus?',
    answer:
      'The 777 welcome bonus is credited automatically when you register on the Dhan 7 app and verify your mobile number. No bonus code is required.',
  },
  {
    question: 'What is the Dhan77 referral program?',
    answer:
      'The Dhan77 referral program lets you earn commissions when friends register using your referral code and play games. Find your code in the "Refer & Earn" section of the app.',
  },
  {
    question: 'Can I withdraw my Dhan 7 bonus?',
    answer:
      'Yes, but you must meet the wagering requirements first. Check the bonus terms in the app for specific conditions.',
  },
  {
    question: 'How do I claim the daily bonus?',
    answer:
      'Open the Dhan 7 app, tap the "Daily Bonus" icon, and claim your reward. Log in every day to increase your bonus amount.',
  },
]

export default function BonusPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan 7 Bonus — Claim Your 777 Welcome Offer
        </h1>
        <p className="text-(--color-text-muted) max-w-2xl">
          Discover all the <strong>Dhan 7 bonus</strong> offers available on the{' '}
          <strong>Dhan77 app</strong>. From the 777 welcome bonus to daily rewards
          and referral earnings, this guide covers everything you need to know.
        </p>
        <CTAButton label="Claim Your Bonus Now" />
      </section>

      {bonuses.map(({ title, description, howToClaim }) => (
        <section key={title} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">{title}</h2>
          <p className="text-(--color-text-muted) leading-relaxed">{description}</p>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">
              How to Claim:
            </h3>
            <ol className="flex flex-col gap-2">
              {howToClaim.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-(--color-text-primary)">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-(--color-accent-gold) text-(--color-text-primary) flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          How to Withdraw Your Dhan 7 Bonus
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          Once you have met the wagering requirements, you can withdraw your{' '}
          <strong>Dhan77 bonus</strong> winnings:
        </p>
        <ol className="flex flex-col gap-3">
          {withdrawalSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-(--color-text-primary)">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-(--color-accent-red) text-(--color-text-primary) flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
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
