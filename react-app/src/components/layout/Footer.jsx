import { LINKS } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border-soft py-9 mt-10">
      <div className="w-[92%] max-w-[1120px] mx-auto flex flex-wrap gap-[18px] items-center justify-between">
        <p className="text-muted text-[0.88rem]">© 2026 Sarveshvaran Senthilkumar</p>
        <p className="text-muted text-[0.88rem]">
          <a href={LINKS.github} target="_blank" rel="noopener" className="text-accent no-underline">
            GitHub
          </a>{" "}
          ·{" "}
          <a href={LINKS.linkedin} target="_blank" rel="noopener" className="text-accent no-underline">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
