import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';

import { WindowImgBoxProps } from './HomeSecondSection';

import style from '../../styles/components/home/HomeSecondSection.module.scss';

function WindowImgBox({ imgUrl, imageY, styles }: WindowImgBoxProps) {
  return (
    <div className={style.imgBox} style={styles}>
      <motion.div className={style.image} style={{ y: imageY }}>
        <Image
          src={imgUrl}
          alt="이미지"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </motion.div>
    </div>
  );
}

export default WindowImgBox;
