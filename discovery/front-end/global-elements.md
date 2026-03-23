# Phase A: Global Elements — visitsaltlake.com

Audited 2026-03-19 via headless browser inspection of the live site.

---

## A1. Header & Navigation

### Desktop Header (`.panel-header`, fixed position, z-index 60)

**Top bar:**
- Logo: `/includes/public/assets/shared/logo.svg` (Visit Salt Lake), 230px wide
- Subscribe button (`.header-subscribe-button`, links to `/plan-your-visit/subscribe/`)
- Search toggle (magnifying glass icon)
- Weather button showing current temp (e.g., "65°")

**Primary Navigation (7 items):**
1. Things To Do (with submenu)
2. Skiing & Snowboarding (with submenu)
3. Events (with submenu)
4. Restaurants (with submenu)
5. Places To Stay (with submenu)
6. Plan Your Visit (with submenu)
7. Neighborhoods (with submenu)

**Secondary Navigation (below primary, smaller):**
- Meetings, Travel Trade, Sports, Film, Blog

**Dropdown behavior:**
- Multi-level dropdowns with `aria-haspopup`, `aria-expanded` attributes
- Toggle buttons with `.dropdown-toggle` class and plus/minus icons
- Lazy loading support (`data-isLazyLoaded`)
- Nested levels: level-1 through level-4 padding increments
- Desktop dropdown occupies right 55-61.5% of viewport

**Search:**
- Global search bar with `[data-sv-searchForm]`
- Input: `[data-sv-search-input]` (type="search", placeholder "Site Search")
- Search action: GET to `/search/?q=`
- Desktop: slides down from header on toggle
- No autocomplete/suggestions observed
- Empty submission prevented via JS validation

**Weather widget:**
- Button shows current temperature (e.g., "65°")
- Dropdown shows current conditions + 5-day forecast (day name, icon, high/low temps)
- Data source: `/plugins/core/svapi/?service=weatherv2&endpoint=latlng` with lat/long from `sv_site.siteConfig`
- Units: Fahrenheit (`unit=f`)
- Templated via Goatee (Simpleview's client-side JS renderer)
- ARIA: `aria-expanded` toggled on click

### Mobile Header

- Hamburger menu toggle (`.menu-toggle`)
- Full-screen drawer (`.mobile-nav-container`, absolutely positioned)
- Body overlay (`.body-overlay`, rgba(70,70,70,0.7)) when nav open
- All nav items in accordion pattern with expand/collapse
- Search form embedded at top of mobile nav
- Weather widget visible in mobile nav

### Section-Specific Navigation

Some sections replace the primary nav with their own sub-navigation:
- **Meetings**: Why Choose Salt Lake, Hotels, Venues, Salt Palace, Mountain America Expo, Destination Services, Convention Calendar, Submit RFP, Contact Us
- **Sports**: Why Salt Lake?, Facilities, Services, Calendar, Summit, Social, Contact Us
- **Members**: Become a Member, Member Events, Contact Us, Member Login

---

## A2. Footer

### Pre-Footer CTAs (3 cards on every page)
1. **Visitors Guide** → `/plan-your-visit/free-visitors-guide/` (Note: no printed guide exists — redirects to online info)
2. **Newsletter Sign Up** → `/plan-your-visit/subscribe/`
3. **Experience Marketplace** → `/things-to-do/tours-experiences/`

### Discount Passport Block (appears on most pages)
- "Get the Salt Lake Discount Passport" promotion
- FREE mobile passport with deals (10-20% off food, merchandise, 20-25% off tickets)
- "Get FREE Passport" CTA button
- **VWO A/B testing active**: "AB Variation: OriginalVariant" and "Dynamic Variation: DefaultFamily FunWinter Activities" visible in page text

### Footer Content
- **Address**: 90 South West Temple, Salt Lake City, UT 84101
- **Phone**: 801.534.4900 | 800.541.4955
- **Copyright**: © 2026 Visit Salt Lake

### Footer Links
- Local Crafts & Gifts → `visit-salt-lake.myshopify.com` (external Shopify store)
- Members → `/members/`
- Press & Research → `/press-research/`
- About Us → `/about-us/`
- Contact → `/contact/`
- Sitemap → `/sitemap/`
- Privacy Policy → `/privacy-policy/`

### Social Media (7 platforms)
1. Facebook
2. Twitter/X
3. YouTube
4. Instagram
5. LinkedIn
6. Pinterest
7. TikTok

### Partner Logos
- Utah Life Elevated (state tourism)
- Delta Air Lines
- Visit The USA (Brand USA)

### Attribution
- "Made by Simpleview" link

### Language Selector
8 languages: English, Español, Français, Deutsch, Nederlands, 한국어, Português, 简体中文
(Language links all point to `#` — likely JS-powered translation, possibly Google Translate)

---

## A3. Global Widgets & Overlays

### Cookie Consent Banner
- Text: "This site uses cookies to enhance the user experience and measure marketing activities..."
- Links to Privacy Policy
- "Accept" button (closes banner)
- Appears on first visit to every page

### Civic Plus / ADA Widget
- Not visible as a standalone overlay in the DOM
- May be loaded via GTM or appear only in certain conditions
- Skip navigation links and ARIA attributes are built into the site natively

### Chat Widget
- **None observed** on any page

### Alert/Announcement Bar
- **None observed** — no persistent banner at top of page

### IE Warning
- `#ie-warning` overlay for Internet Explorer detection (checks `msTouchAction`)

### Body Overlay
- `.body-overlay` (fixed position, z-index 48) — activates when mobile nav or search is open

---

## A4. Global Tracking & Scripts

### Google Tag Manager
- **GTM-5L5W32** — primary container
- **GTM-NFBVG93** — secondary container
- Both loaded via standard GTM snippet
- GTM event tracking: `data-gtm-click` and `data-gtm-vars` attributes on navigation links
  - Tracks: `linkObject`, `interactionUrl`, `interactionText` for GA4 (`tClient_ga4`)

### Visual Website Optimizer (VWO)
- **Account ID: 967565**
- Version 2.1
- Settings tolerance: 2000ms
- Hides body on load (opacity:0) while experiment loads
- Tracking endpoint: `https://dev.visualwebsiteoptimizer.com/ee.gif`
- Config endpoint: `https://dev.visualwebsiteoptimizer.com/j.php`
- LocalStorage keys: `_vwo_967565_config`, `_vwo_967565_settings`
- **Active experiments**: Discount Passport section shows "AB Variation: OriginalVariant"

### Simpleview Platform Scripts
- **Goatee** templating engine (client-side JS renderer used for weather widget and dynamic content)
- **sv_urlLib** (URL construction utility)
- **sv_site** (site configuration object with lat/long, etc.)
- **domReady** (DOM readiness utility)

### Act On
- Not directly visible in page source — likely loaded via GTM container

### Font Stack
- Custom fonts loaded via `@font-face`:
  - Saans-Regular (`SaansRegular.woff2`)
  - Saans-Bold (`SaansBold.woff2`)
  - Saans-Heavy (`SaansHeavy.woff2`)

### CSS Design System
- CSS custom properties on `:root`:
  - Colors: `--color1` (green #229354), `--color2` (blue #105172), `--color3` (red #a82a23)
  - Spacing scale: `--space-1` (4px) through `--space-64` (256px)
  - Width: `--width-base: 1320px`, `--width-comfortable: 72ch`, `--width-feature: 1000px`
  - Responsive breakpoints: 40em, 64em, 80em, 86em, 90em

### Image Hosting
- CRM images: `https://saltLake.simpleviewcrm.com/images/`
- Asset CDN: `https://assets.simpleviewinc.com/simpleview/image/upload/`

---

## A5. Share Functionality

Every content page has a share button with these options:
- Email (mailto: with subject and body URL)
- X/Twitter (share API)
- Facebook (sharer)
- LinkedIn (shareArticle)
- Reddit (submit)

---

## Questions for Client

- [ ] **Language selector**: The language links all point to `#`. Is this Google Translate, a Simpleview built-in, or a third-party translation service? Which languages are actually supported with real translations vs. machine translation?
- [ ] **Civic Plus ADA widget**: We didn't see it on any page. Is it still active? Is it loaded conditionally or through GTM?
- [ ] **Two GTM containers**: Why two? Is GTM-5L5W32 the primary and GTM-NFBVG93 a secondary for a specific purpose (e.g., meetings section, Act On)?
- [ ] **VWO experiments**: How actively is VWO used? How many experiments are typically running? Who manages them?
- [ ] **Shopify store**: The "Local Crafts & Gifts" link goes to `visit-salt-lake.myshopify.com`. What's sold there? How much revenue does it generate? Is it in scope for the rebuild?
- [ ] **Act On tracking**: Is Act On loaded through GTM? We couldn't find direct Act On scripts in the page source.
