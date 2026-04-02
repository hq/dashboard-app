import { useMemo } from 'react'
import { buildLayerTimeline } from '../../lib/proposalData'

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function Timeline() {
  const phases = useMemo(() => buildLayerTimeline(), [])

  // Group by order to detect parallel phases
  const orderGroups = new Map()
  for (const p of phases) {
    if (!orderGroups.has(p.order)) orderGroups.set(p.order, [])
    orderGroups.get(p.order).push(p)
  }

  // Total weeks = sum of max duration per order group
  const totalWeeks = [...orderGroups.values()].reduce(
    (sum, group) => sum + Math.max(...group.map((p) => p.weeks)),
    0
  )

  const maxWeeks = Math.max(...phases.map((p) => p.weeks))

  return (
    <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-deep">{totalWeeks} weeks total</span>
        <span className="text-xs text-deep-muted">Parallel phases overlap</span>
      </div>

      <div className="relative pl-6">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-tan" />

        <div className="space-y-5">
          {[...orderGroups.entries()].sort((a, b) => a[0] - b[0]).map(([order, group]) => {
            const isParallel = group.length > 1

            if (!isParallel) {
              const phase = group[0]
              return (
                <PhaseRow key={phase.id} phase={phase} maxWeeks={maxWeeks} />
              )
            }

            // Parallel group
            return (
              <div key={`group-${order}`} className="relative">
                <div className="absolute -left-6 top-1 w-4 h-4 rounded-full border-2 border-white bg-tan flex-shrink-0" />
                <div className="ml-0 rounded-lg border border-dashed border-tan/60 bg-sand-dark/20 p-3 space-y-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-deep-muted">
                    Parallel
                  </span>
                  {group.map((phase) => (
                    <div key={phase.id} className="flex items-start gap-3">
                      <div
                        className="w-3 h-3 mt-0.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: phase.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-deep">{phase.name}</span>
                          <span className="text-xs text-deep-muted tabular-nums">
                            {phase.weeks}w &mdash; {formatDate(phase.start)} &ndash; {formatDate(phase.end)}
                          </span>
                        </div>
                        <div className="h-3 rounded-full bg-sand-dark overflow-hidden">
                          <div
                            className="h-full rounded-full"
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
            )
          })}
        </div>
      </div>
    </div>
  )
}

function PhaseRow({ phase, maxWeeks }) {
  return (
    <div className="relative flex items-start gap-4">
      <div
        className="absolute -left-6 top-1 w-4 h-4 rounded-full border-2 border-white flex-shrink-0"
        style={{ backgroundColor: phase.color }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-deep">{phase.name}</span>
          <span className="text-xs text-deep-muted tabular-nums">
            {phase.weeks}w &mdash; {formatDate(phase.start)} &ndash; {formatDate(phase.end)}
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
  )
}
