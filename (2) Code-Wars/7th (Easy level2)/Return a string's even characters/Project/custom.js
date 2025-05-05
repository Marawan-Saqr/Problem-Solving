function evenChars(string) {

  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }

  let result = [];
  for (let i = 0; i < string.length; i++) {
    let target = i + 1;
    if (target % 2 === 0) {
      result.push(string[i]);
    }
  }

  return result;

}




console.log(evenChars("abcdefghijklm"));