import { Dispatch, SetStateAction } from 'react';

export const animateText = (
  targetText: string,
  setState: Dispatch<SetStateAction<string>>,
) => {
  let n = 0;
  let p = '';

  let timer = setInterval(() => {
    if (n < targetText.length) {
      p += targetText[n];
      n += 1;
    } else {
      clearInterval(timer);
    }

    setState(p);
  }, 50);
};
