import { useEffect, useState } from "react";

/**
 * Watches section elements by id and returns the id currently in view.
 * `map` optionally remaps an observed id to the nav id it belongs under
 * (e.g. "about" -> "home").
 */
export function useScrollSpy(ids, map = {}) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(map[id] || id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids, map]);

  return activeId;
}
