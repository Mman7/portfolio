import {
  faCss,
  faDartLang,
  faFlutter,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faSquareFigma,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { useInView } from "react-intersection-observer";
import {
  reactRouterIcon,
  tailwindCSSicon,
  typescriptIcon,
  visualStudioCodeIcon,
} from "./icons";

const fontAwesomeIconSize = "2x";
const svgIconStyle = "size-8 text-white mr-1";
const textStyle = "text-lg md:text-2xl font-medium ";

interface Item {
  title: string;
  shortName?: string;
  icon: React.ReactNode;
}

const items: Item[] = [
  {
    title: "HTML",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faHtml5} />,
  },
  {
    title: "CSS",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faCss} />,
  },
  {
    title: "TailwindCSS",
    shortName: "TWCSS",
    icon: tailwindCSSicon(svgIconStyle),
  },
  {
    title: "Javascript",
    shortName: "JS",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faJs} />,
  },
  {
    title: "React",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faReact} />,
  },
  {
    title: "Typescript",
    shortName: "TS",
    icon: typescriptIcon(svgIconStyle),
  },
  {
    title: "React Router",
    shortName: "RR7",
    icon: reactRouterIcon(svgIconStyle),
  },
  {
    title: "NodeJS",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faNodeJs} />,
  },
  {
    title: "Dart",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faDartLang} />,
  },
  {
    title: "Flutter",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faFlutter} />,
  },
  {
    title: "Sass",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faSass} />,
  },
  {
    title: "Git",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faGitAlt} />,
  },
  {
    title: "Github",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faSquareGithub} />,
  },
  {
    title: "Figma",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faSquareFigma} />,
  },
  {
    title: "NPM",
    icon: <FontAwesomeIcon size={fontAwesomeIconSize} icon={faNpm} />,
  },
  {
    title: "VSC",
    icon: visualStudioCodeIcon(svgIconStyle),
  },
];

export default function Skill() {
  return (
    <div className="my-14 scroll-mt-24 px-4">
      <h1 className="mb-10 text-center text-3xl font-medium">Skills</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <SkillItem title={item.title} key={item.title}>
            {item.icon}
            <h1
              className={`${textStyle} ${item.shortName && "hidden"} sm:block`}
            >
              {item.title}
            </h1>
            {item.shortName && (
              <h1 className={`${textStyle} sm:hidden`}>{item.shortName}</h1>
            )}
          </SkillItem>
        ))}
      </div>
    </div>
  );
}

export function SkillItem({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
    rootMargin: "-50px",
  });
  return (
    <div
      title={title}
      ref={ref}
      className={`${inView && "animate-slideInFromBottom opacity-100"} bg-mySecondary grid justify-items-center rounded-md p-3 opacity-0 duration-300 hover:brightness-125`}
    >
      <div className="flex items-center justify-between gap-1 text-white">
        {children}
      </div>
    </div>
  );
}
