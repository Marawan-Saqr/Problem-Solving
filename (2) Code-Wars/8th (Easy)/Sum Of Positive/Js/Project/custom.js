function positiveSum(arr) {

  let positivesOnly = arr.filter((element)=> {
    return element > 0;
  });

  let result = positivesOnly.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result;

}

console.log(positiveSum([1, 2, 3, 4, 5]));