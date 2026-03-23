# Neighborhoods

Functional audit of neighborhood pages on visitsaltlake.com, using Downtown (`/salt-lake-city/downtown/`) as the primary example.

---

## What Users See

**Neighborhood page** (`/salt-lake-city/downtown/`):
- Hero video (e.g., "Salt Lake Food Scene") — video content, not static image
- Breadcrumb navigation: Home | Salt Lake City | Downtown
- Rich editorial content written in a narrative, guide-like voice
- Inline links to specific named venues throughout the prose:
  - **Dining**: Tony Caputo's, Eva's Bakery, Argentina's Best Empanadas, Himalayan Kitchen, Takashi, Cucina Toscana, Caffe Molise
  - **Bars**: Boltcutter's, Beer Bar, BTG
  - **Performing Arts**: Ballet West, Eccles Theatre
  - **Live Music**: Urban Lounge, State Room, Depot, Metro Music Hall, Soundwell, Kilby Court
  - **Hotels**: Hotel Monaco, Peery Hotel, Inn on the Hill
  - **Events**: Farmer's market, Pride
- Related blog posts displayed at bottom of page
- No visible map on this page (despite Map Publisher being in their tech stack)

**Hierarchical structure**:
- **Regions** (top level): Salt Lake City, Mid Valley, Mountain Resorts, South Valley, Southwest Valley, West Valley, Great Salt Lake
- **Sub-neighborhoods** (under Salt Lake City): Downtown, Central City, Sugar House, and others
- Each region has its own landing page, with sub-neighborhoods nested below

## What Users Can Do

- Watch the hero video
- Read curated editorial content about the neighborhood
- Click through to individual venue/listing pages via inline links
- Navigate the region/neighborhood hierarchy via breadcrumbs
- Browse related blog posts at the bottom of the page

## Data Sources

- **Hand-curated editorial content**: The neighborhood descriptions are written prose, not auto-generated from CRM/listing data. A human wrote each section and manually linked to specific venues.
- **Simpleview CMS**: Neighborhood pages are stored as CMS pages with rich text content
- **Listing links**: Inline venue links point to Simpleview listing pages (e.g., `/listing/{slug}/{id}/`), creating a manual relationship between neighborhood content and listing data
- **Blog posts**: Related posts at the bottom are likely tagged with the neighborhood or pulled by category
- **Video**: Hero videos hosted via Simpleview's asset pipeline or an external video service

## Third-Party Services

- **Simpleview CMS**: Page content and hierarchy management
- **Video hosting**: Hero video source (needs confirmation — could be Simpleview assets, YouTube embed, or Vimeo)
- **Map Publisher**: Part of their Simpleview stack but notably absent from this page type

## Edge Cases

- Venue links are hardcoded in editorial prose — if a restaurant closes or a listing is removed, the link breaks but the text reference remains. This creates a maintenance burden.
- Not all neighborhoods may have the same depth of content. Downtown is clearly well-developed; smaller areas like West Valley or Great Salt Lake may have minimal or placeholder content.
- The region hierarchy implies some geographic logic, but there's no visible map to orient users spatially
- Hero videos may not exist for all neighborhoods — what's the fallback? Static image? No hero?
- Related blog posts at the bottom could surface stale content if posts aren't regularly published for each neighborhood
- Mobile experience with hero video: does it autoplay, show a poster frame, or hide entirely?

## Admin Management

- Neighborhood pages require manual editorial writing — this is not a template that auto-populates from data
- Adding a new neighborhood means: creating the page, writing all editorial content, manually linking to relevant listings, selecting a hero video, and positioning it in the region hierarchy
- Venue links within the prose must be manually updated if a listing URL changes or a business closes
- Related blog posts are either manually curated or auto-populated by tag — either way requires coordination between blog and neighborhood content
- The region/sub-neighborhood hierarchy is likely managed through CMS page structure (parent-child relationships)

## Questions for Client

1. Do all neighborhoods have the same depth of editorial content as Downtown, or are some sparse? Which ones need the most attention?
2. Are venue links within neighborhood pages manually maintained? How often do they break when businesses open/close?
3. Is there a reason maps are not shown on neighborhood pages? Would adding a map with pinned venues be valuable?
4. Who writes and updates neighborhood content — one person or distributed across the team?
5. How often is neighborhood content refreshed? Is Downtown's content current or potentially outdated?
6. What's the full list of regions and sub-neighborhoods? Are there plans to add new ones?
7. How are hero videos produced and updated? Is there a video for every neighborhood?
8. For the rebuild, would you want neighborhood pages to dynamically pull in nearby listings (restaurants, hotels, etc.) rather than relying on manually linked venues in prose?
