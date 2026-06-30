export const motion = {
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
    hero: 1.2,
  },

  easing: {
    smooth: [0.25, 0.1, 0.25, 1],

    spring: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default motion;