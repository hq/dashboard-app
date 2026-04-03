import CollapsibleSection from './CollapsibleSection'
import InsightCard from './InsightCard'

const INTEGRATIONS = [
  { name: 'Simpleview CMS', status: 'confirmed', criticality: 'critical', description: 'Core platform that serves every page, 70+ Page Builder widgets' },
  { name: 'Simpleview CRM', status: 'confirmed', criticality: 'critical', description: 'Source of truth for 4,626 listings + 1,973 events' },
  { name: 'Google Tag Manager', status: 'confirmed', criticality: 'high', description: '2 containers (GTM-5L5W32, GTM-NFBVG93); all analytics flow through these' },
  { name: 'Google Analytics 4', status: 'confirmed', criticality: 'high', description: '4 GA4 properties tracking site activity' },
  { name: 'Outdooractive + Leaflet', status: 'confirmed', criticality: 'high', description: 'Interactive maps on all listing detail pages' },
  { name: 'Connect Pass', status: 'confirmed', criticality: 'high', description: 'Persistent shopping cart for experience passes' },
  { name: 'CrowdRiff', status: 'confirmed', criticality: 'high', description: 'UGC social photo gallery on homepage and key pages' },
  { name: 'NowPlayingUtah', status: 'confirmed', criticality: 'high', description: 'External events feed, significant portion of events' },
  { name: 'RootRez', status: 'confirmed', criticality: 'high', description: 'Hotel booking widget on Places To Stay' },
  { name: 'TripAdvisor', status: 'confirmed', criticality: 'medium', description: 'Reviews and ratings on listing cards and detail pages' },
  { name: 'Yelp', status: 'confirmed', criticality: 'medium', description: 'Review integration on listing detail pages' },
  { name: 'GTranslate', status: 'confirmed', criticality: 'medium', description: '8-language translation widget (client-side)' },
  { name: 'Vimeo', status: 'confirmed', criticality: 'medium', description: 'Video hosting via Plyr player (136 videos)' },
  { name: 'Threshold360', status: 'confirmed', criticality: 'medium', description: '360° virtual tour viewer on some listing pages' },
  { name: 'Act On', status: 'confirmed', criticality: 'medium', description: 'Marketing automation, connected via CRM form submissions' },
  { name: 'Facebook Pixel', status: 'confirmed', criticality: 'medium', description: '3 pixels for social retargeting' },
  { name: 'Microsoft Clarity', status: 'confirmed', criticality: 'low', description: 'Session recording and heatmaps' },
  { name: 'Mouseflow', status: 'confirmed', criticality: 'low', description: 'Session recording (redundant with Clarity)' },
  { name: 'Monsido', status: 'confirmed', criticality: 'low', description: 'Accessibility monitoring (3 scripts)' },
  { name: 'Sojern', status: 'confirmed', criticality: 'low', description: 'Travel industry retargeting (2 tags)' },
  { name: 'DoubleClick', status: 'confirmed', criticality: 'medium', description: 'Display advertising (4 tags)' },
  { name: 'Google Ads', status: 'confirmed', criticality: 'medium', description: 'Search/display advertising' },
  { name: 'Pinterest', status: 'confirmed', criticality: 'low', description: 'Conversion tracking' },
  { name: 'LinkedIn Insights', status: 'confirmed', criticality: 'low', description: 'Conversion tracking' },
  { name: 'Shopify', status: 'confirmed', criticality: 'low', description: 'External store ("Local Crafts & Gifts") outbound link' },
  { name: 'Bandwango', status: 'partial', criticality: 'high', description: 'Pass/ticketing platform; CTA exists but mechanism needs verification' },
  { name: 'VWO', status: 'confirmed', criticality: 'medium', description: 'A/B testing platform with active experiments on homepage' },
  { name: 'Weather API', status: 'confirmed', criticality: 'medium', description: 'Real-time weather widget in header on every page' },
]

const PERFORMANCE = [
  { metric: 'Performance', score: 50, detail: 'Listing pages weakest at 43' },
  { metric: 'Accessibility', score: 86, detail: 'Strong baseline; Meetings pages highest at 92' },
  { metric: 'Best Practices', score: 55, detail: 'Old jQuery, deprecated APIs' },
  { metric: 'SEO', score: 92, detail: 'Strong structured data, good canonicals' },
]

const CORE_WEB_VITALS = [
  { metric: 'LCP', value: '28.4s', target: '<2.5s', status: 'poor' },
  { metric: 'FCP', value: '4.7s', target: '<1.8s', status: 'poor' },
  { metric: 'CLS', value: '0.12', target: '<0.1', status: 'warning' },
  { metric: 'TBT', value: '12ms', target: '<200ms', status: 'good' },
]

const MIGRATION_SCOPE = [
  { label: 'Total URL Scope', value: '16,848', detail: '7,692 pages + 9,156 redirects' },
  { label: 'CRM Records', value: '6,599', detail: '4,626 listings + 1,973 events (85.8% of site)' },
  { label: 'Media Assets', value: '3,904', detail: '3,110 images + 590 docs + 136 videos + 68 links' },
  { label: 'Taxonomy Items', value: '~1,846', detail: '10 taxonomy systems to consolidate and migrate' },
]

const ASSUMPTIONS = [
  { category: 'Platform', items: [
    'Full custom platform rebuild, replacing both Simpleview CMS and CRM',
    'First phase is 1-to-1 rebuild with exact feature parity',
    'Enhancements and new features come after 1-to-1 is live',
  ]},
  { category: 'Data', items: [
    'Data extraction approach will be determined based on Simpleview access level',
    'All 16,848 URLs must be preserved or properly redirected',
    'Image migration includes metadata (alt text, credits, focal points)',
  ]},
  { category: 'Scope', items: [
    'Rebuilding public website + content management backend + admin panel',
    'Third-party integrations will be re-integrated with the new platform',
    'New site will maintain or exceed SEO parity',
  ]},
]

const RISKS = [
  { category: 'Data Extraction', items: [
    'Simpleview access level unknown; may need to rely on frontend scraping',
    'Page Builder content (70+ widgets) has no known API for extraction',
    '3,110 images need metadata preserved alongside file migration',
  ]},
  { category: 'Hidden Functionality', items: [
    'CRM backend not yet accessible; unknown workflows and automations',
    'Third-party services (Connect Pass, RootRez) may be Simpleview-dependent',
    'Personalization rules (7 personas + geo-targeting) need full documentation',
  ]},
  { category: 'SEO & URLs', items: [
    'Listing/event URLs contain Simpleview CRM IDs and need a mapping strategy',
    '9,156 existing redirects must be fully exported before decommission',
    'Structured data (JSON-LD) varies by listing type and must be replicated per category',
  ]},
]

// CEO plan #1: Real client questions with status indicators (ported from legacy DiscoveryDashboard)
const CLIENT_QUESTIONS = [
  { category: 'Integrations & Vendors', questions: [
    'EventsForce: On which events do ticket links appear?',
    'Ripe booking: Not found on any page. Where does it appear?',
    'Act On: Forms submit to CRM, not Act On. How does CRM connect to Act On?',
    'NowPlayingUtah: Is the feed an API, data dump, or CRM import? How often does it update?',
    'Two GTM containers (GTM-5L5W32, GTM-NFBVG93): Why two? What\u2019s in each?',
    'VWO: How actively used? Who manages experiments?',
    'TripAdvisor: Live API or periodic sync? Who manages?',
  ]},
  { category: 'Content & Data', questions: [
    'Featured content: How are homepage events, blogs, and cards selected? Curated or algorithmic?',
    'Content freshness: How often are listings, events, and articles updated?',
    'Event lifecycle: What happens to past events? Archived? Deleted?',
    'Multi-location listings: Subway has 68 pages. Intentional? Partner-managed?',
    'Listing tiers: "Premiere Partner" badge \u2014 what tiers exist? Paid?',
  ]},
  { category: 'Forms & Lead Capture', questions: [
    'Newsletter lists: How many separate lists?',
    'RFP submission: What happens after submit? Email to whom? CRM pipeline?',
    'Event submission: Who reviews? Approval workflow?',
  ]},
  { category: 'Access & Auth', questions: [
    'Member portal: What can members do behind login?',
    'Membership tiers: What exists? What\u2019s behind each?',
    'Partner self-service: Can partners update their own listings?',
  ]},
]

function StatusBadge({ status }) {
  const styles = {
    confirmed: 'bg-emerald-100 text-emerald-700',
    partial: 'bg-amber-100 text-amber-700',
    'not-found': 'bg-red-100 text-red-700',
  }
  const labels = {
    confirmed: 'Found',
    partial: 'Partial',
    'not-found': 'Not Found',
  }
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded ${styles[status] || 'bg-gray-100 text-gray-500'}`}>
      {labels[status] || status}
    </span>
  )
}

function CriticalityBadge({ level }) {
  const styles = {
    critical: 'text-red-600',
    high: 'text-amber-600',
    medium: 'text-blue-600',
    low: 'text-gray-500',
  }
  return <span className={`text-xs font-medium ${styles[level] || 'text-gray-400'}`}>{level}</span>
}



function ScoreBadge({ score }) {
  const color = score >= 90 ? 'text-emerald-600' : score >= 50 ? 'text-amber-600' : 'text-red-600'
  return <span className={`text-lg font-bold ${color}`}>{score}</span>
}

function CwvBadge({ status }) {
  const styles = { good: 'bg-emerald-100 text-emerald-700', warning: 'bg-amber-100 text-amber-700', poor: 'bg-red-100 text-red-700' }
  return <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded ${styles[status]}`}>{status}</span>
}

export default function DiscoveryDashboard() {
  const confirmedIntegrations = INTEGRATIONS.filter(i => i.status === 'confirmed').length

  return (
    <div className="space-y-8">
      {/* Insight Cards: summary stats with animated count-up and drill-down */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <InsightCard value="7,692" label="URLs Mapped" insight="Full sitemap crawl across all page types">
          <div className="text-xs text-deep-muted space-y-1">
            <p>4,626 listing detail pages (60.1%)</p>
            <p>1,973 event detail pages (25.6%)</p>
            <p>1,093 content, blog, and admin pages (14.2%)</p>
          </div>
        </InsightCard>
        <InsightCard value="21+" label="Page Templates" insight="Listing, event, blog, neighborhood, meetings, and more">
          <div className="text-xs text-deep-muted space-y-1">
            <p>Listing Detail, Event Detail, Blog Post, Neighborhood, Plan Your Visit, Meetings, Places To Stay, Sports, and 13 more</p>
          </div>
        </InsightCard>
        <InsightCard
          value={`${confirmedIntegrations}`}
          label={`of ${INTEGRATIONS.length} Integrations Confirmed`}
          insight="Third-party services verified in source code"
        >
          <div className="text-xs text-deep-muted space-y-1">
            <p>{INTEGRATIONS.filter(i => i.criticality === 'critical').length} critical, {INTEGRATIONS.filter(i => i.criticality === 'high').length} high, {INTEGRATIONS.filter(i => i.criticality === 'medium').length} medium, {INTEGRATIONS.filter(i => i.criticality === 'low').length} low priority</p>
            <p>{INTEGRATIONS.length - confirmedIntegrations} partially confirmed, needs Phase 2 verification</p>
          </div>
        </InsightCard>
        <InsightCard value="38" label="Research Documents" insight="Covering frontend, CMS, CRM, SEO, and performance">
          <div className="text-xs text-deep-muted space-y-1">
            <p>Page audits, integration mapping, SEO crawl, performance baseline, CMS admin walkthrough, and more</p>
          </div>
        </InsightCard>
      </div>

      {/* Integrations: InsightCard summary with full list collapsed (eng #14) */}
      <InsightCard
        value={`${confirmedIntegrations}`}
        label={`of ${INTEGRATIONS.length} Integrations Confirmed`}
        insight="Every third-party service verified in page source and network requests"
      >
        <div className="space-y-1">
          <div className="flex gap-3 text-xs text-deep-muted mb-3">
            <span>{confirmedIntegrations} confirmed</span>
            <span>·</span>
            <span>{INTEGRATIONS.length - confirmedIntegrations} partially confirmed</span>
          </div>
          {INTEGRATIONS.map((intg) => (
            <div key={intg.name} className="flex items-start gap-3 py-2 border-b border-tan/50 last:border-0">
              <div className="w-40 shrink-0"><span className="font-medium">{intg.name}</span></div>
              <div className="flex-1 text-deep-muted">{intg.description}</div>
              <div className="flex items-center gap-2 shrink-0">
                <CriticalityBadge level={intg.criticality} />
                <StatusBadge status={intg.status} />
              </div>
            </div>
          ))}
        </div>
      </InsightCard>

      {/* Performance Baseline */}
      <CollapsibleSection title="Performance Baseline" count="2,281 pages audited">
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PERFORMANCE.map((item) => (
              <div key={item.metric} className="p-3 border border-tan/50 bg-sand-light text-center">
                <ScoreBadge score={item.score} />
                <p className="text-xs font-semibold text-deep mt-1">{item.metric}</p>
                <p className="text-xs text-deep-muted mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CORE_WEB_VITALS.map((item) => (
              <div key={item.metric} className="p-3 border border-tan/50 bg-sand-light">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-deep">{item.metric}</span>
                  <CwvBadge status={item.status} />
                </div>
                <p className="text-lg font-bold text-deep">{item.value}</p>
                <p className="text-xs text-deep-muted">Target: {item.target}</p>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      {/* Migration Scope */}
      <CollapsibleSection title="Migration Scope" count="16,848 URLs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {MIGRATION_SCOPE.map((item) => (
            <div key={item.label} className="p-3 border border-tan/50 bg-sand-light">
              <p className="text-lg font-bold text-deep">{item.value}</p>
              <p className="text-xs font-semibold text-deep mb-1">{item.label}</p>
              <p className="text-xs text-deep-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Assumptions & Risks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CollapsibleSection title="Assumptions" count={ASSUMPTIONS.reduce((s, a) => s + a.items.length, 0)}>
          {ASSUMPTIONS.map((group) => (
            <div key={group.category} className="mb-3 last:mb-0">
              <p className="font-semibold mb-1">{group.category}</p>
              <ul className="list-disc list-inside space-y-0.5 text-deep-muted">
                {group.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </CollapsibleSection>
        <CollapsibleSection title="Risks & Unknowns" count={RISKS.reduce((s, r) => s + r.items.length, 0)}>
          {RISKS.map((group) => (
            <div key={group.category} className="mb-3 last:mb-0">
              <p className="font-semibold mb-1">{group.category}</p>
              <ul className="list-disc list-inside space-y-0.5 text-deep-muted">
                {group.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </CollapsibleSection>
      </div>

      {/* Client Questions (CEO #1: real questions with status indicators) */}
      <CollapsibleSection title="Questions for Client" count={CLIENT_QUESTIONS.reduce((s, c) => s + c.questions.length, 0)}>
        <p className="text-xs text-deep-muted mb-3">Questions needing Visit Salt Lake input before we can finalize the estimate.</p>
        <div className="space-y-4">
          {CLIENT_QUESTIONS.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold">{cat.category}</p>
                <span className="text-xs text-deep-muted">{cat.questions.length} questions</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-deep-muted">
                {cat.questions.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </CollapsibleSection>

    </div>
  )
}
