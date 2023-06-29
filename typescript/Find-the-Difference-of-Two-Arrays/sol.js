export const findDifference = function (arr1, arr2) {
  let m1 = new Map();
  let m2 = new Map();
  let answer1 = [];
  let answer2 = [];
  arr1.forEach((val) => {
    m1.set(val, true);
  });
  arr2.forEach((val) => {
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
