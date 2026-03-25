# Trails Content Type & Feature Documentation

**Date:** 2026-03-24
**Task:** #38

---

## Summary

The "Trails" feature discovered via the translation namespace `translations.static.trails` is **NOT a separate content type**. Trails are **CRM Listings** categorized under "Hiking & Biking Outdoors & Recreation" within the Simpleview CRM listings system. The translation namespace provides UI strings for trail-specific views and filters within the listings framework.

---

## How Trails Work

### Content Source
- Trails are **Simpleview CRM Listings** (same system as restaurants, hotels, attractions)
- Listed under the category: **Hiking & Biking Outdoors & Recreation**
- URL pattern: `/listing/[trail-name]/[listing-id]/` (e.g., `/listing/memory-grove-trail/70583/`)

### Browse Pages
- **Hiking listings:** `/things-to-do/outdoor-recreation/hiking/` — CRM-powered listing browse page
- **Outdoor recreation:** `/things-to-do/outdoor-recreation/` — parent category with subcategories:
  - Adventure Sports
  - Biking (+ Cycling the City & Nearby Canyons)
  - Birdwatching Areas
  - Hiking

### Themed Trails (Custom Pages)
- **Outdoor Arts Trail:** `/things-to-do/tours-experiences/outdoor-arts-trail/`
- **Salt Lake Sips Trail:** `/things-to-do/tours-experiences/salt-lake-sips-trail/`
- These are curated, editorial trail experiences — likely CMS pages, not CRM listings

### Ski Resort Trail Maps
- Alta Trail Map: `/things-to-do/skiing-snowboarding/ski-resorts/alta-ski-area/alta-trail-map/`
- Brighton Trail Map: `/things-to-do/skiing-snowboarding/ski-resorts/brighton-resort/brighton-trail-map/`
- Snowbird Trail Map: `/things-to-do/skiing-snowboarding/ski-resorts/snowbird/snowbird-trail-map/`
- Solitude Trail Map: `/things-to-do/skiing-snowboarding/ski-resorts/solitude-mountain-resort/solitude-trail-map/`

---

## Trail Listing Detail Page

### Example: Memory Grove Trail
**URL:** `https://www.visitsaltlake.com/listing/memory-grove-trail/70583/`
**Title:** "Memory Grove Trail | a Salt Lake Hiking & Biking Outdoors & Recreation in Downtown"

### Page Structure
- **Hero image** — Trail photo
- **Title** with category breadcrumb (Hiking & Biking)
- **Tabs:** OVERVIEW + additional tabs (Details, Map, Photos, etc.)
- **Address/location info**
- **Description/overview text**
- **Embedded map** with trail location marker
- **Social sharing** buttons
- **Experience Marketplace** section at bottom

### Widget Composition (28 widgets)
Key widgets on the listing detail page:
- `plugins_listings_detail` — **CRM Listings detail widget** (the core content)
- `plugins_ab_testing_inner/outer` — A/B testing active
- `plugins_dynamic_content_inner/outer` — Personalization active
- Standard: header, footer, nav, weather, translate, cookie banner, search
- Collections: cards, side-by-side, navigation links, slides, social
- Content: textbox, container, social share

### External Integrations on Trail Pages
- **AllTrails** — Link to trail on alltrails.com (e.g., `alltrails.com/trail/us/utah/memory-grove-trail`)
- **Outdooractive** — Link to activity on outdooractive.com (e.g., `outdooractive.com/en/r/807792404`)

---

## Translation Namespace

### `translations.static.trails`
This namespace provides translatable UI strings specific to trail content within the listings system. Likely includes:
- Trail difficulty labels
- Distance/elevation labels
- Trail type filters
- Map UI strings
- Trail-specific detail page labels

(Exact strings not documented — would require opening the namespace in CMS Settings > Translation > Static Namespaces)

---

## Rebuild Implications

### What Needs Rebuilding
1. **Hiking listings browse page** — Filtered view of CRM Listings by outdoor recreation category
2. **Listing detail template** — Standard listings detail with trail-specific fields (map, difficulty, distance)
3. **Themed trail pages** — Custom editorial content (Outdoor Arts Trail, Salt Lake Sips Trail)
4. **Ski resort trail map pages** — Sub-pages under each ski resort
5. **External integrations** — AllTrails and Outdooractive links on trail detail pages

### What Does NOT Need Separate Building
- Trails are NOT a separate content type — they use the standard Listings detail template
- No separate trails CMS module needed — they're managed in CRM
- The translation namespace handles trail-specific UI strings within the existing translation system

### Key Consideration
- Trail data lives in **Simpleview CRM**, not the CMS
- If the CRM is replaced, trail listings need to be migrated or re-created
- AllTrails and Outdooractive integrations are simple external links — easy to replicate

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-38/)
- `01-search-trails.png` — Site search results for "trails" showing blog posts + listings
- `02-trail-listing-detail.png` — Memory Grove Trail listing detail page

### Raw Data (docs/marketing-site-research/raw/phase-38/)
- `01-search-trails.html` — Search results full HTML
- `02-trail-listing-detail.html` — Trail listing detail full HTML with widget composition
