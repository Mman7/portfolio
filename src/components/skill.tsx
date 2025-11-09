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
import { useInView } from "react-intersection-observer";

const fontAwesomeIconSize = "2x";
const svgIconSize = "size-10";
const textStyle = "text-lg md:text-2xl font-medium ";

export default function Skill() {
  return (
    <div className="my-14 scroll-mt-24 px-4">
      <h1 className="mb-10 text-center text-3xl font-medium">Skills</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faHtml5} />
          <h1 className={textStyle}>HTML</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faCss} />
          <h1 className={textStyle}>CSS</h1>
        </SkillItem>
        <SkillItem>
          {tailwindCSSicon}
          <h1 className={`${textStyle} hidden sm:block`}>TailwindCSS</h1>
          <h1 className={`${textStyle} sm:hidden`}>TWCSS</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faJs} />
          <h1 className={`${textStyle} hidden sm:block`}>Javascript</h1>
          <h1 className={`${textStyle} sm:hidden`}>JS</h1>
        </SkillItem>
        <SkillItem>
          {typescriptIcon}
          <h1 className={`${textStyle} hidden sm:block`}>Typescript</h1>
          <h1 className={`${textStyle} sm:hidden`}>TS</h1>
        </SkillItem>

        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faReact} />
          <h1 className={textStyle}>React</h1>
        </SkillItem>
        <SkillItem>
          {reactRouterIcon}
          <h1 className={`${textStyle} hidden sm:block`}>ReactRouter</h1>
          <h1 className={`${textStyle} sm:hidden`}>RR7</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faNodeJs} />
          <h1 className={textStyle}>NodeJS</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faDartLang} />
          <h1 className={textStyle}>Dart</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faFlutter} />
          <h1 className={textStyle}>Flutter</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faSass} />
          <h1 className={textStyle}>Sass</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faGitAlt} />
          <h1 className={textStyle}>Git</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faSquareGithub} />
          <h1 className={textStyle}>Github</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faSquareFigma} />
          <h1 className={textStyle}>Figma</h1>
        </SkillItem>
        <SkillItem>
          <FontAwesomeIcon size={fontAwesomeIconSize} icon={faNpm} />
          <h1 className={textStyle}>NPM</h1>
        </SkillItem>
        <SkillItem>
          {visualStudioCodeIcon}
          <h1 className={textStyle}>VSC</h1>
        </SkillItem>
      </div>
    </div>
  );
}

export function SkillItem({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
    rootMargin: "-50px",
  });
  return (
    <div
      ref={ref}
      className={`${inView && "animate-slideInFromBottom opacity-100"} bg-mySecondary grid justify-items-center rounded-md p-3 opacity-0 duration-300 hover:brightness-125`}
    >
      <div className="flex items-center justify-between gap-1 text-white">
        {children}
      </div>
    </div>
  );
}

const typescriptIcon = (
  <svg
    className={`${svgIconSize} mr-3 text-gray-800 dark:text-white`}
    xmlns="http://www.w3.org/2000/svg"
    fill="#1a3d64"
    viewBox="0 0 512 512"
    width="512"
  >
    <rect fill="#ffffff" height="512" rx="50" width="512" />
    <path
      clipRule="evenodd"
      d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
      fill="#1a3d64"
      fillRule="evenodd"
    />
  </svg>
);

const tailwindCSSicon = (
  <svg
    className={`${svgIconSize} text-gray-800 dark:text-white`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
  </svg>
);

const reactRouterIcon = (
  <svg
    className={`${svgIconSize} text-gray-800 dark:text-white`}
    width="200px"
    height="200px"
    viewBox="0 -58 256 256"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path
          d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z"
          fill="#ffffff"
        ></path>
        <path
          d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z"
          fill="#ffffff"
        ></path>
      </g>
    </g>
  </svg>
);

const visualStudioCodeIcon = (
  <svg
    className={`${svgIconSize} mr-3 text-gray-800 dark:text-white`}
    width="200px"
    height="200px"
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <title>visual_studio [#145]</title> <desc>Created with Sketch.</desc>
      <defs> </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-420.000000, -7519.000000)"
          fill="#ffffff"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M373.999488,7368.989 L378.758614,7365.514 L378.760661,7372.491 L373.999488,7368.989 Z M366.382635,7371.095 L366.379563,7366.915 L368.761173,7368.991 L366.382635,7371.095 Z M383.998976,7360.865 L379.233707,7359 L370.915476,7366.911 L365.906517,7363.187 L364.002048,7364.123 L364,7373.888 L365.896278,7374.817 L370.901142,7371.096 L379.238827,7379 L384,7377.142 L383.998976,7360.865 Z"
              id="visual_studio-[#145]"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
