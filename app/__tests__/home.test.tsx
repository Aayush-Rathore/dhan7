// Feature: dhan77-gaming-website, Property 5: For any render of Home page, all 7 screenshot src values are present
// Feature: dhan77-gaming-website, Property 6: For any render of Home page, all 4 internal link hrefs are present
// Feature: dhan77-gaming-website, Property 9: For any render of Home page, JSON-LD parses to valid SoftwareApplication schema
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HomePage from '../page'
import { DOWNLOAD_LINK } from '@/app/_lib/constants'
import { siteUrl } from '@/app/_lib/siteUrl'

// **Validates: Requirements 3.3, 3.6, 9.1, 9.3**

const SCREENSHOT_SRCS = [
  '/dhan7-1.jpeg',
  '/dhan7-2.jpeg',
  '/dhan7-3.jpeg',
  '/dhan7-4.jpeg',
  '/dhan7-5.jpeg',
  '/dhan7-6.jpeg',
  '/dhan7-7.jpeg',
]

const INTERNAL_HREFS = [
  '/dhan77-apk-download',
  '/dhan77-login',
  '/dhan77-bonus',
  '/dhan77-review',
]

describe('HomePage – Property 5: all 7 screenshot src values are present', () => {
  it('for any render, all 7 screenshot images are in the DOM', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<HomePage />)
        const imgs = Array.from(container.querySelectorAll('img'))
        const srcs = imgs.map((img) => (img as HTMLImageElement).getAttribute('src') ?? '')
        for (const expected of SCREENSHOT_SRCS) {
          // next/image may encode the src; check for the filename substring
          expect(srcs.some((src) => src.includes(expected.replace(/^\//, '')))).toBe(true)
        }
      }),
      { numRuns: 100 }
    )
  })
})

describe('HomePage – Property 6: all 4 internal link hrefs are present', () => {
  it('for any render, all 4 internal hrefs are in the DOM', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<HomePage />)
        const anchors = Array.from(container.querySelectorAll('a[href]'))
        const hrefs = anchors.map((a) => (a as HTMLAnchorElement).getAttribute('href'))
        for (const expected of INTERNAL_HREFS) {
          expect(hrefs).toContain(expected)
        }
      }),
      { numRuns: 100 }
    )
  })
})

describe('HomePage – Property 9: JSON-LD parses to valid SoftwareApplication schema', () => {
  it('for any render, JSON-LD script contains a valid SoftwareApplication schema', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<HomePage />)
        const script = container.querySelector('script[type="application/ld+json"]')
        expect(script).not.toBeNull()
        const parsed = JSON.parse(script!.innerHTML)
        expect(parsed['@type']).toBe('SoftwareApplication')
        expect(parsed['name']).toBe('Dhan77')
        expect(parsed['operatingSystem']).toBe('Android')
        expect(parsed['downloadUrl']).toBe(DOWNLOAD_LINK)
        expect(parsed['url']).toBe(siteUrl())
      }),
      { numRuns: 100 }
    )
  })
})
