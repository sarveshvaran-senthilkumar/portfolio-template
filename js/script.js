/* Sarveshvaran Senthilkumar — portfolio shared scripts */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- navbar scroll state + progress bar + back-to-top ----------
const nav = document.querySelector(".nav");
const progressBar = document.querySelector(".progress-bar");
const toTop = document.querySelector(".to-top");

const onScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 24);
  if (progressBar) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0";
  }
  if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (toTop) {
  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" })
  );
}

// ---------- mobile menu ----------
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = toggle.classList.toggle("open");
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ---------- scrollspy: highlight nav link for the section in view ----------
const sections = document.querySelectorAll("main section[id], header[id]");
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
if (sections.length && navAnchors.length) {
  const setActive = (id) => {
    // #about lives under Home in the nav
    const target = id === "about" ? "#home" : `#${id}`;
    navAnchors.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === target)
    );
  };
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

// ---------- timeline dot blink for the entry in view ----------
const timelineItems = document.querySelectorAll(".timeline-item");
if (timelineItems.length) {
  const dotObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => e.target.classList.toggle("active", e.isIntersecting));
    },
    { rootMargin: "-25% 0px -45% 0px" }
  );
  timelineItems.forEach((item) => dotObserver.observe(item));
}

// ---------- scroll reveal ----------
if (reducedMotion) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

// ---------- typing effect (hero) ----------
const typedEl = document.querySelector(".typed");
if (typedEl) {
  const roles = [
    "Artificial Intelligence",
    "LLM & RAG",
    "Computer Vision",
    "Machine Learning & Deep Learning",
    "Backend & Streaming System Builder",
  ];
  if (reducedMotion) {
    typedEl.textContent = roles[0];
  } else {
    let roleIdx = 0, charIdx = 0, deleting = false;
    const tick = () => {
      const word = roles[roleIdx];
      charIdx += deleting ? -1 : 1;
      typedEl.textContent = word.slice(0, charIdx);

      let delay = deleting ? 40 : 80;
      if (!deleting && charIdx === word.length) {
        delay = 1800;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 350;
      }
      setTimeout(tick, delay);
    };
    tick();
  }
}

// ---------- animated counters ----------
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      counterObserver.unobserve(e.target);
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      if (reducedMotion) {
        el.textContent = prefix + target + suffix;
        return;
      }
      const dur = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));

// ---------- particle network background ----------
const canvas = document.getElementById("bg-canvas");
if (canvas && !reducedMotion) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;
  const mouse = { x: null, y: null };

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(90, Math.floor((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
    }));
  };
  window.addEventListener("resize", resize);
  resize();

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = mouse.y = null;
  });

  const LINK_DIST = 130;
  const draw = () => {
    ctx.clearRect(0, 0, w, h);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(96, 165, 250, 0.4)";
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DIST) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.11 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      if (mouse.x !== null) {
        const p = particles[i];
        const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dist < 170) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(129, 140, 248, ${0.2 * (1 - dist / 170)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
}

// ---------- 3D tilt on cards ----------
if (!reducedMotion) {
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}
