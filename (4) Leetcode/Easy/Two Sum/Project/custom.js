var twoSum = function (nums, target) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        result.push(i, j);
        return result;
      }
    }
  }
};


console.log(twoSum([3, 2, 4], 6));