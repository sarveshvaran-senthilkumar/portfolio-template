import { Reveal } from "../ui/Reveal";

/**
 * A skill category: heading with a diamond marker that pulses on hover,
 * plus a comma-separated list of skills.
 */
export function SkillGroup({ group, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group">
      <h3 className="font-display text-[1.05rem] mb-3.5 flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-[2px] gradient-bg rotate-45 transition-shadow duration-300 group-hover:animate-skill-dot motion-reduce:group-hover:animate-none" />
        {group.name}
      </h3>
      <p className="text-muted text-[0.97rem] leading-[1.9] pl-[18px]">{group.items}</p>
    </Reveal>
  );
}
