"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

export default function VisibilityWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
    rootMargin: "-150px",
  });
  return (
    <div
      ref={ref}
      className={`${inView && "animate-slideInFromBottom opacity-100"} opacity-0 ${className}`}
    >
      {children}
    </div>
  );
}
