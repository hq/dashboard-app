# Search Results

Functional audit of the site search functionality on visitsaltlake.com, tested with the query `/search/?q=hiking`.

---

## What Users See

**Search results page** (`/search/?q={query}`):
- Search box at the top, pre-filled with the current query term
- Flat list of mixed result types — no grouping or filtering by content type
- Each result displays:
  - Title (linked)
  - URL path with a type label suffix (e.g., "- Pages", "- Articles", "- Listings")
  - Brief excerpt text

**Result types observed** (for query "hiking"):
- **Pages**: e.g., `/things-to-do/outdoor-recreation/hiking/ - Pages`
- **Articles**: e.g., `/articles/post/family-hiking-trips/... - Articles`
- **Listings**: e.g., `/listing/the-living-room-hike/65912/ - Listings`
- **Blog posts**: Shown with title and excerpt (type label format may differ)

**Notable absences**:
- No faceted filtering — users cannot filter results by content type (pages, listings, articles, blog, events, etc.)
- No visible pagination in the results viewed — unclear if results are truncated or if all results appear on one page
- No sorting options (relevance, date, alphabetical)
- No "did you mean" or autocomplete suggestions
- No result count shown (e.g., "42 results for hiking")

Results appear to be ranked by relevance, though the specific algorithm is unknown.

## What Users Can Do

- Enter a search query via the search box
- View a flat list of mixed results
- Click through to any result
- Modify their query in the pre-filled search box
- That's it — no filtering, sorting, pagination controls, or advanced search options are visible

## Data Sources

- **Search index**: Covers multiple content types — pages, articles, listings, and blog posts are all included in results
- **Simpleview CMS**: Likely provides the search index, as it manages all the content types that appear in results
- Content types indexed: CMS pages, articles, listings (from CRM/listing database), blog posts
- Unclear whether events, member directory, or other dynamic content is included in the search index

## Third-Party Services

- **Search engine**: Unknown from front-end audit alone. Possibilities:
  - **Simpleview built-in search**: Most likely, given all results are Simpleview content types with Simpleview URL patterns
  - **External search service**: Could be Google Custom Search, Algolia, Elasticsearch, or similar — but no visible branding or script references suggest this
- **Simpleview CMS**: Provides the content that's indexed and the result page template

## Edge Cases

- No faceted filtering means users searching for "hiking" see a mix of trail listings, blog articles, and static pages — they can't narrow down to just "trails" or just "articles"
- No visible pagination raises a question: if a broad query returns 500+ results, are they all on one page (slow load, overwhelming) or silently truncated (missing results)?
- No result count means users don't know if they're seeing everything or a subset
- Mixed type labels appended to URLs ("- Pages", "- Articles", "- Listings") are an unusual UX pattern — the type information is useful but the format is raw/unstyled
- Empty or very short queries may produce unexpected results or errors
- Special characters in queries could break the URL pattern or return no results
- Misspelled queries have no "did you mean" correction — users must guess the right spelling
- Search results for closed businesses, past events, or archived content may surface stale results

## Admin Management

- Search functionality is likely managed at the platform level (Simpleview) rather than by VSL staff
- No visible admin controls for:
  - Boosting certain results (e.g., promoting the hiking page above individual trail listings)
  - Excluding content from search (e.g., hiding archived events)
  - Managing synonyms (e.g., "hike" = "hiking" = "trail")
  - Customizing result display per content type
- Search index updates probably happen automatically when CMS content is published, but the refresh interval is unknown
- No indication of search analytics being collected (popular queries, zero-result queries, click-through rates)

## Questions for Client

1. What search engine powers the site search? Is it Simpleview's built-in search or an external service?
2. Is there pagination on search results? If a query returns hundreds of results, what happens?
3. Can search results be filtered by content type? Is this a feature that exists but isn't surfaced, or does it not exist at all?
4. Do you have access to search analytics — popular queries, queries with no results, click-through rates?
5. Is there any admin ability to boost, pin, or suppress specific search results?
6. Are there content types that should be excluded from search (e.g., internal pages, archived events)?
7. How important is site search to the overall user experience? Do you know what percentage of visitors use it?
8. For the rebuild, is improved search (faceted filtering, autocomplete, better relevance) a priority?
9. Are there any known search issues — queries that return bad results, missing content, or complaints from users?
10. Should search results look different based on content type (e.g., listings show a thumbnail and address, events show a date, blog posts show an excerpt)?
