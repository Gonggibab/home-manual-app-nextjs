import { useRef } from 'react';
import type { NextPage } from 'next';

import useScroll from '../components/hooks/scroll';

import HomeFirstSection from '../components/home/HomeFirstSection';
import HomeSecondSection from '../components/home/HomeSecondSection';

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useScroll(ref);

  return (
    <div ref={ref}>
      <HomeFirstSection />
      <HomeSecondSection />
    </div>
  );
};

export default Home;
