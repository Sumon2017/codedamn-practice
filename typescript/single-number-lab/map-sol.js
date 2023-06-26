export function singleNumber(nums) {
  let mymap = new Map();
  for (let num of nums) {
    if (mymap.has(num)) mymap.set(num, 2);
    else mymap.set(num, 1);
  }
  let answer = -999;
  for (let num of nums) {
    if (mymap.get(num) == 1) answer = num;
  }
  return answer;
}
// test
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
