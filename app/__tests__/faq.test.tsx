// Feature: dhan77-gaming-website, Property 8: For any render of FAQ page, all 3 required Q&A strings are present
// Feature: dhan77-gaming-website, Property 10: For any render of FAQ page, JSON-LD mainEntity matches visible Q&A pairs
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FAQPage, { FAQ_ITEMS } from '../faq/page'

// Validates: Requirements 8.2, 9.2

describe('FAQPage – Property 8: all 3 required Q&A strings are present', () => {
  it('for any render, all required questions and answers appear in the DOM', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<FAQPage />)
        const text = container.textContent ?? ''
        for (const { question, answer } of FAQ_ITEMS) {
          expect(text).toContain(question)
          expect(text).toContain(answer)
        }
      }),
      { numRuns: 100 }
    )
  })
})

describe('FAQPage – Property 10: JSON-LD mainEntity matches visible Q&A pairs', () => {
  it('for any render, JSON-LD mainEntity entries match the visible FAQ items', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<FAQPage />)
        const script = container.querySelector('script[type="application/ld+json"]')
        expect(script).not.toBeNull()
        const parsed = JSON.parse(script!.innerHTML)
        expect(parsed['@type']).toBe('FAQPage')
        const entities: Array<{ name: string; acceptedAnswer: { text: string } }> =
          parsed['mainEntity']
        expect(entities).toHaveLength(FAQ_ITEMS.length)
        for (const item of FAQ_ITEMS) {
          const match = entities.find((e) => e.name === item.question)
          expect(match).toBeDefined()
          expect(match!.acceptedAnswer.text).toBe(item.answer)
        }
      }),
      { numRuns: 100 }
    )
  })
})
