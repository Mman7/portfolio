import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@/public/avatar.png";
import MobileAvatar from "@/public/mobile_avatar.png";
import Image from "next/image";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import CallToAction from "./call_to_action";

export default function HeroSection() {
  return (
    <div className="bg-pattern overflow: auto z-100 flex h-1/2 scroll-mt-24 flex-col items-center justify-end md:h-[calc(100vh-10rem)]">
      <Image
        src={MobileAvatar}
        alt="avatar"
        loading="eager"
        draggable={false}
        className="z-10 mt-30 mb-20 p-6 brightness-80 select-none md:hidden"
      />
      <Image
        src={Avatar}
        alt="avatar"
        loading="eager"
        draggable={false}
        // height={800}
        className="z-10 hidden brightness-75 h-[calc(100%)] w-auto select-none md:block"
      />

      <CallToAction />

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
    </div>
  );
}

export function SideContact() {
  return (
    <>
      <a
        aria-label="LinkedIn Hello"
        href="https://www.linkedin.com/in/man-eric-2aa13b159/"
        target="_blank"
        className="hover:text-white"
        title="https://www.linkedin.com/in/man-eric-2aa13b159/"
      >
        <FontAwesomeIcon size="2xl" icon={faSquareLinkedin} />
      </a>
      <a
        aria-label="Github Hello"
        href="https://github.com/Mman7"
        target="_blank"
        title="https://github.com/Mman7"
        className="hover:text-white"
      >
        <FontAwesomeIcon size="2xl" icon={faGithub} />
      </a>
      <a
        aria-label="Gmail Hello"
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
