import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts'
import { DISCIPLINE_COLORS } from '../../lib/proposalData'

// Map total hours to a descriptive complexity label
function getComplexityLabel(total) {
  if (total < 800) return 'Moderate'
  if (total < 1500) return 'Significant'
  return 'Complex'
}

export default function ScenarioEstimate({ scenarios, activeId }) {
  const active = scenarios.find((s) => s.id === activeId) || scenarios[0]

  // Proportional bars — no hour numbers visible
  const activeData = [
    {
      name: active.name,
      Design: active.hours.design,
      Frontend: active.hours.frontend,
      Backend: active.hours.backend,
      Misc: active.hours.misc,
    },
  ]

  const complexity = getComplexityLabel(active.hours.total)

  return (
    <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-deep">{active.name}</h3>
          <p className="text-sm text-deep-muted mt-0.5">{active.description}</p>
        </div>
        <span className="text-lg font-bold text-deep">{complexity}</span>
      </div>

      {/* Discipline legend — proportional labels, no hours */}
      <div className="flex gap-4 text-xs">
        <span className="font-medium" style={{ color: DISCIPLINE_COLORS.design }}>Design</span>
        <span className="font-medium" style={{ color: DISCIPLINE_COLORS.frontend }}>Frontend</span>
        <span className="font-medium" style={{ color: DISCIPLINE_COLORS.backend }}>Backend</span>
        <span className="font-medium" style={{ color: DISCIPLINE_COLORS.misc }}>Misc</span>
      </div>

      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activeData} layout="vertical" barSize={28}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" hide />
            {/* Tooltip shows discipline names only, no hour values */}
            <Tooltip formatter={(v, name) => [name, '']} labelFormatter={() => active.name} cursor={false} />
            <Bar dataKey="Design" stackId="a" fill={DISCIPLINE_COLORS.design} radius={[4, 0, 0, 4]} />
            <Bar dataKey="Frontend" stackId="a" fill={DISCIPLINE_COLORS.frontend} />
            <Bar dataKey="Backend" stackId="a" fill={DISCIPLINE_COLORS.backend} />
            <Bar dataKey="Misc" stackId="a" fill={DISCIPLINE_COLORS.misc} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
