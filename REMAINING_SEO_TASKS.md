# Remaining SEO Tasks for Dhan7.xyz

**Status:** 13/20 fixes completed  
**Priority fixes remaining:** 7 tasks

---

## 🔴 HIGH PRIORITY (Complete These Next)

### FIX 7 — Blog Post JSON-LD Schema
**Time:** 20 minutes  
**Impact:** High — Improves rich snippets in search results

**What to do:**
1. Create `app/_components/BlogSchema.tsx` component (code provided in instructions)
2. Add to each blog post page in `app/blog/[slug]/page.tsx`
3. Include Article, BreadcrumbList, and FAQPage schemas

**Code location:** See FIX 7 in the original instructions

---

### FIX 8 — FAQ Page JSON-LD Schema
**Time:** 15 minutes  
**Impact:** High — Enables FAQ rich snippets

**What to do:**
1. Open `app/faq/page.tsx`
2. Add FAQPage JSON-LD schema with all Q&A pairs
3. Ensure schema matches visible content

**Code location:** See FIX 8 in the original instructions

---

### FIX 12 — Add Named Authors to Blog Posts
**Time:** 15 minutes  
**Impact:** High — Improves E-E-A-T signals

**What to do:**
1. Create `app/_components/AuthorBlock.tsx` component
2. Add author bio and dates to each blog post
3. Use consistent author names across posts

**Code location:** See FIX 12 in the original instructions

---

### FIX 14 — Create 1200×630px OG Social Image
**Time:** 20 minutes  
**Impact:** High — Better social media sharing

**What to do:**
1. Create new image: 1200px × 630px
2. Include Dhan 7 logo + text "Download Free APK — Dhan 7 App"
3. Save as `/public/dhan7-social.jpg`
4. Update all og:image references in metadata
5. Compress to under 300KB

**Current issue:** Using 512×512px logo instead of proper social image

---

## 🟡 MEDIUM PRIORITY

### FIX 13 — Unique Meta Keywords Per Page
**Time:** 20 minutes  
**Impact:** Medium — Minor SEO improvement

**Status:** Most pages already have unique keywords  
**What to do:** Review and optimize keywords for all pages

**Reference:** See FIX 13 in the original instructions for keyword lists

---

## 🟢 ONGOING TASKS

### FIX 19 — Blog Content Plan (60-Day Schedule)
**Time:** Ongoing  
**Impact:** Very High — Most impactful long-term SEO strategy

**Current status:** 10 blog posts  
**Target:** 20+ blog posts over 60 days  
**Frequency:** 2-3 new posts per week  
**Word count:** 700+ words each

**Blog post topics provided in instructions:**
- Week 1: Foundation posts (3 posts)
- Week 2: Game and strategy posts (3 posts)
- Week 3: Trust and legal posts (3 posts)
- Week 4: Game-specific posts (3 posts)
- Week 5: Transactional posts (3 posts)
- Week 6: Beginner and educational posts (3 posts)
- Week 7-8: Hindi-intent posts (4 posts)

**Each blog post must include:**
- [ ] Named human author with bio
- [ ] Published date + updated date
- [ ] At least one H2 with target keyword
- [ ] Internal link to /dhan77-apk-download in first 200 words
- [ ] Internal links to at least 2 other related pages
- [ ] Disclaimer block at bottom
- [ ] BlogSchema component (Article + BreadcrumbList + FAQPage)
- [ ] 700+ words of original content
- [ ] No markdown in meta description
- [ ] Unique meta description

---

## 📋 QUICK IMPLEMENTATION CHECKLIST

### To complete FIX 7 (Blog Schema):
```bash
# 1. Create the component
touch app/_components/BlogSchema.tsx

# 2. Copy the BlogSchema code from FIX 7 instructions

# 3. Import and use in blog post pages
# Add to app/blog/[slug]/page.tsx
```

### To complete FIX 8 (FAQ Schema):
```bash
# 1. Open FAQ page
# app/faq/page.tsx

# 2. Add FAQPage schema with all Q&A pairs
# See FIX 8 in instructions for exact code
```

### To complete FIX 12 (Author Block):
```bash
# 1. Create the component
touch app/_components/AuthorBlock.tsx

# 2. Copy the AuthorBlock code from FIX 12 instructions

# 3. Add to each blog post
```

### To complete FIX 14 (Social Image):
```bash
# 1. Create 1200×630px image with:
#    - Dhan 7 logo
#    - Text: "Download Free APK — Dhan 7 App"
#    - Brand colors (dark red + gold)

# 2. Save to public/dhan7-social.jpg

# 3. Update metadata in all pages:
#    images: [{ url: '/dhan7-social.jpg', width: 1200, height: 630 }]
```

---

## 🎯 PRIORITY ORDER

1. **FIX 14** — Social image (20 min) — Most visible impact
2. **FIX 8** — FAQ schema (15 min) — Quick win for rich snippets
3. **FIX 7** — Blog schema (20 min) — Improves all blog posts
4. **FIX 12** — Author blocks (15 min) — E-E-A-T improvement
5. **FIX 13** — Keywords review (20 min) — Minor optimization
6. **FIX 19** — Blog content (Ongoing) — Long-term growth

**Total time for priority fixes:** ~90 minutes

---

## 📊 EXPECTED IMPACT

### After completing remaining high-priority fixes:
- ✅ Rich snippets for FAQs in search results
- ✅ Better social media sharing with proper image
- ✅ Improved E-E-A-T signals with author attribution
- ✅ Enhanced blog post visibility with structured data

### After completing blog content plan:
- ✅ 20+ indexed pages targeting long-tail keywords
- ✅ Increased organic traffic from diverse search queries
- ✅ Better topical authority in gaming app niche
- ✅ More internal linking opportunities

---

## 🔗 USEFUL RESOURCES

### Testing Tools
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org/
- **Meta Tags Checker:** https://metatags.io/
- **Image Compressor:** https://tinyjpg.com/ or https://squoosh.app/

### Google Search Console
- **Submit sitemap:** https://search.google.com/search-console
- **Request indexing:** URL Inspection → Request Indexing
- **Monitor performance:** Performance → Queries

### Content Guidelines
- **Minimum word count:** 700 words per blog post
- **Meta description:** 140-155 characters, plain text only
- **Title tag:** Under 60 characters
- **H1:** One per page, includes primary keyword
- **Internal links:** At least 3 per page

---

## ✅ VERIFICATION AFTER COMPLETION

### Test Rich Snippets
```bash
# Test these URLs in Rich Results Test:
https://www.dhan7.xyz/faq
https://www.dhan7.xyz/blog/[any-slug]
```

### Test Social Sharing
```bash
# Test these URLs in Facebook Debugger:
https://developers.facebook.com/tools/debug/
https://www.dhan7.xyz/
```

### Test Schema Validity
```bash
# Validate JSON-LD:
https://validator.schema.org/
# Paste page source or URL
```

---

**Next action:** Start with FIX 14 (social image) for immediate visual impact
