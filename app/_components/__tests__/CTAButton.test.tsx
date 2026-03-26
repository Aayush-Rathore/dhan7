// Feature: dhan77-gaming-website, Property 3: For any CTAButton label, href/target/rel are always correct
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CTAButton from '../CTAButton'
import { DOWNLOAD_LINK } from '@/app/_lib/constants'

// **Validates: Requirements 1.6**

describe('CTAButton – Property 3', () => {
  it('for any label, anchor has correct href, target, and rel', () => {
    fc.assert(
      fc.property(fc.string(), (label) => {
        const { container } = render(<CTAButton label={label} />)
        const anchor = container.querySelector('a')!
        expect(anchor.getAttribute('href')).toBe(DOWNLOAD_LINK)
        expect(anchor.getAttribute('target')).toBe('_blank')
        const rel = anchor.getAttribute('rel') ?? ''
        expect(rel).toContain('nofollow')
        expect(rel).toContain('sponsored')
      }),
      { numRuns: 100 }
    )
  })

  it('default label case renders anchor with correct href, target, and rel', () => {
    const { container } = render(<CTAButton />)
    const anchor = container.querySelector('a')!
    expect(anchor.getAttribute('href')).toBe(DOWNLOAD_LINK)
    expect(anchor.getAttribute('target')).toBe('_blank')
    const rel = anchor.getAttribute('rel') ?? ''
    expect(rel).toContain('nofollow')
    expect(rel).toContain('sponsored')
  })
})
