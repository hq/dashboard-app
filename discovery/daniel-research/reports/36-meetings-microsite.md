# Meetings Microsite Deep-Dive Documentation

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #36

---

## Overview

The Meetings section is a **full microsite** with approximately **45+ pages** organized in a deep hierarchy. It serves meeting planners, convention organizers, and event professionals with dedicated content, tools, and resources.

**URL base:** `https://www.visitsaltlake.com/meetings/`
**CMS Layout:** "Meetings Microsite" template
**CMS Location:** Sitemap > Primary > Industry > Meetings + Meetings Microsite Nav (11 top-level items)

---

## Site Map (from link analysis)

### Top-Level Pages
1. `/meetings/` — Landing page
2. `/meetings/why-salt-lake/` — Why Choose Salt Lake
3. `/meetings/venues/` — Venues
4. `/meetings/hotels/` — Hotels
5. `/meetings/services/` — Destination Services
6. `/meetings/salt-palace-convention-center/` — Salt Palace Convention Center
7. `/meetings/mountain-america-expo-center/` — Mountain America Expo Center
8. `/meetings/convention-calendar/` — Convention Calendar
9. `/meetings/submit-rfp/` — Submit RFP
10. `/meetings/contact/` — Contact
11. `/meetings/whats-new/` — What's New

### Full Page Hierarchy

```
/meetings/
├── /why-salt-lake/
│   ├── /ambassador-program/
│   ├── /convention-district/
│   │   └── /restaurants/
│   ├── /easy-access/
│   │   ├── /direct-flights/
│   │   └── /public-transportation/
│   ├── /extra-days/
│   ├── /salt-lake-facts/
│   ├── /sustainability/
│   ├── /videos/
│   └── /what-planners-say/
├── /venues/
│   └── /unique-venues/
├── /hotels/
│   ├── /convention-district/
│   │   └── /convention-center-hotel/
│   ├── /metro-area/
│   ├── /mountain-resorts/
│   ├── /south-district/
│   └── /west-district/
├── /services/
│   ├── /community-service-opportunities/
│   ├── /convention-housing-services/
│   ├── /promotional-materials/
│   ├── /supplier-directory/
│   └── /transportation-directory/
├── /salt-palace-convention-center/
│   ├── /catering/
│   ├── /specifications/
│   └── /sustainability/
├── /mountain-america-expo-center/
│   ├── /catering/
│   ├── /specifications/
│   └── /sustainability/
├── /convention-calendar/
├── /submit-rfp/
│   └── /thank-you/
├── /contact/
│   ├── /meeting-newsletter-sign-up/
│   ├── /meeting-planner-guide/
│   └── /thank-you/
└── /whats-new/
    └── /salt-palace-updates/
```

**Total: ~45 pages** (11 top-level + 34 sub-pages)

---

## Navigation Structure

**Primary nav bar:**
WHY CHOOSE SALT LAKE | CONVENTION CENTER | DESTINATION SERVICES | VENUES

**Note:** This navigation is different from the CMS "Meetings Microsite Nav" which has 11 items (About Salt Lake, Bars & Nightlife, Events, etc.). The CMS nav items appear to be a separate microsite navigation used for a different purpose (possibly convention attendee guide pages).

---

## Key Pages Documented

### 1. Submit RFP (/meetings/submit-rfp/)
**Purpose:** Meeting planner Request for Proposal submission

**Content:**
- Title: "SUBMIT YOUR REQUEST FOR PROPOSAL"
- Two submission methods:
  - **Online form** — "SUBMIT RFP ONLINE" button
  - **Email** — "SUBMIT RFP VIA EMAIL" button
- Follow-up contact information with phone numbers and staff directory link
- Bottom CTAs: CONTACT, RFP, CONVENTION CALENDAR

**Widgets:** Hero image, textbox, button (CTA), callout tiles, navigation links

**Rebuild implications:** RFP form needs to integrate with CRM for lead management

### 2. Salt Palace Convention Center (/meetings/salt-palace-convention-center/)
**Purpose:** Salt Palace venue information

**Content:**
- Venue overview with **video player** (embedded video)
- Cards for sub-sections (Catering, Specifications, Sustainability)
- Callout tiles for related content

**Sub-pages:** Catering, Specifications (floor plans, capacities), Sustainability

**Widgets:** Hero image, video player, cards, callout tiles, textbox

### 3. Convention Calendar (/meetings/convention-calendar/)
**Purpose:** Calendar of upcoming conventions and events

**Content:**
- **Convention calendar widget** — `plugins_events_layout_convention_calendar`
- This is a **Simpleview CRM-powered widget** that displays convention/event data from the CRM

**Widgets:** Hero image, textbox, **events_layout_convention_calendar** (CRM integration)

**Rebuild implications:** Convention calendar data comes from Simpleview CRM — needs API integration or replacement

### 4. Hotels (/meetings/hotels/)
**Purpose:** Meeting planner hotel directory by district

**Content:**
- Hotel listings organized by geographic district
- Cards and side-by-side layouts for each district
- Sub-pages: Convention District, Metro Area, Mountain Resorts, South District, West District

**Widgets:** Hero image, cards, side-by-side, textbox

### 5. Destination Services (/meetings/services/)
**Purpose:** Services available to meeting planners

**Content:**
- Cards and callout tiles for service categories
- Sub-pages: Community Service Opportunities, Convention Housing Services, Promotional Materials, Supplier Directory, Transportation Directory

**Widgets:** Hero image, cards, callout tiles, container, textbox

### 6. Why Choose Salt Lake (/meetings/why-salt-lake/)
**Purpose:** Selling Salt Lake as a meeting destination

**Content:**
- Cards, callout tiles, side-by-side layouts for key selling points
- 8+ sub-pages covering: Ambassador Program, Convention District, Easy Access (Direct Flights, Public Transportation), Extra Days, Salt Lake Facts, Sustainability, Videos, What Planners Say

**Widgets:** Hero image, cards, callout tiles, side-by-side, container, textbox

### 7. Venues (/meetings/venues/)
**Purpose:** Meeting venue directory

**Content:**
- Cards and callout tiles for venue types
- Sub-page: Unique Venues

**Widgets:** Hero image, cards, callout tiles, container, textbox

---

## Convention Venue Pages

### Salt Palace Convention Center
**URL:** `/meetings/salt-palace-convention-center/`
**Sub-pages:**
- `/catering/` — Catering services
- `/specifications/` — Floor plans, room capacities, technical specifications
- `/sustainability/` — Green meeting initiatives

### Mountain America Expo Center
**URL:** `/meetings/mountain-america-expo-center/`
**Sub-pages:**
- `/catering/` — Catering services
- `/specifications/` — Floor plans, room capacities
- `/sustainability/` — Green initiatives

**Note:** Both venues have identical sub-page structure (catering, specifications, sustainability)

### Salt Lake County Equestrian Park
**URL:** In CMS under Conventions section (separate from meetings microsite)
- No deep sub-pages observed in meeting microsite links

---

## Forms and CTAs

| Form/CTA | Location | Purpose |
|----------|----------|---------|
| Submit RFP Online | /meetings/submit-rfp/ | Meeting planner RFP submission |
| Submit RFP via Email | /meetings/submit-rfp/ | Email-based RFP submission |
| Meeting Newsletter Sign Up | /meetings/contact/meeting-newsletter-sign-up/ | Newsletter subscription for planners |
| Meeting Planner Guide | /meetings/contact/meeting-planner-guide/ | Request physical planner guide |
| Contact Form | /meetings/contact/ | General meeting planner inquiry |

---

## Widget Composition Summary

### Shared across all meetings pages
- Header (meetings microsite variant), footer, navigation, breadcrumb, social share
- Google Translate, weather, search, cookie banner, subscribe button
- Hero image (from header slides), hero callout
- Navigation links, social slides/links

### Page-specific widgets
| Widget | Pages | Notes |
|--------|-------|-------|
| `common_button` | RFP | Submit/CTA buttons |
| `common_video_player` | Salt Palace | Embedded venue video |
| `events_layout_convention_calendar` | Convention Calendar | **CRM-powered convention calendar** |
| `core_side_by_side` | Hotels, Why Salt Lake | District comparison layouts |
| `core_cards` | Salt Palace, Hotels, Services, Why Salt Lake, Venues | Card grid layouts |
| `core_callout_tiles` | RFP, Salt Palace, Services, Why Salt Lake, Venues | Tile CTAs |

---

## CMS Meetings Microsite Nav Pages (11 items)

These are separate from the main meetings hierarchy — they appear to be convention attendee guide pages:

1. About Salt Lake (about-salt-lake-meetings-microsites)
2. Bars & Nightlife (bars-nightlife-meetings-microsites)
3. Events (events-meetings-microsites)
4. Getting Around (getting-around-meetings-microsites)
5. Restaurants (restaurants-meetings-microsites)
6. Things to Do (things-to-do-meetings-microsites)
7. Outdoors (outdoors-meetings-microsites)
8. LGBTQ Salt Lake (lgbtq-salt-lake)
9. Planning Tools (planning-tools-meetings-microsites)
10. Quick Links (quick-links-meetings-microsites)
11. Restaurants & Bars (restaurants-bars-meetings-microsites)

These pages are likely used for the **convention microsite welcome pages** (the 79 microsites) to provide attendee information during specific conventions.

---

## Rebuild Implications

### Scope
- **~45 pages** in a deep hierarchy (not 11 as initially estimated from CMS nav)
- Dedicated template, navigation, and branding
- Multiple forms (RFP, newsletter, guide request, contact)

### Critical Integrations
1. **Convention Calendar** — CRM-powered widget needs API integration
2. **RFP Submission** — form likely feeds into Simpleview CRM lead management
3. **Hotel/Venue listings** — may pull from CRM listing data
4. **Supplier Directory** — likely CRM-connected

### Unique Features
- Video player for venue pages
- Convention calendar widget
- Hotel district organization (5 districts)
- Two venue microsites with identical structure (Salt Palace, Expo Center)
- Meeting planner guide request

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-36/)
- `01-meetings-rfp.png` — RFP submission page
- `02-salt-palace.png` — Salt Palace Convention Center page
- `03-convention-calendar.png` — Convention Calendar page
- `04-meetings-hotels.png` — Hotels page
- `05-meetings-services.png` — Destination Services page
- `06-why-salt-lake.png` — Why Choose Salt Lake page
- `07-venues.png` — Venues page

### Raw Data (docs/marketing-site-research/raw/phase-36/)
- Full HTML for all 7 key pages (complete DOM including below-fold content)
