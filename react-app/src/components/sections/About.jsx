import { STATS, ABOUT, SKILLS } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StatCard } from "./StatCard";
import { SkillGroup } from "./SkillGroup";

/** #about — stats strip, "What I Do" cards, and the skills grid. */
export function About() {
  return (
    <section id="about" className="py-[88px]">
      <Container>
        {/* stats */}
        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-[18px]">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </Reveal>

        {/* what I do */}
        <div className="mt-[88px]">
          <SectionHeading title={ABOUT.title} intro={ABOUT.intro} introFull />
          <div className="grid md:grid-cols-3 gap-[22px]">
            {ABOUT.cards.map((c, i) => (
              <Reveal key={c.title} delay={i} className="h-full">
                <Card tilt className="h-full">
                  <h3 className="font-display text-[1.18rem] mb-2.5 tracking-[-0.01em]">{c.title}</h3>
                  <p className="text-muted text-[0.95rem]">{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* skills */}
        <div className="mt-[88px]">
          <SectionHeading title={SKILLS.title} />
          <div className="grid md:grid-cols-2 gap-[34px] mt-6">
            {SKILLS.groups.map((g, i) => (
              <SkillGroup key={g.name} group={g} delay={i % 2} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
