# CMS Taxonomy & Backend Categorization

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #25

---

## Taxonomy Overview

The Simpleview CMS uses multiple taxonomy systems for organizing content:

| Taxonomy System | Total Items | Scope | Status |
|----------------|-------------|-------|--------|
| CMS Tags | 1,432 | System-wide (all content types) | Active |
| Blog Categories | 23 | Blog posts only | Active |
| Blog Tags | 280 | Blog posts only | Active |
| Articles Categories | 7 | Press/PR articles only | Active |
| Articles Tags | 14 | Press/PR articles only | Active |
| Image Categories | 63 | Image asset library | Active |
| Video Categories | 7 | Video asset library | Active |
| Document Categories | 6 | Document asset library | Active |
| Nav Tags | 0 | Navigation tagging | Unused |
| Tag Manager Groups | 0 | Tag group management | Unused |

**Total taxonomy items: ~1,832**

---

## CMS Tags (1,432 items, 58 pages)

System-wide tags applied to any content type via the "CMS Tags" field (present on all 15 Collection Types, Nav Items, etc.).

### Tag Naming Patterns

Two distinct patterns observed:

**1. General Tags (~60% of total)**
- Venue names: "Alta Ski Area", "Abravanel Hall", "Gardner Village"
- Activity names: "Fly Fishing", "Adventure Course", "Aerial Tram"
- People names: "Adam Barker", "Amie Engerbretson", "Francisco Kjolseth"
- Event names: "Gay Ski Week", "Adventure & Gear Mountain Fest", "Sandy Balloon Festival"
- Location names: "Downtown", "Yellowstone National Park", "Zion"
- Topic names: "Accessibility", "Activities", "Food", "Flights"
- Brand names: "Airbnb", "Alchemy Coffee", "Alta Lodge"

**2. "Image >" Prefixed Tags (~40% of total)**
- Format: "Image > [Subject Name]"
- Examples: "Image > Salt Palace Convention Center", "Image > Brunch", "Image > Coffee", "Image > Burger"
- Purpose: Image-specific tags for organizing the media library
- Range: A-Z coverage of venues, food, activities, scenic subjects

### Key Observations
- Tags are a **flat list** — no hierarchy or nesting
- No consistent naming convention (mix of proper case, lowercase)
- Some tags appear to be duplicated with/without "Image >" prefix
- Tags serve dual purpose: content organization AND image library organization
- Special prefix tags: "*Events", "*Places to Stay", "*Plan Your Trip" (asterisk-prefixed, likely system/featured)
- Ad-related: "Ad > Featured Listing"

---

## Blog Categories (23 items)

Content classification for the Blog module.

| Category | Notes |
|----------|-------|
| art | Lowercase — possibly legacy |
| Arts & Culture | |
| Attractions | |
| Diversity | |
| Downtown | |
| Events & Festivals | |
| Family Fun | Matches persona tag |
| Genealogy & Family History | |
| General Interest | |
| Holidays | |
| Meetings & Conventions | |
| Neighborhoods | |
| olympics | Lowercase — possibly legacy |
| out | Lowercase — possibly incomplete/legacy |
| Outdoor Recreation & Sports | |
| Places to Stay | |
| Restaurants & Bars | |
| Salt Lake History | |
| Salt of the Earth | |
| Shopping | |
| Ski | |
| Sports | |
| Things to Do | |

### Key Observations
- Categories map closely to main site navigation sections (Things to Do, Places to Stay, Restaurants & Bars, etc.)
- Some inconsistent casing ("art" vs "Arts & Culture", "olympics" vs proper names)
- "out" appears to be an incomplete entry
- "Family Fun" matches a Dynamic Content persona tag — possible cross-reference

---

## Blog Tags (280 items, 12 pages)

Finer-grained tagging for blog posts.

### Sample Tags (page 1)
2002 Olympics 10th Anniversary, 2012 Salt Lake Dining Awards, 4th of July, 9th and 9th, Action Sports, Airport Fairgrounds, Alaxemo, Alta, Alta Lodge, Alta Lodge Sunday Brunch, Alta Ski Area, Alta Ski Resort, American Bison, Ancestry, Andrew Strain, Antelope Island, Aquarium, art, Asian, Attractions, ATV Rides Snowbird, Avenues Capitol Hill, Backcountry Magazine, Ballet, Ballet West

### Key Observations
- More specific than categories — venue names, event names, activity names
- Significant overlap with CMS Tags (many appear in both systems)
- 280 tags for blog is a substantial taxonomy to migrate

---

## Articles Categories (7 items)

Press/PR content classification — completely different from Blog categories.

| Category | Notes |
|----------|-------|
| Mountain America Expo Center News | Venue-specific press |
| Mountain America Expo Official Press Release | Venue official releases |
| Press Releases | General press releases |
| Salt Lake News | General Salt Lake news |
| Salt Palace News | Venue-specific press |
| Salt Palace Official Press Release | Venue official releases |
| Sports News | Sports-related press |

### Key Observations
- Focused on press/PR — not consumer content categories
- Venue-specific categories (Salt Palace, Mountain America Expo Center)
- Separate "News" vs "Official Press Release" distinction per venue
- These are the categories seen in the Articles module, not the Blog

---

## Articles Tags (14 items)

| Tag | Notes |
|-----|-------|
| Bars | |
| Basketball | |
| Days of '47 | Annual pioneer celebration event |
| eat drink slc | Lowercase — event/campaign name |
| Events | |
| hiking | Lowercase |
| Hockey | |
| Nightlife | |
| Oktoberfest | |
| Olympics | |
| Salt Palace | Venue |
| Ski City | Brand/campaign |
| Travel | |
| Venues | |

### Key Observations
- Much smaller than Blog Tags (14 vs 280)
- Mixed casing ("hiking" vs "Hockey")
- Sport-heavy (Basketball, Hockey, Olympics)
- Includes campaign/event names (Days of '47, eat drink slc, Oktoberfest)

---

## Asset Library Categories

### Document Categories (6 items)
| Category | Notes |
|----------|-------|
| Doc | Word documents |
| EPS | Vector graphics |
| Job Posting | HR documents |
| PDF | PDF files |
| PPT | PowerPoint files |
| xlsx | Excel spreadsheets |

Organized by **file type** rather than content topic.

### Image Categories (63 items, 3 pages)

Sample categories (page 1):
-Blog -- working to remove this, -Duplicate, -Header -- working to remove this, -Need to update, Ads, Arts & Culture, Attractions & Historic Sites, Bars & Nightlife, Brewery Pass, Cityscapes / Skylines, con', Connect Pass, Contacts, Content --- working to remove this, Diversity, DS, DTN, eat, Eat & Drink, Events, Ex, Experience Exchange, fam, Family, Film

### Key Observations
- **63 categories** for image organization — substantial taxonomy
- Several marked for removal (prefixed with "-"): "-Blog -- working to remove this", "-Header -- working to remove this", "-Duplicate", "-Need to update", "Content --- working to remove this"
- Product/pass categories: "Brewery Pass", "Connect Pass"
- Industry categories: "DTN", "Ads", "Film"
- Some appear to be abbreviations: "con'", "DS", "Ex", "eat", "fam"
- Significant cleanup needed — migration should consolidate

### Video Categories (7 items)
| Category | Notes |
|----------|-------|
| Meetings & Conventions | B2B content |
| Neighborhoods | Location-based |
| Ski City | Brand/campaign |
| Sponsored Blog | Advertising content |
| Sports Salt Lake | Sports commission |
| Summit | Event-specific |
| Visit Salt Lake | General/brand |

Clean, well-organized categories focused on content sections.

---

## Taxonomy Relationships

### How Taxonomies Connect to Content Types

| Content Type | Taxonomies Used |
|-------------|----------------|
| Nav Items (Pages) | CMS Tags, Nav Tags, Personas |
| Blog Posts | Categories (23), Tags (280), CMS Tags, Personas |
| Articles Posts | Categories (7), Tags (14), CMS Tags, Personas |
| Articles - Ski City Posts | Categories, Tags, CMS Tags, Personas |
| All Collection Types | CMS Tags |
| Hero Slides | CMS Tags, Dynamic Content Profile |
| Vertical Videos | CMS Tags, Profile |
| Images | Image Categories (63), CMS Tags ("Image >" prefixed) |
| Videos | Video Categories (7) |
| Documents | Document Categories (6) |

### Cross-Taxonomy Overlap
- **CMS Tags ↔ Blog Categories**: Many topics appear in both (Things to Do, Restaurants, etc.)
- **CMS Tags ↔ Blog Tags**: Significant duplication (venue names, activities)
- **Blog Categories ↔ Nav Sections**: Categories mirror main site navigation structure
- **Persona Tags ↔ Blog Categories**: "Family Fun" appears as both persona tag and blog category
- **Image Categories ↔ CMS Tags**: "Image >" prefix in CMS Tags overlaps with Image Categories

---

## Migration Implications

### Volume Summary
- **1,432 CMS Tags** — largest taxonomy, needs deduplication between general and "Image >" tags
- **280 Blog Tags** — substantial, overlaps with CMS Tags
- **63 Image Categories** — needs cleanup (items marked for removal)
- **23 Blog Categories** — maps to site structure
- **14 Articles Tags** — small, focused
- **7 Articles Categories** — press/PR specific
- **7 Video Categories** — clean
- **6 Document Categories** — file-type based

### Cleanup Opportunities
1. Remove items marked for deletion in Image Categories (5+ entries prefixed with "-")
2. Consolidate "Image >" CMS Tags with Image Categories (potential overlap)
3. Standardize casing across Blog Categories and Tags
4. Remove apparent test/incomplete entries ("out", "con'", "fam")
5. Consider merging CMS Tags and Blog Tags where they overlap

### Rebuild Requirements
- New platform needs to support **multiple independent taxonomy systems** (not just one tag system)
- **CMS Tags** need to be assignable to all content types
- **Blog/Articles Categories and Tags** are module-specific — each PR sub-module has its own
- **Asset categories** are separate from content categories
- **Personas** are a taxonomy-like system but handled through Dynamic Content, not the tag system

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-25/)
- `01-cms-tags-list.png` — CMS Tags list (page 1 of 58, showing 1,432 total)
- `03-blog-categories.png` — Blog Categories list (23 items)
- `04-nav-tags.png` — Nav Tags (empty)
- `05-session-check.png` — Session verification after re-login

### Raw Data (docs/marketing-site-research/raw/phase-25/)
- `01-cms-tags-list-snapshot.txt` — CMS Tags accessibility snapshot
- `01-cms-tags-list.html` — CMS Tags HTML
- `02-blog-tags-list.html` — Blog Tags HTML (280 total)
- `03-articles-categories-list.html` — Articles Categories HTML
- `04-articles-tags-list.html` — Articles Tags HTML
- `05-image-categories-list.html` — Image Categories HTML (63 total)
