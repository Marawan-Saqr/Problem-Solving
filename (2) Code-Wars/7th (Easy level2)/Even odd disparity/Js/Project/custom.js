function solve(a){

  let numbersOnly = a.filter((element)=> {
    return typeof element === "number";
  });

  let counterEven = 0;
  let counterOdd = 0;

  for (let i = 0; i < numbersOnly.length; i++) {
    if (numbersOnly[i] % 2 === 0) {
      counterEven++;
    } else {
      counterOdd++;
    }
  }

  return counterEven - counterOdd;

}

console.log(solve([0,1,2,3]));