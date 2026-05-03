import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '../_lib/seo'
import { getAllBlogPosts } from '../_lib/blogPosts'

export const metadata: Metadata = buildPageMetadata({
  path: '/blog',
  title: 'Dhan7 Blog: Long-Tail Guides for Dhan 7, Dhan 77, and Online Gaming',
  description:
    'Read EEAT-friendly long-tail guides on dhan7 app download, dhan 7 login, dhan77 games, online gaming strategy, and responsible play.',
  keywords: [
    'dhan7 blog',
    'dhan 7 guides',
    'dhan 77 articles',
    'online gaming guide india',
    'dhan7 bet guide',
  ],
})

export default function BlogIndexPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="flex flex-col gap-8 px-4 py-12 max-w-5xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">Dhan7 Blog</h1>
        <p className="text-(--color-text-muted)">
          Research-based, EEAT-friendly guides for users searching dhan7, dhan 7, and dhan 77
          related topics.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-(--color-accent-gold) p-5">
            <p className="text-xs text-(--color-text-muted)">
              {post.publishedAt} • {post.readingTime}
            </p>
            <h2 className="mt-2 text-xl font-bold text-(--color-accent-gold)">
              <Link href={`/blog/${post.slug}`} prefetch={false} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-(--color-text-muted)">{post.description}</p>
            <p className="mt-3 text-xs text-(--color-text-muted)">
              Primary keyword: <span className="text-(--color-text-primary)">{post.primaryKeyword}</span>
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}
