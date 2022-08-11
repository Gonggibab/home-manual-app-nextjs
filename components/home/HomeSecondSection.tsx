import { useEffect, useState } from 'react';

import { HomeSectionProps } from '../../pages';

import style from '../../styles/components/home/HomeSecondSection.module.scss';

function HomeSecondSection({ pageInfo }: HomeSectionProps) {
  const [test, setTest] = useState<number>(0);

  useEffect(() => {
    setTest(pageInfo);
  }, [pageInfo]);

  return (
    <div className={style.backgournd}>
      <h1>section2</h1>
      <h2>test: {test}</h2>
    </div>
  );
}

export default HomeSecondSection;
