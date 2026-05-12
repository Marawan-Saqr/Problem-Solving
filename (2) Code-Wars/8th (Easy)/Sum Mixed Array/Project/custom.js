function sumMix(x){

  let result = x.map((element)=> {
    return Number(element);
  }).reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result;

}

console.log(sumMix([9, 3, '7', '3']));