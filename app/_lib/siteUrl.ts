const FALLBACK_SITE_URL = 'https://www.dhan7.xyz'

export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL

  try {
    const parsed = new URL(raw)
    if (parsed.hostname === 'dhan7.xyz') {
      parsed.hostname = 'www.dhan7.xyz'
    }
    parsed.pathname = ''
    parsed.search = ''
    parsed.hash = ''
    return parsed.origin
  } catch {
    return FALLBACK_SITE_URL
  }
}
