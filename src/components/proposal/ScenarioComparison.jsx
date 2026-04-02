import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,
} from 'recharts'
import { DISCIPLINE_COLORS } from '../../lib/proposalData'

export default function ScenarioComparison({ scenarios }) {
  // Proportional comparison — bars show relative effort, no hour numbers
  const comparisonData = scenarios.map((s) => ({
    name: s.name,
    Design: s.hours.design,
    Frontend: s.hours.frontend,
    Backend: s.hours.backend,
    Misc: s.hours.misc,
  }))

  return (
    <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-3">
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={comparisonData} barSize={36}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E4D5C3" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#7C8E8E' }} />
            {/* Y-axis hidden — proportional comparison only, no hour scale */}
            <YAxis hide />
            <Tooltip formatter={(v, name) => [name, '']} cursor={false} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="Design" stackId="a" fill={DISCIPLINE_COLORS.design} />
            <Bar dataKey="Frontend" stackId="a" fill={DISCIPLINE_COLORS.frontend} />
            <Bar dataKey="Backend" stackId="a" fill={DISCIPLINE_COLORS.backend} />
            <Bar dataKey="Misc" stackId="a" fill={DISCIPLINE_COLORS.misc} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
