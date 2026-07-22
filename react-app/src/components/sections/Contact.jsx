import { CONTACT, LINKS } from "../../data/profile";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ConnectIcon } from "../ui/ConnectIcon";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-[88px]">
      <Container className="text-center">
        <SectionHeading title={CONTACT.title} intro={CONTACT.intro} center />
        <Reveal className="flex justify-center gap-[22px] mt-3.5">
          <ConnectIcon href={LINKS.github} url={LINKS.githubLabel} label="GitHub" external>
            <GitHubIcon />
          </ConnectIcon>
          <ConnectIcon href={LINKS.linkedin} url={LINKS.linkedinLabel} label="LinkedIn" external>
            <LinkedInIcon />
          </ConnectIcon>
          <ConnectIcon href={`mailto:${LINKS.email}`} url={LINKS.email} label="Email">
            <MailIcon />
          </ConnectIcon>
        </Reveal>
      </Container>
    </section>
  );
}
