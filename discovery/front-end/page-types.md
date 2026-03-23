# Page Types — visitsaltlake.com

**Total URLs in sitemap: 7,692**

Based on the sitemap crawl (2026-03-19), the site has ~12 distinct page types/templates, with most URLs being instances of just two templates: **Event Detail** and **Listing Detail**.

## High-level breakdown

| Template | URL Pattern | Est. Count | Notes |
|----------|-------------|------------|-------|
| **Event Detail** | `/event/{category}/{slug}` | ~1,800+ | By far the largest — events grouped by category (music, art, theatre, festivals, sports, dance, etc.) |
| **Listing Detail** | `/listing/{business-name}/{location}` | ~2,000+ | Business/attraction pages — restaurants, shops, services. Each business has multiple location pages. |
| **Blog/Story** | `/blog/stories/{slug}` | ~305 | Blog articles |
| **Article** | `/articles/post/{slug}` | ~155 | Separate from blog — likely editorial/press content |
| **Category Index** | `/things-to-do/{category}`, `/events/{category}`, `/restaurants/{type}` | ~100+ | Filterable listing pages for browsing |
| **Neighborhood/Area** | `/salt-lake-city/{area}`, `/midvalley/{area}`, `/south-valley/{area}` | ~50+ | Neighborhood profile pages with local listings |
| **Plan Your Visit** | `/plan-your-visit/{topic}` | ~50+ | Trip planning content — itineraries, transportation, diversity, about SLC |
| **Meetings & Convention** | `/meetings/*`, `/salt-palace-convention-center/*`, `/mountain-america-expo-center/*` | ~50+ | Convention/meetings sales content — venue info, services, planning |
| **Places to Stay** | `/places-to-stay/*` | ~20+ | Hotels and accommodation |
| **Sports** | `/sports/*`, `/sports/facilities/*` | ~15+ | Sports venues and content |
| **Hospitality Jobs** | `/hospitality-jobs/listing/*` | ~72 | Job board |
| **Static/Corporate** | `/about-us/*`, `/members/*`, `/press-research/*`, `/travel-trade/*` | ~30+ | About, membership, press, travel trade |

## Key observations

1. **Event and Listing pages dominate** — ~3,800 of 7,692 URLs are detail pages for events or businesses. These are almost certainly generated from Simpleview's CRM/listing database. One template each.

2. **Deep category nesting** — Events are categorized by type (music, art, theatre, festivals, sports, dance, classes, outdoor recreation, humanities, film, museums, culinary, mountain resorts, fundraisers). Each category has its own index page plus detail pages.

3. **Listing duplication** — Many businesses have multiple location pages (e.g., `/listing/subway/*` has 68 URLs). This is Simpleview's listing system creating a page per location.

4. **Multiple content hubs** — Blog (`/blog/stories/`), Articles (`/articles/post/`), and Plan Your Visit (`/plan-your-visit/trip-ideas-itineraries/`) are three separate content areas that may have different templates or could potentially be consolidated.

5. **Convention center microsites** — Salt Palace Convention Center and Mountain America Expo Center each have their own section with plan/attend/about/exhibit subpages. These function almost like mini-sites within the main domain.

6. **Neighborhood structure** — Geographic areas are organized hierarchically: Salt Lake City neighborhoods, Midvalley cities, South Valley, Southwest Valley, West Valley. Each has sub-area pages.

## Template count estimate

For a rebuild, we're looking at approximately **12-15 distinct page templates**:
1. Homepage
2. Event detail
3. Listing/business detail
4. Blog/article detail
5. Category index (filterable grid)
6. Neighborhood/area profile
7. Plan your visit content page
8. Meetings/convention landing
9. Convention center venue page
10. Places to stay / hotels
11. Sports venue/content
12. Job listing
13. Static/corporate page
14. Search results
15. 404 / error

The bulk of the build effort is in the **category index** (search/filter UX) and **detail pages** (event, listing) since they serve the majority of content.
