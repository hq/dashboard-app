import { useState } from 'react'
import { useProject } from '../hooks/useProject'
import AnnotationOverlay from '../components/AnnotationOverlay'
import AnnotationList from '../components/AnnotationList'
import HoursSummary from '../components/HoursSummary'

export default function Estimate() {
  const { state, dispatch } = useProject()
  const [selectedAnnotationId, setSelectedAnnotationId] = useState(null)

  const handleAddAnnotation = (screenshotId, rect) => {
    const id = crypto.randomUUID()
    dispatch({
      type: 'ADD_ANNOTATION',
      id,
      screenshotId,
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    })
    setSelectedAnnotationId(id)
  }

  const handleDeleteAnnotation = (id) => {
    dispatch({ type: 'DELETE_ANNOTATION', id })
    if (selectedAnnotationId === id) setSelectedAnnotationId(null)
  }

  if (state.pages.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-deep-muted mb-2">No pages yet.</p>
        <p className="text-sm text-deep-muted">Go to Capture to upload a video and capture screenshots first.</p>
      </div>
    )
  }

  if (state.screenshots.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-deep-muted mb-2">No screenshots captured yet.</p>
        <p className="text-sm text-deep-muted">Go to Capture to take some screenshots first.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <HoursSummary />

      {state.pages.map((page) => {
        const screenshots = state.screenshots.filter((s) => s.pageId === page.id)
        if (screenshots.length === 0) return null

        return (
          <div key={page.id} className="space-y-4">
            <h2 className="text-lg font-bold text-deep">{page.name}</h2>

            {screenshots.map((ss) => {
              const annotations = state.annotations.filter((a) => a.screenshotId === ss.id)

              return (
                <div
                  key={ss.id}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 p-4 rounded-xl border border-tan bg-sand-light"
                >
                  <AnnotationOverlay
                    screenshot={ss}
                    annotations={annotations}
                    selectedAnnotationId={selectedAnnotationId}
                    onSelectAnnotation={setSelectedAnnotationId}
                    onAddAnnotation={(rect) => handleAddAnnotation(ss.id, rect)}
                    onDeleteAnnotation={handleDeleteAnnotation}
                  />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-deep-muted uppercase tracking-wide">
                      Annotations
                      {annotations.length > 0 && (
                        <span className="ml-1 text-deep-muted/50">
                          · {annotations.reduce((s, a) => s + (a.designHours || 0) + (a.frontendHours || 0) + (a.backendHours || 0), 0)}h
                        </span>
                      )}
                    </h4>
                    <AnnotationList
                      annotations={annotations}
                      selectedAnnotationId={selectedAnnotationId}
                      onSelectAnnotation={setSelectedAnnotationId}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
