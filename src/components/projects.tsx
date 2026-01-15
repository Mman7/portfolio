import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemCard } from "./itemcard/item_card";
import { projectsList } from "@/src/data/projects";

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
