import { useEffect, useRef } from "react";
import { fetchWaveSvg, initSvg, lerpColor, BASE_COLOR } from "../lib/wave-utils";

const SPEED = 0.005;
const WAVE_WIDTH = 0.2;

export default function AnimatedWaves() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let frameId;
    let visible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    fetchWaveSvg().then((svgText) => {
      if (cancelled) return;

      const { paths } = initSvg(container, svgText);
      const total = paths.length;
      let position = 0;

      function animate() {
        if (cancelled) return;

        if (visible) {
          position = (position + SPEED) % 1;

          for (let i = 0; i < total; i++) {
            const normalizedPos = i / total;
            let dist = Math.abs(normalizedPos - position);
            if (dist > 0.5) dist = 1 - dist;

            const raw =
              dist < WAVE_WIDTH
                ? Math.cos((dist / WAVE_WIDTH) * Math.PI * 0.5) ** 2
                : 0;
            const brightness = Math.min(raw * 1.8, 1);

            paths[i].setAttribute(
              "stroke",
              brightness > 0.001 ? lerpColor(brightness) : BASE_COLOR
            );
          }
        }

        frameId = requestAnimationFrame(animate);
      }

      frameId = requestAnimationFrame(animate);
    });

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full [&>svg]:w-full [&>svg]:h-full"
    />
  );
}
