function highAndLow(numbers) {
  let splited = numbers.split(" ");
  let newArray = splited.map(Number);

  let smallestNumber = newArray[0];
  let highestNumber = newArray[0];

  for (let i = 1; i < newArray.length; i++) {
    if (smallestNumber > newArray[i]) {
      smallestNumber = newArray[i];
    }
    if (highestNumber < newArray[i]) {
      highestNumber = newArray[i];
    }
  }

  return highestNumber + " " + smallestNumber;
}

console.log(highAndLow("1 2 3 4 5"));
