import { useMemo } from 'react'
import { buildTimeline } from '../../lib/proposalDataDaniel'

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function Timeline({ scenarioHours }) {
  const phases = useMemo(
    () => buildTimeline(scenarioHours || {}),
    [scenarioHours]
  )

  const totalWeeks = phases.reduce((sum, p) => sum + p.weeks, 0)
  const maxWeeks = Math.max(...phases.map((p) => p.weeks))

  return (
    <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4">
      <span className="text-sm font-semibold text-deep">{totalWeeks} weeks total</span>

      <div className="relative pl-6">
        {/* Vertical line */}
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
          ))}
        </div>
      </div>
    </div>
  )
}
