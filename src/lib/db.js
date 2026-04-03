// Cloud API for shared state via Vercel Blob, with localStorage + IndexedDB fallbacks

// --- IndexedDB helper ---
const IDB_NAME = 'estimate-screenshots'
const IDB_STORE = 'images'

function openIDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(IDB_STORE)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

export async function idbGet(key) {
  const db = await openIDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readonly')
    const req = tx.objectStore(IDB_STORE).get(key)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function idbSet(key, value) {
  const db = await openIDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite')
    tx.objectStore(IDB_STORE).put(value, key)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

async function idbDelete(key) {
  const db = await openIDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite')
    tx.objectStore(IDB_STORE).delete(key)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

// --- localStorage helpers ---
const LS_KEY = 'estimate-app-state'

function lsLoad() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function lsSave(state) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state))
  } catch {
    // localStorage full or unavailable; ignore
  }
}

// --- Public API ---

export async function saveScreenshotImage(id, dataUrl) {
  // Try cloud first
  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, dataUrl }),
    })
    if (!res.ok) throw new Error('upload failed')
    const { url } = await res.json()
    return url
  } catch {
    // Fallback: store in IndexedDB
    const key = `screenshot-${id}`
    await idbSet(key, dataUrl)
    return `idb://${key}`
  }
}

export async function deleteScreenshotImage(imageUrl) {
  if (!imageUrl) return
  if (imageUrl.startsWith('idb://')) {
    const key = imageUrl.slice('idb://'.length)
    await idbDelete(key).catch(() => {})
  } else {
    await fetch('/api/delete-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: imageUrl }),
    }).catch(() => {})
  }
}

export async function loadState() {
  // Try cloud first
  try {
    const res = await fetch('/api/state', { cache: 'no-store' })
    if (!res.ok) throw new Error('cloud load failed')
    const data = await res.json()
    if (data && (data.screenshots?.length || data.annotations?.length)) {
      return data
    }
  } catch {
    // cloud unavailable
  }
  // Fall back to localStorage
  return lsLoad()
}

export async function saveState(state) {
  // Always save to localStorage as backup
  lsSave(state)
  // Try cloud (fire-and-forget)
  try {
    await fetch('/api/state', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    })
  } catch {
    // cloud unavailable; localStorage already saved
  }
}

export async function clearAllScreenshotImages(screenshots) {
  await Promise.all(
    screenshots
      .filter((s) => s.imageUrl)
      .map((s) => deleteScreenshotImage(s.imageUrl))
  )
}
