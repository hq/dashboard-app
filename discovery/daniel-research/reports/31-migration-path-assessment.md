# Migration Path Assessment & Strategy

**Date:** 2026-03-24
**Task:** #31
**Sources:** Tasks 10 (Simpleview Data Export), 24 (Content Types & Fields), 25 (Taxonomy), 27 (Integrations & API), 32 (Data Volume), and all supporting research

---

## Executive Summary

The Visit Salt Lake website will be fully rebuilt on a custom platform, replacing both Simpleview CMS and CRM. This is a **complete migration** — all content, media, data, and functionality must be extracted from Simpleview and rebuilt custom. Nothing will remain on Simpleview after migration.

**Data extraction is the biggest unknown.** We don't yet know what level of access Simpleview will provide — API credentials, CSV exports, direct database access, or nothing at all. The extraction approach will be defined once we understand what's available. Possible methods include API access, bulk CSV exports, CMS admin scraping, CDN downloads for media, and frontend scraping as a last resort. The data extraction is the single most critical path item, as 85.7% of the site's URLs are CRM-powered content that must be migrated.

---

## 1. Migration Path Options

### Available Extraction Methods

| Method | Description | Strengths | Weaknesses |
|--------|------------|-----------|------------|
| **CMS REST API (v2)** | Simpleview's documented REST API with endpoints for Listings, Events, Offers, Navigation, Blog | Structured data, scriptable, maintainable | Documentation "not complete or exhaustive"; Page Builder content not accessible |
| **CRM SOAP API** | Legacy SOAP API for CRM data (listings, contacts, events, members) | Deep CRM data access, field-level extraction | SOAP protocol, requires credentials, ColdFusion backend |
| **CDN URL Scraping** | Bulk download media from `assets.simpleviewinc.com` using known URL patterns | Predictable URLs, parallelizable | No metadata in URLs (need CMS for alt text, credits) |
| **CMS Admin HTML Scraping** | Extract data from CMS admin interface HTML (redirects, tags, collection types) | Gets data not in API | Fragile, requires authenticated session, pagination handling |
| **Frontend Web Scraping** | Crawl all 7,619 URLs and extract content from rendered HTML | Gets everything visible | Loses CMS structure, drafts, unpublished content |
| **Manual Export** | Copy-paste from CMS admin for low-volume data | Simple, accurate | Time-intensive, not scalable |
| **Manual Recreation** | Rebuild templates, layouts, and configurations in new platform | Full control over new architecture | Requires understanding of all 11 layouts and 70+ widgets |

---

## 2. Per-Content-Type Migration Assessment

### CRM Listings (4,629 items)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CMS REST API (Listings endpoint) + CRM SOAP API for extended fields |
| **Fallback** | Frontend scraping with JSON-LD extraction (LocalBusiness + activity schema) |
| **API Availability** | High — Listings is the best-documented API endpoint; both Legacy and Apex models available |
| **Data Completeness** | Medium-High — Core fields via API; some presentation-layer data (widget config, map embeds) may need scraping |
| **Risk** | Medium — Dual schema types (varies by listing category: Hotel, Restaurant, SportsActivityLocation) need mapping |
| **External Dependencies** | Outdooractive maps, Yelp reviews, TripAdvisor reviews, Threshold360 virtual tours, AllTrails links |
| **Effort** | High — Volume + field complexity + external integrations |
| **Prerequisites** | API credentials from Simpleview; confirm API tier/access level |

### CRM Events (1,898 items)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CMS REST API (Events endpoint) |
| **Fallback** | Frontend scraping with JSON-LD extraction (ExhibitionEvent schema) |
| **API Availability** | High — Events endpoint documented with field definitions and example data |
| **Data Completeness** | High — Events have simpler structure than listings |
| **Risk** | Low-Medium — Two ID formats (numeric + `conventions_` prefix) need handling |
| **External Dependencies** | Convention calendar widget (`events_layout_convention_calendar`) is CRM-powered |
| **Effort** | Medium — Simpler fields than listings but still high volume |
| **Prerequisites** | API credentials; confirm convention events accessible via same endpoint |

### Blog Posts (310 items)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CMS REST API (Blog Posts endpoint) |
| **Fallback** | Frontend scraping from `/blog/stories/post/` URLs |
| **API Availability** | High — Blog Posts endpoint documented |
| **Data Completeness** | Medium — API gets fields + metadata; Page Builder content (Edit Content) may not be API-accessible |
| **Risk** | Low — Well-structured content with standard fields |
| **Key Fields** | 27 fields including Personas, Custom event/listing filters, Categories (23), Tags (280) |
| **Effort** | Low-Medium — Moderate volume, standard blog structure |
| **Prerequisites** | API credentials |

### PR Articles (156 + ~50 Ski City)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CMS REST API (likely similar endpoint to Blog) |
| **Fallback** | Frontend scraping from `/articles/post/` URLs |
| **API Availability** | Medium — Not explicitly documented but same PR module as Blog |
| **Data Completeness** | High — Simpler than blog posts (21 fields, fewer custom fields) |
| **Risk** | Low |
| **Effort** | Low — Lower volume, simpler structure |
| **Prerequisites** | Confirm Articles accessible via API |

### CMS Pages / Nav Items (~157+ pages)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CMS REST API (Navigation endpoint) for metadata + Frontend scraping for content |
| **Fallback** | Full frontend scraping with HTML parsing |
| **API Availability** | Medium — Navigation endpoint documented for nav item fields |
| **Data Completeness** | Low-Medium — **Page Builder content (70+ widget types) is NOT accessible via documented API** — this is the biggest migration gap |
| **Risk** | High — Page Builder is the core content editing system; no API means content must be scraped or manually recreated |
| **Key Concern** | Each page has unique widget compositions (16-41 widgets per page). Widget configurations, component versions, and forked components add complexity |
| **Effort** | High — Need to extract and re-map 70+ widget types into new platform components |
| **Prerequisites** | API credentials; decision on how to handle Page Builder content |

### Collection Types (250-400+ items across 15 types)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CMS Admin HTML scraping (authenticated) |
| **Fallback** | Manual export for low-count types |
| **API Availability** | Low — No documented API endpoint for Collection Types |
| **Data Completeness** | Medium — List views show all items; edit forms show all fields |
| **Risk** | Medium — 15 different types with different field structures |
| **Effort** | Medium — Many types are low count (2-24 items); highest are 25+ (paginated) |
| **Prerequisites** | Authenticated CMS admin session; pagination handling |

### Media Assets (3,904 items)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CDN bulk download (images, documents) + URL migration (videos, links) |
| **Fallback** | CMS Admin HTML scraping for metadata + CDN download for files |
| **Data Completeness** | Medium — Files downloadable via CDN URLs; **metadata (alt text, credits, categories, focal points) requires CMS extraction** |
| **Risk** | Medium — Focal point data (`g_xy_center,x_XXXX,y_XXXX`) embedded in CDN URLs needs preservation for smart cropping |
| **Key Concern** | 3,110 images with 63 categories, credits, use information, and expiration dates — metadata is as important as the files |
| **Effort** | Medium-High — Volume + metadata extraction + new image pipeline setup |
| **Prerequisites** | CDN access (public); CMS access for metadata extraction |

### Redirects (9,156 rules)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CMS Admin HTML scraping (paginated list, 25 per page = 367 pages) |
| **Fallback** | Request bulk export from Simpleview; or scripted pagination through admin |
| **API Availability** | Low — No documented API endpoint |
| **Data Completeness** | High — Each redirect has: Active (Yes/No), Type (Path/Exact), From URL, To URL |
| **Risk** | Low — Simple data structure; main challenge is volume (367 paginated pages) |
| **Effort** | Low-Medium — Automatable scraping task |
| **Prerequisites** | Authenticated CMS admin session |

### Taxonomy (1,846 items across 10 systems)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | CMS Admin HTML scraping for CMS Tags (1,432, 58 pages) + Blog Tags (280, 12 pages) + other lists |
| **Fallback** | Manual export for smaller taxonomies |
| **API Availability** | Low — No documented API for tag systems |
| **Data Completeness** | High — Tags are simple key-value items |
| **Risk** | Low — Deduplication and cleanup recommended during migration (especially CMS Tags with "Image >" prefix overlap) |
| **Effort** | Low-Medium — Automatable but cleanup adds planning time |
| **Prerequisites** | Authenticated CMS admin session |

### Translation (10 namespaces, 8 languages)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | Manual export from CMS Settings > Translation > Static Namespaces |
| **Fallback** | Re-implement GTranslate widget (no content to migrate if keeping machine translation) |
| **API Availability** | Low — No documented API |
| **Data Completeness** | High — JSON-formatted strings visible in namespace edit forms |
| **Risk** | Low |
| **Effort** | Low — 10 namespaces to export, each with JSON field definitions |
| **Prerequisites** | CMS admin access; decision on i18n approach (GTranslate vs proper i18n) |

### User Roles & Permissions (9 roles, 25+ users)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | Manual recreation in new platform based on documented role specifications |
| **Fallback** | N/A — roles need to be designed for new platform anyway |
| **Risk** | Low — Well-documented (Task 9: screenshots + snapshots of all 9 roles with 166 permissions each) |
| **Effort** | Low — One-time setup; may simplify permission model in rebuild |

### Forms (6 CRM-integrated forms)

| Aspect | Assessment |
|--------|-----------|
| **Recommended Path** | Rebuild forms in new platform; replicate field structure from documentation |
| **Fallback** | N/A — forms need new CRM integration regardless |
| **Risk** | Medium — Forms submit to Simpleview CRM; new CRM integration needed |
| **Key Concern** | `groupid` segmentation, `udf_3845` custom fields, A/B testing `variation` field — CRM-specific features |
| **Effort** | Medium — 6 forms but CRM integration adds complexity |
| **Prerequisites** | Decision on CRM replacement; new form-to-CRM pipeline |

---

## 3. Risk Assessment

### High-Risk Items

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| **Page Builder content not API-accessible** | Cannot programmatically extract page layouts and widget configurations | High — confirmed no documented API | Hybrid: scrape frontend HTML + use CMS admin + manual recreation for complex pages |
| **CRM API credentials unavailable** | Cannot extract 85.7% of site content (listings + events) | Medium — needs client action | Request credentials early; fallback to frontend scraping with JSON-LD |
| **Simpleview contractual restrictions** | Data export may be limited by contract terms | Unknown | Client should review contract and discuss with Simpleview |
| **Focal point data loss** | Images lose smart cropping in new platform | Medium | Parse focal point coordinates from CDN URLs; map to new image pipeline |

### Medium-Risk Items

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| **API rate limits** | Slow or blocked extraction | Medium | Document limits; implement respectful crawling with backoff |
| **CRM data completeness** | API may not expose all listing/event fields visible on frontend | Medium | Compare API response against frontend rendering; supplement with scraping |
| **Personalization data migration** | 7 Persona Tags + 7 Profiles with geo-targeting need equivalent in new platform | Medium | Document personalization rules; evaluate new platform's personalization capabilities |
| **Convention calendar widget** | CRM-powered convention calendar needs replacement | Medium | Evaluate CRM API for calendar data; may need custom integration |

### Low-Risk Items

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| **Blog/article migration** | Well-documented API endpoints | Low | Standard API extraction |
| **Media file download** | Public CDN, predictable URLs | Low | Bulk download script |
| **Redirect migration** | Simple data structure | Low | Scripted extraction from admin |
| **Taxonomy migration** | Simple key-value data | Low | Admin scraping + cleanup |

---

## 4. Recommended Migration Strategy

### Phase 1: Pre-Migration (Before Build Starts)

1. **Request API credentials** from Simpleview for CMS REST API and CRM SOAP API
2. **Confirm API access tier** — what endpoints are available
3. **Clarify contractual terms** — data ownership and export rights
4. **Request CRM data export** — ask Simpleview if they provide bulk CSV/JSON exports for migrations
5. **Decision: CRM continuity** — Will the rebuild keep Simpleview CRM or replace it? This fundamentally changes the integration approach:
   - **Keep CRM** → Build new frontend that consumes CRM API (like current site does)
   - **Replace CRM** → Full data extraction needed; 6,527 records to migrate

### Phase 2: Data Extraction (Parallel with Build)

**Track A — API Extraction (scripted)**
- Extract listings via CMS REST API / CRM SOAP API (4,629 records)
- Extract events via CMS REST API (1,898 records)
- Extract blog posts via CMS REST API (310 records)
- Extract navigation structure via CMS REST API (~157 nav items)
- Extract offers via CMS REST API (count TBD)

**Track B — Admin Export (scripted + manual)**
- Scrape all 9,156 redirects from CMS admin (367 paginated pages)
- Scrape CMS Tags (1,432 items, 58 pages)
- Scrape Blog Tags (280 items, 12 pages)
- Export all other taxonomy lists (Categories, Asset Categories)
- Export Translation Namespace JSON from Static Namespaces (10 namespaces)
- Export Collection Type items (15 types, various counts)

**Track C — Media Download (scripted)**
- Bulk download 3,110 images from Simpleview CDN
- Extract image metadata from CMS admin (alt text, credits, categories, focal points)
- Download 590 documents from CDN
- Export 136 video URL references
- Export 68 external link references

**Track D — Frontend Scraping (scripted)**
- Crawl all 7,619 sitemap URLs
- Extract Page Builder widget compositions from HTML (per template pattern)
- Capture JSON-LD structured data from listings, events, blog posts
- Document widget-to-template mapping for rebuild reference

### Phase 3: Content Transformation

1. **Map CMS fields → new platform fields** for each content type
2. **Consolidate taxonomies** — deduplicate CMS Tags (remove "Image >" prefix items that overlap with Image Categories)
3. **Map URL patterns** — ensure new platform generates matching URL structures or 301 redirects
4. **Transform media** — re-establish focal points, generate responsive srcset variants in new pipeline
5. **Map Page Builder widgets → new components** — translate 70+ Simpleview widget types to new platform equivalents

### Phase 4: Import & Verification

1. **Import structured content** (listings, events, blog, articles) into new CMS
2. **Import media assets** with metadata
3. **Import taxonomies** (cleaned/consolidated)
4. **Import redirects** (9,156 + any new URL mappings)
5. **Verify content** — spot-check across all content types
6. **Test integrations** — verify all 28+ third-party services reconnected
7. **SEO verification** — confirm JSON-LD, OG tags, canonical URLs, sitemaps

---

## 5. Confirmed Approach: Full Custom Platform Rebuild

The rebuild will replace **both Simpleview CMS and CRM** with a fully custom-built platform. The goal is complete independence from Simpleview, giving the client flexibility to build whatever they want in the future.

### What This Means for Migration

| Aspect | Implication |
|--------|------------|
| **Scope** | Full platform replacement — custom CMS + custom admin panel + custom listing/event management |
| **Data migration** | Everything — 7,619 URLs, 6,527 CRM records, 3,904 media assets, all settings |
| **Listings/Events** | Must be extracted from Simpleview CRM and imported into new custom system |
| **Partner Portal** | Must be rebuilt as part of the custom platform |
| **Booking/E-commerce** | Connect Pass and RootRez need new integration approach — verify if these are Simpleview-dependent |
| **First phase** | 1-to-1 rebuild with exact feature parity |
| **Second phase** | Enhancements and new features (after 1-to-1 is live) |

### Image URL Strategy

All 3,110 images currently on Simpleview CDN (`assets.simpleviewinc.com`) must have a matching URL strategy in the new system. The CDN choice (Cloudinary, Vercel Image, etc.) will be decided during tech stack selection, but the migration must ensure:
- Every image is preserved with its metadata (alt text, credits, focal points, categories)
- Responsive image delivery (srcset) is maintained or improved
- AVIF/modern format support continues
- Focal point cropping data is extracted and mapped to the new system

---

## 6. Discovery Gaps — What We Still Need to Verify

We have thorough CMS backend documentation but **limited visibility into the CRM backend**. Before finalizing the rebuild scope, these gaps should be addressed when CRM access is granted:

### CRM Backend (Not Yet Accessible)

| Gap | Why It Matters | How to Discover |
|-----|---------------|-----------------|
| Listing management workflow | How are listings created, edited, approved? What validation rules exist? | CRM backend access |
| Event creation/scheduling | How are events managed? Recurring events? Multi-day? | CRM backend access |
| Partner portal (member side) | What can members actually do? Listing edits? Image uploads? Approval flow? | CRM backend access or partner demo |
| CRM automation/workflows | Email triggers, notification rules, auto-assignment | CRM backend access |
| Connect Pass integration | Is this Simpleview-owned or independent? API available? | Client confirmation + service provider contact |
| RootRez booking integration | Same — Simpleview-dependent or standalone? | Client confirmation |
| CRM reporting/analytics | What dashboards does the team use for business intelligence? | CRM backend access |
| DTN advertising management | How are sponsored listings/ads managed? | CRM backend access |
| Convention calendar data source | How does convention data flow into the calendar widget? | CRM backend access |

### Custom Functionality to Verify

| Functionality | What We Found | What We Need to Confirm |
|--------------|---------------|------------------------|
| Scheduled content | Publish Start/End dates on pages and posts | Are there CRM-side scheduling rules we can't see? |
| Personalization | 7 personas with geo-targeting on 5 content types | Full rule set — which content targets which persona + geography? |
| A/B testing | Active on homepage + Travel Trade | How many active tests? What metrics are tracked? Results? |
| Content approval | Draft notes show "approved by Max" | Is there a formal approval workflow in CRM? |
| Auto Responder | Module has JS error, 11 items | Is email automation actively used? What triggers what? |
| Offers/Coupons | System page exists, translation namespace exists | How are offers managed? What does the frontend look like? |
| RSVP system | System page exists | How does RSVP work? What data is collected? |

### Third-Party Service Ownership

| Service | Question | Impact |
|---------|----------|--------|
| Outdooractive API key | Is `IJFHEFKA-EMWGKWRF-4OSSHXTT` owned by Visit Salt Lake or Simpleview? | Determines if maps survive migration |
| Connect Pass | Simpleview service or independent? | Determines if booking/cart survives migration |
| RootRez | Simpleview service or independent? | Determines if hotel booking survives migration |
| Act-On | Client's own account or Simpleview-managed? | Determines if marketing automation survives |
| CrowdRiff | Client's own account? | Likely independent but need to confirm |

---

## 6. Prerequisites & Action Items for Client

| # | Action | Priority | Owner | Notes |
|---|--------|----------|-------|-------|
| 1 | Request API credentials from Simpleview | Critical | Client | Both CMS REST API and CRM SOAP API — needed for data extraction |
| 2 | Request CRM backend access for feature audit | Critical | Client | We need to see the CRM admin to document hidden functionality |
| 3 | Review Simpleview contract for data export rights | High | Client | Ensure clean exit with full data portability |
| 4 | Request bulk data export from Simpleview | High | Client | Ask what migration tools/processes they offer |
| 5 | Confirm Connect Pass ownership | High | Client | Is this Simpleview-dependent or independent? Affects booking feature |
| 6 | Confirm RootRez ownership | High | Client | Same — determines if hotel booking integration survives |
| 7 | Confirm Outdooractive API key ownership | Medium | Client | Is the map API key theirs or Simpleview's? |
| 8 | Confirm third-party account ownership | Medium | Client | Act-On, CrowdRiff, Monsido — who owns these accounts? |
| 9 | Confirm which convention microsites to migrate | Low | Client | 79 total — how many are still active/relevant? |
| 10 | Confirm i18n approach for 1-to-1 | Low | Client | GTranslate (current) vs proper i18n (enhancement phase) |

---

## 7. Migration Effort Summary by Track

| Track | Content | Records | Method | Effort |
|-------|---------|---------|--------|--------|
| A | CRM Listings + Events | 6,527 | API extraction | High |
| A | Blog + Articles | 466 | API extraction | Low-Medium |
| A | Navigation / Pages | ~157 | API + scraping | Medium-High |
| B | Redirects | 9,156 | Admin scraping | Low-Medium |
| B | Taxonomy | 1,846 | Admin scraping + cleanup | Low-Medium |
| B | Collection Types | 250-400+ | Admin scraping | Medium |
| B | Translation | 10 namespaces | Manual export | Low |
| C | Images | 3,110 | CDN download + metadata | Medium-High |
| C | Documents | 590 | CDN download | Low |
| C | Videos + Links | 204 | URL export | Low |
| D | Page Builder content | ~157 pages | Frontend scraping | High |
| — | Templates (11 layouts, 21+ patterns) | 21+ | Manual recreation | High |
| — | Forms (6 CRM forms) | 6 | Manual rebuild | Medium |
| — | Integrations (28+ services) | 28+ | Manual reconnection | High |
| — | Roles & Permissions | 9 roles | Manual recreation | Low |
| — | Structured Data (JSON-LD) | 3 schemas | Manual implementation | Low |
| — | Analytics Tags | 25+ | GTM re-implementation | Medium |

---

## Artifacts

This document synthesizes findings from:
- `29-simpleview-data-export.md` — API capabilities and migration approaches
- `21-cms-content-types.md` — Content type field structures
- `22-cms-taxonomy.md` — Taxonomy systems
- `25-cms-integrations.md` — Integration architecture
- `32-data-volume-migration-scope.md` — Volume quantification
- All other completed research documents (27 total)
