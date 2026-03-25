# Final Consolidation & Estimation Matrix

**Date:** 2026-03-25
**Task:** #33 — Master Deliverable
**Research Completed:** 37 of 38 tasks (this is #38)
**Site:** visitsaltlake.com (Simpleview CMS + Simpleview CRM)

---

## Executive Summary

Visit Salt Lake's website is a **7,619-page tourism platform** built on Simpleview CMS + CRM, where **85.7% of content is CRM-generated** (4,629 listings + 1,898 events). The rebuild will be a **full custom platform replacement** — both CMS and CRM replaced with a custom-built system, giving the client complete independence from Simpleview and flexibility to build whatever they want in the future.

The first phase is a **1-to-1 rebuild** with exact feature parity. Enhancements come after. The site features 21+ template patterns, 70+ page builder widgets, 28+ third-party integrations, 7-persona personalization, A/B testing, and a sophisticated content management workflow with scheduled publishing and multi-user collaboration — all of which must be replicated in the custom platform.

**The critical path items:** Data extraction from Simpleview (API credentials needed), CRM backend feature audit (access needed to document hidden functionality), and third-party service ownership verification (Connect Pass, RootRez, Outdooractive — are these Simpleview-dependent?).

---

## 1. Template & Component Rebuild Scope

### Frontend Templates (21+ patterns)

| # | Template | Volume | Complexity | Effort (1-5) | Notes |
|---|---------|--------|-----------|-------------|-------|
| 1 | Homepage | 1 | High | 5 | 39 widgets, region map, event marquee, carousel, CrowdRiff UGC, personalization |
| 2 | Listing Detail (CRM) | 4,629 | High | 5 | Tabs (Overview/Features/Reviews/Facilities/Related Stories), Outdooractive map, Yelp/TripAdvisor, gallery |
| 3 | Event Detail (CRM) | 1,898 | High | 4 | Date handling, venue linking, map, gallery |
| 4 | Listing Browse | ~10 | High | 5 | Faceted filtering (type + location + keyword), sort, grid/list toggle, pagination, TripAdvisor cards |
| 5 | Events Browse | ~5 | High | 5 | Date quick-filters (today/week/weekend/month), category + location checkboxes, event cards |
| 6 | Blog Post Detail | 304 | Medium | 3 | Content + related posts + blog search + Page Builder |
| 7 | Places To Stay (+ booking) | 1 | Medium | 4 | Listing browse + RootRez booking widget |
| 8 | Compare Tool | 1 | Medium | 3 | Side-by-side listing comparison |
| 9 | Contact (CRM Form) | 1 | Medium | 3 | CRM form builder integration |
| 10 | Meetings Landing | 1 | Medium | 4 | Dedicated nav + branding + meeting planner guide CTA |
| 11 | Meetings Sub-pages | 45+ | Medium | 3 | Deep hierarchy, venue pages, convention calendar widget |
| 12 | Convention Microsites | 79 | Medium | 3 | Templated welcome pages with custom branding |
| 13 | Industry Sections (5 variants) | 5 | Medium | 4 | Travel Trade, Sports, Film, Speak Salt Lake — each with own nav/brand |
| 14 | Neighborhoods Hub | 1 | Low-Medium | 3 | Interactive region map |
| 15 | Blog Archives | 1 | Low | 2 | Date-based archive listing |
| 16 | Search Results | 1 | Medium | 3 | 8 content type facets, autocomplete, pagination |
| 17 | Geographic Hub | ~6 | Low | 2 | Area navigation pages |
| 18 | Content Pages (general) | ~100+ | Low | 2 | Flexible page builder |
| 19 | Staff Directory | 1 | Low | 2 | Staff list widget |
| 20 | Articles Detail | 156 | Low | 2 | Minimal PR template |
| 21 | Ski Resort/Tour Detail | ~22 | Low | 2 | Content + FAQ + embed |

**Template Effort Total: ~68 points**

### Shared Components (12+)

| Component | Complexity | Effort (1-5) | Notes |
|-----------|-----------|-------------|-------|
| Header (logo, weather, subscribe, search, nav) | High | 4 | Weather API, search autocomplete, subscribe CTA |
| Three-column Mega Menu | High | 5 | Desktop dropdown with sub-menus, responsive collapse |
| Mobile Navigation (hamburger) | Medium | 3 | Accordion sub-menus, "EXPLORE SALT LAKE" button |
| Secondary Navigation (B2B) | Medium | 2 | 5 B2B section links |
| Per-section Navigation (6 variants) | Medium | 3 | Meetings, Travel Trade, Sports, Film, Speak SL, Members |
| Footer (links + dynamic content) | Medium | 3 | Events feed, blog feed, passes, sponsor logos, social |
| Breadcrumbs | Low | 1 | With BreadcrumbList schema |
| Cookie Consent Banner | Low | 2 | Upgrade to GDPR-compliant |
| Social Sharing | Low | 1 | Expandable share links |
| Language Switcher | Low-Medium | 2 | 8 languages (GTranslate or proper i18n) |
| Print Stylesheet | Low | 1 | 160-line comprehensive print CSS |
| Responsive Framework | Medium | 3 | 15+ breakpoints, mobile-first |

**Component Effort Total: ~30 points**

---

## 2. Content Type & Migration Scope

### Content Migration Matrix

| Content Type | Records | Fields | Source | Migration Method | Effort (1-5) |
|-------------|---------|--------|--------|-----------------|-------------|
| CRM Listings | 4,629 | 25+ | CRM API | REST API + SOAP API | 5 |
| CRM Events | 1,898 | 15+ | CRM API | REST API | 4 |
| Blog Posts | 310 | 27 | CMS API | REST API (Blog endpoint) | 3 |
| PR Articles (156 + ~50 Ski City) | ~206 | 20-21 | CMS API | REST API | 2 |
| CMS Pages | ~157 | 27 + Page Builder | CMS API + scraping | API (nav) + scraping (content) | 4 |
| Collection Types (15) | 250-400+ | 3-14 each | CMS admin | Admin HTML scraping | 3 |
| Convention Microsites | 79 | Page Builder | CMS admin | Template + scraping | 3 |
| Landing Pages | 16 | Page Builder | CMS admin | Scraping | 2 |
| System Pages | 20 | Page Builder | CMS admin | Manual recreation | 2 |
| Hospitality Jobs | 76 | ~10+ | CRM | Same as listings | 1 |

**Content Migration Effort Total: ~29 points**

### Media Migration

| Asset Type | Count | Size | Method | Effort (1-5) |
|-----------|-------|------|--------|-------------|
| Images | 3,110 | ~5-10GB est. | CDN bulk download + metadata extraction | 4 |
| Documents | 590 | ~500MB est. | CDN bulk download | 2 |
| Videos | 136 | URLs only | URL reference migration | 1 |
| External Links | 68 | URLs only | URL list export | 1 |

**Media Migration Effort Total: ~8 points**

### Taxonomy Migration

| System | Items | Method | Effort (1-5) |
|--------|-------|--------|-------------|
| CMS Tags | 1,432 | Admin scraping + deduplication | 3 |
| Blog Tags | 280 | Admin scraping | 1 |
| Image Categories | 63 | Admin scraping + cleanup | 1 |
| Blog Categories | 23 | Admin scraping | 1 |
| All other taxonomies | ~48 | Admin scraping / manual | 1 |

**Taxonomy Effort Total: ~7 points**

### URL & Redirect Migration

| Item | Count | Method | Effort (1-5) |
|------|-------|--------|-------------|
| Active sitemap URLs | 7,619 | URL mapping + 301 redirects | 3 |
| CMS redirect rules | 9,156 | Admin scraping (367 pages) | 2 |
| Crawl-discovered redirects | 11,720 | From Screaming Frog export | 1 |

**URL Migration Effort Total: ~6 points**

---

## 3. Integration & Feature Rebuild Scope

### Third-Party Integrations (28+ services)

| Integration | Category | Effort (1-5) | Priority | Notes |
|-------------|----------|-------------|----------|-------|
| Simpleview CRM API | Core data | 5 | Critical | 85.7% of content depends on this |
| Outdooractive + Leaflet maps | Maps | 4 | Critical | Maps on all listing detail pages |
| Connect Pass / Booking cart | E-commerce | 4 | High | Persistent cart, experience passes |
| RootRez booking widget | Booking | 3 | High | Hotel booking on Places To Stay |
| CrowdRiff UGC gallery | Content | 3 | High | Social photo gallery on key pages |
| Google Analytics 4 (4 properties) | Analytics | 2 | High | May consolidate to 1-2 properties |
| Google Tag Manager (2 containers) | Tag mgmt | 2 | High | May consolidate to 1 container |
| Facebook Pixel (3 pixels) | Advertising | 1 | Medium | May consolidate |
| Vimeo video hosting | Media | 1 | Medium | Video player integration |
| GTranslate (8 languages) | i18n | 2 | Medium | Or replace with proper i18n |
| Yelp reviews | Reviews | 2 | Medium | Listing detail pages |
| TripAdvisor reviews | Reviews | 2 | Medium | Listing detail + cards |
| Threshold360 virtual tours | Content | 2 | Medium | Some listing pages |
| Act-On marketing automation | Marketing | 2 | Medium | Email/marketing platform |
| Sojern (2 tags) | Advertising | 1 | Low | Travel retargeting |
| Microsoft Clarity | Analytics | 1 | Low | Session recording |
| Mouseflow | Analytics | 1 | Low | Session recording (redundant with Clarity?) |
| Monsido (3 scripts) | Accessibility | 1 | Low | Monitoring |
| Google Ads + DoubleClick (5 tags) | Advertising | 1 | Medium | Re-implement via GTM |
| Pinterest, LinkedIn, Twitter | Advertising | 1 | Low | Social pixels |
| Adelphic, Storygize, Datafy | Advertising | 1 | Low | Evaluate ROI |
| Weather API | Content | 2 | Medium | Header weather widget |

**Integration Effort Total: ~44 points**

### Interactive Features

| Feature | Complexity | Effort (1-5) | Priority | Notes |
|---------|-----------|-------------|----------|-------|
| Faceted listing filtering | High | 5 | Critical | Keyword + type + location checkboxes with counts |
| Event date/category filtering | High | 5 | Critical | Quick date buttons + category + location |
| Trip Planner / Trip Builder | Medium | 4 | High | Save/view/remove/export, anonymous localStorage |
| Compare Tool | Medium | 3 | Medium | Add/remove items, side-by-side display |
| Quick View overlay | Low-Medium | 2 | Medium | Listing preview without full navigation |
| Photo gallery / lightbox | Low | 2 | High | GLightbox carousel with counter |
| Interactive maps | Medium | 3 | High | Outdooractive + Leaflet on detail pages |
| Social sharing | Low | 1 | Low | Expandable share panel |
| Content tabs (Things To Do) | Low | 1 | Low | Client-side tab switching |
| CrowdRiff UGC gallery | Medium | 3 | Medium | External embed |
| Site search (8 content types) | Medium | 4 | Critical | Autocomplete, faceted results, pagination |
| Booking widget (RootRez) | Medium | 3 | High | Date picker + guest count → external booking |
| Persistent cart (Connect Pass) | High | 4 | High | Cross-page e-commerce cart |

**Feature Effort Total: ~40 points**

---

## 4. CMS & Admin Capabilities

### Publishing & Workflow

| Feature | Effort (1-5) | Notes |
|---------|-------------|-------|
| Draft system with notes | 3 | Save drafts, add notes, preview |
| Scheduled publishing (start/end) | 2 | Publish Start and Publish End dates |
| Version history / audit trail | 3 | Who changed what, when, with rollback |
| Component-level versioning | 3 | Per-widget versions with forking |
| Multi-user collaboration | 2 | Multiple editors on same pages |
| 9 user roles with 166 permissions | 3 | Role-based access control |
| Content personalization (7 personas) | 4 | Dynamic Content with geo-targeting |
| A/B testing | 3 | Original/Variant panels with GTM tracking |

**CMS Features Effort Total: ~23 points**

---

## 5. Performance Baseline (Targets for Rebuild)

### Current Lighthouse Scores (2,281 pages scanned)

| Category | Current Avg | Target | Gap |
|----------|------------|--------|-----|
| Performance | 50 | 75+ | +25 |
| Accessibility | 86 | 95+ | +9 |
| Best Practices | 55 | 85+ | +30 |
| SEO | 92 | 95+ | +3 |

### Current Core Web Vitals (Mobile)

| Metric | Current Median | Target | Improvement Needed |
|--------|---------------|--------|-------------------|
| LCP | 28,452ms | <2,500ms | 91% reduction |
| FCP | 4,705ms | <1,800ms | 62% reduction |
| CLS | 0.120 | <0.1 | 17% reduction |
| TBT | 12ms | <200ms | Already excellent |

### Technical Baseline

| Metric | Current | Notes |
|--------|---------|-------|
| Server response time | 0.455s median | Fast SSR from Simpleview |
| Internal 404s | 5 | Excellent health |
| Redirect chains | 0 | Clean architecture |
| Orphan pages | 0 | Good internal linking |
| Crawl depth (73% within 2 clicks) | Good | Flat architecture |

---

## 6. Master Estimation Matrix

### Effort Scoring: 1 = trivial, 2 = small, 3 = medium, 4 = large, 5 = complex

| Category | Items | Effort Points | % of Total |
|----------|-------|--------------|-----------|
| **Templates (21+ patterns)** | 21 | 68 | 27% |
| **Shared Components** | 12 | 30 | 12% |
| **Integrations (28+ services)** | 22 | 44 | 17% |
| **Interactive Features** | 13 | 40 | 16% |
| **Content Migration** | 10 | 29 | 11% |
| **CMS Features (workflow, roles, personalization)** | 8 | 23 | 9% |
| **Media Migration** | 4 | 8 | 3% |
| **Taxonomy Migration** | 5 | 7 | 3% |
| **URL/Redirect Migration** | 3 | 6 | 2% |
| **Total** | **98 items** | **255 points** | **100%** |

### Effort Distribution Visualization

```
Templates          ████████████████████████████  27%
Integrations       █████████████████             17%
Interactive Feat.  ████████████████              16%
Components         ████████████                  12%
Content Migration  ███████████                   11%
CMS Features       █████████                      9%
Media Migration    ███                            3%
Taxonomy           ███                            3%
URL/Redirects      ██                             2%
```

### Top 10 Highest-Effort Items

| # | Item | Category | Effort | Why |
|---|------|----------|--------|-----|
| 1 | CRM API Integration | Integration | 5 | 85.7% of site content depends on it |
| 2 | Listing Detail Template | Template | 5 | 4,629 pages, tabs, maps, reviews, gallery |
| 3 | Listing Browse + Filtering | Template+Feature | 5+5 | Complex faceted filtering with counts |
| 4 | Events Browse + Filtering | Template+Feature | 5+5 | Date filters + category + location |
| 5 | Homepage | Template | 5 | Most complex page — 39 widgets, personalization |
| 6 | Three-column Mega Menu | Component | 5 | Complex responsive navigation |
| 7 | CRM Listing Migration | Migration | 5 | 4,629 records, 25+ fields, external integrations |
| 8 | Image Migration + Pipeline | Migration | 4 | 3,110 images, focal points, metadata, new CDN |
| 9 | Outdooractive Maps | Integration | 4 | Interactive maps on all listing pages |
| 10 | Connect Pass Cart | Integration+Feature | 4+4 | Persistent e-commerce cart across pages |

---

## 7. Critical Dependencies & Decisions

### Must Resolve Before Starting

| # | Item | Impact | Status |
|---|------|--------|--------|
| 1 | **CRM API credentials** | Blocks data extraction for 85.7% of site content | Request from Simpleview immediately |
| 2 | **CRM backend access** | Hidden CRM-side functionality may exist that we haven't documented | Request access for feature audit |
| 3 | **Simpleview contract review** | Ensure clean exit with full data portability rights | Client to review |
| 4 | **Connect Pass / RootRez ownership** | If Simpleview-dependent, booking/cart features need full rebuild | Verify with client |
| 5 | **Third-party API key ownership** | Outdooractive, Act-On, CrowdRiff — are these client-owned? | Verify with client |
| 6 | **Convention microsite triage** | 79 microsites — which are active and need migration? | Client to confirm |

### Technical Prerequisites

| # | Prerequisite | Needed For |
|---|-------------|-----------|
| 1 | CMS REST API + CRM SOAP API credentials | All data extraction |
| 2 | Simpleview CDN access confirmation | Image/document migration |
| 3 | RootRez booking API docs | Booking widget rebuild |
| 4 | Connect Pass API docs | Cart integration |
| 5 | CrowdRiff API key | UGC gallery integration |
| 6 | Outdooractive API key | Map integration (current: IJFHEFKA-EMWGKWRF-4OSSHXTT) |
| 7 | Act-On account access | Marketing automation reconnection |

---

## 8. Risk Summary

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **Hidden CRM functionality** — features we can't see without CRM backend access | High | High | Request CRM access for thorough feature audit before finalizing scope |
| **Page Builder content not API-accessible** — no API for widget compositions | Confirmed | High | Frontend scraping + CMS admin + manual template recreation |
| **Data extraction without API** — if credentials unavailable, must scrape everything | Medium | High | Request credentials early; frontend scraping + JSON-LD as fallback |
| **Third-party services Simpleview-dependent** — Connect Pass, RootRez may not work post-migration | Medium | High | Verify ownership of all service accounts and API keys with client |
| **Simpleview contract data export restrictions** | Unknown | Medium | Client reviews contract for data portability rights |
| **Focal point data loss** — image smart cropping coordinates embedded in CDN URLs | Medium | Medium | Parse xy coordinates from CDN URL patterns; map to new image pipeline |
| **Personalization rules not fully documented** — 7 personas with geo-targeting across 5 content types | Medium | Medium | Full personalization audit when CRM access granted |
| **9,156 redirects** — must be fully exported before Simpleview decommissioned | Low | High | Scripted admin scraping (367 paginated pages) |

---

## 9. What We Documented (37 Research Documents)

### Backend CMS Admin (Tasks 9, 24-30, 34)
- Full CMS navigation map (HOME, SITEMAP 10 sections, ASSETS 4 types, MODULES 6 modules, SETTINGS 9 sections)
- 9 user roles with 166 permissions each, 25+ users
- 15 Collection Types with full field documentation
- Nav Item (27 fields), Blog Post (27 fields), Articles (21 fields)
- Page Builder with 70+ widget types
- 7 Persona Tags + 7 Dynamic Content Profiles with geo-targeting
- Draft system with 134+ drafts per page, component versioning
- 9,156 redirects, 10 translation namespaces, 11 layouts
- 3,904 media assets (3,110 images, 590 docs, 136 videos, 68 links)
- Partner portal (CRM-managed), Auto Responder (JS error)

### Discovery Tasks (Tasks 35-38)
- 5 Industry/B2B sections with own navigation and branding
- Meetings microsite (~45 pages, not 11)
- 79 convention microsites with standard template
- Trails = CRM Listings, not separate content type

### Frontend Analysis (Tasks 1, 3-8, 10, 13-17, 19-23)
- 7,619 URLs in sitemap (85.7% CRM-powered)
- jQuery 2.2.4, Vue.js, RequireJS, Plyr, Glide.js, 20+ Simpleview libraries
- 28+ third-party services across 31 external domains
- JSON-LD on listings, events, blog; OG tags on all pages; no RSS feeds
- Simpleview built-in search with 8 content type filters
- GTranslate client-side, 8 languages, no human translations
- 21+ template patterns from 23 sampled pages
- 6 navigation components, 8 distinct nav contexts
- All forms powered by Simpleview CRM Form Builder (6 forms)
- 15 interactive features (trip planner, compare, booking, maps, etc.)
- 15+ CSS breakpoints, mobile hamburger nav, responsive across all templates
- Seasonal content rotation (winter/spring/summer/fall), A/B testing active
- Print stylesheet (160 lines), downloadable PDFs, no print buttons

### Performance & SEO (Tasks 2, 11, 12, 18)
- 8,818 URLs crawled by Screaming Frog (81.3% success, 5 internal 404s)
- 2,281 pages Lighthouse audited (Performance 50, Accessibility 86, SEO 92)
- LCP 28.4s (poor), FCP 4.7s (poor), CLS 0.12 (needs improvement), TBT 12ms (good)
- 0 redirect chains, 0 orphan pages, 0.455s median response time

### Synthesis (Tasks 31, 32)
- Migration path assessment per content type (API, scraping, manual, hybrid)
- Data volume quantification (16,775 total URL scope, 3,904 media assets, 1,846 taxonomy items)
- CRM keep-vs-replace decision framework

---

## 10. Key Numbers at a Glance

| Metric | Count |
|--------|-------|
| Total URLs in sitemap | 7,619 |
| CRM-powered URLs | 6,527 (85.7%) |
| CMS-managed pages | ~1,092 (14.3%) |
| CRM Listings | 4,629 |
| CRM Events | 1,898 |
| Blog Posts | 310 |
| PR Articles | 206 |
| Convention Microsites | 79 |
| CMS Redirect Rules | 9,156 |
| Total URL Scope (pages + redirects) | 16,775 |
| Images in CMS | 3,110 |
| Documents | 590 |
| Videos | 136 |
| CMS Tags | 1,432 |
| Blog Tags | 280 |
| Total Taxonomy Items | ~1,846 |
| Backend Templates/Layouts | 11 |
| Frontend Template Patterns | 21+ |
| Page Builder Widget Types | 70+ |
| Shared Components | 12+ |
| Third-Party Services | 28+ |
| External Domains | 31 |
| Analytics/Marketing Tags | 25+ |
| CRM Forms | 6 |
| User Roles | 9 (166 permissions each) |
| CMS Users | 25+ |
| Languages | 8 (GTranslate) |
| Persona Tags | 7 |
| Navigation Contexts | 8 distinct |
| CSS Breakpoints | 15+ significant |
| Lighthouse Performance | 50 avg |
| Lighthouse Accessibility | 86 avg |
| Lighthouse SEO | 92 avg |

---

## 11. Research Artifacts Index

All outputs saved to `docs/marketing-site-research/`:

| Doc | Task | Title |
|-----|------|-------|
| `00-cms-admin-discovery.md` | #34 | CMS Admin Discovery & Full Navigation Map |
| `01-sitemap-crawl.md` | #1 | Sitemap Crawl & URL Tree Mapping |
| `02-screaming-frog-crawl.md` | #2 | Screaming Frog Site Crawl Execution |
| `05-tech-stack.md` | #3 | Tech Stack Identification & Fingerprinting |
| `06-third-party-integrations.md` | #4 | Third-Party Integrations Network Analysis |
| `07-media-assets.md` | #13 | Media & Asset Inventory |
| `08-url-patterns.md` | #14 | URL Patterns & Redirect Mapping |
| `09-feeds-structured-data.md` | #5 | RSS Feeds & Structured Data Inventory |
| `10-template-identification.md` | #15 | Template Identification & Visual Catalog |
| `11-content-taxonomy.md` | #19 | Content Taxonomy & Categorization Mapping |
| `11-lighthouse-audit.md` | #11 | Lighthouse Audit Site-Wide Performance Scan |
| `12-core-web-vitals.md` | #12 | Core Web Vitals Performance Baseline |
| `12-navigation-ia.md` | #16 | Navigation & Information Architecture |
| `14-site-search.md` | #6 | Internal Site Search Feature Analysis |
| `15-forms-inventory.md` | #17 | Forms & Lead Capture Inventory |
| `18-legal-compliance.md` | #7 | Legal & Compliance Pages Documentation |
| `18-screaming-frog-analysis.md` | #18 | Screaming Frog Data Analysis & Reporting |
| `19-multilingual.md` | #8 | Multilingual & i18n Assessment |
| `20-user-flows-interactive-features.md` | #20 | User Flows & Interactive Features Documentation |
| `21-responsive-mobile-behavior.md` | #21 | Responsive & Mobile Behavior Analysis |
| `22-seasonal-dynamic-content.md` | #22 | Seasonal & Dynamic Content Rules Identification |
| `23-cms-roles.md` | #9 | CMS User Roles & Permissions Documentation |
| `23-print-pdf-features.md` | #23 | Print/PDF Features Inventory |
| `21-cms-content-types.md` | #24 | CMS Content Types & Fields Documentation |
| `22-cms-taxonomy.md` | #25 | CMS Taxonomy & Backend Categorization |
| `24-cms-workflows.md` | #26 | CMS Workflows & Publishing Documentation |
| `25-cms-integrations.md` | #27 | CMS Integrations & API Connections |
| `26-cms-media-library.md` | #28 | CMS Media Library Documentation |
| `27-backend-features.md` | #30 | Backend Features Catch-All Inventory |
| `28-partner-portal.md` | #29 | Partner/Stakeholder Portal Assessment |
| `29-simpleview-data-export.md` | #10 | Simpleview Data Export & API Research |
| `31-migration-path-assessment.md` | #31 | Migration Path Assessment & Strategy |
| `32-data-volume-migration-scope.md` | #32 | Data Volume & Migration Scope Quantification |
| `33-final-consolidation-estimation-matrix.md` | #33 | This document |
| `36-meetings-microsite.md` | #36 | Meetings Microsite Deep-Dive |
| `37-convention-microsites.md` | #37 | Convention Microsites Template & Pattern |
| `38-industry-b2b-sections.md` | #35 | Industry/B2B Sections Documentation |
| `38-trails-feature.md` | #38 | Trails Content Type & Feature Documentation |

### Raw Data
- `raw/screaming-frog/full-crawl/` — 17 CSV exports from full Screaming Frog crawl
- `raw/unlighthouse-report/ci-result.csv` — 2,281-page Lighthouse audit results
- `raw/phase-XX/` — HTML captures, accessibility snapshots, JSON data per task
- `screenshots/phase-XX/` — Visual documentation per task

---

## Next Steps

1. **Client review** of this estimation matrix — confirm the 1-to-1 rebuild scope
2. **Request CRM backend access** — audit hidden functionality before finalizing scope
3. **Request API credentials** from Simpleview — needed for data extraction planning
4. **Verify third-party service ownership** — Connect Pass, RootRez, Outdooractive, Act-On, CrowdRiff
5. **Review Simpleview contract** for data export and exit terms
6. **Select tech stack** for custom platform build
7. **Begin detailed sprint planning** using this matrix as the scope baseline — 1-to-1 first, enhancements second
