import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code, Link } from "lucide-react";

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
    imgSrc:
      "https://private-user-images.githubusercontent.com/70054123/493440608-40e80dd5-d262-45bb-8116-57cc53da316c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI1Mzg0OTEsIm5iZiI6MTc2MjUzODE5MSwicGF0aCI6Ii83MDA1NDEyMy80OTM0NDA2MDgtNDBlODBkZDUtZDI2Mi00NWJiLTgxMTYtNTdjYzUzZGEzMTZjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTA3VDE3NTYzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIxNmUwMzk2YjMyY2FlYjYxZmRkZWE2ZGM1MDgyNDc5OGViZTI2M2ZiNjJmNzczODNkMWJmNzU5NTMwMTIwMjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.OpmnjF6huqS1qMLQ1Pp9oTYBni1D2O5JXKuEyPRl-0s",
    siteLink: "https://github.com/Mman7/tomato_clock/releases",
    codeLink: "https://github.com/Mman7/tomato_clock",
  },
  {
    title: "Notely",
    description:
      "Notely is Note App built for local synchronization of data, the project doesn't require a remote server or any middle server",
    badges: ["Flutter", "Dart", "MaterialUI", "AES256"],
    imgSrc:
      "https://private-user-images.githubusercontent.com/70054123/495702591-3cc51485-fc7e-4356-b1cc-2395197d49ca.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI1Mzg1NjEsIm5iZiI6MTc2MjUzODI2MSwicGF0aCI6Ii83MDA1NDEyMy80OTU3MDI1OTEtM2NjNTE0ODUtZmM3ZS00MzU2LWIxY2MtMjM5NTE5N2Q0OWNhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTA3VDE3NTc0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM0OTU2ZWQ4ZGNmZjNkMjQ5MGFhY2QzMDljOTdhOGI0ODE0NDdjZDIxYTg3NTFkNjViZTY1MmJjMGJhMzQ2NWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Lsqo63Tdxo5YKpuk-vM3pbkR_EOz-zT_L-MB9SVCI9k",
    siteLink: "https://github.com/Mman7/Notely/releases",
    codeLink: "https://github.com/Mman7/Notely",
  },
  {
    title: "PokeDex",
    description:
      "Pokémon Index is a web app that lets users browse, search, and explore detailed information about Pokémon in a clean and responsive interface.",
    badges: ["React", "TailwindCSS", "ReactQuery", "ReactRouter"],
    imgSrc:
      "https://private-user-images.githubusercontent.com/70054123/511444965-ab9ed431-5878-49cb-89d8-2a10bbe54496.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI1MzgyOTYsIm5iZiI6MTc2MjUzNzk5NiwicGF0aCI6Ii83MDA1NDEyMy81MTE0NDQ5NjUtYWI5ZWQ0MzEtNTg3OC00OWNiLTg5ZDgtMmExMGJiZTU0NDk2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTA3VDE3NTMxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwZjdhZGU1ZTM2N2I0NTRiOWE5NzMxMGJhYmE4NzMwZmZmNWEzYzJlODRlZmY5NTcxNjAwMWE2NmI0ODQwMDUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.7tK59xMT2OVa86nZkHuEFFbxKiGyQ-66_lJhur49-bM",
    siteLink: "https://pokedex-db.netlify.app/",
    codeLink: "https://github.com/Mman7/pokemon_index",
  },
];
