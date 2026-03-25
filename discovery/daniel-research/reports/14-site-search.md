# Internal Site Search Feature Analysis

**Date:** 2026-03-24
**Task:** #6

---

## Overview

The site uses **Simpleview's built-in search system** (`plugins_search`), not a third-party search provider. The search is integrated into the CMS with content type filtering, pagination, and autocomplete/suggest functionality.

---

## Search Architecture

| Property | Details |
|----------|---------|
| Provider | Simpleview CMS built-in (`plugins_search`) |
| URL pattern | `/search/?q={query}&type={content_type}` |
| Header search | `plugins_search_headerbox` — search box in site header |
| Results widget | `plugins_search_results` — results display widget |
| Autocomplete | Present (autocomplete + suggest detected in HTML) |
| Results per page | 10 |
| Pagination | Yes — "Showing X-Y of Z" format |

---

## Content Type Filters (Facets)

The search supports filtering by content type. Available types:

| Filter | URL param | Description | Example count ("hotels") |
|--------|-----------|-------------|-------------------------|
| All Content Types | (no type) | All results | 440 |
| Listings | type=listings | CRM Listings (hotels, restaurants, etc.) | 191 |
| Pages | type=nav | CMS Pages (navigation items) | 94 |
| Articles | type=blog_articles | PR/press articles | 83 |
| Blog | type=blog_leisure_blog | Blog posts | 54 |
| Events | type=events | Events | 18 |
| Tracks | type=track | Trails/tracks | — |
| Partners | type=partn | Partner listings | — |
| Urban | type=urban | Urban/city content | — |

### Facet Display
Facets are shown as a sidebar with counts:
```
440 results for hotels in All Content Types.
Filter your search by selecting a specific type of content.
  Listings : 191
  Pages : 94
  Articles : 83
  Blog : 54
  Events : 18
```

**Note:** Only facets with results are displayed. "track", "partn", "urban" types didn't show for "hotels" search but may appear for other queries.

---

## Search Results Format

Each result displays:
- **Title** — linked to the page
- **URL** — shown below title
- **Content type label** — e.g., "Listings"
- **Excerpt/description** — text snippet from the page

### Result Item Structure
```html
<div class="search_result_item">
  <div class="search_result_item_top">
    [Title + Link]
  </div>
  <div class="search_result_item_bottom">
    [URL + Content Type + Description]
  </div>
</div>
```

---

## Search Features

### Header Search Box
- Present on all pages in the site header
- Quick search without leaving the current page
- Widget: `plugins_search_headerbox`

### Autocomplete / Suggest
- Autocomplete and suggest functionality detected in the search code
- Provides suggestions as user types

### Pagination
- 10 results per page
- "Showing X-Y of Z" pagination display
- Pagination controls at bottom of results

### No Results Handling
- `search_results_notfound` class exists for zero-result display
- Dedicated empty state messaging

---

## Search Testing

### Query: "hotels"
- Total: 440 results
- Listings: 191, Pages: 94, Articles: 83, Blog: 54, Events: 18
- Results include: My Place Hotels, Evo Hotel, Peery Hotel (listings)

### Query: "trails" (from Task 38)
- Results included both blog posts and CRM listings
- Filter types shown: blog_articles, blog_leisure_blog, events, listings, nav

---

## Search Scope

The search indexes:
1. **CRM Listings** (4,629 in sitemap) — hotels, restaurants, attractions, trails
2. **CMS Pages** (navigation items) — all sitemap pages
3. **PR Articles** (156 in sitemap)
4. **Blog Posts** (310 in sitemap)
5. **Events** (1,898 in sitemap)
6. **Tracks/Trails** — outdoor activity content
7. **Partners** — partner/member listings
8. **Urban content** — city/neighborhood content

---

## Rebuild Implications

### Must Replicate
1. **Full-text search** across all content types (listings, events, pages, blog, articles)
2. **Content type faceting** — filter by type with result counts
3. **Pagination** — 10 results per page
4. **Autocomplete/suggest** — type-ahead suggestions
5. **Header search box** — accessible from every page

### Technical Considerations
- Current search is **server-side** (Simpleview's search engine)
- New platform options: Algolia, Elasticsearch, Meilisearch, native CMS search
- Must index **CRM content** (listings + events = 85.7% of searchable content)
- Search URL pattern (`/search/?q=&type=`) should be maintained or redirected

### Search Complexity
- **8 content types** indexed
- **7,619+ pages** to index
- **Faceted filtering** with dynamic counts
- **Autocomplete** functionality
- This is a **medium-complexity** search implementation

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-06/)
- `01-search-hotels.png` — Search results for "hotels" (all types, 440 results)
- `02-search-listings-filter.png` — Search filtered to Listings only (191 results)

### Raw Data (docs/marketing-site-research/raw/phase-06/)
- `01-search-hotels.html` — Full search results page HTML
