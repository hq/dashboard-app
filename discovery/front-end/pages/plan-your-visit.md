# Plan Your Visit

Functional audit of the Plan Your Visit section on visitsaltlake.com.

---

## What Users See

**Plan Your Visit** section includes several sub-pages:
- Trip ideas & itineraries
- Getting around (transportation information)
- Free visitors guide
- Newsletter subscription

**Free Visitors Guide page** — notable finding:
- The page explicitly states: **"Visit Salt Lake does not currently produce a printed Visitors Guide. Please explore the information available on this website..."**
- No printed guide exists despite the page title and CTAs implying one
- Instead, the page redirects users to:
  - Browse information on the website itself
  - Visit the Visitor Information Center at Salt Palace in person
  - Subscribe to the newsletter
  - Links to the **Utah state travel guide** (state-level, not VSL-specific)
  - Links to the **Utah Explorer's Guide** (state-level)
  - **Utah Travel Guide for People with Disabilities** (PDF download)
- Newsletter subscription options: visitor newsletter or blog newsletter

**Getting Around**:
- Transportation options for visitors (airport, transit, rideshare, rental cars)

**Trip Ideas & Itineraries**:
- Pre-built itineraries for different visitor types and interests

## What Users Can Do

- Browse trip ideas and itineraries
- Read transportation/getting around information
- Download the Utah Travel Guide for People with Disabilities (PDF)
- Follow outbound links to Utah state travel guides
- Subscribe to the visitor newsletter
- Subscribe to the blog newsletter
- Find information about the Visitor Information Center at Salt Palace

## Data Sources

- **Simpleview CMS**: Static page content for all sub-pages
- **PDF assets**: Disability travel guide hosted as a downloadable file
- **External links**: Utah state tourism resources (utahofficeoftourism.com or similar)
- **Newsletter/subscription**: Likely powered by an email marketing platform (needs confirmation — could be Simpleview's built-in tools or a third-party like Mailchimp, Constant Contact, etc.)

## Third-Party Services

- **Simpleview CMS**: Page content management
- **Email marketing platform**: Newsletter subscription handling (specific platform unknown from front-end audit alone)
- **Utah Office of Tourism**: External links to state-level travel guides
- **PDF hosting**: Disability travel guide PDF (hosted on Simpleview assets or elsewhere)

## Edge Cases

- The "Free Visitors Guide" page is actively misleading — there is no guide to receive, yet the CTA exists in the site footer and navigation, likely driving traffic to a dead-end experience
- Users expecting a downloadable PDF or printed guide will be disappointed by the redirect to "just browse the website"
- The Utah state travel guides are external resources VSL doesn't control — if those URLs change, the links break
- Newsletter subscription may have two separate lists (visitor vs. blog) — are these managed as separate audiences?
- The Visitor Information Center at Salt Palace is a physical location — operating hours, seasonal availability, and accessibility information should be current but may go stale
- PDF download for the disability travel guide — is this VSL's document or the state's? Is it kept up to date?

## Admin Management

- Sub-pages are static CMS content that needs periodic review for accuracy
- Transportation information (routes, services, prices) changes regularly and may go stale
- Itineraries reference specific venues and activities that may close or change
- Newsletter subscription forms need to be connected to the email platform and tested periodically
- The disability travel guide PDF needs to be updated when the source document changes
- External links to state resources should be checked periodically for broken URLs

## Questions for Client

1. Since there's no printed visitors guide, should the "Free Visitors Guide" CTA be renamed or removed? It currently sets an expectation that isn't met. Would "Plan Your Trip" or "Travel Resources" be more accurate?
2. Is there any plan to create a digital visitors guide (interactive PDF, flipbook, or web-based guide)?
3. What email marketing platform handles newsletter subscriptions? Are the visitor newsletter and blog newsletter separate lists with different content?
4. How often is transportation/getting around content updated? Who owns keeping it current?
5. How are itineraries created and maintained? Are they seasonal? How often are new ones added?
6. Is the Visitor Information Center at Salt Palace year-round? Are hours/availability shown anywhere on the site?
7. Who produces the Utah Travel Guide for People with Disabilities PDF? Is VSL responsible for updates or is it a state resource?
8. Are there analytics on how many users land on the visitors guide page and then bounce? This could quantify the impact of the misleading CTA.
