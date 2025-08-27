function each(n, xs) {

  if (n === 0) {
    return [];
  }


  // For Positive Numbers
  if (n > 0) {
    let result = [];
    for (let i = n - 1; i < xs.length; i += n) {
      result.push(xs[i]);
    }
    return result;
  }


  // For Negative Numbers
  if (n < 0) {
    let result = [];
    let abs = Math.abs(n);
    for (let i = xs.length + n; i >= 0; i -= abs) {
      result.push(xs[i]);
    }
    return result;
  }


}



console.log(each(-2, [1, 2, 3, 4, 5, 6]));