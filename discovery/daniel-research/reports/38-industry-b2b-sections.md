# Industry/B2B Sections Documentation

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #35

---

## Overview

Visit Salt Lake operates **5 active industry/B2B sections** alongside the consumer-facing website. Each section functions as a **mini-site with its own navigation**, branding, and content tailored to a specific B2B audience. These are NOT just pages — they are distinct experiences requiring their own templates, navigation structures, and content.

---

## CMS Backend — Industry Sitemap Section

**Location:** Sitemap > Primary > Industry (6 pages)

| # | Title | Folder | Status | Show in Nav | Updated |
|---|-------|--------|--------|-------------|---------|
| 1 | Meetings | meetings | Published | Yes | 01/12/2026 |
| 2 | Travel Trade | travel-trade | Published | Yes | 02/21/2025 |
| 3 | Sports | sports | Published | Yes | 05/23/2025 |
| 4 | Film | film | Published | Yes | 01/07/2026 |
| 5 | Meetings - OLD | meetings-old | **Disabled** | No | 11/12/2024 |
| 6 | Speak Salt Lake | speak-salt-lake | Published | Yes | 03/05/2026 |

**Secondary Navigation** also links to these (as Link type items): Meetings, Travel Trade, Sports, Film, Blog, Speakers Bureau (Disabled)

---

## Section Details

### 1. Meetings (/meetings/)
**Page title:** "Salt Lake Meetings"
**Target audience:** Meeting planners, convention organizers

**Navigation bar:**
- Visit Salt Lake | MEET EXPLORE SALT LAKE | CONVENTION CENTER | DESTINATION SERVICES | SPORTS

**Content features:**
- Hero: Mountain landscape with "SALT LAKE MEETINGS — WHERE INTERNATIONAL IDEAS TAKE [shape]"
- **"REQUEST A MEETING PLANNER GUIDE"** — prominent CTA with Visit Salt Lake guide image
- "Salt Lake Through Every Perspective" section
- Links to convention center info, destination services

**Backend layout:** Uses "Meetings Microsite" layout (one of 11 templates)

**Note:** Also has a dedicated **Meetings Microsite Nav** section (11 pages) — documented separately in Task 36.

---

### 2. Travel Trade (/travel-trade/)
**Page title:** "Salt Lake City Group Travel Packages | Itineraries & Planning"
**Target audience:** Tour operators, travel agents, group travel planners

**Navigation bar:**
- Visit Salt Lake | TRAVEL TRADE FOR ALL | DISCOVER | FAM MAPS | PARTNERSHIPS | OUR PARTNERS

**Content features:**
- Hero: "TRAVEL TRADE IN SALT LAKE"
- Group travel package information
- Itinerary planning resources
- FAM (Familiarization) maps for tour operators
- Partnership information
- "GET THE BEST SALT LAKE TOURS & EXPERIENCES" with attraction pass options

**Backend layout:** Uses "Secondary Nav - Listings" or "Secondary Nav - Content" layout

---

### 3. Sports (/sports/)
**Page title:** "Salt Lake City Sports Planning | Events, Venues & Services"
**Target audience:** Sports event organizers, athletic organizations

**Navigation bar:**
- Visit Salt Lake | SALT LAKE SPORTS FOR ALL | DISCOVER | VENUES | MANAGING EVENTS | RETAIL | CONTACT US

**Content features:**
- **Separate "Sports Salt Lake" branding/logo** — distinct visual identity
- "SPORTS SALT LAKE" main heading
- "Ask an Expert" sidebar widget
- "Featured Upcoming Events" section with event listings
- Venue information
- Event management services
- Retail/merchandise

**Backend layout:** Uses dedicated "Sports" layout (one of 11 templates)

**Key finding:** Sports has its own brand identity ("Sports Salt Lake") separate from "Visit Salt Lake"

---

### 4. Film (/film/)
**Page title:** "Film"
**Target audience:** Film producers, location scouts, production companies

**Navigation bar:**
- Visit Salt Lake | FILM SALT LAKE | LOCATIONS

**Content features:**
- Hero: "FILMING IN SALT LAKE" with "Film Ready Utah" badge/certification
- **CONTACTS section** with three contacts:
  - Salt Lake Film Liaison
  - Salt Lake City Permitting
  - Salt Lake BLM Field Office
- "BECOME A FILMING LOCATION" section — form/signup for property owners
- "BECOME A FILM PRODUCTION VENDOR" section — form/signup for vendors

**Backend layout:** Uses "Secondary Nav - Content" layout

**Key finding:** Simpler/more informational than other sections. Has specific forms for filming locations and production vendors.

---

### 5. Speak Salt Lake (/speak-salt-lake/)
**Page title:** "Speak Salt Lake"
**Target audience:** Event organizers looking for Salt Lake speakers

**Navigation bar:**
- Visit Salt Lake | SPEAKERS ALL SPEAKERS | OLYMPIC ATHLETES | BUSINESS LEADERS | CONNECT AND BOOK

**Content features:**
- "SPEAK SALT LAKE" heading
- **Speakers bureau** — catalog of available speakers
- Speaker categories: **Olympic Athletes**, **Business Leaders**
- "READ MORE" links per category
- Bottom CTAs: CONTACT, OLYMPIC ATHLETES, BUSINESS LEADERS
- Booking/connect functionality

**Backend layout:** Uses "Secondary Nav - Content" layout

**Key finding:** This is a **speakers bureau** — a unique feature allowing event organizers to browse and book Salt Lake-affiliated speakers. Not a typical tourism page.

---

### 6. Meetings - OLD (/meetings-old/)
**Status:** Disabled
**Notes:** Legacy version of the Meetings page, disabled on 11/12/2024. Likely replaced by the current Meetings page. Can be ignored for rebuild purposes.

---

## Cross-Section Analysis

### Each Section Has Its Own Navigation
| Section | Nav Items | Notes |
|---------|-----------|-------|
| Meetings | 5 items | Links to convention center, destination services |
| Travel Trade | 6 items | FAM maps, partnerships, partners |
| Sports | 7 items | Venues, managing events, retail, contact |
| Film | 3 items | Locations only — simplest nav |
| Speak Salt Lake | 5 items | Speaker categories, booking |

### Layout/Template Usage
| Section | CMS Layout | Notes |
|---------|-----------|-------|
| Meetings | Meetings Microsite | Dedicated template |
| Travel Trade | Secondary Nav - Listings/Content | Shared template |
| Sports | Sports | Dedicated template |
| Film | Secondary Nav - Content | Shared template |
| Speak Salt Lake | Secondary Nav - Content | Shared template |

### Branding Differences
- **Sports** has its own "Sports Salt Lake" brand identity
- **Film** has "Film Ready Utah" certification badge
- **Meetings** uses "Visit Salt Lake" branding but different visual treatment
- Others use "Visit Salt Lake" branding with section-specific headers

---

## Rebuild Implications

### Template Requirements
- **2 dedicated templates** needed: Meetings Microsite, Sports
- **1 shared template** for secondary nav sections: Travel Trade, Film, Speak Salt Lake
- Each needs its **own navigation structure** separate from the consumer site

### Unique Features per Section
| Feature | Section | Rebuild Effort |
|---------|---------|---------------|
| Meeting Planner Guide CTA | Meetings | Medium |
| Convention Center info integration | Meetings | Medium |
| FAM Maps | Travel Trade | Medium |
| Partner directory | Travel Trade | High |
| Event listings with sidebar | Sports | High |
| Ask an Expert widget | Sports | Low |
| Separate brand identity | Sports | Medium (design) |
| Film contact directory | Film | Low |
| Filming location signup form | Film | Medium |
| Production vendor signup form | Film | Medium |
| Speakers bureau catalog | Speak Salt Lake | High |
| Speaker booking functionality | Speak Salt Lake | High |

### Content Volume
- These 5 sections represent ~5% of the sitemap pages but require distinct templates and navigation
- The Meetings section alone has an additional 11-page microsite nav (Task 36)
- Sports has featured upcoming events that likely pull from the Events module

### Forms to Document (Task 17)
- Meeting planner guide request
- Filming location application
- Film production vendor application
- Speaker booking/contact form

---

## Page Widget Composition (from HTML analysis)

Full page structure extracted from captured HTML for each section.

### Shared Widgets (all 5 sections)
- Header: logo, weather widget, subscribe button, search box, main nav, children of active parent nav
- Footer: footer, footer CTA, footer logo, cookie banner
- Navigation: breadcrumb, social share
- Content: textbox, container
- Utilities: Google Translate
- Collections: navigation links, slides, social slides

### Meetings (33 widgets)
Shared + hero callout, hero image, header slides, imagebox, marquee, side-by-side, callout tiles, blog one column, embed

### Travel Trade (34 widgets)
Shared + **A/B testing (inner + outer)**, **dynamic content (inner + outer)** — personalization active!, hero video, hero callout, cards, marquee side-by-side, side-by-side, callout tiles

### Sports (36 widgets)
Shared + hero video, hero callout, dark panel, container intro, embed, cards, side-by-side, callout tiles, upcoming events, events marquee, tab callout tile

### Film (29 widgets)
Shared + hero callout, hero image, header slides, marquee, marquee side-by-side, **two-column layout**, **three-column layout** (for contacts)

### Speak Salt Lake (30 widgets)
Shared + hero callout, hero image, header slides, marquee, cards, blog one column, navigation links

### Key Widget Findings
| Finding | Section | Impact |
|---------|---------|--------|
| **A/B Testing active** | Travel Trade | A/B testing infrastructure in production use |
| **Dynamic Content/Personalization active** | Travel Trade | Personalization not just configured — actively deployed |
| **Event integration** | Sports | Pulls upcoming events from Events module |
| **Multi-column layouts** | Film | Two-col and three-col for contact directory |
| **Blog integration** | Meetings, Speak Salt Lake | Blog one-col widget embeds blog content |
| **Video hero** | Travel Trade, Sports | Hero sections with video, not just images |

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-35/)
- `01-industry-pages.png` — CMS Industry section pages list
- `02-meetings-frontend.png` — Meetings page on frontend
- `03-travel-trade-frontend.png` — Travel Trade page on frontend
- `04-sports-frontend.png` — Sports page on frontend
- `05-film-frontend.png` — Film page on frontend
- `06-speak-salt-lake-frontend.png` — Speak Salt Lake page on frontend

### Raw Data (docs/marketing-site-research/raw/phase-35/)
- HTML and snapshot files for CMS Industry pages list and each frontend page
