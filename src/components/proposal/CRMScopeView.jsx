import CollapsibleSection from './CollapsibleSection'

// 3-4 headline stats (eng #13: most impressive stats as cards)
const CRM_HEADLINE_STATS = [
  { value: '4,626', label: 'Business Listings', detail: 'Hotels, restaurants, attractions, trails, shops — 25+ fields per listing' },
  { value: '1,973', label: 'Events', detail: '15 categories (Music, Art, Festivals, Theatre, Sports, etc.)' },
  { value: '85.8%', label: 'CRM-Powered Content', detail: 'Listings + events = 6,599 of 7,692 URLs' },
  { value: '6', label: 'CRM Forms', detail: 'Contact, Subscribe, Meeting Planner, Newsletter, Influencer, RFP (80+ fields)' },
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

// Phase 2 Deep Dive deliverables for CRM (eng #7, design doc)
const CRM_PHASE2_DELIVERABLES = [
  { title: 'CRM Entity Audit', description: 'Full access to Simpleview CRM — document every entity type, field structure, and data relationship across listings, events, contacts, and members.' },
  { title: 'Data Migration Mapping', description: 'Field-by-field analysis: what moves, what gets archived, what format the data is in. Test export formats and verify relationship preservation.' },
  { title: 'Partner Portal Workflows', description: 'Document the full partner self-service experience — listing management, imagery uploads, account settings, analytics access, payment flows.' },
  { title: 'Integration Verification', description: 'Test every CRM-CMS integration point end-to-end. Verify data sync mechanisms, API contracts, and identify Simpleview-dependent services that need replacement.' },
]

export default function CRMScopeView() {
  return (
    <div className="space-y-4">
      {/* Headline Stats — 3-4 most impressive (eng #13) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {CRM_HEADLINE_STATS.map((stat) => (
          <div key={stat.label} className="p-4 border border-tan bg-sand-light">
            <p className="text-2xl font-bold text-deep">{stat.value}</p>
            <p className="text-xs font-semibold text-deep mt-1">{stat.label}</p>
            <p className="text-xs text-deep-muted mt-1">{stat.detail}</p>
          </div>
        ))}
      </div>

      {/* Remaining CRM details collapsed */}
      <CollapsibleSection title="CRM Data Volumes & Details">
        <div className="space-y-2 text-xs text-deep-muted">
          <p><strong className="text-deep">Convention Microsites:</strong> 79 templated welcome pages for visiting conventions — "Salt Lake Welcomes [Event]"</p>
          <p><strong className="text-deep">URL Redirects:</strong> 9,156 managed in CMS — critical for SEO preservation during migration</p>
          <p><strong className="text-deep">Partner Portal:</strong> Members section with partnership tiers. Login redirects to Simpleview CRM extranet for listing/imagery management.</p>
          <p><strong className="text-deep">Convention Calendar:</strong> CRM-powered widget on meetings pages displaying upcoming conventions.</p>
        </div>
      </CollapsibleSection>

      {/* Partner Portal Flow */}
      <CollapsibleSection title="Partner Portal Flow">
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

      {/* Phase 2 Deep Dive — replaces "coming soon" / unknowns pattern (eng #7) */}
      <div className="rounded-xl border-2 border-dashed border-sky/50 bg-sky/5 p-5 space-y-4">
        <div>
          <p className="preheading text-sky-dark mb-1">Phase 2 Deep Dive</p>
          <p className="text-sm text-deep">
            The CRM powers 85.8% of the site's content but we've only seen it from the outside. Phase 2 gives us full admin access to document the data model, workflows, and integrations that drive the public experience.
          </p>
        </div>
        <div className="space-y-3">
          {CRM_PHASE2_DELIVERABLES.map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-3 border border-sky/20 bg-white">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky mt-1.5" />
              <div>
                <p className="font-semibold text-sm text-deep">{item.title}</p>
                <p className="text-xs text-deep-muted mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
