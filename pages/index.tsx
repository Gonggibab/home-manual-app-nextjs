import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';

import { onScroll } from '../utils/onScroll';
import { useScroll } from '../utils/hooks/useScroll';

import HomeFirstSection from '../components/home/HomeFirstSection';
import HomeSecondSection from '../components/home/HomeSecondSection';
import HomeThirdSection from '../components/home/HomeThirdSection';

export interface HomeSectionProps {
  pageInfo: number;
}

const Home: NextPage = () => {
  const [pageInfos, setPageInfos] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPageInfos(onScroll(ref));
  }, []);

  useScroll(() => {
    setPageInfos(onScroll(ref));
  });

  return (
    <div ref={ref}>
      <HomeFirstSection pageInfo={pageInfos[0]} />
      <HomeSecondSection pageInfo={pageInfos[1]} />
      <HomeThirdSection pageInfo={pageInfos[2]} />
    </div>
  );
};

export default Home;
