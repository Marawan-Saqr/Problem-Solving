function reverseWords(str) {

  let result = [];
  let splited = str.split(" ");
  for (let i = 0; i < splited.length; i++) {
    let reversed = splited[i].split("").reverse().join("");
    result.push(reversed);
  }
  return result.join(" ");

}

console.log(reverseWords("This is an example!"));