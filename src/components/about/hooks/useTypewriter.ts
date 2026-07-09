"use client";

import { useEffect, useState } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
}

const useTypewriter = ({
  text,
  speed = 15,
}: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    setDisplayedText("");

    const interval = setInterval(() => {
      index++;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

export default useTypewriter;