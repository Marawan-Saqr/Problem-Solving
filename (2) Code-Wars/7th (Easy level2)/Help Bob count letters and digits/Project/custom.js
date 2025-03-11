function countLettersAndDigits(input) {
  return input.replace(/[^a-zA-Z0-9]/g, '').length;
}

console.log(countLettersAndDigits("$~n MJIQ2"));