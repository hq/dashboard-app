# Visit Salt Lake — CMS Replacement Research

## Current Stack
- **CMS**: SimpleView CMS (proprietary, WordPress-based)
- **CRM**: SimpleView CRM (external, handles Events + Listings)
- **Frontend**: Server-rendered HTML with `ccl-widget` component library (SimpleView CCL)
- **Database**: MongoDB (confirmed from Matt's call)
- **Domain**: www.visitsaltlake.com

## Scale

### Pages: 1,275 total across 7 navigation sections
| Section | Pages |
|---------|-------|
| Main Navigation | 357 |
| Footer Navigation | 306 |
| Conventions | 153 |
| System | 153 |
| Microsites | 153 |
| Industry | 102 |
| Meetings Microsite Nav | 51 |

### Content (from CRM/Modules)
- **Events**: 163+ without images, at least hundreds total
- **Listings**: 3,723+ (most without media)
- **Articles**: 1,030+ unpublished
- **Blog Posts**: 1,229+ unpublished
- **Unpublished Pages**: 195

### Traffic
- 136K pageviews/week
- 269 active users
- 44.4M member views
- 61% desktop / 38% mobile
- Avg session: 3:27

## CMS Architecture

### Navigation Sections (10)
1. Main Navigation — primary site nav (Things To Do, Events, Restaurants, etc.)
2. Secondary Navigation
3. Footer Navigation — press, about, members, policies
4. Microsites — standalone event/conference sites
5. Meetings Microsite Nav
6. Conventions — venue pages (Salt Palace, Mountain America Expo, Equestrian Park)
7. Landing Pages
8. External Links
9. System — 404, test pages
10. Industry — travel trade, sports, film

### Modules (6)
1. **Public Relations** — Articles, Articles (Ski City), Blog
2. **Collection Types** — 15 custom types (see below)
3. **Dynamic Content**
4. **Map Publisher**
5. **Auto Responder**
6. **Visitors**

### Collection Types (15 custom content types)
1. Alerts
2. Announcements
3. Contact Slides
4. Expanding Content
5. Hero Slides
6. Microsite Slides
7. Navigation Links
8. Neighborhood Slides
9. Questions (FAQ)
10. Regions Slides
11. Resort Slides
12. Slides (generic)
13. Social Slides
14. Staff Departments
15. Vertical Videos

### Homepage Component Types (CCL Widget Library)
- `core-marquee` — Hero slider/carousel
- `core-side-by-side` — Side-by-side content blocks
- `events-marquee` — Featured events banner
- `upcoming-events` — Event listing
- `related-content` — Content cards
- `marquee-side-by-side` — Combo layout
- `core-callout-tiles` — 2 and 3 column tile grids

## Third-Party Integrations
- Google Tag Manager (G-Q3027Z5YJW)
- Microsoft Clarity (4k98p3u3c3)
- Facebook Pixel (2 pixels)
- Pinterest Tag
- Monsido (accessibility/heatmaps)
- Storygize (native advertising)
- Datafy (tracking)
- Act-On (marketing automation)
- Shopify (external gift shop: visit-salt-lake.myshopify.com)

## Key Observations
1. **Events & Listings are in the CRM, not the CMS** — they redirect to a separate SimpleView CRM product. This is the hardest part to replace.
2. **15 custom collection types** are essentially reusable content blocks — straightforward to model in a modern CMS.
3. **1,275 pages** is large but manageable — the templates/layouts repeat.
4. **CCL widget system** means pages are composed of modular sections — maps well to a component-based architecture.
5. **Microsites** are standalone sub-sites (conferences, events) — need their own routing/theming.
6. **Member section** exists with thousands of paying members — needs auth + payments.
7. **~20 employees** use the back office daily.

## Data Files
- `data/dashboard/overview.json` — Dashboard stats & action items
- `data/sitemap/sections.json` — Navigation section index
- `data/sitemap/main-navigation.json` — Main nav top-level pages
- `data/sitemap/all-pages-raw.json` — All 1,275 pages with metadata
- `data/sitemap/pages-by-section.json` — Pages organized by section
- `data/modules/modules-overview.json` — CMS modules & collection types
- `data/public-site/homepage-structure.json` — Live site components & integrations
