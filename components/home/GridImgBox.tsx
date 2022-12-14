import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

import { GridImgBoxProps } from './HomeThirdSection';

import style from '../../styles/components/home/HomeThirdSection.module.scss';

function GridImgBox({ imgUrl, imgTitle, imgDescription }: GridImgBoxProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const boxVariants = {
    clicked: { width: `1000%` },
    notClicked: { width: `25%` },
  };

  const textVariants = {
    hover: { y: -10, opacity: 1 },
    notHover: { y: 0, opacity: 0 },
  };

  const pargraphVariants = {
    clicked: { opacity: 1 },
    notClicked: { opacity: 0 },
  };

  const imgVariants = {
    hover: {
      filter: `brightness(0.9)`,
      scale: 1.5,
      transition: {
        scale: {
          ease: 'linear',
          duration: 10,
        },
      },
    },
    notHover: { filter: `brightness(0.6)`, scale: 1 },
  };

  return (
    <motion.div
      className={style.imgBox}
      animate={isClicked ? 'clicked' : 'notClicked'}
      variants={boxVariants}
      transition={{ type: 'ease', duration: 0.8 }}
    >
      <motion.div
        className={style.overlay}
        animate={isHover || isClicked ? 'hover' : 'notHover'}
        variants={textVariants}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        onClick={() => setIsClicked(!isClicked)}
      >
        <h2>{imgTitle}</h2>
        <motion.div
          className={style.description}
          animate={isClicked ? 'clicked' : 'notClicked'}
          variants={pargraphVariants}
          transition={{ type: 'ease', duration: 1 }}
        >
          {imgDescription}
        </motion.div>
        <label>
          {isClicked ? '다시 클릭해서 닫기' : '더 보기'}
          {!isClicked && <BsArrowRight />}
        </label>
      </motion.div>
      <motion.div
        className={style.img}
        animate={isHover || isClicked ? 'hover' : 'notHover'}
        variants={imgVariants}
      >
        <Image
          src={imgUrl}
          alt="이미지"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          objectPosition="left bottom"
          quality={100}
        />
      </motion.div>
    </motion.div>
  );
}

export default GridImgBox;
