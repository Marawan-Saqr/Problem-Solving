
function sum_two_smallest_nums(arr) {
  arr.sort(compare);

  function compare(a, b) {
    return a - b;
  }

  return arr[0] + arr[1];
}


console.log(sum_two_smallest_nums([2, 5, 6, 7, 3]));
console.log(sum_two_smallest_nums([7, 8, 60, 100]));
console.log(sum_two_smallest_nums([50, 1, 1,]));






















