import { PROJECTS } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StackLine } from "../ui/StackLine";
import { FeatureList } from "../ui/FeatureList";
import { GitHubIcon } from "../ui/Icons";

export function Projects() {
  return (
    <section id="projects" className="py-[88px]">
      <Container>
        <SectionHeading title={PROJECTS.title} intro={PROJECTS.intro} introFull />
        <div className="grid gap-[26px]">
          {PROJECTS.items.map((p) => (
            <Reveal key={p.title}>
              <a
                href={p.repo}
                target="_blank"
                rel="noopener"
                aria-label={`${p.title} — open GitHub repository`}
                className="block no-underline group/card"
              >
                <Card tilt>
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <span className="font-body font-medium text-[0.82rem] text-accent tracking-[0.04em]">
                      {p.meta}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted transition-colors duration-200 group-hover/card:text-accent">
                      <GitHubIcon className="w-4 h-4" />
                      <span className="transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </div>

                  <h3 className="font-display text-[1.18rem] mt-1 mb-1 tracking-[-0.01em] transition-colors duration-200 group-hover/card:text-accent">
                    {p.title}
                  </h3>
                  <StackLine>{p.stack}</StackLine>
                  <p
                    className="text-muted text-[0.95rem] mb-3.5 [&_strong]:text-text [&_strong]:font-semibold"
                    dangerouslySetInnerHTML={{ __html: p.lead }}
                  />
                  <FeatureList items={p.points} className="[&_li]:text-[0.93rem]" />
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
