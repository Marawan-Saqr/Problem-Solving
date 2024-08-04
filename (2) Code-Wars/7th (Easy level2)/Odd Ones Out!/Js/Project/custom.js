function oddOnesOut(nums) {

  let counts = {};
  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  let result = [];
  for (let num of nums) {
    if (counts[num] % 2 === 0) {
      result.push(num);
    }
  }

  return result;

}

console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3]));