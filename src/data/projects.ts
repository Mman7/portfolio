import tomatoCountPic from "@/public/showcase/tomato_count.png";
import pokedexPic from "@/public/showcase/pokedex.png";
import jklmShowcase from "@/public/showcase/jklm_showcase.jpg";
import quizapp from "@/public/showcase/quiz_app.png";

export const projectsList: ItemCardProps[] = [
  {
    title: "Tomato Clock",
    description:
      "A focused Pomodoro timer app designed to help users stay productive with structured work and break sessions in a minimal, distraction-free interface.",
    badges: ["Flutter", "Dart", "MaterialUI"],
    imgSrc: tomatoCountPic,
    siteLink: "https://github.com/Mman7/tomato_clock/releases",
    codeLink: "https://github.com/Mman7/tomato_clock",
  },
  {
    title: "Quiz This",
    description:
      "A quiz platform for developers to practice core programming topics with multiple difficulty levels, instant feedback, and smooth navigation.",
    badges: ["React", "NextJS", "TailwindCSS", "TypeScript", "Zustand"],
    imgSrc: quizapp,
    siteLink: "https://quiz-this.netlify.app/",
    codeLink: "https://github.com/Mman7/programmer-quiz",
  },
  {
    title: "PokeDex",
    description:
      "A responsive Pokédex web app that enables fast search, browsing, and detail exploration with a clean UI and API-driven data flow.",
    badges: ["React", "TypeScript", "TailwindCSS", "ReactQuery", "ReactRouter"],
    imgSrc: pokedexPic,
    siteLink: "https://pokedex-db.netlify.app/",
    codeLink: "https://github.com/Mman7/pokemon_index",
  },
  {
    title: "JKLM Game",
    description:
      "A real-time, multiplayer drawing and guessing game inspired by JKLM.fun. Built to replicate interactive gameplay mechanics, live updates, and player matchmaking with a fully responsive interface.",
    badges: [
      "React",
      "TypeScript",
      "NextJS",
      "Redis",
      "Ably",
      "Zustand",
      "TailwindCSS",
    ],
    imgSrc: jklmShowcase,
    siteLink: "https://jklm-custom.netlify.app/",
    codeLink: "https://github.com/Mman7/jklm",
  },
];
