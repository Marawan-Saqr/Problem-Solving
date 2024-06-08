function average(values) {

  let result = 0;

  for (let i = 0; i < values.length; i++) {
    result += values[i];
  }

  return result / values.length;

}

console.log(average([2, 4, 9, 23, 435]));