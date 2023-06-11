function number_sum(num) {
let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}


console.log(number_sum(3));