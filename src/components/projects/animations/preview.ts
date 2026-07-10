import { Transition, Variants } from "framer-motion";

import {
  previewTransition,
  smooth,
} from "./transitions";

/* ===========================================================
   PREVIEW CONTAINER
=========================================================== */

export const previewVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: previewTransition,
  },

  exit: {
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.25,
    },
  },
};

/* ===========================================================
   PREVIEW IMAGE
=========================================================== */

export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: previewTransition,
  },
};

/* ===========================================================
   PREVIEW VIDEO
=========================================================== */

export const videoVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.02,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: previewTransition,
  },
};

/* ===========================================================
   LOADER
=========================================================== */

export const loaderVariants: Variants = {
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
   REFLECTION
=========================================================== */

export const reflectionVariants: Variants = {
  initial: {
    opacity: 0.08,
  },

  hover: {
    opacity: 0.18,
    transition: {
      duration: 0.3,
    },
  },
};

/* ===========================================================
   SHINE EFFECT
=========================================================== */

export const shineTransition: Transition = {
  duration: 1,
  ease: "easeInOut",
};

export const shineVariants: Variants = {
  initial: {
    x: "-120%",
  },

  hover: {
    x: "120%",
    transition: shineTransition,
  },
};

/* ===========================================================
   SCREEN FLOAT
=========================================================== */

export const floatingPreview: Variants = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ===========================================================
   BUTTON GROUP
=========================================================== */

export const buttonGroupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: smooth,
  },
};