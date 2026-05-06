var containsDuplicate = function(nums) {

  let uniqueElements = [...new Set(nums)];
  console.log(uniqueElements);

  return uniqueElements.length !== nums.length;

}

console.log(containsDuplicate([1, 2, 3, 4, 1]));