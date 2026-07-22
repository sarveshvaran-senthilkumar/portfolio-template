import { useReducedMotion } from "../../hooks/useReducedMotion";

/** The floating syntax-highlighted code card in the hero. */
export function CodeCard({ fileName, items }) {
  const reduced = useReducedMotion();
  return (
    <div
      className={`card-surface rounded-2xl overflow-hidden backdrop-blur-sm shadow-[0_0_40px_rgba(34,211,238,0.12)] ${
        reduced ? "" : "animate-float"
      }`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-soft">
        <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#f87171]" />
        <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#fbbf24]" />
        <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#34d399]" />
        <em className="ml-2 not-italic text-[0.78rem] text-muted font-mono">{fileName}</em>
      </div>
      <pre className="px-[22px] py-5 font-mono text-[0.82rem] leading-[1.75] text-[#b8c6dd] overflow-x-auto">
        <span className="text-accent-3">class</span> <span className="text-accent">AIEngineer</span>:{"\n"}
        {"    "}
        <span className="text-accent-3">def</span> <span className="text-accent">__init__</span>(self):{"\n"}
        {"        "}self.name = <span className="text-[#7dd3a7]">"Sarveshvaran"</span>
        {"\n"}
        {"        "}self.role = <span className="text-[#7dd3a7]">"AI Engineer"</span>
        {"\n"}
        {"        "}self.base = <span className="text-[#7dd3a7]">"Chennai, India"</span>
        {"\n\n"}
        {"    "}
        <span className="text-accent-3">def</span> <span className="text-accent">build</span>(self):{"\n"}
        {"        "}
        <span className="text-accent-3">return</span> [{"\n"}
        {items.map((item) => (
          <span key={item}>
            {"            "}
            <span className="text-[#7dd3a7]">"{item}"</span>,{"\n"}
          </span>
        ))}
        {"        "}]{"  "}
        <span className="text-[#64748b]"># production-ready ✓</span>
      </pre>
    </div>
  );
}
