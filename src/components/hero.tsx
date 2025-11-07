import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../assets/avatar.png";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function HeroSection() {
  return (
    <>
      <div className="bg-pattern z-100 flex h-[calc(100vh-10rem)] flex-col items-center justify-end">
        <img
          src={Avatar}
          alt="avatar"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="z-10 h-[calc(100%)] brightness-80 select-none"
        />
        <div className="absolute z-100 py-16">
          <button className="btn btn-lg mx-4 rounded border border-sky-500 bg-white/10 backdrop-blur-sm duration-200 hover:scale-105 hover:bg-white/20">
            View Projects
          </button>
          <button className="btn btn-lg mx-4 rounded border border-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20">
            Get My Resume
          </button>
        </div>
        <SideContact />
      </div>
      {/* TODO custom font for background up and down spacing  */}
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-start text-[16rem] font-black tracking-tighter text-gray-600 opacity-55">
          FRONTEND
        </h1>
        <h1 className="text-end text-[16rem] font-black tracking-tighter text-gray-600 opacity-55">
          DEVELOPER
        </h1>
      </div>
    </>
  );
}

export function SideContact({ className }: { className?: string }) {
  return (
    <div
      className={`absolute top-1/3 right-0 z-200 flex flex-col justify-between gap-10 rounded-xl bg-black/40 p-3 ${className}`}
    >
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <FontAwesomeIcon size="2xl" icon={faSquareLinkedin} />
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <FontAwesomeIcon size="2xl" icon={faGithub} />
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        <FontAwesomeIcon size="2xl" icon={faEnvelope} />
      </a>
    </div>
  );
}
