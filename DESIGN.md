# Design System — HQ Proposal Tool

Document of record for the visual design system used across the VSL proposal tool.
Generated from `tailwind.config.js` and component patterns in the codebase.

## Core Aesthetic

- **Sharp corners everywhere** — all `borderRadius` values are set to `0`. No rounded corners on cards, buttons, inputs, or containers. This is intentional and applies globally.
- **Warm, muted palette** — teal/deep as primary, orange/sky as accents, sand/tan as neutrals. No pure black text.
- **Typography-forward** — Instrument Sans for all UI text and headings, Nib Pro (serif) for marketing/hero display text.
- **Density over whitespace** — compact stat cards, tight spacing in tables, information-dense layouts.

## Color Tokens

Defined in `tailwind.config.js`. Use these token names, not raw hex values.

| Token | Hex | Usage |
|-------|-----|-------|
| `deep` | `#264A50` | Primary text, headers, active states |
| `deep-dark` | `#153439` | Darkest backgrounds, footer |
| `deep-light` | `#335C63` | Secondary text emphasis |
| `deep-muted` | `#7C8E8E` | Body text, descriptions, secondary labels |
| `orange` | `#FFB584` | Accent, preheading labels, CTA hover |
| `orange-dark` | `#FAA46A` | Darker accent, active orange states |
| `orange-light` | `#FFC198` | Light accent backgrounds |
| `sky` | `#84D7DC` | CTA buttons, links, active tab indicator |
| `sky-dark` | `#2FB2B8` | Hover states, emphasis |
| `sky-light` | `#9BEFF4` | Light accent |
| `tan` | `#E4D5C3` | Borders, dividers, grid lines |
| `tan-dark` | `#BCAB96` | Heavier borders, misc chart color |
| `tan-light` | `#FAEFE1` | Light border variant |
| `sand` | `#FCF3EB` | Page background |
| `sand-dark` | `#F2E6DB` | Card backgrounds, filter button groups |
| `sand-light` | `#FFFAF5` | Header background, elevated surfaces |

## Typography

| Family | Token | Usage |
|--------|-------|-------|
| Instrument Sans | `font-sans`, `font-heading` | All UI text, navigation, body, headings |
| Nib Pro | `font-marketing` | Hero display text (`.jumbo` class) |

### Text Styles

- **`.preheading`** — Small uppercase label (orange or muted), used above section titles
- **`.jumbo`** — Large hero display text using Nib Pro
- **Headers** (`h1`-`h3`) — Instrument Sans, `text-deep`
- **Body** — `text-sm text-deep` or `text-deep-muted` for secondary

## Component Patterns

### Stat Card
Compact data display: bold number + label + optional detail line.
```
<div className="p-4 border border-tan bg-sand-light">
  <p className="text-2xl font-bold text-deep">{value}</p>
  <p className="text-xs text-deep-muted mt-1">{label}</p>
</div>
```

### InsightCard
Stat card with animated count-up (0→final, 1.5s ease-out) and optional collapsible drill-down.
Used for top-level summary stats on the Discovery tab.

### CollapsibleSection
Accordion with chevron. Border `border-tan`, header `px-4 py-3`, font-semibold.
Default state: closed (except first section per view to show depth).

### FilterButtonGroup
Animated pill selector with sliding white indicator. Container: `border-tan bg-sand-dark p-1`.
Active item: white background with shadow. Transition: `250ms cubic-bezier(0.4, 0, 0.2, 1)`.

### Phase 2 Deep Dive Card
Dashed border container for Phase 2 deliverables: `border-2 border-dashed border-sky/50 bg-sky/5`.
Used in CMS and CRM scope views to frame future work.

### Hero Section
Full-width dark background (`bg-deep`) with left-aligned image and right-aligned text.
Height: `h-[342px]`. Preheading in orange, h1 in white.

### Button Styles
- **`.btn-fill-up`** — Primary CTA with CSS custom properties for fill animation
- **Standard buttons** — `text-sm font-semibold text-deep` with hover state

## Discipline Colors (Charts)

Used in ScenarioEstimate and ScenarioComparison bar charts.
Exported from `src/lib/proposalData.js` as `DISCIPLINE_COLORS`.

| Discipline | Hex | Token source |
|-----------|-----|-------------|
| Design | `#264A50` | `deep` |
| Frontend | `#84D7DC` | `sky` |
| Backend | `#FFB584` | `orange` |
| Misc | `#BCAB96` | `tan-dark` |

## Badge Patterns

- **Status**: `bg-emerald-100 text-emerald-700` (confirmed), `bg-amber-100 text-amber-700` (partial), `bg-red-100 text-red-700` (not found)
- **Priority**: `bg-red-100 text-red-700` (critical), `bg-amber-100 text-amber-700` (high), `bg-blue-100 text-blue-700` (medium)
- **Section**: Per-section colors (sky for public, violet for events, emerald for listings, amber for content, rose for meetings, indigo for microsites, gray for admin)

## Layout

- **Max content width**: `max-w-[1400px]`
- **Page padding**: `px-6 py-6`
- **Header**: Fixed `h-20`, `bg-sand-light`, `z-50`
- **Grid**: `grid-cols-2 md:grid-cols-4` for stat grids
