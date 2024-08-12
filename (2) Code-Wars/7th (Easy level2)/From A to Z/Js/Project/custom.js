function gimmeTheLetters(sp) {

  let splited = sp.split(""); // ['a', '-', 'z']
  let firstElement = splited[0].charCodeAt(0);
  let lastElement = splited[splited.length - 1].charCodeAt(0);
  let result = [];

  for (let i = firstElement; i <= lastElement; i++) {
    result.push(String.fromCharCode(i));
  }

  return result.join("");


}

console.log(gimmeTheLetters("a-z"));