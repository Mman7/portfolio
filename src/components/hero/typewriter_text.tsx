"use client";

import { useEffect, useMemo, useState } from "react";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

const TYPE_DELAY_MS = 90;
const DELETE_DELAY_MS = 45;
const HOLD_DELAY_MS = 1200;

export default function TypewriterText({
  words,
  className,
}: TypewriterTextProps) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeWord = safeWords[wordIndex] ?? "";

  useEffect(() => {
    if (safeWords.length === 0) return;

    if (!isDeleting && charIndex === activeWord.length) {
      const holdTimeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, HOLD_DELAY_MS);

      return () => window.clearTimeout(holdTimeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % safeWords.length);
      return;
    }

    const stepTimeout = window.setTimeout(
      () => setCharIndex((prev) => prev + (isDeleting ? -1 : 1)),
      isDeleting ? DELETE_DELAY_MS : TYPE_DELAY_MS,
    );

    return () => window.clearTimeout(stepTimeout);
  }, [activeWord, charIndex, isDeleting, safeWords, safeWords.length]);

  return (
    <p className={className}>
      <span className="text-gray-300">{activeWord.slice(0, charIndex)}</span>
      <span className="ml-1 inline-block animate-pulse">|</span>
    </p>
  );
}
