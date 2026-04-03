# Discovery Data

Raw data and analysis from the visitsaltlake.com audit. Everyone contributes here on `main`.

## Structure

```
discovery/
  front-end/          Front-end site audit
    sitemap.json      All URLs from sitemap.xml, grouped by pattern
    page-types.md     Identified page templates and instance counts
    pages/            One markdown file per page type
    seo.md            Meta tags, structured data, redirects
    apis.md           Discovered API endpoints and patterns

  cms/                Simpleview CMS audit
    overview.md       Platform info, modules in use
    content-types/    One file per content type
    crm-integration.md
    data-migration.md

  analysis/           Shared analysis and planning
    assumptions.md    What we're assuming
    risks.md          Known unknowns
    open-questions.md Things we still need to find out

  project/            Project context (meeting notes, status, decisions)
    status.md         Living doc: what's done, in progress, next
    decisions.md      Key decisions and rationale
    meeting-notes/    Notes from client calls and internal syncs
    walkthroughs/     Notes from video walkthroughs of the site/CMS

  complexity/         Per-section complexity notes for Phase 2 scoping
    events.md         Events section deep dive

  scripts/            Scraping and data processing tools
```

## Conventions

- **Page types, not individual URLs.** Tourism sites have thousands of URLs but ~15-20 templates. Document the template, note the instance count.
- **Markdown for narrative**, JSON for structured/machine-readable data.
- **No binary files.** Screenshots and videos go to external storage; reference by URL.
- Keep files focused and small — easier to review in PRs.
