"use client";

import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="fixed z-1000 w-full p-3">
      <div className="navbar rounded-xl bg-black/40 p-3 px-4 backdrop-blur-2xl">
        <div className="flex-1">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            aria-label="home"
            className="btn btn-ghost text-xl hover:text-white"
          >
            Eric Man
          </Link>
        </div>
        <div className="hidden flex-1 justify-between space-x-3 px-4 sm:flex">
          <Link to="about" smooth={true} duration={500}>
            <Button>About</Button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <Button>Projects</Button>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <Button>Skills</Button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <Button>Contact</Button>
          </Link>
        </div>
        <DropDownMenu />
      </div>
    </div>
  );
}

function Button({ children }: { children: string }) {
  return (
    <span className="rounded-sm border border-gray-300 px-6 py-1 text-base text-gray-300 duration-300 hover:cursor-pointer hover:bg-white hover:text-black md:text-lg">
      {children}
    </span>
  );
}

function DropDownMenu() {
  return (
    <div className="dropdown dropdown-end sm:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <Link to="about" smooth={true} duration={500} offset={-100}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-100}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-100}>
            Contact
          </Link>
        </li>
        <li className="block lg:hidden">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            title="Download CV"
          >
            Download CV
          </a>
        </li>
      </ul>
    </div>
  );
}
