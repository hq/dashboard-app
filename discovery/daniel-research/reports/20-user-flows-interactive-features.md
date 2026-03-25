# User Flows & Interactive Features Documentation

**Date:** 2026-03-24
**Task:** #20

---

## Overview

The Visit Salt Lake website has **12 distinct interactive features** beyond standard page navigation. These range from CRM-powered listing/event browsing with faceted filtering to a trip planner, compare tool, booking widget, and persistent shopping cart. All interactive features are built with Simpleview's custom JavaScript libraries loaded via RequireJS.

---

## 1. Listing Browse with Faceted Filtering

**Pages:** `/restaurants/`, `/places-to-stay/`, `/hospitality-jobs/`, and other listing category pages
**Widget:** `plugins_listings_layout_list`

### User Flow

```
User visits listing category page (e.g., /restaurants/)
  → Sees hero section + intro content
  → Scrolls to listing results area
  → FILTER: Keyword search, checkboxes by type/location/accessibility
  → SORT: "Sort by Recommended" (dropdown)
  → VIEW: Toggle between GRID and LIST views
  → BROWSE: Scroll through listing cards
  → CLICK: Card image/title → listing detail page
  → CLICK: "Learn More" → listing detail page
  → PAGINATION: Pages of results
```

### Filter System

| Filter Dimension | Type | Example (Restaurants) | Example (Places To Stay) |
|-----------------|------|----------------------|-------------------------|
| **Keyword** | Text search with "filter on keyword" button | Free text | Free text |
| **Category/Type** | Checkboxes with counts | Bakery/Café/Deli (369), Fast Food (339), American & Burgers (321), Mexican (187), Asian (163) | Hotels (137), Resort Properties (24), Extended Stay (23), Vacation Homes (16), B&Bs (5) |
| **Accessibility** | Checkbox | Wheelchair Accessible (61) | Wheelchair Accessible (86) |
| **Location** | Checkboxes grouped by area | Downtown (251), Central City (86), Sugarhouse (78), plus 10+ neighborhoods | Same geographic structure |
| **Mountain Resorts** | Sub-group checkboxes | Little Cottonwood (24), Big Cottonwood (11), Park City (7) | Little Cottonwood (13), Big Cottonwood (6), Park City (8) |
| **RESET** | Button | Clears all filters | Clears all filters |

### Display Controls

| Control | Options | Notes |
|---------|---------|-------|
| Sort | "Sort by Recommended" (default) | Single sort option visible; may have dropdown with more |
| View mode | GRID / LIST toggle | Icons for switching layout |
| Pagination | Page-based | Server-side pagination |

### Listing Card Components (Grid View)

| Element | Details |
|---------|---------|
| Image | Lazy-loaded, 400×249px, Cloudinary CDN |
| Title | Linked to detail page |
| Partner badge | "Premiere Partner" (if applicable) |
| Address | With map marker icon |
| Category | e.g., "Brewpub" |
| Region | e.g., "Downtown" |
| TripAdvisor rating | Star image + review count (e.g., "2117 reviews") — links to TripAdvisor |
| "Learn More" button | Links to detail page |

### Technical Notes
- Filters use checkbox inputs with result counts
- Results update via AJAX (no full page reload observed)
- GTM tracking on card clicks (`layoutjs_list_item_image`, `layoutjs_list_item_title`)
- TripAdvisor snippet embedded per card via `data-tripadvisor-beacon`

---

## 2. Event Browse with Date & Category Filtering

**Page:** `/events/`
**Widget:** `plugins_events_layout_list`

### User Flow

```
User visits /events/
  → Sees hero section + featured events carousel
  → Scrolls to event listing area
  → QUICK DATE: Click "TODAY" / "THIS WEEK" / "THIS WEEKEND" / "THIS MONTH"
  → FILTER: Keyword search + category checkboxes + location checkboxes
  → BROWSE: Scroll through event cards
  → CLICK: Event card → event detail page
```

### Filter System

| Filter Dimension | Type | Options |
|-----------------|------|---------|
| **Keyword** | Text search | Free text |
| **Date quick-filters** | Buttons | TODAY, THIS WEEK, THIS WEEKEND, THIS MONTH |
| **Category** | Checkboxes with counts | Music (323), Art (222), Festivals & Special Events (178), Classes & Workshops (163), Outdoor Recreation (106) |
| **Audience/Type** | Checkboxes | Discounts & Free (276), Free (244), Family (156), 801 Creative Women (22), LGBTQIA+ (14) |
| **Location** | Checkboxes grouped by area | Downtown (197), Central City (33), University/Foothill (51), etc. |
| **Mountain Resorts** | Sub-group | Little Cottonwood (15), Park City (37) |
| **Extended Area** | Checkboxes | Davis/Ogden (81), Provo/Orem (154), Other Utah/Out of State (144) |

### Key Differences from Listing Browse
- **Date quick-filter buttons** are unique to events (not on listings)
- **Audience tags** (Free, Family, LGBTQIA+) are event-specific filters
- **Extended geographic area** beyond Salt Lake County (Davis/Ogden, Provo/Orem)
- No GRID/LIST toggle observed
- No TripAdvisor ratings on event cards

---

## 3. Listing Detail Page — Tabbed Content

**Pages:** `/listing/{name}/{id}/` (4,629 pages)
**Widget:** `plugins_listings_detail`

### User Flow

```
User arrives at listing detail (from browse, search, or direct link)
  → Sees image gallery (carousel with "X OF Y" counter)
  → Sees title, address, phone, VISIT WEBSITE + CHECK RATES buttons
  → TABS: Click to switch between content sections
  → MAP: Click "MAP OF LOCATION" to expand map
  → SHARE: Click share button for social sharing links
  → SCROLL: See promotional sidebar (Ski Pass, Experience Marketplace, etc.)
```

### Tab System

| Tab | Content | Notes |
|-----|---------|-------|
| **OVERVIEW** | Description, nearby attractions links | Default active tab |
| **FEATURES** | Amenity/feature list | Hotel-specific |
| **REVIEWS** | TripAdvisor/Yelp review integration | External review data |
| **FACILITIES** | Room types, capacity, specifications | Venue-specific |
| **RELATED STORIES** | Blog posts related to this listing | Cross-content reference |
| **MAP OF LOCATION** | Interactive Outdooractive/Leaflet map | Separate button (not tab) |

### Listing Detail Variants by Type

| Listing Type | Unique Elements |
|-------------|----------------|
| **Hotels** | CHECK RATES button, FEATURES tab, FACILITIES tab |
| **Restaurants** | TripAdvisor rating prominently displayed |
| **Trails** | FLYOVER PREVIEW button (Outdooractive 3D), enlarge map, AllTrails/Outdooractive links |
| **Attractions** | Threshold360 virtual tour (on some) |

### Image Gallery
- Carousel with slide counter ("1 OF 12")
- Click to view larger (GLightbox lightbox)
- Lazy-loaded images from Simpleview CDN

---

## 4. Event Detail Page

**Pages:** `/event/{category}/{name}/{id}/` (1,898 pages)
**Widget:** `plugins_events_detail`

### User Flow

```
User arrives at event detail
  → Sees event image (if available, "X OF Y" counter)
  → Sees title, VISIT WEBSITE button, venue name link
  → MAP OF LOCATION button
  → OVERVIEW tab with Event Info (dates, times, venue, description)
  → SHARE button for social sharing
```

### Event Detail Components

| Element | Details |
|---------|---------|
| Image gallery | Single or multiple images with counter |
| Title | Event name as H1 |
| VISIT WEBSITE | External link to event's own website |
| Venue link | Links to venue listing on visitsaltlake.com |
| MAP OF LOCATION | Interactive map showing event venue |
| OVERVIEW tab | Event dates, times, description, venue details |
| Share links | Social sharing (expandable) |

### Simpler than Listing Detail
- Typically only OVERVIEW tab (no FEATURES, REVIEWS, FACILITIES)
- No TripAdvisor/Yelp integration
- No booking widget
- Event-specific fields: date range, recurrence, venue

---

## 5. Trip Planner / Trip Builder

**Scripts:** `custom_tripbuilder_component.js`, `site_tripbuilder.js`, `tripbuilder/public/js/main.js`
**Translation namespace:** `translations.static.tripbuilder`
**Widget counter:** `tripbuilder_counter` (seen on hospitality jobs page)

### Functionality (from code analysis)

The Trip Builder is a Simpleview platform feature that allows visitors to save listings and events to a personal itinerary.

| Feature | Implementation |
|---------|---------------|
| **Add to trip** | Button/icon on listing cards or detail pages |
| **Persistence** | Cookie/localStorage based (no account required) |
| **Counter** | `tripbuilder_counter` widget shows saved item count in header area |
| **View trip** | Dedicated trip builder page (URL TBD — may be modal or page) |
| **Export/Share** | Print, email, or share trip plan (needs further investigation) |

### Technical Architecture
- 3 JS files loaded on all pages with listing content
- RequireJS module: `plugins/tripbuilder/`
- Translation namespace confirms UI strings exist for 8 languages
- Operates client-side with localStorage/cookie for anonymous users

### Rebuild Implications
- Medium complexity — needs save/view/remove/export functionality
- Anonymous usage (no login required) via client-side storage
- May need to integrate with new CMS's content model for listing references

---

## 6. Compare Tool

**Page:** `/compare/`
**Script:** `custom_layoutjs/click_to_compare_component.js`
**Widget:** `plugins_listings_layout_compare`

### Functionality

| Feature | Implementation |
|---------|---------------|
| **Add to compare** | Click-to-compare button on listing cards (via `click_to_compare_component.js`) |
| **Compare page** | `/compare/` — shows selected listings side-by-side |
| **Empty state** | Page shows promotional content when no items are added |
| **Persistence** | Cookie/localStorage based |
| **Max items** | TBD — likely 2-4 items for side-by-side comparison |

### Compare Page (Empty State)
When no items are added, the compare page shows:
- Standard promotional sidebar (Ski Pass, Experience Marketplace)
- No compare-specific UI visible without items added

### Rebuild Implications
- Low-medium complexity — add/remove items, side-by-side display
- Needs to display key listing fields for comparison
- Client-side state management

---

## 7. Quick View Overlay

**Scripts:** `custom_quickview/component.js`, `custom_quickview/site_quickview.js`, `custom_quickview/quickview.js`

### Functionality

Quick View provides a preview overlay/modal for listings without navigating to the full detail page.

| Feature | Implementation |
|---------|---------------|
| **Trigger** | Hover or click on listing card (likely hover-based overlay) |
| **Content** | Abbreviated listing info: image, title, address, key details |
| **Actions** | Link to full detail, possibly add-to-trip, compare |
| **Dismissal** | Click outside or close button |

### Technical Architecture
- 3 JS files for quickview functionality
- Loaded on pages with listing browse results
- Likely a lightweight modal/popover

---

## 8. Booking Widget (RootRez)

**Page:** `/places-to-stay/`
**Widget:** `plugins_common_booking`
**Service:** RootRez (`rootrez-booking`)
**Endpoint:** `lodging.visitsaltlake.com/search`

### User Flow

```
User visits /places-to-stay/
  → Sees "BOOK YOUR STAY" widget at top
  → SELECT: Check-in date (date picker)
  → SELECT: Check-out date (date picker)
  → SELECT: Guests count (dropdown, default: 1)
  → SUBMIT: Form submits to lodging.visitsaltlake.com/search
  → REDIRECT: User taken to external booking search results
```

### Booking Widget Fields

| Field | Type | Notes |
|-------|------|-------|
| Check-in date | Date picker (SVG calendar icon) | mm/dd/yy format |
| Check-out date | Date picker | mm/dd/yy format |
| Guests | Dropdown/counter | Default: 1 |
| Submit | Form action | GET to `http://lodging.visitsaltlake.com/search` |

### Technical Details
- Widget GUID: `8c34eeae-2510-4b3b-afa9-7e8f6df67417`
- External service: RootRez booking platform
- Form method: GET (search parameters in URL)
- No deals section currently displayed (`no-deals` CSS class)

### Rebuild Implications
- External integration with RootRez/lodging platform
- Need to confirm if RootRez relationship continues
- Date picker UI component needed
- Redirect to external booking engine

---

## 9. Persistent Cart (Connect Pass)

**Script:** `connectpass.visitsaltlake.com/js/checkout/persistent-cart/persistentCart.js`
**Domain:** `connectpass.visitsaltlake.com`

### Functionality

The Connect Pass persistent cart allows visitors to add experience/attraction passes to a shopping cart that persists across pages.

| Feature | Implementation |
|---------|---------------|
| **Cart items** | Experience passes (Salt Lake Explorer Pass, Family Faves, Uniquely Salt Lake Pass) |
| **Persistence** | Cross-page via external script (likely cookie/session) |
| **Cart display** | Persistent cart button/indicator (configurable in Page Builder: "Show persistent cart button in place of link") |
| **Checkout** | Redirects to `connectpass.visitsaltlake.com` for payment |

### Connect Pass Products (from footer/sidebar)
- Salt Lake Explorer Pass
- Family Faves Pass
- Uniquely Salt Lake Pass

### Page Builder Integration
- Slide content type has fields: `Cart bwitemid`, `Cart bwitemtype`, `Show persistent cart button`
- Container widgets: "Container - Connect Pass Footer Promotion", "Container - Ski Super Pass Footer Promotion"
- CTA widget: "Custom - Call to Action - Experience Marketplace"

### Rebuild Implications
- High complexity — e-commerce integration with Connect Pass platform
- Need to confirm if Connect Pass relationship continues
- Persistent cart state across pages
- Product catalog integration

---

## 10. Photo Gallery / Lightbox

**Library:** GLightbox
**Usage:** Listing detail pages, blog posts, CrowdRiff UGC galleries

### User Flow

```
User clicks image on listing detail
  → GLightbox modal opens with full-size image
  → NAVIGATE: Left/right arrows between images
  → COUNTER: "X OF Y" slide counter
  → CLOSE: Click X or outside to dismiss
```

### Implementation Details
- GLightbox library (bundled with Simpleview)
- Listing detail: carousel with slide counter ("1 OF 12")
- CrowdRiff UGC: social media photo grid with lightbox
- Plyr video player integrates with lightbox for video content

---

## 11. Interactive Maps

**Listing detail:** Outdooractive + Leaflet.js
**Map Publisher:** 6 custom CMS maps
**Trail listings:** 3D flyover preview

### Listing Detail Maps

| Feature | Implementation |
|---------|---------------|
| **Provider** | Outdooractive (API key: IJFHEFKA-EMWGKWRF-4OSSHXTT) |
| **Renderer** | Leaflet.js 1.9.4 |
| **Trigger** | "MAP OF LOCATION" button on detail page |
| **Content** | Pin showing listing/event location |
| **Enlarge** | "enlarge map" button for full-size view |
| **Trail flyover** | "FLYOVER PREVIEW" button on trail listings (Outdooractive 3D) |

### Map Publisher (CMS)
6 custom interactive maps created in CMS Map Publisher module:
- Kim's Test map
- West Valley Hotels and Sports Venues
- Downtown Hotels and Sports Venues
- South Valley Hotels and Sport Venues
- Downtown Restaurants/Bars/Coffee Shops
- Free Things To Do Map

### Rebuild Implications
- Outdooractive API integration for listing maps
- Leaflet.js or alternative map library
- 3D flyover feature for trail content
- 6 custom maps to recreate or integrate differently

---

## 12. Social Sharing

**Widget:** `common_social_share`
**Trigger:** "show share links" button (expandable)

### Sharing Flow

```
User clicks share button on any page
  → Share links panel expands
  → Available: Facebook, Twitter/X, Email, Print, Copy Link (varies)
  → Click platform → Opens share dialog
```

### Implementation
- Present on all content pages (listings, events, blog, CMS pages)
- Expandable panel (collapsed by default, `expanded=false`)
- GTM tracking on share interactions

---

## 13. Content Tabs (Things To Do)

**Page:** `/things-to-do/`
**Type:** Category tab switcher

### Tab System

| Tab | Content |
|-----|---------|
| ATTRACTIONS & HISTORIC SITES | Cards: Attractions, Great Salt Lake, Zoos & Gardens, Historic Sites, Free Things, Things with Kids |
| TOURS & EXPERIENCES | Tour/experience cards |
| OUTDOOR RECREATION | Outdoor activity cards |
| NIGHTLIFE & ENTERTAINMENT | Nightlife venue cards |

### Implementation
- Button-based tab switching (not URL-based)
- Each tab shows a grid of category cards
- Cards link to sub-category pages
- Client-side tab switching (no page reload)

---

## 14. CrowdRiff UGC Gallery

**Service:** CrowdRiff (`starling.crowdriff.com`)
**Pages:** Homepage, Things To Do, key landing pages

### User Flow

```
User scrolls to UGC section ("See How Visitors Share Their Adventures")
  → Sees grid of social media photos
  → CLICK: Photo thumbnail → lightbox/modal opens
  → BROWSE: Navigate between photos
  → VIEW: See original social media context
```

### Implementation
- External embed from CrowdRiff platform
- Pulls Instagram/social photos tagged with Salt Lake hashtags
- Button-based thumbnails in the accessibility tree
- Loaded asynchronously

---

## 15. Header Interactive Elements

### Weather Widget

| Feature | Implementation |
|---------|---------------|
| **Trigger** | "toggle weather dropdown" button |
| **Content** | Current weather conditions for Salt Lake City |
| **Widget** | `weather_weather` |

### Search

| Feature | Implementation |
|---------|---------------|
| **Trigger** | "toggle search dropdown" button or direct searchbox input |
| **Searchbox** | `Site Search` — present in header of every page |
| **Submit** | Navigates to `/search/?q={query}` |
| **Autocomplete** | Present (documented in Task 6) |

### Mobile Navigation

| Feature | Implementation |
|---------|---------------|
| **Trigger** | "toggle navigation menu" button (hamburger) |
| **Content** | Full site navigation in accordion format |
| **Sub-menus** | "open submenu" buttons for each section |

---

## Feature Inventory Summary

| # | Feature | Complexity | Pages | Rebuild Priority |
|---|---------|-----------|-------|-----------------|
| 1 | Listing browse with faceted filtering | High | ~10 browse pages + 4,629 listings | Critical |
| 2 | Event browse with date/category filtering | High | Events page + 1,898 events | Critical |
| 3 | Listing detail tabbed content | High | 4,629 pages | Critical |
| 4 | Event detail page | Medium | 1,898 pages | Critical |
| 5 | Trip Planner / Trip Builder | Medium | Global (all listing pages) | High |
| 6 | Compare Tool | Low-Medium | `/compare/` + listing cards | Medium |
| 7 | Quick View overlay | Low-Medium | Listing browse pages | Medium |
| 8 | Booking widget (RootRez) | Medium | `/places-to-stay/` | High |
| 9 | Persistent Cart (Connect Pass) | High | Global (all pages) | High |
| 10 | Photo gallery / lightbox | Low | Listing/event detail pages | High |
| 11 | Interactive maps (Outdooractive) | Medium | Listing/event detail pages | High |
| 12 | Social sharing | Low | All content pages | Low |
| 13 | Content tabs | Low | Things To Do, similar pages | Low |
| 14 | CrowdRiff UGC gallery | Medium | Homepage, key pages | Medium |
| 15 | Header (weather, search, mobile nav) | Medium | Global | Critical |

---

## Technical Architecture Summary

### JavaScript Loading

All interactive features are loaded via **RequireJS** as AMD modules. Key scripts:

| Script | Purpose | Scope |
|--------|---------|-------|
| `custom_tripbuilder_component.js` | Trip builder UI component | Listing pages |
| `site_tripbuilder.js` | Trip builder site integration | Global |
| `tripbuilder/public/js/main.js` | Trip builder core logic | Global |
| `custom_quickview/component.js` | Quick view component | Listing browse |
| `custom_quickview/site_quickview.js` | Quick view site integration | Listing browse |
| `custom_quickview/quickview.js` | Quick view core | Listing browse |
| `click_to_compare_component.js` | Compare feature | Listing browse |
| `persistentCart.js` | Connect Pass cart | Global (external) |
| `custom_listings_lib.js` | Listing browse/filter logic | Listing pages |
| `custom_forms.js` | Form handling | Form pages |
| `custom_yelp_component.js` | Yelp review integration | Listing detail |
| `custom_tripadvisor_component.js` | TripAdvisor integration | Listing detail |
| `custom_components/threshold360/viewer.js` | 360° virtual tours | Some listing details |

### State Management

| Feature | Storage Method | Scope |
|---------|---------------|-------|
| Trip Builder | Cookie/localStorage | Per-browser, anonymous |
| Compare | Cookie/localStorage | Per-browser, anonymous |
| Connect Pass Cart | External (connectpass subdomain) | Cross-session |
| Filter selections | URL parameters | Shareable/bookmarkable (TBD) |
| Language preference | Cookie (`googtrans`) | Per-browser |

### External Service Dependencies

| Feature | External Service | Domain |
|---------|-----------------|--------|
| Booking widget | RootRez | lodging.visitsaltlake.com |
| Persistent cart | Connect Pass | connectpass.visitsaltlake.com |
| Listing maps | Outdooractive + Leaflet | outdooractive.com |
| Reviews (listings) | TripAdvisor | tripadvisor.com |
| Reviews (listings) | Yelp | (via custom component) |
| UGC gallery | CrowdRiff | starling.crowdriff.com |
| Virtual tours | Threshold360 | (embedded viewer) |
| Translation | GTranslate | cdn.gtranslate.net |

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-20/)
- `01-homepage-overview.png` — Homepage with hero carousel, CrowdRiff, events
- `02-things-to-do-browse.png` — Things To Do with category tabs
- `03-restaurants-listing-browse.png` — Restaurant listing with filters
- `04-listing-detail-evo-hotel.png` — Hotel listing detail with tabs
- `05-compare-tool.png` — Compare page (empty state)
- `06-events-browse.png` — Events page with date/category filters
- `07-places-to-stay-booking.png` — Places To Stay with RootRez booking widget
- `08-restaurants-listing-cards.png` — Listing cards with TripAdvisor ratings
- `09-listing-detail-trail-map.png` — Trail listing with map and flyover
- `10-event-detail.png` — Event detail page

### Raw Data (docs/marketing-site-research/raw/phase-20/)
- `04-listing-detail-snapshot.txt` — Listing detail accessibility snapshot
- `10-event-detail.html` — Event detail full HTML
