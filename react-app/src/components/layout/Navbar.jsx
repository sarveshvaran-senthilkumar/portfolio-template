import { useState } from "react";
import { NAV_LINKS } from "../../data/profile";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const SPY_IDS = ["home", "about", "experience", "projects", "achievements", "research", "contact"];
const SPY_MAP = { about: "home" };

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const active = useScrollSpy(SPY_IDS, SPY_MAP);
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 h-[72px] z-[100] flex items-center border-b transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-[14px] border-border-soft" : "border-transparent"
      }`}
    >
      <div className="w-[92%] max-w-[1120px] mx-auto flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-[1.25rem] tracking-[-0.02em] no-underline text-text">
          Sarvesh<span className="text-accent">.</span>
        </a>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="sm:hidden p-2 flex flex-col gap-[5px]"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 bg-text rounded transition-transform duration-300 ${
                open && i === 0 ? "translate-y-[7px] rotate-45" : ""
              } ${open && i === 1 ? "opacity-0" : ""} ${
                open && i === 2 ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          ))}
        </button>

        {/* links */}
        <ul
          className={`list-none gap-1.5 sm:flex ${
            open
              ? "flex flex-col fixed top-[72px] inset-x-0 bg-bg/95 backdrop-blur-[14px] border-b border-border-soft px-[5vw] pt-4 pb-6"
              : "hidden sm:flex"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-[10px] no-underline text-[0.92rem] font-medium transition-colors duration-200 ${
                  active === link.id
                    ? "text-accent bg-accent/[0.08]"
                    : "text-muted hover:text-text hover:bg-white/[0.08]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
