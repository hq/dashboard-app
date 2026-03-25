/**
 * Proposal scenarios, modules, and timeline — powered by comprehensive site research data.
 * Daniel's version with real estimation matrix (255 points across 98 items).
 */

// --- Scenarios ---
export const SCENARIOS = [
  {
    id: '2026',
    name: 'Launch in 2026',
    description: '1-to-1 rebuild — prioritized scope targeting the most critical templates, integrations, and data migration for a 2026 launch.',
    multipliers: { design: 0.6, frontend: 0.65, backend: 0.7 },
    miscHours: 80,
  },
  {
    id: '2027',
    name: 'Launch in 2027',
    description: 'Full scope — complete custom platform rebuild with all 21+ templates, 28+ integrations, CMS admin, and enhancements.',
    multipliers: { design: 1, frontend: 1, backend: 1 },
    miscHours: 160,
  },
]

// --- Module categories (mapped to real estimation data) ---
export const MODULE_CATEGORIES = [
  {
    id: 'marketing',
    name: 'Marketing Website',
    pageNames: ['Homepage', 'Things To Do', 'Restaurants', 'Places To Stay', 'Events', 'Plan Your Visit', 'Neighborhoods', 'Blog', 'Articles'],
  },
  {
    id: 'cms',
    name: 'CMS & Admin',
    pageNames: ['Content Management', 'Media Library', 'User Roles', 'Workflows', 'Taxonomy'],
  },
  {
    id: 'crm',
    name: 'CRM & Data',
    pageNames: ['Listings Management', 'Events Management', 'Partner Portal', 'Forms & Lead Capture'],
  },
  {
    id: 'integrations',
    name: 'Integrations & Features',
    pageNames: ['Maps', 'Search', 'Booking', 'Analytics'],
  },
]

// Real baseline hours derived from 255-point estimation matrix
export const MODULE_BASE_HOURS = {
  marketing:    { design: 320, frontend: 480, backend: 160 },
  integrations: { design: 80,  frontend: 280, backend: 320 },
  crm:          { design: 60,  frontend: 120, backend: 220 },
  cms:          { design: 80,  frontend: 80,  backend: 120 },
}

/**
 * Returns the module id for a given page name.
 */
export function getModuleForPage(pageName) {
  const lower = pageName.toLowerCase()
  for (const mod of MODULE_CATEGORIES) {
    if (mod.pageNames.some((n) => n.toLowerCase() === lower)) return mod.id
  }
  return 'other'
}

// --- Timeline phases ---
export const TIMELINE_PHASES = [
  { id: 'discovery', name: 'Discovery & Planning', fixedWeeks: 3, color: '#264A50' },
  { id: 'design', name: 'Design', hourKey: 'design', color: '#2FB2B8' },
  { id: 'frontend', name: 'Frontend Development', hourKey: 'frontend', color: '#84D7DC' },
  { id: 'backend', name: 'Backend Development', hourKey: 'backend', color: '#FFB584' },
  { id: 'qa', name: 'QA & Testing', fixedWeeks: 4, color: '#FAA46A' },
  { id: 'launch', name: 'Launch & Handoff', fixedWeeks: 2, color: '#335C63' },
]

/**
 * Compute timeline from scenario hours.
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
