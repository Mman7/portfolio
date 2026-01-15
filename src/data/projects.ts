import notelyPic from "@/public/showcase/notely.png";
import tomatoCountPic from "@/public/showcase/tomato_count.png";
import pokedexPic from "@/public/showcase/pokedex.png";
import ericmanDev from "@/public/showcase/ericman.dev.png";

export const projectsList: ItemCardProps[] = [
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
