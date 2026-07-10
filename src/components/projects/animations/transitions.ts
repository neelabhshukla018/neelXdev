import { Transition } from "framer-motion";

/* ===========================================================
   COMMON TRANSITIONS
=========================================================== */

export const spring: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 24,
};

export const softSpring: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 22,
};

export const bounceSpring: Transition = {
  type: "spring",
  stiffness: 340,
  damping: 18,
};

export const smooth: Transition = {
  duration: 0.35,
  ease: "easeInOut",
};

export const fast: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

export const slow: Transition = {
  duration: 0.6,
  ease: "easeInOut",
};

/* ===========================================================
   STAGGER
=========================================================== */

export const staggerContainer: Transition = {
  staggerChildren: 0.08,
  delayChildren: 0.08,
};

export const staggerFast: Transition = {
  staggerChildren: 0.04,
};

export const staggerSlow: Transition = {
  staggerChildren: 0.12,
};

/* ===========================================================
   PROJECT SWITCH
=========================================================== */

export const projectSwitch: Transition = {
  duration: 0.4,
  ease: "easeInOut",
};

export const previewTransition: Transition = {
  duration: 0.45,
  ease: "easeOut",
};

export const contentTransition: Transition = {
  duration: 0.35,
  ease: "easeOut",
};

/* ===========================================================
   HOVER
=========================================================== */

export const hoverLift: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 20,
};

export const hoverScale: Transition = {
  duration: 0.18,
  ease: "easeOut",
};

/* ===========================================================
   BUTTONS
=========================================================== */

export const buttonTransition: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 22,
};

/* ===========================================================
   WINDOW
=========================================================== */

export const windowTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};