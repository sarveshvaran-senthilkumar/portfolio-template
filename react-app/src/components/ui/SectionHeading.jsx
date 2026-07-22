import { Reveal } from "./Reveal";

/**
 * Section title with the last word/phrase in gradient, plus optional intro.
 * `title` is a [normal, gradient] tuple; `intro` is optional sub text.
 */
export function SectionHeading({ title, intro, center = false, introFull = false }) {
  const [normal, accent] = title;
  return (
    <>
      <Reveal
        as="h2"
        className={`font-display font-bold tracking-[-0.02em] text-[clamp(1.8rem,4vw,2.6rem)] mt-2.5 mb-3.5 ${
          center ? "text-center" : ""
        }`}
      >
        {normal}
        <span className="gradient-text">{accent}</span>
      </Reveal>
      {intro && (
        <Reveal
          as="p"
          className={`text-muted mb-11 ${center ? "text-center" : ""} ${
            introFull ? "" : "max-w-[640px]"
          } ${center && !introFull ? "mx-auto" : ""}`}
        >
          {intro}
        </Reveal>
      )}
    </>
  );
}
