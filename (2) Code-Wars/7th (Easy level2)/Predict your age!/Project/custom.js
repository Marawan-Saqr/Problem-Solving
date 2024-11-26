function predictAge(age1, age2, age3, age4, age5, age6, age7, age8){

  let agesArray = [];

  agesArray.push(age1, age2, age3, age4, age5,age6, age7, age8);


  let result = 0;
  for (let i = 0; i < agesArray.length; i++) {
    result += agesArray[i] * agesArray[i];
  }


  let sqrted = Math.sqrt(result);

  let finalResult = sqrted / 2;

  return Math.floor(finalResult);

}


console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));