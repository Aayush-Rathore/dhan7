// Feature: dhan77-gaming-website, Property 11: For any call to sitemap(), all 6 paths are present and URLs start with siteUrl()
import * as fc from 'fast-check'
import { describe, it, expect } from 'vitest'
import sitemap from '../sitemap'
import { siteUrl } from '@/app/_lib/siteUrl'

// Validates: Requirements 10.2, 10.3

const EXPECTED_PATHS = [
  '',
  '/dhan77-apk-download',
  '/dhan77-login',
  '/dhan77-bonus',
  '/dhan77-review',
  '/faq',
]

describe('sitemap – Property 11', () => {
  it('for any call, all 6 paths are present and every URL starts with siteUrl()', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const entries = sitemap()
        expect(entries).toHaveLength(6)
        const base = siteUrl()
        for (const path of EXPECTED_PATHS) {
          const expected = `${base}${path}`
          expect(entries.some((e) => e.url === expected)).toBe(true)
        }
        for (const entry of entries) {
          expect(entry.url.startsWith(base)).toBe(true)
        }
      }),
      { numRuns: 100 }
    )
  })
})
