import { useEffect, useRef } from "react";
import { fetchWaveSvg, initSvg, lerpColor, BASE_COLOR } from "../lib/wave-utils";

const SPEED = 0.005;
const WAVE_WIDTH = 0.2;
const MOUSE_INFLUENCE = 100;

export default function InteractiveWaves() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

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

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    fetchWaveSvg().then((svgText) => {
      if (cancelled) return;

      const { paths } = initSvg(container, svgText);
      const total = paths.length;
      let position = 0;
      const smoothMouse = { x: 0.5, y: 0.5 };

      function animate() {
        if (cancelled) return;

        if (visible) {
          position = (position + SPEED) % 1;

          const target = mouseRef.current;
          if (target.active) {
            smoothMouse.x += (target.x - smoothMouse.x) * 0.08;
            smoothMouse.y += (target.y - smoothMouse.y) * 0.08;
          } else {
            smoothMouse.x += (0.5 - smoothMouse.x) * 0.03;
            smoothMouse.y += (0.5 - smoothMouse.y) * 0.03;
          }

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

            // Mouse displacement
            if (target.active || Math.abs(smoothMouse.x - 0.5) > 0.01) {
              const distFromCursorY = normalizedPos - smoothMouse.y;
              const proximity = Math.exp(-(distFromCursorY * distFromCursorY) / 0.02);
              const offsetX = (smoothMouse.x - 0.5) * MOUSE_INFLUENCE * proximity;
              const offsetY = distFromCursorY * MOUSE_INFLUENCE * proximity * 0.5;
              paths[i].style.transform = `translate(${offsetX}px, ${offsetY}px)`;
              paths[i].style.transition = "transform 0.1s ease-out";
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
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full [&>svg]:w-full [&>svg]:h-full cursor-default"
    />
  );
}
