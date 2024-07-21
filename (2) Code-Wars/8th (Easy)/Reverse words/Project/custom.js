function reverseWords(str) {

  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result.split(" ").reverse().join(" ");

}

console.log(reverseWords("This is an example!"));