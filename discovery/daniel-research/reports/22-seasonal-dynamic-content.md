# Seasonal & Dynamic Content Rules Identification

**Date:** 2026-03-24
**Task:** #22

---

## Overview

The Visit Salt Lake homepage is **actively managed for seasonal relevance** with content changing significantly across seasons. The site also uses **Simpleview's Dynamic Content (personalization)** system with 7 visitor personas and **A/B testing** infrastructure on production pages. Three mechanisms drive content changes: manual seasonal updates via Page Builder drafts, automated Dynamic Content profiling, and A/B testing panels.

---

## 1. Seasonal Content Changes (Wayback Machine Comparison)

### Homepage Content Across Seasons

| Content Area | Winter (Jan 2025) | Summer (Jul 2025) | Current (Mar 2026) |
|-------------|-------------------|-------------------|-------------------|
| **H1 Tagline** | "S A L T L A K E" | "4 SEASONS OF ADVENTURE" | "AMERICA'S MOUNTAIN CITY" |
| **H2 Tagline** | "JUST WEST OF CONVENTIONAL, DISCOVER" | "VISIT SALT LAKE—IT'S SWEET" | "VISIT SALT LAKE" |
| **Hero focus** | Ski/winter imagery | Outdoor summer imagery | Ski pass + spring content |
| **Featured promotion** | Ski Super Pass | Attractions savings | Ski Super Pass + Attractions 50% off |
| **Seasonal activity** | Winter Roundup, Aprés Ski, Ice Skating, What's New at Resorts | Patio Dining, Free Family Activities, Outdoor Playgrounds, Wildflowers | Spring in Salt Lake, Cherry Blossoms, Spring Skiing, Spring Festivals |
| **Blog/stories** | Top Winter Things, Ice Skating, Downtown Guide | Wildflowers, Pioneer Day, Independence Day, Romantic Things | Cherry Blossoms, Spring Skiing, Spring Festivals |
| **Events section** | Featured Events | Featured Events | Featured Events + Upcoming Events + Event Categories |
| **Event categories** | Annual, Kids & Families, LGBTQ | (not captured) | Annual, Kids & Families, LGBTQ, Festivals & Special Events, Concerts & Live Music |

### Key Seasonal Patterns

| Season | Approximate Period | Content Themes |
|--------|-------------------|---------------|
| **Winter** | Nov–Mar | Ski Super Pass, resort updates, aprés ski, ice skating, winter roundup, holiday content |
| **Spring** | Mar–May | Cherry blossoms, spring skiing transition, spring festivals, outdoor awakening |
| **Summer** | Jun–Aug | Outdoor playgrounds, patio dining, wildflowers, free family activities, Pioneer Day, July 4th |
| **Fall** | Sep–Nov | Fall colors, hidden gem getaways, holiday lights, transitional content |

### What Changes vs What Stays

| Changes Seasonally | Stays Constant |
|-------------------|---------------|
| H1/H2 taglines | Navigation structure |
| Hero slides/carousel | Footer layout |
| Featured blog posts | "Planning Your Salt Lake Trip" section |
| Seasonal activity cards | "The Great Salt Lake" card |
| Promotional offers | "Tours & Experiences" card |
| Event focus/featured events | Search functionality |
| Dynamic Content panels | Social media section |

---

## 2. Dynamic Content / Personalization System

### Architecture (from CMS research — Tasks 24, 30)

**CMS Module:** Dynamic Content (Modules > Dynamic Content)

| Component | Count | Purpose |
|-----------|-------|---------|
| **Persona Tags** | 7 | Interest-based visitor segmentation |
| **Profiles** | 7 | Persona + geographic targeting rules |

### Persona Tags (7)

| Persona | Description |
|---------|-------------|
| Craft Beverages | Brewery/distillery/wine enthusiasts |
| Family Fun | Families with children |
| LGBTQ | LGBTQ+ travelers |
| Leisure Travel | General leisure visitors |
| Outdoor Recreation | Hiking, biking, skiing, outdoor sports |
| Restaurants & Bars | Food and dining enthusiasts |
| Winter Activities | Skiing, snowboarding, winter sports |

### Profile Fields (Geographic Targeting)

Each profile combines persona interests with geographic targeting:

| Field | Purpose |
|-------|---------|
| Visitor Type | Visitor classification |
| Persona Tags | Which interests this profile targets |
| Countries | Geographic targeting — countries |
| Regions | Geographic targeting — regions |
| Metro Codes | Geographic targeting — metro areas |
| Cities | Geographic targeting — cities |

### Where Personalization is Applied

| Content Type | Field | How It's Used |
|-------------|-------|---------------|
| **Nav Items (pages)** | Personas field | Show/hide entire pages based on visitor persona |
| **Hero Slides** | Dynamic Content Profile | Show different hero images per persona |
| **Vertical Videos** | Profile field | Show different vertical videos per persona |
| **Blog Posts** | Personas field | Target blog content to specific audiences |
| **Articles** | Personas field | Target press content |
| **Page Builder** | Dynamic Content widgets | Dynamic Content Outer/Inner panels for targeted content blocks |

### Active Dynamic Content on Homepage (Current)

The homepage currently has:
- **1 Dynamic Content Outer panel** (`plugins_dynamic_content_outer`) — wraps personalized content
- **2 Dynamic Content Inner panels** (`plugins_dynamic_content_inner`) — variant content blocks
- Content shown: **Winter/Ski Super Pass promotion** — likely targeted to Winter Activities and/or Outdoor Recreation personas

### Example: Dynamic Content on Footer
From Task 24 (Page Builder widgets):
- `Dynamic Content Outer Panel - DC Footer - No Brewery Pass` — shows different footer CTA to visitors NOT interested in craft beverages
- `Dynamic Profile - Family Fun` — targeted content for families
- `Dynamic Profile - Winter Activities` — targeted content for winter visitors

---

## 3. A/B Testing

### Architecture

**Page Builder widgets:**
- `A/B Test Outer Panel` — container for test
- `A/B Test Inner Panel - Original` — control variant
- `A/B Test Inner Panel - Variant` — test variant

### Active A/B Testing on Homepage

The homepage currently has:
- **1 A/B Testing Outer panel** (`plugins_ab_testing_outer`)
- **2 A/B Testing Inner panels** — Original and Variant
- **Switcher element** (`ab_testing_switcher dynamic_ab_switcher`) — toggles between variants
- Current display: **"AB Variation: Original Variant"** text visible (may be debug/admin indicator)

### A/B Testing on Other Pages (from Task 35)

| Page | A/B Testing | Notes |
|------|------------|-------|
| **Travel Trade** | Active (inner + outer panels) | A/B testing + Dynamic Content both active |
| **Trail listing detail** | Active (`plugins_ab_testing_inner/outer`) | Personalization on listing pages |
| **Homepage** | Active | Current session shows Original variant |

### Technical Implementation
- Client-side variant selection
- GTM tracking via `variation` field on forms (documented in Task 17)
- Blog posts have `Custom - Post Type` field that may be used for A/B test content
- Simpleview CMS CSS: `plugins/ab_testing/` stylesheet loaded

---

## 4. Time-Sensitive Content

### Featured Events (Dynamic)

The "Featured Events" section on the homepage displays upcoming events that change automatically:

| Element | Behavior |
|---------|----------|
| **Featured Events carousel** | Shows 5 upcoming events |
| **Event dates** | Events with past dates automatically drop off |
| **Event marquee** | `events_layout_convention_calendar` on meetings pages |
| **"Upcoming Events" section** | Dynamic feed in footer area |

### Scheduled Publishing (from Task 26)

| Feature | How It Drives Dynamic Content |
|---------|-------------------------------|
| **Publish Start date** | Pages/posts appear at scheduled date |
| **Publish End date** | Pages/posts auto-unpublish after date |
| **Draft scheduling** | Content drafts can be scheduled for future publish |
| **Draft notes** | Team documents seasonal changes: "Scheduled draft for after summer", "Remove the welsh party as featured event" |

### Evidence of Active Scheduling (from draft notes — Task 26)
- "Scheduled draft for after summer" — seasonal content swap
- "Remove Independence Day blog" — post-event cleanup
- "Updates blog posts for after New Years" — holiday content rotation
- "reset blog posts" — seasonal content reset
- "Add sidebar of featured to the events marquee" — dynamic event feature

---

## 5. Hero Carousel

### Current Homepage (March 2026)

| Slide | Content | Type |
|-------|---------|------|
| 1 | "UNLOCK FOUR LEGENDARY RESORTS — Salt Lake Ski Super Pass" | Seasonal promotion (winter/ski) |
| 2 | "The Great Salt Lake" | Evergreen attraction |
| 3 | "THE LIVE SIDE OF — Salt Lake Events" | Evergreen/events |
| 4 | "HOW TO ENJOY — Spring in Salt Lake" | Seasonal (spring) |
| 5 | "Restaurants in Salt Lake" + "Attractions & Historic Sites" | Evergreen |

**Carousel Library:** Glide.js
**Controls:** Previous/next arrows, pause button
**Auto-play:** Yes (with pause button)
**Slide count:** 5 slides (varies by season)

### Seasonal Carousel Changes

Based on Wayback comparison:
- **Winter:** Ski-focused hero slides, resort imagery
- **Summer:** Outdoor adventure slides, city activity imagery
- **Spring (current):** Mix of ski holdover + spring transition content
- Slides are **manually curated** via CMS Hero Slides collection type (25+ items in CMS, subset displayed)

---

## 6. Weather-Based Content

### Weather Widget
- Present in header on all pages
- Shows current Salt Lake City weather
- **Trigger:** `toggle weather dropdown` button
- **Widget:** `weather_weather`
- No evidence of weather-based content personalization (e.g., showing ski content when it's snowing)

---

## 7. Blog/Story Content Rotation

### "THE SALT LAKE SCENE" Section

The blog content carousel on the homepage rotates seasonally:

| Season | Blog Posts Featured |
|--------|-------------------|
| **Winter (Jan 2025)** | Top Winter Things, Ice Skating, Downtown Guide, Best Photo Opps |
| **Summer (Jul 2025)** | Wildflowers, Pioneer Day, Independence Day, Romantic Things |
| **Current (Mar 2026)** | Cherry Blossoms, Spring Skiing, Spring Festivals |

This is managed through:
- Blog posts with scheduled publish/unpublish dates
- Page Builder "Collections - Marquee, Side by Side - PR - Blog Feed" widget
- Blog post `Custom - Featured` flag for promoted content
- Draft system for swapping featured content seasonally

---

## 8. Rebuild Implications

### Must Replicate

| Feature | Complexity | Notes |
|---------|-----------|-------|
| **Seasonal content swapping** | Medium | Need CMS workflow for scheduled content changes (publish/unpublish dates) |
| **Dynamic hero carousel** | Medium | Glide.js or equivalent, manual content curation, seasonal rotation |
| **Featured events feed** | Medium | Auto-updating based on event dates, CRM-powered |
| **Blog content rotation** | Low | Featured flag + publish scheduling |
| **Scheduled publishing** | Low | Most modern CMS platforms support this natively |

### Should Evaluate for Rebuild

| Feature | Current Implementation | Rebuild Options |
|---------|----------------------|-----------------|
| **Personalization (7 personas)** | Simpleview Dynamic Content with geo-targeting | Evaluate new platform's personalization capabilities; may use CDN-level personalization (Vercel Edge Middleware, Cloudflare Workers) or dedicated personalization service |
| **A/B testing** | Simpleview built-in A/B test panels | Replace with Google Optimize successor, LaunchDarkly, Optimizely, or built-in CMS A/B testing |
| **Geographic targeting** | CRM profiles with country/region/metro/city targeting | May need IP geolocation service integration |

### Content Management Requirements

The seasonal content management workflow requires:
1. **Draft system** with notes — team documents what changed and why
2. **Scheduled publishing** — Publish Start/End dates for time-sensitive content
3. **Preview capability** — preview seasonal changes before going live
4. **Multi-user collaboration** — multiple team members editing seasonal content
5. **Content calendar awareness** — integration with Salt Lake events calendar for promotional timing

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-22/)
- `01-wayback-summer-2025.png` — Homepage July 2025 (summer content)
- `02-wayback-winter-2025.png` — Homepage January 2025 (winter content)
- `03-current-march-2026.png` — Homepage March 2026 (spring transition)
