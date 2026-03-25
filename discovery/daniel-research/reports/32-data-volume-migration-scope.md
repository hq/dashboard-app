# Data Volume & Migration Scope Quantification

**Date:** 2026-03-24
**Task:** #32
**Sources:** Tasks 1, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 19, 24, 25, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38

---

## Executive Summary

The Visit Salt Lake website contains **7,619 URLs** with **85.7% powered by Simpleview CRM** (listings + events). The CMS manages ~1,092 pages across 21+ template patterns, 15 collection types, 3 blog/article modules, and 10 taxonomy systems totaling ~1,832 taxonomy items. Media assets total 3,904 items. The site integrates with 28+ third-party services across 31 external domains.

---

## 1. Content Volume Matrix

### Primary Content Types

| Content Type | Count | Source | Fields | Relationships | Migration Complexity |
|-------------|-------|--------|--------|---------------|---------------------|
| **CRM Listings** | 4,629 | Simpleview CRM | ~25+ | Categories, images, maps, reviews | High |
| **CRM Events** | 1,898 | Simpleview CRM | ~15+ | Categories, venues, dates | High |
| **CMS Pages (Nav Items)** | ~157+ | Simpleview CMS | 27 | CMS Tags, Personas, Access Groups, Locale | Medium |
| **Blog Posts** | 310 | CMS (Public Relations) | 27 | Categories (23), Tags (280), Personas, Events/Listings filters | Medium |
| **PR Articles** | 156 | CMS (Public Relations) | 21 | Categories (7), Tags (14), Personas | Medium |
| **PR Articles - Ski City** | ~50+ | CMS (Public Relations) | 20 | Categories, Tags, Personas | Low |
| **Hospitality Jobs** | 76 | CRM (listings pattern) | ~10+ | Categories | Low |
| **Convention Microsites** | 79 | CMS (Microsites section) | Page Builder | Template-based, custom branding | Medium |
| **Landing Pages** | 16 | CMS (Landing Pages section) | Page Builder | Campaign-specific | Low |
| **System Pages** | 20 | CMS (System section) | Page Builder | Feature pages (Compare, RFP, My Account, etc.) | Medium |

### Total Content Records

| Category | Count |
|----------|-------|
| CRM-powered content (listings + events) | 6,527 (85.7%) |
| CMS-managed pages | ~1,092 (14.3%) |
| **Total URLs in sitemap** | **7,619** |
| CMS redirect rules | 9,156 |
| **Total URL scope (pages + redirects)** | **16,775** |

---

## 2. CMS Collection Types (15 types, ~250+ items)

| # | Collection Type | Count | Fields | Personalization | Migration Complexity |
|---|----------------|-------|--------|-----------------|---------------------|
| 1 | Alerts | 4 | 6 | No | Simple |
| 2 | Announcements | 7 | 7 | No | Simple |
| 3 | Contact Slides | 25+ | 11 | No | Simple |
| 4 | Expanding Content | 2 | 8 | No | Simple |
| 5 | Hero Slides | 25+ | 9 | Yes (Dynamic Content Profile) | Medium |
| 6 | Microsite Slides | 12 | 8 | No | Simple |
| 7 | Navigation Links | 25+ | 4 | No | Simple |
| 8 | Neighborhood Slides | 25+ | 3 | No | Simple |
| 9 | Questions / FAQ | 25+ | 8 | No | Simple |
| 10 | Regions Slides | 14 | 5 | No | Simple |
| 11 | Resort Slides | 25+ | 9 | Yes (DTN Ad, Listings filter) | Medium |
| 12 | Slides | 25+ | 14 | Yes (DTN Ad, Cart integration) | High |
| 13 | Social Slides | 11 | 3 | No | Simple |
| 14 | Staff Departments | 25+ | 3 | No | Simple |
| 15 | Vertical Videos | 24 | 8 | Yes (Profile) | Medium |

**Note:** Items showing exactly 25 are likely truncated by CMS pagination (25 per page). True counts may be higher.

**Estimated total collection items:** 250–400+

---

## 3. Page Builder Components (70+ widget types)

### Widget Categories

| Category | Count | Examples |
|----------|-------|---------|
| Layout & Structure | 11 | A/B Test panels, Content Section, Containers |
| Navigation | 8 | Breadcrumb, 3-Column Main Nav, Footer Nav, Tertiary |
| Header & Footer | 10 | Header Default, Footer Default, sponsor logos |
| Collections (Content Feeds) | 16 | Cards 3-across, Hero Slides, Marquee, FAQ, Vertical Videos |
| Custom CTAs | 3 | Experience Marketplace, Newsletter, Visitor Guide |
| Dynamic Content | 4 | Dynamic Content panels, Dynamic Profiles |
| Search | 1 | Search Box |
| Social | 3 | Social Share, Social Links, Social Sharing |
| Utilities | 4 | Cookie Banner, Smart Banner, Weather |
| Other | 6 | Activity Card, Map Publisher, Edit Content, Hero |
| **Total** | **~70+** | |

### Shared Components (present on all/most pages)

| Component | Widget ID | Notes |
|-----------|-----------|-------|
| Header | `common_header` | Logo, weather, subscribe, search, nav |
| Main Navigation | `nav_main` ×3 | Three-column mega menu |
| Secondary Navigation | `nav_main` (secondary) | B2B links |
| Footer | `common_footer` + `common_footer_cta` | Links, sponsors, dynamic content |
| Breadcrumbs | `nav_breadcrumb` | Page hierarchy |
| Social Share | `common_social_share` | Share buttons |
| Cookie Banner | `common_cookie_banner` | Consent |
| Google Translate | `googletranslate_gtranslate` | 8-language widget |
| Weather | `weather_weather` | Header weather |
| Search Box | `search_headerbox` | Header search |
| A/B Testing | `ab_testing_inner/outer` | Active on some pages |
| Dynamic Content | `dynamic_content_inner/outer` | Personalization on some pages |

---

## 4. Template / Layout Volume

### CMS Backend Layouts (11)

| # | Layout | Pages Using | Purpose |
|---|--------|-------------|---------|
| 1 | Default - REDESIGN - Blank | Various system/utility pages | Default template |
| 2 | Main Nav - Content | ~50+ | Consumer content pages (Things To Do, Plan Your Visit, About, etc.) |
| 3 | Main Nav - Listings | ~10+ | Listing browse pages (Restaurants, Places To Stay) |
| 4 | Main Nav - Events | ~5+ | Events section |
| 5 | Footer Nav - Content | ~15+ | Footer section pages (Privacy, Members, Press) |
| 6 | Secondary Nav - Content | ~25+ | B2B content (Travel Trade, Film, Speak Salt Lake) |
| 7 | Secondary Nav - Listings | ~5+ | B2B listing pages |
| 8 | Meetings Microsite | ~45+ | Meetings section deep hierarchy |
| 9 | Microsite - General | 79 | Convention welcome microsites |
| 10 | Sports | ~20 | Sports section (own brand identity) |
| 11 | Ski Section Page | ~29 | Skiing & Snowboarding sub-pages |

### Frontend Template Patterns (21+)

| # | Template | Volume | Rebuild Complexity |
|---|---------|--------|-------------------|
| 1 | Homepage | 1 | High (39 widgets, most complex) |
| 2 | Listing Detail (CRM) | 4,629 | High (CRM, maps, reviews, tabs) |
| 3 | Event Detail (CRM) | 1,898 | High (CRM, date handling) |
| 4 | Listing Browse | ~10 | High (CRM feed, filtering, pagination) |
| 5 | Events Browse | ~5 | High (calendar, filtering, CRM feed) |
| 6 | Blog Post Detail | 304 | Medium (content, related posts) |
| 7 | Places To Stay (booking widget) | 1 | Medium (listing browse + booking) |
| 8 | Compare Tool | 1 | Medium (comparison functionality) |
| 9 | Contact (CRM Form) | 1 | Medium (CRM form builder) |
| 10 | Industry Sections (5 variants) | 5 | Medium (5 nav/brand variants) |
| 11 | Convention Microsites | 79 | Medium (templated, custom branding) |
| 12 | Meetings Sub-pages | 45+ | Medium (deep hierarchy, venue pages) |
| 13 | Neighborhoods Hub | 1 | Low-Medium (region map widget) |
| 14 | Blog Archives | 1 | Low |
| 15 | Search Results | 1 | Low-Medium (faceted search) |
| 16 | Geographic Hub | ~6 | Low (sitemap navigation) |
| 17 | Content Pages (general) | ~100+ | Low (page builder, flexible) |
| 18 | Staff Directory | 1 | Low |
| 19 | Articles Detail | 156 | Low (minimal template) |
| 20 | Ski Resort Detail | ~10 | Low (content + FAQ + embed) |
| 21 | Tours Detail | ~12 | Low (content + embed) |

---

## 5. Media Asset Volume

### CMS Asset Library

| Asset Type | Count | Hosting | Categories | Migration Approach |
|-----------|-------|---------|------------|-------------------|
| Images | 3,110 | Simpleview CDN (Cloudinary) | 63 categories | Bulk download from CDN URLs |
| Documents | 590 | Simpleview CDN | 6 categories (by file type) | Bulk download from CDN URLs |
| Videos | 136 | URL references (mostly Vimeo) | 7 categories | Migrate URLs, not files |
| External Links | 68 | Various external URLs | — | Simple URL list export |
| **Total** | **3,904** | | | |

### Image Technical Details

| Property | Details |
|----------|---------|
| Primary CDN | `assets.simpleviewinc.com/simpleview/image/upload/` |
| Client paths | `/v1/clients/saltlake/` and `/v1/clients/saltlake-redesign/` |
| Format distribution | JPG 60.8%, SVG 30.7%, PNG 8.4%, GIF 0.1% |
| Dynamic format | AVIF via `f_avif` CDN flag |
| Transform capabilities | c_fill, c_limit, f_avif, g_xy_center (focal point), h/w/q |
| Quality tiers | q_65 (AVIF), q_75 (JPG) |
| Responsive | srcset with multiple resolution options |
| Lazy loading | Native `loading="lazy"` + custom `lazyload` class |
| Metadata fields | Title, Alt Text, Credits, Use Information, Expires, Location, Categories, CMS Tags, Internal Notes, Admin Notes |
| Common sizes | 400×249 (cards), 300×198 (small cards), 640×428 (medium), 1200×800 (hero) |

### Video Details

| Property | Details |
|----------|---------|
| Hosting | Vimeo (player.vimeo.com) |
| Player | Plyr 3.x |
| Format | Progressive MP4 via Vimeo CDN |
| CMS fields | Title, Video URL, Thumbnail, Credits, Categories, CMS Tags |
| Widget types | `common_hero_video`, `common_video_player`, Vertical Videos collection |

### Document Details

| Property | Details |
|----------|---------|
| Count | 590 documents |
| Types | Doc, EPS, Job Posting, PDF, PPT, xlsx |
| Hosting | Simpleview CDN |
| Recent example | "2026 Legislative Report - Week 6" |

---

## 6. Taxonomy Volume

### Taxonomy Systems (10 active, 2 unused)

| Taxonomy System | Items | Scope | Active | Migration Complexity |
|----------------|-------|-------|--------|---------------------|
| CMS Tags | 1,432 | System-wide (all content types) | Yes | Medium (deduplication needed) |
| Blog Tags | 280 | Blog posts only | Yes | Simple |
| Image Categories | 63 | Image asset library | Yes | Simple (cleanup needed) |
| Blog Categories | 23 | Blog posts only | Yes | Simple |
| Articles Tags | 14 | PR articles only | Yes | Simple |
| Articles Categories | 7 | PR articles only | Yes | Simple |
| Video Categories | 7 | Video asset library | Yes | Simple |
| Persona Tags | 7 | Dynamic Content | Yes | Medium (personalization) |
| Document Categories | 6 | Document asset library | Yes | Simple |
| Dynamic Content Profiles | 7 | Personalization | Yes | Medium (geo-targeting) |
| Nav Tags | 0 | Navigation | No (unused) | Skip |
| Tag Manager Groups | 0 | Tag management | No (unused) | Skip |
| **Total** | **~1,846** | | | |

### Frontend Content Taxonomy (URL-based)

| Taxonomy | Items | Depth | Notes |
|----------|-------|-------|-------|
| Event Categories | 15 | 1 level | URL-based (/event/{category}/) |
| Things To Do Categories | 11 top + ~30 sub | 3 levels | Hierarchical |
| Restaurant Types | 11 | 1 level | Filtering categories |
| Cuisine Types | 20 | 1 level (under Restaurants) | Sub-taxonomy |
| Accommodation Types | 9 | 1 level | Filtering categories |
| Geographic Areas | 7 | 1 level + area sections | Dual structure |
| Ski Resort Sub-taxonomy | 7 sub-categories | 2 levels | Under Things To Do |
| Outdoor Recreation Sub-taxonomy | 13 sub-categories | 2 levels | Under Things To Do |

### Cross-Taxonomy Relationships

| Relationship | Impact |
|-------------|--------|
| CMS Tags ↔ Blog Categories | Many topics appear in both |
| CMS Tags ↔ Blog Tags | Significant duplication (venue names, activities) |
| Blog Categories ↔ Nav Sections | Categories mirror main site navigation structure |
| Persona Tags ↔ Blog Categories | "Family Fun" in both systems |
| "Image >" CMS Tags ↔ Image Categories | ~40% of CMS Tags are image-specific with "Image >" prefix |

---

## 7. User & Role Volume

### CMS Users

| Category | Count |
|----------|-------|
| Total visible users | 25+ (paginated) |
| Visit Salt Lake staff | ~19 |
| Salt Palace/SMG venue staff | ~4 |
| Simpleview vendor support | ~1 |
| External agency (Hello Yellow UK) | ~1 |

### CMS Roles (9)

| Role | Permissions | % of 166 |
|------|------------|----------|
| Admin | 166 | 100% |
| CMS Training | 111 | 67% |
| Marketing | 110 | 66% (no delete) |
| PR Team | 82 | 49% |
| SMG Access | 60 | 36% |
| Membership Department | 48 | 29% |
| Limited External Access | 13 | 8% |
| HR access | 11 | 7% |
| aRes | 1 | 1% |

### Visitor Accounts

| Feature | Count |
|---------|-------|
| Access Groups | 1 ("Default") |
| User Accounts | 1 (minimal CMS usage; partner portal via CRM) |
| User Account fields | 13 (email, name, address, company, subscriptions) |

---

## 8. Integration Volume

### Third-Party Services (28+)

| Category | Count | Services |
|----------|-------|----------|
| Analytics & Tag Management | 3 | GA4 (4 properties), GTM (2 containers), Web Vitals |
| Advertising & Retargeting | 10 | Google Ads, DoubleClick (4), Facebook (3), Pinterest, LinkedIn, Sojern (2), Adelphic, Storygize, Datafy |
| Session Recording & UX | 5 | Microsoft Clarity, Mouseflow, Monsido (3 scripts) |
| Maps & Location | 2 | Outdooractive (with Leaflet.js) |
| Content & UGC | 3 | CrowdRiff, Vimeo, Threshold360 |
| Reviews & Social Proof | 2 | Yelp, TripAdvisor |
| Translation | 1 | GTranslate (8 languages) |
| Booking / E-Commerce | 1 | Connect Pass |
| Marketing Automation | 1 | Act-On |
| Image/Media CDN | 1 | Simpleview/Cloudinary |
| **Total** | **28+** | **31 external domains** |

### Analytics Tag Inventory

| Tag Type | Count | IDs |
|----------|-------|-----|
| GA4 Properties | 4 | G-6YB03GQMPQ, G-Q3027Z5YJW, G-Z9MN82YTMQ, G-EG67YBJSRL |
| GTM Containers | 2 | GTM-NFBVG93, GTM-5L5W32 |
| DoubleClick Tags | 4 | DC-14940957, DC-10254307, DC-9672883, DC-9644701 |
| Facebook Pixels | 3 | 752363390410810, 768637601546801, 790374154364327 |
| Google Ads | 1 | AW-1042908532 |
| Sojern | 2 | 317077, 385368 |
| Microsoft Clarity | 1 | 4k98p3u3c3 |
| Mouseflow | 1 | 53df97b6-... |
| **Total tracking tags** | **25+** | |

### CRM Form Builder Forms

| Form ID | Page | Purpose |
|---------|------|---------|
| frm_18 | /contact/ | General contact (full address + comments) |
| frm_46 | /plan-your-visit/subscribe/ | Newsletter subscription |
| frm_54 | /meetings/contact/ pages | Meeting planner guide + newsletter |
| (CRM widget) | /influencer/ | Influencer application |
| (CRM widget) | /meetings/submit-rfp/ | RFP submission |
| (booking) | /places-to-stay/ | Accommodation booking widget |

---

## 9. Internationalization Volume

| Component | Count | Details |
|-----------|-------|---------|
| Supported languages | 8 | en, es, fr, de, nl, ko, pt, zh-CN |
| Translation namespaces | 10 | Common, Events, Listings, Offers, Search, Trip Builder, Media Gallery, Trails, Layout/Detail, Public Relations |
| Translation method | Client-side | GTranslate (automated, no human translations) |
| Localized URLs | 0 | No separate language URLs |
| Hreflang tags | 0 | Not implemented |

---

## 10. Navigation & Information Architecture Volume

### Navigation Components (6)

| Component | Items | Notes |
|-----------|-------|-------|
| Main Navigation (3-col mega menu) | 7 top-level | Things To Do, Skiing, Events, Restaurants, Places To Stay, Plan Your Visit, Neighborhoods |
| Secondary Navigation | 5 items | Meetings, Travel Trade, Sports, Film, Blog |
| Footer Navigation | 7 items | Includes Shopify external link |
| Industry Section Navs | 6 sections × 3-7 items each | Each B2B section has own nav bar |
| Mobile Navigation | Mirrors desktop | Hamburger/accordion |
| Breadcrumbs | All interior pages | No BreadcrumbList schema |

### Sitemap Section Depth

| Section | Pages | Max Depth |
|---------|-------|-----------|
| Things To Do | 112 | 4 levels (skiing > ski-resorts > alta > trail-map) |
| Meetings | 46+ | 4 levels (meetings > why-salt-lake > easy-access > direct-flights) |
| Geographic Areas | 104 total | 2 levels |
| Plan Your Visit | 63 | 3 levels |
| Salt Lake City area | 41 | 2 levels |
| Restaurants | 32 | 2 levels (+ 20 cuisine sub-pages) |
| Salt Palace | 25 | 3 levels |
| Mountain America Expo | 28 | 3 levels |
| Sports | 20 | 2 levels |
| Travel Trade | 15 | 2 levels |
| Places To Stay | 15 | 2 levels |
| About Us | 15 | 3 levels |

---

## 11. Structured Data & SEO Volume

| Feature | Count | Coverage |
|---------|-------|----------|
| JSON-LD on Listings | 2 schemas per page | SportsActivityLocation+Article, LocalBusiness (4,629 pages) |
| JSON-LD on Events | 1 schema per page | ExhibitionEvent (1,898 pages) |
| JSON-LD on Blog | 1 schema per page | BlogPosting (310 pages) |
| JSON-LD on Homepage | 0 | Missing |
| OG Tags | All pages | og:title, og:description, og:image, og:url, og:type |
| Twitter Cards | All pages | summary_large_image (minimal — no twitter:site) |
| Canonical URLs | All pages | Self-referencing |
| Hreflang | 0 | Not implemented |
| RSS Feeds | 0 | Not found |

---

## 12. Workflow & Publishing Volume

| Feature | Volume | Notes |
|---------|--------|-------|
| Page drafts per page | Up to 134 (Events page example) | Every save creates new draft |
| Draft notes | Actively used by team | Collaborative editing |
| Component versions | Multi-year history (2022–2026) | Per-widget version tracking |
| Audit trail | Since 2018 | User + date + activity type |
| Scheduled publishing | Active | Publish Start / Publish End per page |
| AMP support | Available | Publish as AMP toggle (declining relevance) |

---

## 13. Migration Scope Summary

### By Migration Method

| Method | Content Types | Estimated Records | Feasibility |
|--------|--------------|-------------------|-------------|
| **CMS REST API** | Listings, Events, Offers, Blog Posts, Navigation | ~7,000+ | High |
| **CRM SOAP API** | Detailed listing data, Contacts, Members | ~5,000+ | High (needs credentials) |
| **CDN Bulk Download** | Images, Documents | 3,700 | Medium (URL-based download) |
| **URL Reference Migration** | Videos, External Links | 204 | High (just URLs) |
| **Manual CMS Export** | Redirects, Tags, Collection Types, Translations | ~11,000+ | Medium (HTML scraping from admin) |
| **Web Scraping** | Page Builder content structure | ~1,092 pages | Low-Medium (loses CMS structure) |
| **Manual Recreation** | Layouts/Templates | 11 layouts / 21+ patterns | Required (no API for templates) |

### Complexity Scoring by Content Area

| Area | Volume | Fields/Complexity | Relationships | Overall Score |
|------|--------|------------------|---------------|---------------|
| CRM Listings | 4,629 | 25+ fields, maps, reviews | High (categories, images, external services) | **High** |
| CRM Events | 1,898 | 15+ fields, dates | Medium (categories, venues) | **High** |
| Blog Posts | 310 | 27 fields + Page Builder | Medium (categories, tags, personas, listing/event filters) | **Medium** |
| PR Articles | 206 | 20-21 fields | Low (categories, tags) | **Low-Medium** |
| CMS Pages | ~157 | 27 fields + Page Builder (70+ widgets) | Medium (CMS Tags, Personas, Access Groups) | **Medium-High** |
| Collection Types | 250-400+ | 3-14 fields each | Low (CMS Tags) | **Low-Medium** |
| Media Assets | 3,904 | 5-12 fields each | Medium (categories, tags, cross-references) | **Medium** |
| Taxonomy | ~1,846 items | Simple key-value | High (cross-references, multiple systems) | **Medium** |
| Redirects | 9,156 | 4 fields (active, type, from, to) | None | **Low** (volume is the challenge) |
| User Roles | 9 roles, 25+ users | 166 permissions each | Role-to-user mapping | **Low** |
| Microsites | 79 | Template + custom content | Template-based | **Medium** |
| Forms | 6 forms | CRM-integrated fields | CRM contact groups | **Medium** |
| Integrations | 28+ services | Various APIs/embeds | External dependencies | **High** |
| Translation | 10 namespaces, 8 languages | JSON strings | Per-namespace | **Low-Medium** |

### Total Migration Volume at a Glance

| Metric | Count |
|--------|-------|
| Total URLs to account for | 16,775 (7,619 pages + 9,156 redirects) |
| Total content records | ~8,500+ (listings, events, posts, articles, pages, collections) |
| Total media assets | 3,904 (images, docs, videos, links) |
| Total taxonomy items | ~1,846 |
| Total forms to rebuild | 6 |
| Total integrations to reconnect | 28+ |
| Total templates to build | 21+ frontend patterns from 11 backend layouts |
| Total page builder widgets | 70+ types |
| Total shared components | 12+ (header, footer, nav, search, etc.) |
| Total tracking/marketing tags | 25+ |
| Total navigation contexts | 8 distinct (consumer, secondary, 6 B2B sections) |

---

## 14. Volume-Based Effort Implications

### High-Volume / High-Effort Items

1. **CRM Integration** — 6,527 pages (85.7%) depend on CRM data. This is the single largest technical dependency.
2. **URL Redirect Management** — 16,775 total URLs to preserve for SEO equity.
3. **Media Migration** — 3,110 images with focal points, alt text, credits, and Cloudinary transforms need equivalent pipeline.
4. **Taxonomy Consolidation** — 1,832 taxonomy items across 10 systems need cleanup and mapping.

### Medium-Volume / Medium-Effort Items

5. **Page Builder Content** — ~157 CMS pages with 70+ widget types need content extraction and template mapping.
6. **Blog/Article Migration** — 466 posts with categories, tags, and cross-references.
7. **Convention Microsites** — 79 microsites following standard template (many may be archivable).
8. **Integration Reconnection** — 28+ services, ~25 tracking tags to re-implement.

### Low-Volume / Variable-Effort Items

9. **Forms** — 6 forms, but CRM integration makes them medium effort.
10. **Translation** — 10 namespaces with JSON strings (simple if keeping GTranslate approach).
11. **User Roles** — 9 roles with 166 permissions each (one-time setup).
12. **Visitor Accounts** — Minimal (1 account in CMS; partner portal is CRM-managed).

---

## Artifacts

This document synthesizes data from all 27 completed research tasks. No new screenshots or raw data were captured — all figures are referenced from their source documents:

- Sitemap data: `01-sitemap-crawl.md`
- Content types & fields: `21-cms-content-types.md`
- Taxonomy: `22-cms-taxonomy.md` + `11-content-taxonomy.md`
- Media: `26-cms-media-library.md` + `07-media-assets.md`
- Integrations: `25-cms-integrations.md` + `06-third-party-integrations.md`
- Templates: `27-backend-features.md` + `10-template-identification.md`
- Navigation: `12-navigation-ia.md`
- URL patterns: `08-url-patterns.md`
- API/Export: `29-simpleview-data-export.md`
- Roles: `23-cms-roles.md`
- Workflows: `24-cms-workflows.md`
- Forms: `15-forms-inventory.md`
- Translation: `19-multilingual.md` + `27-backend-features.md`
- Structured data: `09-feeds-structured-data.md`
- Industry sections: `38-industry-b2b-sections.md`
- Meetings: `36-meetings-microsite.md`
- Microsites: `37-convention-microsites.md`
- Trails: `38-trails-feature.md`
