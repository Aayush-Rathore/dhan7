import { INTERNAL_SEO_LINKS, TRUST_LINKS } from '@/app/_lib/constants'

const relatedLinks = [
  { href: 'https://comegameapp.com', label: 'Come Game App' },
  { href: 'https://goplay11-apk.com', label: 'GoPlay11 APK' },
]

export default function Footer() {
  return (
    <footer className="bg-(--color-bg-base) border-t border-(--color-accent-gold) mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center gap-3 text-center">
        <p className="text-(--color-text-muted) text-sm">Internal Pages</p>
        <ul className="flex flex-wrap justify-center gap-4">
          {INTERNAL_SEO_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-(--color-accent-gold) hover:text-(--color-text-primary) text-sm transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-(--color-text-muted) text-sm">Related Sites</p>
        <ul className="flex flex-wrap justify-center gap-4">
          {relatedLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-accent-gold) hover:text-(--color-text-primary) text-sm transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-(--color-text-muted) text-sm">Trust & Legal</p>
        <ul className="flex flex-wrap justify-center gap-4">
          {TRUST_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-(--color-accent-gold) hover:text-(--color-text-primary) text-sm transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-(--color-text-muted) text-xs">
          © {new Date().getFullYear()} Dhan7. All rights reserved. 18+ only. Play responsibly.
        </p>
      </div>
    </footer>
  )
}
