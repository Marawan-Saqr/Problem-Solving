var removeElement = function(nums, val) {

  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;

}

console.log(removeElement[1, 3, 5, 3], 3);