import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@/public/avatar.png";
import MobileAvatar from "@/public/mobile_avatar.png";
import Image from "next/image";
import {
  faGithub,
  faSquareLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import CallToAction from "./call_to_action";
import BackgroundText from "./background_text";

export default function HeroSection() {
  return (
    <div className="bg-pattern overflow:auto relative z-100 flex h-1/2 scroll-mt-24 flex-col items-center justify-end md:h-[calc(100vh-10rem)]">
      <Image
        src={MobileAvatar}
        alt="avatar"
        loading="eager"
        draggable={false}
        className="z-1 mt-30 mb-20 p-6 brightness-80 select-none md:hidden"
      />
      <Image
        src={Avatar}
        alt="avatar"
        loading="eager"
        draggable={false}
        // height={800}
        className="z-1 hidden h-[calc(100%)] w-auto brightness-75 select-none md:block"
      />

      <CallToAction />

      <div
        className={`absolute top-1/2 right-0 z-1 hidden -translate-y-1/2 flex-col justify-between gap-6 rounded-xl bg-black/40 p-3 *:duration-300 md:flex`}
      >
        <SideContact />
      </div>
      <BackgroundText />
    </div>
  );
}

export function SideContact() {
  return (
    <>
      <a
        href="https://wa.me/601120568009"
        aria-label="WhatsApp Profile"
        className="hover:text-white"
        title="https://wa.me/601120568009"
        target="_blank"
      >
        <FontAwesomeIcon className="size-8" icon={faWhatsapp} />
      </a>
      <a
        aria-label="LinkedIn Profile"
        href="https://www.linkedin.com/in/man-eric-2aa13b159/"
        target="_blank"
        className="hover:text-white"
        title="https://www.linkedin.com/in/man-eric-2aa13b159/"
      >
        <FontAwesomeIcon className="size-8" icon={faSquareLinkedin} />
      </a>
      <a
        aria-label="Github Profile"
        href="https://github.com/Mman7"
        target="_blank"
        title="https://github.com/Mman7"
        className="hover:text-white"
      >
        <FontAwesomeIcon className="size-8" icon={faGithub} />
      </a>
      <a
        aria-label="Gmail Address"
        title="youzai0427@gmail.com"
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=youzai0427@gmail.com"
        className="hover:text-white"
      >
        <FontAwesomeIcon className="size-8" icon={faEnvelope} />
      </a>
      <a
        href="/cv.pdf"
        target="_blank"
        className="hover:text-white"
        title="Download CV"
      >
        <FontAwesomeIcon className="size-8" icon={faFilePdf} />
      </a>
    </>
  );
}
