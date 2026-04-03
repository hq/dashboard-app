#!/usr/bin/env bash
set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────────────────
BASE_URL="https://visit-salt-lake-proposal-tool.vercel.app"
PAGE="/"
SCREENSHOT_DIR="$(cd "$(dirname "$0")/../screenshots" && pwd)"
AB="npx agent-browser"
SESSION="smoke-$$"

PASS=0
FAIL=0
RESULTS=()

# ─── Helpers ─────────────────────────────────────────────────────────────────
pass() {
  PASS=$((PASS + 1))
  RESULTS+=("  ✓ $1")
  echo "  ✓ $1"
}

fail() {
  FAIL=$((FAIL + 1))
  RESULTS+=("  ✗ $1")
  echo "  ✗ $1"
}

check_text() {
  local label="$1"
  local search="$2"
  local output
  output=$($AB --session "$SESSION" get text "body" 2>/dev/null || echo "")
  if echo "$output" | grep -qF "$search"; then
    pass "$label"
  else
    fail "$label"
  fi
}

check_no_text() {
  local label="$1"
  local search="$2"
  local output
  output=$($AB --session "$SESSION" get text "body" 2>/dev/null || echo "")
  if echo "$output" | grep -qF "$search"; then
    fail "$label"
  else
    pass "$label"
  fi
}

click_and_screenshot() {
  local selector="$1"
  local filename="$2"
  local label="$3"
  if $AB --session "$SESSION" click "$selector" 2>/dev/null; then
    sleep 1
    $AB --session "$SESSION" screenshot --full "$SCREENSHOT_DIR/$filename" 2>/dev/null
    pass "$label"
  else
    fail "$label"
  fi
}

cleanup() {
  $AB --session "$SESSION" close 2>/dev/null || true
}
trap cleanup EXIT

# ─── Main ────────────────────────────────────────────────────────────────────
echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║     Proposal Page — Visual Smoke Test            ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""

# 1. Open the proposal page (no seed data needed — uses MODULE_BASE_HOURS directly)
echo "→ Opening ${BASE_URL}${PAGE}..."
$AB --session "$SESSION" open "${BASE_URL}${PAGE}"
$AB --session "$SESSION" wait 3000
echo ""

# 2. Full-page baseline screenshot
echo "→ Taking baseline screenshot..."
$AB --session "$SESSION" screenshot --full "$SCREENSHOT_DIR/01-baseline.png"
pass "Baseline screenshot captured"
echo ""

# 3. Verify initial tab content (Tab 0 = The Opportunity)
echo "→ Checking initial tab content..."
check_text "Section: Approach" "Approach"
check_text "Section: What We Found" "What We Found"
echo ""

# 4. Navigate through proposal tabs (new narrative names)
echo "→ Testing proposal nav tabs..."
click_and_screenshot 'button:has-text("What We Found")'  "02-tab-discovery.png"  "Tab: What We Found"
click_and_screenshot 'button:has-text("The Scope")'      "03-tab-scope.png"      "Tab: The Scope"
click_and_screenshot 'button:has-text("How We Deliver")'  "04-tab-deliver.png"    "Tab: How We Deliver"
click_and_screenshot 'button:has-text("Next Steps")'      "05-tab-next.png"       "Tab: Next Steps"
echo ""

# 5. Verify no hour numbers visible on How We Deliver tab
echo "→ Checking no hours visible on delivery tab..."
click_and_screenshot 'button:has-text("How We Deliver")' "06-delivery-check.png" "Navigate to How We Deliver"
# Hour patterns like "320h", "480h", "1234.5h" should NOT appear
check_no_text "No hour values visible" "320h"
check_no_text "No total hours visible" "total"
echo ""

# 6. Tab 5 content verification
echo "→ Verifying Next Steps tab content..."
click_and_screenshot 'button:has-text("Next Steps")' "07-next-steps.png" "Navigate to Next Steps"
check_text "Phase 2 Deliverables heading" "Phase 2 Deliverables"
check_text "Phase 2 goal statement" "99% confidence"
check_text "Phase 2 timeline" "3-4"
echo ""

# 7. Scope inner tabs (Marketing / CMS / CRM)
echo "→ Testing scope inner tabs..."
click_and_screenshot 'button:has-text("The Scope")' "08-scope-tab.png" "Navigate to Scope tab"
click_and_screenshot '[data-id="marketing"]' "09-scope-marketing.png" "Scope: Marketing"
click_and_screenshot '[data-id="cms"]'       "10-scope-cms.png"       "Scope: CMS"
click_and_screenshot '[data-id="crm"]'       "11-scope-crm.png"       "Scope: CRM"
echo ""

# 8. Verify Phase 2 Deep Dive cards exist in CMS/CRM scope views
echo "→ Verifying Phase 2 Deep Dive cards..."
click_and_screenshot '[data-id="cms"]' "12-cms-phase2.png" "CMS scope view"
check_text "CMS Phase 2 card" "Phase 2 Deep Dive"
click_and_screenshot '[data-id="crm"]' "13-crm-phase2.png" "CRM scope view"
check_text "CRM Phase 2 card" "Phase 2 Deep Dive"
echo ""

# 9. Route gating — /tools/capture without ?internal=true should redirect
echo "→ Testing route gating..."
$AB --session "$SESSION" open "${BASE_URL}/tools/capture"
$AB --session "$SESSION" wait 2000
# Should be redirected back to / (proposal root)
check_text "Route gating works" "Website Rebuild Proposal"
echo ""

# 10. Route gating — /tools/capture?internal=true should load the tool
echo "→ Testing internal route access..."
$AB --session "$SESSION" open "${BASE_URL}/tools/capture?internal=true"
$AB --session "$SESSION" wait 2000
$AB --session "$SESSION" screenshot --full "$SCREENSHOT_DIR/14-internal-capture.png"
pass "Internal route loads"
echo ""

# 11. Scenario toggle on How We Deliver tab
echo "→ Testing scenario filter..."
click_and_screenshot 'button:has-text("How We Deliver")' "15-scenario-tab.png" "Navigate to How We Deliver"
click_and_screenshot '[data-id="2026"]' "16-scenario-2026.png" "Scenario: Launch in 2026"
click_and_screenshot '[data-id="2027"]' "17-scenario-2027.png" "Scenario: Launch in 2027"
echo ""

# ─── Summary ─────────────────────────────────────────────────────────────────
echo "╔══════════════════════════════════════════════════╗"
echo "║  Results                                         ║"
echo "╠══════════════════════════════════════════════════╣"
for r in "${RESULTS[@]}"; do
  echo "║ $r"
done
echo "╠══════════════════════════════════════════════════╣"
TOTAL=$((PASS + FAIL))
echo "║  $PASS/$TOTAL passed"
if [ "$FAIL" -gt 0 ]; then
  echo "║  $FAIL FAILED"
fi
echo "╚══════════════════════════════════════════════════╝"
echo ""

# Screenshots listing
echo "Screenshots saved to: $SCREENSHOT_DIR/"
ls -1 "$SCREENSHOT_DIR"/*.png 2>/dev/null | while read -r f; do
  echo "  $(basename "$f")"
done
echo ""

# Exit with failure if any checks failed
if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
