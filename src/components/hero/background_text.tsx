"use client";

import { useEffect, useState } from "react";

const LOADER_HIDDEN_EVENT = "page-loader-hidden";
const LOADER_FALLBACK_DELAY_MS = 600;

export default function BackgroundText() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      requestAnimationFrame(() => setIsLoaded(true));
    };

    window.addEventListener(LOADER_HIDDEN_EVENT, startAnimation, {
      once: true,
    });

    let fallbackTimeoutId: number | undefined;
    if (document.readyState === "complete") {
      fallbackTimeoutId = window.setTimeout(
        startAnimation,
        LOADER_FALLBACK_DELAY_MS,
      );
    } else {
      const onLoad = () => {
        fallbackTimeoutId = window.setTimeout(
          startAnimation,
          LOADER_FALLBACK_DELAY_MS,
        );
      };

      window.addEventListener("load", onLoad, { once: true });
      return () => {
        window.removeEventListener(LOADER_HIDDEN_EVENT, startAnimation);
        window.removeEventListener("load", onLoad);
        if (fallbackTimeoutId !== undefined) {
          window.clearTimeout(fallbackTimeoutId);
        }
      };
    }

    return () => {
      window.removeEventListener(LOADER_HIDDEN_EVENT, startAnimation);
      if (fallbackTimeoutId !== undefined) {
        window.clearTimeout(fallbackTimeoutId);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 hidden flex-col items-center justify-center overflow-hidden text-5xl font-bold text-gray-300 select-none md:flex md:-translate-y-6 lg:translate-y-0">
      <h1 className="font-display text-center leading-[0.75] font-black tracking-tighter text-gray-600 opacity-55 md:text-[clamp(4rem,13vw,7.5rem)] lg:text-[clamp(7rem,11vw,10rem)] xl:text-[calc(10rem+3vw)]">
        <span
          className={`-ml-35 block transform-gpu transition-all duration-700 ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >
          FRONTEND
        </span>
        <span
          className={`ml-35 block transform-gpu transition-all delay-150 duration-700 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
        >
          DEVELOPER
        </span>
      </h1>
    </div>
  );
}
