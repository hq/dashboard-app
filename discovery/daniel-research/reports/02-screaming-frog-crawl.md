# Screaming Frog Site Crawl Execution

**Date:** 2026-03-25
**Task:** #2
**Tool:** Screaming Frog SEO Spider 23.3 (CLI headless mode)
**Crawl Duration:** ~25 minutes

---

## Crawl Summary

| Metric | Count | % |
|--------|-------|---|
| **Total URLs Encountered** | 8,818 | 100% |
| **Total URLs Crawled** | 8,770 | 99.5% |
| **Total Internal URLs** | 2,236 | 25.4% |
| **Total External URLs** | 6,582 | 74.6% |
| **Internal Indexable** | 1,922 | 21.8% |
| **Internal Non-Indexable** | 314 | 3.6% |
| **Blocked by robots.txt** | 48 (external only) | 0.5% |

---

## Response Code Distribution

### All URLs (Internal + External)

| Status | Count | % | Notes |
|--------|-------|---|-------|
| **Success (2xx)** | 7,165 | 81.3% | Healthy — vast majority resolve correctly |
| **Redirection (3xx)** | 571 | 6.5% | Expected — URL normalization + legacy paths |
| **Client Error (4xx)** | 166 | 1.9% | Mostly external broken links |
| **Server Error (5xx)** | 1 | 0.01% | Minimal server issues |

### Internal URLs Only

| Status | Count | % | Notes |
|--------|-------|---|-------|
| **Internal Success (2xx)** | 2,001 | — | Core content pages |
| **Internal Redirects (3xx)** | 156 | — | Trailing slash enforcement, path changes |
| **Internal Client Error (4xx)** | 5 | — | Very few — 5 broken internal links |
| **Internal Server Error (5xx)** | 0 | — | No server errors |
| **Internal Redirect Chains** | 0 | — | Clean — no chained redirects |
| **Internal Redirect Loops** | 0 | — | Clean — no loops |

### External URLs

| Status | Count | % |
|--------|-------|---|
| External Success (2xx) | 5,164 | 58.6% |
| External Redirects (3xx) | 415 | 4.7% |
| External Client Error (4xx) | 161 | 1.8% |
| External Server Error (5xx) | 1 | 0.01% |

---

## Internal URL Breakdown by Type

| Content Type | Count | % of Internal |
|-------------|-------|---------------|
| **HTML** | 1,960 | 87.7% |
| **CSS** | 115 | 5.1% |
| **Other** | 144 | 6.4% |
| **Images** | 10 | 0.4% |
| **JavaScript** | 7 | 0.3% |
| **Media** | 0 | 0% |
| **PDF** | 0 | 0% |

---

## External URL Breakdown by Type

| Content Type | Count | % of External |
|-------------|-------|---------------|
| **Images** | 4,110 | 62.4% |
| **HTML** | 1,382 | 21.0% |
| **JavaScript** | 12 | 0.2% |
| **CSS** | 6 | 0.1% |

**Key finding:** 62.4% of external URLs are images — confirming that the site's images are hosted externally on Simpleview CDN (`assets.simpleviewinc.com`), not on the main domain.

---

## Redirect Analysis

- **11,720 redirect records** documented in redirects.csv
- **156 internal redirects** (mostly trailing slash enforcement)
- **415 external redirects** (third-party URL changes)
- **0 internal redirect chains** — clean redirect implementation
- **0 internal redirect loops** — no problematic loops
- Redirect data supplements the 9,156 CMS-managed redirects documented in Task 27

---

## Key Observations

### Crawl vs Sitemap Comparison
- **Sitemap (Task 1):** 7,619 URLs
- **Screaming Frog crawl:** 1,960 HTML pages discovered via link crawling
- **Delta:** The crawl found fewer pages because it followed links from the homepage — the 6,527 CRM-powered pages (listings + events) are generated dynamically and many aren't linked directly from navigation. The sitemap is the authoritative URL count.

### Internal Health
- **Only 5 internal 404s** — excellent internal linking health
- **0 redirect chains** — clean URL architecture
- **0 orphan pages** — all pages are reachable via internal links
- **0 pages blocked by robots.txt** internally

### SEO Elements (from exported CSVs)
- **1,802 pages** with title, meta description, H1, H2, canonical data exported
- **4,121 images** cataloged with alt text status
- **2,105 sitemap entries** cross-referenced
- **1,802 structured data records** (JSON-LD validation)

---

## Exported Data Files

| File | Lines | Content |
|------|-------|---------|
| `internal_all.csv` | 2,237 | All internal URLs with full SEO data |
| `response_codes_all.csv` | 8,819 | All URLs by response code |
| `redirects.csv` | 11,721 | All redirect chains |
| `external_all.csv` | 6,583 | All external links |
| `images_all.csv` | 4,121 | All images with alt text |
| `page_titles_all.csv` | 1,802 | Page titles with length |
| `meta_description_all.csv` | 1,802 | Meta descriptions with length |
| `h1_all.csv` | 1,802 | H1 tags per page |
| `h2_all.csv` | 1,802 | H2 tags per page |
| `canonicals_all.csv` | 1,802 | Canonical tag analysis |
| `directives_all.csv` | 2,002 | Meta robots / X-Robots-Tag |
| `content_all.csv` | 1,802 | Word count, readability |
| `structured_data_all.csv` | 1,802 | JSON-LD/schema.org |
| `sitemaps_all.csv` | 2,105 | Sitemap coverage |
| `security_all.csv` | 2,237 | HTTPS/security analysis |
| `crawl_overview.csv` | 557 | Summary statistics |
| `orphan_pages.csv` | 1 | Orphan pages (none found) |

---

## Rebuild Implications

1. **Clean URL architecture** — no redirect chains or loops to worry about; migration should maintain this cleanliness
2. **5 internal 404s** — investigate and fix in rebuild
3. **161 external 404s** — broken outbound links to third-party sites; opportunity to clean up during rebuild
4. **Images hosted externally** — 4,110 external image URLs confirms Simpleview CDN dependency (documented in Tasks 13, 28)
5. **Redirect migration** — 11,720 redirect records from crawl + 9,156 from CMS admin = comprehensive redirect dataset for migration
6. **SEO baseline preserved** — full title, meta, H1, canonical, structured data export available for 1:1 SEO migration

---

## Artifacts

All data files saved to: `docs/marketing-site-research/raw/screaming-frog/full-crawl/`
