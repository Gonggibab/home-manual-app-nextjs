import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowUpShort, BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import { copyToClip } from '../../utils/copyToClip';

import style from '../../styles/components/home/Footer.module.scss';
import logo from '../../images/logo/logo.svg';

function Footer() {
  const [copyResult, setCopyResult] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const variant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onEmailClicked = (
    text: string,
    setState: Dispatch<SetStateAction<string>>,
  ) => {
    copyToClip(text, setState);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  return (
    <div className={style.Footer}>
      <motion.button onClick={scrollToTop} whileHover={{ y: -3 }}>
        맨 위로 <BsArrowUpShort size={20} />
      </motion.button>
      <div className={style.info}>
        <div className={style.logo}>
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            alt="사이트 로고"
          />
        </div>
        <div className={style.contact}>
          <a
            href="https://www.instagram.com/baeksj385/"
            className={style.instagram}
          >
            <BsInstagram size={20} />
          </a>
          <button
            className={style.email}
            onClick={() =>
              onEmailClicked('qwaszxed1234@gmail.com', setCopyResult)
            }
          >
            <HiOutlineMail size={25} />
          </button>
        </div>
        <label>
          <label>hosted by Vercel</label>
          <label>created by Jinwoo Jeong </label>
        </label>
      </div>
      <motion.div
        className={style.copyResult}
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ type: 'ease' }}
        variants={variant}
      >
        {copyResult}
      </motion.div>
    </div>
  );
}

export default Footer;
