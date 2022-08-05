import { RefObject, useEffect } from 'react';

export default function useScroll(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const target = ref?.current ?? document.body;
    let count = 0;

    const handleWheelAnimation = () => {
      count += 1;
      console.log(count);
    };

    target.addEventListener('wheel', handleWheelAnimation);

    return () => {
      target.removeEventListener('wheel', handleWheelAnimation);
    };
  }, [ref]);
}
