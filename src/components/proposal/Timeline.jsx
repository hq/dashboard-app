import { useMemo } from 'react'
import { buildTimeline } from '../../lib/proposalData'

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function PhaseGroup({ label, description, phases, maxWeeks }) {
  const groupWeeks = phases.reduce((sum, p) => sum + p.weeks, 0)
  const groupStart = phases[0]?.start
  const groupEnd = phases[phases.length - 1]?.end

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="preheading mb-1">{label}</p>
          {description && <p className="text-xs text-deep-muted">{description}</p>}
        </div>
        <span className="text-xs text-deep-muted tabular-nums">
          {groupWeeks}w · {groupStart && formatDate(groupStart)} &ndash; {groupEnd && formatDate(groupEnd)}
        </span>
      </div>

      {phases.length > 1 && (
        <div className="relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-tan" />
          <div className="space-y-5">
            {phases.map((phase) => (
              <div key={phase.id} className="relative flex items-start gap-4">
                <div
                  className="absolute -left-6 top-1 w-4 h-4 rounded-full border-2 border-white flex-shrink-0"
                  style={{ backgroundColor: phase.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-deep">{phase.name}</span>
                    <span className="text-xs text-deep-muted tabular-nums">
                      {phase.weeks}w · {formatDate(phase.start)} &ndash; {formatDate(phase.end)}
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-sand-dark overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(phase.weeks / maxWeeks) * 100}%`,
                        backgroundColor: phase.color,
                        opacity: 0.7,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Timeline({ scenarioHours, phaseFilter }) {
  const allPhases = useMemo(
    () => buildTimeline(scenarioHours || {}),
    [scenarioHours]
  )

  // If a phaseFilter is provided, only show that phase
  const phases = phaseFilter ? allPhases.filter((p) => p.phase === phaseFilter) : allPhases

  const totalWeeks = phases.reduce((sum, p) => sum + p.weeks, 0)
  const maxWeeks = Math.max(...phases.map((p) => p.weeks))

  // Split into Phase 2 and Phase 3
  const phase2 = phases.filter((p) => p.phase === 2)
  const phase3 = phases.filter((p) => p.phase === 3)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-deep">{totalWeeks} weeks total</span>
      </div>

      {phase2.length > 0 && (
        <PhaseGroup
          label="Phase 2: Deep Dive"
          description="CRM audit, migration mapping, integration verification, workflow documentation"
          phases={phase2}
          maxWeeks={maxWeeks}
        />
      )}

      {phase3.length > 0 && (
        <PhaseGroup
          label="Phase 3: Production Rebuild"
          description="Full custom platform: marketing site, CMS, admin panel, data migration, launch"
          phases={phase3}
          maxWeeks={maxWeeks}
        />
      )}
    </div>
  )
}
