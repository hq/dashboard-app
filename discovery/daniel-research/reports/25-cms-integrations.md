# CMS Integrations & API Connections Documentation

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #27

---

## Integration Overview

The Simpleview CMS integrates with multiple external services and internal Simpleview platform features. Integrations are managed through:

1. **Page Builder widgets** — Third-party services embedded as page components
2. **Simpleview CRM/Platform** — Core platform services (listings, events, media)
3. **Code Editor** — Custom code injection (currently empty/unused)
4. **Content type fields** — Integration-specific fields on content types
5. **Redirects** — URL redirect management (9,156 active redirects)

---

## Simpleview Platform Integrations (Built-in)

These are core Simpleview services integrated into the CMS:

### 1. Simpleview CRM / DAM
- **Purpose:** Listings, events, media asset management
- **Evidence:** Images hosted at `assets.simpleviewinc.com/simpleview/image/upload/`
- **Impact:** Images are NOT stored in CMS Asset Library (0 images) — they're managed through Simpleview CRM/DAM
- **Image processing:** Cloudinary-style URL transforms (`c_fill,h_46,q_75,w_100`)

### 2. DTN (Digital Tourism Network)
- **Purpose:** Simpleview's advertising/sponsored content network
- **Evidence:** "Is DTN Ad?" / "DTN Ad?" fields on Hero Slides, Resort Slides, Slides
- **Impact:** Advertising integration needs to be replicated or replaced

### 3. Experience Marketplace / Booking Widget
- **Purpose:** Activity booking and cart functionality
- **Evidence:**
  - Page Builder widgets: "Custom - Call to Action - Experience Marketplace"
  - Slide fields: `Cart bwitemid`, `Cart bwitemtype`, `Show persistent cart button`
  - Page Builder containers: "Container - Connect Pass Footer Promotion", "Container - Ski Super Pass Footer Promotion"
  - Header config: `persistentcart: true`, sticky subscribe button
- **Impact:** E-commerce/booking integration — significant rebuild item

### 4. Simpleview CRM Contact/Listing Integration
- **Purpose:** CRM data feeds into CMS content
- **Evidence:**
  - Contact Slides content type with CRM-style fields (Name, Last Name, Department, Email, Phone)
  - "Listings - single - filter" field on Resort Slides
  - Blog Posts: "Custom - events filter", "Custom - Listings filter"
- **Impact:** CRM-to-CMS data pipeline needs to be understood for migration

---

## Third-Party Service Integrations (via Page Builder)

### 5. Translation Service
- **Purpose:** Multi-language site translation
- **Configuration found in HTML:**
  - Source language: English (en)
  - Target languages: Spanish (es), French (fr), German (de), Dutch (nl), Korean (ko), Portuguese (pt), Chinese Simplified (zh-CN)
  - Widget type: Floating globe widget (`widget_look: "float.js"`)
  - Position: Left bottom
  - Features: Native language names enabled, browser language detection disabled
  - Alternative flags: US flag for English, Brazil flag for Portuguese
- **Impact:** Translation widget needs to be replicated or replaced with proper i18n

### 6. Weather Service
- **Purpose:** Weather widget in header
- **Evidence:** Page Builder widget "Weather - Weather", header section includes "weather" component
- **Impact:** Weather API integration needed

### 7. Cookie Consent / Privacy
- **Purpose:** GDPR/privacy compliance cookie banner
- **Evidence:**
  - Page Builder widgets: "Cookie Banner", "Utilities - Cookie Banner - Standardized Cookie widget"
  - Configuration: Confirmation text "Accept", links to Privacy Policy
- **Impact:** Cookie consent mechanism needs to be rebuilt

### 8. Social Media
- **Purpose:** Social sharing and social feed display
- **Evidence:**
  - Page Builder widgets: "Common - Social Share", "Social Links", "Social Sharing"
  - Collection Type: Social Slides (11 items — social network links)
- **Impact:** Social sharing and social feed integrations

### 9. Smart Banner
- **Purpose:** Likely mobile app promotion banner
- **Evidence:** Page Builder widget "Smart Banner"
- **Impact:** If mobile app exists, smart banner needs rebuilding

---

## Content Delivery / Hosting

### 10. Simpleview CDN / Cloudinary
- **Purpose:** Image hosting, processing, and delivery
- **Evidence:** Image URLs follow pattern: `assets.simpleviewinc.com/simpleview/image/upload/v1/clients/saltlake-redesign/...` and `assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_XX,q_XX,w_XX/v1/clients/saltlake/...`
- **Transform capabilities:** Fill, resize, quality adjustment (Cloudinary-style)
- **Impact:** Image CDN and processing pipeline needs to be replicated — critical for migration

---

## URL Redirect Management

### 11. Redirects System
- **Total redirects:** 9,156 (across 567 pages, 25 per page)
- **Types:** Path, Exact
- **Fields per redirect:** Active (Yes/No), Type, From URL, To URL
- **Filters:** Keyword, Active status, Type
- **Sample patterns observed:**
  - Old path restructuring: `/about-salt-lake/...` → `/about-us/...`
  - PDF document redirects → `assets.simpleviewinc.com/...` (Annual Plans, etc.)
  - Event/campaign URL redirects
  - Legacy URL maintenance
- **Impact:** **Critical migration item** — all 9,156 redirects must be exported and imported into the new platform to maintain SEO equity

---

## Code Editor

### 12. Custom Code Injection
- **Status:** Empty — "There have been no items created yet"
- **Features available:** CREATE NEW, PREVIEW, DEPLOY buttons
- **Impact:** No custom code currently injected — integrations are handled through Page Builder widgets instead

---

## Auto Responder (Email Automation)

### 13. Email Auto-Response System
- **Status:** Module exists but has persistent JS error (`TypeError: Cannot read properties of undefined (reading 'apis')`)
- **Content:** 11 items (action item definitions), 2 links
- **Impact:** May be deprecated or non-functional; needs clarification from client on whether email automation is actively used

---

## Integration Fields on Content Types

### Per-Content-Type Integration Points

| Content Type | Integration Fields |
|-------------|-------------------|
| Nav Items (Pages) | Personas (personalization), Access Groups (gated content), Locale (i18n) |
| Hero Slides | Dynamic Content Profile (personalization), Is DTN Ad? (advertising) |
| Resort Slides | DTN Ad? (advertising), Listings - single - filter (CRM) |
| Slides | Is DTN Ad? (advertising), Cart bwitemid/bwitemtype (booking), persistent cart |
| Vertical Videos | Profile (personalization) |
| Blog Posts | Personas, Custom - events filter, Custom - Listings filter (CRM cross-reference) |
| Articles Posts | Personas |
| User Accounts | Subscriptions (email marketing), Access Groups |

---

## Rebuild Implications

### Critical Integrations to Replicate
1. **Simpleview CRM/DAM** — Image hosting and content feeds (listings, events). This is the biggest integration challenge — need to understand the CRM API.
2. **Redirects** — 9,156 redirects must be migrated for SEO preservation
3. **Experience Marketplace / Booking** — Cart/booking widget needs a replacement or integration
4. **Translation** — 8-language support via widget or proper i18n

### Integrations to Evaluate
5. **DTN Advertising** — May or may not continue with Simpleview's ad network
6. **Weather Widget** — Simple API integration, easy to replace
7. **Cookie Consent** — Standard implementation, many options available
8. **Social Sharing** — Common functionality, many libraries available
9. **Smart Banner** — Only needed if mobile app continues

### Integrations That May Be Retired
10. **Auto Responder** — Currently broken, may not be needed
11. **Code Editor** — Unused, new platform will have its own approach

### Data to Export
- 9,156 redirect rules (From → To mappings)
- All CRM-referenced content (listings, events)
- Image assets from Simpleview CDN
- User account data with subscriptions

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-27/)
- `01-code-editor.png` — Code Editor (empty, no custom code)
- `02-redirects.png` — Redirects list (9,156 total, showing path/exact types)

### Raw Data (docs/marketing-site-research/raw/phase-27/)
- `01-code-editor-snapshot.txt` — Code Editor accessibility snapshot
- `01-code-editor.html` — Code Editor HTML
- `02-redirects-snapshot.txt` — Redirects accessibility snapshot
- `02-redirects.html` — Redirects HTML (first 25 of 9,156)
