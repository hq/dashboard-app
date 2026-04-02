import { useState, useEffect, useRef } from 'react'
import CollapsibleSection from './CollapsibleSection'

// Animated count-up: 0 → final over 1.5s with ease-out.
// Triggers once when the card first mounts (tab activation), not on revisit.
function useCountUp(target, duration = 1500) {
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    // Parse numeric value from strings like "7,692" or "85.8%"
    const numericStr = String(target).replace(/[,%]/g, '')
    const finalValue = parseFloat(numericStr)
    if (isNaN(finalValue) || finalValue === 0) {
      // Use rAF to avoid synchronous setState in effect body
      requestAnimationFrame(() => setValue(finalValue || 0))
      return
    }

    const startTime = performance.now()
    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out: 1 - (1 - t)^3
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * finalValue)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])

  return value
}

// Format number to match the original display format
function formatValue(animated, original) {
  const origStr = String(original)
  const isPercent = origStr.includes('%')
  const hasComma = origStr.includes(',')
  const hasPlus = origStr.endsWith('+')
  const hasDecimal = origStr.replace(/[,%+]/g, '').includes('.')

  let formatted
  if (hasDecimal) {
    formatted = animated.toFixed(1)
  } else {
    formatted = Math.round(animated).toString()
  }

  if (hasComma) {
    formatted = Number(formatted).toLocaleString()
  }

  if (isPercent) formatted += '%'
  if (hasPlus) formatted += '+'

  return formatted
}

// Summary stat card with animated count-up and optional collapsible drill-down.
// Used at the top of the Discovery tab to surface the most impressive numbers.
export default function InsightCard({ value, label, insight, children }) {
  const animated = useCountUp(value)

  return (
    <div className="border border-tan bg-sand-light">
      <div className="p-4 text-center">
        <p className="text-3xl font-bold text-deep tabular-nums">
          {formatValue(animated, value)}
        </p>
        <p className="text-xs font-semibold text-deep mt-1">{label}</p>
        {insight && <p className="text-xs text-deep-muted mt-1">{insight}</p>}
      </div>
      {children && (
        <CollapsibleSection title="Details">
          {children}
        </CollapsibleSection>
      )}
    </div>
  )
}
