// src/components/skills/animations/terminal.ts

/**
 * ==========================================================
 * TERMINAL ANIMATIONS
 * ==========================================================
 * Framer Motion variants for the VS Code Terminal.
 */

import { Variants } from "framer-motion";

/* ==========================================================
 * TERMINAL CONTAINER
 * ==========================================================
 */

export const terminalContainer: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.35,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },

  exit: {
    opacity: 0,
    y: 20,

    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * COMMAND
 * ==========================================================
 */

export const terminalCommand: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * OUTPUT
 * ==========================================================
 */

export const terminalOutput: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * INPUT
 * ==========================================================
 */

export const terminalInput: Variants = {
  idle: {
    scale: 1,
  },

  focus: {
    scale: 1.01,

    transition: {
      duration: 0.15,
    },
  },
};

/* ==========================================================
 * CURSOR
 * ==========================================================
 */

export const terminalCursor = {
  opacity: [1, 0, 1],

  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "linear",
  },
};

/* ==========================================================
 * PROMPT
 * ==========================================================
 */

export const terminalPrompt: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.15,
    },
  },
};

/* ==========================================================
 * HISTORY ITEM
 * ==========================================================
 */

export const historyItem: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * STATUS ICON
 * ==========================================================
 */

export const statusIcon: Variants = {
  idle: {
    scale: 1,
    rotate: 0,
  },

  success: {
    scale: [1, 1.2, 1],

    transition: {
      duration: 0.35,
    },
  },

  error: {
    rotate: [-8, 8, -8, 0],

    transition: {
      duration: 0.4,
    },
  },
};

/* ==========================================================
 * TERMINAL PANEL
 * ==========================================================
 */

export const terminalPanel: Variants = {
  closed: {
    height: 0,
    opacity: 0,
  },

  open: {
    height: "auto",
    opacity: 1,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

/* ==========================================================
 * LOADING DOTS
 * ==========================================================
 */

export const loadingDots = {
  opacity: [0.3, 1, 0.3],

  transition: {
    duration: 0.8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};