"use client";

import { JSX, useEffect, useState } from "react";

const LOADER_HIDDEN_EVENT = "page-loader-hidden";
const LOADER_FADE_DURATION_MS = 1000;

export default function PageLoader(): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const onLoad = () => setLoaded(true);

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const timeoutId = window.setTimeout(() => {
      window.dispatchEvent(new Event(LOADER_HIDDEN_EVENT));
    }, LOADER_FADE_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [loaded]);

  return (
    <div
      className={`bg-base-200 fixed inset-0 z-9999 flex justify-center opacity-100 transition-opacity duration-1000 ${
        loaded ? "pointer-events-none opacity-0!" : "opacity-100"
      }`}
    >
      <div className="m-auto flex flex-col items-center gap-5 text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
          Hey I'm Eric Man
        </h1>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </div>
  );
}
