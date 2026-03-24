import { useState } from 'react'
import sitemapData from '../../lib/vslSitemap.json'

function countNodes(node) {
  let count = 1
  if (node.children) {
    for (const child of node.children) count += countNodes(child)
  }
  return count
}

function SitemapNode({ node, depth = 0 }) {
  const hasChildren = node.children && node.children.length > 0
  const [open, setOpen] = useState(depth < 1)
  const childCount = hasChildren ? countNodes(node) - 1 : 0

  return (
    <div>
      <button
        onClick={() => hasChildren && setOpen(!open)}
        className={`flex items-center gap-2 w-full text-left py-1.5 transition-colors ${
          hasChildren ? 'hover:text-deep cursor-pointer' : 'cursor-default'
        }`}
        style={{ paddingLeft: depth * 20 }}
      >
        {hasChildren && (
          <svg
            className="w-3 h-3 text-deep-muted shrink-0"
            style={{ transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s ease' }}
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M6 3l5 5-5 5V3z" />
          </svg>
        )}
        {!hasChildren && <span className="w-3 h-3 shrink-0" />}
        <span className={`text-sm ${depth === 0 ? 'font-bold text-deep' : hasChildren ? 'font-semibold text-deep' : 'text-deep-muted'}`}>
          {node.name}
        </span>
        {hasChildren && !open && (
          <span className="text-xs text-deep-muted ml-1">({childCount})</span>
        )}
      </button>
      {hasChildren && open && (
        <div>
          {node.children.map((child) => (
            <SitemapNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function VslSitemap() {
  const totalPages = countNodes(sitemapData) - 1
  const topSections = sitemapData.children || []

  return (
    <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-deep-muted">{totalPages} pages across {topSections.length} sections</p>
        <p className="text-xs text-deep-muted">Source: visitsaltlake.com/sitemap</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
        {topSections.map((section) => (
          <div key={section.id} className="border-b border-tan/50 last:border-0 pb-2 mb-2">
            <SitemapNode node={section} depth={0} />
          </div>
        ))}
      </div>
    </div>
  )
}
