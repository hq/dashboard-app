# Content Taxonomy & Categorization Mapping (Frontend)

**Date:** 2026-03-24
**Task:** #19

---

## Overview

The site organizes content through **5 major content types** and **multiple taxonomy dimensions** including activity categories, geographic areas, cuisine types, accommodation types, and event categories. This document maps the frontend-visible taxonomy structure; the backend CMS taxonomy is documented in Task 25.

---

## Content Types

| Content Type | Source | Volume | URL Pattern |
|-------------|--------|--------|-------------|
| Listings | CRM | 4,629 | /listing/{slug}/{id}/ |
| Events | CRM | 1,898 | /event/{category}/{slug}/{id}/ |
| Blog Posts | CMS | 310 | /blog/stories/post/{slug}/ |
| PR Articles | CMS | 156 | /articles/post/{slug}/ |
| CMS Pages | CMS | ~1,092 | Various hierarchical paths |

---

## Taxonomy: Things To Do

### Top-Level Categories (11)
| Category | URL | Sub-pages | Notes |
|----------|-----|-----------|-------|
| Skiing & Snowboarding | /things-to-do/skiing-snowboarding/ | 29 | Largest subcategory |
| Outdoor Recreation | /things-to-do/outdoor-recreation/ | 22 | Hiking, biking, parks, etc. |
| Attractions | /things-to-do/attractions/ | 14 | |
| Tours & Experiences | /things-to-do/tours-experiences/ | 12 | Includes themed trails |
| Shopping | /things-to-do/shopping/ | 9 | |
| Nightlife & Entertainment | /things-to-do/nightlife-entertainment/ | 7 | |
| Arts & Culture | /things-to-do/arts-culture/ | 7 | |
| Wellness | /things-to-do/wellness/ | 5 | |
| Sports | /things-to-do/sports/ | 4 | |
| Salt Lake's Winter Games | /things-to-do/salt-lakes-winter-games/ | 1 | Olympic heritage |
| Holiday Lights & Sights | /things-to-do/salt-lakes-holiday-lights-sights/ | 1 | Seasonal |

### Skiing & Snowboarding Sub-taxonomy
| Sub-category | Pages |
|-------------|-------|
| Ski Resorts | 17 (individual resort pages) |
| Super Pass | 5 |
| Transportation | 2 |
| Webcams | 1 |
| Snow Reports & Conditions | 1 |
| Ski Rentals | 1 |
| Resort Maps | 1 |

### Outdoor Recreation Sub-taxonomy
| Sub-category | Pages |
|-------------|-------|
| Winter Activities | 6 |
| State & National Parks | 3 |
| Biking | 2 |
| Scenic Drives | 1 |
| Recreation Centers | 1 |
| Rafting & Kayaking | 1 |
| Mountains | 1 |
| Hiking | 1 |
| Golf | 1 |
| Fishing & Wildlife | 1 |
| City & Local Parks | 1 |
| Birdwatching Areas | 1 |
| Adventure Sports | 1 |

---

## Taxonomy: Events (15 categories)

| Category | URL Prefix | Event Count | Notes |
|----------|-----------|-------------|-------|
| Music | /event/music/ | 548 | Largest category |
| Art | /event/art/ | 275 | |
| Festivals & Special Events | /event/festivals-and-special-events/ | 230 | |
| Theatre | /event/theatre/ | 159 | |
| Sports & Outdoors | /event/sports-and-outdoors/ | 118 | |
| Dance | /event/dance/ | 73 | |
| Classes & Workshops | /event/classes-and-workshops/ | 63 | |
| Outdoor Recreation | /event/outdoor-recreation/ | 60 | |
| Humanities | /event/humanities/ | 43 | |
| Film | /event/film/ | 34 | |
| Museums | /event/museums/ | 18 | |
| Mountain Resorts | /event/mountain-resorts/ | 13 | |
| Fundraisers | /event/fundraisers/ | 13 | |
| Culinary | /event/culinary/ | 8 | |
| Rocky Mountain Gun Show | /event/rocky-mountain-gun-show/ | 4 | Recurring event |

**Note:** Some events appear without category prefix (convention events with `conventions_` IDs).

---

## Taxonomy: Restaurants

### Category Pages
| Category | URL |
|----------|-----|
| All Restaurants | /restaurants/ |
| Cuisine Types (hub) | /restaurants/cuisine-types/ |
| Romantic | /restaurants/romantic/ |
| Outdoor Seating | /restaurants/outdoor-seating/ |
| Kid Friendly | /restaurants/kid-friendly/ |
| Ice Cream & Desserts | /restaurants/ice-cream-desserts/ |
| Group Dining | /restaurants/group-dining/ |
| Food Trucks | /restaurants/food-trucks/ |
| Fine Dining | /restaurants/fine-dining/ |
| Distilleries | /restaurants/distilleries/ |
| Coffee Shops | /restaurants/coffee-shops/ |
| Breweries & Microbreweries | /restaurants/breweries-microbreweries/ |

### Cuisine Types Sub-taxonomy (20 types)
| Cuisine | URL |
|---------|-----|
| American & Burgers | /restaurants/cuisine-types/american-burgers/ |
| BBQ | /restaurants/cuisine-types/bbq/ |
| Breakfast & Brunch | /restaurants/cuisine-types/breakfast-brunch/ |
| Buffet | /restaurants/cuisine-types/buffet/ |
| Chinese | /restaurants/cuisine-types/chinese/ |
| German | /restaurants/cuisine-types/german/ |
| Greek | /restaurants/cuisine-types/greek/ |
| Indian | /restaurants/cuisine-types/indian/ |
| Italian | /restaurants/cuisine-types/italian/ |
| Japanese | /restaurants/cuisine-types/japanese/ |
| Korean | /restaurants/cuisine-types/korean/ |
| Mediterranean | /restaurants/cuisine-types/mediterranean/ |
| Mexican | /restaurants/cuisine-types/mexican/ |
| Pho & Vietnamese | /restaurants/cuisine-types/pho-vietnamese/ |
| Pizza | /restaurants/cuisine-types/pizza/ |
| Seafood | /restaurants/cuisine-types/seafood/ |
| Steakhouses | /restaurants/cuisine-types/steakhouses/ |
| Sushi | /restaurants/cuisine-types/sushi/ |
| Thai | /restaurants/cuisine-types/thai/ |
| Vegan & Vegetarian | /restaurants/cuisine-types/vegan-vegetarian/ |

---

## Taxonomy: Places To Stay (9 types)

| Type | URL |
|------|-----|
| Hotels | /places-to-stay/hotels/ (6 sub-pages) |
| Resorts | /places-to-stay/resorts/ |
| Bed & Breakfasts/Inns | /places-to-stay/bed-breakfasts-inns/ |
| Cabins & Vacation Rentals | /places-to-stay/cabins-vacation-rentals/ |
| Campgrounds & RV Parks | /places-to-stay/campgrounds-rv-parks/ |
| Extended Stay | /places-to-stay/extended-stay/ |
| Hostels & Universities | /places-to-stay/hostels-universities/ |
| Pet Friendly | /places-to-stay/pet-friendly/ |
| Special Package Deals | /places-to-stay/special-package-deals/ |

---

## Taxonomy: Geographic Areas / Neighborhoods

### Neighborhoods Hub (/neighborhoods/)
7 geographic areas:
| Area | Neighborhood URL | Area Section | Area Pages |
|------|-----------------|--------------|------------|
| Salt Lake City | /neighborhoods/salt-lake-city/ | /salt-lake-city/ | 41 |
| Midvalley | /neighborhoods/midvalley/ | /midvalley/ | 30 |
| South Valley | /neighborhoods/south-valley/ | /south-valley/ | 12 |
| Mountain Resorts | /neighborhoods/mountain-resorts/ | /mountain-resorts/ | 11 |
| West Valley | /neighborhoods/west-valley/ | /west-valley/ | 5 |
| Southwest Valley | /neighborhoods/southwest-valley/ | /southwest-valley/ | 5 |
| Great Salt Lake | /neighborhoods/great-salt-lake/ | — | — |

**Note:** Each area has both a neighborhoods page AND a dedicated area section with its own sub-pages.

---

## Taxonomy: Blog

### Blog Categories (from Task 25)
23 categories: art, Arts & Culture, Attractions, Diversity, Downtown, Events & Festivals, Family Fun, Genealogy & Family History, General Interest, Holidays, Meetings & Conventions, Neighborhoods, olympics, out, Outdoor Recreation & Sports, Places to Stay, Restaurants & Bars, Salt Lake History, Salt of the Earth, Shopping, Ski, Sports, Things to Do

### Blog Tags
280 tags (see Task 25 for full list)

### Blog URL Structure
```
/blog/                          — Blog hub
/blog/stories/                  — Stories index
/blog/stories/post/{slug}/      — Individual post
/blog/archives/                 — Date archives
/blog-contributors/             — Contributors page
/blog-past-contributors/        — Past contributors
```

---

## Taxonomy: Articles/PR

### Article Categories (from Task 25)
7 categories: Mountain America Expo Center News, Mountain America Expo Official Press Release, Press Releases, Salt Lake News, Salt Palace News, Salt Palace Official Press Release, Sports News

### Article Tags
14 tags: Bars, Basketball, Days of '47, eat drink slc, Events, hiking, Hockey, Nightlife, Oktoberfest, Olympics, Salt Palace, Ski City, Travel, Venues

---

## Cross-Taxonomy Relationships

| Taxonomy System | Scope | Count | Notes |
|----------------|-------|-------|-------|
| CMS Tags | System-wide | 1,432 | Flat list, applied to all content types |
| Event Categories | Events only | 15 | URL-based categories |
| Things To Do Categories | CMS pages | 11 top-level + ~30 sub | Hierarchical |
| Restaurant Types | CMS pages | 11 + 20 cuisine | Two dimensions (type + cuisine) |
| Accommodation Types | CMS pages | 9 | Flat |
| Geographic Areas | CMS pages | 7 | With dedicated area sections |
| Blog Categories | Blog posts | 23 | Flat |
| Blog Tags | Blog posts | 280 | Flat |
| Article Categories | PR articles | 7 | Press-specific |
| Article Tags | PR articles | 14 | Press-specific |
| Persona Tags | Dynamic Content | 7 | Personalization targeting |
| Image Categories | Media library | 63 | Asset organization |
| Video Categories | Media library | 7 | Asset organization |

---

## Rebuild Implications

### Taxonomy Systems to Replicate
1. **Event categories** (15) — URL-based, CRM-powered
2. **Things To Do hierarchy** — 3 levels deep in places
3. **Restaurant taxonomy** — dual dimension (type + cuisine = 31 categories)
4. **Accommodation types** (9)
5. **Geographic areas** (7 neighborhoods + area sections)
6. **Blog categories** (23) + tags (280)
7. **CMS Tags** (1,432) — system-wide tagging

### Complexity
- **Multi-dimensional taxonomy** — listings can appear in multiple categories
- **Geographic + activity** — content organized by both what and where
- **CRM vs CMS categories** — events/listings use CRM categories; pages/blog use CMS categories
- **Personalization overlay** — Persona Tags add a targeting dimension on top of content taxonomy

---

## Artifacts

### Raw Data
- URL analysis from `raw/phase-01/03-all-urls-sorted.txt`
- Backend taxonomy from Task 25 documentation
- Frontend HTML captures from Task 15
