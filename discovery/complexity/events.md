# Events Section — Complexity Notes

**Complexity rating: 7-8 / 10**
**Current estimate: 260-340 hrs (templates) + 120-170 hrs (search/filter, shared with listings) + 35-50 hrs (migration)**

## Why this is complex

Events is one of two load-bearing pillars of the site (alongside Listings). It's not just a content type — it's a search product with ~1,800 items, multi-faceted filtering, geospatial features, and external data feeds.

## What we know

### Scale
- ~1,800 event detail pages (~23% of all URLs on the site)
- 15+ event categories, 19 geographic location zones
- Events + Listings together = ~49% of the entire site's URLs

### Event Index Page (`/events/`)
- Hero section with background video
- 6 category card carousel + 3 blog article carousel
- 5 editorially curated featured events + 7 upcoming items
- Newsletter signup CTA
- **Multi-faceted filter panel:**
  - Keyword search (full-text)
  - Quick date buttons: Day, Week, Weekend, Month
  - Two-month calendar date picker (past dates disabled)
  - 10 category checkboxes with live counts (Music: 330, Art: 234, etc.)
  - 19 location checkboxes with live counts (Downtown: 204, Provo/Orem: 162, etc.)
  - Reset all button
  - All filters combinable
- Pagination or infinite scroll (unclear which)

### Event Detail Page (`/event/{category}/{slug}/{id}/`)
- Multi-image gallery with prev/next navigation
- "Add to Calendar" + "Visit Website" buttons
- Social sharing (Email, X, Facebook, LinkedIn, Reddit)
- Show times with day-by-day breakdown (multiple shows per day possible)
- Embedded map + "Get Directions" via Google Maps (lat/long coordinates)
- **"What's Nearby" section** — 5 tabs pulling proximity-based results:
  - Attractions, Dining, Accommodations, Events, Things To Do

### Data Sources
- **Simpleview CRM** — primary event database, image hosting (`saltLake.simpleviewcrm.com/images/calendar/`)
- **NowPlayingUtah feed** — secondary source (arts/entertainment from Utah Cultural Alliance)
- **Google Maps** — directions + embedded map

### Event Data Fields
- Title, Event ID (numeric), Category (taxonomy), Slug
- Description (rich text, may include NowPlayingUtah attribution)
- Presenter/Organization ("Presented By")
- Address (full street address) + Lat/Long coordinates
- Date range (start/end) + per-day show times (multiple per day possible)
- Images (array, hosted on Simpleview CRM)
- External website URL (optional)

## What we don't know (Phase 2 questions)

### Filtering mechanics
- Do filter counts update in real-time as other filters change (cross-filtering)?
- Is filter state reflected in the URL for bookmarking/sharing/SEO?
- What's the sort order? (Appears alphabetical on load — unusual for events)
- Is it AJAX/API-driven or page-reload-based?
- How does pagination work? (Infinite scroll vs. load more vs. traditional)

### NowPlayingUtah feed integration
- What's the import mechanism? (API, data dump, webhook, polling?)
- Is it one-way (import only) or bi-directional?
- Can imported events be edited after import?
- What happens when feed events are updated/removed at source?
- How frequently does the feed sync?

### Event submission
- "Submit it here" CTA exists — where does it go?
- Is there a review/approval workflow?
- What's the volume of community submissions per month?
- Auto-publishing vs. manual approval?

### Ticketing integrations
- EventsForce and Bandwango mentioned in tech stack but not observed on audited events
- Which event types support ticket purchase?
- Is ticketing embedded or external link?

### Calendar export
- What format? iCal, Google Calendar, or multi-option?
- Does it export a single occurrence or a recurring series?

### Edge cases
- Events without images — how common? What's the fallback?
- Multi-venue events — supported?
- Recurring events — separate IDs per occurrence or one event with multiple dates?
- Past events — still accessible? Different display state? SEO implications?

### Admin/CMS side
- Event creation workflow in Simpleview CMS
- How are featured/curated events managed?
- Who manages the NowPlayingUtah feed configuration?
- What does the "Membership Department" CMS role do with events?

### SEO & structured data
- Current schema.org markup for events not audited
- Rich snippets in Google search results?
- Rebuild needs to match or exceed current SEO capability

## Scope risks

1. **Filtering is a search product** — building multi-faceted search with live counts, date ranges, and combined filters is closer to building Algolia than building a list page
2. **NowPlayingUtah feed** — unknown integration mechanism could range from "simple CSV import" to "complex real-time sync with conflict resolution"
3. **Geospatial "What's Nearby"** — proximity queries across multiple content types on every event detail page is non-trivial backend work
4. **Event submission workflow** — if this needs moderation/approval UI, that's CMS scope that isn't well-defined
5. **Ticketing integrations** — EventsForce/Bandwango scope is zero if it's just external links, but significant if it's embedded purchase flows

## Client questions to ask

1. How does the NowPlayingUtah feed work today? Can we talk to whoever manages it?
2. How many community event submissions do you get per month? What's the approval process?
3. Which events support ticket purchase, and through which platform?
4. Is the filter behavior (live counts, URL state) important to preserve exactly, or is there room to simplify?
5. Are there events that span multiple venues or locations?
6. How do you decide which events get featured on the index page?
