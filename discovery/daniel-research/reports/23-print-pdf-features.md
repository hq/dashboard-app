# Print/PDF Features Inventory

**Date:** 2026-03-24
**Task:** #23

---

## Overview

The site has a **comprehensive print stylesheet** (160 lines) that hides non-essential elements for printing, but **no dedicated print buttons or on-demand PDF generation**. Downloadable content consists of externally-hosted PDFs (visitor guides, policy documents) linked from specific pages. The trip builder may have print/export capability, but no explicit print UI was found.

---

## 1. Print Stylesheet

**File:** `shared_print.css` (160 lines)
**URL:** `https://www.visitsaltlake.com/includes/public/managed/v_d47b3c8f_e260d78a/core/plugins/common/virtuals/css/shared_print.css`
**Media:** `all` (not `print` — uses `@media print` block inside)

### Page Setup
```css
@page {
    size: letter landscape;
    margin: 0.5cm;
}
```

### Elements Hidden in Print

| Category | Elements Hidden |
|----------|----------------|
| **Navigation** | Header, footer, top-bar, side navigation, breadcrumbs |
| **Interactive** | Search tools, filters, pagination, load more, tabs, settings |
| **Media** | Slideshows, hero images, image boxes, maps, iframes, play buttons |
| **Social** | Social links, share buttons, AddThis widgets |
| **Admin** | Admin bar, CMS edit overlays |
| **Blog** | Search form, paging buttons, post actions, download buttons, comments |
| **Listings** | Item images, bottom actions, pager section |
| **System** | Cookie banner, RSS links, coupon buttons, nearby sections |

### Elements Styled for Print

| Element | Print Style |
|---------|------------|
| Body | Remove overflow hidden |
| Links | Show URL after link text (`content: " (" attr(href) ")"`) |
| Page content | Full width, no margins |
| Images | `max-width: 100%` |
| Listing items | Border-bottom separator, inline layout |
| Blog posts | Full width, visible content |
| Detail pages | Panel content visible, detail panes full width |

### Key Print Behaviors
- **Landscape orientation** on letter-size paper
- **URLs printed** alongside link text for reference
- **Maps hidden** — no interactive content in print
- **All navigation stripped** — clean content-only output
- **Listing results** simplified to text-only list format
- **Detail page tabs** hidden — all content sections may be visible

---

## 2. Downloadable PDFs

### Visitor Guides Page (`/plan-your-visit/free-visitors-guide/`)

| Document | Source | URL |
|----------|--------|-----|
| **Utah Travel Guide** | Visit Utah (external) | `visitutahkenticostaging.blob.core.windows.net/.../utah2022-travel-guide.pdf` |
| **Utah's Travel Guide for People with Disabilities** | Simpleview CDN | `assets.simpleviewinc.com/.../UtahDevelopmentalDisabilitiesTravelGuide_*.pdf` |

**Notes:**
- The Utah Travel Guide links to Visit Utah's Kentico staging blob storage (not Visit Salt Lake's own CDN)
- A physical guide can be requested via link to `visitutah.com/plan-your-trip/utah-travel-guide/`
- No Visit Salt Lake-branded visitor guide PDF was found — the guide appears to be a **physical mail request** via CRM form (frm_54), not a digital download
- "View the latest guide online" links back to the same page (no digital flipbook or PDF viewer)

### Policies & Disclosures (`/about-us/our-policies-disclosures/`)

| Document | URL |
|----------|-----|
| Conflict of Interest Policy | `assets.simpleviewinc.com/.../1_6_VSL_Conflict_of_Interest_Policy_*.pdf` |
| Whistle Blower Policy | `assets.simpleviewinc.com/.../4_4_Whistleblower_Policy_002__*.pdf` |
| Consumer Privacy Policy (Download) | `assets.simpleviewinc.com/.../6_6_Consumer_Privacy_Policy_*.pdf` |
| Salt Lake County CTAA Management Plan | `assets.simpleviewinc.com/.../CTAA_Management_Plan_6_5_23_*.pdf` |

### Other Known Documents (from CMS Asset Library — Task 28)
- **590 documents** in CMS Asset Library (PDFs, DOCs, PPTs, Excel, EPS)
- Categories: Doc, EPS, Job Posting, PDF, PPT, xlsx
- Recent example: "2026 Legislative Report - Week 6"
- Many linked via CMS redirects (Annual Plan PDFs, etc.)

### Sub-pages with Additional PDFs

| Page | Documents |
|------|-----------|
| `/about-us/our-policies-disclosures/990-non-profit-tax-forms/` | 990 tax form PDFs (annual) |
| `/about-us/our-policies-disclosures/audited-financial-statements/` | Audited financial statement PDFs (annual) |
| `/meetings/` section | Meeting planner guide (physical request, not PDF download) |

---

## 3. Print Buttons & On-Demand PDF Generation

### Print Buttons
**None found.** No explicit "Print this page" or "Print" buttons were discovered on any page type tested (homepage, listing detail, event detail, blog post, trip planner area, meetings pages).

### On-Demand PDF Generation
**None found.** No server-side or client-side PDF generation was detected. No libraries like jsPDF, html2pdf, Puppeteer, or wkhtmltopdf are loaded.

### Trip Builder Print/Export
The Trip Builder (documented in Task 20) may have print or export functionality based on:
- Translation namespace `translations.static.tripbuilder` likely contains print/export strings
- The `shared_print.css` stylesheet would format trip builder output for printing
- No explicit print button was visible, but Ctrl+P with the print stylesheet would produce clean output

---

## 4. Meeting Planner Guide

**Page:** `/meetings/contact/meeting-planner-guide/`
**Form:** `frm_54` (CRM Form Builder)
**Type:** Physical mail request (name, email, zip, country) — NOT a PDF download

The meeting planner guide appears to be a **printed physical guide** mailed to meeting planners upon form submission, not a downloadable PDF. The form collects mailing address information (zip, country) and opts into email communications.

---

## 5. Rebuild Implications

### Must Carry Over
1. **Print stylesheet** — comprehensive `@media print` rules for clean printing across all page types
2. **PDF hosting** — policy documents and guides need migration to new CDN
3. **Visitor guide request flow** — CRM form for physical guide requests

### Consider Adding in Rebuild
1. **Print buttons** — explicit "Print this page" on listing details, event details, trip planner
2. **PDF export for trip planner** — generate downloadable PDF of saved itinerary
3. **Digital visitor guide** — flipbook or interactive PDF viewer (currently only physical)
4. **Share as PDF** — allow visitors to save/share pages as PDF

### Low Priority
- On-demand PDF generation (no current usage)
- Printable maps (current maps are hidden in print)

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-23/)
- `01-visitors-guide.png` — Visitors Guide page with download links

### Raw Data (docs/marketing-site-research/raw/phase-23/)
- `shared_print.css` — Complete print stylesheet (160 lines)
