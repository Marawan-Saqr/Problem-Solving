function solve(str) {

  let reversedString = str.split("").reverse().join("").replace(/\s+/g, '');

  let result = "";
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += " ";
    } else {
      result += reversedString[j];
      j++;
    }
  }

  return result;

}

console.log(solve("i love codewars"));