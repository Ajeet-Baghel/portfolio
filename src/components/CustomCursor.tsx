import { useEffect, useRef } from "react";

/**
 * Custom cursor — a tight inner dot plus a trailing ring that
 * lerps toward the pointer. Grows when hovering interactive
 * elements (a, button, [data-cursor]). Disabled on touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const visible = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let hovering = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      hovering = !!target?.closest("a, button, [data-cursor]");
      ring.dataset.hover = hovering ? "true" : "false";
      dot.dataset.hover = hovering ? "true" : "false";
    };

    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.16;
      ringPos.y += (pos.y - ringPos.y) * 0.16;
      dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] opacity-0 transition-opacity duration-200"
        aria-hidden
      >
        <div className="custom-cursor-dot -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent transition-transform duration-150 data-[hover=true]:scale-[2.5]" />
      </div>
      {/* trailing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] opacity-0 transition-opacity duration-200"
        aria-hidden
      >
        <div className="custom-cursor-ring -ml-5 -mt-5 h-10 w-10 rounded-full border border-accent/50 transition-all duration-200 data-[hover=true]:-ml-7 data-[hover=true]:-mt-7 data-[hover=true]:h-14 data-[hover=true]:w-14 data-[hover=true]:border-accent/80 data-[hover=true]:bg-accent-soft" />
      </div>
    </>
  );
}
