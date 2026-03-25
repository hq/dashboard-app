# CMS Media Library Documentation

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #28

---

## Asset Library Overview

| Asset Type | Count | View Mode | Categories |
|-----------|-------|-----------|------------|
| Documents | 590 | List/Table | 6 (by file type) |
| External Links | 68 | List/Table | — |
| Images | 3,110 | Grid + List | 63 categories |
| Videos | 136 | List/Table | 7 categories |

**Total assets: 3,904**

**CORRECTION from Discovery Scan:** Images were initially reported as 0 because the Grid view doesn't render table rows. Actual count is **3,110 images** — a substantial media library.

---

## Images (3,110 items)

### View Options
- **Grid view** — Thumbnail grid with image titles (default)
- **List view** — Table format
- **Sort options:** Title asc/desc, Created asc/desc

### Image Fields (12)
| Field | Type | Notes |
|-------|------|-------|
| Title | Text | Image title/name |
| Alternative Text | Text | Alt text for accessibility (important for ADA compliance) |
| File | File upload | The actual image file |
| Default Image | Boolean | Primary image designation |
| Credits | Text | Photo credit/attribution |
| Location | Reference | Geographic location |
| Image Categories | Multi-select | Category assignment (63 categories available) |
| CMS Tags | Multi-select | System-wide tags |
| Internal Notes | Text | Staff-only notes |
| Administrator Notes | Text | Admin-level notes (higher permission level) |
| Use Information | Text | Usage rights/licensing information |
| Expires | Date | Image expiration date |

### Image Context Menu Actions
| Action | Description |
|--------|-------------|
| Edit | Open image edit form |
| Clone | Duplicate the image record |
| Archive | Move to archive |
| Where is this used? | **Shows all pages/content referencing this image** |
| History | Version/change history |

### Image Filters
| Filter | Type | Notes |
|--------|------|-------|
| Keyword | Text search | Search by title/tags |
| Asset Exists? | Drag/Drop or Browse | Check if file exists |
| Size | Dropdown | Small (<400px), Medium (400-999px), Large (>1000px) |
| Category | Dropdown | 63 image categories |
| CMS Tags | Tag selector | Filter by CMS tags |
| Expiration Date | Date range | From/To date filter |
| Expired | Dropdown | Yes/No |
| Archived | Dropdown | Yes/No |
| Create Advanced... | Link | Advanced filter builder |

### Image Hosting
- Images are hosted on **Simpleview's CDN**: `assets.simpleviewinc.com/simpleview/image/upload/`
- **Cloudinary-style image transforms** in URLs: `c_fill,h_XX,q_XX,w_XX`
- Client path: `/v1/clients/saltlake/` or `/v1/clients/saltlake-redesign/`
- Supports dynamic resizing, quality adjustment, and crop modes

### Key Image Findings
- **Rights management:** Credits, Use Information fields for photo attribution and licensing
- **Asset tracking:** "Where is this used?" feature tracks image references across the site
- **Lifecycle management:** Expiration dates, Archive capability
- **Dual notes:** Internal Notes (staff) vs Administrator Notes (admin-only)
- **3,110 images** is a significant migration volume
- **63 categories** for organization (some marked for cleanup)

---

## Documents (590 items)

### Document Fields (5)
| Field | Type | Notes |
|-------|------|-------|
| Title | Text | Document title |
| File | File upload | The document file |
| Document Categories | Multi-select | 6 categories (Doc, EPS, Job Posting, PDF, PPT, xlsx) |
| Internal Notes | Text | Staff notes |
| CMS Tags | Multi-select | System-wide tags |

### Document List Columns
Action, Thumbnail, Title, Created, Internal Notes

### Key Document Findings
- **590 documents** — mostly PDFs (legislative reports, annual plans, etc.)
- Categories organized by **file type** not content topic
- First item: "2026 Legislative Report - Week 6" (recently updated)
- Redirects reference some documents: Annual Plan PDFs hosted on `assets.simpleviewinc.com`

---

## External Links (68 items)

### External Link Fields (4)
| Field | Type | Notes |
|-------|------|-------|
| Title | Text | Link title |
| Url | URL | External URL |
| Internal Notes | Text | Staff notes |
| CMS Tags | Multi-select | System-wide tags |

### Key External Link Findings
- **68 external links** — referenced across the site as reusable link objects
- Used in content types like Expanding Content ("Asset Library - External Link: AI Compass Open link")
- Allows centralized management of external URLs — update once, reflects everywhere

---

## Videos (136 items)

### Video Fields (8)
| Field | Type | Notes |
|-------|------|-------|
| Title | Text | Video title |
| Video URL | URL | Link to video (YouTube, Vimeo, etc.) |
| Video Import | Import tool | Import from external source |
| Thumbnail | Image | Video thumbnail/poster image |
| Credits | Text | Video credit/attribution |
| Video Categories | Multi-select | 7 categories |
| Internal Notes | Text | Staff notes |
| CMS Tags | Multi-select | System-wide tags |

### Video List Columns
Action, Thumbnail, Title, Video Type, Created

### Key Video Findings
- **136 videos** — managed as URL references (not hosted in CMS)
- **Video Import** tool suggests ability to import from external video platforms
- **Video Type** column in list view — different video sources/types supported
- **Credits** field — attribution tracking like images
- **7 categories:** Meetings & Conventions, Neighborhoods, Ski City, Sponsored Blog, Sports Salt Lake, Summit, Visit Salt Lake

---

## Media Migration Implications

### Volume
| Type | Count | Migration Approach |
|------|-------|--------------------|
| Images | 3,110 | Need to export from Simpleview CDN — URL-based, can be batch downloaded |
| Documents | 590 | Export file references — hosted on Simpleview CDN |
| Videos | 136 | URL references to external platforms — migrate URLs, not files |
| External Links | 68 | Simple URL list export |

### Critical Considerations
1. **Image CDN migration** — 3,110 images currently hosted on `assets.simpleviewinc.com` with Cloudinary transforms. New platform needs equivalent image processing pipeline.
2. **Image metadata** — Alt text, credits, use information, categories, and tags must be preserved for accessibility and rights management.
3. **"Where is this used?"** — The cross-reference system tells us which images are actively used. Can prioritize migration of referenced images.
4. **Document hosting** — 590 documents need new hosting with proper URL redirects.
5. **Video URLs** — 136 videos are external references, minimal migration effort for the actual content but video categories/metadata need migration.
6. **Archived/Expired assets** — Need to decide whether to migrate archived and expired items or only active ones.

### DAM Features to Replicate
- Grid + List view toggle
- Image size filtering (Small/Medium/Large)
- Category-based organization
- CMS Tags integration
- Expiration/Archive lifecycle
- "Where is this used?" cross-reference tracking
- Credits/Use Information for rights management
- Cloudinary-style image transforms in URLs

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-28/)
- `01-assets-documents.png` — Documents list (590 items)
- `02-assets-images.png` — Images grid view (3,110 items)
- `03-asset-image-edit.png` — Image context menu (Edit, Clone, Archive, Where used, History)
- `04-asset-image-edit-form.png` — Image edit form with all fields
- `05-assets-videos.png` — Videos list (136 items)

### Raw Data (docs/marketing-site-research/raw/phase-28/)
- HTML files for Documents list, External Links list, Images list, Videos list
- HTML files for Document edit, External Link edit, Image edit, Video edit forms
