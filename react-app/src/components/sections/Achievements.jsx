import { ACHIEVEMENTS } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StackLine } from "../ui/StackLine";
import { FeatureList } from "../ui/FeatureList";

export function Achievements() {
  return (
    <section id="achievements" className="py-[88px]">
      <Container>
        <SectionHeading title={ACHIEVEMENTS.title} intro={ACHIEVEMENTS.intro} introFull />
        <div className="grid gap-[26px]">
          {ACHIEVEMENTS.items.map((item) => {
            const cardContent = (
              <Card tilt className="h-full flex flex-col md:grid md:grid-cols-[auto_1fr] gap-6 text-left">
                <div className="font-display font-bold text-[1.6rem] gradient-text leading-tight shrink-0 md:w-[70px]">
                  {item.year}
                </div>
                <div>
                  <span className="font-body font-medium text-[0.82rem] text-accent tracking-[0.04em] block mb-1">
                    {item.meta}
                  </span>
                  <h3 className="font-display text-[1.35rem] mb-1.5 transition-colors duration-200 group-hover/card:text-accent">
                    {item.title}
                    {item.repo && (
                      <span className="inline-block text-[0.85em] text-accent ml-1 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5">
                        &nbsp;↗
                      </span>
                    )}
                  </h3>
                  <StackLine>{item.stack}</StackLine>
                  <p
                    className="text-muted text-[0.95rem] mb-3.5 [&_strong]:text-text [&_strong]:font-semibold"
                    dangerouslySetInnerHTML={{ __html: item.lead }}
                  />
                  {item.points && item.points.length > 0 && (
                    <FeatureList items={item.points} className="[&_li]:text-[0.93rem]" />
                  )}
                </div>
              </Card>
            );

            if (item.repo) {
              return (
                <Reveal key={item.title}>
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${item.title} — open repository`}
                    className="block no-underline group/card"
                  >
                    {cardContent}
                  </a>
                </Reveal>
              );
            }

            return (
              <Reveal key={item.title}>
                <div className="block no-underline group/card">
                  {cardContent}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
