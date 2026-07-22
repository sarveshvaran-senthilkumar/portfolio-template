/**
 * Large contact icon tile that reveals its URL as a tooltip on hover/focus
 * and links to the destination on click.
 */
export function ConnectIcon({ href, url, label, external = false, children }) {
  return (
    <a
      href={href}
      aria-label={`${label} — ${url}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className="group relative grid place-items-center w-[60px] h-[60px] rounded-2xl card-surface text-muted transition-all duration-200 hover:text-accent hover:border-accent hover:-translate-y-[5px] hover:bg-accent/[0.06] hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] motion-reduce:hover:translate-y-0"
    >
      <span className="[&>svg]:w-[26px] [&>svg]:h-[26px]">{children}</span>

      {/* tooltip */}
      <span className="pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 translate-y-1.5 whitespace-nowrap rounded-[9px] bg-surface-2 border border-border-soft text-text text-[0.8rem] px-[13px] py-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 z-10">
        {url}
      </span>
      {/* tooltip arrow */}
      <span className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-surface-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
    </a>
  );
}
