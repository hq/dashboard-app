import { useState, useRef, useEffect, useCallback } from 'react'
import useProposalScenarios from '../hooks/useProposalScenarios'
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

// Flat scope sub-tabs: Marketing / CMS / CRM
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
    description: 'Field-by-field analysis of every content type: what moves, what gets archived, and how relationships (listing to category, event to venue) are preserved.',
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

// Prev/Next navigation component, placed at the top of content on each tab
function TabNav() {
  const { activeTab, goTo } = useProposalTab()
  return (
    <div className="flex items-center justify-between border-b border-tan pb-4 mb-6">
      <button
        onClick={() => goTo(activeTab - 1)}
        disabled={activeTab === 0}
        className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${
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
        className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${
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
  )
}

export default function Proposal() {
  const { activeTab, goTo } = useProposalTab()
  const [activeScenarioId, setActiveScenarioId] = useState('2026')
  const [activeScopeTab, setActiveScopeTab] = useState('marketing')

  const scenarios = useProposalScenarios()
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0]

  return (
    <div className="space-y-6">
      <div>
        {/* Tab 0: The Objective */}
        {activeTab === 0 && (
          <>
            <div className="relative -mx-6 -mt-6 overflow-hidden" style={{ minHeight: '480px', background: 'var(--accent)' }}>
              <RippleWaves />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24" style={{ minHeight: '480px' }}>
                <p className="preheading mb-4" style={{ color: '#FFB584' }}>Website Rebuild Proposal</p>
                <h1 className="jumbo text-white mb-6">Visit Salt Lake <GradientText text="Rebuild" /></h1>
              </div>
            </div>

            <TabNav />

            <div className="max-w-[700px] mx-auto text-sm text-deep leading-relaxed">
              <h3 className="mb-2">Why This Project</h3>
              <p className="mb-4">
                Visit Salt Lake's digital infrastructure is built on more than a decade of layered systems. The website, CMS, CRM, and 20+ third-party plugins each handle a piece of the operation, but they are expensive and offer a poor user experience. The organization is paying for tools that overlap, conflict, or sit unused, and the current platform provider has limited ability to evolve with the team's needs as it is controlled by Simpleview.
              </p>
              <p className="mb-4">
                The end project is a complete platform rebuild. One system, purpose-built for how Visit Salt Lake operates, replacing the current stack and giving the team full ownership of the digital presence.
              </p>
            </div>

            <div className="max-w-[700px] mx-auto text-sm text-deep leading-relaxed mt-10">
              <h3 className="mb-2">What We Set Out to Answer</h3>
              <p className="mb-4">
                Before proposing anything, we needed to answer some questions: is this project feasible, and can it succeed? Given how important this website is to the organization and the community it serves, we weren't willing to pitch something we did not have an extremely high confidence in.
              </p>
              <p className="mb-4">
                We analyzed the public-facing site and analyzed the CMS. That research produced 38 documents and brought us to roughly 90% confidence that this project can be completed to the high standard of quality we have and will be a significant upgrade for the team.
              </p>
              <p className="mb-4">
                The remaining 10% requires more access to the backend systems and direct conversation with the people who use them. That's what Phase 2 is designed for.
              </p>
            </div>

            <div className="max-w-[700px] mx-auto text-sm text-deep leading-relaxed mt-10">
              <h3 className="mb-2">How It's Structured</h3>
              <p className="mb-4">
                The engagement is three sequential phases, each its own commitment with a decision point at the end. Phase 1 (this research) establishes feasibility. Phase 2 gets inside the systems, validates every assumption, and produces working demos. Phase 3 is the production build.
              </p>
              <p className="mb-4">
                Each phase produces the confidence needed to decide whether and how to proceed to the next. No commitments get made about things that haven't been fully mapped.
              </p>
            </div>

            <div className="mt-16 -mx-6 h-[200px] md:h-[300px]">
              <ParticleLogos />
            </div>
          </>
        )}

        {/* Tab 1: Phase 1 */}
        {activeTab === 1 && (
          <div>
            <div className="-mx-6 -mt-6 bg-deep md:h-[342px] flex flex-col md:flex-row">
              <img src="/assets/hero-discovery.jpg" alt="" className="h-48 md:h-full w-full md:w-auto object-cover object-center" />
              <div className="flex items-center px-6 py-8 md:ml-[80px] md:px-0 md:py-0">
                <div>
                  <p className="preheading text-orange mb-4">Discovery</p>
                  <h1 className="text-white">Phase 1</h1>
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
                    We audited visitsaltlake.com from both sides, crawling the full public site to map page types, user flows, and integrations, and logging into the Simpleview CMS admin to document the page builder, content types, user roles, media library, redirects, and publishing workflows. The main gaps are the CRM, the member/partner portal, events, newsletters, and potentially some of the checkout experiences, all of which we'll need deeper access to scope accurately in Phase 2.
                  </p>
                </div>
              </div>
            </div>

            <TabNav />

            <div className="max-w-[700px] mx-auto mb-10">
              <h3 className="text-deep mb-4">Our Research</h3>
              <p className="text-sm text-deep leading-relaxed mb-4">
                This page is the output of our Phase 1 research. Our primary goal was to determine whether this project is feasible and likely to succeed, given how important this website is to the organization and the community it serves. We took that seriously.
              </p>
              <p className="text-sm text-deep leading-relaxed">
                Over the past several weeks, we independently analyzed the full visitsaltlake.com platform, from the public site through the CMS backend and every third-party integration we could identify. This dashboard is a representation of that work. The research was designed to surface the major risks, and based on what we've found, we're at roughly 90% confidence that this project can be completed successfully within the parameters of success and will be a significant upgrade for the team.
              </p>
            </div>

            <div>
              <DiscoveryDashboard />
            </div>

            {/* Areas of Focus */}
            <div className="mt-8 border border-tan bg-sand-light p-6">
              <p className="preheading mb-3">Areas of Focus</p>
              <p className="text-sm text-deep-muted leading-relaxed mb-6">
                Our research surfaced areas of the site where scope extends well beyond standard page templates. These are the sections where Phase 2 will focus the deepest attention.
              </p>

              <div className="space-y-4">
                <div className="border border-tan bg-white p-5">
                  <p className="font-semibold text-sm text-deep mb-2">Events</p>
                  <p className="text-xs text-deep-muted leading-relaxed">
                    Events represent a significant portion of the pages (~1,800) and functions as a search product with multi-faceted filtering, live counts, date pickers, and geospatial proximity results. It also pulls from an external NowPlayingUtah feed with an unknown integration mechanism, and has an event submission workflow we haven't been able to fully audit.
                  </p>
                </div>

                <div className="border border-tan bg-white p-5">
                  <p className="font-semibold text-sm text-deep mb-2">Members &amp; Partners</p>
                  <p className="text-xs text-deep-muted leading-relaxed">
                    The members section spans three systems: the public site, a Simpleview partner portal behind authentication, and Chargebee for payments. The portal hasn't been auditable, and whether to keep it or replace it is the single largest scope decision in the project.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-tan">
                <p className="text-xs text-deep-muted leading-relaxed">
                  These sections, along with listings, integrations, and admin workflows, have open questions that can only be answered with direct system access and stakeholder interviews. That's what Phase 2 is designed for.
                </p>
              </div>
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

        {/* Tab 2: Phase 2 */}
        {activeTab === 2 && (
          <div className="space-y-8">
            <div className="-mx-6 -mt-6 bg-deep md:h-[342px] flex flex-col md:flex-row">
              <img src="/assets/hero-estimate.jpg" alt="" className="h-48 md:h-full w-full md:w-auto object-cover object-center" />
              <div className="flex items-center px-6 py-8 md:ml-[80px] md:px-0 md:py-0">
                <div>
                  <p className="preheading text-orange mb-4">Deep Dive</p>
                  <h1 className="text-white">Phase 2</h1>
                </div>
              </div>
            </div>

            <TabNav />

            <div className="max-w-[700px] mx-auto mb-10">
              <h3 className="text-deep mb-4">Interactive Demos and Scaffolding</h3>
              <p className="text-sm text-deep leading-relaxed mb-4">
                Phase 1 told us what we can see from the outside. Phase 2 is where we get inside the systems.
              </p>
              <p className="text-sm text-deep leading-relaxed mb-4">
                The research so far covers the public site, the page templates, and the integrations we can verify from the frontend. But the parts of this project that carry the most risk, the CRM, the membership workflows, the partner portal, the sales team's daily processes, can only be understood with direct access and direct conversation with the people who use them.
              </p>
              <p className="text-sm text-deep leading-relaxed">
                This phase is a standalone engagement. At the end of it, both teams have a more complete picture: content types mapped and every workflow documented with the people who do the work. That's the foundation for a locked scope and timeline. It's also a decision point. If the findings change the equation, Visit Salt Lake can step back before committing to the full build.
              </p>
            </div>

            {/* Phase 2 Timeline */}
            <div className="max-w-[800px] mx-auto">
              <div className="rounded-xl border border-tan bg-sand-light p-5">
                <Timeline scenarioHours={activeScenario.hours} phaseFilter={2} />
              </div>
            </div>

            <div className="max-w-[800px] mx-auto">
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
                  Full confidence before committing to Phase 3 of the project. We will have validated demos and workflows built with minimized risk of compromising launch issues.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Phase 3 */}
        {activeTab === 3 && (
          <div className="space-y-8">
            <div className="-mx-6 -mt-6 bg-deep md:h-[342px] flex flex-col md:flex-row">
              <img src="/assets/hero-scenarios.jpg" alt="" className="h-48 md:h-full w-full md:w-auto object-cover object-center" />
              <div className="flex items-center px-6 py-8 md:ml-[80px] md:px-0 md:py-0">
                <div>
                  <p className="preheading text-orange mb-4">Production Rebuild</p>
                  <h1 className="text-white">Phase 3</h1>
                </div>
              </div>
            </div>

            <TabNav />

            <div className="max-w-[700px] mx-auto mb-10">
              <h3 className="text-deep mb-4">Full Build and Launch</h3>
              <p className="text-sm text-deep leading-relaxed mb-4">
                Everything researched in Phase 1 and validated in Phase 2 gets turned into a production platform.
              </p>
              <p className="text-sm text-deep leading-relaxed mb-4">
                The priority is exact feature parity with the current site before any new functionality gets added. Every page template, every integration, every content workflow that exists today will exist in the new system. The difference is that it will be on a platform Visit Salt Lake owns and controls, built to work as one system instead of twenty disconnected tools.
              </p>
              <p className="text-sm text-deep leading-relaxed mb-4">
                The timeline below breaks the work into design, frontend, backend, QA, and launch. The schedule is built around the December 2026 deadline, with enough margin in each phase that delays in one area don't cascade into the next. Phase 2 findings will refine these estimates, but the structure holds.
              </p>
              <p className="text-sm text-deep leading-relaxed">
                By the end of this phase, the team is trained, the data is migrated, and the Simpleview dependency is gone.
              </p>
            </div>

            <div className="space-y-4">
              <ScenarioEstimate
                scenarios={scenarios}
                activeId={activeScenarioId}
              />
            </div>

            <div className="space-y-4">
              <p className="preheading mb-3">Delivery Schedule</p>
              <Timeline scenarioHours={activeScenario.hours} phaseFilter={3} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
