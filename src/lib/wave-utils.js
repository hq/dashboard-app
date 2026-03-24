// Shared SVG cache — fetched once, reused across all wave components
let svgCache = null;

export function fetchWaveSvg() {
  if (!svgCache) {
    svgCache = fetch("/assets/waves-use-on-deep-sea-bg.svg").then((res) =>
      res.text()
    );
  }
  return svgCache;
}

const BASE_R = 0xbc, BASE_G = 0xab, BASE_B = 0x96;
const BRIGHT_R = 0xff, BRIGHT_G = 0xff, BRIGHT_B = 0xff;

export function lerpColor(t) {
  const r = (BASE_R + (BRIGHT_R - BASE_R) * t) | 0;
  const g = (BASE_G + (BRIGHT_G - BASE_G) * t) | 0;
  const b = (BASE_B + (BRIGHT_B - BASE_B) * t) | 0;
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export const BASE_COLOR = "#BCAB96";

export function initSvg(container, svgText) {
  container.innerHTML = svgText;
  const svg = container.querySelector("svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.style.display = "block";

  const paths = Array.from(
    svg.querySelectorAll('path[stroke="#BCAB96"]')
  );

  paths.sort((a, b) => {
    const wa = parseFloat(a.getAttribute("stroke-width") || "0");
    const wb = parseFloat(b.getAttribute("stroke-width") || "0");
    return wa - wb;
  });

  return { svg, paths };
}
