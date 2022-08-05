export default function throttle(cb: () => void, delay: number) {
  let wait = false;
  return () => {
    if (!wait) {
      cb();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, delay);
    }
  };
}
