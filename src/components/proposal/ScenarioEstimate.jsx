import { useState } from 'react'

function formatRange(low, high) {
  return `${low.toLocaleString()}\u2013${high.toLocaleString()}h`
}

function LayerRow({ layer, maxHigh, isExpanded, onToggle }) {
  const lowPct = (layer.low / maxHigh) * 100
  const deltaPct = ((layer.high - layer.low) / maxHigh) * 100

  return (
    <div className="border-b border-tan last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 py-3 px-1 hover:bg-sand-dark/30 transition-colors text-left"
      >
        {/* Color dot + name */}
        <div
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ backgroundColor: layer.color }}
        />
        <span className="text-sm font-semibold text-deep w-[220px] flex-shrink-0 truncate">
          {layer.name}
        </span>

        {/* Range bar */}
        <div className="flex-1 h-5 rounded bg-sand-dark/40 overflow-hidden relative">
          {/* Solid portion = low */}
          <div
            className="absolute inset-y-0 left-0 rounded-l"
            style={{
              width: `${lowPct}%`,
              backgroundColor: layer.color,
            }}
          />
          {/* Lighter extension = high-low delta */}
          <div
            className="absolute inset-y-0 rounded-r"
            style={{
              left: `${lowPct}%`,
              width: `${deltaPct}%`,
              backgroundColor: layer.color,
              opacity: 0.3,
            }}
          />
        </div>

        {/* Range label */}
        <span className="text-xs text-deep-muted tabular-nums w-[120px] text-right flex-shrink-0">
          {formatRange(layer.low, layer.high)}
        </span>

        {/* Chevron */}
        <svg
          className={`w-4 h-4 text-deep-muted transition-transform flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`}
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M6 3l5 5-5 5V3z" />
        </svg>
      </button>

      {/* Expanded line items */}
      {isExpanded && (
        <div className="pb-3 pl-[34px] pr-1 space-y-1">
          <p className="text-xs text-deep-muted mb-2">{layer.description}</p>
          {layer.items.map((item) => {
            const itemLowPct = (item.low / maxHigh) * 100
            const itemDeltaPct = ((item.high - item.low) / maxHigh) * 100
            return (
              <div key={item.id} className="flex items-center gap-3">
                <span className="text-xs text-deep-muted w-[220px] flex-shrink-0 truncate">
                  {item.name}
                </span>
                <div className="flex-1 h-2.5 rounded bg-sand-dark/30 overflow-hidden relative">
                  <div
                    className="absolute inset-y-0 left-0 rounded-l"
                    style={{ width: `${itemLowPct}%`, backgroundColor: layer.color, opacity: 0.7 }}
                  />
                  <div
                    className="absolute inset-y-0 rounded-r"
                    style={{ left: `${itemLowPct}%`, width: `${itemDeltaPct}%`, backgroundColor: layer.color, opacity: 0.2 }}
                  />
                </div>
                <span className="text-xs text-deep-muted tabular-nums w-[120px] text-right flex-shrink-0">
                  {formatRange(item.low, item.high)}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function ScenarioEstimate({ scenarios, activeId }) {
  const active = scenarios.find((s) => s.id === activeId) || scenarios[0]
  const [expandedLayer, setExpandedLayer] = useState(null)

  if (!active.layers) return null

  const maxHigh = Math.max(...active.layers.map((l) => l.high))

  return (
    <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-deep">Project Estimate</h3>
          <p className="text-sm text-deep-muted mt-0.5">
            Full-scope rebuild across 9 work layers. Ranges reflect Phase 1 confidence level.
          </p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-deep">
            {formatRange(active.totals.low, active.totals.high)}
          </span>
          <p className="text-xs text-deep-muted">before contingency</p>
        </div>
      </div>

      {/* Layer rows */}
      <div className="border border-tan rounded-lg bg-white/50 overflow-hidden">
        {active.layers.map((layer) => (
          <LayerRow
            key={layer.id}
            layer={layer}
            maxHigh={maxHigh}
            isExpanded={expandedLayer === layer.id}
            onToggle={() => setExpandedLayer(expandedLayer === layer.id ? null : layer.id)}
          />
        ))}
      </div>

      {/* Footer totals */}
      <div className="border-t border-tan pt-3 space-y-2">
        <div className="flex justify-between text-sm text-deep-muted">
          <span>Subtotal</span>
          <span className="tabular-nums">{formatRange(active.totals.low, active.totals.high)}</span>
        </div>
        <div className="flex justify-between text-sm text-deep-muted">
          <span>Contingency ({active.contingencyPercent}%)</span>
          <span className="tabular-nums">
            {formatRange(
              active.withContingency.low - active.totals.low,
              active.withContingency.high - active.totals.high
            )}
          </span>
        </div>
        <div className="flex justify-between text-base font-bold text-deep border-t border-tan pt-2">
          <span>Total (with contingency)</span>
          <span className="tabular-nums">{formatRange(active.withContingency.low, active.withContingency.high)}</span>
        </div>
      </div>
    </div>
  )
}
