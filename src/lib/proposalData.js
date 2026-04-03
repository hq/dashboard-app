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
// Two-phase structure: Phase 2 (deep dive, 6-8 weeks) then Phase 3 (production rebuild through end of 2026)
export const TIMELINE_PHASES = [
  // Phase 2: Deep Dive (6-8 weeks)
  { id: 'phase2-discovery', name: 'Phase 2: Deep Dive & Planning', fixedWeeks: 7, color: '#264A50', phase: 2 },
  // Phase 3: Production Rebuild (through end of 2026)
  { id: 'design', name: 'Design', hourKey: 'design', color: '#2FB2B8', phase: 3 },
  { id: 'frontend', name: 'Frontend Development', hourKey: 'frontend', color: '#84D7DC', phase: 3 },
  { id: 'backend', name: 'Backend Development', hourKey: 'backend', color: '#FFB584', phase: 3 },
  { id: 'qa', name: 'QA & Testing', fixedWeeks: 4, color: '#FAA46A', phase: 3 },
  { id: 'launch', name: 'Launch & Handoff', fixedWeeks: 2, color: '#335C63', phase: 3 },
]

/**
 * Compute timeline from scenario hours.
 * Phase 2 (deep dive) runs first as a fixed block.
 * Phase 3 (production rebuild) fills the remaining time until Dec 31, 2026.
 * Tasks within Phase 3 are distributed proportionally by their hour weight.
 */
export function buildTimeline(scenarioHours, startDate = new Date()) {
  const DEADLINE = new Date(2026, 11, 31) // Dec 31, 2026
  const results = []

  // Phase 2: fixed duration
  const phase2Phases = TIMELINE_PHASES.filter((p) => p.phase === 2)
  let cursor = new Date(startDate)
  for (const phase of phase2Phases) {
    const weeks = phase.fixedWeeks
    const start = new Date(cursor)
    cursor = new Date(cursor)
    cursor.setDate(cursor.getDate() + weeks * 7)
    const end = new Date(cursor)
    results.push({ ...phase, weeks, start, end })
  }

  // Phase 3: distribute available weeks proportionally
  const phase3Start = new Date(cursor)
  const availableMs = DEADLINE.getTime() - phase3Start.getTime()
  const availableWeeks = Math.floor(availableMs / (7 * 24 * 60 * 60 * 1000))

  const phase3Phases = TIMELINE_PHASES.filter((p) => p.phase === 3)

  // Calculate raw week weights for each Phase 3 task
  const rawWeeks = phase3Phases.map((phase) => {
    return phase.fixedWeeks ?? Math.max(1, Math.ceil((scenarioHours[phase.hourKey] || 0) / 40))
  })
  const totalRawWeeks = rawWeeks.reduce((sum, w) => sum + w, 0)

  // Scale to fit the available window
  const scaledWeeks = rawWeeks.map((w) => Math.max(1, Math.round((w / totalRawWeeks) * availableWeeks)))

  // Assign dates sequentially
  for (let i = 0; i < phase3Phases.length; i++) {
    const phase = phase3Phases[i]
    const weeks = scaledWeeks[i]
    const start = new Date(cursor)
    cursor = new Date(cursor)
    cursor.setDate(cursor.getDate() + weeks * 7)
    const end = new Date(cursor)
    results.push({ ...phase, weeks, start, end })
  }

  return results
}
