# Static & Corporate Pages

Functional audit of corporate/organizational pages on visitsaltlake.com, focusing on the Members section and other non-visitor-facing content.

---

## What Users See

**Members section** (`/members/`):
- Sub-navigation: Become a Member, Member Events, Contact Us, Member Login
- Content describing membership benefits organized into three pillars:
  - **Access**: Benefits related to visibility and exposure
  - **Connection**: Networking and partnership opportunities
  - **Educate and Celebrate**: Training, events, and recognition
- Membership tiers with an "Explore Membership Tiers" CTA
- Member events page listing upcoming events for members

**Member Login**:
- Both "Members Only Portal" and "Member Login" links point to the same destination: `https://saltlake.extranet.simpleviewcrm.com/login/`
- This is the Simpleview Extranet — a separate application from the public website
- Members log into the Simpleview CRM extranet to access their portal

**Other corporate pages** observed in site navigation:
- **About Us**: Organizational information about Visit Salt Lake
- **Contact**: General contact information
- **Press & Research**: Media resources, press releases, research data
- **Travel Trade**: Resources for travel industry professionals

## What Users Can Do

- Learn about membership benefits and tiers
- View upcoming member events
- Log into the Members Only Portal (Simpleview Extranet) to access member-specific tools
- Explore membership tiers to understand pricing and benefits
- Contact the membership team
- Browse press releases and research data
- Access travel trade resources

## Data Sources

- **Simpleview CMS**: All editorial page content (membership benefits, about us, contact info)
- **Simpleview CRM Extranet** (`saltlake.extranet.simpleviewcrm.com`): Member portal — this is a completely separate application managed by Simpleview, not part of the public website
- **Member Events**: Likely managed in the CMS or pulled from the CRM's event system
- **Membership Tiers**: Content appears to be static CMS pages describing tier benefits
- **Press & Research**: Mix of CMS content and potentially downloadable documents/reports

## Third-Party Services

- **Simpleview CRM Extranet**: Member login portal where members manage their accounts, listings, and access member-only features. This is hosted and maintained by Simpleview at their subdomain (`saltlake.extranet.simpleviewcrm.com`)
- **Simpleview CMS**: Content management for all corporate pages
- Potential integration with payment processing for membership dues (not visible from front-end)

## Edge Cases

- The member portal is an entirely separate application (Simpleview Extranet) — we don't control its design, features, or user experience. Any "member portal" in the rebuild would either need to replicate its functionality or continue linking out to it.
- Two different links ("Members Only Portal" and "Member Login") go to the same URL — redundant and potentially confusing
- Membership tiers and benefits content is marketing copy — if tier structures change, multiple pages may need updates
- Member events page could show past events if not regularly cleaned up
- Press & Research may contain outdated statistics or reports that should be archived
- Travel Trade section may have restricted-access content — unclear if there's authentication or if it's just a separate navigation section
- Contact information (email addresses, phone numbers) for staff appears on multiple pages and must be kept in sync

## Admin Management

- Corporate pages are relatively static CMS content that needs periodic review
- Member portal functionality is managed in Simpleview CRM Extranet — VSL staff configure member access, tiers, and permissions there, not in the CMS
- Membership tier structures and pricing are likely managed outside the website (in CRM or internally) with the website content updated to match
- Member events need to be created, promoted, and archived on a rolling basis
- Press releases and research reports need to be published and potentially organized by date/topic
- Staff contact information across multiple pages needs coordinated updates when team members change
- Travel Trade content may need periodic updates based on industry partnerships

## Questions for Client

1. What can members do in the Simpleview Extranet portal? Can they update their own listings, access reports, manage their profile?
2. What membership tiers exist, and what specific features/access does each tier include?
3. In the rebuild, should the member portal remain as a link to Simpleview Extranet, or is there interest in building custom member-facing features into the new site?
4. Is the Travel Trade section public or restricted-access? Does it require authentication?
5. How many active members does VSL have? Is membership growing or stable?
6. How are membership dues processed — through the extranet, an external system, or manually?
7. What member events are typical (frequency, type, attendance)? Is event registration handled on the website or elsewhere?
8. Is the Press & Research section actively used by media? What content is most accessed?
9. Are there any corporate pages that are outdated or could be removed?
10. Does the About Us page need to reflect organizational structure, board members, or annual reports? How often does this information change?
