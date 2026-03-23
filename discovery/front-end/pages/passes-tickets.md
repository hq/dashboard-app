# B15. Passes & Tickets — Functional Audit

Audited 2026-03-19 via live site inspection.

---

## What Users See

### Discount Passport (appears on most pages)
- Prominent promotion block titled "Get the Salt Lake Discount Passport"
- Tagline: "Sign-up now and save!"
- Benefits listed: 10-20% off food, 10-20% off merchandise, 20-25% off tickets
- Features: Mobile exclusive, instantly delivered via text and email, no apps, free
- "Get FREE Passport" CTA button
- VWO A/B testing active on this block ("AB Variation: OriginalVariant")

### Attractions Pass
- Homepage section: "Save over 50% on Attractions!" with Hogle Zoo image
- "Find great deals to top attractions and venues in Salt Lake"

### Salt Lake Ski Super Pass
- Featured in homepage hero carousel: "Salt Lake Ski Super Pass" slide with "Discover More" CTA
- This is the pass NOT on Bandwango (per client)

### Brewery Pass
- Referenced on listing detail pages: "Included in the Salt Lake Brewery Pass"

### EventsForce Ticket Links
- NOT visible on the event detail page we inspected
- May appear on specific events with ticket sales

---

## What Users Can Do

- Click "Get FREE Passport" (destination unclear — likely Bandwango redirect or embedded widget)
- Browse attractions pass deals
- Purchase Ski Super Pass (location/mechanism unknown — not on Bandwango)
- See if a listing is part of a pass (e.g., Brewery Pass mention on listing pages)

---

## Data Sources

- Discount Passport content appears CMS-managed with VWO A/B test variations
- Pass inclusions (which listings are in which pass) likely managed in CRM or Bandwango
- Ski Super Pass managed outside Bandwango (per client)

---

## Third-Party Services

- **Bandwango**: Ticketing for all passes except Super Pass
- **EventsForce**: Event ticketing (not found on pages inspected)
- **VWO**: A/B testing the Discount Passport presentation

---

## Edge Cases

- Multiple pass types (Discount Passport, Attractions Pass, Brewery Pass, Ski Super Pass) — unclear if they're all the same system or different
- Super Pass is specifically NOT on Bandwango — different purchase mechanism
- "Dynamic Variation" text visible in page source suggests VWO serves different Passport content to different users

---

## Admin Management

- Pass content and deals need CMS management
- Which listings are included in which passes
- A/B test variations in VWO
- Pricing and availability per pass

---

## Questions for Client

- [ ] Where does "Get FREE Passport" link to? Is it a Bandwango embed, redirect, or something else?
- [ ] Are Discount Passport, Attractions Pass, and Brewery Pass all Bandwango-powered? Or are they different systems?
- [ ] Where is the Ski Super Pass sold? What platform handles the purchase?
- [ ] On which events do EventsForce ticket links appear? We didn't find any on the events we checked.
- [ ] How are pass inclusions managed? When a listing says "Included in the Salt Lake Brewery Pass," where is that relationship stored?
- [ ] What revenue do passes generate? This affects prioritization for the rebuild.
