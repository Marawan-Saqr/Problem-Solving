function shortcut (string) {

  let vowels = ["a", "e", "i", "o", "u"];

  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      result += "";
    } else {
      result += string[i];
    }
  }

  return result;

}

console.log(shortcut("hello"));