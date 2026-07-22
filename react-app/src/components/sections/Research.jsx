import { RESEARCH } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StackLine } from "../ui/StackLine";
import { FeatureList } from "../ui/FeatureList";

/** A metric badge (accuracy / F1 / kappa …). */
function Metric({ value, label }) {
  return (
    <div className="text-center rounded-xl px-4 py-2.5 bg-accent/[0.06] border border-accent/20">
      <b className="block font-display text-accent text-[1.15rem]">{value}</b>
      <small className="text-muted text-[0.8rem]">{label}</small>
    </div>
  );
}

export function Research() {
  return (
    <section id="research" className="py-[88px]">
      <Container className="grid gap-[26px]">
        <SectionHeading title={RESEARCH.title} intro={RESEARCH.intro} introFull />
        {RESEARCH.papers.map((paper) => (
          <Reveal key={paper.title}>
            <Card tilt className="grid md:grid-cols-[auto_1fr] gap-6">
              <div className="font-display font-bold text-[1.6rem] gradient-text leading-tight">{paper.year}</div>
              <div>
                <h3 className="font-display text-[1.35rem] mb-1.5">
                  <a
                    href={paper.doi}
                    target="_blank"
                    rel="noopener"
                    className="group/link text-inherit no-underline transition-colors duration-200 hover:text-accent after:content-['_↗'] after:text-[0.85em] after:text-accent after:opacity-0 hover:after:opacity-100 focus-visible:after:opacity-100 after:transition-opacity"
                  >
                    {paper.title}
                  </a>
                </h3>
                <StackLine>{paper.stack}</StackLine>
                <FeatureList items={paper.points} className="[&_li]:text-[0.94rem]" />
                <div className="flex flex-wrap gap-3 mt-4">
                  {paper.metrics.map((m) => (
                    <Metric key={m.label} {...m} />
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
