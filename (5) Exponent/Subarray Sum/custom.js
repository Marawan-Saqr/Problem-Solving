function hasGoodSubarray(nums, k) {

  if (nums === null) {
    return false;
  }

  if (nums.length < 2) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum % k === 0) {
        return true;
      }
    }
  }
  return false;

}

console.log(hasGoodSubarray([23, 2, 7, 4], 6));
