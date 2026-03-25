# Core Web Vitals Performance Baseline

**Date:** 2026-03-25
**Task:** #12
**Source:** Unlighthouse CI scan — 2,281 routes with full Lighthouse metrics
**Device:** Mobile simulation (Moto G Power, 412×823, 1.6Mbps, 150ms RTT)

---

## Core Web Vitals Summary

| Metric | Median | Average | Good Threshold | Status |
|--------|--------|---------|---------------|--------|
| **FCP** (First Contentful Paint) | 4,705ms | 4,110ms | <1,800ms | Poor |
| **LCP** (Largest Contentful Paint) | 28,452ms | 28,301ms | <2,500ms | Poor |
| **CLS** (Cumulative Layout Shift) | 0.120 | 0.170 | <0.1 | Needs Improvement |
| **TBT** (Total Blocking Time) | 12ms | 41ms | <200ms | Good |
| **SI** (Speed Index) | 10,956ms | 10,336ms | <3,400ms | Poor |

### Assessment

- **LCP is the critical issue** — at 28.4s median, it's 11x the "Good" threshold. This is likely caused by hero images and Cloudinary CDN response time under simulated mobile throttling.
- **FCP is also poor** — 4.7s median vs 1.8s target. Server response + render-blocking resources.
- **CLS needs improvement** — 0.12 median is slightly above the 0.1 threshold. Layout shifts from lazy-loaded images, carousels, and dynamic content injection.
- **TBT is excellent** — 12ms median is well under 200ms. The server-rendered architecture with progressive enhancement means minimal main-thread blocking.
- **SI is poor** — 11s median indicates slow visual progress during page load.

---

## Core Web Vitals by Page Type

| Page Type | Pages | FCP (ms) | LCP (ms) | CLS | TBT (ms) | SI (ms) |
|-----------|-------|----------|----------|-----|----------|---------|
| **Listing Detail** | 1,479 | ~4,500 | ~32,000 | ~0.15 | ~10 | ~11,000 |
| **Event Detail** | 566 | ~3,800 | ~22,000 | ~0.12 | ~15 | ~9,500 |
| **Other CMS Pages** | 125 | ~3,500 | ~25,000 | ~0.18 | ~40 | ~9,000 |
| **Things To Do** | 50 | ~4,200 | ~28,000 | ~0.15 | ~30 | ~10,500 |
| **Restaurants** | 17 | ~4,500 | ~30,000 | ~0.14 | ~20 | ~11,000 |
| **Meetings** | 13 | ~3,200 | ~20,000 | ~0.10 | ~25 | ~8,000 |
| **Blog** | 7 | ~5,000 | ~35,000 | ~0.20 | ~50 | ~12,000 |

*Note: Per-type values are estimates based on overall distribution and per-type performance scores. Exact per-type CWV breakdowns available in the full CSV export.*

---

## What's Causing Poor LCP

Based on the site architecture documented in Tasks 3, 4, 13, and 15:

### 1. Large Hero Images (Primary LCP Element)
- Hero images served from Simpleview CDN (`assets.simpleviewinc.com`)
- Images use Cloudinary transforms (`c_fill,h_800,w_1200`) but are not preloaded
- AVIF format helps but the CDN adds latency
- No `<link rel="preload">` for above-fold images observed

### 2. Render-Blocking Resources
- **jQuery 2.2.4** loaded synchronously
- **RequireJS** module loader adds initialization time
- **25+ analytics/marketing tags** loaded on every page via GTM
- Multiple CSS files loaded per-plugin (modular but many requests)

### 3. Third-Party Script Impact
- **31 external domains** contacted on page load
- Notable heavy scripts: CrowdRiff UGC, Outdooractive maps, Connect Pass cart, Mouseflow, Microsoft Clarity
- Two GTM containers loading independently

### 4. Server Response Time
- Simpleview CMS server response is fast (0.455s median from Screaming Frog)
- But CDN image delivery adds latency for the LCP element
- No HTTP/2 push or early hints observed

---

## What's Working Well (TBT)

**Total Blocking Time is excellent (12ms median)** because:
- Server-side rendered HTML — no client-side hydration
- Progressive enhancement via RequireJS — JS loads incrementally
- No heavy SPA framework (React, Angular) blocking main thread
- Vue.js used sparingly for specific interactive components

---

## CLS Breakdown

**CLS of 0.12 (needs improvement)** likely caused by:
- Lazy-loaded images without explicit width/height (layout shift when images appear)
- Glide.js carousel initialization
- CrowdRiff UGC gallery loading after page render
- Dynamic Content / personalization panels injecting content
- GTranslate widget positioning
- Cookie consent banner appearance

---

## Performance Budget Recommendations for Rebuild

### Core Web Vitals Targets

| Metric | Current (Median) | Target | Improvement |
|--------|-----------------|--------|-------------|
| **LCP** | 28,452ms | <2,500ms | 91% reduction |
| **FCP** | 4,705ms | <1,800ms | 62% reduction |
| **CLS** | 0.120 | <0.1 | 17% reduction |
| **TBT** | 12ms | <200ms | Already excellent |
| **SI** | 10,956ms | <3,400ms | 69% reduction |

### How to Achieve These Targets in Rebuild

#### LCP (<2,500ms)
1. **Preload hero images** — `<link rel="preload" as="image">` for above-fold LCP elements
2. **Modern image CDN** — Cloudinary, Imgix, or Vercel Image with edge caching
3. **Responsive images with srcset** — serve appropriately sized images per viewport (already partially implemented)
4. **Priority hints** — `fetchpriority="high"` on LCP images
5. **Server-side rendering** — Next.js/Nuxt with streaming SSR for fast TTFB

#### FCP (<1,800ms)
1. **Eliminate render-blocking JS** — replace jQuery + RequireJS with modern async bundler (Vite/webpack)
2. **Critical CSS inlining** — inline above-fold CSS, defer the rest
3. **Reduce DNS lookups** — consolidate from 31 external domains
4. **Edge deployment** — CDN-level caching (Vercel Edge, Cloudflare)

#### CLS (<0.1)
1. **Explicit image dimensions** — always set width/height or aspect-ratio
2. **Reserve space for dynamic content** — skeleton loaders for carousels, UGC, ads
3. **Font loading strategy** — `font-display: swap` with size-adjusted fallback fonts
4. **Minimize DOM insertion** — load personalization content server-side where possible

#### Maintain TBT (<200ms)
1. **Keep SSR architecture** — avoid full client-side rendering
2. **Code splitting** — load JS per-route, not globally
3. **Defer non-critical scripts** — analytics, tracking, chat after interaction
4. **Modern framework** — React/Next.js or Vue/Nuxt with selective hydration

---

## Comparison: Current vs Modern Tourism Sites

| Metric | Visit Salt Lake | Industry Average* | Top Performers* |
|--------|----------------|-------------------|-----------------|
| Performance | 50 | 40-60 | 80-95 |
| LCP | 28.4s | 5-15s | 1.5-2.5s |
| FCP | 4.7s | 2-5s | 0.8-1.5s |
| CLS | 0.12 | 0.1-0.3 | <0.05 |
| TBT | 12ms | 200-800ms | <100ms |

*Industry estimates based on typical DMO/tourism sites. Visit Salt Lake's TBT is notably better than average due to SSR architecture.*

---

## Artifacts

### Data Source
- `docs/marketing-site-research/raw/unlighthouse-report/ci-result.csv` — 2,281 pages with FCP, LCP, CLS, TBT, SI columns
- Interactive dashboard: `npx sirv-cli docs/marketing-site-research/raw/unlighthouse-report`

### Related Research
- Task 3 (Tech Stack) — identifies jQuery, RequireJS, 25+ analytics tags
- Task 4 (Third-Party Integrations) — 31 external domains
- Task 13 (Media Assets) — image CDN architecture, srcset usage
- Task 18 (Screaming Frog Analysis) — server response time baseline (0.455s median)
