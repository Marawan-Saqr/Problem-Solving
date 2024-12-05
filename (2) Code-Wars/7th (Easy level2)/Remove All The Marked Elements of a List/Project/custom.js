function findDigit(num, nth) {

  if (nth < 0 || nth === 0) {
    return -1;
  }

  let numberNeeded = 0;
  let reversed = "";
  let stringedNum = num.toString();
  let stringedNth = nth.toString();


  reversed = stringedNum.split("").reverse().join("");

  numberNeeded = reversed[stringedNth - 1];

  let finalResult = Number(numberNeeded);

  if (Number.isNaN(finalResult)) {
    return 0;
  } else {
    return finalResult;
  }


}

console.log(findDigit(65 , 0));