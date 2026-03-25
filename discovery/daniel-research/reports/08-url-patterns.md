# URL Patterns & Redirect Mapping

**Date:** 2026-03-24
**Task:** #14

---

## URL Pattern Reference

### URL Depth Distribution (7,619 URLs)
| Depth | Count | % | Example |
|-------|-------|---|---------|
| 1 | 46 | 0.6% | /privacy-policy/ |
| 2 | 149 | 2.0% | /about-us/awards/ |
| 3 | 5,331 | 70.0% | /listing/evo-hotel/70760/ |
| 4 | 2,080 | 27.3% | /event/music/jazz-concert/12345/ |
| 5 | 12 | 0.2% | /about-us/our-policies-disclosures/990-non-profit-tax-forms/ |

**Majority of URLs (70%) are 3 segments deep** — primarily listing and event detail pages.

---

## URL Patterns by Content Type

### CRM Listings (4,629 URLs — 60.8%)
```
/listing/{listing-slug}/{numeric-id}/
```
- Example: `/listing/memory-grove-trail/70583/`
- Example: `/listing/evo-hotel/70760/`
- Slug: lowercase, hyphenated business/attraction name
- ID: numeric, ranges from ~54000 to ~73000+
- URL-encoded special characters: `%c3%81` for accented characters

### CRM Events (1,898 URLs — 24.9%)
```
/event/{category}/{event-slug}/{id}/
```
- Example: `/event/music/jazz-concert/76903/`
- Example: `/event/2026-aba-annual-convention/conventions_42192/`

**Event categories (15):**
| Category | Count | Slug |
|----------|-------|------|
| Music | 548 | /event/music/ |
| Art | 275 | /event/art/ |
| Festivals & Special Events | 230 | /event/festivals-and-special-events/ |
| Theatre | 159 | /event/theatre/ |
| Sports & Outdoors | 118 | /event/sports-and-outdoors/ |
| Dance | 73 | /event/dance/ |
| Classes & Workshops | 63 | /event/classes-and-workshops/ |
| Outdoor Recreation | 60 | /event/outdoor-recreation/ |
| Humanities | 43 | /event/humanities/ |
| Film | 34 | /event/film/ |
| Museums | 18 | /event/museums/ |
| Mountain Resorts | 13 | /event/mountain-resorts/ |
| Fundraisers | 13 | /event/fundraisers/ |
| Culinary | 8 | /event/culinary/ |
| Rocky Mountain Gun Show | 4 | /event/rocky-mountain-gun-show/ |

**Event ID formats:**
- Numeric: `76903`, `77634` (general events)
- Convention prefix: `conventions_42192` (127 convention events)

### Blog Posts (310 URLs — 4.1%)
```
/blog/stories/post/{post-slug}/
```
- Example: `/blog/stories/post/the-best-hiking-trails-near-salt-lake/`
- Fixed path: `/blog/stories/post/` for all posts
- Additional pages: `/blog/`, `/blog/archives/`, `/blog/stories/`

### PR Articles (156 URLs — 2.0%)
```
/articles/post/{article-slug}/
```
- Example: `/articles/post/salt-lake-welcomes-convention/`

### Things To Do (112 URLs — 1.5%)
```
/things-to-do/{subcategory}/{page-slug}/
```
Subcategories:
| Subcategory | Count |
|-------------|-------|
| skiing-snowboarding | 29 |
| outdoor-recreation | 22 |
| attractions | 14 |
| tours-experiences | 12 |
| shopping | 9 |
| nightlife-entertainment | 7 |
| arts-culture | 7 |
| wellness | 5 |
| sports | 4 |

### Hospitality Jobs (76 URLs)
```
/hospitality-jobs/{job-slug}/{id}/
```

### Plan Your Visit (63 URLs)
```
/plan-your-visit/{page-slug}/
/plan-your-visit/{category}/{sub-page}/
```

### Meetings (46 URLs)
```
/meetings/{section}/{sub-page}/
```
Deep hierarchy documented in Task 36.

### Geographic Areas
```
/salt-lake-city/{page-slug}/
/midvalley/{page-slug}/
/south-valley/{page-slug}/
/mountain-resorts/{page-slug}/
/west-valley/{page-slug}/
/southwest-valley/{page-slug}/
```

### Restaurants (32 URLs)
```
/restaurants/{category}/
```

### Convention Venues
```
/salt-palace-convention-center/{sub-page}/
/mountain-america-expo-center/{sub-page}/
```

---

## Redirect Behavior

### Server-Level Redirects
| Redirect | Type | Notes |
|----------|------|-------|
| HTTP → HTTPS | 301 | `http://visitsaltlake.com/` → `https://www.visitsaltlake.com/` |
| Non-www → www | 301 | Included in HTTP→HTTPS redirect |
| Missing trailing slash | 301 | `/about-us` → `/about-us/` |

### CMS-Managed Redirects
- **9,156 redirect rules** in the CMS (documented in Task 27)
- Types: Path and Exact
- Example: `/about-salt-lake/` → `/plan-your-visit/about-salt-lake/` (301)

### Redirect Volume Summary
| Source | Count |
|--------|-------|
| CMS redirect rules | 9,156 |
| Active sitemap URLs | 7,619 |
| **Total URL scope** | **16,775** |

All 16,775 URLs need to be accounted for in the rebuild — either maintaining the same structure or implementing redirects.

---

## URL Conventions

### General Rules
- All URLs use **lowercase** with **hyphens** as separators
- All URLs end with **trailing slash** (enforced via 301 redirect)
- **HTTPS enforced** (HTTP redirects to HTTPS)
- **www enforced** (non-www redirects to www)
- URL-encoded characters used for special characters (accents, ampersands)

### ID Patterns
| Content Type | ID Format | Example |
|-------------|-----------|---------|
| Listings | Numeric | /70583/ |
| General Events | Numeric | /76903/ |
| Convention Events | conventions_ prefix | /conventions_42192/ |
| Job Postings | Numeric (assumed) | Similar to listings |

### No URL Parameters in Sitemap
- No query parameters (`?key=value`) found in sitemap URLs
- Search uses: `/search/?q={query}&type={type}`
- Member login uses: `/members/?group={id}`

---

## Rebuild Implications

### URL Structure Recommendations
1. **Maintain current URL patterns** for SEO continuity where possible
2. **Listings and events** represent 85.7% of URLs — if CRM integration changes, these URLs change too
3. **Event category prefixes** (`/event/music/`, `/event/art/`) should be preserved
4. **Convention event IDs** with `conventions_` prefix are distinct from general events

### Redirect Migration
1. **Export all 9,156 CMS redirects** before decommissioning the old site
2. **Map URL changes** for any restructured sections
3. **Implement 301 redirects** for all changed URLs
4. **Maintain trailing slash** and HTTPS enforcement

### Critical URL Preservation
- **/listing/** pattern — 4,629 URLs with SEO equity
- **/event/** pattern — 1,898 URLs
- **/blog/stories/post/** pattern — 310 URLs with potential backlinks
- **/meetings/** hierarchy — 46+ URLs
- **/things-to-do/** hierarchy — 112 URLs

---

## Artifacts

### Raw Data
- Sitemap URLs: `raw/phase-01/03-all-urls-sorted.txt` (7,619 URLs)
- Sitemap XML: `raw/phase-01/02-sitemap.xml` (1.0MB)
- Redirects HTML: `raw/phase-27/02-redirects.html` (first 25 of 9,156)
