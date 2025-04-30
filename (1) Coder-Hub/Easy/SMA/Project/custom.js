function average(values) {

  let lengthOfValues = values.length;
  let result = values.reduce((acc, current)=> {
      return acc + current;
  }, 0);

  return result / lengthOfValues;

}

console.log(average([2, 4, 9, 23, 435]));