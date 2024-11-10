function dontGiveMeFive(start, end) {

  let result = 0;
  let numbersArray = [];

  for (let i = start; i <= end; i++) {
    if (i.toString().includes("5")) {
      continue;
    } else {
      numbersArray.push(i);
    }
  }

  console.log(numbersArray);
  return result = numbersArray.length;

}


console.log(dontGiveMeFive(1, 20));