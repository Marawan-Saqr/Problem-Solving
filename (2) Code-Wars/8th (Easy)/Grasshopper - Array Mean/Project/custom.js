var findAverage = function (nums) {

  let result = nums.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result / nums.length;

}

console.log(findAverage([1, 3, 5, 7]));