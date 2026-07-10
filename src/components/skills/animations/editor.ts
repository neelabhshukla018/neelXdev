// src/components/skills/animations/editor.ts

/**
 * ==========================================================
 * EDITOR ANIMATIONS
 * ==========================================================
 * Reusable Framer Motion variants for the VS Code editor.
 */

import { Variants } from "framer-motion";

/* ==========================================================
 * EDITOR CONTAINER
 * ==========================================================
 */

export const editorContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.08,
    },
  },
};

/* ==========================================================
 * EDITOR PANEL
 * ==========================================================
 */

export const editorPanel: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: 16,
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * CODE LINE
 * ==========================================================
 */

export const codeLine: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * LINE NUMBER
 * ==========================================================
 */

export const lineNumber: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 0.55,
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * ACTIVE LINE
 * ==========================================================
 */

export const activeLine: Variants = {
  idle: {
    backgroundColor: "transparent",
  },

  active: {
    backgroundColor: "rgba(255,255,255,0.05)",
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * CARET
 * ==========================================================
 */

export const caret: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/* ==========================================================
 * TAB
 * ==========================================================
 */

export const editorTab: Variants = {
  inactive: {
    backgroundColor: "#2D2D2D",
    color: "#A9A9A9",
  },

  active: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * PREVIEW
 * ==========================================================
 */

export const previewPanel: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * BREADCRUMB
 * ==========================================================
 */

export const breadcrumb: Variants = {
  hidden: {
    opacity: 0,
    y: -6,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

/* ==========================================================
 * CURSOR BLINK
 * ==========================================================
 */

export const cursorBlink = {
  opacity: [1, 0, 1],

  transition: {
    duration: 1,

    repeat: Infinity,

    ease: "linear",
  },
};