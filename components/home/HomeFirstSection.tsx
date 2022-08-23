import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import { HomeSectionProps } from '../../pages';

import style from '../../styles/components/home/HomeFirstSection.module.scss';
import bgSkyImg from '../../images/home/background_sky.png';
import bgMtImg from '../../images/home/background_mountain.png';
import { BsGeoAltFill } from 'react-icons/bs';

function HomeFirstSection({ pageInfo }: HomeSectionProps) {
  const [ratio, setRatio] = useState<number>(1);

  const opacity = useMotionValue(1);
  const titleY = useMotionValue(0);
  const skyY = useMotionValue(0);
  const mountainY = useMotionValue(0);

  const springConfig = {
    stiffness: 1000,
    damping: 100,
  };

  const springOpac = useSpring(opacity, springConfig);
  const springTitleY = useSpring(titleY, springConfig);
  const springSky = useSpring(skyY, springConfig);
  const springMountain = useSpring(mountainY, springConfig);

  useEffect(() => {
    setRatio(pageInfo[0]);

    if (1 < ratio && ratio < 2) {
      opacity.set(3 - ratio * 2);
      titleY.set(1000 - ratio * 1000);
      skyY.set(1200 - ratio * 1200);
      mountainY.set(1500 - ratio * 1500);
    }
  }, [pageInfo]);

  return (
    <div className={style.section}>
      <motion.div className={style.imgContent} style={{ opacity: springOpac }}>
        <div className={style.overlay}>
          <motion.div className={style.title} style={{ y: springTitleY }}>
            <h1>
              우리집 <br />
              사용설명서
            </h1>
            <h2>
              <BsGeoAltFill />
              밀양시 단장면 바드리마을
            </h2>
          </motion.div>
        </div>
        <motion.div className={style.image} style={{ y: springSky }}>
          <Image
            src={bgSkyImg}
            alt="배경 하늘 이미지"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </motion.div>
        <motion.div
          className={style.image}
          style={{ y: springMountain, zIndex: 2 }}
        >
          <Image
            src={bgMtImg}
            alt="배경 산 이미지"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomeFirstSection;
