var runningSum = function(nums) {

  let result = nums.reduce((acc, current) => {
    let lastSum = acc.length > 0 ? acc[acc.length - 1] : 0;
    acc.push(lastSum + current);
    return acc;
  }, []);

  return result;

}

console.log(runningSum([1, 2, 3, 4]));