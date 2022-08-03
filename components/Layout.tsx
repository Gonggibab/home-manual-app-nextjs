import Image from 'next/image';
import Link from 'next/link';

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
          <a className={style.a}>우리집 이야기</a>
        </Link>
      </nav>

      <main>{children}</main>
    </>
  );
}

export default Layout;
