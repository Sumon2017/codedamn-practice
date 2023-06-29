export const findDifference: Function = function (
  arr1: number[],
  arr2: number[]
): [number[], number[]] {
  let m1 = new Map<number, boolean>();
  let m2 = new Map<number, boolean>();
  let answer1: number[] = [];
  let answer2: number[] = [];
  arr1.forEach((val: number): void => {
    m1.set(val, true);
  });
  arr2.forEach((val: number): void => {
    m2.set(val, true);
  });
  for (let val of m1.keys()) {
    if (m2.has(val) === false) answer1.push(val);
  }
  for (let val of m2.keys()) {
    if (m1.has(val) === false) answer2.push(val);
  }
  return [answer1, answer2];
};
