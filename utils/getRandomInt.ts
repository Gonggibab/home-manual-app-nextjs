export function getRandomInt(num: number, min: number, max: number) {
  let result = new Array(num);
  min = Math.ceil(min);
  max = Math.floor(max);

  for (let i = 0; i < num; i++) {
    result[i] = Math.floor(Math.random() * (max - min)) + min;
  }

  return result;
}
