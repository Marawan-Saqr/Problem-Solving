function positiveSum(arr) {

  let result = arr.filter((element)=> {
    return element > 0;
  }).reduce((acc, current)=> {
    return acc + current;
  }, 0);


  return result;

}

console.log(positiveSum([1, 2, 3, 4, 5]));