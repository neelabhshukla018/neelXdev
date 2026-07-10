// src/components/skills/editor/CodeLines.tsx

"use client";

/**
 * ==========================================================
 * CODE LINES
 * ==========================================================
 * Renders syntax highlighted TypeScript code for the
 * currently selected skill.
 */

import { useMemo } from "react";
import { useEditor } from "../hooks/useEditor";

export default function CodeLines() {
  const { selectedSkill } = useEditor();

  const code = useMemo(() => {
    if (!selectedSkill) return [];

    return [
      {
        type: "comment",
        value: "/**",
      },
      {
        type: "comment",
        value: ` * ${selectedSkill.name}`,
      },
      {
        type: "comment",
        value: " */",
      },
      {
        type: "space",
      },
      {
        type: "keyword",
        value: "export",
      },
      {
        type: "keyword",
        value: "const",
      },
      {
        type: "identifier",
        value: selectedSkill.id,
      },
      {
        type: "operator",
        value: "=",
      },
      {
        type: "brace",
        value: "{",
      },

      {
        type: "property",
        key: "id",
        value: `"${selectedSkill.id}"`,
      },

      {
        type: "property",
        key: "name",
        value: `"${selectedSkill.name}"`,
      },

      {
        type: "property",
        key: "category",
        value: `"${selectedSkill.category}"`,
      },

      {
        type: "property",
        key: "level",
        value: `"${selectedSkill.level}"`,
      },

      {
        type: "property",
        key: "status",
        value: `"${selectedSkill.status}"`,
      },

      {
        type: "property",
        key: "color",
        value: `"${selectedSkill.color}"`,
      },

      {
        type: "property",
        key: "featured",
        value: String(selectedSkill.featured),
      },

      {
        type: "property",
        key: "favorite",
        value: String(selectedSkill.favorite),
      },

      {
        type: "space",
      },

      {
        type: "section",
        value: "experience",
      },

      {
        type: "property2",
        key: "years",
        value: String(
          selectedSkill.experience.years
        ),
      },

      {
        type: "property2",
        key: "months",
        value: String(
          selectedSkill.experience.months
        ),
      },

      {
        type: "property2",
        key: "startedAt",
        value: `"${selectedSkill.experience.startedAt}"`,
      },

      {
        type: "section-end",
      },

      {
        type: "space",
      },

      {
        type: "section",
        value: "metrics",
      },

      {
        type: "property2",
        key: "proficiency",
        value: String(
          selectedSkill.metrics.proficiency
        ),
      },

      {
        type: "property2",
        key: "confidence",
        value: String(
          selectedSkill.metrics.confidence
        ),
      },

      {
        type: "property2",
        key: "experience",
        value: String(
          selectedSkill.metrics.experience
        ),
      },

      {
        type: "property2",
        key: "problemSolving",
        value: String(
          selectedSkill.metrics.problemSolving
        ),
      },

      {
        type: "property2",
        key: "realWorldUsage",
        value: String(
          selectedSkill.metrics.realWorldUsage
        ),
      },

      {
        type: "section-end",
      },

      {
        type: "space",
      },

      {
        type: "array",
        value: "technologies",
      },

      ...selectedSkill.technologies.map((tech) => ({
        type: "array-item",
        value: tech,
      })),

      {
        type: "array-end",
      },

      {
        type: "space",
      },

      {
        type: "array",
        value: "projects",
      },

      ...selectedSkill.projects.map((project) => ({
        type: "project",
        value: project.name,
      })),

      {
        type: "array-end",
      },

      {
        type: "space",
      },

      {
        type: "brace",
        value: "};",
      },
    ];
  }, [selectedSkill]);

  if (!selectedSkill) return null;

  return (
    <div className="px-6 py-5 font-mono text-[14px] leading-7">
      {code.map((line, index) => (
        <CodeLine
          key={index}
          line={line}
        />
      ))}
    </div>
  );
}

/* ==========================================================
   SINGLE LINE
========================================================== */

function CodeLine({
  line,
}: {
  line: any;
}) {
  switch (line.type) {
    case "comment":
      return (
        <div className="text-[#6A9955]">
          {line.value}
        </div>
      );

    case "space":
      return <div className="h-3" />;

    case "keyword":
      return (
        <span className="mr-2 text-[#569CD6]">
          {line.value}
        </span>
      );

    case "identifier":
      return (
        <span className="mr-2 text-[#4FC1FF]">
          {line.value}
        </span>
      );

    case "operator":
      return (
        <span className="mr-2 text-white">
          {line.value}
        </span>
      );

    case "brace":
      return (
        <div className="text-[#DCDCAA]">
          {line.value}
        </div>
      );

    case "property":
      return (
        <div className="ml-6">
          <span className="text-[#9CDCFE]">
            {line.key}
          </span>

          <span className="text-white">
            :{" "}
          </span>

          <span
            className={
              line.value.startsWith('"')
                ? "text-[#CE9178]"
                : "text-[#B5CEA8]"
            }
          >
            {line.value}
          </span>

          <span>,</span>
        </div>
      );

    case "section":
      return (
        <div className="ml-6">
          <span className="text-[#9CDCFE]">
            {line.value}
          </span>

          <span className="text-white">
            :{" "}
          </span>

          <span className="text-[#DCDCAA]">
            {"{"}
          </span>
        </div>
      );

    case "property2":
      return (
        <div className="ml-12">
          <span className="text-[#9CDCFE]">
            {line.key}
          </span>

          <span className="text-white">
            :{" "}
          </span>

          <span
            className={
              line.value.startsWith('"')
                ? "text-[#CE9178]"
                : "text-[#B5CEA8]"
            }
          >
            {line.value}
          </span>

          ,
        </div>
      );

    case "section-end":
      return (
        <div className="ml-6 text-[#DCDCAA]">
          {"},"}
        </div>
      );

    case "array":
      return (
        <div className="ml-6">
          <span className="text-[#9CDCFE]">
            {line.value}
          </span>

          <span className="text-white">
            :{" "}
          </span>

          <span className="text-[#DCDCAA]">
            [
          </span>
        </div>
      );

    case "array-item":
      return (
        <div className="ml-12">
          <span className="text-[#CE9178]">
            "{line.value}"
          </span>
          ,
        </div>
      );

    case "project":
      return (
        <div className="ml-12">
          <span className="text-[#CE9178]">
            "{line.value}"
          </span>
          ,
        </div>
      );

    case "array-end":
      return (
        <div className="ml-6 text-[#DCDCAA]">
          ],
        </div>
      );

    default:
      return null;
  }
}