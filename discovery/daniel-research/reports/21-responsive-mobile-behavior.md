# Responsive & Mobile Behavior Analysis

**Date:** 2026-03-24
**Task:** #21

---

## Overview

The Visit Salt Lake website is **fully responsive** using a custom CSS framework with Simpleview's modular per-plugin stylesheets. The site uses approximately **15 significant breakpoints** ranging from 375px to 1440px, with major layout shifts at 575px, 769px, 992px, and 1024px. Mobile navigation uses a hamburger menu with accordion sub-menus. The site is server-side rendered with progressive enhancement, making it inherently accessible across device types.

---

## 1. CSS Breakpoints

### Major Breakpoints Identified

Extracted from loaded stylesheets — 44 total breakpoint values found. The significant layout breakpoints are:

| Breakpoint | Classification | Layout Changes |
|-----------|---------------|---------------|
| **375px** | Small mobile | Minimum supported width; single column layout |
| **420–475px** | Large mobile | Minor adjustments to card sizing |
| **525–575px** | Small tablet / large phone | Cards shift from 1 to 2 columns in some areas |
| **640–641px** | Tablet threshold | Listing grid adjusts; filter sidebar may appear |
| **769px** | Tablet portrait | Major shift — navigation changes, 2-column layouts appear |
| **875px** | Tablet landscape | Content areas widen |
| **945px** | Pre-desktop | Three-column mega menu may activate |
| **992px** | Desktop threshold | Full desktop navigation; 3-4 column card grids |
| **1024px** | Desktop | Full desktop layout; sidebar + content layout |
| **1440px** | Large desktop | Max content width; centered layout |

### All Breakpoints Found (sorted)
`375, 400, 420, 450, 475, 500, 525, 575, 600, 615, 640, 641, 700, 740, 769, 875, 945, 992, 1024, 1440, 1480`

Plus many fine-grained breakpoints for specific component adjustments (5, 23, 25, 30, 34, 40, 48, 50, 63, 64, 69, 75, 80, 81, 86, 87, 90, 92, 100, 112, 125).

---

## 2. Mobile Navigation (< 769px)

### Hamburger Menu

| Feature | Implementation |
|---------|---------------|
| **Trigger** | "toggle navigation menu" button (hamburger icon) |
| **Animation** | Slide-in panel (likely left-to-right or overlay) |
| **Structure** | Vertical list with "open submenu" accordion buttons per section |
| **Sub-menus** | Expandable — each main nav item has an "open submenu" button |
| **Items** | Same 7 main nav items as desktop: Things To Do, Skiing, Events, Restaurants, Places To Stay, Plan Your Visit, Neighborhoods |
| **Secondary nav** | B2B links (Meetings, Travel Trade, Sports, Film, Blog) included |
| **Footer links** | Local Crafts & Gifts, Members, Press, About Us, Contact, Sitemap, Privacy Policy |
| **Close** | Toggle same hamburger button |

### "EXPLORE SALT LAKE" Button
A mobile-specific button (`menu EXPLORE SALT LAKE`) appears at the bottom of the mobile view, serving as an alternative entry point to navigation.

### Search on Mobile
- Search box integrated into mobile header
- "toggle search dropdown" button available
- Same search functionality as desktop

### Weather on Mobile
- "toggle weather dropdown" button present
- Same weather widget as desktop, accessible via dropdown

---

## 3. Template-by-Template Responsive Behavior

### Homepage

| Viewport | Layout Behavior |
|----------|----------------|
| **Desktop (1440px)** | Full 3-column mega menu, hero carousel with large imagery, 4-across card grids, side-by-side content blocks, CrowdRiff gallery grid |
| **Tablet (768px)** | Hamburger menu appears alongside visible nav links (hybrid), hero carousel narrows, cards shift to 2-3 across, content blocks stack |
| **Mobile (375px)** | Full hamburger menu, hero carousel as single column, cards stack to 1 across, all content blocks stack vertically, "EXPLORE SALT LAKE" bottom button |

### Listing Browse (Restaurants, Places To Stay)

| Viewport | Layout Behavior |
|----------|----------------|
| **Desktop** | Left sidebar with filters + right content area with grid/list listing cards (3-4 across), sort controls, TripAdvisor ratings |
| **Tablet** | Filters may collapse above results; cards 2 across; sort and view toggles remain |
| **Mobile** | Filters collapse to expandable section above results; single-column listing cards; filter button to expand; sort and grid/list toggles remain |

### Listing Detail

| Viewport | Layout Behavior |
|----------|----------------|
| **Desktop** | Image gallery left, info right, tabs below, promotional sidebar |
| **Tablet** | Image gallery and info stack; tabs full width; sidebar moves below |
| **Mobile** | Everything stacks vertically — gallery, title, phone, buttons, tabs, content. Tab buttons wrap or become scrollable |

### Events Browse

| Viewport | Layout Behavior |
|----------|----------------|
| **Desktop** | Date quick-filter buttons, left sidebar with checkboxes, right content area with event cards |
| **Tablet** | Filters above results; date buttons may wrap; cards 2 across |
| **Mobile** | Date buttons wrap to multiple rows; filters collapse; single-column event cards |

### Blog Post

| Viewport | Layout Behavior |
|----------|----------------|
| **Desktop** | Content column with sidebar (related posts, promotions) |
| **Tablet** | Sidebar moves below content |
| **Mobile** | Full-width single column; all sidebar content stacks below |

### Industry/B2B Sections

| Viewport | Layout Behavior |
|----------|----------------|
| **Desktop** | Section-specific nav bar + content with cards and side-by-side layouts |
| **Tablet** | Nav bar may collapse; content cards 2 across |
| **Mobile** | Section nav becomes part of hamburger or collapses; all cards stack |

---

## 4. Mobile-Specific Features

### Click-to-Call

| Feature | Implementation |
|---------|---------------|
| **Phone numbers** | Linked as `tel:` links on listing detail pages (e.g., "(385) 386-8585") |
| **Behavior** | Tappable on mobile to initiate call |
| **Pages** | Listing details, contact pages, film section contacts |

### Maps Integration

| Feature | Implementation |
|---------|---------------|
| **Listing maps** | Outdooractive/Leaflet maps responsive; pinch-to-zoom on mobile |
| **"MAP OF LOCATION" button** | Same behavior on all viewports |
| **Native maps** | Address links may open in native Maps app on mobile |

### Mobile CTAs

| Feature | Desktop | Mobile |
|---------|---------|--------|
| "EXPLORE SALT LAKE" button | Not visible | Visible at bottom of mobile view |
| Subscribe button | In header center-nav | Likely in hamburger or collapsed |
| VISIT WEBSITE / CHECK RATES | Side by side | Stacked vertically |

### Swipe Gestures

| Feature | Swipe Support |
|---------|--------------|
| Hero carousel (Glide.js) | Yes — touch swipe between slides |
| Content carousels | Yes — Glide.js supports touch |
| CrowdRiff gallery | Yes — native touch scrolling |
| Image gallery on listings | Yes — swipe between images |

### Form Behavior on Mobile

| Feature | Mobile Behavior |
|---------|----------------|
| Contact form | Full-width fields, stacked labels |
| Subscribe form | Simplified layout, single column |
| Booking widget (RootRez) | Date pickers adapt to mobile (native date input or custom) |
| Search box | Full-width in mobile header |

---

## 5. Content Display Differences

### Content Hidden on Mobile

Based on the print stylesheet patterns and responsive design:
- Three-column mega menu → replaced by hamburger
- Desktop-specific sidebar promotions → moved below main content
- Some multi-column card layouts → collapsed to single column
- Weather widget details → collapsed behind dropdown

### Content That Appears Only on Mobile

| Element | Notes |
|---------|-------|
| "EXPLORE SALT LAKE" button | Mobile-only bottom CTA |
| Hamburger menu icon | Replaces full nav bar |
| Compact header | Simplified header with just logo + hamburger + search |

### Accordion/Collapsed Content

| Feature | Mobile Behavior |
|---------|----------------|
| Navigation sub-menus | "open submenu" accordion buttons in hamburger menu |
| Listing filters | Collapsible filter panel above results |
| Listing detail tabs | Stacked accordion or scrollable tab bar |
| FAQ sections | Expanding Content remains accordion on all viewports |

---

## 6. Image Responsiveness

### Srcset Implementation (from Task 13)

| Feature | Details |
|---------|---------|
| **Srcset** | Extensive usage — 200+ srcset instances on content-heavy pages |
| **CDN transforms** | Cloudinary URL-based sizing (`c_fill,h_XX,w_XX`) |
| **Lazy loading** | Native `loading="lazy"` + custom `lazyload` class (689 + 84 instances) |
| **Common mobile sizes** | 300×198 (small cards), 400×249 (standard cards) |
| **Common desktop sizes** | 640×428 (medium), 1200×800 (hero) |
| **AVIF format** | Served via `f_avif` flag for modern browsers |

### Art Direction
No `<picture>` elements with different image crops per viewport were observed. The same image is served at different sizes via Cloudinary transforms and srcset, but no art direction (different crop/focus per breakpoint) is implemented.

---

## 7. Font Size Behavior

### Font Stack (from Task 3)

| Font | Usage |
|------|-------|
| PT Sans Narrow (400, 700) | Primary body/heading font via Google Fonts |
| Material Icons | UI icons |
| Adobe Typekit | Additional typeface |
| Font Awesome 5.14.0 | Icon font |

### Responsive Typography
- The site uses relative units and media queries for font sizing
- Headings scale down on mobile viewports
- Body text remains readable at 375px width
- No evidence of fluid typography (`clamp()` or `calc()` based sizing)

---

## 8. Performance Considerations by Viewport

### Script Loading
- Same JavaScript bundle loaded regardless of viewport
- RequireJS loads modules on demand, which partially mitigates mobile load
- No code splitting by viewport size observed
- Mobile receives same 25+ analytics/tracking tags as desktop

### CSS Loading
- Modular per-plugin CSS loading (not one monolithic file)
- All breakpoints loaded in all stylesheets (no viewport-specific CSS files)
- Print stylesheet is separate (`shared_print.css`)

---

## 9. Rebuild Implications

### Must Replicate

| Feature | Priority | Notes |
|---------|----------|-------|
| Fully responsive layout | Critical | All 21+ template patterns must work across viewports |
| Mobile hamburger navigation | Critical | Accordion sub-menus for 7+ nav sections |
| Click-to-call phone links | High | All listing detail pages |
| Touch-friendly carousels | High | Hero, content carousels, image galleries |
| Responsive image delivery | High | Srcset + CDN transforms + lazy loading |
| Mobile filter collapsing | High | Listing/event browse filters |
| Stacking layout at mobile | High | Cards, sidebars, content blocks |

### Should Improve

| Feature | Current | Improvement |
|---------|---------|-------------|
| Art direction | None — same image at all sizes | Consider `<picture>` with different crops for hero images |
| Fluid typography | Fixed breakpoint sizes | Use `clamp()` for smooth scaling |
| Code splitting | Same bundle all viewports | Load mobile-only or desktop-only scripts conditionally |
| Critical CSS | Not implemented | Inline above-fold CSS for faster mobile rendering |
| Mobile-specific analytics | Same 25+ tags | Consider lighter tag set on mobile |

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-21/)
- `01-homepage-mobile-375.png` — Homepage at 375px (mobile)
- `02-homepage-mobile-nav-open.png` — Homepage with mobile hamburger nav open
- `03-restaurants-mobile-375.png` — Restaurants listing browse at 375px
- `04-homepage-tablet-768.png` — Homepage at 768px (tablet)
- `05-listing-detail-mobile-375.png` — Listing detail at 375px
- `06-events-mobile-375.png` — Events browse at 375px
