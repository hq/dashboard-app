import { useState, useRef, useEffect, useCallback } from 'react'
import useProposalScenarios from '../hooks/useProposalScenarios'
import ScenarioComparison from '../components/proposal/ScenarioComparison'
import ScenarioEstimate from '../components/proposal/ScenarioEstimate'
import VslSitemap from '../components/proposal/VslSitemap'
import CMSScopeView from '../components/proposal/CMSScopeView'
import CRMScopeView from '../components/proposal/CRMScopeView'
import Timeline from '../components/proposal/Timeline'
import GradientText from '../components/GradientText'
import RippleWaves from '../components/RippleWaves'
import ParticleLogos from '../components/ParticleLogos'
import DiscoveryDashboard from '../components/proposal/DiscoveryDashboard'
import { PROPOSAL_TABS, useProposalTab } from '../contexts/ProposalTabContext'

// Flat scope sub-tabs: Marketing / CMS / CRM (no outer sitemap/screenshots nesting)
const SCOPE_TABS = [
  { id: 'marketing', name: 'Marketing Site' },
  { id: 'cms', name: 'CMS' },
  { id: 'crm', name: 'CRM' },
]

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

// Phase 2 deliverables for the "Next Steps" tab
const PHASE_2_DELIVERABLES = [
  {
    title: 'CRM Backend Audit',
    description: 'Full access to Simpleview CRM to document listing management workflows, event creation, partner self-service, sales pipelines, and automations.',
    priority: 'critical',
  },
  {
    title: 'Content Migration Mapping',
    description: 'Field-by-field analysis of every content type: what moves, what gets archived, and how relationships (listing → category, event → venue) are preserved.',
    priority: 'critical',
  },
  {
    title: 'Integration Depth Assessment',
    description: 'Deep dive into each of the 28+ third-party services: connection mechanisms, data flows, API contracts, and replacement strategies.',
    priority: 'high',
  },
  {
    title: 'Admin Workflow Documentation',
    description: 'Screen recordings and interviews with the ~20 daily CMS users to ensure the replacement system matches their real workflows.',
    priority: 'high',
  },
  {
    title: 'Detailed Wireframes & Prototypes',
    description: 'Interactive prototypes for key page templates, the CMS admin interface, and complex user flows like booking, trip planning, and partner portal.',
    priority: 'high',
  },
  {
    title: 'Locked Estimate with Ranges',
    description: 'Final scope, timeline, and pricing grounded in real data, not assumptions. Ranges narrow from Phase 1 confidence (80-90%) to Phase 2 confidence (99%).',
    priority: 'critical',
  },
]

export default function Proposal() {
  const { activeTab, goTo } = useProposalTab()
  const [activeScenarioId, setActiveScenarioId] = useState('2026')
  const [activeScopeTab, setActiveScopeTab] = useState('marketing')

  const scenarios = useProposalScenarios()
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0]

  return (
    <div className="space-y-6">
      <div>
        {/* Tab 0: The Opportunity */}
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
                We conducted a comprehensive analysis of visitsaltlake.com, mapping every page template, content type, integration, and backend feature across both the public website and CMS admin. Our research spans 38 documents covering the full public site, 28+ third-party integrations, and the complete Simpleview CMS backend.
              </p>
              <p className="mb-4">
                The goal is a complete custom platform rebuild, replacing both Simpleview CMS and CRM with a modern, flexible system that gives Visit Salt Lake full ownership of their digital presence. The first phase delivers a 1-to-1 rebuild with exact feature parity; enhancements come after.
              </p>
            </div>

            <div className="max-w-[600px] mx-auto text-sm text-deep leading-relaxed mt-10">
              <h3 className="mb-2">Design & Development</h3>
              <p className="mb-4">
                The rebuild will deliver a custom-built platform: a modern marketing website, content management system, and admin panel purpose-built for Visit Salt Lake's needs. No more dependency on proprietary tourism CMS platforms. Full flexibility to build, extend, and evolve.
              </p>
              <p className="mb-4">
                We'll replicate every page template with responsive design, matching the current navigation patterns and interactive features (faceted filters, date pickers, trip planner, compare tool, booking widgets, and persistent cart) rebuilt with modern frameworks for better performance and maintainability.
              </p>
              <p className="mb-4">
                Performance is a key opportunity. The current site has significant room for improvement on mobile load times and core web vitals. With modern server-side rendering, optimized image delivery, and code splitting, we'll transform the visitor experience while preserving strong SEO and improving accessibility.
              </p>
            </div>

            <div className="mt-16 -mx-6 h-[200px] md:h-[300px]">
              <ParticleLogos />
            </div>
          </>
        )}

        {/* Tab 1: What We Found */}
        {activeTab === 1 && (
          <div>
            <div className="-mx-6 -mt-6 bg-deep md:h-[342px] flex flex-col md:flex-row">
              <img src="/assets/hero-discovery.jpg" alt="" className="h-48 md:h-full w-full md:w-auto object-cover object-center" />
              <div className="flex items-center px-6 py-8 md:ml-[80px] md:px-0 md:py-0">
                <div>
                  <p className="preheading text-orange mb-4">Discovery</p>
                  <h1 className="text-white">What We Found</h1>
                </div>
              </div>
            </div>
            <div className="-mx-6 relative bg-orange md:h-[342px] flex flex-col md:flex-row">
              <div className="h-24 md:h-full w-full md:w-[337px] shrink-0 bg-orange-dark relative overflow-hidden">
                <img
                  src="/assets/waves-use-on-orange-or-sky-blue-bg.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center flex-1 px-6 py-8 md:ml-[80px] md:pr-16 md:px-0 md:py-0">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-[80px] w-full">
                  <div className="md:max-w-[400px] shrink-0">
                    <p className="preheading text-deep/50 mb-4">Discovery</p>
                    <h2 className="text-deep">Our Approach</h2>
                  </div>
                  <p className="text-deep md:max-w-[430px] md:ml-auto">
                    We analyzed every layer of your site, from the public frontend templates and URL structure, through the CMS admin with its content types and workflows, down to the media library, taxonomy systems, and third-party integrations. The results are broken down below.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <DiscoveryDashboard />
            </div>

            {/* Scope breakdown: Marketing / CMS / CRM */}
            <div className="mt-8 space-y-4">
              <p className="preheading mb-1">Scope Breakdown</p>
              <FilterButtonGroup
                options={SCOPE_TABS}
                activeId={activeScopeTab}
                onChange={setActiveScopeTab}
              />
              {activeScopeTab === 'marketing' && <VslSitemap />}
              {activeScopeTab === 'cms' && <CMSScopeView />}
              {activeScopeTab === 'crm' && <CRMScopeView />}
            </div>
          </div>
        )}

        {/* Tab 2: How We Deliver: scenarios + comparison + timeline */}
        {activeTab === 2 && (
          <div className="space-y-8">
            <div className="-mx-6 -mt-6 bg-deep md:h-[342px] flex flex-col md:flex-row">
              <img src="/assets/hero-scenarios.jpg" alt="" className="h-48 md:h-full w-full md:w-auto object-cover object-center" />
              <div className="flex items-center px-6 py-8 md:ml-[80px] md:px-0 md:py-0">
                <div>
                  <p className="preheading text-orange mb-4">Delivery</p>
                  <h1 className="text-white">How We Deliver</h1>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="preheading mb-3">Launch Scenarios</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-deep">
                <div className="p-4 border-l-4 border-l-sky border border-tan bg-sand-light">
                  <p className="font-bold mb-1">Launch in 2026</p>
                  <p>
                    An aggressive, reduced-scope timeline that prioritizes the most impactful screens
                    and features to hit a 2026 launch date. Design, frontend, and backend effort is
                    scaled down to focus on core deliverables.
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-orange border border-tan bg-sand-light">
                  <p className="font-bold mb-1">Launch in 2027</p>
                  <p>
                    The full-scope build covering every screen and feature across all modules. This
                    timeline allows for a comprehensive implementation with no compromises on
                    functionality or polish.
                  </p>
                </div>
              </div>
              <ScenarioEstimate
                scenarios={scenarios}
                activeId={activeScenarioId}
              />
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

        {/* Tab 3: Next Steps: Phase 2 deliverables list */}
        {activeTab === 3 && (
          <div className="space-y-8">
            <div className="-mx-6 -mt-6 bg-deep md:h-[342px] flex flex-col md:flex-row">
              <img src="/assets/hero-estimate.jpg" alt="" className="h-48 md:h-full w-full md:w-auto object-cover object-center" />
              <div className="flex items-center px-6 py-8 md:ml-[80px] md:px-0 md:py-0">
                <div>
                  <p className="preheading text-orange mb-4">What's Next</p>
                  <h1 className="text-white">Next Steps</h1>
                </div>
              </div>
            </div>

            <div className="max-w-[800px]">
              <p className="text-sm text-deep leading-relaxed mb-6">
                Phase 1 gave us 80-90% confidence in the scope of the marketing website. Phase 2 is where we go deep: a paid engagement (typically 3-4 weeks) that delivers the remaining 10-20% of understanding needed to lock the final scope, timeline, and price.
              </p>

              <p className="preheading mb-4">Phase 2 Deliverables</p>
              <div className="space-y-3">
                {PHASE_2_DELIVERABLES.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 border border-tan bg-sand-light">
                    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded flex-shrink-0 mt-0.5 ${
                      item.priority === 'critical' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.priority}
                    </span>
                    <div>
                      <p className="font-semibold text-sm text-deep">{item.title}</p>
                      <p className="text-xs text-deep-muted mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 border border-tan bg-sand-light">
                <p className="font-semibold text-sm text-deep mb-2">The goal of Phase 2</p>
                <p className="text-sm text-deep-muted">
                  99% confidence. When we present the final scope and timeline, there should be no surprises for either side. Every content type mapped field-by-field, every integration tested end-to-end, every workflow documented with the people who use it daily.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 border border-tan bg-sand-light">
                  <p className="text-2xl font-bold text-deep">3-4</p>
                  <p className="text-xs text-deep-muted mt-1">Weeks</p>
                </div>
                <div className="p-4 border border-tan bg-sand-light">
                  <p className="text-2xl font-bold text-deep">6</p>
                  <p className="text-xs text-deep-muted mt-1">Deliverables</p>
                </div>
                <div className="p-4 border border-tan bg-sand-light">
                  <p className="text-2xl font-bold text-deep">99%</p>
                  <p className="text-xs text-deep-muted mt-1">Confidence Target</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Previous / Next navigation: uses PROPOSAL_TABS labels */}
      <div className="flex items-center justify-between border-t border-tan pt-4">
        <button
          onClick={() => goTo(activeTab - 1)}
          disabled={activeTab === 0}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors ${
            activeTab === 0
              ? 'text-deep-muted/40 cursor-not-allowed'
              : 'text-deep hover:text-deep-dark'
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 3L5 8l5 5V3z" />
          </svg>
          {activeTab > 0 ? PROPOSAL_TABS[activeTab - 1].label : 'Previous'}
        </button>

        <button
          onClick={() => goTo(activeTab + 1)}
          disabled={activeTab === PROPOSAL_TABS.length - 1}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors ${
            activeTab === PROPOSAL_TABS.length - 1
              ? 'text-deep-muted/40 cursor-not-allowed'
              : 'text-deep hover:text-deep-dark'
          }`}
        >
          {activeTab < PROPOSAL_TABS.length - 1 ? PROPOSAL_TABS[activeTab + 1].label : 'Next'}
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 3l5 5-5 5V3z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
