# Design Document: Dhan77 Gaming Website

## Overview

A mobile-first, SEO-optimised Next.js 16 marketing site for the Dhan77 real-money gaming app. The site consists of six static pages rendered with the App Router, a shared dark casino theme, structured JSON-LD data, and an XML sitemap. All domain references are driven by a single environment variable so the base URL can be changed without touching source code.

The site is purely informational / marketing — there is no database, authentication, or server-side data fetching. Every page is statically generated at build time.

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│  Next.js 16 App Router (static generation)          │
│                                                     │
│  app/layout.tsx          ← root layout + metadata   │
│  app/globals.css         ← Tailwind v4 theme        │
│                                                     │
│  Pages (each exports static `metadata`)             │
│  ├── app/page.tsx                    /              │
│  ├── app/dhan77-apk-download/page.tsx               │
│  ├── app/dhan77-login/page.tsx                      │
│  ├── app/dhan77-bonus/page.tsx                      │
│  ├── app/dhan77-review/page.tsx                     │
│  └── app/faq/page.tsx                               │
│                                                     │
│  app/sitemap.ts          ← MetadataRoute.Sitemap    │
│                                                     │
│  Shared components (app/_components/)               │
│  ├── Header.tsx                                     │
│  ├── Footer.tsx                                     │
│  └── CTAButton.tsx                                  │
│                                                     │
│  Shared utility                                     │
│  └── app/_lib/siteUrl.ts                            │
└─────────────────────────────────────────────────────┘
```

All pages are Server Components. No client-side JavaScript is required for any page functionality.

---

## Components and Interfaces

### `app/_lib/siteUrl.ts`

Single source of truth for the base URL.

```ts
export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dhan77apkdownload.com'
}
```

Used in: `app/layout.tsx` (metadataBase), every page's `metadata.alternates.canonical`, `app/sitemap.ts`, and JSON-LD schema objects.

### `app/_components/CTAButton.tsx`

```tsx
interface CTAButtonProps {
  label?: string
}
// Renders:
// <a href={DOWNLOAD_LINK} target="_blank" rel="nofollow sponsored" ...>
//   {label ?? 'Download Dhan77 APK'}
// </a>
```

The `DOWNLOAD_LINK` constant is defined once in `app/_lib/constants.ts` and imported wherever needed.

### `app/_components/Header.tsx`

Renders the site logo and navigation links to all six pages:
- `/` — Home
- `/dhan77-apk-download` — Download
- `/dhan77-login` — Login
- `/dhan77-bonus` — Bonus
- `/dhan77-review` — Review
- `/faq` — FAQ

Uses Next.js `<Link>` for client-side navigation.

### `app/_components/Footer.tsx`

Renders related external links:
- `https://comegameapp.com`
- `https://goplay11-apk.com`

### JSON-LD helpers (inline in page components)

Rather than separate component files, JSON-LD is rendered as an inline `<script type="application/ld+json">` tag directly inside the relevant page component, following the official Next.js JSON-LD guide. The `<` character is replaced with `\u003c` to prevent XSS.

Two schema shapes are used:

**SoftwareApplication** (Home page):
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Dhan77",
  "operatingSystem": "Android",
  "url": "<siteUrl()>",
  "downloadUrl": "<DOWNLOAD_LINK>",
  "applicationCategory": "GameApplication"
}
```

**FAQPage** (FAQ page):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Dhan77 safe?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, but play responsibly." }
    },
    ...
  ]
}
```

---

## Data Models

### `SiteMetadata` (conceptual, not a runtime type)

Each page exports a static `metadata` object conforming to Next.js `Metadata`:

```ts
{
  title: string,                        // page-specific title
  description: string,                  // page-specific or default description
  keywords: string[],                   // shared keyword list
  alternates: { canonical: string },    // absolute URL via siteUrl()
  metadataBase: URL,                    // set in root layout only
}
```

The root `app/layout.tsx` sets `metadataBase: new URL(siteUrl())` so that relative paths in child metadata are resolved correctly. It also sets the default `title` and `description` used when a page does not override them.

### `SitemapEntry`

```ts
{
  url: string,           // absolute URL: siteUrl() + path
  lastModified: Date,
  changeFrequency: 'monthly' | 'yearly',
  priority: number,
}
```

### `FAQItem`

```ts
interface FAQItem {
  question: string
  answer: string
}
```

Defined as a constant array in `app/faq/page.tsx` and used both to render the visible Q&A list and to build the FAQPage JSON-LD schema, ensuring the two are always in sync.

### `app/_lib/constants.ts`

```ts
export const DOWNLOAD_LINK =
  'https://share-rxapq9cajg.dhan7.co/share/agent/AD0RWJKN?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0='

export const DEFAULT_KEYWORDS = [
  'dhan77', 'dhan7', 'dhan77 apk download',
  'dhan7 gaming app', 'dhan77 login', 'dhan77 bonus',
]
```

---

## File / Folder Structure

```
app/
├── _components/
│   ├── CTAButton.tsx
│   ├── Footer.tsx
│   └── Header.tsx
├── _lib/
│   ├── constants.ts
│   └── siteUrl.ts
├── dhan77-apk-download/
│   └── page.tsx
├── dhan77-bonus/
│   └── page.tsx
├── dhan77-login/
│   └── page.tsx
├── dhan77-review/
│   └── page.tsx
├── faq/
│   └── page.tsx
├── globals.css
├── layout.tsx
├── page.tsx
└── sitemap.ts
```

The `_components` and `_lib` prefixes use Next.js private folder convention — they are not routable.

---

## Tailwind v4 Theming

This project uses Tailwind v4 (`@import "tailwindcss"` + `@tailwindcss/postcss`). Theme tokens are declared with `@theme inline` in `app/globals.css`:

```css
@import "tailwindcss";

@theme inline {
  --color-bg-base:   #0f0f0f;
  --color-accent-red:  #ff2e63;
  --color-accent-gold: #f5c542;
  --color-text-primary: #ffffff;
  --color-text-muted:   #a0a0a0;
}

body {
  background-color: #0f0f0f;
  color: #ffffff;
}
```

These CSS custom properties are referenced in components via Tailwind utility classes such as `bg-(--color-bg-base)`, `text-(--color-accent-red)`, `border-(--color-accent-gold)`.

---

## SEO Metadata Strategy

### Root layout (`app/layout.tsx`)

```ts
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: 'Dhan77 APK Download (Latest Version) | Dhan7 Gaming App',
    template: '%s | Dhan7 Gaming App',
  },
  description: 'Download Dhan77 APK and play games to earn real money. Get ₹777 bonus, instant withdrawals, and referral rewards.',
  keywords: DEFAULT_KEYWORDS,
}
```

### Per-page metadata

Each page exports its own `metadata` object that overrides `title` and `alternates.canonical`. Because `metadataBase` is set in the root layout, canonical paths can be relative strings (e.g. `'/dhan77-apk-download'`) and Next.js will resolve them to absolute URLs automatically.

| Page | title | canonical path |
|------|-------|----------------|
| `/` | `Dhan77 APK Download \| Dhan7 Gaming App` | `/` |
| `/dhan77-apk-download` | `Dhan77 APK Download (Latest Version)` | `/dhan77-apk-download` |
| `/dhan77-login` | `Dhan77 Login Guide` | `/dhan77-login` |
| `/dhan77-bonus` | `Dhan77 Bonus ₹777 Offer` | `/dhan77-bonus` |
| `/dhan77-review` | `Dhan77 Review – Real or Fake?` | `/dhan77-review` |
| `/faq` | `Dhan77 FAQ` | `/faq` |

### Sitemap (`app/sitemap.ts`)

```ts
import type { MetadataRoute } from 'next'
import { siteUrl } from './_lib/siteUrl'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  const paths = ['', '/dhan77-apk-download', '/dhan77-login',
                  '/dhan77-bonus', '/dhan77-review', '/faq']
  return paths.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Header contains navigation links to all six pages

*For any* render of the Header component, the rendered output SHALL contain anchor elements (or Next.js Link elements) with `href` values covering all six page paths: `/`, `/dhan77-apk-download`, `/dhan77-login`, `/dhan77-bonus`, `/dhan77-review`, `/faq`.

**Validates: Requirements 1.3**

---

### Property 2: Footer contains both required external links

*For any* render of the Footer component, the rendered output SHALL contain anchor elements with `href` values `https://comegameapp.com` and `https://goplay11-apk.com`.

**Validates: Requirements 1.4**

---

### Property 3: CTAButton has correct href, target, and rel attributes

*For any* render of the CTAButton component, the rendered anchor element SHALL have `href` equal to `DOWNLOAD_LINK`, `target="_blank"`, and `rel` containing both `"nofollow"` and `"sponsored"`.

**Validates: Requirements 1.6**

---

### Property 4: Every page exports a canonical URL that starts with the site base URL

*For any* of the six page modules, the exported `metadata.alternates.canonical` value, when resolved against `metadataBase`, SHALL produce a URL that starts with `siteUrl()` and ends with the page's expected path.

**Validates: Requirements 2.3, 2.6, 3.7, 4.5, 5.4, 6.4, 7.5, 8.3**

---

### Property 5: Home page renders all seven screenshot images

*For any* render of the Home page, the rendered output SHALL contain exactly seven `<img>` elements (or Next.js `<Image>` components) with `src` values `/dhan7-1.jpeg` through `/dhan7-7.jpeg`.

**Validates: Requirements 3.3**

---

### Property 6: Home page internal links section contains all four required hrefs

*For any* render of the Home page internal links section, the rendered output SHALL contain anchor elements with `href` values `/dhan77-apk-download`, `/dhan77-login`, `/dhan77-bonus`, and `/dhan77-review`.

**Validates: Requirements 3.6**

---

### Property 7: Download page renders CTAButton at least twice

*For any* render of the Download page, the rendered output SHALL contain at least two anchor elements pointing to `DOWNLOAD_LINK` (one above and one below the step list).

**Validates: Requirements 4.3**

---

### Property 8: FAQ page renders all required Q&A pairs

*For any* render of the FAQ page, the rendered output SHALL contain all three required question strings and their corresponding answer strings: ("Is Dhan77 safe?" / "Yes, but play responsibly."), ("How to download?" / "Use the download button."), ("Minimum withdrawal?" / "Depends on current rules.").

**Validates: Requirements 8.2**

---

### Property 9: Home page JSON-LD contains a valid SoftwareApplication schema

*For any* render of the Home page, the `<script type="application/ld+json">` tag SHALL contain a parseable JSON object with `@type` equal to `"SoftwareApplication"`, `name` equal to `"Dhan77"`, `operatingSystem` equal to `"Android"`, `downloadUrl` equal to `DOWNLOAD_LINK`, and `url` equal to `siteUrl()`.

**Validates: Requirements 9.1, 9.3**

---

### Property 10: FAQ page JSON-LD contains all Q&A pairs rendered on the page

*For any* render of the FAQ page, the `<script type="application/ld+json">` tag SHALL contain a FAQPage schema whose `mainEntity` array includes an entry for every Q&A pair visible in the page's rendered HTML — the schema and the visible content are always in sync.

**Validates: Requirements 9.2**

---

### Property 11: Sitemap covers all six pages using the site base URL

*For any* call to the `sitemap()` function, the returned array SHALL contain exactly six entries, one for each of the paths `/`, `/dhan77-apk-download`, `/dhan77-login`, `/dhan77-bonus`, `/dhan77-review`, `/faq`, and every `url` value SHALL start with `siteUrl()`.

**Validates: Requirements 10.2, 10.3**

---

### Property 12: siteUrl() returns the fallback when NEXT_PUBLIC_SITE_URL is unset

*For any* execution environment where `process.env.NEXT_PUBLIC_SITE_URL` is `undefined`, `siteUrl()` SHALL return `"https://dhan77apkdownload.com"`.

**Validates: Requirements 11.2**

---

## Error Handling

Since all pages are statically generated with no external data fetching, runtime errors are minimal. The following cases are handled:

- **Missing env var**: `siteUrl()` falls back to the hardcoded default (Requirement 11.2). No build error occurs.
- **Missing public assets**: Next.js `<Image>` will throw a build-time error if a referenced file in `/public` does not exist. The seven screenshot images and logo are already present in `/public`.
- **Invalid JSON-LD**: The `JSON.stringify(...).replace(/</g, '\\u003c')` pattern prevents XSS and ensures valid JSON output. No dynamic data is used in schemas, so malformed JSON is not a runtime risk.
- **Broken external links**: The Footer and CTAButton link to external URLs. These are hardcoded constants and cannot be validated at build time; they should be verified manually before deployment.

---

## Testing Strategy

### Unit tests (example-based)

Use **Vitest** + **@testing-library/react** for component and page rendering tests.

Focus areas:
- Render each shared component (Header, Footer, CTAButton) and assert required elements are present.
- Render each page component and assert required headings, text content, and links are present.
- Inspect each page's exported `metadata` object directly (no rendering needed) to assert title and canonical values.
- Call `siteUrl()` with a mocked env var to assert fallback behaviour.
- Call `sitemap()` and assert the returned array structure.

### Property-based tests

Use **fast-check** for property-based tests.

Each property from the Correctness Properties section maps to exactly one property-based test. Because the components and utility functions are deterministic (no random inputs), the "for any" quantification is expressed by generating random prop values (e.g. random `label` strings for CTAButton) and asserting the invariant holds regardless of those inputs.

Minimum 100 iterations per property test.

Tag format: `// Feature: dhan77-gaming-website, Property {N}: {property_text}`

**Property test mapping:**

| Property | Test description |
|----------|-----------------|
| P1 | For any render of Header, all six nav hrefs are present |
| P2 | For any render of Footer, both external hrefs are present |
| P3 | For any CTAButton label, href/target/rel are always correct |
| P4 | For any page metadata export, canonical resolves to siteUrl() + expected path |
| P5 | For any render of Home page, all 7 screenshot src values are present |
| P6 | For any render of Home page, all 4 internal link hrefs are present |
| P7 | For any render of Download page, DOWNLOAD_LINK appears at least twice |
| P8 | For any render of FAQ page, all 3 required Q&A strings are present |
| P9 | For any render of Home page, JSON-LD parses to valid SoftwareApplication schema |
| P10 | For any render of FAQ page, JSON-LD mainEntity matches visible Q&A pairs |
| P11 | For any call to sitemap(), all 6 paths are present and URLs start with siteUrl() |
| P12 | For any undefined NEXT_PUBLIC_SITE_URL, siteUrl() returns the fallback |

### Integration / smoke tests

After `next build`, verify:
- `/sitemap.xml` is accessible and well-formed XML.
- All six page routes return HTTP 200.
- No broken internal links (can be automated with a link-checker script).
