import { useState, useRef, useCallback, useEffect } from 'react'
import useImageUrl from '../hooks/useImageUrl'

const COLORS = [
  '#264A50', '#FFB584', '#2FB2B8', '#84D7DC', '#335C63',
  '#FAA46A', '#BCAB96', '#FFC198', '#153439', '#9BEFF4',
]

export default function AnnotationOverlay({
  screenshot,
  annotations,
  selectedAnnotationId,
  onSelectAnnotation,
  onAddAnnotation,
  onDeleteAnnotation,
}) {
  const containerRef = useRef(null)
  const [drawing, setDrawing] = useState(null) // { startX, startY, currentX, currentY }
  const [imgLoaded, setImgLoaded] = useState(false)
  const src = useImageUrl(screenshot.imageUrl)

  const getRelativeCoords = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect()
    return {
      x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
    }
  }, [])

  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return
    const coords = getRelativeCoords(e)
    setDrawing({ startX: coords.x, startY: coords.y, currentX: coords.x, currentY: coords.y })
  }, [getRelativeCoords])

  const handleMouseMove = useCallback((e) => {
    if (!drawing) return
    const coords = getRelativeCoords(e)
    setDrawing((d) => ({ ...d, currentX: coords.x, currentY: coords.y }))
  }, [drawing, getRelativeCoords])

  const handleMouseUp = useCallback(() => {
    if (!drawing) return
    const x = Math.min(drawing.startX, drawing.currentX)
    const y = Math.min(drawing.startY, drawing.currentY)
    const w = Math.abs(drawing.currentX - drawing.startX)
    const h = Math.abs(drawing.currentY - drawing.startY)

    if (w > 0.01 && h > 0.01) {
      onAddAnnotation({ x, y, width: w, height: h })
    } else {
      // Tiny click: check if inside an existing annotation to select it
      const clickX = drawing.startX
      const clickY = drawing.startY
      const clicked = [...annotations].reverse().find((a) =>
        clickX >= a.x && clickX <= a.x + a.width &&
        clickY >= a.y && clickY <= a.y + a.height
      )
      onSelectAnnotation(clicked ? clicked.id : null)
    }

    setDrawing(null)
  }, [drawing, annotations, onAddAnnotation, onSelectAnnotation])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'Escape') {
        setDrawing(null)
        onSelectAnnotation(null)
      }
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedAnnotationId) {
        onDeleteAnnotation(selectedAnnotationId)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selectedAnnotationId, onDeleteAnnotation, onSelectAnnotation])

  const drawRect = drawing ? {
    x: Math.min(drawing.startX, drawing.currentX),
    y: Math.min(drawing.startY, drawing.currentY),
    w: Math.abs(drawing.currentX - drawing.startX),
    h: Math.abs(drawing.currentY - drawing.startY),
  } : null

  if (!src) {
    return <div className="w-full aspect-video bg-sand-dark animate-pulse rounded-lg" />
  }

  return (
    <div
      ref={containerRef}
      className="relative select-none rounded-lg overflow-hidden"
    >
      <img
        src={src}
        alt=""
        className="w-full block"
        onLoad={() => setImgLoaded(true)}
        draggable={false}
      />
      {imgLoaded && (
        <>
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
          >
            {annotations.map((a, i) => (
              <g key={a.id}>
                <rect
                  x={a.x}
                  y={a.y}
                  width={a.width}
                  height={a.height}
                  fill={`${COLORS[i % COLORS.length]}20`}
                  stroke={COLORS[i % COLORS.length]}
                  strokeWidth={selectedAnnotationId === a.id ? 0.006 : 0.003}
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx={a.x}
                  cy={a.y}
                  r={0.015}
                  fill={COLORS[i % COLORS.length]}
                />
                <text
                  x={a.x}
                  y={a.y + 0.004}
                  fontSize={0.02}
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontWeight="bold"
                >
                  {i + 1}
                </text>
              </g>
            ))}
            {drawRect && (
              <rect
                x={drawRect.x}
                y={drawRect.y}
                width={drawRect.w}
                height={drawRect.h}
                fill="rgba(38,74,80,0.1)"
                stroke="#264A50"
                strokeWidth={0.003}
                strokeDasharray="0.01 0.005"
              />
            )}
          </svg>
          <div
            className="absolute inset-0 cursor-crosshair"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { if (drawing) handleMouseUp() }}
          />
        </>
      )}
    </div>
  )
}
