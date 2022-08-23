import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

import { HistoryTextProps } from './HistoryTextBox';

import style from '../../styles/components/home/HomeSecondSection.module.scss';

function HistoryText({ index, text, ratio, width, speedX }: HistoryTextProps) {
  const textX = useMotionValue<number>(0);

  const margin = `${(index % 3) * 8}rem`;

  useEffect(() => {
    const curX = width + speedX - ratio * speedX;
    textX.set(curX);
  }, [ratio]);

  return (
    <motion.div
      className={style.historyText}
      style={{ x: textX, marginTop: margin }}
    >
      {text}
    </motion.div>
  );
}

export default HistoryText;
