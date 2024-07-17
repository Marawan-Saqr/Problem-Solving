function sumMix(x){

  let result = 0;

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      result += x[i];
    } else {
      result += parseInt(x[i]);
    }
  }

  return result;

}

console.log(sumMix([9, 3, '7', '3']));