import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts'

const DISCIPLINE_COLORS = {
  design: '#264A50',
  frontend: '#84D7DC',
  backend: '#FFB584',
  misc: '#BCAB96',
}

export default function ScenarioEstimate({ scenarios, activeId }) {
  const active = scenarios.find((s) => s.id === activeId) || scenarios[0]

  const activeData = [
    {
      name: active.name,
      Design: active.hours.design,
      Frontend: active.hours.frontend,
      Backend: active.hours.backend,
      Misc: active.hours.misc,
    },
  ]

  return (
    <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-deep">{active.name}</h3>
          <p className="text-sm text-deep-muted mt-0.5">{active.description}</p>
        </div>
        <span className="text-2xl font-bold text-deep">{active.hours.total}h</span>
      </div>

      <div className="flex gap-4 text-xs">
        <span className="font-medium" style={{ color: '#264A50' }}>Design: {active.hours.design}h</span>
        <span className="font-medium" style={{ color: '#2FB2B8' }}>Frontend: {active.hours.frontend}h</span>
        <span className="font-medium" style={{ color: '#FAA46A' }}>Backend: {active.hours.backend}h</span>
        <span className="font-medium" style={{ color: '#BCAB96' }}>Misc: {active.hours.misc}h</span>
      </div>

      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activeData} layout="vertical" barSize={28}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" hide />
            <Tooltip formatter={(v) => `${v}h`} />
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
