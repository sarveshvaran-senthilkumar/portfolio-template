import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/** Floating button that scrolls back to the top once past the hero. */
export function BackToTop() {
  const { pastHero } = useScrollProgress();
  const reduced = useReducedMotion();

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });

  return (
    <button
      onClick={toTop}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-[90] w-12 h-12 rounded-[14px] card-surface bg-surface/90 backdrop-blur-md text-accent text-[1.25rem] cursor-pointer transition-all duration-[250ms] hover:border-accent ${
        pastHero ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
}
