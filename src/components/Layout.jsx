import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { useRef, useEffect, useState, useCallback } from 'react'
import { PROPOSAL_TABS, useProposalTab } from '../contexts/ProposalTabContext'

const toolLinks = [
  { to: '/tools/capture?internal=true', label: 'Capture' },
  { to: '/tools/estimate?internal=true', label: 'Estimate' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const isInternal = searchParams.get('internal') === 'true'
  const [logoHovered, setLogoHovered] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navRef = useRef(null)
  const tabRefs = useRef(new Map())
  const { activeTab, goTo } = useProposalTab()
  const [underline, setUnderline] = useState({ left: 0, width: 0, visible: false })

  const isProposal = pathname === '/'

  const updateUnderline = useCallback(() => {
    if (!isProposal) {
      setUnderline((prev) => ({ ...prev, visible: false }))
      return
    }
    const activeEl = tabRefs.current.get(activeTab)
    const nav = navRef.current
    if (activeEl && nav) {
      const navRect = nav.getBoundingClientRect()
      const elRect = activeEl.getBoundingClientRect()
      setUnderline({
        left: elRect.left - navRect.left,
        width: elRect.width,
        visible: true,
      })
    }
  }, [isProposal, activeTab])

  useEffect(() => {
    updateUnderline()
  }, [updateUnderline])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setToolsOpen(false)
      }
    }
    if (toolsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [toolsOpen])

  return (
    <div className="min-h-screen bg-sand">
      <header className="fixed top-0 left-0 w-full h-20 bg-sand-light z-50 flex items-center">
        <NavLink
          to="/"
          onClick={() => goTo(0)}
          className="h-full"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <img
            src={`/assets/hq-logo-deep-sea${logoHovered ? '-hover' : ''}.svg`}
            alt="HQ"
            className="h-full w-auto"
          />
        </NavLink>

        {/* Proposal tabs */}
        {isProposal && (
          <nav ref={navRef} className="relative flex items-center gap-6 ml-8 overflow-x-auto pr-4">
            {PROPOSAL_TABS.map((tab, i) => (
              <button
                key={tab.id}
                ref={(el) => { if (el) tabRefs.current.set(i, el) }}
                onClick={() => goTo(i)}
                className={`nav-link text-base font-semibold transition-colors whitespace-nowrap py-3 ${
                  activeTab === i
                    ? 'text-deep'
                    : 'text-deep hover:text-sky-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <span
              className="absolute bottom-0 h-[2px] bg-sky"
              style={{
                left: underline.left,
                width: underline.width,
                opacity: underline.visible ? 1 : 0,
                transition: 'left 0.3s ease, width 0.3s ease',
              }}
            />
          </nav>
        )}

        {/* Tools dropdown, only visible in internal mode */}
        {isInternal && (
          <div className="ml-auto mr-6 relative" ref={dropdownRef}>
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-black/25 hover:text-black/40 transition-colors"
            >
              Tools
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor" style={{ transform: toolsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {toolsOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-black/10 shadow-lg py-1">
                {toolLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setToolsOpen(false)}
                    className="block px-4 py-2 text-sm text-black/30 hover:text-black/50 transition-colors"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        )}
      </header>
      <div className="pt-20">
        <main className="max-w-[1400px] mx-auto px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
