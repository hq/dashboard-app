import { useEffect, useRef } from "react";

const COLORS = [
  "#84D7DC",
  "#6BC4C9",
  "#9DE3E7",
  "#5AB8BD",
  "#B0ECF0",
];

const MOUSE_RADIUS = 80;
const FRICTION = 0.85;
const RETURN_SPEED = 0.08;
const PARTICLE_GAP = 3;
const PARTICLE_SIZE = 2;

export default function ParticleLogos() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    let frameId;
    let visible = true;
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = canvas.width / rect.width;
      mouseX = (e.clientX - rect.left) * dpr;
      mouseY = (e.clientY - rect.top) * dpr;
    };
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    function createParticles() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const w = canvas.width;
      const h = canvas.height;

      const img = new Image();
      img.onload = () => {
        const offscreen = document.createElement("canvas");
        offscreen.width = w;
        offscreen.height = h;
        const offCtx = offscreen.getContext("2d");

        const scale = Math.min((w * 0.8) / img.width, (h * 0.5) / img.height);
        const drawW = img.width * scale;
        const drawH = img.height * scale;
        const drawX = (w - drawW) / 2;
        const drawY = (h - drawH) / 2;

        offCtx.drawImage(img, drawX, drawY, drawW, drawH);

        const imageData = offCtx.getImageData(0, 0, w, h);
        const data = imageData.data;

        particles = [];
        const gap = PARTICLE_GAP * dpr;
        const size = PARTICLE_SIZE * dpr;

        for (let y = 0; y < h; y += gap) {
          for (let x = 0; x < w; x += gap) {
            const idx = (y * w + x) * 4;
            if (data[idx + 3] > 128) {
              particles.push({
                x,
                y,
                originX: x,
                originY: y,
                vx: 0,
                vy: 0,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                size: size + Math.random() * size * 0.5,
              });
            }
          }
        }
      };
      img.src = "/assets/vsl-logo.svg";
    }

    createParticles();

    const resizeObserver = new ResizeObserver(() => {
      createParticles();
    });
    resizeObserver.observe(canvas);

    function render() {
      if (cancelled) return;

      if (visible) {
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const dpr = canvas.width / canvas.getBoundingClientRect().width;
        const mouseRadius = MOUSE_RADIUS * dpr;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius && dist > 0) {
            const force = (mouseRadius - dist) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * 6;
            p.vy += Math.sin(angle) * force * 6;
          }

          p.vx += (p.originX - p.x) * RETURN_SPEED;
          p.vy += (p.originY - p.y) * RETURN_SPEED;

          p.vx *= FRICTION;
          p.vy *= FRICTION;

          p.x += p.vx;
          p.y += p.vy;

          ctx.fillStyle = p.color;
          ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        }
      }

      frameId = requestAnimationFrame(render);
    }

    frameId = requestAnimationFrame(render);

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      observer.disconnect();
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-pointer"
    />
  );
}
