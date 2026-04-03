# Membership / Partners Section — Complexity Notes

**Complexity rating: 5-6 / 10**
**Current estimate: Underscoped — lumped into "Admin & Corporate" at ~20-30 hrs. Realistic range: 80-140 hrs (excluding extranet replacement)**

## Why this matters

The "Members" section is actually the B2B partnership program — how VSL monetizes its relationship with local businesses. It's branded as "Partners" throughout. Three paid tiers ($199–$5,000/yr) drive revenue through Chargebee subscriptions. The partner directory (652+ listings) is a full search product, not a static page. Most of the real partner management lives in Simpleview CRM's extranet, which is a completely separate application.

## What we know

### Scale
- 8 pages under `/members/`
- 652+ partner listings in the directory (with detail pages)
- 3 paid membership tiers (annual subscriptions)
- 7 sponsorship event types with tiered pricing ($250–$50,000)
- 9 partner event types

### Partners Landing Page (`/members/`)
- Hero video with play button
- 6 statistics cards ($6.1B visitor spending, 1.1M hotel room nights, 56,300 jobs, etc.)
- 5 value proposition cards (Get Seen, Grow Your Business, Make Powerful Connections, etc.)
- Partnership team bios with expandable "Read More" sections
- "Level Up" CTA section with tier overview

### Become a Partner (`/members/become-a-member/`)
- 3 tier comparison cards (SALT $199/yr, SALT+ $799/yr, SALT+ Premiere $5,000/yr)
- Expandable benefit details section per category
- "Join Now" CTAs link to **Chargebee hosted checkout** (not an on-site form)
- SALT+ Premiere has no online checkout — mailto link to `kstowe@visitsaltlake.com`
- Testimonial quotes interspersed
- Social sharing (Email, X, Facebook, LinkedIn, Reddit)

### Partner Directory (`/members/member-resources/member-listings/`)
This is the complex piece — a full search application:
- **Keyword search** (text input)
- **Neighborhood filter** with hierarchical sub-regions and live counts:
  - Salt Lake City (Downtown 255, Central City 12, Sugarhouse 11, Avenues/Capitol Hill 7, University/Foothill 19)
  - Midvalley (Cottonwood Heights 13, Midvale 12, South Salt Lake 11, Millcreek 10, Holladay/Murray 13)
  - South Valley (Sandy 31, Draper 11)
  - Southwest Valley (11), West Valley (23)
  - Mountain Resorts (Little Cottonwood 39, Big Cottonwood 14)
  - Outside Salt Lake (Park City 34, Davis/Ogden 10, Provo/Orem 6, Other Utah/Out of State 20)
- **Sort options:** Recommended, Distance from Downtown
- **3 view modes:** Grid, List, Map
- **Pagination:** 20 results per page, 33 pages
- **Dynamic variation selector:** Default, Family Fun, Winter Activities
- **Listing cards show:** Name, Premiere Partner badge, address, category, neighborhood, TripAdvisor rating
- Powered by Simpleview CMS listing/member content type

### Sponsorship Opportunities (`/members/sponsorship-opportunities/`)
- 7 detailed pricing/benefit comparison tables:
  - SALT Summit & Awards (Crystal $50K, Salt $20K, Supporting $10K)
  - Quarterly Event Luncheons (Presenting $10K, Supporting $5K, Exhibitor $250)
  - Ski Biz Expo (Presenting $5K, Supporting $2.5K)
  - Attractions Pass Palooza (Presenting $5K, Supporting $2.5K)
  - Afterhours Networking (Exhibitor $250)
  - Sports Tourism Social (Presenting $25K, Supporting $10K, Premier $5K)
  - Sports Tourism Symposium (Title $25K, Supporting $10K, Premier $5K)

### Partner Events (`/members/member-events/`)
- 9 event cards with expandable descriptions
- Events: Afterhours Networking, Quarterly Luncheons, Salt Summit and Awards, Ski Biz Expo, Brew HA HA, Attractions Pass Palooza, Partner Portal Trainings, Educational Webinars, Sponsorship Opportunities

### Other Pages
- **Partner Resources** (`/members/member-resources/`) — Links to video tutorials, social media seminars, marketing tips, archives
- **Contact Us** (`/members/contact-us/`) — Team member cards with expandable bios and email links (no form)
- **Partners Only** (`/members/members-only/`) — Gateway page linking to Simpleview CRM extranet login

### Integrations
- **Chargebee** — subscription billing for SALT and SALT+ tiers (hosted checkout, not embedded)
- **Simpleview CRM Extranet** (`saltlake.extranet.simpleviewcrm.com`) — the actual partner portal. Authentication, listing management, convention calendar, membership management all happen here
- **TripAdvisor** — ratings on partner directory listings
- **Simpleview CMS** — powers partner directory data, filtering, neighborhood taxonomy
- **Map provider** — partner directory has a Map view mode (likely Google Maps)
- **A/B testing** — Simpleview's built-in variant system is active on these pages

### Membership Tier Details

**SALT ($199/yr):**
- Partner pricing to all events, basic web listing, educational webinars/trainings, industry newsletter

**SALT+ ($799/yr) — most popular:**
- Everything in SALT + enhanced listing, convention calendar access, private partner directory, committee participation, Attractions Pass inclusion opportunity, sales leads, preferred influencer/media trip status, visitor center referrals, partners-only social promotion, exhibitor table discounts

**SALT+ Premiere ($5,000/yr) — limited availability:**
- Everything in SALT+ + FREE event access, Premiere Partner badge on listing, preferred seating/VIP access, 2 complimentary exhibitor tables/yr, dedicated partner services contact, cross-channel recognition, ski/event tickets, 20% VSL Salt & Honey discount, exclusive top-tier event invitations

**Note:** Hotel partnership pricing is separate and not detailed on the public site.

## What we don't know (Phase 2 questions)

### Partner directory mechanics
- Do neighborhood filter counts update dynamically as other filters change (cross-filtering)?
- Is filter state reflected in the URL for bookmarking/sharing?
- How does the "Dynamic Variation" selector work? (Default, Family Fun, Winter Activities) — is this reordering, filtering, or curating different subsets?
- What's the API behind the directory? Simpleview's listing API or custom?
- Are there partner detail pages beyond the directory cards, or does "Learn More" link elsewhere?

### Chargebee integration
- What happens after checkout? Is there a webhook to Simpleview CRM to provision the membership?
- Is there a self-service portal for members to manage their subscription (upgrade/downgrade/cancel)?
- How does the Premiere tier onboarding work after the email inquiry?
- Are there annual renewal flows (auto-renew, reminders, grace periods)?

### Simpleview extranet scope
- What can members actually do in the extranet? (Update listings? Upload images? View reports? Access convention calendar?)
- How many active partner accounts exist?
- Is there member-only content on the public site gated by the `?group=` URL parameter?
- What does the "Membership Department" CMS role have access to?

### Premiere Partner badge
- How is "Premiere Partner" status determined? Manual flag in CRM? Automatic based on tier?
- Does the badge appear only in the directory, or also on listing detail pages elsewhere on the site?

### Content management
- Who manages sponsorship pricing? How often do tiers/pricing change?
- Are partner events managed in CMS or CRM?
- How are testimonials on the Become a Partner page maintained?

### Hotel partnerships
- What does the separate hotel partnership program include?
- Different pricing? Different portal?

## Scope risks

1. **Partner directory is a search product** — keyword search + hierarchical taxonomy filtering + 3 view modes + map + pagination + badge logic across 652+ records. This is the same class of complexity as the events or listings sections, not a "corporate page."
2. **Chargebee → CRM provisioning** — even if Chargebee stays, the checkout-to-membership-activation flow needs to be understood and preserved. If there's a webhook chain (Chargebee → CRM → listing activation), that's integration work.
3. **Extranet replacement is a scope bomb** — if VSL wants to move off Simpleview CRM entirely, replacing the partner extranet (auth, listing management, convention calendar, reporting) is easily 200+ hours of additional scope. This needs to be a firm Phase 1 question, not a Phase 2 discovery.
4. **Dynamic variations** — the "Default / Family Fun / Winter Activities" selector on the directory suggests content curation logic that needs to be understood and replicated.
5. **TripAdvisor integration** — pulling ratings into partner listings requires API access and data freshness strategy. TripAdvisor has tightened API access in recent years.
6. **A/B testing dependency** — Simpleview's built-in A/B testing is active on these pages. The new platform needs equivalent capability or a third-party tool (Optimizely, VWO, etc.).

## Client questions to ask

1. **Critical (Phase 1):** Is replacing the Simpleview CRM extranet in scope, or will partners continue logging into Simpleview for portal features?
2. What happens after a partner completes Chargebee checkout? Is there an automated provisioning flow (webhook → CRM → listing activation), or is it manual?
3. How does the "Dynamic Variation" selector on the partner directory work? Who configures those variations?
4. What can partners do in the Simpleview extranet today? Can they update their own listings, upload images, view analytics, access convention calendar?
5. How many active paying members are there across the three tiers? Is membership growing?
6. What's the separate hotel partnership program? Different pricing, different portal, different benefits?
7. Is there member-gated content on the public site (via the `?group=` URL parameter), or is all gating in the extranet?
8. How often do sponsorship pricing and tier benefits change? Who manages those updates?
9. Are there partner detail pages with full profiles, or does the directory only show summary cards?
10. How does the Premiere Partner badge get applied? Automatic from tier status or manual curation?
