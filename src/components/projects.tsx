import { ItemCard } from "./itemcard/item_card";
import { projectsList } from "@/src/data/projects";

export default function Projects() {
  return (
    <div className="m-auto my-14 p-6 lg:px-38">
      <h1 className="mb-4 text-center text-3xl font-medium">Projects</h1>
      <p className="mx-auto mb-10 max-w-3xl text-center text-gray-400">
        Selected work that highlights my approach to problem-solving, responsive
        UI engineering, and product-focused implementation.
      </p>
      <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
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
    </div>
  );
}
