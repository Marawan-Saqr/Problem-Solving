var singleNumber = function(nums) {

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      result = nums[i];
    }
  }

  return result;

}


console.log(singleNumber([4, 1, 2, 1, 2]));