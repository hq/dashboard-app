# Legal & Compliance Pages Documentation

**Date:** 2026-03-24
**Task:** #7

---

## Legal Pages Inventory

| Page | URL | Status | Notes |
|------|-----|--------|-------|
| Privacy Policy | /privacy-policy/ | Active | Full privacy policy page |
| Terms | /terms/ | Active | Terms of use (landing page section) |
| Policies & Disclosures | /about-us/our-policies-disclosures/ | Active | Corporate policies hub |
| 990 Non-Profit Tax Forms | /about-us/our-policies-disclosures/990-non-profit-tax-forms/ | Active | Tax form disclosures |
| Audited Financial Statements | /about-us/our-policies-disclosures/audited-financial-statements/ | Active | Financial disclosures |

---

## Privacy Policy (/privacy-policy/)

**Page title:** "Visit Salt Lake Privacy Policy | Website Usage"
**Location in CMS:** Sitemap > Primary > Footer Navigation > Privacy Policy (Page type)
**Template:** Footer Nav - Content layout

The privacy policy is a standard legal content page linked from the footer. It's one of the 7 footer navigation items.

---

## Terms (/terms/)

**Page title:** "Terms"
**Location in CMS:** Sitemap > Primary > Landing Pages > Terms
**Note:** Listed under Landing Pages in the CMS, not Footer Navigation. This is a standalone terms/conditions page.

---

## Policies & Disclosures (/about-us/our-policies-disclosures/)

**Page title:** "Visit Salt Lake Policies & Disclosures"
**Sub-pages:**
- 990 Non-Profit Tax Forms
- Audited Financial Statements

**Note:** Visit Salt Lake is a non-profit organization — these disclosure pages are required for transparency. They contain downloadable financial documents.

---

## Cookie Consent Mechanism

### Implementation
| Property | Details |
|----------|---------|
| Type | Simpleview CMS built-in widget |
| Widget class | `plugins_common_cookie_banner` |
| Position | Bottom of page |
| Behavior | Implied consent (continue browsing = accept) |
| Button | "Accept" |
| Link | Privacy Policy |

### Cookie Banner Text
> "This site uses cookies to enhance the user experience and measure marketing activities. By continuing to use this website, you agree to their use. To find out more, please see our Privacy Policy."

### Cookie Consent Approach
- **Opt-out model** — cookies load by default, user can accept to dismiss banner
- **No granular consent options** — no cookie category selection (necessary, analytics, marketing)
- **No cookie preference center** — single "Accept" button only
- **No reject option** — implied consent by continuing to browse
- **Simpleview built-in** — configured in Page Builder as a widget

### Compliance Considerations
- Current implementation may not meet GDPR requirements (no opt-in, no granular consent)
- May be acceptable for US-focused site but would need updating for EU visitors
- No evidence of cookie consent management platform (OneTrust, CookieBot, etc.)

---

## Accessibility

### Accessibility Statement
**No dedicated accessibility statement page found.** No links to accessibility content in footer, header, or anywhere on the site.

### Accessibility Monitoring
- **Monsido** — 3 scripts running in background:
  - `heatmaps.monsido.com` — heatmap tracking
  - `pagecorrect.monsido.com` — page correction suggestions
  - `app-script.monsido.com` — accessibility monitoring/scanning
- Monsido is a **background monitoring tool**, not a user-facing widget
- No visible accessibility overlay (AudioEye, UserWay, accessiBe, etc.)

### Accessibility Features Observed
- Alt text field on CMS images (documented in Task 28)
- Material Icons (icon font, not pure image icons)
- Semantic HTML structure in page builder output
- No ARIA-specific implementation documented

---

## Other Compliance Items

### Non-Profit Disclosures
Visit Salt Lake operates as a non-profit organization with:
- 990 tax form disclosures
- Audited financial statement disclosures
- These are legal requirements for non-profit transparency

### DMCA / Copyright
No dedicated DMCA or copyright page found. Copyright notice in footer: "© 2026 Visit Salt Lake"

---

## Rebuild Implications

### Must Carry Over
1. **Privacy Policy** — content needs to be migrated and updated for new platform
2. **Terms** — carry over or update
3. **Cookie consent banner** — re-implement with proper opt-in/granular consent
4. **Non-profit disclosures** — 990 forms and audited financial statements pages
5. **Footer copyright notice**

### Should Improve
1. **Cookie consent** — upgrade to GDPR-compliant with granular consent options (necessary, analytics, marketing cookies)
2. **Accessibility statement** — add a dedicated ADA/accessibility page
3. **Accessibility widget** — consider adding a user-facing accessibility tool
4. **DMCA notice** — add if needed

### Monitoring to Maintain
1. **Monsido** — continue accessibility monitoring or replace with equivalent

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-07/)
- `01-privacy-policy.png` — Privacy Policy page
- `02-policies-disclosures.png` — Policies & Disclosures page
- `03-terms.png` — Terms page

### Raw Data (docs/marketing-site-research/raw/phase-07/)
- `01-privacy-policy.html` — Privacy Policy full HTML
- `02-cookie-consent.json` — Cookie consent banner details
- `03-policies-disclosures.html` — Policies & Disclosures full HTML
- `04-terms.html` — Terms page full HTML
