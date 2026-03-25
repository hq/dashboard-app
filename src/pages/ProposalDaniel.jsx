import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useProposalScenariosDaniel from '../hooks/useProposalScenariosDaniel'
import { MODULE_CATEGORIES } from '../lib/proposalDataDaniel'
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
import DiscoveryDashboardDaniel from '../components/proposal/DiscoveryDashboardDaniel'
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
            <div className="rounded-xl border border-tan bg-sand-light p-6 text-sm text-deep">
              <h3 className="font-bold text-lg mb-4">CMS Backend — Full Admin Documented</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">15</p>
                    <p className="text-xs text-deep-muted">Collection Types</p>
                    <p className="text-xs text-deep-muted mt-1">Alerts, Hero Slides, FAQ, Slides, Vertical Videos, Contact Slides, Staff, and 8 more</p>
                  </div>
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">70+</p>
                    <p className="text-xs text-deep-muted">Page Builder Widgets</p>
                    <p className="text-xs text-deep-muted mt-1">Layout, navigation, collections, CTAs, dynamic content, personalization, A/B testing</p>
                  </div>
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">11</p>
                    <p className="text-xs text-deep-muted">Backend Layouts</p>
                    <p className="text-xs text-deep-muted mt-1">Default, Main Nav, Footer Nav, Secondary Nav, Meetings, Sports, Ski, Microsite</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">9</p>
                    <p className="text-xs text-deep-muted">User Roles (166 permissions each)</p>
                    <p className="text-xs text-deep-muted mt-1">Admin, Marketing (no delete), PR Team, SMG Access, Membership, HR, and 3 more</p>
                  </div>
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">10</p>
                    <p className="text-xs text-deep-muted">Translation Namespaces</p>
                    <p className="text-xs text-deep-muted mt-1">Common, Events, Listings, Offers, Search, Trip Builder, Media Gallery, Trails</p>
                  </div>
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">3,904</p>
                    <p className="text-xs text-deep-muted">Media Assets</p>
                    <p className="text-xs text-deep-muted mt-1">3,110 images + 590 documents + 136 videos + 68 external links</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-xs text-deep-muted">
                <p><strong className="text-deep">Workflows:</strong> Draft system with notes, scheduled publishing (start/end), component-level versioning with forking, audit trail since 2018</p>
                <p><strong className="text-deep">Personalization:</strong> 7 visitor personas (Family Fun, LGBTQ, Outdoor Recreation, Winter Activities, etc.) with geographic targeting by country, region, metro, and city</p>
                <p><strong className="text-deep">Taxonomy:</strong> 1,432 CMS Tags + 280 Blog Tags + 63 Image Categories + 23 Blog Categories + 14 Articles Tags = ~1,846 total items across 10 systems</p>
              </div>
            </div>
          )}
          {innerTab === 'crm' && (
            <div className="rounded-xl border border-tan bg-sand-light p-6 text-sm text-deep">
              <h3 className="font-bold text-lg mb-4">CRM Data — Frontend Observations</h3>
              <p className="text-xs text-deep-muted mb-4">Full CRM backend access pending — these findings are from frontend analysis and CMS integration points.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">4,629</p>
                    <p className="text-xs text-deep-muted">Business Listings</p>
                    <p className="text-xs text-deep-muted mt-1">Hotels, restaurants, attractions, trails, shops — 25+ fields per listing with maps, reviews, and categories</p>
                  </div>
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">1,898</p>
                    <p className="text-xs text-deep-muted">Events</p>
                    <p className="text-xs text-deep-muted mt-1">15 categories (Music, Art, Festivals, Theatre, Sports, etc.) + convention events with special ID format</p>
                  </div>
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">6</p>
                    <p className="text-xs text-deep-muted">CRM Forms</p>
                    <p className="text-xs text-deep-muted mt-1">Contact, Subscribe, Meeting Planner Guide, Meeting Newsletter, Influencer, RFP (80+ fields)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">85.7%</p>
                    <p className="text-xs text-deep-muted">CRM-Powered Content</p>
                    <p className="text-xs text-deep-muted mt-1">Listings + events = 6,527 of 7,619 URLs. The CRM is the site's primary data source.</p>
                  </div>
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">79</p>
                    <p className="text-xs text-deep-muted">Convention Microsites</p>
                    <p className="text-xs text-deep-muted mt-1">Templated welcome pages for visiting conventions — "Salt Lake Welcomes [Event]"</p>
                  </div>
                  <div className="p-3 border border-tan/50 bg-white">
                    <p className="font-bold text-2xl text-deep">9,156</p>
                    <p className="text-xs text-deep-muted">URL Redirects</p>
                    <p className="text-xs text-deep-muted mt-1">Managed in CMS — critical for SEO preservation during migration</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-xs text-deep-muted">
                <p><strong className="text-deep">Partner Portal:</strong> Members section with partnership tiers. Login redirects to Simpleview CRM extranet for listing/imagery management.</p>
                <p><strong className="text-deep">Convention Calendar:</strong> CRM-powered widget on meetings pages displaying upcoming conventions.</p>
                <p><strong className="text-deep">Pending:</strong> CRM backend access needed to document listing management workflows, event creation, partner self-service, and any automations.</p>
              </div>
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
              CMS screenshots available in research documents — 100+ screenshots across all backend modules.
            </div>
          )}
          {innerTab === 'crm' && (
            <div className="rounded-xl border border-tan bg-sand-light p-8 text-center text-sm text-deep-muted">
              CRM backend screenshots pending — requires admin access to Simpleview CRM.
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

export default function ProposalDaniel() {
  const { activeTab, goTo } = useProposalTab()
  const [activeScenarioId, setActiveScenarioId] = useState('2026')
  const [activeModuleId, setActiveModuleId] = useState('all')

  const scenarios = useProposalScenariosDaniel(activeModuleId)
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0]

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
                We conducted a comprehensive analysis of visitsaltlake.com — mapping every page template, content type, integration, and backend feature across both the public website and CMS admin. Our research spans 38 documents covering 7,619 URLs, 28+ third-party integrations, and the full Simpleview CMS backend.
              </p>
              <p className="mb-4">
                The goal is a complete custom platform rebuild — replacing both Simpleview CMS and CRM with a modern, flexible system that gives Visit Salt Lake full ownership of their digital presence. The first phase delivers a 1-to-1 rebuild with exact feature parity; enhancements come after.
              </p>
              <h3 className="mb-2 mt-8">What We Found</h3>
              <p className="mb-4">
                Visit Salt Lake's site is a 7,619-page tourism platform where 85.7% of content is powered by the Simpleview CRM — 4,629 business listings and 1,898 events. The CMS manages the remaining 14.3%: editorial pages, blog posts, convention microsites, and B2B industry sections. The site features 21+ distinct page templates, 70+ page builder widget types, 7-persona content personalization, A/B testing, and a sophisticated publishing workflow with scheduled content and multi-user collaboration.
              </p>
              <p className="mb-4">
                We documented every content type field structure, all 15 collection types, 9 user roles with 166 permissions each, 10 taxonomy systems with 1,846 items, and a media library of 3,904 assets. We also ran full-site performance audits across 2,281 pages and an SEO crawl of 8,818 URLs — establishing clear baselines for the rebuild to match and exceed.
              </p>
              <p className="mb-4">
                The site integrates with 28+ external services across 31 domains, including Outdooractive maps, TripAdvisor and Yelp reviews, CrowdRiff UGC galleries, Connect Pass booking, and 25+ analytics and marketing tags. Each integration has been cataloged with its scope, criticality, and rebuild implications.
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
                The rebuild will deliver a custom-built platform — a modern marketing website, content management system, and admin panel purpose-built for Visit Salt Lake's needs. No more dependency on proprietary tourism CMS platforms. Full flexibility to build, extend, and evolve.
              </p>
              <p className="mb-4">
                We'll replicate all 21+ page templates with responsive design across 15+ breakpoints, matching the current mobile hamburger navigation, three-column mega menu, and 8 distinct navigation contexts. Interactive features — faceted listing filters, event date pickers, trip planner, compare tool, booking widgets, and persistent cart — will be rebuilt with modern frameworks for better performance and maintainability.
              </p>
              <p className="mb-4">
                Performance is a key opportunity. The current site scores 50 on Lighthouse Performance with a 28-second LCP on mobile. With modern server-side rendering, optimized image delivery, and code splitting, we're targeting 75+ Performance scores and sub-2.5-second LCP — transforming the visitor experience while maintaining the 92 SEO score and improving the 86 Accessibility baseline.
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
                    We analyzed every layer of your site — from the public frontend templates and URL structure, through the CMS admin with its content types and workflows, down to the media library, taxonomy systems, and third-party integrations. 38 research documents, 2,281 pages performance-audited, 8,818 URLs crawled for SEO health.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <DiscoveryDashboardDaniel />
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
