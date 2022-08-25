import { RefObject } from 'react';

export const onScroll = (ref: RefObject<HTMLElement>): number[][] => {
  const target = ref.current || document.body;

  const childs = target.childNodes as NodeListOf<HTMLElement>;

  const info: number[][] = new Array(childs.length);

  for (let i = 0; i < childs.length; i++) {
    const width = document.body.getBoundingClientRect().width;
    const height = childs[i].getBoundingClientRect().height;
    const y = childs[i].getBoundingClientRect().y;
    const yRatio = (height - y) / height;

    info[i] = [yRatio, width, height];
  }

  return info;
};
