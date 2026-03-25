# Screaming Frog Data Analysis & Reporting

**Date:** 2026-03-25
**Task:** #18
**Source Data:** Task 2 — Screaming Frog crawl (17 CSV exports)

---

## Executive Summary

The Screaming Frog crawl discovered **8,818 URLs** (2,236 internal + 6,582 external) with an **81.3% success rate**. The site is in excellent technical health: only 5 internal 404s, 0 redirect chains, 0 redirect loops, and 0 orphan pages. Key areas for the rebuild: 510 pages missing meta descriptions (26%), 948 pages missing H1 tags (48%), and 68% of pages have thin content (<300 words) — expected for CRM-generated listing/event pages with structured data rather than prose.

---

## 1. Response Code Distribution

### All URLs (8,818 total)

| Status Code | Count | % | Description |
|------------|-------|---|-------------|
| **200** | 7,162 | 81.2% | Success |
| **0** | 915 | 10.4% | No response (blocked, timeout, or DNS failure — mostly external) |
| **301** | 499 | 5.7% | Permanent redirect |
| **403** | 64 | 0.7% | Forbidden (external sites blocking crawlers) |
| **404** | 59 | 0.7% | Not found |
| **302** | 47 | 0.5% | Temporary redirect |
| **308** | 19 | 0.2% | Permanent redirect (HTTP/2) |
| **401** | 18 | 0.2% | Unauthorized (external gated content) |
| **402** | 12 | 0.1% | Payment required |
| **410** | 10 | 0.1% | Gone (intentionally removed) |
| **303** | 4 | 0.05% | See Other |
| **202** | 3 | 0.03% | Accepted |
| **307** | 2 | 0.02% | Temporary redirect |
| **Other** | 2 | 0.02% | 409 Conflict, 400 Bad Request |

### Internal URLs Only

| Status | Count | Notes |
|--------|-------|-------|
| **2xx (Success)** | 2,001 | Core content pages |
| **3xx (Redirect)** | 156 | Trailing slash enforcement, path normalization |
| **4xx (Client Error)** | 5 | Very few broken internal links |
| **5xx (Server Error)** | 0 | No server errors |
| **Redirect Chains** | 0 | Clean — no chained redirects |
| **Redirect Loops** | 0 | Clean — no loops |

### Key Finding
The site has excellent internal URL health. Only **5 internal 404s** out of 2,236 internal URLs (0.2%). External 404s (59 total) are from third-party sites that have changed or removed content — a cleanup opportunity during the rebuild.

---

## 2. Content Analysis

### Page Count by Content Type (Internal)

| Type | Count | % |
|------|-------|---|
| HTML | 1,960 | 87.7% |
| CSS | 115 | 5.1% |
| Other | 144 | 6.4% |
| Images | 10 | 0.4% |
| JavaScript | 7 | 0.3% |

### Word Count Distribution (1,960 HTML pages)

| Metric | Value |
|--------|-------|
| Minimum | 0 words |
| Maximum | 4,702 words |
| Median | 98 words |
| Average | 351 words |
| **Thin content (<300 words)** | **1,341 pages (68%)** |

**Why 68% thin content?** This is expected and not concerning:
- Most pages are **CRM-generated listing/event detail pages** with structured data (address, phone, hours, categories) rather than editorial prose
- Listing browse pages have minimal unique text — the content is in the listing cards
- Convention microsites (79 pages) follow a template with limited text
- The word count measures visible text, not the value of the structured data

### Pages with Substantial Content (>500 words)
- Blog posts (310 pages) — editorial content with 500-4,700+ words
- Things To Do sub-pages — descriptive content
- Meetings section pages — detailed venue/service information
- About Us pages — organizational information

---

## 3. Technical SEO Analysis

### Page Titles (1,960 HTML pages)

| Metric | Count | % |
|--------|-------|---|
| **Has title** | 1,801 | 91.9% |
| **Missing title** | 159 | 8.1% |
| **Duplicate titles** | 57 unique titles used 2+ times | — |

**Top duplicate titles:**
| Count | Title |
|-------|-------|
| 6x | "Salt Lake City, Utah Tourism \| Visit Salt Lake" |
| 5x | "Stories" |
| 3x | Blog category pages ("Posts in [Category] \| The Salt Lake Scene") — 8 categories |
| 3x | "Posts in Press Releases \| Articles" |
| 2x | "Thank You", "Contact Us", "RSVP" |

**Assessment:** Most duplicates are blog archive pagination pages — expected behavior. The 6x "Salt Lake City, Utah Tourism" duplicate likely comes from microsites or landing pages sharing a generic title.

### Meta Descriptions (1,960 HTML pages)

| Metric | Count | % |
|--------|-------|---|
| **Has meta description** | 1,450 | 74.0% |
| **Missing meta description** | 510 | 26.0% |

**Assessment:** 26% missing meta descriptions. Many are CRM-generated pages that may rely on auto-generated snippets. The rebuild should implement programmatic meta descriptions for listing/event pages using structured fields (e.g., "{Name} — a {Category} in {Area}, Salt Lake City").

### H1 Tags (1,960 HTML pages)

| Metric | Count | % |
|--------|-------|---|
| **Has H1** | 1,012 | 51.6% |
| **Missing H1** | 948 | 48.4% |

**Assessment:** Nearly half of pages are missing H1 tags. This is likely due to CRM-powered pages rendering the title in a different heading level or using the page title without an explicit H1 tag. The rebuild should ensure every page template has a proper H1.

### Canonical Tags
- 1,802 records exported
- Self-referencing canonicals present on all tested pages (confirmed in Task 5)
- No canonical conflicts detected during crawl

### Directives
- 2,002 records exported
- Internal indexable pages: 1,922 (86% of internal HTML)
- Internal non-indexable: 314 (CSS, JS, other assets + any noindex pages)

---

## 4. Crawl Depth Distribution

| Depth | Pages | % | Examples |
|-------|-------|---|---------|
| **0** | 1 | 0.05% | Homepage |
| **1** | 426 | 21.7% | Main nav sections (Things To Do, Restaurants, etc.) |
| **2** | 1,013 | 51.7% | Sub-pages, listing browse results, blog posts |
| **3** | 362 | 18.5% | Deeper sub-pages, listing details from browse |
| **4** | 92 | 4.7% | Deep content (meetings sub-pages, nested categories) |
| **5** | 47 | 2.4% | Very deep content |
| **6** | 12 | 0.6% | Deepest non-edge pages |
| **7** | 7 | 0.4% | Deepest crawled pages |

**Assessment:** Good crawl depth distribution. 73.4% of pages are within 2 clicks of the homepage. The deepest pages (depth 6-7) are likely nested meeting venue sub-pages or deep Things To Do hierarchies. The rebuild should maintain this flat-ish architecture.

---

## 5. Response Time Analysis

| Metric | Value |
|--------|-------|
| Minimum | 0.014s |
| Maximum | 2.055s |
| Median | 0.455s |
| Average | 0.414s |
| **Slow (>1s)** | **48 pages (2%)** |

**Assessment:** Excellent server response times. Median 0.455s is fast for a server-rendered CMS site. Only 2% of pages exceed 1 second. The Simpleview CMS delivers content efficiently.

---

## 6. Redirect Analysis

### Volume
- **11,720 redirect records** in redirects.csv
- **499 URLs returned 301** status
- **47 URLs returned 302** status
- **19 URLs returned 308** status

### Internal Redirects (156)
- Primarily trailing slash enforcement (`/about-us` → `/about-us/`)
- Some path normalization redirects
- **0 redirect chains** — all redirects resolve in one hop
- **0 redirect loops** — no circular redirects

### Key Finding
Combined with the 9,156 CMS-managed redirects (Task 27), the total redirect scope for migration is substantial. However, the redirect architecture is clean — no chains or loops to untangle.

---

## 7. External Link Analysis

### Volume
- **6,582 external URLs** found
- **4,110 external images** (62.4%) — confirms Simpleview CDN hosting
- **1,382 external HTML pages** (21.0%) — links to third-party sites

### External Link Health
| Status | Count | Notes |
|--------|-------|-------|
| Success (2xx) | 5,164 | Working external links |
| Redirect (3xx) | 415 | External sites have moved URLs |
| Client Error (4xx) | 161 | Broken external links |
| Server Error (5xx) | 1 | External server issue |
| No Response (0) | 841 | Blocked by external site, timeout, or DNS |

**161 broken external links** represent a cleanup opportunity. These are links to third-party sites (restaurants, attractions, partner sites) that have changed URLs or gone offline.

---

## 8. Image Analysis

### Volume
- **4,120 images** cataloged in images_all.csv
- **4,110 external images** (99.8%) — hosted on Simpleview CDN
- **10 internal images** (0.2%) — site logo and icons only

### Key Finding
This confirms the architecture documented in Tasks 13 and 28: virtually all images are hosted externally on `assets.simpleviewinc.com`. The site's own server hosts only the logo and a few UI assets. Image migration requires downloading from the CDN, not from the CMS.

---

## 9. Structured Data Coverage

- **1,802 pages** with structured data analysis
- JSON-LD confirmed on listings (LocalBusiness + activity type), events (ExhibitionEvent), and blog (BlogPosting) — consistent with Task 5 findings
- Homepage lacks JSON-LD (confirmed)

---

## 10. Orphan Pages

**0 orphan pages found.** Every page discovered in the crawl is reachable via at least one internal link. This indicates a well-maintained internal linking structure.

---

## Rebuild Implications

### SEO Migration Priorities

| Issue | Count | Priority | Action |
|-------|-------|----------|--------|
| Missing meta descriptions | 510 (26%) | High | Implement programmatic meta descriptions for all templates |
| Missing H1 tags | 948 (48%) | High | Ensure every template has proper H1 |
| Missing page titles | 159 (8%) | High | Every page needs a unique title |
| Duplicate titles | 57 | Medium | Fix pagination/archive page titles |
| Broken external links | 161 | Low | Clean up during content migration |
| Thin content pages | 1,341 (68%) | Low | Expected for CRM pages — not a problem to fix |

### Architecture to Preserve
- Flat crawl depth (73% within 2 clicks)
- Clean redirect implementation (no chains/loops)
- Fast response times (median 0.455s)
- Zero orphan pages
- Self-referencing canonicals on all pages

### Data Available for Migration
The Screaming Frog export provides a complete baseline of:
- Every internal URL with its title, meta, H1, canonical, and word count
- Every external link the site points to
- Every redirect path
- Every image URL
- Response time benchmarks per page

---

## Artifacts

All source data in: `docs/marketing-site-research/raw/screaming-frog/full-crawl/`
- 17 CSV exports covering all crawl data
- See Task 2 documentation for complete file listing
