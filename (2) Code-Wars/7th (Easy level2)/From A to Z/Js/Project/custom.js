function gimmeTheLetters(sp) {

  let splited = sp.split("");
  let result = [];

  let firstAsciiValue = splited[0].charCodeAt(0);
  let secondAsciiValue = splited[splited.length - 1].charCodeAt(0);

  for (let i = firstAsciiValue; i <= secondAsciiValue; i++) {
    result.push(i);
  }

  let charArray = [];
  for (let j = 0; j < result.length; j++) {
    charArray.push(String.fromCharCode(result[j]));
  }

  return charArray.join("");

}

console.log(gimmeTheLetters("a-z"));