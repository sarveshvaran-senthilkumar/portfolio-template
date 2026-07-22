import { useCountUp } from "../../hooks/useCountUp";

/** A single clickable stat tile with a count-up number. */
export function StatCard({ value, prefix, suffix, label, href }) {
  const [ref, display] = useCountUp(value, { prefix, suffix });
  return (
    <a
      href={href}
      className="block text-center card-surface rounded-2xl px-5 py-[26px] no-underline transition-all duration-[250ms] hover:-translate-y-[5px] hover:border-accent/40 motion-reduce:hover:translate-y-0"
    >
      <b ref={ref} className="block font-display font-bold text-[2.1rem] gradient-text">
        {display}
      </b>
      <small className="text-muted text-[0.86rem]">{label}</small>
    </a>
  );
}
