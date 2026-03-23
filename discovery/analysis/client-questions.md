# Questions for the Client

Running list of things we need to ask Visit Salt Lake before we can finalize the estimate. Organized by topic. Updated as we work through the functional audit.

**Status key:** `[ ]` = not yet asked, `[?]` = asked, waiting on answer, `[x]` = answered

---

## Integrations & Vendors

- [ ] **Bandwango scope**: Where does "Get FREE Passport" link to? Is it a Bandwango embed, redirect, or widget? Are Discount Passport, Attractions Pass, and Brewery Pass all on Bandwango, or different systems?
- [x] **Bandwango vs. EventsForce**: Different types of sales — passes vs. event tickets. (Answered: completely different sales types, may consolidate later)
- [ ] **EventsForce visibility**: On which events do EventsForce ticket links appear? We inspected several events and didn't find any ticket purchase integration.
- [ ] **Ripe booking**: Not found on any page we inspected (including Places to Stay index). Where does it appear? On individual hotel detail pages? As an embedded widget or outbound link?
- [ ] **Act On connection**: Newsletter forms submit to Simpleview CRM (formbuilder), not directly to Act On. How does CRM connect to Act On? Is there a webhook, data sync, or manual process?
- [ ] **Mint+**: Not found anywhere on the public site. Is it internal-only (sales team)? Or embedded on a page we haven't checked?
- [ ] **NowPlayingUtah**: Events from this feed include the attribution "This calendar listing is brought to you by NowPlayingUtah.com." Is the feed an API, data dump, or CRM import? How often does it update? Can VSL staff edit imported events?
- [ ] **Google Cloud / Business info**: What business data comes from Google? Not visible in page source.
- [ ] **Super Pass**: Featured in homepage hero carousel. Where is it sold if not on Bandwango? What platform handles the purchase?
- [ ] **Playeasy**: Sports section links to playeasy.com stories. Is this an ongoing integration or a one-off link?
- [ ] **Civic Plus**: Not visible as a widget on any page. Is it still active? Loaded via GTM?
- [ ] **Two GTM containers**: GTM-5L5W32 and GTM-NFBVG93. Why two? What's loaded in each?
- [ ] **VWO experiments**: How actively is VWO used? How many experiments typically run? Who manages them?
- [ ] **Shopify store**: "Local Crafts & Gifts" → visit-salt-lake.myshopify.com. What's sold? Revenue? In scope for rebuild?
- [ ] **TripAdvisor**: Reviews appear on listing pages. Is this a live API integration or periodic data sync? Who manages it?

## Content & Data

- [ ] **Featured content curation**: How are homepage Featured Events, blog posts, and category cards selected? CMS-curated or algorithmic?
- [ ] **Content freshness**: How often are listings, events, and articles updated?
- [ ] **Event lifecycle**: What happens to past events? Archived? Deleted?
- [ ] **Multi-location listings**: Subway has 68 location pages. Intentional? Partner-managed?
- [ ] **Blog vs. Articles**: Why two separate content areas (`/blog/stories/` and `/articles/post/`)? Different CMS content types or same?
- [ ] **Listing tiers**: "Premiere Partner" badge appears on some listings. What tiers exist? What does each tier include? Is it a paid feature?
- [ ] **COVID-19 fields**: Dozens of COVID-related fields on listings (cleaning procedures, PPE, mobile payments). Still relevant or can we drop them?
- [ ] **Facility/meeting data**: How many of the ~2,000 listings have meeting room/facility specs? Is this data valuable enough to migrate?
- [ ] **Pass inclusions**: When a listing says "Included in the Salt Lake Brewery Pass," where is that relationship stored? CRM? Bandwango?
- [ ] **Instagram gallery**: Is the homepage photo gallery pulling from a live Instagram feed or CMS-managed images?
- [ ] **Neighborhood content**: Some neighborhoods (Downtown) have rich editorial content. Do all neighborhoods have the same depth? Are venue links manually maintained?

## Forms & Lead Capture

- [ ] **CRM form `udf_3845`**: What does this custom checkbox in the subscribe form represent? Which newsletter list?
- [ ] **Newsletter lists**: How many separate lists exist? (Main visitor, Sports, Meetings — any others?)
- [ ] **RFP submission flow**: What happens after RFP submit? Email notifications to whom? CRM pipeline? Response SLA?
- [ ] **Event submission**: The events page has "Submit it here" for event submission. Who reviews submitted events? What's the approval workflow?
- [ ] **Sports RFP**: Same form as meetings RFP or different fields?

## Access & Auth

- [ ] **Member portal**: Login goes to `saltlake.extranet.simpleviewcrm.com/login/`. What can members do? Update listings? View reports? Access exclusive content?
- [ ] **Membership tiers**: What tiers exist? What's behind each?
- [ ] **Travel trade section**: Is `/travel-trade/` restricted access? What does the B2B audience need?
- [ ] **Partner self-service**: Can partners update their own listing data via the extranet?

## Business & Priorities

- [ ] **Must-haves vs. nice-to-haves**: Which integrations are critical for launch?
- [ ] **Revenue features**: Which features directly drive revenue? (passes, bookings, RFPs, Shopify store) This affects prioritization.
- [ ] **Simpleview contract**: Any obligations affecting timeline or data access?
- [ ] **Analytics/reporting**: What reports does the team rely on? What data can't they lose?
- [ ] **Pass revenue**: What revenue do Discount Passport, Attractions Pass, Brewery Pass, Ski Super Pass generate? This determines rebuild priority.

## Technical

- [ ] **Simpleview data export**: What formats? API access? CSV export?
- [ ] **URL structure**: Strong opinions on keeping current patterns (`/event/{category}/{slug}/{id}/`, `/listing/{slug}/{id}/`)?
- [ ] **Accessibility**: Specific WCAG requirements beyond Civic Plus overlay?
- [ ] **Search engine**: What powers site search? Simpleview built-in? Can it be replaced with something better?
- [ ] **Filter behavior**: How do event/listing filters work technically? AJAX calls? Simpleview plugin? Is there pagination beyond the initial ~15-20 results?
- [ ] **Language support**: 8 languages listed in footer. Is this Google Translate or real translations? Which languages have actual translated content?
- [ ] **Visitor guide**: Footer still says "Visitors Guide — Request a free copy" but the page says no printed guide exists. Should this CTA be updated?
- [ ] **Map integration**: Map Publisher is in their stack but we didn't see maps on listing index or neighborhood pages. Where does it appear?

---

*Last updated: 2026-03-19 (after Phase A, B, and partial C audit)*
*70+ questions identified from functional audit*
