"use client";

import { useEffect, useState } from "react";

const LOADER_HIDDEN_EVENT = "page-loader-hidden";
const LOADER_FALLBACK_DELAY_MS = 600;

const WORD_BASE_CLASSES = "block transform-gpu transition-all";
const WORD_LEFT_OFFSET_CLASSES = "-ml-[clamp(1.5rem,9vmin,9rem)]";
const WORD_RIGHT_OFFSET_CLASSES = "ml-[clamp(1.5rem,9vmin,9rem)]";
const WORD_VISIBLE_CLASSES = "translate-x-0 opacity-100";
const WORD_HIDDEN_LEFT_CLASSES =
  "-translate-x-[clamp(1.25rem,5vmin,4.5rem)] opacity-0";
const WORD_HIDDEN_RIGHT_CLASSES =
  "translate-x-[clamp(1.25rem,5vmin,4.5rem)] opacity-0";

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
    <div className="absolute inset-0 z-0 hidden flex-col items-center justify-center overflow-hidden text-5xl font-bold text-gray-300 select-none md:flex md:translate-y-[clamp(0.5rem,10.5vh,1.25rem)]">
      <div className="font-display text-center leading-[0.75] font-black tracking-tighter text-transparent opacity-70 [-webkit-text-stroke:1.5px_rgba(107,114,128,0.9)] md:text-[clamp(4.75rem,14vmin,9rem)] lg:text-[clamp(8.5rem,14vmin,15rem)] xl:text-[clamp(11rem,12vmin,18.5rem)] 2xl:text-[clamp(13rem,12.5vmin,22rem)]">
        <span
          className={`${WORD_LEFT_OFFSET_CLASSES} ${WORD_BASE_CLASSES} delay-150 duration-700 ${
            isLoaded ? WORD_VISIBLE_CLASSES : WORD_HIDDEN_LEFT_CLASSES
          }`}
        >
          FRONTEND
        </span>
        <span
          className={`${WORD_RIGHT_OFFSET_CLASSES} ${WORD_BASE_CLASSES} delay-150 duration-700 ${
            isLoaded ? WORD_VISIBLE_CLASSES : WORD_HIDDEN_RIGHT_CLASSES
          }`}
        >
          DEVELOPER
        </span>
      </div>
    </div>
  );
}
