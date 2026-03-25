# CMS Content Types & Fields Documentation

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #24 — IN PROGRESS (partial — Collection Types + Nav Items + Blog Posts documented)

---

## Page Builder System

Simpleview CMS uses a **component-based page builder** for page content. Pages are assembled from reusable widgets/components.

### Available Widget/Component Library (70+ types)

#### Layout & Structure
- A/B Test Outer Panel
- A/B Test Inner Panel - Original
- A/B Test Inner Panel - Variant
- Add Panel
- Container - Connect Pass Footer Promotion
- Container - Ski Super Pass Footer Promotion
- Container - Things to Do - FAQs
- Content Section
- Default Content
- Expand Content Container
- Navigation and Share Container - Main Nav

#### Navigation
- Navigation - Breadcrumb Navigation - Main Navigation
- Navigation - Main Navigation - 3 Column - Main Navigation
- Navigation - Main Navigation - 3 Column - Secondary Navigation
- Navigation - Main Navigation - 3 Column - Footer Navigation
- Navigation - Footer Navigation - Footer Navigation
- Center Navigation
- Tertiary Navigation
- Navigation Sections

#### Header & Footer
- Header - Default - REDESIGN
- Header Widgets
- Header Announcements
- Custom - Header Button
- Footer - Default - REDESIGN
- Footer Text Content
- Text - Text Box - Footer logo - Delta
- Text - Text Box - Footer logo - USA Discover America
- Text - Text Box - Footer Logo - Utah
- Text - Text Box - Footer Text

#### Collections (Content Feeds)
- Collections - Cards, 3 Across - Listings Feed
- Collections - Cards, 3 Across - Nav - Primary Feed
- Collections - Cards, 4 Across - Nav - Primary Feed
- Collections - Contact Slides
- Collections - Curated Nav Links - Navigation Links
- Collections - Frequently Asked Questions - Questions (FAQ)
- Collections - Hero Image - Hero Slides
- Collections - Hero Slides
- Collections - Marquee, Side by Side - PR - Blog Feed
- Collections - Microsite Slides
- Collections - Related Content - PR - Blog Feed
- Collections - Side-By-Side, 1 Across - Slides
- Collections - Slides
- Collections - Social Links - Social Slides
- Collections - Vertical Videos

#### Custom Call-to-Actions
- Custom - Call to Action - Experience Marketplace
- Custom - Call to Action - Newsletter
- Custom - Call to Action - Visitor Guide

#### Dynamic Content & Personalization
- Dynamic Content
- Dynamic Content Outer Panel - DC Footer - No Brewery Pass
- Dynamic Profile - Family Fun
- Dynamic Profile - Winter Activities

#### Search
- Search - Search Box

#### Social
- Common - Social Share
- Social Links
- Social Sharing

#### Utilities
- Cookie Banner
- Utilities - Cookie Banner - Standardized Cookie widget
- Smart Banner
- Weather - Weather

#### Other
- Activity Card Panel
- Activity Slides
- Content
- Edit Content
- Hero
- Map Publisher - Maps

### Key Findings
- **A/B Testing** is built into the page builder with Original/Variant panels
- **Dynamic Content profiling** allows personalized content per visitor persona
- **Cart integration** exists (Connect Pass, Ski Super Pass promotions)
- **Experience Marketplace** CTA suggests third-party activity booking
- **Sponsor logos** (Delta, USA Discover America, Utah) are page builder widgets
- **Weather widget** is a page builder component

---

## Nav Item (Sitemap Page) Fields

Every page in the sitemap has these 27 fields:

### Basic
| Field | Type | Notes |
|-------|------|-------|
| Title | Text (required) | Page title |
| Folder | Text (required) | URL slug |
| Item Type | Dropdown | Page, Link |
| Link | URL | For Link type items |

### Publishing Options
| Field | Type | Notes |
|-------|------|-------|
| Active | Boolean | Enable/disable |
| Publish Start | Date/time | Scheduled publishing |
| Publish End | Date/time | Auto-unpublish |
| Show in Navigation | Boolean | Include in nav menus |
| Show in Search | Boolean | Include in search results |
| Open in New Window | Boolean | Link behavior |
| Publish as AMP | Boolean | AMP page support |

### Content
| Field | Type | Notes |
|-------|------|-------|
| Description | Text | Page description |
| Image | Media | Featured image |
| Location | Reference | Geographic location |

### Meta Info (SEO)
| Field | Type | Notes |
|-------|------|-------|
| Meta Title | Text | SEO title |
| Meta Description | Text | SEO description |
| Canonical URL | URL | Canonical reference |
| Open Graph Title | Text | Social sharing title |
| Open Graph Description | Text | Social sharing description |
| Open Graph Image | Media | Social sharing image |

### Custom
| Field | Type | Notes |
|-------|------|-------|
| Custom - Icon | Text | Navigation icon class |

### Additional Features
| Field | Type | Notes |
|-------|------|-------|
| CMS Tags | Tags | Content tagging |
| Content Owners | Reference | Ownership assignment |
| Nav Tags | Tags | Navigation-specific tags |
| Locale | Dropdown | i18n language setting |
| Personas | Multi-select | Personalization targeting |
| Access Groups | Multi-select | Gated content control |
| Restrict Access | Boolean | Enable access restriction |

### Key Findings
- **Personas** field confirms personalization at the page level
- **Access Groups + Restrict Access** enables gated content
- **Locale** confirms i18n support per page
- **Publish as AMP** shows AMP support exists
- **Content Owners** enables multi-user content ownership

---

## Collection Types Field Reference (15 types)

### 1. Alerts (4 items)
| Field | Notes |
|-------|-------|
| Title | Alert title |
| Description | Alert body text |
| URL | Link destination |
| URL Text | Link display text |
| Open Link In New Window | Link behavior |
| CMS Tags | Tagging |

### 2. Announcements (7 items)
| Field | Notes |
|-------|-------|
| Title | Announcement title |
| Description | Body text |
| Image | Visual asset |
| Color | Display color |
| URL | Link destination |
| Open Link In New Window | Link behavior |
| CMS Tags | Tagging |

### 3. Contact Slides (25+ items)
| Field | Notes |
|-------|-------|
| Name | First name |
| Last Name | Last name |
| Title | Job title |
| Description | Bio/description |
| Email Address | Contact email |
| Phone Number | Contact phone |
| Asset | Photo/headshot |
| Bio Asset | Secondary asset |
| Departments | Department assignment |
| Active | Enable/disable |
| CMS Tags | Tagging |

### 4. Expanding Content (2 items)
| Field | Notes |
|-------|-------|
| Label | Display label |
| Title | Content title |
| Content | Body content |
| Group | Grouping category |
| Link | URL destination |
| Link text | Link display text |
| Open Link In New Window | Link behavior |
| CMS Tags | Tagging |

### 5. Hero Slides (25+ items)
| Field | Notes |
|-------|-------|
| Title | Slide title |
| Subtitle | Slide subtitle |
| Description | Slide body text |
| Asset | Image/video asset |
| URL | Link destination |
| Open Link In New Window | Link behavior |
| Is DTN Ad? | Simpleview DTN advertising flag |
| Dynamic Content Profile | **Personalization targeting** |
| CMS Tags | Tagging |

### 6. Microsite Slides (12 items)
| Field | Notes |
|-------|-------|
| Title | Slide title |
| Subtitle | Slide subtitle |
| Description | Slide body text |
| Asset | Image/video asset |
| URL | Link destination |
| Link Text | Link display text |
| Open Link In New Window | Link behavior |
| CMS Tags | Tagging |

### 7. Navigation Links (25+ items)
| Field | Notes |
|-------|-------|
| Link | Nav item reference |
| Title Override | Override display title |
| Open Link In New Window | Link behavior |
| CMS Tags | Tagging |

### 8. Neighborhood Slides (25+ items)
| Field | Notes |
|-------|-------|
| Select Neighborhood | Neighborhood reference |
| URL | Link destination |
| CMS Tags | Tagging |

### 9. Questions / FAQ (25+ items)
| Field | Notes |
|-------|-------|
| Label | Display label |
| Question | FAQ question text |
| Answer | FAQ answer text |
| Group | Grouping category |
| Answer Link | URL for more info |
| Link text | Link display text |
| Open Link In New Window | Link behavior |
| CMS Tags | Tagging |

### 10. Regions Slides (14 items)
| Field | Notes |
|-------|-------|
| Title | Slide title |
| Select Region | Region reference |
| URL | Link destination |
| Neighborhood | Neighborhood reference |
| CMS Tags | Tagging |

### 11. Resort Slides (25+ items)
| Field | Notes |
|-------|-------|
| Title | Slide title |
| Description | Body text |
| Asset | Image/video asset |
| URL | Link destination |
| URL Link Text | Link display text |
| DTN Ad? | Simpleview DTN advertising flag |
| Listings - single - filter | Listing reference/filter |
| Rich Text Editor | Rich text content |
| CMS Tags | Tagging |

### 12. Slides (25+ items)
| Field | Notes |
|-------|-------|
| Title | Slide title |
| Subtitle | Slide subtitle |
| Description | Body text |
| Asset | Image/video asset |
| URL | Link destination |
| URL Link Text | Link display text |
| Open Link In New Window | Link behavior |
| Is DTN Ad? | Simpleview DTN advertising flag |
| Rich Text Editor | Rich text content |
| Video File URL | Direct video URL |
| Cart bwitemid | **Booking/cart item ID** |
| Cart bwitemtype | **Booking/cart item type** |
| Show persistent cart button in place of link | **Cart integration toggle** |
| CMS Tags | Tagging |

### 13. Social Slides (11 items)
| Field | Notes |
|-------|-------|
| Social Network | Network name (Facebook, Instagram, etc.) |
| URL | Social profile URL |
| CMS Tags | Tagging |

### 14. Staff Departments (25+ items)
| Field | Notes |
|-------|-------|
| Title | Department name |
| Active | Enable/disable |
| CMS Tags | Tagging |

### 15. Vertical Videos (24 items)
| Field | Notes |
|-------|-------|
| Title | Video title |
| Description | Video description |
| Video | Video asset |
| Profile | **Dynamic Content profile for personalization** |
| Link | URL destination |
| Open Link In New Window | Link behavior |
| Display Title? | Toggle title visibility |
| CMS Tags | Tagging |

---

## Public Relations — Blog Post Fields (27 fields)

### Basic
| Field | Notes |
|-------|-------|
| Title | Post title |
| Folder | URL slug |
| Author | Author reference |
| Image | Featured image |
| Document | Attached document |
| Enabled | Publish toggle |

### Custom Fields
| Field | Notes |
|-------|-------|
| Custom - Subtitle | Post subtitle |
| Custom - Teaser | Excerpt/preview text |
| Custom - Featured | Featured flag |
| Custom - Post Type | Content classification |
| Custom - Title Color | Visual styling |
| Custom - Top Link | Promoted link URL |
| Custom - Top Link Text | Promoted link text |
| Custom - events filter | Event cross-reference filter |
| Custom - Listings filter | Listing cross-reference filter |

### Taxonomy
| Field | Notes |
|-------|-------|
| Categories | Blog categories |
| Tags | Blog tags |
| CMS Tags | System-wide tags |

### Personalization
| Field | Notes |
|-------|-------|
| Personas | Visitor persona targeting |

### Publishing
| Field | Notes |
|-------|-------|
| Publish Start Time | Scheduled publish |
| Publish End Time | Auto-unpublish |

### SEO / Social
| Field | Notes |
|-------|-------|
| Meta Title | SEO title |
| Meta Description | SEO description |
| Canonical URL | Canonical reference |
| Open Graph Title | Social sharing title |
| Open Graph Description | Social sharing description |
| Open Graph Image | Social sharing image |

### Key Findings
- Blog posts have **personalization** (Personas field)
- **Cross-reference filters** link posts to Events and Listings
- Posts have both a **pagebuilder** (Edit Content) and standard fields
- **Custom - Featured** flag for promoted content
- **Custom - Post Type** allows content classification within the blog

---

## Public Relations — Articles Post Fields (21 fields)

| Field | Notes |
|-------|-------|
| Title | Post title |
| Folder | URL slug |
| Author | Author reference |
| Image | Featured image |
| Document | Attached document |
| Enabled | Publish toggle |
| Categories | Article categories |
| Tags | Article tags |
| CMS Tags | System-wide tags |
| Personas | Visitor persona targeting |
| Publish Start Time | Scheduled publish |
| Publish End Time | Auto-unpublish |
| Meta Title | SEO title |
| Meta Description | SEO description |
| Canonical URL | Canonical reference |
| Open Graph Title | Social sharing title |
| Open Graph Description | Social sharing description |
| Open Graph Image | Social sharing image |
| Custom - Intro Text | Article introduction/excerpt |
| Custom - Related Link | Related content URL |
| Custom - Related Link Text | Related content link text |

**Differences from Blog Posts:** Articles have Intro Text + Related Link instead of Blog's Featured/Post Type/Subtitle/Teaser/Title Color/Top Link/events filter/Listings filter. Articles are simpler with fewer custom fields.

---

## Public Relations — Articles - Ski City Post Fields (20 fields)

Nearly identical to Articles Posts. Same fields except missing **Custom - Related Link Text**.

---

## Public Relations — Shared Sub-types

### Blog/Articles Author Fields (3)
| Field | Notes |
|-------|-------|
| Name | Author name |
| Description | Author bio |
| Image | Author photo |

### Blog/Articles Category Fields (1)
| Field | Notes |
|-------|-------|
| Title | Category name |

### Blog/Articles Tag Fields (1)
| Field | Notes |
|-------|-------|
| Title | Tag name |

**Note:** Authors, Categories, and Tags have the same structure across Blog, Articles, and Articles - Ski City modules.

---

## Dynamic Content Fields

### Persona Tag Fields (2)
| Field | Notes |
|-------|-------|
| Title | Persona name (e.g., "Winter Activities") |
| Slug | URL-safe identifier |

### Profile Fields (7)
| Field | Notes |
|-------|-------|
| Title | Profile name |
| Visitor Type | Visitor classification |
| Persona Tags | Associated persona interests |
| Countries | Geographic targeting — countries |
| Regions | Geographic targeting — regions |
| Metro Codes | Geographic targeting — metro areas |
| Cities | Geographic targeting — cities |

**Key Finding:** Profiles combine persona interests with geographic targeting. Content can be personalized based on both what visitors are interested in AND where they're from. This is a sophisticated personalization system that needs to be replicated or replaced in the rebuild.

---

## Map Publisher Fields

### Map Fields (4)
| Field | Notes |
|-------|-------|
| Title | Map name |
| Folder | URL slug |
| Enabled | Publish toggle |
| Embed Code | HTML embed code for embedding map elsewhere |

**Note:** Maps also have an "Edit Content" button (map builder interface) separate from these metadata fields. The map builder likely has its own configuration for pins, layers, zoom, and styling.

---

## Auto Responder Fields

**⚠️ MODULE HAS JS ERROR:** Auto Responder consistently triggers `TypeError: Cannot read properties of undefined (reading 'apis')` when navigating to its Content section. Field-level documentation could not be completed. The module may be deprecated or misconfigured.

Known from list view:
- **Content:** 11 items (appear to be action item/task definitions)
- **Links:** 2 items

---

## Visitors Fields

### Access Group Fields (2)
| Field | Notes |
|-------|-------|
| Title | Group name |
| Group ID | Unique identifier |

### User Account Fields (13)
| Field | Notes |
|-------|-------|
| Email | Account identifier/login |
| First Name | Personal info |
| Last Name | Personal info |
| Company Name | Business/organization |
| Street Address | Address line 1 |
| Street Address 2 | Address line 2 |
| City | Address |
| State / Region | Address |
| Zip / Postal Code | Address |
| Country | Address |
| Active | Enable/disable account |
| Access Groups | Permission group assignment |
| Subscriptions | **Email/newsletter subscription management** |

**Key Findings:**
- Full address collection (street, city, state, zip, country) — supports physical visitor guide mail requests
- **Subscriptions** field confirms email marketing integration at the user level
- **Company Name** supports both individual and business visitors
- **Access Groups** enables gated content per visitor group
- One existing account appears to be from a security scanner (SQL injection test data)

---

## Additional Field Findings from Populated Content

### Blog/Articles Posts — Additional observations from viewing populated content:
- **Latitude/Longitude** fields with "FIND COORDINATES" and "CLEAR COORDINATES" buttons — posts can be geo-tagged (not captured in label extraction)
- **Personas** actively used — "Winter Activities" selected on Ski City posts
- **Content** area is a rich text editor with full article body
- Posts have both a **pagebuilder** (Edit Content) AND standard field-based editing

---

## Remaining Content Types to Document

- [ ] Auto Responder — Content fields (blocked by JS error)
- [ ] Auto Responder — Links fields (blocked by JS error)
- [ ] Map Publisher — Map Builder interface (the visual map configuration tool behind "Edit Content")

---

## Cross-Cutting Findings

### Personalization Touchpoints
Personalization (Dynamic Content Profiles / Personas) appears in:
1. Nav Item (page level) — Personas field
2. Hero Slides — Dynamic Content Profile field
3. Vertical Videos — Profile field
4. Blog Posts — Personas field
5. Page Builder — Dynamic Content widgets, Dynamic Profile widgets

### DTN (Digital Tourism Network) Integration
Simpleview's advertising network appears in:
1. Hero Slides — Is DTN Ad? field
2. Resort Slides — DTN Ad? field
3. Slides — Is DTN Ad? field

### Cart/Booking Integration
E-commerce/booking widget integration found in:
1. Slides — Cart bwitemid, Cart bwitemtype, Show persistent cart button
2. Page Builder — Container - Connect Pass Footer Promotion, Container - Ski Super Pass Footer Promotion
3. Page Builder — Custom - Call to Action - Experience Marketplace

### Common Field Patterns
Every Collection Type includes **CMS Tags**. Most include:
- Title (15/15)
- CMS Tags (15/15)
- URL/Link (12/15)
- Open Link In New Window (9/15)
- Description (7/15)
- Asset/Image (6/15)

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-24/)
- `01-sitemap-main-nav-list.png` — Main Navigation page list
- `02-page-things-to-do-content.png` — Page Builder for Things To Do
- `03-page-things-to-do-components.png` — Page Builder scrolled
- `04-page-things-to-do-nav-edit.png` — Nav Item edit form
- `05-collection-alerts-edit.png` — Alerts edit form
- `08-expanding-content-check.png` — Expanding Content list
- `09-ski-city-post-populated.png` — Populated Ski City article post
- `10-ski-city-post-populated-scrolled.png` — Populated post scrolled (geo fields, content)
- `11-blog-author-edit.png` — Blog Author edit form
- `12-persona-tag-edit.png` — Dynamic Content Persona Tag edit
- `13-profile-edit.png` — Dynamic Content Profile edit (geo-targeting fields)
- `14-map-publisher-edit.png` — Map Publisher edit form
- `15-visitor-user-account-edit.png` — Visitor User Account edit form

### Raw Data (docs/marketing-site-research/raw/phase-24/)
- HTML files for every content type edit form (30 files)
- Snapshot files for page builder and list views
- Complete field definitions extractable from HTML for offline analysis
