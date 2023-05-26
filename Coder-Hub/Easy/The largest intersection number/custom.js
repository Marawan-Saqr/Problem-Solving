function getBiggestShared(a, b) {
  let result = null;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        result = Math.max(result, a[i]);
      } 
    }
  }
  return result;
}



console.log(getBiggestShared([3, 10, 34, 50], [5, 0, 3, 1]));























