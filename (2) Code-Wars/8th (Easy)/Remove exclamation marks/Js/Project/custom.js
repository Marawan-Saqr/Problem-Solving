function removeExclamationMarks(s) {

  let newResult = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      newResult += s[i];
    }
  }

  return newResult;

}

console.log(removeExclamationMarks("Hello World!"));