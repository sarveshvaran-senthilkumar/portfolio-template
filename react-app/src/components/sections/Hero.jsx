import { HERO, LINKS } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { useTypedRoles } from "../../hooks/useTypedRoles";
import { CodeCard } from "./CodeCard";

export function Hero() {
  const typed = useTypedRoles(HERO.roles);

  return (
    <header id="home" className="relative min-h-screen flex items-center pt-[72px]">
      <Container className="grid md:grid-cols-[1.25fr_0.75fr] gap-12 items-center">
        <div>
          <Reveal as="p" className="font-display text-accent tracking-[0.2em] uppercase text-[0.85rem] mb-4">
            {HERO.kicker}
          </Reveal>
          <Reveal
            as="h1"
            delay={1}
            className="font-display font-bold leading-[1.08] tracking-[-0.03em] text-[clamp(2.4rem,6vw,4.2rem)] mb-[18px]"
          >
            {HERO.firstName}
            <br />
            <span className="gradient-text">{HERO.lastName}</span>
          </Reveal>

          <Reveal
            as="p"
            delay={2}
            className="font-display text-[clamp(1.15rem,2.6vw,1.6rem)] text-muted min-h-[2.2em] mb-5"
          >
            <span className="text-text font-semibold">{typed}</span>
            <span className="inline-block w-[3px] h-[1.1em] bg-accent align-text-bottom ml-1 animate-blink motion-reduce:animate-none" />
          </Reveal>

          <Reveal as="div" delay={2} className="text-muted max-w-[580px] mb-8 text-[0.97rem]">
            {HERO.paragraphs.map((p, i) => (
              <p key={i} className="mb-3.5">
                {p}
              </p>
            ))}
            <p className="font-display font-semibold gradient-text tracking-[0.02em]">{HERO.motto}</p>
          </Reveal>

          <Reveal as="div" delay={3} className="flex flex-wrap gap-3.5 items-center">
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="ghost">
              Get In Touch
            </Button>
          </Reveal>
        </div>

        <Reveal delay={3} className="hidden md:block">
          <CodeCard fileName={HERO.codeCard.fileName} items={HERO.codeCard.build} />
        </Reveal>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute left-1/2 bottom-[26px] -translate-x-1/2 w-7 h-[46px] border-2 border-muted rounded-2xl flex justify-center pt-2 opacity-70 transition-all duration-200 hover:opacity-100 hover:border-accent"
      >
        <span className="w-1 h-[9px] rounded bg-accent animate-scroll-nudge motion-reduce:animate-none" />
      </a>
    </header>
  );
}
