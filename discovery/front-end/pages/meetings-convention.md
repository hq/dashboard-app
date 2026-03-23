# Meetings & Conventions

Functional audit of the Meetings section on visitsaltlake.com. This section operates as a full mini-site with its own navigation and information architecture.

---

## What Users See

**Meetings mini-site navigation**:
- **Why Choose Salt Lake**: What's New, airport access, convention district, sustainability, testimonials
- **Hotels**: Organized by district
- **Venues**: Sports venues, hotel venues, unique venues
- **Salt Palace Convention Center**: Facility specs, sustainability info, Sodexo Live catering
- **Mountain America Expo Center**: Separate venue page
- **Destination Services**: Digital marketing, supplier directory, transportation, housing services, community service
- **Convention Calendar**: Upcoming events at convention facilities
- **Submit RFP**: Information page linking to the actual form
- **Contact Us**: Staff directory and contact information

**RFP Form** (`/rfp/`):
- Note: The actual form lives at `/rfp/`, not at `/meetings/submit-rfp/` (which is an informational page that links to the form)
- Form submits via POST to `https://saltlake.simpleviewcrm.com/webapi/rfp/rfp_submitform.cfm`
- **80+ form fields** organized into sections:
  - **Contact Info**: fname, lname, company, title, addr1, addr2, city, state, zip, country, email, weburl, phone, phoneext, fax
  - **Meeting Details**: leadname, organization, responsedate, decisiondate, roomattend, file upload
  - **Decision Stage**: decision (3 radio options), inspection (2 radio options + date picker)
  - **Dates**: 3 alternate arrival/departure date sets, day pattern (radio + select), date comments textarea
  - **Room Block**: 14-day grid with date + room count per day, room block start/end dates
  - **Suite Needs**: Freeform textarea
  - **History**: 2 previous event entries (year, property, city)
- **Required fields**: fname, lname, company, addr1, city, state, zip, country, email, phone, leadname, organization, responsedate, decisiondate, roomattend, arrival1, departure1
- **Alternative submission**: Email RFP directly to achappell@visitsaltlake.com

**Other forms**:
- Sports RFP at `/sports/contact-us/rfp/` (separate form for sporting events)
- Meetings newsletter signup
- Staff directory with individual contact info

## What Users Can Do

- Browse comprehensive information about Salt Lake as a meetings destination
- View hotel inventory organized by geographic district
- Explore venue options by type (sports, hotel, unique)
- Review Salt Palace Convention Center specs and catering options
- Access supplier directory and destination services
- View convention calendar
- **Submit an RFP** with detailed meeting requirements, date preferences, room block needs, and event history
- Upload a file with their RFP submission
- Email an RFP directly to staff as an alternative
- Sign up for the meetings newsletter
- Contact specific staff members

## Data Sources

- **Simpleview CMS**: All editorial page content (Why Choose SLC, venue descriptions, services)
- **Simpleview CRM** (`saltlake.simpleviewcrm.com`): RFP form submission endpoint — form data goes directly into the CRM pipeline
- **Hotels data**: Likely pulled from Simpleview's listing/lodging data, organized by district
- **Venues data**: May be a mix of CMS pages (Salt Palace, Mountain America) and listing data
- **Convention Calendar**: Source unclear — could be manual CMS entries, CRM data, or an external calendar feed
- **Staff Directory**: CMS-managed contact list

## Third-Party Services

- **Simpleview CRM**: RFP submission processing and lead management (`saltlake.simpleviewcrm.com/webapi/rfp/rfp_submitform.cfm`)
- **Simpleview CMS**: Content management for all meeting pages
- **Sodexo Live**: Catering partner for Salt Palace Convention Center (mentioned in content, not a technical integration)
- **Email**: RFP alternative submission and likely notification system for new RFP submissions

## Edge Cases

- The RFP form is at `/rfp/` but the meetings nav links to `/meetings/submit-rfp/` (an info page) — users could miss the actual form or get confused by the two-step process
- 80+ form fields is an extremely long form — high likelihood of abandonment, especially on mobile
- The 14-day room block grid is particularly challenging on mobile screens
- File upload on the RFP form — what file types and sizes are accepted? Is there validation?
- The form posts to Simpleview CRM's web API — if the API is down or changes, the form silently fails
- Email alternative (achappell@visitsaltlake.com) is a single person's email — what happens when that person is out or leaves the organization?
- Hotels "by district" implies geographic organization — if districts change or hotels move between categories, the structure needs manual updates
- Convention calendar could show past events if not regularly maintained
- Sports RFP is a completely separate form at a different URL — meeting planners who need sports venues too must submit two forms

## Admin Management

- RFP submissions flow into Simpleview CRM where sales staff process them
- Meeting pages are edited in Simpleview CMS — there's a lot of content across the mini-site to keep current
- Hotel and venue information needs regular updates (pricing, availability, renovations, closures)
- Convention calendar entries need to be added/removed as events are booked
- Staff directory needs updates when team members change
- Salt Palace specs (square footage, room capacities, floor plans) need to match the physical facility
- Sustainability content needs periodic refresh as certifications and initiatives change
- Supplier directory entries need to be managed (additions, removals, contact info changes)

## Questions for Client

1. Is the RFP form working correctly end-to-end? What happens after submission — confirmation page, email notification to staff, CRM pipeline entry? Can we test this?
2. What's the completion rate on the RFP form? With 80+ fields, how many users start but don't finish?
3. Does the convention calendar have an API or data feed, or is it manually maintained in the CMS?
4. Is the meetings newsletter a separate list from the visitor newsletter? What platform sends it?
5. How is the hotel-by-district data maintained? Is it pulled from listings or manually curated on the meetings pages?
6. What happens to RFPs emailed to achappell@visitsaltlake.com — do they get entered into the CRM manually?
7. Is there a reason the actual RFP form (`/rfp/`) is separate from the meetings section navigation? Could the form be embedded directly in `/meetings/submit-rfp/`?
8. How important is the meetings mini-site vs. the leisure/visitor side of the site? What percentage of revenue comes from meetings/conventions?
9. Would a shorter initial RFP form (name, org, dates, size) with follow-up for details improve conversion?
10. Are the Sports RFP and Meetings RFP reviewed by different teams, or should they be consolidated?
