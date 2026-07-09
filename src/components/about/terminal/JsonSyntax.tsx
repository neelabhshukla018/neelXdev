"use client";

interface JsonSyntaxProps {
  content: string;
}

const JsonSyntax = ({ content }: JsonSyntaxProps) => {
  const renderLine = (line: string, index: number) => {
    return (
      <div key={index} className="whitespace-pre-wrap break-words">
        {line.split(/(".*?"|\b\d+\b|true|false|null)/g).map((part, i) => {
          // JSON Keys
          if (/^".*":$/.test(part.trim())) {
            return (
              <span key={i} className="text-[#79C0FF]">
                {part}
              </span>
            );
          }

          // JSON Strings
          if (/^".*"$/.test(part.trim())) {
            return (
              <span key={i} className="text-[#A5D6FF]">
                {part}
              </span>
            );
          }

          // Numbers
          if (/^\d+$/.test(part.trim())) {
            return (
              <span key={i} className="text-[#E3B341]">
                {part}
              </span>
            );
          }

          // Boolean
          if (/^(true|false)$/.test(part.trim())) {
            return (
              <span key={i} className="text-[#FF7B72]">
                {part}
              </span>
            );
          }

          // Null
          if (/^null$/.test(part.trim())) {
            return (
              <span key={i} className="text-[#FF7B72]">
                {part}
              </span>
            );
          }

          return (
            <span key={i} className="text-[#C9D1D9]">
              {part}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <pre className="overflow-x-auto font-mono text-[15px] leading-7">
      {content.split("\n").map(renderLine)}
    </pre>
  );
};

export default JsonSyntax;