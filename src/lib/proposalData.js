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

// --- Timeline phases ---
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
