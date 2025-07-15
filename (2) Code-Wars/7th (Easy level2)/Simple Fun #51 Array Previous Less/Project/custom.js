function arrayPreviousLess(arr) {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let last = i - 1;
    while(arr[last] >= arr[i]) {
      last--;
    }
    result.push(last >= 0 ? arr[last] : -1);
  }

  return result;

}


console.log(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3]));