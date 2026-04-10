// Feature: dhan77-gaming-website, Property 1: For any render of Header, all six nav hrefs are present
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Header from '../Header'

// **Validates: Requirements 1.3**

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock('next/image', () => ({
  default: ({ alt = '', ...props }: { alt?: string }) => <img alt={alt} {...props} />,
}))

const EXPECTED_HREFS = [
  '/',
  '/dhan77-apk-download',
  '/dhan77-login',
  '/dhan77-bonus',
  '/dhan77-review',
  '/faq',
]

describe('Header – Property 1', () => {
  it('for any render, all six nav hrefs are present in the DOM', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<Header />)
        const anchors = Array.from(container.querySelectorAll('a[href]'))
        const hrefs = anchors.map((a) => a.getAttribute('href'))
        for (const expected of EXPECTED_HREFS) {
          expect(hrefs).toContain(expected)
        }
      }),
      { numRuns: 100 }
    )
  })
})
