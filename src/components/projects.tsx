import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  return (
    <div className="my-14 p-6 px-16">
      <h1 className="mb-10 text-center text-2xl font-medium">Projects</h1>
      <div className="grid grid-cols-1 justify-items-center gap-15 md:grid-cols-2">
        <ItemCard
          title={"Hello world"}
          description={"this is a description"}
          badges={["ReactJS", "TailwindCSS"]}
        />
        <ItemCard
          title={"Hello world"}
          description={"this is a description"}
          badges={["ReactJS", "TailwindCSS"]}
        />
        <ItemCard
          title={"Hello world"}
          description={"this is a description"}
          badges={["ReactJS", "TailwindCSS"]}
        />
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

interface ItemCardProps {
  title: string;
  description: string;
  badges: string[];
}

export function ItemCard({ title, description, badges }: ItemCardProps) {
  return (
    <div className="card w-full bg-gray-800 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions mt-4">
          {badges.map((text) => (
            <div key={text} className="badge badge-neutral">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
