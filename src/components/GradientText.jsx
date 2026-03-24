import { useEffect, useRef, useState } from "react";

const TYPING_SPEED = 80;

export default function GradientText({ text }) {
  const ref = useRef(null);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const totalChars = text.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || charIndex >= totalChars) return;

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [started, charIndex, totalChars]);

  return (
    <>
      <span
        ref={ref}
        style={{
          padding: 6,
          background:
            "linear-gradient(to right, rgba(147, 130, 220, 0.2), rgba(132, 215, 220, 0.2))",
          borderRight: "3px solid #84D7DC",
          animation:
            charIndex >= totalChars
              ? "borderBlink 1.2s step-end 3"
              : undefined,
        }}
      >
        {text.slice(0, charIndex)}
      </span>
      <style>{`
        @keyframes borderBlink { 50% { border-right-color: #264A50; } }
      `}</style>
    </>
  );
}
