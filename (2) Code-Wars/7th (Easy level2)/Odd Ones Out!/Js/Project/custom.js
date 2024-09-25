function oddOnesOut(nums) {

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;

}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));