import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { HomeSectionProps } from '../../pages';
import { animateYear } from '../../utils/animateYear';
import { animateText } from '../../utils/animateText';

import style from '../../styles/components/home/HomeSecondSection.module.scss';

function HomeSecondSection({ pageInfo }: HomeSectionProps) {
  const [ratio, setRatio] = useState<number>(0);
  const [yearCount, setYearCount] = useState<number>(2000);
  const [pargraph, setPargraph] = useState<string>('');
  const [textInView, setTextInView] = useState<boolean>(false);

  const variants = {
    visible: { y: -40, opacity: 1 },
    hidden: { y: 0, opacity: 0 },
  };

  useEffect(() => {
    setRatio(pageInfo);

    if (1 < ratio && ratio < 1.8) setTextInView(true);
    else setTextInView(false);

    if (1 < ratio && ratio < 1.01) {
      animateYear(yearCount, 2006, setYearCount);
      animateText('밀양 산골짜기 마을에 땅을 구입', setPargraph);
    }

    if (1.3 < ratio && ratio < 1.31) {
      animateYear(yearCount, 2010, setYearCount);
      animateText('통나무집 건설 및 기념 식수', setPargraph);
    }
  }, [pageInfo]);

  return (
    <div className={style.section}>
      <motion.div
        className={style.yearContent}
        animate={textInView ? 'visible' : 'hidden'}
        transition={{ ease: 'circIn', duration: 1 }}
        variants={variants}
      >
        <h3>{yearCount}년... </h3>
        <p>{pargraph}</p>
      </motion.div>
    </div>
  );
}

export default HomeSecondSection;
