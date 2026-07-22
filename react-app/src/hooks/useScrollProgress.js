import { useEffect, useState } from "react";

/**
 * Returns { progress, scrolled, pastHero } based on window scroll.
 * - progress: 0..100 page scroll percentage
 * - scrolled: window has scrolled past 24px (navbar background)
 * - pastHero: window has scrolled past 600px (back-to-top button)
 */
export function useScrollProgress() {
  const [state, setState] = useState({ progress: 0, scrolled: false, pastHero: false });

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({
        progress: max > 0 ? (window.scrollY / max) * 100 : 0,
        scrolled: window.scrollY > 24,
        pastHero: window.scrollY > 600,
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
