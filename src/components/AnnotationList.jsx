import { useProject } from '../hooks/useProject'

const COLORS = [
  '#264A50', '#FFB584', '#2FB2B8', '#84D7DC', '#335C63',
  '#FAA46A', '#BCAB96', '#FFC198', '#153439', '#9BEFF4',
]

export default function AnnotationList({
  annotations,
  selectedAnnotationId,
  onSelectAnnotation,
}) {
  const { dispatch } = useProject()

  if (annotations.length === 0) {
    return (
      <p className="text-sm text-deep-muted py-3">
        Draw a bounding box on the screenshot to add an annotation.
      </p>
    )
  }

  const fields = [
    { key: 'designHours', label: 'Design', color: 'text-purple-600' },
    { key: 'frontendHours', label: 'FE', color: 'text-blue-600' },
    { key: 'backendHours', label: 'BE', color: 'text-emerald-600' },
  ]

  return (
    <div className="space-y-2">
      {annotations.map((a, i) => (
        <div
          key={a.id}
          onClick={() => onSelectAnnotation(a.id)}
          className={`p-2 rounded-lg border transition-colors cursor-pointer ${
            selectedAnnotationId === a.id
              ? 'border-deep/50 bg-deep/10'
              : 'border-tan hover:border-tan-dark'
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: COLORS[i % COLORS.length] }}
            >
              {i + 1}
            </span>
            <input
              type="text"
              value={a.label}
              placeholder="Section label..."
              onChange={(e) =>
                dispatch({ type: 'UPDATE_ANNOTATION', id: a.id, updates: { label: e.target.value } })
              }
              onClick={(e) => e.stopPropagation()}
              className="flex-1 min-w-0 text-sm bg-transparent border-none outline-none text-deep placeholder:text-deep-muted/50"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                dispatch({ type: 'DELETE_ANNOTATION', id: a.id })
              }}
              className="text-deep-muted/50 hover:text-red-600 text-sm transition-colors"
            >
              ×
            </button>
          </div>
          <div className="flex items-center gap-3 mt-1.5 pl-8 min-w-0 flex-wrap">
            {fields.map(({ key, label, color }) => (
              <div key={key} className="flex items-center gap-1">
                <span className={`text-xs font-medium ${color}`}>{label}</span>
                <input
                  type="number"
                  value={a[key] || ''}
                  placeholder="0"
                  step={0.5}
                  min={0}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_ANNOTATION',
                      id: a.id,
                      updates: { [key]: parseFloat(e.target.value) || 0 },
                    })
                  }
                  onClick={(e) => e.stopPropagation()}
                  className="w-14 text-sm text-right bg-transparent border border-tan rounded px-1.5 py-0.5 outline-none focus:border-deep text-deep"
                />
              </div>
            ))}
            <span className="text-xs text-deep-muted ml-auto tabular-nums whitespace-nowrap">
              {(a.designHours || 0) + (a.frontendHours || 0) + (a.backendHours || 0)}h
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
