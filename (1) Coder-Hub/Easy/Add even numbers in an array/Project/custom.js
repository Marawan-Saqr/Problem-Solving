function sum_even(arr) {

  let filteredNumbers = arr.filter((num)=> {
    return num % 2 === 0;
  }).reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return filteredNumbers;

}

console.log(sum_even([11, 0, 5, 22]));