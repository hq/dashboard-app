# CMS User Roles & Permissions Documentation

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #9

---

## Permission System Overview

The Simpleview CMS uses a role-based access control (RBAC) system with **166 individual permission checkboxes** organized across the following sections:

### Permission Categories (from Admin role — full list)
1. **General Settings** — Manage CMS Tags, Manage Users, Manage Roles, View User History, Manage Field Builder, Manage Locale Tags, Manage Nav Tags, Task Admin
2. **Translation** — Static Namespaces (Access, Admin, View/Use, Modify, Delete/Restore)
3. **Asset Library** — Images, Documents, External Links, Videos (each: Access, View/Use, Modify, Delete/Restore)
4. **Assets Settings** — Image Categories, Document Categories, Video Categories
5. **Field Builder** — Asset Library (Images, Videos, Documents, External Links), Core - Textbox
6. **Auto Responder** — Content, Links
7. **Public Relations** — Blog (Authors, Categories, Posts, Tags), Articles (Authors, Categories, Posts, Tags), Articles - Ski City (Authors, Categories, Posts, Tags)
8. **Collection Types** — Announcements, Alerts, Questions (FAQ), Expanding Content, Slides, Vertical Videos, Microsite Slides, Regions Slides, Neighborhood Slides, Navigation Links, Contact Slides, Staff Departments, Hero Slides, Social Slides, Resort Slides
9. **Tag Manager** — Access, View/Use, Modify, Delete
10. **Code Editor** — Access
11. **Dynamic Content** — Profiles, Persona Tags
12. **Map Publisher** — Maps
13. **Sites** — Nav, Nav Tags
14. **Sitemap** — Main Navigation, Secondary Navigation, Footer Navigation, Microsites, Meetings Microsite Nav, Conventions, Landing Pages, External Links, System, Industry
15. **Primary Site** — Layouts, Redirects, Import Nav Items
16. **Tasks** — Categories
17. **Visitors** — User Accounts, Access Groups

### Permission Types per Section
Most sections use a combination of:
- **Access** — Can see the section
- **Admin** — Full admin access to section
- **View/Use** — Can view content
- **Modify** — Can edit content
- **Delete/Restore** (or just **Delete**) — Can delete content

---

## Roles Summary

| # | Role | Permissions Enabled | % of 166 | Description |
|---|------|-------------------|-----------|-------------|
| 1 | Admin | 166 | 100% | Access to everything |
| 2 | CMS Training | 111 | 67% | Training account with broad access |
| 3 | Marketing | 110 | 66% | General marketing access — cannot delete items |
| 4 | PR Team | 82 | 49% | PR team access where they need it |
| 5 | SMG Access | 60 | 36% | SMG employees for Equestrian Center, Expo Center, Convention Center |
| 6 | Membership Department | 48 | 29% | DTN ads and membership needs |
| 7 | Limited External Access for Testing | 13 | 8% | Very limited access for testing purposes |
| 8 | HR access | 11 | 7% | HR access to contacts for on/off and adding |
| 9 | aRes | 1 | 1% | Minimal (likely auto-responder specific) |

---

## Role Details

### 1. Admin (166/166 permissions)
- **Description:** Access to everything
- **All 166 permissions enabled** — full CRUD access across every module, section, and feature
- Used by: Core admin staff

### 2. CMS Training (111/166 permissions)
- **Description:** (none)
- Broad access for training purposes — 67% of permissions
- Likely used for onboarding new CMS users
- Full details in: `raw/phase-09/04-role-cms-training-snapshot.txt`

### 3. Marketing (110/166 permissions)
- **Description:** General marketing access — cannot delete items
- Key restriction: **No delete permissions** — can view and modify but not remove content
- Broad access otherwise (66% of permissions)
- Full details in: `raw/phase-09/07-role-marketing-snapshot.txt`

### 4. PR Team (82/166 permissions)
- **Description:** Set up for the PR team to have access where they need it
- Focused on Public Relations modules (Articles, Blog, etc.)
- 49% of permissions — targeted access
- Full details in: `raw/phase-09/09-role-pr-team-snapshot.txt`

### 5. SMG Access (60/166 permissions)
- **Description:** Access for SMG employees for Equestrian Center, Expo Center, Convention Center
- Venue-specific access for Salt Palace/Mountain America/Equestrian Park staff
- 36% of permissions
- Full details in: `raw/phase-09/10-role-smg-snapshot.txt`

### 6. Membership Department (48/166 permissions)
- **Description:** Access for DTN ads and other things membership needs to touch
- Focused access for membership/advertising staff
- 29% of permissions
- Full details in: `raw/phase-09/08-role-membership-snapshot.txt`

### 7. Limited External Access for Testing (13/166 permissions)
- **Description:** This is a very limited access for testing purposes
- Minimal permissions for external testers/contractors
- 8% of permissions
- Full details in: `raw/phase-09/06-role-limited-snapshot.txt`

### 8. HR access (11/166 permissions)
- **Description:** For HR to have access to the contacts so they can turn on and off and add as necessary
- Very narrow — focused on user/contact management only
- 7% of permissions
- Full details in: `raw/phase-09/05-role-hr-snapshot.txt`

### 9. aRes (1/166 permissions)
- **Description:** (none)
- Only 1 permission enabled — likely auto-responder specific
- Full details in: `raw/phase-09/03-role-ares-snapshot.txt`

---

## Users Summary

**Total users visible:** 25+ (paginated, may be more)

### User Distribution by Organization
| Organization | Domain | Count (visible) | Notes |
|-------------|--------|-----------------|-------|
| Visit Salt Lake | @visitsaltlake.com | ~19 | Core staff |
| Salt Palace/SMG | @saltpalace.com | ~4 | Venue staff |
| Simpleview | @simpleviewinc.com | ~1 | CMS vendor support |
| Hello Yellow (UK agency) | @helloyellow.uk | ~1 | External agency |

### Active Users (from visible page)
| Name | Email | Role | Active |
|------|-------|------|--------|
| Abbey Oborn | aoborn@visitsaltlake.com | CMS Training | Yes |
| Alex Templeman | alex@helloyellow.uk | CMS Training | Yes |
| Allison Chappell | achappell@visitsaltlake.com | Admin | Yes |
| Amelia Ware | aware@visitsaltlake.com | Marketing | Yes |
| Angelena Eubank | angelena.e@saltpalace.com | SMG Access | Yes |

**Note:** Many users are set to Active: No — likely former employees or seasonal access.

---

## Rebuild Implications

### Role Structure to Replicate
1. **Role-based access control** with granular permission checkboxes (166 individual permissions)
2. **Permission hierarchy:** Access → View/Use → Modify → Delete/Restore
3. **Section-level granularity:** Permissions are per-module, per-content-type, per-action
4. **No role inheritance observed** — each role appears to be independently configured

### Key Considerations for New Platform
- Marketing role's "no delete" restriction is a specific business rule that needs to be carried over
- SMG Access demonstrates venue-specific access control — the new system needs to support organization-based permissions
- External access (Hello Yellow, Simpleview) shows the need for external contractor/vendor roles
- HR access pattern shows a need for very narrow, function-specific roles
- The permission system covers: content CRUD, asset management, user management, site settings, publishing, and module access

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-09/)
- `01-manage-roles-list.png` — All 9 roles overview
- `02-role-admin.png` — Admin full permissions
- `03-role-ares.png` — aRes permissions
- `04-role-cms-training.png` — CMS Training permissions
- `05-role-hr.png` — HR access permissions
- `06-role-limited.png` — Limited External permissions
- `07-role-marketing.png` — Marketing permissions
- `08-role-membership.png` — Membership Department permissions
- `09-role-pr-team.png` — PR Team permissions
- `10-role-smg.png` — SMG Access permissions
- `11-manage-users.png` — User list

### Raw Data (docs/marketing-site-research/raw/phase-09/)
- Snapshot files (.txt) and HTML files (.html) for each role and the user list
- These contain the complete permission checkbox states for detailed comparison
