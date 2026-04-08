import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from './_components/CTAButton'
import { siteUrl } from './_lib/siteUrl'
import { DOWNLOAD_LINK } from './_lib/constants'
import InternalLinks from './_components/InternalLinks'
import { buildPageMetadata } from './_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/',
  title: 'Dhan7 App & Dhan77 APK Download | Dhan7 Gaming App',
  description:
    'Download Dhan7 app (Dhan77 APK) and explore crash, casino, slots, and fishing games. Claim bonus offers, learn login steps, and start responsibly.',
  keywords: [
    'dhan7',
    'dhan7 app',
    'dhan7 apk',
    'dhan7 apk download',
    'dhan77',
    'dhan77 apk download',
    'dhan7 gaming app',
  ],
})

const screenshots = [
  { src: '/dhan7-1.jpeg', alt: 'Dhan7 app screenshot - home screen' },
  { src: '/dhan7-2.jpeg', alt: 'Dhan7 gaming interface screenshot' },
  { src: '/dhan7-3.jpeg', alt: 'Dhan77 APK bonus screen screenshot' },
  { src: '/dhan7-4.jpeg', alt: 'Dhan7 real money game lobby screenshot' },
  { src: '/dhan7-5.jpeg', alt: 'Dhan7 withdrawal section screenshot' },
  { src: '/dhan7-6.jpeg', alt: 'Dhan7 app gameplay screenshot' },
  { src: '/dhan7-7.jpeg', alt: 'Dhan7 account and wallet screenshot' },
]

const features = [
  'Instant Withdrawal',
  '₹777 Bonus',
  'Referral Income',
  'Fast Gameplay',
  'Secure System',
]

const games = ['Crash', 'Casino', 'Slots', 'Fishing']

const internalLinks = [
  { href: '/dhan77-apk-download', label: 'Dhan7 APK Download Page' },
  { href: '/dhan77-login', label: 'Dhan7 Login Steps' },
  { href: '/dhan77-bonus', label: 'Dhan7 Bonus Offers' },
  { href: '/dhan77-review', label: 'Dhan7 App Review' },
  { href: '/faq', label: 'Dhan7 FAQ' },
]

export default function HomePage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Dhan77',
    alternateName: ['Dhan7', 'Dhan7 App', 'Dhan7 APK'],
    operatingSystem: 'Android',
    applicationCategory: 'GameApplication',
    description:
      'Dhan7 (Dhan77) is an Android real-money gaming app with crash, casino, slots, and fishing games.',
    url: siteUrl(),
    downloadUrl: DOWNLOAD_LINK,
  }).replace(/</g, '\\u003c')

  return (
    <>
    <main className="flex flex-col gap-16 px-4 py-12 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <Image
          src="/dhan77-logo.png"
          alt="Dhan77 logo"
          width={120}
          height={120}
          priority
        />
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan7 Gaming App (Dhan77)
        </h1>
        <p className="text-xl text-(--color-text-muted)">
          Play Games &amp; Earn Real Money Instantly
        </p>
        <CTAButton />
      </section>

      {/* What is Dhan77 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          What is Dhan77?
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          Dhan77, also searched as the Dhan7 app, is a real-money gaming platform
          where you can play and win cash
          instantly. The platform offers a wide variety of games including
          casino, crash, slots, and fishing — all designed for fast, exciting
          gameplay with real rewards. Register today, claim your ₹777 welcome
          bonus, and start earning.
        </p>
      </section>

      {/* Screenshots */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          App Screenshots
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {screenshots.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={200}
              height={360}
              className="rounded-lg w-full h-auto"
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Key Features
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-(--color-text-primary)"
            >
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Games */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Games Available
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {games.map((game) => (
            <li
              key={game}
              className="rounded-lg border border-(--color-accent-gold) px-4 py-3 text-center font-semibold text-(--color-accent-gold)"
            >
              {game}
            </li>
          ))}
        </ul>
      </section>

      {/* Internal Links */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Explore More
        </h2>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-3">
          {internalLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="inline-block rounded-lg border border-(--color-accent-red) px-5 py-2 text-(--color-accent-red) hover:bg-(--color-accent-red) hover:text-(--color-text-primary) transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <InternalLinks currentPath="/" title="Explore All Dhan7 Pages" />
    </main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
    </>
  )
}
