function reverseWords(str) {

  let splited = str.split(" ");
  let result = [];

  for (let i = 0; i < splited.length; i++) {
    result.push(splited[i].split("").reverse().join(""));
  }

  return result.join(" ");

}


console.log(reverseWords("  double  spaced  words  "));