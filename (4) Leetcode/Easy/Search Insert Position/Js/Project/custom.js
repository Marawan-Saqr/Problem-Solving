var searchInsert = function(nums, target) {

  let sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (nums.includes(target)) {
      return sorted.indexOf(target);
    } else {
      sorted.push(target);
      sorted = sorted.sort((a, b) => a - b);
      return sorted.indexOf(target);
    }
  }

}

console.log(searchInsert([1, 3, 5, 6], 2));