# Category Index Page (Restaurants) — visitsaltlake.com

Audited 2026-03-19 from `/restaurants/`.

This template is reused across the site for browsing listings by category — restaurants, events, things to do, etc. The restaurants page is a representative example. There are ~100+ pages using this pattern.

---

## What Users See

### Hero Section
- Full-width hero video with title overlay: "Salt Lake Food Scene"
- Video background (autoplaying, likely muted)

### Blog Article Carousel
- 8 curated blog articles about dining:
  - Vegan Guide, Culinary Scene, Kid Friendly, Patios, James Beard, Chinatown, Brunch, etc.
- Horizontal scroll/carousel format
- Articles link to `/blog/stories/` pages

### Tab Navigation (Category Switcher)
- 3 toggle buttons: **Experiences** / **Cuisines** / **Drinks**
- Switching tabs changes the category card grid below — this is NOT connected to the filter panel
- Acts as a curated "browse by theme" layer on top of the filterable listing grid

### Category Cards (under tabs)
- **Experiences tab**: New Restaurant Openings, Fine Dining, Romantic, Outdoor Seating, Food Trucks, Kid Friendly, Coffee Shops, Breweries & Microbreweries
- Each card is a visual link to a sub-category page or filtered view
- Cards have images and labels

### Discount Passport CTA
- Promotional block for the Salt Lake Discount Passport (Bandwango)
- Appears between the curated content and the listing grid

### Photo Gallery
- Grid of photos (likely CRM-sourced images from featured restaurants)

### Filter Panel
- **Keyword search**: Text input for searching listings by name
- **Category checkboxes with counts**:
  - Bakery/Cafe/Deli (370)
  - Fast Food (339)
  - American & Burgers (322)
  - Mexican (187)
  - Asian (163)
  - Wheelchair Accessible (61)
- **Location checkboxes with counts**:
  - Downtown (251), Central City (87), Sugarhouse (78), Avenues/Capitol Hill (21), University/Foothill (34), Cottonwood Heights (45), Midvale (108), South Salt Lake (82), Millcreek (88), Holladay/Murray (159), Sandy (165), Draper (99), Southwest Valley (202), West Valley (243), Little Cottonwood (24), Big Cottonwood (11), Park City (7)
- **Reset button**: Clears all filters

### Listing Cards Grid
- 20 listings visible (alphabetical sort)
- Each card shows:
  - Listing image
  - Business name
  - TripAdvisor star rating + review count (on some listings, not all)
  - "Learn More" link to the listing detail page
- No map view visible on this page
- No visible pagination or "Load More" button — unclear how users access listings beyond the first 20

### FAQ Section
- Accordion-style FAQ at the bottom of the page
- Likely SEO-targeted content about dining in Salt Lake City

---

## What Users Can Do

- **Watch the hero video** (autoplaying background)
- **Browse curated blog articles** via the carousel
- **Switch between category themes** using Experiences / Cuisines / Drinks tabs
- **Click category cards** to navigate to sub-category pages
- **Search listings by keyword** using the text input
- **Filter by category** using checkboxes (multi-select, counts update)
- **Filter by location/neighborhood** using checkboxes (multi-select)
- **Combine filters** — keyword + category + location can be used together
- **Reset all filters** with the Reset button
- **Click through to listing detail pages** from any card
- **Read FAQs** about dining in Salt Lake City

---

## Data Sources

| Data | Source | Notes |
|------|--------|-------|
| Listing cards (name, image, category, location) | Simpleview CRM | ~2,000+ restaurant listings based on filter counts |
| Category checkbox counts (370 Bakery, 339 Fast Food, etc.) | Simpleview CRM | Dynamically computed from listing data — counts reflect total listings per category |
| Location checkbox counts | Simpleview CRM | Geo-based grouping of listings into neighborhoods/cities |
| TripAdvisor ratings on cards | TripAdvisor API | Only appears on some listings — presumably those with TripAdvisor profiles |
| Blog articles in carousel | Simpleview CMS | Curated editorial content tagged to the restaurants section |
| Hero video | Simpleview CMS / asset CDN | Uploaded video asset |
| Category cards (Experiences, Cuisines, Drinks) | Simpleview CMS | Curated content — editorial team selects which sub-categories to feature |
| FAQ content | Simpleview CMS | Likely managed as a content block or FAQ content type |

---

## Third-Party Services

| Service | Purpose | Integration Type |
|---------|---------|------------------|
| **TripAdvisor** | Star ratings + review counts on listing cards | API data rendered per-card — not all listings show TripAdvisor data |
| **Bandwango** | Discount Passport CTA block | Promotional cross-sell embedded in the page |
| **VWO** | A/B testing on the Discount Passport section | Visual Website Optimizer experiments (see global-elements.md) |

---

## Edge Cases

- **Pagination/infinite scroll**: Only 20 listings are visible. With 2,000+ restaurants, there must be a load-more mechanism — but it wasn't visible during audit. Is it infinite scroll? Pagination? A "Show More" button below the fold? This is critical UX to understand.
- **Empty filter results**: What happens when a user applies filters that match zero listings? Is there an empty state message?
- **Tab vs. filter interaction**: The Experiences/Cuisines/Drinks tabs and the filter panel appear to be independent systems. Switching tabs does NOT change the filter checkboxes, and filtering does NOT change the tab selection. This is potentially confusing — users might expect them to work together.
- **Category count accuracy**: The checkbox counts (370 Bakery, 339 Fast Food, etc.) — do these update dynamically when other filters are applied, or are they static totals? If static, applying a "Downtown" location filter won't adjust the category counts, which can be misleading.
- **Listings without images**: Some of the 2,000+ listings likely have no photo. What placeholder is used on the card?
- **Listings without TripAdvisor**: TripAdvisor data appears on some cards but not others. The inconsistency in card layout (some with ratings, some without) may look unpolished.
- **Wheelchair Accessible as a "category"**: This is an accessibility attribute, not a cuisine/restaurant type. It's mixed in with categories like "Mexican" and "Fast Food" — which is architecturally odd. Should accessibility be a separate filter group?
- **Sort order**: Listings appear alphabetical. Is there any option to sort by rating, distance, popularity, or relevance? No sort control was observed.
- **Mobile filter UX**: The filter panel with dozens of checkboxes could be unwieldy on mobile. How does it collapse/expand?

---

## Admin Management

- **Listing data**: All listing content (name, category, location, images) managed in Simpleview CRM. Listings auto-populate onto this page based on their category assignment.
- **Featured content**: The hero video, blog carousel, and category cards (Experiences/Cuisines/Drinks tabs) are editorial — likely managed as CMS page content or widget configuration.
- **Filter options**: Category and location checkbox options are likely auto-generated from CRM data (all categories and neighborhoods that have at least one listing). Not manually curated.
- **FAQ content**: Managed in the CMS — likely a content block or structured FAQ entries attached to this page.
- **Sort/display order**: Default sort appears to be alphabetical. If there's a paid listing boost (Premiere Partners showing first), that logic would be in the CRM query configuration.

---

## Questions for Client

- [ ] **Pagination**: How do users access listings beyond the first 20? Is there load-more, infinite scroll, or pagination that wasn't visible during the audit?
- [ ] **Tab vs. filter relationship**: Are the Experiences/Cuisines/Drinks tabs intentionally separate from the filter panel? Has this caused user confusion? Should they be unified in the rebuild?
- [ ] **Filter count behavior**: Do the category/location counts update dynamically as other filters are applied (faceted search), or are they always showing total counts?
- [ ] **Sort options**: Is there any plan to add sort controls (by rating, distance, newest, etc.)? The current alphabetical-only sort limits discoverability.
- [ ] **Map view**: Other DMO sites offer a map view alongside list view for browsing listings. Is a map view desired for the rebuild?
- [ ] **Category card curation**: Who decides which sub-categories appear under Experiences/Cuisines/Drinks? How often do these change? Is it a manual editorial process?
- [ ] **Wheelchair Accessible filter**: This accessibility attribute is currently mixed in with cuisine categories. Should accessibility and amenity filters be broken out into their own group?
- [ ] **Hero video management**: How often does the hero video change? Who produces/uploads new videos? What's the file size and performance impact?
