import type { Metadata } from 'next'
import './globals.css'
import { siteUrl } from './_lib/siteUrl'
import { DEFAULT_KEYWORDS } from './_lib/constants'
import Header from './_components/Header'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: 'Dhan7 App Download (Dhan77 APK Latest Version) | Dhan7 Gaming App',
    template: '%s | Dhan7 Gaming App',
  },
  description:
    'Download Dhan7 app (Dhan77 APK latest version) and play games to earn real money. Get ₹777 bonus, instant withdrawals, and referral rewards.',
  keywords: DEFAULT_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl(),
    title: 'Dhan7 App Download (Dhan77 APK Latest Version) | Dhan7 Gaming App',
    description:
      'Download Dhan7 app (Dhan77 APK latest version) and play games to earn real money. Get ₹777 bonus, instant withdrawals, and referral rewards.',
    siteName: 'Dhan7 Gaming App',
    images: [
      {
        url: '/dhan77-logo.png',
        alt: 'Dhan7 Dhan77 app logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan7 App Download (Dhan77 APK Latest Version) | Dhan7 Gaming App',
    description:
      'Download Dhan7 app (Dhan77 APK latest version) and play games to earn real money. Get ₹777 bonus, instant withdrawals, and referral rewards.',
    images: ['/dhan77-logo.png'],
  },
  icons: {
    icon: '/dhan77-logo.png',
    apple: '/dhan77-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const websiteSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dhan7 Gaming App',
    alternateName: ['Dhan77', 'Dhan7 App'],
    url: siteUrl(),
  }).replace(/</g, '\\u003c')

  const organizationSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dhan7',
    alternateName: 'Dhan77',
    url: siteUrl(),
    logo: `${siteUrl()}/dhan77-logo.png`,
  }).replace(/</g, '\\u003c')

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-(--color-bg-base) text-(--color-text-primary)">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchema }}
        />
      </body>
    </html>
  )
}
