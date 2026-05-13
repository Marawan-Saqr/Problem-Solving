function getNumberFromString(s) {
  return Number(s.match(/\d+/g).join(""));
}

console.log(getNumberFromString("hell5o wor6ld"));