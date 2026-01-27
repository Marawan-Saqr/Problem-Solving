function findAverage(array) {

  if (array.length === 0) {
    return 0;
  }

  let total = array.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return total / array.length;

}

console.log(findAverage([1, 1, 1]));