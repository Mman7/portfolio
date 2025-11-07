import About from "./about";
import Contact from "./contact";
import HeroSection from "./hero";
import Projects from "./projects";
import Skill from "./skill";
import { Element } from "react-scroll";

export default function Body() {
  return (
    <div className="bg-customBase h-dvh w-full">
      <Element
        name="hero"
        className="bg-pattern overflow: auto z-100 flex h-1/2 scroll-mt-24 flex-col items-center justify-end md:h-[calc(100vh-10rem)]"
      >
        <HeroSection />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skill />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}
