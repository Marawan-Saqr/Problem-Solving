function avgArray(arr) {

  let result = [];
  let sum = 0;
  for (let i = 0; i < arr[0].length; i++) {
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i];
    }
    result.push(sum / arr.length);
  }

  return result;

}


console.log(avgArray([ [2, 3, 9, 10, 7], [ 12, 6, 89, 45, 3], [ 9, 12, 56, 10, 34], [ 67, 23, 1, 88, 34] ]));