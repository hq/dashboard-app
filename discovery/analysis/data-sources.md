# Phase D: Data Sources Map

Synthesized from Phase A-B audit findings, 2026-03-19.

---

## Content Types & Their Sources

| Content Type | Primary Source | Secondary Sources | Volume | How It Reaches the Site | Update Frequency |
|-------------|---------------|-------------------|--------|------------------------|-----------------|
| **Events** | Simpleview CMS | NowPlayingUtah feed | ~1,800 | CMS + external feed import | Daily (feed), ongoing (CMS) |
| **Listings** (restaurants, attractions, etc.) | Simpleview CRM | TripAdvisor (reviews/ratings) | ~2,000 | CRM database → site templates | Ongoing; partner updates via extranet? |
| **Hotels/Accommodation** | Simpleview CRM | TripAdvisor (reviews/ratings) | ~204 | CRM database → site templates | Ongoing |
| **Blog Posts** | Simpleview CMS | — | ~305 | CMS editorial workflow | Weekly/as needed |
| **Articles** | Simpleview CMS | — | ~155 | CMS editorial (separate from blog) | As needed |
| **Neighborhoods** | Simpleview CMS | — | ~50 | Hand-curated editorial content | Seasonal/occasional |
| **Jobs** | Simpleview CMS/CRM | — | ~72 | Unknown submission flow | Unknown |
| **Passes/Tickets** | CMS + Bandwango | EventsForce | Unknown | CMS content + vendor integration | As deals change |
| **Meeting/Facility Data** | Simpleview CRM | — | Subset of listings | CRM structured fields | Partner-managed? |
| **Weather** | Simpleview API | — | 1 widget | `/plugins/core/svapi/?service=weatherv2&endpoint=latlng` | Real-time |
| **Maps** | Map Publisher (CRM) | Google Maps (directions) | Per-listing | CRM lat/long coordinates | Synced with listing data |
| **Static/Corporate Pages** | Simpleview CMS | — | ~30 | Standard CMS pages | Occasional |
| **Sports Content** | Simpleview CMS | Playeasy (stories) | ~15 | CMS + external links | Occasional |

---

## External Data Flows

### Data INTO the site (inbound):

| Source | What It Provides | Mechanism | Pages Affected |
|--------|-----------------|-----------|---------------|
| **NowPlayingUtah** | Leisure events | Feed import (API? dump?) | Event detail, event index, homepage |
| **TripAdvisor** | Reviews, ratings, rankings | API or periodic sync | Listing detail pages (some, not all) |
| **Simpleview Weather API** | Current conditions + 5-day forecast | Real-time API call from browser | Global weather widget (every page) |
| **Google Maps** | Directions links | Outbound link with lat/long | Event detail, listing detail |

### Data OUT OF the site (outbound):

| Destination | What's Sent | Mechanism | Pages Affected |
|-------------|------------|-----------|---------------|
| **Simpleview CRM** | RFP submissions | Form POST to `saltlake.simpleviewcrm.com/webapi/rfp/` | `/rfp/`, `/sports/contact-us/rfp/` |
| **Simpleview CRM** | Newsletter signups | Form POST (CRM formbuilder) | `/plan-your-visit/subscribe/`, meetings newsletter, sports newsletter |
| **Google Tag Manager** | Page views, click events | JS beacon | Every page (2 containers) |
| **VWO** | Experiment data | JS beacon | Pages with active A/B tests |
| **Act On** | Marketing data | Via CRM sync or GTM | Unknown (not directly in page source) |

### Bidirectional:

| Service | Inbound | Outbound |
|---------|---------|----------|
| **Simpleview CRM** | Listing data, event data, partner info | Form submissions, lead capture |
| **Bandwango** | Pass availability/deals | Purchase/redemption data |

---

## Image & Asset Hosting

| Type | Host | URL Pattern | Example |
|------|------|-------------|---------|
| CRM images (events, listings) | `saltLake.simpleviewcrm.com` | `/images/calendar/{id}`, `/images/listings/{id}` | Event photos, listing galleries |
| CMS assets | `assets.simpleviewinc.com` | `/simpleview/image/upload/...` | Logos, icons, PDFs, editorial images |
| Site assets | `www.visitsaltlake.com` | `/includes/public/assets/...`, `/includes/public/fonts/...` | Logo SVGs, custom fonts (Saans) |

---

## Authentication & Access

| Portal | URL | Who Uses It | What They Access |
|--------|-----|-------------|-----------------|
| Member Extranet | `saltlake.extranet.simpleviewcrm.com/login/` | VSL members (hotels, restaurants, partners) | Unknown — listing management? Reports? |
| CMS Admin | Unknown (Simpleview backend) | VSL staff | Content editing, CRM management |

---

## Key Findings

1. **Simpleview CRM is the single source of truth** for listings, partners, and structured data. All listing pages render from CRM data.

2. **Events come from two sources**: CMS-authored events AND NowPlayingUtah feed imports. Both display identically; NowPlayingUtah events have attribution text in the description.

3. **TripAdvisor integration is selective** — appears on some listings but not all. Unclear if it's based on listing tier, data availability, or manual toggle.

4. **Images are split across two Simpleview hosts** — CRM images on `saltLake.simpleviewcrm.com` and editorial assets on `assets.simpleviewinc.com`. Both need migration strategy.

5. **Act On is invisible** in the page source — likely loaded via GTM or triggered from CRM form submissions. The actual marketing automation connection is opaque from the public site.

6. **No direct Bandwango, Ripe, or EventsForce code found** in any page we inspected. These may be embedded on specific pages we didn't visit, loaded conditionally, or operate as outbound links only.

---

## Questions for Client

- [ ] How does the NowPlayingUtah feed import work technically? Is it automated or manual?
- [ ] Which TripAdvisor integration tier are you on? Can we access the API for the rebuild?
- [ ] How does CRM data sync to the public website? Real-time, cached, or batch?
- [ ] Where are Bandwango, Ripe, and EventsForce actually embedded? We couldn't find them on any page inspected.
- [ ] What's the total image/media volume in Simpleview? How many GB of assets need migration?
