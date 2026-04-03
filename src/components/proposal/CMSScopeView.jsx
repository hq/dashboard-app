import CollapsibleSection from './CollapsibleSection'

// 3-4 headline stats (eng #13: reduce density, most impressive stats as cards)
const CMS_HEADLINE_STATS = [
  { value: '70+', label: 'Page Builder Widgets', detail: 'Layout, navigation, collections, CTAs, dynamic content, personalization, A/B testing' },
  { value: '15', label: 'Collection Types', detail: 'Alerts, Hero Slides, FAQ, Slides, Vertical Videos, Staff, and 9 more' },
  { value: '9', label: 'User Roles', detail: '166 permissions each: Admin, Marketing, PR, Membership, HR, and 4 more' },
  { value: '9,156', label: 'Active Redirects', detail: 'URL redirect rules, critical for SEO preservation during migration' },
]

const SITEMAP_SECTIONS = [
  { name: 'Main Navigation', items: 8, content: 'Things To Do, Skiing, Home, Events, Restaurants, Places To Stay, Plan Your Visit, Neighborhoods' },
  { name: 'Secondary Navigation', items: 6, content: 'Meetings, Travel Trade, Sports, Film, Blog, Speakers Bureau (disabled)' },
  { name: 'Footer Navigation', items: 7, content: 'Local Crafts & Gifts, Members, Press & Research, About Us, Contact, Sitemap, Privacy Policy' },
  { name: 'Microsites', items: 79, content: '~72 convention-specific welcome pages, archived microsites, influencer info, summit pages' },
  { name: 'Meetings Microsite Nav', items: 11, content: 'About Salt Lake, Bars & Nightlife, Events, Getting Around, Restaurants, Things to Do, LGBTQ, Planning Tools' },
  { name: 'Conventions', items: 3, content: 'Salt Palace Convention Center, Mountain America Expo Center, Equestrian Park' },
  { name: 'Landing Pages', items: 16, content: 'Campaign pages: West Of Conventional, Fall Tour, Hospitality Jobs, Annual Report, Winter Wonderland, etc.' },
  { name: 'External Links', items: 1, content: 'Cottonwood Connect' },
  { name: 'System', items: 20, content: 'Template pages: Blog, Articles, Listing, Event, Offer (coupons), Compare, Search, RFP, RSVP, My Account, Extranet Login' },
  { name: 'Industry', items: 6, content: 'Meetings, Travel Trade, Sports, Film, Meetings - OLD (legacy), Speak Salt Lake' },
]

const COLLECTION_TYPES = [
  { name: 'Alerts', count: 4 },
  { name: 'Announcements', count: 7 },
  { name: 'Contact Slides', count: '25+' },
  { name: 'Expanding Content', count: 2 },
  { name: 'Hero Slides', count: '25+' },
  { name: 'Microsite Slides', count: 12 },
  { name: 'Navigation Links', count: '25+' },
  { name: 'Neighborhood Slides', count: '25+' },
  { name: 'Questions (FAQ)', count: '25+' },
  { name: 'Regions Slides', count: 14 },
  { name: 'Resort Slides', count: '25+' },
  { name: 'Slides', count: '25+' },
  { name: 'Social Slides', count: 11 },
  { name: 'Staff Departments', count: '25+' },
  { name: 'Vertical Videos', count: 24 },
]

const PERSONA_TAGS = ['Craft Beverages', 'Family Fun', 'LGBTQ', 'Leisure Travel', 'Outdoor Recreation', 'Restaurants & Bars', 'Winter Activities']

const USER_ROLES = [
  { name: 'Admin', desc: 'Access to everything' },
  { name: 'Marketing', desc: 'General marketing access, cannot delete items' },
  { name: 'PR Team', desc: 'PR team access' },
  { name: 'Membership Department', desc: 'DTN ads and membership needs' },
  { name: 'SMG Access', desc: 'Convention center employees' },
  { name: 'HR access', desc: 'Access to contacts' },
  { name: 'CMS Training', desc: 'Training role' },
  { name: 'Limited External Access', desc: 'Very limited, for testing' },
  { name: 'aRes', desc: 'Auto-responder access' },
]

const LAYOUTS = [
  'Default - REDESIGN - Blank', 'Main Nav - Content', 'Main Nav - Listings', 'Main Nav - Events',
  'Secondary Nav - Content', 'Secondary Nav - Listings', 'Footer Nav - Content',
  'Ski Section Page', 'Meetings Microsite', 'Microsite - General', 'Sports',
]

// Phase 2 Deep Dive deliverables for CMS (eng #7, design doc)
const CMS_PHASE2_DELIVERABLES = [
  { title: 'Content Type Field Mapping', description: 'Field-by-field analysis of all 15 collection types: what moves to the new CMS, what gets consolidated, what gets archived.' },
  { title: 'Page Builder Widget Audit', description: 'Document every widget type across 70+ Page Builder components. Map each to a new CMS block type or identify custom build requirements.' },
  { title: 'Admin Workflow Documentation', description: 'Screen recordings and interviews with CMS users across all 9 roles. Document draft/publish/schedule workflows and permission requirements.' },
  { title: 'Taxonomy & Tag Consolidation Plan', description: 'Rationalize 1,846 taxonomy items across 10 systems into a clean, unified taxonomy for the new platform.' },
]

export default function CMSScopeView() {
  return (
    <div className="space-y-4">
      {/* Headline Stats: 3-4 most impressive (eng #13) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {CMS_HEADLINE_STATS.map((stat) => (
          <div key={stat.label} className="p-4 border border-tan bg-sand-light">
            <p className="text-2xl font-bold text-deep">{stat.value}</p>
            <p className="text-xs font-semibold text-deep mt-1">{stat.label}</p>
            <p className="text-xs text-deep-muted mt-1">{stat.detail}</p>
          </div>
        ))}
      </div>

      {/* Remaining stats collapsed */}
      <CollapsibleSection title="Full CMS Dashboard" count="all stats">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-xl font-bold text-deep">44.4M</p>
            <p className="text-xs text-deep-muted mt-1">Total Page Views</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-xl font-bold text-deep">136K</p>
            <p className="text-xs text-deep-muted mt-1">Weekly Pageviews</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-xl font-bold text-deep">3:27</p>
            <p className="text-xs text-deep-muted mt-1">Avg Session</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-xl font-bold text-deep">10</p>
            <p className="text-xs text-deep-muted mt-1">Translation Namespaces</p>
          </div>
        </div>
        <div className="space-y-2 text-xs text-deep-muted">
          <p><strong className="text-deep">Workflows:</strong> Draft system with notes, scheduled publishing (start/end), component-level versioning with forking, audit trail since 2018</p>
          <p><strong className="text-deep">Personalization:</strong> 7 visitor personas (Family Fun, LGBTQ, Outdoor Recreation, Winter Activities, etc.) with geographic targeting by country, region, metro, and city</p>
          <p><strong className="text-deep">Taxonomy:</strong> 1,432 CMS Tags + 280 Blog Tags + 63 Image Categories + 23 Blog Categories + 14 Articles Tags = ~1,846 total items across 10 systems</p>
        </div>
      </CollapsibleSection>

      {/* Sitemap Sections */}
      <CollapsibleSection title="Sitemap Sections" count={10}>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-tan">
                <th className="py-2 pr-4 text-xs font-semibold text-deep-muted uppercase">Section</th>
                <th className="py-2 pr-4 text-xs font-semibold text-deep-muted uppercase text-right">Items</th>
                <th className="py-2 text-xs font-semibold text-deep-muted uppercase">Key Content</th>
              </tr>
            </thead>
            <tbody>
              {SITEMAP_SECTIONS.map((s) => (
                <tr key={s.name} className="border-b border-tan/50">
                  <td className="py-2 pr-4 font-medium">{s.name}</td>
                  <td className="py-2 pr-4 text-right tabular-nums">{s.items}</td>
                  <td className="py-2 text-deep-muted text-xs">{s.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CollapsibleSection>

      {/* Modules */}
      <CollapsibleSection title="Modules" count={6}>
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">Collection Types (15)</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {COLLECTION_TYPES.map((ct) => (
                <div key={ct.name} className="flex items-center justify-between px-3 py-1.5 border border-tan/50 bg-white text-xs">
                  <span>{ct.name}</span>
                  <span className="text-deep-muted tabular-nums">{ct.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2">Dynamic Content: Personalization</p>
            <p className="text-xs text-deep-muted mb-2">7 persona tags with matching profiles for content targeting:</p>
            <div className="flex flex-wrap gap-1.5">
              {PERSONA_TAGS.map((tag) => (
                <span key={tag} className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-violet-100 text-violet-700">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Page Layouts & User Roles */}
      <CollapsibleSection title="Page Layouts / Templates" count={11}>
        <div className="flex flex-wrap gap-1.5">
          {LAYOUTS.map((l) => (
            <span key={l} className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-sky-100 text-sky-700">{l}</span>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="User Roles" count={9}>
        <div className="space-y-1.5">
          {USER_ROLES.map((role) => (
            <div key={role.name} className="flex items-center gap-3 py-1.5 border-b border-tan/50 last:border-0">
              <span className="font-medium w-48">{role.name}</span>
              <span className="text-deep-muted text-xs">{role.desc}</span>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Phase 2 Deep Dive: replaces "coming soon" pattern (eng #7) */}
      <div className="rounded-xl border-2 border-dashed border-sky/50 bg-sky/5 p-5 space-y-4">
        <div>
          <p className="preheading text-sky-dark mb-1">Phase 2 Deep Dive</p>
          <p className="text-sm text-deep">
            We've documented the CMS from the outside, documenting every widget type, layout, role, and workflow visible from the admin. Phase 2 gives us hands-on access to verify what we've mapped and uncover what's hidden.
          </p>
        </div>
        <div className="space-y-3">
          {CMS_PHASE2_DELIVERABLES.map((item) => (
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
