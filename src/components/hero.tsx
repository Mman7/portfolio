import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../assets/avatar.png";
import MobileAvatar from "../assets/mobile_avatar.png";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <>
      <img
        src={MobileAvatar}
        alt="avatar"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="z-10 mt-30 mb-20 h-72 brightness-80 select-none md:hidden"
      />
      <img
        src={Avatar}
        alt="avatar"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="z-10 hidden h-[calc(100%)] brightness-75 select-none md:block"
      />

      <div className="absolute z-100 py-16">
        <Link to="projects" duration={500} smooth={true} offset={-100}>
          <button
            aria-label="View Projects"
            className="btn btn-md sm:btn-lg mx-4 rounded border border-sky-500 bg-white/10 backdrop-blur-sm duration-200 hover:scale-105 hover:bg-white/20"
          >
            View Projects
          </button>
        </Link>
        <Link to="contact" duration={500} smooth={true} offset={-100}>
          <button
            aria-label="Contact Me"
            className="btn btn-md sm:btn-lg mx-4 rounded border border-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20"
          >
            Contact me
          </button>
        </Link>
      </div>
      <div
        className={`absolute top-1/8 right-0 z-200 hidden flex-col justify-between gap-10 rounded-xl bg-black/40 p-3 *:duration-300 md:top-1/3 md:flex`}
      >
        <SideContact />
      </div>
      {/* Background TEXT */}
      <div className="absolute inset-0 z-0 hidden flex-col items-center justify-center overflow-hidden text-5xl font-bold text-gray-300 select-none md:flex">
        <h1 className="font-display mr-35 text-center text-base/47 text-[calc(12rem+2vw)] font-black tracking-tighter text-gray-600 opacity-55">
          FRONTEND
        </h1>
        <h1 className="font-display ml-35 text-center text-base/47 text-[calc(12rem+2vw)] font-black tracking-tighter text-gray-600 opacity-55">
          DEVELOPER
        </h1>
      </div>
    </>
  );
}

export function SideContact() {
  return (
    <>
      <a
        aria-label="LinkedIn Link"
        href="https://www.linkedin.com/in/man-eric-2aa13b159/"
        target="_blank"
        className="hover:text-white"
        title="https://www.linkedin.com/in/man-eric-2aa13b159/"
      >
        <FontAwesomeIcon size="2xl" icon={faSquareLinkedin} />
      </a>
      <a
        aria-label="Github Link"
        href="https://github.com/Mman7"
        target="_blank"
        title="https://github.com/Mman7"
        className="hover:text-white"
      >
        <FontAwesomeIcon size="2xl" icon={faGithub} />
      </a>
      <a
        aria-label="Gmail Link"
        title="youzai0427@gmail.com"
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=youzai0427@gmail.com"
        className="hover:text-white"
      >
        <FontAwesomeIcon size="2xl" icon={faEnvelope} />
      </a>
    </>
  );
}
