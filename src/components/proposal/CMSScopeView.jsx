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

const ACTION_ITEMS = [
  { label: 'Events without an image', count: 154 },
  { label: 'Listings without media', count: 3728 },
  { label: 'Articles (Ski City) unpublished', count: 1030 },
  { label: 'Articles unpublished', count: 1228 },
  { label: 'Blog posts unpublished', count: 4 },
  { label: 'Sitemap pages with drafts expiring', count: 196 },
]

export default function CMSScopeView() {
  return (
    <div className="space-y-4">
      {/* Dashboard Overview */}
      <div className="rounded-xl border border-tan bg-sand-light p-5 space-y-4">
        <p className="preheading">CMS Dashboard</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-2xl font-bold text-deep">44.4M</p>
            <p className="text-xs text-deep-muted mt-1">Total Page Views</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-2xl font-bold text-deep">136K</p>
            <p className="text-xs text-deep-muted mt-1">Weekly Pageviews</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-2xl font-bold text-deep">3:27</p>
            <p className="text-xs text-deep-muted mt-1">Avg Session</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-2xl font-bold text-deep">61/38%</p>
            <p className="text-xs text-deep-muted mt-1">Desktop / Mobile</p>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <CollapsibleSection title="Content Action Items" count={ACTION_ITEMS.reduce((s, a) => s + a.count, 0).toLocaleString()} defaultOpen>
        <p className="text-xs text-deep-muted mb-3">Items flagged in the CMS dashboard needing attention</p>
        <div className="space-y-1.5">
          {ACTION_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-tan/50 last:border-0">
              <span className="text-deep-muted">{item.label}</span>
              <span className="font-semibold text-deep tabular-nums">{item.count.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Sitemap Sections */}
      <CollapsibleSection title="Sitemap Sections" count={10} defaultOpen>
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
          {/* Collection Types */}
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

          {/* Dynamic Content */}
          <div>
            <p className="font-semibold mb-2">Dynamic Content &mdash; Personalization</p>
            <p className="text-xs text-deep-muted mb-2">7 persona tags with matching profiles for content targeting:</p>
            <div className="flex flex-wrap gap-1.5">
              {PERSONA_TAGS.map((tag) => (
                <span key={tag} className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-violet-100 text-violet-700">{tag}</span>
              ))}
            </div>
          </div>

          {/* Public Relations */}
          <div>
            <p className="font-semibold mb-2">Public Relations (3 sub-modules)</p>
            <div className="space-y-1 text-xs text-deep-muted">
              <p>Articles &mdash; 25+ posts (1,228 unpublished), 6 authors, 7 categories, 14 tags</p>
              <p>Articles - Ski City &mdash; 4 posts (1,030 unpublished)</p>
              <p>Blog &mdash; 25+ posts, authors/categories/tags TBD</p>
            </div>
          </div>

          {/* Map Publisher */}
          <div>
            <p className="font-semibold mb-2">Map Publisher (6 maps)</p>
            <p className="text-xs text-deep-muted">Downtown Hotels, Downtown Restaurants/Bars/Coffee, South Valley Hotels, West Valley Hotels, Free Things To Do, Test map</p>
          </div>

          {/* Auto Responder & Visitors */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-1">Auto Responder</p>
              <p className="text-xs text-deep-muted">11 content items, 2 links. May be deprecated (JS errors in admin).</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Visitors</p>
              <p className="text-xs text-deep-muted">1 access group, 1 user account. Minimal CMS-side usage; accounts managed in CRM.</p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Layouts & Templates */}
      <CollapsibleSection title="Page Layouts / Templates" count={11}>
        <div className="flex flex-wrap gap-1.5">
          {LAYOUTS.map((l) => (
            <span key={l} className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-sky-100 text-sky-700">{l}</span>
          ))}
        </div>
      </CollapsibleSection>

      {/* User Roles */}
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

      {/* Settings */}
      <CollapsibleSection title="Settings & Configuration">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-xl font-bold text-deep">9,156</p>
            <p className="text-xs text-deep-muted mt-1">Active Redirects</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-xl font-bold text-deep">10</p>
            <p className="text-xs text-deep-muted mt-1">Translation Namespaces</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-xl font-bold text-deep">70+</p>
            <p className="text-xs text-deep-muted mt-1">Page Builder Widgets</p>
          </div>
          <div className="p-3 border border-tan/50 bg-white text-center">
            <p className="text-xl font-bold text-deep">5</p>
            <p className="text-xs text-deep-muted mt-1">Custom Field Types</p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  )
}
