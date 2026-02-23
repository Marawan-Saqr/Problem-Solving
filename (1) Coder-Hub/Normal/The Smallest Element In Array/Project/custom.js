function smallest_number(arr) {

  let min = Math.min(...arr);
  return min;

}


console.log(smallest_number([13, 2, 1, 4, 106]));