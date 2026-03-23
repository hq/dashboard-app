# Visit Salt Lake — Rebuild Proposal Tool

## What this is

This repo is an **estimate builder** used to create a client-facing proposal for rebuilding [visitsaltlake.com](https://www.visitsaltlake.com). The app has three steps:

1. **Capture** (`/`) — Upload video walkthroughs of the current site, capture screenshots frame-by-frame
2. **Estimate** (`/estimate`) — Annotate screenshots with bounding boxes, label features, assign hours (Design / Frontend / Backend)
3. **Proposal** (`/proposal`) — Auto-generated proposal document with scenario comparisons, sitemap, timeline, and cost breakdown

## The client

**Visit Salt Lake** is a destination marketing organization (DMO). Their current website runs on **Simpleview CMS**, a tourism-specific platform with content types for events, listings (hotels, restaurants, attractions), itineraries, neighborhoods, etc.

## The project

We're proposing a full rebuild of both the **front-end website** and the **CMS/backend**. Target launch: **end of 2026**.

**Two-phase proposal approach:**
- **Phase 1** (current): High-level overview that builds client confidence — demonstrates we understand the site, shows scope and timeline, documents assumptions. Not a final commitment.
- **Phase 2** (later): Deep dive before locking price and timeline — field-by-field data migration mapping, detailed wireframes, integration requirements, locked estimates.

## How work is organized

- **`discovery/`** — Shared raw data on `main`. Everyone contributes here: scraped site data, CMS audit notes, analysis, meeting notes. This is the foundation that informs everything.
- **Branches** — Each team member branches off `main` to explore their own direction for the proposal tool. Creative freedom to build out different approaches.
- **Merge** — Best ideas from each branch get combined back to `main`.

## Key directories

- `discovery/front-end/` — Page inventory, page types, SEO, API endpoints from the current site
- `discovery/cms/` — Simpleview CMS audit: content types, workflows, permissions, migration notes
- `discovery/analysis/` — Assumptions, risks, open questions, recommendations
- `discovery/project/` — Meeting notes, status updates, decision log, walkthrough notes
- `discovery/scripts/` — Scraping and data processing scripts
- `src/` — The React app (Vite + Tailwind + Vercel)
- `src/lib/proposalData.js` — Scenarios, sitemap template, modules, hour baselines (currently placeholder data — will be replaced with real VSL data from `discovery/`)

## Tech stack

- React 19 + Vite 7 + Tailwind CSS 3
- Recharts for data visualization
- Vercel Blob for image/state storage (with IndexedDB/localStorage fallback)
- Deployed on Vercel

## Commands

```bash
npm run dev      # Start dev server on port 5174
npm run build    # Production build
npm run lint     # ESLint
```
