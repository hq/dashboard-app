# CMS Workflows & Publishing Documentation

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #26

---

## Publishing Workflow Overview

Simpleview CMS uses a **draft-based publishing system** with two levels of version control:

1. **Page Builder Drafts** — Full-page version snapshots with scheduling and notes
2. **Component-level Versioning** — Individual widget/component version tracking with forking capability
3. **Nav Item History** — Audit trail for navigation/metadata changes

---

## Page Statuses

### Nav Item (Page) Statuses
| Status | Description |
|--------|-------------|
| Published | Live on the site, visible to visitors |
| Disabled | Exists in CMS but not visible on the site |

### Page Builder Draft Statuses
| Status | Description |
|--------|-------------|
| Active | Currently published/live version |
| Draft | Saved but not published — work in progress |

### Publishing Controls (Page Builder)
| Button | Action |
|--------|--------|
| **PUBLISH** (green) | Makes the current draft the live version |
| **SAVE DRAFT** (yellow) | Saves current state as a draft without publishing |
| **EXIT** (blue) | Leaves the page builder without saving |

---

## Draft System

### Draft Settings
Each page draft includes:
- **Publish Start** — Date/time picker for scheduled publishing (mm/dd/yy, hour, am/pm) with "Clear" option
- **Draft Notes** — Text field (0/256 characters) for documenting what changed and why

### Page Drafts View
Accessible via dropdown menu > "View Drafts" on any nav item.

**Columns:**
| Column | Description |
|--------|-------------|
| Action | Edit/preview icons |
| Created | Date and time of draft creation |
| Preview | Link to preview this draft version |
| User | Who created the draft |
| Status | Draft or Active |
| Notes | Draft notes explaining the change |
| Publish Start | Scheduled publish date (if set) |
| Expires | Expiration date (if set) |

**Filters:**
- Keyword search
- Was Active (dropdown)
- Scheduled (dropdown)

### Draft Volume Example
- Events page: **134 drafts** (Showing 1-25 of 134, paginated)
- Multiple users creating drafts: Jackson Ogles, Spicer Lear, Kimberly Dailey, and others
- Draft notes examples:
  - "Remove the welsh party as featured event"
  - "Scheduled draft for after summer"
  - "approved by Max. Pushing live"
  - "draft for summit option 1"
  - "Updates blog posts for after New Years"
  - "remove Independence Day blog"
  - "update blog posts"
  - "reset blog posts"
  - "Add sidebar of featured to the events marquee"
  - "add related content widget w/relevant blogs. Test out old blog widget"
  - "Check total number of events allowed on featured events – change to 5 for widget update"

### Key Draft Findings
- Every save creates a **new draft** — full version history is preserved
- Drafts support **scheduled publishing** (Publish Start date)
- Drafts can **expire** (Expires date)
- **Preview** available for each draft before publishing
- **Notes are actively used** — team documents reasons for changes
- **Collaborative editing** — multiple team members create drafts on the same page

---

## Component-Level Versioning

The Page Builder tracks versions at the **individual widget/component level**, not just the page level.

### Version Data Per Component
Each component stores:
- `version_id_string` — unique version identifier
- `user_id` — who made the change (e.g., "sv-mjonker", "F3297980-8C1B-4214-9E5E-70009D54A73B", "sv-marmand")
- `created` — timestamp of version creation
- `data` — the actual component content/configuration
- `onTrunk` — whether this is the main/trunk version (boolean)

### Forking
- Components can be **forked** from the primary version
- Indicated by "Forked: Not using primary version" in the UI
- Allows page-specific component variations without affecting other pages that use the same saved widget

### Version History Span
- Component versions observed from 2022-02-03 to 2026-02-18
- Multiple Simpleview staff (sv-*) and Visit Salt Lake staff editing over time

---

## Item History (Audit Trail)

Accessible via dropdown menu > "History" on any nav item.

### History View
| Column | Description |
|--------|-------------|
| User Name | Who performed the action |
| Date | When the action occurred |
| Activity | Type of action (e.g., Modify) |

### Filters
- User Name (dropdown, "All")
- Activity type (dropdown, "All")

### History Example (Events page)
| User | Date | Activity |
|------|------|----------|
| Samantha Hill | May 4, 2022 2:46 PM | Modify |
| Samantha Hill | June 20, 2018 2:58 PM | Modify |
| Samantha Hill | June 7, 2018 12:46 PM | Modify |
| SV Amir Muntasser | April 5, 2018 4:16 PM | Modify |
| SV Justin Booth | February 26, 2018 10:06 AM | Modify |

### Key History Findings
- **Audit trail preserved since 2018** — long-term history
- Activity types include at minimum: **Modify** (likely also Create, Delete, Publish)
- **Simpleview staff access tracked** ("SV" prefix users — vendor support)
- Separate from Page Builder drafts — this tracks nav item metadata changes

---

## Page Action Menu

Each page in the sitemap has a dropdown menu with workflow actions:

| Action | Description |
|--------|-------------|
| **View Children (N)** | Navigate to child pages (shows count) |
| **View Drafts** | Opens the drafts management view |
| **Reassign Item** | Move/reassign content to different section or owner |
| **History** | Opens the audit trail view |

---

## Publishing Options on Nav Items

From Task 24 documentation, each nav item has these publishing-related fields:

| Field | Description |
|-------|-------------|
| Active | Master enable/disable toggle |
| Publish Start | Scheduled publish date/time |
| Publish End | Scheduled unpublish date/time |
| Show in Navigation | Whether page appears in nav menus |
| Show in Search | Whether page appears in search results |
| Open in New Window | Link behavior for navigation |
| Publish as AMP | Enable AMP version of the page |

---

## Blog/Articles Publishing

Blog and Article posts have their own publishing controls:

| Field | Description |
|-------|-------------|
| Enabled | Publish toggle |
| Publish Start Time | Scheduled publish date/time |
| Publish End Time | Scheduled unpublish date/time |

Status visible in list view: Published, Draft, Disabled

---

## Translation/Internationalization Workflow

From the HTML data, the translation widget is configured with:

- **Source language:** English (en)
- **Target languages:** 8 total
  - English (en)
  - Spanish (es)
  - French (fr)
  - German (de)
  - Dutch (nl)
  - Korean (ko)
  - Portuguese (pt)
  - Chinese Simplified (zh-CN)
- **Widget type:** Floating globe widget
- **Position:** Left bottom
- **Features:** Native language names, auto-detect browser language disabled

**Note:** This is a client-side translation widget (likely Google Translate or similar), not a full CMS-level translation system with separate translated content. The CMS has a "Locale" field per nav item and "Translation > Static Namespaces" for UI strings.

---

## Rebuild Implications

### Must-Have Workflow Features
1. **Draft system** — Save work without publishing, with notes and scheduling
2. **Preview** — View draft versions before publishing
3. **Scheduled publishing** — Publish Start and Publish End dates
4. **Version history** — Full audit trail of who changed what and when
5. **Multi-user collaboration** — Multiple users editing the same pages
6. **Component-level versioning** — Individual widget version tracking

### Nice-to-Have (Current Features That May Be Simplified)
1. **Component forking** — Complex feature, may not be needed in new platform
2. **Draft expiration** — Drafts that auto-expire
3. **Reassign Item** — Moving pages between sections
4. **AMP publishing** — AMP support (declining in relevance)

### Translation Approach
- Current: Client-side translation widget (8 languages)
- Consider: Whether the rebuild should use the same approach or invest in proper CMS-level i18n
- The CMS has Locale field and Static Namespaces — partial i18n infrastructure exists

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-26/)
- `01-events-pagebuilder-workflow.png` — Page Builder with PUBLISH/SAVE DRAFT/EXIT buttons, Draft Settings
- `02-events-revision-history.png` — Revision History section (collapsed)
- `03-events-revision-expanded.png` — Revision History expanded ("Current Draft")
- `04-events-revision-detail.png` — Revision History detail
- `05-events-dropdown-menu.png` — Page action dropdown (View Children, View Drafts, Reassign, History)
- `06-events-view-drafts.png` — Page Drafts view (134 drafts, showing columns and filters)
- `07-events-history.png` — Item History audit trail

### Raw Data (docs/marketing-site-research/raw/phase-26/)
- `01-events-pagebuilder-snapshot.txt` — Page Builder accessibility snapshot
- `01-events-pagebuilder.html` — Page Builder full HTML (contains component version data)
- `02-events-view-drafts-snapshot.txt` — View Drafts snapshot
- `02-events-view-drafts.html` — View Drafts full HTML
- `03-events-history-snapshot.txt` — Item History snapshot
