import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildPageMetadata } from '@/app/_lib/seo'
import { getAllBlogPosts, getBlogPostBySlug } from '@/app/_lib/blogPosts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

const MARKDOWN_LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return buildPageMetadata({
      path: '/blog',
      title: 'Dhan7 Blog',
      description: 'Long-tail guides for Dhan7 users.',
    })
  }

  return buildPageMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.longTailKeywords, 'dhan7 blog'],
  })
}

function renderParagraphWithLinks(paragraph: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0

  for (const match of paragraph.matchAll(MARKDOWN_LINK_REGEX)) {
    const [fullMatch, label, href] = match
    const startIndex = match.index ?? 0

    if (startIndex > lastIndex) {
      nodes.push(paragraph.slice(lastIndex, startIndex))
    }

    const key = `${href}-${startIndex}`

    if (href.startsWith('/')) {
      nodes.push(
        <Link
          key={key}
          href={href}
          prefetch={false}
          className="text-(--color-accent-gold) hover:text-(--color-text-primary) hover:underline"
        >
          {label}
        </Link>,
      )
    } else {
      nodes.push(
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--color-accent-gold) hover:text-(--color-text-primary) hover:underline"
        >
          {label}
        </a>,
      )
    }

    lastIndex = startIndex + fullMatch.length
  }

  if (lastIndex < paragraph.length) {
    nodes.push(paragraph.slice(lastIndex))
  }

  return nodes.length > 0 ? nodes : [paragraph]
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const faqJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }).replace(/</g, '\\u003c')

  return (
    <>
      <main className="flex flex-col gap-10 px-4 py-12 max-w-4xl mx-auto">
        <article className="flex flex-col gap-6">
          <header className="flex flex-col gap-3">
            <p className="text-xs text-(--color-text-muted)">
              Published: {post.publishedAt} | Updated: {post.updatedAt} | {post.readingTime}
            </p>
            <h1 className="text-4xl font-bold text-(--color-accent-gold)">{post.title}</h1>
            <p className="text-(--color-text-muted)">{post.description}</p>
            <p className="text-xs text-(--color-text-muted)">
              Author: {post.author} | Reviewed by: {post.reviewer}
            </p>
          </header>

          {post.sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-(--color-accent-red)">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.heading}-${index}`}
                  className="text-(--color-text-muted) leading-relaxed"
                >
                  {renderParagraphWithLinks(paragraph)}
                </p>
              ))}
              {section.checklist && (
                <ul className="grid grid-cols-1 gap-2">
                  {section.checklist.map((item) => (
                    <li key={item} className="text-(--color-text-muted)">
                      - {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
            <h2 className="text-xl font-bold text-(--color-accent-gold)">FAQ</h2>
            {post.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-(--color-text-primary)">{faq.question}</h3>
                <p className="text-(--color-text-muted)">{faq.answer}</p>
              </div>
            ))}
          </section>
        </article>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
    </>
  )
}
