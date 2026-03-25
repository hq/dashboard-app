# Extended Site Research — Daniel Rivera

Deep-dive analysis of visitsaltlake.com covering both the public frontend and the CMS backend admin.

## What This Is

A 38-document research package documenting everything we found about the current Visit Salt Lake website — content types, fields, templates, integrations, media, taxonomy, workflows, user roles, performance baselines, SEO health, and migration scope.

## What's Covered

### CMS Backend
Full documentation of the Simpleview CMS admin — every module, setting, content type, and workflow:

| Report | What It Covers |
|--------|---------------|
| `00-cms-admin-discovery.md` | Full CMS navigation map — every module, setting, and section |
| `21-cms-content-types.md` | All 15 Collection Types with field structures, 70+ Page Builder widgets, Nav Item/Blog/Article field schemas |
| `22-cms-taxonomy.md` | 10 taxonomy systems, 1,832 total items |
| `23-cms-roles.md` | 9 user roles with 166 permissions each, 25+ users |
| `24-cms-workflows.md` | Draft system, scheduled publishing, component versioning, audit trail |
| `25-cms-integrations.md` | 13 integration areas, 9,156 redirects |
| `26-cms-media-library.md` | 3,110 images, 590 documents, 136 videos, 68 external links |
| `27-backend-features.md` | 11 layouts/templates, translation system, Field Builder |
| `28-partner-portal.md` | Members portal, Extranet Login flow, CRM-managed partner system |

### Frontend Analysis

| Report | What It Covers |
|--------|---------------|
| `01-sitemap-crawl.md` | 7,619 URLs — 85.7% CRM-powered (4,629 listings + 1,898 events) |
| `05-tech-stack.md` | JavaScript libraries, CSS framework, analytics tags, rendering architecture |
| `06-third-party-integrations.md` | 28+ services across 31 external domains |
| `07-media-assets.md` | Image CDN architecture, formats, responsive delivery |
| `08-url-patterns.md` | URL patterns per content type, redirect behavior |
| `09-feeds-structured-data.md` | JSON-LD, Open Graph, Twitter Cards, canonical URLs |
| `10-template-identification.md` | 21+ frontend template patterns |
| `11-content-taxonomy.md` | Frontend taxonomy — Things To Do, Events, Restaurants, Accommodations, Areas |
| `12-navigation-ia.md` | 6 navigation components, 8 distinct nav contexts, full IA tree |
| `14-site-search.md` | Site search with 8 content type facets, autocomplete |
| `15-forms-inventory.md` | 6 CRM forms with full field documentation |
| `18-legal-compliance.md` | Privacy policy, cookie consent, accessibility |
| `19-multilingual.md` | 8-language translation, no human translations |
| `20-user-flows-interactive-features.md` | 15 interactive features documented |
| `21-responsive-mobile-behavior.md` | Mobile behavior across all template types |
| `22-seasonal-dynamic-content.md` | Seasonal content rotation, personalization, A/B testing |
| `23-print-pdf-features.md` | Print stylesheet, downloadable PDFs |

### B2B Sections & Microsites

| Report | What It Covers |
|--------|---------------|
| `38-industry-b2b-sections.md` | 5 B2B sections with own navigation and branding |
| `36-meetings-microsite.md` | ~45 pages, convention calendar, RFP forms, venue pages |
| `37-convention-microsites.md` | 79 convention welcome pages with standard template |
| `38-trails-feature.md` | Trails are CRM Listings, not a separate content type |

### Performance & SEO Baseline

| Report | What It Covers |
|--------|---------------|
| `02-screaming-frog-crawl.md` | 8,818 URLs — response codes, internal health, external links |
| `18-screaming-frog-analysis.md` | SEO gaps — missing meta descriptions (26%), missing H1s (48%) |
| `11-lighthouse-audit.md` | 2,281 pages — Performance 50, Accessibility 86, SEO 92 |
| `12-core-web-vitals.md` | LCP, FCP, CLS, TBT baselines with improvement targets |

### Synthesis

| Report | What It Covers |
|--------|---------------|
| `29-simpleview-data-export.md` | API research, data export feasibility per content type |
| `32-data-volume-migration-scope.md` | Full quantification — 16,775 URL scope, 3,904 media assets |
| `31-migration-path-assessment.md` | Migration assessment, risks, client action items |
| `33-final-consolidation-estimation-matrix.md` | Master estimation matrix — 255 points across 98 items |

## Performance Data

- `performance/screaming-frog/` — 17 CSV exports covering all URLs, response codes, titles, meta descriptions, H1s, images, redirects, structured data
- `performance/unlighthouse/ci-result.csv` — 2,281 pages with full Lighthouse scores and Core Web Vitals

## Key Numbers

| Metric | Count |
|--------|-------|
| Total URLs in sitemap | 7,619 |
| CRM Listings | 4,629 |
| CRM Events | 1,898 |
| Blog Posts | 310 |
| PR Articles | ~206 (156 + ~50 Ski City) |
| Convention Microsites | 79 |
| CMS Redirect Rules | 9,156 |
| Images | 3,110 |
| Documents | 590 |
| Videos | 136 |
| CMS Tags | 1,432 |
| Third-Party Services | 28+ |
| Page Builder Widgets | 70+ |
| Frontend Templates | 21+ |
| Backend Layouts | 11 |
| User Roles | 9 |
