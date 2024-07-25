var findAverage = function(nums) {

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }

  return result / nums.length;

}

console.log(findAverage(1, 3, 5, 7));