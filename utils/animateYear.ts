import { Dispatch, SetStateAction } from 'react';

export const animateYear = (
  ratio: number,
  year: number,
  prev: number,
  setYear: Dispatch<SetStateAction<number>>,
  setPrev: Dispatch<SetStateAction<number>>,
  setIsShown: Dispatch<SetStateAction<boolean>>,
) => {
  let threshold = Math.round(ratio * 20 - 20);
  if (-1 < threshold && threshold < 16) {
    setIsShown(true);
    setPrev(threshold);

    if (prev < threshold) {
      setYear(year + 1);
    } else if (prev > threshold) {
      setYear(year - 1);
    }
  } else {
    setIsShown(false);
  }
};
