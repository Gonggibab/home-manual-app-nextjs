import { useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';
import { motion, MotionValue, useMotionValue } from 'framer-motion';

import { HomeSectionProps } from '../../pages';
import { animateYear } from '../../utils/animateYear';

import style from '../../styles/components/home/HomeSecondSection.module.scss';
import pastHomeImg1 from '../../images/home/past_home1.jpg';
import pastHomeImg2 from '../../images/home/past_home2.jpg';
import pastHomeImg3 from '../../images/home/past_home3.jpg';
import WindowImgBox from './WindowImgBox';
import HistoryTextBox from './HistoryTextBox';

export interface WindowImgBoxProps {
  imgUrl: StaticImageData;
  imageY: MotionValue<number>;
  styles?: object;
}

export interface HistoryTextBoxProps {
  ratio: number;
  width: number;
}

function HomeSecondSection({ pageInfo }: HomeSectionProps) {
  const [ratio, setRatio] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [year, setYear] = useState<number>(2006);

  const image1Y = useMotionValue<number>(0);
  const image2Y = useMotionValue<number>(0);
  const image3Y = useMotionValue<number>(0);

  const variant = {
    shown: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    setRatio(pageInfo[0]);
    setWidth(pageInfo[1]);

    animateYear(ratio, setYear, setIsShown);

    image1Y.set(ratio * 1000 - 1000);
    image2Y.set(ratio * 1000 - 1200);
    image3Y.set(ratio * 1000 - 1500);
  }, [image1Y, image2Y, image3Y, pageInfo, year]);

  return (
    <div className={style.section}>
      <div className={style.bgText}>
        <motion.div
          className={style.year}
          animate={isShown ? 'shown' : 'hidden'}
          variants={variant}
        >
          {year}
        </motion.div>
        <HistoryTextBox ratio={ratio} width={width} />
      </div>
      <div className={style.imgContainer}>
        <WindowImgBox imgUrl={pastHomeImg1} imageY={image1Y} />
        <WindowImgBox
          imgUrl={pastHomeImg2}
          imageY={image2Y}
          styles={{ marginLeft: `auto` }}
        />
        <WindowImgBox imgUrl={pastHomeImg3} imageY={image3Y} />
      </div>
    </div>
  );
}

export default HomeSecondSection;
