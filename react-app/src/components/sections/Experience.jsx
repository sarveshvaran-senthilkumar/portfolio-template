import { EXPERIENCE } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StackLine } from "../ui/StackLine";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
  const { title, work, education } = EXPERIENCE;

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
      </Container>
    </section>
  );
}
