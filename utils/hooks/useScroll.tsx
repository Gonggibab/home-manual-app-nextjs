import { RefObject, useEffect } from 'react';

import throttle from '../throttle';

export default function useScroll(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const target = ref?.current ?? document.body;
    let count = 0;

    const handleWheelAnimation = (e: WheelEvent) => {
      console.log(e);
    };

    const handleResizeAnimation = () => {
      count += 1;
      console.log('Resize Count: ' + count);
    };

    target.addEventListener('wheel', handleWheelAnimation);
    window.addEventListener('resize', throttle(handleResizeAnimation, 500));

    return () => {
      target.removeEventListener('wheel', handleWheelAnimation);
      window.removeEventListener('resize', throttle(handleResizeAnimation, 500));
    };
  }, [ref]);
}
