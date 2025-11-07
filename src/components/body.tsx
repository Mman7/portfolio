import About from "./about";
import Contact from "./contact";
import HeroSection from "./hero";
import Projects from "./projects";
import Skill from "./skill";

export default function Body() {
  return (
    <div className="bg-customBase h-dvh w-full">
      <HeroSection />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </div>
  );
}
