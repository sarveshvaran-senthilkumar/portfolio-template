import { PROJECTS } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StackLine } from "../ui/StackLine";
import { FeatureList } from "../ui/FeatureList";

export function Projects() {
  return (
    <section id="projects" className="py-[88px]">
      <Container>
        <SectionHeading title={PROJECTS.title} intro={PROJECTS.intro} introFull />
        <div className="grid gap-[26px]">
          {PROJECTS.items.map((p) => (
            <Reveal key={p.title}>
              <Card tilt>
                <span className="font-body font-medium text-[0.82rem] text-accent tracking-[0.04em]">{p.meta}</span>
                <h3 className="font-display text-[1.18rem] mt-1 mb-1 tracking-[-0.01em]">{p.title}</h3>
                <StackLine>{p.stack}</StackLine>
                <p className="text-muted text-[0.95rem] mb-3.5">{p.lead}</p>
                <FeatureList items={p.points} className="[&_li]:text-[0.93rem]" />
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
