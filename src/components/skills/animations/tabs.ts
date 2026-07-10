// src/components/skills/animations/tabs.ts

/**
 * ==========================================================
 * TABS ANIMATIONS
 * ==========================================================
 * Framer Motion variants for VS Code editor tabs.
 */

import { Variants } from "framer-motion";

/* ==========================================================
 * TABS CONTAINER
 * ==========================================================
 */

export const tabsContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

/* ==========================================================
 * TAB
 * ==========================================================
 */

export const tab: Variants = {
  hidden: {
    opacity: 0,
    x: 15,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    x: -15,
    scale: 0.95,

    transition: {
      duration: 0.18,
    },
  },
};

/* ==========================================================
 * TAB STATE
 * ==========================================================
 */

export const tabState: Variants = {
  inactive: {
    backgroundColor: "#2D2D2D",
    color: "#A6A6A6",
    scale: 1,
  },

  hover: {
    backgroundColor: "#323233",
    color: "#FFFFFF",
    scale: 1.02,

    transition: {
      duration: 0.15,
    },
  },

  active: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    scale: 1,

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
    scaleX: 0,
    opacity: 0,
  },

  visible: {
    scaleX: 1,
    opacity: 1,

    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * TAB ICON
 * ==========================================================
 */

export const tabIcon: Variants = {
  idle: {
    rotate: 0,
    scale: 1,
  },

  hover: {
    scale: 1.08,

    transition: {
      duration: 0.15,
    },
  },

  active: {
    scale: 1.1,
  },
};

/* ==========================================================
 * CLOSE BUTTON
 * ==========================================================
 */

export const closeButton: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.15,
    },
  },

  hover: {
    scale: 1.15,
    rotate: 90,

    transition: {
      duration: 0.15,
    },
  },

  tap: {
    scale: 0.9,
  },
};

/* ==========================================================
 * DIRTY INDICATOR
 * ==========================================================
 */

export const dirtyIndicator = {
  scale: [1, 1.25, 1],

  opacity: [1, 0.7, 1],

  transition: {
    duration: 1.4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* ==========================================================
 * TAB DRAG
 * ==========================================================
 */

export const tabDrag: Variants = {
  idle: {
    scale: 1,
    zIndex: 1,
  },

  dragging: {
    scale: 1.04,
    zIndex: 100,
    cursor: "grabbing",

    transition: {
      duration: 0.1,
    },
  },
};

/* ==========================================================
 * TAB LAYOUT
 * ==========================================================
 */

export const tabLayout = {
  type: "spring",
  stiffness: 500,
  damping: 35,
};

/* ==========================================================
 * TAB SHADOW
 * ==========================================================
 */

export const tabShadow: Variants = {
  inactive: {
    boxShadow: "none",
  },

  active: {
    boxShadow:
      "0 2px 10px rgba(0,0,0,0.25)",

    transition: {
      duration: 0.2,
    },
  },
};