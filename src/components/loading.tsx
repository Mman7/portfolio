"use client";

import { JSX, useEffect, useState } from "react";

export default function PageLoader(): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", () => setLoaded(true));
    }
  }, []);

  return (
    <div
      className={`bg-base-200 fixed inset-0 z-9999 flex justify-center opacity-100 transition-opacity duration-1000 ${
        loaded ? "pointer-events-none opacity-0!" : "opacity-100"
      }`}
    >
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  );
}
