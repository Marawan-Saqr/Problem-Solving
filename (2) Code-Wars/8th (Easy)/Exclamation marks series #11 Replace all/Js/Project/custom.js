function replace(s){

  let vowelsChar = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (vowelsChar.includes(s[i])) {
      result += "!";
    } else {
      result += s[i];
    }
  }

  return result;

}

console.log(replace("aeiouAEIOU"));