// src/components/skills/utils/generateCode.ts

/**
 * ==========================================================
 * GENERATE CODE
 * ==========================================================
 * Generates VS Code-like code preview for every skill.
 */

import { Skill } from "../types/skill";

/* ==========================================================
 * TYPES
 * ==========================================================
 */

export interface CodeLine {
  number: number;
  text: string;
  type:
    | "comment"
    | "keyword"
    | "string"
    | "property"
    | "method"
    | "interface"
    | "function"
    | "normal"
    | "blank";
}

type Generator = (
  skill: Skill
) => string[];

/* ==========================================================
 * HELPERS
 * ==========================================================
 */

const blank = () => "";

const comment = (text: string) =>
  `// ${text}`;

const section = (title: string) =>
  [
    comment("=========================================================="),
    comment(` ${title.toUpperCase()}`),
    comment("=========================================================="),
  ];

const property = (
  key: string,
  value: string | number | boolean
) => `  ${key}: ${JSON.stringify(value)},`;

const arrayProperty = (
  key: string,
  values: string[]
) => {
  return [
    `  ${key}: [`,
    ...values.map(
      (value) => `    "${value}",`
    ),
    "  ],",
  ];
};

/* ==========================================================
 * HEADER
 * ==========================================================
 */

function createHeader(
  skill: Skill
): string[] {
  return [
    ...section(skill.name),

    blank(),

    `import { ${skill.icon.name} } from "lucide-react";`,

    blank(),

    `export const ${camelCase(
      skill.name
    )} = {`,

    property("id", skill.id),

    property("name", skill.name),

    property(
      "category",
      skill.category
    ),

    property("level", skill.level),

    property(
      "status",
      skill.status
    ),

    property(
      "color",
      skill.color
    ),

    "};",

    blank(),
  ];
}

/* ==========================================================
 * FOOTER
 * ==========================================================
 */

function createFooter(
  skill: Skill
): string[] {
  return [
    ...section(
      "Export Information"
    ),

    blank(),

    comment(
      `Experience : ${skill.experience.years} years`
    ),

    comment(
      `Projects   : ${skill.stats.projects}`
    ),

    comment(
      `Repositories : ${skill.stats.repositories}`
    ),

    comment(
      `Commits : ${skill.stats.commits}`
    ),

    blank(),

    "export default " +
      camelCase(skill.name) +
      ";",
  ];
}

/* ==========================================================
 * COMMON BLOCK
 * ==========================================================
 */

function createMetrics(
  skill: Skill
): string[] {
  return [
    ...section("Metrics"),

    blank(),

    "metrics: {",

    property(
      "proficiency",
      skill.metrics.proficiency
    ),

    property(
      "confidence",
      skill.metrics.confidence
    ),

    property(
      "experience",
      skill.metrics.experience
    ),

    property(
      "problemSolving",
      skill.metrics
        .problemSolving
    ),

    property(
      "realWorldUsage",
      skill.metrics
        .realWorldUsage
    ),

    "},",

    blank(),
  ];
}

function createTechnologies(
  skill: Skill
): string[] {
  return [
    ...section(
      "Technologies"
    ),

    blank(),

    ...arrayProperty(
      "technologies",
      skill.technologies
    ),

    blank(),
  ];
}

/* ==========================================================
 * UTILITIES
 * ==========================================================
 */

function camelCase(
  value: string
) {
  return value
    .replace(
      /[^a-zA-Z0-9 ]/g,
      ""
    )
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() +
          word.slice(1)
    )
    .join("");
}

function build(
  ...blocks: string[][]
): string[] {
  return blocks.flat();
}

/* ==========================================================
 * CATEGORY GENERATORS
 * ==========================================================
 * Continue in Part 2...
 *//* ==========================================================
 * FRONTEND GENERATOR
 * ==========================================================
 */

const generateFrontend: Generator = (
  skill
) => {
  return build(
    createHeader(skill),

    [
      ...section("Overview"),

      blank(),

      comment(skill.description),

      blank(),
    ],

    [
      "const frontendConfig = {",

      property(
        "framework",
        skill.name
      ),

      property(
        "experience",
        `${skill.experience.years} Years`
      ),

      property(
        "status",
        skill.status
      ),

      property(
        "level",
        skill.level
      ),

      "};",

      blank(),
    ],

    createMetrics(skill),

    createTechnologies(skill),

    createFooter(skill)
  );
};

/* ==========================================================
 * BACKEND GENERATOR
 * ==========================================================
 */

const generateBackend: Generator = (
  skill
) => {
  return build(
    createHeader(skill),

    [
      ...section("Server"),

      blank(),

      "const server = {",

      property(
        "runtime",
        "Node.js"
      ),

      property(
        "framework",
        skill.name
      ),

      property(
        "apiStyle",
        "REST"
      ),

      property(
        "authentication",
        "JWT"
      ),

      property(
        "deployment",
        "Production"
      ),

      "};",

      blank(),
    ],

    createMetrics(skill),

    createTechnologies(skill),

    createFooter(skill)
  );
};

/* ==========================================================
 * DATABASE GENERATOR
 * ==========================================================
 */

const generateDatabase: Generator = (
  skill
) => {
  return build(
    createHeader(skill),

    [
      ...section(
        "Database Configuration"
      ),

      blank(),

      "const database = {",

      property(
        "engine",
        skill.name
      ),

      property(
        "status",
        "Connected"
      ),

      property(
        "migrations",
        true
      ),

      property(
        "orm",
        "Prisma"
      ),

      property(
        "backup",
        true
      ),

      "};",

      blank(),
    ],

    createMetrics(skill),

    createTechnologies(skill),

    createFooter(skill)
  );
};

/* ==========================================================
 * UI GENERATOR
 * ==========================================================
 */

const generateUI: Generator = (
  skill
) => {
  return build(
    createHeader(skill),

    [
      ...section(
        "Design System"
      ),

      blank(),

      "const ui = {",

      property(
        "library",
        skill.name
      ),

      property(
        "responsive",
        true
      ),

      property(
        "animations",
        true
      ),

      property(
        "darkMode",
        true
      ),

      property(
        "accessibility",
        true
      ),

      "};",

      blank(),
    ],

    createMetrics(skill),

    createTechnologies(skill),

    createFooter(skill)
  );
};

/* ==========================================================
 * Continue in Part 3...
 * ==========================================================
 *//* ==========================================================
 * API GENERATOR
 * ==========================================================
 */

const generateAPI: Generator = (
  skill
) => {
  return build(
    createHeader(skill),

    [
      ...section("API Configuration"),

      blank(),

      "const api = {",

      property(
        "type",
        "REST API"
      ),

      property(
        "technology",
        skill.name
      ),

      property(
        "authentication",
        "JWT"
      ),

      property(
        "validation",
        "Zod"
      ),

      property(
        "documentation",
        "OpenAPI"
      ),

      property(
        "status",
        "Production Ready"
      ),

      "};",

      blank(),
    ],

    createMetrics(skill),

    createTechnologies(skill),

    createFooter(skill)
  );
};

/* ==========================================================
 * AI GENERATOR
 * ==========================================================
 */

const generateAI: Generator = (
  skill
) => {
  return build(
    createHeader(skill),

    [
      ...section("AI Configuration"),

      blank(),

      "const ai = {",

      property(
        "provider",
        skill.name
      ),

      property(
        "streaming",
        true
      ),

      property(
        "embeddings",
        true
      ),

      property(
        "chatCompletion",
        true
      ),

      property(
        "reasoning",
        true
      ),

      property(
        "status",
        "Integrated"
      ),

      "};",

      blank(),
    ],

    createMetrics(skill),

    createTechnologies(skill),

    createFooter(skill)
  );
};

/* ==========================================================
 * DEPLOYMENT GENERATOR
 * ==========================================================
 */

const generateDeployment: Generator = (
  skill
) => {
  return build(
    createHeader(skill),

    [
      ...section("Deployment"),

      blank(),

      "const deployment = {",

      property(
        "platform",
        skill.name
      ),

      property(
        "ciCd",
        true
      ),

      property(
        "ssl",
        true
      ),

      property(
        "cdn",
        true
      ),

      property(
        "monitoring",
        true
      ),

      property(
        "autoScaling",
        true
      ),

      "};",

      blank(),
    ],

    createMetrics(skill),

    createTechnologies(skill),

    createFooter(skill)
  );
};

/* ==========================================================
 * GENERATOR MAP
 * ==========================================================
 */

const generators: Record<
  Skill["category"],
  Generator
> = {
  frontend: generateFrontend,

  backend: generateBackend,

  database: generateDatabase,

  ui: generateUI,

  api: generateAPI,

  ai: generateAI,

  deployment: generateDeployment,
};

/* ==========================================================
 * Continue in Part 4...
 * ==========================================================
 *//* ==========================================================
 * GENERATE CODE
 * ==========================================================
 */

export function generateCode(
  skill: Skill
): CodeLine[] {
  const generator =
    generators[skill.category];

  const lines = generator
    ? generator(skill)
    : build(
        createHeader(skill),

        [
          ...section(
            "Skill Information"
          ),

          blank(),

          comment(
            skill.description
          ),

          blank(),
        ],

        createMetrics(skill),

        createTechnologies(skill),

        createFooter(skill)
      );

  return lines.map(
    (text, index): CodeLine => ({
      number: index + 1,

      text,

      type: getLineType(text),
    })
  );
}

/* ==========================================================
 * LINE TYPE
 * ==========================================================
 */

function getLineType(
  line: string
): CodeLine["type"] {
  const trimmed = line.trim();

  if (!trimmed) {
    return "blank";
  }

  if (
    trimmed.startsWith("//")
  ) {
    return "comment";
  }

  if (
    trimmed.startsWith("import")
  ) {
    return "keyword";
  }

  if (
    trimmed.startsWith("export")
  ) {
    return "keyword";
  }

  if (
    trimmed.startsWith("const")
  ) {
    return "keyword";
  }

  if (
    trimmed.startsWith("function")
  ) {
    return "function";
  }

  if (
    trimmed.startsWith("interface")
  ) {
    return "interface";
  }

  if (
    trimmed.includes(":")
  ) {
    return "property";
  }

  if (
    trimmed.includes('"') ||
    trimmed.includes("'")
  ) {
    return "string";
  }

  if (
    trimmed.includes("(") &&
    trimmed.includes(")")
  ) {
    return "method";
  }

  return "normal";
}

/* ==========================================================
 * HELPERS
 * ==========================================================
 */

export function generatePlainCode(
  skill: Skill
): string {
  return generateCode(skill)
    .map((line) => line.text)
    .join("\n");
}

export function generateLineCount(
  skill: Skill
): number {
  return generateCode(skill)
    .length;
}

export function generateFileName(
  skill: Skill
): string {
  return `${skill.name}.${skill.extension}`;
}

export function generateLanguage(
  skill: Skill
): string {
  switch (
    skill.extension.toLowerCase()
  ) {
    case "tsx":
      return "typescriptreact";

    case "ts":
      return "typescript";

    case "js":
      return "javascript";

    case "jsx":
      return "javascriptreact";

    case "json":
      return "json";

    case "css":
      return "css";

    case "html":
      return "html";

    default:
      return "plaintext";
  }
}

/* ==========================================================
 * DEFAULT EXPORT
 * ==========================================================
 */

export default generateCode;