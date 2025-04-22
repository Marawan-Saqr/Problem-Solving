function sum_even(arr) {

  let filtered = arr.filter((element)=> {
    return element % 2 === 0;
  })

  return filtered;

}

console.log(sum_even([11, 0, 5, 22]));