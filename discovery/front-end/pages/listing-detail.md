# Listing Detail Page — visitsaltlake.com

Audited 2026-03-19 from `/listing/squatters-pub-brewery/54455/`.

This is the most complex page type on the site. With ~2,000+ listings in the CRM, this template serves restaurants, hotels, attractions, shops, and services. The volume of structured data per listing is enormous — dozens of CRM fields surface on a single page.

---

## What Users See

### Photo Gallery
- 9 images for this listing (Interior, Exterior, Patio, Mural, Pub, Dining, Grain Room, Event Space)
- Images served from `saltLake.simpleviewcrm.com/images/`
- Gallery appears as a prominent hero element at the top of the page

### Business Header
- **Listing tier badge**: "Premiere Partner" — indicates a paid/elevated listing level
- Business name as H1
- "Visit Website" external link
- Category label (e.g., "Brewpub")
- Neighborhood label (e.g., "Downtown")
- Street address: 147 W Broadway, Salt Lake City
- "Send Email" link (likely mailto or form)
- Phone number: (801) 363-2739

### TripAdvisor Integration
- Star rating: 4.5 out of 5
- Ranking text: "#17 of 1,473 Places to Eat in Salt Lake City"
- "Tripadvisor Traveler Rating" label with total review count (2,117 reviews)
- 5 full review excerpts embedded on-page — each with author name, individual star rating, date, and full review text
- "Read all reviews" link (likely to TripAdvisor) and "Write a Review" link
- "© TripAdvisor 2026" attribution footer

### Hours of Operation
- "Today's Hours: Open now" status indicator (dynamic based on current day/time)
- Full weekly schedule table: Monday through Sunday with open and close times

### Map & Directions
- Embedded map (likely Google Maps or Simpleview's mapping)
- "Get Directions" link pointing to Google Maps

### Overview
- Rich text description block (CMS-authored)
- Cross-promotion mentions — e.g., "Included in the Salt Lake Brewery Pass" (Bandwango integration)

### Features Section
A massive structured data block with dozens of CRM fields organized into groups:

**General Information:**
- Reservations: Accepted
- Take Out availability
- Kids Menu availability
- Cuisine Type (e.g., Brewpubs)
- Meals Served (Lunch, Dinner, Sunday Brunch, Weekend Brunch)
- Restaurant on Premises, Outdoor Seating, Tour Group Dining
- Bar/Lounge
- Days of Operation (e.g., 7 Days a Week)
- Liquor Service Available, Family Friendly

**Accessibility & Transit:**
- Wheelchair Accessible: "Fully wheelchair accessible"
- Public Transportation: within 1 block

**Pricing & Logistics:**
- Price range: $5-$25
- Miles From SLC: "In downtown SLC"
- Seasonal availability: Spring, Summer, Fall, Winter
- Pet Policy: Service Animals Only
- Internet Access: Complimentary
- Parking: For a Fee

**Payment & Discounts:**
- Payment Methods: Cash, AmEx, Diners Club, Discover, MC, Visa
- Discounts: Military
- Gift Shop availability

**COVID-19 Updates (legacy fields still displayed):**
- Cleaning protocols
- PPE information
- Restaurant-specific updates
- Mobile Payments acceptance
- Outdoor Dining, Online Orders, Dine-in, Takeout, Delivery flags

### Facilities Section (Meeting/Event Space)
Not all listings have this — appears on venues with event capabilities:

- Description of event spaces
- Floorplan file downloads
- Summary stats: Largest Room (450), Reception Capacity (450), Banquet Capacity (300), Number of Rooms (4), Buyout Capacity (Yes)
- AV Services availability
- Events contact: email, phone, venue contact name
- Venue Type classifications: Restaurant/Club, Meeting/Event Facility
- Catering Policy: Exclusive

**Room-by-room detail table** (6 rooms for this listing):
- Rooms: Main Dining, Potting Shed, Patio, Loft, Grain Room, Semi-Private, Private
- Columns: Total Sq. Ft., Width, Length, Height, Booth Capacity, Theater Capacity, Classroom Capacity, Banquet Capacity, Reception Capacity, Amphitheater, Listening Devices

### Related Stories
- 6 blog articles that mention or feature this venue
- Likely auto-linked via CMS tagging

### "What's Nearby" Section
- Tabbed interface: Attractions, Dining, Accommodations, Events, Things To Do
- Each tab shows nearby results with proximity distance
- Geo-based lookup from the listing's lat/long coordinates

---

## What Users Can Do

- **Browse photos** in the gallery (carousel or lightbox)
- **Visit the business website** via external link
- **Send an email** to the business
- **Call** the business (tel: link on mobile)
- **Get directions** via Google Maps
- **Read TripAdvisor reviews** on-page or click through to TripAdvisor
- **Write a TripAdvisor review** via outbound link
- **Download floorplans** for event spaces (PDF files)
- **Browse nearby listings** by category tab (Attractions, Dining, Accommodations, Events, Things To Do)
- **Share the page** via global share widget (Email, X, Facebook, LinkedIn, Reddit)
- **Read related blog articles** linking to this venue

---

## Data Sources

| Data | Source | Notes |
|------|--------|-------|
| Business name, address, phone, hours, category, neighborhood | Simpleview CRM | Core listing fields |
| All Features fields (cuisine, meals, accessibility, parking, payment, etc.) | Simpleview CRM | Dozens of structured fields per listing — many are checkbox/multi-select in the CRM |
| Facilities & room data | Simpleview CRM | Meeting planner module — room dimensions, capacities, AV, catering |
| Photos | Simpleview CRM | Hosted at `saltLake.simpleviewcrm.com/images/` |
| TripAdvisor rating, ranking, reviews | TripAdvisor API | Appears to be live or regularly synced — 2,117 reviews embedded |
| Related Stories | Simpleview CMS | Likely auto-tagged via CRM-to-CMS relationship |
| "What's Nearby" results | Simpleview CRM | Geo query based on listing lat/long |
| Listing tier (Premiere Partner) | Simpleview CRM | Paid membership tier — controls badge display and likely listing sort order |
| Bandwango cross-promo | Bandwango / CRM | "Included in the Salt Lake Brewery Pass" — may be a manual CMS field or Bandwango API |

---

## Third-Party Services

| Service | Purpose | Integration Type |
|---------|---------|------------------|
| **TripAdvisor** | Star ratings, ranking, embedded reviews | API integration (content API or widget) — displays live review data on-page |
| **Google Maps** | Embedded map, "Get Directions" link | Embed + outbound link |
| **Bandwango** | Discount Passport / Brewery Pass cross-promotion | Mentioned in listing description — unclear if API-driven or manual CMS content |
| **Simpleview CRM** | All listing data, images, facilities, room details | Core data source — CRM serves as the listing database |

---

## Edge Cases

- **Listings with no photos**: Some of the 2,000+ listings likely have zero images. Need to handle the gallery gracefully (hide it? show placeholder?).
- **Listings with no TripAdvisor data**: Not every business will have a TripAdvisor profile. The template must conditionally show/hide the entire TripAdvisor block.
- **Listings with no hours**: Some businesses (attractions, shops) may not have operating hours in the CRM.
- **Listings with no facilities data**: The Facilities section with room tables only applies to event-capable venues. Most restaurant and attraction listings won't have this. Need to understand what percentage of 2,000+ listings have facility data.
- **COVID-19 fields**: These are still rendering on-page. Many are likely outdated or blank. Decision needed on whether to carry these forward or drop them in the rebuild.
- **Stale data**: Listings with businesses that have closed, changed hours, or moved. Who is responsible for updating? Is there an extranet for partners?
- **Listing tier visibility**: "Premiere Partner" badge appears — but what happens for lower-tier or free listings? Do they get fewer features (no photos? no TripAdvisor? lower sort position)?
- **Very long Features sections**: Some listings may have dozens of populated fields while others have very few. The layout needs to handle both extremes.
- **Floorplan downloads**: PDF files hosted in CRM. Need to verify file hosting strategy for the rebuild.
- **Multiple locations per business**: Some businesses (e.g., Subway) have 68+ location pages. The URL pattern is `/listing/{slug}/{id}/` — the numeric ID distinguishes locations.

---

## Admin Management

- **Listing data entry**: Likely managed through Simpleview CRM's admin interface. Partners/members may have extranet access to update their own listing details — needs confirmation.
- **Photo uploads**: Managed via CRM — images hosted on `saltLake.simpleviewcrm.com`.
- **Listing tiers**: "Premiere Partner" and potentially other tiers are likely tied to VSL membership/sponsorship levels. Tier assignment probably happens in the CRM.
- **Facilities data**: Meeting planner data (room dimensions, capacities) entered via CRM. This is a specialized dataset — likely only relevant for ~50-100 venues.
- **TripAdvisor sync**: Configuration for the TripAdvisor integration is likely at the platform level (Simpleview manages the API connection). VSL staff probably don't interact with this directly.
- **Related Stories**: Blog articles tagged with listing references — managed in the CMS content editor.
- **Hours of Operation**: Updated per-listing in the CRM. The "Open now" status is computed client-side from the schedule data.

---

## Questions for Client

- [ ] **Listing tiers**: What tiers exist beyond "Premiere Partner"? What does each tier include (extra photos, priority sort, TripAdvisor display, featured placement)? How many listings are in each tier?
- [ ] **TripAdvisor integration**: Is review data pulled live via API on each page load, or synced periodically to the CRM? What's the contract/licensing situation? Does this carry over to the new platform or need renegotiation?
- [ ] **Facilities data coverage**: How many of the ~2,000 listings have meeting/event facility data with room-level details? Is this data actively maintained?
- [ ] **COVID-19 fields**: Are these still relevant? Can they be dropped from the rebuild, or do they need to be carried forward as general "health & safety" fields?
- [ ] **Partner extranet**: Do partners/members update their own listing data (hours, photos, description) via a Simpleview extranet? How many actively use it?
- [ ] **Bandwango integration**: Is the "Included in the Salt Lake Brewery Pass" mention manually added to listing descriptions, or is it driven by Bandwango's API / a CRM field?
- [ ] **Feature field completeness**: Of the dozens of structured fields (payment methods, parking, accessibility, etc.), how many are consistently populated across listings? Are there fields that are almost always empty?
- [ ] **Listing deactivation**: What happens when a business closes? Is the listing archived, deleted, or just hidden? How quickly does this happen?
- [ ] **"What's Nearby" logic**: Is the nearby radius configurable? Does it prioritize higher-tier listings? Is it purely distance-based or does it factor in category relevance?
