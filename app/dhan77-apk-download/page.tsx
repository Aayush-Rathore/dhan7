import type { Metadata } from 'next'
import CTAButton from '../_components/CTAButton'
import InternalLinks from '../_components/InternalLinks'
import { buildPageMetadata } from '../_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/dhan77-apk-download',
  title: 'Dhan7 APK Download (Dhan77 Latest Version)',
  description:
    'Download Dhan7 APK (Dhan77 latest version), follow secure install steps, and start using the app with bonus and login guides.',
  keywords: [
    'dhan7 apk',
    'dhan7 apk download',
    'dhan77 apk download',
    'download dhan7 app',
    'dhan7 latest version',
  ],
})

const steps = [
  'Click the download button below',
  'Allow installation from unknown sources in your device settings',
  'Install the downloaded APK file',
  'Open the app and start playing',
]

const features = ['Secure APK', 'Fast install', 'No Play Store required']

export default function DownloadPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan7 APK Download (Dhan77)
        </h1>
        <p className="text-(--color-text-muted)">
          Download the latest version of Dhan7 APK and start earning real money today.
        </p>
        <CTAButton />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          How to Install
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
        <div className="mt-4 flex justify-center">
          <CTAButton />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Why Download Dhan77?
        </h2>
        <ul className="flex flex-col gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Before You Install</h2>
        <p className="text-(--color-text-muted)">
          Review the{' '}
          <a href="/dhan77-login" className="text-(--color-accent-gold) hover:underline">
            Dhan7 login steps
          </a>{' '}
          and{' '}
          <a href="/dhan77-bonus" className="text-(--color-accent-gold) hover:underline">
            Dhan7 bonus offers
          </a>{' '}
          so you can start quickly after installing.
        </p>
      </section>

      <InternalLinks currentPath="/dhan77-apk-download" />
    </main>
  )
}
