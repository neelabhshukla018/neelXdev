import { Variants } from "framer-motion";

import {
  buttonTransition,
  contentTransition,
  hoverLift,
  previewTransition,
  smooth,
  spring,
  staggerContainer,
  windowTransition,
} from "./transitions";

/* ===========================================================
   SECTION
=========================================================== */

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: windowTransition,
  },
};

/* ===========================================================
   WINDOW
=========================================================== */

export const windowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: windowTransition,
  },
};

/* ===========================================================
   LEFT PANEL
=========================================================== */

export const leftPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: contentTransition,
  },
};

/* ===========================================================
   RIGHT PANEL
=========================================================== */

export const rightPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: contentTransition,
  },
};

/* ===========================================================
   FADE
=========================================================== */

export const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: smooth,
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

/* ===========================================================
   FADE UP
=========================================================== */

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: smooth,
  },

  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

/* ===========================================================
   SCALE
=========================================================== */

export const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: spring,
  },
};

/* ===========================================================
   STAGGER
=========================================================== */

export const staggerVariants: Variants = {
  hidden: {},

  visible: {
    transition: staggerContainer,
  },
};

/* ===========================================================
   TECH BADGES
=========================================================== */

export const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.9,
  },

  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      ...spring,
      delay: index * 0.05,
    },
  }),
};

/* ===========================================================
   BUTTONS
=========================================================== */

export const buttonVariants: Variants = {
  idle: {
    scale: 1,
    y: 0,
  },

  hover: {
    scale: 1.03,
    y: -3,
    transition: hoverLift,
  },

  tap: {
    scale: 0.97,
    transition: buttonTransition,
  },
};

/* ===========================================================
   PROJECT SWITCH
=========================================================== */

export const projectSwitchVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: previewTransition,
  },

  exit: {
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.25,
    },
  },
};

/* ===========================================================
   WINDOW TITLE
=========================================================== */

export const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: smooth,
  },

  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.2,
    },
  },
};