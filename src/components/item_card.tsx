"use client";

import { Code, Link } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function ItemCard({
  title,
  description,
  badges,
  imgSrc,
  siteLink,
  codeLink,
}: ItemCardProps) {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
    rootMargin: "-150px",
  });
  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-slideInFromBottom opacity-100"
      } card group relative w-full overflow-hidden rounded-lg bg-gray-800 opacity-0 shadow-md`}
    >
      <figure className="relative transition-all duration-300 ease-in-out hover:scale-105">
        <a
          aria-label={`${title} Site Link`}
          target="_blank"
          href={siteLink}
          className="hover:text-sky-300"
        >
          <div className="group absolute inset-0 bg-linear-to-b from-50% to-[#1E2939] duration-300 hover:backdrop-brightness-50">
            <Link
              className="m-auto hidden h-full group-hover:block"
              size={30}
            />
          </div>
          <Image src={imgSrc} alt={title} className="object-cover" />
        </a>
      </figure>
      <div className="card-body">
        <div className="flex w-full">
          <a
            aria-label={`${title} Site Link`}
            target="_blank"
            href={siteLink}
            className="hover:text-sky-300"
          >
            <h2 className="card-title">
              {title}
              <Link size={16} />
            </h2>
          </a>
          <a
            aria-label={`${title} Code Link`}
            target="_blank"
            className="ml-auto hover:text-sky-300"
            href={codeLink}
          >
            <Code />
          </a>
        </div>
        <p>{description}</p>
        <div className="card-actions mt-4">
          {badges.map((text) => (
            <div
              key={text}
              className="badge badge-secondary font-medium text-white"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
