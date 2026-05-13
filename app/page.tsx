import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from './_components/CTAButton'
import { siteUrl } from './_lib/siteUrl'
import { DOWNLOAD_LINK } from './_lib/constants'
import InternalLinks from './_components/InternalLinks'
import { buildPageMetadata } from './_lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/',
  title: 'Dhan 7 App — Download Dhan 7 APK | Dhan77',
  description:
    'Download the Dhan 7 app for Android. Get the official Dhan 7 APK, play real-money games, claim your 777 bonus, and enjoy instant withdrawals. Free Dhan 7 app download.',
  keywords: [
    'dhan 7',
    'dhan 7 app',
    'dhan 7 apk',
    'dhan 7 app download',
    'dhan77',
    'dhan77 apk download',
    'dhan 7 game',
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
  { href: '/blog', label: 'Dhan7 Long-Tail Blog' },
]

export default function HomePage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Dhan 7 App',
        alternateName: ['Dhan77', 'Dhan7', 'Dhan 7 Gaming App', 'Dhan77 App'],
        operatingSystem: 'Android',
        applicationCategory: 'GameApplication',
        downloadUrl: DOWNLOAD_LINK,
        url: siteUrl(),
        description:
          'Dhan 7 App is a real-money gaming platform for Android. Download the Dhan 7 APK to play crash, casino, slots, and fishing games with instant withdrawals via UPI.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dhan7.xyz',
          url: siteUrl(),
        },
      },
      {
        '@type': 'WebSite',
        url: siteUrl(),
        name: 'Dhan 7 App',
        description:
          'Official resource for Dhan 7 app download, Dhan 7 APK, Dhan77 gaming guides, and Dhan 7 bonus offers.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl()}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        name: 'Dhan7.xyz',
        url: siteUrl(),
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl()}/dhan77-logo.png`,
        },
        sameAs: [],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Dhan 7 app?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan 7 (also known as Dhan77) is a real-money gaming platform for Android. Players can play crash, casino, slots, and fishing games and withdraw winnings instantly via UPI or bank transfer.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I download the Dhan 7 APK?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Visit dhan7.xyz/dhan77-apk-download, tap the download button, enable Unknown Sources in your Android settings under Security, open the downloaded APK file, and install. The process takes under 5 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the Dhan 7 app free to download?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The Dhan 7 app download is completely free from the official dhan7.xyz website.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the Dhan77 welcome bonus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'New users who register on the Dhan 7 app receive a 777 welcome bonus. Visit the bonus page on dhan7.xyz for current offer terms and conditions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Dhan 7 withdrawal work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan77 supports instant withdrawals via UPI, bank transfer, and digital wallets. Complete your KYC, go to Wallet in the app, enter the withdrawal amount, and confirm. Most requests are processed within minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which Android version is needed for Dhan 7?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Dhan 7 app requires Android 5.0 (Lollipop) or above. It works on most Android smartphones released after 2017.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Dhan77 safe and legit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When downloaded from the official dhan7.xyz page, the Dhan 7 APK is safe. The platform uses encrypted connections to protect user data and financial information. Always download only from the official source.',
            },
          },
        ],
      },
    ],
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
          Dhan 7 App — Download Free APK for Android
        </h1>
        <p className="text-xl text-(--color-text-muted)">
          Play Games &amp; Earn Real Money Instantly
        </p>
        <CTAButton />
      </section>

      {/* What is Dhan77 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          How to Download the Dhan 7 App
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          Getting the <strong>Dhan 7 app download</strong> takes under five minutes.
          Visit our <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">Dhan 7 APK download page</a>, tap
          the download button, enable Unknown Sources in your Android settings, and
          install the file. The <strong>Dhan 7 APK</strong> is free and compatible
          with Android 5.0 and above. Once installed, register with your mobile number
          and claim your welcome bonus automatically.
        </p>
      </section>

      {/* What is Dhan 7 App */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          What is the Dhan 7 App?
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          The <strong>Dhan 7 app</strong> — also known as Dhan77 — is a real-money
          gaming platform designed for Android users in India. Players can participate
          in Crash, Casino, Slots, and Fishing games, and withdraw their winnings
          instantly via UPI or bank transfer. The <strong>Dhan 7 game</strong>{' '}
          platform is built around fast payouts, a clean interface, and genuine earning
          opportunities for everyday players.
        </p>
        <p className="text-(--color-text-muted) leading-relaxed">
          Whether you call it <strong>Dhan 7</strong>, <strong>Dhan77</strong>, or
          the Dhan77 gaming app, the platform is the same — a secure, lightweight
          Android application that keeps your wallet, games, and promotions all
          accessible in one place.
        </p>
      </section>

      {/* Why Choose Dhan 7 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Why Choose the Dhan 7 Gaming App?
        </h2>
        <ul className="flex flex-col gap-3 text-(--color-text-muted)">
          <li className="flex items-start gap-2">
            <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
            <span><strong>Instant withdrawal via UPI:</strong> The <strong>Dhan 7 app</strong>{' '}
            processes most payouts in minutes — no long waiting periods.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
            <span><strong>777 Welcome Bonus:</strong> Every new player who completes the
            Dhan 7 app download and registers receives the welcome bonus automatically.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
            <span><strong>Multiple real-money games:</strong> Crash, Casino, Slots, and
            Fishing — all inside one <strong>Dhan 7 APK</strong>. New modes are
            added regularly.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
            <span><strong>Refer and earn:</strong> Share your Dhan 7 referral code with
            friends and earn a percentage of their activity as ongoing passive income.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
            <span><strong>Safe and official APK:</strong> Download only from dhan7.xyz.
            The official <strong>Dhan 7 APK</strong> is scanned, secure, and does
            not require unnecessary device permissions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
            <span><strong>Lightweight app:</strong> The <strong>Dhan77 app</strong> is
            optimised for mid-range Android devices and runs smoothly even on
            older smartphones.</span>
          </li>
        </ul>
      </section>

      {/* Old What is Dhan77 section - keeping for continuity */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Dhan 7 App Features
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

      {/* FAQ Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">
              What is the Dhan 7 app?
            </h3>
            <p className="text-(--color-text-muted)">
              Dhan 7 (Dhan77) is a real-money gaming platform for Android. Players can
              play crash, casino, slots, and fishing games and withdraw winnings via UPI
              or bank transfer. Download the <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">Dhan 7 APK</a>{' '}
              from this official page.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">
              How do I complete the Dhan 7 APK download?
            </h3>
            <p className="text-(--color-text-muted)">
              Go to the <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">Dhan 7 download page</a>, tap
              Download, enable Unknown Sources in Android settings, and install the file.
              The full process takes under 5 minutes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">
              Is the Dhan 7 app download free?
            </h3>
            <p className="text-(--color-text-muted)">
              Yes. The <strong>Dhan 7 app download</strong> from dhan7.xyz is completely
              free. No payment required to install or register.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">
              How does Dhan 7 withdrawal work?
            </h3>
            <p className="text-(--color-text-muted)">
              Open the Dhan 7 app → go to Wallet → tap Withdraw → select UPI or bank
              transfer → enter amount → confirm. Complete KYC first. Most Dhan77
              withdrawals are instant.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-(--color-accent-gold)">
              Is Dhan77 safe?
            </h3>
            <p className="text-(--color-text-muted)">
              Yes. The official <strong>Dhan 7 APK</strong> from dhan7.xyz is safe.
              Download only from this page — avoid third-party mirrors.
            </p>
          </div>
        </div>
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
