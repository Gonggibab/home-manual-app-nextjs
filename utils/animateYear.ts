import { Dispatch, SetStateAction } from 'react';

export const animateYear = (
  currentYear: number,
  targetYear: number,
  setState: Dispatch<SetStateAction<number>>,
) => {
  let timer = setInterval(() => {
    if (currentYear < targetYear) {
      currentYear += 1;
    } else if (currentYear > targetYear) {
      currentYear -= 1;
    } else {
      clearInterval(timer);
    }

    setState(currentYear);
  }, 100);
};
