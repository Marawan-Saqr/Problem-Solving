function gimmeTheLetters(sp) {

  let start = sp[0].charCodeAt(0);
  let end = sp[2].charCodeAt(0);


  let result = "";
  for (let i = start; i <= end; i++) {
    result += String.fromCharCode(i);
  }

  return result;

}

console.log(gimmeTheLetters("a-z"));