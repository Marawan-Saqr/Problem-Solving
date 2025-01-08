var runningSum = function(nums) {

  let result = 0;
  let finalResult = [];

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
    finalResult.push(result);
  }

  return finalResult;

}

console.log(runningSum([1, 2, 3, 4]));