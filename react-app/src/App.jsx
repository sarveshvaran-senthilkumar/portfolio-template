import { ParticleCanvas } from "./components/background/ParticleCanvas";
import { Blobs } from "./components/background/Blobs";
import { ProgressBar } from "./components/layout/ProgressBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { BackToTop } from "./components/layout/BackToTop";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Research } from "./components/sections/Research";
import { Contact } from "./components/sections/Contact";
import { Closing } from "./components/sections/Closing";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 -top-16 z-[200] px-[18px] py-2.5 gradient-bg text-[#06121a] font-semibold rounded-b-[10px] no-underline transition-all duration-200 focus:top-0"
      >
        Skip to content
      </a>

      <ProgressBar />
      <ParticleCanvas />
      <Blobs />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Contact />
        <Closing />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
