function climb(n) {

  let result = [];

  for (let i = n; i > 0;) {

    result.push(i);
    if (i % 2 === 0) {
      i = i / 2;
    } else {
      i = (i - 1) / 2;
    }
  }

  return result.reverse();

}

console.log(climb(10));