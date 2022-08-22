export const optimizedAnimation = (
  callback: (this: Window, ev: Event) => any,
) => {
  let ticking = false;

  return () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
    }
  };
};
