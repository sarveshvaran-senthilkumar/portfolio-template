import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Surface card with hover lift, top gradient bar, and optional 3D tilt.
 * tilt={true} adds pointer-follow rotation (disabled under reduced motion).
 */
export function Card({ tilt = false, className = "", children, ...rest }) {
  const reduced = useReducedMotion();

  const handleMove = (e) => {
    if (!tilt || reduced) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };
  const handleLeave = (e) => {
    if (!tilt) return;
    e.currentTarget.style.transform = "";
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={[
        "group relative overflow-hidden rounded-2xl card-surface p-[30px]",
        "transition-all duration-[250ms]",
        "hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]",
        "motion-reduce:hover:translate-y-0",
        className,
      ].join(" ")}
      {...rest}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] gradient-bg opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100" />
      {children}
    </div>
  );
}
