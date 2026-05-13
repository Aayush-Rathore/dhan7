import type { Metadata } from 'next'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/dhan77-login',
  title: 'Dhan 7 Login — Sign In to Your Dhan77 Account | 2026 Guide',
  description:
    'Complete Dhan 7 login guide 2026. Sign in to your Dhan77 account, reset your password, and fix all common login errors. New users: register in under 2 minutes.',
  keywords: [
    'dhan 7 login',
    'dhan77 login',
    'dhan 7 app login',
    'dhan77 sign in',
    'dhan 7 register',
    'dhan77 account login',
    'dhan 7 login problem',
    'dhan77 forgot password',
  ],
})

const loginSteps = [
  'Open the Dhan 7 app on your Android device',
  'Tap "Login" on the welcome screen',
  'Enter your registered mobile number',
  'Enter the OTP sent to your mobile',
  'Tap "Verify" to access your Dhan77 account',
]

const registerSteps = [
  'Download and install the Dhan 7 APK from the official page',
  'Open the app and tap "Register"',
  'Enter your mobile number',
  'Verify your number with the OTP',
  'Create a secure password',
  'Complete your profile and claim your 777 welcome bonus',
]

const troubleshooting = [
  {
    issue: 'OTP Not Received',
    solution:
      'Check your network connection. Wait 2-3 minutes and request a new OTP. Ensure your mobile number is entered correctly. Check your SMS inbox and spam folder.',
  },
  {
    issue: 'Invalid OTP Error',
    solution:
      'Make sure you are entering the most recent OTP. OTPs expire after 5 minutes. Request a new code if needed.',
  },
  {
    issue: 'Forgot Password',
    solution:
      'On the Dhan 7 login screen, tap "Forgot Password". Enter your registered mobile number, verify with OTP, and create a new password.',
  },
  {
    issue: 'Account Locked',
    solution:
      'If you see "Account Locked", contact Dhan77 customer support through the in-app help section. This usually happens after multiple failed login attempts.',
  },
  {
    issue: 'App Crashes on Login',
    solution:
      'Clear the app cache (Settings → Apps → Dhan 7 → Clear Cache), restart your device, and try again. If the issue persists, reinstall the Dhan 7 APK.',
  },
]

const faqs = [
  {
    question: 'How do I log in to Dhan 7?',
    answer:
      'Open the Dhan 7 app, tap Login, enter your registered mobile number, enter the OTP sent to your phone, and tap Verify.',
  },
  {
    question: 'Can I register a new Dhan77 account?',
    answer:
      'Yes. Download the Dhan 7 APK, open the app, tap Register, enter your mobile number, verify with OTP, and complete your profile.',
  },
  {
    question: 'What if I forgot my Dhan 7 password?',
    answer:
      'Tap "Forgot Password" on the login screen, enter your mobile number, verify with OTP, and create a new password.',
  },
  {
    question: 'Why is my Dhan77 OTP not arriving?',
    answer:
      'Check your network connection and wait 2-3 minutes. Request a new OTP if needed. Ensure your mobile number is correct.',
  },
]

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan 7 Login — How to Sign In to Your Dhan77 Account
        </h1>
        <p className="text-(--color-text-muted) leading-relaxed">
          This guide covers everything you need to know about the <strong>Dhan 7 login</strong> process,
          including step-by-step instructions, troubleshooting common errors, and how to register
          a new account on the <strong>Dhan77 app</strong>.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Step-by-Step Dhan 7 Login Guide
        </h2>
        <ol className="flex flex-col gap-3">
          {loginSteps.map((step, i) => (
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
          How to Register a New Dhan 7 Account
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          If you don't have a <strong>Dhan77 account</strong> yet, follow these steps to register:
        </p>
        <ol className="flex flex-col gap-3">
          {registerSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-(--color-text-primary)">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-(--color-accent-gold) text-(--color-text-primary) flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <p className="text-(--color-text-muted) leading-relaxed mt-2">
          New users receive the 777 welcome bonus automatically after registration. Visit the{' '}
          <a href="/dhan77-bonus" className="text-(--color-accent-gold) hover:underline">
            Dhan 7 bonus page
          </a>{' '}
          for details.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan 7 Login Troubleshooting
        </h2>
        {troubleshooting.map(({ issue, solution }) => (
          <div key={issue} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">{issue}</h3>
            <p className="text-(--color-text-muted) leading-relaxed">{solution}</p>
          </div>
        ))}
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
          <li className="flex items-start gap-2 text-(--color-text-primary)">
            <span className="text-(--color-accent-gold) font-bold mt-0.5">⚠</span>
            Enable two-factor authentication if available in your account settings.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">New User?</h2>
        <p className="text-(--color-text-muted)">
          If you have not installed the app yet, start from{' '}
          <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
            Dhan 7 APK download
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
