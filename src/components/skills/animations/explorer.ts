// src/components/skills/animations/explorer.ts

/**
 * ==========================================================
 * EXPLORER ANIMATIONS
 * ==========================================================
 * Framer Motion variants used throughout the VS Code Explorer.
 */

import { Variants } from "framer-motion";

/* ==========================================================
 * EXPLORER CONTAINER
 * ==========================================================
 */

export const explorerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.08,
    },
  },
};

/* ==========================================================
 * FOLDER
 * ==========================================================
 */

export const folder: Variants = {
  closed: {
    opacity: 0.9,
  },

  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

/* ==========================================================
 * FOLDER CONTENT
 * ==========================================================
 */

export const folderContent: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    overflow: "hidden",
  },

  expanded: {
    height: "auto",
    opacity: 1,
    overflow: "hidden",
    transition: {
      duration: 0.25,
      ease: "easeOut",
      staggerChildren: 0.03,
    },
  },
};

/* ==========================================================
 * FILE ITEM
 * ==========================================================
 */

export const fileItem: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },

  hover: {
    x: 2,
    transition: {
      duration: 0.15,
    },
  },

  tap: {
    scale: 0.98,
  },
};

/* ==========================================================
 * ACTIVE FILE
 * ==========================================================
 */

export const activeFile: Variants = {
  inactive: {
    backgroundColor: "transparent",
  },

  active: {
    backgroundColor: "#37373D",
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * ACTIVE INDICATOR
 * ==========================================================
 */

export const activeIndicator: Variants = {
  hidden: {
    scaleY: 0,
  },

  visible: {
    scaleY: 1,
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * SEARCH RESULT
 * ==========================================================
 */

export const searchResult: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * SEARCH PANEL
 * ==========================================================
 */

export const searchPanel: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
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
 * CHEVRON
 * ==========================================================
 */

export const chevron = {
  closed: {
    rotate: 0,
  },

  open: {
    rotate: 90,
    transition: {
      duration: 0.2,
    },
  },
};