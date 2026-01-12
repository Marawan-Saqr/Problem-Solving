function getBiggestShared(a, b) {

  let firstNumber = a[0];  // 1
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        if (a[i] > firstNumber) {
          firstNumber = a[i];
        }
      }
    }
  }

  return firstNumber;

}

console.log(getBiggestShared([10, 2, 3, 12, 3], [54, 12, 33, 1]));