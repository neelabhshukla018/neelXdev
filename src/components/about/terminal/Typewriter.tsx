"use client";

import useTypewriter from "../hooks/useTypewriter";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter = ({
  text,
  speed = 15,
  className = "",
}: TypewriterProps) => {

  const displayedText = useTypewriter({
    text,
    speed,
  });

  return (
    <pre
      className={`
        whitespace-pre-wrap
        break-words
        font-mono
        leading-7
        text-[15px]
        text-[#C9D1D9]
        ${className}
      `}
    >
      {displayedText}
    </pre>
  );
};

export default Typewriter;