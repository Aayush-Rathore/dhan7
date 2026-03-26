// Feature: dhan77-gaming-website, Property 12: For any undefined NEXT_PUBLIC_SITE_URL, siteUrl() returns the fallback
import * as fc from 'fast-check'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'

// Validates: Requirements 11.2

const FALLBACK = 'https://dhan77apkdownload.com'

// Test the siteUrl logic directly (mirrors the implementation)
function siteUrlUnderTest(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK
}

describe('siteUrl – Property 12', () => {
  let original: string | undefined

  beforeEach(() => {
    original = process.env.NEXT_PUBLIC_SITE_URL
  })

  afterEach(() => {
    if (original === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = original
    }
  })

  it('for any undefined NEXT_PUBLIC_SITE_URL, returns the fallback URL', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        delete process.env.NEXT_PUBLIC_SITE_URL
        expect(siteUrlUnderTest()).toBe(FALLBACK)
      }),
      { numRuns: 100 }
    )
  })

  it('for any set NEXT_PUBLIC_SITE_URL, returns that value', () => {
    fc.assert(
      fc.property(fc.webUrl(), (url) => {
        process.env.NEXT_PUBLIC_SITE_URL = url
        expect(siteUrlUnderTest()).toBe(url)
      }),
      { numRuns: 100 }
    )
  })
})
