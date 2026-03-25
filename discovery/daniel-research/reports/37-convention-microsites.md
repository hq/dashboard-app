# Convention Microsites Template & Pattern Documentation

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #37

---

## Overview

The CMS contains **79 microsites** in the Sitemap > Primary > Microsites section. The majority are **convention/event welcome pages** that follow a standardized template, with a few non-standard microsites for other purposes.

**CMS Layout:** "Microsite - General" template (one of 11 backend layouts)
**All 79 on one page** — no pagination needed

---

## Microsite Categories

### Standard Convention Welcome Pages (~70 items)
Pattern: "Salt Lake Welcomes [Convention Name] [Year]"
- These are templated landing pages created for specific conventions visiting Salt Lake
- Each has the convention's logo/branding alongside Visit Salt Lake branding
- Examples: WMIC 2026 Annual Global Meeting, JJWRRC 2026, Correctional Peace Officers Foundation Project 2000 2026

### Non-Standard Microsites (~9 items)
| Title | Folder | Status | Notes |
|-------|--------|--------|-------|
| Archived Microsites | archived-microsites | Disabled | Collection of past microsites |
| Test Microsite | test-microsite | Published | Testing template |
| Welcome to Salt Lake | welcome-to-salt-lake | Published | General welcome (not convention-specific) |
| Influencer Information | influencer | Published | **Influencer outreach — has CRM form** |
| Summit | summit | Published (not in nav) | Summit/conference page |
| Salt Palace Construction Updates | saltpalaceupdates | Disabled | Construction info (temporary) |
| Temple Square Open House | temple-square-2027 | Disabled | Future event (2027) |

---

## Template Analysis

### Standard Convention Template (WMIC 2026 sample)

**URL pattern:** `visitsaltlake.com/[convention-slug]/`

**Page structure:**
1. **Header** — Custom microsite navigation bar
2. **Hero** — Salt Lake cityscape with "WELCOME TO SALT LAKE" heading + convention logo
3. **Welcome content** — Two-column layout with text and convention-specific information
4. **"A few things we think you might enjoy"** — Cards section with curated content recommendations
5. **Hospitality section** — Marquee/side-by-side content
6. **Social container** — Social sharing links
7. **Embed** — Embedded content (possibly map or external widget)
8. **Footer** — Standard site footer

**Widgets used (16):**
- Hero: header slides, hero image with caption, hero callout
- Content: textbox, two-column, container, embed
- Collections: cards, marquee side-by-side, navigation links, slides
- Social: social container, social slides/links

### General Welcome Template (Welcome to Salt Lake sample)

Nearly identical to convention template but without:
- Convention-specific logo
- Two-column layout
- Container widget

**14 widgets** — slightly simpler version of same template.

### Influencer Template

Significantly different — simpler, form-focused:

**Widgets used (8):**
- Hero: header slides, hero image, hero callout
- Content: textbox
- Social: social slides/links
- **CRM Form Builder** — `plugins_crm_formbuilder` — **Simpleview CRM embedded form**

**Key finding:** The Influencer page uses a **CRM Form Builder widget** — this is a Simpleview CRM-powered form embedded directly on the page. This widget type was not seen on other pages and may be used for influencer applications/outreach.

---

## Widget Comparison

| Widget | Convention | Welcome | Influencer |
|--------|-----------|---------|------------|
| Hero image with caption | Yes | Yes | No |
| Hero image (standard) | No | No | Yes |
| Hero callout | Yes | Yes | Yes |
| Cards | Yes | Yes | No |
| Marquee side-by-side | Yes | Yes | No |
| Navigation links | Yes | Yes | No |
| Slides | Yes | Yes | No |
| Two-column | Yes | No | No |
| Container | Yes | No | No |
| Embed | Yes | Yes | No |
| Social container | Yes | Yes | No |
| Textbox | Yes | Yes | Yes |
| **CRM Form Builder** | No | No | **Yes** |

---

## New Widget Discovery

### CRM Form Builder (`plugins_crm_formbuilder`)
- **First sighting** in our research — not seen on any other page type
- Embeds a Simpleview CRM form directly on the page
- Found on the Influencer Information microsite
- Likely used for: influencer applications, data collection, lead capture
- **May also be used** on other pages we haven't fully analyzed (RFP forms, contact forms)
- **Rebuild implication:** Need to understand how CRM forms work, what fields they collect, where data goes

---

## Microsite Creation Pattern

Based on the CMS structure:

1. **Admin creates a new page** in Sitemap > Primary > Microsites
2. **Selects "Microsite - General" layout** (the template)
3. **Opens Page Builder** to customize content:
   - Sets convention logo/branding in hero
   - Customizes welcome text
   - Selects cards/content for "things to enjoy" section
   - Configures navigation links
4. **Publishes** the microsite at `visitsaltlake.com/[folder-slug]/`

This is a **repeatable template** — each convention gets the same structure with customized content. The rebuild needs to support this pattern of quickly creating convention-specific landing pages.

---

## Rebuild Implications

### Template Requirements
- **1 standard microsite template** that can be reused for each convention
- Convention logo/branding area in hero section
- Customizable content sections (cards, text, embeds)
- Consistent navigation and footer

### Volume
- **79 existing microsites** (many may be archived/expired conventions)
- New microsites created regularly as conventions book Salt Lake
- Template must be **easy for non-technical staff** to replicate

### CRM Integration
- CRM Form Builder widget on Influencer page
- Convention microsites may link to CRM-managed event data
- Need to understand if microsites pull any data from CRM

### Migration Decisions
- How many of the 79 microsites are still active/relevant?
- Should expired convention microsites be migrated or archived?
- The Influencer page and other non-standard microsites need individual attention

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-37/)
- `01-microsites-list.png` — CMS Microsites list (79 items)
- `02-microsite-wmic2026.png` — WMIC 2026 convention microsite (standard template)
- `03-microsite-welcome.png` — Welcome to Salt Lake (general template)
- `04-microsite-influencer.png` — Influencer Information (form-focused template)

### Raw Data (docs/marketing-site-research/raw/phase-37/)
- `01-microsites-list.html` — CMS Microsites list HTML
- `02-microsite-wmic2026.html` — WMIC 2026 full page HTML
- `03-microsite-welcome.html` — Welcome to Salt Lake full page HTML
- `04-microsite-influencer.html` — Influencer full page HTML (contains CRM form builder)
