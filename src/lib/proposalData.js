/**
 * Hardcoded proposal scenarios, sitemap template, and timeline phases.
 */

// --- Scenarios ---
export const SCENARIOS = [
  {
    id: '2026',
    name: 'Launch in 2026',
    description: 'Aggressive timeline — prioritized scope to hit a 2026 launch.',
    multipliers: { design: 0.6, frontend: 0.65, backend: 0.7 },
    miscHours: 20,
  },
  {
    id: '2027',
    name: 'Launch in 2027',
    description: 'Full scope — complete build of all screens and features.',
    multipliers: { design: 1, frontend: 1, backend: 1 },
    miscHours: 40,
  },
]

// --- Sitemap template ---
// Template nodes are matched by name (case-insensitive) against live pages.
export const SITEMAP_TEMPLATE = {
  name: 'Home',
  children: [
    {
      name: 'Dashboard',
      children: [
        { name: 'Analytics' },
        { name: 'Reports' },
      ],
    },
    {
      name: 'Settings',
      children: [
        { name: 'Profile' },
        { name: 'Billing' },
      ],
    },
    { name: 'About' },
    { name: 'Contact' },
  ],
}

/**
 * Build sitemap from template + live pages.
 * Matched pages get a `pageId`; unmatched pages appear as root-level orphans.
 */
export function buildSitemapFromPages(pages) {
  const remaining = new Map(pages.map((p) => [p.id, p]))

  function matchNode(template) {
    const node = { name: template.name, children: [] }
    const match = [...remaining.values()].find(
      (p) => p.name.toLowerCase() === template.name.toLowerCase()
    )
    if (match) {
      node.pageId = match.id
      remaining.delete(match.id)
    }
    if (template.children) {
      node.children = template.children.map(matchNode)
    }
    return node
  }

  const root = matchNode(SITEMAP_TEMPLATE)

  // Append unmatched pages as root-level orphans
  for (const [id, page] of remaining) {
    root.children.push({ name: page.name, pageId: id, children: [] })
  }

  return root
}

// --- Module categories ---
export const MODULE_CATEGORIES = [
  { id: 'marketing', name: 'Marketing Website', pageNames: ['Home', 'About', 'Contact'] },
  { id: 'cms', name: 'CMS', pageNames: ['Dashboard', 'Analytics', 'Reports'] },
  { id: 'crm', name: 'CRM', pageNames: ['Settings', 'Profile', 'Billing'] },
]

// Dummy baseline hours per module (used when no real annotations exist)
export const MODULE_BASE_HOURS = {
  marketing: { design: 80, frontend: 120, backend: 40 },
  cms:       { design: 60, frontend: 100, backend: 140 },
  crm:      { design: 50, frontend: 90,  backend: 110 },
}

/**
 * Returns the module id for a given page name, or 'other' if unmatched.
 */
export function getModuleForPage(pageName) {
  const lower = pageName.toLowerCase()
  for (const mod of MODULE_CATEGORIES) {
    if (mod.pageNames.some((n) => n.toLowerCase() === lower)) return mod.id
  }
  return 'other'
}

/**
 * Build indented plain-text sitemap for download.
 */
export function buildSitemapText(node, depth = 0) {
  const indent = '  '.repeat(depth)
  let text = `${indent}${node.name}\n`
  if (node.children) {
    for (const child of node.children) {
      text += buildSitemapText(child, depth + 1)
    }
  }
  return text
}

// --- 9 Work Layers (full-scope estimate with ranges) ---
export const CONTINGENCY_PERCENT = 15

export const WORK_LAYERS = [
  {
    id: 'templates', name: 'Page Templates', color: '#264A50', low: 1100, high: 1400,
    description: '16 page types across the public marketing site',
    items: [
      { id: 'public', name: 'Public Pages (Home, Search, 404)', low: 130, high: 180 },
      { id: 'events', name: 'Events (detail + category index)', low: 260, high: 340 },
      { id: 'listings', name: 'Listings & Search (detail + index)', low: 270, high: 360 },
      { id: 'content', name: 'Content & Editorial (blog, neighborhoods)', low: 170, high: 230 },
      { id: 'meetings', name: 'Meetings & Convention (mini-site)', low: 110, high: 150 },
      { id: 'admin', name: 'Admin & Corporate (members, jobs, press)', low: 100, high: 140 },
    ],
  },
  {
    id: 'cms', name: 'CMS Platform', color: '#2FB2B8', low: 300, high: 350,
    description: 'Custom content management system for ~20 daily admin users',
    items: [
      { id: 'schema', name: 'Content type schema design', low: 50, high: 70 },
      { id: 'admin-ui', name: 'Admin dashboard & navigation', low: 35, high: 45 },
      { id: 'editor', name: 'Content editor (rich text / blocks)', low: 35, high: 45 },
      { id: 'media', name: 'Media library', low: 25, high: 35 },
      { id: 'workflow', name: 'Draft / publish / schedule workflow', low: 25, high: 30 },
      { id: 'preview', name: 'Content preview', low: 20, high: 25 },
      { id: 'roles', name: 'User roles & permissions', low: 20, high: 25 },
      { id: 'taxonomy', name: 'Taxonomy management', low: 15, high: 20 },
      { id: 'forms', name: 'Form management (RFP, newsletter)', low: 15, high: 20 },
      { id: 'seo-fields', name: 'SEO fields per content type', low: 10, high: 15 },
      { id: 'bulk', name: 'Bulk operations & import/export', low: 10, high: 20 },
    ],
  },
  {
    id: 'search', name: 'Search & Filter', color: '#84D7DC', low: 120, high: 170,
    description: 'Search infrastructure for 3,700+ listings and 1,800+ events',
    items: [
      { id: 'engine', name: 'Search engine setup & indexing', low: 20, high: 30 },
      { id: 'faceted', name: 'Faceted search API (category, date, location)', low: 35, high: 45 },
      { id: 'geo', name: 'Geospatial search ("near me", radius)', low: 20, high: 30 },
      { id: 'autocomplete', name: 'Autocomplete & suggestions', low: 10, high: 20 },
      { id: 'content-index', name: 'Cross-content-type indexing pipeline', low: 25, high: 30 },
      { id: 'relevance', name: 'Ranking & relevance tuning', low: 10, high: 15 },
    ],
  },
  {
    id: 'integrations', name: 'Integrations', color: '#FFB584', low: 150, high: 230,
    description: '13+ third-party services to replace or replicate',
    items: [
      { id: 'maps', name: 'Maps (Google Maps / Mapbox)', low: 20, high: 30 },
      { id: 'tripadvisor', name: 'TripAdvisor reviews API', low: 15, high: 25 },
      { id: 'nowplaying', name: 'NowPlayingUtah event feed', low: 15, high: 25 },
      { id: 'email', name: 'Email marketing (Act On replacement)', low: 15, high: 20 },
      { id: 'analytics', name: 'Analytics (GA4 + GTM)', low: 15, high: 20 },
      { id: 'bandwango', name: 'Bandwango passes & ticketing', low: 15, high: 25 },
      { id: 'booking', name: 'Ripe hotel booking integration', low: 15, high: 25 },
      { id: 'rfp-crm', name: 'RFP form + CRM pipeline', low: 20, high: 30 },
      { id: 'member-portal', name: 'Member portal & authentication', low: 20, high: 30 },
    ],
  },
  {
    id: 'migration', name: 'Data Migration', color: '#FAA46A', low: 250, high: 400,
    description: 'Migrate 3,700+ listings, 1,800+ events, 460+ articles, 7,692 URL redirects',
    items: [
      { id: 'export', name: 'Simpleview data export & API access', low: 15, high: 25 },
      { id: 'mapping', name: 'Content type field mapping (old \u2192 new)', low: 25, high: 35 },
      { id: 'events-mig', name: 'Event migration (~1,800)', low: 35, high: 50 },
      { id: 'listings-mig', name: 'Listing migration (~3,700)', low: 40, high: 60 },
      { id: 'content-mig', name: 'Blog/article migration (~460)', low: 15, high: 25 },
      { id: 'taxonomy-mig', name: 'Taxonomy & category mapping', low: 15, high: 25 },
      { id: 'media-mig', name: 'Image & media file migration', low: 20, high: 30 },
      { id: 'redirects', name: 'URL redirect mapping (7,692 URLs)', low: 25, high: 35 },
      { id: 'validation', name: 'Data validation & cleanup', low: 20, high: 30 },
      { id: 'dry-runs', name: 'Migration dry runs (3\u20135 iterations)', low: 25, high: 40 },
      { id: 'triage', name: 'Historical content triage', low: 10, high: 15 },
    ],
  },
  {
    id: 'seo', name: 'SEO Preservation', color: '#335C63', low: 80, high: 130,
    description: 'Preserve organic traffic across 7,692 indexed URLs',
    items: [
      { id: 'url-design', name: 'URL structure design', low: 10, high: 15 },
      { id: 'redirect-impl', name: 'Redirect rules implementation', low: 20, high: 30 },
      { id: 'structured-data', name: 'Structured data (schema.org)', low: 20, high: 30 },
      { id: 'sitemap-gen', name: 'XML sitemap generation', low: 8, high: 12 },
      { id: 'meta', name: 'Meta tag management', low: 8, high: 12 },
      { id: 'og', name: 'Open Graph / social previews', low: 8, high: 12 },
      { id: 'internal-links', name: 'Internal linking strategy', low: 6, high: 10 },
    ],
  },
  {
    id: 'infra', name: 'Infrastructure', color: '#BCAB96', low: 100, high: 120,
    description: 'Hosting, CI/CD, monitoring, security',
    items: [
      { id: 'hosting', name: 'Hosting architecture & setup', low: 15, high: 20 },
      { id: 'cicd', name: 'CI/CD pipeline', low: 12, high: 15 },
      { id: 'cdn', name: 'CDN / edge caching strategy', low: 8, high: 12 },
      { id: 'environments', name: 'Environment management (dev/staging/prod)', low: 8, high: 10 },
      { id: 'dns', name: 'Domain / DNS / SSL', low: 4, high: 6 },
      { id: 'errors', name: 'Error tracking (Sentry)', low: 6, high: 8 },
      { id: 'monitoring', name: 'Monitoring & uptime', low: 6, high: 8 },
      { id: 'backup', name: 'Backup & disaster recovery', low: 6, high: 8 },
      { id: 'perf', name: 'Performance optimization (Core Web Vitals)', low: 15, high: 20 },
      { id: 'security', name: 'Security hardening', low: 12, high: 15 },
    ],
  },
  {
    id: 'qa', name: 'QA & Testing', color: '#7C8E8E', low: 140, high: 200,
    description: 'Cross-browser, accessibility, performance, UAT',
    items: [
      { id: 'browser', name: 'Cross-browser testing', low: 15, high: 20 },
      { id: 'responsive', name: 'Device / responsive testing', low: 15, high: 20 },
      { id: 'a11y', name: 'Accessibility audit (WCAG 2.1 AA)', low: 25, high: 35 },
      { id: 'perf-test', name: 'Performance testing', low: 12, high: 18 },
      { id: 'content-review', name: 'Content review / proofreading', low: 12, high: 18 },
      { id: 'regression', name: 'Regression testing', low: 15, high: 22 },
      { id: 'uat', name: 'UAT sessions with VSL team', low: 12, high: 18 },
      { id: 'bugfix', name: 'Bug fixing buffer', low: 30, high: 45 },
    ],
  },
  {
    id: 'pm', name: 'PM & Launch', color: '#153439', low: 200, high: 300,
    description: 'Project management, training, launch, post-launch support',
    items: [
      { id: 'discovery-p2', name: 'Phase 2 deep dive discovery', low: 60, high: 80 },
      { id: 'pm-ongoing', name: 'Ongoing project management', low: 50, high: 70 },
      { id: 'content-strategy', name: 'Content strategy', low: 25, high: 35 },
      { id: 'training', name: 'CMS training & documentation', low: 20, high: 30 },
      { id: 'launch-plan', name: 'Launch planning & cutover', low: 12, high: 18 },
      { id: 'post-launch', name: 'Post-launch support (2 weeks)', low: 30, high: 45 },
    ],
  },
]

// Compute aggregate totals from work layers
export function computeLayerTotals() {
  const raw = WORK_LAYERS.reduce((acc, l) => ({ low: acc.low + l.low, high: acc.high + l.high }), { low: 0, high: 0 })
  return {
    raw,
    withContingency: {
      low: Math.round(raw.low * (1 + CONTINGENCY_PERCENT / 100)),
      high: Math.round(raw.high * (1 + CONTINGENCY_PERCENT / 100)),
    },
  }
}

// --- Layer-based timeline with parallel workstreams ---
export const TIMELINE_SCHEDULE = [
  { id: 'discovery', name: 'Discovery & Planning', fixedWeeks: 3, color: '#264A50', order: 0 },
  { id: 'design', name: 'Design', layerIds: ['templates'], useDesignHours: true, color: '#2FB2B8', order: 1 },
  { id: 'build', name: 'Build (Templates + CMS + Search + Integrations)', layerIds: ['templates', 'cms', 'search', 'integrations'], color: '#84D7DC', order: 2 },
  { id: 'migration', name: 'Data Migration', layerIds: ['migration'], color: '#FAA46A', order: 2 },
  { id: 'seo-infra', name: 'SEO & Infrastructure', layerIds: ['seo', 'infra'], color: '#335C63', order: 2 },
  { id: 'qa', name: 'QA & Testing', layerIds: ['qa'], color: '#7C8E8E', order: 3 },
  { id: 'launch', name: 'Launch & Handoff', fixedWeeks: 2, color: '#153439', order: 4 },
]

// Build timeline from layer data with parallel phase support
export function buildLayerTimeline(startDate = new Date()) {
  // Compute weeks per phase from layer midpoints
  const layerMap = Object.fromEntries(WORK_LAYERS.map((l) => [l.id, l]))
  const phasesWithWeeks = TIMELINE_SCHEDULE.map((phase) => {
    if (phase.fixedWeeks) return { ...phase, weeks: phase.fixedWeeks }
    const totalMid = phase.layerIds.reduce((sum, id) => {
      const layer = layerMap[id]
      return sum + (layer ? (layer.low + layer.high) / 2 : 0)
    }, 0)
    // Design phase uses ~40% of template hours for design-specific work
    const hours = phase.useDesignHours ? totalMid * 0.4 : totalMid
    return { ...phase, weeks: Math.max(1, Math.ceil(hours / 40)) }
  })

  // Group by order, chain sequentially, parallel phases overlap
  const groups = new Map()
  for (const p of phasesWithWeeks) {
    if (!groups.has(p.order)) groups.set(p.order, [])
    groups.get(p.order).push(p)
  }

  let cursor = new Date(startDate)
  const result = []
  for (const [, phases] of [...groups.entries()].sort((a, b) => a[0] - b[0])) {
    const groupStart = new Date(cursor)
    let maxWeeks = 0
    for (const phase of phases) {
      const start = new Date(groupStart)
      const end = new Date(start)
      end.setDate(end.getDate() + phase.weeks * 7)
      result.push({ ...phase, start, end })
      maxWeeks = Math.max(maxWeeks, phase.weeks)
    }
    cursor = new Date(groupStart)
    cursor.setDate(cursor.getDate() + maxWeeks * 7)
  }

  return result
}

// --- Timeline phases (legacy — kept for backward compat) ---
export const TIMELINE_PHASES = [
  { id: 'discovery', name: 'Discovery & Planning', fixedWeeks: 1, color: '#264A50' },
  { id: 'design', name: 'Design', hourKey: 'design', color: '#2FB2B8' },
  { id: 'frontend', name: 'Frontend Development', hourKey: 'frontend', color: '#84D7DC' },
  { id: 'backend', name: 'Backend Development', hourKey: 'backend', color: '#FFB584' },
  { id: 'qa', name: 'QA & Testing', fixedWeeks: 2, color: '#FAA46A' },
  { id: 'launch', name: 'Launch & Handoff', fixedWeeks: 1, color: '#335C63' },
]

/**
 * Compute timeline from scenario hours.
 * Dynamic phases: weeks = ceil(hours / 40). Phases chain sequentially.
 */
export function buildTimeline(scenarioHours, startDate = new Date()) {
  let cursor = new Date(startDate)
  return TIMELINE_PHASES.map((phase) => {
    const weeks = phase.fixedWeeks ?? Math.max(1, Math.ceil((scenarioHours[phase.hourKey] || 0) / 40))
    const start = new Date(cursor)
    cursor = new Date(cursor)
    cursor.setDate(cursor.getDate() + weeks * 7)
    const end = new Date(cursor)
    return { ...phase, weeks, start, end }
  })
}
