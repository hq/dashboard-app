# Phase E: Integration Depth Assessment

Assessed 2026-03-19 from HTML source inspection and live site browsing.

For each integration: type, direction, mechanism, scope, criticality, and evidence.

---

## 1. Simpleview CMS

| Dimension | Finding |
|-----------|---------|
| **Type** | Core platform (server-side rendering) |
| **Direction** | Bidirectional — serves content, accepts form submissions |
| **Mechanism** | Server-side CMS rendering all pages; Goatee client-side JS templating for dynamic widgets |
| **Scope** | Every page on the site |
| **Criticality** | **Critical** — IS the site. Every page, template, and content type runs on this. |
| **Evidence** | `contentRender_name_plugins_*` CSS classes throughout; Goatee templating; `sv_site`, `sv_urlLib` JS globals; `.panel-header`, `.panel-page` layout system |

**Rebuild implication**: This is what we're replacing entirely. Need to understand every plugin in use.

---

## 2. Simpleview CRM

| Dimension | Finding |
|-----------|---------|
| **Type** | Database/API + form processor |
| **Direction** | Bidirectional — serves listing/event data, accepts form submissions |
| **Mechanism** | CRM provides structured data for listings; forms POST to `saltlake.simpleviewcrm.com/webapi/` |
| **Scope** | All listings, events, forms, member portal |
| **Criticality** | **Critical** — source of truth for ~2,000 listings, event data, RFP pipeline |
| **Evidence** | RFP form action: `https://saltlake.simpleviewcrm.com/webapi/rfp/rfp_submitform.cfm`; Newsletter form: formid=46, groupid=5 (CRM formbuilder); Member login: `saltlake.extranet.simpleviewcrm.com/login/`; Images: `saltLake.simpleviewcrm.com/images/` |

**CRM plugins identified:**
- `plugins_crm_formbuilder` — generic CRM forms (newsletter signup)
- `plugins_crm_rfp` — RFP submission form (80+ fields)
- `plugins_crm_rsvp` — RSVP form (not found on inspected pages)
- `plugins_events_submitevent` — event submission form

---

## 3. Google Tag Manager

| Dimension | Finding |
|-----------|---------|
| **Type** | JavaScript tag manager (script injection) |
| **Direction** | Outbound (sends tracking data) |
| **Mechanism** | Standard GTM snippet, 2 containers |
| **Scope** | Global — every page |
| **Criticality** | **High** — all analytics, advertising, and potentially Act On flow through this |
| **Evidence** | `GTM-5L5W32` and `GTM-NFBVG93` in page source; `data-gtm-click` and `data-gtm-vars` attributes on nav links tracking `linkObject`, `interactionUrl`, `interactionText` for GA4 |

**Rebuild implication**: GTM itself is platform-agnostic and can be carried over. Need to audit what's loaded inside each container (possibly Act On, advertising pixels, etc.).

---

## 4. Visual Website Optimizer (VWO)

| Dimension | Finding |
|-----------|---------|
| **Type** | JavaScript A/B testing platform |
| **Direction** | Bidirectional — modifies page content, sends experiment data |
| **Mechanism** | Inline JS snippet; hides body on load while experiment loads |
| **Scope** | Global script, active experiments on specific pages (homepage Discount Passport confirmed) |
| **Criticality** | **Medium** — loss would remove A/B testing capability but not break core functionality |
| **Evidence** | Account ID: `967565`, version 2.1; Tracking: `https://dev.visualwebsiteoptimizer.com/ee.gif`; Config: `https://dev.visualwebsiteoptimizer.com/j.php`; LocalStorage: `_vwo_967565_config`, `_vwo_967565_settings`; Body hide: `opacity:0` with 2000ms tolerance; Active test: "AB Variation: OriginalVariant" on Discount Passport |

---

## 5. NowPlayingUtah

| Dimension | Finding |
|-----------|---------|
| **Type** | Content feed (events import) |
| **Direction** | Inbound (events data into the site) |
| **Mechanism** | Unknown (API? data dump? CRM import?) — events appear in CMS with attribution text |
| **Scope** | Event pages — mixed in with CMS-authored events |
| **Criticality** | **High** — provides significant portion of ~1,800 events |
| **Evidence** | Event description text: "This calendar listing is brought to you by NowPlayingUtah.com, Utah's one-stop, online website for arts and entertainment events, powered by the Utah Cultural Alliance." Seen on Utah Jazz event on homepage and A Midsummer Night's Dream detail page. |

**Rebuild implication**: Need to understand the feed mechanism to replicate it. Are events imported into Simpleview CRM and then rendered? Or is there a direct API?

---

## 6. TripAdvisor

| Dimension | Finding |
|-----------|---------|
| **Type** | API integration (reviews, ratings, rankings) |
| **Direction** | Inbound (review data displayed on listing pages) |
| **Mechanism** | Rendered server-side in listing templates; includes full review text, author, date, rating |
| **Scope** | Some listing detail pages (not all — Squatters had it, some restaurants didn't) |
| **Criticality** | **Medium-High** — significant trust signal for visitors; loss would reduce listing credibility |
| **Evidence** | On `/listing/squatters-pub-brewery/54455/`: "Ranked #17 of 1,473 Places to Eat in Salt Lake City", "Tripadvisor Traveler Rating", 2,117 reviews with full text, "© TripAdvisor 2026". Also on hotel listings with ratings. `Tripadvisor Traveler Rating` links visible on index pages. |

**Rebuild implication**: Need to maintain TripAdvisor API access. Likely requires a TripAdvisor content API subscription.

---

## 7. Google Maps

| Dimension | Finding |
|-----------|---------|
| **Type** | Outbound links (not embedded maps) |
| **Direction** | Outbound (sends users to Google Maps) |
| **Mechanism** | "Get Directions" links using `https://www.google.com/maps/dir/?api=1&destination={lat},{lng}` |
| **Scope** | Event detail pages, listing detail pages |
| **Criticality** | **Medium** — convenience feature; easy to replicate |
| **Evidence** | Event detail page: `Get Directions → https://www.google.com/maps/dir/?api=1&destination=40.603446,-111.948359` |

**Note**: Embedded map views on listing pages may use Map Publisher (Simpleview add-on) rather than Google Maps directly. Need to verify on pages with visible maps.

---

## 8. Map Publisher

| Dimension | Finding |
|-----------|---------|
| **Type** | CRM-integrated map rendering |
| **Direction** | Inbound (renders partner/listing locations on maps) |
| **Mechanism** | Simpleview CMS add-on; not found in page source of pages inspected |
| **Scope** | Unknown — not visible on any page we checked |
| **Criticality** | **Unknown** |
| **Evidence** | Listed as a client integration. Homepage neighborhood explorer has interactive photo switching but unclear if Map Publisher powers it. |

**Needs investigation**: Visit more pages to find where Map Publisher appears. May be on listing index map views or neighborhood pages.

---

## 9. Bandwango

| Dimension | Finding |
|-----------|---------|
| **Type** | Ticketing/pass platform |
| **Direction** | Bidirectional (pass content inbound, purchase data outbound) |
| **Mechanism** | NOT found in page source. "Get FREE Passport" CTA exists but destination link not inspected. Listing pages reference pass inclusion ("Included in the Salt Lake Brewery Pass"). |
| **Scope** | Discount Passport block (most pages), pass reference on some listings |
| **Criticality** | **High** — revenue-generating feature |
| **Evidence** | "Get the Salt Lake Discount Passport" block on every page; "Included in the Salt Lake Brewery Pass" on Squatters listing; Multiple pass types mentioned (Discount, Attractions, Brewery, Ski Super). |

**Needs investigation**: Click "Get FREE Passport" to determine if it's a Bandwango embed, redirect, or something else.

---

## 10. Act On

| Dimension | Finding |
|-----------|---------|
| **Type** | Marketing automation |
| **Direction** | Outbound (email sequences, tracking) |
| **Mechanism** | **NOT directly visible in page source**. May be loaded via GTM or triggered by CRM form submissions. |
| **Scope** | Unknown from public site inspection |
| **Criticality** | **Medium** — loss would affect email marketing automation |
| **Evidence** | None in page source. Newsletter forms submit to Simpleview CRM formbuilder, not Act On directly. Act On listed by client as email newsletter tool. |

**Key question**: Is Act On connected via CRM webhook/sync, or loaded via GTM? The public site gives no evidence of direct Act On integration.

---

## 11. Ripe (Booking)

| Dimension | Finding |
|-----------|---------|
| **Type** | Hotel booking integration |
| **Direction** | Unknown |
| **Mechanism** | **NOT found on any page inspected**, including Places to Stay index and listing detail pages |
| **Scope** | Unknown |
| **Criticality** | **Unknown** |
| **Evidence** | None. Listed by client as booking integration but not found in any page source, link, widget, or iframe. |

**Critical question**: Where does Ripe appear? On specific hotel detail pages? As an availability search? As outbound links?

---

## 12. EventsForce

| Dimension | Finding |
|-----------|---------|
| **Type** | Event ticketing platform |
| **Direction** | Outbound (ticket purchase links) |
| **Mechanism** | **NOT found on any event page inspected** |
| **Scope** | Unknown — may appear only on specific events with ticket sales |
| **Criticality** | **Unknown** |
| **Evidence** | None. Client lists it as event ticketing, but no ticket purchase links or EventsForce references found on event detail pages inspected. |

---

## 13. Mint+

| Dimension | Finding |
|-----------|---------|
| **Type** | Sales lead comparison tool |
| **Direction** | Unknown |
| **Mechanism** | **NOT found on any public page** |
| **Scope** | May be internal/sales-team only |
| **Criticality** | **Unknown** |
| **Evidence** | None on public site. |

---

## 14. Civic Plus (ADA)

| Dimension | Finding |
|-----------|---------|
| **Type** | Accessibility overlay widget |
| **Direction** | N/A |
| **Mechanism** | **NOT found in page source or as visible widget** |
| **Scope** | Unknown — may be loaded via GTM |
| **Criticality** | **Low** (since native ARIA attributes are built into the site) |
| **Evidence** | Skip links, ARIA attributes (`aria-label`, `aria-haspopup`, `aria-expanded`, `sr-only` class) are native to the site. Civic Plus widget not visible. |

---

## 15. Goatee (Simpleview Templating)

| Dimension | Finding |
|-----------|---------|
| **Type** | Client-side JavaScript templating engine |
| **Direction** | N/A (internal rendering) |
| **Mechanism** | RequireJS dependency; renders dynamic content client-side (weather widget confirmed) |
| **Scope** | Weather widget, potentially other dynamic content blocks |
| **Criticality** | **Critical** — part of Simpleview platform, used for dynamic rendering |
| **Evidence** | Weather widget uses `dependencies: ["goatee", "sv_urlLib", "sv_site", "domReady!"]`; template attribute: `[data-weatherwidget-template]` |

---

## 16. Bluetoad (Digital Publications)

| Dimension | Finding |
|-----------|---------|
| **Type** | Digital publication hosting |
| **Direction** | Outbound link |
| **Mechanism** | PDF hosted on Simpleview asset CDN (NOT Bluetoad) |
| **Scope** | Sports section only (Sports Play Book) |
| **Criticality** | **Low** |
| **Evidence** | "Sports Play Book" links to `assets.simpleviewinc.com/simpleview/image/upload/.../Sports_Playbook_No_Bleed_Marks_...pdf` — this is a Simpleview-hosted PDF, not a Bluetoad embed. May have been migrated off Bluetoad. |

---

## 17. Playeasy (NEW — not in original list)

| Dimension | Finding |
|-----------|---------|
| **Type** | Sports content/stories platform |
| **Direction** | Outbound link |
| **Mechanism** | External story links |
| **Scope** | Sports section only |
| **Criticality** | **Low** |
| **Evidence** | Link: "Utah Hockey Club Ice Sheets" → `playeasy.com/stories/utah-hockey-club-breaks-ground...` |

---

## 18. Shopify (NEW — not in original list)

| Dimension | Finding |
|-----------|---------|
| **Type** | E-commerce store |
| **Direction** | Outbound link |
| **Mechanism** | External link to separate Shopify store |
| **Scope** | Footer link on every page |
| **Criticality** | **Low** — separate store, not integrated into main site |
| **Evidence** | "Local Crafts & Gifts" → `visit-salt-lake.myshopify.com` |

---

## Summary: What We Found vs. What Was Expected

| Integration | Expected | Found on Public Site |
|-------------|----------|---------------------|
| Simpleview CMS | ✅ | ✅ Confirmed — entire platform |
| Simpleview CRM | ✅ | ✅ Confirmed — forms, data, images |
| GTM | ✅ | ✅ Confirmed — 2 containers |
| VWO | ✅ | ✅ Confirmed — active experiments |
| NowPlayingUtah | ✅ | ✅ Confirmed — attribution in event descriptions |
| TripAdvisor | ✅ | ✅ Confirmed — reviews on listings |
| Google Maps | ✅ | ✅ Confirmed — directions links |
| Goatee | ✅ | ✅ Confirmed — weather widget rendering |
| Map Publisher | ✅ | ❓ Not found on inspected pages |
| Bandwango | ✅ | ⚠️ CTA exists but actual integration not visible |
| Act On | ✅ | ❌ Not found in page source |
| Ripe | ✅ | ❌ Not found on any page |
| EventsForce | ✅ | ❌ Not found on any event page |
| Mint+ | ✅ | ❌ Not found (likely internal) |
| Civic Plus | ✅ | ❌ Not found (may be via GTM) |
| Bluetoad | ✅ | ❌ Sports Play Book is PDF on Simpleview, not Bluetoad |
| Playeasy | ❌ (new) | ✅ Found in sports section |
| Shopify | ❌ (new) | ✅ Found in footer |

**6 integrations confirmed visible. 6 not found. 2 partially found. 2 newly discovered.**

---

## Questions for Client

- [ ] **Ripe, EventsForce, Mint+, Civic Plus**: Where do these appear? We checked 15+ pages and found none of them. Are they on specific pages, behind auth, or loaded conditionally?
- [ ] **Bandwango**: Where does "Get FREE Passport" actually go? Can we follow the link?
- [ ] **Act On**: Is it loaded inside GTM? Or does CRM form submission trigger Act On workflows?
- [ ] **Map Publisher**: Which pages show the CRM-integrated maps?
- [ ] **Bluetoad**: Is this still in use? The Sports Play Book is a PDF on Simpleview, not Bluetoad.
- [ ] **GTM audit**: Can we get access to both GTM containers to see what's loaded inside?
