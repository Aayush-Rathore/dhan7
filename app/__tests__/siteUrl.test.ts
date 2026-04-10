import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { siteUrl } from '@/app/_lib/siteUrl'

const FALLBACK = 'https://www.dhan7.xyz'

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

  it('returns fallback when NEXT_PUBLIC_SITE_URL is undefined', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL
    expect(siteUrl()).toBe(FALLBACK)
  })

  it('normalizes apex dhan7.xyz to www', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://dhan7.xyz'
    expect(siteUrl()).toBe('https://www.dhan7.xyz')
  })

  it('strips path, query, and hash from NEXT_PUBLIC_SITE_URL', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://www.dhan7.xyz/path?q=1#hash'
    expect(siteUrl()).toBe('https://www.dhan7.xyz')
  })

  it('returns fallback when NEXT_PUBLIC_SITE_URL is invalid', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'invalid-url'
    expect(siteUrl()).toBe(FALLBACK)
  })
})
