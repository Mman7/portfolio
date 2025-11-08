import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code, Link } from "lucide-react";
import notelyPic from "../assets/showcase/notely.png";
import tomatoCountPic from "../assets/showcase/tomato_count.png";
import pokedexPic from "../assets/showcase/pokedex.png";

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
    <div className="my-14 scroll-mt-24 p-6 px-16">
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
  return (
    <div className="card w-full bg-gray-800 shadow-sm">
      <figure>
        <img src={imgSrc} alt="Shoes" draggable={false} />
      </figure>
      <div className="card-body">
        <div className="flex w-full">
          <a target="_blank" href={siteLink} className="hover:text-sky-300">
            <h2 className="card-title">
              {title}
              <Link size={16} />
            </h2>
          </a>
          <a
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
    badges: ["Flutter", "Dart", "MaterialUI", "AES256"],
    imgSrc: notelyPic,
    siteLink: "https://github.com/Mman7/Notely/releases",
    codeLink: "https://github.com/Mman7/Notely",
  },
  {
    title: "PokeDex",
    description:
      "Pokémon Index is a web app that lets users browse, search, and explore detailed information about Pokémon in a clean and responsive interface.",
    badges: ["React", "TailwindCSS", "ReactQuery", "ReactRouter"],
    imgSrc: pokedexPic,
    siteLink: "https://pokedex-db.netlify.app/",
    codeLink: "https://github.com/Mman7/pokemon_index",
  },
];
