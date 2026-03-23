# Third-Party Integrations — Current Stack

Source: Client-provided plugin list (2026-03-19) + live site audit.

## Client-Reported Plugins

| Service | Category | What It Does | Notes |
|---------|----------|-------------|-------|
| **Simpleview CMS** | Core platform | Website, hosting, web server, CDN | The entire site runs on this |
| **Simpleview CRM** | Core platform | Database for sales, partners, website content | Backend database that feeds listings, partners, and sales data to the site |
| **Google Cloud** | Data | Business information integration on the website | Likely Google Business Profile API for business data on listing pages |
| **NowPlayingUtah** | Content feed | Leisure events feed | External events imported into the site — events are NOT solely CMS-managed |
| **Ripe** | Commerce | Booking integration | Hotel/accommodation booking — need to understand if embedded or outbound links |
| **Bandwango** | Commerce | Ticketing for all passes except Super Pass | E-commerce/ticketing — passes are sold through the site |
| **Mint+** | Sales (B2B) | Sales lead and comparison tool | Used by the meetings/convention sales team — B2B functionality |
| **EventsForce** | Events | Events ticketing and communication | Another ticketing + communication platform — distinct from Bandwango |
| **Act On** | Marketing | Email newsletters | Marketing automation platform — forms, email sequences, tracking, lead nurture |
| **Map Publisher** | Maps | CRM-integrated maps | Simpleview add-on — maps show partner/listing data from the CRM |
| **Civic Plus** | Accessibility | ADA compliance | Overlay widget — accessibility is bolted on, not built into the site |
| ~~**Outdoor Active**~~ | ~~Content feed~~ | ~~Hiking trails~~ | ~~Being cancelled — skip for rebuild~~ |
| **GoDaddy** | Infrastructure | URL/domain registrations | Domain management only — no functional impact on the site |

## Live Site Audit Findings (from page source inspection)

| Integration | Technical Detail |
|-------------|-----------------|
| Google Tag Manager | 2 instances: GTM-5L5W32, GTM-NFBVG93 |
| Visual Website Optimizer (VWO) | A/B testing platform |
| Simpleview CRM form builder | `plugins_crm_formbuilder`, `plugins_crm_rfp`, `plugins_crm_rsvp` |
| Simpleview API | `/plugins/core/svapi/` for weather + content |
| Member portal | Auth at `saltlake.extranet.simpleviewcrm.com/login/` |
| Bluetoad | Digital publications (Sports Play Book) |
| Weather API | Lat/long-based weather widget |
| Goatee templating | Simpleview's client-side JS renderer |

## Key Implications

1. **Multiple data sources**: Content comes from CMS, CRM, NowPlayingUtah, Outdoor Active, Google Cloud — not a single database
2. **Real commerce**: Bandwango (passes) and Ripe (booking) mean money flows through or adjacent to the site
3. **Marketing automation**: Act On is more than newsletters — it's tracking, forms, nurture sequences
4. **CRM-driven maps**: Map Publisher means maps aren't just Google embeds; they render partner data from the CRM
5. **B2B sales tools**: Mint+ serves the meetings/convention sales team — separate user base from public visitors
6. **ADA is overlay-based**: Civic Plus is a bolt-on, not built into the codebase. A rebuild is an opportunity to build accessibility properly.
7. **Two ticketing systems**: Bandwango for passes, EventsForce for event tickets — why two? Need to understand the distinction.
