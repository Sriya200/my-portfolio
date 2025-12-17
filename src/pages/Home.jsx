import Hero from "../components/Hero/Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <section className="snap-section" id="hero">
        <Hero />
      </section>

      <section className="snap-section" id="about">
        <About />
      </section>

      <section className="snap-section" id="education">
        <Education />
      </section>

      <section className="snap-section" id="skills">
        <Skills />
      </section>

      <section className="snap-section" id="projects">
        <Projects />
      </section>

      <section className="snap-section" id="contact">
        <Contact />
      </section>
    </>
  );
}
