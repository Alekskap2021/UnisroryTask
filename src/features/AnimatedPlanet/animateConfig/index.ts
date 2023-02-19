export const orangeLineVariants = {
  hidden: { pathLength: 0, opacity: 0, rotate: 270 },
  visible: (i: number) => {
    const delay = i;
    return {
      pathLength: 0.5,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const orangeDotsVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => {
    const delay = i;
    return {
      opacity: 1,
      transition: {
        opacity: { delay, duration: 0.5 },
      },
    };
  },
};
