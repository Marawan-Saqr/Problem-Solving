function sum_two_smallest_nums(arr) {

  let sorted = arr.sort((a, b)=> a - b);
  let [num1, num2] = sorted;

  return num1 + num2;

}



console.log(sum_two_smallest_nums([2, 5, 6, 7, 3]));