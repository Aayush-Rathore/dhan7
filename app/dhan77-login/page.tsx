import type { Metadata } from 'next'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/dhan77-login',
  title: 'Dhan7 Login Guide (Dhan77 App)',
  description:
    'Follow the Dhan7 login process with OTP, mobile number verification, and account security tips for the Dhan77 app.',
  keywords: [
    'dhan7 login',
    'dhan77 login',
    'dhan7 app login',
    'dhan77 otp login',
  ],
})

const steps = [
  'Open the Dhan77 app on your device',
  'Enter your registered mobile number',
  'Enter the OTP sent to your mobile',
  'Tap Login to access your account',
]

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan7 Login (Dhan77)
        </h1>
        <p className="text-(--color-text-muted)">
          Follow these simple steps to log in to your Dhan7 account.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Login Steps
        </h2>
        <ol className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-(--color-text-primary)">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-(--color-accent-red) text-(--color-text-primary) flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Security Tips
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2 text-(--color-text-primary)">
            <span className="text-(--color-accent-gold) font-bold mt-0.5">⚠</span>
            Do not share your OTP with anyone — Dhan77 will never ask for it.
          </li>
          <li className="flex items-start gap-2 text-(--color-text-primary)">
            <span className="text-(--color-accent-gold) font-bold mt-0.5">⚠</span>
            Always use a secure, trusted device to log in.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">New User?</h2>
        <p className="text-(--color-text-muted)">
          If you have not installed the app yet, start from{' '}
          <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
            Dhan7 APK download
          </a>{' '}
          and then check{' '}
          <a href="/faq" className="text-(--color-accent-gold) hover:underline">
            common Dhan7 questions
          </a>{' '}
          before your first deposit.
        </p>
      </section>

      <InternalLinks currentPath="/dhan77-login" />
    </main>
  )
}
