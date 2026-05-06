var searchInsert = function(nums, target) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  nums.push(target);
  nums.sort((a, b)=> a - b);
  return nums.indexOf(target);

}

console.log(searchInsert([1, 3, 5, 6], 2));