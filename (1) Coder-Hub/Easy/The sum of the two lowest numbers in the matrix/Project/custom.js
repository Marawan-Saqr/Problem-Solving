function sum_two_smallest_nums(arr) {

  arr.sort();  // [3, 4, 60, 9]


  let smallestNumber = arr[0];
  let secondSmallest = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];              // 3
    }

    if (arr[i] < secondSmallest) {
      if (arr[i] === smallestNumber) {
        continue;
      } else {
        secondSmallest = arr[i];
      }
    }
  }


  return smallestNumber + secondSmallest;
}

console.log(sum_two_smallest_nums([7,8,60,100]));