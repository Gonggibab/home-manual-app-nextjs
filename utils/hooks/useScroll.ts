import { useEffect } from 'react';

export const useScroll = (scrollListner: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', scrollListner, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', scrollListner);
    };
  }, [scrollListner]);
};
