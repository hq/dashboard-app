# CRM Forms — Functional Audit

Audited 2026-03-19 via live site form inspection.

---

## Newsletter Subscribe Form (`/plan-your-visit/subscribe/`)

**Form ID:** `the_crmform`
**Action:** POST to self (same page)
**Hidden fields:** formid=46, groupid=5, isSubmitted=1

**Visible fields:**
| Field | Type | Name | Required |
|-------|------|------|----------|
| First Name | text | contact_fname | TBD |
| Last Name | text | contact_lname | TBD |
| Email | text | contact_email | TBD |
| Country | select | contact_country | TBD |
| Zip Code | text | contact_zip | TBD |
| Send Email opt-in | checkbox | contact_sendemail | No |
| Custom field | checkbox | udf_3845 | No |

**Anti-spam:** reCAPTCHA (`g-recaptcha-response`), honeypot field (`youcompleteme_sv`), code/code_key validation

**Technical notes:**
- This is a **Simpleview CRM formbuilder** form, NOT Act On directly
- Country dropdown includes ~200+ countries (US, Canada, Mexico at top)
- State field appears conditionally for US/Canada (`statectry` hidden field)
- Zip field appears conditionally for US/Canada/Mexico (`zipctry` hidden field)
- `udf_3845` is a "user defined field" — purpose unknown (could be a specific newsletter list opt-in)

---

## RFP Form (`/rfp/`)

**Form ID:** `rfpForm`
**Action:** POST to `https://saltlake.simpleviewcrm.com/webapi/rfp/rfp_submitform.cfm`
**Type:** `meetingrfpform`

**Required fields:** fname, lname, company, addr1, city, state, zip, country, email, phone, leadname, organization, responsedate, decisiondate, roomattend, arrival1, departure1

**All visible fields (80+):**

### Contact Information
- First Name, Last Name, Company, Title
- Address 1, Address 2, City, State (dropdown), Zip, Country (dropdown)
- Email, Website URL, Phone, Phone Ext, Fax
- Send Email checkbox

### Meeting Details
- Lead Name (meeting/event name)
- File upload (multifile control)
- Organization name
- Response Date, Decision Date
- Room/Attendees count

### Decision Stage
- Decision (3 radio options)
- Other Decision (text)
- Inspection (2 radio options)
- Inspection Date

### Additional Info
- Additional information (textarea)

### Dates (3 alternate sets)
- Arrival 1 / Departure 1 (primary)
- Arrival 2 / Departure 2 (alternate)
- Arrival 3 / Departure 3 (alternate)

### Day Pattern
- Pattern (3 radio options)
- Start Day / End Day (dropdowns)
- Number of Days (dropdown)
- Date Comments (textarea)

### Room Block (14-day grid)
- Room block start/end dates
- 14 date/room-count pairs (date1-14, room1-14)
- Suite Needs (textarea)

### History (2 previous events)
- Year 1, Property 1, City 1
- Year 2, Property 2, City 2

---

## Sports RFP Form

- Located at `/sports/contact-us/rfp/`
- Not inspected — likely similar CRM form with sports-specific fields

---

## Sports Newsletter

- Located at `/sports/contact-us/sports-newsletter-sign-up/`
- Separate from main newsletter — sports-specific subscriber list

---

## Meetings Newsletter

- Located at `/meetings/contact/meeting-newsletter-sign-up/`
- Separate from main newsletter — meetings-specific subscriber list

---

## Visitor Guide Request

- **No form exists!** Page at `/plan-your-visit/free-visitors-guide/` states:
  "Visit Salt Lake does not currently produce a printed Visitors Guide."
- Directs visitors to: website, Visitor Information Center at Salt Palace, newsletter, Utah state travel guide
- Links to Utah Travel Guide for People with Disabilities (PDF download)

---

## Questions for Client

- [ ] What is `udf_3845` in the subscribe form? Which newsletter list does it represent?
- [ ] How does the CRM formbuilder connect to Act On? Does form submission trigger an Act On workflow?
- [ ] Are there other CRM forms on the site we haven't found? (RSVP forms, event submission, contact forms)
- [ ] Does the RFP submission trigger email notifications? To whom?
- [ ] Is the sports RFP form identical to the meetings RFP or different fields?
- [ ] How many separate newsletter lists exist? (Main visitor, Sports, Meetings — any others?)
