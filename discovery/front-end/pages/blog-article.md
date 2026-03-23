# Blog & Articles

Functional audit of the blog index (`/blog/`) and articles section (`/articles/`) on visitsaltlake.com.

---

## What Users See

**Blog index** (`/blog/`):
- Branded header: "the salt lake scene" / "Be in-the-know on all things salt lake"
- 13 category filter tabs: Arts & Culture, Events & Festivals, Family Fun, Genealogy & Family History, History, Holidays, Meetings & Conventions, Neighborhoods, Outdoor Recreation & Sports, Restaurants & Bars, Salt of the Earth, Shopping, Things to Do
- Featured Stories section highlighted at the top
- Individual blog posts displayed as cards showing: category tag, title, image, author attribution ("by Visit Salt Lake"), and excerpt text
- "Read All" links for each category section

**Individual blog posts** (`/blog/stories/{slug}/`):
- Full article content with images
- Category tag
- Author attribution

**Articles section** (`/articles/`):
- Separate content area from the blog
- Individual articles at `/articles/post/{slug}/`
- Similar card-based presentation

**Volume**: ~305 blog posts + ~155 articles = ~460 total editorial content pieces across both sections.

## What Users Can Do

- Browse the blog index with all posts displayed
- Filter blog posts by any of the 13 category tabs
- Click "Read All" to see all posts within a category
- Read individual blog posts and articles
- Navigate between blog and articles sections (though the relationship between them is unclear)

## Data Sources

- **Simpleview CMS**: Both blog posts and articles are managed as CMS content types
- Blog posts and articles appear to be separate content types within Simpleview, each with their own URL namespace (`/blog/stories/` vs `/articles/post/`)
- Categories are likely a taxonomy within the CMS, applied as tags to blog posts
- Author attribution appears static ("by Visit Salt Lake") rather than tied to individual staff accounts

## Third-Party Services

- **Simpleview CMS**: Content authoring and storage
- **Image CDN**: Blog post images served through Simpleview's asset pipeline
- No visible third-party commenting system (Disqus, etc.)
- No visible social sharing widgets embedded in posts

## Edge Cases

- Blog and articles exist as two separate content pools with different URL structures — users may not understand the distinction
- Category filters only apply to blog posts, not articles — articles appear to have no public filtering mechanism
- Author is always "by Visit Salt Lake" — no individual attribution, which may limit SEO author signals
- If a category has no posts, unclear whether the filter tab still appears or shows an empty state
- Old content may have broken inline links to venues or events that no longer exist
- No visible date on blog cards in the index — users can't tell how recent content is without clicking in

## Admin Management

- Blog posts and articles are created and edited in the Simpleview CMS
- Categories are likely managed as a taxonomy — adding/removing categories would affect the filter tabs on the blog index
- Featured Stories appear to be manually curated (pinned or flagged in the CMS)
- No indication of scheduled publishing, draft workflow, or approval process from the front-end alone
- Image uploads for blog posts go through the CMS media library

## Questions for Client

1. Are blog posts and articles different CMS content types? If so, what's the intended distinction between them?
2. Are they targeted at different audiences (e.g., articles for SEO/evergreen, blog for timely/seasonal)?
3. Can the two be consolidated into a single editorial content type in the rebuild, or is there a business reason to keep them separate?
4. Who writes and publishes blog content — marketing team only, or do partners/members contribute?
5. Is there an editorial calendar or approval workflow in the current CMS?
6. Are the 13 blog categories fixed, or does the team add/remove them? Any plans to change the taxonomy?
7. How are Featured Stories selected — manual curation or automated (most recent, most viewed)?
8. Is there any analytics on which categories or posts drive the most traffic?
