import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const el = glowRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed z-0 top-0 left-0 will-change-transform motion-reduce:hidden"
      style={{
        width: "800px",
        height: "800px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, rgba(212,160,23,0.06) 0%, rgba(212,160,23,0.025) 40%, transparent 70%)",
        transition: "transform 0.12s ease-out",
      }}
    />
  );
}
