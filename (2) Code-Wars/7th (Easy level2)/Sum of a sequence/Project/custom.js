const sequenceSum = (begin, end, step) => {

  if (begin > end) {
    return 0;
  }

  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;

}

console.log(sequenceSum(1, 5, 3));