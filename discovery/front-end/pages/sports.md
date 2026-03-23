# Sports

Functional audit of the Sports section on visitsaltlake.com. Like Meetings, this operates as its own mini-site with dedicated navigation.

---

## What Users See

**Sports mini-site navigation**:
- **Why Salt Lake?**: Value proposition for sports event organizers
- **Facilities**: Venue inventory for sporting events
- **Services**: Support offerings including a Volunteers program
- **Sports Events Calendar**: Upcoming sporting events
- **Sports Symposium**: Annual industry event
- **Sports Social**: Networking event or social program
- **Contact Us**: Includes sub-pages for RFP and newsletter signup

**Featured venue**: Salt Lake Regional Athletic Complex — highlighted as a primary facility

**Sports Play Book**:
- PDF document hosted on Simpleview's asset CDN: `assets.simpleviewinc.com/.../Sports_Playbook_No_Bleed_Marks_...pdf`
- Not hosted on Bluetoad (as originally assumed during earlier research)
- Serves as a comprehensive pitch document for sports event organizers

**Playeasy integration**:
- External story/link to playeasy.com regarding the Utah Hockey Club facility
- Playeasy is a sports event marketplace platform — this was not in our initial integration inventory

**Sports-specific forms**:
- Sports RFP at `/sports/contact-us/rfp/` (separate from the Meetings RFP at `/rfp/`)
- Sports newsletter signup at `/sports/contact-us/sports-newsletter-sign-up/`

## What Users Can Do

- Learn about Salt Lake as a sports event destination
- Browse facility/venue options for sporting events
- View the sports events calendar
- Download or view the Sports Play Book PDF
- Learn about the Sports Symposium and Sports Social events
- **Submit a Sports RFP** (separate from the meetings RFP)
- Sign up for the sports-specific newsletter
- Access volunteer program information
- Click through to Playeasy for Utah Hockey Club facility information
- Contact sports sales staff

## Data Sources

- **Simpleview CMS**: Editorial content for all sports section pages
- **Simpleview CRM**: Sports RFP form likely submits to the same CRM as the Meetings RFP (needs confirmation)
- **Simpleview Assets CDN**: Hosts the Sports Play Book PDF (`assets.simpleviewinc.com`)
- **Sports Events Calendar**: Source unclear — could be CMS entries, CRM data, or manual updates
- **Facilities data**: Likely a mix of CMS pages and listing data from Simpleview

## Third-Party Services

- **Simpleview CMS**: Content management
- **Simpleview CRM**: RFP processing (presumed)
- **Simpleview Assets CDN**: PDF and document hosting
- **Playeasy** (`playeasy.com`): Sports event marketplace — at minimum a link partnership, possibly a deeper integration. This was NOT in our original integration inventory and needs investigation.
- **Email marketing platform**: Sports newsletter delivery (same platform as other newsletters, presumably)

## Edge Cases

- Sports section and Meetings section are parallel mini-sites with overlapping concerns (venues, RFPs, calendars, newsletters) — users planning a multi-purpose event may need to navigate both
- Sports RFP and Meetings RFP are completely separate forms — an event planner who needs both convention space and sports facilities must submit twice
- The Sports Play Book PDF is a static document that goes stale — when it was last updated is unclear from the front-end
- Playeasy link goes to an external site — if Playeasy changes their URL structure or removes the content, the link breaks with no fallback
- Sports Events Calendar and Convention Calendar appear to be separate — events that span both categories may need dual entry
- The Volunteers program under Services is unusual — it implies community engagement that needs coordination beyond the website
- Sports Symposium and Sports Social are recurring events — their pages need annual updates with new dates, speakers, registration links

## Admin Management

- Sports section content is managed in Simpleview CMS alongside the rest of the site
- Sports Play Book PDF must be manually updated and re-uploaded to the Simpleview Assets CDN when the document is revised
- Sports RFP submissions flow into the CRM (presumably) for the sports sales team to process
- Sports newsletter is a separate subscriber list requiring its own content and send schedule
- Facilities and venue information needs periodic updates as facilities are built, renovated, or decommissioned
- Sports Symposium and Sports Social pages need annual refresh with current event details
- Calendar events need to be added and removed on a rolling basis

## Questions for Client

1. Is Playeasy a one-off link/partnership, or is there an ongoing integration? Are there other Playeasy listings for Salt Lake facilities? Should we plan for a deeper integration in the rebuild?
2. Is Bluetoad still used anywhere on the site for digital publications, or has everything moved to Simpleview Assets CDN for PDF hosting?
3. Who manages the Sports Play Book PDF? How often is it updated? Would an interactive web-based version be more useful than a static PDF?
4. Does the Sports RFP submit to the same Simpleview CRM endpoint as the Meetings RFP? Are they processed by different sales teams?
5. Could the Sports RFP and Meetings RFP be consolidated into a single form with an "event type" selector, or do the fields differ significantly?
6. How is the Sports Events Calendar maintained? Is it the same system as the Convention Calendar?
7. What's the relationship between the Sports section and the Meetings section from an organizational standpoint? Same team or separate departments?
8. How active is the Volunteers program? Is it managed through the website or through a separate system?
9. Are the Sports Symposium and Sports Social annual events? Do they have their own registration systems?
10. Is there analytics on sports section traffic vs. meetings section traffic? Understanding the relative importance helps prioritize the rebuild.
