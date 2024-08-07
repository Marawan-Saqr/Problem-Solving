function getNumberFromString(s) {

  let numbers = s.match(/\d+/g);

  return parseInt(numbers.join(""));

}

console.log(getNumberFromString("hell5o wor6ld"));