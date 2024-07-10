function missingLetter(txt) {
  for (let i = 0; i < txt.length - 1; i++) {
    let currentCharCode = txt[i].charCodeAt(0);
    let nextCharCode = txt[i + 1].charCodeAt(0);

    if (nextCharCode - currentCharCode > 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return "No Missing Letter";
}

console.log(missingLetter("rsuv"));
