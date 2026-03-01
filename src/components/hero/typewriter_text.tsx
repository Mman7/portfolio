"use client";

import { useMemo } from "react";
import { TypeAnimation } from "react-type-animation";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

const TYPE_DELAY_MS = 70;
const HOLD_DELAY_MS = 1300;

export default function TypewriterText({
  words,
  className,
}: TypewriterTextProps) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const sequence = useMemo(
    () => safeWords.flatMap((word) => [word, HOLD_DELAY_MS]),
    [safeWords],
  );

  if (sequence.length === 0) {
    return <p className={className} />;
  }

  return (
    <p className={className}>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={TYPE_DELAY_MS}
        repeat={Infinity}
        cursor={false}
        className="text-gray-300"
      />
      <span className="ml-1 inline-block animate-pulse">|</span>
    </p>
  );
}
