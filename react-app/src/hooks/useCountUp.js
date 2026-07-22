import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Animates a number from 0 to `target` once it scrolls into view.
 * Returns [ref, displayString].
 */
export function useCountUp(target, { prefix = "", suffix = "", duration = 1400 } = {}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (reduced) {
        setValue(target);
        return;
      }
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, reduced]);

  return [ref, `${prefix}${value}${suffix}`];
}
