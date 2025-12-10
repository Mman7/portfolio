import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import HeroSection from "./hero/hero";
import Projects from "./projects";
import Skill from "./skill";

export default function Body() {
  return (
    <div className="bg-myPrimaryDark dvh w-full">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
