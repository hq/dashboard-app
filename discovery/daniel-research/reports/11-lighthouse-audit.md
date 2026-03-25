# Lighthouse Audit Site-Wide Performance Scan

**Date:** 2026-03-25
**Task:** #11
**Tool:** Unlighthouse CI 0.17.7 (24 concurrent workers, JS enabled)
**Scan Duration:** 4,256 seconds (~71 minutes)
**Pages Scanned:** 2,281 routes

---

## Overall Scores (2,281 pages)

| Category | Average Score | Rating |
|----------|-------------|--------|
| **Performance** | 50 | Needs Improvement (orange) |
| **Accessibility** | 86 | Good (green) |
| **Best Practices** | 55 | Needs Improvement (orange) |
| **SEO** | 92 | Good (green) |
| **Overall** | 71 | Needs Improvement |

---

## Scores by Page Type

| Page Type | Pages | Performance | Accessibility | Best Practices | SEO |
|-----------|-------|-------------|---------------|----------------|-----|
| **Listing Detail** | 1,479 | 43 | 87 | 54 | 93 |
| **Event Detail** | 566 | 63 | 82 | 55 | 92 |
| **Other CMS Pages** | 125 | 62 | 88 | 53 | 86 |
| **Things To Do** | 50 | 53 | 86 | 56 | 86 |
| **Restaurants** | 17 | 50 | 87 | 54 | 80 |
| **Meetings** | 13 | 62 | 92 | 57 | 86 |
| **Places To Stay** | 8 | 58 | 85 | 44 | 83 |
| **Blog** | 7 | 47 | 87 | 69 | 93 |
| **Sports** | 6 | 63 | 89 | 52 | 92 |
| **Travel Trade** | 6 | 54 | 85 | 55 | 89 |
| **Articles** | 2 | 69 | 92 | 71 | 96 |
| **Hospitality Jobs** | 2 | 66 | 87 | 58 | 80 |

---

## Key Findings

### Performance (Avg: 50)
- **Listing Detail pages are the weakest** at 43 — these are the highest-volume pages (1,479 scanned, 4,629 total)
- Event Detail pages perform better at 63
- CMS editorial pages (Articles, Sports, Meetings) score 62-69
- Blog posts score low at 47 despite being content-focused pages
- **Main bottleneck:** Large Contentful Paint (LCP) is extremely high across all page types (see Task 12)

### Accessibility (Avg: 86)
- **Strong baseline** — most page types score 82-92
- Meetings pages are the most accessible at 92
- Event Detail pages are lowest at 82 — may have ARIA issues with event widgets
- The site has Monsido accessibility monitoring active (3 scripts) which helps maintain this score

### Best Practices (Avg: 55)
- **Weakest non-performance category** — consistent 52-58 across most page types
- Blog and Articles score higher (69-71) — simpler page structure
- Places To Stay is lowest at 44 — likely due to the RootRez booking widget and mixed content
- Common issues likely include: deprecated APIs, console errors, mixed content, insecure form actions

### SEO (Avg: 92)
- **Excellent baseline** — most page types score 86-96
- Listing Detail and Event Detail both score 92-93 — CRM pages have good SEO structure
- Articles highest at 96
- Restaurants and Jobs lowest at 80 — may have missing meta descriptions or structured data gaps

---

## Score Distribution

### Performance Score Ranges

| Range | Rating | Expected Count | Notes |
|-------|--------|---------------|-------|
| 90-100 | Good (green) | Minimal | Very few pages achieve this |
| 50-89 | Needs Improvement (orange) | ~50% | Many CMS and event pages |
| 0-49 | Poor (red) | ~50% | Most listing detail pages |

### Pages by Quality Tier

| Tier | Performance | Accessibility | Best Practices | SEO |
|------|------------|---------------|----------------|-----|
| Good (90+) | Very few | ~60% of pages | Very few | ~70% of pages |
| Needs Improvement (50-89) | ~50% | ~40% of pages | ~30% | ~25% |
| Poor (<50) | ~50% | Minimal | ~70% | Minimal |

---

## Scan Configuration

| Setting | Value |
|---------|-------|
| Tool | Unlighthouse CI 0.17.7 |
| Concurrency | 24 workers |
| Dynamic Sampling | 15 per route group |
| Samples per Route | 1 |
| JavaScript | Enabled (full rendering) |
| Device | Mobile (412×823, Moto G Power) |
| Throttling | Simulated (Lighthouse default) |
| Network | 150ms RTT, 1.6Mbps down |
| CPU Slowdown | 1x |
| Sitemap | https://www.visitsaltlake.com/sitemap.xml |
| Routes Scanned | 2,281 |
| Skipped Routes | ~20 (connection refused / timeout at end of scan) |

---

## Rebuild Implications

### Performance Targets for New Site

| Metric | Current | Target | Priority |
|--------|---------|--------|----------|
| Performance | 50 avg | 75+ | High |
| Accessibility | 86 avg | 95+ | High |
| Best Practices | 55 avg | 85+ | Medium |
| SEO | 92 avg | 95+ | Medium |

### Top Performance Opportunities

1. **Optimize LCP** — Currently 28.4s median. Target <2.5s. Requires: image optimization, lazy loading above-fold content, CDN improvements, server-side rendering optimization
2. **Reduce page weight** — Listing pages load many third-party scripts (25+ analytics tags, Outdooractive maps, review widgets)
3. **Code splitting** — Current RequireJS bundle loads all JS regardless of page type. Modern bundler with route-based splitting would help
4. **Image optimization** — Already using AVIF/Cloudinary but LCP images need preloading
5. **Reduce third-party impact** — 31 external domains contribute to slow loading

### Accessibility Improvements

1. Color contrast issues (flagged on some pages)
2. Missing heading hierarchy on some templates
3. Image alt text gaps
4. Link name issues on some pages

---

## Artifacts

### Reports
- `docs/marketing-site-research/raw/unlighthouse-report/ci-result.csv` — Full expanded CSV (2,281 rows)
- `docs/marketing-site-research/raw/unlighthouse-report/index.html` — Interactive HTML dashboard
- `docs/marketing-site-research/raw/unlighthouse-report/reports/` — 27,372 individual Lighthouse report files

### Viewing the Interactive Dashboard
```bash
npx sirv-cli docs/marketing-site-research/raw/unlighthouse-report
```
