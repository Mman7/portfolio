import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-8">
        <aside className="flex grid-flow-col flex-col items-center">
          <p>
            © {new Date().getFullYear()} Eric Man. All rights reserved.
            <br />
            Built with React + Tailwinds + a lots of coffee ☕.
          </p>
        </aside>
        <h1>Thanks for visiting!</h1>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/man-eric-2aa13b159/"
            target="_blank"
            className="hover:text-white"
            title="https://www.linkedin.com/in/man-eric-2aa13b159/"
          >
            <FontAwesomeIcon size="2xl" icon={faSquareLinkedin} />
          </a>
          <a
            href="https://github.com/Mman7"
            target="_blank"
            title="https://github.com/Mman7"
            className="hover:text-white"
          >
            <FontAwesomeIcon size="2xl" icon={faGithub} />
          </a>
          <a
            title="youzai0427@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=youzai0427@gmail.com"
            className="hover:text-white"
          >
            <FontAwesomeIcon size="2xl" icon={faEnvelope} />
          </a>
        </nav>
      </footer>
    </>
  );
}
