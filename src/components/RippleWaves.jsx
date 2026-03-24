import { useEffect, useRef } from "react";
import { fetchWaveSvg, initSvg, lerpColor, BASE_COLOR } from "../lib/wave-utils";

const SPEED = 0.005;
const WAVE_WIDTH = 0.2;

const RIPPLE_SPEED = 0.005;
const RIPPLE_MAX_RADIUS = 0.5;
const RIPPLE_DECAY = 0.99;
const RIPPLE_DISPLACEMENT = 20;

export default function RippleWaves() {
  const containerRef = useRef(null);
  const ripplesRef = useRef([]);

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

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      ripplesRef.current.push({
        originX: (e.clientX - rect.left) / rect.width,
        originY: (e.clientY - rect.top) / rect.height,
        radius: 0,
        strength: 1,
        age: 0,
      });
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const ripples = ripplesRef.current;
      const last = ripples[ripples.length - 1];
      if (!last || last.age > 8) {
        ripples.push({
          originX: x,
          originY: y,
          radius: 0,
          strength: 0.5,
          age: 0,
        });
      }
    };

    container.addEventListener("click", handleClick);
    container.addEventListener("mousemove", handleMouseMove);

    fetchWaveSvg().then((svgText) => {
      if (cancelled) return;

      const { paths } = initSvg(container, svgText);
      const total = paths.length;
      let position = 0;

      function animate() {
        if (cancelled) return;

        if (visible) {
          position = (position + SPEED) % 1;

          const ripples = ripplesRef.current;
          for (let r = ripples.length - 1; r >= 0; r--) {
            ripples[r].radius += RIPPLE_SPEED;
            ripples[r].strength *= RIPPLE_DECAY;
            ripples[r].age++;
            if (ripples[r].strength < 0.01 || ripples[r].radius > RIPPLE_MAX_RADIUS) {
              ripples.splice(r, 1);
            }
          }

          for (let i = 0; i < total; i++) {
            const normalizedPos = i / total;

            let dist = Math.abs(normalizedPos - position);
            if (dist > 0.5) dist = 1 - dist;
            let brightness =
              dist < WAVE_WIDTH
                ? Math.cos((dist / WAVE_WIDTH) * Math.PI * 0.5) ** 2
                : 0;

            let totalOffsetX = 0;
            let totalOffsetY = 0;

            for (const ripple of ripples) {
              const dy = normalizedPos - ripple.originY;
              const distToOrigin = Math.abs(dy);

              const distToRing = Math.abs(distToOrigin - ripple.radius);
              const ringWidth = 0.08;
              if (distToRing < ringWidth) {
                const ringBrightness =
                  Math.cos((distToRing / ringWidth) * Math.PI * 0.5) ** 2 *
                  ripple.strength;
                brightness = Math.min(1, brightness + ringBrightness);
              }

              if (distToOrigin < ripple.radius + 0.1 && distToOrigin > 0.001) {
                const pushFalloff = Math.exp(
                  -((distToOrigin - ripple.radius) ** 2) / 0.005
                );
                const pushDir = dy > 0 ? 1 : -1;
                totalOffsetY += pushDir * RIPPLE_DISPLACEMENT * pushFalloff * ripple.strength;
                const dx = ripple.originX - 0.5;
                totalOffsetX += dx * RIPPLE_DISPLACEMENT * 0.5 * pushFalloff * ripple.strength;
              }
            }

            paths[i].setAttribute(
              "stroke",
              brightness > 0.001 ? lerpColor(brightness) : BASE_COLOR
            );

            if (Math.abs(totalOffsetX) > 0.1 || Math.abs(totalOffsetY) > 0.1) {
              paths[i].style.transform = `translate(${totalOffsetX}px, ${totalOffsetY}px)`;
            } else {
              paths[i].style.transform = "";
            }
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
      container.removeEventListener("click", handleClick);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full [&>svg]:w-full [&>svg]:h-full cursor-pointer"
    />
  );
}
