import { ItemCard } from "./itemcard/item_card";
import { projectsList } from "@/src/data/projects";

export default function Projects() {
  return (
    <div className="m-auto my-14 p-6 lg:px-38">
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
    </div>
  );
}
