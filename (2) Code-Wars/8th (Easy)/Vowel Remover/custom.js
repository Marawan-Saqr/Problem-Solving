function shortcut (string) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (string.includes(vowels[i])) {
      string = string.replace(new RegExp(vowels[i], "ig"), "");
    }
  }
  return string;
}


console.log(shortcut("hello"));





