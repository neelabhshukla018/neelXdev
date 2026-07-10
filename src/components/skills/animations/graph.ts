// src/components/skills/animations/graph.ts

/**
 * ==========================================================
 * GRAPH ANIMATIONS
 * ==========================================================
 * Framer Motion variants for the Skills Graph.
 */

import { Variants } from "framer-motion";

/* ==========================================================
 * GRAPH CONTAINER
 * ==========================================================
 */

export const graphContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/* ==========================================================
 * GRAPH NODE
 * ==========================================================
 */

export const graphNode: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 20,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * CONNECTION
 * ==========================================================
 */

export const graphConnection: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },

  visible: {
    pathLength: 1,
    opacity: 1,

    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

/* ==========================================================
 * NODE LABEL
 * ==========================================================
 */

export const nodeLabel: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.1,
      duration: 0.25,
    },
  },
};

/* ==========================================================
 * NODE STATES
 * ==========================================================
 */

export const nodeState: Variants = {
  idle: {
    scale: 1,
  },

  hover: {
    scale: 1.08,

    transition: {
      duration: 0.18,
    },
  },

  selected: {
    scale: 1.12,

    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * CONNECTION STATES
 * ==========================================================
 */

export const connectionState: Variants = {
  idle: {
    opacity: 0.25,
    strokeWidth: 2,
  },

  hover: {
    opacity: 0.7,
    strokeWidth: 3,
  },

  active: {
    opacity: 1,
    strokeWidth: 4,
  },
};

/* ==========================================================
 * PULSE
 * ==========================================================
 */

export const pulse = {
  scale: [1, 1.08, 1],

  opacity: [1, 0.85, 1],

  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* ==========================================================
 * FLOAT
 * ==========================================================
 */

export const floating = {
  y: [0, -5, 0],

  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* ==========================================================
 * ZOOM
 * ==========================================================
 */

export const zoom: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* ==========================================================
 * GRAPH FADE
 * ==========================================================
 */

export const graphFade: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
    },
  },
};