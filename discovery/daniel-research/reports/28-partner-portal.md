# Partner/Stakeholder Portal Assessment

**Date:** 2026-03-24
**CMS:** Simpleview CMS (saltlake.simpleviewcms.com)
**Task:** #29

---

## Summary

Visit Salt Lake has a **Members/Partner portal system** that is primarily managed through the **Simpleview CRM platform** rather than directly in the CMS. The CMS provides the container pages and navigation, while the actual partner login, listing management, and membership features are handled by the Simpleview CRM extranet.

---

## Partner Portal Components Found

### 1. Members Section (Frontend)
**URL:** `https://www.visitsaltlake.com/members/`

**Dedicated navigation bar:**
| Nav Item | Description |
|----------|-------------|
| LISTINGS & IMAGERY | Partner listing/image management |
| MEMBERSHIP BENEFITS | Membership tier benefits |
| CONTACT US | Partner contact |
| MEMBER LOGIN | Login for existing members |

**Page content:**
- Hero section: "THE POWER OF MEMBERSHIP — Grow with Salt Lake's Thriving $18 Billion Tourism Market"
- Membership Overview section
- Partnership tiers section with multiple levels visible

**Member Login behavior:**
- URL: `visitsaltlake.com/members/?group=60b7b9ad56b1551548b5e1d1`
- Adds a `group` parameter — may change displayed content by partner group
- No visible login form on the page — login likely handled via modal, redirect, or Simpleview CRM

### 2. Extranet Login (System Page)
**CMS path:** Sitemap > System > Extranet Login
**Frontend URL:** `https://www.visitsaltlake.com/extranet-login/`

- Standard Page type nav item in the CMS (folder: "extranet-login")
- Frontend shows error: "Error: Must pass a redirectUrl"
- This is a **redirect handler** that expects a URL parameter to redirect partners to the Simpleview CRM extranet
- When accessed without the redirect parameter, it displays fallback content (Experience Marketplace passes)

### 3. My Account (System Page)
**CMS path:** Sitemap > System > My Account
- Standard Page type nav item (folder: "my-account")
- Visitor account management page
- Tied to the Visitors module (User Accounts + Access Groups)

### 4. Visitors Module (CMS Backend)
| Feature | Count | Notes |
|---------|-------|-------|
| Access Groups | 1 | "Default" group only |
| User Accounts | 1 | Minimal CMS-side usage; one test/scan entry |

The Visitors module exists but is minimally used in the CMS. Partner accounts are likely managed in the **Simpleview CRM** directly, not through the CMS Visitors module.

---

## How the Partner System Works

Based on the evidence gathered:

```
Partner visits visitsaltlake.com/members/
    ↓
Sees membership information, partnership tiers
    ↓
Clicks MEMBER LOGIN
    ↓
Redirected to Simpleview CRM extranet (external to CMS)
    ↓
Manages listings, imagery, account in Simpleview CRM
```

The CMS provides:
- **Members page** — marketing content about membership benefits
- **Extranet Login page** — redirect handler to CRM
- **My Account page** — likely embedded CRM account management
- **Visitors module** — basic visitor account/access group infrastructure (minimally used)

The Simpleview CRM provides:
- **Actual partner login/authentication**
- **Listing management** (create, edit listings)
- **Imagery management** (upload, manage photos)
- **Membership/subscription management**
- **Partner dashboard/extranet**

---

## Membership/Partnership Structure

From the frontend Members page:

### Partnership Tiers
Multiple partnership levels visible (specific tier names and pricing need frontend deep-dive to fully document). The structure includes:
- Different partnership levels (likely bronze/silver/gold/platinum or similar)
- Each level with different benefits
- Pricing tiers visible on the page

### Member Benefits Include (from navigation)
- **Listings & Imagery** — manage their business listing on visitsaltlake.com
- **Membership Benefits** — tier-specific benefits
- **Contact/Support** — dedicated partner support

---

## Rebuild Implications

### What Needs to Be Rebuilt
1. **Members marketing page** — partnership tiers, benefits overview, CTA to join
2. **Members navigation** — dedicated nav bar with Listings & Imagery, Benefits, Contact, Login
3. **Member Login redirect** — authentication flow to partner portal
4. **My Account page** — visitor account management

### What May NOT Need Rebuilding (Handled by CRM)
- Actual partner login/authentication system
- Listing management interface
- Imagery management interface
- Membership subscription management
- Partner dashboard/extranet

### Key Decision Point
The rebuild needs to clarify:
1. **Will the partner portal continue on Simpleview CRM?** If yes, the new site just needs redirect/embedding pages
2. **Will a new partner portal be built?** If yes, this is a significant additional scope item (authentication, listing management, image upload, membership tiers)
3. **What about the Visitors module?** The CMS has visitor account infrastructure but it's barely used. Is this planned to grow?

### CRM Dependency
The partner portal is deeply tied to Simpleview CRM. If the site moves to a new CMS but keeps Simpleview CRM, the integration approach changes. If both CMS and CRM are replaced, the partner portal becomes a major rebuild item.

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-29/)
- `01-system-pages.png` — System pages list showing Extranet Login, My Account
- `02-extranet-login-edit.png` — Extranet Login nav item edit form in CMS
- `03-extranet-login-frontend.png` — Extranet Login page on frontend (shows redirect error + Experience Marketplace)
- `04-members-frontend.png` — Members page with partnership tiers and dedicated navigation
- `05-member-login.png` — Member Login link behavior (same page with group parameter)

### Raw Data (docs/marketing-site-research/raw/phase-29/)
- `01-system-pages-snapshot.txt` — System pages accessibility snapshot
- `02-extranet-login-edit.html` — Extranet Login CMS edit form HTML
- `03-members-frontend-snapshot.txt` — Members page frontend snapshot
