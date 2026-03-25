import { useMemo } from 'react'
import { useProject } from './useProject'
import { SCENARIOS, getModuleForPage, MODULE_BASE_HOURS } from '../lib/proposalDataDaniel'

/**
 * Daniel's version — uses real estimation data from 255-point matrix.
 * Falls back to research-based baseline hours when no annotations exist.
 */
export default function useProposalScenariosDaniel(moduleFilter = 'all') {
  const { state } = useProject()

  return useMemo(() => {
    const raw = { design: 0, frontend: 0, backend: 0 }
    let hasAnnotations = false

    const screenshotToPageName = {}
    const pageNameById = {}
    for (const p of state.pages) {
      pageNameById[p.id] = p.name
    }
    for (const s of state.screenshots) {
      screenshotToPageName[s.id] = pageNameById[s.pageId] || ''
    }

    for (const a of state.annotations) {
      if (moduleFilter !== 'all') {
        const pageName = screenshotToPageName[a.screenshotId]
        if (!pageName || getModuleForPage(pageName) !== moduleFilter) continue
      }
      raw.design += a.designHours || 0
      raw.frontend += a.frontendHours || 0
      raw.backend += a.backendHours || 0
      hasAnnotations = true
    }

    if (!hasAnnotations) {
      if (moduleFilter === 'all') {
        for (const mod of Object.values(MODULE_BASE_HOURS)) {
          raw.design += mod.design
          raw.frontend += mod.frontend
          raw.backend += mod.backend
        }
      } else if (MODULE_BASE_HOURS[moduleFilter]) {
        raw.design = MODULE_BASE_HOURS[moduleFilter].design
        raw.frontend = MODULE_BASE_HOURS[moduleFilter].frontend
        raw.backend = MODULE_BASE_HOURS[moduleFilter].backend
      }
    }

    return SCENARIOS.map((scenario) => {
      const design = Math.round(raw.design * scenario.multipliers.design * 10) / 10
      const frontend = Math.round(raw.frontend * scenario.multipliers.frontend * 10) / 10
      const backend = Math.round(raw.backend * scenario.multipliers.backend * 10) / 10
      const misc = scenario.miscHours
      const total = Math.round((design + frontend + backend + misc) * 10) / 10
      return { ...scenario, hours: { design, frontend, backend, misc, total } }
    })
  }, [state.annotations, state.pages, state.screenshots, moduleFilter])
}
