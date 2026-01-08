import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code, Link } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import notelyPic from "@/public/showcase/notely.png";
import tomatoCountPic from "@/public/showcase/tomato_count.png";
import pokedexPic from "@/public/showcase/pokedex.png";
import ericmanDev from "@/public/showcase/ericman.dev.png";
import { useInView } from "react-intersection-observer";
import { ItemCard } from "./itemcard/item_card";

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
    badges: ["React", "NextJS", "TailwindCSS", "TypeScript"],
    imgSrc: ericmanDev,
    siteLink: "https://www.ericman.dev",
    codeLink: "https://github.com/Mman7/portfolio",
  },
];
