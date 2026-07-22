import { EXPERIENCE } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StackLine } from "../ui/StackLine";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
  const { title, work, education, achievements } = EXPERIENCE;

  return (
    <section id="experience" className="py-[88px]">
      <Container>
        <SectionHeading title={title} />

        {/* timeline: work + education */}
        <div className="relative pl-[34px] mt-9 before:content-[''] before:absolute before:left-2 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-gradient-to-b before:from-accent before:to-accent-3 before:opacity-45">
          {work.map((job) => (
            <TimelineItem
              key={job.org}
              meta={job.meta}
              title={job.role}
              subtitle={job.org}
              bullets={job.bullets}
            />
          ))}
          <TimelineItem
            meta={education.meta}
            title={education.degree}
            subtitle={education.org}
            bullets={education.bullets}
            last
          />
        </div>

        {/* achievements */}
        <div className="grid md:grid-cols-2 gap-[22px] mt-14">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i}>
              <Card tilt>
                <span className="font-body font-medium text-[0.82rem] text-accent tracking-[0.04em]">{a.meta}</span>
                <h3 className="font-display text-[1.18rem] mt-1 mb-2 tracking-[-0.01em]">{a.title}</h3>
                <StackLine>{a.stack}</StackLine>
                <p className="text-muted text-[0.95rem]">{a.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
