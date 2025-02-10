function contamination(text, char){

  let result = "";

  for (let i = 0; i < text.length; i++) {
    let sum = text[i] = char;
    result += sum;
  }

  return result;

}

console.log(contamination("abc", "z"));