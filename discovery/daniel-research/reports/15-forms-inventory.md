# Forms & Lead Capture Inventory

**Date:** 2026-03-24
**Task:** #17

---

## Overview

All forms on the site are powered by the **Simpleview CRM Form Builder** (`crm_formbuilder` widget). Forms submit data to the Simpleview CRM for lead management and contact database. All forms use **Google reCAPTCHA** for spam protection and include a honeypot field (`youcompleteme_sv`).

---

## Form Inventory

### Global Forms (Present on All Pages)

#### 1. Header Search Form
- **Location:** Header search box on every page
- **Fields:** `q` (search query)
- **Action:** `/search/`
- **Type:** GET

#### 2. Newsletter/Subscribe Footer CTA
- **Location:** Footer area on all pages
- **Purpose:** Email newsletter signup
- **Note:** Links to dedicated subscribe page, not an inline form

### Page-Specific Forms

#### 3. Contact Form (/contact/)
**Form ID:** `frm_18`
**CRM Form Builder:** Yes
**reCAPTCHA:** Yes

| Field Name | Purpose | Notes |
|-----------|---------|-------|
| contact_fname | First Name | Required |
| contact_lname | Last Name | Required |
| contact_email | Email | Required |
| contact_phone | Phone | |
| contact_company | Company/Organization | |
| contact_addr1 | Street Address | |
| contact_addr2 | Address Line 2 | |
| contact_city | City | |
| contact_state | State | |
| contact_zip | Zip/Postal Code | |
| contact_country | Country | |
| inquiry_comments | Comments/Message | Text area |
| groupid | CRM Group ID | Hidden |
| formid | Form Identifier | Hidden |
| code / code_key | CRM tracking | Hidden |
| variation | A/B test variant | Hidden |
| youcompleteme_sv | Honeypot spam field | Hidden |
| g-recaptcha-response | reCAPTCHA | Hidden |

**This is the most comprehensive form** — full contact + address + comments.

#### 4. Subscribe/Newsletter Form (/plan-your-visit/subscribe/)
**Form ID:** `frm_46`
**CRM Form Builder:** Yes
**reCAPTCHA:** Yes

| Field Name | Purpose | Notes |
|-----------|---------|-------|
| contact_fname | First Name | |
| contact_lname | Last Name | |
| contact_email | Email | Required |
| contact_zip | Zip/Postal Code | |
| contact_country | Country | |
| contact_sendemail | Email opt-in | |
| udf_3845 | Custom field (user defined) | |
| groupid | CRM Group ID | Hidden |
| formid | Form Identifier | Hidden |

**Simpler form** — name, email, zip, country, opt-in.

#### 5. Meeting Planner Guide Request (/meetings/contact/meeting-planner-guide/)
**Form ID:** `frm_54`
**CRM Form Builder:** Yes
**reCAPTCHA:** Yes

| Field Name | Purpose | Notes |
|-----------|---------|-------|
| contact_fname | First Name | |
| contact_lname | Last Name | |
| contact_email | Email | |
| contact_zip | Zip/Postal Code | |
| contact_country | Country | |
| contact_sendemail | Email opt-in | |
| udf_3845 | Custom field (user defined) | |
| groupid | CRM Group ID | Hidden |
| formid | Form Identifier | Hidden |

**Same structure as Subscribe** — likely triggers a physical guide mail-out.

#### 6. Meeting Newsletter Signup (/meetings/contact/meeting-newsletter-sign-up/)
**Form ID:** `frm_54` (same as planner guide)
**CRM Form Builder:** Yes
**reCAPTCHA:** Yes

**Identical fields to Meeting Planner Guide** — same form ID, likely different CRM groupid for segmentation.

#### 7. Influencer Application (/influencer/)
**CRM Form Builder:** Yes (documented in Task 37)
**Purpose:** Influencer outreach/application
**Note:** Found on the Influencer microsite page

#### 8. RFP Submission (/meetings/submit-rfp/)
**Two methods documented in Task 36:**
- **Online form** — "SUBMIT RFP ONLINE" button (likely links to CRM form or external tool)
- **Email submission** — "SUBMIT RFP VIA EMAIL" button

#### 9. Booking Widget (/places-to-stay/)
**Type:** `common_booking` widget
**Purpose:** Accommodation booking/search
**Note:** Not a traditional form — booking widget integration (likely Simpleview/Connect Pass)

---

## CRM Form Architecture

### Standard CRM Form Structure
All CRM forms share this architecture:

```
<form> (CRM formbuilder)
  ├── Visible fields (contact_fname, contact_lname, contact_email, etc.)
  ├── Hidden fields:
  │   ├── formid — identifies which CRM form
  │   ├── groupid — CRM contact group assignment
  │   ├── code / code_key — CRM tracking codes
  │   ├── variation — A/B testing variant
  │   ├── isSubmitted — submission flag
  │   └── youcompleteme_sv — honeypot spam protection
  ├── reCAPTCHA (g-recaptcha-response)
  └── Submit button (savefrm)
```

### Form IDs Discovered
| Form ID | Page | Purpose |
|---------|------|---------|
| frm_18 | /contact/ | General contact form |
| frm_46 | /plan-your-visit/subscribe/ | Newsletter subscription |
| frm_54 | /meetings/contact/ pages | Meeting planner forms |

### CRM Integration
- Forms submit to Simpleview CRM contact database
- `groupid` field segments contacts into CRM groups
- `contact_sendemail` controls email opt-in
- `udf_3845` is a user-defined field (custom CRM field)
- `code` / `code_key` track marketing attribution
- `variation` supports A/B testing of form variants

---

## Form Field Comparison

| Field | Contact | Subscribe | Meeting Guide | Meeting Newsletter |
|-------|---------|-----------|--------------|-------------------|
| First Name | Yes | Yes | Yes | Yes |
| Last Name | Yes | Yes | Yes | Yes |
| Email | Yes | Yes | Yes | Yes |
| Phone | Yes | — | — | — |
| Company | Yes | — | — | — |
| Address | Yes (full) | — | — | — |
| City | Yes | — | — | — |
| State | Yes | — | — | — |
| Zip | Yes | Yes | Yes | Yes |
| Country | Yes | Yes | Yes | Yes |
| Comments | Yes | — | — | — |
| Email opt-in | — | Yes | Yes | Yes |
| Custom field | — | Yes | Yes | Yes |
| reCAPTCHA | Yes | Yes | Yes | Yes |

---

## Additional Form-Like Features

### Search (Global)
- Header search box on all pages
- Blog search within blog section
- Listing filters on browse pages

### Booking Widget
- `common_booking` on Places To Stay page
- Connect Pass persistent cart (global)

### Compare Tool
- `listings_layout_compare` — add/remove listings for comparison
- Not a traditional form but interactive feature

### Trip Builder
- `tripbuilder` widget — save items to trip plan
- `tripbuilder_counter` — shows saved item count

---

## Rebuild Implications

### Form Replacement Strategy
1. **CRM form builder** needs replacement — all forms currently powered by Simpleview CRM
2. Options: native CMS forms, third-party form service (Typeform, HubSpot), custom forms with API integration
3. **reCAPTCHA** needs re-implementation on all forms
4. **CRM contact database** integration needed for form submissions

### Forms to Rebuild
| Priority | Form | Complexity |
|----------|------|-----------|
| High | Contact form | Medium — full address + comments |
| High | Newsletter subscribe | Low — email + basic info |
| High | Meeting planner guide request | Low — same as subscribe |
| High | Meeting newsletter | Low — same as subscribe |
| High | RFP submission | Medium — may need file upload |
| Medium | Influencer application | Medium — CRM form |
| Medium | Booking widget | High — third-party integration |
| Low | Trip builder | Medium — interactive feature |

### Data Collection Needs
- Contact information flows to CRM for lead management
- `groupid` segmentation must be maintained (different groups for different form purposes)
- Email opt-in tracking required
- Marketing attribution codes need to carry over

---

## Artifacts

### Raw Data (docs/marketing-site-research/raw/phase-17/)
- `01-subscribe.html` — Subscribe/newsletter page HTML
- `02-meeting-planner-guide.html` — Meeting planner guide request page HTML
- `03-meeting-newsletter.html` — Meeting newsletter signup page HTML
- Contact form HTML captured in `raw/phase-15/contact.html`
- Influencer form HTML captured in `raw/phase-37/04-microsite-influencer.html`
