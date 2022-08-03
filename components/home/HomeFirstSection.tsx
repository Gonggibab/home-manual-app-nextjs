import Image from 'next/image';

import style from '../../styles/components/home/HomeFirstSection.module.scss';
import image from '../../images/home/home_background.jpg';

function HomeFirstSection() {
  return (
    <div className={style.backgournd}>
      <div className={style.overlay}>
        <h1>
          우리집 <br />
          사용설명서
        </h1>
      </div>
      <Image
        src={image}
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
