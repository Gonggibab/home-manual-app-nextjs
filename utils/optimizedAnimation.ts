export const optimizedAnimation = (callback: () => any) => {
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
