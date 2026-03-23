# B1. Homepage — visitsaltlake.com

Audited 2026-03-19 via headless browser inspection of the live site.

URL: `https://www.visitsaltlake.com/`

The homepage is the primary entry point for leisure visitors. It is a long-scroll page composed of ~12 distinct content sections, mixing editorial content, CMS-curated features, external data feeds, interactive elements, and promotional blocks. It serves as both a discovery surface (events, neighborhoods, blog) and a conversion funnel (passes, trip planning, newsletter).

---

## 1. Hero Carousel

### What users see
- Full-width image/video slideshow occupying the top of the page
- Each slide has a headline, supporting text, and a CTA button
- Observed slides:
  1. **"Salt Lake Ski Super Pass"** — "Discover More" CTA
  2. **"Apres Ski in Salt Lake"** — links to winter downtown content
  3. **"Salt Lake Events"** — concert imagery
  4. **"Tours & Experiences — Explore pass options"** — "Explore More" CTA

### What users can do
- Navigate between slides (auto-advances)
- **Pause button** (`@e43 [button] "pause button"`) — stops auto-rotation (accessibility requirement for auto-playing content)
- **Play video** — some slides have video content with a play button overlay
- Click CTA buttons to navigate to campaign/landing pages

### Where data comes from
- **Simpleview CMS** — slides are almost certainly managed as a homepage carousel content type or widget zone
- Each slide requires: background image (or video), headline, body text, CTA label, CTA URL
- Slide ordering and active/inactive state controlled by CMS

### Third-party services
- **VWO** — A/B testing could be running on hero content (VWO is active on the page; hero is a prime candidate for experimentation)
- Video hosting source unknown (could be self-hosted via Simpleview asset CDN or embedded from YouTube/Vimeo)

### Edge cases
- Video playback on mobile (autoplay restrictions on iOS/Android)
- Slide count: what happens with 1 slide? 0 slides? Are there minimum/maximum limits?
- Seasonal content rotation — the observed slides are winter/ski-themed, implying seasonal swaps
- Accessibility: pause button exists, but does keyboard navigation work between slides? Is `aria-live` used for slide announcements?

### What admins manage
- Add/remove/reorder slides
- Upload hero images and videos per slide
- Set headline, body text, CTA label, CTA URL per slide
- Likely: schedule slides by date range (seasonal campaigns)
- Likely: toggle active/inactive per slide

---

## 2. Featured Destinations

### What users see
- 3 image cards in a row, each with a title overlay:
  1. **"The Great Salt Lake"**
  2. **"Restaurants in Salt Lake"**
  3. **"Attractions & Historic Sites"**

### What users can do
- Click each card to navigate to the corresponding content page

### Where data comes from
- **Simpleview CMS** — curated editorial block. These are not dynamically generated; they are hand-picked destination highlights.
- Each card requires: image, title, destination URL

### Third-party services
- None

### Edge cases
- Static count (always 3) or flexible? If CMS allows variable count, layout must handle 1, 2, 4+ cards
- Image aspect ratio enforcement — what happens if an admin uploads a non-standard image?

### What admins manage
- Select which 3 destinations to feature
- Upload/choose image for each card
- Set title and link URL for each card

---

## 3. "America's Mountain City" Editorial Block

### What users see
- Rich editorial text block introducing Salt Lake City
- Content mentions: 4 ski resorts within 30 minutes of downtown, national parks, seasonal activities
- Inline links to specific content pages (hiking, Jazz games, national parks, Broadway shows)

### What users can do
- Read the introductory copy
- Click inline links to navigate deeper into the site (these are contextual, embedded in prose)

### Where data comes from
- **Simpleview CMS** — rich text content block, likely a WYSIWYG editor field
- The inline links are hardcoded in the HTML by the content editor (not dynamically generated)

### Third-party services
- None

### Edge cases
- If the editor changes or removes linked pages, inline links could break (no automatic link validation)
- Content is evergreen but references seasons — may need periodic review

### What admins manage
- Full rich text editing (WYSIWYG)
- Inline link management within the prose

---

## 4. Planning CTA

### What users see
- Promotional section: **"Planning Your Salt Lake Trip"**
- "Start Planning" button

### What users can do
- Click "Start Planning" to navigate to `/plan-your-visit/`

### Where data comes from
- **Simpleview CMS** — likely a configurable CTA block with headline, body text, button label, and button URL

### Third-party services
- None

### Edge cases
- Minimal — this is a simple CTA block

### What admins manage
- Headline text, body copy, button label, button URL
- Possibly image/background

---

## 5. Attractions Pass Promotion

### What users see
- Promotional block: **"Save over 50% on Attractions!"**
- Image of Hogle Zoo Carousel
- "Read More" CTA button

### What users can do
- Click "Read More" to navigate to the attractions pass page (likely a Bandwango-powered pass landing page)

### Where data comes from
- **Simpleview CMS** — curated promotional content block

### Third-party services
- **Bandwango** — the pass itself is sold through Bandwango, but this homepage block is just a CTA pointing to that experience. The Bandwango integration happens on the destination page, not here.

### Edge cases
- The "50%" claim is marketing copy — if the pass deal changes, this block needs manual update
- Seasonal relevance — is this block always shown or swapped seasonally?

### What admins manage
- Headline, body text, image, CTA label, CTA URL
- Likely: toggle visibility or schedule display dates

---

## 6. Featured Events

### What users see
- Section header: **"Make your next visit an adventure..."**
- **"View All Events"** link pointing to `/events/`
- **5 event cards** displayed in a row/grid, each showing:
  - Date badge (e.g., "Mar 19") — prominently styled
  - Event title
  - Description excerpt (truncated)
  - "View Event" CTA button
- Events observed on audit date (2026-03-19):
  1. Peter Pan Goes Wrong
  2. Seussical The Musical
  3. Utah Jazz vs. Milwaukee Bucks
  4. John Mulaney
  5. National Theatre Live: Hamlet

### What users can do
- Click any event card to view the full event detail page
- Click "View All Events" to browse the full events index

### Where data comes from
- **Mixed sources** — this is a key finding:
  - Some events originate from the **Simpleview CMS** (manually entered by staff)
  - Some events come from the **NowPlayingUtah feed** (external data import)
  - **NowPlayingUtah attribution is visible**: The Jazz event description includes the text "This calendar listing is brought to you by NowPlayingUtah.com"
  - Both sources render identically — the user cannot distinguish CMS events from feed events
- **Selection logic unknown**: Are these the next 5 upcoming events? CMS-curated? A mix of categories? Weighted by some algorithm?

### Third-party services
- **NowPlayingUtah** — external events feed. Events from this feed are imported into the CMS/CRM and displayed alongside native events. Attribution text appears in the event description body, not as a separate UI element.

### Edge cases
- What happens when fewer than 5 upcoming events exist? (unlikely but possible during slow seasons)
- Date badge formatting for multi-day events (shows start date only? date range?)
- Past events — are they filtered out automatically, or could a stale event appear?
- NowPlayingUtah feed failures — if the feed goes down, do those events disappear from the homepage?
- Description truncation — is it character-based or word-based? Does it break mid-sentence?

### What admins manage
- **Unknown whether these are curated or algorithmic** — this is a key question for the client
- If curated: admins pick which events appear on the homepage
- If algorithmic: the system automatically pulls upcoming events (possibly with category weighting or featured flags)
- NowPlayingUtah events are likely imported on a schedule and then treated as regular events in the CMS

---

## 7. Upcoming Events Sidebar

### What users see
- A list of **7+ upcoming events** displayed as date + title links
- Appears alongside or below the featured events section

### What users can do
- Click any event title to navigate to its detail page

### Where data comes from
- **Simpleview CMS/CRM** — likely an automated query for upcoming events, sorted by date ascending
- Probably the same mixed CMS + NowPlayingUtah data pool as the featured events

### Third-party services
- **NowPlayingUtah** (indirectly, via the shared events pool)

### Edge cases
- Overlap with the 5 featured events — are duplicates filtered out?
- How far ahead does this list look? Next 7 days? 14 days? Calendar month?

### What admins manage
- Likely automated — no manual curation needed
- May have a configurable count (how many to show) and date range

---

## 8. Event Category Cards

### What users see
- Horizontal carousel with **prev/next navigation arrows**
- **5 category cards** observed:
  1. Annual Events
  2. Kids & Families
  3. LGBTQ Events
  4. Festivals & Special Events
  5. Concerts & Live Music
- Each card has an image and category name

### What users can do
- Click prev/next arrows to scroll the carousel
- Click any category card to navigate to that event category's index page (e.g., `/events/festivals/`)

### Where data comes from
- **Simpleview CMS** — these are event categories defined in the CMS taxonomy, surfaced as navigation cards
- Images are curated per category (not auto-generated from event images)

### Third-party services
- None

### Edge cases
- Total number of categories may exceed 5 — the carousel implies there are more off-screen
- Empty categories — if a category has no upcoming events, does the card still appear?
- Mobile behavior — does the carousel work with swipe gestures?

### What admins manage
- Category names and hierarchy (CMS taxonomy)
- Category card images
- Display order in the carousel
- Likely: which categories appear on the homepage vs. only in navigation

---

## 9. Blog Posts — "The Salt Lake Scene"

### What users see
- Section header: **"The Salt Lake Scene"**
- **4 article cards**, each showing:
  - Featured image
  - Category label (e.g., "Events & Festivals", "Things to Do", "Outdoor Recreation & Sports")
  - Article title
- "View All Blog Posts" CTA at the bottom
- Articles observed:
  1. "Cherry Blossom Season in Salt Lake" (Events & Festivals)
  2. "Spring Skiing Near Salt Lake" (Things to Do)
  3. "Spring Festivals in Salt Lake" (Events & Festivals)
  4. "Spring Hiking in Salt Lake" (Outdoor Recreation & Sports)

### What users can do
- Click any article card to read the full blog post
- Click "View All Blog Posts" to browse the blog index

### Where data comes from
- **Simpleview CMS** — blog/article content type
- **Selection logic unknown**: The 4 articles shown are all spring-themed (matching the season), which could mean:
  - Most recent posts (and the editorial calendar is seasonal)
  - CMS-curated homepage features
  - Category or tag-based filtering (e.g., "seasonal" tag)

### Third-party services
- None

### Edge cases
- If blog publishing slows down, stale articles could appear for weeks
- Category labels come from the blog taxonomy — consistency depends on editorial discipline
- Image quality/aspect ratio varies if not enforced by the CMS

### What admins manage
- Blog post creation (title, body, featured image, category)
- **Unknown whether homepage selection is manual or automatic** — key question for client
- Blog category taxonomy

---

## 10. Neighborhood Map Explorer

### What users see
- Section header: **"Explore Salt Lake, One Amazing Spot at a Time"**
- **Interactive hierarchical menu** of regions and neighborhoods:
  - **Salt Lake City**: Downtown, Central City, Sugar House, Avenues Capitol Hill, University Foothill, Granary Ballpark, Airport Fairgrounds
  - **Mid Valley**: Cottonwood Heights, Holladay Murray, Midvale, Millcreek, South Salt Lake
  - **Mountain Resorts**: Little Cottonwood, Big Cottonwood
  - **South Valley**: Sandy, Draper
  - **Southwest Valley**
  - **West Valley**
  - **Great Salt Lake**
- **Image gallery** that updates based on the selected neighborhood
- Clickable image buttons with descriptive alt text

### What users can do
- Click a region to expand its neighborhoods
- Click a neighborhood to:
  - See a photo gallery for that area
  - Navigate to the full neighborhood profile page
- Browse images in the gallery (clickable buttons suggest lightbox or navigation behavior)

### Where data comes from
- **Simpleview CMS** — neighborhood content type with hierarchical taxonomy (region > neighborhood)
- Images per neighborhood are CMS-managed
- The geographic hierarchy matches the site's `/salt-lake-city/`, `/midvalley/`, `/south-valley/` URL structure

### Third-party services
- **Possibly Map Publisher** — if there is an actual map rendering (not just the menu), it could use Simpleview's Map Publisher to show neighborhood boundaries and points of interest
- Alternatively, this may be purely custom JavaScript with no map integration (just a photo gallery switcher)

### Edge cases
- Neighborhoods with no images — does a default/placeholder image appear?
- Performance — if all neighborhood images are pre-loaded, this could be heavy. Likely lazy-loaded on selection.
- Mobile UX — the hierarchical menu + image gallery interaction pattern may need significant rethinking for small screens
- New neighborhoods added to the CMS — do they automatically appear here, or does the homepage need manual updating?

### What admins manage
- Neighborhood taxonomy (regions and their child neighborhoods)
- Photo galleries per neighborhood
- Neighborhood descriptions and profile page content
- Display order of regions and neighborhoods

---

## 11. Instagram Gallery

### What users see
- Horizontal photo carousel
- Images appear to be Instagram-style photography (alt text describes scenic Salt Lake imagery)

### What users can do
- Browse through images (carousel navigation)
- Likely: click images to navigate to the original Instagram post or a related page

### Where data comes from
- **Unknown** — two possibilities:
  1. **Live Instagram feed** — pulling from Visit Salt Lake's Instagram account via the Instagram API (or a third-party social feed aggregator like Curator.io, Juicer, etc.)
  2. **CMS-managed gallery** — manually uploaded images styled to look like an Instagram feed

### Third-party services
- **Possibly Instagram API** or a social feed aggregation service
- If API-based, the Instagram Basic Display API or Graph API would be involved
- Note: Instagram API access has become more restrictive — many DMOs have moved to CMS-managed "Instagram-style" galleries

### Edge cases
- If live feed: API rate limits, Instagram API deprecation, content moderation (inappropriate tagged photos)
- If live feed: Instagram ToS compliance for embedding
- If CMS-managed: requires manual updates to keep content fresh
- Image loading performance (carousel with many high-resolution photos)

### What admins manage
- If live feed: Instagram account connection, possibly moderation/approval queue
- If CMS-managed: image uploads, captions, link URLs, display order

---

## 12. "Plan Your Trip" Cards

### What users see
- **5 large CTA cards** with images:
  1. **Plan Your Trip** → `/plan-your-visit/`
  2. **Tours & Experience Passes** → tours/passes page
  3. **Eat & Drink** → restaurants section
  4. **Places to Stay** → accommodations section
  5. **About Salt Lake** → about section

### What users can do
- Click any card to navigate to the corresponding section of the site

### Where data comes from
- **Simpleview CMS** — curated navigation block. These are the site's primary content pillars, presented as visual navigation.

### Third-party services
- None

### Edge cases
- Minimal — this is a static navigation component
- Card count and destinations likely rarely change

### What admins manage
- Card images, titles, and destination URLs
- Display order
- Possibly: add/remove cards (though the 5-card layout suggests a fixed template slot)

---

## 13. Discount Passport Promotion

### What users see
- Full-width promotional block for the **FREE mobile discount passport**
- Value proposition: "10-20% food, 10-20% merchandise, 20-25% tickets"
- **"Get FREE Passport" CTA button**
- VWO variation text visible in the DOM: "Dynamic Variation: DefaultFamily FunWinter Activities" — indicating an active A/B test on this block

### What users can do
- Click "Get FREE Passport" — likely navigates to a Bandwango-hosted passport signup/redemption page
- The A/B test may be varying the messaging, imagery, or CTA text shown to different user segments

### Where data comes from
- **Simpleview CMS** — promotional content block
- **VWO** — A/B test variations are injected by VWO's JavaScript, modifying the DOM at render time

### Third-party services
- **Bandwango** — the passport itself is a Bandwango product. The "Get FREE Passport" button likely points to a Bandwango-hosted experience (e.g., `bandwango.com/visit-salt-lake-passport` or similar)
- **VWO (Visual Website Optimizer)** — actively running an experiment on this section. The variation name "DefaultFamily FunWinter Activities" suggests audience-targeted messaging (families vs. winter sports enthusiasts vs. default)

### Edge cases
- VWO experiment rendering — if VWO scripts load slowly, users may see a flash of unstyled/default content before the variation kicks in (VWO's body-hide snippet mitigates this but adds load time)
- Seasonal messaging — "Winter Activities" variation suggests seasonal updates to the experiment
- Bandwango link destination — what happens if Bandwango is down? Broken experience or graceful fallback?
- Passport terms may change — discount percentages in the copy need manual updating

### What admins manage
- Promotional copy, images, CTA button label and URL
- **VWO experiments are managed separately** — likely by the marketing team in VWO's dashboard, not in the CMS
- Bandwango passport configuration is managed in Bandwango's admin portal

---

## 14. Footer CTAs

### What users see
- 3 pre-footer cards (these appear on all pages, documented in `global-elements.md`):
  1. **Visitors Guide** → `/plan-your-visit/free-visitors-guide/`
  2. **Newsletter Sign Up** → `/plan-your-visit/subscribe/`
  3. **Experience Marketplace** → `/things-to-do/tours-experiences/`

### What users can do
- Click any card to navigate to the respective page

### Where data comes from
- **Simpleview CMS** — global footer widget, same across all pages

### Third-party services
- **Act On** — the newsletter signup destination uses Act On for form submission and email automation

### Edge cases
- Documented in `global-elements.md` — see Phase A audit

### What admins manage
- Documented in `global-elements.md` — see Phase A audit

---

## Cross-Cutting Concerns

### Page Performance
- The homepage is content-heavy with ~12 sections, multiple carousels, an interactive neighborhood explorer, and an image gallery
- VWO's body-hide script (sets `opacity:0` on load) adds perceived load time while experiments resolve
- Multiple image-heavy sections suggest lazy loading is critical
- Instagram gallery (if live feed) adds external API dependency to page load

### SEO
- Homepage is the highest-authority page on the domain
- Rich internal linking (inline editorial links, category cards, CTA blocks) distributes link equity across the site
- Structured data / schema markup status unknown — needs inspection

### Mobile Experience
- The neighborhood map explorer's interaction pattern (hierarchical menu + photo gallery) will need significant mobile adaptation
- Multiple horizontal carousels (hero, event categories, Instagram) need touch/swipe support
- Long scroll page — mobile users may never reach lower sections (discount passport, plan your trip cards)

### Personalization & Testing
- VWO is actively running experiments (at minimum on the discount passport section)
- The "Dynamic Variation" naming convention suggests audience-based targeting, not just random A/B splits
- Unknown how many other sections have active experiments

---

## Data Source Summary

| Section | Primary Source | External Dependencies |
|---------|---------------|----------------------|
| Hero Carousel | Simpleview CMS | None (video hosting TBD) |
| Featured Destinations | Simpleview CMS | None |
| Editorial Block | Simpleview CMS | None |
| Planning CTA | Simpleview CMS | None |
| Attractions Pass | Simpleview CMS | Bandwango (destination) |
| Featured Events | Simpleview CMS + NowPlayingUtah | NowPlayingUtah feed |
| Upcoming Events | Simpleview CMS + NowPlayingUtah | NowPlayingUtah feed |
| Event Category Cards | Simpleview CMS | None |
| Blog Posts | Simpleview CMS | None |
| Neighborhood Explorer | Simpleview CMS | Possibly Map Publisher |
| Instagram Gallery | Unknown | Possibly Instagram API |
| Plan Your Trip Cards | Simpleview CMS | None |
| Discount Passport | Simpleview CMS + VWO | VWO, Bandwango (destination) |
| Footer CTAs | Simpleview CMS | Act On (destination) |

---

## Questions for Client

### Content Management
- [ ] **Hero carousel**: How frequently does the carousel content change? Who manages it? Is there a scheduled rotation (e.g., seasonal campaigns), or is it updated ad hoc?
- [ ] **Featured events**: How are the 5 homepage events selected? CMS-curated by an editor, or automatically pulled (e.g., next 5 upcoming, weighted by category)?
- [ ] **Blog posts**: How are the 4 homepage articles selected? Most recent? Manually curated? Filtered by a "featured" flag or seasonal tag?

### Integrations
- [ ] **Discount Passport / Bandwango**: Where does "Get FREE Passport" link to? Is it a Bandwango-hosted page, an embedded widget, or a redirect? What is the user flow after clicking?
- [ ] **Instagram gallery**: Is this pulling from a live Instagram feed (API) or is it a CMS-managed image gallery? If live, what service powers it?
- [ ] **NowPlayingUtah events**: How frequently is the NowPlayingUtah feed imported? Real-time API, daily batch, or manual import? Can editors modify NowPlayingUtah events after import?

### Interactive Elements
- [ ] **Neighborhood map explorer**: Is this using Map Publisher, or is it custom JavaScript? Does it include an actual map, or is it purely a menu + photo gallery?
- [ ] **Hero video**: Where are the hero videos hosted? Self-hosted on Simpleview's CDN, YouTube, Vimeo, or another service?

### A/B Testing
- [ ] **VWO experiments**: How many experiments are typically running on the homepage? Who manages them? How are variations decided (audience segments, random splits, campaign-based)?
- [ ] **Discount passport variations**: The "DefaultFamily FunWinter Activities" variation name suggests audience targeting. How sophisticated is the VWO setup? Are there dedicated variations per audience persona?

### Content Strategy
- [ ] **Seasonal updates**: How much of the homepage changes seasonally? Just the hero, or multiple sections? Is there a content calendar that drives these changes?
- [ ] **Section ordering**: Is the section order on the homepage fixed, or can editors rearrange blocks? (This affects whether we build a fixed template or a flexible page builder.)
