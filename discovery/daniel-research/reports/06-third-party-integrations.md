# Third-Party Integrations Network Analysis

**Date:** 2026-03-24
**Task:** #4

---

## Overview

Analysis performed across 4 page types: Homepage, Listing Detail, Event Detail, Blog Post. Integrations categorized by purpose and identified which are global vs page-specific.

**Total unique third-party services identified: 28+**

---

## Integration Map by Category

### 1. Analytics & Tag Management
| Service | IDs/Details | Scope | Purpose |
|---------|------------|-------|---------|
| Google Tag Manager | GTM-NFBVG93, GTM-5L5W32 | Global | Tag management (2 containers) |
| Google Analytics 4 | G-6YB03GQMPQ, G-Q3027Z5YJW, G-Z9MN82YTMQ, G-EG67YBJSRL | Global | Web analytics (4 properties) |
| Web Vitals | unpkg.com/web-vitals | Global | Core Web Vitals tracking |

### 2. Advertising & Retargeting
| Service | IDs/Details | Scope | Purpose |
|---------|------------|-------|---------|
| Google Ads | AW-1042908532 | Global | Search/display advertising |
| DoubleClick | DC-14940957, DC-10254307, DC-9672883, DC-9644701 | Global | Display advertising (4 tags) |
| Facebook Pixel | 752363390410810, 768637601546801, 790374154364327 | Global | Social retargeting (3 pixels) |
| Pinterest Tag | ct.pinterest.com | Global | Pinterest conversion tracking |
| LinkedIn Insights | snap.licdn.com | Global | LinkedIn conversion tracking |
| Twitter/X | platform.twitter.com/oct.js | Blog only | Twitter conversion tracking |
| Sojern | IDs 317077, 385368 | Global | Travel industry retargeting |
| Adelphic/iPredictive | js.ipredictive.com | Global | Programmatic advertising |
| Storygize | 86de6425-9072-4ef8-9612-cbd1127dd10f | Global | Content marketing platform |
| Datafy | pxl.datafyhq.com | Global | Marketing analytics |

### 3. Session Recording & UX Monitoring
| Service | IDs/Details | Scope | Purpose |
|---------|------------|-------|---------|
| Microsoft Clarity | 4k98p3u3c3 | Global | Session recording & heatmaps |
| Mouseflow | 53df97b6-92b8-4676-bae1-1ff0485ad7bf | Global | Session recording |
| Monsido Heatmaps | heatmaps.monsido.com | Global | Heatmap tracking |
| Monsido PageCorrect | pagecorrect.monsido.com | Global | Accessibility page correction |
| Monsido App Script | app-script.monsido.com (×2) | Global | Accessibility monitoring |

### 4. Maps & Location
| Service | Details | Scope | Purpose |
|---------|---------|-------|---------|
| Outdooractive | API key: IJFHEFKA-EMWGKWRF-4OSSHXTT, project: api-fv-visit-salt-lake | Listing pages | Interactive maps, outdoor activity data |
| Leaflet.js | 1.9.4 (via Outdooractive) | Listing pages | Map rendering engine |

### 5. Content & UGC
| Service | Domain | Scope | Purpose |
|---------|--------|-------|---------|
| CrowdRiff | starling.crowdriff.com | Homepage + key pages | UGC/social media content gallery |
| Vimeo | player.vimeo.com | Global | Video hosting & player API |
| Threshold360 | (embedded JS) | Listing pages | 360° virtual tour viewer |

### 6. Reviews & Social Proof
| Service | Evidence | Scope | Purpose |
|---------|----------|-------|---------|
| Yelp | custom_yelp_component.js | Listing pages | Review integration |
| TripAdvisor | custom_tripadvisor_component.js | Listing pages | Review integration |

### 7. Translation
| Service | Domain | Scope | Purpose |
|---------|--------|-------|---------|
| GTranslate | cdn.gtranslate.net | Global | 8-language floating translation widget |

### 8. Booking / E-Commerce
| Service | Domain | Scope | Purpose |
|---------|--------|-------|---------|
| Connect Pass | connectpass.visitsaltlake.com | Global | Persistent cart, booking widget |

### 9. Marketing Automation
| Service | Domain | Scope | Purpose |
|---------|--------|-------|---------|
| Act-On | marketing.visitsaltlake.com | Global | Marketing automation, email campaigns |

### 10. Image/Media Processing
| Service | Domain | Scope | Purpose |
|---------|--------|-------|---------|
| Simpleview/Cloudinary | assets.simpleviewinc.com | Global | Image CDN with dynamic transforms |

---

## Page-Type-Specific Integrations

| Integration | Homepage | Listing | Event | Blog |
|------------|----------|---------|-------|------|
| Core analytics (GA, GTM, FB, etc.) | Yes | Yes | Yes | Yes |
| CrowdRiff UGC gallery | Yes | No | No | No |
| Outdooractive maps + Leaflet | No | **Yes** | No | No |
| Threshold360 virtual tours | No | **Yes** | No | No |
| Yelp reviews | No | **Yes** | No | No |
| TripAdvisor reviews | No | **Yes** | No | No |
| jQuery UI | No | No | No | **Yes** |
| Twitter/X tracking | No | No | No | **Yes** |
| Connect Pass cart | Yes | Yes | Yes | Yes |
| GTranslate | Yes | Yes | Yes | Yes |

**Key insight:** Listing detail pages have the most integrations — maps, reviews, virtual tours. Blog posts have Twitter tracking and jQuery UI.

---

## External Domains Summary

All unique external domains the site communicates with:

| Domain | Category |
|--------|----------|
| assets.simpleviewinc.com | Image CDN |
| beacon.sojern.com | Travel retargeting |
| cdn.gtranslate.net | Translation |
| cdn.mouseflow.com | Session recording |
| cdnjs.cloudflare.com | JS library CDN |
| connect.facebook.net | Facebook Pixel |
| connectpass.visitsaltlake.com | Booking/cart |
| ct.pinterest.com | Pinterest tracking |
| fonts.googleapis.com | Google Fonts |
| fonts.gstatic.com | Google Fonts |
| googleads.g.doubleclick.net | Google Ads |
| heatmaps.monsido.com | Heatmaps |
| js.ipredictive.com | Programmatic ads |
| marketing.visitsaltlake.com | Act-On marketing |
| pagecorrect.monsido.com | Accessibility |
| app-script.monsido.com | Accessibility |
| platform.twitter.com | Twitter tracking |
| player.vimeo.com | Video |
| pxl.datafyhq.com | Analytics |
| s.pinimg.com | Pinterest |
| scripts.clarity.ms | Microsoft Clarity |
| snap.licdn.com | LinkedIn |
| starling.crowdriff.com | UGC gallery |
| static.sojern.com | Travel retargeting |
| unpkg.com | JS CDN (Glide, Plyr, Web Vitals) |
| use.fontawesome.com | Font Awesome |
| use.typekit.net | Adobe Typekit |
| www.clarity.ms | Microsoft Clarity |
| www.googletagmanager.com | GTM |
| www.outdooractive.com | Maps & outdoor data |
| www.storygize.net | Content marketing |

**Total: 31 unique external domains**

---

## Rebuild Implications

### Must Reconnect (Business Critical)
1. **Connect Pass** — booking/cart system (revenue)
2. **Outdooractive + Leaflet** — maps on all listing pages
3. **CrowdRiff** — UGC gallery (marketing/engagement)
4. **Vimeo** — video hosting
5. **GTranslate** — 8-language translation

### Must Re-implement (Analytics/Marketing)
6. **Google Analytics 4** (4 properties — may consolidate)
7. **Google Tag Manager** (2 containers — may consolidate)
8. **Facebook Pixel** (3 pixels — may consolidate)
9. **Google Ads + DoubleClick** (5 tags)
10. **Sojern** — travel industry retargeting
11. **Act-On** — marketing automation
12. All other tracking pixels

### Should Evaluate (May Replace or Drop)
13. **Microsoft Clarity + Mouseflow** — 2 session recording tools (redundant?)
14. **Monsido** — 3 separate scripts for accessibility monitoring
15. **Storygize, Datafy, Adelphic** — evaluate ROI
16. **Yelp + TripAdvisor** — review integration approach for new platform
17. **Threshold360** — 360° tours, evaluate if still active

---

## Artifacts

### Raw Data (docs/marketing-site-research/raw/phase-04/)
- `01-listing-scripts.json` — External scripts on listing detail page
- `02-event-scripts.json` — External scripts on event detail page
- `03-blog-scripts.json` — External scripts on blog post page
- (Homepage scripts captured in Task 3: raw/phase-03/02-scripts-styles.json)
