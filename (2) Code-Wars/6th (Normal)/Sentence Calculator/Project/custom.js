function lettersToNumbers(s) {

  let smallAlphabetic = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let bigAlphabetic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // a - z => 1
  // A - Z => 2
  // 0 - 9 => his value
  // others => 0


  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (smallAlphabetic.includes(s[i])) {
      result += s[i].charCodeAt(0) - 97 + 1;
    } else if (bigAlphabetic.includes(s[i])) {
      result += (s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * 2;
    } else if (numbers.includes(s[i])) {
      result += Number(s[i]);
    } else {
      result += 0;
    }
  }

  return result;

}




console.log(lettersToNumbers("I Love You"));