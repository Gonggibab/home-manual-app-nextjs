import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import style from '../styles/components/Layout.module.scss';
import logo from '../images/logo/logo.svg';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className={style.nav}>
        <Link href="/">
          <a className={style.logo}>
            <Image src={logo} width={100} height={50} alt="사이트 로고" />
          </a>
        </Link>
        <Link href="/test">
          <motion.a className={style.a} whileHover={{ y: -1, scale: 1.05 }}>
            우리집 이야기
          </motion.a>
        </Link>
      </nav>

      <main>{children}</main>
    </>
  );
}

export default Layout;
