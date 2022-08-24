import { Dispatch, SetStateAction } from 'react';

export const copyToClip = (
  text: string,
  setState: Dispatch<SetStateAction<string>>,
) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setState('클립보드에 이메일 주소가 복사되었습니다');
      })
      .catch(() => {
        setState('복사를 다시 시도해주세요');
      });
  } else {
    if (!document.queryCommandSupported('copy')) {
      setState('복사하기가 지원되지 않는 브라우저 입니다');
    }

    let tempElem = document.createElement('textarea');
    tempElem.value = text;
    document.body.appendChild(tempElem);

    tempElem.select();
    tempElem.focus();
    document.execCommand('copy');
    document.body.removeChild(tempElem);

    setState('클립보드에 이메일 주소가 복사되었습니다');
  }
};
