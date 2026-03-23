# Events Index Page — visitsaltlake.com

Audited 2026-03-19 via live site inspection of `/events/`.

**URL pattern**: `/events/` (main index), `/events/{category}/` (category-specific)

---

## What Users See

### 1. Hero Section
- Background video: "Salt Lake Event Highlights"
- Full-width hero treatment

### 2. Page Header
- **Breadcrumb**: Home | Events
- **Share button**: Standard global share options (see `global-elements.md` A5)
- **Intro text**: Brief paragraph with "Browse the events below" and a "Submit it here" link for community event submission

### 3. Blog Article Carousel
- 3 blog articles related to events/music
- Likely editorial content promoting seasonal or featured events
- Cards with images and titles

### 4. Event Category Cards
- Horizontal carousel with prev/next navigation
- **6 category cards observed**:
  1. Festivals & Special Events
  2. Concerts & Live Music
  3. Kids & Families
  4. Free Events
  5. Performing Arts
  6. Annual Events
- Each card links to a category-specific index page (e.g., `/events/music/`, `/events/festivals/`)

### 5. Newsletter CTA
- "Stay Up To Date On Events" with link to e-mail newsletter signup

### 6. Featured Events
- **5 featured event cards**: Large format with date badge, title, description, and "Read More" link
- Appear to be editorially curated (not auto-generated)

### 7. Upcoming Featured Events
- **7 event items** in a compact list format (date + title only)
- Likely a secondary featured/curated list

### 8. Filter Panel
- Full filtering interface for browsing all events:

**Keyword Search**
- Text input with "filter on keyword" submit button

**Quick Date Buttons**
- Day, Week, Weekend, Month
- Pre-set date ranges relative to current date

**Calendar Date Picker**
- Two months visible at once
- Past dates are disabled (grayed out)
- Select start and/or end date for custom range

**Category Checkboxes (with counts)**

| Category | Count |
|----------|-------|
| Music | 330 |
| Art | 234 |
| Festivals & Special Events | 190 |
| Classes & Workshops | 185 |
| Outdoor Recreation | 128 |
| Discounts & Free | 291 |
| Free | 256 |
| Family | 166 |
| 801 Creative Women | 26 |
| LGBTQIA+ | 12 |

**Location Checkboxes (with counts)**

| Location | Count |
|----------|-------|
| Downtown | 204 |
| Central City | 39 |
| Avenues/Capitol Hill | 23 |
| University/Foothill | 52 |
| Granary/Ballpark | 32 |
| Cottonwood Heights | 19 |
| Midvale | 3 |
| Millcreek | 76 |
| Holladay/Murray | 6 |
| Sandy | 19 |
| Draper | 5 |
| Southwest Valley | 21 |
| West Valley | 35 |
| Little Cottonwood | 13 |
| Park City | 48 |
| Davis/Ogden | 88 |
| Provo/Orem | 162 |
| Other Utah/Out of State | 160 |
| Virtual | 3 |

**Reset Button**
- Clears all filter selections

### 9. Event Listings
- ~15 events visible on initial load
- Each event shows image + title
- Alphabetical sort on initial load
- No visible pagination controls — may use infinite scroll or "load more" button below the fold

### 10. Instagram-Style Photo Gallery
- Grid of photos (likely pulled from Instagram or curated)

### 11. Bottom CTAs
- "Submit Events" CTA
- "This Weekend" CTA
- Discount Passport promotion (global — see `global-elements.md` A2)

---

## What Users Can Do

| Action | Behavior |
|--------|----------|
| Watch hero video | Auto-playing or click-to-play video in hero |
| Browse category cards | Carousel navigation through 6 curated event categories |
| Read featured events | 5 featured cards + 7 upcoming items, editorially curated |
| Search by keyword | Text search with submit button |
| Filter by quick date | One-click: Day, Week, Weekend, Month |
| Filter by custom date range | Two-month calendar picker, past dates disabled |
| Filter by category | Multi-select checkboxes (10 categories with live counts) |
| Filter by location | Multi-select checkboxes (19 locations with live counts) |
| Combine filters | Keyword + date + category + location all combinable |
| Reset all filters | Single reset button clears everything |
| Browse to category page | Category cards link to dedicated pages (e.g., `/events/music/`) |
| Submit an event | "Submit it here" link in intro text |
| Sign up for newsletter | "Stay Up To Date On Events" CTA |
| Share the page | Standard share options (Email, X, Facebook, LinkedIn, Reddit) |

---

## Data Sources

### Event Data
- **Primary source**: Simpleview CRM event database
- **Secondary source**: NowPlayingUtah feed (arts/entertainment events from Utah Cultural Alliance)
- **Estimated total events**: ~1,613 visible across category filter counts (with overlap between categories, since events can belong to multiple categories)

### Filter Taxonomy

| Filter Type | Source | Notes |
|-------------|--------|-------|
| Categories | CRM taxonomy | 10 categories visible. Note overlap — "Discounts & Free" (291) and "Free" (256) are separate categories, likely with significant overlap. "801 Creative Women" and "LGBTQIA+" are identity/community-based categories that likely cross-cut other categories. |
| Locations | CRM taxonomy / geographic zones | 19 locations mapped to geographic areas. Matches the neighborhood/area structure seen in site navigation. "Virtual" (3) is a non-geographic option. |
| Date ranges | Computed | Quick buttons (Day/Week/Weekend/Month) calculate relative to current date. Calendar picker allows arbitrary date range. |
| Keyword | Full-text search | Likely searches title and description fields |

### Filter Counts
- Counts appear next to each checkbox (e.g., "Music (330)")
- Unknown if these are real-time or cached/pre-computed
- Counts likely represent total events in that category regardless of other active filters (not cross-filtered counts)

### Featured Events
- Curated separately from the main event listings
- Likely managed via a "featured" flag or separate content list in the CMS

---

## Third-Party Services

| Service | Role | Details |
|---------|------|---------|
| **Simpleview CRM** | Event data & filtering | All event records, categories, locations, and filter logic powered by Simpleview's event/calendar system |
| **NowPlayingUtah** | Event feed | Arts and entertainment events imported from Utah Cultural Alliance feed |
| **Instagram** (likely) | Photo gallery | Instagram-style photo grid near bottom of page — may be an embedded feed or curated gallery |
| **Video hosting** | Hero video | "Salt Lake Event Highlights" video — hosting platform unclear (could be self-hosted, Vimeo, or YouTube embedded) |

---

## Edge Cases

### Filtering
- **Overlapping categories**: An event can appear in multiple categories (e.g., a free outdoor concert could be in Music, Free, and Outdoor Recreation). Selecting multiple categories likely uses OR logic (shows events in any selected category), not AND.
- **Empty filter results**: Some location + category combinations may return zero results. How is this communicated to the user?
- **Category count accuracy**: If counts are cached, they may be stale (e.g., showing 330 Music events when some have already passed). Do counts reflect only future events or include past?
- **Date range + category interaction**: When a date range is selected, do the category/location counts update to reflect the narrower set? Or do they stay static?
- **URL state**: Are filter selections reflected in the URL (query parameters) so filtered views can be bookmarked and shared? This matters for SEO and user experience.

### Pagination / Loading
- Only ~15 events visible on initial load out of 1,600+
- No visible pagination controls observed — could be:
  - Infinite scroll (loads more on scroll)
  - "Load more" button below the visible area
  - True pagination that wasn't visible in the viewport
- Performance concern: How does the page handle loading 1,600+ events? Is it paginated server-side or loading a large client-side dataset?

### Category Pages
- Dedicated category pages exist (e.g., `/events/music/`, `/events/festivals/`)
- Unknown if these are separate templates or the same template pre-filtered
- SEO implications: category pages likely have unique meta titles/descriptions

### Event Submission
- "Submit it here" link in the intro text
- Unknown destination — could be a CMS form, external form, or email
- Submitted events presumably require editorial review before publishing

### Sort Order
- Initial load appears alphabetical
- No visible sort toggle (e.g., by date, relevance, distance)
- Alphabetical sort for events is unusual — most event sites default to date order. Worth confirming this is intentional.

---

## Admin Management

Based on Simpleview CMS patterns (to be confirmed with client):

### Event Management
- Events created/edited in Simpleview CRM
- Feed events (NowPlayingUtah) likely imported automatically on a schedule
- Uncertain whether feed events can be edited after import

### Featured Events Curation
- Featured events (5 cards + 7 upcoming) are likely managed through:
  - A "featured" flag on event records, OR
  - A separate curated list/widget in the CMS
- Unknown how frequently these are updated and by whom

### Category & Location Taxonomies
- Categories and locations managed as CRM taxonomies
- Adding/removing categories affects filter panel and potentially URL structure (category-specific pages)
- Location taxonomy maps to geographic zones — changing zone boundaries would affect which events appear where

### Hero Video
- Video in the hero section needs to be managed (uploaded, replaced seasonally?)
- Unknown if this is a CMS-managed field or hardcoded in the template

### Blog Article Carousel
- 3 blog articles in the carousel — likely pulled by tag, category, or manual selection
- Content managed in Simpleview's blog/article system

### Event Submission Workflow
- Community event submission supported via "Submit it here" link
- Review and approval workflow unknown — needs client confirmation

---

## Questions for Client

### Filtering & Search
- [ ] How does filtering work technically? AJAX/API calls that update results without page reload, or full page reload with query parameters?
- [ ] Are filter selections reflected in the URL? Can a filtered view be bookmarked or shared?
- [ ] Are the category/location counts real-time or cached? Do they update when other filters are active (cross-filtering)?
- [ ] Is keyword search full-text (title + description) or title-only?
- [ ] Is there a sort option we didn't see? The default appears to be alphabetical, which is unusual for events — is date-based sorting available?

### Pagination & Performance
- [ ] Is there a "load more" button or pagination for results beyond the initial ~15? Or is it infinite scroll?
- [ ] How many events can the filter page handle before performance degrades?

### Featured Content
- [ ] How are the 5 featured event cards and 7 upcoming items curated? Manual selection or automated (e.g., nearest upcoming with a "featured" flag)?
- [ ] How often are they updated? Is this a staff responsibility or automated rotation?
- [ ] How are the 3 blog articles in the carousel selected?

### Event Submission
- [ ] Where does the "Submit it here" link go? What does the submission form look like?
- [ ] Who reviews submitted events? What's the approval workflow?
- [ ] How many community-submitted events come in per month?

### Category Pages
- [ ] Are category-specific pages (e.g., `/events/music/`) separate templates or the main index pre-filtered?
- [ ] Do they have unique SEO metadata (title, description, OG tags)?
- [ ] Is there a map view available on any event pages? (Simpleview's Map Publisher is in their tech stack, but we didn't see a map toggle)

### Taxonomy & Structure
- [ ] Who manages the category and location taxonomies? How often do they change?
- [ ] The "Discounts & Free" and "Free" categories seem to overlap significantly. Is this intentional? Would the client like to consolidate in the rebuild?
- [ ] "801 Creative Women" and "LGBTQIA+" are community/identity categories that cross-cut other categories. How should these be handled in the rebuild — as categories, tags, or a separate filtering dimension?

### Media
- [ ] What is the hero video ("Salt Lake Event Highlights")? Is it updated seasonally? Where is it hosted?
- [ ] Is the photo gallery near the bottom an Instagram embed or a curated CMS gallery?
