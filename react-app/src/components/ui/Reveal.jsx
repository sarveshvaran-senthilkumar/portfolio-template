import { useReveal } from "../../hooks/useReveal";

/**
 * Wraps children in a scroll-reveal transition.
 * `as` picks the element/component; `delay` staggers (0..3).
 */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  const delayClass = ["", "delay-100", "delay-200", "delay-300"][delay] || "";

  return (
    <Tag
      ref={ref}
      className={[
        "transition-all duration-700 ease-[cubic-bezier(0.2,0.6,0.2,1)] motion-reduce:transition-none",
        delayClass,
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
