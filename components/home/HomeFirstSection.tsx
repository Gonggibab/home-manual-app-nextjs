import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { HomeSectionProps } from '../../pages';

import style from '../../styles/components/home/HomeFirstSection.module.scss';
import bgImg from '../../images/home/home-background.jpg';
import { BsGeoAltFill } from 'react-icons/bs';

function HomeFirstSection({ pageInfo }: HomeSectionProps) {
  const [test, setTest] = useState<number>(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTest(pageInfo);

    if (contentRef.current) {
      contentRef.current.style.opacity = `${2 - test * 1.2}`;
    }
    if (titleRef.current) {
      titleRef.current.style.transform = `translateY(${500 - test * 500}px)`;
    }
    if (imageRef.current) {
      imageRef.current.style.transform = `translateY(${1000 - test * 1000}px)`;
    }
  }, [pageInfo]);

  return (
    <div className={style.backgournd}>
      <div className={style.content} ref={contentRef}>
        <div className={style.overlay} ref={titleRef}>
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
        <div className={style.image} ref={imageRef}>
          <Image
            src={bgImg}
            alt="홈 배경 이미지"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeFirstSection;
