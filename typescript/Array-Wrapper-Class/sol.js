class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    let sum = 0;
    for (let item of this.nums) sum += item;
    return sum;
  }

  toString() {
    return JSON.stringify(this.nums);
  }
}

//export default ArrayWrapper;

// test

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);

const obj = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj));
