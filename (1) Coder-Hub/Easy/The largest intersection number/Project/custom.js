function getBiggestShared(a, b) {

  let result = a[0];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j] && a[i] > result) {
        result = a[i];
      }
    }
  }

  return result;

}

console.log(getBiggestShared([90, 95], [90, 95]));