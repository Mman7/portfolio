"use client";
import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function CallToAction() {
  return (
    <div className="absolute z-100 py-16">
      <ScrollLink to="projects" smooth={true} duration={500} offset={-100}>
        <button
          aria-label="View Projects"
          className="btn btn-md sm:btn-lg mx-4 rounded border border-sky-500 bg-white/10 backdrop-blur-sm duration-200 hover:scale-105 hover:bg-white/20"
        >
          View Projects
        </button>
      </ScrollLink>
      <a href="/cv.pdf" download>
        <button
          aria-label="Contact Me"
          className="btn btn-md sm:btn-lg mx-4 rounded border border-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20"
        >
          Download CV
        </button>
      </a>
    </div>
  );
}
