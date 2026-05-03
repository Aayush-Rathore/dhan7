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
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/responsible-gaming',
  '/blog',
  '/blog/dhan-7-app-download-checklist-2026',
  '/blog/dhan-7-login-otp-issues-fix-guide',
  '/blog/dhan-77-games-list-and-how-they-work',
  '/blog/dhan7-bet-safety-and-bankroll-guide',
  '/blog/online-gaming-apps-india-dhan7-comparison',
  '/blog/dhan7-withdrawal-time-pending-fix-guide',
  '/blog/dhan-7-bonus-terms-and-usage-guide',
  '/blog/is-dhan-7-real-or-fake-verification-checklist',
  '/blog/goplay11-vs-dhan7-feature-comparison',
  '/blog/habet-and-dhan7-platform-safety-comparison',
]

describe('sitemap – Property 11', () => {
  it('for any call, all expected paths are present and every URL starts with siteUrl()', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const entries = sitemap()
        expect(entries).toHaveLength(EXPECTED_PATHS.length)
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
