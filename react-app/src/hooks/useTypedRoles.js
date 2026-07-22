import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Typewriter effect cycling through `roles`.
 * With reduced motion, shows the first role statically.
 */
export function useTypedRoles(roles) {
  const reduced = useReducedMotion();
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduced) {
      setText(roles[0]);
      return;
    }

    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = roles[roleIdx];
      charIdx += deleting ? -1 : 1;
      setText(word.slice(0, charIdx));

      let delay = deleting ? 40 : 80;
      if (!deleting && charIdx === word.length) {
        delay = 1800;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    tick();

    return () => clearTimeout(timer);
  }, [roles, reduced]);

  return text;
}
