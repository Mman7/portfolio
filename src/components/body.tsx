import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import HeroSection from "./hero/hero";
import Projects from "./projects";
import Skill from "./skill";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import VisibilityWrapper from "./itemcard/visibility_wrapper";

export default function Body() {
  return (
    <main className="bg-myPrimaryDark dvh w-full">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <VisibilityWrapper>
          <Projects />
        </VisibilityWrapper>
        <VisibilityWrapper>
          <div className="p-6 text-center">
            <a
              aria-label="Github Profile Link"
              className="duraiton-200 text-lg text-gray-400 transition-all hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mman7"
            >
              <span className="flex items-center justify-center">
                <FontAwesomeIcon
                  className="mr-4 max-h-12 min-h-10 max-w-12 min-w-10 font-black"
                  icon={faGithub}
                />
                <p className="text-xl">
                  More on GitHub:{"  "}
                  <span className="m-0 p-0 underline">
                    https://github.com/Mman7
                  </span>
                </p>
              </span>
            </a>
          </div>
        </VisibilityWrapper>
        <div className="divider"></div>
      </section>
      <section id="skills">
        <VisibilityWrapper>
          <Skill />
        </VisibilityWrapper>
      </section>
      <section id="contact">
        <VisibilityWrapper>
          <Contact />
        </VisibilityWrapper>
      </section>
      <Footer />
    </main>
  );
}
