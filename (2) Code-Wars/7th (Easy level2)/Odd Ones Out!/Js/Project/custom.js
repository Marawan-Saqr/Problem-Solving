function oddOnesOut(nums) {

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        counter++;
      }
    }
    if (counter % 2 === 0) {
      result.push(nums[i]);
    }
  }


  return result;


}


console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));