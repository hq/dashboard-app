/**
 * Crawl visitsaltlake.com sitemap and group URLs by pattern.
 *
 * Usage: node discovery/scripts/crawl-sitemap.mjs
 *
 * Outputs:
 *   discovery/front-end/sitemap.json — all URLs with groupings
 *   Prints summary to stdout
 */

import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = resolve(__dirname, '../front-end/sitemap.json')

const SITEMAP_URL = 'https://www.visitsaltlake.com/sitemap.xml'

async function fetchText(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  return res.text()
}

/**
 * Parse a sitemap XML string and extract <loc> URLs.
 * Also detects sitemap index files (<sitemapindex>) and follows nested sitemaps.
 */
async function parseSitemap(url, visited = new Set()) {
  if (visited.has(url)) return []
  visited.add(url)

  console.log(`Fetching: ${url}`)
  const xml = await fetchText(url)

  const urls = []

  // Check if this is a sitemap index (contains <sitemap> elements with nested <loc>)
  const sitemapIndexPattern = /<sitemap>\s*<loc>([^<]+)<\/loc>/g
  const nestedSitemaps = []
  let match
  while ((match = sitemapIndexPattern.exec(xml)) !== null) {
    nestedSitemaps.push(match[1].trim())
  }

  if (nestedSitemaps.length > 0) {
    // This is a sitemap index — follow each nested sitemap
    console.log(`  Found sitemap index with ${nestedSitemaps.length} nested sitemaps`)
    for (const nestedUrl of nestedSitemaps) {
      const nested = await parseSitemap(nestedUrl, visited)
      urls.push(...nested)
    }
  } else {
    // This is a regular sitemap — extract URLs
    const urlPattern = /<url>\s*<loc>([^<]+)<\/loc>/g
    while ((match = urlPattern.exec(xml)) !== null) {
      urls.push(match[1].trim())
    }
    console.log(`  Found ${urls.length} URLs`)
  }

  return urls
}

/**
 * Group URLs by their path pattern.
 * e.g., /things-to-do/hiking-in-salt-lake → "things-to-do/*"
 */
function groupByPattern(urls) {
  const groups = {}

  for (const url of urls) {
    let path
    try {
      path = new URL(url).pathname
    } catch {
      continue
    }

    // Remove trailing slash for consistency
    path = path.replace(/\/$/, '') || '/'

    const segments = path.split('/').filter(Boolean)
    let pattern

    if (segments.length === 0) {
      pattern = '/'
    } else if (segments.length === 1) {
      pattern = `/${segments[0]}`
    } else {
      // Group by first segment + depth indicator
      pattern = `/${segments[0]}/*`
      if (segments.length > 2) {
        pattern = `/${segments[0]}/${segments[1]}/*`
      }
    }

    if (!groups[pattern]) {
      groups[pattern] = []
    }
    groups[pattern].push(url)
  }

  return groups
}

async function main() {
  console.log('Crawling visitsaltlake.com sitemap...\n')

  let urls
  try {
    urls = await parseSitemap(SITEMAP_URL)
  } catch (err) {
    console.error(`Error fetching sitemap: ${err.message}`)
    console.error('\nTip: The sitemap URL might differ. Try checking:')
    console.error('  - https://www.visitsaltlake.com/sitemap.xml')
    console.error('  - https://www.visitsaltlake.com/sitemap_index.xml')
    console.error('  - Check robots.txt for sitemap location')
    process.exit(1)
  }

  // Deduplicate
  const uniqueUrls = [...new Set(urls)]
  console.log(`\nTotal unique URLs: ${uniqueUrls.length}`)

  // Group by pattern
  const groups = groupByPattern(uniqueUrls)

  // Build output
  const output = {
    crawledAt: new Date().toISOString(),
    source: SITEMAP_URL,
    totalUrls: uniqueUrls.length,
    groups: Object.entries(groups)
      .sort((a, b) => b[1].length - a[1].length)
      .map(([pattern, urls]) => ({
        pattern,
        count: urls.length,
        sampleUrls: urls.slice(0, 5),
        allUrls: urls,
      })),
  }

  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2))
  console.log(`\nOutput written to: ${OUTPUT_PATH}`)

  // Print summary
  console.log('\n--- Page Type Summary ---\n')
  for (const group of output.groups) {
    console.log(`  ${group.pattern.padEnd(40)} ${group.count} URLs`)
  }
  console.log(`\n  ${'TOTAL'.padEnd(40)} ${uniqueUrls.length} URLs`)
}

main()
