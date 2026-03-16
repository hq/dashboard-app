import { useState } from 'react'
import useImageUrl from '../../hooks/useImageUrl'

const COLORS = [
  '#264A50', '#FFB584', '#2FB2B8', '#84D7DC', '#335C63',
  '#FAA46A', '#BCAB96', '#FFC198', '#153439', '#9BEFF4',
]

export default function ReadOnlyAnnotationOverlay({ screenshot, annotations }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const src = useImageUrl(screenshot.imageUrl)

  if (!src) {
    return <div className="w-full aspect-video bg-sand-dark animate-pulse rounded-lg" />
  }

  return (
    <div className="relative rounded-lg overflow-hidden">
      <img
        src={src}
        alt=""
        className="w-full block"
        onLoad={() => setImgLoaded(true)}
        draggable={false}
      />
      {imgLoaded && (
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
                strokeWidth={0.003}
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
        </svg>
      )}
    </div>
  )
}
