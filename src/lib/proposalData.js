/**
 * Proposal scenarios, modules, and timeline, powered by 255-point estimation matrix.
 */

// --- Scenarios ---
export const SCENARIOS = [
  {
    id: '2026',
    name: 'Launch in 2026',
    description: '1-to-1 rebuild: prioritized scope targeting the most critical templates, integrations, and data migration for a 2026 launch.',
    multipliers: { design: 0.6, frontend: 0.65, backend: 0.7 },
    miscHours: 80,
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

// Shared color palette for discipline charts, imported by ScenarioEstimate and ScenarioComparison
export const DISCIPLINE_COLORS = {
  design: '#264A50',
  frontend: '#84D7DC',
  backend: '#FFB584',
  misc: '#BCAB96',
}

// Build-time assertion: every MODULE_CATEGORIES id must have a corresponding MODULE_BASE_HOURS entry
const categoryIds = new Set(MODULE_CATEGORIES.map((c) => c.id))
const hourKeys = new Set(Object.keys(MODULE_BASE_HOURS))
for (const id of categoryIds) {
  if (!hourKeys.has(id)) {
    throw new Error(`MODULE_CATEGORIES id "${id}" has no matching MODULE_BASE_HOURS entry`)
  }
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
 * Design and frontend can overlap (parallel tracks), with a 1-week buffer
 * between review cycles (design→frontend handoff, backend→QA handoff).
 */
export function buildTimeline(scenarioHours, startDate = new Date()) {
  const BUFFER_WEEKS = 1 // Review cycle buffer between major handoffs
  let cursor = new Date(startDate)
  const results = []

  for (const phase of TIMELINE_PHASES) {
    const weeks = phase.fixedWeeks ?? Math.max(1, Math.ceil((scenarioHours[phase.hourKey] || 0) / 40))

    // Design and frontend run in parallel: frontend starts after design + buffer
    if (phase.id === 'frontend') {
      const designPhase = results.find((p) => p.id === 'design')
      if (designPhase) {
        const start = new Date(designPhase.start)
        start.setDate(start.getDate() + BUFFER_WEEKS * 7)
        const end = new Date(start)
        end.setDate(end.getDate() + weeks * 7)
        // Cursor advances to whichever finishes later (frontend end or current cursor)
        const frontendEnd = end.getTime()
        if (frontendEnd > cursor.getTime()) cursor = new Date(frontendEnd)
        results.push({ ...phase, weeks, start, end })
        continue
      }
    }

    // Add buffer before QA (backend→QA handoff)
    if (phase.id === 'qa') {
      cursor.setDate(cursor.getDate() + BUFFER_WEEKS * 7)
    }

    const start = new Date(cursor)
    cursor = new Date(cursor)
    cursor.setDate(cursor.getDate() + weeks * 7)
    const end = new Date(cursor)
    results.push({ ...phase, weeks, start, end })
  }

  return results
}
