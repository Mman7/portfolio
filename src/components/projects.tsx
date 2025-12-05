import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code, Link } from "lucide-react";
import notelyPic from "../assets/showcase/notely.png";
import tomatoCountPic from "../assets/showcase/tomato_count.png";
import pokedexPic from "../assets/showcase/pokedex.png";
import ericmanDev from "../assets/showcase/ericman.dev.png";
import { useInView } from "react-intersection-observer";

interface ItemCardProps {
  title: string;
  description: string;
  badges: string[];
  imgSrc: string;
  siteLink: string;
  codeLink: string;
}

export default function Projects() {
  return (
    <div className="my-14 p-6 px-6">
      <h1 className="mb-10 text-center text-2xl font-medium">Projects</h1>
      <div className="grid grid-cols-1 justify-items-center gap-15 md:grid-cols-2">
        {projectsList.map((item, index) => (
          <ItemCard
            key={index}
            title={item.title}
            description={item.description}
            badges={item.badges}
            imgSrc={item.imgSrc}
            siteLink={item.siteLink}
            codeLink={item.codeLink}
          />
        ))}
      </div>
      <div className="mt-20 mb-10 text-center">
        <a
          aria-label="Github Profile Link"
          className="duraiton-200 text-lg text-gray-400 transition-all hover:text-white"
          target="_blank"
          href="https://github.com/Mman7"
        >
          <FontAwesomeIcon size="xl" className="mr-3" icon={faGithub} />
          Explore more of my work on GitHub → [ https://github.com/Mman7 ]
        </a>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export function ItemCard({
  title,
  description,
  badges,
  imgSrc,
  siteLink,
  codeLink,
}: ItemCardProps) {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
    rootMargin: "-150px",
  });
  return (
    <div
      ref={ref}
      className={`${inView && "animate-slideInFromBottom opacity-100"} card group relative w-full overflow-hidden rounded-lg bg-gray-800 opacity-0 shadow-md`}
    >
      <figure className="relative transition-all duration-300 ease-in-out hover:scale-105">
        <a
          aria-label={`${title} Site Link`}
          target="_blank"
          href={siteLink}
          className="hover:text-sky-300"
        >
          <div className="group absolute inset-0 bg-linear-to-b from-50% to-[#1E2939] duration-300 hover:backdrop-brightness-50">
            <Link
              className="m-auto hidden h-full group-hover:block"
              size={30}
            />
          </div>
          <img src={imgSrc} alt="Shoes" draggable={false} />
        </a>
      </figure>
      <div className="card-body">
        <div className="flex w-full">
          <a
            aria-label={`${title} Site Link`}
            target="_blank"
            href={siteLink}
            className="hover:text-sky-300"
          >
            <h2 className="card-title">
              {title}
              <Link size={16} />
            </h2>
          </a>
          <a
            aria-label={`${title} Code Link`}
            target="_blank"
            className="ml-auto hover:text-sky-300"
            href={codeLink}
          >
            <Code />
          </a>
        </div>
        <p>{description}</p>
        <div className="card-actions mt-4">
          {badges.map((text) => (
            <div
              key={text}
              className="badge badge-secondary font-medium text-white"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projectsList: ItemCardProps[] = [
  {
    title: "Tomato Clock",
    description:
      "Tomato Clock is a minimal and elegant Pomodoro timer app. It helps users boost productivity by structuring work in focused intervals interspersed with breaks.",
    badges: ["Flutter", "Dart", "MaterialUI"],
    imgSrc: tomatoCountPic,
    siteLink: "https://github.com/Mman7/tomato_clock/releases",
    codeLink: "https://github.com/Mman7/tomato_clock",
  },
  {
    title: "Notely",
    description:
      "Notely is Note App built for local synchronization of data, the project doesn't require a remote server or any middle server",
    badges: ["Flutter", "Dart", "MaterialUI", "AES256", "UDP", "TCP"],
    imgSrc: notelyPic,
    siteLink: "https://github.com/Mman7/Notely/releases",
    codeLink: "https://github.com/Mman7/Notely",
  },
  {
    title: "PokeDex",
    description:
      "Pokémon Index is a web app that lets users browse, search, and explore detailed information about Pokémon in a clean and responsive interface.",
    badges: ["React", "TypeScript", "TailwindCSS", "ReactQuery", "ReactRouter"],
    imgSrc: pokedexPic,
    siteLink: "https://pokedex-db.netlify.app/",
    codeLink: "https://github.com/Mman7/pokemon_index",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React and TailwindCSS to showcase my projects, skills, and experience in web development.",
    badges: ["React", "TailwindCSS", "TypeScript"],
    imgSrc: ericmanDev,
    siteLink: "www.ericman.dev",
    codeLink: "https://github.com/Mman7/portfolio",
  },
];
