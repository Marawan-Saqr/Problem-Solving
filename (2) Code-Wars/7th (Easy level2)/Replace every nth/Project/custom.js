function replaceNth(text, n, oldValue, newValue) {

  if (n <= 0) {
    return text;
  }

  let result = "";
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === oldValue) {
      counter++;
    }

    if (counter > n) {
      counter = 1;
    }

    if (text[i] === oldValue && counter === n) {
      result += newValue;
    } else {
      result += text[i];
    }
  }

  return result;

}




console.log(replaceNth("Vader said: No, I am your father!", 0, "a", "o"));