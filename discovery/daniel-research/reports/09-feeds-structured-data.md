# RSS Feeds & Structured Data Inventory

**Date:** 2026-03-24
**Task:** #5

---

## RSS / Atom Feeds

**No RSS or Atom feeds found.**

Checked URLs:
- `/rss/` — 404
- `/feed/` — 404
- `/blog/rss/` — 404
- No `<link type="application/rss+xml">` or `<link type="application/atom+xml">` in any page head

**Rebuild consideration:** Adding RSS feeds for blog posts and events would be a new feature, not a 1-to-1 requirement.

---

## JSON-LD Structured Data

### By Page Type

| Page Type | JSON-LD Present | Schema Types | Items |
|-----------|----------------|--------------|-------|
| Homepage | No | — | 0 |
| Listing Detail | Yes | SportsActivityLocation + Article, LocalBusiness | 2 |
| Event Detail | Yes | ExhibitionEvent | 1 |
| Blog Post | Yes | BlogPosting | 1 |

### Listing Detail — Schema (2 items)

**Schema 1: SportsActivityLocation + Article**
```json
{
  "@context": "http://schema.org",
  "@type": ["SportsActivityLocation", "Article"],
  "name": "Memory Grove Trail",
  "alternateName": "Memory Grove Trail",
  "description": "An easy kid- and dog-friendly trail...",
  "hasMap": "https://www.outdooractive.com/api/staticmap?i=64718987&size=xlarge&project=api-fv-visit-salt-lake",
  "Image": [{"@type": "ImageObject", "author": {...}}]
}
```

**Schema 2: LocalBusiness**
```json
{
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "Memory Grove Trail",
  "image": "https://assets.simpleviewinc.com/...",
  "url": "https://www.visitsaltlake.com/listing/memory-grove-trail/70583/",
  "description": "An easy kid- and dog-friendly trail..."
}
```

**Notes:**
- Dual schema (SportsActivityLocation + LocalBusiness) — provides rich results for both activity and business search
- Includes Outdooractive static map URL in `hasMap`
- Image objects include author attribution
- The schema type likely varies by listing category (SportsActivityLocation for trails vs Hotel for hotels, etc.)

### Event Detail — Schema (1 item)

```json
{
  "@context": "http://schema.org",
  "@type": "ExhibitionEvent",
  "name": "2026 ABA Annual Convention",
  "startDate": "2026-10-25",
  "endDate": "2026-10-27",
  "url": "https://www.visitsaltlake.com/event/2026-aba-annual-convention/conventions_42192/",
  "description": "",
  "location": {
    "@type": "Place",
    "address": {"@type": "PostalAddress"}
  }
}
```

**Notes:**
- Uses ExhibitionEvent type (specific to trade shows/conventions)
- Date range properly formatted
- Location uses Place with PostalAddress (may be empty for some events)
- Description empty for this sample — may be populated for others

### Blog Post — Schema (1 item)

```json
{
  "@context": "http://schema.org",
  "@type": "BlogPosting",
  "url": "https://www.visitsaltlake.com/blog/stories/post/the-best-hiking-trails-near-salt-lake/",
  "headline": "The Best Hiking Trails Near Salt Lake City for Out-of-State Visitors",
  "image": {
    "@type": "imageObject",
    "url": "https://assets.simpleviewinc.com/...",
    "width": 1200,
    "height": 800
  }
}
```

**Notes:**
- Standard BlogPosting schema
- Image with dimensions for rich results
- May include additional fields (author, datePublished, etc.) on other posts

---

## Open Graph Tags

### Present on all page types tested

**Homepage:**
| Property | Content |
|----------|---------|
| og:title | Salt Lake City Hotels, Restaurants, Events, Things to Do & Shopping |
| og:url | https://www.visitsaltlake.com/ |
| og:description | Whether you're visiting Salt Lake City for business or taking a vacation... |
| og:locale | en_us |
| og:image | Simpleview CDN URL (1000x667) |
| og:image:width | 1000 |
| og:image:height | 667 |
| og:type | website |

**Listing Detail:** 6 OG tags
**Blog Post:** 8 OG tags
**Event Detail:** OG tags present

### Key Observations
- OG tags are consistently implemented across all page types
- Images use Simpleview CDN with proper dimensions
- `og:locale` set to `en_us`
- No `og:locale:alternate` for other languages (despite 8-language translation support)

---

## Twitter Cards

| Property | Content |
|----------|---------|
| twitter:card | summary_large_image |

**Minimal implementation** — only card type specified. No twitter:site, twitter:creator, or other properties.

---

## Canonical URLs

- **Present on all tested pages**
- Correctly self-referencing
- Examples:
  - Homepage: `https://www.visitsaltlake.com/`
  - Listing: `https://www.visitsaltlake.com/listing/memory-grove-trail/70583/`
  - Blog: `https://www.visitsaltlake.com/blog/stories/post/the-best-hiking-trails-near-salt-lake/`

---

## Hreflang Tags

**Not present** on any tested page. Despite having 8-language translation support via GTranslate, no hreflang alternate links are set. This is because GTranslate handles translation client-side — there are no separate translated URLs.

---

## Rebuild Implications

### Maintain (1-to-1)
1. **JSON-LD on listings** — dual schema (LocalBusiness + activity-specific type)
2. **JSON-LD on events** — ExhibitionEvent with dates and location
3. **JSON-LD on blog** — BlogPosting schema
4. **Open Graph tags** — all pages with proper images and descriptions
5. **Twitter Cards** — summary_large_image
6. **Canonical URLs** — self-referencing on all pages

### Improve in Rebuild
1. **Add JSON-LD to homepage** — currently missing (Organization or WebSite schema)
2. **Enhance Twitter Cards** — add twitter:site, twitter:creator
3. **Add hreflang tags** — if proper i18n is implemented (not just client-side translation)
4. **Consider RSS feeds** — for blog posts and events (currently none)
5. **Add BreadcrumbList schema** — for better search navigation display
6. **Vary listing schema type** — by category (Hotel, Restaurant, TouristAttraction, etc.)

---

## Artifacts

### Raw Data (docs/marketing-site-research/raw/phase-05/)
- `01-homepage-structured-data.json` — Homepage: OG, Twitter, canonical, JSON-LD, feeds, hreflang
- `02-listing-structured-data.json` — Listing: 2 JSON-LD schemas + OG
- `03-blog-structured-data.json` — Blog: 1 JSON-LD schema + OG
- `04-event-structured-data.json` — Event: 1 JSON-LD schema + OG
