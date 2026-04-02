import { useState } from 'react'

function CollapsibleSection({ title, count, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-tan">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-deep hover:bg-sand-light transition-colors"
      >
        <span>{title}{count != null && <span className="ml-2 text-deep-muted font-normal">({count})</span>}</span>
        <svg className="w-4 h-4 text-deep-muted" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-deep">{children}</div>}
    </div>
  )
}

const CRM_DATA = [
  { label: 'Listings (businesses, venues)', count: '3,723+', note: 'Most without media' },
  { label: 'Events', count: '1,800+', note: '154 without images' },
  { label: 'Member organizations', count: 'Unknown', note: '3 membership tiers' },
  { label: 'Sales leads', count: 'Unknown', note: 'Sports, meetings, PR pipelines' },
  { label: 'Contacts', count: 'Unknown', note: 'CRM contact database' },
]

const CRM_INTEGRATIONS = [
  { name: 'Listings & Events Data', desc: 'CRM is the source of truth for all listing and event data displayed on the public site. Images hosted at saltLake.simpleviewcrm.com.', status: 'core' },
  { name: 'Form Submissions', desc: 'RFP forms (80+ fields), newsletter signups, and event submissions all POST to saltlake.simpleviewcrm.com/webapi/. CRM processes and routes these.', status: 'core' },
  { name: 'Partner Extranet', desc: 'Members log in at saltlake.extranet.simpleviewcrm.com to manage listings, imagery, and account details. CMS provides the entry pages.', status: 'core' },
  { name: 'DTN (Digital Tourism Network)', desc: 'Simpleview advertising network. Hero Slides and Resort Slides have "Is DTN Ad?" fields for sponsored content placement.', status: 'integrated' },
  { name: 'Experience Marketplace', desc: 'Booking/cart functionality for passes and experiences. Cart fields (bwitemid, bwitemtype) on slide content types. Persistent cart in header.', status: 'integrated' },
  { name: 'Map Publisher', desc: '6 interactive maps rendering partner/listing locations from CRM data. Managed through CMS module.', status: 'integrated' },
  { name: 'Contact/Listing Feed', desc: 'CRM contact data feeds into CMS content types (Contact Slides, Resort Slides with listing filters, Blog posts with event/listing filters).', status: 'integrated' },
]

const API_ENDPOINTS = [
  { api: 'CMS REST API (v2)', protocol: 'REST', endpoints: 'Listings, Events, Offers, Navigation, Blog Posts', auth: 'Access tokens', notes: 'Apex model is newer. Docs on GitHub (simpleviewinc/cms-docs).' },
  { api: 'CRM SOAP API', protocol: 'SOAP/XML', endpoints: 'Listings, Contacts, Membership', auth: 'clientUserName + clientPassword', notes: 'ColdFusion backend (.cfc endpoints). PHP helper library available.' },
]

const UNKNOWNS = [
  'What can partners actually do in the extranet? (Update listings, view analytics, manage payments?)',
  'How complete are CRM listing fields across all 3,723 entries?',
  'What data relationships exist? (listing \u2192 category, listing \u2192 neighborhood, event \u2192 venue)',
  'What is the CRM data export format? Do relationships persist in exports?',
  'How many active members/partners pay for listings?',
  'What CRM reports does the sales team rely on daily?',
  'Is there a staging/sandbox CRM environment for testing migration?',
  'How does the NowPlayingUtah event feed get into the CRM?',
]

export default function CRMScopeView() {
  return (
    <div className="space-y-4">
      {/* Data Volumes */}
      <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4">
        <p className="preheading">CRM Data Volumes</p>
        <div className="space-y-1.5">
          {CRM_DATA.map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b border-tan/50 last:border-0">
              <span>{item.label}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-deep-muted">{item.note}</span>
                <span className="font-bold text-deep tabular-nums">{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Portal Flow */}
      <CollapsibleSection title="Partner Portal Flow" defaultOpen>
        <div className="space-y-3">
          <p className="text-xs text-deep-muted">How partners interact with the CRM through the public site:</p>
          <div className="flex flex-col gap-2">
            {[
              { step: '1', label: 'Visit /members/', desc: 'Marketing content about membership benefits and tiers' },
              { step: '2', label: 'Click Member Login', desc: 'Redirects through /extranet-login/ (requires redirectUrl parameter)' },
              { step: '3', label: 'Simpleview CRM Extranet', desc: 'External portal at saltlake.extranet.simpleviewcrm.com' },
              { step: '4', label: 'Manage Account', desc: 'Listings, imagery, account details (scope unknown from public site)' },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3 p-3 border border-tan/50 bg-white">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-deep text-white text-xs font-bold flex items-center justify-center">{s.step}</span>
                <div>
                  <p className="font-medium text-sm">{s.label}</p>
                  <p className="text-xs text-deep-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      {/* CRM-CMS Integrations */}
      <CollapsibleSection title="CRM-CMS Integration Points" count={CRM_INTEGRATIONS.length}>
        <div className="space-y-2">
          {CRM_INTEGRATIONS.map((int) => (
            <div key={int.name} className="flex items-start gap-3 py-2 border-b border-tan/50 last:border-0">
              <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded flex-shrink-0 ${
                int.status === 'core' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {int.status === 'core' ? 'Core' : 'Add-on'}
              </span>
              <div>
                <p className="font-medium">{int.name}</p>
                <p className="text-xs text-deep-muted mt-0.5">{int.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* API Access */}
      <CollapsibleSection title="API Access for Migration">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-tan">
                <th className="py-2 pr-4 text-xs font-semibold text-deep-muted uppercase">API</th>
                <th className="py-2 pr-4 text-xs font-semibold text-deep-muted uppercase">Protocol</th>
                <th className="py-2 pr-4 text-xs font-semibold text-deep-muted uppercase">Endpoints</th>
                <th className="py-2 text-xs font-semibold text-deep-muted uppercase">Notes</th>
              </tr>
            </thead>
            <tbody>
              {API_ENDPOINTS.map((api) => (
                <tr key={api.api} className="border-b border-tan/50">
                  <td className="py-2 pr-4 font-medium">{api.api}</td>
                  <td className="py-2 pr-4">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-sky-100 text-sky-700">{api.protocol}</span>
                  </td>
                  <td className="py-2 pr-4 text-xs text-deep-muted">{api.endpoints}</td>
                  <td className="py-2 text-xs text-deep-muted">{api.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CollapsibleSection>

      {/* Key Unknowns */}
      <CollapsibleSection title="Key Unknowns (Phase 2)" count={UNKNOWNS.length} defaultOpen>
        <p className="text-xs text-deep-muted mb-3">These questions require CRM admin access to answer and are critical for accurate migration estimates:</p>
        <ul className="list-disc list-inside space-y-1.5 text-deep-muted">
          {UNKNOWNS.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      </CollapsibleSection>
    </div>
  )
}
