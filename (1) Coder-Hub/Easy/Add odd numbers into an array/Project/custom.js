function sumOdd(arr) {

  let filtered = arr.filter((number)=> {
    return number % 2 !== 0;
  }).reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return filtered;

}

console.log(sumOdd([3, 12, 6]));