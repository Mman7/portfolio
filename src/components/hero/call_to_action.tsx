"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
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
      <ScrollLink to="projects" smooth={true} duration={500} offset={-100}>
        <button
          aria-label="View Projects"
          className="btn btn-md lg:btn-lg mx-4 rounded border border-sky-500 bg-white/10 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-white/20"
        >
          View Projects
        </button>
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
        <button
          aria-label="Contact Me"
          className="btn btn-md lg:btn-lg mx-4 rounded border border-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-white/20"
        >
          Contact Me
        </button>
      </ScrollLink>
    </div>
  );
}
