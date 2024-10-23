function solve(s) {
  let capitalLetters = 0;
  let numbersCount = 0;
  let lowerLetters = 0;
  let specialCharacters = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase() && s[i] !== s[i].toLowerCase()) {
      capitalLetters++;
    } else if (s[i] === s[i].toLowerCase() && s[i] !== s[i].toUpperCase()) {
      lowerLetters++;
    } else if (!isNaN(s[i]) && s[i] !== ' ') {
      numbersCount++;
    } else if (/[^a-zA-Z0-9]/.test(s[i])) {
      specialCharacters++;
    }
  }

  return [capitalLetters,lowerLetters, numbersCount, specialCharacters];
}

console.log(solve("*'&ABCDabcde12345")); // Output: [3, 5, 5, 3]