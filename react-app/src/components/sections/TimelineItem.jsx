import { useReveal } from "../../hooks/useReveal";
import { FeatureList } from "../ui/FeatureList";

/**
 * One timeline entry. Its dot blinks while the entry sits in the
 * viewport's middle band (mirrors the original scroll-driven effect).
 */
export function TimelineItem({ meta, title, subtitle, bullets, last = false }) {
  const [ref, active] = useReveal(0.35);

  return (
    <div ref={ref} className={`relative ${last ? "" : "pb-11"}`}>
      {/* dot */}
      <span
        className={`absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-bg border-[3px] border-accent shadow-[0_0_14px_rgba(34,211,238,0.55)] transition-shadow duration-300 ${
          active ? "animate-dot-blink motion-reduce:animate-none" : ""
        }`}
      />
      <div className="font-body font-medium text-[0.82rem] text-accent mb-1.5 tracking-[0.04em]">{meta}</div>
      <h3 className="font-display text-[1.3rem] tracking-[-0.01em]">{title}</h3>
      {subtitle && <h4 className="text-accent-2 font-semibold text-[0.98rem] mt-1 mb-3.5">{subtitle}</h4>}
      <FeatureList items={bullets} className="[&_li]:text-[0.95rem]" />
    </div>
  );
}
