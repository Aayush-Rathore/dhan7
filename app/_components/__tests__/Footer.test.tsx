// Feature: dhan77-gaming-website, Property 2: For any render of Footer, both external hrefs are present
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../Footer'

// **Validates: Requirements 1.4**

const EXPECTED_HREFS = [
  'https://comegameapp.com',
  'https://goplay11-apk.com',
]

describe('Footer – Property 1', () => {
  it('for any render, both external related-site links are present in the DOM', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<Footer />)
        const anchors = Array.from(container.querySelectorAll('a[href]'))
        const hrefs = anchors.map((a) => (a as HTMLAnchorElement).getAttribute('href'))
        for (const expected of EXPECTED_HREFS) {
          expect(hrefs).toContain(expected)
        }
      }),
      { numRuns: 100 }
    )
  })
})
