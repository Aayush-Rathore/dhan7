import { INTERNAL_SEO_LINKS } from '@/app/_lib/constants'

interface InternalLinksProps {
  currentPath: string
  title?: string
}

export default function InternalLinks({
  currentPath,
  title = 'Related Dhan7 Guides',
}: InternalLinksProps) {
  const links = INTERNAL_SEO_LINKS.filter((link) => link.href !== currentPath)

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-(--color-accent-red) p-5">
      <h2 className="text-2xl font-bold text-(--color-accent-red)">{title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {links.map(({ href, label, context }) => (
          <li key={href} className="rounded-lg border border-(--color-accent-gold) p-4">
            <a
              href={href}
              className="font-semibold text-(--color-accent-gold) hover:text-(--color-text-primary) transition-colors"
            >
              {label}
            </a>
            <p className="mt-2 text-sm text-(--color-text-muted)">{context}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
