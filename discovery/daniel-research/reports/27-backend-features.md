# Backend Features Catch-All Inventory

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #30

---

## Overview

This document covers backend features not fully documented in Tasks 24-29, including layouts/templates, translation system, field builder, task management, and other settings.

---

## Layouts / Template Management

**Location:** Settings > Sites > Primary > Layouts
**Total:** 11 layouts (all Active)

| # | Layout Name | Created | Purpose |
|---|------------|---------|---------|
| 1 | Ski Section Page | 02/21/2022 | Ski/winter content pages |
| 2 | Meetings Microsite | 02/21/2022 | Meetings microsite pages |
| 3 | Microsite - General | 02/21/2022 | General microsite template (79 convention microsites) |
| 4 | Sports | 02/21/2022 | Sports commission pages |
| 5 | Footer Nav - Content | 02/02/2022 | Footer navigation content pages (About, Contact, etc.) |
| 6 | Secondary Nav - Listings | 02/02/2022 | Secondary nav listing pages (Meetings, Travel Trade, etc.) |
| 7 | Secondary Nav - Content | 02/02/2022 | Secondary nav content pages |
| 8 | Main Nav - Events | 02/02/2022 | Events section pages |
| 9 | Main Nav - Listings | 02/02/2022 | Listing section pages (Restaurants, Places to Stay, etc.) |
| 10 | Default - REDESIGN - Blank | 11/29/2021 | Default blank template (redesign version) |
| 11 | Main Nav - Content | 01/23/2018 | Main nav content pages (oldest template) |

### Layout Fields
| Field | Notes |
|-------|-------|
| Name | Layout title |
| Active | Enable/disable toggle |

### Layout Structure
- Each layout has an "Edit Content" button that opens a **Page Builder** interface
- The Page Builder defines the page structure: header, footer, navigation, content sections, widgets
- Layouts are assigned to nav items to determine which template a page uses
- Layouts define the reusable structure; Page Builder content provides the specific widgets/components

### Rebuild Implications
- **11 distinct page templates** need to be rebuilt
- Templates range from general (Default Blank) to highly specific (Ski Section, Sports, Meetings)
- Template assignment is per-page via the nav item settings
- The "REDESIGN" suffix on Default template suggests a prior redesign effort

---

## Translation System

**Location:** Settings > Translation > Static Namespaces
**Total:** 10 namespaces

### Static Namespace Fields
| Field | Type | Notes |
|-------|------|-------|
| Title | Text | Namespace display name |
| Slug | Text | URL-safe identifier (cannot be changed after creation) |
| Context | Rich text with language tabs | Context notes for translators — has tabs for multiple languages |
| Fields | JSON | Array of translatable string definitions |

### Namespace "Common" Example
**Fields are defined as JSON** with entries like:
```json
{"label": "Back Button Label", ...}
{"label": "Top List", ...}
{"label": "Top of List Label", ...}
{"label": "Back to Top of List", ...}
{"label": "Track_Me_Dst", ...}
```

### How Translation Works
1. **Static Namespaces** define translatable UI strings (buttons, labels, navigation text)
2. **Context field** has language tabs — appears to support Chinese and Spanish at minimum
3. **Fields** are JSON-formatted key-value pairs defining each translatable string
4. The **translation widget** (documented in Task 26/27) handles runtime translation with 8 languages

### Translation System Summary
| Component | Details |
|-----------|---------|
| Static Namespaces | 10 namespaces with JSON field definitions |
| Supported languages | en, es, fr, de, nl, ko, pt, zh-CN (8 languages) |
| UI strings | Defined per namespace (Common, Events, Listings, Offers, Search, Trip Builder, Media Gallery, Trails, Layout/Detail, Public Relations) |
| Runtime translation | Floating globe widget (client-side) |
| Page-level locale | Locale field on nav items |

---

## Field Builder

**Location:** Settings > Field Builder
**Total:** 5 sub-sections

| Section | Custom Fields | Notes |
|---------|--------------|-------|
| Asset Library - Documents | 0 | No custom fields — uses defaults |
| Asset Library - External Links | 0 | No custom fields — uses defaults |
| Asset Library - Images | 0 | No custom fields — uses defaults |
| Asset Library - Videos | 0 | No custom fields — uses defaults |
| Core - Textbox | 1 | "Use Intro Styles" (On/Off Switch, default: No) |

### Key Finding
Field Builder is minimally used — only one custom field exists across the entire CMS. The "Use Intro Styles" toggle on textbox widgets controls whether intro text styling is applied. Most field customization is done through the Collection Types and content type configurations, not the Field Builder.

---

## Task Management System

**Location:** Settings > Tasks > Categories
**Total:** 3 categories

| Category | Notes |
|----------|-------|
| Page updates | Content update tasks |
| test | Test category |
| Update | General update tasks |

The CMS has a built-in task management system (visible on the dashboard with task counts). Tasks are assigned to users and categorized. During our session, the task count ranged from 34 to 121 active tasks.

---

## Auto Responder (Email Automation)

**Location:** Modules > Auto Responder
**Status:** ⚠️ Module has persistent JavaScript error

### Content Section
- 11 items visible (same as dashboard Action Items)
- Items appear to be automated task/notification definitions:
  - Events - Without an Image (154)
  - Events - Without Geocoding (1)
  - Listings - Without Geocoding (3)
  - Listings - Without Media (3,728)
  - Map Publisher - Maps with Autosaved Drafts Expiring Soon (3)
  - Public Relations - Articles - Ski City - Unpublished Posts (1,030)
  - Public Relations - Articles - Unpublished Posts (1,228)
  - Public Relations - Blog - Unpublished Posts (4)
  - Public Relations - The Salt Lake Scene - Posts with Autosaved Drafts Expiring Soon (4)
  - Sitemap - Pages with Autosaved Drafts Expiring Soon (196)
  - Sitemap - Primary - Unpublished Pages

### Links Section
- 2 items

### Error
`TypeError: Cannot read properties of undefined (reading 'apis')` — triggers intermittently when navigating to Content section. May be deprecated or misconfigured.

---

## Redirect Management

**Location:** Settings > Sites > Primary > Redirects
**Total:** 9,156 redirects (documented in detail in Task 27)

---

## Code Editor

**Location:** Settings > Sites > Primary > Code Editor
**Status:** Empty — no custom code items created (documented in Task 27)

---

## Import Nav Items

**Location:** Settings > Sites > Primary > Import Nav Items
**Purpose:** Tool for importing navigation items in bulk
**Status:** Not explored in detail — available as a management tool

---

## Nav Tags

**Location:** Settings > Nav > Nav Tags
**Status:** Empty — 0 tags (documented in Task 25)

---

## Tag Manager

**Location:** Settings > Tag Manager
**Status:** Empty — 0 tag groups (documented in Task 25)

---

## Summary of All Backend Features

| Feature | Location | Status | Items | Documented In |
|---------|----------|--------|-------|---------------|
| Content Types (15 Collection Types) | Modules > Collection Types | Active | ~250+ items | Task 24 |
| Public Relations (3 modules) | Modules > Public Relations | Active | 1000+ posts | Task 24 |
| Dynamic Content (Personalization) | Modules > Dynamic Content | Active | 7 personas, 7 profiles | Task 24 |
| Map Publisher | Modules > Map Publisher | Active | 6 maps | Task 24 |
| Auto Responder | Modules > Auto Responder | ⚠️ JS Error | 11+2 items | Task 30 (this) |
| Visitors (Accounts) | Modules > Visitors | Minimal use | 1 account, 1 group | Task 24, 29 |
| User Roles | Settings > Users | Active | 9 roles, 25+ users | Task 9 |
| CMS Tags | Settings > CMS Tags | Active | 1,432 tags | Task 25 |
| Image Categories | Settings > Assets | Active | 63 categories | Task 25 |
| Video Categories | Settings > Assets | Active | 7 categories | Task 25 |
| Document Categories | Settings > Assets | Active | 6 categories | Task 25 |
| Layouts/Templates | Settings > Sites > Primary > Layouts | Active | 11 layouts | Task 30 (this) |
| Redirects | Settings > Sites > Primary > Redirects | Active | 9,156 redirects | Task 27 |
| Code Editor | Settings > Sites > Primary > Code Editor | Empty | 0 items | Task 27 |
| Import Nav Items | Settings > Sites > Primary | Available | Tool | Task 30 (this) |
| Field Builder | Settings > Field Builder | Minimal | 1 custom field | Task 30 (this) |
| Translation | Settings > Translation > Static Namespaces | Active | 10 namespaces, 8 languages | Task 30 (this) |
| Nav Tags | Settings > Nav | Empty | 0 tags | Task 25 |
| Tag Manager | Settings > Tag Manager | Empty | 0 groups | Task 25 |
| Task Categories | Settings > Tasks | Active | 3 categories | Task 30 (this) |
| Asset Library | Assets | Active | 3,904 total assets | Task 28 |
| Sitemap (10 sections) | Sitemap > Primary | Active | 157+ pages | Task 34 |
| Workflows/Publishing | Page Builder | Active | Draft system, 134+ drafts/page | Task 26 |
| Partner Portal | Members section + CRM | Active | CRM-managed | Task 29 |

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-30/)
- `01-layouts.png` — Layouts list (11 templates)
- `02-layout-edit.png` — Layout edit form (Name, Active fields)
- `03-static-namespaces.png` — Static Namespaces list (10 namespaces)
- `04-namespace-common-edit.png` — Common namespace edit showing Context tabs and JSON Fields
- `05-field-builder-images.png` — Field Builder Images (empty)

### Raw Data (docs/marketing-site-research/raw/phase-30/)
- HTML and snapshot files for Layouts, Static Namespaces, Field Builder, namespace edit forms
