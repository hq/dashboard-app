import { useState, useId } from 'react'

// Shared accordion component used across Discovery, CMS, and CRM scope views.
// Default: all sections closed except those with defaultOpen={true}.
export default function CollapsibleSection({ title, count, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  return (
    <div className="border border-tan">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-deep hover:bg-sand-light transition-colors"
      >
        <span>{title}{count != null && <span className="ml-2 text-deep-muted font-normal">({count})</span>}</span>
        <svg className="w-4 h-4 text-deep-muted" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
      {open && <div id={panelId} role="region" className="px-4 pb-4 text-sm text-deep">{children}</div>}
    </div>
  )
}
