# Event Detail Page — visitsaltlake.com

Audited 2026-03-19 via live site inspection of `/event/theatre/a-midsummer-nights-dream/77782/`.

**URL pattern**: `/event/{category}/{slug}/{id}/`

---

## What Users See

### Hero / Image Gallery
- Multi-image gallery with "1 of 9" counter and prev/next navigation
- Images include interior shots, exterior shots, promotional materials
- Images hosted on `saltLake.simpleviewcrm.com/images/calendar/`

### Event Header
- **Title**: "A Midsummer Night's Dream"
- **Category tag**: "Theatre" (links back to category index)
- **"Visit Website" button**: External link (e.g., wjarts.org)
- **"Add to Calendar" button**: Format unclear (iCal download, Google Calendar, or both)
- **Share buttons**: Email, X, Facebook, LinkedIn, Reddit (same pattern as global share — see `global-elements.md` A5)

### Event Details
- **Presented By**: "Sugar Factory Playhouse"
- **Address**: "8105 S 2200 W, West Jordan, UT 84088"
- **Date range**: "between 03/19/2026 - 03/28/2026"
- **Individual show times**: Day-by-day listing with start and end times
  - Example: Thu 7:00 PM - 9:00 PM, Fri 7:00 PM - 9:00 PM, Sat 2:00 PM - 4:00 PM & 7:00 PM - 9:00 PM
  - Multiple shows on the same day are listed separately
  - Days without shows are omitted (no "dark days" shown)

### Map
- Embedded map showing venue location
- "Get Directions" link opens Google Maps with lat/long coordinates
  - Example: `destination=40.603446,-111.948359`
  - Uses coordinates rather than address string (more reliable for navigation)

### Description
- Rich text body (paragraphs, possibly links and formatting)
- **NowPlayingUtah attribution block**: "This calendar listing is brought to you by NowPlayingUtah.com, Utah's one-stop, online website for arts and entertainment events, powered by the Utah Cultural Alliance."
  - Not all events will have this — only those sourced from NowPlayingUtah

### Event Info Sidebar
- Structured summary repeating key fields: Presented By, Dates, Address, Times
- Serves as a quick-reference panel alongside the description

### "What's Nearby" Section
- Tabbed interface with 5 categories:
  1. Attractions
  2. Dining
  3. Accommodations
  4. Events
  5. Things To Do
- Each tab shows nearby listings with distance and location
- Uses geolocation (likely based on event's lat/long coordinates)
- Some tabs may show "There are no results that match your filter" if nothing is nearby in that category

### Page-Bottom Elements
- Discount Passport promotion (global — see `global-elements.md` A2)
- Footer CTAs (global)

---

## What Users Can Do

| Action | Behavior |
|--------|----------|
| Browse image gallery | Prev/next through multiple photos with counter |
| Visit external website | Opens presenter's website in new tab |
| Add to calendar | Adds event to personal calendar (format TBD — iCal, Google, or both) |
| Share event | Email, X, Facebook, LinkedIn, Reddit share options |
| Get directions | Opens Google Maps with lat/long destination |
| Browse nearby content | Tab between Attractions, Dining, Accommodations, Events, Things To Do |
| Navigate to category | Click category tag to return to category index (e.g., `/events/theatre/`) |

**Not available on this event (may be available on others):**
- Purchase tickets (no EventsForce or ticketing integration observed)
- RSVP / register
- Save / favorite event

---

## Data Sources

### Event Fields

| Field | Source | Notes |
|-------|--------|-------|
| Title | Simpleview CRM or NowPlayingUtah feed | |
| Category | CRM taxonomy | Maps to URL segment (theatre, music, art, etc.) |
| Presenter / "Presented By" | CRM or feed | Organization name |
| Address | CRM or feed | Full street address |
| Coordinates | CRM or feed | Lat/long used for map and "Get Directions" |
| Date range | CRM or feed | Start and end dates |
| Individual show times | CRM or feed | Per-day start/end times, multiple per day possible |
| Description | CRM or feed | Rich text (HTML) |
| Images | Simpleview CRM | Hosted at `saltLake.simpleviewcrm.com/images/calendar/` |
| External website URL | CRM or feed | Optional — links to presenter's site |
| Event ID | CRM | Numeric ID in URL (e.g., `77782`) |

### "What's Nearby" Data
- Pulls from Simpleview listing/event database
- Filtered by geographic proximity to event coordinates
- Categorized by content type (Attractions, Dining, Accommodations, Events, Things To Do)
- Likely uses Simpleview's proximity search API

---

## Third-Party Services

| Service | Role | Details |
|---------|------|---------|
| **NowPlayingUtah** | Event feed source | Arts and entertainment events from the Utah Cultural Alliance. Attribution text is displayed in the description. Not all events come from this source. |
| **Google Maps** | Directions | "Get Directions" links use `google.com/maps/dir/` with lat/long destination |
| **Simpleview CRM** | Image hosting & data | Images served from `saltLake.simpleviewcrm.com`, event data stored in Simpleview's CRM |
| **Social platforms** | Sharing | Standard share URLs for Email, X, Facebook, LinkedIn, Reddit |

---

## Edge Cases

### Content Variability
- **Events without images**: Unknown — this event had 9, but some events (especially feed-sourced) may have 0-1
- **Events without external website**: The "Visit Website" button may not appear on all events
- **Events without show times**: Some events may have date ranges only (e.g., multi-day festivals) without individual time slots
- **Multi-venue events**: Unknown if an event can have multiple addresses/locations
- **Recurring events**: How are weekly/monthly recurring events represented? Separate event IDs per occurrence, or one event with multiple date ranges?
- **Past events**: Do past event pages remain accessible? Are they indexed? Do they show differently (e.g., "This event has passed")?

### Attribution
- NowPlayingUtah events include attribution text in the description body — this needs to carry forward if we consume the same feed
- CMS-authored events presumably don't have this attribution

### Ticket Integration
- This specific event had no ticket purchase link
- Other events may have EventsForce integration or external ticket links — need to confirm which event types support ticketing

### Map / Location
- Coordinates are embedded in the "Get Directions" link, not displayed as text
- If coordinates are missing or incorrect, directions will be wrong
- No fallback to address-based directions observed

---

## Admin Management

Based on Simpleview CMS patterns (to be confirmed with client):

- **CMS-authored events**: Created and edited directly in Simpleview CRM by VSL staff. Fields include title, category, dates/times, description, images, presenter, address, coordinates, external URL.
- **Feed-sourced events (NowPlayingUtah)**: Likely imported via automated feed. VSL staff may or may not be able to edit these after import.
- **Category taxonomy**: Categories (theatre, music, art, festivals, etc.) are likely managed as a CRM taxonomy. Adding/removing categories may affect URL structure.
- **Image management**: Images uploaded to Simpleview CRM's calendar image directory. Unknown if there's a limit on images per event or required image dimensions.
- **Event approval workflow**: Unknown — do submitted or feed-sourced events require editorial review before publishing?
- **Event ID assignment**: Numeric IDs (e.g., `77782`) appear auto-generated by the CRM.

---

## Questions for Client

### Data & Content
- [ ] What determines which events come from NowPlayingUtah vs. are authored directly in the CMS? Is it a one-way feed, or can VSL staff edit NowPlayingUtah events after import?
- [ ] Can events have multiple venues or locations? (e.g., a festival spanning several sites)
- [ ] How are recurring events handled? One event record with multiple dates, or separate records per occurrence?
- [ ] Do all events have images? What's the typical range (1 image vs. 9+)? Are there required image dimensions?

### Functionality
- [ ] Do all events have the "Visit Website" link, or only some?
- [ ] Are ticket purchase links (e.g., EventsForce) shown on certain events? We didn't see one on this event. What event types support ticketing?
- [ ] Is "Add to Calendar" an iCal file download, a Google Calendar link, or a multi-option selector?
- [ ] Is there a "save" or "favorite" feature for logged-in users?

### Technical
- [ ] What happens to past events? Do pages stay live, get redirected, or get deleted? Are they excluded from search/sitemap?
- [ ] How are event coordinates populated? Manual entry, geocoded from address, or pulled from the venue/listing record?
- [ ] Does "What's Nearby" use a specific radius? Is it configurable per event or global?
- [ ] What's the relationship between event categories in URLs (e.g., `/event/theatre/`) and the CRM taxonomy? If a category is renamed, do URLs update automatically?

### Migration
- [ ] How many total events are currently in the CRM (active + past)?
- [ ] What's the NowPlayingUtah feed format (API, XML, iCal)?
- [ ] Are there other event feed sources besides NowPlayingUtah?
- [ ] Do events have any structured data / schema.org markup currently? (We should check this separately)
