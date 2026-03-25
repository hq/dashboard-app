# Sitemap Crawl & URL Tree Mapping

**Date:** 2026-03-24
**Task:** #1

---

## Overview

- **Total URLs in sitemap:** 7,619
- **Sitemap format:** Single `<urlset>` (not a sitemap index)
- **Sitemap URL:** https://www.visitsaltlake.com/sitemap.xml
- **File size:** ~1.0MB
- **Hosting:** Simpleview CMS (site.www.visitsaltlake.com.simpleviewcms.io)

---

## robots.txt

```
User-agent: *
Disallow: /plugins/crm/count/
Allow: /
Crawl-delay: 2

Sitemap: https://www.visitsaltlake.com/sitemap.xml
```

- Only `/plugins/crm/count/` is blocked (CRM tracking endpoint)
- 2-second crawl delay requested
- Everything else is allowed

---

## Subdomain Discovery

| Subdomain | DNS Result | Notes |
|-----------|-----------|-------|
| www.visitsaltlake.com | site.www.visitsaltlake.com.simpleviewcms.io | Main site on Simpleview CMS |
| mail.visitsaltlake.com | 216.194.127.10 | Mail server |
| blog.visitsaltlake.com | Not found | Blog is at /blog/ on main domain |
| meetings.visitsaltlake.com | Not found | Meetings is at /meetings/ on main domain |
| shop.visitsaltlake.com | Not found | No shop subdomain |
| store.visitsaltlake.com | Not found | No store subdomain |
| travel.visitsaltlake.com | Not found | No travel subdomain |
| sports.visitsaltlake.com | Not found | No sports subdomain |
| film.visitsaltlake.com | Not found | No film subdomain |
| api.visitsaltlake.com | Not found | No API subdomain |

**Conclusion:** All content is on the main domain (www.visitsaltlake.com). No content subdomains found.

---

## URL Hierarchy — Top-Level Sections

| Section | URLs | % of Total | Notes |
|---------|------|-----------|-------|
| /listing/ | 4,629 | 60.8% | CRM Listings (hotels, restaurants, attractions, trails, etc.) |
| /event/ | 1,898 | 24.9% | CRM Events |
| /blog/ | 310 | 4.1% | Blog posts and archives |
| /articles/ | 156 | 2.0% | Press/PR articles |
| /things-to-do/ | 112 | 1.5% | Things To Do section with subcategories |
| /hospitality-jobs/ | 76 | 1.0% | Job listings |
| /plan-your-visit/ | 63 | 0.8% | Trip planning content |
| /meetings/ | 46 | 0.6% | Meetings microsite |
| /salt-lake-city/ | 41 | 0.5% | City area pages |
| /restaurants/ | 32 | 0.4% | Restaurant category pages |
| /midvalley/ | 30 | 0.4% | Mid Valley area |
| /mountain-america-expo-center/ | 28 | 0.4% | Expo Center pages |
| /salt-palace-convention-center/ | 25 | 0.3% | Salt Palace pages |
| /sports/ | 20 | 0.3% | Sports commission |
| /travel-trade/ | 15 | 0.2% | Travel Trade section |
| /places-to-stay/ | 15 | 0.2% | Accommodation pages |
| /about-us/ | 15 | 0.2% | About pages |
| /south-valley/ | 12 | 0.2% | South Valley area |
| /mountain-resorts/ | 11 | 0.1% | Mountain Resorts area |
| /events/ | 11 | 0.1% | Events listing/calendar pages |
| /press-research/ | 9 | 0.1% | Press & Research |
| /neighborhoods/ | 8 | 0.1% | Neighborhoods |
| /members/ | 7 | 0.1% | Members/partner portal |
| /speak-salt-lake/ | 6 | 0.1% | Speakers bureau |
| /west-valley/ | 5 | 0.1% | West Valley area |
| /southwest-valley/ | 5 | 0.1% | Southwest Valley area |
| Other (microsites, landing pages, system pages) | ~30 | 0.4% | Individual pages |

---

## Content Volume Analysis

### CRM-Powered Content (85.7% of all URLs)
| Type | URLs | Notes |
|------|------|-------|
| Listings | 4,629 | Hotels, restaurants, attractions, trails, shops, etc. |
| Events | 1,898 | Convention events + general events |
| **Total CRM** | **6,527** | **85.7% of all site URLs** |

### CMS-Managed Content (14.3%)
| Type | URLs | Notes |
|------|------|-------|
| Blog posts | 310 | Blog/stories content |
| Articles | 156 | Press releases/PR articles |
| Things To Do | 112 | Category/subcategory pages |
| Hospitality Jobs | 76 | Job postings |
| Plan Your Visit | 63 | Trip planning pages |
| Meetings | 46 | Meetings microsite |
| All other sections | ~329 | Area pages, about, members, sports, etc. |
| **Total CMS** | **~1,092** | **14.3% of all site URLs** |

### Key Insight
**85.7% of the site is CRM-powered content** (listings + events). The CMS manages only 14.3% of URLs. This means the rebuild's largest scope item is not the CMS pages but the **CRM data integration** for listings and events.

---

## URL Patterns

### Listings
- Pattern: `/listing/[listing-name]/[numeric-id]/`
- Example: `/listing/memory-grove-trail/70583/`
- Volume: 4,629 URLs
- IDs range observed: 64500 to 73407+

### Events
- Pattern: `/event/[event-name]/[id]/`
- Two ID formats observed:
  - Numeric: `/event/2026-annual-meeting-of-members/13047/`
  - Convention prefix: `/event/2026-aba-annual-convention/conventions_42192/`
- Volume: 1,898 URLs

### Blog
- Pattern: `/blog/stories/post/[post-slug]/`
- Archive: `/blog/archives/`
- Stories index: `/blog/stories/`
- Volume: 310 URLs

### Articles (Press)
- Pattern: `/articles/post/[article-slug]/`
- Volume: 156 URLs

### Things To Do
Hierarchical structure:
```
/things-to-do/
├── skiing-snowboarding/ (29 pages)
│   └── ski-resorts/[resort-name]/[sub-pages]
├── outdoor-recreation/ (22 pages)
│   └── hiking/, biking/, birdwatching-areas/, etc.
├── attractions/ (14 pages)
├── tours-experiences/ (12 pages)
├── shopping/ (9 pages)
├── nightlife-entertainment/ (7 pages)
├── arts-culture/ (7 pages)
├── wellness/ (5 pages)
├── sports/ (4 pages)
├── salt-lakes-winter-games/ (1 page)
└── salt-lakes-holiday-lights-sights/ (1 page)
```

### Geographic Area Pages
Multiple area sections:
- `/salt-lake-city/` (41 pages)
- `/midvalley/` (30 pages)
- `/mountain-america-expo-center/` (28 pages)
- `/salt-palace-convention-center/` (25 pages)
- `/south-valley/` (12 pages)
- `/mountain-resorts/` (11 pages)
- `/west-valley/` (5 pages)
- `/southwest-valley/` (5 pages)

### Single-Page Sections (Microsites, Landing Pages, System Pages)
Various individual pages at the root level:
- Microsites: `/welcome-to-salt-lake/`, `/jazzslcgtfw/`
- Landing pages: `/winter-wonderland/`, `/falltour/`, `/slc-in-nyc/`, `/its-sweet/`
- System: `/compare/`, `/rfp/`, `/staff-list/`, `/privacy-policy/`, `/contact/`
- Test pages: `/ripe-layout-list-test/`, `/custom-crm-form-slider-test/`, `/client-side-event-feed-test/`
- Other: `/hospitality-jobs/` (76 job listings), `/blog-contributors/`, `/blog-past-contributors/`

---

## Notable Discoveries

1. **Hospitality Jobs section** (76 URLs) — dedicated job board not previously identified in our research plan
2. **Geographic area pages** — salt-lake-city (41), midvalley (30), south-valley (12), mountain-resorts (11), west-valley (5), southwest-valley (5) — neighborhood/area content
3. **Convention events** use a `conventions_` prefix on IDs — distinct from regular events
4. **Blog contributors** pages exist — `/blog-contributors/`, `/blog-past-contributors/`
5. **Compare page** at root level — `/compare/`
6. **Test pages** present — ripe-layout-list-test, custom-crm-form-slider-test, client-side-event-feed-test

---

## Rebuild Implications

### Migration Volume
- **7,619 URLs** to account for in the new site
- **4,629 listing** detail pages — generated from CRM data, not manually built
- **1,898 event** detail pages — generated from CRM data
- **~1,092 CMS pages** — manually built content pages

### SEO Redirect Requirements
- All 7,619 URLs need to either:
  - Maintain the same URL structure (ideal for SEO)
  - Have 301 redirects to new URLs
- Plus the existing 9,156 redirects from the CMS
- **Total redirect scope: potentially 16,775+ URLs**

### CRM Integration Priority
Since 85.7% of URLs are CRM-generated (listings + events), the **CRM API integration** is the single most important technical component of the rebuild. Without it, the majority of the site's pages won't exist.

---

## Artifacts

### Raw Data (docs/marketing-site-research/raw/phase-01/)
- `01-robots.txt` — robots.txt content
- `02-sitemap.xml` — Complete sitemap XML file (1.0MB, 7,619 URLs)
- `02-sitemap-index.txt` — Sitemap as text (browser-rendered)
- `03-all-urls-sorted.txt` — All 7,619 URLs sorted alphabetically

### Screenshots (docs/marketing-site-research/screenshots/phase-01/)
- (Sitemap is data-only — no visual screenshots needed)
