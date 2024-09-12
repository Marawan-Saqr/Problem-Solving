function sumMix(x){

  let convertedValue = [];
  let result = 0;

  for (let i = 0; i < x.length; i++) {
    convertedValue.push(parseInt(x[i]));
  }

  for (let j = 0; j < convertedValue.length; j++) {
    result += convertedValue[j];
  }

  return result;

}

console.log(sumMix([9, 3, '7', '3']));