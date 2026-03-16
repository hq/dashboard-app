import { useState } from 'react'
import { useProject } from '../../hooks/useProject'
import ReadOnlyAnnotationOverlay from './ReadOnlyAnnotationOverlay'

const COLORS = [
  '#264A50', '#FFB584', '#2FB2B8', '#84D7DC', '#335C63',
  '#FAA46A', '#BCAB96', '#FFC198', '#153439', '#9BEFF4',
]

function ZoomModal({ screenshot, annotations, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-xl bg-sand-light border border-tan p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-deep text-white flex items-center justify-center text-sm font-bold hover:bg-deep/80 transition-colors z-10"
        >
          &times;
        </button>
        <ReadOnlyAnnotationOverlay screenshot={screenshot} annotations={annotations} />
        {annotations.length > 0 && (
          <div className="mt-3 space-y-1.5">
            {annotations.map((a, i) => {
              const total = (a.designHours || 0) + (a.frontendHours || 0) + (a.backendHours || 0)
              return (
                <div key={a.id} className="flex items-center gap-2 text-sm">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: COLORS[i % COLORS.length] }}
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1 text-deep truncate">{a.label || 'Unlabeled section'}</span>
                  <span className="text-deep-muted font-semibold tabular-nums">{total}h</span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ScreensBreakdown() {
  const { state } = useProject()
  const [zoomedScreenshot, setZoomedScreenshot] = useState(null)

  if (state.pages.length === 0 || state.screenshots.length === 0) {
    return null
  }

  // Flatten all screenshots with their page info and annotations
  const allScreenshots = state.pages.flatMap((page) => {
    const screenshots = state.screenshots.filter((s) => s.pageId === page.id)
    return screenshots.map((ss) => ({
      page,
      screenshot: ss,
      annotations: state.annotations.filter((a) => a.screenshotId === ss.id),
    }))
  })

  const zoomedEntry = zoomedScreenshot
    ? allScreenshots.find((e) => e.screenshot.id === zoomedScreenshot)
    : null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allScreenshots.map(({ page, screenshot: ss, annotations }) => {
          const total = annotations.reduce(
            (s, a) => s + (a.designHours || 0) + (a.frontendHours || 0) + (a.backendHours || 0),
            0
          )
          return (
            <div
              key={ss.id}
              className="rounded-xl border border-tan bg-sand-light p-3 space-y-2 cursor-pointer hover:border-deep/30 transition-colors"
              onClick={() => setZoomedScreenshot(ss.id)}
            >
              <ReadOnlyAnnotationOverlay screenshot={ss} annotations={annotations} />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-deep truncate">{page.name}</span>
                {total > 0 && (
                  <span className="text-xs font-semibold text-deep-muted tabular-nums">{total}h</span>
                )}
              </div>
              {annotations.length > 0 && (
                <div className="text-xs text-deep-muted">
                  {annotations.length} annotation{annotations.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {zoomedEntry && (
        <ZoomModal
          screenshot={zoomedEntry.screenshot}
          annotations={zoomedEntry.annotations}
          onClose={() => setZoomedScreenshot(null)}
        />
      )}
    </>
  )
}
