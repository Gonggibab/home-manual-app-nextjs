import Image from 'next/image';

import style from '../../styles/components/home/HomeFirstSection.module.scss';
import bgImg from '../../images/home/home-background.jpg';
import { BsGeoAltFill } from 'react-icons/bs';

function HomeFirstSection() {
  return (
    <div className={style.backgournd}>
      <div className={style.overlay}>
        <div className={style.title}>
          <h1>
            우리집 <br />
            사용설명서
          </h1>
          <h2>
            <BsGeoAltFill />
            밀양시 단장면 바드리마을
          </h2>
        </div>
      </div>
      <Image
        src={bgImg}
        alt="홈 배경 이미지"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
    </div>
  );
}

export default HomeFirstSection;
