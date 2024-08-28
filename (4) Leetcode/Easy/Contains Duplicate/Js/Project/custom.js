var containsDuplicate = function(nums) {
  const numSet = new Set(nums);
  return numSet.size < nums.length;
}

console.log(containsDuplicate([1, 2, 1, 3]));