import { StaticImageData } from 'next/image';

import GridImgBox from './GridImgBox';
import { HomeSectionProps } from '../../pages';

import style from '../../styles/components/home/HomeThirdSection.module.scss';
import jangdokdaeImg from '../../images/home/jandokdae.jpg';
import rockGardenImg from '../../images/home/rock_garden.jpg';
import treeShelterImg from '../../images/home/tree_shelter.jpg';
import yardImg from '../../images/home/yard.jpg';

export interface GridImgBoxProps {
  imgUrl: StaticImageData;
  imgTitle: string;
  imgDescription: string;
}

function HomeThirdSection({ pageInfo }: HomeSectionProps) {
  return (
    <div className={style.section}>
      <div className={style.imgContainer}>
        <GridImgBox
          imgUrl={jangdokdaeImg}
          imgTitle={imgData[0].title}
          imgDescription={imgData[0].description}
        />
        <GridImgBox
          imgUrl={rockGardenImg}
          imgTitle={imgData[1].title}
          imgDescription={imgData[1].description}
        />
        <GridImgBox
          imgUrl={treeShelterImg}
          imgTitle={imgData[2].title}
          imgDescription={imgData[2].description}
        />
        <GridImgBox
          imgUrl={yardImg}
          imgTitle={imgData[3].title}
          imgDescription={imgData[3].description}
        />
      </div>
    </div>
  );
}

export default HomeThirdSection;

const imgData = [
  {
    title: '장독대',
    description:
      '우리집 간장, 고추장, 매실, 오미자 액기스등을 저장 및 숙성하는 공간',
  },
  {
    title: '암석정원',
    description: '산책길 중간에 위치한 암석 공원',
  },
  {
    title: '감나무 쉼터',
    description: '집 중앙에 위치한 큰 감나무 그늘 아래 휴식공간',
  },
  {
    title: '마당',
    description: '손님들과 즐거운 시간을 보내기 좋은 전망좋은 마당',
  },
];
