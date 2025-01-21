function digits(num){

  let result = [];
  let sum = 0;
  let stringed = num.toString();

  for (let i = 0; i < stringed.length; i++) {
    sum = 0;
    for (let j = i + 1; j < stringed.length; j++) {
      sum = parseInt(stringed[i]) + parseInt(stringed[j]);
      result.push(sum);
    }
  }

  return result;

}



console.log(digits(12345));