# Places to Stay Page — visitsaltlake.com

Audited 2026-03-19 from `/places-to-stay/`.

This page serves as the primary entry point for accommodation browsing. It follows the same category index pattern as `/restaurants/` but with accommodations-specific content and a notably smaller dataset (~204 listings vs. ~2,000+ restaurants).

---

## What Users See

### Breadcrumb
- Home | Places To Stay
- Standard breadcrumb navigation at top of page

### "Search" Button
- Prominent "Search" button at the top of the page
- Purpose unclear from the audit — may open a date-based availability search interface (hotel booking flow) rather than the standard keyword filter below

### Category Links (Text)
- Plain text links to sub-categories:
  - Mountain Resorts
  - Vacation Homes and Condos
  - Hotels and Motels
  - Bed & Breakfast Inns
  - Pet Friendly
  - Campgrounds

### Category Cards (Visual)
- 6 visual cards with images:
  - Hotels
  - Resorts
  - Downtown
  - Bed & Breakfasts & Inns
  - Extended Stay
  - Special Package Deals
- "Special Package Deals" stands out — suggests CMS-managed promotional content rather than a standard CRM category

### Filter Panel
- **Keyword search**: Text input
- **Type checkboxes with counts**:
  - Hotels (136)
  - Resort Properties (24)
  - Extended Stay (23)
  - Vacation Homes & Condos (16)
  - Bed & Breakfasts (5)
- **Location checkboxes with counts**:
  - Downtown (36), Central City (3), Sugarhouse (2), Avenues/Capitol Hill (number not captured), University/Foothill (number not captured), Cottonwood Heights, Midvale, South Salt Lake, Millcreek, Holladay/Murray, Sandy, Draper, Southwest Valley, West Valley, Little Cottonwood, Big Cottonwood, Park City (7), Davis/Ogden (2), Other Utah (4)
- **Reset button**: Clears all filters

### Hotel Listing Cards
- 20 listings visible (alphabetical sort)
- Each card shows:
  - Hotel image
  - Hotel name
  - TripAdvisor star rating + review count (on many listings)
  - "Learn More" link to the listing detail page
- TripAdvisor integration is more prominent here than on restaurants — hotels are more likely to have TripAdvisor profiles

### Blog Article Carousel
- 4 curated articles:
  - Airbnbs
  - Top 10 TripAdvisor Hotels
  - Spas & Salons
  - Hotel Scene
- Links to `/blog/stories/` pages

### Photo Gallery
- Grid of accommodation photos

### FAQ Section
- Accordion-style FAQ about places to stay in Salt Lake City
- Likely SEO-targeted content

---

## What Users Can Do

- **Click the "Search" button** — unclear functionality; may open a booking/availability search
- **Browse by category** via text links or visual category cards
- **Search listings by keyword** using the text input
- **Filter by accommodation type** using checkboxes (multi-select)
- **Filter by location/neighborhood** using checkboxes (multi-select)
- **Reset all filters** with the Reset button
- **Click through to hotel detail pages** from listing cards
- **Read TripAdvisor ratings** on cards (where available)
- **Browse related blog articles** in the carousel
- **Read FAQs** about accommodations

---

## Data Sources

| Data | Source | Notes |
|------|--------|-------|
| Hotel listings (name, image, type, location) | Simpleview CRM | ~204 total accommodation listings based on filter counts (136 + 24 + 23 + 16 + 5) |
| Type checkbox counts | Simpleview CRM | Dynamically computed — Hotels (136) dominates |
| Location checkbox counts | Simpleview CRM | Geo-based grouping; Downtown (36) is the largest cluster |
| TripAdvisor ratings on cards | TripAdvisor API | Appears on many hotel cards — higher coverage than restaurants |
| Blog articles in carousel | Simpleview CMS | 4 curated articles about accommodations |
| Category cards content | Simpleview CMS | Curated editorial — images and labels for the 6 category cards |
| "Special Package Deals" | Simpleview CMS or CRM | Likely promotional content — may be partner-submitted deals or staff-curated packages |
| FAQ content | Simpleview CMS | Managed content block |
| "Search" button functionality | Unknown | May connect to Ripe booking engine or a Simpleview availability search |

---

## Third-Party Services

| Service | Purpose | Integration Type |
|---------|---------|------------------|
| **TripAdvisor** | Star ratings + review counts on hotel cards | API data — higher coverage on hotels than restaurants |
| **Ripe (potential)** | Hotel booking/availability search | Not visible on the index page — but the "Search" button at top may open a Ripe-powered interface. Need to check individual hotel detail pages for "Book Now" functionality |
| **Bandwango** | Discount Passport (if present on this page) | May appear as a CTA block — common across index pages |

---

## Edge Cases

- **The mysterious "Search" button**: This is the biggest unknown. It sits at the top of the page, separate from the keyword filter below. On an accommodations page, this likely opens a date-based availability search (check-in, check-out, guests). If so, it's a fundamentally different interaction from the filter panel — and a critical feature to understand for the rebuild.
- **"Special Package Deals" category**: Unlike Hotels, Resorts, or B&Bs, this isn't a CRM listing type — it's promotional content. How is it managed? Is it a curated CMS page, a filtered listing view, or partner-submitted deals? This hybrid of editorial and data-driven content needs a clear content model in the rebuild.
- **Small dataset, many locations**: With only ~204 listings spread across 17+ location checkboxes, many location filters will return very few results (Central City: 3, Sugarhouse: 2). The UI may feel sparse. Consider whether all these location options are useful or if they should be consolidated.
- **Vacation Homes & Condos (16)**: Only 16 listings in this category. Are these individually-managed CRM listings, or should they link to an Airbnb/VRBO integration instead? The blog carousel includes an "Airbnbs" article — but the listing data appears to be CRM-only.
- **Davis/Ogden and Other Utah locations**: These are outside the core Salt Lake area. Do accommodations in these areas serve VSL's audience, or are they spillover from a broader CRM dataset?
- **Park City (7)**: Park City has its own DMO (visitparkcity.com). Including Park City hotels here may create confusion or conflict. Is this intentional cross-promotion?
- **Listings without TripAdvisor**: While hotel TripAdvisor coverage is higher than restaurants, some cards will still lack ratings. The visual inconsistency between cards with and without ratings needs design attention.
- **Pagination**: Same as restaurants — only 20 listings visible out of ~204 total. Pagination or load-more mechanism was not observed.

---

## Admin Management

- **Accommodation listings**: All hotel/resort data managed in Simpleview CRM. Properties likely update their own information via the extranet (photos, amenities, description).
- **Category cards**: The 6 visual cards (Hotels, Resorts, Downtown, B&Bs, Extended Stay, Special Package Deals) are editorial — managed as CMS page content or widget configuration.
- **Category text links**: The 6 text links (mountain resorts, vacation homes, etc.) appear to be a separate curated list from the visual cards — possibly hardcoded or managed as a navigation element.
- **Filter options**: Type and location checkboxes are auto-generated from CRM data. Not manually curated.
- **Blog carousel**: 4 articles curated for this page — editorial team selects which articles to feature.
- **FAQ content**: Managed in the CMS.
- **"Search" functionality**: If this connects to Ripe or another booking engine, configuration is likely at the platform/integration level — not something the editorial team manages.

---

## Questions for Client

- [ ] **"Search" button**: What does this button do? Does it open an availability/date search powered by Ripe or another booking engine? Is this the primary conversion action for hotel bookings?
- [ ] **Ripe integration**: Where exactly does the Ripe booking integration appear? On individual hotel detail pages as a "Book Now" button? As an availability search overlay? What data does Ripe need (dates, room type, guest count)?
- [ ] **Special Package Deals**: How are these managed? Are they CMS content pages, CRM-driven listings, or partner-submitted promotions? How often do they change?
- [ ] **Vacation Homes & Condos**: With only 16 listings, is this category serving users well? Has there been discussion about integrating with Airbnb/VRBO, or is the CRM the sole data source for vacation rentals?
- [ ] **Park City and Davis/Ogden listings**: Are these intentionally included? Is there a partnership or regional agreement that puts these outside-area properties on VSL's site?
- [ ] **Hotel extranet usage**: How many accommodation partners actively update their own listing data through the Simpleview extranet? What's the data freshness like — are hotel descriptions and photos generally up to date?
- [ ] **Booking attribution**: When a user clicks through from VSL to book a hotel (via Ripe or the hotel's own site), is there tracking or commission involved? How does VSL measure the value of accommodation referrals?
- [ ] **Category card vs. text link duplication**: The page has both text links (mountain resorts, vacation homes, etc.) and visual cards (Hotels, Resorts, Downtown, etc.) that partially overlap. Is this intentional, or could they be consolidated?
