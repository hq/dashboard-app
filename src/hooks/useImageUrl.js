import { useState, useEffect } from 'react'
import { idbGet } from '../lib/db'

/**
 * Resolves an image URL. If it starts with "idb://", loads the data from
 * IndexedDB and creates a blob URL. Regular URLs pass through unchanged.
 */
export default function useImageUrl(url) {
  const [resolved, setResolved] = useState(() =>
    url && !url.startsWith('idb://') ? url : null
  )

  useEffect(() => {
    if (!url) {
      setResolved(null)
      return
    }
    if (!url.startsWith('idb://')) {
      setResolved(url)
      return
    }

    let revoke = null
    const key = url.slice('idb://'.length)
    idbGet(key).then((dataUrl) => {
      if (!dataUrl) return
      // Convert data URL to blob URL for efficient rendering
      fetch(dataUrl)
        .then((r) => r.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob)
          revoke = blobUrl
          setResolved(blobUrl)
        })
    })

    return () => {
      if (revoke) URL.revokeObjectURL(revoke)
    }
  }, [url])

  return resolved
}
