import { useEffect, useState } from 'react';
import { HistoryTextBoxProps } from './HomeSecondSection';

import { getRandomInt } from '../../utils/getRandomInt';

import style from '../../styles/components/home/HomeSecondSection.module.scss';
import HistoryText from './HistoryText';

export interface HistoryTextProps {
  index: number;
  text: string;
  ratio: number;
  width: number;
  speedX: number;
}

function HistoryTextBox({ ratio, width }: HistoryTextBoxProps) {
  const [speedX, setSpeedX] = useState<number[]>([]);

  useEffect(() => {
    setSpeedX(getRandomInt(historyData.length, 10000, 12000));
  }, []);

  const renderTexts = historyData.map((data, index) => {
    return (
      <HistoryText
        key={index}
        index={index}
        text={data.history}
        ratio={ratio}
        width={width}
        speedX={speedX[index]}
      />
    );
  });

  return <div className={style.historyTextBox}>{renderTexts}</div>;
}

export default HistoryTextBox;

const historyData = [
  {
    history: '땅 구입',
  },
  {
    history: '매실·대추나무 심기',
  },
  {
    history: '통나무집 건설·증축',
  },
  {
    history: '부산집 정리 후 귀농',
  },
  {
    history: '돌담·대문 만들기',
  },
  {
    history: '통나무집 데크 증축',
  },
  {
    history: '울타리 만들고 오미자 덩굴 심기',
  },
  {
    history: '1·2회 매실 축제',
  },
  {
    history: '연못·미니 돌담 건설',
  },
];
