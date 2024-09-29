var twoSum = function(nums, target) {

  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }

  return result;

}

console.log(twoSum([3, 2, 4], 6));