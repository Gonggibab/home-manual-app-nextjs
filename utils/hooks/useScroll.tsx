import { useEffect } from 'react';

export const useScroll = (scrollListner: (this: Window, ev: Event) => any) => {
  useEffect(() => {
    window.addEventListener('scroll', scrollListner, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollListner);
    };
  }, []);
};
