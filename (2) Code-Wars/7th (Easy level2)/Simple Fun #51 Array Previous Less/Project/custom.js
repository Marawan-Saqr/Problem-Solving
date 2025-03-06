function arrayPreviousLess(arr) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j] >= arr[i]) {
      j--;
    }
    result.push(j >= 0 ? arr[j] : -1);
  }

  return result;

}


console.log(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3]));