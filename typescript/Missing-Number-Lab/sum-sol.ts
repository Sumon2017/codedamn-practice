export let missingNumber: Function = (nums: number[]): number => {
  let length: number = nums.length;
  let expectedSum: number = (length * (length + 1)) / 2;
  for (let item of nums) expectedSum -= item;
  return expectedSum;
};

// Test

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
