# Tech Stack Identification & Fingerprinting

**Date:** 2026-03-24
**Task:** #3

---

## Platform

| Component | Technology | Notes |
|-----------|-----------|-------|
| CMS | Simpleview CMS | Proprietary tourism CMS platform |
| CRM | Simpleview CRM | Listings, events, contacts, partner management |
| CDN / Image Processing | Simpleview/Cloudinary | `assets.simpleviewinc.com` with Cloudinary transforms |
| Hosting | Simpleview Cloud | `site.www.visitsaltlake.com.simpleviewcms.io` |
| Module System | RequireJS | AMD module loader for frontend JS |
| Templating | Goatee | Simpleview's custom templating engine |

---

## JavaScript Framework & Libraries

### Core
| Library | Version | Purpose |
|---------|---------|---------|
| jQuery | 2.2.4 | DOM manipulation, primary JS framework |
| Vue.js | (bundled) | Used for some interactive components (loaded internally) |
| Lodash | 4.17.21 | Utility library |
| RequireJS | (bundled) | Module loader |
| Async.js | (bundled) | Async flow control |

### UI Components
| Library | Version | Purpose |
|---------|---------|---------|
| Glide.js | 3.4.1 | Carousel/slider (hero slides, content carousels) |
| Plyr | 3.x | Video player |
| GLightbox | (bundled) | Lightbox/modal for images and videos |
| Moment.js + Timezone | (bundled) | Date/time handling |

### Simpleview Custom Libraries
| Library | Purpose |
|---------|---------|
| sv/clientLib | Client-side utilities |
| sv/siteLib | Site core functionality |
| sv/cloudinaryLib | Image processing/Cloudinary integration |
| sv/crmLib | CRM data integration |
| sv/videoLib | Video handling |
| sv/gtmLib | Google Tag Manager integration |
| sv/urlLib | URL handling |
| sv/stringLib | String utilities |
| sv/arrayLib | Array utilities |
| sv/objectLib | Object utilities |
| sv/geodist | Geographic distance calculations |
| sv/miscLib | Miscellaneous utilities |
| sv/goatee | Template rendering |

### Simpleview Feature JS
| Script | Purpose |
|--------|---------|
| custom_nav_desktop_three_col.js | Three-column desktop navigation |
| custom_nav_desktop_dropdown.js | Dropdown desktop navigation |
| custom_nav_mobile.js | Mobile navigation |
| custom_lazyload.js | Lazy loading for images |
| custom_ui_watcher.js | UI state monitoring |
| custom_quickview/site_quickview.js | Quick view overlays |
| custom_tripbuilder_component.js | Trip builder feature |
| custom_yelp_component.js | Yelp integration |
| custom_tripadvisor_component.js | TripAdvisor integration |
| custom_listings_lib.js | Listings functionality |
| custom_forms.js | Form handling |
| custom_form_popup_style_helper.js | Form popup styling |
| custom_collection_default_package.js | Collection widget defaults |
| site_tripbuilder.js | Trip builder main |
| custom_components/threshold360/viewer.js | 360° virtual tours |
| site_gtm.js | GTM integration |
| loginCheck.js | Login state checking |
| shared_header.js | Header functionality |
| shared_footer.js | Footer functionality |

### Other JS
| Library | Purpose |
|---------|---------|
| QS | Query string parsing |
| He.js | HTML entity encoding/decoding |
| jsvalidator | Form validation |
| Flowly | Flow control |
| Typecaster | Type conversion |

---

## CSS & Styling

### External CSS
| Library | Version | Purpose |
|---------|---------|---------|
| Font Awesome | 5.14.0 | Icon library |
| Weather Icons | 2.0.9 | Weather widget icons |
| Glide.js CSS | 3.4.1 | Carousel styles |
| Plyr CSS | 3.x | Video player styles |
| GLightbox CSS | (bundled) | Lightbox styles |

### Font Stack
| Source | Font | Weights | Purpose |
|--------|------|---------|---------|
| Google Fonts | PT Sans Narrow | 400, 700 | Primary body/heading font |
| Google Fonts | Material Icons | - | UI icons |
| Adobe Typekit | vrp2tco.css | - | Additional typeface |
| Font Awesome | 5.14.0 | - | Icon font |

### Simpleview CSS Architecture
Modular CSS loaded per plugin/widget:
- `plugins/common/` — Global, header, footer, forms, cookie banner, print styles
- `plugins/nav/` — Navigation styles
- `plugins/collections/` — Collection component library (CCL):
  - Cards (3-across variants)
  - Side-by-side (1-across variants)
  - Callout tiles (2-across, 3-across variants)
  - Marquee (standard variants)
  - Navigation links, social links, events marquee, upcoming events, regions map, related content
- `plugins/search/` — Search header box
- `plugins/weather/` — Weather widget
- `plugins/dynamic_content/` — Personalization
- `plugins/ab_testing/` — A/B testing
- Variables, reboot, and responsive styles

---

## Analytics & Marketing Tags

### Google
| Tag | ID | Purpose |
|-----|-----|---------|
| Google Tag Manager | GTM-NFBVG93 | Primary GTM container |
| Google Tag Manager | GTM-5L5W32 | Secondary GTM container |
| Google Analytics 4 | G-6YB03GQMPQ | Primary GA4 property |
| Google Analytics 4 | G-Q3027Z5YJW | Secondary GA4 |
| Google Analytics 4 | G-Z9MN82YTMQ | Tertiary GA4 |
| Google Analytics 4 | G-EG67YBJSRL | Quaternary GA4 |
| DoubleClick | DC-14940957 | Display advertising |
| DoubleClick | DC-10254307 | Display advertising |
| DoubleClick | DC-9672883 | Display advertising |
| DoubleClick | DC-9644701 | Display advertising |
| Google Ads | AW-1042908532 | Search/display advertising |

### Social Media
| Tag | ID | Purpose |
|-----|-----|---------|
| Facebook Pixel | 752363390410810 | Primary FB pixel |
| Facebook Pixel | 768637601546801 | Secondary FB pixel |
| Facebook Pixel | 790374154364327 | Tertiary FB pixel |
| Pinterest Tag | (active) | Pinterest conversion tracking |
| LinkedIn Insights | (active) | LinkedIn conversion tracking |

### Travel/Tourism Marketing
| Tag | ID | Purpose |
|-----|-----|---------|
| Sojern | 317077, 385368 | Travel marketing/retargeting |
| Adelphic/iPredictive | (active) | Programmatic advertising |
| Storygize | 86de6425-9072-4ef8-9612-cbd1127dd10f | Content marketing platform |
| Datafy (pxl.datafyhq.com) | (active) | Analytics |

### Session Recording & Monitoring
| Tag | ID | Purpose |
|-----|-----|---------|
| Microsoft Clarity | 4k98p3u3c3 | Session recording & heatmaps |
| Mouseflow | 53df97b6-92b8-4676-bae1-1ff0485ad7bf | Session recording |
| Monsido | (3 scripts) | Accessibility monitoring, heatmaps, page correct |

### Marketing Automation
| Tag | Domain | Purpose |
|-----|--------|---------|
| Act-On | marketing.visitsaltlake.com | Marketing automation/email |

---

## Content & UGC Integrations

| Service | Domain | Purpose |
|---------|--------|---------|
| CrowdRiff | starling.crowdriff.com | UGC/social media content gallery |
| Vimeo | player.vimeo.com | Video hosting/player API |
| Threshold360 | (embedded) | 360° virtual tour viewer |
| GTranslate | cdn.gtranslate.net | Translation widget (8 languages) |

---

## Booking / E-Commerce

| Service | Domain | Purpose |
|---------|--------|---------|
| Connect Pass | connectpass.visitsaltlake.com | Booking/cart system (persistent cart JS + CSS) |

---

## Review Integrations (JS Components)

| Service | Evidence | Purpose |
|---------|----------|---------|
| Yelp | custom_yelp_component.js | Yelp review integration |
| TripAdvisor | custom_tripadvisor_component.js | TripAdvisor review integration |

---

## Rendering Architecture

- **Server-side rendered** (SSR) — traditional HTML delivered from server
- **No SPA framework** — not React, Angular, or Next.js
- **Progressive enhancement** — RequireJS loads JS modules on demand
- **Component-based CSS** — modular per-plugin CSS loading
- **Vue.js for interactive components** — loaded internally for specific features, not a full SPA

---

## Rebuild Implications

### Technologies to Replace
1. **jQuery 2.2.4** — outdated, replace with modern JS or framework
2. **RequireJS** — replace with modern bundler (Webpack, Vite, etc.)
3. **Goatee templating** — replace with React/Next.js, Vue/Nuxt, or similar
4. **Simpleview custom libraries** — need equivalent functionality in new stack

### Technologies to Maintain/Migrate
1. **Cloudinary image processing** — can continue using Cloudinary or equivalent
2. **Google Fonts (PT Sans Narrow)** — simple to carry over
3. **Font Awesome 5** — consider upgrading to v6 or replacing with Lucide/Heroicons

### Analytics Tags to Transfer
- **11 Google tags** (4 GA4 + 4 DoubleClick + 2 GTM + 1 Google Ads)
- **3 Facebook Pixels**
- **Pinterest, LinkedIn, Sojern (2), Adelphic, Storygize, Datafy, Microsoft Clarity, Mouseflow, Monsido (3), Act-On**
- **Total: ~25+ tracking/marketing tags** — all need to be re-implemented via GTM or direct integration

### Third-Party Services to Reconnect
1. CrowdRiff (UGC gallery)
2. Vimeo (video hosting)
3. Threshold360 (virtual tours)
4. GTranslate (translation)
5. Connect Pass (booking/cart)
6. Yelp reviews
7. TripAdvisor reviews
8. Monsido (accessibility)
9. Act-On (marketing automation)

---

## Artifacts

### Raw Data (docs/marketing-site-research/raw/phase-03/)
- `01-homepage-head.html` — Full HTML `<head>` section
- `02-scripts-styles.json` — All external and internal scripts/stylesheets as JSON
