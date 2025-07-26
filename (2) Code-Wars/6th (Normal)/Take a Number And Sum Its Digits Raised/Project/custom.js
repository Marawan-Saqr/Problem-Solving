function sumDigPow(a, b) {

  let result = [];
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum = 0;
    let stringed = i.toString();
    for (let j = 0; j < stringed.length; j++) {
      let value = Math.pow(Number(stringed[j]), j + 1);
      sum += value;
    }
    if (sum === i) {
      result.push(sum);
      sum = 0;
    }
  }

  return result;

}



console.log(sumDigPow(1, 10));