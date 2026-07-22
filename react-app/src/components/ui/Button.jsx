/**
 * Reusable button/link. Renders an <a> (default) so it works for
 * anchors, mailto, and external links alike.
 *
 * variant: "primary" | "ghost"
 */
const BASE =
  "inline-flex items-center gap-2.5 px-[26px] py-[13px] rounded-xl font-display font-semibold text-[0.95rem] no-underline cursor-pointer border border-transparent transition-all duration-200";

const VARIANTS = {
  primary:
    "gradient-bg text-[#06121a] hover:-translate-y-0.5 hover:shadow-[0_10px_34px_rgba(34,211,238,0.35)] motion-reduce:hover:translate-y-0",
  ghost:
    "border-border-soft text-text bg-white/[0.02] hover:border-accent hover:text-accent hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
};

export function Button({ href = "#", variant = "primary", className = "", children, ...rest }) {
  return (
    <a href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
