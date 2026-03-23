# Phase C: User Flows — visitsaltlake.com

Documented 2026-03-19 from live site walkthrough.

---

## C1. Visitor Planning Flow

### Flow 1a: Discover → Browse → Find Restaurant

1. **Land on homepage** — Hero carousel shows seasonal content (ski pass, events, etc.)
2. **Scroll to "Restaurants in Salt Lake"** image card → Click
3. **Arrive at `/restaurants/`** — See hero video, blog article carousel, category tabs (Experiences/Cuisines/Drinks)
4. **Browse category cards** — e.g., click "Fine Dining" or "Outdoor Seating"
5. **OR use filter panel** — Check cuisine type (e.g., "Asian (163)"), location (e.g., "Downtown (251)")
6. **Scroll to listings** — ~20 visible with image, name, TripAdvisor rating, "Learn More"
7. **Click restaurant** → `/listing/{slug}/{id}/`
8. **View details** — Full info: hours, phone, map, TripAdvisor reviews, features
9. **Get directions** → Outbound link to Google Maps with lat/long coordinates
10. **Visit website** → Outbound link to restaurant's own site

**Friction points:**
- No visible pagination/load-more on restaurant listings — unclear how to see beyond initial 20
- Filters are at bottom of page (below hero, blog carousel, category cards) — not immediately visible
- No "near me" or distance-based filtering

### Flow 1b: Search → Events → Calendar

1. **Click search icon** in header → Search dropdown opens
2. **Type "jazz"** → Submit search
3. **Arrive at `/search/?q=jazz`** — Mixed results (events, listings, articles, pages)
4. **No type filtering** on results — flat list, can't filter to just events
5. **Click event result** → `/event/{category}/{slug}/{id}/`
6. **View event detail** — Date, time, venue, description, map
7. **Click "Add to Calendar"** — Downloads iCal file or opens calendar link
8. **OR click "Get Directions"** → Google Maps

**Friction points:**
- Search results have no faceting — can't filter by type (events only)
- No date-range filtering in search
- Must go to `/events/` for proper event filtering

### Flow 1c: Explore Neighborhoods → Activities

1. **Scroll to "Explore Salt Lake" neighborhood map** on homepage
2. **Click region** (e.g., "Salt Lake City") then sub-area (e.g., "Downtown")
3. **Arrive at `/salt-lake-city/downtown/`** — Rich editorial content with venue recommendations
4. **Click venue link** (e.g., "Eva's Bakery") → Goes to listing detail page
5. **Browse "What's Nearby"** on listing page — tabs for Attractions, Dining, Events, etc.

**Friction points:**
- Neighborhood pages are editorial (hand-curated links) not dynamic listings
- No way to see ALL restaurants in Downtown — just the featured ones
- "What's Nearby" tab sometimes shows "There are no results that match your filter"

---

## C2. Convention/Meeting Planner Flow

1. **Click "Meetings"** in secondary nav
2. **Arrive at `/meetings/`** — Section has its own sub-navigation replacing the main nav
3. **Browse sub-pages**: Why Choose Salt Lake, Hotels by district, Venues, Salt Palace, Mountain America Expo, Services
4. **View venue details** — Floor plans, capacity, specs, catering
5. **Click "Submit RFP"** → `/meetings/submit-rfp/` (informational page with two options)
6. **Option A: "Submit RFP Online"** → `/rfp/` (80+ field CRM form)
7. **Option B: "Submit RFP Via Email"** → mailto:achappell@visitsaltlake.com
8. **Fill out RFP form** — Contact info, meeting details, dates (3 alternate sets), room block (14-day grid), history
9. **Submit** → POST to `saltlake.simpleviewcrm.com/webapi/rfp/rfp_submitform.cfm`

**Friction points:**
- Two-step process to reach the actual form (info page → form page)
- Form is extremely long — 80+ fields, may discourage completion
- No progress indicator or multi-step wizard
- No confirmation about what happens after submission (no visible thank-you page URL in the form)

**Mint+ search:** Not found anywhere on the public meetings section. May be internal-only or on a page we didn't visit.

---

## C3. Pass/Ticket Purchase Flow

### Flow 3a: Discount Passport

1. **See "Get the Salt Lake Discount Passport"** block on most pages
2. **Click "Get FREE Passport"** button → Destination unknown (couldn't determine without clicking through)
3. **Expected flow**: Likely redirects to Bandwango for passport signup/download

**Friction points:**
- "Get FREE Passport" CTA is prominent but destination wasn't verifiable without completing the flow
- Multiple pass types (Discount Passport, Attractions Pass, Brewery Pass, Ski Super Pass) with unclear distinctions
- Ski Super Pass prominently featured in homepage hero but purchase mechanism unknown

### Flow 3b: Event Tickets (EventsForce)

1. **Browse events** → `/events/`
2. **Click event** → View event detail
3. **Look for ticket link** — NOT FOUND on any event we inspected
4. **Only outbound links seen**: "Visit Website" to external event/venue sites

**Friction points:**
- EventsForce ticket integration was not visible on any event page inspected
- Unclear which events have ticket purchase vs. which are informational-only

---

## C4. Newsletter/Guide Request Flow

### Flow 4a: Newsletter Signup

1. **Click "Newsletter Sign Up"** CTA in footer → `/plan-your-visit/subscribe/`
2. **Fill form fields**: First Name, Last Name, Email, Country, Zip Code
3. **Check optional boxes**: Send email opt-in, UDF 3845 (unknown purpose)
4. **Complete reCAPTCHA**
5. **Submit** → POST to same page (CRM formbuilder, formid=46, groupid=5)

**Data captured**: name, email, country, zip, opt-in preferences

### Flow 4b: Visitor Guide Request

1. **Click "Visitors Guide"** CTA in footer → `/plan-your-visit/free-visitors-guide/`
2. **Discover there is no printed guide**: Page says "Visit Salt Lake does not currently produce a printed Visitors Guide"
3. **Redirected to**: website, Visitor Information Center, newsletter, Utah state guide

**Friction points:**
- Footer CTA still says "Request a free copy" but no printed guide exists — misleading
- No form to fill out — just redirects elsewhere

---

## C5. Member/Partner Flow

1. **Click "Members"** in footer or nav
2. **Arrive at `/members/`** — Benefits overview, tier information
3. **Click "Member Login"** or "Members Only Portal"
4. **Redirect to** `saltlake.extranet.simpleviewcrm.com/login/` — Simpleview extranet
5. **Cannot proceed** without credentials — behind authentication wall

**What's behind the login**: Unknown. Could include: listing management, event management, analytics, member benefits, invoicing.

---

## C6. Job Seeker Flow

1. **Navigate to** `/hospitality-jobs/` (from nav or direct URL)
2. **Browse job listings** — ~72 listings
3. **Click job** → View detail page
4. **Apply** — Mechanism unknown (form, email, external link?)

**Not directly tested** — this flow needs a follow-up visit to document fully.

---

## Cross-Cutting Observations

### Third-Party Handoffs (where users leave visitsaltlake.com)
- Google Maps (directions from events and listings)
- External venue/business websites ("Visit Website" on listings and events)
- Simpleview CRM extranet (member login)
- Shopify (Local Crafts & Gifts)
- Social sharing (X, Facebook, LinkedIn, Reddit)
- Bandwango (likely — for pass purchase)
- Utah state tourism sites (visitor guide alternatives)
- Playeasy (sports stories)
- TripAdvisor ("Write a Review" link on listings)

### Data Collected from Users
- Newsletter signup: name, email, country, zip
- RFP submission: 80+ fields of contact, meeting, and room block data
- Search queries: tracked via GTM
- Page behavior: tracked via GTM and VWO

### Missing Flows (not testable from public site)
- Bandwango pass purchase flow
- EventsForce ticket purchase flow
- Ripe hotel booking flow
- Member extranet actions
- CMS content editing workflow
- Event submission/approval workflow

---

## Questions for Client

- [ ] What happens after "Get FREE Passport" click? Where does it go?
- [ ] What happens after RFP form submission? Email to whom? CRM pipeline?
- [ ] What is the event submission workflow? Who approves submitted events?
- [ ] What can members do in the extranet portal?
- [ ] Are there any flows we're missing that are important but not visible on the public site?
