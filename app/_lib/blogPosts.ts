import { INTERNAL_SEO_LINKS, TRUST_LINKS } from './constants'

export interface BlogSection {
  heading: string
  paragraphs: string[]
  checklist?: string[]
}

export interface BlogFaq {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  primaryKeyword: string
  longTailKeywords: string[]
  publishedAt: string
  updatedAt: string
  readingTime: string
  author: string
  reviewer: string
  sections: BlogSection[]
  faqs: BlogFaq[]
  externalLinks: Array<{ href: string; label: string }>
}

interface BlogPostSeed {
  slug: string
  title: string
  description: string
  primaryKeyword: string
  longTailKeywords: string[]
  publishedAt: string
  updatedAt: string
  author: string
  reviewer: string
  angle: string
  externalLinks: Array<{ href: string; label: string }>
}

const BLOG_POST_SEEDS: BlogPostSeed[] = [
  {
    slug: 'dhan-7-app-download-checklist-2026',
    title: 'Dhan 7 App Download Checklist (2026): Safe APK Setup for New Users',
    description:
      'Step-by-step Dhan 7 app download checklist covering device checks, APK safety, account setup, and first-session precautions.',
    primaryKeyword: 'dhan 7 app download checklist',
    longTailKeywords: [
      'dhan7 app download checklist 2026',
      'dhan 7 apk safe install guide',
      'dhan77 app setup for beginners',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Responsible Gaming Reviewer',
    angle: 'new user onboarding, secure setup, and first-week usage discipline',
    externalLinks: [
      { href: 'https://goplay11-apk.com/goplay11-app-download', label: 'GoPlay11 App Download Guide' },
      { href: 'https://goplay11-apk.com/login-register', label: 'GoPlay11 Login & Register' },
      { href: 'https://goplay11-apk.com/responsible-play', label: 'GoPlay11 Responsible Play' },
      {
        href: 'https://habetapk.com/blog/habet-betting-app-download-guide-android-ios-2026',
        label: 'Habet Download Guide',
      },
      {
        href: 'https://habetapk.com/blog/is-habet-app-real-or-fake-legitimacy-verification-2026',
        label: 'Habet Safety Verification',
      },
    ],
  },
  {
    slug: 'dhan-7-login-otp-issues-fix-guide',
    title: 'Dhan 7 Login OTP Issues: Fast Fix Guide for 2026',
    description:
      'Troubleshooting guide for Dhan 7 login and OTP problems with practical fixes for network, SMS delays, and account setup errors.',
    primaryKeyword: 'dhan 7 login otp issues',
    longTailKeywords: [
      'dhan7 login otp not received',
      'dhan77 login problem solution',
      'dhan 7 account verification fix',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Identity Verification Reviewer',
    angle: 'login reliability, OTP troubleshooting, and safer session recovery',
    externalLinks: [
      { href: 'https://goplay11-apk.com/login-register', label: 'GoPlay11 Login Guide' },
      { href: 'https://goplay11-apk.com/how-to-play', label: 'GoPlay11 How To Play' },
      { href: 'https://goplay11-apk.com/contact', label: 'GoPlay11 Contact Support' },
      {
        href: 'https://habetapk.com/blog/habet-app-login-account-management-guide-2026',
        label: 'Habet Login Management Guide',
      },
      {
        href: 'https://habetapk.com/blog/habet-betting-app-real-or-fake-complete-guide-2026',
        label: 'Habet Trust Signals Guide',
      },
    ],
  },
  {
    slug: 'dhan-77-games-list-and-how-they-work',
    title: 'Dhan 77 Games List: Crash, Casino, Slots, Fishing Explained',
    description:
      'Beginner-friendly guide to Dhan 77 games with simple explanations for crash, casino, slots, and fishing formats.',
    primaryKeyword: 'dhan 77 games',
    longTailKeywords: ['dhan7 games list', 'dhan 7 game types', 'dhan77 crash casino slots guide'],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Gameplay Analyst',
    angle: 'game format education, volatility awareness, and bankroll mapping by game type',
    externalLinks: [
      { href: 'https://goplay11-apk.com/goplay11-fantasy-app', label: 'GoPlay11 Fantasy App Overview' },
      {
        href: 'https://goplay11-apk.com/blog/fantasy-cricket-scoring-system-explained',
        label: 'GoPlay11 Scoring System Guide',
      },
      {
        href: 'https://goplay11-apk.com/blog/fantasy-cricket-bankroll-management-guide',
        label: 'GoPlay11 Bankroll Guide',
      },
      {
        href: 'https://habetapk.com/blog/habet-cricket-betting-markets-explained-complete-guide-2026',
        label: 'Habet Market Types Guide',
      },
      { href: 'https://habetapk.com/blog/cricket-betting-tips-india-2026', label: 'Habet Cricket Tips India' },
    ],
  },
  {
    slug: 'dhan7-bet-safety-and-bankroll-guide',
    title: 'Dhan7 Bet Safety Guide: Bankroll Rules Every User Should Follow',
    description:
      'Practical bankroll and safety framework for users searching dhan7 bet strategies without high-risk behavior.',
    primaryKeyword: 'dhan7 bet',
    longTailKeywords: [
      'dhan7 bet bankroll management',
      'dhan 7 betting safety tips',
      'dhan77 bet session control',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Responsible Gaming Reviewer',
    angle: 'bankroll planning, emotional discipline, and protective betting habits',
    externalLinks: [
      {
        href: 'https://goplay11-apk.com/blog/fantasy-cricket-bankroll-management-guide',
        label: 'GoPlay11 Bankroll Management',
      },
      { href: 'https://goplay11-apk.com/responsible-play', label: 'GoPlay11 Responsible Play' },
      { href: 'https://goplay11-apk.com/referral-code', label: 'GoPlay11 Referral Terms' },
      { href: 'https://habetapk.com/blog/cricket-betting-strategies-india-2026', label: 'Habet Betting Strategies' },
      { href: 'https://habetapk.com/blog/habet-ipl-betting-tips-beginners-guide-india-2026', label: 'Habet Beginner Tips' },
    ],
  },
  {
    slug: 'online-gaming-apps-india-dhan7-comparison',
    title: 'Online Gaming Apps in India: Where Dhan7 Fits in 2026',
    description:
      'Balanced comparison article for users searching online gaming apps in India, with a practical lens on Dhan7 use-cases.',
    primaryKeyword: 'online gaming apps india',
    longTailKeywords: [
      'online gaming apps india 2026',
      'dhan7 vs other gaming apps',
      'real money gaming app comparison india',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Editorial Policy Reviewer',
    angle: 'comparative evaluation, trust checks, and practical selection framework',
    externalLinks: [
      { href: 'https://goplay11-apk.com/blog/goplay11-vs-other-fantasy-apps', label: 'GoPlay11 Comparison Guide' },
      { href: 'https://goplay11-apk.com/about', label: 'GoPlay11 About Page' },
      { href: 'https://goplay11-apk.com/editorial-policy', label: 'GoPlay11 Editorial Policy' },
      { href: 'https://habetapk.com/blog/habet-vs-other-betting-apps-complete-comparison-2026', label: 'Habet Comparison Guide' },
      { href: 'https://habetapk.com/disclaimer', label: 'Habet Disclaimer' },
    ],
  },
  {
    slug: 'dhan7-withdrawal-time-pending-fix-guide',
    title: 'Dhan7 Withdrawal Time Guide: Pending Requests and Practical Fixes',
    description:
      'Clear guide to understand dhan7 withdrawal time, common pending reasons, and safe troubleshooting steps.',
    primaryKeyword: 'dhan7 withdrawal time',
    longTailKeywords: [
      'dhan 7 withdrawal pending fix',
      'dhan77 withdrawal processing time',
      'dhan7 cashout troubleshooting guide',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Payments Process Reviewer',
    angle: 'withdrawal processing, pending-state troubleshooting, and safe cashout routines',
    externalLinks: [
      { href: 'https://goplay11-apk.com/blog/goplay11-app-download-complete-checklist-2026', label: 'GoPlay11 Setup Checklist' },
      { href: 'https://goplay11-apk.com/contact', label: 'GoPlay11 Contact Workflow' },
      { href: 'https://goplay11-apk.com/responsible-play', label: 'GoPlay11 Responsible Usage' },
      {
        href: 'https://habetapk.com/blog/how-to-withdraw-money-from-habet-step-by-step-guide-2026',
        label: 'Habet Withdrawal Steps',
      },
      {
        href: 'https://habetapk.com/blog/habet-app-complete-review-2026',
        label: 'Habet Process Review',
      },
    ],
  },
  {
    slug: 'dhan-7-bonus-terms-and-usage-guide',
    title: 'Dhan 7 Bonus Terms Explained: How to Use Offers Responsibly',
    description:
      'A clear explainer on dhan 7 bonus conditions, common misunderstandings, and practical usage strategy.',
    primaryKeyword: 'dhan 7 bonus terms',
    longTailKeywords: [
      'dhan7 bonus offer conditions',
      'dhan77 welcome bonus rules',
      'dhan 7 cashback and referral terms',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Promotions Policy Reviewer',
    angle: 'bonus rules interpretation, risk-aware offer usage, and expectation management',
    externalLinks: [
      { href: 'https://goplay11-apk.com/referral-code', label: 'GoPlay11 Referral Program' },
      {
        href: 'https://goplay11-apk.com/blog/goplay11-app-download-complete-checklist-2026',
        label: 'GoPlay11 Offer Checklist',
      },
      { href: 'https://goplay11-apk.com/editorial-policy', label: 'GoPlay11 Policy Clarity' },
      { href: 'https://habetapk.com/blog/habet-ipl-betting-bonus-and-promotions-2026', label: 'Habet Bonus Terms' },
      {
        href: 'https://habetapk.com/blog/habet-vs-other-betting-apps-complete-comparison-2026',
        label: 'Habet Offer Comparison',
      },
    ],
  },
  {
    slug: 'is-dhan-7-real-or-fake-verification-checklist',
    title: 'Is Dhan 7 Real or Fake? Verification Checklist for New Users',
    description:
      'Neutral verification framework to evaluate dhan 7 app credibility signals before spending money.',
    primaryKeyword: 'is dhan 7 real or fake',
    longTailKeywords: [
      'dhan7 real or fake check',
      'dhan77 app legitimacy guide',
      'how to verify dhan 7 app',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Trust and Safety Reviewer',
    angle: 'trust-signal verification, policy review, and lower-risk onboarding',
    externalLinks: [
      { href: 'https://goplay11-apk.com/about', label: 'GoPlay11 About & Identity' },
      { href: 'https://goplay11-apk.com/editorial-policy', label: 'GoPlay11 Editorial Process' },
      { href: 'https://goplay11-apk.com/contact', label: 'GoPlay11 Contact Signals' },
      {
        href: 'https://habetapk.com/blog/is-habet-app-real-or-fake-legitimacy-verification-2026',
        label: 'Habet Legitimacy Checklist',
      },
      { href: 'https://habetapk.com/disclaimer', label: 'Habet Risk Disclosure' },
    ],
  },
  {
    slug: 'goplay11-vs-dhan7-feature-comparison',
    title: 'GoPlay11 vs Dhan7: Feature Comparison for 2026 Users',
    description:
      'Editorial comparison of GoPlay11 and Dhan7 by onboarding, gameplay style, support flow, and responsible usage features.',
    primaryKeyword: 'goplay11 vs dhan7',
    longTailKeywords: [
      'goplay11 and dhan7 comparison',
      'dhan7 vs fantasy apps',
      'dhan 7 vs goplay11 setup guide',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Comparative Analysis Reviewer',
    angle: 'platform comparison with workflow quality and support transparency focus',
    externalLinks: [
      { href: 'https://goplay11-apk.com/', label: 'GoPlay11 Home' },
      {
        href: 'https://goplay11-apk.com/blog/how-to-win-in-goplay11',
        label: 'GoPlay11 How-To Guide',
      },
      {
        href: 'https://goplay11-apk.com/blog/goplay11-vs-other-fantasy-apps',
        label: 'GoPlay11 vs Other Apps',
      },
      {
        href: 'https://habetapk.com/blog/goplay11-vs-dream11-fantasy-cricket-comparison-2026',
        label: 'Habet Fantasy Comparison',
      },
      {
        href: 'https://habetapk.com/blog/goplay11-app-review-fantasy-cricket-india-2026',
        label: 'Habet GoPlay11 Review',
      },
    ],
  },
  {
    slug: 'habet-and-dhan7-platform-safety-comparison',
    title: 'Habet and Dhan7: Platform Safety Comparison for Informed Users',
    description:
      'A structured comparison of Habet and Dhan7 safety signals, policy clarity, and responsible gaming coverage.',
    primaryKeyword: 'habet and dhan7 comparison',
    longTailKeywords: [
      'habet vs dhan7 safety',
      'dhan 7 and habet policy comparison',
      'real money app trust signals india',
    ],
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    author: 'Dhan7 Editorial Team',
    reviewer: 'Trust and Policy Reviewer',
    angle: 'cross-platform trust comparison and safer decision workflow',
    externalLinks: [
      { href: 'https://goplay11-apk.com/about', label: 'GoPlay11 Trust Profile' },
      { href: 'https://goplay11-apk.com/responsible-play', label: 'GoPlay11 Responsible Play' },
      { href: 'https://goplay11-apk.com/editorial-policy', label: 'GoPlay11 Editorial Standards' },
      { href: 'https://habetapk.com/', label: 'Habet Home' },
      { href: 'https://habetapk.com/blog/habet-app-complete-review-2026', label: 'Habet Full Review' },
    ],
  },
]

const LONG_FORM_TOPICS = [
  'search intent mapping',
  'on-page trust structure',
  'session risk controls',
  'navigation clarity for first-time users',
  'technical consistency across device types',
  'content freshness and update discipline',
  'policy visibility and legal readability',
  'measurement framework for improvement',
  'support workflow and escalation readiness',
  'conversion path friction reduction',
  'user behavior signals and query alignment',
  'language clarity for beginner users',
]

function countWords(text: string): number {
  return text
    .replace(/\[[^\]]+\]\([^\)]+\)/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

function countPostWords(post: Pick<BlogPost, 'title' | 'description' | 'sections' | 'faqs'>): number {
  const sectionWords = post.sections.reduce((sum, section) => {
    const paragraphWords = section.paragraphs.reduce((inner, paragraph) => inner + countWords(paragraph), 0)
    const checklistWords = (section.checklist ?? []).reduce((inner, item) => inner + countWords(item), 0)
    return sum + paragraphWords + checklistWords + countWords(section.heading)
  }, 0)

  const faqWords = post.faqs.reduce(
    (sum, faq) => sum + countWords(faq.question) + countWords(faq.answer),
    0,
  )

  return countWords(post.title) + countWords(post.description) + sectionWords + faqWords
}

function buildInternalTargets(currentSlug: string, seeds: BlogPostSeed[]): Array<{ href: string; label: string }> {
  const pageLinks = [...INTERNAL_SEO_LINKS, ...TRUST_LINKS].map((link) => ({
    href: link.href,
    label: link.label,
  }))

  const blogLinks = seeds
    .filter((seed) => seed.slug !== currentSlug)
    .map((seed) => ({ href: `/blog/${seed.slug}`, label: seed.title }))

  return [...pageLinks, ...blogLinks]
}

function createCoreParagraph(
  seed: BlogPostSeed,
  topic: string,
  internalLink: { href: string; label: string },
): string {
  return `For users researching ${seed.primaryKeyword}, the best long-term SEO and experience result comes from structured education instead of shallow keyword repetition. In this section we focus on ${topic}, because ranking improvements are usually tied to how clearly the page answers real user intent for dhan7, dhan 7, and dhan77 variations. A practical next step is to review [${internalLink.label}](${internalLink.href}) and then come back to this guide, so users travel through related pages in a logical sequence that improves crawl depth, topical authority, and reader confidence before any transaction decision is made.`
}

function createProcessParagraph(
  seed: BlogPostSeed,
  internalLink: { href: string; label: string },
  index: number,
): string {
  return `Step ${index + 1} for ${seed.primaryKeyword} optimization is to map each micro-intent to one supporting explanation and one relevant page link. Instead of forcing keywords, this workflow helps search engines understand that the site covers discovery, onboarding, login, bonuses, withdrawals, and responsible play in one coherent ecosystem. When you add contextual navigation such as [${internalLink.label}](${internalLink.href}), users stay longer, bounce less, and consume multiple relevant documents, which tends to protect current rankings while opening opportunities for additional long-tail phrases tied to practical user tasks.`
}

function createExternalParagraph(seed: BlogPostSeed, link: { href: string; label: string }): string {
  return `To improve topical completeness and comparative value, this guide also references external context that users already search for in the same journey. A relevant example is [${link.label}](${link.href}), which can help readers compare onboarding flow, policy language, support access, or responsible gaming communication before making decisions. Outbound references are used editorially and sparingly, not as spam, so the page remains useful, transparent, and aligned with EEAT signals like experience, expertise, and trustworthy guidance for real-world questions around ${seed.primaryKeyword}.`
}

function createSafetyParagraph(seed: BlogPostSeed, internalLink: { href: string; label: string }): string {
  return `A strong EEAT page for ${seed.primaryKeyword} should always include practical safety behavior, including session limits, clear documentation habits, and transparent escalation routes when problems appear. These details are important not only for user well-being but also for search quality, because pages that demonstrate responsible intent are usually more durable in competitive spaces. Reinforce this by guiding users to [${internalLink.label}](${internalLink.href}) where the policy or process is explained in detail, then continue with implementation advice that is consistent, specific, and easy for beginners to apply.`
}

function createFaqs(seed: BlogPostSeed): BlogFaq[] {
  return [
    {
      question: `How does this ${seed.primaryKeyword} guide support better rankings without hurting existing keywords?`,
      answer:
        'The strategy expands semantic coverage with long-tail intent, keeps existing core pages intact, and uses contextual internal linking so topical relevance grows without replacing already-performing URLs.',
    },
    {
      question: `Why are contextual internal links better than a separate bulk links block?`,
      answer:
        'Contextual links inside paragraphs help users move naturally through related tasks. This usually creates stronger engagement signals and clearer topic relationships than an isolated links list.',
    },
    {
      question: 'Why include responsible gaming and policy clarity in SEO content?',
      answer:
        'Responsible guidance improves trust and content quality. For competitive queries, practical transparency and user protection language can strengthen overall site credibility over time.',
    },
  ]
}

function buildSections(seed: BlogPostSeed, seeds: BlogPostSeed[]): BlogSection[] {
  const internalTargets = buildInternalTargets(seed.slug, seeds)
  const desiredInternalLinks = 22
  const internalLinks = Array.from({ length: desiredInternalLinks }).map((_, index) => {
    return internalTargets[index % internalTargets.length]
  })

  const strategyParagraphs = internalLinks.slice(0, 8).map((link, index) => {
    const topic = LONG_FORM_TOPICS[index % LONG_FORM_TOPICS.length]
    return createCoreParagraph(seed, topic, link)
  })

  const workflowParagraphs = internalLinks.slice(8, 16).map((link, index) => {
    return createProcessParagraph(seed, link, index)
  })

  const safetyParagraphs = internalLinks.slice(16, 22).map((link) => createSafetyParagraph(seed, link))

  const comparisonParagraphs = seed.externalLinks.slice(0, 5).map((link) => createExternalParagraph(seed, link))

  const sections: BlogSection[] = [
    {
      heading: 'Intent Mapping and Topic Depth',
      paragraphs: strategyParagraphs,
    },
    {
      heading: 'Execution Workflow for Sustainable Growth',
      paragraphs: workflowParagraphs,
      checklist: [
        'Keep one clear intent per section before adding any keyword variation.',
        'Use contextual anchors that match the paragraph meaning and user task.',
        'Update publish and review notes when guidance changes materially.',
        'Preserve existing ranking URLs and improve supporting pages around them.',
      ],
    },
    {
      heading: 'Cross-Platform Context and Editorial References',
      paragraphs: comparisonParagraphs,
    },
    {
      heading: 'Safety, Trust, and Responsible Use Signals',
      paragraphs: safetyParagraphs,
      checklist: [
        'Include policy and contact routes in content where users need them.',
        'Use realistic examples and avoid guaranteed-win claims.',
        'Encourage controlled first-session limits and documentation habits.',
        'Treat comparisons as informational context, not manipulative promises.',
      ],
    },
  ]

  const extensionParagraphs: string[] = []
  let pass = 1
  while (true) {
    const stagedPost: BlogPost = {
      slug: seed.slug,
      title: seed.title,
      description: seed.description,
      primaryKeyword: seed.primaryKeyword,
      longTailKeywords: seed.longTailKeywords,
      publishedAt: seed.publishedAt,
      updatedAt: seed.updatedAt,
      readingTime: '0 min read',
      author: seed.author,
      reviewer: seed.reviewer,
      sections: [...sections, { heading: 'Extended Practical Playbook', paragraphs: extensionParagraphs }],
      faqs: createFaqs(seed),
      externalLinks: seed.externalLinks,
    }

    if (countPostWords(stagedPost) >= 2550) {
      break
    }

    const guidanceTopic = LONG_FORM_TOPICS[(pass + 3) % LONG_FORM_TOPICS.length]
    extensionParagraphs.push(
      `Extended note ${pass}: In competitive search landscapes, pages targeting ${seed.primaryKeyword} perform better when every paragraph resolves a real question with a clear action path. This includes examples, process checkpoints, and plain-language cautions so beginners and returning users both understand the same workflow. This long-form structure supports indexation breadth, improves dwell quality, and adds stable semantic depth around ${guidanceTopic} without disrupting pages that are already performing on brand terms.`,
    )

    pass += 1
  }

  sections.push({
    heading: 'Extended Practical Playbook',
    paragraphs: extensionParagraphs,
  })

  return sections
}

export const BLOG_POSTS: BlogPost[] = BLOG_POST_SEEDS.map((seed) => {
  const sections = buildSections(seed, BLOG_POST_SEEDS)
  const faqs = createFaqs(seed)

  const basePost: BlogPost = {
    slug: seed.slug,
    title: seed.title,
    description: seed.description,
    primaryKeyword: seed.primaryKeyword,
    longTailKeywords: seed.longTailKeywords,
    publishedAt: seed.publishedAt,
    updatedAt: seed.updatedAt,
    readingTime: '0 min read',
    author: seed.author,
    reviewer: seed.reviewer,
    sections,
    faqs,
    externalLinks: seed.externalLinks,
  }

  const wordCount = countPostWords(basePost)
  const readingMinutes = Math.max(12, Math.round(wordCount / 220))

  return {
    ...basePost,
    readingTime: `${readingMinutes} min read`,
  }
})

export function getAllBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
