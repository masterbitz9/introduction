import { useEffect, useRef } from "react";

const LERP_POS = 0.14;
const LERP_SCALE = 0.12;

function isButtonLike(node: Element | null): boolean {
  if (!node) return false;
  return (
    node.closest(
      "button, [role='button'], input[type='submit'], input[type='button'], input[type='reset']"
    ) !== null
  );
}

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const hoverRef = useRef(false);
  const rafRef = useRef(0);
  const activeRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      if (!activeRef.current) {
        activeRef.current = true;
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        dot.style.opacity = "1";
      }
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      const under = document.elementFromPoint(e.clientX, e.clientY);
      hoverRef.current = isButtonLike(under);
    };

    const tick = () => {
      const p = pos.current;
      const t = target.current;
      p.x += (t.x - p.x) * LERP_POS;
      p.y += (t.y - p.y) * LERP_POS;

      const targetScale = hoverRef.current ? 5.25 : 1;
      scaleRef.current += (targetScale - scaleRef.current) * LERP_SCALE;
      const s = scaleRef.current;

      const u = Math.min(1, Math.max(0, (s - 1) / 3.9));
      dot.style.background = `hsla(43, 88%, 54%, ${0.92 - u * 0.72})`;
      dot.style.boxShadow =
        u > 0.08
          ? `0 0 ${10 + u * 22}px rgba(212, 160, 23, ${0.22 + u * 0.28})`
          : "0 0 10px rgba(212, 160, 23, 0.5), 0 0 2px rgba(255, 255, 255, 0.35)";

      dot.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) scale(${s})`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] motion-reduce:hidden [@media(pointer:coarse)]:hidden box-border"
      style={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "hsl(43 88% 54%)",
        border: "0 solid transparent",
        boxShadow: "0 0 10px rgba(212, 160, 23, 0.5), 0 0 2px rgba(255, 255, 255, 0.35)",
        opacity: 0,
        willChange: "transform",
      }}
    />
  );
}
