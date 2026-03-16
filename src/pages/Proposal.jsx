import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useProject } from '../hooks/useProject'
import useProposalScenarios from '../hooks/useProposalScenarios'
import { buildSitemapFromPages, buildSitemapText, MODULE_CATEGORIES } from '../lib/proposalData'
import ScenarioComparison from '../components/proposal/ScenarioComparison'
import ScenarioEstimate from '../components/proposal/ScenarioEstimate'
import Sitemap from '../components/proposal/Sitemap'
import ScreensBreakdown from '../components/proposal/ScreensBreakdown'
import Timeline from '../components/proposal/Timeline'

const MODULE_OPTIONS = [{ id: 'all', name: 'All' }, ...MODULE_CATEGORIES]

function FilterButtonGroup({ options, activeId, onChange }) {
  const containerRef = useRef(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const ready = useRef(false)

  const updateIndicator = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const activeBtn = container.querySelector(`[data-id="${activeId}"]`)
    if (!activeBtn) return
    const containerRect = container.getBoundingClientRect()
    const btnRect = activeBtn.getBoundingClientRect()
    setIndicator({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    })
    ready.current = true
  }, [activeId])

  useEffect(() => {
    updateIndicator()
  }, [updateIndicator])

  return (
    <div ref={containerRef} className="relative inline-flex rounded-lg border border-tan bg-sand-dark p-1 gap-1">
      <div
        className="absolute top-1 rounded-md bg-white shadow-sm"
        style={{
          left: indicator.left,
          width: indicator.width,
          height: 'calc(100% - 8px)',
          transition: ready.current ? 'left 250ms cubic-bezier(0.4, 0, 0.2, 1), width 250ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }}
      />
      {options.map((opt) => (
        <button
          key={opt.id}
          data-id={opt.id}
          onClick={() => onChange(opt.id)}
          className={`relative z-10 px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
            activeId === opt.id
              ? 'text-deep'
              : 'text-deep-muted hover:text-deep'
          }`}
        >
          {opt.name}
        </button>
      ))}
    </div>
  )
}

function CollapsibleSection({ title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <section>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 w-full text-left group mb-4"
      >
        <svg
          className={`w-4 h-4 text-deep-muted transition-transform ${open ? 'rotate-90' : ''}`}
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M6 3l5 5-5 5V3z" />
        </svg>
        <h2 className="text-xl font-bold text-deep group-hover:text-deep transition-colors">
          {title}
        </h2>
      </button>
      {open && children}
    </section>
  )
}

export default function Proposal() {
  const { state } = useProject()
  const [activeScenarioId, setActiveScenarioId] = useState('2026')
  const [activeModuleId, setActiveModuleId] = useState('all')

  const scenarios = useProposalScenarios(activeModuleId)
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0]

  const sitemapRoot = useMemo(
    () => buildSitemapFromPages(state.pages),
    [state.pages]
  )

  const handleClickPage = (pageId) => {
    const el = document.getElementById(pageId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleDownloadSitemap = () => {
    const text = buildSitemapText(sitemapRoot)
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'sitemap.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  // Empty state
  if (state.pages.length === 0 && state.screenshots.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-deep-muted mb-2">No project data yet.</p>
        <p className="text-sm text-deep-muted">
          Go to{' '}
          <Link to="/" className="text-deep underline underline-offset-2">
            Capture
          </Link>{' '}
          to upload a video and capture screenshots, then{' '}
          <Link to="/estimate" className="text-deep underline underline-offset-2">
            Estimate
          </Link>{' '}
          to annotate hours.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <CollapsibleSection title="Scenarios">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-deep">
            <div className="p-4 rounded-xl border border-tan bg-sand-light">
              <p className="font-bold mb-1">Launch in 2026</p>
              <p>
                An aggressive, reduced-scope timeline that prioritizes the most impactful screens
                and features to hit a 2026 launch date. Design, frontend, and backend hours are
                scaled down to focus on core deliverables.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-tan bg-sand-light">
              <p className="font-bold mb-1">Launch in 2027</p>
              <p>
                The full-scope build covering every screen and feature across all modules. This
                timeline allows for a comprehensive implementation with no compromises on
                functionality or polish.
              </p>
            </div>
          </div>
          <ScenarioComparison scenarios={scenarios} />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Sitemap">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <FilterButtonGroup
              options={MODULE_OPTIONS}
              activeId={activeModuleId}
              onChange={setActiveModuleId}
            />
            <button
              onClick={handleDownloadSitemap}
              className="px-4 py-2 rounded-md text-sm font-semibold border border-tan bg-white text-deep hover:bg-sand-light transition-colors"
            >
              Download text version
            </button>
          </div>
          <Sitemap
            sitemapRoot={sitemapRoot}
            onClickPage={handleClickPage}
            activeModuleId={activeModuleId}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Screens & Annotations">
        <div className="space-y-4">
          <ScreensBreakdown />
          <div className="flex justify-center">
            <button className="px-5 py-2 rounded-md text-sm font-semibold border border-tan bg-white text-deep hover:bg-sand-light transition-colors">
              See all 1,041
            </button>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Approach">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 text-sm text-deep leading-relaxed">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="mb-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="mb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <p className="mb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </p>
          <p className="mb-4">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </p>
          <p className="mb-4">
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Project Timeline">
        <div className="space-y-4">
          <FilterButtonGroup
            options={scenarios}
            activeId={activeScenarioId}
            onChange={setActiveScenarioId}
          />
          <Timeline scenarioHours={activeScenario.hours} />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Project Estimate">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <FilterButtonGroup
              options={scenarios}
              activeId={activeScenarioId}
              onChange={setActiveScenarioId}
            />
            <FilterButtonGroup
              options={MODULE_OPTIONS}
              activeId={activeModuleId}
              onChange={setActiveModuleId}
            />
          </div>
          <ScenarioEstimate
            scenarios={scenarios}
            activeId={activeScenarioId}
          />
        </div>
      </CollapsibleSection>
    </div>
  )
}
