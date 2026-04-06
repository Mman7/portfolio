"use client";
import { Link } from "react-scroll";

import TypewriterText from "./typewriter_text";

export default function CallToAction() {
  return (
    <div className="absolute z-100 py-16 text-center">
      <TypewriterText
        words={[
          "I build fast, accessible web apps.",
          "React + Next.js + TypeScript focus.",
          "Clean UI, smooth UX, strong performance.",
        ]}
        className="mb-4 text-base text-gray-200 md:text-xl"
      />
      <Link
        to="projects"
        smooth={true}
        duration={500}
        aria-label="View Projects"
        className="btn btn-md lg:btn-lg mx-4 rounded border border-sky-500 bg-white/10 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-white/20"
      >
        View Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        href="#contact"
        aria-label="Contact Me"
        className="btn btn-md lg:btn-lg mx-4 rounded border border-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-white/20"
      >
        Contact Me
      </Link>
    </div>
  );
}
