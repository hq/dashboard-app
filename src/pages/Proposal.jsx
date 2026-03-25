import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useProject } from '../hooks/useProject'
import useProposalScenarios from '../hooks/useProposalScenarios'
import { buildSitemapFromPages, buildSitemapText, MODULE_CATEGORIES } from '../lib/proposalData'
import ScenarioComparison from '../components/proposal/ScenarioComparison'
import ScenarioEstimate from '../components/proposal/ScenarioEstimate'
import Sitemap from '../components/proposal/Sitemap'
import VslSitemap from '../components/proposal/VslSitemap'
import ScreensBreakdown from '../components/proposal/ScreensBreakdown'
import Timeline from '../components/proposal/Timeline'
import PopIn from '../components/PopIn'
import GradientText from '../components/GradientText'
import RippleWaves from '../components/RippleWaves'
import ParticleLogos from '../components/ParticleLogos'
import InteractiveWavesGraphic from '../components/InteractiveWavesGraphic'
import PhonePopIn from '../components/PhonePopIn'
import DiscoveryDashboard from '../components/proposal/DiscoveryDashboard'
import { useProposalTab } from '../contexts/ProposalTabContext'

const MODULE_OPTIONS = [{ id: 'all', name: 'All' }, ...MODULE_CATEGORIES]

const SCOPE_OUTER_TABS = [
  { id: 'sitemap', name: 'Site Map' },
  { id: 'screenshots', name: 'Screenshots' },
]

const SCOPE_INNER_TABS = [
  { id: 'marketing', name: 'Marketing Site' },
  { id: 'cms', name: 'CMS' },
  { id: 'crm', name: 'CRM' },
]

function ScopeTabBar({ tabs, activeId, onChange }) {
  return (
    <div className="flex gap-1 border-b border-tan">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${
            activeId === tab.id
              ? 'border-deep text-deep'
              : 'border-transparent text-deep-muted hover:text-deep'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

function ScopeTabs() {
  const [outerTab, setOuterTab] = useState('sitemap')
  const [innerTab, setInnerTab] = useState('marketing')

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <FilterButtonGroup
          options={SCOPE_OUTER_TABS}
          activeId={outerTab}
          onChange={setOuterTab}
        />
        <FilterButtonGroup
          options={SCOPE_INNER_TABS}
          activeId={innerTab}
          onChange={setInnerTab}
        />
      </div>

      {outerTab === 'sitemap' && (
        <>
          {innerTab === 'marketing' && <VslSitemap />}
          {innerTab === 'cms' && (
            <div className="rounded-xl border border-tan bg-sand-light p-8 text-center text-sm text-deep-muted">
              CMS sitemap coming soon — pending admin access.
            </div>
          )}
          {innerTab === 'crm' && (
            <div className="rounded-xl border border-tan bg-sand-light p-8 text-center text-sm text-deep-muted">
              CRM sitemap coming soon — pending admin access.
            </div>
          )}
        </>
      )}

      {outerTab === 'screenshots' && (
        <>
          {innerTab === 'marketing' && (
            <>
              <ScreensBreakdown />
              <div className="flex justify-center">
                <button className="btn-draw-border text-sm">
                  See all 1,041
                </button>
              </div>
            </>
          )}
          {innerTab === 'cms' && (
            <div className="rounded-xl border border-tan bg-sand-light p-8 text-center text-sm text-deep-muted">
              CMS screenshots coming soon — pending admin access.
            </div>
          )}
          {innerTab === 'crm' && (
            <div className="rounded-xl border border-tan bg-sand-light p-8 text-center text-sm text-deep-muted">
              CRM screenshots coming soon — pending admin access.
            </div>
          )}
        </>
      )}
    </div>
  )
}

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

export default function Proposal() {
  const { state } = useProject()
  const { activeTab, goTo } = useProposalTab()
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

  return (
    <div className="space-y-6">
      {/* Tab content */}
      <div>
        {/* Intro (hero + approach) */}
        {activeTab === 0 && (
          <>
            <div className="relative -mx-6 -mt-6 overflow-hidden" style={{ minHeight: '480px', background: 'var(--accent)' }}>
              <RippleWaves />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24" style={{ minHeight: '480px' }}>
                <p className="preheading mb-4" style={{ color: '#FFB584' }}>Website Rebuild Proposal</p>
                <h1 className="jumbo text-white mb-6">Visit Salt Lake <GradientText text="Rebuild" /></h1>
                <button onClick={() => goTo(1)} className="btn-fill-up" style={{ '--fill-bg': '#84D7DC', '--fill-hover': '#FFB584', '--fill-text': '#264A50', '--fill-hover-text': '#264A50' }}>
                  <span>Explore the Proposal</span>
                </button>
              </div>
            </div>

            <div className="max-w-[600px] mx-auto text-sm text-deep leading-relaxed mt-10">
              <h3 className="mb-2">Approach</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h3 className="mb-2 mt-8">Strategy & Discovery</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="mb-4">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="mb-4">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
            </div>

            <div className="relative overflow-hidden -mx-6" style={{ height: 680 }}>
              <div className="absolute overflow-hidden" style={{ top: 40, bottom: 40, left: 0, right: 0 }}>
                <InteractiveWavesGraphic />
              </div>
              <PhonePopIn />
            </div>

            <div className="max-w-[600px] mx-auto text-sm text-deep leading-relaxed mt-10">
              <h3 className="mb-2">Design & Development</h3>
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

            <div className="mt-16 -mx-6" style={{ height: '300px' }}>
              <ParticleLogos />
            </div>
          </>
        )}

        {/* Scope (sitemap + screens) */}
        {activeTab === 2 && (
          <div className="space-y-8">
            <div className="-mx-6 -mt-6 bg-deep h-[342px] flex">
              <img src="/assets/hero-scope.jpg" alt="" className="h-full w-auto object-cover object-center" />
              <div className="flex items-center ml-[80px]">
                <div>
                  <p className="preheading text-orange mb-4">Scope</p>
                  <h1 className="text-white">Site Architecture</h1>
                </div>
              </div>
            </div>
            <ScopeTabs />
          </div>
        )}

        {/* Discovery */}
        {activeTab === 1 && (
          <div>
            <div className="-mx-6 -mt-6 bg-deep h-[342px] flex">
              <img src="/assets/hero-discovery.jpg" alt="" className="h-full w-auto object-cover object-center" />
              <div className="flex items-center ml-[80px]">
                <div>
                  <p className="preheading text-orange mb-4">Discovery</p>
                  <h1 className="text-white">What We Found</h1>
                </div>
              </div>
            </div>
            <div className="-mx-6 relative bg-orange h-[342px] flex">
              <div className="h-full w-[337px] shrink-0 bg-orange-dark relative overflow-hidden">
                <img
                  src="/assets/waves-use-on-orange-or-sky-blue-bg.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-[80px] pr-16">
                <div className="flex items-start gap-[80px] w-full">
                  <div className="max-w-[400px] shrink-0">
                    <p className="preheading text-deep/50 mb-4">Discovery</p>
                    <h2 className="text-deep">Our Approach</h2>
                  </div>
                  <p className="text-deep max-w-[430px] ml-auto">
                    Lorem ipsum the larger the company, the more challenging it is to innovate and push projects through like a nimble startup can. We bring speed, ambition, and Swiss Army skillsets to supplement existing teams. We help you navigate changing markets by building better products.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <DiscoveryDashboard />
            </div>
          </div>
        )}

        {/* Estimate */}
        {activeTab === 3 && (
          <div className="space-y-8">
            <div className="-mx-6 -mt-6 bg-deep h-[342px] flex">
              <img src="/assets/hero-estimate.jpg" alt="" className="h-full w-auto object-cover object-center" />
              <div className="flex items-center ml-[80px]">
                <div>
                  <p className="preheading text-orange mb-4">Estimate</p>
                  <h1 className="text-white">Project Investment</h1>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
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
          </div>
        )}

        {/* Scenarios (comparison + timeline) */}
        {activeTab === 4 && (
          <div className="space-y-8">
            <div className="-mx-6 -mt-6 bg-deep h-[342px] flex">
              <img src="/assets/hero-scenarios.jpg" alt="" className="h-full w-auto object-cover object-center" />
              <div className="flex items-center ml-[80px]">
                <div>
                  <p className="preheading text-orange mb-4">Scenarios</p>
                  <h1 className="text-white">Launch Options</h1>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="preheading mb-3">Launch Scenarios</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-deep">
                <div className="p-4 border border-tan bg-sand-light">
                  <p className="font-bold mb-1">Launch in 2026</p>
                  <p>
                    An aggressive, reduced-scope timeline that prioritizes the most impactful screens
                    and features to hit a 2026 launch date. Design, frontend, and backend hours are
                    scaled down to focus on core deliverables.
                  </p>
                </div>
                <div className="p-4 border border-tan bg-sand-light">
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

            <div className="space-y-4">
              <p className="preheading mb-3">Delivery Schedule</p>
              <FilterButtonGroup
                options={scenarios}
                activeId={activeScenarioId}
                onChange={setActiveScenarioId}
              />
              <Timeline scenarioHours={activeScenario.hours} />
            </div>
          </div>
        )}
      </div>

      {/* Previous / Next navigation */}
      <div className="flex items-center justify-between border-t border-tan pt-4">
        <button
          onClick={() => goTo(activeTab - 1)}
          disabled={activeTab === 0}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors ${
            activeTab === 0
              ? 'text-tan cursor-not-allowed'
              : 'text-deep hover:text-deep-dark'
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 3L5 8l5 5V3z" />
          </svg>
          {activeTab > 0 ? ['Intro', 'Discovery', 'Scope', 'Estimate', 'Scenarios'][activeTab - 1] : 'Previous'}
        </button>

        <button
          onClick={() => goTo(activeTab + 1)}
          disabled={activeTab === 4}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors ${
            activeTab === 4
              ? 'text-tan cursor-not-allowed'
              : 'text-deep hover:text-deep-dark'
          }`}
        >
          {activeTab < 4 ? ['Intro', 'Discovery', 'Scope', 'Estimate', 'Scenarios'][activeTab + 1] : 'Next'}
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 3l5 5-5 5V3z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
