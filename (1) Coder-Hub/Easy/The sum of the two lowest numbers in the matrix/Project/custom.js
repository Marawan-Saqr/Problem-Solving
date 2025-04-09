function sum_two_smallest_nums(arr) {

  let sorted = arr.sort((a, b)=> a - b);

  let [numberOne, numberTwo] = sorted;

  return numberOne + numberTwo;

}



console.log(sum_two_smallest_nums([2, 5, 6, 7, 3]));