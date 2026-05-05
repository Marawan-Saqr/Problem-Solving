function highAndLow(numbers) {

  let splited = numbers.split(" ");

  let convertToNumbers = splited.map((element)=> {
    return Number(element);
  });

  let maxNumber = Math.max(...convertToNumbers);
  let minNumber = Math.min(...convertToNumbers);

  return `${maxNumber.toString()} ${minNumber.toString()}`;

}

console.log(highAndLow("1 2 3 4 5"));
