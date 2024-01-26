export const heroBackgroundTransition = {
  initial: { opacity: 0, scaleY: 0, transformOrigin: 'bottom' },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: { type: 'tween' },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: 'bottom',
    transition: { type: 'tween' },
  },
};
