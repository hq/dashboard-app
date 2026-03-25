# Template Identification & Visual Catalog

**Date:** 2026-03-24
**Task:** #15

**IMPORTANT: This is a sample-based analysis of 23 page types, not an exhaustive review of all 7,619 URLs. Additional template variants may exist in deeper sub-pages, seasonal content, CRM-generated category variants, and authenticated pages. Further investigation is recommended during the detailed frontend deep-dive tasks.**

---

## Overview

- **CMS Backend Layouts:** 11 (documented in Task 30)
- **Frontend Template Patterns Identified:** 21+ (from 23 sampled page types + industry/microsite templates from Tasks 35-37)
- **All consumer pages use:** `panel-header default` layout
- **Industry pages use:** section-specific layouts (Meetings Microsite, Sports, Secondary Nav variants)

---

## Backend Layouts → Frontend Templates Mapping

| CMS Layout | Used By | Template Pattern |
|-----------|---------|-----------------|
| Main Nav - Content | Homepage, Things To Do, Plan Your Visit, Neighborhoods, About Us, Contact | Content pages with hero, cards, callouts |
| Main Nav - Listings | Restaurants, Places To Stay | Listing browse pages with CRM feeds |
| Main Nav - Events | Events | Event browse page with calendar |
| Footer Nav - Content | Privacy Policy, Members, Press & Research | Footer section content pages |
| Secondary Nav - Content | Travel Trade, Film, Speak Salt Lake | B2B content pages |
| Secondary Nav - Listings | (B2B listing pages) | B2B with CRM listing feeds |
| Default - REDESIGN - Blank | Various system/utility pages | Minimal layout |
| Ski Section Page | Skiing & Snowboarding sub-pages | Ski-specific content |
| Meetings Microsite | Meetings section (46+ pages) | Meetings-dedicated template |
| Microsite - General | Convention microsites (79 pages) | Convention welcome template |
| Sports | Sports section (20 pages) | Sports-branded template |

---

## Consumer Site Template Patterns (from 23 sampled pages)

### Template 1: Homepage
**URL:** `/`
**Unique widgets:** `regions_map`, `container_intro`, `tab_callout_tile`, `event_marquee`
**Description:** Landing page with hero carousel, region map, event marquee, tab callouts, content cards, experience marketplace. Most complex page on the site.
**Widget count:** 39

### Template 2: Listing Browse (with CRM feed)
**URLs:** `/restaurants/`, `/things-to-do/`, `/hospitality-jobs/`
**Key widgets:** `listings_layout_list`, `activity`, `activity_card`, `container_expand_content`, `faqs`
**Description:** Category pages that display CRM listings in a filterable list. May include FAQ section, activity cards, and embedded content.
**Widget count:** 34-41
**Note:** Restaurants and Things To Do share this pattern but with different content configurations. Hospitality Jobs also uses listing layout but with `tripbuilder_counter`.

### Template 3: Listing Detail (CRM)
**URLs:** `/listing/{name}/{id}/`
**Key widgets:** `listings_detail`, Outdooractive maps, Yelp/TripAdvisor reviews
**Description:** Individual listing page with tabs (Overview, Details, Map, Photos), address/location, social sharing. CRM-generated content.
**Widget count:** 28
**Volume:** 4,629 pages

### Template 4: Accommodation (Places To Stay)
**URL:** `/places-to-stay/`
**Key widgets:** `listings_layout_list` + `common_booking` (unique booking widget), `faqs`
**Description:** Similar to listing browse but with a **booking widget** unique to accommodation pages.
**Widget count:** 39

### Template 5: Events Browse
**URL:** `/events/`
**Key widgets:** `events_layout_list`, `event_marquee`, `upcoming_events`
**Description:** Event listing/calendar page with event marquee, category filtering, and upcoming events display.
**Widget count:** 40

### Template 6: Event Detail (CRM)
**URLs:** `/event/{category}/{name}/{id}/`
**Key widgets:** `events_detail`
**Description:** Individual event page with date, venue, description. CRM-generated content.
**Widget count:** (standard + events_detail)
**Volume:** 1,898 pages

### Template 7: Blog Post Detail
**URLs:** `/blog/stories/post/{slug}/`
**Key widgets:** `blog_core_panel`, `blog_leisure_blog_posts`, `blog_leisure_blog_search`, `faqs`
**Description:** Blog article with content, related posts, blog search, social sharing. May include FAQ section.
**Widget count:** (standard + blog widgets)
**Volume:** 304 posts

### Template 8: Blog Archives
**URL:** `/blog/archives/`
**Key widgets:** `blog_leisure_blog_archives`
**Description:** Blog archive listing page with date-based filtering.

### Template 9: Articles/PR Post Detail
**URLs:** `/articles/post/{slug}/`
**Key widgets:** `nav_sitemap` (minimal)
**Description:** Press release/article display with minimal widgets.
**Volume:** 156 articles

### Template 10: Compare Tool
**URL:** `/compare/`
**Key widgets:** `listings_layout_compare`
**Description:** Side-by-side listing comparison tool. Unique page type.

### Template 11: Contact Page
**URL:** `/contact/`
**Key widgets:** `crm_formbuilder`, `primary_staff_list`
**Description:** Contact page with CRM-embedded form and staff directory listing.

### Template 12: Staff Directory
**URL:** `/staff-list/`
**Key widgets:** `primary_staff_list`
**Description:** Staff listing page.

### Template 13: Search Results
**URL:** `/search/?q={query}`
**Key widgets:** `search_results`
**Description:** Search results with faceted filtering by content type, pagination. Documented in Task 6.

### Template 14: Geographic Area Hub
**URLs:** `/salt-lake-city/`, `/midvalley/`, `/neighborhoods/downtown/`, `/sitemap/`
**Key widgets:** `nav_sitemap`
**Description:** Area landing pages showing sub-page navigation. Minimal content, primarily navigation-focused.

### Template 15: Neighborhoods Hub
**URL:** `/neighborhoods/`
**Key widgets:** `regions_map`, `regions_slides`
**Description:** Neighborhoods overview with interactive region map and neighborhood cards. Different from individual neighborhood pages.

### Template 16: Content Pages (General)
**URLs:** `/about-us/`, `/press-research/`, `/plan-your-visit/`
**Key widgets:** Standard cards, callout tiles, hero image, side-by-side
**Description:** General-purpose content pages built with page builder. Most flexible template — varies significantly by page.
**Note:** This is the "catch-all" template. Many pages may look different but share the same structural layout.

### Template 17: Ski Resort/Sub-section Detail
**URL:** `/things-to-do/skiing-snowboarding/ski-resorts/alta-ski-area/`
**Key widgets:** `faqs`, `embed`
**Description:** Content page with FAQ section and embedded content (trail maps, external widgets).

### Template 18: Tours/Experience Detail
**URL:** `/things-to-do/tours-experiences/salt-lake-sips-trail/`
**Key widgets:** `embed`
**Description:** Individual tour/experience page with embedded content.

---

## Industry/B2B Templates (from Tasks 35-37)

### Template 19: Industry Section (5 variants)
**URLs:** `/meetings/`, `/travel-trade/`, `/sports/`, `/film/`, `/speak-salt-lake/`
**Description:** Each B2B section has its own navigation bar and branding. Uses Secondary Nav layouts.
**Sub-variants:** Meetings (own layout), Sports (own layout + brand), Travel Trade/Film/Speak Salt Lake (shared Secondary Nav layout)

### Template 20: Convention Microsite
**URLs:** `/wmic2026/`, `/welcome-to-salt-lake/`, etc. (79 pages)
**Key widgets:** `hero_image_with_caption`, `marquee_side_by_side`, cards
**Description:** Templated convention welcome pages with event branding. Uses Microsite - General layout.

### Template 21: Meetings Microsite Sub-pages
**URLs:** `/meetings/why-salt-lake/`, `/meetings/venues/`, etc. (45+ pages)
**Key widgets:** Various — some have `events_layout_convention_calendar`, `video_player`
**Description:** Deep hierarchy of meeting planner content. Uses Meetings Microsite layout.

---

## Template Complexity Ranking

| # | Template | Rebuild Complexity | Volume | Notes |
|---|---------|-------------------|--------|-------|
| 1 | Homepage | High | 1 | Most complex, unique widgets |
| 2 | Listing Detail | High | 4,629 | CRM integration, maps, reviews, tabs |
| 3 | Event Detail | High | 1,898 | CRM integration, date handling |
| 4 | Listing Browse | High | ~10 pages | CRM feed, filtering, pagination |
| 5 | Events Browse | High | ~5 pages | Calendar, filtering, CRM feed |
| 6 | Blog Post | Medium | 304 | Content rendering, related posts |
| 7 | Places To Stay | Medium | 1 | Listing browse + booking widget |
| 8 | Compare Tool | Medium | 1 | Unique comparison functionality |
| 9 | Contact (CRM Form) | Medium | 1 | CRM form builder integration |
| 10 | Industry Sections | Medium | 5 sections | 5 nav variants + distinct branding |
| 11 | Convention Microsites | Medium | 79 | Templated but with custom branding |
| 12 | Meetings Sub-pages | Medium | 45+ | Deep hierarchy, venue pages |
| 13 | Neighborhoods Hub | Low-Medium | 1 | Region map widget |
| 14 | Blog Archives | Low | 1 | Archive listing |
| 15 | Search Results | Low-Medium | 1 | Faceted search |
| 16 | Geographic Hub | Low | ~6 | Sitemap navigation |
| 17 | Content Pages | Low | ~100+ | Page builder, flexible |
| 18 | Staff Directory | Low | 1 | Staff list widget |
| 19 | Articles Detail | Low | 156 | Minimal template |
| 20 | Ski Resort Detail | Low | ~10 | Content + FAQ + embed |
| 21 | Tours Detail | Low | ~12 | Content + embed |

---

## Shared Components (Present on All/Most Pages)

| Component | Widget | Notes |
|-----------|--------|-------|
| Header | `common_header` | Logo, weather, subscribe, search, nav |
| Main Navigation | `nav_main` ×3 | Three-column mega menu |
| Secondary Navigation | `nav_main` (secondary) | B2B links |
| Footer | `common_footer` + `common_footer_cta` | Links, sponsors, dynamic content |
| Breadcrumbs | `nav_breadcrumb` | Page hierarchy |
| Social Share | `common_social_share` | Share buttons |
| Cookie Banner | `common_cookie_banner` | GDPR consent |
| Google Translate | `googletranslate_gtranslate` | 8-language widget |
| Weather | `weather_weather` | Header weather display |
| Search Box | `search_headerbox` | Header search |
| A/B Testing | `ab_testing_inner/outer` | Active on some pages |
| Dynamic Content | `dynamic_content_inner/outer` | Personalization on some pages |
| Subscribe Button | `common_header_subscribe_button` | Header CTA |

---

## Areas Requiring Further Investigation

The following may have additional template variants not captured in this sample:

1. **Listing detail by category** — Hotels, restaurants, attractions, trails may render differently based on listing type
2. **Event detail by category** — Convention events vs general events may differ
3. **Deeper Things To Do sub-pages** — Individual attraction/activity pages
4. **Authenticated pages** — My Account, partner portal features
5. **Seasonal/promotional pages** — Temporary campaign templates
6. **Email templates** — Auto Responder content (could not access due to JS error)
7. **Error pages** — 404 template (seen briefly but not fully documented)
8. **Print stylesheets** — Print-specific rendering

---

## Artifacts

### Raw Data (docs/marketing-site-research/raw/phase-15/)
23 HTML files captured:
- `homepage.html` — Homepage
- `things-to-do.html` — Things To Do hub
- `events.html` — Events hub
- `restaurants.html` — Restaurants hub
- `places-to-stay.html` — Places To Stay hub
- `plan-your-visit.html` — Plan Your Visit hub
- `neighborhoods.html` — Neighborhoods hub
- `about-us.html` — About Us
- `contact.html` — Contact page
- `hospitality-jobs.html` — Hospitality Jobs
- `salt-lake-city.html` — Salt Lake City area
- `event-detail.html` — Event detail page
- `neighborhood-detail.html` — Neighborhood detail (Downtown)
- `ski-resort-detail.html` — Ski resort detail (Alta)
- `compare.html` — Compare tool
- `staff-list.html` — Staff directory
- `blog-archives.html` — Blog archives
- `blog-post-detail.html` — Blog post
- `articles-post-detail.html` — PR article
- `press-research.html` — Press & Research
- `midvalley.html` — Midvalley geographic area
- `tours-experience.html` — Tour/experience detail
- `search-results.html` — Search results
- `html-sitemap.html` — HTML sitemap
