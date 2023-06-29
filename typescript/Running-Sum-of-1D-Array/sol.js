const runningSum = function (arr) {
  let answer = new Array(arr.length).fill(0);
  for (let i = 0; i < answer.length; i++) {
    if (i === 0) answer[i] = arr[i];
    else answer[i] = answer[i - 1] + arr[i];
  }
  return answer;
};
export default runningSum;
