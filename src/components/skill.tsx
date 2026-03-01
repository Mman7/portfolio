import {
  faCss,
  faDartLang,
  faFlutter,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faSquareFigma,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import {
  nextjsicon,
  reactRouterIcon,
  tailwindCSSicon,
  typescriptIcon,
  visualStudioCodeIcon,
} from "./icons";
import VisibilityWrapper from "./itemcard/visibility_wrapper";

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
    icon: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    title: "CSS",
    icon: <FontAwesomeIcon icon={faCss} />,
  },
  {
    title: "TailwindCSS",
    shortName: "TWCSS",
    icon: tailwindCSSicon(svgIconStyle),
  },
  {
    title: "Javascript",
    shortName: "JS",
    icon: <FontAwesomeIcon icon={faJs} />,
  },
  {
    title: "React",
    icon: <FontAwesomeIcon icon={faReact} />,
  },
  {
    title: "Typescript",
    shortName: "TS",
    icon: typescriptIcon(svgIconStyle),
  },
  {
    title: "NextJS",
    icon: nextjsicon(svgIconStyle),
  },
  {
    title: "React Router",
    shortName: "RR7",
    icon: reactRouterIcon(svgIconStyle),
  },
  {
    title: "NodeJS",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
  },
  {
    title: "Dart",
    icon: <FontAwesomeIcon icon={faDartLang} />,
  },
  {
    title: "Flutter",
    icon: <FontAwesomeIcon icon={faFlutter} />,
  },
  {
    title: "Sass",
    icon: <FontAwesomeIcon icon={faSass} />,
  },
  {
    title: "Git",
    icon: <FontAwesomeIcon icon={faGitAlt} />,
  },
  {
    title: "Github",
    icon: <FontAwesomeIcon icon={faSquareGithub} />,
  },
  {
    title: "Figma",
    icon: <FontAwesomeIcon icon={faSquareFigma} />,
  },
  {
    title: "VSC",
    icon: visualStudioCodeIcon(svgIconStyle),
  },
];

export default function Skill() {
  return (
    <div className="m-auto my-14 scroll-mt-24 px-4 lg:px-38">
      <h1 className="mb-10 text-center text-3xl font-medium">Skills</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <SkillItem key={item.title}>
            <div className="-mt-1 mr-3 size-7">{item.icon}</div>
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

export function SkillItem({ children }: { children: React.ReactNode }) {
  // return <>{children}</>;
  return (
    <VisibilityWrapper className="bg-mySecondary grid justify-items-center rounded-md p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20">
      <div className="flex items-center text-white">{children}</div>
    </VisibilityWrapper>
  );
}
