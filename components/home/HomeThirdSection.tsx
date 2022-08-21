import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

import HomeImgBox from './HomeImgBox';
import { HomeSectionProps } from '../../pages';

import style from '../../styles/components/home/HomeThirdSection.module.scss';
import jangdokdaeImg from '../../images/home/jandokdae.jpg';
import rockGardenImg from '../../images/home/rock_garden.jpg';
import treeShelterImg from '../../images/home/tree_shelter.jpg';
import yardImg from '../../images/home/yard.jpg';

export interface HomeImgBoxProps {
  imgUrl: StaticImageData;
  imgTitle: string;
}

function HomeThirdSection({ pageInfo }: HomeSectionProps) {
  return (
    <div className={style.section}>
      <div className={style.imgContainer}>
        <HomeImgBox imgUrl={jangdokdaeImg} imgTitle="장독대"></HomeImgBox>
        <HomeImgBox imgUrl={rockGardenImg} imgTitle="암석정원"></HomeImgBox>
        <HomeImgBox imgUrl={treeShelterImg} imgTitle="감나무 쉼터"></HomeImgBox>
        <HomeImgBox imgUrl={yardImg} imgTitle="마당"></HomeImgBox>
      </div>
    </div>
  );
}

export default HomeThirdSection;
