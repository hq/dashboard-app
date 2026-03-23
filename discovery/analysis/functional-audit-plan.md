# Functional Audit Plan

The goal: map every piece of functionality on visitsaltlake.com so we can estimate with confidence that nothing is missing. No hours, no estimates — just a complete inventory of what exists.

## Completion Status (updated 2026-03-19)

| Phase | Status | Output File |
|-------|--------|-------------|
| A. Global Elements | ✅ Complete | `discovery/front-end/global-elements.md` |
| B1. Homepage | ✅ Complete | `discovery/front-end/pages/homepage.md` |
| B2. Event Detail | ✅ Complete | `discovery/front-end/pages/event-detail.md` |
| B3. Event Category | ✅ Complete | `discovery/front-end/pages/event-category.md` |
| B4. Listing Detail | ✅ Complete | `discovery/front-end/pages/listing-detail.md` |
| B5. Category Index | ✅ Complete | `discovery/front-end/pages/category-index.md` |
| B6. Blog/Article | ✅ Complete | `discovery/front-end/pages/blog-article.md` |
| B7. Neighborhood | ✅ Complete | `discovery/front-end/pages/neighborhood.md` |
| B8. Plan Your Visit | ✅ Complete | `discovery/front-end/pages/plan-your-visit.md` |
| B9. Meetings & Convention | ✅ Complete | `discovery/front-end/pages/meetings-convention.md` |
| B10. Places to Stay | ✅ Complete | `discovery/front-end/pages/places-to-stay.md` |
| B11. Sports | ✅ Complete | `discovery/front-end/pages/sports.md` |
| B12. Hospitality Jobs | ⚠️ Partial | `discovery/front-end/pages/hospitality-jobs.md` (not directly visited) |
| B13. Static/Corporate | ✅ Complete | `discovery/front-end/pages/static-corporate.md` |
| B14. Search Results | ✅ Complete | `discovery/front-end/pages/search-results.md` |
| B15. Passes & Tickets | ✅ Complete | `discovery/front-end/pages/passes-tickets.md` |
| Forms (bonus) | ✅ Complete | `discovery/front-end/pages/subscribe-forms.md` |
| C. User Flows | ✅ Complete | `discovery/front-end/user-flows.md` |
| CRM Forms (bonus) | ✅ Complete | `discovery/front-end/pages/subscribe-forms.md` |
| D. Data Sources | ✅ Complete | `discovery/analysis/data-sources.md` |
| E. Integration Depth | ✅ Complete | `discovery/analysis/integration-depth.md` |
| F. Backend (CMS) | 🔒 Deferred | needs admin login |

**70+ client questions** captured in `discovery/analysis/client-questions.md`

---

## Audit Dimensions

For each area of the site, we need to answer six questions:

1. **What does the user see?** — Every visible element, content block, and layout pattern
2. **What can the user do?** — Every interaction, click target, form, filter, toggle, download
3. **Where does the data come from?** — CMS content, CRM data, external feed, API, hardcoded
4. **What third-party services are involved?** — Which plugins from our integration list appear here
5. **What are the edge cases?** — Empty states, error states, seasonal variations, auth requirements
6. **What does the admin need to manage?** — What content/settings would an editor change for this

---

## Phase A: Global Elements

Things that appear on every (or nearly every) page. Do these first since they affect every page type.

### A1. Header & Navigation
- [ ] Main navigation structure (mega menu? dropdowns? how many levels?)
- [ ] Mobile navigation pattern (hamburger? drawer? accordion?)
- [ ] Logo / branding placement
- [ ] Search bar (global search — where does it go? autocomplete?)
- [ ] Language/locale selector (if any)
- [ ] Utility links (member login, visitor guide CTA, etc.)
- [ ] Sticky/fixed behavior on scroll

### A2. Footer
- [ ] Link groups and structure
- [ ] Newsletter signup form (Act On integration)
- [ ] Social media links
- [ ] Partner logos / affiliations
- [ ] Legal links (privacy, terms, accessibility statement)
- [ ] Contact information

### A3. Global Widgets & Overlays
- [ ] Civic Plus ADA widget — where does it appear, what does it do
- [ ] Cookie consent banner (if any)
- [ ] Chat widget (if any)
- [ ] Weather widget — where does it appear, data source
- [ ] Alert/announcement bar (if any — closeable? CMS-managed?)

### A4. Global Tracking & Scripts
- [ ] GTM containers (GTM-5L5W32, GTM-NFBVG93) — what's loaded through each
- [ ] VWO (Visual Website Optimizer) — active experiments? which pages?
- [ ] Act On tracking pixels/scripts
- [ ] Any other analytics or retargeting

---

## Phase B: Page-Type Walkthrough

For each of the 15 page types, visit 2-3 representative URLs and document every functional element using the six questions above. Use the sample URLs from `page-types.json` as starting points.

### B1. Homepage
Sample: `https://www.visitsaltlake.com/`
- [ ] Hero section (static? carousel? video? CMS-managed?)
- [ ] Content blocks / sections (what appears, in what order)
- [ ] Dynamic content (featured events, listings — how selected? CMS curated or algorithmic?)
- [ ] CTAs and their destinations
- [ ] Seasonal/campaign content (how does it change?)
- [ ] Data sources: which blocks pull from CMS, CRM, external feeds

### B2. Event Detail
Samples: Pick one from each of 3 different categories (music, festival, sports)
- [ ] Event information fields (title, date/time, description, venue, cost, etc.)
- [ ] Date handling (single day? multi-day? recurring? past events?)
- [ ] Venue display (map? link to venue page? inline address?)
- [ ] Image/media (single hero? gallery? video?)
- [ ] Related events (how selected?)
- [ ] Add to calendar (iCal? Google Calendar? both?)
- [ ] Share buttons
- [ ] Ticketing CTAs (EventsForce? Bandwango? external links?)
- [ ] Breadcrumb / category navigation
- [ ] Data source: CMS-authored or NowPlayingUtah feed or both?

### B3. Event Category Index
Samples: `/events/music/`, `/events/festivals/`, `/events/` (main index)
- [ ] Filter controls (date, category, location, keyword?)
- [ ] Filter behavior (URL changes? AJAX? page reload?)
- [ ] Sort options
- [ ] Result display (grid? list? card format?)
- [ ] Map view toggle (Map Publisher?)
- [ ] Pagination vs. infinite scroll vs. load more
- [ ] Featured/promoted events (different treatment?)
- [ ] Empty state (no results)
- [ ] Date range behavior (past events? future only?)

### B4. Listing/Business Detail
Samples: Pick restaurant, hotel, attraction
- [ ] Business info fields (name, address, phone, website, hours, description)
- [ ] Location map (Map Publisher? Google Maps? both?)
- [ ] Photo gallery (how many? lightbox? CRM-sourced?)
- [ ] Amenity tags / features list
- [ ] Reviews/ratings (where from? CRM? Google? TripAdvisor?)
- [ ] Booking CTA (Ripe integration — how does it work?)
- [ ] Related/nearby listings
- [ ] Categories / breadcrumb
- [ ] Contact options (phone, website, directions link)
- [ ] Data source: CRM listings? How is this data maintained?

### B5. Category Index (Listings)
Samples: `/things-to-do/`, `/restaurants/`, `/things-to-do/hiking-in-salt-lake/`
- [ ] Filter controls (category, amenities, area, keyword?)
- [ ] Map view (Map Publisher?)
- [ ] Sort options
- [ ] Result format (cards? list?)
- [ ] Pagination
- [ ] Promoted/featured items
- [ ] Category navigation (sidebar? tabs? breadcrumb?)

### B6. Blog / Article
Samples: Pick one from `/blog/stories/` and one from `/articles/post/`
- [ ] Content structure (rich text? blocks? sidebar?)
- [ ] Author information
- [ ] Date / publish info
- [ ] Category/tag system
- [ ] Featured image treatment
- [ ] Related content
- [ ] Social sharing
- [ ] Comments (if any)
- [ ] Difference between "blog" and "articles" (two templates or one?)

### B7. Neighborhood / Area Profile
Samples: `/salt-lake-city/downtown/`, a midvalley page, the top-level region page
- [ ] Area description content
- [ ] Map with boundaries (Map Publisher?)
- [ ] Local listings embedded (which ones? filtered how?)
- [ ] Local events
- [ ] Photo gallery
- [ ] Sub-neighborhood navigation (hierarchical?)
- [ ] "Getting there" / transportation info

### B8. Plan Your Visit
Samples: `/plan-your-visit/`, `/plan-your-visit/trip-ideas-itineraries/`, `/plan-your-visit/getting-around/`
- [ ] Content structure (standard page? custom layout?)
- [ ] Itinerary display (is there an itinerary builder? or just editorial content?)
- [ ] Downloadable content (PDF guides? visitor guide request?)
- [ ] Visitor guide request form (Act On? CRM form?)
- [ ] Interactive elements (tabs? accordions? calculators?)
- [ ] Related content links

### B9. Meetings & Convention
Samples: `/meetings/`, `/salt-palace-convention-center/`, a venue detail page
- [ ] Venue information (capacity, floor plans, amenities)
- [ ] Floor plan display (interactive? PDF? images?)
- [ ] RFP form (CRM form builder — `plugins_crm_rfp`)
- [ ] Services list
- [ ] Photo/virtual tour
- [ ] Testimonials
- [ ] Sales team contact
- [ ] Mint+ integration (where does it appear? what does it do?)
- [ ] RSVP functionality (`plugins_crm_rsvp`)
- [ ] Lead capture flow

### B10. Places to Stay
Samples: `/places-to-stay/`, pick a specific hotel page
- [ ] Hotel search/filter
- [ ] Star ratings / amenities
- [ ] Map view
- [ ] Booking flow (Ripe integration — embed? redirect? widget?)
- [ ] Rate display (live rates? or just "book now" outbound links?)
- [ ] Area grouping

### B11. Sports
Samples: `/sports/`, a specific facility page
- [ ] Venue profiles
- [ ] Facility details (capacity, amenities)
- [ ] Event connection (events at this venue?)
- [ ] Team information
- [ ] Ticket links
- [ ] Bluetoad digital publication (Sports Play Book — how integrated?)

### B12. Hospitality Jobs
Samples: `/hospitality-jobs/`, a specific job listing
- [ ] Job listing format
- [ ] Search/filter options
- [ ] Job detail fields
- [ ] Apply mechanism (form? external link? email?)
- [ ] Who posts jobs? (CMS? self-service portal? CRM?)

### B13. Static / Corporate Pages
Samples: `/about-us/`, `/members/`, `/press-research/`, `/travel-trade/`
- [ ] Page templates (all the same? or different layouts per section?)
- [ ] Member login area (what's behind it? the Simpleview extranet?)
- [ ] Press room (press releases, media assets, downloadable resources)
- [ ] Research/stats section (data visualizations? report downloads?)
- [ ] Travel trade (B2B content — restricted access?)
- [ ] Team/staff directory
- [ ] Contact forms

### B14. Search Results
Sample: Search for "hiking" or "hotel" on the site
- [ ] Search input behavior (autocomplete? suggestions?)
- [ ] Result types (events, listings, articles, pages — mixed or filtered?)
- [ ] Result format per type
- [ ] Filtering/faceting on results
- [ ] Pagination
- [ ] "No results" handling
- [ ] Search analytics (tracked?)

### B15. Passes & Tickets (may not have its own page type — but it's functional)
- [ ] Where are Bandwango passes sold? (dedicated page? embedded widget? external redirect?)
- [ ] Super Pass (not on Bandwango — where is it?)
- [ ] EventsForce ticket links — how do they appear on event pages?
- [ ] Purchase flow (on-site? redirect to vendor?)
- [ ] Pass descriptions / comparison

---

## Phase C: User Flows

Document complete end-to-end flows, not just individual pages. These cross multiple page types.

### C1. Visitor Planning Flow
- [ ] Arrive on homepage → browse neighborhoods → find restaurant → get directions
- [ ] Search for events → filter by date → view event → add to calendar
- [ ] Browse things to do → filter by category → view listing → book hotel

### C2. Convention/Meeting Planner Flow
- [ ] Land on meetings section → explore venues → view floor plans → submit RFP
- [ ] Use Mint+ tool → compare venues → contact sales team

### C3. Pass/Ticket Purchase Flow
- [ ] Discover passes → compare options → purchase (Bandwango)
- [ ] Find event → buy tickets (EventsForce)

### C4. Newsletter/Guide Request Flow
- [ ] Sign up for newsletter (Act On integration)
- [ ] Request free visitor guide (CRM form)
- [ ] What happens after submission? (confirmation page? email sequence?)

### C5. Member/Partner Flow
- [ ] Log in to member area (Simpleview extranet)
- [ ] What can members see/do?
- [ ] Partner listing self-service (if it exists)

### C6. Job Seeker Flow
- [ ] Browse jobs → filter → view detail → apply

---

## Phase D: Data Sources Map

For each content type, document where the data lives and how it gets to the front-end.

| Content Type | Primary Source | Secondary Sources | How Updated | Volume |
|-------------|---------------|-------------------|-------------|--------|
| Events | Simpleview CMS | NowPlayingUtah feed | ? | ~1,800 |
| Listings | Simpleview CRM | Google Cloud? | ? | ~2,000 |
| Blog/Articles | Simpleview CMS | — | ? | ~460 |
| Neighborhoods | Simpleview CMS | — | ? | ~50 |
| Jobs | ? | — | ? | ~72 |
| Passes/Tickets | Bandwango | EventsForce | ? | ? |
| Maps | Map Publisher / CRM | — | ? | ? |
| Weather | Simpleview API | — | Automated | 1 |
| ~~Trails~~ | ~~Outdoor Active~~ | — | ~~Being cancelled — skip~~ | — |

Fill in the "?" columns as we learn more.

---

## Phase E: Integration Depth Assessment

For each integration from `third-party-integrations.md`, determine:

1. **Integration type**: Embed/iframe, API call, JavaScript widget, redirect, webhook, data sync
2. **Direction**: Data in (to the site), data out (from the site), or both
3. **Scope**: How many pages/features use it
4. **Criticality**: Would the site break without it? Or just lose a feature?
5. **Rebuild decision**: Replace, replicate, keep vendor, or drop

---

## Phase F: Backend Capabilities (deferred — needs CMS login)

When we get access to the Simpleview admin, document:
- [ ] Content types and their field schemas
- [ ] Content creation/editing workflows
- [ ] Approval/publishing chains
- [ ] User roles and permissions
- [ ] Media management
- [ ] Form builder capabilities
- [ ] CRM modules in use
- [ ] Reporting/analytics in admin
- [ ] Partner/member management tools
- [ ] Data export capabilities

---

## Output

Each completed phase produces a markdown file in `discovery/`:
- Phase A → `discovery/front-end/global-elements.md`
- Phase B → `discovery/front-end/pages/{page-type-id}.md` (one per page type)
- Phase C → `discovery/front-end/user-flows.md`
- Phase D → `discovery/analysis/data-sources.md`
- Phase E → `discovery/analysis/integration-depth.md`
- Phase F → `discovery/cms/capabilities.md`

When all phases are complete, we'll have a full functional inventory that tells us exactly what we're rebuilding.
