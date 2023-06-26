export function singleNumber(nums: number[]): number {
  let mymap = new Map<number, number>();
  for (let num of nums) {
    if (mymap.has(num)) mymap.set(num, 2);
    else mymap.set(num, 1);
  }
  let answer: number = -999;
  for (let num of nums) {
    if (mymap.get(num) == 1) answer = num;
  }
  return answer;
}

// test

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
