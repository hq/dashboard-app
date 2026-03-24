import { useEffect, useRef, useState } from "react";

export default function PopIn({
  children,
  className = "",
  delay = 0,
  offsetY = 40,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible
          ? "translateY(0) scale(1)"
          : `translateY(${offsetY}px) scale(0.85)`,
        opacity: visible ? 1 : 0,
        transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s, opacity 0.4s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
