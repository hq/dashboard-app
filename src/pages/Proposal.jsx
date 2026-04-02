import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useProject } from '../hooks/useProject'
import useProposalScenarios from '../hooks/useProposalScenarios'
import { buildSitemapFromPages, buildSitemapText } from '../lib/proposalData'
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
import CMSScopeView from '../components/proposal/CMSScopeView'
import CRMScopeView from '../components/proposal/CRMScopeView'
import { useProposalTab } from '../contexts/ProposalTabContext'

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
          {innerTab === 'cms' && <CMSScopeView />}
          {innerTab === 'crm' && <CRMScopeView />}
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
  const scenarios = useProposalScenarios()
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
                {"This isn't a typical website redesign. Visit Salt Lake's digital presence is built on a network of interconnected systems\u2014a CMS, a CRM, membership portals, event feeds, booking integrations, sales tools, and marketing automation\u2014totaling over a dozen third-party services. Many of these systems don't communicate with each other the way they should, creating friction for your team and gaps in the visitor experience."}
              </p>
              <p className="mb-4">
                {"Our approach is to understand the full picture before proposing a solution. We're not starting with wireframes or timelines\u2014we're starting with a comprehensive audit of every system, every integration, every workflow, and every piece of content that powers visitsaltlake.com today. Only after we've mapped the complete landscape will we present a honest estimate of what it takes to rebuild it."}
              </p>
              <h3 className="mb-2 mt-8">Strategy & Discovery</h3>
              <p className="mb-4">
                {"We've structured this engagement in two phases designed to build confidence at every step\u2014yours and ours."}
              </p>
              <p className="mb-4">
                <strong>Phase 1</strong>{" is a high-level assessment of the current site. We've crawled all 7,692 public URLs, audited every page type, documented the navigation and content architecture, mapped third-party integrations, and identified where data flows in and out of the site. This work gives us roughly 80\u201390% confidence in the scope of the marketing website. Phase 1 is nearly complete\u2014the findings are presented in the Discovery section of this proposal."}
              </p>
              <p className="mb-4">
                <strong>Phase 2</strong>{" is where we go deep. This is a paid engagement\u2014typically 3\u20134 weeks\u2014where we conduct a thorough analysis of the systems behind the public site. That means full access to the CMS admin, the CRM, the membership portal, and the sales tools your team uses daily. We'll interview every person who touches these systems to understand their workflows, pain points, and what they can't afford to lose in a transition. Phase 2 covers:"}
              </p>
              <ul className="mb-4 ml-4 list-disc space-y-1">
                <li>{"Full CRM audit\u2014listings, events, partner data, sales pipelines, and how data moves between the CRM and the public website"}</li>
                <li>{"Content migration mapping\u2014field-by-field analysis of what needs to move, what can be archived, and what format the data is in"}</li>
                <li>{"Integration depth assessment\u2014understanding exactly how each vendor connects and what it would take to replace or replicate each one"}</li>
                <li>{"Admin workflow documentation\u2014screen recordings and interviews with staff to ensure the replacement system works for the ~20 people who use it daily"}</li>
                <li>{"Detailed estimate with ranges\u2014grounded in real data, not assumptions"}</li>
              </ul>
              <p className="mb-4">
                {"The goal of Phase 2 is 99% confidence. When we present the final scope and timeline, there should be no surprises for either side."}
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
                {"Our first priority is stability, not novelty. The rebuild will replicate every piece of existing functionality before we add anything new. Your team and your visitors should be able to do everything they do today\u2014search for events, browse listings, submit RFPs, manage memberships, update content\u2014without disruption on day one."}
              </p>
              <p className="mb-4">
                {"Once the foundation is solid, we layer on improvements: faster page loads, better search and filtering, a modern content editing experience, proper accessibility built into the code rather than bolted on as an overlay, and a unified system that replaces the patchwork of disconnected tools your team currently navigates. The architecture will be built to last\u2014clean, maintainable, and designed so you're never locked into a single vendor again."}
              </p>
              <p className="mb-4">
                {"We're targeting a phased delivery: an initial proof of concept that demonstrates the new system across key sections of the site, followed by a full build-out toward launch. This gives your team early visibility into how the new platform works and a chance to provide feedback before we're too deep to adjust course."}
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
                    {"We've audited every page type, mapped every integration, and documented every data flow across visitsaltlake.com. Below is what we found\u2014the complete picture of what powers your site today, and the questions we need answered before we can give you a locked estimate."}
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
              <p className="preheading mb-3">Project Scope</p>
              <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4 text-sm text-deep">
                <p>
                  {"The full rebuild spans 9 work layers\u2014from page templates and CMS platform to data migration, integrations, and launch support. The ranges below reflect our Phase 1 confidence level. Phase 2 will narrow these to locked estimates."}
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-sand-dark/30 rounded-lg">
                    <p className="text-2xl font-bold">{activeScenario.totals?.low.toLocaleString()}&ndash;{activeScenario.totals?.high.toLocaleString()}</p>
                    <p className="text-xs text-deep-muted mt-1">Hours (before contingency)</p>
                  </div>
                  <div className="p-3 bg-sand-dark/30 rounded-lg">
                    <p className="text-2xl font-bold">{activeScenario.withContingency?.low.toLocaleString()}&ndash;{activeScenario.withContingency?.high.toLocaleString()}</p>
                    <p className="text-xs text-deep-muted mt-1">Hours (with {activeScenario.contingencyPercent}% contingency)</p>
                  </div>
                  <div className="p-3 bg-sand-dark/30 rounded-lg">
                    <p className="text-2xl font-bold">9</p>
                    <p className="text-xs text-deep-muted mt-1">Work Layers</p>
                  </div>
                </div>
              </div>
              <ScenarioEstimate
                scenarios={scenarios}
                activeId={activeScenarioId}
              />
            </div>

            <div className="space-y-4">
              <p className="preheading mb-3">Delivery Schedule</p>
              <Timeline />
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
