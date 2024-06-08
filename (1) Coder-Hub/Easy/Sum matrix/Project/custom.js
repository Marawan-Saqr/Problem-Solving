function calculate_sum(lst) {
  let sum = 0;
  for(let i = 0; i < lst.length; i++) {
    if (lst[i] === 7) {
      return 0;
    } else {
      sum += lst[i];
    }
  }
  return sum;
}

console.log(calculate_sum([1,2,3,4,7]));


