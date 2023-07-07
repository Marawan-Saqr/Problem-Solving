function average(values) {
  let sum = 0;
  for(let i = 0 ; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}



console.log(average([2, 4, 9, 23, 435]));