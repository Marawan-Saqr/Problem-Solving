function replace(s){

  let vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      result += "!";
    } else {
      result += s[i];
    }
  }

  return result;

}

console.log(replace("Hi!"));