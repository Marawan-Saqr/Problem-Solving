function reverseCase(s) {

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1] || s[i] === s[i - 1]) {
      if (s[i] === s[i].toUpperCase()) {
        result += s[i].toLowerCase();
      } else {
        result += s[i].toUpperCase();
      }
    } else {
      result += s[i];
    }
  }

  return result;

}

console.log(reverseCase("WWWWW"));