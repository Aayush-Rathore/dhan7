import type { Metadata } from 'next'
import CTAButton from '../_components/CTAButton'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/dhan77-apk-download',
  title: 'Dhan 7 APK Download — Free Install Guide for Android 2026',
  description:
    'Download the Dhan 7 APK for Android in minutes. Step-by-step install guide, system requirements, troubleshooting, and FAQs. Official Dhan77 app — safe and free.',
  keywords: [
    'dhan 7 apk',
    'dhan 7 app download',
    'dhan77 apk download',
    'dhan 7 apk download',
    'dhan 7 download',
    'dhan77 download',
    'dhan 7 apk download free',
    'dhan77 apk latest version',
  ],
})

const steps = [
  {
    title: 'Step 1 — Tap the Official Download Button',
    description:
      'Click the "Download Dhan 7 APK" button on this page. The Dhan 7 APK file saves directly to your Android device\'s Downloads folder. Always use this official page — third-party APK mirrors may serve modified or outdated files.',
  },
  {
    title: 'Step 2 — Enable Unknown Sources on Android',
    description:
      'The Dhan 7 app is not available on the Google Play Store, so Android requires you to allow installation from outside the store.',
    details: [
      'Android 7 and below: Go to Settings → Security → Unknown Sources → toggle ON.',
      'Android 8 and above: Go to Settings → Apps → Special App Access → Install Unknown Apps → select your browser (e.g. Chrome) → Allow.',
    ],
    note: 'This is a standard one-time step required for all APK installs.',
  },
  {
    title: 'Step 3 — Open the Dhan 7 APK File',
    description:
      'Open your Downloads folder (or tap the completed download notification), find the Dhan 7 APK file, and tap it to begin installation. Your device shows a permissions screen — review and proceed.',
  },
  {
    title: 'Step 4 — Install the App',
    description:
      'Tap Install and wait. Installation takes under 60 seconds on most devices. The Dhan77 icon appears on your home screen when finished.',
  },
  {
    title: 'Step 5 — Register and Claim Your Bonus',
    description:
      'Open the Dhan 7 app, tap Register, enter your mobile number, and verify via OTP. New users receive the 777 welcome bonus automatically after completing registration. Your wallet, games, and withdrawal options are ready immediately.',
  },
]

const apkDetails = [
  { label: 'App Name', value: 'Dhan 7 App (Dhan77)' },
  { label: 'Platform', value: 'Android' },
  { label: 'Minimum Android', value: '5.0 (Lollipop) and above' },
  { label: 'File Type', value: 'APK' },
  { label: 'Category', value: 'Real-money gaming' },
  { label: 'Welcome Bonus', value: '777 bonus on registration' },
  { label: 'Price', value: 'Free' },
  { label: 'Last Updated', value: '2026' },
]

const troubleshooting = [
  {
    issue: 'Installation Blocked',
    solution:
      'If Android blocks the install, Unknown Sources may not be enabled for the correct app. On Android 8+, each browser app needs to be enabled separately. Go to Settings → Apps → Special App Access → Install Unknown Apps → select your browser → Allow.',
  },
  {
    issue: 'Parse Error During Installation',
    solution:
      'A parse error means the APK download was interrupted and the file is incomplete. Delete the downloaded file, clear your browser cache (Settings → Privacy → Clear Browsing Data), return to this page, and download the Dhan 7 APK again.',
  },
  {
    issue: 'App Not Opening After Install',
    solution:
      'Verify your Android version is 5.0 or above (Settings → About Phone → Android Version). If compatible, restart your device and try opening the Dhan 7 app again.',
  },
  {
    issue: 'Not Enough Storage Space',
    solution:
      'Free at least 100MB of storage before starting the download. Go to Settings → Storage to check available space and delete unused apps or files.',
  },
  {
    issue: 'Download Not Starting',
    solution:
      'Disable any VPN or ad-blocker browser extension and reload this page. If using Chrome, try switching to another browser like Firefox or Samsung Internet.',
  },
  {
    issue: 'App Crashes After Install',
    solution:
      'Uninstall the Dhan77 app, restart your device, and reinstall by downloading the APK fresh from this page. Avoid installing over a corrupted previous version.',
  },
]

const faqs = [
  {
    question: 'Is the Dhan 7 APK download free?',
    answer:
      'Yes. The Dhan 7 app download from this official dhan7.xyz page is completely free. No subscription, no purchase, and no hidden fee to download or install.',
  },
  {
    question: 'Is the Dhan 7 APK safe to install?',
    answer:
      'Yes, when downloaded from this official page. The Dhan 7 APK from dhan7.xyz is the original file — not modified or tampered. Never download Dhan77 from third-party APK mirror sites as those files may contain modified code.',
  },
  {
    question: 'Does Dhan 7 work on iOS (iPhone)?',
    answer:
      'The Dhan 7 app is currently available for Android only. There is no iOS version of Dhan77 at this time.',
  },
  {
    question: 'Which Android version is needed for Dhan 7?',
    answer:
      'The Dhan 7 APK requires Android 5.0 (Lollipop) or above. It runs smoothly on most Android smartphones released after 2017, including budget and mid-range devices.',
  },
  {
    question: 'How do I update the Dhan 7 app?',
    answer:
      'Return to this page whenever a new version is available. Download the latest Dhan 7 APK and install it over your existing app. Your account, wallet balance, and game history are all preserved during updates.',
  },
  {
    question: 'Can I install Dhan 7 on multiple devices?',
    answer:
      'You can install the Dhan 7 app on multiple Android devices, but only one account is allowed per user. Log in with your existing credentials on any new device.',
  },
  {
    question: 'What is the Dhan 7 APK file size?',
    answer:
      'The Dhan 7 APK file is lightweight and designed to install quickly on most Android devices. Ensure at least 100MB of free storage space before downloading.',
  },
]

export default function DownloadPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-4xl mx-auto">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan 7 APK Download — Free Install Guide for Android (2026)
        </h1>
        <p className="text-(--color-text-muted) max-w-2xl">
          This is the official guide for the <strong>Dhan 7 app download</strong>.
          Follow the steps below to install the <strong>Dhan 7 APK</strong> on any
          Android device in under five minutes. All downloads from this page are
          from the official source — safe, free, and up to date.
        </p>
        <CTAButton />
      </section>

      {/* APK Details Table */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan 7 APK Details
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-(--color-accent-gold)">
            <tbody>
              {apkDetails.map(({ label, value }) => (
                <tr key={label} className="border-b border-(--color-accent-gold)">
                  <td className="px-4 py-3 font-semibold text-(--color-accent-gold)">
                    {label}
                  </td>
                  <td className="px-4 py-3 text-(--color-text-muted)">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Step by Step Installation */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          How to Download and Install the Dhan 7 App — Step by Step
        </h2>
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-(--color-accent-gold)">
              {step.title}
            </h3>
            <p className="text-(--color-text-muted) leading-relaxed">
              {step.description}
            </p>
            {step.details && (
              <ul className="flex flex-col gap-2 ml-4">
                {step.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2 text-(--color-text-muted)">
                    <span className="text-(--color-accent-gold) mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
            {step.note && (
              <p className="text-(--color-text-muted) italic text-sm">{step.note}</p>
            )}
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <CTAButton />
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan 7 APK Download Troubleshooting
        </h2>
        {troubleshooting.map(({ issue, solution }) => (
          <div key={issue} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">
              {issue}
            </h3>
            <p className="text-(--color-text-muted) leading-relaxed">{solution}</p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan 7 APK Download — Frequently Asked Questions
        </h2>
        {faqs.map(({ question, answer }) => (
          <div key={question} className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">
              {question}
            </h3>
            <p className="text-(--color-text-muted) leading-relaxed">{answer}</p>
          </div>
        ))}
      </section>

      {/* Related Links */}
      <nav aria-label="Related pages" className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Related Pages
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li>
            <a
              href="/dhan77-login"
              className="block rounded-lg border border-(--color-accent-gold) px-5 py-3 text-(--color-accent-gold) hover:bg-(--color-accent-gold) hover:text-(--color-text-primary) transition-colors"
            >
              Dhan 7 Login Guide
            </a>
          </li>
          <li>
            <a
              href="/dhan77-bonus"
              className="block rounded-lg border border-(--color-accent-gold) px-5 py-3 text-(--color-accent-gold) hover:bg-(--color-accent-gold) hover:text-(--color-text-primary) transition-colors"
            >
              Dhan 7 Bonus and Referral
            </a>
          </li>
          <li>
            <a
              href="/dhan77-review"
              className="block rounded-lg border border-(--color-accent-gold) px-5 py-3 text-(--color-accent-gold) hover:bg-(--color-accent-gold) hover:text-(--color-text-primary) transition-colors"
            >
              Dhan 7 App Review
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="block rounded-lg border border-(--color-accent-gold) px-5 py-3 text-(--color-accent-gold) hover:bg-(--color-accent-gold) hover:text-(--color-text-primary) transition-colors"
            >
              All FAQs
            </a>
          </li>
        </ul>
      </nav>

      <InternalLinks currentPath="/dhan77-apk-download" />
    </main>
  )
}
