import { useMemo } from 'react'
import { SCENARIOS, MODULE_BASE_HOURS } from '../lib/proposalData'

/**
 * Uses real estimation data from 255-point matrix.
 * Computes scenario hours directly from MODULE_BASE_HOURS with no ProjectProvider dependency.
 * The proposal page shows research-based estimates, not annotation-driven totals.
 */
export default function useProposalScenarios() {
  return useMemo(() => {
    // Sum baseline hours across all modules
    const raw = { design: 0, frontend: 0, backend: 0 }
    for (const mod of Object.values(MODULE_BASE_HOURS)) {
      raw.design += mod.design
      raw.frontend += mod.frontend
      raw.backend += mod.backend
    }

    return SCENARIOS.map((scenario) => {
      const design = Math.round(raw.design * scenario.multipliers.design * 10) / 10
      const frontend = Math.round(raw.frontend * scenario.multipliers.frontend * 10) / 10
      const backend = Math.round(raw.backend * scenario.multipliers.backend * 10) / 10
      const misc = scenario.miscHours
      const total = Math.round((design + frontend + backend + misc) * 10) / 10
      return { ...scenario, hours: { design, frontend, backend, misc, total } }
    })
  }, [])
}
