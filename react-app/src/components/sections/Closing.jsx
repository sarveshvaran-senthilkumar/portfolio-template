import { CLOSING, LINKS } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function Closing() {
  const [pre, accent, post] = CLOSING.quote;
  return (
    <section id="closing" className="py-[100px]">
      <Container>
        <Reveal className="relative max-w-[860px] mx-auto text-center p-5">
          <span
            aria-hidden="true"
            className="absolute -top-[46px] left-1/2 -translate-x-1/2 font-display text-[8rem] leading-none gradient-text opacity-35 pointer-events-none"
          >
            &ldquo;
          </span>
          <blockquote className="font-display font-semibold text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.4] tracking-[-0.01em] text-text">
            {pre}
            <span className="gradient-text">{accent}</span>
            {post}
          </blockquote>
          <p className="mt-[22px] text-muted text-[0.98rem] tracking-[0.03em]">{CLOSING.sign}</p>
          <div className="flex justify-center mt-[34px]">
            <Button href={`mailto:${LINKS.email}`} variant="primary">
              {CLOSING.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
