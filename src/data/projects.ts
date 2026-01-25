import tomatoCountPic from "@/public/showcase/tomato_count.png";
import pokedexPic from "@/public/showcase/pokedex.png";
import ericmanDev from "@/public/showcase/ericman.dev.png";
import quizapp from "@/public/showcase/quiz_app.png";

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
    title: "Quiz This",
    description:
      "A comprehensive quiz application designed for programmers to test their knowledge across various programming topics and difficulty levels.",
    badges: ["React", "NextJS", "TailwindCSS", "TypeScript", "Zustand"],
    imgSrc: quizapp,
    siteLink: "https://quiz-this.netlify.app/",
    codeLink: "https://github.com/Mman7/programmer-quiz",
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
