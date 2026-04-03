# Members / Partner Section — Complexity Notes

**Complexity rating: 7-9 / 10** (wide range because the portal decision could double the scope)
**Current estimate: 20-30 hrs (portal integration) + portion of 100-140 hrs (admin/corporate templates)**
**Likely actual: 150-300+ hrs depending on portal decision**

## Why this is complex

The members section isn't just marketing pages — it's a multi-system product that spans the public site, a Simpleview CRM extranet, and a Chargebee payment platform. The public-facing Partner Directory is a full search application (652 listings, faceted filtering, map views). The partner portal behind login is a complete business application that nobody on the team has been able to audit because it's behind authentication.

## What we know

### Scale
- 16+ public pages under `/members/`
- 652 partner listings in the directory (shared with the main `/listing/` content type)
- 9 member event types with individual detail pages
- 7 sponsorship programs with multi-tier comparison tables
- 2 login-gated content pages (seminars, report archives)
- 3 membership tiers ($199, $799, $5,000/yr)

### Partner Directory (`/members/member-resources/member-listings/`)
- Full searchable directory of 652 partner listings
- Keyword search (full-text)
- Neighborhood checkbox filters with live counts (20+ neighborhoods)
- Sort options: Recommended, Distance from Downtown
- View toggles: Grid, List, Map
- Pagination (33 pages, 20 per page)
- Premiere Partner badges (visual distinction for top-tier members)
- TripAdvisor rating integration on cards

### Listing Detail Pages (`/listing/{slug}/{id}/`)
These are the same pages used across the consumer site, not member-specific:
- Photo gallery/carousel (up to 10 images)
- Business name, category, neighborhood, address
- Contact info (email, phone, website)
- TripAdvisor rating with review count and ranking
- Hours of operation (daily schedule)
- Interactive map + "Get Directions"
- Long-form description
- Structured attributes (dining options, accessibility, parking, payment methods, pet policy, seasonal info)
- Embedded TripAdvisor reviews (full text)
- Related Events, Related Blog Stories sections
- "What's Nearby" tabs: Attractions, Dining, Accommodations, Events, Things To Do

### Authentication & Portal Architecture
- Public site has marketing pages at `/members/`
- "Member Login" and "Partners Only Portal" both redirect to `saltlake.extranet.simpleviewcrm.com/login/`
- `/extranet-login/` page on the main site acts as a redirect handler with `redirectUrl` parameter
- Used to gate specific content pages (educational seminars, report archives)
- The partner portal is a **completely separate application** hosted by Simpleview — not part of the CMS

### Payment Integration
- Chargebee handles membership checkout at `visitsaltlake.chargebee.com`
- Product IDs: `SALT-USD-Yearly` ($199/yr), `Salt-Plus-USD-Yearly` ($799/yr)
- SALT+ Premiere ($5,000/yr) is contact-only (email to account manager)
- Hotels have separate pricing and benefits (not on Chargebee)

### Member Events (`/members/member-events/`)
- 9 distinct event types, each with its own detail page:
  - Afterhours Networking, Quarterly Luncheons, SALT Summit & Awards, Ski Biz Expo, Brew HA HA, Attractions Pass Palooza, Partner Portal Trainings, Educational Webinars, and one more
- Events have: description, frequency, sponsorship info, past venue history
- Registration links point to external systems
- Monthly partner portal training sessions exist (indicating portal complexity)

### Sponsorship Opportunities (`/members/sponsorship-opportunities/`)
- 7 sponsorship programs across different events
- Each program has 2-3 tiers (e.g., Crystal $50K, Salt $20K, Supporting $10K)
- Detailed benefit comparison grids (logo placement, tickets, tables, recognition, attendee lists)
- Complex table layouts with many columns

### Member-Specific Navigation
- Top bar: Become a Partner | Events | Partner Directory | Contact Us | Partner Login
- Sidebar on sub-pages: Become a Partner, Partner Events (with submenu), Sponsorship Opportunities, Contact Us, Partners Only
- Replaces the main site navigation when in the members section

### Data Sources
- **Simpleview CRM** — partner/listing database, partner portal hosting, authentication
- **Simpleview CRM SOAP API** — endpoints for Listings, Contacts, Membership
- **Chargebee** — membership payment/subscription processing
- **Simpleview Asset CDN** (`assets.simpleviewinc.com`) — PDFs (annual report, etc.)
- **TripAdvisor** — ratings/reviews on listing detail pages
- **YouTube** — member portal video tutorials playlist

## What we don't know (Phase 2 questions)

### The big decision: Keep Simpleview extranet or build custom?
- **If keep:** Integration scope is auth bridge + redirect handling (~20-40 hrs)
- **If replace:** Custom partner portal with listing management, analytics, leads, event registration, and contact management (~150-300 hrs)
- This single decision swings the project scope by $50-100K+
- Monthly training sessions for partners suggest the portal is complex enough to need onboarding

### What partners actually do behind login
- Listing management — can partners update photos, descriptions, hours, amenities?
- Convention Calendar access — what data do partners see?
- Sales leads — how are leads distributed? What does the interface look like?
- Analytics/reports — what metrics are available?
- Event registration — is it handled in the portal or externally?
- Newsletter management — can partners manage their own subscriptions?
- Contact management — can they add/remove staff members?
- Collateral updates — what does this entail?

### Directory/listing mechanics
- How does the Partner Directory relate to the main listings database? Same content type or separate?
- What makes a listing "Premiere"? Is it automatic based on tier or manually set?
- How do TripAdvisor ratings get synced? API polling, webhook, manual?
- Are listing detail pages generated from CRM data, CMS data, or both?
- How many listings are actively maintained vs. stale?

### Membership business model
- How many active paying members?
- Is membership growing, flat, or declining?
- How are membership dues processed for hotels (not on Chargebee)?
- What's the renewal/churn workflow?
- Are there member benefits that require technical integration (e.g., analytics dashboards, ad placements)?
- What does the "Membership Department" CMS role actually do day-to-day?

### Authentication details
- Is the extranet login SSO, or completely separate credentials from any CMS login?
- How many pages/content items are gated behind the extranet login?
- Could the auth bridge be replaced with a standard OAuth/SAML flow?
- Are there different permission levels within the partner portal (based on tier)?

### Chargebee integration
- Is Chargebee the system of record for membership status, or does CRM own that?
- How does a Chargebee subscription sync back to the CRM to grant portal access?
- What happens when a subscription lapses — automatic portal lockout?
- Are there promo codes, discounts, or custom pricing arrangements?

## Scope risks

1. **Portal decision is a project-level risk** — "Member portal & authentication" at 20-30 hrs assumes Simpleview extranet stays. If the client wants a custom portal, this becomes the largest single feature in the rebuild.
2. **Partner Directory is a search product** — 652 listings with faceted search, multiple view modes, map integration, and live filter counts. This is the same class of problem as the Events section filter, but the overlap with `/listing/` detail pages means scope could be shared or doubled depending on architecture.
3. **Listing detail pages are shared infrastructure** — these pages serve both consumer and partner audiences. Changes for one affect the other. The "What's Nearby" geospatial queries, TripAdvisor integration, and structured attributes are non-trivial.
4. **Payment + CRM + Portal data flow** — Chargebee → CRM → Portal access chain has unknown sync mechanisms. If any link is fragile, membership onboarding breaks.
5. **Sponsorship tables are content-heavy** — 7 programs × 2-3 tiers × 10+ benefit rows = complex structured content that needs a CMS authoring solution, not just a frontend template.
6. **Hotel pricing is off-system** — hotels don't use Chargebee, implying a separate manual or custom billing workflow that hasn't been documented.

## Estimate gap analysis

| Component | Current estimate | Likely actual | Gap |
|-----------|-----------------|---------------|-----|
| Partner Directory (search, filters, views) | Partially in templates | 40-60 hrs | +30-40 hrs |
| Listing Detail Pages | Shared with consumer site | 60-80 hrs (shared) | Unclear — depends on architecture |
| Auth bridge + content gating | 20-30 hrs | 20-40 hrs | ~right if keeping Simpleview |
| Custom partner portal (if built) | 0 hrs | 150-300 hrs | **+150-300 hrs** |
| Chargebee integration | Not itemized | 15-25 hrs | +15-25 hrs |
| Member events + sponsorship pages | Partially in templates | 30-50 hrs | +15-30 hrs |
| Marketing pages (become a member, etc.) | In admin/corporate | 20-30 hrs | ~covered |
| **Total gap (keeping Simpleview)** | | | **+60-95 hrs** |
| **Total gap (custom portal)** | | | **+210-395 hrs** |

## Client questions to ask

1. **Are you happy with the Simpleview partner portal, or do you want us to build a custom one?** This is the single biggest scope question in the entire project.
2. How many active paying members do you have across each tier?
3. Can we get a demo of the partner portal? What can partners do inside it?
4. How does Chargebee sync membership status back to the CRM/portal?
5. How do hotels handle membership payments if they're not on Chargebee?
6. What makes a listing "Premiere" — is it automatic based on tier or manually assigned?
7. How often do partners actually update their own listings through the portal?
8. Are there different portal permissions based on membership tier?
9. Is the sponsorship content (tiers, benefits, pricing) updated frequently, or is it fairly static year to year?
10. What's the volume of membership signups per month? What's the onboarding process?
