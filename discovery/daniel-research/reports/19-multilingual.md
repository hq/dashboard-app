# Multilingual & i18n Assessment

**Date:** 2026-03-24
**Task:** #8

---

## Summary

Visit Salt Lake uses **GTranslate** for client-side machine translation into 8 languages. This is NOT a true CMS-level i18n system — there are no separate translated pages, no localized URLs, and no human-curated translations of content. The CMS does have translation infrastructure (Static Namespaces for UI strings, Locale field on pages), but the primary visitor-facing translation is automated via GTranslate.

---

## Translation System Architecture

### Frontend: GTranslate Widget
| Property | Details |
|----------|---------|
| Service | GTranslate (cdn.gtranslate.net) |
| Widget type | Floating globe switcher (`float.js`) |
| Position | Bottom-left |
| Trigger | Click globe icon to open language dropdown |
| Translation method | Google Translate API (client-side, automated) |
| URL behavior | No URL change — same URLs for all languages |
| Persistence | Cookie-based (`googtrans` cookie) |
| Flag display | Country flags with native language names |
| Custom flags | US flag for English, Brazil flag for Portuguese |

### Supported Languages (8)
| # | Code | Language | Native Name | Flag |
|---|------|----------|-------------|------|
| 1 | en | English | English | US |
| 2 | es | Spanish | Español | Spain |
| 3 | fr | French | Français | France |
| 4 | de | German | Deutsch | Germany |
| 5 | nl | Dutch | Nederlands | Netherlands |
| 6 | ko | Korean | 한국어 | South Korea |
| 7 | pt | Portuguese | Português | Brazil |
| 8 | zh-CN | Chinese (Simplified) | 简体中文 | China |

### CMS Backend: Static Namespaces
10 translation namespaces for UI strings (documented in Task 30):

| Namespace | Slug | Purpose |
|-----------|------|---------|
| Common | translations.static.common | Shared UI strings (buttons, labels) |
| Events | translations.static.events | Event-related strings |
| Layout/Detail | translations.static.leo | Layout engine strings |
| Listings | translations.static.listings | Listing-related strings |
| Media Gallery | translations.static.mediagallery | Gallery strings |
| Offers | translations.static.offers | Offers/deals strings |
| Public Relations | translations.static.blog | Blog/PR strings |
| Search | translations.static.search | Search strings |
| Trails | translations.static.trails | Trail-specific strings |
| Trip Builder | translations.static.tripbuilder | Trip builder strings |

These namespaces contain JSON-formatted translatable strings with language tabs for context. They handle the **UI chrome** (buttons, labels, navigation text) while GTranslate handles the **content** translation.

### CMS Page-Level i18n
- **Locale field** on every nav item — allows setting page language
- Currently all pages use the default locale (English)
- No evidence of pages set to non-English locales

---

## What is NOT Translated

Since GTranslate is automated machine translation:
- **No human-curated translations** of any content
- **No localized URLs** (e.g., no /es/hoteles/ or /fr/restaurants/)
- **No hreflang tags** for search engine language targeting
- **No language-specific content** — same content auto-translated
- **No language-specific images** or media
- **Image alt text** not translated (GTranslate may translate visible text only)
- **PDF documents** not translated
- **Video content** not translated (captions/subtitles)

---

## HTML Language Attributes

| Attribute | Value | Notes |
|-----------|-------|-------|
| `<html lang>` | en-us | Correct for English |
| `<meta og:locale>` | en_us | Open Graph locale |
| `<meta content-language>` | Not set | Missing |
| `<link hreflang>` | Not present | No multilingual alternates |

---

## GTranslate Configuration (from Page Builder HTML)

```javascript
{
  widget_look: "float.js",
  translate_from: "en",
  translate_to: ["en", "es", "fr", "de", "nl", "ko", "pt", "zh-CN"],
  select_language_label: "Select Language",
  native_language_names: "true",
  detect_browser_language: "false",
  add_new_live: "false",
  globe_size: 20,
  flag_size: 16,
  alt_flags: ["en:usa", "pt:brazil"],
  position: "left, bottom",
  open_direction: "bottom",
  float_switcher_open_direction: "bottom",
  switcher_open_direction: "top"
}
```

Notable: `detect_browser_language: "false"` — the site does NOT auto-detect visitor language. Visitors must manually select their language.

---

## Rebuild Implications

### 1-to-1 Approach (Minimum)
- Re-implement GTranslate or equivalent client-side translation widget
- Maintain same 8 languages
- Carry over Static Namespace UI strings
- No URL changes needed (same approach as current)

### Improved Approach (Optional)
- Implement proper i18n with localized URLs and hreflang tags
- Add human-curated translations for key content (at minimum: navigation, CTAs, key landing pages)
- Add hreflang tags for search engine language targeting
- Consider translating key documents (visitor guide, maps)
- Add language detection based on browser language or IP geolocation

### Key Decision Point
The current machine translation approach is **fast to implement** but **low quality**. A proper i18n system with human translations is significantly more effort but provides a better experience for international visitors. For a tourism destination, international visitor experience matters for conversion.

### Translation Volume (if human translation chosen)
- ~1,092 CMS pages would need translation
- 10 Static Namespaces with UI strings
- Blog posts (310) and Articles (156) — likely too many for human translation
- Priority: Navigation, key landing pages, booking flows, visitor guide

---

## Artifacts

### Screenshots (docs/marketing-site-research/screenshots/phase-08/)
- `01-language-switcher.png` — Homepage with GTranslate floating globe widget

### Raw Data (docs/marketing-site-research/raw/phase-08/)
- `01-i18n-check.json` — Frontend i18n implementation details
