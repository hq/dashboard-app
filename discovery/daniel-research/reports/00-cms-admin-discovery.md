# CMS Admin Discovery & Full Navigation Map

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Logged in as:** Jackson Ogles (Admin)
**Session:** vsl-cms

---

## Complete CMS Admin Navigation Map

### 1. HOME (Dashboard)
- Tasks widget (44 active)
- At A Glance: 44,431,824 page views, 00:03:49 avg session, 114,776 pageviews
- Action Items (content needing attention):
  - 154 Events without an Image
  - 1 Event without Geocoding
  - 3 Listings without Geocoding
  - 3,728 Listings without Media
  - 3 Map Publisher maps with autosaved drafts expiring
  - 1,030 Public Relations Articles (Ski City) unpublished
  - 1,228 Public Relations Articles unpublished
  - 4 Public Relations Blog unpublished
  - 4 Public Relations (The Salt Lake Scene) posts with autosaved drafts expiring
  - 196 Sitemap pages with autosaved drafts expiring
- Stats (device breakdown pie chart)
- Top Pages widget
- Site Activity (sessions chart over time)

### 2. SITEMAP > Primary (10 navigation sections)
| # | Section | Notes |
|---|---------|-------|
| 1 | Main Navigation | 8 pages: Things To Do, Skiing & Snowboarding (Link), Home, Events, Restaurants, Places To Stay, Plan Your Visit, Neighborhoods |
| 2 | Secondary Navigation | TBD - needs deep dive |
| 3 | Footer Navigation | TBD - needs deep dive |
| 4 | Microsites | TBD - needs deep dive |
| 5 | Meetings Microsite Nav | **KEY FINDING: Dedicated meetings microsite exists** |
| 6 | Conventions | **KEY FINDING: Separate conventions section** |
| 7 | Landing Pages | TBD - needs deep dive |
| 8 | External Links | TBD - needs deep dive |
| 9 | System | TBD - needs deep dive |
| 10 | Industry | TBD - needs deep dive |

### 3. ASSETS (Asset Library)
| Type | Notes |
|------|-------|
| Documents | PDFs, downloadable files |
| External Links | External URL references |
| Images | Photo library |
| Videos | Video assets |

### 4. MODULES (6 modules, 27+ sub-items)

#### 4.1 Auto Responder
- Content
- Links

#### 4.2 Collection Types (15 types)
| # | Type | Notes |
|---|------|-------|
| 1 | Alerts | Site-wide alert banners |
| 2 | Announcements | Announcement content |
| 3 | Contact Slides | Contact page carousel |
| 4 | Expanding Content | Accordion/expandable content |
| 5 | Hero Slides | Hero banner carousels |
| 6 | Microsite Slides | Microsite-specific carousels |
| 7 | Navigation Links | Custom nav link collections |
| 8 | Neighborhood Slides | Neighborhood section carousels |
| 9 | Questions (FAQ) | FAQ content type |
| 10 | Regions Slides | Region-based carousels |
| 11 | Resort Slides | Resort/ski carousels |
| 12 | Slides | General slides |
| 13 | Social Slides | Social media content carousels |
| 14 | Staff Departments | Staff/department directory |
| 15 | Vertical Videos | Short-form vertical video content |

#### 4.3 Dynamic Content
- **Persona Tags** — visitor persona/segment definitions
- **Profiles** — personalization profiles

**KEY FINDING:** Personalization/dynamic content system exists. Content can be targeted based on visitor personas.

#### 4.4 Map Publisher
- Maps — interactive map creation/management

#### 4.5 Public Relations (3 sub-modules, each with same structure)

| Sub-module | Sub-items |
|-----------|-----------|
| Articles | Authors, Categories, Posts, Tags |
| Articles - Ski City | Authors, Categories, Posts, Tags |
| Blog | Authors, Categories, Posts, Tags |

Note: "The Salt Lake Scene" appears in dashboard Action Items but not as a separate module — may be a category or view within Articles/Blog.

#### 4.6 Visitors
- **Access Groups** — visitor permission groupings
- **User Accounts** — visitor user management

**KEY FINDING:** Visitor account system exists. Visitors can create accounts with access groups controlling what they see.

### 5. SETTINGS (9 sections)

#### 5.1 Assets
- Document Categories
- Image Categories
- Video Categories

#### 5.2 CMS Tags (direct link)
Tag management for content organization.

#### 5.3 Field Builder (5 items)
- Asset Library - Documents
- Asset Library - External Links
- Asset Library - Images
- Asset Library - Videos
- Core - Textbox

Custom field type definitions for content types.

#### 5.4 Nav
- Nav Tags — navigation tagging system

#### 5.5 Sites > Primary (4 items)
- **Layouts** — template/layout management
- **Redirects** — URL redirect rules
- **Code Editor** — custom code injection
- **Import Nav Items** — navigation import tool

#### 5.6 Tag Manager (direct link)
Tag management system.

#### 5.7 Tasks
- Categories — task category organization

#### 5.8 Translation
- **Static Namespaces** — translation string management

**KEY FINDING:** i18n/translation infrastructure exists in the CMS.

#### 5.9 Users
- Manage Users — user account administration
- Manage Roles — role/permission definitions
- User History — audit trail

---

## Deep Dive: Sitemap Sections (Item Counts)

| # | Section | Items | Key Content |
|---|---------|-------|-------------|
| 1 | Main Navigation | 8 | Things To Do, Skiing & Snowboarding (Link), Home, Events, Restaurants, Places To Stay, Plan Your Visit, Neighborhoods |
| 2 | Secondary Navigation | 6 | Meetings (Link), Travel Trade (Link), Sports (Link), Film (Link), Blog (Link), Speakers Bureau (Link, Disabled) |
| 3 | Footer Navigation | 7 | Local Crafts & Gifts (Link), Members, Press & Research, About Us, Contact, Sitemap (Link), Privacy Policy |
| 4 | Microsites | 79 | Mostly "Salt Lake Welcomes..." convention/event welcome pages. Includes: Archived Microsites, Test Microsite, Welcome to Salt Lake, Influencer Information, Summit, Salt Palace Construction Updates, Temple Square Open House, + ~72 convention-specific microsites |
| 5 | Meetings Microsite Nav | 11 | About Salt Lake, Bars & Nightlife, Events, Getting Around, Restaurants, Things to Do, Outdoors, LGBTQ Salt Lake, Planning Tools, Quick Links, Restaurants & Bars |
| 6 | Conventions | 3 | Salt Lake County Equestrian Park, Mountain America Expo Center, Salt Palace Convention Center |
| 7 | Landing Pages | 16 | Campaign pages: West Of Conventional, Fall Tour, Hospitality Jobs, Annual Report, Whole New Direction (family/leisure), SLC in NYC, Winter Wonderland, Ultimate Salt Lake Getaway, Winter Roundup, Terms, It's Sweet (v1+v2), etc. |
| 8 | External Links | 1 | Cottonwood Connect |
| 9 | System | 20 | Template/system pages: SVTest, Blog, Articles, Listing, Event, **Offer** (folder: "coupon"), **Compare**, Search, Sitemap, Staff List, **RSVP**, **My Account**, **Extranet Login**, Autoresponder, SP, **RFP**, + test pages |
| 10 | Industry | 6 | Meetings, Travel Trade, Sports, Film, Meetings - OLD (legacy), Speak Salt Lake |

**Total sitemap pages:** ~157+

### System Pages — Critical Template Discoveries
The System section reveals key feature pages:
- **Offer** (folder: "coupon") — deals/coupon system
- **Compare** — comparison tool
- **My Account** — visitor account page
- **Extranet Login** — partner/extranet portal
- **RFP** — Request for Proposal page
- **RSVP** — event RSVP system
- **Staff List** — staff directory

---

## Deep Dive: Module Content Counts

### Collection Types (15 types)

| # | Type | Count | Notes |
|---|------|-------|-------|
| 1 | Alerts | 4 | |
| 2 | Announcements | 7 | |
| 3 | Contact Slides | 25 | Possibly paginated (25 = default page size) |
| 4 | Expanding Content | 2 | |
| 5 | Hero Slides | 25 | Possibly paginated |
| 6 | Microsite Slides | 12 | |
| 7 | Navigation Links | 25 | Possibly paginated |
| 8 | Neighborhood Slides | 25 | Possibly paginated |
| 9 | Questions (FAQ) | 25 | Possibly paginated |
| 10 | Regions Slides | 14 | |
| 11 | Resort Slides | 25 | Possibly paginated |
| 12 | Slides | 25 | Possibly paginated |
| 13 | Social Slides | 11 | |
| 14 | Staff Departments | 25 | Possibly paginated |
| 15 | Vertical Videos | 24 | |

**Note:** Items showing exactly 25 may be truncated by pagination. True counts need verification in deep-dive tasks.

### Auto Responder
- Content: 11 items (action item/task definitions matching dashboard Action Items)
- Links: 2 items
- **Note:** This module intermittently triggers JS error: `TypeError: Cannot read properties of undefined (reading 'apis')`. May be deprecated or misconfigured.

### Dynamic Content
- **Persona Tags: 7** — Craft Beverages, Family Fun, LGBTQ, Leisure Travel, Outdoor Recreation, Restaurants & Bars, Winter Activities
- **Profiles: 7** — Same 7 categories as Persona Tags (1:1 mapping)

### Map Publisher
- **Maps: 6** — Kim's Test map, West Valley Hotels and Sports Venues, Downtown Hotels and Sports Venues, South Valley Hotels and Sport Venues, Downtown Restaurants/Bars/Coffee Shops, Free Things To Do Map

### Public Relations
| Sub-module | Posts | Authors | Categories | Tags |
|-----------|-------|---------|------------|------|
| Articles | 25+ (paginated) | 6 | 7 | 14 |
| Articles - Ski City | 4 | — | — | — |
| Blog | 25+ (paginated) | — | — | — |

**Note:** Dashboard shows 1,228 unpublished Articles and 1,030 unpublished Ski City Articles — actual counts are much higher than the paginated 25.

### Visitors
- **Access Groups: 1** — "Default" (default group only)
- **User Accounts: 1** — Minimal usage, but capability exists

---

## Deep Dive: Assets

| Type | Count | Notes |
|------|-------|-------|
| Documents | 25+ | Likely paginated |
| External Links | 25+ | Likely paginated |
| Images | 0 | **Images likely managed through Simpleview CRM/DAM, not CMS asset library** |
| Videos | 25+ | Likely paginated |

---

## Deep Dive: Settings

### Sites > Primary
- **Layouts (Templates): 11** — Ski Section Page, Meetings Microsite, Microsite - General, Sports, Footer Nav - Content, Secondary Nav - Listings, Secondary Nav - Content, Main Nav - Events, Main Nav - Listings, Default - REDESIGN - Blank, Main Nav - Content
- **Redirects: 11** items
- **Code Editor** — Custom code injection (not explored in depth)
- **Import Nav Items** — Navigation import tool

### Users
- **Manage Users: 25+** (likely paginated)
- **Manage Roles: 9 roles:**
  1. Admin — Access to everything
  2. aRes — (no description)
  3. CMS Training — (no description)
  4. HR access — For HR to access contacts
  5. Limited External Access for Testing — Very limited access for testing
  6. Marketing — General marketing access, cannot delete items
  7. Membership Department — Access for DTN ads and membership needs
  8. PR Team — PR team access
  9. SMG Access — Access for SMG employees (Equestrian Center, Expo Center, Convention Center)
- **User History** — Audit trail (not explored in depth)

### Other Settings
- **CMS Tags: 25+** (likely paginated)
- **Tag Manager: 0** — Empty/unused
- **Translation > Static Namespaces: 10:**
  1. Common (translations.static.common)
  2. Events (translations.static.events)
  3. Layout/Detail (translations.static.leo)
  4. Listings (translations.static.listings)
  5. **Media Gallery** (translations.static.mediagallery)
  6. **Offers** (translations.static.offers)
  7. Public Relations (translations.static.blog)
  8. Search (translations.static.search)
  9. **Trails** (translations.static.trails)
  10. **Trip Builder** (translations.static.tripbuilder)
- **Field Builder: 5 items** — Asset Library (Documents, External Links, Images, Videos), Core - Textbox
- **Nav > Nav Tags** — Navigation tagging system
- **Assets** — Document/Image/Video Categories
- **Tasks > Categories** — Task category organization

### Translation Namespace Discoveries
The translation namespaces reveal features that may be powered by Simpleview CRM/platform rather than the CMS directly:
- **Media Gallery** — dedicated photo/video gallery feature
- **Offers** — deals/coupon system
- **Trails** — hiking/biking trail content type (new discovery!)
- **Trip Builder** — trip planning/itinerary builder tool

---

## Key Findings & Impact on Research Plan

### Confirmed Features (previously unknown)
1. **Meetings Microsite** — Dedicated 11-page meetings/conventions mini-site with its own navigation. This is a significant section that needs its own deep-dive research.
2. **Conventions Section** — 3 venue-specific pages (Salt Palace, Expo Center, Equestrian Park) separate from meetings microsite.
3. **79 Microsites** — Massive collection of convention/event welcome pages ("Salt Lake Welcomes..."). These are individual landing pages per convention.
4. **Visitor Accounts + Access Groups** — Capability exists (1 account, 1 default group). System pages confirm My Account, Extranet Login pages exist.
5. **Dynamic Content / Personalization** — 7 Persona Tags + 7 matching Profiles for targeted content (Craft Beverages, Family Fun, LGBTQ, Leisure Travel, Outdoor Recreation, Restaurants & Bars, Winter Activities).
6. **Translation System** — 10 Static Namespaces confirm active i18n across Events, Listings, Offers, Search, Trip Builder, Media Gallery, Trails, and more.
7. **15 Collection Types** — Many component types (slides, alerts, FAQs, vertical videos, etc.) that each need field documentation and frontend mapping.
8. **Auto Responder** — Email auto-response system (11 content items, 2 links). Note: intermittent JS error in this module.
9. **Map Publisher** — 6 custom interactive maps (hotels, restaurants, sports venues, free activities).
10. **Offers/Coupon System** — Confirmed via System pages ("Offer" with folder "coupon") and translation namespace (translations.static.offers).
11. **Trip Builder** — Confirmed via translation namespace (translations.static.tripbuilder).
12. **Trails** — Hiking/biking trail content type confirmed via translation namespace (translations.static.trails). New discovery not in any current task.
13. **Media Gallery** — Dedicated gallery feature confirmed via translation namespace (translations.static.mediagallery).
14. **Compare Tool** — System page "Compare" exists for comparison functionality.
15. **RFP System** — Dedicated Request for Proposal page exists.
16. **RSVP System** — Event RSVP page exists.
17. **Staff Directory** — Staff List system page + Staff Departments collection type (25+ items).
18. **Industry/B2B Sections** — 6 industry-facing pages: Meetings, Travel Trade, Sports, Film, Speak Salt Lake (plus legacy "Meetings - OLD").
19. **11 Backend Layouts/Templates** — Including specialized layouts for Ski Section, Meetings Microsite, Sports, different nav contexts.
20. **9 CMS Roles** — Admin, Marketing, PR Team, Membership Dept, SMG Access, HR, CMS Training, aRes, Limited External.
21. **Images managed externally** — CMS Asset Library shows 0 images. Images are likely in Simpleview CRM/DAM.

### Data Volume Indicators
- **79 Microsites** (convention welcome pages)
- **3,728+ Listings** without media (implies thousands more WITH media)
- **1,228+ Articles** unpublished (paginated view shows 25)
- **1,030+ Ski City Articles** unpublished
- **154 Events** without images
- **196 Sitemap pages** with drafts
- **25+ CMS admin users**
- **25+ Documents, External Links, Videos** in asset library
- **16 Landing Pages** (marketing campaigns)
- **11 Backend Templates/Layouts**
- **9 CMS Roles**
- **7 Persona/Personalization Profiles**
- **6 Custom Maps**

### Gap Analysis vs Current Tasks

| Finding | Current Coverage | Action Needed |
|---------|-----------------|---------------|
| Meetings Microsite (11 pages) | Partially covered (Task 20) | **New Task**: Dedicated meetings microsite documentation |
| 79 Convention Microsites | Not covered | **New Task**: Microsite template and content pattern documentation |
| Conventions (3 venues) | Not covered | **Add**: Include in sitemap deep-dive |
| Visitor Accounts + My Account | Task 20.1 has discovery check | **Expand**: Now confirmed — needs full auth flow documentation |
| Extranet Login | Task 29 covers partner portal | **Confirm**: Extranet login page exists |
| Dynamic Content/Personalization | Task 22.4 checks | **Expand**: 7 personas + 7 profiles need full documentation |
| 15 Collection Types | Not individually documented | **Expand**: Task 24 needs all 15 field structures |
| Offers/Coupon System | Task 15.1 updated to check | **Confirm**: Now confirmed — needs full documentation |
| Trip Builder | Task 20 mentions | **Confirm**: Translation namespace confirms it exists |
| Trails | NOT in any task | **New Task**: Trail content type documentation |
| Media Gallery | Task 13 covers media | **Expand**: Dedicated gallery feature needs documentation |
| Compare Tool | Not covered | **Add**: Comparison feature needs documentation |
| RFP System | Task 17.1 mentions | **Confirm**: System page exists |
| RSVP System | Not covered | **Add**: Event RSVP feature documentation |
| Staff Directory | Not covered | **Add**: Staff list page + departments |
| Industry/B2B Sections | Not covered | **New Task**: Travel Trade, Sports, Film section documentation |
| Auto Responder | Not covered | **Add**: Email auto-response documentation |
| Translation (10 namespaces) | Task 8/19 covers i18n | **Expand**: Active translation system needs deep-dive |
| Map Publisher (6 maps) | Task 20 mentions maps | **Confirm**: Custom map builder tool |
| 11 Backend Layouts | Task 15 covers frontend | **Add**: Backend layout/template management documentation |
| Field Builder | Not covered | **Add**: Custom field definitions documentation |
| Code Editor | Not covered | **Add**: Custom code injection documentation |
| Images in CRM not CMS | Task 13/28 covers media | **Critical**: Images managed externally — migration approach differs |
| 25 = Pagination limit | Not documented | **Note**: All counts of exactly 25 are likely truncated |

---

## Screenshots

All screenshots saved to `docs/marketing-site-research/screenshots/phase-34/`:
- `01-cms-dashboard.png` — Dashboard overview
- `02-cms-sitemap.png` — Sitemap section
- `03-cms-sitemap-primary-sections.png` — All 10 sitemap sections
- `04-cms-sitemap-main-nav.png` — Main Navigation pages list
- `05-cms-modules.png` — Modules overview
- `06-cms-settings.png` — Settings overview

---

## Next Steps

1. Deep-dive each sitemap section (Secondary Nav, Footer Nav, Microsites, Meetings, Conventions, Landing Pages, External Links, System, Industry) to count pages and understand structure
2. Enter each Collection Type to count items and preview fields
3. Explore Visitors > User Accounts and Access Groups to understand the visitor auth system
4. Review Dynamic Content > Persona Tags and Profiles for personalization rules
5. Check Layouts for template definitions
6. Review Redirects for existing redirect rules
7. Update tasks 24-30 based on these findings
