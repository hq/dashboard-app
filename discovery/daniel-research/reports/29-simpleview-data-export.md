# Simpleview Data Export & API Research

**Date:** 2026-03-24
**Task:** #10

---

## Summary

Simpleview provides both a **CMS REST API (v2)** and a **CRM SOAP API** for data access. The platform is designed for integration with third-party systems, and data portability is marketed as a feature. However, documentation is limited and access requires API credentials from Simpleview.

---

## Simpleview CMS REST API (v2)

### Source
Official documentation: [simpleviewinc/cms-docs on GitHub](https://github.com/simpleviewinc/cms-docs)
Published at: https://simpleviewinc.github.io/cms-docs

### Available Endpoints

| Endpoint | Version | Capabilities |
|----------|---------|-------------|
| **Listings** | Legacy + Apex | Fields, queries, metadata. Apex version has enhanced properties API |
| **Events** | Standard | Field definitions, example data, queries, metadata |
| **Offers** | Standard | Offer fields, example data, metadata |
| **Navigation** | Standard | Nav item fields, endpoint examples |
| **Blog Posts** | Standard | Post fields, endpoint documentation |

### API Features
- **REST-based** API (v2)
- **Authentication** via access tokens
- **Query capabilities** — filter and search content
- **Metadata access** — content type definitions
- **Two listing models** — Legacy and Apex (newer, enhanced)

### Notes
- Documentation described as "not complete or exhaustive" — basic introduction and overview
- Each model includes example queries and data samples
- The Apex model appears to be the newer implementation

---

## Simpleview CRM SOAP API

### Source
- [DoghouseMedia/simpleview-crm-php on GitHub](https://github.com/DoghouseMedia/simpleview-crm-php) — PHP helper library
- [Simpleview Membership Management API v1.1 PDF](https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/lakecharles/Listings_API_Documentation_2__f77b869c-0b8f-42c3-bbe5-59d42d5ef5b0.pdf)

### API Architecture
| Property | Details |
|----------|---------|
| Protocol | SOAP (XML-based) |
| WSDL endpoint | `http://[client].simpleviewcrm.com/webapi/listings/soap/listings.cfc?wsdl` |
| Authentication | clientUserName + clientPassword |
| Language | ColdFusion backend (.cfc endpoints) |

### Available Data (inferred from library and documentation)
- **Listings** — business/venue listings with details
- **Contacts** — CRM contact/customer information
- **Events** — event data
- **Members** — membership management

### Authentication Requirements
```
clientUserName: API credentials username
clientPassword: API credentials password
serviceUrl: http://saltlake.simpleviewcrm.com/webapi/listings/soap/listings.cfc?wsdl
```

**Note:** Visit Salt Lake's specific SOAP endpoint would be: `http://saltlake.simpleviewcrm.com/webapi/listings/soap/listings.cfc?wsdl` (needs verification)

---

## Data Portability Assessment

### What Simpleview Says
- "With a transportable database, all website content is directly accessible"
- "Empowering DMOs to leverage their content and member data across platforms if needs evolve"
- Simpleview has been "adding additional APIs that allow them to be not just hybrid, but headless"
- A migration path has been developed for CRM clients

### What Third Parties Confirm
- **VentureWeb** has successfully integrated Simpleview CRM with custom open-source CMS platforms (ProcessWire CMS)
- **Trujay** offers Simpleview CRM migration services to other CRMs (Salesforce, etc.)
- **SendSites** has direct integration with Simpleview CRM Listings
- Multiple third-party developers have built API integrations

### Data Export Feasibility by Content Type

| Content Type | Volume | Export Method | Feasibility | Notes |
|-------------|--------|--------------|-------------|-------|
| **CMS Pages** | ~1,092 | CMS REST API (Navigation endpoint) | High | Nav items with fields accessible via API |
| **Blog Posts** | 310 | CMS REST API (Blog Posts endpoint) | High | Documented endpoint |
| **Articles** | 156 | CMS REST API (likely similar to Blog) | High | Same PR module structure |
| **CRM Listings** | 4,629 | CRM SOAP API or CMS REST API (Listings) | High | Best documented endpoint |
| **CRM Events** | 1,898 | CRM SOAP API or CMS REST API (Events) | High | Documented endpoint |
| **Offers** | Unknown | CMS REST API (Offers endpoint) | High | Documented endpoint |
| **Images** | 3,110 | Simpleview CDN URL scraping | Medium | Images on CDN, bulk download possible |
| **Documents** | 590 | Simpleview CDN URL scraping | Medium | Same CDN approach |
| **Videos** | 136 | URL references (mostly external) | High | Just URL migration |
| **Redirects** | 9,156 | CMS admin export or scraping | Medium | May need manual export from CMS |
| **CMS Tags** | 1,432 | CMS REST API or admin export | Medium | May not have dedicated endpoint |
| **Page Builder Content** | ~1,092 pages | No documented API | Low | Widget/component structure may not be exportable via API |
| **User Accounts** | 1 | Manual | High | Minimal data |
| **Collection Types** | ~250+ items | No documented API | Low-Medium | 15 types, may need per-type extraction |
| **Translation Namespaces** | 10 | Manual export from CMS | Medium | JSON-formatted, copy from admin |

---

## Migration Approaches

### Approach 1: API-Based Migration (Recommended)
1. Use CMS REST API to extract: listings, events, offers, blog posts, navigation
2. Use CRM SOAP API for: detailed listing data, contacts, member data
3. Bulk download images from CDN (URL patterns known)
4. Manually extract: page builder content, collection types, tags, redirects

**Pros:** Structured data, maintainable, can be scripted
**Cons:** Page builder content not fully accessible via API

### Approach 2: Web Scraping (Fallback)
1. Crawl all 7,619 URLs from sitemap
2. Extract content from HTML
3. Parse structured data (JSON-LD) for listings and events
4. Download all media assets

**Pros:** Gets everything visible on the frontend
**Cons:** Loses CMS structure, draft content, unpublished content, admin metadata

### Approach 3: Hybrid (Most Realistic)
1. API extraction for listings, events, blog posts (structured data)
2. Manual export from CMS admin for: redirects, tags, collection types, translations
3. CDN bulk download for media assets
4. Web scraping for page builder content structure
5. Manual recreation of layouts/templates (11 templates)

**Pros:** Best of both approaches
**Cons:** Requires multiple tools and processes

---

## Risks & Unknowns

### High Risk
1. **Page Builder content structure** — No documented API for extracting widget/component layouts. May need to scrape the page builder HTML or manually recreate
2. **API access credentials** — Need to confirm Visit Salt Lake has API credentials and what tier of access they have

### Medium Risk
3. **Rate limits** — Not documented. Could slow bulk extraction
4. **API completeness** — Documentation described as "not complete or exhaustive"
5. **CRM vs CMS data overlap** — Some data exists in both systems; need to determine authoritative source

### Low Risk
6. **Media assets** — On CDN with predictable URLs, bulk download feasible
7. **Blog/article content** — Well-documented API endpoints
8. **Redirect export** — 9,156 redirects visible in CMS admin, can be extracted from HTML

### Open Questions
- [ ] Does Visit Salt Lake have active API credentials for CMS REST API and CRM SOAP API?
- [ ] What API tier/access level do they have?
- [ ] Are there rate limits on the API?
- [ ] Can page builder component layouts be exported via any method?
- [ ] Is there an admin-level export tool for bulk data (redirects, tags, etc.)?
- [ ] Is the CRM data (listings, events) available separately from the CMS site?
- [ ] What contractual restrictions exist on data export when leaving Simpleview?

---

## Action Items for Client

1. **Request API credentials** from Simpleview for both CMS REST API and CRM SOAP API
2. **Confirm API access tier** — what endpoints are available with their account
3. **Ask Simpleview about data export** — what tools or processes they provide for migrations
4. **Clarify contractual terms** — data ownership and export rights when transitioning
5. **Request CRM data separately** if possible — listings and events data in bulk format (CSV, JSON)

---

## Resources

- [Simpleview CMS Docs (GitHub)](https://github.com/simpleviewinc/cms-docs)
- [Simpleview CMS Docs (Published)](https://simpleviewinc.github.io/cms-docs)
- [Simpleview CRM PHP Library (GitHub)](https://github.com/DoghouseMedia/simpleview-crm-php)
- [Simpleview Listings API Documentation v1.1 (PDF)](https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/lakecharles/Listings_API_Documentation_2__f77b869c-0b8f-42c3-bbe5-59d42d5ef5b0.pdf)
- [VentureWeb: Integrating Simpleview CRM with Custom CMS](https://www.ventureweb.net/field-notes/integrating-the-simpleview-crm-api/)
- [Simpleview CMS Integrations](https://www.simpleviewinc.com/products/simpleview-cms/integrations/)
- [Simpleview CRM Integrations](https://www.simpleviewinc.com/products/simpleview-crm/integrations/)
- [Trujay: Simpleview CRM Migration Service](https://migration.trujay.com/crm/simpleview-crm-migration-service/)
- [Quora: Does Simpleview CRM have an API?](https://www.quora.com/Does-Simpleview-CRM-have-an-API)
