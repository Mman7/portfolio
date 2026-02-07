import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import HeroSection from "./hero/hero";
import Projects from "./projects";
import Skill from "./skill";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <div className="p-6 text-center">
          <a
            aria-label="Github Profile Link"
            className="duraiton-200 text-lg text-gray-400 transition-all hover:text-white"
            target="_blank"
            href="https://github.com/Mman7"
          >
            <span className="flex items-center justify-center">
              <FontAwesomeIcon
                className="mr-4 size-8 font-black"
                icon={faGithub}
              />
              <p className="text-xl">
                More on GitHub:{"  "}
                <span className="underline">https://github.com/Mman7</span>
              </p>
            </span>
          </a>
        </div>
        <div className="divider"></div>
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
