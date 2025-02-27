function createArrayOfTiers(num) {

  let stringedNumber = num.toString();  // "420"
  let result = [];

  for (let i = 0; i < stringedNumber.length; i++) {
    if (i === 0) {
      result.push(stringedNumber[i]);
    } else {
      result.push(stringedNumber.slice(0, i + 1));
    }
  }

  return result;


}



console.log(createArrayOfTiers(2010));