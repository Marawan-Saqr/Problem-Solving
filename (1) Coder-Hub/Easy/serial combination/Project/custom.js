function number_sum(num) {

  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }

  return result;

}


console.log(number_sum(3));