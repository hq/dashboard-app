# Media & Asset Inventory

**Date:** 2026-03-24
**Task:** #13

---

## Overview

Analysis based on 23 captured frontend pages plus CMS backend data from Task 28.

| Asset Type | CMS Count | CDN | Notes |
|-----------|-----------|-----|-------|
| Images | 3,110 | assets.simpleviewinc.com | Cloudinary transforms + AVIF |
| Documents | 590 | assets.simpleviewinc.com | PDFs, DOCs, PPTs |
| Videos | 136 | Vimeo (hosted) | Video URLs, not self-hosted |
| External Links | 68 | Various | Reusable link objects |

---

## Image Analysis

### Format Distribution (from 23 sampled pages)
| Format | Count | % | Notes |
|--------|-------|---|-------|
| JPG/JPEG | 894 | 60.8% | Primary photo format |
| SVG | 451 | 30.7% | Icons, logos, UI elements |
| PNG | 124 | 8.4% | Logos, UI elements with transparency |
| GIF | 1 | 0.1% | Minimal usage |
| AVIF | (via CDN) | — | Served dynamically via Cloudinary f_avif flag |

### Image Hosting & CDN
**Primary CDN:** `assets.simpleviewinc.com/simpleview/image/upload/`

**CDN URL Pattern:**
```
https://assets.simpleviewinc.com/simpleview/image/upload/{transforms}/v1/clients/saltlake/{filename}
```

**Two client paths:**
- `/v1/clients/saltlake/` — primary
- `/v1/clients/saltlake-redesign/` — redesign-specific assets

### Cloudinary Transform Capabilities (observed in use)

| Transform | Usage | Example |
|-----------|-------|---------|
| `c_fill` | Crop to fill dimensions | Most common — used on all card images |
| `c_limit` | Limit to max dimensions | Used for OG images (1200×1200) |
| `f_avif` | AVIF format delivery | Modern format optimization |
| `g_xy_center` | Focal point crop | `x_4214,y_2678` — precise focus coordinates |
| `h_XXX` | Height | Various: 46, 100, 142, 158, 165, 177, 198, 249, 250, 396, 428, 800 |
| `w_XXX` | Width | Various: 30, 100, 144, 256, 300, 342, 400, 640, 704, 1200 |
| `q_XX` | Quality | 65 (AVIF), 75 (JPG) — two quality tiers |

### Common Image Sizes
| Size (w×h) | Count | Usage |
|-----------|-------|-------|
| 400×249 | 84 | Card thumbnails (most common) |
| 300×198 | 24 | Small cards |
| 100×46 | 24 | Small icons/logos |
| 640×428 | 10 | Medium content images |
| 400×250 | 4 | Card variants |
| 144×100 | 4 | Small thumbnails |
| 1200×800 | 3 | Large hero/feature images |
| 30×30 | 3 | Tiny icons |
| 1200×1200 | 1 | OG/social sharing images |
| 704×396 | 1 | Medium feature images |

### Lazy Loading
- **`loading="lazy"`** — 689 instances across sampled pages (native browser lazy loading)
- **`lazyload` class** — 84 instances (Simpleview custom lazy loading via `custom_lazyload.js`)
- **Both methods used simultaneously** — native + custom for maximum compatibility

### Responsive Images (srcset)
- **Srcset present** on most pages — extensive usage
- About Us: 211 srcset occurrences
- Blog Post: 202 srcset occurrences
- Homepage: extensive usage
- Provides multiple resolution options for responsive display

### Advanced Image Features
- **Focal point cropping** — `g_xy_center,x_XXXX,y_XXXX` coordinates store exact crop focus points per image
- **AVIF format** — served dynamically via `f_avif` flag for browsers that support it
- **Two quality tiers** — q_65 for AVIF (lower needed for same quality), q_75 for JPG
- **Alt text** — CMS supports per-image alt text field (documented in Task 28)
- **Credits/attribution** — CMS supports credits and use information per image

---

## Video Analysis

### Video Hosting
- **Primary:** Vimeo (player.vimeo.com)
- **Player:** Plyr video player library (3.x)
- **Format:** Progressive MP4 via Vimeo CDN (`progressive_redirect/playback/`)
- Videos referenced on most page types (4-17 video references per page)

### Video Usage Across Pages
| Page | Video References | Notes |
|------|-----------------|-------|
| Homepage | 17 | Hero video + content videos |
| Press & Research | 16 | PR video content |
| Events | 13 | Event-related videos |
| Things To Do | 12 | Activity/attraction videos |
| Places To Stay | 11 | Accommodation videos |
| HTML Sitemap | 7 | (shared header/footer videos) |
| Hospitality Jobs | 6 | Job section videos |
| Restaurants | 6 | Restaurant videos |

### Video Widget Types
- `common_hero_video` — Hero section video background
- `common_video_player` — Embedded video player (Plyr)
- Vertical Videos collection type — Short-form vertical video content

---

## Documents

### From CMS (Task 28)
- **590 documents** in Asset Library
- Categories by file type: Doc, EPS, Job Posting, PDF, PPT, xlsx
- Hosted on Simpleview CDN: `assets.simpleviewinc.com`

### Document Usage on Frontend
- Press releases link to PDF documents (Annual Plans, Legislative Reports)
- Visitor guides available as downloadable PDFs
- 9,156 redirects include some document redirect URLs

---

## Other Media Types

### Maps
- **Outdooractive** — Interactive maps via Leaflet.js on listing pages
- **Outdooractive static maps** — Referenced in JSON-LD structured data
- **Map Publisher** — 6 custom maps in CMS

### Virtual Tours
- **Threshold360** — 360° virtual tour viewer (`custom_components/threshold360/viewer.js`)
- Available on some listing detail pages

### UGC / Social Media Content
- **CrowdRiff** — Social media content gallery (starling.crowdriff.com)
- Embedded on homepage and key landing pages
- Pulls Instagram/social media photos tagged with Salt Lake hashtags

### Icons
- **SVG icons** — 451 SVG references (30.7% of all images)
- **Material Icons** — Google Material Icons font
- **Font Awesome 5.14.0** — Icon font library
- **Weather Icons 2.0.9** — Weather-specific icon set
- **Custom icons** — Nav item icons (calendar-2, suitcase-1, direction-sign)

---

## Migration Implications

### Image Migration
1. **3,110 images** on Simpleview CDN need to be downloaded and re-hosted
2. **Focal point data** — xy coordinates stored per image for smart cropping; need to preserve or re-establish
3. **AVIF support** — new CDN/image pipeline should support modern formats
4. **Responsive srcset** — new platform needs to generate multiple image sizes
5. **Alt text** — migrate from CMS image metadata
6. **Credits/attribution** — preserve rights management data

### CDN Replacement
- Current: Simpleview/Cloudinary CDN with dynamic transforms
- Options: Cloudinary direct, Imgix, Vercel Image Optimization, Next.js Image
- Must support: fill crop, focal point, quality adjustment, format negotiation (AVIF/WebP/JPG), responsive srcset

### Video Migration
- Vimeo-hosted — no migration needed if Vimeo account continues
- Plyr player — can continue using or replace with native HTML5 video
- 136 video URL references to migrate from CMS

### Document Migration
- 590 documents to download from CDN
- Maintain redirect URLs for any documents with external links

---

## Artifacts

### Raw Data
- Image/video/media analysis derived from 23 HTML files captured in Task 15
- CMS media library details documented in Task 28
