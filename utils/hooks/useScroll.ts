import { useEffect } from 'react';
import { optimizedAnimation } from '../optimizedAnimation';

export const useScroll = (scrollListner: (this: Window, ev: Event) => any) => {
  useEffect(() => {
    window.addEventListener('scroll', optimizedAnimation(scrollListner), {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', optimizedAnimation(scrollListner));
    };
  }, []);
};
