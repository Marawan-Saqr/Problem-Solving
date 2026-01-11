function sum_two_smallest_nums(arr) {

  let sortedNumbers = arr.sort((a, b)=> a - b);
  let [num1, num2] = sortedNumbers;
  return num1 + num2;

}



console.log(sum_two_smallest_nums([2, 5, 6, 7, 3]));