import { RefObject } from 'react';

export const onScroll = (ref: RefObject<HTMLElement>): number[] => {
  const target = ref.current || document.body;

  const childs = target.childNodes as NodeListOf<HTMLElement>;

  let info: number[] = new Array(childs.length);

  for (let i = 0; i < childs.length; i++) {
    const y = childs[i].getBoundingClientRect().y;
    const height = childs[i].getBoundingClientRect().height;
    const yPos = (height - y) / height;

    info[i] = yPos;
  }

  return info;
};
