# Navigation & Information Architecture

**Date:** 2026-03-24
**Task:** #16

---

## Navigation Components

The site uses **6 distinct navigation components**, each implemented as a Simpleview CMS widget:

| Component | Widget | Purpose |
|-----------|--------|---------|
| Main Nav (3-column) | `plugins_nav_main` ×3 | Primary three-column mega menu for consumer site |
| Secondary Nav | `plugins_nav_main` (secondary) | B2B/industry links (Meetings, Travel Trade, Sports, Film, Blog) |
| Footer Nav | `plugins_nav_footer` | Footer links |
| Center Nav | `center-nav-container` | Subscribe button and utility links in header |
| Mobile Nav | `mobile-nav-container` | Mobile-responsive navigation |
| Breadcrumbs | `plugins_nav_breadcrumb` | Page hierarchy breadcrumbs |

---

## Primary Navigation (Consumer Site)

### Main Navigation Bar
| # | Item | URL | Type | Icon |
|---|------|-----|------|------|
| 1 | Things To Do | /things-to-do/ | Page | — |
| 2 | Skiing & Snowboarding | /things-to-do/skiing-snowboarding/ | Link | — |
| 3 | Events | /events/ | Page | calendar-2 |
| 4 | Restaurants | /restaurants/ | Page | — |
| 5 | Places To Stay | /places-to-stay/ | Page | suitcase-1 |
| 6 | Plan Your Visit | /plan-your-visit/ | Page | direction-sign |
| 7 | Neighborhoods | /neighborhoods/ | Page | — |

### Three-Column Mega Menu
The main navigation uses a **three-column dropdown** structure (3 instances of `plugins_nav_main`). When hovering over a main nav item:
- **Column 1:** Sub-category links
- **Column 2:** Additional sub-categories or featured content
- **Column 3:** Featured content, promotions, or imagery

Implementation: `custom_nav_desktop_three_col.js` + `custom_nav_desktop_dropdown.js`

### Header Utilities
| Item | URL | Position |
|------|-----|----------|
| Subscribe | /plan-your-visit/subscribe/ | Header center-nav |
| Search Box | /search/ | Header right (plugins_search_headerbox) |
| Weather Widget | — | Header left |
| Language Switcher | — | Bottom left (GTranslate globe) |

---

## Secondary Navigation (B2B/Industry)

| # | Item | URL | Target Audience |
|---|------|-----|----------------|
| 1 | Meetings | /meetings/ | Meeting planners |
| 2 | Travel Trade | /travel-trade/ | Tour operators |
| 3 | Sports | /sports/ | Sports event organizers |
| 4 | Film | /film/ | Film producers |
| 5 | Blog | /blog/ | General (editorial) |

**Note:** "Speakers Bureau" exists in CMS (Disabled). Each B2B section has its own navigation bar when entered (documented in Task 35).

---

## Footer Navigation

### Footer Links (7 items)
| # | Item | URL | Type |
|---|------|-----|------|
| 1 | Local Crafts & Gifts | visit-salt-lake.myshopify.com | **External (Shopify)** |
| 2 | Members | /members/ | Page |
| 3 | Press & Research | /press-research/ | Page |
| 4 | About Us | /about-us/ | Page |
| 5 | Contact | /contact/ | Page |
| 6 | Sitemap | /sitemap/ | Link (HTML sitemap) |
| 7 | Privacy Policy | /privacy-policy/ | Page |

### Footer Dynamic Content
The footer also includes:
- **Upcoming Events** — 5 featured events with "View Event" links
- **Blog Articles** — 4 recent blog posts with "Read Article" links
- **Experience Marketplace** — Salt Lake Explorer Pass, Family Faves, Uniquely Salt Lake Pass
- **Sponsor Logos** — Delta, USA Discover America, Utah
- **Social Links** — Social media icons
- **Newsletter Signup** — "Subscribe" CTA
- **Copyright** — © 2026 Visit Salt Lake

### Key Footer Discovery
**"Local Crafts & Gifts" links to `visit-salt-lake.myshopify.com`** — confirms the external Shopify e-commerce store. This is not hosted on Simpleview CMS.

---

## Mobile Navigation

- Separate `mobile-nav-container` component
- Implemented via `custom_nav_mobile.js`
- Responsive toggle (hamburger menu pattern)
- Same navigation items as desktop in a vertical/accordion format

---

## Breadcrumb Navigation

- Present on all interior pages via `plugins_nav_breadcrumb`
- Shows: Home > Section > Subsection > Current Page
- Linked breadcrumbs for navigation
- No JSON-LD BreadcrumbList schema (documented in Task 5)

---

## Industry Section Navigation (per section)

Each B2B section has its own dedicated navigation bar:

| Section | Nav Items |
|---------|-----------|
| Meetings | WHY CHOOSE SALT LAKE, CONVENTION CENTER, DESTINATION SERVICES, VENUES |
| Travel Trade | TRAVEL TRADE FOR ALL, DISCOVER, FAM MAPS, PARTNERSHIPS, OUR PARTNERS |
| Sports | SALT LAKE SPORTS FOR ALL, DISCOVER, VENUES, MANAGING EVENTS, RETAIL, CONTACT US |
| Film | FILM SALT LAKE, LOCATIONS |
| Speak Salt Lake | SPEAKERS ALL SPEAKERS, OLYMPIC ATHLETES, BUSINESS LEADERS, CONNECT AND BOOK |
| Members | LISTINGS & IMAGERY, MEMBERSHIP BENEFITS, CONTACT US, MEMBER LOGIN |

---

## Information Architecture Map

```
visitsaltlake.com
├── CONSUMER SITE (Main Nav)
│   ├── Things To Do (112 pages)
│   │   ├── Skiing & Snowboarding (29)
│   │   ├── Outdoor Recreation (22)
│   │   ├── Attractions (14)
│   │   ├── Tours & Experiences (12)
│   │   ├── Shopping (9)
│   │   ├── Nightlife & Entertainment (7)
│   │   ├── Arts & Culture (7)
│   │   ├── Wellness (5)
│   │   └── Sports (4)
│   ├── Events (11 pages + 1,898 CRM events)
│   ├── Restaurants (32 pages + CRM listings)
│   ├── Places To Stay (15 pages + CRM listings)
│   ├── Plan Your Visit (63 pages)
│   ├── Neighborhoods (8 pages)
│   └── Home
│
├── B2B / INDUSTRY (Secondary Nav)
│   ├── Meetings (46+ pages, own nav)
│   ├── Travel Trade (15 pages, own nav)
│   ├── Sports (20 pages, own nav)
│   ├── Film (6 pages, own nav)
│   ├── Speak Salt Lake (6 pages, own nav)
│   └── Blog (310 posts)
│
├── GEOGRAPHIC AREAS
│   ├── Salt Lake City (41)
│   ├── Midvalley (30)
│   ├── South Valley (12)
│   ├── Mountain Resorts (11)
│   ├── West Valley (5)
│   └── Southwest Valley (5)
│
├── CONVENTION VENUES
│   ├── Salt Palace Convention Center (25)
│   └── Mountain America Expo Center (28)
│
├── CRM CONTENT
│   ├── Listings (4,629 detail pages)
│   ├── Events (1,898 detail pages)
│   └── Hospitality Jobs (76)
│
├── MICROSITES
│   ├── Convention Welcome Pages (79)
│   └── Landing Pages (16)
│
├── FOOTER / UTILITY
│   ├── Members (7 pages)
│   ├── Press & Research (9)
│   ├── About Us (15)
│   ├── Contact
│   ├── Privacy Policy
│   ├── Terms
│   ├── HTML Sitemap
│   └── Local Crafts & Gifts → Shopify (external)
│
└── SYSTEM PAGES
    ├── Search
    ├── Compare
    ├── My Account
    ├── Extranet Login
    ├── Staff List
    ├── RFP
    ├── RSVP
    └── Autoresponder
```

---

## Cross-Linking Patterns

### Content Type Cross-Links
| From | To | Method |
|------|----|--------|
| Blog posts | Listings | "Custom - Listings filter" field |
| Blog posts | Events | "Custom - events filter" field |
| Listings | Events | Related events on listing pages |
| Things To Do pages | Listings | CRM listing feeds in page builder |
| Neighborhood pages | Listings | Geo-filtered listing feeds |
| Footer | Events | Dynamic upcoming events |
| Footer | Blog | Dynamic recent blog posts |
| Footer | Passes | Experience Marketplace links |

### Navigation Cross-References
- Main nav links to Things To Do sub-sections
- Secondary nav links to B2B sections
- Footer links to utility/corporate pages
- Breadcrumbs link back through hierarchy
- Social sharing on all content pages

---

## Rebuild Implications

### Navigation Components to Build
1. **Three-column mega menu** — responsive with dropdown content
2. **Secondary nav bar** — B2B section links
3. **Per-section navigation** — 6 distinct section navs (Meetings, Travel Trade, Sports, Film, Speak Salt Lake, Members)
4. **Footer** — 7 links + dynamic content (events, blog, passes, sponsors)
5. **Mobile navigation** — accordion/hamburger responsive menu
6. **Breadcrumbs** — with proper BreadcrumbList schema
7. **Search box** — header integration
8. **Language switcher** — GTranslate widget placement

### Complexity
- **8 distinct navigation contexts** (consumer main, secondary, 6 B2B sections)
- **Deep hierarchy** in Things To Do and Meetings sections
- **Dynamic footer content** pulling from CRM (events, blog, passes)
- **Shopify external link** — opens in new context

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-16/)
- `01-homepage-nav.png` — Homepage with main navigation

### Raw Data (docs/marketing-site-research/raw/phase-16/)
- `01-navigation-structure.json` — Main nav and footer nav link data
- `02-homepage-full.html` — Full homepage HTML with all nav components
