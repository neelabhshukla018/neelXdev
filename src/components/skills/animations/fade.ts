// src/components/skills/animations/fade.ts

/**
 * ==========================================================
 * FADE ANIMATIONS
 * ==========================================================
 * Common Framer Motion fade variants.
 */

import { Variants } from "framer-motion";

/* ==========================================================
 * BASIC FADE
 * ==========================================================
 */

export const fade: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * FADE UP
 * ==========================================================
 */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
    },
  },
};

/* ==========================================================
 * FADE DOWN
 * ==========================================================
 */

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.25,
    },
  },
};

/* ==========================================================
 * FADE LEFT
 * ==========================================================
 */

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.25,
    },
  },
};

/* ==========================================================
 * FADE RIGHT
 * ==========================================================
 */

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.25,
    },
  },
};

/* ==========================================================
 * FADE SCALE
 * ==========================================================
 */

export const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.2,
    },
  },
};

/* ==========================================================
 * STAGGER CONTAINER
 * ==========================================================
 */

export const fadeContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/* ==========================================================
 * STAGGER ITEM
 * ==========================================================
 */

export const fadeItem: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};