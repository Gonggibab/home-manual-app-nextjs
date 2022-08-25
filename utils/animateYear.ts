import { Dispatch, SetStateAction } from 'react';

export const animateYear = (
  ratio: number,
  setYear: Dispatch<SetStateAction<number>>,
  setIsShown: Dispatch<SetStateAction<boolean>>,
) => {
  const threshold = Math.round(ratio * 20 - 20);
  if (-1 < threshold && threshold < 17) {
    setIsShown(true);
    setYear(2006 + threshold);
  } else {
    setIsShown(false);
  }
};
